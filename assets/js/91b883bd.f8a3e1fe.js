"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88678],{59455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=t(74848),r=t(28453),d=t(11470),a=t(19365);const l={title:"ExpirationRiskRecordV5"},i="Schema: ExpirationRiskRecordV5 (ID: 4765)",o={id:"MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5",title:"ExpirationRiskRecordV5",description:"ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute.",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/4740-risk-v5/ExpirationRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"ExpirationRiskRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"EquityCorpActionRecordV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/risk-v5/EquityCorpActionRecordV5"},next:{title:"FuturePositionRecordV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/risk-v5/FuturePositionRecordV5"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"schema-expirationriskrecordv5-id-4765",children:["Schema: ExpirationRiskRecordV5 ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4765)"})]}),"\n",(0,s.jsx)(n.p,{children:"ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"4740-risk-v5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientRisk"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRRisk"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"currency"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"12="}),(0,s.jsx)(n.td,{children:"expiration"}),(0,s.jsx)(n.td,{children:"DateKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"13="}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"SR assigned client firm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"vegaLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long vega symbol positions;=sum(+ors.vega) if ors.vega > 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"vegaShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short vega symbol positions;= sum(-ors.vega) if ors.vega < 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"wVegaLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long weighted vega symbol positions;=sum(+ors.wVega) if ors.wVega > 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"wVegaShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short weighted vega symbol positions;= sum(-ors.wVega) if ors.wVega < 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"wtVegaLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long time weighted vega symbol positions;=sum(+ors.wtVega) if ors.wtVega > 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"wtVegaShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short time weighted vega symbol positions;= sum(-ors.wtVega) if ors.wtVega < 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"thetaLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long vega symbol positions;=sum(+ors.theta) if ors.theta > 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"thetaShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short vega symbol positions;= sum(-ors.theta) if ors.theta < 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"rhoLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long rho symbol positions;=sum(+ors.rho) if ors.rho > 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"rhoShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short rho symbol positions;= sum(-ors.rho) if ors.rho < 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"dGammaLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long $ gamma option positions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"139"}),(0,s.jsx)(n.td,{children:"dGammaShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short $gamma option positions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"142"}),(0,s.jsx)(n.td,{children:"dBetaGaLong"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of long $ beta/gamma option positions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"145"}),(0,s.jsx)(n.td,{children:"dBetaGaShort"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of short $ beta/gamma option positions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"148"}),(0,s.jsx)(n.td,{children:"ivolLn"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"vega weighted average symbol ivol where ors.vega > 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"151"}),(0,s.jsx)(n.td,{children:"ivolSh"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"vega weighted average symbol ivol where ors.vega < 0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"154"}),(0,s.jsx)(n.td,{children:"wtVeDd"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"157"}),(0,s.jsx)(n.td,{children:"wtVeDn"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"160"}),(0,s.jsx)(n.td,{children:"wtVeAt"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"163"}),(0,s.jsx)(n.td,{children:"wtVeUp"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"166"}),(0,s.jsx)(n.td,{children:"wtVeDu"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"169"}),(0,s.jsx)(n.td,{children:"absClrCn"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"absolute number of contracts (open clr)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"172"}),(0,s.jsx)(n.td,{children:"absCurCn"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"absolute number of contracts (open clr + bot - sld)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"175"}),(0,s.jsx)(n.td,{children:"premOvPar"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"aggregate option premium over parity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"178"}),(0,s.jsx)(n.td,{children:"opPnlVol"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"options pnl (using SR vol marks)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"181"}),(0,s.jsx)(n.td,{children:"opPnlMid"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"options pnl (using SR mid marks)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"184"}),(0,s.jsx)(n.td,{children:"opPnlClr"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"options pnl (using CLR mid marks)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"187"}),(0,s.jsx)(n.td,{children:"opDayVega"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option vega traded today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"190"}),(0,s.jsx)(n.td,{children:"opDayWVega"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option (vol weighted) vega traded today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"193"}),(0,s.jsx)(n.td,{children:"opDayTVega"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option (time weighted) vega traded today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"196"}),(0,s.jsx)(n.td,{children:"opDayWtVega"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option (vol time weighted) vega traded today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"199"}),(0,s.jsx)(n.td,{children:"opDayTheta"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option theta traded today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"202"}),(0,s.jsx)(n.td,{children:"opEdgeOpened"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option theo edge opened today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"205"}),(0,s.jsx)(n.td,{children:"opEdgeClosed"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option theo edge closed today"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"208"}),(0,s.jsx)(n.td,{children:"pnlDn"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option delta neutral pnl;=sum(ors.pnlDn)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"211"}),(0,s.jsx)(n.td,{children:"pnlDe"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option delta pnl;=sum(ors.pnlDe)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"214"}),(0,s.jsx)(n.td,{children:"pnlSl"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option vega/delta pnl;=sum(ors.pnlSl)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"217"}),(0,s.jsx)(n.td,{children:"pnlGa"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option gamma pnl;=sum(ors.pnlGa)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"220"}),(0,s.jsx)(n.td,{children:"pnlTh"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option theta pnl;=sum(ors.pnlTh)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"223"}),(0,s.jsx)(n.td,{children:"pnlVe"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option vega pnl;=sum(ors.pnlVe)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"226"}),(0,s.jsx)(n.td,{children:"pnlVo"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option volga pnl;=sum(ors.pnlVo)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"229"}),(0,s.jsx)(n.td,{children:"pnlVa"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option vanna pnl;=sum(ors.pnlVa)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"232"}),(0,s.jsx)(n.td,{children:"pnlDDiv"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option DDiv pnl;=sum(ors.pnlDDiv)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"235"}),(0,s.jsx)(n.td,{children:"pnlSDiv"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option SDiv pnl;=sum(ors.pnlSDiv)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"238"}),(0,s.jsx)(n.td,{children:"pnlRate"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option Rate pnl;=sum(ors.pnlRate)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"241"}),(0,s.jsx)(n.td,{children:"pnlErr"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option unexplained (error) pnl;=sum(ors.pnlErr)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"244"}),(0,s.jsx)(n.td,{children:"pnlTe"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option theo edge pnl;=sum(ors.pnlTe)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"247"}),(0,s.jsx)(n.td,{children:"pnlLn"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option pnl from option positions with +vega"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"250"}),(0,s.jsx)(n.td,{children:"pnlSh"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"option pnl from option positions with -vega"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"253"}),(0,s.jsx)(n.td,{children:"tEdge"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"aggregate option theo edge;=sum(srs.tEdge)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"256"}),(0,s.jsx)(n.td,{children:"tEdgeMult"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"denominator for computing edge per unit;=sum(srs.tEdgeMult)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"259"}),(0,s.jsx)(n.td,{children:"tEdgePr"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"aggregate option theo edge (prior period);=sum(srs.tEdgePr)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"262"}),(0,s.jsx)(n.td,{children:"tEdgeMultPr"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"enominator for computing edge per unit (prior period);=sum(srs.tEdgeMultPr)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"265"}),(0,s.jsx)(n.td,{children:"posTEdgePnl"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"aggregate pnl (positive edge symbols);=sum(ors.posTEdgePnl)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"268"}),(0,s.jsx)(n.td,{children:"negTEdgePnl"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"aggregate pnl (negative edge symbols);=sum(ors.negTEdgePnl)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"271"}),(0,s.jsx)(n.td,{children:"badTEdgePnl"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"aggregate pnl (no theo edge symbols);=sum(ors.badTEdgePnl)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"274"}),(0,s.jsx)(n.td,{children:"VaRsu90"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 90%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.90))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"277"}),(0,s.jsx)(n.td,{children:"VaRsd90"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 90%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.90))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"280"}),(0,s.jsx)(n.td,{children:"VaRsu50"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 50%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.50))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"283"}),(0,s.jsx)(n.td,{children:"VaRsd50"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 50%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.50))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"286"}),(0,s.jsx)(n.td,{children:"VaRsu15"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 15%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.15))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"289"}),(0,s.jsx)(n.td,{children:"VaRsd15"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 15%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.15))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"292"}),(0,s.jsx)(n.td,{children:"VaRsu10"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 10%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.10))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"295"}),(0,s.jsx)(n.td,{children:"VaRsd10"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 10%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.10))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"298"}),(0,s.jsx)(n.td,{children:"VaRsu05"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 5%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.05))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"301"}),(0,s.jsx)(n.td,{children:"VaRsd05"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 5%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.05))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"304"}),(0,s.jsx)(n.td,{children:"VaRsu1e"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 1x implied earn move, vol ramp out"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"307"}),(0,s.jsx)(n.td,{children:"VaRsd1e"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 1x implied earn move, vol ramp out"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"310"}),(0,s.jsx)(n.td,{children:"VaRsu2e"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 2x implied earn move, vol ramp out"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"313"}),(0,s.jsx)(n.td,{children:"VaRsd2e"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn 2x implied earn move, vol ramp out"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"316"}),(0,s.jsx)(n.td,{children:"VaRearn"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: vol earn ramp out (no uPrc move)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"319"}),(0,s.jsx)(n.td,{children:"VaRcash"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up 30%, vol = 0.01, 6mn deal close (delta neutral)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"322"}),(0,s.jsx)(n.td,{children:"lastActivity"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"325"}),(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'ExpirationRiskRecordV5'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=ExpirationRiskRecordV5'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ExpirationRiskRecordV5\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'vegaLong|vegaShort|wVegaLong|wVegaShort|wtVegaLong|wtVegaShort|thetaLong|thetaShort|rhoLong|rhoShort|dGammaLong|dGammaShort|dBetaGaLong|dBetaGaShort|ivolLn|ivolSh|wtVeDd|wtVeDn|wtVeAt|wtVeUp|wtVeDu|absClrCn|absCurCn|premOvPar|opPnlVol|opPnlMid|opPnlClr|opDayVega|opDayWVega|opDayTVega|opDayWtVega|opDayTheta|opEdgeOpened|opEdgeClosed|pnlDn|pnlDe|pnlSl|pnlGa|pnlTh|pnlVe|pnlVo|pnlVa|pnlDDiv|pnlSDiv|pnlRate|pnlErr|pnlTe|pnlLn|pnlSh|tEdge|tEdgeMult|tEdgePr|tEdgeMultPr|posTEdgePnl|negTEdgePnl|badTEdgePnl|VaRsu90|VaRsd90|VaRsu50|VaRsd50|VaRsu15|VaRsd15|VaRsu10|VaRsd10|VaRsu05|VaRsd05|VaRsu1e|VaRsd1e|VaRsu2e|VaRsd2e|VaRearn|VaRcash|lastActivity|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=ExpirationRiskRecordV5' \\\n--data-urlencode 'view=vegaLong|vegaShort|wVegaLong|wVegaShort|wtVegaLong|wtVegaShort|thetaLong|thetaShort|rhoLong|rhoShort|dGammaLong|dGammaShort|dBetaGaLong|dBetaGaShort|ivolLn|ivolSh|wtVeDd|wtVeDn|wtVeAt|wtVeUp|wtVeDu|absClrCn|absCurCn|premOvPar|opPnlVol|opPnlMid|opPnlClr|opDayVega|opDayWVega|opDayTVega|opDayWtVega|opDayTheta|opEdgeOpened|opEdgeClosed|pnlDn|pnlDe|pnlSl|pnlGa|pnlTh|pnlVe|pnlVo|pnlVa|pnlDDiv|pnlSDiv|pnlRate|pnlErr|pnlTe|pnlLn|pnlSh|tEdge|tEdgeMult|tEdgePr|tEdgeMultPr|posTEdgePnl|negTEdgePnl|badTEdgePnl|VaRsu90|VaRsd90|VaRsu50|VaRsd50|VaRsu15|VaRsd15|VaRsu10|VaRsd10|VaRsu05|VaRsd05|VaRsu1e|VaRsd1e|VaRsu2e|VaRsd2e|VaRearn|VaRcash|lastActivity|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ExpirationRiskRecordV5\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'vegaLong|vegaShort|wVegaLong|wVegaShort|wtVegaLong|wtVegaShort|thetaLong|thetaShort|rhoLong|rhoShort|dGammaLong|dGammaShort|dBetaGaLong|dBetaGaShort|ivolLn|ivolSh|wtVeDd|wtVeDn|wtVeAt|wtVeUp|wtVeDu|absClrCn|absCurCn|premOvPar|opPnlVol|opPnlMid|opPnlClr|opDayVega|opDayWVega|opDayTVega|opDayWtVega|opDayTheta|opEdgeOpened|opEdgeClosed|pnlDn|pnlDe|pnlSl|pnlGa|pnlTh|pnlVe|pnlVo|pnlVa|pnlDDiv|pnlSDiv|pnlRate|pnlErr|pnlTe|pnlLn|pnlSh|tEdge|tEdgeMult|tEdgePr|tEdgeMultPr|posTEdgePnl|negTEdgePnl|badTEdgePnl|VaRsu90|VaRsd90|VaRsu50|VaRsd50|VaRsu15|VaRsd15|VaRsu10|VaRsd10|VaRsu05|VaRsd05|VaRsu1e|VaRsd1e|VaRsu2e|VaRsd2e|VaRearn|VaRcash|lastActivity|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'vegaLong:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=ExpirationRiskRecordV5' \\\n--data-urlencode 'view=vegaLong|vegaShort|wVegaLong|wVegaShort|wtVegaLong|wtVegaShort|thetaLong|thetaShort|rhoLong|rhoShort|dGammaLong|dGammaShort|dBetaGaLong|dBetaGaShort|ivolLn|ivolSh|wtVeDd|wtVeDn|wtVeAt|wtVeUp|wtVeDu|absClrCn|absCurCn|premOvPar|opPnlVol|opPnlMid|opPnlClr|opDayVega|opDayWVega|opDayTVega|opDayWtVega|opDayTheta|opEdgeOpened|opEdgeClosed|pnlDn|pnlDe|pnlSl|pnlGa|pnlTh|pnlVe|pnlVo|pnlVa|pnlDDiv|pnlSDiv|pnlRate|pnlErr|pnlTe|pnlLn|pnlSh|tEdge|tEdgeMult|tEdgePr|tEdgeMultPr|posTEdgePnl|negTEdgePnl|badTEdgePnl|VaRsu90|VaRsd90|VaRsu50|VaRsd50|VaRsu15|VaRsd15|VaRsu10|VaRsd10|VaRsu05|VaRsd05|VaRsu1e|VaRsd1e|VaRsu2e|VaRsd2e|VaRearn|VaRcash|lastActivity|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=vegaLong:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ExpirationRiskRecordV5\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'vegaLong|vegaShort|wVegaLong|wVegaShort|wtVegaLong|wtVegaShort|thetaLong|thetaShort|rhoLong|rhoShort|dGammaLong|dGammaShort|dBetaGaLong|dBetaGaShort|ivolLn|ivolSh|wtVeDd|wtVeDn|wtVeAt|wtVeUp|wtVeDu|absClrCn|absCurCn|premOvPar|opPnlVol|opPnlMid|opPnlClr|opDayVega|opDayWVega|opDayTVega|opDayWtVega|opDayTheta|opEdgeOpened|opEdgeClosed|pnlDn|pnlDe|pnlSl|pnlGa|pnlTh|pnlVe|pnlVo|pnlVa|pnlDDiv|pnlSDiv|pnlRate|pnlErr|pnlTe|pnlLn|pnlSh|tEdge|tEdgeMult|tEdgePr|tEdgeMultPr|posTEdgePnl|negTEdgePnl|badTEdgePnl|VaRsu90|VaRsd90|VaRsu50|VaRsd50|VaRsu15|VaRsd15|VaRsu10|VaRsd10|VaRsu05|VaRsd05|VaRsu1e|VaRsd1e|VaRsu2e|VaRsd2e|VaRearn|VaRcash|lastActivity|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=ExpirationRiskRecordV5' \\\n--data-urlencode 'measure=vegaLong|vegaShort|wVegaLong|wVegaShort|wtVegaLong|wtVegaShort|thetaLong|thetaShort|rhoLong|rhoShort|dGammaLong|dGammaShort|dBetaGaLong|dBetaGaShort|ivolLn|ivolSh|wtVeDd|wtVeDn|wtVeAt|wtVeUp|wtVeDu|absClrCn|absCurCn|premOvPar|opPnlVol|opPnlMid|opPnlClr|opDayVega|opDayWVega|opDayTVega|opDayWtVega|opDayTheta|opEdgeOpened|opEdgeClosed|pnlDn|pnlDe|pnlSl|pnlGa|pnlTh|pnlVe|pnlVo|pnlVa|pnlDDiv|pnlSDiv|pnlRate|pnlErr|pnlTe|pnlLn|pnlSh|tEdge|tEdgeMult|tEdgePr|tEdgeMultPr|posTEdgePnl|negTEdgePnl|badTEdgePnl|VaRsu90|VaRsd90|VaRsu50|VaRsd50|VaRsu15|VaRsd15|VaRsu10|VaRsd10|VaRsu05|VaRsd05|VaRsu1e|VaRsd1e|VaRsu2e|VaRsd2e|VaRearn|VaRcash|lastActivity|timestamp' \\\n--data-urlencode 'group=' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ExpirationRiskRecordV5\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=ExpirationRiskRecordV5' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var d=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(34164),d=t(23104),a=t(56347),l=t(205),i=t(57485),o=t(31682),c=t(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),d=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(d),(0,s.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(r.location.search);n.set(d,e),r.replace({...r.location,search:n.toString()})}),[d,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,d=p(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:d}))),[o,h]=g({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,d]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:r}),m=(()=>{const e=o??x;return u({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),j(e)}),[h,j,d]),tabValues:d}}var j=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var V=t(74848);function R(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,d.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(o(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,V.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:d}=e;return(0,V.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:h,onClick:c,...d,className:(0,r.A)("tabs__item",m.tabItem,d?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,V.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function f(e){const n=x(e);return(0,V.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,V.jsx)(R,{...n,...e}),(0,V.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,V.jsx)(f,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},d=s.createContext(r);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);