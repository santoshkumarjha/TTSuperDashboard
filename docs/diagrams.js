exports.flow1 = `
flowchart TD
    K[Kick-off: access model, named users, federated identity] --> PM[PM: plans, reports, budget control]
    K --> RUN[Run services: A1 GTM, A2 GA4, A3 GSC/SEO/GEO, A4 Dashboards, A5 Training]
    K --> D11[D1.1 Server-side GTM evaluation, months 2-5]
    D11 --> M1[Measure unicef.org data]
    M1 --> M2[Azure design with UNICEF DID]
    M2 --> M3[Data-protection assessment]
    M3 --> REC[Written go/no-go to stakeholders]
    REC -->|No-go| STOP[Document findings, stay client-side under A1]
    REC -->|Documented UNICEF go| D12[D1.2 Implementation and migration]
    D12 --> S1[Tagging server on UNICEF-funded Azure]
    S1 --> S2[First-party subdomain]
    S2 --> S3[Tag migration and server-side consent]
    S3 --> S4[Parallel run]
    S4 --> S5{Parity met?}
    S5 -->|No| S3
    S5 -->|Yes| S6[Cutover, rollback ready]
    S6 --> S7[Handover and runbook]
    K --> D2[D2 Warehouse and AI layer, months 3-13]
    D2 --> W1[Ingest Cloudflare logs, GA4 BigQuery, social APIs]
    W1 --> W2[Unified data model]
    W2 --> W3[AI layer: plain-language query]
    W3 --> W4[Automated reporting and anomaly detection]
    W4 --> A4[Feeds A4 Looker Studio and A3 GEO reporting]`;

exports.flow2 = `
flowchart LR
    U[unicef.org and 176 sites] --> WEB[Web GTM container]
    CMP[Consent mode / CMP] --> WEB
    WEB -->|Phase 1 client-side| GA4[GA4, 180+ properties]
    WEB -->|After go: first-party endpoint| SGTM[Server-side GTM on UNICEF Azure]
    CMP -->|consent signals| SGTM
    SGTM --> GA4
    SGTM --> META[Meta CAPI]
    SGTM --> ADS[Google Ads links]
    SGTM --> PIX[Other pixels]
    GA4 --> BQ[(BigQuery GA4 export)]
    CF[Cloudflare logs] --> RAW[(Raw zone)]
    SOC[Social APIs] --> RAW
    BQ --> MODEL[(Unified data model)]
    RAW --> MODEL
    GSC[Search Console, 176 sites] --> LS[Looker Studio, 150+ offices]
    GEO[AI-search visibility] --> LS
    MODEL --> AI[AI layer: NL query, anomalies, auto reports]
    MODEL --> LS
    AI --> ALERT[Alerts and scheduled reports]
    AI --> LS`;

exports.flow3 = `
flowchart TD
    CR[Change request] --> TRI[Triage and impact check]
    TRI --> BUILD[Build in GTM workspace]
    BUILD --> STAGE[Stage test]
    STAGE -->|Fail| BUILD
    STAGE -->|Pass| APP[UNICEF approval]
    APP --> PUB[Publish and version]
    PUB --> MON[Data-quality monitoring in GA4]
    MON -->|Issue| CR
    NP[New GA4 property request] --> CFG[Configure: Ads link, BigQuery, consent]
    CFG --> GOV[Register in governance inventory]
    GOV --> MON
    SM[Sitemap and GSC error scan] --> ROUTE[Route errors to site owners]
    ROUTE --> TRACK[Track to closure]
    TRACK --> RPT[Monthly report]
    MON --> RPT
    RPT --> PM[PM report and budget control]`;
