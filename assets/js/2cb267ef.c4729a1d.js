"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8918],{24903:(e,N,T)=>{T.r(N),T.d(N,{assets:()=>i,contentTitle:()=>t,default:()=>E,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var n=T(74848),L=T(28453);const o={title:"RiskCubeDetailV5"},t=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRRisk/RiskCubeDetailV5/RiskCubeDetailV5",title:"RiskCubeDetailV5",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/RiskCubeDetailV5/RiskCubeDetailV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/RiskCubeDetailV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/RiskCubeDetailV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/RiskCubeDetailV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RiskCubeDetailV5"},sidebar:"messageSchemasSidebar",previous:{title:"RiskAggGroupStateV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/RiskAggGroupStateV5/"},next:{title:"SodCashRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/"}},i={},a=[];function s(e){const N={a:"a",code:"code",p:"p",pre:"pre",...(0,L.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.p,{children:(0,n.jsx)(N.a,{href:"../../../Topics/risk-v5/RiskCubeDetailV5",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(N.pre,{children:(0,n.jsx)(N.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgRiskCubeDetailV5` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR Accnt',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Call','Put','Stock','Future','Cash') NOT NULL DEFAULT 'None' COMMENT '[Call, Put, Stock, Future, Cash]',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `riskSession` ENUM('Regular','PostClose') NOT NULL DEFAULT 'Regular',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `version` ENUM('None','Live','EarlyArchive','LateArchive') NOT NULL DEFAULT 'None',\n    `clearingFirm` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'Clearing Firm',\n    `clearingAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'Clearing Firm Accnt',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'SR RiskServer (server that published this record)',\n    `viewGroup1` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Client defined view group #1 (can be fitered/aggregated)',\n    `viewGroup2` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Client defined view group #2 (can be fitered/aggregated)',\n    `viewGroup3` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Client defined view group #3 (can be fitered/aggregated)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Risk Symbol (underlier for equities; product group for future/option complexes)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Risk Symbol (underlier for equities; product group for future/option complexes)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Risk Symbol (underlier for equities; product group for future/option complexes)',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'Symbol risk class (from SymbolControl record)',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None' COMMENT 'Symbol type',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'beta (usually beta to SPX; see AccountConfig.betaSource)',\n    `betaSource` ENUM('None','betaSPX','betaQQQ','betaIWM','clientBeta') NOT NULL DEFAULT 'None',\n    `sector` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'Client defined sector (from SymbolControl record)',\n    `indNum` INT NOT NULL DEFAULT 0 COMMENT 'Ind Num (00)',\n    `subNum` INT NOT NULL DEFAULT 0 COMMENT 'Sub Num (0000)',\n    `grpNum` INT NOT NULL DEFAULT 0 COMMENT 'Grp Num (000000)',\n    `nbrNum` INT NOT NULL DEFAULT 0 COMMENT 'Nbr Num (00000000)',\n    `eDays` SMALLINT NOT NULL DEFAULT 0 COMMENT 'days to next earnings [-5, +30]',\n    `dDays` SMALLINT NOT NULL DEFAULT 0 COMMENT 'days to next dividend [-5, +30]',\n    `xDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'calls = +0.5 - delta; puts = -0.5 - delta',\n    `expCode` ENUM('None','W1','W2','M1','M2','M34','M56','M7C','Y1','Y2') NOT NULL DEFAULT 'None' COMMENT 'Time-to-expiry code (W1, W2, M1, M2, M34, M56, M7C, Y1, Y2)',\n    `skewCode` ENUM('None','DD','DN','AT','UP','DU') NOT NULL DEFAULT 'None' COMMENT 'Skew bucket code (Dd=Deep DownSide, Dn = DownSide, At = ATM, Up = UpSide, DU = FarUpSide)',\n    `eDaysCode` ENUM('None','Past','eDay_0','eDay_1','eDays_2_3','eDays_4_5','eDays_6_10','eDays_11_25','eDays_26_65') NOT NULL DEFAULT 'None' COMMENT 'Days to next earnings event (if any)',\n    `iVolRange` ENUM('None','iVolRng_01_03','iVolRng_03_06','iVolRng_06_09','iVolRng_09_12','iVolRng_12_15','iVolRng_15_20','iVolRng_20_25','iVolRng_25_35','iVolRng_35_50','iVolRng_50_80','iVolRng_80_up') NOT NULL DEFAULT 'None' COMMENT 'Implied ATM Vol Range',\n    `skewDD` FLOAT NOT NULL DEFAULT 0 COMMENT 'dd (deep downside) skew metric (xde < -0.30)',\n    `skewDN` FLOAT NOT NULL DEFAULT 0 COMMENT 'dn (downside) skew metric (-0.30 < xde < -0.10)',\n    `skewAT` FLOAT NOT NULL DEFAULT 0 COMMENT 'at (atm) skew risk metric (-0.10 < xde < +0.10)',\n    `skewUP` FLOAT NOT NULL DEFAULT 0 COMMENT 'up (upside) skew risk metric (+0.10 < xde < +0.30)',\n    `skewDU` FLOAT NOT NULL DEFAULT 0 COMMENT 'du (far upside) skew risk metric (+0.30 < xde)',\n    `shOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'shares (start-of-day)',\n    `fcOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'futures contracts (start-of-day)',\n    `cnOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'options contracts (start-of-day)',\n    `cnAtmEquiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm equivalent contracts; (opr.cnOpnPos + opr.cnBot - opr.cnSld) * opr.ve / opr.atmVega',\n    `shBot` INT NOT NULL DEFAULT 0 COMMENT 'shares bot',\n    `shSld` INT NOT NULL DEFAULT 0 COMMENT 'shares sld',\n    `shSldShrt` INT NOT NULL DEFAULT 0 COMMENT 'shares sld short',\n    `fcBot` INT NOT NULL DEFAULT 0 COMMENT 'future contracts bot',\n    `fcSld` INT NOT NULL DEFAULT 0 COMMENT 'future contracts sld',\n    `cnBot` INT NOT NULL DEFAULT 0 COMMENT 'option contracts bot',\n    `cnSld` INT NOT NULL DEFAULT 0 COMMENT 'option contracts sld',\n    `cnOpened` INT NOT NULL DEFAULT 0 COMMENT 'option contracts opened',\n    `cnClosed` INT NOT NULL DEFAULT 0 COMMENT 'option contracts closed',\n    `opnDir` VARCHAR(2) NOT NULL DEFAULT '' COMMENT 'open (start-of-day) direction (LN or SH)',\n    `posDir` VARCHAR(2) NOT NULL DEFAULT '' COMMENT 'current (start-of-day + trades) direction (LN or SH)',\n    `unitOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'effective opening position (shares or cn * underlierPerCn) (start-of-day)',\n    `unitCurPos` INT NOT NULL DEFAULT 0 COMMENT 'effective current position (shares or cn * underlierPerCn) (start-of-day + trades)',\n    `unitQtyBot` INT NOT NULL DEFAULT 0 COMMENT 'effective shares bot (shares or cn * underlierPerCn)',\n    `unitQtySld` INT NOT NULL DEFAULT 0 COMMENT 'effective shares sld (shares or cn * underlierPerCn)',\n    `dayPnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'day pnl',\n    `dayDnPnl` FLOAT NOT NULL DEFAULT 0 COMMENT 'day pnl (delta neutral)',\n    `dayTrdDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade delta',\n    `dayTrdDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade $delta',\n    `dayTrdGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade gamma',\n    `dayTrdDGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade $gamma',\n    `dayTrdVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade vega',\n    `dayTrdWVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade wVega (vega * vol)',\n    `dayTrdTVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade tVega (vega / sqrt(max(0.1, years * 4)))',\n    `dayTrdWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade wtVega (vega * vol / sqrt(max(0.1, years * 4)))',\n    `dayTrdTheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'day trade theta',\n    `dayEdgeOpened` FLOAT NOT NULL DEFAULT 0 COMMENT 'day theo option edge opened (requires a theo model)',\n    `dayEdgeClosed` FLOAT NOT NULL DEFAULT 0 COMMENT 'day theo option edge closed (requires a theo model)',\n    `dayMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'day money bot',\n    `dayMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'day money sld',\n    `opnPnlVolMark` FLOAT NOT NULL DEFAULT 0 COMMENT '(cur.surface - pr.surface) * cnOpnClr * upc',\n    `opnPnlMidMark` FLOAT NOT NULL DEFAULT 0 COMMENT '(cur.mid - pr.mid) * cnOpnClr * upc',\n    `opnPnlClrMark` FLOAT NOT NULL DEFAULT 0 COMMENT '(cur.mid - pr.clr) * cnOpnClr * upc',\n    `opnMarkBrkMny` FLOAT NOT NULL DEFAULT 0 COMMENT '(cur.surface - cur.mid) * cnOpnClr * upc',\n    `opnTheoEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'opening edge (edge at the end of prior period) (requires a theo model)',\n    `posTheoEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'current edge (opening positions + trades) (requires a theo model)',\n    `tVolMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'LN(tVol / tVolPr)',\n    `tEdgeMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'LN(tVol / iVol) - LN(tVolPr / iVolPr)',\n    `tEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'LN(tVol / iVol)',\n    `opnPnlDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * hedgeDe * dUPrc\t\t\t( pnlSD = sum(pnlDe) [stock + futures + options] )',\n    `opnPnlGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * 0.5 * optGamma * dUPrc * dUPrc',\n    `opnPnlTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * optTheta * dTime',\n    `opnPnlVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * optVega * dVol',\n    `opnPnlVo` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * 0.5 * optVolga * dVol * dVol',\n    `opnPnlVa` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * optVanna * dVol * dUPrc',\n    `opnPnlSl` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * vol/uPrc * slope * optVega * dUPrc',\n    `opnPnlRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * optRho * dRate',\n    `opnPnlSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * optPhi * dSDv',\n    `opnPnlDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * optPhi * dDDv',\n    `opnPnlErr` FLOAT NOT NULL DEFAULT 0 COMMENT 'unattributed pnl: SR Vol Pnl - opnPnlDe - opnPnlGa - opnPnlTh - opnPnlVe - opnPnlRat - opnPnlSDiv - opnPnlDDiv',\n    `opnEdgeChange` FLOAT NOT NULL DEFAULT 0 COMMENT 'open position * mult * (tEdge - tEdgePr) (requires a theo model)',\n    `posDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * hedgeDe',\n    `posDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * hedgeDe * UPrc',\n    `posDBeta` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * hedgeDe * beta * UPrc',\n    `posGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optGamma',\n    `posDGamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optGamma * uPrc * uPrc / 100',\n    `posVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optVega',\n    `posWVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optVega * iVol',\n    `posTVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optVega / sqrt(max(0.1, years * 4))',\n    `posWtVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optVega * iVol / sqrt(max(0.1, years * 4))',\n    `posVolga` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optVolg',\n    `posVanna` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optVanna',\n    `posTheta` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optTheta',\n    `posRho` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optRho',\n    `posPhi` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * optPhi',\n    `posNotional` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * uPrc',\n    `posMktValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * SR surface mark',\n    `posPremOPar` FLOAT NOT NULL DEFAULT 0 COMMENT 'live position * mult * premium over parity',\n    `atmVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm volatility',\n    `symVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier symbol volatility (term.21d;censored)',\n    `srSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'strike veSlope (sr surface;options only)',\n    `prcSVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Vol',\n    `prcTOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price',\n    `prcYOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Yesterday Surface Price',\n    `prcUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier price',\n    `prcYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'years-to-expiry',\n    `prcRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'discount rate-to-expiry',\n    `prcSdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'continuous stock div rate-to-expiry',\n    `prcDdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative discrete dividend paid through expiry',\n    `uPrcRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock price multiplier',\n    `uPrcMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'Underlier price change',\n    `iVolMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'Implied vol change (fixed strike ivol change from prior period)',\n    `exDivAmt` FLOAT NOT NULL DEFAULT 0 COMMENT 'estimated exDiv amount (if any)',\n    `borrowRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'estimated stock borrow rate (if any)',\n    `modelType` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SRPricingLib.CalcModelType',\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'underliers per contract',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None' COMMENT 'underlier type (used for option pricing)',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'value of one point',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `tickValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'value of one tick',\n    `multihedge` ENUM('None','Simple','Complex','AllCash','Binary','Fragment') NOT NULL DEFAULT 'None',\n    `multihedgeSource_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'MH Ticker Key (starts with ''_'') (if exists)',\n    `multihedgeSource_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'MH Ticker Key (starts with ''_'') (if exists)',\n    `multihedgeSource_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'MH Ticker Key (starts with ''_'') (if exists)',\n    `multihedgePVRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'pv multiplier (fraction of underlier value (uPerCn x uPrc) / SUM(uPerCn x uPrc) associated with this fragment',\n    `spanPrcIncUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'default (exchange) span price up increment for this asset',\n    `spanPrcIncDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'default (exchange) span price dn increment for this asset',\n    `spanVolInc` FLOAT NOT NULL DEFAULT 0 COMMENT 'default (exchange) span volatility increment for this asset',\n    `prcSpanType` ENUM('None','Pts','Pct','Log') NOT NULL DEFAULT 'None' COMMENT 'exchange prcSpan type',\n    `volSpanType` ENUM('None','Pts','Pct','Log') NOT NULL DEFAULT 'None' COMMENT 'exchange volSpan type',\n    `spanPricingModel` ENUM('None','BS','B','M','W','WS','WB','CA','CE','I') NOT NULL DEFAULT 'None' COMMENT 'Exchange-defined model for SPAN option pricing calcs',\n    `marginType` ENUM('None','NMS_Equity','NMS_Index','NMS_Medium') NOT NULL DEFAULT 'None' COMMENT 'margin slide type: NMS_Equity = +/- 15%, NMS_Index = -8%/+6%, NMS_Medium = +/-10%',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`tradeDate`,`riskSession`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='RiskCubeDetail records are published by CoreRiskServers and are designed to be aggregated and analyzed over time.\\nRiskCubeDetail records are published to the SpiderRock Archive Host data pipeline at the end of each trading period.';\n\n"})})]})}function E(e={}){const{wrapper:N}={...(0,L.R)(),...e.components};return N?(0,n.jsx)(N,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},28453:(e,N,T)=>{T.d(N,{R:()=>t,x:()=>r});var n=T(96540);const L={},o=n.createContext(L);function t(e){const N=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(N):{...N,...e}}),[N,e])}function r(e){let N;return N=e.disableParentContext?"function"==typeof e.components?e.components(L):e.components||L:t(e.components),n.createElement(o.Provider,{value:N},e.children)}}}]);