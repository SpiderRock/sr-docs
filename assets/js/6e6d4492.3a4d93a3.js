"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25559],{66751:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=t(74848),l=t(28453);const i={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/GlobalRates",title:"GlobalRates",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/GlobalRates.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"GlobalDividends",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalDividends/"},next:{title:"HistoricalVolatilities",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/"}},d={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (CurveList)",id:"json-block-curvelist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/option-pricing/GlobalRates",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"3585-option-pricing"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"GlobalDefinition"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rateSource"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/RateSource",children:"enum - RateSource"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"'Default'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CurveList"}),(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'JSON_OBJECT()'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rateSource"}),(0,n.jsx)(s.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"json-block-curvelist",children:"JSON Block (CurveList)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"days"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"calendar days to expiration actual365 days per year"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rate"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgGlobalRates` (\n    `rateSource` ENUM('Default','OIS','SOFR','SpxBox','StoxxBox','Test1','Test2','ESTR') NOT NULL DEFAULT 'Default',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `CurveList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(CurveList)),\n    PRIMARY KEY USING HASH (`rateSource`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `rateSource`,\n    `timestamp`,\n    `CurveList`\nFROM `SRAnalytics`.`MsgGlobalRates`\nWHERE \n    /* Replace with a ENUM('Default','OIS','SOFR','SpxBox','StoxxBox','Test1','Test2','ESTR') */ \n    `rateSource` = 'Default';\n"})}),"\n",(0,n.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='GlobalRates' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(96540);const l={},i=n.createContext(l);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);