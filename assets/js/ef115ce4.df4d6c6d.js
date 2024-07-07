"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55991],{38532:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>N,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var S=s(74848),c=s(28453);const o={title:"StockRegSHOStatus"},n=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockRegSHOStatus/StockRegSHOStatus",title:"StockRegSHOStatus",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockRegSHOStatus/StockRegSHOStatus.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockRegSHOStatus",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockRegSHOStatus/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockRegSHOStatus/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockRegSHOStatus"},sidebar:"messageSchemasSidebar",previous:{title:"StockQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockQuoteProbability/"},next:{title:"SyntheticExpiryCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryCloseMark/"}},r={},i=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(t.p,{children:(0,S.jsx)(t.a,{href:"../../../Topics/product-status/StockRegSHOStatus",children:"V8 Message Definition"})}),"\n",(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockRegSHOStatus` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `regSHOStatus` ENUM('None','Restricted') NOT NULL DEFAULT 'None' COMMENT 'Reg SHO status: None - no short sell restrictions, Restricted - Reg SHO short restrictions in place',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last update',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function N(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>a});var S=s(96540);const c={},o=S.createContext(c);function n(e){const t=S.useContext(o);return S.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),S.createElement(o.Provider,{value:t},e.children)}}}]);