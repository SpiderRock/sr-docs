"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["51740"],{98323:function(e,l,d){d.r(l),d.d(l,{default:()=>x,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/RiskGroupCounter","title":"RiskGroupCounter","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/RiskGroupCounter.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/RiskGroupCounter/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"ResponderMarkupVegaDir","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupVegaDir/"},"next":{"title":"SRAccntCancel","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SRAccntCancel/"}}'),n=d("52676"),i=d("91503");let r={},t=void 0,c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let l={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"../../../Topics/risk-counter/RiskGroupCounter",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(l.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Attribute"}),(0,n.jsx)(l.th,{children:"Value"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"Topic"}),(0,n.jsx)(l.td,{children:"4625-risk-counter"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"MLink Token"}),(0,n.jsx)(l.td,{children:"ClientTrading"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"Product"}),(0,n.jsx)(l.td,{children:"SRTrade"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"accessType"}),(0,n.jsx)(l.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(l.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Field"}),(0,n.jsx)(l.th,{children:"Type"}),(0,n.jsx)(l.th,{children:"Key"}),(0,n.jsx)(l.th,{children:"Default Value"}),(0,n.jsx)(l.th,{children:"Comment"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"riskGroupId"}),(0,n.jsx)(l.td,{children:"CHAR(19)"}),(0,n.jsx)(l.td,{children:"PRI"}),(0,n.jsx)(l.td,{children:"'0000-0000-0000-0000'"}),(0,n.jsx)(l.td,{})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"accnt"}),(0,n.jsx)(l.td,{children:"VARCHAR(16)"}),(0,n.jsx)(l.td,{children:"PRI"}),(0,n.jsx)(l.td,{children:"''"}),(0,n.jsx)(l.td,{})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"riskFirm"}),(0,n.jsx)(l.td,{children:"VARCHAR(16)"}),(0,n.jsx)(l.td,{children:"PRI"}),(0,n.jsx)(l.td,{children:"''"}),(0,n.jsx)(l.td,{})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"sysRealm"}),(0,n.jsx)(l.td,{children:(0,n.jsx)(l.a,{href:"../../../Enums/SysRealm",children:"enum - SysRealm"})}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"'None'"}),(0,n.jsx)(l.td,{})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"sysEnvironment"}),(0,n.jsx)(l.td,{children:(0,n.jsx)(l.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"'None'"}),(0,n.jsx)(l.td,{children:"original source sys environment Stable Current etc"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"riskEngine"}),(0,n.jsx)(l.td,{children:"VARCHAR(32)"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"''"}),(0,n.jsx)(l.td,{children:"EE engine name"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"changeReason"}),(0,n.jsx)(l.td,{children:(0,n.jsx)(l.a,{href:"../../../Enums/ChangeReason",children:"enum - ChangeReason"})}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"'None'"}),(0,n.jsx)(l.td,{})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"optQtyBotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"optQtySldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"ddBotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"ddSldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"veBotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"veSldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"wtVeBotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"wtVeSldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"nvBotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves notional value"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"nvSldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves notional value"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm1BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm1SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm2BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm2SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm3BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm3SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm4BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm4SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm5BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm5SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm6BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm6SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm7BotIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"rm7SldIocFilled"}),(0,n.jsx)(l.td,{children:"FLOAT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{children:"fills  IOC leaves"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"counter"}),(0,n.jsx)(l.td,{children:"INT"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"0"}),(0,n.jsx)(l.td,{})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"timestamp"}),(0,n.jsx)(l.td,{children:"DATETIME(6)"}),(0,n.jsx)(l.td,{}),(0,n.jsx)(l.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(l.td,{})]})]})]}),"\n",(0,n.jsx)(l.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Field"}),(0,n.jsx)(l.th,{children:"Sequence"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"riskGroupId"}),(0,n.jsx)(l.td,{children:"1"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"accnt"}),(0,n.jsx)(l.td,{children:"2"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"riskFirm"}),(0,n.jsx)(l.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(l.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgRiskGroupCounter` (\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `sysRealm` ENUM('None','SysTest','NMS','CME','FR2','LD4','DR') NOT NULL DEFAULT 'None',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `riskEngine` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'EE engine name',\n    `changeReason` ENUM('None','ChildOrder','RiskExec','SymRotate','ExpRotate','AccMargin','FutRisk') NOT NULL DEFAULT 'None',\n    `optQtyBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `optQtySldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `ddBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `ddSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `veBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `veSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `wtVeBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `wtVeSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `nvBotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves (notional value)',\n    `nvSldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves (notional value)',\n    `rm1BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm1SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm2BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm2SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm3BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm3SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm4BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm4SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm5BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm5SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm6BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm6SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm7BotIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `rm7SldIocFilled` FLOAT NOT NULL DEFAULT 0 COMMENT 'fills + IOC leaves',\n    `counter` INT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`riskGroupId`,`accnt`,`riskFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,n.jsx)(l.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sql",children:"SELECT\n    `riskGroupId`,\n    `accnt`,\n    `riskFirm`,\n    `sysRealm`,\n    `sysEnvironment`,\n    `riskEngine`,\n    `changeReason`,\n    `optQtyBotIocFilled`,\n    `optQtySldIocFilled`,\n    `ddBotIocFilled`,\n    `ddSldIocFilled`,\n    `veBotIocFilled`,\n    `veSldIocFilled`,\n    `wtVeBotIocFilled`,\n    `wtVeSldIocFilled`,\n    `nvBotIocFilled`,\n    `nvSldIocFilled`,\n    `rm1BotIocFilled`,\n    `rm1SldIocFilled`,\n    `rm2BotIocFilled`,\n    `rm2SldIocFilled`,\n    `rm3BotIocFilled`,\n    `rm3SldIocFilled`,\n    `rm4BotIocFilled`,\n    `rm4SldIocFilled`,\n    `rm5BotIocFilled`,\n    `rm5SldIocFilled`,\n    `rm6BotIocFilled`,\n    `rm6SldIocFilled`,\n    `rm7BotIocFilled`,\n    `rm7SldIocFilled`,\n    `counter`,\n    `timestamp`\nFROM `SRTrade`.`MsgRiskGroupCounter`\nWHERE \n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm';\n"})}),"\n",(0,n.jsx)(l.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='RiskGroupCounter' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},91503:function(e,l,d){d.d(l,{Z:function(){return t},a:function(){return r}});var s=d(75271);let n={},i=s.createContext(n);function r(e){let l=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:l},e.children)}}}]);