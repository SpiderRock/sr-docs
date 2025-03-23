"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17626],{45618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=t(74848),s=t(28453);const l={},a=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/MarRiskControl",title:"MarRiskControl",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/MarRiskControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControl/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"IndustryControl",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/IndustryControl/"},next:{title:"MarRiskControlTkOverride",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskControlTkOverride/"}},d={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/risk-control/MarRiskControl",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"MarRiskControl records are used to establish risk controls within SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"4535-risk-control"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRControl"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"If exists a client firm imposing risk controls should be an existing SR client ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskGroup"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"The ID of the risk group these rules will apply to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAccnt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"If Yes this control applies only to risk for test accounts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stkEnabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Enabled or not for equities Nonedisabled"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"futEnabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Enabled or not for futures Nonedisabled"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"optEnabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum - MarState"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Enabled or not for options Nonedisabled"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"marginLimitAcc"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum net per symbol total portfolio startofday positions  day trades margin can include external sources"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"marginLimitDay"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum net per symbolday day portfolio day trades only margin can include external sources"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"openExposureLimit"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum abs open child order Delta no netting open child orders only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxAccFutCnAbs"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum absolute net account future contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxDayFutCnBot"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Day future contracts bot"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxDayFutCnSld"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Day future contracts sld"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxDayFutCnAbs"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum absolute net day future contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxStkQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Number of equity shares that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxFutQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Number of futures contracts that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxOptQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Number of option contracts that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxStkDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum abs mny per stock parent order ddelta  001  shares  pointValue  midPrc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxFutDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum abs mny per future parent order ddelta  001  contracts  pointValue  midPrc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orderMaxOptDDelta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum abs mny per option parent order ddelta  001  contracts  pointValue  ABSde  uMidPrc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stkCollarPct"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum user limit vs bidask price control  percentage as a number between 0 and 1 in decimals"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"futCollarPct"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum user limit vs bidask price control  percentage as a number between 0 and 1 in decimals"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"optCollarPct"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Maximum user limit vs bidask price control  percentage as a number between 0 and 1 in decimals"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allowStkOddLots"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Allow parent stock orders with an order size below 100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allowLimitOnClose"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Allow limit on close orders  similar to MOC order with the addition of a price limit"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allowMarketOnClose"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Allow market on close orders  special order type which is executed as close to the close of trading as possible"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allowShortSaleExempt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Allow short sale option orders to be marked exempt as per Rule 201"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allowInterMarketSweep"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Allow intermarket sweep orders"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blockShortSales"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Block all short sales"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"User that last modified this record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Environment this record was last updated in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"Timestamp of this record"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskFirm"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskGroup"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTestAccnt"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgMarRiskControl` (\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'If exists, a client firm imposing risk controls (should be an existing SR client ID)',\n    `riskGroup` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'The ID of the risk group these rules will apply to',\n    `isTestAccnt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'If Yes, this control applies only to risk for test accounts',\n    `stkEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for equities (None=disabled)',\n    `futEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for futures (None=disabled)',\n    `optEnabled` ENUM('None','Enable','Disabled','CloseOnly') NOT NULL DEFAULT 'None' COMMENT 'Enabled or not for options (None=disabled)',\n    `marginLimitAcc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)',\n    `marginLimitDay` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)',\n    `openExposureLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum abs open child order $Delta (no netting) (open child orders only)',\n    `maxAccFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'Maximum absolute (net) account future contracts',\n    `maxDayFutCnBot` INT NOT NULL DEFAULT 0 COMMENT 'Day future contracts bot',\n    `maxDayFutCnSld` INT NOT NULL DEFAULT 0 COMMENT 'Day future contracts sld',\n    `maxDayFutCnAbs` INT NOT NULL DEFAULT 0 COMMENT 'Maximum absolute (net) day future contracts',\n    `orderMaxStkQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of equity shares that can be bought or sold by a single parent order',\n    `orderMaxFutQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of futures contracts that can be bought or sold by a single parent order',\n    `orderMaxOptQty` INT NOT NULL DEFAULT 0 COMMENT 'Number of option contracts that can be bought or sold by a single parent order',\n    `orderMaxStkDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc',\n    `orderMaxFutDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc',\n    `orderMaxOptDDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc',\n    `stkCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage as a number between 0 and 1 in decimals',\n    `futCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage as a number between 0 and 1 in decimals',\n    `optCollarPct` FLOAT NOT NULL DEFAULT 0 COMMENT 'Maximum user limit vs bid/ask price control - percentage as a number between 0 and 1 in decimals',\n    `allowStkOddLots` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow parent stock orders with an order size below 100',\n    `allowLimitOnClose` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow limit on close orders - similar to MOC order, with the addition of a price limit',\n    `allowMarketOnClose` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow market on close orders - special order type which is executed as close to the close of trading as possible',\n    `allowShortSaleExempt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow short sale option orders to be marked exempt, as per Rule 201',\n    `allowInterMarketSweep` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Allow intermarket sweep orders',\n    `blockShortSales` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Block all short sales',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'User that last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'Environment this record was last updated in',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'Timestamp of this record',\n    PRIMARY KEY USING HASH (`riskFirm`,`riskGroup`,`isTestAccnt`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='MarRiskControl records are used to establish risk controls within SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `riskFirm`,\n    `riskGroup`,\n    `isTestAccnt`,\n    `stkEnabled`,\n    `futEnabled`,\n    `optEnabled`,\n    `marginLimitAcc`,\n    `marginLimitDay`,\n    `openExposureLimit`,\n    `maxAccFutCnAbs`,\n    `maxDayFutCnBot`,\n    `maxDayFutCnSld`,\n    `maxDayFutCnAbs`,\n    `orderMaxStkQty`,\n    `orderMaxFutQty`,\n    `orderMaxOptQty`,\n    `orderMaxStkDDelta`,\n    `orderMaxFutDDelta`,\n    `orderMaxOptDDelta`,\n    `stkCollarPct`,\n    `futCollarPct`,\n    `optCollarPct`,\n    `allowStkOddLots`,\n    `allowLimitOnClose`,\n    `allowMarketOnClose`,\n    `allowShortSaleExempt`,\n    `allowInterMarketSweep`,\n    `blockShortSales`,\n    `timestamp`\nFROM `SRControl`.`MsgMarRiskControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgMarRiskControl` \nSET\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `stkEnabled` = 'None',\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `futEnabled` = 'None',\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `optEnabled` = 'None',\n    /* Replace with a FLOAT */\n    `marginLimitAcc` = 1.23,\n    /* Replace with a FLOAT */ \n    `marginLimitDay` = 1.23,\n    /* Replace with a FLOAT */\n    `openExposureLimit` = 1.23,\n    /* Replace with a INT */ \n    `maxAccFutCnAbs` = 5,\n    /* Replace with a INT */ \n    `maxDayFutCnBot` = 5,\n    /* Replace with a INT */ \n    `maxDayFutCnSld` = 5,\n    /* Replace with a INT */ \n    `maxDayFutCnAbs` = 5,\n    /* Replace with a INT */ \n    `orderMaxStkQty` = 5,\n    /* Replace with a INT */ \n    `orderMaxFutQty` = 5,\n    /* Replace with a INT */ \n    `orderMaxOptQty` = 5,\n    /* Replace with a FLOAT */ \n    `orderMaxStkDDelta` = 1.23,\n    /* Replace with a FLOAT */ \n    `orderMaxFutDDelta` = 1.23,\n    /* Replace with a FLOAT */ \n    `orderMaxOptDDelta` = 1.23,\n    /* Replace with a FLOAT */ \n    `stkCollarPct` = 1.23,\n    /* Replace with a FLOAT */ \n    `futCollarPct` = 1.23,\n    /* Replace with a FLOAT */ \n    `optCollarPct` = 1.23,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowStkOddLots` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowLimitOnClose` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowMarketOnClose` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowShortSaleExempt` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowInterMarketSweep` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `blockShortSales` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgMarRiskControl`(\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `stkEnabled`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `futEnabled`,\n    /* Replace with a ENUM('None','Enable','Disabled','CloseOnly') */ \n    `optEnabled`,\n    /* Replace with a FLOAT */\n    `marginLimitAcc`,\n    /* Replace with a FLOAT */ \n    `marginLimitDay`,\n    /* Replace with a FLOAT */\n    `openExposureLimit`,\n    /* Replace with a INT */ \n    `maxAccFutCnAbs`,\n    /* Replace with a INT */ \n    `maxDayFutCnBot`,\n    /* Replace with a INT */ \n    `maxDayFutCnSld`,\n    /* Replace with a INT */ \n    `maxDayFutCnAbs`,\n    /* Replace with a INT */ \n    `orderMaxStkQty`,\n    /* Replace with a INT */ \n    `orderMaxFutQty`,\n    /* Replace with a INT */ \n    `orderMaxOptQty`,\n    /* Replace with a FLOAT */ \n    `orderMaxStkDDelta`,\n    /* Replace with a FLOAT */ \n    `orderMaxFutDDelta`,\n    /* Replace with a FLOAT */ \n    `orderMaxOptDDelta`,\n    /* Replace with a FLOAT */ \n    `stkCollarPct`,\n    /* Replace with a FLOAT */ \n    `futCollarPct`,\n    /* Replace with a FLOAT */ \n    `optCollarPct`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowStkOddLots`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowLimitOnClose`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowMarketOnClose`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowShortSaleExempt`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `allowInterMarketSweep`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `blockShortSales`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_riskFirm',\n    'Example_riskGroup',\n    'None',\n    'None',\n    'None',\n    'None',\n    1.23,\n    1.23,\n    1.23,\n    5,\n    5,\n    5,\n    5,\n    5,\n    5,\n    5,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'None',\n    'None',\n    'None',\n    'None',\n    'None',\n    'None',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgMarRiskControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskGroup` = 'Example_riskGroup'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTestAccnt` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='MarRiskControl' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},l=r.createContext(s);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);