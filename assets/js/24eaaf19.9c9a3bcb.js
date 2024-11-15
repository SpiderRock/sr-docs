"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45416],{89665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=t(74848),s=t(28453);const r={},i=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRControl/SymbolControl/SymbolControl",title:"SymbolControl",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/SymbolControl/SymbolControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/SymbolControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/SymbolControl/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/SymbolControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockThreshold",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/StockThreshold/"},next:{title:"ULinkContextEvent",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextEvent/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"../../../Topics/client-book-risk/SymbolControl",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Topic"}),(0,l.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MLink Token"}),(0,l.jsx)(n.td,{children:"ClientControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Product"}),(0,l.jsx)(n.td,{children:"SRControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessType"}),(0,l.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Key"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"symCtrlAccnt"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ticker_at"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ticker_ts"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ticker_tk"}),(0,l.jsx)(n.td,{children:"VARCHAR(12)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"sector"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"riskClass"}),(0,l.jsx)(n.td,{children:"VARCHAR(8)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'A'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"stkStatus"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/StkStatus",children:"enum - StkStatus"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'TwoWay'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"futStatus"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/FutStatus",children:"enum - FutStatus"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'TwoWay'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"optStatus"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'TwoWay'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"holdReason"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HoldReason",children:"enum - HoldReason"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"binaryDays"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0.5"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"hedgeDeltaRule"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum - HedgeDeltaRule"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"HedgeDelta Source IVol  use SR implied surface sticky strike IvS  use SR surface dynamic TVol  use user supplied theo surface sticky strike TvS  use user supplied theo surface dynamic AccountConfighedgeDelta"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedBy"}),(0,l.jsx)(n.td,{children:"VARCHAR(24)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"user who last modified this record"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedIn"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timestamp"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Sequence"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"symCtrlAccnt"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ticker_tk"}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ticker_at"}),(0,l.jsx)(n.td,{children:"4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ticker_ts"}),(0,l.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgSymbolControl` (\n    `symCtrlAccnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `sector` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT 'A',\n    `stkStatus` ENUM('Hold','TwoWay','DayHold') NOT NULL DEFAULT 'TwoWay',\n    `futStatus` ENUM('Hold','TwoWay','DayHold') NOT NULL DEFAULT 'TwoWay',\n    `optStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'TwoWay',\n    `holdReason` ENUM('None','BadData','CorpAction','PendDeal','PendEvent','ExtTrade','LowPrice','PendEarn','DealRumour','BadDiv','Watch','NewSym','NoLoc','NegPerf','NegEdge') NOT NULL DEFAULT 'None',\n    `binaryDays` FLOAT NOT NULL DEFAULT 0.5,\n    `hedgeDeltaRule` ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') NOT NULL DEFAULT 'None' COMMENT 'HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (dynamic), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface (dynamic)) [AccountConfig.hedgeDelta]',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`symCtrlAccnt`,`clientFirm`,`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `symCtrlAccnt`,\n    `clientFirm`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `sector`,\n    `riskClass`,\n    `stkStatus`,\n    `futStatus`,\n    `optStatus`,\n    `holdReason`,\n    `binaryDays`,\n    `hedgeDeltaRule`,\n    `timestamp`\nFROM `SRControl`.`MsgSymbolControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `symCtrlAccnt` = 'Example_symCtrlAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgSymbolControl` \nSET\n    /* Replace with a VARCHAR(16) */\n    `sector` = 'Example_sector',\n    /* Replace with a VARCHAR(8) */\n    `riskClass` = 'Example_riskClass',\n    /* Replace with a ENUM('Hold','TwoWay','DayHold') */\n    `stkStatus` = 'TwoWay',\n    /* Replace with a ENUM('Hold','TwoWay','DayHold') */\n    `futStatus` = 'TwoWay',\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `optStatus` = 'TwoWay',\n    /* Replace with a ENUM('None','BadData','CorpAction','PendDeal','PendEvent','ExtTrade','LowPrice','PendEarn','DealRumour','BadDiv','Watch','NewSym','NoLoc','NegPerf','NegEdge') */ \n    `holdReason` = 'None',\n    /* Replace with a FLOAT */\n    `binaryDays` = 1.23,\n    /* Replace with a ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') */\n    `hedgeDeltaRule` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `symCtrlAccnt` = 'Example_symCtrlAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgSymbolControl`(\n    /* Replace with a VARCHAR(16) */ \n    `symCtrlAccnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */\n    `sector`,\n    /* Replace with a VARCHAR(8) */\n    `riskClass`,\n    /* Replace with a ENUM('Hold','TwoWay','DayHold') */\n    `stkStatus`,\n    /* Replace with a ENUM('Hold','TwoWay','DayHold') */\n    `futStatus`,\n    /* Replace with a ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') */\n    `optStatus`,\n    /* Replace with a ENUM('None','BadData','CorpAction','PendDeal','PendEvent','ExtTrade','LowPrice','PendEarn','DealRumour','BadDiv','Watch','NewSym','NoLoc','NegPerf','NegEdge') */ \n    `holdReason`,\n    /* Replace with a FLOAT */\n    `binaryDays`,\n    /* Replace with a ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') */\n    `hedgeDeltaRule`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_symCtrlAccnt',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'Example_sector',\n    'Example_riskClass',\n    'TwoWay',\n    'TwoWay',\n    'TwoWay',\n    'None',\n    1.23,\n    'None',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgSymbolControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `symCtrlAccnt` = 'Example_symCtrlAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='SymbolControl' ORDER BY ordinal_position ASC;\n"})})]})}function E(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var l=t(96540);const s={},r=l.createContext(s);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);