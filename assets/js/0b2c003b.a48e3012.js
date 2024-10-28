"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69743],{19083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>E,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(74848),r=t(28453);const i={},d=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderBX/AutoResponderBX",title:"AutoResponderBX",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderBX/AutoResponderBX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderBX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderBX/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderBX/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AutoHedgeSymbol",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeSymbol/"},next:{title:"AutoResponderRC",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderRC/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/liquidity-notice/AutoResponderBX",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SRATS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRTrade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expiry"}),(0,s.jsx)(n.td,{children:"DATE"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'1900-01-01'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"respSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"auction responder side your side Buy  BuyBorrow Cash"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"userName"}),(0,s.jsx)(n.td,{children:"VARCHAR(24)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"username used for responding to auction notices"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isDisabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expiryMoneyAvail"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"money available for responding day total this tickerexpiry all strikes note money  hiStrike  loStrike  pointValue per BX spread"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tickerMoneyAvail"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"money available for responding day total this ticker all strikes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"transactFee"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"moneyRate"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"000  no effective lendborrow value 360 day convention"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"incFeesInResp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"include all estimated responder fees in final response price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"roundRule"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RoundRule",children:"enum - RoundRule"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskGroupId"}),(0,s.jsx)(n.td,{children:"CHAR(19)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"VARCHAR(24)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root_tk"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root_at"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root_ts"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expiry"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"respSide"}),(0,s.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAutoResponderBX` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'auction responder side (your side) (Buy = Buy/Borrow Cash)',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'username used for responding to auction notices',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this auto-responder record is disabled',\n    `expiryMoneyAvail` BIGINT NOT NULL DEFAULT 0 COMMENT 'money available for responding (day total; this ticker/expiry; all strikes) [note: money = (hiStrike - loStrike) * pointValue per BX spread]',\n    `tickerMoneyAvail` BIGINT NOT NULL DEFAULT 0 COMMENT 'money available for responding (day total; this ticker; all strikes)',\n    `transactFee` DOUBLE NOT NULL DEFAULT 0,\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT '0.00 = no effective lend/borrow value (360 day convention)',\n    `incFeesInResp` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'include all estimated responder fees in final response price',\n    `roundRule` ENUM('None','Exact','Fuzzy') NOT NULL DEFAULT 'None',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`root_tk`,`root_at`,`root_ts`,`expiry`,`respSide`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `expiry`,\n    `respSide`,\n    `userName`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `isDisabled`,\n    `expiryMoneyAvail`,\n    `tickerMoneyAvail`,\n    `transactFee`,\n    `moneyRate`,\n    `incFeesInResp`,\n    `roundRule`,\n    `riskGroupId`,\n    `timestamp`\nFROM `SRTrade`.`MsgAutoResponderBX`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `expiry` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgAutoResponderBX` \nSET\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName',\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled` = 'None',\n    /* Replace with a BIGINT */ \n    `expiryMoneyAvail` = 1234567890,\n    /* Replace with a BIGINT */ \n    `tickerMoneyAvail` = 1234567890,\n    /* Replace with a DOUBLE */ \n    `transactFee` = 4.56,\n    /* Replace with a DOUBLE */ \n    `moneyRate` = 4.56,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp` = 'None',\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule` = 'None',\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `expiry` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgAutoResponderBX`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `root_tk`,\n    /* Replace with a DATE */\n    `expiry`,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide`,\n    /* Replace with a VARCHAR(24) */ \n    `userName`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled`,\n    /* Replace with a BIGINT */ \n    `expiryMoneyAvail`,\n    /* Replace with a BIGINT */ \n    `tickerMoneyAvail`,\n    /* Replace with a DOUBLE */ \n    `transactFee`,\n    /* Replace with a DOUBLE */ \n    `moneyRate`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp`,\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule`,\n    /* Replace with a CHAR(19) */\n    `riskGroupId`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_root_tk',\n    '2022-01-01',\n    'None',\n    'Example_userName',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    1234567890,\n    1234567890,\n    4.56,\n    4.56,\n    'None',\n    'None',\n    'Example_riskGroupId',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgAutoResponderBX` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `expiry` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AutoResponderBX' ORDER BY ordinal_position ASC;\n"})})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);