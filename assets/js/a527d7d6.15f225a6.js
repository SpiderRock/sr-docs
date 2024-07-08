"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77117],{11257:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/SpreadMarketSummary",title:"SpreadMarketSummary",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/SpreadMarketSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/"},next:{title:"SpreadOpenMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function x(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRSpread"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"underlier or product group tickerKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"underlier or product group tickerKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"underlier or product group tickerKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iniPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"first print price of the day during regular market hours"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mrkPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"last print handling during regular market hours"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clsPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"official exchange closing price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"minimum print price within market hours"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum print price within market hours"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"openInt"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"open interest"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidCount"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"num prints  quotebid"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"bidVolume"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"volume when prtPrice  quotebid"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askCount"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"num prints  quoteask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"askVolume"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"volume when prtPrice  quoteask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"midCount"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"num prints inside quotebid  quoteask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"midVolume"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"volume inside quotebid  quoteask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"prtCount"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"number of distinct print reports"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"prtPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"last print price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expCount"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"number of updates included in exponential average"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expWidth"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exponential average market width 10 minute 12 life"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expBidSize"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exponential average bid size 10 minute 12 life"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expAskSize"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"exponential average ask size 10 minute 12 life"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"lastPrint"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_tk"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_at"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"skey_ts"}),(0,r.jsx)(d.td,{children:"3"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);