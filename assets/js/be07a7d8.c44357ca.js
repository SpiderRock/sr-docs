"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46159],{43430:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>N,contentTitle:()=>T,default:()=>S,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(74848),r=t(28453);const s={title:"SpdrOptTheoRecord"},T=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/SpdrOptTheoRecord",title:"SpdrOptTheoRecord",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/SpdrOptTheoRecord.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrOptTheoRecord"},sidebar:"messageSchemasSidebar",previous:{title:"OptionTheoVol",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol/"},next:{title:"SpdrTheoExp2PtCurve",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExp2PtCurve/"}},N={},a=[];function d(e){const o={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"../../../Topics/client-theos/SpdrOptTheoRecord",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgSROptTheoRecord` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm this theo model is associated with (controls visibility)',\n    `TheoVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'mid-point (fair) volatility',\n    `BVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy vol',\n    `SVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell vol',\n    `BEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge premium spread when buying',\n    `SEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge premium spread when selling',\n    `buySellConvention` ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') NOT NULL DEFAULT 'None' COMMENT 'rule used to interpret BVol, SVol, BEdge, and SEdge',\n    `refUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Reference uPrc for dynamic vol: vol = TheoVol + vegaSlope * (uPrc - refUPrc).',\n    `vegaSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'Set to zero for no dynamic.  hedge delta = delta + vegaSlope * vega;requires account.hedgeType = [TVol (theo delta + vegaSlope) or TvS (surface delta + vegaSlope)] (default is surface delta only)',\n    `theoStatus` ENUM('Hold','Auto','Scanner','Markup','CloseOnly') NOT NULL DEFAULT 'Hold' COMMENT 'indicates where theos for this ticker will be utilized',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`theoModel`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function S(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>T,x:()=>c});var n=t(96540);const r={},s=n.createContext(r);function T(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:T(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);