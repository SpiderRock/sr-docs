"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67610],{50088:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>i,metadata:()=>c,toc:()=>T});var t=r(74848),n=r(28453);const i={title:"LiveIVarSwapFixedTerm"},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/LiveIVarSwapFixedTerm",title:"LiveIVarSwapFixedTerm",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/LiveIVarSwapFixedTerm.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveIVarSwapFixedTerm"},sidebar:"messageSchemasSidebar",previous:{title:"LiveExpirySurface",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/"},next:{title:"LiveImpliedQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/"}},d={},T=[];function L(e){const a={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"../../../Topics/analytics/LiveIVarSwapFixedTerm",children:"V8 Message Definition"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveIVarSwapFixedTerm` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `surfaceType` ENUM('None','Live','PrevDay','Interp','Close','Test') NOT NULL DEFAULT 'None',\n    `iVarSwap_5d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 5 day integrated surface variance',\n    `iVarSwap_10d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 10 day integrated surface variance',\n    `iVarSwap_21d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 21 day integrated surface variance',\n    `iVarSwap_42d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 42 day integrated surface variance',\n    `iVarSwap_63d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 63 day integrated surface variance',\n    `iVarSwap_84d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 84 day integrated surface variance',\n    `iVarSwap_105d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 105 day integrated surface variance',\n    `iVarSwap_126d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 126 day integrated surface variance',\n    `iVarSwap_189d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 189 day integrated surface variance',\n    `iVarSwap_252d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 252 day integrated surface variance',\n    `iVarSwap_378d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 378 day integrated surface variance',\n    `iVarSwap_504d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 504 day integrated surface variance',\n    `status` ENUM('None','Normal','Closed') NOT NULL DEFAULT 'None',\n    `time` TIME(6) NOT NULL DEFAULT '00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`surfaceType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration.';\n\n"})})]})}function N(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>c});var t=r(96540);const n={},i=t.createContext(n);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);