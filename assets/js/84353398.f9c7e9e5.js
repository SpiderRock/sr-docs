"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[48490],{27278:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>S,toc:()=>d});var s=t(74848),i=t(28453);const a={title:"SpdrStripeTrigger"},n=void 0,S={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/SpdrStripeTrigger",title:"SpdrStripeTrigger",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/SpdrStripeTrigger.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStripeTrigger/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrStripeTrigger"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStrategyStateLeggerX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyStateLeggerX/"},next:{title:"SpdrSweepDetail",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSweepDetail/"}},c={},d=[];function o(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrStripeTrigger",children:"V8 Message Definition"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRStripeTrigger` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `triggerGroupId` BIGINT NOT NULL DEFAULT 0,\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`accnt`,`triggerGroupId`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrStripeTrigger records are used to allocate sweep risk and trigger cross stripe release of parent orders submitted with startType=WaitTrigger.  These records are published by a SR Strategy Server if/when a SpdrReleaseWaitTrigger message is received.';\n\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>S});var s=t(96540);const i={},a=s.createContext(i);function n(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function S(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);