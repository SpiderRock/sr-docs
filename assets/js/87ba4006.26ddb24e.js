"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[52117],{8056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var i=n(74848),s=n(28453);const d={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/OptionPrint",title:"OptionPrint",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/OptionPrint.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionOpenMark",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenMark/"},next:{title:"OptionPrint2",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionPrint",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.p,{children:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange."}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"OptMktData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRLive"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_yr"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_mn"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_dy"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_xx"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_cp"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"'Call'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtExch"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"print size contracts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"print price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtClusterNum"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"incremental print cluster counter one counter per okey used to group prints into clusters"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtClusterSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"cumulative size of prints in this sequence sequence of prints  same or more aggressive price with less than 25 ms elapsing since first print can span exchanges"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"print type"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"printCodes"}),(0,i.jsx)(t.td,{children:"VARCHAR(18)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"''"}),(0,i.jsx)(t.td,{children:"European trade condition codes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtOrders"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"number of participating orders"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtVolume"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"day print volume in contracts this exchange"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cxlVolume"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"day printcancel volume num of contracts printed and then cancelled"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidCount"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"number of bid prints"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askCount"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"number of ask prints"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidVolume"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"bid print volume in contracts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askVolume"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"ask print volume in contracts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ebid"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange bid  print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"eask"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange ask  print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ebsz"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange bid size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"easz"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange ask size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"eage"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"nbbo bid price  print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"nbbo ask price  print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice2"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"2nd best bid price  print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice2"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"2nd best ask price  print time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"bid size in contracts largest exch quote"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"ask size in contracts largest exch quote"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumBidSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"bid size in contracts total nbbo size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumAskSize"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"ask size in contracts total nbbo size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumBidSize2"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"cumulative size at 2nd price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumAskSize2"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"cumulative size at 2nd price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidMask"}),(0,i.jsx)(t.td,{children:"INT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange bid bit mask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askMask"}),(0,i.jsx)(t.td,{children:"INT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange ask bit mask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum - PrtSide"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'None'"}),(0,i.jsx)(t.td,{children:"implied print side based on ebideask and nbbo market"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"exchange high precision timestamp if available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oqNetTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_tk"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_yr"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_mn"}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_dy"}),(0,i.jsx)(t.td,{children:"4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_xx"}),(0,i.jsx)(t.td,{children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_cp"}),(0,i.jsx)(t.td,{children:"6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_at"}),(0,i.jsx)(t.td,{children:"7"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey_ts"}),(0,i.jsx)(t.td,{children:"8"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionPrint` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','SPHR','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'print size [contracts]',\n    `prtPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'print price',\n    `prtClusterNum` INT NOT NULL DEFAULT 0 COMMENT 'incremental print cluster counter (one counter per okey; used to group prints into clusters)',\n    `prtClusterSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size of prints in this sequence (sequence of prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'print type',\n    `printCodes` VARCHAR(18) NOT NULL DEFAULT '' COMMENT 'European trade condition codes',\n    `prtOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of participating orders',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print volume in contracts [this exchange]',\n    `cxlVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print/cancel volume (num of contracts printed and then cancelled)',\n    `bidCount` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of bid prints',\n    `askCount` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of ask prints',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'bid print volume in contracts',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'ask print volume in contracts',\n    `ebid` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange bid (@ print time)',\n    `eask` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange ask (@ print time)',\n    `ebsz` INT NOT NULL DEFAULT 0 COMMENT 'exchange bid size',\n    `easz` INT NOT NULL DEFAULT 0 COMMENT 'exchange ask size',\n    `eage` FLOAT NOT NULL DEFAULT 0 COMMENT 'age of prevailing quote at time of print',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid price (@ print time)',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask price (@ print time)',\n    `bidPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT '2nd best bid price (@ print time)',\n    `askPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT '2nd best ask price (@ print time)',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'bid size in contracts (largest exch quote)',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'ask size in contracts (largest exch quote)',\n    `cumBidSize` INT NOT NULL DEFAULT 0 COMMENT 'bid size in contracts (total nbbo size)',\n    `cumAskSize` INT NOT NULL DEFAULT 0 COMMENT 'ask size in contracts (total nbbo size)',\n    `cumBidSize2` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at 2nd price',\n    `cumAskSize2` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at 2nd price',\n    `bidMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange bid bit mask',\n    `askMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange ask bit mask',\n    `prtSide` ENUM('None','Mid','Bid','Ask') NOT NULL DEFAULT 'None' COMMENT 'implied print side (based on ebid/eask and nbbo market)',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `oqNetTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange.';\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `prtExch`,\n    `prtSize`,\n    `prtPrice`,\n    `prtClusterNum`,\n    `prtClusterSize`,\n    `prtType`,\n    `printCodes`,\n    `prtOrders`,\n    `prtVolume`,\n    `cxlVolume`,\n    `bidCount`,\n    `askCount`,\n    `bidVolume`,\n    `askVolume`,\n    `ebid`,\n    `eask`,\n    `ebsz`,\n    `easz`,\n    `eage`,\n    `bidPrice`,\n    `askPrice`,\n    `bidPrice2`,\n    `askPrice2`,\n    `bidSize`,\n    `askSize`,\n    `cumBidSize`,\n    `cumAskSize`,\n    `cumBidSize2`,\n    `cumAskSize2`,\n    `bidMask`,\n    `askMask`,\n    `prtSide`,\n    `prtTimestamp`,\n    `netTimestamp`,\n    `oqNetTimestamp`,\n    `timestamp`\nFROM `SRLive`.`MsgOptionPrint`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OptionPrint' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);