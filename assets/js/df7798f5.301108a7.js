"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25971],{82970:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=d(74848),i=d(28453);const s={title:"OptionPrintMarkup"},n="Schema: OptionPrintMarkup (ID: 2810)",c={id:"MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup",title:"OptionPrintMarkup",description:"OptionPrintMarkup records contain every option print along with quote, surface details at print time",source:"@site/docs/MessageSchemas/Schema/Topics/2750-market-data-options/OptionPrintMarkup.md",sourceDirName:"MessageSchemas/Schema/Topics/2750-market-data-options",slug:"/MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrintMarkup"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrint2",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionPrint2"},next:{title:"OptionPrintSet",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionPrintSet"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-optionprintmarkup-id-2810",children:["Schema: OptionPrintMarkup ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2810)"})]}),"\n",(0,r.jsx)(t.p,{children:"OptionPrintMarkup records contain every option print along with quote, surface details at print time"}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"okey"}),(0,r.jsx)(t.td,{children:"OptionKey"}),(0,r.jsx)(t.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"prtNumber"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"Unique print set identifier, will increment but not guaranteed to be sequential"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"fkey"}),(0,r.jsx)(t.td,{children:"ExpiryKey"}),(0,r.jsx)(t.td,{children:"underlying fkey (if any)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"underlying ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"prtExch"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(t.td,{children:"Exchange on which print took place"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"prtSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"print size [contracts]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"prtPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"prtType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,r.jsx)(t.td,{children:"print type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"prtOrders"}),(0,r.jsx)(t.td,{children:"ushort"}),(0,r.jsx)(t.td,{children:"number of participating orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"prtClusterNum"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"incremental print cluster counter (one counter per okey; used to group prints into clusters)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"prtClusterSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"prtVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"day print volume in contracts [this exchange]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"cxlVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"day print/cancel volume (num of contracts printed and then cancelled)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"bidCount"}),(0,r.jsx)(t.td,{children:"ushort"}),(0,r.jsx)(t.td,{children:"number of bid prints"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"askCount"}),(0,r.jsx)(t.td,{children:"ushort"}),(0,r.jsx)(t.td,{children:"number of ask prints"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"bidVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"bid print volume in contracts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"askVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"ask print volume in contracts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"ebid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"exchange bid (@ print time)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"eask"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"exchange ask (@ print time)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"154"}),(0,r.jsx)(t.td,{children:"ebsz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"exchange bid size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"157"}),(0,r.jsx)(t.td,{children:"easz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"exchange ask size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"eage"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"163"}),(0,r.jsx)(t.td,{children:"prtSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"166"}),(0,r.jsx)(t.td,{children:"oBid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Option NBBO bid a the time the print was received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"169"}),(0,r.jsx)(t.td,{children:"oAsk"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Option NBBO ask a the time the print was received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"172"}),(0,r.jsx)(t.td,{children:"oBidSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Option NBBO cumulative bid size at the time the print was received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"175"}),(0,r.jsx)(t.td,{children:"oAskSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Option NBBO cumulative ask size at the time the print was received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"178"}),(0,r.jsx)(t.td,{children:"oBidEx"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(t.td,{children:"First (or largest) option exchange on the bid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"181"}),(0,r.jsx)(t.td,{children:"oAskEx"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(t.td,{children:"First (or largest) option exchange on the ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"184"}),(0,r.jsx)(t.td,{children:"oBidExSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Option bid size of the largest exchange on the bid at the time the print was received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"187"}),(0,r.jsx)(t.td,{children:"oAskExSz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Option ask size of the largest exchange on the ask at the time the print was received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"190"}),(0,r.jsx)(t.td,{children:"oBidCnt"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"Number of exchanges on the NBBO bid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"193"}),(0,r.jsx)(t.td,{children:"oAskCnt"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"Number of exchanges on the NBBO ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"196"}),(0,r.jsx)(t.td,{children:"oBid2"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Second level bid price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"199"}),(0,r.jsx)(t.td,{children:"oAsk2"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Second level ask price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"202"}),(0,r.jsx)(t.td,{children:"oBidSz2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Cumulative size on the second level bid price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"205"}),(0,r.jsx)(t.td,{children:"oAskSz2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Cumulative size on the second level ask price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"208"}),(0,r.jsx)(t.td,{children:"uBid"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"underlier bid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"211"}),(0,r.jsx)(t.td,{children:"uAsk"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"underlier ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"214"}),(0,r.jsx)(t.td,{children:"uPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"underlier price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"217"}),(0,r.jsx)(t.td,{children:"yrs"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"years to expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"220"}),(0,r.jsx)(t.td,{children:"rate"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"interest rate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"223"}),(0,r.jsx)(t.td,{children:"sdiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"continuous stock dividend"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"226"}),(0,r.jsx)(t.td,{children:"ddiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"discrete stock dividend value (sum of dividends <= expiration)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"229"}),(0,r.jsx)(t.td,{children:"xDe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"xDelta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"232"}),(0,r.jsx)(t.td,{children:"xAxis"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR surface xAxis value"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"235"}),(0,r.jsx)(t.td,{children:"multihedge"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,r.jsx)(t.td,{children:"Distinguishes options that have a single underlying security from those that are more complex:  multiple securities,cash components, binary options,etc:  'None','Simple','Complex','AllCash','Binary'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"238"}),(0,r.jsx)(t.td,{children:"prtIv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print implied vol"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"241"}),(0,r.jsx)(t.td,{children:"prtDe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print delta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"244"}),(0,r.jsx)(t.td,{children:"prtGa"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print gamma"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"247"}),(0,r.jsx)(t.td,{children:"prtTh"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print theta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"250"}),(0,r.jsx)(t.td,{children:"prtVe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print vega"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"253"}),(0,r.jsx)(t.td,{children:"prtRo"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print rho"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"256"}),(0,r.jsx)(t.td,{children:"calcErr"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{children:"calc error flag"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"259"}),(0,r.jsx)(t.td,{children:"surfVol"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR surface volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"262"}),(0,r.jsx)(t.td,{children:"surfOpx"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR surface price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"265"}),(0,r.jsx)(t.td,{children:"surfAtm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR surface ATM vol"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"268"}),(0,r.jsx)(t.td,{children:"srcTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"271"}),(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"inbound print packet PTP timestamp from SR gateway switch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"274"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var r=d(96540);const i={},s=r.createContext(i);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);