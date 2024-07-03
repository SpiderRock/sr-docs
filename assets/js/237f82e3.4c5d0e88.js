"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9207],{14761:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=r(74848),i=r(28453);const s={title:"OptionQuoteProbability"},n="Schema: OptionQuoteProbability (ID: 4270)",l={id:"MessageSchemas/Schema/Topics/probabilities/OptionQuoteProbability",title:"OptionQuoteProbability",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/4255-probabilities/OptionQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/Topics/4255-probabilities",slug:"/MessageSchemas/Schema/Topics/probabilities/OptionQuoteProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/OptionQuoteProbability",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionQuoteProbability"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/OptionPrintProbability"},next:{title:"StockPrintProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/StockPrintProbability"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-optionquoteprobability-id-4270",children:["Schema: OptionQuoteProbability ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4270)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"4255-probabilities"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"OptProbModel"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"10"}),(0,t.jsx)(d.td,{children:"okey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"11"}),(0,t.jsx)(d.td,{children:"stateModel"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,t.jsx)(d.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"133"}),(0,t.jsx)(d.td,{children:"askImprPrice"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside askPrice)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"109"}),(0,t.jsx)(d.td,{children:"askPrice"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"nbbo ask price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"115"}),(0,t.jsx)(d.td,{children:"askSize"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"cumulative size @ ask price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"121"}),(0,t.jsx)(d.td,{children:"askTakeProb"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"ask take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"127"}),(0,t.jsx)(d.td,{children:"askTakeRv"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(d.td,{children:"model result code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"139"}),(0,t.jsx)(d.td,{children:"askTkImProb"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"145"}),(0,t.jsx)(d.td,{children:"askTkImRv"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(d.td,{children:"model result code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"184"}),(0,t.jsx)(d.td,{children:"avgAskLink10m"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"average ask take prob link value (~10 min)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"178"}),(0,t.jsx)(d.td,{children:"avgBidLink10m"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"average bid take prob link value (~10 min)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"190"}),(0,t.jsx)(d.td,{children:"avgMktWidth10m"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"askPrice - bidPrice (~10 min)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"163"}),(0,t.jsx)(d.td,{children:"bSurfRv"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(d.td,{children:"model result code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"130"}),(0,t.jsx)(d.td,{children:"bidImprPrice"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"106"}),(0,t.jsx)(d.td,{children:"bidPrice"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"nbbo bid price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"112"}),(0,t.jsx)(d.td,{children:"bidSize"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"cumulative size @ bid price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"118"}),(0,t.jsx)(d.td,{children:"bidTakeProb"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"bid take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"124"}),(0,t.jsx)(d.td,{children:"bidTakeRv"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(d.td,{children:"model result code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"136"}),(0,t.jsx)(d.td,{children:"bidTkImProb"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"142"}),(0,t.jsx)(d.td,{children:"bidTkImRv"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(d.td,{children:"model result code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"193"}),(0,t.jsx)(d.td,{children:"counter"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"record update counter (zero @ start of period;per okey)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"172"}),(0,t.jsx)(d.td,{children:"delta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"187"}),(0,t.jsx)(d.td,{children:"maeAskLink10m"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"ask link value mean abs err (~10 min)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"181"}),(0,t.jsx)(d.td,{children:"maeBidLink10m"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"175"}),(0,t.jsx)(d.td,{children:"midPrice"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"price corresponding to 0.50 probability"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"202"}),(0,t.jsx)(d.td,{children:"netTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"inbound packet PTP timestamp from SR gateway switch (from OptionNbboQuote)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"196"}),(0,t.jsx)(d.td,{children:"qpSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/QPSource",children:"enum : QPSource"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"166"}),(0,t.jsx)(d.td,{children:"sSurfRv"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,t.jsx)(d.td,{children:"model result code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"154"}),(0,t.jsx)(d.td,{children:"sdiv"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"expiry sdiv"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"205"}),(0,t.jsx)(d.td,{children:"smsTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"state model server timestamp (just before publish)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"199"}),(0,t.jsx)(d.td,{children:"srcTimestamp"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"feed timestamp from the packet"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"157"}),(0,t.jsx)(d.td,{children:"surfBuyProb"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"surface buy take probability (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"148"}),(0,t.jsx)(d.td,{children:"surfPrice"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"surface price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"160"}),(0,t.jsx)(d.td,{children:"surfSellProb"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"surface sell take probability (zero exchange fee) [average size print]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"151"}),(0,t.jsx)(d.td,{children:"surfVol"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"surface volatility"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"100"}),(0,t.jsx)(d.td,{children:"uMid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"reference underlier midPrice (0.5 prob price)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"103"}),(0,t.jsx)(d.td,{children:"uPrc"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"reference underlier price (mid-quote)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"169"}),(0,t.jsx)(d.td,{children:"vega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"option vega"})]})]})]})]})]})}function a(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function n(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);