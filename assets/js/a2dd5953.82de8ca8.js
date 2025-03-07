"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2744],{13048:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=s(74848),t=s(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/StockPositionRecordV5",title:"StockPositionRecordV5",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/StockPositionRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SodClearingRecordV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/"},next:{title:"SymbolMarginSummaryV5",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/risk-v5/StockPositionRecordV5",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.\nThese records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.\nNew records are published immediately when a position changes and about once per minute if no position has changed.\nNote that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks."}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"4740-risk-v5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"ClientRisk"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRRisk"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeDate"}),(0,d.jsx)(r.td,{children:"DATE"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'1900-01-01'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskSession"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/RiskSession",children:"enum - RiskSession"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'Regular'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR assigned client firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskServerCode"}),(0,d.jsx)(r.td,{children:"VARCHAR(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"priAggGroup"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"primary aggregation group"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secAggGroup"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"secondary aggregation group"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"symbolType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tickValue"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"NLV value of a single tick change in display premium\tpointValue  tickValue  tickSize"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pointValue"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"NLV value of a single point change in display premium pointValue  tickValue  tickSize"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pointCurrency"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"priceFormat"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"price display format code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkPrc"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"current stock price any market session persists if market closedhalted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkBid"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"current stock bid any market session zero if market closedhalted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkAsk"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"current stock ask any market session zero if market closedhalted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMark"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"current stock mark freezes at SR CloseMarkTime"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMarkErrCodes"}),(0,d.jsx)(r.td,{children:"VARCHAR(255)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMarkSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/UMarkSource",children:"enum - UMarkSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnMidMark"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"startofday SR stock mark rotated from prior day record corp action adjusted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnClrMark"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"startofday CLR stock mark supplied by clientclearing firm via clearing position load should be corp action adjusted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPosPrv"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"startofday SR share position rotated from prior day record corp action adjusted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPosClr"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"startofday CLR share position supplied by clientclearing firm via clearing position load should be corp action adjusted"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPos"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"start of period share position effective can be from either CLR or SR"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkOpnPosSrc"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PositionSource",children:"enum - PositionSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"start of period position source"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBot"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares bot today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSld"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares sld today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldShrt"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares sld short today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotHdg"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares bot today from hedging spdrSourceHedgeTool"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldHdg"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares sld today from hedging spdrSourceHedgeTool"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotTrh"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares bot today from hedging spdrSourceTradeHedge"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldTrh"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares sld today from hedging spdrSourceTradeHedge"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotOpn"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares bot today from hedging spdrSourceOpenHedge"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldOpn"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares sld today from hedging spdrSourceOpenHedge"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shBotTrd"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares bot today from any trade hedging source AutoHedge or Trades loop"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"shSldTrd"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of shares sld today from any trade hedging source AutoHedge or Trades loop"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMnyBot"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"sum of settle cash for all buy executions"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stkMnySld"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"sum of settle cash for all sell executions"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"dayPnl"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"opnPnlMidMark"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"opnPnlClrMark"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"exDivAmt"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"amount of any dividend going ex today"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"borrowRate"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"overnight rate required to borrow stock if known"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"beta"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"beta usually beta to SPX see AccountConfigbetaSource"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"betaSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BetaSource",children:"enum - BetaSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"marginUDn"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Aggregate RiskSlide uPrc dn"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"marginUUp"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Aggregate RiskSlide uPrc up"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numExecutions"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of included SpdrParentExecution records"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxExecDttm"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{children:"max timestamp of included SpdrParentExecution records"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:"3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeDate"}),(0,d.jsx)(r.td,{children:"5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskSession"}),(0,d.jsx)(r.td,{children:"6"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"7"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgStockPositionRecordV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `riskSession` ENUM('Regular','PostClose') NOT NULL DEFAULT 'Regular',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '',\n    `priAggGroup` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'primary aggregation group',\n    `secAggGroup` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'secondary aggregation group',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `tickValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32','EU2A','EU2B','EU2C','EU2D','EU2E','EU3A','EU3B','EU3C','EU3D','EU3E','EU4A','EU5A') NOT NULL DEFAULT 'None' COMMENT 'price display format code',\n    `stkPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'current stock price (any market session) (persists if market closed/halted)',\n    `stkBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'current stock bid (any market session) (zero if market closed/halted)',\n    `stkAsk` FLOAT NOT NULL DEFAULT 0 COMMENT 'current stock ask (any market session) (zero if market closed/halted)',\n    `stkMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current stock mark (freezes at SR CloseMarkTime)',\n    `stkMarkErrCodes` VARCHAR(255) NOT NULL DEFAULT 'None',\n    `stkMarkSource` ENUM('None','OpenMark','CloseMark','Print','LiveQuote','QuoteBound') NOT NULL DEFAULT 'None',\n    `stkOpnMidMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start-of-day SR stock mark (rotated from prior day record) [corp action adjusted]',\n    `stkOpnClrMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start-of-day CLR stock mark (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]',\n    `stkOpnPosPrv` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day SR share position (rotated from prior day record) [corp action adjusted]',\n    `stkOpnPosClr` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day CLR share position (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]',\n    `stkOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'start of period share position (effective; can be from either CLR or SR)',\n    `stkOpnPosSrc` ENUM('None','Zero','SR','CLR') NOT NULL DEFAULT 'None' COMMENT 'start of period position source',\n    `shBot` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today',\n    `shSld` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today',\n    `shSldShrt` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld short today',\n    `shBotHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from hedging (spdrSource=HedgeTool)',\n    `shSldHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from hedging (spdrSource=HedgeTool)',\n    `shBotTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from hedging (spdrSource=TradeHedge)',\n    `shSldTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from hedging (spdrSource=TradeHedge)',\n    `shBotOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from hedging (spdrSource=OpenHedge)',\n    `shSldOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from hedging (spdrSource=OpenHedge)',\n    `shBotTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of shares bot today from any trade hedging source (AutoHedge or Trades loop)',\n    `shSldTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of shares sld today from any trade hedging source (AutoHedge or Trades loop)',\n    `stkMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sum of settle cash for all buy executions',\n    `stkMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sum of settle cash for all sell executions',\n    `dayPnl` FLOAT NOT NULL DEFAULT 0,\n    `opnPnlMidMark` FLOAT NOT NULL DEFAULT 0,\n    `opnPnlClrMark` FLOAT NOT NULL DEFAULT 0,\n    `exDivAmt` FLOAT NOT NULL DEFAULT 0 COMMENT 'amount of any dividend going ex today',\n    `borrowRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'overnight rate required to borrow stock (if known)',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'beta (usually beta to SPX; see AccountConfig.betaSource)',\n    `betaSource` ENUM('None','betaSPX','betaQQQ','betaIWM','clientBeta') NOT NULL DEFAULT 'None',\n    `marginUDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn',\n    `marginUUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up',\n    `numExecutions` INT NOT NULL DEFAULT 0 COMMENT 'number of included SpdrParentExecution records',\n    `maxExecDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'max (timestamp) of included SpdrParentExecution records',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`accnt`,`tradeDate`,`riskSession`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.\\nThese records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.\\nNew records are published immediately when a position changes and about once per minute if no position has changed.\\nNote that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks.';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `accnt`,\n    `tradeDate`,\n    `riskSession`,\n    `clientFirm`,\n    `riskServerCode`,\n    `priAggGroup`,\n    `secAggGroup`,\n    `symbolType`,\n    `tickValue`,\n    `pointValue`,\n    `pointCurrency`,\n    `priceFormat`,\n    `stkPrc`,\n    `stkBid`,\n    `stkAsk`,\n    `stkMark`,\n    `stkMarkErrCodes`,\n    `stkMarkSource`,\n    `stkOpnMidMark`,\n    `stkOpnClrMark`,\n    `stkOpnPosPrv`,\n    `stkOpnPosClr`,\n    `stkOpnPos`,\n    `stkOpnPosSrc`,\n    `shBot`,\n    `shSld`,\n    `shSldShrt`,\n    `shBotHdg`,\n    `shSldHdg`,\n    `shBotTrh`,\n    `shSldTrh`,\n    `shBotOpn`,\n    `shSldOpn`,\n    `shBotTrd`,\n    `shSldTrd`,\n    `stkMnyBot`,\n    `stkMnySld`,\n    `dayPnl`,\n    `opnPnlMidMark`,\n    `opnPnlClrMark`,\n    `exDivAmt`,\n    `borrowRate`,\n    `beta`,\n    `betaSource`,\n    `marginUDn`,\n    `marginUUp`,\n    `numExecutions`,\n    `maxExecDttm`,\n    `timestamp`\nFROM `SRRisk`.`MsgStockPositionRecordV5`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('Regular','PostClose') */\n    `riskSession` = 'Regular'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='StockPositionRecordV5' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var d=s(96540);const t={},n=d.createContext(t);function i(e){const r=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(n.Provider,{value:r},e.children)}}}]);