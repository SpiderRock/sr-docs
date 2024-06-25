"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23141],{58412:(s,d,e)=>{e.r(d),e.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var t=e(74848),r=e(28453);const n={title:"AccountRiskRecordV5"},l="Message: AccountRiskRecordV5 (ID: 4745)",i={id:"Schema/Topics/risk-v5/AccountRiskRecordV5",title:"AccountRiskRecordV5",description:"AccountRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute.",source:"@site/docs/Schema/Topics/4740-risk-v5/AccountRiskRecordV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/AccountRiskRecordV5",permalink:"/docs/Schema/Topics/risk-v5/AccountRiskRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AccountRiskRecordV5"},sidebar:"schemaSidebar",previous:{title:"SpdrRiskCounter",permalink:"/docs/Schema/Topics/risk-counter/SpdrRiskCounter"},next:{title:"CurrencyPositionRecordV5",permalink:"/docs/Schema/Topics/risk-v5/CurrencyPositionRecordV5"}},c={},h=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(s){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"message-accountriskrecordv5-id-4745",children:["Message: AccountRiskRecordV5 ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4745)"})]}),"\n",(0,t.jsx)(d.p,{children:"AccountRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"ClientRisk"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR account acronym"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"currency"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(d.td,{children:"point currency of all associated positions and pnl values"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tradeDate"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"riskSession"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR assigned client firm acronym"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRcash"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 30%, vol = 0.01, 6mn deal close (delta neutral)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRearn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: vol earn ramp out (no uPrc move)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 5%, vol unchanged (newUPrc = uPrc * exp(-0.05))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 10%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.10))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 15%, vol unchanged (newUPrc = uPrc * exp(-0.15))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd1e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 1x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd2e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 2x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd50"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 50%, vol unchanged (newUPrc = uPrc * exp(-0.50))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsd90"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn 90%, vol unchanged (newUPrc = uPrc * exp(-0.90))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 5%, vol unchanged (newUPrc = uPrc * exp(+0.05))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 10%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.10))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 15%, vol unchanged (newUPrc = uPrc * exp(+0.15))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu1e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 1x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu2e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 2x implied earn move, vol ramp out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu50"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 50%, vol unchanged (newUPrc = uPrc * exp(+0.50))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"VaRsu90"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up 90%, vol unchanged (newUPrc = uPrc * exp(+0.90))"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absCurCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"absolute number of account option contracts (CLR + trades);=sum(srs.opCnAbsCur)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absCurFc"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"absolute number of account future contracts (CLR + trades);=sum(srs.opFcAbsCur)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absCurSh"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"absolute number of account shares (CLR + trades);=sum(srs.opShAbsCur)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"badTEdgePnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate pnl (no theo edge symbols);=sum(srs.badTEdgePnl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"corpActCashPnL"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dayDDelta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"day $delta;= sum(srs.dayDelta)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ddelta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"net $delta;=sum(srs.ddelta)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dividendPnl"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futDayCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"future day contracts (bot + sld);"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futDayMny"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"future day mny (sld - bot)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futDayPnl"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"futures day pnl;=sum(srs.fcPnlDay)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futLiqRisk"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"estimated cost of neutralizing/liquidating all future positions (half market width * position size)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futMktValue"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"future market value (today; SR marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOpnPnlClr"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOpnPnlMid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptDayCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"future option day contracts (bot + sld);"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptDayMny"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"future option day mny (sld - bot)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptDayPnl"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"future option day pnl;= sum(srs.opPnlDay)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptMktValue"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"future option market value (today; SR vol marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptOpnPnlClr"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptOpnPnlMid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"futOptOpnPnlVol"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"haircut25"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"haircut ($25 minimum/cn) [act basis]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"haircut37"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"haircut ($37 minimum/cn) [act basis]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hcCnt"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"count of haircut > $0.0 symbols"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ivolLn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ivolSh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"lastActivity"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"lnDDelta"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"long net position $delta value (underlier + options) (today; SR marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"lnStkMktValue"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"long stock market value (today; SR marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"negTEdgePnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate pnl (negative edge symbols);=sum(srs.negTEdgePnl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"numSymbols"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"count of srs records being aggregated"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayTVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option (time weighted) vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayTheta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theta traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayWVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option (vol weighted) vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opDayWtVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option (vol time weighted) vega traded today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opEdgeClosed"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theo edge closed today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opEdgeOpened"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theo edge opened today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optCnMinimum"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option contract margin minimum (37.50 for equities;SPAN minimum for options on futures)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optExAsPnl"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optLiqRisk"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"estimated cost of neutralizing/liquidating all option positions (half market width * position size)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlDDiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option DDiv pnl;=sum(srs.pnlDDiv)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlDe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option delta pnl;=sum(srs.pnlDe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlDn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option delta neutral pnl;=sum(srs.pnlDn)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlErr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option unexplained (error) pnl;=sum(srs.pnlErr)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlGa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option gamma pnl;=sum(srs.pnlGa)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlLn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option pnl from symbol positions with +vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlRate"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option Rate pnl;=sum(srs.pnlRate)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlSDiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option SDiv pnl;=sum(srs.pnlSDiv)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlSh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option pnl from symbol positions with -vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlSl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega/delta pnl;=sum(srs.pnlSl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlTe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theo edge pnl;=sum(srs.pnlTe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlTh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option theta pnl;=sum(srs.pnlTh)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlVa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vanna pnl;=sum(srs.pnlVa)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlVe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega pnl;=sum(srs.pnlVe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pnlVo"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option volga pnl;=sum(srs.pnlVo)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"posTEdgePnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate pnl (positive edge symbols);=sum(srs.posTEdgePnl)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"premOvPar"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate premium over parity for the option position;=sum(srs.premOvPar)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rhoLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long rho symbol positions;=sum(+srs.rho) if srs.rho > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rhoShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short rho symbol positions;= sum(-srs.rho) if srs.rho < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"riskServerCode"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"risk server that published this record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shDDelta"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"short net position $delta value (underlier + options) (today; SR marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shStkMktValue"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"short stock market value (today; SR marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span01"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span1: uPrc=unch, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span02"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span2: uPrc=unch, vol=down"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span03"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span3: uPrc=+33.33%, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span04"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span4: uPrc=+33.33%, vol=dn"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span5: uPrc=-33.33%, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span06"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span6: uPrc=-33.33%, vol=down"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span07"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span7: uPrc=+66.67%, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span08"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span8: uPrc=+66.67%, vol=down"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span09"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span9: uPrc=-66.67%, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span10: uPrc=-66.67%, vol=down"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span11"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span11: uPrc=+100%, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span12"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span12: uPrc=+100%, vol=down"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span13"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span13: uPrc=-100%, vol=up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span14"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span14: uPrc=-100%, vol=down"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span15: uPrc=+300%; price slide * 0.33"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"span16"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"span16: uPrc=-300%, price slide * 0.33"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"srRiskMargin"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"SR assessed risk margin MAX(haircut37, worst3Risk + optCnMinimum)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkDayMny"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"stock day mny (sld - bot)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkDayPnl"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"stock day pnl;=sum(srs.stPnlDay)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkLiqRisk"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"estimated cost of neutralizing/liquidating all stock positions (half market width * position size)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOpnPnlClr"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOpnPnlMid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptDayCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"stock option day contracts (bot + sld);"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptDayMny"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"stock option day mny (sld - bot)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptDayPnl"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"stock option day pnl;= sum(srs.opPnlDay)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptMktValue"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"stock option market value (today; SR vol marks)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptOpnPnlClr"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptOpnPnlMid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stkOptOpnPnlVol"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"stktDaySh"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"stock day shares (bot + sld);"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tEdge"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"aggregate option theo edge;=sum(srs.tEdge)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tEdgeMult"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"denominator for computing edge per unit;=sum(srs.tEdgeMult)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"thetaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long vega symbol positions;=sum(+srs.theta) if srs.theta > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"thetaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short vega symbol positions;= sum(-srs.theta) if srs.theta < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vegaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long vega symbol positions;=sum(+srs.vega) if srs.vega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vegaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short vega symbol positions;= sum(-srs.vega) if srs.vega < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wVegaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long weighted vega symbol positions;=sum(+srs.wVega) if srs.wVega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wVegaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short weighted vega symbol positions;= sum(-srs.wVega) if srs.wVega < 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"worst3Risk"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of 3 worst 50% slide loss symbols"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"worstSym1"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"symbol with the largest 50% slide loss"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"worstSym2"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"symbol with the second largest 50% slide loss"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"worstSym3"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"symbol with the third largest 50% slide loss"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeAt"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeDd"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeDn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeDu"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeM1"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate M1 Time Weighted Vega;=sum[wtVega] if days < 10"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeM2"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate M2 Time Weighted Vega;=sum[wtVega] if 10 < days < 25"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeM3"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate M3 Time Weighted Vega;=sum[wtVega] if 25 < days < 65"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeM4"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate M4 Time Weighted Vega;=sum[wtVega] if 65 < days < 130"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeM5"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate M5 Time Weighted Vega;=sum[wtVega] if 130 < days"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVeUp"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVegaLong"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of long time weighted weighted vega symbol positions;=sum(+srs.wtVega) if srs.wtVega > 0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"wtVegaShort"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"sum of short time weighted vega symbol positions;= sum(-srs.wtVega) if srs.wtVega < 0"})]})]})]})]})]})}function o(s={}){const{wrapper:d}={...(0,r.R)(),...s.components};return d?(0,t.jsx)(d,{...s,children:(0,t.jsx)(x,{...s})}):x(s)}},28453:(s,d,e)=>{e.d(d,{R:()=>l,x:()=>i});var t=e(96540);const r={},n=t.createContext(r);function l(s){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof s?s(d):{...d,...s}}),[d,s])}function i(s){let d;return d=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:l(s.components),t.createElement(n.Provider,{value:d},s.children)}}}]);