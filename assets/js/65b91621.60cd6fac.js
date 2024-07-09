"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89577],{91802:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var n=s(74848),t=s(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel/SpdrRiskGroupCancel",title:"SpdrRiskGroupCancel",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel/SpdrRiskGroupCancel.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrRiskExecution",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskExecution/"},next:{title:"SpdrRiskGroupControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrRiskGroupCancel",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"ClientTrading"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Product"}),(0,n.jsx)(r.td,{children:"SRTrade"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accessType"}),(0,n.jsx)(r.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"riskGroupId"}),(0,n.jsx)(r.td,{children:"BIGINT"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"all orders with the same riskGroupId share a common set of risk countersGrp risk limits apply to these shared counters"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accnt"}),(0,n.jsx)(r.td,{children:"VARCHAR(16)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"SR trading account"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"VARCHAR(16)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"SR client firm"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sysEnvironment"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"original source sys environment Stable Current etc"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"runStatus"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"original source run status ProdBeta"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"spdrSource"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cxlReason"}),(0,n.jsx)(r.td,{children:"VARCHAR(16)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"altCancelId"}),(0,n.jsx)(r.td,{children:"VARCHAR(24)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"userName"}),(0,n.jsx)(r.td,{children:"VARCHAR(24)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"riskGroupId"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accnt"}),(0,n.jsx)(r.td,{children:"2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRRiskGroupCancel` (\n    `riskGroupId` BIGINT NOT NULL DEFAULT 0 COMMENT 'all orders with the same riskGroupId share a common set of risk counters;.Grp. risk limits apply to these shared counters',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `cxlReason` VARCHAR(16) NOT NULL DEFAULT '',\n    `altCancelId` VARCHAR(24) NOT NULL DEFAULT '',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`riskGroupId`,`accnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable.';\n\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(96540);const t={},d=n.createContext(t);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);