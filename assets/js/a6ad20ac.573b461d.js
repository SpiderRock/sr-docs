"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["88628"],{15557:function(e,r,n){n.r(r),n.d(r,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/SpdrOmniOrder","title":"SpdrOmniOrder","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/SpdrOmniOrder.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrOmniOrder/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SpdrMLegBrkrState","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrState/"},"next":{"title":"SpdrParentAllocation","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentAllocation/"}}'),s=n("52676"),d=n("91503");let i={},c=void 0,l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (ChildOrdersList)",id:"json-block-childorderslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/order-allocation/SpdrOmniOrder",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"3695-order-allocation"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accessType"}),(0,s.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Default Value"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"omniOrderNumber"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"unique number for this message"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"omniAccnt"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"omnibus accnt SR accnt"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_at"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_ts"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_tk"}),(0,s.jsx)(r.td,{children:"VARCHAR(12)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_yr"}),(0,s.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_mn"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_dy"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_xx"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_cp"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'Call'"}),(0,s.jsx)(r.td,{children:"security key stock future or option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"security type"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderSide"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"order side always buy for MLEG orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ssaleFlag"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"ssale flag None if not stock"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"positionType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"positionType None if not equity option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"parent order source"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"groupingCode"}),(0,s.jsx)(r.td,{children:"CHAR(19)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(r.td,{children:"unique broker code"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baseParentNumber"}),(0,s.jsx)(r.td,{children:"CHAR(19)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(r.td,{children:"SR BaseParentNumber these executions belong to can be zero if executions are drop"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mlegLegKey"}),(0,s.jsx)(r.td,{children:"TINYTEXT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"secKeyStringKeylegRatiosidepositionEffect secKeyStringKeylegRatiosidepositionEffect"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cumFillQty"}),(0,s.jsx)(r.td,{children:"INT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"net cumFillQty total for the day"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"avgFillPrc"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"average fill price"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allocStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OmniAllocStatus",children:"enum - OmniAllocStatus"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"allocation status"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ChildOrdersList"}),(0,s.jsx)(r.td,{children:"JSON"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'JSON_OBJECT()'"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Sequence"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"omniOrderNumber"}),(0,s.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"json-block-childorderslist",children:"JSON Block (ChildOrdersList)"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clOrdId"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"childOrders in the above allocation"})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSROmniOrder` (\n    `omniOrderNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'unique number for this message',\n    `omniAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'omnibus accnt (SR accnt)',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key (stock, future, or option)',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key (stock, future, or option)',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'order side (always buy for MLEG orders)',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'ssale flag (None if not stock)',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None' COMMENT 'positionType (None if not equity option)',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None' COMMENT 'parent order source',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'unique broker code',\n    `baseParentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SR BaseParentNumber these executions belong to (can be zero if executions are drop)',\n    `mlegLegKey` TINYTEXT NOT NULL DEFAULT '' COMMENT '[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]',\n    `cumFillQty` INT NOT NULL DEFAULT 0 COMMENT 'net cumFillQty (total for the day)',\n    `avgFillPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'average fill price',\n    `allocStatus` ENUM('None','Open','ReadyToAlloc','AllocWorking','Allocated','Error') NOT NULL DEFAULT 'None' COMMENT 'allocation status',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ChildOrdersList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ChildOrdersList)),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    CONSTRAINT nonnegative_baseParentNumber CHECK(ASCII(baseParentNumber) < 56),\n    PRIMARY KEY USING HASH (`omniOrderNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `omniOrderNumber`,\n    `omniAccnt`,\n    `clientFirm`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `orderSide`,\n    `ssaleFlag`,\n    `positionType`,\n    `spdrSource`,\n    `groupingCode`,\n    `baseParentNumber`,\n    `mlegLegKey`,\n    `cumFillQty`,\n    `avgFillPrc`,\n    `allocStatus`,\n    `timestamp`,\n    `ChildOrdersList`\nFROM `SRTrade`.`MsgSROmniOrder`\nWHERE \n    /* Replace with a BIGINT */ \n    `omniOrderNumber` = 1234567890;\n"})}),"\n",(0,s.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrOmniOrder' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},91503:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var t=n(75271);let s={},d=t.createContext(s);function i(e){let r=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);