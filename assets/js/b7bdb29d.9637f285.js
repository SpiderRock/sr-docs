"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88715],{8381:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(74848),t=s(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/SpreadBookQuote",title:"SpreadBookQuote",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/SpreadBookQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadBookMarkup",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/"},next:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SpreadMktData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRSpread"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isTest"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Yes indicates that response is made of entirely of isTestYes SpreadExchOrders"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"common spread underlier"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"common spread underlier"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"common spread underlier"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRspreadID"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidPrice1"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isBidPrice1Valid"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askPrice1"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isAskPrice1Valid"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidSize1"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"cumulative size at bidPrice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askSize1"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"cumulative size at askPrice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidPrice2"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"2nd best bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isBidPrice2Valid"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askPrice2"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"2nd best ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isAskPrice2Valid"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidSize2"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"cumulative size at 2nd price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askSize2"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"cumulative size at 2nd price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidExch1"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exchange at bid price with the largest size if any"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askExch1"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exchange at ask price with the largest size if any"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidMask1"}),(0,r.jsx)(d.td,{children:"INT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exchange bid bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askMask1"}),(0,r.jsx)(d.td,{children:"INT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exchange ask bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidTime"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"last bid price or size change"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askTime"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"last ask price or size change"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"printVolume"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"updateType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srcTimestamp"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"source high precision timestamp if available"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"netTimestamp"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_isDeleted"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromRotation"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromCache"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromApplication"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromBridge"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_timeSent"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_timeReceived"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_netTimeReceived"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sysEnvironmentOrigin"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sysRealmOrigin"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sourceId"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_tk"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_at"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_ts"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isTest"}),(0,r.jsx)(d.td,{children:"4"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);