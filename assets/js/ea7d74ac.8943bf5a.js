"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[57493],{2183:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=i(74848),d=i(28453);const s={title:"OptionQuoteProbability"},n="Message: OptionQuoteProbability (ID: 4270)",l={id:"Schema/Topics/probabilities/OptionQuoteProbability",title:"OptionQuoteProbability",description:"META DATA  (Topic: probabilities )",source:"@site/docs/Schema/Topics/4255-probabilities/OptionQuoteProbability.md",sourceDirName:"Schema/Topics/4255-probabilities",slug:"/Schema/Topics/probabilities/OptionQuoteProbability",permalink:"/sr-docs/docs/Schema/Topics/probabilities/OptionQuoteProbability",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionQuoteProbability"},sidebar:"schemaSidebar",previous:{title:"OptionPrintProbability",permalink:"/sr-docs/docs/Schema/Topics/probabilities/OptionPrintProbability"},next:{title:"StockPrintProbability",permalink:"/sr-docs/docs/Schema/Topics/probabilities/StockPrintProbability"}},c={},h=[{value:"META DATA  (Topic: probabilities )",id:"meta-data--topic-probabilities-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const r={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"message-optionquoteprobability-id-4270",children:["Message: OptionQuoteProbability ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4270)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"meta-data--topic-probabilities-",children:"META DATA  (Topic: probabilities )"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"OptProbModel"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"stateModel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,t.jsx)(r.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askImprPrice"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside askPrice)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askPrice"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"nbbo ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative size @ ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askTakeProb"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"ask take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askTakeRv"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(r.td,{children:"model result code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askTkImProb"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askTkImRv"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(r.td,{children:"model result code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgAskLink10m"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"average ask take prob link value (~10 min)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgBidLink10m"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"average bid take prob link value (~10 min)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgMktWidth10m"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"askPrice - bidPrice (~10 min)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bSurfRv"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(r.td,{children:"model result code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidImprPrice"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidPrice"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"nbbo bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative size @ bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidTakeProb"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"bid take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidTakeRv"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(r.td,{children:"model result code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidTkImProb"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidTkImRv"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(r.td,{children:"model result code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"record update counter (zero @ start of period;per okey)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"delta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"option delta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maeAskLink10m"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"ask link value mean abs err (~10 min)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maeBidLink10m"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"midPrice"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"price corresponding to 0.50 probability"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"netTimestamp"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"inbound packet PTP timestamp from SR gateway switch (from OptionNbboQuote)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"qpSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/QPSource",children:"enum : QPSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sSurfRv"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(r.td,{children:"model result code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sdiv"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"expiry sdiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"smsTimestamp"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"state model server timestamp (just before publish)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srcTimestamp"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"feed timestamp from the packet"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfBuyProb"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface buy take probability (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfPrice"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"surface price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfSellProb"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface sell take probability (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"surfVol"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"surface volatility"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uMid"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"reference underlier midPrice (0.5 prob price)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"reference underlier price (mid-quote)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"vega"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"option vega"})]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>l});var t=i(96540);const d={},s=t.createContext(d);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);