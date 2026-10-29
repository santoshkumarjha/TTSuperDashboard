exports.inputs = [
  ["Bid lead", "Go/no-go; named prime contractor entity; partner decision for D1, D2 and A3", "Whole proposal", "Kick-off"],
  ["Bid lead", "Annexes C2, C3 and full C bis; UNGM status; business registration", "Pricing and eligibility", "Immediately"],
  ["Project Manager candidate", "CV, availability and dedication percentage; recent comparable engagements", "Mandatory gate 2; Criterion 1", "+4 days"],
  ["GTM/GA4 lead", "Largest tag and property estate managed; audit and automation tooling; consent mode and Meta CAPI examples; server-side GTM projects, hosting cloud and results", "A1, A2, D1.1, D1.2; Criterion 5(a)(b)", "+4 days"],
  ["GTM/GA4 lead", "Task-level day estimates per activity and per deliverable", "Annex C1 bis", "+8 days"],
  ["SEO/GEO lead", "Largest Search Console estate managed; platforms used; GEO monitoring tools evaluated or deployed; benchmark examples", "A3; Criterion 5(c)", "+4 days"],
  ["SEO/GEO lead", "Day estimates and tool licence assumptions (who pays)", "Annex C1 bis", "+8 days"],
  ["Data engineering lead", "BigQuery and Azure experience; warehouse designs; Cloudflare log ingestion experience; expected data volumes and refresh needs", "D2; BigQuery cost model", "+4 days"],
  ["Data engineering / AI lead", "AI layer design, model hosting choice, data-governance controls, restrictions on third-party model use", "D2; Annex B5 data-use rules", "+8 days"],
  ["BI lead", "Looker Studio template examples, scale of rollout, support model for 150+ offices", "A4", "+8 days"],
  ["Training lead", "Training samples, delivery formats, languages", "A5", "+8 days"],
  ["Information security", "Completed section 10 matrix with evidence; certificates; pen-test reports; incident plan; policy on staff use of AI assistants", "Mandatory gate 3", "+4 days"],
  ["Legal", "Position on GTCs, LTA-S and DSA deviations; partner contract terms; insurance; indemnity", "Criterion 4; risk", "+10 days"],
  ["Finance", "Rate card by role; inflation and FX treatment; partner markup; contingency within capped days; early-payment discount decision", "Annexes C1 bis, C2", "+10 days"],
  ["Account/commercial", "Case study candidates, reference contacts with written consent, UN or international organisation work", "Criteria 1 and 3; Annex B1", "+4 days"],
];

exports.assumptions = [
  "Access model: UNICEF-owned accounts with named vendor users on federated identity.",
  "Azure subscription for server-side GTM is provided and funded by UNICEF; vendor designs and configures.",
  "Warehouse sources are limited to Cloudflare logs, GA4 BigQuery exports and agreed social platform APIs; further sources are change requests.",
  "The AI layer runs only on UNICEF-approved services and does not train on UNICEF data.",
  "SEO/GEO platform licences are procured by UNICEF unless stated otherwise in the commercial proposal.",
  "Server-side GTM implementation proceeds only after UNICEF's documented go decision.",
  "Training is capped at 5 hours per quarter, as in the TOR.",
];
