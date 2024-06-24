"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11101],{95007:(r,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var e=d(74848),s=d(28453);const n={title:"ProductRiskSummaryV5"},l="Message: ProductRiskSummaryV5 (ID: 4815)",i={id:"Schema/Topics/risk-v5/ProductRiskSummaryV5",title:"ProductRiskSummaryV5",description:"ProductRiskSummary records contain live risk aggregation of FutureRiskSummaryV5 records.Records are published if/when positions change and about once per minute otherwise.",source:"@site/docs/Schema/Topics/4740-risk-v5/ProductRiskSummaryV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/ProductRiskSummaryV5",permalink:"/docs/Schema/Topics/risk-v5/ProductRiskSummaryV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ProductRiskSummaryV5"},sidebar:"schemaSidebar",previous:{title:"ProductRiskDetailV5",permalink:"/docs/Schema/Topics/risk-v5/ProductRiskDetailV5"},next:{title:"RiskAggGroupStateV5",permalink:"/docs/Schema/Topics/risk-v5/RiskAggGroupStateV5"}},c={},o=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(r){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...r.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.h1,{id:"message-productrisksummaryv5-id-4815",children:["Message: ProductRiskSummaryV5 ",(0,e.jsx)("span",{className:"small-text",children:"(ID: 4815)"})]}),"\n",(0,e.jsxs)(t.p,{children:["ProductRiskSummary records contain live risk aggregation of FutureRiskSummaryV5 records.",(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),"Records are published if/when positions change and about once per minute otherwise."]}),"\n",(0,e.jsxs)("div",{className:"single-message-meta",children:[(0,e.jsx)(t.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Attribute"}),(0,e.jsx)(t.th,{children:"Value"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"MLink Token"}),(0,e.jsx)(t.td,{children:"SystemData"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"SRSE Product"}),(0,e.jsx)(t.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,e.jsxs)("div",{className:"single-message-primarykey",children:[(0,e.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Field"}),(0,e.jsx)(t.th,{children:"Type"}),(0,e.jsx)(t.th,{children:"Comment"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"ticker"}),(0,e.jsx)(t.td,{children:"TickerKey"}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"accnt"}),(0,e.jsx)(t.td,{children:"string(16)"}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"tradeDate"}),(0,e.jsx)(t.td,{children:"DateKey"}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"riskSession"}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.a,{href:"../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"clientFirm"}),(0,e.jsx)(t.td,{children:"string(16)"}),(0,e.jsx)(t.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,e.jsxs)("div",{className:"single-message-body",children:[(0,e.jsx)(t.h3,{id:"body",children:"BODY"}),(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Field"}),(0,e.jsx)(t.th,{children:"Type"}),(0,e.jsx)(t.th,{children:"Comment"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"atheta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Postion Abs Theta;= sum[abs(shCurPosM) * opr.th]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"avega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Postion Abs Vega;=sum[abs(shCurPosM ) * opr.ve]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"badTEdgePnl"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Dn Pair Pnl where (opr.tOpxPr = 0)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"badTEdgeWV"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Vol Weighted Vega (wvega) where (opr.tOpx = 0)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"contHedgePnl"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Estimated continuous hedging pnl (open positions only) [~1 minute intervals]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"contHedgePnl1"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Estimated continuous hedging pnl (open positions only) [~10 minute intervals]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"dGamma"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position $Gamma"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"dayDDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Day $Delta (bot or sld;all sources) today;"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"ddDecay"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position $DeltaDecay (DeltaDecay * DDMult) [change in $delta when one trading day (1.0/252.0) is taken out of option pricing]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"ddelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position $Delta (Delta * DDMult)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"deDecay"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position DeltaDecay;=sum[shCurPosM * opr.deDecay] + sum[other.deDecay]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"delta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Delta;=sum[shCurPos] + sum[fcCurPosM] + sum[shCurPosM * opr.de] + sum[other.delta]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcAbsCurPos"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of future contracts (position + fills);=sum[abs(fpr.cnCurPos)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcAbsOpnBrk"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of future contract start of period breaks (CLR - PRV);=sum[abs(fpr.cnOpnClr - fpr.cnOpnPrv)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcAbsOpnClr"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of start of period future contracts (CLR view);=sum[abs(fpr.cnOpnClr)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcAbsOpnPos"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of start of period future contracts (effective);=sum[abs(fpr.cnOpnPos)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcAbsOpnPrv"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of start of period future contracts (SR view);=sum[abs(fpr.cnOpnPrv)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBot"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of futures contracts bot today;=sum(frr.cnBot)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBotC0"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"hypothetical future contracts bot (~ 1 minute intervals)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBotC1"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"hypothetical future contracts bot (~ 10 minute intervals)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBotHdg"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts bot today from hedging (spdrSource=HedgeTool)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBotOpn"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts bot today from hedging (spdrSource=OpenHedge)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBotTrd"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts bot today from a trade hedging source (AutoHedge or Trades loop)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcBotTrh"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts bot today from hedging (spdrSource=TradeHedge)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcMnyBot"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"futures money bot today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcMnyC0"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"hypothetical money"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcMnyC1"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"hypothetical money"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcMnySld"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"futures money sld today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcNetCurPos"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"net future contract position;=sum[fpr.cnOpnClr + fpr.cnBot - fpr.cnSld]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcPnlClr"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Futures Open Pnl (CLR marks); =sum[fpr.cnOpnClr * fpr.unitsPerCn * (fpr.futMark - fpr.futOpnClrMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcPnlDay"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Futures Day Pnl;=sum(fpr.dayPnl)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcPnlMid"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Futures Open Pnl (SR marks); =sum[fpr.cnOpnClr * fpr.unitsPerCn * (fpr.futMark - fpr.futOpnMidMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSld"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of futures contracts sld today;=sum(frr.cnSld)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSldC0"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"hypothetical future contracts sld"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSldC1"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"hypothetical future contracts sld"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSldHdg"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts sld today from hedging (spdrSource=HedgeTool)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSldOpn"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts sld today from hedging (spdrSource=OpenHedge)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSldTrd"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts sld today from a trade hedging source (AutoHedge or Trades loop)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"fcSldTrh"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of contracts sld today from hedging (spdrSource=TradeHedge)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"futLiqRisk"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Future Liquidation Risk"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"futMargin"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Future Risk Margin"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"futMarkFlag"}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.a,{href:"../../Enums/MktErrFlag",children:"flag : MktErrFlag"})}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"futMktValueMid"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"future position market value (today; SR mid marks)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"futWidthMny"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Future Market Width Value;=sum[0.5 * abs(fcCurPosM) * (fpr.futAsk - fpr.futBid)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"gamma"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Gamma;=sum[shCurPosM * opr.ga] + sum[other.gamma]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"hedgeDGamma"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Postion Hedge $Gamma"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"hedgeGamma"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Postion Hedge Gamma (either iVol or tVol based;can go binary);=sum[shCurPos * opr.hedgeGa]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"ivolVe"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Avg Vol Numerator (vega weighted) (avg = ivolVe / avega);=sum[abs(shCurPosM) * opr.iVol * opr.ve]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"lnDDelta"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"long net position delta value (today; SR marks )"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"maxFutDttm"}),(0,e.jsx)(t.td,{children:"DateTime"}),(0,e.jsx)(t.td,{children:"DateTime of most recent SpdrFuturenExecution (if any)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"maxOptDttm"}),(0,e.jsx)(t.td,{children:"DateTime"}),(0,e.jsx)(t.td,{children:"DateTime of most recent SpdrOptionExecution (if any)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"negTEdgePnl"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) < 0)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"negTEdgeWV"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) < 0)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"numFutErrors"}),(0,e.jsx)(t.td,{children:"byte"}),(0,e.jsx)(t.td,{children:"number of futures positions with a computation error (should be zero)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"numOptErrors"}),(0,e.jsx)(t.td,{children:"byte"}),(0,e.jsx)(t.td,{children:"number of options positions with a computation error (should be zero)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"numTVolErrors"}),(0,e.jsx)(t.td,{children:"short"}),(0,e.jsx)(t.td,{children:"number of opr.tErr != 0 or opr.tVol < 0.01"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsAtmEquiv"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"abs atm equivalent contracts; = sum[abs(opr.cnOpnPos + opr.cnBot - opr.cnSld) * opr.ve / opr.atmVega]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsCurPos"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of option contracts (position + fills);=sum[abs(opr.cnCurPos)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsOpnBrk"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of option contract start of period breaks (CLR - PRV);=sum[abs(opr.cnOpnClr - opr.cnOpnPrv)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsOpnClr"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of start of period option contracts (CLR view); =sum[abs(opr.cnOpnClr)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsOpnPos"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of start of period option contracts; =sum[abs(opr.cnOpnPos)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsOpnPrv"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of start of period option contracts (SR view); =sum[abs(opr.cnOpnPrv)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnAbsPair"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"abs number of option contracts with CP reversals removed; =sum[abs(opr.cnOpnClr + opr.cnBot - opr.cnSld) - abs(opr.cnNetPos)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnBot"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of option contracts bot today;=sum[opr.cnBot]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnPosCall"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"net number of call contracts;=sum[opr.cnOpnClr + opr.cnBot - opr.cnSld] (if call)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnPosPut"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"net number of call contracts;=sum[opr.cnOpnClr + opr.cnBot - opr.cnSld] (if put)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opCnSld"}),(0,e.jsx)(t.td,{children:"int"}),(0,e.jsx)(t.td,{children:"number of option contracts sld today;=sum[opr.cnSld]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDayDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Day Delta;=sum[opr.de * ((opr.cnBot - opr.cnSld) * opr.underliersPerCn)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDayTVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"option (time weighted) vega traded today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDayTheta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Day Theta;=sum[opr.th * ((opr.cnBot - opr.cnSld) * opr.pointValue)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDayVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"option vega traded today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDayWVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"option (vol weighted) vega traded today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDayWtVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"option (vol time weighted) vega traded today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opDnPnlDay"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option DN Day Pnl (delta neutral);=sum[opr.dnDayPnl]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opEdgeClosed"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Edge Closed (new risk);=sum[opr.edgeClosed]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opEdgeOpened"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Edge Opened (new risk);=sum[opr.edgeOpened]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opMnyBot"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"option money bot"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opMnySld"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"option money sld"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPnlBrk"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Mark Break (catch-up) Pnl (SR vol marks to CLR marks);=sum[(opr.cnOpnClr * opr.pointValue) * (opr.optVolMark - opr.optClrMark)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPnlClr"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"Option Open Pnl (CLR marks); =sum[opr.opnPnlClrMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPnlDay"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Day Pnl;=sum[opr.dayPnl]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPnlMid"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"Option Open Pnl (SR mid marks); =sum[opr.opnPnlMidMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPnlVol"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"Option Open Pnl (SR vol marks); =sum[opr.opnPnlVolMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPremBot"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"option premium bot today;=sum[(max(0, opr.optVolMark - opr.loBound) * opr.pointValue) * opr.cnBot]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opPremSld"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"option premium sld today;=sum[(max(0, opr.optVolMark - opr.loBound) * opr.pointValue) * opr.cnSld]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opTrdDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Trade Delta (delta fixed at time of trade);=sum[opr.trdDelta]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opnDDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position ($) Open Delta (Open Positions + Open Hedge Trades Only)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"opnDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Open Delta (Open Positions + Open Hedge Trades Only)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"optLiqRisk"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Option Liquidation Risk"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"optMarkFlag"}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.a,{href:"../../Enums/MktErrFlag",children:"flag : MktErrFlag"})}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"optMktValueMid"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"option position market value (SR mid marks); =sum[opCurPosM * opr.optVolMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"optMktValueVol"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"option position market value (SR vol marks); =sum[opCurPosM * opr.optMidMark]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"optWidthMny"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Market Width Value;=sum[0.5 * abs(shCurPosM) * (opr.optAsk - opr.optBid)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pairPnl"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Dn Pair Pnl;=sum[shNetClrM * (opr.optVolMark - opr.optOpnVolMark - opr.hedgeDePr * (opr.uMark - opr.uOpnMark))]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pctIvChange"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Avg IVol Change (Numerator);=sum[abs(shClrM) * opr.ve * log(opr.iVol/opr.iVolPr)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pctIvVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Avg IVol Change (Denominator);=sum[abs(shClrM) * opr.ve]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pctTvChange"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Avg TVol Change (Numerator);=sum[abs(shClrM) * opr.ve * log(opr.tVol/opr.tVolPr)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pctTvVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Avg TVol Change (Denominator);=sum[abs(shClrM) * opr.ve]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlDDiv"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: ddiv pnl;=sum[shClrM * 100 * (opr.ddiv - opr.ddivPr) / opr.uPrc * opr.phPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlDe"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: delta pnl;=sum[shClrM * dUPrc * opr.dePr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlDn"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: delta neutral pnl: =sum[volPnl - shClrM * dUPrc * opr.dePr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlErr"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: error (unexplained) pnl;=sum[shClrM * (volPnl - pnlDe - pnlGa - pnlTh - pnlVe)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlGa"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: gamma pnl;=sum[shClrM * 0.5 * dUPrc * dUPrc * (opr.ga + opr.gaPr)/2]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlRate"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: rate pnl;=sum[shClrM * 100 * dRate * opr.rhPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlSDiv"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: sdiv pnl;=sum[shClrM * 100 * dSDiv * opr.phPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlSl"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: slope pnl;=sum[shClrM * dUPrc * opr.vePr * opr.slPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlTe"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: theo edge pnl;=sum[shClrM * ((opr.tOpx - opr.optVolMark) - (opr.tOpxPr - opr.optOpnVolMark))]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlTh"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: theta pnl;=sum[shClrM * dTime * -opr.thPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlVa"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: vanna pnl;=sum[shClrM * 100 * dVol * dUPrc * opr.vaPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlVe"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: vega pnl;=sum[shClrM * 100 * dVol * opr.vePr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"pnlVo"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Option Pnl Attr: volga pnl;=sum[shClrM * 0.5 * 100 * 100 * dVol * dVol * opr.voPr]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"posDDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Hedge Delta (Current Position)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"posDelta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Hedge Delta (Current Position)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"posHedgeDDeltaEx"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position ($) Hedge Delta (Current Position) if exDate != today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"posHedgeDeltaEx"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Hedge Delta (Current Position) if exDate != today"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"posTEdgePnl"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) >= 0)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"posTEdgeWV"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) >= 0)"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"premOvPar"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Premium Over Parity;=sum[shCurPosM *  max(0, opr.optVolMark - opr.loBound)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"rho"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Rho;=sum[shCurPosM * opr.rh] + sum[other.rho]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"riskServerCode"}),(0,e.jsx)(t.td,{children:"string(6)"}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"shDDelta"}),(0,e.jsx)(t.td,{children:"double"}),(0,e.jsx)(t.td,{children:"short net position delta value (today; SR marks )"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"slope"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position VegaDelta (uPrc/Vol correlation factor);=sum[shCurPosM * opr.sl * opr.ve] + sum[other.slope]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span01"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span1: uPrc=unch, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span02"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span2: uPrc=unch, vol=down"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span03"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span3: uPrc=+33.33%, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span04"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span4: uPrc=+33.33%, vol=dn"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span05"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span5: uPrc=-33.33%, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span06"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span6: uPrc=-33.33%, vol=down"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span07"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span7: uPrc=+66.67%, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span08"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span8: uPrc=+66.67%, vol=down"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span09"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span9: uPrc=-66.67%, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span10"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span10: uPrc=-66.67%, vol=down"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span11"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span11: uPrc=+100%, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span12"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span12: uPrc=+100%, vol=down"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span13"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span13: uPrc=-100%, vol=up"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span14"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span14: uPrc=-100%, vol=down"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span15"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span15: uPrc=+300%; price slide * 0.33"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"span16"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"span16: uPrc=-300%, price slide * 0.33"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"tEdge"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate $ Theo Edge;=sum[shNetPosM * (opr.tOpx - opr.optVolMark)] if opr.tVol > 0.01 and opr.tOpx > 0.0 and opr.optVolMark > 0.0"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"tEdgeMult"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Abs Net Contracts (Rev/Conv contracts removed);= sum[abs(shNetPosM)]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"tEdgeMultPr"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Prior Day Aggregate Abs Net Contracts"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"tEdgePr"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Prior Day $ Theo Edge"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"tVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Time Weight Vega;=sum[shCurPosM * opr.ve / sqrt(max(0.1, opr.years * 4))]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"theta"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Theta;=sum[shCurPosM * opr.th] + sum[other.theta]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"timestamp"}),(0,e.jsx)(t.td,{children:"DateTime"}),(0,e.jsx)(t.td,{})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"vanna"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Vanna;=sum[shCurPosM * opr.va] + sum[other.vanna]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"vega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Vega;=sum[shCurPosM * opr.ve] + sum[other.vega]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"volga"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Volga;=sum[shCurPosM * opr.vo] + sum[other.volga]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Vol Weighted Vega;=sum[shCurPosM * opr.iVol * opr.ve]"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeAt"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeDd"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeDn"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeDu"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeM1"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate M1 Time Weighted Vega; =sum[wtVega] if days < 10"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeM2"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate M2 Time Weighted Vega; =sum[wtVega] if 10 < days < 25"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeM3"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate M3 Time Weighted Vega; =sum[wtVega] if 25 < days < 65"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeM4"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate M4 Time Weighted Vega; =sum[wtVega] if 65 < days < 130"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeM5"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate M5 Time Weighted Vega; =sum[wtVega] if 130 < days"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVeUp"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"wtVega"}),(0,e.jsx)(t.td,{children:"float"}),(0,e.jsx)(t.td,{children:"Aggregate Position Vol Time Weighted Vega;=sum[shCurPosM * opr.iVol * opr.ve / sqrt(max(0.1, opr.years * 4))]"})]})]})]})]})]})}function a(r={}){const{wrapper:t}={...(0,s.R)(),...r.components};return t?(0,e.jsx)(t,{...r,children:(0,e.jsx)(h,{...r})}):h(r)}},28453:(r,t,d)=>{d.d(t,{R:()=>l,x:()=>i});var e=d(96540);const s={},n=e.createContext(s);function l(r){const t=e.useContext(n);return e.useMemo((function(){return"function"==typeof r?r(t):{...t,...r}}),[t,r])}function i(r){let t;return t=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:l(r.components),e.createElement(n.Provider,{value:t},r.children)}}}]);