"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25930],{63656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(74848),s=r(28453);const i={title:"OpraPrintType"},a=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/OpraPrintType",title:"OpraPrintType",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/OpraPrintType.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OpraPrintType"},sidebar:"messageSchemasSidebar",previous:{title:"NMSCircuitBreaker",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/"},next:{title:"OptExpiryDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptExpiryDefinition/"}},o={},p=[];function S(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/market-data-options/OpraPrintType",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOpraPrintType` (\n    `opraPrintType` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `printTypeChar` VARCHAR(1) NOT NULL DEFAULT '' COMMENT 'character value of printType',\n    `printCode` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'eg, AUTO, CANC',\n    `printCodeString` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'longer string',\n    `printCodeDescription` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'full description',\n    PRIMARY KEY USING HASH (`opraPrintType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);