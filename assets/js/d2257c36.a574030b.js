"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63675],{77509:(s,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>x});var e=t(74848),r=t(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/AccountRiskRecordV5",title:"AccountRiskRecordV5",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/AccountRiskRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRRisk",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/"},next:{title:"ClientBeta",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function j(s){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,e.jsxs)(d.table,{children:[(0,e.jsx)(d.thead,{children:(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.th,{children:"Attribute"}),(0,e.jsx)(d.th,{children:"Value"})]})}),(0,e.jsxs)(d.tbody,{children:[(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"Topic"}),(0,e.jsx)(d.td,{children:"4740-risk-v5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"MLink Token"}),(0,e.jsx)(d.td,{children:"ClientRisk"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"Product"}),(0,e.jsx)(d.td,{children:"SRRisk"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"accessType"}),(0,e.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,e.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,e.jsxs)(d.table,{children:[(0,e.jsx)(d.thead,{children:(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.th,{children:"Field"}),(0,e.jsx)(d.th,{children:"Type"}),(0,e.jsx)(d.th,{children:"Key"}),(0,e.jsx)(d.th,{children:"Comment"})]})}),(0,e.jsxs)(d.tbody,{children:[(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"accnt"}),(0,e.jsx)(d.td,{children:"VARCHAR(16)"}),(0,e.jsx)(d.td,{children:"PRI"}),(0,e.jsx)(d.td,{children:"SR account acronym"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"currency"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{children:"PRI"}),(0,e.jsx)(d.td,{children:"point currency of all associated positions and pnl values"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"tradeDate"}),(0,e.jsx)(d.td,{children:"DATE"}),(0,e.jsx)(d.td,{children:"PRI"}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"riskSession"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{children:"PRI"}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"clientFirm"}),(0,e.jsx)(d.td,{children:"VARCHAR(16)"}),(0,e.jsx)(d.td,{children:"PRI"}),(0,e.jsx)(d.td,{children:"SR assigned client firm acronym"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"riskServerCode"}),(0,e.jsx)(d.td,{children:"VARCHAR(6)"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"risk server that published this record"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"lnDDelta"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"long net position delta value underlier  options today SR marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"shDDelta"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"short net position delta value underlier  options today SR marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"lnStkMktValue"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"long stock market value today SR marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"shStkMktValue"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"short stock market value today SR marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futMktValue"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future market value today SR marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptMktValue"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock option market value today SR vol marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptMktValue"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future option market value today SR vol marks"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"vegaLong"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of long vega symbol positionssumsrsvega if srsvega  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"vegaShort"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of short vega symbol positions sumsrsvega if srsvega  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wVegaLong"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of long weighted vega symbol positionssumsrswVega if srswVega  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wVegaShort"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of short weighted vega symbol positions sumsrswVega if srswVega  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVegaLong"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of long time weighted weighted vega symbol positionssumsrswtVega if srswtVega  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVegaShort"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of short time weighted vega symbol positions sumsrswtVega if srswtVega  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"thetaLong"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of long vega symbol positionssumsrstheta if srstheta  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"thetaShort"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of short vega symbol positions sumsrstheta if srstheta  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"rhoLong"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of long rho symbol positionssumsrsrho if srsrho  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"rhoShort"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of short rho symbol positions sumsrsrho if srsrho  0"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"ivolLn"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"ivolSh"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeDd"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate Dd Time Weighted VegasumwtVega if oprxde  030"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeDn"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate Dn Time Weighted VegasumwtVega if 030  oprxde  010"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeAt"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate At Time Weighted VegasumwtVega if absoprxde  010"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeUp"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate Up Time Weighted VegasumwtVega if 010  oprxde  030"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeDu"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate Du Time Weighted VegasumwtVega if 030  oprxde"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeM1"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate M1 Time Weighted VegasumwtVega if days  10"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeM2"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate M2 Time Weighted VegasumwtVega if 10  days  25"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeM3"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate M3 Time Weighted VegasumwtVega if 25  days  65"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeM4"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate M4 Time Weighted VegasumwtVega if 65  days  130"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"wtVeM5"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate M5 Time Weighted VegasumwtVega if 130  days"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"ddelta"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"net deltasumsrsddelta"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"numSymbols"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"count of srs records being aggregated"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"absCurSh"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"absolute number of account shares CLR  tradessumsrsopShAbsCur"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"absCurFc"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"absolute number of account future contracts CLR  tradessumsrsopFcAbsCur"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"absCurCn"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"absolute number of account option contracts CLR  tradessumsrsopCnAbsCur"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"premOvPar"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"aggregate premium over parity for the option positionsumsrspremOvPar"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"optExAsPnl"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"dividendPnl"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"corpActCashPnL"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOpnPnlMid"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOpnPnlClr"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOpnPnlMid"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOpnPnlClr"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptOpnPnlVol"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptOpnPnlMid"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptOpnPnlClr"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptOpnPnlVol"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptOpnPnlMid"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptOpnPnlClr"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkDayPnl"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock day pnlsumsrsstPnlDay"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futDayPnl"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"futures day pnlsumsrsfcPnlDay"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptDayPnl"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock option day pnl sumsrsopPnlDay"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptDayPnl"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future option day pnl sumsrsopPnlDay"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stktDaySh"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock day shares bot  sld"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkDayMny"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock day mny sld  bot"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futDayCn"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future day contracts bot  sld"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futDayMny"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future day mny sld  bot"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptDayCn"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock option day contracts bot  sld"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkOptDayMny"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"stock option day mny sld  bot"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptDayCn"}),(0,e.jsx)(d.td,{children:"INT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future option day contracts bot  sld"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futOptDayMny"}),(0,e.jsx)(d.td,{children:"DOUBLE"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"future option day mny sld  bot"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"dayDDelta"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"day delta sumsrsdayDelta"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opDayVega"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option vega traded today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opDayWVega"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option vol weighted vega traded today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opDayTVega"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option time weighted vega traded today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opDayWtVega"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option vol time weighted vega traded today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opDayTheta"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option theta traded today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opEdgeOpened"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option theo edge opened today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"opEdgeClosed"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option theo edge closed today"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlDn"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option delta neutral pnlsumsrspnlDn"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlDe"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option delta pnlsumsrspnlDe"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlSl"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option vegadelta pnlsumsrspnlSl"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlGa"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option gamma pnlsumsrspnlGa"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlTh"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option theta pnlsumsrspnlTh"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlVe"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option vega pnlsumsrspnlVe"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlVo"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option volga pnlsumsrspnlVo"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlVa"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option vanna pnlsumsrspnlVa"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlDDiv"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option DDiv pnlsumsrspnlDDiv"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlSDiv"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option SDiv pnlsumsrspnlSDiv"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlRate"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option Rate pnlsumsrspnlRate"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlErr"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option unexplained error pnlsumsrspnlErr"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlTe"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option theo edge pnlsumsrspnlTe"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlLn"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option pnl from symbol positions with vega"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"pnlSh"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option pnl from symbol positions with vega"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"tEdge"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"aggregate option theo edgesumsrstEdge"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"tEdgeMult"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"denominator for computing edge per unitsumsrstEdgeMult"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"posTEdgePnl"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"aggregate pnl positive edge symbolssumsrsposTEdgePnl"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"negTEdgePnl"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"aggregate pnl negative edge symbolssumsrsnegTEdgePnl"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"badTEdgePnl"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"aggregate pnl no theo edge symbolssumsrsbadTEdgePnl"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu90"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 90 vol unchanged newUPrc  uPrc  exp090"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd90"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 90 vol unchanged newUPrc  uPrc  exp090"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu50"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 50 vol unchanged newUPrc  uPrc  exp050"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd50"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 50 vol unchanged newUPrc  uPrc  exp050"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu15"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 15 vol unchanged newUPrc  uPrc  exp015"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd15"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 15 vol unchanged newUPrc  uPrc  exp015"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu10"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd10"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 10 vol unchanged newUPrc  uPrc  MathExp010"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu05"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 5 vol unchanged newUPrc  uPrc  exp005"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd05"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 5 vol unchanged newUPrc  uPrc  exp005"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu1e"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 1x implied earn move vol ramp out"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd1e"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 1x implied earn move vol ramp out"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsu2e"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 2x implied earn move vol ramp out"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRsd2e"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc dn 2x implied earn move vol ramp out"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRearn"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide vol earn ramp out no uPrc move"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"VaRcash"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"Aggregate RiskSlide uPrc up 30 vol  001 6mn deal close delta neutral"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"hcCnt"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"count of haircut  00 symbols"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"haircut25"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"haircut 25 minimumcn act basis"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"haircut37"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"haircut 37 minimumcn act basis"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"optCnMinimum"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"option contract margin minimum 3750 for equitiesSPAN minimum for options on futures"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span01"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span1 uPrcunch volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span02"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span2 uPrcunch voldown"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span03"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span3 uPrc3333 volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span04"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span4 uPrc3333 voldn"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span05"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span5 uPrc3333 volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span06"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span6 uPrc3333 voldown"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span07"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span7 uPrc6667 volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span08"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span8 uPrc6667 voldown"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span09"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span9 uPrc6667 volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span10"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span10 uPrc6667 voldown"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span11"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span11 uPrc100 volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span12"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span12 uPrc100 voldown"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span13"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span13 uPrc100 volup"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span14"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span14 uPrc100 voldown"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span15"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span15 uPrc300 price slide  033"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"span16"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"span16 uPrc300 price slide  033"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worst3Risk"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"sum of 3 worst 50 slide loss symbols"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym1_at"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym1_ts"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym1_tk"}),(0,e.jsx)(d.td,{children:"VARCHAR(12)"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym2_at"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the second largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym2_ts"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the second largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym2_tk"}),(0,e.jsx)(d.td,{children:"VARCHAR(12)"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the second largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym3_at"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the third largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym3_ts"}),(0,e.jsx)(d.td,{children:"ENUM"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the third largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"worstSym3_tk"}),(0,e.jsx)(d.td,{children:"VARCHAR(12)"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"symbol with the third largest 50 slide loss"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"stkLiqRisk"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"estimated cost of neutralizingliquidating all stock positions half market width  position size"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"futLiqRisk"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"estimated cost of neutralizingliquidating all future positions half market width  position size"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"optLiqRisk"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"estimated cost of neutralizingliquidating all option positions half market width  position size"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"srRiskMargin"}),(0,e.jsx)(d.td,{children:"FLOAT"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{children:"SR assessed risk margin MAXhaircut37 worst3Risk  optCnMinimum"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"lastActivity"}),(0,e.jsx)(d.td,{children:"DATETIME(6)"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"timestamp"}),(0,e.jsx)(d.td,{children:"DATETIME(6)"}),(0,e.jsx)(d.td,{}),(0,e.jsx)(d.td,{})]})]})]}),"\n",(0,e.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,e.jsxs)(d.table,{children:[(0,e.jsx)(d.thead,{children:(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.th,{children:"Field"}),(0,e.jsx)(d.th,{children:"Sequence"})]})}),(0,e.jsxs)(d.tbody,{children:[(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"accnt"}),(0,e.jsx)(d.td,{children:"1"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"currency"}),(0,e.jsx)(d.td,{children:"2"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"tradeDate"}),(0,e.jsx)(d.td,{children:"3"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"riskSession"}),(0,e.jsx)(d.td,{children:"4"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"clientFirm"}),(0,e.jsx)(d.td,{children:"5"})]})]})]})]})}function h(s={}){const{wrapper:d}={...(0,r.R)(),...s.components};return d?(0,e.jsx)(d,{...s,children:(0,e.jsx)(j,{...s})}):j(s)}},28453:(s,d,t)=>{t.d(d,{R:()=>i,x:()=>l});var e=t(96540);const r={},n=e.createContext(r);function i(s){const d=e.useContext(n);return e.useMemo((function(){return"function"==typeof s?s(d):{...d,...s}}),[d,s])}function l(s){let d;return d=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:i(s.components),e.createElement(n.Provider,{value:d},s.children)}}}]);