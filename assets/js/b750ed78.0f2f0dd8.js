"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34759],{65897:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=s(74848),n=s(28453);const t={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionCloseMark/OptionCloseMark",title:"OptionCloseMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionCloseMark/OptionCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionCloseMark/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionCloseMark/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptExpiryDefinition",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/OptExpiryDefinition/"},next:{title:"OptionEOP",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionEOP/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"../../../Topics/market-marks/OptionCloseMark",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(d.p,{children:"OptionCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.\nOptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"3120-market-marks"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"OptMarkData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRLive"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Default Value"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_cp"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'Call'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"tradeDate"}),(0,r.jsx)(d.td,{children:"DATE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clsMarkState"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"Preview or Final"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"uBid"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SpiderRock closing underlier bid C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"uAsk"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SpiderRock closing underlier ask C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"uSrCls"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SpiderRock underlier closing mark C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"uClose"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"exchange underlier closing mark"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidPrc"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SpiderRock closing option bid C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askPrc"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SpiderRock closing option ask C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srClsPrc"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SpiderRock close mark close  5min NBBO midmarket"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"closePrc"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"official exchange closing mark last printthen official close"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hasSRClsPrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hasClosePrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hasUClsPrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidIV"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"implied vol of SpiderRock closing bid price C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askIV"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"implied vol of SpiderRock closing ask price C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srPrc"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"sr close mark price always within bidPxaskPx C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srVol"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"sr close mark volatility C  5m"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/MarkSource",children:"enum - MarkSource"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"sr close mark source SRVol is SurfaceVol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"de"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"delta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ga"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"gamma"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"th"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"theta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ve"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"vega"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vo"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"volga"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"va"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"vanna"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"rh"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"rho"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ph"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"phi"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srSlope"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"surface slope SR surface"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"deDecay"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"delta decay"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ddiv"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"ddiv amount sum of discrete dividend amounts"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ddivPv"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"ddiv present value amount sum of discrete dividend pv amounts"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"discount rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iDays"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"interest days today to expiry T1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"years"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"years to expiration"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"error"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"calculation error code"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"openInterest"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"option open Interest"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"prtCount"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"print count"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"prtVolume"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"total printed volume all prt types"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srCloseMarkDttm"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{children:"from MarketCloseQuotesrCloseMarkDttm in trading period local timezone"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"configNow"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{children:"timestamp in the trading period local timezone"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{children:"record timestamp"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_tk"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_xx"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_cp"}),(0,r.jsx)(d.td,{children:"6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_at"}),(0,r.jsx)(d.td,{children:"7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_ts"}),(0,r.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionCloseMark` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Ticker that this option rolls up to',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Ticker that this option rolls up to',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Ticker that this option rolls up to',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clsMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Preview or Final',\n    `uBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SpiderRock closing underlier bid (C - 5m)',\n    `uAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SpiderRock closing underlier ask (C - 5m)',\n    `uSrCls` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SpiderRock underlier closing mark (C - 5m)',\n    `uClose` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange underlier closing mark',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SpiderRock closing option bid (C - 5m)',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SpiderRock closing option ask (C - 5m)',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SpiderRock close mark (close - 5min) [NBBO mid-market]',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (last print;then official close)',\n    `hasSRClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hasClosePrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hasUClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `bidIV` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied vol of SpiderRock closing bid price (C - 5m)',\n    `askIV` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied vol of SpiderRock closing ask price (C - 5m)',\n    `srPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'sr close mark price (always within bidPx/askPx) (C - 5m)',\n    `srVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'sr close mark volatility (C - 5m)',\n    `srSrc` ENUM('None','NbboMid','SRVol','LoBound','HiBound','Other') NOT NULL DEFAULT 'None' COMMENT 'sr close mark source (SRVol is SurfaceVol)',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta',\n    `ga` FLOAT NOT NULL DEFAULT 0 COMMENT 'gamma',\n    `th` FLOAT NOT NULL DEFAULT 0 COMMENT 'theta',\n    `ve` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega',\n    `vo` FLOAT NOT NULL DEFAULT 0 COMMENT 'volga',\n    `va` FLOAT NOT NULL DEFAULT 0 COMMENT 'vanna',\n    `rh` FLOAT NOT NULL DEFAULT 0 COMMENT 'rho',\n    `ph` FLOAT NOT NULL DEFAULT 0 COMMENT 'phi',\n    `srSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface slope (SR surface)',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta decay',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sdiv rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'ddiv amount (sum of discrete dividend amounts)',\n    `ddivPv` FLOAT NOT NULL DEFAULT 0 COMMENT 'ddiv (present value) amount (sum of discrete dividend pv amounts)',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'discount rate',\n    `iDays` INT NOT NULL DEFAULT 0 COMMENT 'interest days (today to expiry) (T+1)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `error` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'calculation error code',\n    `openInterest` INT NOT NULL DEFAULT 0 COMMENT 'option open Interest',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'print count',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'total printed volume (all prt types)',\n    `srCloseMarkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from MarketCloseQuote.srCloseMarkDttm (in trading period local timezone)',\n    `configNow` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp in the trading period local timezone',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record timestamp',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.\\nOptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final';\n\n"})}),"\n",(0,r.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `clsMarkState`,\n    `uBid`,\n    `uAsk`,\n    `uSrCls`,\n    `uClose`,\n    `bidPrc`,\n    `askPrc`,\n    `srClsPrc`,\n    `closePrc`,\n    `hasSRClsPrc`,\n    `hasClosePrc`,\n    `hasUClsPrc`,\n    `bidIV`,\n    `askIV`,\n    `srPrc`,\n    `srVol`,\n    `srSrc`,\n    `de`,\n    `ga`,\n    `th`,\n    `ve`,\n    `vo`,\n    `va`,\n    `rh`,\n    `ph`,\n    `srSlope`,\n    `deDecay`,\n    `sdiv`,\n    `ddiv`,\n    `ddivPv`,\n    `rate`,\n    `iDays`,\n    `years`,\n    `error`,\n    `openInterest`,\n    `prtCount`,\n    `prtVolume`,\n    `srCloseMarkDttm`,\n    `configNow`,\n    `timestamp`\nFROM `SRLive`.`MsgOptionCloseMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,r.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OptionCloseMark' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>l});var r=s(96540);const n={},t=r.createContext(n);function i(e){const d=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:d},e.children)}}}]);