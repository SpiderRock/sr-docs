"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11058],{12382:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=t(74848),s=t(28453);const d={title:"StockQuoteProbability"},n="Schema: StockQuoteProbability (ID: 4280)",c={id:"MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability",title:"StockQuoteProbability",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/4255-probabilities/StockQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/Topics/4255-probabilities",slug:"/MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockQuoteProbability"},sidebar:"messageSchemasSidebar",previous:{title:"StockPrintProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/StockPrintProbability"},next:{title:"4335-product-definition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const i={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.h1,{id:"schema-stockquoteprobability-id-4280",children:["Schema: StockQuoteProbability ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4280)"})]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(i.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Attribute"}),(0,r.jsx)(i.th,{children:"Value"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"MLink Token"}),(0,r.jsx)(i.td,{children:"StkProbModel"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Topic"}),(0,r.jsx)(i.td,{children:"probabilities"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SRSE Product"}),(0,r.jsx)(i.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(i.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Field"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Comment"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ticker"}),(0,r.jsx)(i.td,{children:"TickerKey"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"stateModel"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,r.jsx)(i.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(i.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Field"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Comment"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askImprPrice"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside askPrice)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askPrice"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"nbbo ask price"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askSize"}),(0,r.jsx)(i.td,{children:"int"}),(0,r.jsx)(i.td,{children:"cumulative size @ ask price"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askTakeProb"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"ask take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askTakeRv"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,r.jsx)(i.td,{children:"model result code"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askTkImProb"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"askTkImRv"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,r.jsx)(i.td,{children:"model result code"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"avgAskLink10m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"average ask link value (~10 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"avgAskLink1m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"average ask link value (~1 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"avgBidLink10m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"average bid link value (~10 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"avgBidLink1m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"average bid link value (~1 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"avgMktWidth10m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"askPrice - bidPrice (~10 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"avgMktWidth1m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"askPrice - bidPrice (~1 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidImprPrice"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidPrice"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"nbbo bid price"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidSize"}),(0,r.jsx)(i.td,{children:"int"}),(0,r.jsx)(i.td,{children:"cumulative size @ bid price"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidTakeProb"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"bid take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidTakeRv"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidTkImProb"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"bidTkImRv"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,r.jsx)(i.td,{children:"model result code"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"counter"}),(0,r.jsx)(i.td,{children:"int"}),(0,r.jsx)(i.td,{children:"record update counter (zero @ start of period;per ticker)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"maeAskLink10m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"ask link value mean abs err (~10 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"maeAskLink1m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"ask link value mean abs err (~1 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"maeBidLink10m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"maeBidLink1m"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"midPrice"}),(0,r.jsx)(i.td,{children:"float"}),(0,r.jsx)(i.td,{children:"price corresponding to 0.50 probability"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"netTimestamp"}),(0,r.jsx)(i.td,{children:"long"}),(0,r.jsx)(i.td,{children:"inbound packet PTP timestamp from SR gateway switch (from StockBookQuote);zero = size only change"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"qpSource"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../../../Enums/QPSource",children:"enum : QPSource"})}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"smsTimestamp"}),(0,r.jsx)(i.td,{children:"long"}),(0,r.jsx)(i.td,{children:"state model server timestamp (just before publish)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"srcTimestamp"}),(0,r.jsx)(i.td,{children:"long"}),(0,r.jsx)(i.td,{children:"feed timestamp from the packet"})]})]})]})]})]})}function o(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>c});var r=t(96540);const s={},d=r.createContext(s);function n(e){const i=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(d.Provider,{value:i},e.children)}}}]);