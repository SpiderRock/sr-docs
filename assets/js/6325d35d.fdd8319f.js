"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66553],{3499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var c=n(74848),i=n(28453);const s={},d=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/StockAuctionSummary",title:"StockAuctionSummary",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/StockAuctionSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SOQStrikeRangeUpdate",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/"},next:{title:"StockBookQuote",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"../../../Topics/market-data-stock/StockAuctionSummary",children:"V8 Message Definiton"})}),"\n",(0,c.jsx)(t.p,{children:"These records represent current and recent trailing market open/close auction results"}),"\n",(0,c.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Attribute"}),(0,c.jsx)(t.th,{children:"Value"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Topic"}),(0,c.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"MLink Token"}),(0,c.jsx)(t.td,{children:"ClientLive"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Product"}),(0,c.jsx)(t.td,{children:"SRLive"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"accessType"}),(0,c.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Field"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Key"}),(0,c.jsx)(t.th,{children:"Default Value"}),(0,c.jsx)(t.th,{children:"Comment"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_at"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"'None'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_ts"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"'None'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_tk"}),(0,c.jsx)(t.td,{children:"VARCHAR(12)"}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"''"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionType"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/StockAuctionType",children:"enum - StockAuctionType"})}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"'None'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionPrice"}),(0,c.jsx)(t.td,{children:"FLOAT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionVolume"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionDate"}),(0,c.jsx)(t.td,{children:"DATE"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionPrice1"}),(0,c.jsx)(t.td,{children:"FLOAT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionVolume1"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionDate1"}),(0,c.jsx)(t.td,{children:"DATE"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionPrice2"}),(0,c.jsx)(t.td,{children:"FLOAT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionVolume2"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionDate2"}),(0,c.jsx)(t.td,{children:"DATE"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionPrice3"}),(0,c.jsx)(t.td,{children:"FLOAT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionVolume3"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionDate3"}),(0,c.jsx)(t.td,{children:"DATE"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionPrice4"}),(0,c.jsx)(t.td,{children:"FLOAT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionVolume4"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionDate4"}),(0,c.jsx)(t.td,{children:"DATE"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionPrice5"}),(0,c.jsx)(t.td,{children:"FLOAT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionVolume5"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionDate5"}),(0,c.jsx)(t.td,{children:"DATE"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"timestamp"}),(0,c.jsx)(t.td,{children:"DATETIME(6)"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,c.jsx)(t.td,{})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Field"}),(0,c.jsx)(t.th,{children:"Sequence"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_tk"}),(0,c.jsx)(t.td,{children:"1"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_at"}),(0,c.jsx)(t.td,{children:"2"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_ts"}),(0,c.jsx)(t.td,{children:"3"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"auctionType"}),(0,c.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockAuctionSummary` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `auctionType` ENUM('None','Opening','Closing') NOT NULL DEFAULT 'None',\n    `auctionPrice` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume` INT NOT NULL DEFAULT 0,\n    `auctionDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice1` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume1` INT NOT NULL DEFAULT 0,\n    `auctionDate1` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice2` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume2` INT NOT NULL DEFAULT 0,\n    `auctionDate2` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice3` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume3` INT NOT NULL DEFAULT 0,\n    `auctionDate3` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice4` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume4` INT NOT NULL DEFAULT 0,\n    `auctionDate4` DATE NOT NULL DEFAULT '1900-01-01',\n    `auctionPrice5` FLOAT NOT NULL DEFAULT 0,\n    `auctionVolume5` INT NOT NULL DEFAULT 0,\n    `auctionDate5` DATE NOT NULL DEFAULT '1900-01-01',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`auctionType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent current and recent trailing market open/close auction results';\n\n"})}),"\n",(0,c.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `auctionType`,\n    `auctionPrice`,\n    `auctionVolume`,\n    `auctionDate`,\n    `auctionPrice1`,\n    `auctionVolume1`,\n    `auctionDate1`,\n    `auctionPrice2`,\n    `auctionVolume2`,\n    `auctionDate2`,\n    `auctionPrice3`,\n    `auctionVolume3`,\n    `auctionDate3`,\n    `auctionPrice4`,\n    `auctionVolume4`,\n    `auctionDate4`,\n    `auctionPrice5`,\n    `auctionVolume5`,\n    `auctionDate5`,\n    `timestamp`\nFROM `SRLive`.`MsgStockAuctionSummary`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Opening','Closing') */ \n    `auctionType` = 'None';\n"})}),"\n",(0,c.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='StockAuctionSummary' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var c=n(96540);const i={},s=c.createContext(i);function d(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);