"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24439],{27697:(d,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=e(74848),r=e(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/IndustryRiskRecordV5",title:"IndustryRiskRecordV5",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/IndustryRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/IndustryRiskRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutureRiskSummaryV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/FutureRiskSummaryV5/"},next:{title:"OptionCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(d){const s={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRRisk"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accnt"}),(0,t.jsx)(s.td,{children:"VARCHAR(16)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"currency"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"VARCHAR(16)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"VARCHAR(16)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"riskServerCode"}),(0,t.jsx)(s.td,{children:"VARCHAR(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"risk server that published this record"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"vegaLong"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of long vega symbol positionssumsrsvega if srsvega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"vegaShort"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of short vega symbol positions sumsrsvega if srsvega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wVegaLong"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of long weighted vega symbol positionssumsrswVega if srswVega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wVegaShort"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of short weighted vega symbol positions sumsrswVega if srswVega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVegaLong"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of long time weighted vega symbol positionssumsrswtVega if srswtVega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVegaShort"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of short time weighted vega symbol positions sumsrswtVega if srswtVega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"thetaLong"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of long vega symbol positionssumsrstheta if srstheta  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"thetaShort"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of short vega symbol positions sumsrstheta if srstheta  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rhoLong"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of long rho symbol positionssumsrsrho if srsrho  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rhoShort"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sum of short rho symbol positions sumsrsrho if srsrho  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ivolLn"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"vega weighted average symbol ivol where srsvega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ivolSh"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"vega weighted average symbol ivol where srsvega  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeDd"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate Dd Time Weighted VegasumwtVega if oprxde  030"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeDn"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate Dn Time Weighted VegasumwtVega if 030  oprxde  010"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeAt"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate At Time Weighted VegasumwtVega if absoprxde  010"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeUp"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate Up Time Weighted VegasumwtVega if 010  oprxde  030"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeDu"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate Du Time Weighted VegasumwtVega if 030  oprxde"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeM1"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate M1 Time Weighted VegasumwtVega if days  10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeM2"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate M2 Time Weighted VegasumwtVega if 10  days  25"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeM3"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate M3 Time Weighted VegasumwtVega if 25  days  65"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeM4"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate M4 Time Weighted VegasumwtVega if 65  days  130"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wtVeM5"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate M5 Time Weighted VegasumwtVega if 130  days"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ddelta"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"net deltasumsrsddelta"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"numSymbols"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"count of srs records being aggregated"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"absCurSh"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"absolute number of account shares CLR  tradessumsrsopShAbsCur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"absCurCn"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"absolute number of account option contracts CLR  tradessumsrsopCnAbsCur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"premOvPar"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"aggregate premium over parity for the option positionsumsrspremOvPar"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"stPnlMid"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"stock pnl using SR marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"stPnlClr"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"stock pnl using CLR marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opPnlVol"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"options pnl using SR vol marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opPnlMid"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"options pnl using SR mid marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opPnlClr"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"options pnl using CLR mid marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opDayVega"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option vega traded today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opDayWVega"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option vol weighted vega traded today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opDayTVega"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option time weighted vega traded today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opDayWtVega"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option vol time weighted vega traded today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opDayTheta"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option theta traded today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opEdgeOpened"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option theo edge opened today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opEdgeClosed"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option theo edge closed today"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlDn"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option delta neutral pnlsumsrspnlDn"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlDe"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option delta pnlsumsrspnlDe"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlSl"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option vegadelta pnlsumsrspnlSl"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlGa"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option gamma pnlsumsrspnlGa"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlTh"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option theta pnlsumsrspnlTh"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlVe"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option vega pnlsumsrspnlVe"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlVo"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option volga pnlsumsrspnlVo"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlVa"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option vanna pnlsumsrspnlVa"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlDDiv"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option DDiv pnlsumsrspnlDDiv"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlSDiv"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option SDiv pnlsumsrspnlSDiv"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlRate"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option Rate pnlsumsrspnlRate"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlErr"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option unexplained error pnlsumsrspnlErr"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlTe"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option theo edge pnlsumsrspnlTe"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlLn"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option pnl from symbol positions with vega"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pnlSh"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"option pnl from symbol positions with vega"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tEdge"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"aggregate option theo edgesumsrstEdge"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tEdgeMult"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"denominator for computing edge per unitsumsrstEdgeMult"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tEdgePr"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"aggregate option theo edge prior periodsumsrstEdgePr"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tEdgeMultPr"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"enominator for computing edge per unit prior periodsumsrstEdgeMultPr"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posTEdgePnl"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"aggregate pnl positive edge symbolssumsrsposTEdgePnl"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"negTEdgePnl"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"aggregate pnl negative edge symbolssumsrsnegTEdgePnl"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"badTEdgePnl"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"aggregate pnl no theo edge symbolssumsrsbadTEdgePnl"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu90"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd90"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu50"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd50"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu15"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd15"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu10"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd10"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu05"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd05"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu1e"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 1x implied earn move vol ramp out"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd1e"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 1x implied earn move vol ramp out"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsu2e"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 2x implied earn move vol ramp out"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRsd2e"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc dn 2x implied earn move vol ramp out"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRearn"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide vol earn ramp out no uPrc move"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VaRcash"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Aggregate RiskSlide uPrc up 30 vol  001 6mn deal close delta neutral"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hcCnt"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"count of haircut  00 symbols"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"haircut25"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"haircut 25 minimumcn act basis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"haircut37"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"haircut 37 minimumcn act basis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lastActivity"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_isDeleted"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_fromRotation"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_fromCache"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_fromApplication"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_fromBridge"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_timeSent"}),(0,t.jsx)(s.td,{children:"BIGINT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly unix timestamp"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_timeReceived"}),(0,t.jsx)(s.td,{children:"BIGINT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_netTimeReceived"}),(0,t.jsx)(s.td,{children:"BIGINT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly unix timestamp"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_sysEnvironmentOrigin"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_sysRealmOrigin"}),(0,t.jsx)(s.td,{children:"ENUM"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"_sourceId"}),(0,t.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"readonly"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accnt"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"currency"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"4"})]})]})]})]})}function j(d={}){const{wrapper:s}={...(0,r.R)(),...d.components};return s?(0,t.jsx)(s,{...d,children:(0,t.jsx)(x,{...d})}):x(d)}},28453:(d,s,e)=>{e.d(s,{R:()=>i,x:()=>l});var t=e(96540);const r={},n=t.createContext(r);function i(d){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof d?d(s):{...s,...d}}),[s,d])}function l(d){let s;return s=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:i(d.components),t.createElement(n.Provider,{value:s},d.children)}}}]);