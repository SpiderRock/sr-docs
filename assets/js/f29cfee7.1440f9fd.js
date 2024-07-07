"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75128],{78241:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>L,default:()=>p,frontMatter:()=>T,metadata:()=>a,toc:()=>N});var r=n(74848),t=n(28453);const T={title:"ProductRiskSummaryV5"},L=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskSummaryV5/ProductRiskSummaryV5",title:"ProductRiskSummaryV5",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskSummaryV5/ProductRiskSummaryV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskSummaryV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskSummaryV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskSummaryV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ProductRiskSummaryV5"},sidebar:"messageSchemasSidebar",previous:{title:"ProductRiskDetailV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ProductRiskDetailV5/"},next:{title:"RiskAggGroupStateV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/RiskAggGroupStateV5/"}},s={},N=[];function O(o){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...o.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"../../../Topics/risk-v5/ProductRiskSummaryV5",children:"V8 Message Definition"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgProductRiskSummaryV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `riskSession` ENUM('Regular','PostClose') NOT NULL DEFAULT 'Regular',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '',\n    `lnDDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'long net position delta value (today; SR marks )',\n    `shDDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'short net position delta value (today; SR marks )',\n    `futMktValueMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'future position market value (today; SR mid marks)',\n    `optMktValueMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option position market value (SR mid marks); =sum[opCurPosM * opr.optVolMark]',\n    `optMktValueVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option position market value (SR vol marks); =sum[opCurPosM * opr.optMidMark]',\n    `fcAbsCurPos` INT NOT NULL DEFAULT 0 COMMENT 'abs number of future contracts (position + fills);=sum[abs(fpr.cnCurPos)]',\n    `fcAbsOpnClr` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period future contracts (CLR view);=sum[abs(fpr.cnOpnClr)]',\n    `fcAbsOpnPrv` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period future contracts (SR view);=sum[abs(fpr.cnOpnPrv)]',\n    `fcAbsOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period future contracts (effective);=sum[abs(fpr.cnOpnPos)]',\n    `fcAbsOpnBrk` INT NOT NULL DEFAULT 0 COMMENT 'abs number of future contract start of period breaks (CLR - PRV);=sum[abs(fpr.cnOpnClr - fpr.cnOpnPrv)]',\n    `fcNetCurPos` INT NOT NULL DEFAULT 0 COMMENT 'net future contract position;=sum[fpr.cnOpnClr + fpr.cnBot - fpr.cnSld]',\n    `fcBot` INT NOT NULL DEFAULT 0 COMMENT 'number of futures contracts bot today;=sum(frr.cnBot)',\n    `fcSld` INT NOT NULL DEFAULT 0 COMMENT 'number of futures contracts sld today;=sum(frr.cnSld)',\n    `fcBotHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from hedging (spdrSource=HedgeTool)',\n    `fcSldHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from hedging (spdrSource=HedgeTool)',\n    `fcBotTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from hedging (spdrSource=TradeHedge)',\n    `fcSldTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from hedging (spdrSource=TradeHedge)',\n    `fcBotOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from hedging (spdrSource=OpenHedge)',\n    `fcSldOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from hedging (spdrSource=OpenHedge)',\n    `fcBotTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from a trade hedging source (AutoHedge or Trades loop)',\n    `fcSldTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from a trade hedging source (AutoHedge or Trades loop)',\n    `fcMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'futures money bot today',\n    `fcMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'futures money sld today',\n    `maxFutDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'DateTime of most recent SpdrFuturenExecution (if any)',\n    `fcPnlMid` FLOAT NOT NULL DEFAULT 0 COMMENT 'Futures Open Pnl (SR marks); =sum[fpr.cnOpnClr * fpr.unitsPerCn * (fpr.futMark - fpr.futOpnMidMark]',\n    `fcPnlClr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Futures Open Pnl (CLR marks); =sum[fpr.cnOpnClr * fpr.unitsPerCn * (fpr.futMark - fpr.futOpnClrMark]',\n    `fcPnlDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Futures Day Pnl;=sum(fpr.dayPnl)',\n    `opCnAbsCurPos` INT NOT NULL DEFAULT 0 COMMENT 'abs number of option contracts (position + fills);=sum[abs(opr.cnCurPos)]',\n    `opCnAbsOpnClr` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period option contracts (CLR view); =sum[abs(opr.cnOpnClr)]',\n    `opCnAbsOpnPrv` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period option contracts (SR view); =sum[abs(opr.cnOpnPrv)]',\n    `opCnAbsOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period option contracts; =sum[abs(opr.cnOpnPos)]',\n    `opCnAbsOpnBrk` INT NOT NULL DEFAULT 0 COMMENT 'abs number of option contract start of period breaks (CLR - PRV);=sum[abs(opr.cnOpnClr - opr.cnOpnPrv)]',\n    `opCnPosCall` INT NOT NULL DEFAULT 0 COMMENT 'net number of call contracts;=sum[opr.cnOpnClr + opr.cnBot - opr.cnSld] (if call)',\n    `opCnPosPut` INT NOT NULL DEFAULT 0 COMMENT 'net number of call contracts;=sum[opr.cnOpnClr + opr.cnBot - opr.cnSld] (if put)',\n    `opCnAbsPair` INT NOT NULL DEFAULT 0 COMMENT 'abs number of option contracts with CP reversals removed; =sum[abs(opr.cnOpnClr + opr.cnBot - opr.cnSld) - abs(opr.cnNetPos)]',\n    `opCnAbsAtmEquiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'abs atm equivalent contracts; = sum[abs(opr.cnOpnPos + opr.cnBot - opr.cnSld) * opr.ve / opr.atmVega]',\n    `opCnBot` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts bot today;=sum[opr.cnBot]',\n    `opCnSld` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts sld today;=sum[opr.cnSld]',\n    `opMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option money bot',\n    `opMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option money sld',\n    `opPremBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'option premium bot today;=sum[(max(0, opr.optVolMark - opr.loBound) * opr.pointValue) * opr.cnBot]',\n    `opPremSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'option premium sld today;=sum[(max(0, opr.optVolMark - opr.loBound) * opr.pointValue) * opr.cnSld]',\n    `maxOptDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'DateTime of most recent SpdrOptionExecution (if any)',\n    `opPnlVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Open Pnl (SR vol marks); =sum[opr.opnPnlVolMark]',\n    `opPnlMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Open Pnl (SR mid marks); =sum[opr.opnPnlMidMark]',\n    `opPnlClr` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Open Pnl (CLR marks); =sum[opr.opnPnlClrMark]',\n    `opPnlBrk` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Mark Break (catch-up) Pnl (SR vol marks to CLR marks);=sum[(opr.cnOpnClr * opr.pointValue) * (opr.optVolMark - opr.optClrMark)]',\n    `opPnlDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Pnl;=sum[opr.dayPnl]',\n    `opDnPnlDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option DN Day Pnl (delta neutral);=sum[opr.dnDayPnl]',\n    `opDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega traded today',\n    `opDayWVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (vol weighted) vega traded today',\n    `opDayTVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (time weighted) vega traded today',\n    `opDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'option (vol time weighted) vega traded today',\n    `opDayTheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Theta;=sum[opr.th * ((opr.cnBot - opr.cnSld) * opr.pointValue)]',\n    `opDayDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Delta;=sum[opr.de * ((opr.cnBot - opr.cnSld) * opr.underliersPerCn)]',\n    `opTrdDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Trade Delta (delta fixed at time of trade);=sum[opr.trdDelta]',\n    `contHedgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Estimated continuous hedging pnl (open positions only) [~1 minute intervals]',\n    `contHedgePnl1` FLOAT NOT NULL DEFAULT 0 COMMENT 'Estimated continuous hedging pnl (open positions only) [~10 minute intervals]',\n    `opEdgeOpened` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Edge Opened (new risk);=sum[opr.edgeOpened]',\n    `opEdgeClosed` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Edge Closed (new risk);=sum[opr.edgeClosed]',\n    `pnlDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: delta neutral pnl: =sum[volPnl - shClrM * dUPrc * opr.dePr]',\n    `pnlDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: delta pnl;=sum[shClrM * dUPrc * opr.dePr]',\n    `pnlSl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: slope pnl;=sum[shClrM * dUPrc * opr.vePr * opr.slPr]',\n    `pnlGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: gamma pnl;=sum[shClrM * 0.5 * dUPrc * dUPrc * (opr.ga + opr.gaPr)/2]',\n    `pnlTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: theta pnl;=sum[shClrM * dTime * -opr.thPr]',\n    `pnlVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: vega pnl;=sum[shClrM * 100 * dVol * opr.vePr]',\n    `pnlVo` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: volga pnl;=sum[shClrM * 0.5 * 100 * 100 * dVol * dVol * opr.voPr]',\n    `pnlVa` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: vanna pnl;=sum[shClrM * 100 * dVol * dUPrc * opr.vaPr]',\n    `pnlErr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: error (unexplained) pnl;=sum[shClrM * (volPnl - pnlDe - pnlGa - pnlTh - pnlVe)]',\n    `pnlRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: rate pnl;=sum[shClrM * 100 * dRate * opr.rhPr]',\n    `pnlSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: sdiv pnl;=sum[shClrM * 100 * dSDiv * opr.phPr]',\n    `pnlDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: ddiv pnl;=sum[shClrM * 100 * (opr.ddiv - opr.ddivPr) / opr.uPrc * opr.phPr]',\n    `pnlTe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: theo edge pnl;=sum[shClrM * ((opr.tOpx - opr.optVolMark) - (opr.tOpxPr - opr.optOpnVolMark))]',\n    `pctIvChange` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg IVol Change (Numerator);=sum[abs(shClrM) * opr.ve * log(opr.iVol/opr.iVolPr)]',\n    `pctIvVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg IVol Change (Denominator);=sum[abs(shClrM) * opr.ve]',\n    `pctTvChange` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg TVol Change (Numerator);=sum[abs(shClrM) * opr.ve * log(opr.tVol/opr.tVolPr)]',\n    `pctTvVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg TVol Change (Denominator);=sum[abs(shClrM) * opr.ve]',\n    `futWidthMny` FLOAT NOT NULL DEFAULT 0 COMMENT 'Future Market Width Value;=sum[0.5 * abs(fcCurPosM) * (fpr.futAsk - fpr.futBid)]',\n    `optWidthMny` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Market Width Value;=sum[0.5 * abs(shCurPosM) * (opr.optAsk - opr.optBid)]',\n    `dayDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Day $Delta (bot or sld;all sources) today;',\n    `delta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Delta;=sum[shCurPos] + sum[fcCurPosM] + sum[shCurPosM * opr.de] + sum[other.delta]',\n    `ddelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position $Delta (Delta * DDMult)',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position DeltaDecay;=sum[shCurPosM * opr.deDecay] + sum[other.deDecay]',\n    `ddDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position $DeltaDecay (DeltaDecay * DDMult) [change in $delta when one trading day (1.0/252.0) is taken out of option pricing]',\n    `gamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Gamma;=sum[shCurPosM * opr.ga] + sum[other.gamma]',\n    `dGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position $Gamma',\n    `theta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Theta;=sum[shCurPosM * opr.th] + sum[other.theta]',\n    `rho` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Rho;=sum[shCurPosM * opr.rh] + sum[other.rho]',\n    `vega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vega;=sum[shCurPosM * opr.ve] + sum[other.vega]',\n    `tVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Time Weight Vega;=sum[shCurPosM * opr.ve / sqrt(max(0.1, opr.years * 4))]',\n    `wVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vol Weighted Vega;=sum[shCurPosM * opr.iVol * opr.ve]',\n    `wtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vol Time Weighted Vega;=sum[shCurPosM * opr.iVol * opr.ve / sqrt(max(0.1, opr.years * 4))]',\n    `ivolVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Avg Vol Numerator (vega weighted) (avg = ivolVe / avega);=sum[abs(shCurPosM) * opr.iVol * opr.ve]',\n    `volga` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Volga;=sum[shCurPosM * opr.vo] + sum[other.volga]',\n    `vanna` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vanna;=sum[shCurPosM * opr.va] + sum[other.vanna]',\n    `slope` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position VegaDelta (uPrc/Vol correlation factor);=sum[shCurPosM * opr.sl * opr.ve] + sum[other.slope]',\n    `avega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Abs Vega;=sum[abs(shCurPosM ) * opr.ve]',\n    `atheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Abs Theta;= sum[abs(shCurPosM) * opr.th]',\n    `hedgeGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Hedge Gamma (either iVol or tVol based;can go binary);=sum[shCurPos * opr.hedgeGa]',\n    `hedgeDGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Hedge $Gamma',\n    `premOvPar` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Premium Over Parity;=sum[shCurPosM *  max(0, opr.optVolMark - opr.loBound)]',\n    `wtVeDd` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dd Time Weighted Vega;=sum[wtVega] if opr.xde < -0.30',\n    `wtVeDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Time Weighted Vega;=sum[wtVega] if -0.30 <= opr.xde < -0.10',\n    `wtVeAt` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate At Time Weighted Vega;=sum[wtVega] if abs(opr.xde) <= 0.10',\n    `wtVeUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Up Time Weighted Vega;=sum[wtVega] if +0.10 < opr.xde <= +0.30',\n    `wtVeDu` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Du Time Weighted Vega;=sum[wtVega] if +0.30 < opr.xde',\n    `wtVeM1` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M1 Time Weighted Vega; =sum[wtVega] if days < 10',\n    `wtVeM2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M2 Time Weighted Vega; =sum[wtVega] if 10 < days < 25',\n    `wtVeM3` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M3 Time Weighted Vega; =sum[wtVega] if 25 < days < 65',\n    `wtVeM4` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M4 Time Weighted Vega; =sum[wtVega] if 65 < days < 130',\n    `wtVeM5` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M5 Time Weighted Vega; =sum[wtVega] if 130 < days',\n    `opnDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Open Delta (Open Positions + Open Hedge Trades Only)',\n    `opnDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Open Delta (Open Positions + Open Hedge Trades Only)',\n    `posDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Hedge Delta (Current Position)',\n    `posDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Hedge Delta (Current Position)',\n    `posHedgeDeltaEx` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Hedge Delta (Current Position) if exDate != today',\n    `posHedgeDDeltaEx` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Hedge Delta (Current Position) if exDate != today',\n    `tEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate $ Theo Edge;=sum[shNetPosM * (opr.tOpx - opr.optVolMark)] if opr.tVol > 0.01 and opr.tOpx > 0.0 and opr.optVolMark > 0.0',\n    `tEdgeMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Abs Net Contracts (Rev/Conv contracts removed);= sum[abs(shNetPosM)]',\n    `tEdgePr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Prior Day $ Theo Edge',\n    `tEdgeMultPr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Prior Day Aggregate Abs Net Contracts',\n    `numTVolErrors` SMALLINT NOT NULL DEFAULT 0 COMMENT 'number of opr.tErr != 0 or opr.tVol < 0.01',\n    `pairPnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl;=sum[shNetClrM * (opr.optVolMark - opr.optOpnVolMark - opr.hedgeDePr * (opr.uMark - opr.uOpnMark))]',\n    `posTEdgeWV` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) >= 0)',\n    `negTEdgeWV` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) < 0)',\n    `badTEdgeWV` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx = 0)',\n    `posTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) >= 0)',\n    `negTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) < 0)',\n    `badTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr = 0)',\n    `span01` FLOAT NOT NULL DEFAULT 0 COMMENT 'span1: uPrc=unch, vol=up',\n    `span02` FLOAT NOT NULL DEFAULT 0 COMMENT 'span2: uPrc=unch, vol=down',\n    `span03` FLOAT NOT NULL DEFAULT 0 COMMENT 'span3: uPrc=+33.33%, vol=up',\n    `span04` FLOAT NOT NULL DEFAULT 0 COMMENT 'span4: uPrc=+33.33%, vol=dn',\n    `span05` FLOAT NOT NULL DEFAULT 0 COMMENT 'span5: uPrc=-33.33%, vol=up',\n    `span06` FLOAT NOT NULL DEFAULT 0 COMMENT 'span6: uPrc=-33.33%, vol=down',\n    `span07` FLOAT NOT NULL DEFAULT 0 COMMENT 'span7: uPrc=+66.67%, vol=up',\n    `span08` FLOAT NOT NULL DEFAULT 0 COMMENT 'span8: uPrc=+66.67%, vol=down',\n    `span09` FLOAT NOT NULL DEFAULT 0 COMMENT 'span9: uPrc=-66.67%, vol=up',\n    `span10` FLOAT NOT NULL DEFAULT 0 COMMENT 'span10: uPrc=-66.67%, vol=down',\n    `span11` FLOAT NOT NULL DEFAULT 0 COMMENT 'span11: uPrc=+100%, vol=up',\n    `span12` FLOAT NOT NULL DEFAULT 0 COMMENT 'span12: uPrc=+100%, vol=down',\n    `span13` FLOAT NOT NULL DEFAULT 0 COMMENT 'span13: uPrc=-100%, vol=up',\n    `span14` FLOAT NOT NULL DEFAULT 0 COMMENT 'span14: uPrc=-100%, vol=down',\n    `span15` FLOAT NOT NULL DEFAULT 0 COMMENT 'span15: uPrc=+300%; price slide * 0.33',\n    `span16` FLOAT NOT NULL DEFAULT 0 COMMENT 'span16: uPrc=-300%, price slide * 0.33',\n    `futLiqRisk` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Future Liquidation Risk',\n    `optLiqRisk` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Option Liquidation Risk',\n    `fcBotC0` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical future contracts bot (~ 1 minute intervals)',\n    `fcSldC0` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical future contracts sld',\n    `fcMnyC0` FLOAT NOT NULL DEFAULT 0 COMMENT 'hypothetical money',\n    `fcBotC1` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical future contracts bot (~ 10 minute intervals)',\n    `fcSldC1` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical future contracts sld',\n    `fcMnyC1` FLOAT NOT NULL DEFAULT 0 COMMENT 'hypothetical money',\n    `futMargin` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Future Risk Margin',\n    `numFutErrors` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of futures positions with a computation error (should be zero)',\n    `numOptErrors` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of options positions with a computation error (should be zero)',\n    `futMarkFlag` VARCHAR(255) NOT NULL DEFAULT 'None',\n    `optMarkFlag` VARCHAR(255) NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`accnt`,`tradeDate`,`riskSession`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='ProductRiskSummary records contain live risk aggregation of FutureRiskSummaryV5 records.\\nRecords are published if/when positions change and about once per minute otherwise.';\n\n"})})]})}function p(o={}){const{wrapper:e}={...(0,t.R)(),...o.components};return e?(0,r.jsx)(e,{...o,children:(0,r.jsx)(O,{...o})}):O(o)}},28453:(o,e,n)=>{n.d(e,{R:()=>L,x:()=>a});var r=n(96540);const t={},T=r.createContext(t);function L(o){const e=r.useContext(T);return r.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:L(o.components),r.createElement(T.Provider,{value:e},o.children)}}}]);