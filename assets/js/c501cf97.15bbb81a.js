"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21925],{18640:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var n=t(74848),r=t(28453);const i={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpiryAtm/LiveExpiryAtm",title:"LiveExpiryAtm",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpiryAtm/LiveExpiryAtm.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpiryAtm",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpiryAtm/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpiryAtm/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"LiveBasisCurve",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve/"},next:{title:"LiveExpirySurface",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/analytics/LiveExpiryAtm",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(s.p,{children:"LiveExpiryAtm (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.\nSurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"1000-analytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SRMLinkAnalytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_at"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_ts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_tk"}),(0,n.jsx)(s.td,{children:"VARCHAR(12)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_yr"}),(0,n.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_mn"}),(0,n.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_dy"}),(0,n.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"uPrc"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"effective uPrc used for surface fitting"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"uPrcDriver"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"underlier driver midmarket"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"atmVol"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"atm surface volatility xAxis  0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"atmSlope"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"volatility surface slope dVol  dXAxis  ATM xAxis0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"axisFUPrc"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"axis fwdUPrc used to compute xAxis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"xMult"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"xShift"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"skewMult"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"sVol  skewMult  BasisSkewFnxMult  xAxis  xShift"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sTimestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{children:"timestamp of the corresponding LiveExpirySurface record"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_tk"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_yr"}),(0,n.jsx)(s.td,{children:"2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_mn"}),(0,n.jsx)(s.td,{children:"3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_dy"}),(0,n.jsx)(s.td,{children:"4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_at"}),(0,n.jsx)(s.td,{children:"5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ekey_ts"}),(0,n.jsx)(s.td,{children:"6"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveExpiryAtm` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE','SPHR') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective uPrc used for surface fitting',\n    `uPrcDriver` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlier driver (mid-market)',\n    `atmVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm surface volatility (xAxis = 0)',\n    `atmSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility surface slope (dVol / dXAxis) @ ATM (xAxis=0)',\n    `axisFUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'axis fwdUPrc (used to compute xAxis)',\n    `xMult` FLOAT NOT NULL DEFAULT 0,\n    `xShift` FLOAT NOT NULL DEFAULT 0,\n    `skewMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'sVol = skewMult * BasisSkewFn(xMult * (xAxis - xShift))',\n    `sTimestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of the corresponding LiveExpirySurface record',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveExpiryAtm (surfaceType = \\'Live\\') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.\\nSurfaceType = \\'PriorDay\\' records contain the `closing surface record from the prior trading period (usually from just before the last main session close).';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `uPrc`,\n    `uPrcDriver`,\n    `atmVol`,\n    `atmSlope`,\n    `axisFUPrc`,\n    `xMult`,\n    `xShift`,\n    `skewMult`,\n    `sTimestamp`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveExpiryAtm`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE','SPHR') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1;\n"})}),"\n",(0,n.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveExpiryAtm' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var n=t(96540);const r={},i=n.createContext(r);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);