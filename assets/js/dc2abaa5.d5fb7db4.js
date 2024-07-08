"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96994],{56617:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=t(74848),i=t(28453);const n={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta",title:"ClientBeta",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AccountRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/"},next:{title:"CurrencyPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const s={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"1945-client-theos"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SystemData"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Product"}),(0,d.jsx)(s.td,{children:"SRRisk"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accessType"}),(0,d.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Key"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_at"}),(0,d.jsx)(s.td,{children:"ENUM"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_ts"}),(0,d.jsx)(s.td,{children:"ENUM"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_tk"}),(0,d.jsx)(s.td,{children:"VARCHAR(12)"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_yr"}),(0,d.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_mn"}),(0,d.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_dy"}),(0,d.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secType"}),(0,d.jsx)(s.td,{children:"ENUM"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"VARCHAR(16)"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"client firm of the uploading user"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"beta"}),(0,d.jsx)(s.td,{children:"FLOAT"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"client supplied beta expected move of secKey relative to reference"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedBy"}),(0,d.jsx)(s.td,{children:"VARCHAR(24)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedIn"}),(0,d.jsx)(s.td,{children:"ENUM"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DATETIME(6)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Sequence"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_tk"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_yr"}),(0,d.jsx)(s.td,{children:"2"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_mn"}),(0,d.jsx)(s.td,{children:"3"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_dy"}),(0,d.jsx)(s.td,{children:"4"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_at"}),(0,d.jsx)(s.td,{children:"5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secKey_ts"}),(0,d.jsx)(s.td,{children:"6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"secType"}),(0,d.jsx)(s.td,{children:"7"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"8"})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var d=t(96540);const i={},n=d.createContext(i);function r(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);