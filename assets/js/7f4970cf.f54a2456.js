"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11628],{99498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=n(74848),s=n(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAvailExecAllocation/SpdrAvailExecAllocation",title:"SpdrAvailExecAllocation",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAvailExecAllocation/SpdrAvailExecAllocation.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAvailExecAllocation",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAvailExecAllocation/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAvailExecAllocation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrAutoHedgeState",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState/"},next:{title:"SpdrAwayExecution",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAwayExecution/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (ChildOrdersList)",id:"json-block-childorderslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/order-allocation/SpdrAvailExecAllocation",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"3695-order-allocation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"availExecNumber"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"unique number for this message"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"omniAccnt"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"omnibus accnt SR accnt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"SR client firm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_xx"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_cp"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'Call'"}),(0,r.jsx)(t.td,{children:"security key stock future or option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"security type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"order side always buy for MLEG orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ssaleFlag"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"ssale flag None if not stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"positionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"positionType None if not equity option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spdrSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"parent order source"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"groupingCode"}),(0,r.jsx)(t.td,{children:"CHAR(19)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(t.td,{children:"unique broker code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mlegLegKey"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"secKeyStringKeylegRatiosidepositionEffect secKeyStringKeylegRatiosidepositionEffect"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"baseParentNumber"}),(0,r.jsx)(t.td,{children:"CHAR(19)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(t.td,{children:"SR BaseParentNumber these executions belong to can be zero if executions are drop"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cumFillQty"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"net cumFillQty total for the day"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgFillPrc"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"average fill price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"allocStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ExecAllocStatus",children:"enum - ExecAllocStatus"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"allocation status"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ChildOrdersList"}),(0,r.jsx)(t.td,{children:"JSON"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"availExecNumber"}),(0,r.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"json-block-childorderslist",children:"JSON Block (ChildOrdersList)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clOrdId"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"childOrders in the above allocation"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRAvailExecAllocation` (\n    `availExecNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'unique number for this message',\n    `omniAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'omnibus accnt (SR accnt)',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key (stock, future, or option)',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key (stock, future, or option)',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'order side (always buy for MLEG orders)',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'ssale flag (None if not stock)',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None' COMMENT 'positionType (None if not equity option)',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None' COMMENT 'parent order source',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'unique broker code',\n    `mlegLegKey` TINYTEXT NOT NULL DEFAULT '' COMMENT '[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]',\n    `baseParentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SR BaseParentNumber these executions belong to (can be zero if executions are drop)',\n    `cumFillQty` INT NOT NULL DEFAULT 0 COMMENT 'net cumFillQty (total for the day)',\n    `avgFillPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'average fill price',\n    `allocStatus` ENUM('None','ReadyToAlloc','Pending','Allocated','Error') NOT NULL DEFAULT 'None' COMMENT 'allocation status',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ChildOrdersList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ChildOrdersList)),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    CONSTRAINT nonnegative_baseParentNumber CHECK(ASCII(baseParentNumber) < 56),\n    PRIMARY KEY USING HASH (`availExecNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `availExecNumber`,\n    `omniAccnt`,\n    `clientFirm`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `orderSide`,\n    `ssaleFlag`,\n    `positionType`,\n    `spdrSource`,\n    `groupingCode`,\n    `mlegLegKey`,\n    `baseParentNumber`,\n    `cumFillQty`,\n    `avgFillPrc`,\n    `allocStatus`,\n    `timestamp`,\n    `ChildOrdersList`\nFROM `SRTrade`.`MsgSRAvailExecAllocation`\nWHERE \n    /* Replace with a BIGINT */ \n    `availExecNumber` = 1234567890;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrAvailExecAllocation' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);