"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1640],{49640:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var t=d(74848),i=d(28453);const n={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRevConQuote/LiveRevConQuote",title:"LiveRevConQuote",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRevConQuote/LiveRevConQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRevConQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRevConQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRevConQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"LiveImpliedQuoteAdj",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/"},next:{title:"LiveSurfaceAtm",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfaceAtm/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/analytics/LiveRevConQuote",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"1000-analytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"OptAnalytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accessType"}),(0,t.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI, SEC"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI, SEC"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI, SEC"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_xx"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_cp"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'Call'"}),(0,t.jsx)(r.td,{children:"cp  Both"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"DATE"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'1900-01-01'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"SR Ticker Product Group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"SR Ticker Product Group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{children:"SEC"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"SR Ticker Product Group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"xAxis"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"xAxis  Moneyness"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cDe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"call delta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pDe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"put delta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrc"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"live underlier price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"atmVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"years"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of volatility years to exiry date volatility time metric"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"globalRate"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"global rate average discount rate to expiry date"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddiv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"sum of estimated discrete dividend stream to expiry date"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddivPv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"present value of estimated discrete dividend stream to expiry date"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddivSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/DDivSource",children:"enum - DDivSource"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"present value of estimated discrete dividend stream to expiry date"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"iDays"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of interest calendar days to expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddivDisc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"dividend discount factor SUMdiv  iDays  3650  divYrs due to dividends being paid thereby lowering the uPrc basis prior to expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"strikePv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"strike  EXPglobalRate  iDays  365"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairSVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"callput surface volatility value"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairSDiv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"callput surface alignment sdiv value"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairCallPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairPrice  PRICEAMERICANuPrc years fairVol fairSDiv globalRate ddivStream"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairCallPrcE"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairPrice  PRICEEUROPEANuPrc years fairVol fairSDiv globalRate ddivStream"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairPutPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairPrice  PRICEAMERICANuPrc years fairVol fairSDiv globalRate ddivStream"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairPutPrcE"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairPrice  PRICEEUROPEANuPrc years fairVol fairSDiv globalRate ddivStream"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rcFairPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairCallPrc  fairPutPrc  uPrc  strike  revCon fairMid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rcEExPrem"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairPutPrc  fairPutPrcE  fairCallPrc  fairCallPrcE"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairLoanPv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairCallPrc  fairPutPrc  uPrc  strike  strikePv  ddivPv  total present value of letting out shares term to expiry per share"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fairLoanRate"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fairLoanPv  uPrc  iDays  3650  ddivDisc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rcBidPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"callBid  putAsk  uPrc  strike best way join markets"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rcAskPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"callAsk  putBid  uPrc  strike worst way cross markets"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"calcError"}),(0,t.jsx)(r.td,{children:"VARCHAR(16)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cpOI"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"cp open interest market upper bound"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cpVlm"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"cp print volume this exchange upper bound"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{children:"last update time Date"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_tk"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_yr"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_mn"}),(0,t.jsx)(r.td,{children:"3"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_dy"}),(0,t.jsx)(r.td,{children:"4"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_xx"}),(0,t.jsx)(r.td,{children:"5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_cp"}),(0,t.jsx)(r.td,{children:"6"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_at"}),(0,t.jsx)(r.td,{children:"7"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_ts"}),(0,t.jsx)(r.td,{children:"8"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"9"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_yr"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_mn"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey_dy"}),(0,t.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,t.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveRevConQuote` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'cp = Both',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'cp = Both',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'cp = Both',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cp = Both',\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cp = Both',\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cp = Both',\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'cp = Both',\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'cp = Both',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Ticker (Product Group)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Ticker (Product Group)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Ticker (Product Group)',\n    `xAxis` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = Moneyness',\n    `cDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'call delta',\n    `pDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'put delta',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live underlier price',\n    `atmVol` FLOAT NOT NULL DEFAULT 0,\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'number of volatility years to exiry date (volatility time metric)',\n    `globalRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'global rate (average discount rate) to expiry date',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sum of estimated discrete dividend stream to expiry date',\n    `ddivPv` FLOAT NOT NULL DEFAULT 0 COMMENT 'present value of estimated discrete dividend stream to expiry date',\n    `ddivSource` ENUM('None','Announced','Forecast') NOT NULL DEFAULT 'None' COMMENT 'present value of estimated discrete dividend stream to expiry date',\n    `iDays` INT NOT NULL DEFAULT 0 COMMENT 'number of interest (calendar) days to expiry',\n    `ddivDisc` FLOAT NOT NULL DEFAULT 0 COMMENT 'dividend discount factor: SUM(div * iDays / 365.0 - divYrs) due to dividends being paid (thereby lowering the uPrc basis) prior to expiry',\n    `strikePv` FLOAT NOT NULL DEFAULT 0 COMMENT 'strike * EXP(-globalRate * iDays / 365)',\n    `fairSVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'call/put surface volatility value',\n    `fairSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'call/put surface alignment sdiv value',\n    `fairCallPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairPrice = PRICE.AMERICAN(uPrc, years, fairVol, fairSDiv, globalRate, {ddivStream})',\n    `fairCallPrcE` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairPrice = PRICE.EUROPEAN(uPrc, years, fairVol, fairSDiv, globalRate, {ddivStream})',\n    `fairPutPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairPrice = PRICE.AMERICAN(uPrc, years, fairVol, fairSDiv, globalRate, {ddivStream})',\n    `fairPutPrcE` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairPrice = PRICE.EUROPEAN(uPrc, years, fairVol, fairSDiv, globalRate, {ddivStream})',\n    `rcFairPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairCallPrc - fairPutPrc - uPrc + strike  (revCon fairMid price)',\n    `rcEExPrem` FLOAT NOT NULL DEFAULT 0 COMMENT '(fairPutPrc - fairPutPrcE) - (fairCallPrc - fairCallPrcE)',\n    `fairLoanPv` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairCallPrc - fairPutPrc - uPrc + strike + strikePv + ddivPv  (total present value of letting out shares) (term to expiry) (per share)',\n    `fairLoanRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'fairLoanPv / (uPrc * iDays / 365.0 - ddivDisc)',\n    `rcBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'callBid - putAsk - uPrc + strike (best way) (join markets)',\n    `rcAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'callAsk - putBid - uPrc + strike (worst way) (cross markets)',\n    `calcError` VARCHAR(16) NOT NULL DEFAULT '',\n    `cpOI` INT NOT NULL DEFAULT 0 COMMENT 'c/p open interest (market) [upper bound]',\n    `cpVlm` INT NOT NULL DEFAULT 0 COMMENT 'c/p print volume (this exchange) [upper bound]',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last update time (Date)',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`tradeDate`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `tradeDate`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `xAxis`,\n    `cDe`,\n    `pDe`,\n    `uPrc`,\n    `atmVol`,\n    `years`,\n    `globalRate`,\n    `ddiv`,\n    `ddivPv`,\n    `ddivSource`,\n    `iDays`,\n    `ddivDisc`,\n    `strikePv`,\n    `fairSVol`,\n    `fairSDiv`,\n    `fairCallPrc`,\n    `fairCallPrcE`,\n    `fairPutPrc`,\n    `fairPutPrcE`,\n    `rcFairPrc`,\n    `rcEExPrem`,\n    `fairLoanPv`,\n    `fairLoanRate`,\n    `rcBidPrc`,\n    `rcAskPrc`,\n    `calcError`,\n    `cpOI`,\n    `cpVlm`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveRevConQuote`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01';\n"})}),"\n",(0,t.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveRevConQuote' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>s,x:()=>c});var t=d(96540);const i={},n=t.createContext(i);function s(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);