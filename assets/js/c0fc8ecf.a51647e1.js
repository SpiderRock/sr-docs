"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76717],{18651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var d=r(74848),i=r(28453);const s={title:"FutureQuoteProbability"},n="Schema: FutureQuoteProbability (ID: 4260)",l={id:"MessageSchemas/Schema/Topics/probabilities/FutureQuoteProbability",title:"FutureQuoteProbability",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/4255-probabilities/FutureQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/Topics/4255-probabilities",slug:"/MessageSchemas/Schema/Topics/probabilities/FutureQuoteProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/FutureQuoteProbability",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutureQuoteProbability"},sidebar:"messageSchemasSidebar",previous:{title:"FuturePrintProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/FuturePrintProbability"},next:{title:"OptionPrintProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/OptionPrintProbability"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-futurequoteprobability-id-4260",children:["Schema: FutureQuoteProbability ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4260)"})]}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"4255-probabilities"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"FutProbModel"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,d.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"#"}),(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"10="}),(0,d.jsx)(t.td,{children:"fkey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"11="}),(0,d.jsx)(t.td,{children:"stateModel"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"100"}),(0,d.jsx)(t.td,{children:"bidPrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"best bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"103"}),(0,d.jsx)(t.td,{children:"askPrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"best ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"106"}),(0,d.jsx)(t.td,{children:"bidSize"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"cumulative size @ bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"109"}),(0,d.jsx)(t.td,{children:"askSize"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"cumulative size @ ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"112"}),(0,d.jsx)(t.td,{children:"bidTakeProb"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"bid take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"115"}),(0,d.jsx)(t.td,{children:"askTakeProb"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"ask take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"118"}),(0,d.jsx)(t.td,{children:"bidTakeRv"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,d.jsx)(t.td,{children:"model result code"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"121"}),(0,d.jsx)(t.td,{children:"askTakeRv"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,d.jsx)(t.td,{children:"model result code"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"124"}),(0,d.jsx)(t.td,{children:"bidImprPrice"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"127"}),(0,d.jsx)(t.td,{children:"askImprPrice"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside askPrice)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"130"}),(0,d.jsx)(t.td,{children:"bidTkImProb"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"133"}),(0,d.jsx)(t.td,{children:"askTkImProb"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"136"}),(0,d.jsx)(t.td,{children:"bidTkImRv"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,d.jsx)(t.td,{children:"model result code"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"139"}),(0,d.jsx)(t.td,{children:"askTkImRv"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,d.jsx)(t.td,{children:"model result code"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"142"}),(0,d.jsx)(t.td,{children:"midPrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"price corresponding to 0.50 probability"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"145"}),(0,d.jsx)(t.td,{children:"avgBidLink1m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"average bid link value (~1 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"148"}),(0,d.jsx)(t.td,{children:"maeBidLink1m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"151"}),(0,d.jsx)(t.td,{children:"avgAskLink1m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"average ask link value (~1 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"154"}),(0,d.jsx)(t.td,{children:"maeAskLink1m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"ask link value mean abs err (~1 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"157"}),(0,d.jsx)(t.td,{children:"avgBidLink10m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"average bid link value (~10 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"160"}),(0,d.jsx)(t.td,{children:"maeBidLink10m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"163"}),(0,d.jsx)(t.td,{children:"avgAskLink10m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"average ask link value (~10 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"166"}),(0,d.jsx)(t.td,{children:"maeAskLink10m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"ask link value mean abs err (~10 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"169"}),(0,d.jsx)(t.td,{children:"avgMktWidth1m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"askPrice - bidPrice (~1 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"172"}),(0,d.jsx)(t.td,{children:"avgMktWidth10m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"askPrice - bidPrice (~10 min)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"175"}),(0,d.jsx)(t.td,{children:"counter"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"record update counter (zero @ start of period;per fkey)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"178"}),(0,d.jsx)(t.td,{children:"qpSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/QPSource",children:"enum : QPSource"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"181"}),(0,d.jsx)(t.td,{children:"srcTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"feed timestamp from the packet"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"184"}),(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch (from FutureBookQuote);zero = size only change"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"187"}),(0,d.jsx)(t.td,{children:"smsTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"state model server timestamp (just before publish)"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var d=r(96540);const i={},s=d.createContext(i);function n(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);