"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11818],{56841:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=d(74848),t=d(28453);const r={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/IndustryRiskRecordV5",title:"IndustryRiskRecordV5",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/IndustryRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutureRiskSummaryV5",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/FutureRiskSummaryV5/"},next:{title:"OptionCorpActionRecordV5",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/risk-v5/IndustryRiskRecordV5",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(s.p,{children:"IndustryRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"4740-risk-v5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SystemData"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRRisk"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accnt"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"currency"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"code"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"SR assigned client firm"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"vegaLong"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of long vega symbol positionssumsrsvega if srsvega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"vegaShort"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of short vega symbol positions sumsrsvega if srsvega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wVegaLong"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of long weighted vega symbol positionssumsrswVega if srswVega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wVegaShort"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of short weighted vega symbol positions sumsrswVega if srswVega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVegaLong"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of long time weighted vega symbol positionssumsrswtVega if srswtVega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVegaShort"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of short time weighted vega symbol positions sumsrswtVega if srswtVega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"thetaLong"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of long vega symbol positionssumsrstheta if srstheta  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"thetaShort"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of short vega symbol positions sumsrstheta if srstheta  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rhoLong"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of long rho symbol positionssumsrsrho if srsrho  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rhoShort"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sum of short rho symbol positions sumsrsrho if srsrho  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ivolLn"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"vega weighted average symbol ivol where srsvega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ivolSh"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"vega weighted average symbol ivol where srsvega  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeDd"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate Dd Time Weighted VegasumwtVega if oprxde  030"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeDn"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate Dn Time Weighted VegasumwtVega if 030  oprxde  010"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeAt"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate At Time Weighted VegasumwtVega if absoprxde  010"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeUp"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate Up Time Weighted VegasumwtVega if 010  oprxde  030"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeDu"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate Du Time Weighted VegasumwtVega if 030  oprxde"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeM1"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate M1 Time Weighted VegasumwtVega if days  10"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeM2"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate M2 Time Weighted VegasumwtVega if 10  days  25"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeM3"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate M3 Time Weighted VegasumwtVega if 25  days  65"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeM4"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate M4 Time Weighted VegasumwtVega if 65  days  130"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wtVeM5"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate M5 Time Weighted VegasumwtVega if 130  days"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ddelta"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"net deltasumsrsddelta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"numSymbols"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"count of srs records being aggregated"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"absCurSh"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"absolute number of account shares CLR  tradessumsrsopShAbsCur"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"absCurCn"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"absolute number of account option contracts CLR  tradessumsrsopCnAbsCur"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"premOvPar"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"aggregate premium over parity for the option positionsumsrspremOvPar"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stPnlMid"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"stock pnl using SR marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stPnlClr"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"stock pnl using CLR marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opPnlVol"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"options pnl using SR vol marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opPnlMid"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"options pnl using SR mid marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opPnlClr"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"options pnl using CLR mid marks"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opDayVega"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option vega traded today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opDayWVega"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option vol weighted vega traded today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opDayTVega"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option time weighted vega traded today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opDayWtVega"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option vol time weighted vega traded today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opDayTheta"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option theta traded today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opEdgeOpened"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option theo edge opened today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opEdgeClosed"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option theo edge closed today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlDn"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option delta neutral pnlsumsrspnlDn"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlDe"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option delta pnlsumsrspnlDe"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlSl"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option vegadelta pnlsumsrspnlSl"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlGa"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option gamma pnlsumsrspnlGa"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlTh"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option theta pnlsumsrspnlTh"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlVe"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option vega pnlsumsrspnlVe"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlVo"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option volga pnlsumsrspnlVo"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlVa"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option vanna pnlsumsrspnlVa"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlDDiv"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option DDiv pnlsumsrspnlDDiv"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlSDiv"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option SDiv pnlsumsrspnlSDiv"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlRate"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option Rate pnlsumsrspnlRate"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlErr"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option unexplained error pnlsumsrspnlErr"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlTe"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option theo edge pnlsumsrspnlTe"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlLn"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option pnl from symbol positions with vega"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pnlSh"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"option pnl from symbol positions with vega"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tEdge"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"aggregate option theo edgesumsrstEdge"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tEdgeMult"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"denominator for computing edge per unitsumsrstEdgeMult"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tEdgePr"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"aggregate option theo edge prior periodsumsrstEdgePr"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tEdgeMultPr"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"enominator for computing edge per unit prior periodsumsrstEdgeMultPr"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"posTEdgePnl"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"aggregate pnl positive edge symbolssumsrsposTEdgePnl"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"negTEdgePnl"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"aggregate pnl negative edge symbolssumsrsnegTEdgePnl"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"badTEdgePnl"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"aggregate pnl no theo edge symbolssumsrsbadTEdgePnl"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu90"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd90"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu50"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd50"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu15"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd15"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu10"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd10"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu05"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd05"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu1e"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 1x implied earn move vol ramp out"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd1e"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 1x implied earn move vol ramp out"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsu2e"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 2x implied earn move vol ramp out"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRsd2e"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 2x implied earn move vol ramp out"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRearn"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide vol earn ramp out no uPrc move"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VaRcash"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 30 vol  001 6mn deal close delta neutral"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hcCnt"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"count of haircut  00 symbols"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"haircut25"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"haircut 25 minimumcn act basis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"haircut37"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"haircut 37 minimumcn act basis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lastActivity"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accnt"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"currency"}),(0,n.jsx)(s.td,{children:"2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"code"}),(0,n.jsx)(s.td,{children:"3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"4"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgIndustryRiskRecordV5` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `currency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `code` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `vegaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long vega symbol positions;=sum(+srs.vega) if srs.vega > 0',\n    `vegaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short vega symbol positions;= sum(-srs.vega) if srs.vega < 0',\n    `wVegaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long weighted vega symbol positions;=sum(+srs.wVega) if srs.wVega > 0',\n    `wVegaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short weighted vega symbol positions;= sum(-srs.wVega) if srs.wVega < 0',\n    `wtVegaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long time weighted vega symbol positions;=sum(+srs.wtVega) if srs.wtVega > 0',\n    `wtVegaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short time weighted vega symbol positions;= sum(-srs.wtVega) if srs.wtVega < 0',\n    `thetaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long vega symbol positions;=sum(+srs.theta) if srs.theta > 0',\n    `thetaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short vega symbol positions;= sum(-srs.theta) if srs.theta < 0',\n    `rhoLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long rho symbol positions;=sum(+srs.rho) if srs.rho > 0',\n    `rhoShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short rho symbol positions;= sum(-srs.rho) if srs.rho < 0',\n    `ivolLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega weighted average symbol ivol where srs.vega > 0',\n    `ivolSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega weighted average symbol ivol where srs.vega < 0',\n    `wtVeDd` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30',\n    `wtVeDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10',\n    `wtVeAt` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10',\n    `wtVeUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30',\n    `wtVeDu` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde',\n    `wtVeM1` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M1 Time Weighted Vega;=sum[wtVega] if days < 10',\n    `wtVeM2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M2 Time Weighted Vega;=sum[wtVega] if 10 < days < 25',\n    `wtVeM3` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M3 Time Weighted Vega;=sum[wtVega] if 25 < days < 65',\n    `wtVeM4` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M4 Time Weighted Vega;=sum[wtVega] if 65 < days < 130',\n    `wtVeM5` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M5 Time Weighted Vega;=sum[wtVega] if 130 < days',\n    `ddelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'net $delta;=sum(srs.ddelta)',\n    `numSymbols` INT NOT NULL DEFAULT 0 COMMENT 'count of srs records being aggregated',\n    `absCurSh` INT NOT NULL DEFAULT 0 COMMENT 'absolute number of account shares (CLR + trades);=sum(srs.opShAbsCur)',\n    `absCurCn` INT NOT NULL DEFAULT 0 COMMENT 'absolute number of account option contracts (CLR + trades);=sum(srs.opCnAbsCur)',\n    `premOvPar` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate premium over parity for the option position;=sum(srs.premOvPar)',\n    `stPnlMid` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock pnl (using SR marks)',\n    `stPnlClr` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock pnl (using CLR marks)',\n    `opPnlVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'options pnl (using SR vol marks)',\n    `opPnlMid` FLOAT NOT NULL DEFAULT 0 COMMENT 'options pnl (using SR mid marks)',\n    `opPnlClr` FLOAT NOT NULL DEFAULT 0 COMMENT 'options pnl (using CLR mid marks)',\n    `opDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega traded today',\n    `opDayWVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (vol weighted) vega traded today',\n    `opDayTVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (time weighted) vega traded today',\n    `opDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (vol time weighted) vega traded today',\n    `opDayTheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta traded today',\n    `opEdgeOpened` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theo edge opened today',\n    `opEdgeClosed` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theo edge closed today',\n    `pnlDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta neutral pnl;=sum(srs.pnlDn)',\n    `pnlDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta pnl;=sum(srs.pnlDe)',\n    `pnlSl` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega/delta pnl;=sum(srs.pnlSl)',\n    `pnlGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma pnl;=sum(srs.pnlGa)',\n    `pnlTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta pnl;=sum(srs.pnlTh)',\n    `pnlVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega pnl;=sum(srs.pnlVe)',\n    `pnlVo` FLOAT NOT NULL DEFAULT 0 COMMENT 'option volga pnl;=sum(srs.pnlVo)',\n    `pnlVa` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vanna pnl;=sum(srs.pnlVa)',\n    `pnlDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'option DDiv pnl;=sum(srs.pnlDDiv)',\n    `pnlSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'option SDiv pnl;=sum(srs.pnlSDiv)',\n    `pnlRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'option Rate pnl;=sum(srs.pnlRate)',\n    `pnlErr` FLOAT NOT NULL DEFAULT 0 COMMENT 'option unexplained (error) pnl;=sum(srs.pnlErr)',\n    `pnlTe` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theo edge pnl;=sum(srs.pnlTe)',\n    `pnlLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'option pnl from symbol positions with +vega',\n    `pnlSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'option pnl from symbol positions with -vega',\n    `tEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate option theo edge;=sum(srs.tEdge)',\n    `tEdgeMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'denominator for computing edge per unit;=sum(srs.tEdgeMult)',\n    `tEdgePr` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate option theo edge (prior period);=sum(srs.tEdgePr)',\n    `tEdgeMultPr` FLOAT NOT NULL DEFAULT 0 COMMENT 'enominator for computing edge per unit (prior period);=sum(srs.tEdgeMultPr)',\n    `posTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate pnl (positive edge symbols);=sum(srs.posTEdgePnl)',\n    `negTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate pnl (negative edge symbols);=sum(srs.negTEdgePnl)',\n    `badTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate pnl (no theo edge symbols);=sum(srs.badTEdgePnl)',\n    `VaRsu90` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 90%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.90))',\n    `VaRsd90` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 90%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.90))',\n    `VaRsu50` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 50%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.50))',\n    `VaRsd50` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 50%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.50))',\n    `VaRsu15` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 15%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.15))',\n    `VaRsd15` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 15%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.15))',\n    `VaRsu10` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 10%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.10))',\n    `VaRsd10` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 10%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.10))',\n    `VaRsu05` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 5%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.05))',\n    `VaRsd05` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 5%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.05))',\n    `VaRsu1e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 1x implied earn move, vol ramp out',\n    `VaRsd1e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 1x implied earn move, vol ramp out',\n    `VaRsu2e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 2x implied earn move, vol ramp out',\n    `VaRsd2e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 2x implied earn move, vol ramp out',\n    `VaRearn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: vol earn ramp out (no uPrc move)',\n    `VaRcash` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 30%, vol = 0.01, 6mn deal close (delta neutral)',\n    `hcCnt` FLOAT NOT NULL DEFAULT 0 COMMENT 'count of haircut > $0.0 symbols',\n    `haircut25` FLOAT NOT NULL DEFAULT 0 COMMENT 'haircut ($25 minimum/cn) [act basis]',\n    `haircut37` FLOAT NOT NULL DEFAULT 0 COMMENT 'haircut ($37 minimum/cn) [act basis]',\n    `lastActivity` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`accnt`,`currency`,`code`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='IndustryRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute.';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `currency`,\n    `code`,\n    `clientFirm`,\n    `vegaLong`,\n    `vegaShort`,\n    `wVegaLong`,\n    `wVegaShort`,\n    `wtVegaLong`,\n    `wtVegaShort`,\n    `thetaLong`,\n    `thetaShort`,\n    `rhoLong`,\n    `rhoShort`,\n    `ivolLn`,\n    `ivolSh`,\n    `wtVeDd`,\n    `wtVeDn`,\n    `wtVeAt`,\n    `wtVeUp`,\n    `wtVeDu`,\n    `wtVeM1`,\n    `wtVeM2`,\n    `wtVeM3`,\n    `wtVeM4`,\n    `wtVeM5`,\n    `ddelta`,\n    `numSymbols`,\n    `absCurSh`,\n    `absCurCn`,\n    `premOvPar`,\n    `stPnlMid`,\n    `stPnlClr`,\n    `opPnlVol`,\n    `opPnlMid`,\n    `opPnlClr`,\n    `opDayVega`,\n    `opDayWVega`,\n    `opDayTVega`,\n    `opDayWtVega`,\n    `opDayTheta`,\n    `opEdgeOpened`,\n    `opEdgeClosed`,\n    `pnlDn`,\n    `pnlDe`,\n    `pnlSl`,\n    `pnlGa`,\n    `pnlTh`,\n    `pnlVe`,\n    `pnlVo`,\n    `pnlVa`,\n    `pnlDDiv`,\n    `pnlSDiv`,\n    `pnlRate`,\n    `pnlErr`,\n    `pnlTe`,\n    `pnlLn`,\n    `pnlSh`,\n    `tEdge`,\n    `tEdgeMult`,\n    `tEdgePr`,\n    `tEdgeMultPr`,\n    `posTEdgePnl`,\n    `negTEdgePnl`,\n    `badTEdgePnl`,\n    `VaRsu90`,\n    `VaRsd90`,\n    `VaRsu50`,\n    `VaRsd50`,\n    `VaRsu15`,\n    `VaRsd15`,\n    `VaRsu10`,\n    `VaRsd10`,\n    `VaRsu05`,\n    `VaRsd05`,\n    `VaRsu1e`,\n    `VaRsd1e`,\n    `VaRsu2e`,\n    `VaRsd2e`,\n    `VaRearn`,\n    `VaRcash`,\n    `hcCnt`,\n    `haircut25`,\n    `haircut37`,\n    `lastActivity`,\n    `timestamp`\nFROM `SRRisk`.`MsgIndustryRiskRecordV5`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') */ \n    `currency` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `code` = 'Example_code'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,n.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='IndustryRiskRecordV5' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>l});var n=d(96540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);