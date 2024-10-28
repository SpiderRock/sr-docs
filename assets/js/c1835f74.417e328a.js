"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49072],{52976:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var t=n(74848),i=n(28453);const d={},r=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve/LiveBasisCurve",title:"LiveBasisCurve",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve/LiveBasisCurve.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"LiveAtmVol",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol/"},next:{title:"LiveExpiryAtm",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpiryAtm/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (PointList)",id:"json-block-pointlist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"../../../Topics/analytics/LiveBasisCurve",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(s.p,{children:"var = vol^2 = skewMult * skewFN[ xMult * (xAxis - xShift) ]"}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"1000-analytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SRMLinkAnalytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Default Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"VARCHAR(12)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"''"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SurfaceCurveType",children:"enum - SurfaceCurveType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"minX"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"for x in minX maxX y  spline for x  minX y  leftA  leftB  x for x  maxX y  rightA  rightB  x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxX"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"leftA"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"leftB"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rightA"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rightB"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"numPoints"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"number of points used in basisFN fit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"numExpiries"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"number of underlierexpiries used in basisFN fit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fitMAE"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"final basisFN fit mean abs error"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PointList"}),(0,t.jsx)(s.td,{children:"JSON"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'JSON_OBJECT()'"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:"6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceType"}),(0,t.jsx)(s.td,{children:"7"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"json-block-pointlist",children:"JSON Block (PointList)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/x",children:"enum - x"})}),(0,t.jsx)(s.td,{children:"skew x axis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"y"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/y",children:"enum - y"})}),(0,t.jsx)(s.td,{children:"skew fn value usually y10  x00"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveBasisCurve` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `surfaceType` ENUM('None','Live','PrevDay','Interp','Close','Test') NOT NULL DEFAULT 'None',\n    `minX` DOUBLE NOT NULL DEFAULT 0 COMMENT 'for x in (minX, maxX) y = spline(.); for x < minX: y = leftA + leftB * x; for x > maxX: y = rightA + rightB * x;',\n    `maxX` DOUBLE NOT NULL DEFAULT 0,\n    `leftA` DOUBLE NOT NULL DEFAULT 0,\n    `leftB` DOUBLE NOT NULL DEFAULT 0,\n    `rightA` DOUBLE NOT NULL DEFAULT 0,\n    `rightB` DOUBLE NOT NULL DEFAULT 0,\n    `numPoints` INT NOT NULL DEFAULT 0 COMMENT 'number of points used in basisFN fit',\n    `numExpiries` INT NOT NULL DEFAULT 0 COMMENT 'number of underlier/expiries used in basisFN fit',\n    `fitMAE` DOUBLE NOT NULL DEFAULT 0 COMMENT 'final basisFN fit mean abs error',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `PointList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(PointList)),\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`surfaceType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='var = vol^2 = skewMult * skewFN[ xMult * (xAxis - xShift) ]';\n\n"})}),"\n",(0,t.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `surfaceType`,\n    `minX`,\n    `maxX`,\n    `leftA`,\n    `leftB`,\n    `rightA`,\n    `rightB`,\n    `numPoints`,\n    `numExpiries`,\n    `fitMAE`,\n    `timestamp`,\n    `PointList`\nFROM `SRAnalytics`.`MsgLiveBasisCurve`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Live','PrevDay','Interp','Close','Test') */ \n    `surfaceType` = 'None';\n"})}),"\n",(0,t.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveBasisCurve' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(96540);const i={},d=t.createContext(i);function r(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);