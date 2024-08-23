"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96465],{29562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(74848),d=t(28453);const s={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/OptionPrint2",title:"OptionPrint2",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/OptionPrint2.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrint",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/"},next:{title:"OptionPrintProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/market-data-options/OptionPrint2",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"2750-market-data-options"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SystemData"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRLive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_xx"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_cp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'Call'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtExch"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtSize"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"print size contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtPrice"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"print price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtClusterNum"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"incremental print cluster counter one counter per okey used to group prints into clusters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtClusterSize"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"cumulative size of prints in this sequence sequence of prints  same or more aggressive price with less than 25 ms elapsing since first print can span exchanges"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"print type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"printCodes"}),(0,r.jsx)(n.td,{children:"VARCHAR(18)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"European trade condition codes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtOrders"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of participating orders"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day print volume in contracts regular electronic AUTO REOP MESL TESL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oosVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day print volume reported out of sequence not regular way electronic OSEQ LATE OPEN OPNL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isoVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day ISO sweep volume ISOI"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"slaVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"single leg aution volume SLAN SLAI"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mlaVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"multi leg auction volume MLAT TLAT MASL TASL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"crxVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day electronic cross volume no exposure period SLCN SCLI MLCT TLCT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"flrVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day exchange floor volume SLFT MLFT MFSL TLFT TFSL CMBO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mlgVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"multileg complex volume MLET TLET"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uknVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"other uncategorized volume"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cxlVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"day printcancel volume num of contracts printed and then cancelled CANC CNCL CNCO CNOL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"totalVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"total day volume"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidCount"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of bid prints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askCount"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of ask prints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bidVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"bid print volume in contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"askVolume"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"ask print volume in contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ebid"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exchange bid  print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"eask"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exchange ask  print time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ebsz"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exchange bid size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"easz"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exchange ask size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"eage"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"age of prevailing quote at time of print"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtSide"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PrtSide",children:"enum - PrtSide"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"implied print side based on ebideask and nbbo market"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prtTimestamp"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"exchange high precision timestamp if available"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"netTimestamp"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_tk"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_yr"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_mn"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_dy"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_xx"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_cp"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_at"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_ts"}),(0,r.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionPrint2` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'print size [contracts]',\n    `prtPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'print price',\n    `prtClusterNum` INT NOT NULL DEFAULT 0 COMMENT 'incremental print cluster counter (one counter per okey; used to group prints into clusters)',\n    `prtClusterSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size of prints in this sequence (sequence of prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'print type',\n    `printCodes` VARCHAR(18) NOT NULL DEFAULT '' COMMENT 'European trade condition codes',\n    `prtOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of participating orders',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print volume in contracts (regular, electronic) [AUTO, REOP, MESL, TESL]',\n    `oosVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print volume reported out of sequence (not regular way electronic) [OSEQ, LATE, OPEN, OPNL]',\n    `isoVolume` INT NOT NULL DEFAULT 0 COMMENT 'day ISO sweep volume [ISOI]',\n    `slaVolume` INT NOT NULL DEFAULT 0 COMMENT 'single leg aution volume [SLAN, SLAI]',\n    `mlaVolume` INT NOT NULL DEFAULT 0 COMMENT 'multi leg auction volume [MLAT, TLAT, MASL, TASL]',\n    `crxVolume` INT NOT NULL DEFAULT 0 COMMENT 'day electronic cross volume (no exposure period) [SLCN, SCLI, MLCT, TLCT]',\n    `flrVolume` INT NOT NULL DEFAULT 0 COMMENT 'day exchange floor volume [SLFT, MLFT, MFSL, TLFT, TFSL, CMBO]',\n    `mlgVolume` INT NOT NULL DEFAULT 0 COMMENT 'multi-leg (complex) volume [MLET, TLET]',\n    `uknVolume` INT NOT NULL DEFAULT 0 COMMENT 'other (uncategorized) volume',\n    `cxlVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print/cancel volume (num of contracts printed and then cancelled) [CANC, CNCL, CNCO, CNOL]',\n    `totalVolume` INT NOT NULL DEFAULT 0 COMMENT 'total day volume',\n    `bidCount` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of bid prints',\n    `askCount` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of ask prints',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'bid print volume in contracts',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'ask print volume in contracts',\n    `ebid` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange bid (@ print time)',\n    `eask` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange ask (@ print time)',\n    `ebsz` INT NOT NULL DEFAULT 0 COMMENT 'exchange bid size',\n    `easz` INT NOT NULL DEFAULT 0 COMMENT 'exchange ask size',\n    `eage` FLOAT NOT NULL DEFAULT 0 COMMENT 'age of prevailing quote at time of print',\n    `prtSide` ENUM('None','Mid','Bid','Ask') NOT NULL DEFAULT 'None' COMMENT 'implied print side (based on ebid/eask and nbbo market)',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `prtExch`,\n    `prtSize`,\n    `prtPrice`,\n    `prtClusterNum`,\n    `prtClusterSize`,\n    `prtType`,\n    `printCodes`,\n    `prtOrders`,\n    `prtVolume`,\n    `oosVolume`,\n    `isoVolume`,\n    `slaVolume`,\n    `mlaVolume`,\n    `crxVolume`,\n    `flrVolume`,\n    `mlgVolume`,\n    `uknVolume`,\n    `cxlVolume`,\n    `totalVolume`,\n    `bidCount`,\n    `askCount`,\n    `bidVolume`,\n    `askVolume`,\n    `ebid`,\n    `eask`,\n    `ebsz`,\n    `easz`,\n    `eage`,\n    `prtSide`,\n    `prtTimestamp`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRLive`.`MsgOptionPrint2`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OptionPrint2' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const d={},s=r.createContext(d);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);