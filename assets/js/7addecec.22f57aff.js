"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88319],{50031:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>x});var n=s(74848),t=s(28453);const r={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepExchDetail/SRSweepExchDetail",title:"SRSweepExchDetail",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepExchDetail/SRSweepExchDetail.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepExchDetail",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepExchDetail/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepExchDetail/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRSweepDetail",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepDetail/"},next:{title:"SRUserCancel",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRUserCancel/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"../../../Topics/execution-engine/SpdrSweepExchDetail",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(d.p,{children:"SpdrSweepExchDetail records are published by execution engines when sweep trigger groups are processed"}),"\n",(0,n.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Topic"}),(0,n.jsx)(d.td,{children:"2270-execution-engine"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MLink Token"}),(0,n.jsx)(d.td,{children:"ClientTrading"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Product"}),(0,n.jsx)(d.td,{children:"SRTrade"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"accessType"}),(0,n.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Key"}),(0,n.jsx)(d.th,{children:"Default Value"}),(0,n.jsx)(d.th,{children:"Comment"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"parentNumber"}),(0,n.jsx)(d.td,{children:"CHAR(19)"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'0000-0000-0000-0000'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"triggerGroupId"}),(0,n.jsx)(d.td,{children:"BIGINT"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"exchange"}),(0,n.jsx)(d.td,{children:"VARCHAR(8)"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"accnt"}),(0,n.jsx)(d.td,{children:"VARCHAR(16)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"clientFirm"}),(0,n.jsx)(d.td,{children:"VARCHAR(16)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_yr"}),(0,n.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_mn"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_dy"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_xx"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secKey_cp"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'Call'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secType"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"orderSide"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"parentOrderSize"}),(0,n.jsx)(d.td,{children:"INT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"parentLimitPrice"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"exchBid"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"exchAsk"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"exchBidSz"}),(0,n.jsx)(d.td,{children:"INT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"exchAskSz"}),(0,n.jsx)(d.td,{children:"INT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"clOrdId"}),(0,n.jsx)(d.td,{children:"CHAR(19)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'0000-0000-0000-0000'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"childPrc"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"childSize"}),(0,n.jsx)(d.td,{children:"INT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"maxChildSize"}),(0,n.jsx)(d.td,{children:"INT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"isISOChild"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"childResult"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/SweepResult",children:"enum - SweepResult"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"netTimestamp"}),(0,n.jsx)(d.td,{children:"BIGINT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"timestamp"}),(0,n.jsx)(d.td,{children:"DATETIME(6)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"parentNumber"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"triggerGroupId"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"exchange"}),(0,n.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRSweepExchDetail` (\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `triggerGroupId` BIGINT NOT NULL DEFAULT 0,\n    `exchange` VARCHAR(8) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `parentOrderSize` INT NOT NULL DEFAULT 0,\n    `parentLimitPrice` DOUBLE NOT NULL DEFAULT 0,\n    `exchBid` DOUBLE NOT NULL DEFAULT 0,\n    `exchAsk` DOUBLE NOT NULL DEFAULT 0,\n    `exchBidSz` INT NOT NULL DEFAULT 0,\n    `exchAskSz` INT NOT NULL DEFAULT 0,\n    `clOrdId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `childPrc` DOUBLE NOT NULL DEFAULT 0,\n    `childSize` INT NOT NULL DEFAULT 0,\n    `maxChildSize` INT NOT NULL DEFAULT 0,\n    `isISOChild` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `childResult` ENUM('None','Skip','ChildAvail','ChildFail','NoExchQuote','OffMkt','ExchExcept','ChildQty','NoRoute') NOT NULL DEFAULT 'None',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_clOrdId CHECK(ASCII(clOrdId) < 56),\n    PRIMARY KEY USING HASH (`parentNumber`,`triggerGroupId`,`exchange`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrSweepExchDetail records are published by execution engines when sweep trigger groups are processed';\n\n"})}),"\n",(0,n.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `parentNumber`,\n    `triggerGroupId`,\n    `exchange`,\n    `accnt`,\n    `clientFirm`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `orderSide`,\n    `parentOrderSize`,\n    `parentLimitPrice`,\n    `exchBid`,\n    `exchAsk`,\n    `exchBidSz`,\n    `exchAskSz`,\n    `clOrdId`,\n    `childPrc`,\n    `childSize`,\n    `maxChildSize`,\n    `isISOChild`,\n    `childResult`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRSweepExchDetail`\nWHERE \n    /* Replace with a CHAR(19) */\n    `parentNumber` = 'Example_parentNumber'\n  AND\n    /* Replace with a BIGINT */ \n    `triggerGroupId` = 1234567890\n  AND\n    /* Replace with a VARCHAR(8) */ \n    `exchange` = 'Example_exchange';\n"})}),"\n",(0,n.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRSweepExchDetail' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>c,x:()=>i});var n=s(96540);const t={},r=n.createContext(t);function c(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);