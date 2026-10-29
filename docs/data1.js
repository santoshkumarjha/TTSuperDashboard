exports.scope = [
  ["D1.1", "Server-side GTM: evaluation and recommendation", "One-off", "Measured unicef.org data, Azure design with UNICEF DID, data-protection assessment, written go/no-go presented to stakeholders"],
  ["D1.2", "Server-side GTM: implementation and migration", "One-off (only if go)", "Tagging server, first-party subdomain, tag migration, server-side consent, parallel run, cutover and rollback, handover"],
  ["D2", "Unified data warehouse with AI analytics layer", "One-off", "Cloudflare logs, GA4 in BigQuery, social analytics in one data model; plain-language querying; automated reporting and anomaly detection"],
  ["A1", "GTM and tracking infrastructure", "Monthly", "Container review, change requests with stage testing, pixels, Meta CAPI, consent mode, cross-domain guidance"],
  ["A2", "Google Analytics 4", "Monthly", "Governance of 180+ properties, new property requests, Google Ads links, BigQuery datasets, data-quality monitoring"],
  ["A3", "Search Console and SEO/GEO tooling", "Monthly", "176 sites, access governance, sitemaps, error routing, SEO platform setup, AI-search visibility across Google AI Overviews, ChatGPT, Gemini, Perplexity, Copilot"],
  ["A4", "Dashboards and reporting", "Monthly", "Looker Studio for 150+ offices, cross-channel SEO, GEO and campaign reporting"],
  ["A5", "Capacity building and training", "Monthly", "Up to 5 hours per quarter, recordable, materials shared; ad hoc advisory; trend research"],
  ["PM", "Project management", "Monthly", "Dedicated; single point of contact; project plans, regular reports, budget control"],
];

exports.decisions = [
  ["Server-side hosting", "Azure, funded by UNICEF, with UNICEF DID. Vendor designs and configures.", "GTM/GA4 lead"],
  ["Warehouse", "BigQuery is the core store. Cloudflare log ingestion and social API pipelines feed one model.", "Data engineering lead"],
  ["AI layer", "Only UNICEF-approved services; no training on UNICEF data.", "Data engineering / AI lead, Legal"],
  ["SEO/GEO tooling", "Licences procured by UNICEF unless the commercial proposal says otherwise.", "SEO/GEO lead, Finance"],
  ["Access", "UNICEF-owned accounts, named vendor users on federated identity.", "Information security"],
];

exports.recon = [
  ["One-off effort", "90-135 days total, AI proof of concept only, full server-side migration excluded", "D1.1 30-45, D1.2 60-90, D2 180-300: roughly 270-435 days", "The tender lists D1.2 and D2 as priced deliverables, so a proof of concept alone risks scoring poorly on Criteria 2 and 5. Agree the scope boundary with technical owners and state it as an assumption"],
  ["Monthly effort", "30-44 days", "About 35-53 days", "Reconcile role by role once team availability is known"],
  ["Timeline", "12 weeks to first release, scale-out months 4-6", "Server-side evaluation months 2-5, warehouse months 3-13", "Align with the two-page plan; the longer warehouse timeline is more realistic for a global build"],
  ["Company background", "Refers to your .NET architecture and API experience", "No information about your company", "Confirm accuracy. Relevance is to data integration and the AI layer, not the four-year GA4/GTM/SEO experience gate"],
  ["Minimum technical score", "60/100", "RFPS says 60 of 70; TOR says 60 of 100", "State as an assumption"],
];
