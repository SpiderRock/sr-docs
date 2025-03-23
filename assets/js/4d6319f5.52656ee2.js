"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[85635],{42140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var n=r(74848),s=r(28453);const d={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/GlobalRiskControl",title:"GlobalRiskControl",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/GlobalRiskControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutureControl",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/"},next:{title:"HedgePolicyAlgoConfig",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/HedgePolicyAlgoConfig/"}},o={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/risk-control/GlobalRiskControl",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.p,{children:"GlobalRiskControl records are used to establish ticker specific order size risk control limits"}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"4535-risk-control"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"ClientControl"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRControl"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stkEnabled"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Enabled or not for equities Nonedisabled"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"futEnabled"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Enabled or not for futures Nonedisabled"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"optEnabled"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Enabled or not for options Nonedisabled"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxMargin"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum abs margin per parent order SR variation margin"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxStkQty"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Number of equity shares that can be bought or sold by a single parent order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxFutQty"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Number of futures contracts that can be bought or sold by a single parent order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxOptQty"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Number of option contracts that can be bought or sold by a single parent order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxStkDDelta"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum abs mny per stock parent order ddelta  001  shares  pointValue  midPrc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxFutDDelta"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum abs mny per future parent order ddelta  001  contracts  pointValue  midPrc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"orderMaxOptDDelta"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum abs mny per option parent order ddelta  001  contracts  pointValue  ABSde  uMidPrc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stkCollarPct"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum user limit vs bidask price control  percentage in decimals"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"futCollarPct"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum user limit vs bidask price control  percentage in decimals"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"optCollarPct"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Maximum user limit vs bidask price control  percentage in decimals"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"modifiedBy"}),(0,n.jsx)(t.td,{children:"VARCHAR(24)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"User that last modified this record"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"modifiedIn"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Environment this record was last updated in"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"Timestamp of this record"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgGlobalRiskControl` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for equities (None=disabled)',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for futures (None=disabled)',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for options (None=disabled)',\n    `orderMaxMargin` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) margin per parent order (SR variation margin)',\n    `orderMaxStkQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of equity shares that can be bought or sold by a single parent order',\n    `orderMaxFutQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of futures contracts that can be bought or sold by a single parent order',\n    `orderMaxOptQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of option contracts that can be bought or sold by a single parent order',\n    `orderMaxStkDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc',\n    `orderMaxFutDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc',\n    `orderMaxOptDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc',\n    `stkCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage in decimals',\n    `futCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage in decimals',\n    `optCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage in decimals',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'User that last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'Environment this record was last updated in',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Timestamp of this record',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='GlobalRiskControl records are used to establish ticker specific order size risk control limits';\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `stkEnabled`,\n    `futEnabled`,\n    `optEnabled`,\n    `orderMaxMargin`,\n    `orderMaxStkQty`,\n    `orderMaxFutQty`,\n    `orderMaxOptQty`,\n    `orderMaxStkDDelta`,\n    `orderMaxFutDDelta`,\n    `orderMaxOptDDelta`,\n    `stkCollarPct`,\n    `futCollarPct`,\n    `optCollarPct`,\n    `timestamp`\nFROM `SRControl`.`MsgGlobalRiskControl`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='GlobalRiskControl' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);