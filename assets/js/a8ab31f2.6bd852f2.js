"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18257],{64780:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=t(74848),i=t(28453);const r={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4/SkewBasisCurveV4",title:"SkewBasisCurveV4",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4/SkewBasisCurveV4.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"RootDefinition",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/"},next:{title:"SpanRiskCalculator",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpanRiskCalculator/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (PointList)",id:"json-block-pointlist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/analytics/SkewBasisCurveV4",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"1000-analytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SystemData"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker_at"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker_ts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker_tk"}),(0,n.jsx)(s.td,{children:"VARCHAR(12)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minX"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"typically 30"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxX"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"typically 30"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"numPoints"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"typically 601  skew points are 010 xAxis pts apart"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PointList"}),(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'JSON_OBJECT()'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker_tk"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker_at"}),(0,n.jsx)(s.td,{children:"2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker_ts"}),(0,n.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"json-block-pointlist",children:"JSON Block (PointList)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"yy"}),(0,n.jsx)(s.td,{children:"double"}),(0,n.jsx)(s.td,{children:"skew fn value at grid point usually yy 10  x 00"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgSkewBasisCurveV4` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `minX` DOUBLE NOT NULL DEFAULT 0 COMMENT 'typically: -30',\n    `maxX` DOUBLE NOT NULL DEFAULT 0 COMMENT 'typically: +30',\n    `numPoints` INT NOT NULL DEFAULT 0 COMMENT 'typically: 601  (skew points are 0.10 xAxis pts apart)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `PointList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(PointList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `minX`,\n    `maxX`,\n    `numPoints`,\n    `timestamp`,\n    `PointList`\nFROM `SRAnalytics`.`MsgSkewBasisCurveV4`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,n.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='SkewBasisCurveV4' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var n=t(96540);const i={},r=n.createContext(i);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);