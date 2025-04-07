"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["14615"],{81599:function(e,r,d){d.r(r),d.d(r,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/LiveIVarSwapFixedTerm","title":"LiveIVarSwapFixedTerm","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/LiveIVarSwapFixedTerm.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"LiveExpirySurface","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/"},"next":{"title":"LiveImpliedQuote","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/"}}'),n=d("52676"),a=d("91503");let i={},s=void 0,c={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/analytics/LiveIVarSwapFixedTerm",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(r.p,{children:"LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration."}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"1000-analytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"SRMLinkAnalytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Product"}),(0,n.jsx)(r.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accessType"}),(0,n.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"surfaceType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SurfaceCurveType",children:"enum - SurfaceCurveType"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_5d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 5 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_10d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 10 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_21d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 21 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_42d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 42 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_63d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 63 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_84d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 84 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_105d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 105 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_126d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 126 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_189d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 189 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_252d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 252 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_378d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 378 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iVarSwap_504d"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Interpolated 504 day integrated surface variance"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"status"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/CurveStatus",children:"enum - CurveStatus"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"time"}),(0,n.jsx)(r.td,{children:"TIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'00:00:00.000000'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(r.td,{children:"update timestamp"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_tk"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_at"}),(0,n.jsx)(r.td,{children:"2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_ts"}),(0,n.jsx)(r.td,{children:"3"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"surfaceType"}),(0,n.jsx)(r.td,{children:"4"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveIVarSwapFixedTerm` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `surfaceType` ENUM('None','Live','PrevDay','Interp','Close','Test') NOT NULL DEFAULT 'None',\n    `iVarSwap_5d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 5 day integrated surface variance',\n    `iVarSwap_10d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 10 day integrated surface variance',\n    `iVarSwap_21d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 21 day integrated surface variance',\n    `iVarSwap_42d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 42 day integrated surface variance',\n    `iVarSwap_63d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 63 day integrated surface variance',\n    `iVarSwap_84d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 84 day integrated surface variance',\n    `iVarSwap_105d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 105 day integrated surface variance',\n    `iVarSwap_126d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 126 day integrated surface variance',\n    `iVarSwap_189d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 189 day integrated surface variance',\n    `iVarSwap_252d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 252 day integrated surface variance',\n    `iVarSwap_378d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 378 day integrated surface variance',\n    `iVarSwap_504d` FLOAT NOT NULL DEFAULT 0 COMMENT 'Interpolated 504 day integrated surface variance',\n    `status` ENUM('None','Normal','Closed') NOT NULL DEFAULT 'None',\n    `time` TIME(6) NOT NULL DEFAULT '00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`surfaceType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveVarSwapFixedTerm records contain a live implied variance term record at standardized days-to-expiration.';\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `surfaceType`,\n    `iVarSwap_5d`,\n    `iVarSwap_10d`,\n    `iVarSwap_21d`,\n    `iVarSwap_42d`,\n    `iVarSwap_63d`,\n    `iVarSwap_84d`,\n    `iVarSwap_105d`,\n    `iVarSwap_126d`,\n    `iVarSwap_189d`,\n    `iVarSwap_252d`,\n    `iVarSwap_378d`,\n    `iVarSwap_504d`,\n    `status`,\n    `time`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveIVarSwapFixedTerm`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Live','PrevDay','Interp','Close','Test') */ \n    `surfaceType` = 'None';\n"})}),"\n",(0,n.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveIVarSwapFixedTerm' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},91503:function(e,r,d){d.d(r,{Z:function(){return s},a:function(){return i}});var t=d(75271);let n={},a=t.createContext(n);function i(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);