"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65662],{3224:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=s(74848),d=s(28453);const i={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/OptionFlexEvent",title:"OptionFlexEvent",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/OptionFlexEvent.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionEOP",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionEOP/"},next:{title:"OptionLookback",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionLookback/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function a(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"OptMktData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRLive"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sequenceNumber"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"sequence of the flex event message counting from the start of day or last restart of the feed handler"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eventId"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"unique id of the event assigned by SpiderRock subsequent messages on the event will use the same id"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtExch"}),(0,n.jsx)(t.td,{children:"ENUM"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"exchange code that produced this flex event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prtRoot"}),(0,n.jsx)(t.td,{children:"VARCHAR(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"security symbol of the FLEX option"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"requestId"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"request identifier associated with this trade assigned by the exchange these appear to not be 100 reliable particularly for PHLX"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eventType"}),(0,n.jsx)(t.td,{children:"ENUM"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"type of event this message represents eg RFQ QTE LST"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"totalQuantity"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"total quantity of the flex trade"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"packagePrice"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"total price of the flex trade inclusive of all legs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"netTimestamp"}),(0,n.jsx)(t.td,{children:"BIGINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"timestamp of when this message was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"srcTimestamp"}),(0,n.jsx)(t.td,{children:"BIGINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"timestamp from the exchange of when this message was sent"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LegsList"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sequenceNumber"}),(0,n.jsx)(t.td,{children:"1"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(96540);const d={},i=n.createContext(d);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);