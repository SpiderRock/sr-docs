"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[85507],{61637:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>s,contentTitle:()=>L,default:()=>i,frontMatter:()=>T,metadata:()=>a,toc:()=>N});var n=r(74848),t=r(28453);const T={title:"SymbolRiskSummaryV5"},L=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5/SymbolRiskSummaryV5",title:"SymbolRiskSummaryV5",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5/SymbolRiskSummaryV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SymbolRiskSummaryV5"},sidebar:"messageSchemasSidebar",previous:{title:"SymbolRiskDetailV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/"},next:{title:"TradeCubeDetailV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/TradeCubeDetailV5/"}},s={},N=[];function O(e){const o={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"../../../Topics/risk-v5/SymbolRiskSummaryV5",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgSymbolRiskSummaryV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'stock ticker (eg MSFT, SPY)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'stock ticker (eg MSFT, SPY)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'stock ticker (eg MSFT, SPY)',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SRAccnt (SR assigned;up to 16 chars)',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `riskSession` ENUM('Regular','PostClose') NOT NULL DEFAULT 'Regular',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'SR risk server code that published this record',\n    `sector` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SymbolControl.sector: user defined sector code',\n    `industry` INT NOT NULL DEFAULT 0 COMMENT 'industry code [00000000]',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'beta (usually beta to SPX; see AccountConfig.betaSource)',\n    `betaSource` ENUM('None','betaSPX','betaQQQ','betaIWM','clientBeta') NOT NULL DEFAULT 'None',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current live underlier price (can be from risk server, tool server, or srse server)',\n    `uMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current underlier price [as of risk server record publish] [freezes at 4pm EST]',\n    `uOpnMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start-of-day SR underlier mark (rotated from prior day record) [corp action adjusted]',\n    `lnDDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'long net position delta value (today; SR marks )',\n    `shDDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'short net position delta value (today; SR marks )',\n    `lnStkMktValueMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'long stock market value (today; SR marks)',\n    `shStkMktValueMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'short stock market value (today; SR marks)',\n    `optMktValueMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option position market value (SR mid marks);=sum[opCurPosM * opr.optVolMark]',\n    `optMktValueVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option position market value (SR vol marks);=sum[opCurPosM * opr.optMidMark]',\n    `shOpnPosClr` INT NOT NULL DEFAULT 0 COMMENT 'start of period position (from custodian or clearing firm)',\n    `shOpnPosPrv` INT NOT NULL DEFAULT 0 COMMENT 'start of period position (expected;from SpiderRock archive)',\n    `shOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'start of period position (effective;from either SR or CLR record)',\n    `shBot` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today',\n    `shSld` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today',\n    `shSldShrt` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld short today',\n    `shMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'shares money bot today',\n    `shMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'shares money sld today',\n    `shBotHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from open pos hedging (spdrSource=HedgeTool)',\n    `shSldHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from open pos hedging (spdrSource=HedgeTool)',\n    `shBotTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from open pos hedging (spdrSource=TradeHedge)',\n    `shSldTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from open pos hedging (spdrSource=TradeHedge)',\n    `shBotOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from open pos hedging (spdrSource=OpenHedge)',\n    `shSldOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from open pos hedging (spdrSource=OpenHedge)',\n    `shBotTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from a trade hedging source (AutoHedge or Trades loop)',\n    `shSldTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from a trade hedging source (AutoHedge or Trades loop)',\n    `maxStkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'most recent timestamp of a qualifying stock execution (used to ensure risk record integrity)',\n    `stPnlMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Stock Pnl (SR Marks);=(nbbo.mid - stPrvPrc) * shOpnClr',\n    `stPnlClr` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Stock Pnl (CLR Marks);=(nbbo.mid - stClrPrc) * shOpnClr',\n    `stPnlDay` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Net Stock Day Pnl;=sum[ (nbbo.min - fillPrice) * fillQuantity * side ]',\n    `stDivPnl` DOUBLE NOT NULL DEFAULT 0 COMMENT 'total cash paid/collected since prior period for this position (stock dividend value)',\n    `stBorrowPnl` DOUBLE NOT NULL DEFAULT 0 COMMENT 'total cash paid/collected since prior period for this position (borrow pnl; usually interest on HTB names)',\n    `opCnAbsCurPos` INT NOT NULL DEFAULT 0 COMMENT 'abs number of option contracts (position + fills);=sum[abs(opr.cnCurPos)]',\n    `opCnAbsOpnClr` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period option contracts (CLR view); =sum[abs(opr.cnOpnClr)]',\n    `opCnAbsOpnPrv` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period option contracts (SR view); =sum[abs(opr.cnOpnPrv)]',\n    `opCnAbsOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'abs number of start of period option contracts; =sum[abs(opr.cnOpnPos)]',\n    `opCnAbsOpnBrk` INT NOT NULL DEFAULT 0 COMMENT 'abs number of option contract start of period breaks (CLR - PRV);=sum[abs(opr.cnOpnClr - opr.cnOpnPrv)]',\n    `opShShort` INT NOT NULL DEFAULT 0 COMMENT 'equivalent shares from short option positions',\n    `opCnPosCall` INT NOT NULL DEFAULT 0 COMMENT 'net number of call contracts; =sum[opr.cnOpnClr + opr.cnBot - opr.cnSld] (if call)',\n    `opCnPosPut` INT NOT NULL DEFAULT 0 COMMENT 'net number of call contracts; =sum[opr.cnOpnClr + opr.cnBot - opr.cnSld] (if put)',\n    `opCnAbsPair` INT NOT NULL DEFAULT 0 COMMENT 'abs number of option contracts with CP reversals removed;=sum[abs(opr.cnOpnClr + opr.cnBot - opr.cnSld) - abs(opr.cnNetPos)]',\n    `absAtmEquivCn` FLOAT NOT NULL DEFAULT 0 COMMENT 'abs atm equivalent contracts; = sum[abs(opr.cnOpnPos + opr.cnBot - opr.cnSld) * opr.ve / opr.atmVega]',\n    `opCnBot` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts bot today;=sum[opr.cnBot]',\n    `opCnSld` INT NOT NULL DEFAULT 0 COMMENT 'number of option contracts sld today;=sum[opr.cnSld]',\n    `opMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option money bot',\n    `opMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option money sld',\n    `opPremBot` FLOAT NOT NULL DEFAULT 0 COMMENT 'option premium bot today;=sum[(max(0, opr.optVolMark - opr.loBound) * opr.pointValue) * opr.cnBot]',\n    `opPremSld` FLOAT NOT NULL DEFAULT 0 COMMENT 'option premium sld today;=sum[(max(0, opr.optVolMark - opr.loBound) * opr.pointValue) * opr.cnSld]',\n    `maxOptDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'DateTime of most recent SpdrOptionExecution (if any)',\n    `opPnlVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Open Pnl (SR vol marks); =sum[opr.opnPnlVolMark]',\n    `opPnlMid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Open Pnl (SR mid marks); =sum[opr.opnPnlMidMark]',\n    `opPnlClr` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Open Pnl (CLR marks); =sum[opr.opnPnlClrMark]',\n    `opPnlBrk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Mark Break Pnl (SR vol marks to CLR marks);=sum[(opr.cnOpnClr * opr.pointValue) * (opr.optVolMark - opr.optMidMark)]',\n    `opPnlDay` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option Day Pnl;=sum[opr.dayPnl]',\n    `opDnPnlDay` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Option DN Day Pnl (delta neutral);=sum[opr.dnDayPnl]',\n    `opDayVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Vega;=sum[opr.ve * (opr.cnBot - opr.cnSld) * opr.pointValue]',\n    `opDayWVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Vol Weighted Vega;=sum[opr.ve * opr.iVol * (opr.cnBot - opr.cnSld) * opr.pointvalue]',\n    `opDayTVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Time-Weighted Vega;=sum[opr.ve * / sqrt(max(0.1, opr.years * 4)) * (opr.cnBot - opr.cnSld) * opr.pointValue]',\n    `opDayWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Vol Time-Weighted Vega;=sum[opr.ve * (opr.iVol / sqrt(max(0.1, opr.years * 4))) * (opr.cnBot - opr.cnSld) * opr.pointValue]',\n    `opDayTheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Theta;=sum[opr.th * ((opr.cnBot - opr.cnSld) * opr.pointValue)]',\n    `opDayDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Day Delta;=sum[opr.de * ((opr.cnBot - opr.cnSld) * opr.underliersPerCn)]',\n    `opTrdDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Trade Delta (delta fixed at time of trade);=sum[opr.trdDelta]',\n    `pairPnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl;=sum[shNetClrM * (opr.optVolMark - opr.optOpnVolMark - opr.hedgeDePr * (opr.uMark - opr.uOpnMark))]',\n    `contHedgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Estimated continuous hedging pnl (open positions only) [~1 minute intervals]',\n    `contHedgePnl1` FLOAT NOT NULL DEFAULT 0 COMMENT 'Estimated continuous hedging pnl (open positions only) [~10 minute intervals]',\n    `opEdgeOpened` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Edge Opened (new risk);=sum[opr.edgeOpened]',\n    `opEdgeClosed` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Edge Closed (new risk);=sum[opr.edgeClosed]',\n    `pnlDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: delta neutral pnl: =sum[volPnl - shClrM * dUPrc * opr.dePr]',\n    `pnlDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: delta pnl;=sum[shClrM * dUPrc * opr.dePr]',\n    `pnlSl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: slope pnl;=sum[shClrM * dUPrc * opr.vePr * opr.veSlopePr]',\n    `pnlGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: gamma pnl;=sum[shClrM * 0.5 * dUPrc * dUPrc * (opr.ga + opr.gaPr)/2]',\n    `pnlTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: theta pnl;=sum[shClrM * dTime * -opr.thPr]',\n    `pnlVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: vega pnl;=sum[shClrM * 100 * dVol * opr.vePr]',\n    `pnlVo` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: volga pnl;=sum[shClrM * 0.5 * 100 * 100 * dVol * dVol * opr.voPr]',\n    `pnlVa` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: vanna pnl;=sum[shClrM * 100 * dVol * dUPrc * opr.vaPr]',\n    `pnlErr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: error (unexplained) pnl;=sum[shClrM * (volPnl - pnlDe - pnlGa - pnlTh - pnlVe)]',\n    `pnlRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: rate pnl;=sum[shClrM * 100 * dRate * opr.rhPr]',\n    `pnlSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: sdiv pnl;=sum[shClrM * 100 * dSDiv * opr.phPr]',\n    `pnlDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: ddiv pnl;=sum[shClrM * 100 * (opr.ddiv - opr.ddivPr) / opr.uPrc * opr.phPr]',\n    `pnlTe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Pnl Attr: theo edge pnl;=sum[shClrM * ((opr.tOpx - opr.optVolMark) - (opr.tOpxPr - opr.optOpnVolMark))]',\n    `pctIvChange` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg IVol Change (Numerator);=sum[abs(shClrM) * opr.ve * log(opr.iVol/opr.iVolPr)]',\n    `pctIvVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg IVol Change (Denominator);=sum[abs(shClrM) * opr.ve]',\n    `pctTvChange` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg TVol Change (Numerator);=sum[abs(shClrM) * opr.ve * log(opr.tVol/opr.tVolPr)]',\n    `pctTvVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Avg TVol Change (Denominator);=sum[abs(shClrM) * opr.ve]',\n    `stkWidthMny` FLOAT NOT NULL DEFAULT 0 COMMENT 'Stock Market Width Value;=sum[0.5 * abs(shCurPos) * (spr.stkAsk - spr.stkBid)]',\n    `optWidthMny` FLOAT NOT NULL DEFAULT 0 COMMENT 'Option Market Width Value;=sum[0.5 * abs(shCurPosM) * (opr.optAsk - opr.optBid)]',\n    `dayDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Day $Delta (bot or sld;all sources) today;',\n    `delta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Delta;=sum[shCurPos] + sum[fcCurPosM] + sum[shCurPosM * opr.de] + sum[other.delta]',\n    `ddelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position $Delta (Delta * DDMult)',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position DeltaDecay;=sum[shCurPosM * opr.deDecay] + sum[other.deDecay]',\n    `ddDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position $DeltaDecay (DeltaDecay * DDMult) [change in $delta when one trading day (1.0/252.0) is taken out of option pricing]',\n    `gamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Gamma;=sum[shCurPosM * opr.ga] + sum[other.gamma]',\n    `dGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position $Gamma',\n    `theta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Theta;=sum[shCurPosM * opr.th] + sum[other.theta]',\n    `rho` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Rho;=sum[shCurPosM * opr.rh] + sum[other.rho]',\n    `vega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vega;=sum[shCurPosM * opr.ve] + sum[other.vega]',\n    `tVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Time Weight Vega;=sum[shCurPosM * opr.ve / sqrt(max(0.1, opr.years * 4))]',\n    `wVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vol Weighted Vega;=sum[shCurPosM * opr.iVol * opr.ve]',\n    `wtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vol Time Weighted Vega;=sum[shCurPosM * opr.iVol * opr.ve / sqrt(max(0.1, opr.years * 4))]',\n    `ivolVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Avg Vol Numerator (vega weighted) (avg = ivolVe / avega); =sum[abs(shCurPosM) * opr.iVol * opr.ve]',\n    `volga` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Volga;=sum[shCurPosM * opr.vo] + sum[other.volga]',\n    `vanna` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Vanna;=sum[shCurPosM * opr.va] + sum[other.vanna]',\n    `slope` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position VegaDelta (uPrc/Vol correlation factor);=sum[shCurPosM * opr.sl * opr.ve] + sum[other.slope]',\n    `avega` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Abs Vega;=sum[abs(shCurPosM ) * opr.ve]',\n    `atheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Abs Theta;= sum[abs(shCurPosM) * opr.th]',\n    `hedgeGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion Hedge Gamma (either iVol or tVol based;can go binary);=sum[shCurPos * opr.hedgeGa]',\n    `hedgeDGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Postion ($) Hedge Gamma',\n    `premOvPar` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Premium Over Parity;=sum[shCurPosM *  max(0, opr.optVolMark - opr.loBound)]',\n    `simpPremOvPar` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Premium Over Parity Simple;=sum[shCurPosM * max(0,  opr.opxMidMark - max(0, \ufffd(strike - uprc)))]',\n    `wtVeDd` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dd Time Weighted Vega; =sum[wtVega] if opr.xde < -0.30',\n    `wtVeDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Time Weighted Vega; =sum[wtVega] if -0.30 <= opr.xde < -0.10',\n    `wtVeAt` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate At Time Weighted Vega; =sum[wtVega] if abs(opr.xde) <= 0.10',\n    `wtVeUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Up Time Weighted Vega; =sum[wtVega] if +0.10 < opr.xde <= +0.30',\n    `wtVeDu` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Du Time Weighted Vega; =sum[wtVega] if +0.30 < opr.xde',\n    `wtVeM1` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M1 Time Weighted Vega; =sum[wtVega] if days < 10',\n    `wtVeM2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M2 Time Weighted Vega; =sum[wtVega] if 10 < days < 25',\n    `wtVeM3` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M3 Time Weighted Vega; =sum[wtVega] if 25 < days < 65',\n    `wtVeM4` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M4 Time Weighted Vega; =sum[wtVega] if 65 < days < 130',\n    `wtVeM5` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate M5 Time Weighted Vega; =sum[wtVega] if 130 < days',\n    `pinXX` FLOAT NOT NULL DEFAULT 0 COMMENT 'pin strike nearest to current uPrc (zero = none) (only exists if there are near ATM option positions expiring today)',\n    `opnDeBelow` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Open Delta (Open Positions + Open Hedge Trades Only) if liveUPrc < pinXX',\n    `opnDeAbove` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Open Delta (Open Positions + Open Hedge Trades Only) if liveUPrc > pinXX',\n    `opnDDeBelow` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Open Delta (Open Positions + Open Hedge Trades Only) if liveUPrc < pinXX',\n    `opnDDeAbove` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Open Delta (Open Positions + Open Hedge Trades Only) if liveUPrc > pinXX',\n    `posDeBelow` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Hedge Delta (Current Position) if liveUPrc < pinXX',\n    `posDeAbove` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Hedge Delta (Current Position) if liveUPrc > pinXX',\n    `posDDeBelow` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Hedge Delta (Current Position) if liveUPrc < pinXX',\n    `posDDeAbove` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Hedge Delta (Current Position) if liveUPrc > pinXX',\n    `posHedgeDeltaEx` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position Hedge Delta (Current Position) if exDate != today',\n    `posHedgeDDeltaEx` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Position ($) Hedge Delta (Current Position) if exDate != today',\n    `mmhDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Delta allocated from other symbols (multi-multihedge symbols)',\n    `mmhContracts` INT NOT NULL DEFAULT 0 COMMENT 'Aggregate Contracts allocated from other symbols (multi-multihedge symbols)',\n    `mmhSources` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'Allocation source string (usually mmh contracts)',\n    `tEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate $ Theo Edge;=sum[shNetPosM * (opr.tOpx - opr.optVolMark)] if opr.tVol > 0.01 and opr.tOpx > 0.0 and opr.optVolMark > 0.0',\n    `tEdgeMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Abs Net Contracts (Rev/Conv contracts removed);= sum[abs(shNetPosM)]',\n    `tEdgePr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Prior Day $ Theo Edge',\n    `tEdgeMultPr` FLOAT NOT NULL DEFAULT 0 COMMENT 'Prior Day Aggregate Abs Net Contracts',\n    `numTVolErrors` SMALLINT NOT NULL DEFAULT 0 COMMENT 'number of opr.tErr != 0 or opr.tVol < 0.01',\n    `posTEdgeWV` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) >= 0)',\n    `negTEdgeWV` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) < 0)',\n    `badTEdgeWV` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx = 0)',\n    `posTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) >= 0)',\n    `negTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) < 0)',\n    `badTEdgePnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr = 0)',\n    `tEdge2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate $ Theo Edge;=sum[shNetPosM * (opr.tOpx - opr.optVolMark)] if opr.tVol > 0.01 and opr.tOpx > 0.0 and opr.optVolMark > 0.0',\n    `tEdgeMult2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Abs Net Contracts (Rev/Conv contracts removed);= sum[abs(shNetPosM)]',\n    `tEdgePr2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Prior Day $ Theo Edge',\n    `tEdgeMultPr2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Prior Day Aggregate Abs Net Contracts',\n    `numTVolErrors2` SMALLINT NOT NULL DEFAULT 0 COMMENT 'number of opr.tErr != 0 or opr.tVol < 0.01',\n    `posTEdgeWV2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) >= 0)',\n    `negTEdgeWV2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx > 0 and (opr.tOpx - opr.optVolMark) < 0)',\n    `badTEdgeWV2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Vol Weighted Vega (wvega) where (opr.tOpx = 0)',\n    `posTEdgePnl2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) >= 0)',\n    `negTEdgePnl2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr > 0 and (opr.tOpxPr - opr.priorOpxVolMark) < 0)',\n    `badTEdgePnl2` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Dn Pair Pnl where (opr.tOpxPr = 0)',\n    `VaRsu90` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 90%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.90))',\n    `VaRsd90` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 90%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.90))',\n    `VaRsu50` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 50%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.50))',\n    `VaRsd50` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 50%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.50))',\n    `VaRsu15` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 15%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.15))',\n    `VaRsd15` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 15%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.15))',\n    `VaRsu10` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 10%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.10))',\n    `VaRsd10` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 10%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.10))',\n    `VaRsu06` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 6%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.06))',\n    `VaRsd08` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 8%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.08))',\n    `VaRsu05` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 5%, vol unchanged (newUPrc = uPrc * Math.Exp(+0.05))',\n    `VaRsd05` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 5%, vol unchanged (newUPrc = uPrc * Math.Exp(-0.05))',\n    `VaRsu1e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 1x implied earn move, vol ramp out',\n    `VaRsd1e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 1x implied earn move, vol ramp out',\n    `VaRsu2e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 2x implied earn move, vol ramp out',\n    `VaRsd2e` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn 2x implied earn move, vol ramp out',\n    `VaRearn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: vol earn ramp out (no uPrc move)',\n    `VaRcash` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up 30%, vol = 0.01, 6mn deal close (delta neutral)',\n    `marginUDnVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn, vol dn',\n    `marginUDnVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn, vol up',\n    `marginUUpVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up, vol dn',\n    `marginUUpVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up, vol up',\n    `stkLiqRisk` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Equity Liquidation Risk',\n    `optLiqRisk` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Option Liquidation Risk',\n    `shBotC0` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical shares bot (~1 minute intervals)',\n    `shSldC0` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical shares sld',\n    `shMnyC0` FLOAT NOT NULL DEFAULT 0 COMMENT 'hypothetical money',\n    `shBotC1` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical shares bot (~10 minute intervals)',\n    `shSldC1` INT NOT NULL DEFAULT 0 COMMENT 'hypothetical shares sld',\n    `shMnyC1` FLOAT NOT NULL DEFAULT 0 COMMENT 'hypothetical money',\n    `opHcMin25` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(option haircut minimum) [$25.00/cn]',\n    `opHcMin37` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum(option haircut minimum) [$37.50/cn]',\n    `haircut25` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Risk Margin (JBO): [$25 minimum;-15/+15 uPrc slides]',\n    `haircut37` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate Risk Margin (PM): [$37.50 minimum;-8/+6 uPrc slides (broad based);-15/+15 uPrc slides (non-broad based)]',\n    `numStkErrors` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of stock positions with a computation error (should be zero)',\n    `numOptErrors` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of options positions with a computation error (should be zero)',\n    `updateSource` ENUM('None','Loop','Priority') NOT NULL DEFAULT 'None',\n    `stkMarkFlag` VARCHAR(255) NOT NULL DEFAULT 'None' COMMENT 'Stock position error flag',\n    `optMarkFlag` VARCHAR(255) NOT NULL DEFAULT 'None' COMMENT 'Option position error flag',\n    `riskAlert1` ENUM('None','ExerciseNow','ExBeforeNextDiv','ExAfterNextDiv','ExBeforeFutureDiv','ExAfterFutureDiv','ExDivCall','ExAskSoon','ExAskNow','ExSurfSoon','ExSurfNow','ExBidSoon','ExBidNow') NOT NULL DEFAULT 'None' COMMENT 'Risk Alert Code: Early Exercise, etc.',\n    `riskAlert2` ENUM('None','ExerciseNow','ExBeforeNextDiv','ExAfterNextDiv','ExBeforeFutureDiv','ExAfterFutureDiv','ExDivCall','ExAskSoon','ExAskNow','ExSurfSoon','ExSurfNow','ExBidSoon','ExBidNow') NOT NULL DEFAULT 'None' COMMENT 'Risk Alert Code: Early Exercise, etc.',\n    `riskAlert3` ENUM('None','ExerciseNow','ExBeforeNextDiv','ExAfterNextDiv','ExBeforeFutureDiv','ExAfterFutureDiv','ExDivCall','ExAskSoon','ExAskNow','ExSurfSoon','ExSurfNow','ExBidSoon','ExBidNow') NOT NULL DEFAULT 'None' COMMENT 'Risk Alert Code: Early Exercise, etc.',\n    `riskAlert4` ENUM('None','ExerciseNow','ExBeforeNextDiv','ExAfterNextDiv','ExBeforeFutureDiv','ExAfterFutureDiv','ExDivCall','ExAskSoon','ExAskNow','ExSurfSoon','ExSurfNow','ExBidSoon','ExBidNow') NOT NULL DEFAULT 'None' COMMENT 'Risk Alert Code: Early Exercise, etc.',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`accnt`,`tradeDate`,`riskSession`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SymbolRiskSummary records contain live symbol level risk aggregation of StockPositionRecord and OptionPositionRecord values.\\nRecords are published by AggRiskServers if/when positions change and about once per minute otherwise.';\n\n"})})]})}function i(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(O,{...e})}):O(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>L,x:()=>a});var n=r(96540);const t={},T=n.createContext(t);function L(e){const o=n.useContext(T);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:L(e.components),n.createElement(T.Provider,{value:o},e.children)}}}]);