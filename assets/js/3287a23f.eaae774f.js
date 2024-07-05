"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[525],{91736:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var s=t(74848),c=t(28453);const n={title:"NMSCircuitBreaker"},a=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/NMSCircuitBreaker",title:"NMSCircuitBreaker",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/NMSCircuitBreaker.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/NMSCircuitBreaker/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NMSCircuitBreaker"},sidebar:"messageSchemasSidebar",previous:{title:"IndexQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/IndexQuote/"},next:{title:"OpraPrintType",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OpraPrintType/"}},o={},u=[];function S(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/product-status/NMSCircuitBreaker",children:"V8 Message Definition"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgNMSCircuitBreaker` (\n    `marketCenter` VARCHAR(6) NOT NULL DEFAULT '',\n    `level1` FLOAT NOT NULL DEFAULT 0 COMMENT 'level 1 threshold',\n    `level2` FLOAT NOT NULL DEFAULT 0 COMMENT 'level 2 threshold',\n    `level3` FLOAT NOT NULL DEFAULT 0 COMMENT 'level 3 threshold',\n    `currentLevel` INT NOT NULL DEFAULT 0 COMMENT 'current market circuit breaker level (0 - 3)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`marketCenter`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains circuit breaker information for market centers with circuit breakers.  Note that circuit breaker records may not always exist for a market center.';\n\n"})})]})}function l(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var s=t(96540);const c={},n=s.createContext(c);function a(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);