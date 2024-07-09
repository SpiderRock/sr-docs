"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2200],{40063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=r(74848),n=r(28453);const d={},i=void 0,o={id:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/MarRiskControl",title:"MarRiskControl",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/MarRiskControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"IndustryControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/"},next:{title:"MarRiskControlTkOverride",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/risk-control/MarRiskControl",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"4535-risk-control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRControl"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"If exists a client firm imposing risk controls should be an existing SR client ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskGroup"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"The ID of the risk group these rules will apply to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAccnt"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"If Yes this control applies only to risk for test accounts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkEnabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Enabled or not for equities Nonedisabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"futEnabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Enabled or not for futures Nonedisabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optEnabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Enabled or not for options Nonedisabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"marginLimitAcc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum net per symbol total portfolio startofday positions  day trades margin can include external sources"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"marginLimitDay"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum net per symbolday day portfolio day trades only margin can include external sources"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openExposureLimit"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum abs open child order Delta no netting open child orders only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxAccFutCnAbs"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum absolute net account future contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxDayFutCnBot"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Day future contracts bot"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxDayFutCnSld"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Day future contracts sld"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxDayFutCnAbs"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum absolute net day future contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxMargin"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum abs margin per parent order SR variation margin"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxStkQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Number of equity shares that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxFutQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Number of futures contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxOptQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Number of option contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxStkDDelta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum abs mny per stock parent order ddelta  001  shares  pointValue  midPrc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxFutDDelta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum abs mny per future parent order ddelta  001  contracts  pointValue  midPrc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orderMaxOptDDelta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum abs mny per option parent order ddelta  001  contracts  pointValue  ABSde  uMidPrc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkCollarPct"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum user limit vs bidask price control  percentage in decimals"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"futCollarPct"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum user limit vs bidask price control  percentage in decimals"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optCollarPct"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maximum user limit vs bidask price control  percentage in decimals"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowStkOddLots"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Allow parent stock orders with an order size below 100"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowLimitOnClose"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Allow limit on close orders  similar to MOC order with the addition of a price limit"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowMarketOnClose"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Allow market on close orders  special order type which is executed as close to the close of trading as possible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowShortSaleExempt"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Allow short sale option orders to be marked exempt as per Rule 201"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allowInterMarketSweep"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Allow intermarket sweep orders"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blockShortSales"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Block all short sales"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"User that last modified this record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Environment this record was last updated in"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Timestamp of this record"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskFirm"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskGroup"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAccnt"}),(0,s.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgMarRiskControl` (\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'If exists, a client firm imposing risk controls (should be an existing SR client ID)',\n    `riskGroup` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'The ID of the risk group these rules will apply to',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'If Yes, this control applies only to risk for test accounts',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for equities (None=disabled)',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for futures (None=disabled)',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for options (None=disabled)',\n    `marginLimitAcc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)',\n    `marginLimitDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)',\n    `openExposureLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum abs open child order $Delta (no netting) (open child orders only)',\n    `maxAccFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'Maximum absolute (net) account future contracts',\n    `maxDayFutCnBot` INT NOT NULL DEFAULT 0 COMMENT 'Day future contracts bot',\n    `maxDayFutCnSld` INT NOT NULL DEFAULT 0 COMMENT 'Day future contracts sld',\n    `maxDayFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'Maximum absolute (net) day future contracts',\n    `orderMaxMargin` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) margin per parent order (SR variation margin)',\n    `orderMaxStkQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of equity shares that can be bought or sold by a single parent order',\n    `orderMaxFutQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of futures contracts that can be bought or sold by a single parent order',\n    `orderMaxOptQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of option contracts that can be bought or sold by a single parent order',\n    `orderMaxStkDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc',\n    `orderMaxFutDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc',\n    `orderMaxOptDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc',\n    `stkCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage in decimals',\n    `futCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage in decimals',\n    `optCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage in decimals',\n    `allowStkOddLots` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow parent stock orders with an order size below 100',\n    `allowLimitOnClose` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow limit on close orders - similar to MOC order, with the addition of a price limit',\n    `allowMarketOnClose` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow market on close orders - special order type which is executed as close to the close of trading as possible',\n    `allowShortSaleExempt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow short sale option orders to be marked exempt, as per Rule 201',\n    `allowInterMarketSweep` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow intermarket sweep orders',\n    `blockShortSales` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Block all short sales',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'User that last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'Environment this record was last updated in',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Timestamp of this record',\n    PRIMARY KEY USING HASH (`riskFirm`,`riskGroup`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='MarRiskControl records are used to establish risk controls within SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var s=r(96540);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);