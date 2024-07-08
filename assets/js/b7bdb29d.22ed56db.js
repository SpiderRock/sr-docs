"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88715],{8381:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>h,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(74848),r=s(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/SpreadBookQuote",title:"SpreadBookQuote",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/SpreadBookQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadBookMarkup",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/"},next:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"2895-market-data-spreads"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"SpreadMktData"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Product"}),(0,t.jsx)(d.td,{children:"SRSpread"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accessType"}),(0,t.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Key"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"skey_at"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"skey_ts"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"skey_tk"}),(0,t.jsx)(d.td,{children:"VARCHAR(12)"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isTest"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"Yes indicates that response is made of entirely of isTestYes SpreadExchOrders"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_at"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"common spread underlier"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_ts"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"common spread underlier"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_tk"}),(0,t.jsx)(d.td,{children:"VARCHAR(12)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"common spread underlier"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRspreadID"}),(0,t.jsx)(d.td,{children:"BIGINT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidPrice1"}),(0,t.jsx)(d.td,{children:"DOUBLE"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"bid price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isBidPrice1Valid"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askPrice1"}),(0,t.jsx)(d.td,{children:"DOUBLE"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ask price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isAskPrice1Valid"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidSize1"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"cumulative size at bidPrice"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askSize1"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"cumulative size at askPrice"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidPrice2"}),(0,t.jsx)(d.td,{children:"DOUBLE"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"2nd best bid price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isBidPrice2Valid"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askPrice2"}),(0,t.jsx)(d.td,{children:"DOUBLE"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"2nd best ask price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isAskPrice2Valid"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidSize2"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"cumulative size at 2nd price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askSize2"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"cumulative size at 2nd price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidExch1"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"exchange at bid price with the largest size if any"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askExch1"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"exchange at ask price with the largest size if any"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidMask1"}),(0,t.jsx)(d.td,{children:"INT UNSIGNED"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"exchange bid bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askMask1"}),(0,t.jsx)(d.td,{children:"INT UNSIGNED"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"exchange ask bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bidTime"}),(0,t.jsx)(d.td,{children:"DATETIME(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"last bid price or size change"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"askTime"}),(0,t.jsx)(d.td,{children:"DATETIME(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"last ask price or size change"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"printVolume"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"updateType"}),(0,t.jsx)(d.td,{children:"ENUM"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"srcTimestamp"}),(0,t.jsx)(d.td,{children:"BIGINT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"source high precision timestamp if available"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"netTimestamp"}),(0,t.jsx)(d.td,{children:"BIGINT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DATETIME(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Sequence"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"skey_tk"}),(0,t.jsx)(d.td,{children:"1"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"skey_at"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"skey_ts"}),(0,t.jsx)(d.td,{children:"3"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isTest"}),(0,t.jsx)(d.td,{children:"4"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function n(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);