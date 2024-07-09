"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17496],{5988:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>n,toc:()=>h});var d=s(74848),t=s(28453);const r={},i=void 0,n={id:"MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/RiskGroupCounter",title:"RiskGroupCounter",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/RiskGroupCounter.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ResponderMarkupVegaDir",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupVegaDir/"},next:{title:"SecDefRequestGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SecDefRequestGateway/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const l={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.p,{children:(0,d.jsx)(l.a,{href:"../../../Topics/risk-counter/RiskGroupCounter",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(l.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(l.table,{children:[(0,d.jsx)(l.thead,{children:(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.th,{children:"Attribute"}),(0,d.jsx)(l.th,{children:"Value"})]})}),(0,d.jsxs)(l.tbody,{children:[(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"Topic"}),(0,d.jsx)(l.td,{children:"4625-risk-counter"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"MLink Token"}),(0,d.jsx)(l.td,{children:"SystemData"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"Product"}),(0,d.jsx)(l.td,{children:"SRTrade"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"accessType"}),(0,d.jsx)(l.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(l.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(l.table,{children:[(0,d.jsx)(l.thead,{children:(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.th,{children:"Field"}),(0,d.jsx)(l.th,{children:"Type"}),(0,d.jsx)(l.th,{children:"Key"}),(0,d.jsx)(l.th,{children:"Comment"})]})}),(0,d.jsxs)(l.tbody,{children:[(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"riskGroupId"}),(0,d.jsx)(l.td,{children:"BIGINT"}),(0,d.jsx)(l.td,{children:"PRI"}),(0,d.jsx)(l.td,{})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"accnt"}),(0,d.jsx)(l.td,{children:"VARCHAR(16)"}),(0,d.jsx)(l.td,{children:"PRI"}),(0,d.jsx)(l.td,{})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"riskFirm"}),(0,d.jsx)(l.td,{children:"VARCHAR(16)"}),(0,d.jsx)(l.td,{children:"PRI"}),(0,d.jsx)(l.td,{})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"sysRealm"}),(0,d.jsx)(l.td,{children:(0,d.jsx)(l.a,{href:"../../../Enums/SysRealm",children:"enum - SysRealm"})}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"sysEnvironment"}),(0,d.jsx)(l.td,{children:(0,d.jsx)(l.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"original source sys environment Stable Current etc"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"riskEngine"}),(0,d.jsx)(l.td,{children:"VARCHAR(32)"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"EE engine name"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"changeReason"}),(0,d.jsx)(l.td,{children:(0,d.jsx)(l.a,{href:"../../../Enums/ChangeReason",children:"enum - ChangeReason"})}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"optQtyBotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"optQtySldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"ddBotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"ddSldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"veBotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"veSldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"wtVeBotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"wtVeSldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"nvBotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves notional value"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"nvSldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves notional value"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm1BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm1SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm2BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm2SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm3BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm3SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm4BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm4SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm5BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm5SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm6BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm6SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm7BotIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"rm7SldIocFilled"}),(0,d.jsx)(l.td,{children:"FLOAT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"counter"}),(0,d.jsx)(l.td,{children:"INT"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"timestamp"}),(0,d.jsx)(l.td,{children:"DATETIME(6)"}),(0,d.jsx)(l.td,{}),(0,d.jsx)(l.td,{})]})]})]}),"\n",(0,d.jsx)(l.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(l.table,{children:[(0,d.jsx)(l.thead,{children:(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.th,{children:"Field"}),(0,d.jsx)(l.th,{children:"Sequence"})]})}),(0,d.jsxs)(l.tbody,{children:[(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"riskGroupId"}),(0,d.jsx)(l.td,{children:"1"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"accnt"}),(0,d.jsx)(l.td,{children:"2"})]}),(0,d.jsxs)(l.tr,{children:[(0,d.jsx)(l.td,{children:"riskFirm"}),(0,d.jsx)(l.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(l.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(l.pre,{children:(0,d.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgRiskGroupCounter` (\n    `riskGroupId` BIGINT NOT NULL DEFAULT 0,\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `sysRealm` ENUM('None','SysTest','NMS','CME','FR2','LD4','DR') NOT NULL DEFAULT 'None',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `riskEngine` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'EE engine name',\n    `changeReason` ENUM('None','ChildOrder','RiskExec','SymRotate','ExpRotate','AccMargin','FutRisk') NOT NULL DEFAULT 'None',\n    `optQtyBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `optQtySldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `ddBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `ddSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `veBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `veSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `wtVeBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `wtVeSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `nvBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves (notional value)',\n    `nvSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves (notional value)',\n    `rm1BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm1SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm2BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm2SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm3BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm3SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm4BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm4SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm5BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm5SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm6BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm6SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm7BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm7SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `counter` INT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`riskGroupId`,`accnt`,`riskFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function j(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,d.jsx)(l,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,l,s)=>{s.d(l,{R:()=>i,x:()=>n});var d=s(96540);const t={},r=d.createContext(t);function i(e){const l=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function n(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:l},e.children)}}}]);