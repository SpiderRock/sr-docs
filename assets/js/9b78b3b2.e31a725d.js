"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64066],{87170:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=s(74848),r=s(28453);const i={title:"ExpirationRiskRecordV5"},n="Schema: ExpirationRiskRecordV5 (ID: 4765)",l={id:"MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5",title:"ExpirationRiskRecordV5",description:"ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute.",source:"@site/docs/MessageSchemas/Schema/Topics/4740-risk-v5/ExpirationRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ExpirationRiskRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"EquityCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/EquityCorpActionRecordV5"},next:{title:"FuturePositionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/FuturePositionRecordV5"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-expirationriskrecordv5-id-4765",children:["Schema: ExpirationRiskRecordV5 ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4765)"})]}),"\n",(0,t.jsx)(d.p,{children:"ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"SystemData"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"10"}),(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"11"}),(0,t.jsx)(d.td,{children:"currency"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"12"}),(0,t.jsx)(d.td,{children:"expiration"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"13"}),(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"103"}),(0,t.jsx)(d.td,{children:"riskServerCode"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"risk server that published this record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"106"}),(0,t.jsx)(d.td,{children:"vegaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long vega symbol positions;=sum(+ors.vega) if ors.vega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"109"}),(0,t.jsx)(d.td,{children:"vegaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short vega symbol positions;= sum(-ors.vega) if ors.vega < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"112"}),(0,t.jsx)(d.td,{children:"wVegaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long weighted vega symbol positions;=sum(+ors.wVega) if ors.wVega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"115"}),(0,t.jsx)(d.td,{children:"wVegaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short weighted vega symbol positions;= sum(-ors.wVega) if ors.wVega < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"118"}),(0,t.jsx)(d.td,{children:"wtVegaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long time weighted vega symbol positions;=sum(+ors.wtVega) if ors.wtVega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"121"}),(0,t.jsx)(d.td,{children:"wtVegaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short time weighted vega symbol positions;= sum(-ors.wtVega) if ors.wtVega < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"124"}),(0,t.jsx)(d.td,{children:"thetaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long vega symbol positions;=sum(+ors.theta) if ors.theta > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"127"}),(0,t.jsx)(d.td,{children:"thetaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short vega symbol positions;= sum(-ors.theta) if ors.theta < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"130"}),(0,t.jsx)(d.td,{children:"rhoLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long rho symbol positions;=sum(+ors.rho) if ors.rho > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"133"}),(0,t.jsx)(d.td,{children:"rhoShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short rho symbol positions;= sum(-ors.rho) if ors.rho < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"136"}),(0,t.jsx)(d.td,{children:"dGammaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long $ gamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"139"}),(0,t.jsx)(d.td,{children:"dGammaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short $gamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"142"}),(0,t.jsx)(d.td,{children:"dBetaGaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long $ beta/gamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"145"}),(0,t.jsx)(d.td,{children:"dBetaGaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short $ beta/gamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"148"}),(0,t.jsx)(d.td,{children:"ivolLn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"vega weighted average symbol ivol where ors.vega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"151"}),(0,t.jsx)(d.td,{children:"ivolSh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"vega weighted average symbol ivol where ors.vega < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"154"}),(0,t.jsx)(d.td,{children:"wtVeDd"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"157"}),(0,t.jsx)(d.td,{children:"wtVeDn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"160"}),(0,t.jsx)(d.td,{children:"wtVeAt"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"163"}),(0,t.jsx)(d.td,{children:"wtVeUp"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"166"}),(0,t.jsx)(d.td,{children:"wtVeDu"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"169"}),(0,t.jsx)(d.td,{children:"absClrCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"absolute number of contracts (open clr)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"172"}),(0,t.jsx)(d.td,{children:"absCurCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"absolute number of contracts (open clr + bot - sld)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"175"}),(0,t.jsx)(d.td,{children:"premOvPar"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate option premium over parity"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"178"}),(0,t.jsx)(d.td,{children:"opPnlVol"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"options pnl (using SR vol marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"181"}),(0,t.jsx)(d.td,{children:"opPnlMid"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"options pnl (using SR mid marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"184"}),(0,t.jsx)(d.td,{children:"opPnlClr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"options pnl (using CLR mid marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"187"}),(0,t.jsx)(d.td,{children:"opDayVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"190"}),(0,t.jsx)(d.td,{children:"opDayWVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option (vol weighted) vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"193"}),(0,t.jsx)(d.td,{children:"opDayTVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option (time weighted) vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"196"}),(0,t.jsx)(d.td,{children:"opDayWtVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option (vol time weighted) vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"199"}),(0,t.jsx)(d.td,{children:"opDayTheta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theta traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"202"}),(0,t.jsx)(d.td,{children:"opEdgeOpened"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theo edge opened today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"205"}),(0,t.jsx)(d.td,{children:"opEdgeClosed"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theo edge closed today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"208"}),(0,t.jsx)(d.td,{children:"pnlDn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option delta neutral pnl;=sum(ors.pnlDn)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"211"}),(0,t.jsx)(d.td,{children:"pnlDe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option delta pnl;=sum(ors.pnlDe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"214"}),(0,t.jsx)(d.td,{children:"pnlSl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega/delta pnl;=sum(ors.pnlSl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"217"}),(0,t.jsx)(d.td,{children:"pnlGa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option gamma pnl;=sum(ors.pnlGa)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"220"}),(0,t.jsx)(d.td,{children:"pnlTh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theta pnl;=sum(ors.pnlTh)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"223"}),(0,t.jsx)(d.td,{children:"pnlVe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega pnl;=sum(ors.pnlVe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"226"}),(0,t.jsx)(d.td,{children:"pnlVo"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option volga pnl;=sum(ors.pnlVo)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"229"}),(0,t.jsx)(d.td,{children:"pnlVa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vanna pnl;=sum(ors.pnlVa)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"232"}),(0,t.jsx)(d.td,{children:"pnlDDiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option DDiv pnl;=sum(ors.pnlDDiv)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"235"}),(0,t.jsx)(d.td,{children:"pnlSDiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option SDiv pnl;=sum(ors.pnlSDiv)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"238"}),(0,t.jsx)(d.td,{children:"pnlRate"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option Rate pnl;=sum(ors.pnlRate)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"241"}),(0,t.jsx)(d.td,{children:"pnlErr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option unexplained (error) pnl;=sum(ors.pnlErr)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"244"}),(0,t.jsx)(d.td,{children:"pnlTe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theo edge pnl;=sum(ors.pnlTe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"247"}),(0,t.jsx)(d.td,{children:"pnlLn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option pnl from option positions with +vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"250"}),(0,t.jsx)(d.td,{children:"pnlSh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option pnl from option positions with -vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"253"}),(0,t.jsx)(d.td,{children:"tEdge"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate option theo edge;=sum(srs.tEdge)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"256"}),(0,t.jsx)(d.td,{children:"tEdgeMult"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"denominator for computing edge per unit;=sum(srs.tEdgeMult)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"259"}),(0,t.jsx)(d.td,{children:"tEdgePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate option theo edge (prior period);=sum(srs.tEdgePr)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"262"}),(0,t.jsx)(d.td,{children:"tEdgeMultPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"enominator for computing edge per unit (prior period);=sum(srs.tEdgeMultPr)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"265"}),(0,t.jsx)(d.td,{children:"posTEdgePnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate pnl (positive edge symbols);=sum(ors.posTEdgePnl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"268"}),(0,t.jsx)(d.td,{children:"negTEdgePnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate pnl (negative edge symbols);=sum(ors.negTEdgePnl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"271"}),(0,t.jsx)(d.td,{children:"badTEdgePnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate pnl (no theo edge symbols);=sum(ors.badTEdgePnl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"274"}),(0,t.jsx)(d.td,{children:"VaRsu90"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 90%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.90))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"277"}),(0,t.jsx)(d.td,{children:"VaRsd90"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 90%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.90))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"280"}),(0,t.jsx)(d.td,{children:"VaRsu50"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 50%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.50))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"283"}),(0,t.jsx)(d.td,{children:"VaRsd50"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 50%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.50))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"286"}),(0,t.jsx)(d.td,{children:"VaRsu15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 15%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.15))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"289"}),(0,t.jsx)(d.td,{children:"VaRsd15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 15%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.15))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"292"}),(0,t.jsx)(d.td,{children:"VaRsu10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 10%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.10))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"295"}),(0,t.jsx)(d.td,{children:"VaRsd10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 10%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.10))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"298"}),(0,t.jsx)(d.td,{children:"VaRsu05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 5%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.05))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"301"}),(0,t.jsx)(d.td,{children:"VaRsd05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 5%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.05))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"304"}),(0,t.jsx)(d.td,{children:"VaRsu1e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 1x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"307"}),(0,t.jsx)(d.td,{children:"VaRsd1e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 1x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"310"}),(0,t.jsx)(d.td,{children:"VaRsu2e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 2x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"313"}),(0,t.jsx)(d.td,{children:"VaRsd2e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 2x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"316"}),(0,t.jsx)(d.td,{children:"VaRearn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: vol earn ramp out (no uPrc move)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"319"}),(0,t.jsx)(d.td,{children:"VaRcash"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 30%, vol = 0.01, 6mn deal close (delta neutral)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"322"}),(0,t.jsx)(d.td,{children:"lastActivity"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"325"}),(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function n(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);