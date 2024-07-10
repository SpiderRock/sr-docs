"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8216],{54315:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var t=s(74848),r=s(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/ExpirationRiskRecordV5",title:"ExpirationRiskRecordV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/ExpirationRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"EquityCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/EquityCorpActionRecordV5/"},next:{title:"FuturePositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5/"}},o={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:(0,t.jsx)(d.a,{href:"../../../Topics/risk-v5/ExpirationRiskRecordV5",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(d.p,{children:"ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."}),"\n",(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"SystemData"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Product"}),(0,t.jsx)(d.td,{children:"SRRisk"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accessType"}),(0,t.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Key"}),(0,t.jsx)(d.th,{children:"Default Value"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"VARCHAR(16)"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"''"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"currency"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"expiration"}),(0,t.jsx)(d.td,{children:"DATE"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"1900-01-01"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"VARCHAR(16)"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"''"}),(0,t.jsx)(d.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"riskServerCode"}),(0,t.jsx)(d.td,{children:"VARCHAR(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"''"}),(0,t.jsx)(d.td,{children:"risk server that published this record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vegaLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long vega symbol positionssumorsvega if orsvega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vegaShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short vega symbol positions sumorsvega if orsvega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wVegaLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long weighted vega symbol positionssumorswVega if orswVega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wVegaShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short weighted vega symbol positions sumorswVega if orswVega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVegaLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long time weighted vega symbol positionssumorswtVega if orswtVega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVegaShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short time weighted vega symbol positions sumorswtVega if orswtVega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"thetaLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long vega symbol positionssumorstheta if orstheta  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"thetaShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short vega symbol positions sumorstheta if orstheta  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rhoLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long rho symbol positionssumorsrho if orsrho  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rhoShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short rho symbol positions sumorsrho if orsrho  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dGammaLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long  gamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dGammaShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short gamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dBetaGaLong"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of long  betagamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dBetaGaShort"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sum of short  betagamma option positions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ivolLn"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"vega weighted average symbol ivol where orsvega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ivolSh"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"vega weighted average symbol ivol where orsvega  0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeDd"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate Dd Time Weighted VegasumwtVega if oprxde  030"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeDn"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate Dn Time Weighted VegasumwtVega if 030  oprxde  010"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeAt"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate At Time Weighted VegasumwtVega if absoprxde  010"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeUp"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate Up Time Weighted VegasumwtVega if 010  oprxde  030"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeDu"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate Du Time Weighted VegasumwtVega if 030  oprxde"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absClrCn"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"absolute number of contracts open clr"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absCurCn"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"absolute number of contracts open clr  bot  sld"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"premOvPar"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"aggregate option premium over parity"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opPnlVol"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"options pnl using SR vol marks"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opPnlMid"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"options pnl using SR mid marks"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opPnlClr"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"options pnl using CLR mid marks"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayVega"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayWVega"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vol weighted vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayTVega"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option time weighted vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayWtVega"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vol time weighted vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayTheta"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option theta traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opEdgeOpened"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option theo edge opened today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opEdgeClosed"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option theo edge closed today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlDn"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option delta neutral pnlsumorspnlDn"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlDe"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option delta pnlsumorspnlDe"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlSl"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vegadelta pnlsumorspnlSl"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlGa"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option gamma pnlsumorspnlGa"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlTh"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option theta pnlsumorspnlTh"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlVe"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vega pnlsumorspnlVe"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlVo"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option volga pnlsumorspnlVo"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlVa"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vanna pnlsumorspnlVa"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlDDiv"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option DDiv pnlsumorspnlDDiv"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlSDiv"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option SDiv pnlsumorspnlSDiv"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlRate"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option Rate pnlsumorspnlRate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlErr"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option unexplained error pnlsumorspnlErr"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlTe"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option theo edge pnlsumorspnlTe"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlLn"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option pnl from option positions with vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlSh"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option pnl from option positions with vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tEdge"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"aggregate option theo edgesumsrstEdge"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tEdgeMult"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"denominator for computing edge per unitsumsrstEdgeMult"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tEdgePr"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"aggregate option theo edge prior periodsumsrstEdgePr"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tEdgeMultPr"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"enominator for computing edge per unit prior periodsumsrstEdgeMultPr"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"posTEdgePnl"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"aggregate pnl positive edge symbolssumorsposTEdgePnl"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"negTEdgePnl"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"aggregate pnl negative edge symbolssumorsnegTEdgePnl"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"badTEdgePnl"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"aggregate pnl no theo edge symbolssumorsbadTEdgePnl"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu90"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd90"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 90 vol unchanged newUPrc  uPrc  MathExp090"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu50"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd50"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 50 vol unchanged newUPrc  uPrc  MathExp050"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu15"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd15"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 15 vol unchanged newUPrc  uPrc  MathExp015"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu10"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd10"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu05"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd05"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 5 vol unchanged newUPrc  uPrc  MathExp005"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu1e"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 1x implied earn move vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd1e"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 1x implied earn move vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu2e"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 2x implied earn move vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd2e"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 2x implied earn move vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRearn"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide vol earn ramp out no uPrc move"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRcash"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 30 vol  001 6mn deal close delta neutral"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"lastActivity"}),(0,t.jsx)(d.td,{children:"DATETIME(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"1900-01-01 00:00:00.000000"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DATETIME(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"1900-01-01 00:00:00.000000"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Sequence"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"1"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"currency"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"expiration"}),(0,t.jsx)(d.td,{children:"3"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"4"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgExpirationRiskRecordV5` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `currency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `expiration` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'risk server that published this record',\n    `vegaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long vega symbol positions;=sum(+ors.vega) if ors.vega > 0',\n    `vegaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short vega symbol positions;= sum(-ors.vega) if ors.vega < 0',\n    `wVegaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long weighted vega symbol positions;=sum(+ors.wVega) if ors.wVega > 0',\n    `wVegaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short weighted vega symbol positions;= sum(-ors.wVega) if ors.wVega < 0',\n    `wtVegaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long time weighted vega symbol positions;=sum(+ors.wtVega) if ors.wtVega > 0',\n    `wtVegaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short time weighted vega symbol positions;= sum(-ors.wtVega) if ors.wtVega < 0',\n    `thetaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long vega symbol positions;=sum(+ors.theta) if ors.theta > 0',\n    `thetaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short vega symbol positions;= sum(-ors.theta) if ors.theta < 0',\n    `rhoLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long rho symbol positions;=sum(+ors.rho) if ors.rho > 0',\n    `rhoShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short rho symbol positions;= sum(-ors.rho) if ors.rho < 0',\n    `dGammaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long $ gamma option positions',\n    `dGammaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short $gamma option positions',\n    `dBetaGaLong` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of long $ beta/gamma option positions',\n    `dBetaGaShort` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of short $ beta/gamma option positions',\n    `ivolLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega weighted average symbol ivol where ors.vega > 0',\n    `ivolSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega weighted average symbol ivol where ors.vega < 0',\n    `wtVeDd` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30',\n    `wtVeDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10',\n    `wtVeAt` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10',\n    `wtVeUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30',\n    `wtVeDu` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde',\n    `absClrCn` INT NOT NULL DEFAULT 0 COMMENT 'absolute number of contracts (open clr)',\n    `absCurCn` INT NOT NULL DEFAULT 0 COMMENT 'absolute number of contracts (open clr + bot - sld)',\n    `premOvPar` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate option premium over parity',\n    `opPnlVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'options pnl (using SR vol marks)',\n    `opPnlMid` FLOAT NOT NULL DEFAULT 0 COMMENT 'options pnl (using SR mid marks)',\n    `opPnlClr` FLOAT NOT NULL DEFAULT 0 COMMENT 'options pnl (using CLR mid marks)',\n    `opDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega traded today',\n    `opDayWVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (vol weighted) vega traded today',\n    `opDayTVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (time weighted) vega traded today',\n    `opDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (vol time weighted) vega traded today',\n    `opDayTheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta traded today',\n    `opEdgeOpened` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theo edge opened today',\n    `opEdgeClosed` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theo edge closed today',\n    `pnlDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta neutral pnl;=sum(ors.pnlDn)',\n    `pnlDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta pnl;=sum(ors.pnlDe)',\n    `pnlSl` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega/delta pnl;=sum(ors.pnlSl)',\n    `pnlGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma pnl;=sum(ors.pnlGa)',\n    `pnlTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta pnl;=sum(ors.pnlTh)',\n    `pnlVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega pnl;=sum(ors.pnlVe)',\n    `pnlVo` FLOAT NOT NULL DEFAULT 0 COMMENT 'option volga pnl;=sum(ors.pnlVo)',\n    `pnlVa` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vanna pnl;=sum(ors.pnlVa)',\n    `pnlDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'option DDiv pnl;=sum(ors.pnlDDiv)',\n    `pnlSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'option SDiv pnl;=sum(ors.pnlSDiv)',\n    `pnlRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'option Rate pnl;=sum(ors.pnlRate)',\n    `pnlErr` FLOAT NOT NULL DEFAULT 0 COMMENT 'option unexplained (error) pnl;=sum(ors.pnlErr)',\n    `pnlTe` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theo edge pnl;=sum(ors.pnlTe)',\n    `pnlLn` FLOAT NOT NULL DEFAULT 0 COMMENT 'option pnl from option positions with +vega',\n    `pnlSh` FLOAT NOT NULL DEFAULT 0 COMMENT 'option pnl from option positions with -vega',\n    `tEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate option theo edge;=sum(srs.tEdge)',\n    `tEdgeMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'denominator for computing edge per unit;=sum(srs.tEdgeMult)',\n    `tEdgePr` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate option theo edge (prior period);=sum(srs.tEdgePr)',\n    `tEdgeMultPr` FLOAT NOT NULL DEFAULT 0 COMMENT 'enominator for computing edge per unit (prior period);=sum(srs.tEdgeMultPr)',\n    `posTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate pnl (positive edge symbols);=sum(ors.posTEdgePnl)',\n    `negTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate pnl (negative edge symbols);=sum(ors.negTEdgePnl)',\n    `badTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'aggregate pnl (no theo edge symbols);=sum(ors.badTEdgePnl)',\n    `VaRsu90` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 90%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.90))',\n    `VaRsd90` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 90%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.90))',\n    `VaRsu50` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 50%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.50))',\n    `VaRsd50` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 50%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.50))',\n    `VaRsu15` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 15%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.15))',\n    `VaRsd15` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 15%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.15))',\n    `VaRsu10` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 10%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.10))',\n    `VaRsd10` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 10%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.10))',\n    `VaRsu05` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 5%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.05))',\n    `VaRsd05` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 5%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.05))',\n    `VaRsu1e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 1x implied earn move, vol ramp out',\n    `VaRsd1e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 1x implied earn move, vol ramp out',\n    `VaRsu2e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 2x implied earn move, vol ramp out',\n    `VaRsd2e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 2x implied earn move, vol ramp out',\n    `VaRearn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: vol earn ramp out (no uPrc move)',\n    `VaRcash` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 30%, vol = 0.01, 6mn deal close (delta neutral)',\n    `lastActivity` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`accnt`,`currency`,`expiration`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute.';\n\n"})})]})}function x(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>l});var t=s(96540);const r={},n=t.createContext(r);function i(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);