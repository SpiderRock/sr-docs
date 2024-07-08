"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8216],{54315:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>x});var t=s(74848),r=s(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/ExpirationRiskRecordV5",title:"ExpirationRiskRecordV5",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/ExpirationRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"EquityCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/"},next:{title:"FuturePositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(d){const e={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Topic"}),(0,t.jsx)(e.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"MLink Token"}),(0,t.jsx)(e.td,{children:"SystemData"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Product"}),(0,t.jsx)(e.td,{children:"SRRisk"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accessType"}),(0,t.jsx)(e.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Key"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accnt"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"currency"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"expiration"}),(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clientFirm"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"riskServerCode"}),(0,t.jsx)(e.td,{children:"VARCHAR(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"risk server that published this record"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"vegaLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long vega symbol positionssumorsvega if orsvega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"vegaShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short vega symbol positions sumorsvega if orsvega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wVegaLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long weighted vega symbol positionssumorswVega if orswVega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wVegaShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short weighted vega symbol positions sumorswVega if orswVega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVegaLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long time weighted vega symbol positionssumorswtVega if orswtVega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVegaShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short time weighted vega symbol positions sumorswtVega if orswtVega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"thetaLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long vega symbol positionssumorstheta if orstheta  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"thetaShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short vega symbol positions sumorstheta if orstheta  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"rhoLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long rho symbol positionssumorsrho if orsrho  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"rhoShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short rho symbol positions sumorsrho if orsrho  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dGammaLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long  gamma option positions"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dGammaShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short gamma option positions"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dBetaGaLong"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of long  betagamma option positions"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dBetaGaShort"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sum of short  betagamma option positions"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ivolLn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"vega weighted average symbol ivol where orsvega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ivolSh"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"vega weighted average symbol ivol where orsvega  0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVeDd"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate Dd Time Weighted VegasumwtVega if oprxde  030"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVeDn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate Dn Time Weighted VegasumwtVega if 030  oprxde  010"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVeAt"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate At Time Weighted VegasumwtVega if absoprxde  010"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVeUp"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate Up Time Weighted VegasumwtVega if 010  oprxde  030"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wtVeDu"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate Du Time Weighted VegasumwtVega if 030  oprxde"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"absClrCn"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"absolute number of contracts open clr"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"absCurCn"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"absolute number of contracts open clr  bot  sld"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"premOvPar"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"aggregate option premium over parity"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opPnlVol"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"options pnl using SR vol marks"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opPnlMid"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"options pnl using SR mid marks"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opPnlClr"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"options pnl using CLR mid marks"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opDayVega"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option vega traded today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opDayWVega"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option vol weighted vega traded today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opDayTVega"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option time weighted vega traded today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opDayWtVega"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option vol time weighted vega traded today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opDayTheta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option theta traded today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opEdgeOpened"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option theo edge opened today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"opEdgeClosed"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option theo edge closed today"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlDn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option delta neutral pnlsumorspnlDn"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlDe"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option delta pnlsumorspnlDe"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlSl"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option vegadelta pnlsumorspnlSl"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlGa"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option gamma pnlsumorspnlGa"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlTh"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option theta pnlsumorspnlTh"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlVe"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option vega pnlsumorspnlVe"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlVo"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option volga pnlsumorspnlVo"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlVa"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option vanna pnlsumorspnlVa"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlDDiv"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option DDiv pnlsumorspnlDDiv"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlSDiv"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option SDiv pnlsumorspnlSDiv"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlRate"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option Rate pnlsumorspnlRate"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlErr"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option unexplained error pnlsumorspnlErr"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlTe"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option theo edge pnlsumorspnlTe"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlLn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option pnl from option positions with vega"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pnlSh"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option pnl from option positions with vega"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tEdge"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"aggregate option theo edgesumsrstEdge"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tEdgeMult"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"denominator for computing edge per unitsumsrstEdgeMult"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tEdgePr"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"aggregate option theo edge prior periodsumsrstEdgePr"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tEdgeMultPr"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"enominator for computing edge per unit prior periodsumsrstEdgeMultPr"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"posTEdgePnl"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"aggregate pnl positive edge symbolssumorsposTEdgePnl"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"negTEdgePnl"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"aggregate pnl negative edge symbolssumorsnegTEdgePnl"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"badTEdgePnl"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"aggregate pnl no theo edge symbolssumorsbadTEdgePnl"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu90"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd90"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu50"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd50"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu15"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd15"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu10"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd10"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu05"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd05"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu1e"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 1x implied earn move vol ramp out"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd1e"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 1x implied earn move vol ramp out"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsu2e"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 2x implied earn move vol ramp out"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRsd2e"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn 2x implied earn move vol ramp out"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRearn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide vol earn ramp out no uPrc move"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VaRcash"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up 30 vol  001 6mn deal close delta neutral"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lastActivity"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"timestamp"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_isDeleted"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_fromRotation"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_fromCache"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_fromApplication"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_fromBridge"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_timeSent"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly unix timestamp"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_timeReceived"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_netTimeReceived"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly unix timestamp"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_sysEnvironmentOrigin"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_sysRealmOrigin"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_sourceId"}),(0,t.jsx)(e.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"readonly"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Sequence"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accnt"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"currency"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"expiration"}),(0,t.jsx)(e.td,{children:"3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clientFirm"}),(0,t.jsx)(e.td,{children:"4"})]})]})]})]})}function j(d={}){const{wrapper:e}={...(0,r.R)(),...d.components};return e?(0,t.jsx)(e,{...d,children:(0,t.jsx)(h,{...d})}):h(d)}},28453:(d,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var t=s(96540);const r={},n=t.createContext(r);function i(d){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function l(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:i(d.components),t.createElement(n.Provider,{value:e},d.children)}}}]);