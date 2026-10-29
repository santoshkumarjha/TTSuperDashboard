const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");
const { H1, H2, P, B, code, table } = require("./helpers");
const { flow1, flow2, flow3 } = require("./diagrams");
const { scope, decisions, recon } = require("./data1");
const { inputs, assumptions } = require("./data2");

const kids = [
  new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Technical Flow Document: UNICEF Web Analytics Tender")] }),
  P("Scope: D1.1, D1.2, D2, A1-A5 and PM (TOR Section III). Diagrams are supplied as Mermaid source; paste into mermaid.live, GitHub, Notion or VS Code to render. Statements marked (assumption) come from section 14.4."),
  H1("1. Scope to be priced and delivered"),
  table(["Ref", "Scope item", "Type", "Key facts from the tender"], scope),
  P("The tender prices the three one-off deliverables as separate line items, so each needs its own task-level estimate in Annex C1 bis."),
  H1("2. Delivery workflow (phasing and gates)"),
  ...code(flow1),
  H2("Gate rules"),
  B("D1.2 starts only after UNICEF's documented go decision (assumption 6)."),
  B("D2 sources are limited to Cloudflare logs, GA4 BigQuery exports and agreed social APIs; anything else is a change request (assumption 3)."),
  B("Training is capped at 5 hours per quarter (assumption 7)."),
  H1("3. Data flow diagram: current and target state"),
  ...code(flow2),
  H1("4. Run-service workflow (A1-A5, monthly)"),
  ...code(flow3),
  H1("5. Key technical decisions and owners"),
  table(["Area", "Decision", "Owner input needed"], decisions),
  H1("6. Reconciling the second assessment with this document"),
  table(["Topic", "Second assessment", "This document", "Action"], recon),
  P("The second assessment is consistent with this document on partner model, phasing and security approach."),
  H1("7. Inputs required, by owner"),
  table(["Owner", "Input needed", "Used for", "Needed by"], inputs),
  H1("8. Stated assumptions (clarification window closed)"),
  ...assumptions.map((t, i) => P(`${i + 1}. ${t}`)),
  H2("Additional proposal assumptions"),
  B("One-off scope is D1.1, D1.2 and D2 in full (about 270-435 days); a proof of concept alone is not sufficient. Confirm with technical owners."),
  B("Timeline: server-side evaluation months 2-5; warehouse months 3-13."),
  B("Minimum technical score taken as 60/100 per the TOR (RFPS says 60 of 70)."),
  B("Monthly effort reconciled role by role once team availability is known."),
];

Packer.toBuffer(new Document({ sections: [{ children: kids }] })).then(b => {
  fs.writeFileSync("/workspace/docs/UNICEF_Technical_Flow_Document.docx", b);
  console.log("ok");
});
