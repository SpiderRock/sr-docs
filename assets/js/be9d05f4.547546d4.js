"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87508],{70322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var d=r(74848),i=r(28453);const s={title:"OptionPrintSet"},n="Message: OptionPrintSet (ID: 2815)",c={id:"Schema/Topics/market-data-options/OptionPrintSet",title:"OptionPrintSet",description:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available.",source:"@site/docs/Schema/Topics/2750-market-data-options/OptionPrintSet.md",sourceDirName:"Schema/Topics/2750-market-data-options",slug:"/Schema/Topics/market-data-options/OptionPrintSet",permalink:"/sr-docs/docs/Schema/Topics/market-data-options/OptionPrintSet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrintSet"},sidebar:"schemaSidebar",previous:{title:"OptionPrintMarkup",permalink:"/sr-docs/docs/Schema/Topics/market-data-options/OptionPrintMarkup"},next:{title:"OptionPrintSetSummary",permalink:"/sr-docs/docs/Schema/Topics/market-data-options/OptionPrintSetSummary"}},l={},h=[{value:"META DATA  (Topic: market-data-options )",id:"meta-data--topic-market-data-options-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"message-optionprintset-id-2815",children:["Message: OptionPrintSet ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 2815)"})]}),"\n",(0,d.jsx)(t.p,{children:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data--topic-market-data-options-",children:"META DATA  (Topic: market-data-options )"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"OptAnalytics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtNumber"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"Unique print set identifier, will increment but not guaranteed to be sequential"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askCount"}),(0,d.jsx)(t.td,{children:"ushort"}),(0,d.jsx)(t.td,{children:"number of ask prints"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askVolume"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"ask print volume in contracts"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidCount"}),(0,d.jsx)(t.td,{children:"ushort"}),(0,d.jsx)(t.td,{children:"number of bid prints"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidVolume"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"bid print volume in contracts"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calcErr"}),(0,d.jsx)(t.td,{children:"string(24)"}),(0,d.jsx)(t.td,{children:"calc error flag"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cxlVolume"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"day print/cancel volume (num of contracts printed and then cancelled)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ddiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"discrete stock dividend value (sum of dividends <= expiration)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eage"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eask"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"exchange ask (@ print time)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"easz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"exchange ask size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ebid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"exchange bid (@ print time)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ebsz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"exchange bid size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{children:"underlying fkey (if any)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flexRoot"}),(0,d.jsx)(t.td,{children:"string(12)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flexType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/FlexType",children:"enum : FlexType"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"multihedge"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,d.jsx)(t.td,{children:"Distinguishes options that have a single underlying security from those that are more complex:  multiple securities,cash components, binary options,etc:  'None','Simple','Complex','AllCash','Binary'"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch; usually syncronized with facility grandfather clock"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAsk"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Option NBBO ask a the time the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAsk2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Second level ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskCnt"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"Number of exchanges on the NBBO ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskEx"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/OptExch",children:"enum : OptExch"})}),(0,d.jsx)(t.td,{children:"First (or largest) option exchange on the ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskExSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Option ask size of the largest exchange on the ask at the time the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskIv"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"option ask IV"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskM1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO option ask 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskM10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO option ask 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskNext"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"next NBBO option ask after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskS1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO option ask 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Option NBBO cumulative ask size at the time the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oAskSz2"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Cumulative size on the second level ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Option NBBO bid a the time the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBid2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Second level bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidCnt"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"Number of exchanges on the NBBO bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidEx"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/OptExch",children:"enum : OptExch"})}),(0,d.jsx)(t.td,{children:"First (or largest) option exchange on the bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidExSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Option bid size of the largest exchange on the bid at the time the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidIv"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"option bid IV"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidM1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO option bid 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidM10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO option bid 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidNext"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"next NBBO option bid after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidS1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"NBBO option bid 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Option NBBO cumulative bid size at the time the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oBidSz2"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Cumulative size on the second level bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pnlM1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"pnl after 1 minute"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pnlM10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"pnl after 10 minutes"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pnlM10Err"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"Error condition for PnL calculated 10 minutes after the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pnlM1Err"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"Error condition for PnL calculated over the first 1 minute after the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pnlS1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"pnl after 1 second"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pnlS1Err"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"Error condition for PnL calculated over the first 1 second after the print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtClusterNum"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"incremental print cluster counter (one counter per okey; used to group prints into clusters)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtClusterSize"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtDe"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print delta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtExch"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/OptExch",children:"enum : OptExch"})}),(0,d.jsx)(t.td,{children:"exchange on which print took place"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtGa"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print gamma"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtIv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print implied vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtOrders"}),(0,d.jsx)(t.td,{children:"ushort"}),(0,d.jsx)(t.td,{children:"number of participating orders (future exchanges only)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtPrice"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtProbability"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"[M1] probability that buying prtSize contracts @ prtPrice will have positive m10 pnl (prtPriceM10 >= prtPrice) [recorded at time of print]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtProbabilityM2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"alternate probability model"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtProbabilityM3"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"alternate probability model"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtRo"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print rho"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtSide"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtSize"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"print size [contracts]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtTh"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print theta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtTimestamp"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/PrtType",children:"enum : PrtType"})}),(0,d.jsx)(t.td,{children:"print type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVe"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"print vega"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVolume"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"day print volume in contracts"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"interest rate"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sDivM1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sDiv 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sDivM10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sDiv 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sDivS1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sDiv 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sErrM1"}),(0,d.jsx)(t.td,{children:"string(12)"}),(0,d.jsx)(t.td,{children:"Surface error condition (if any) 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sErrM10"}),(0,d.jsx)(t.td,{children:"string(12)"}),(0,d.jsx)(t.td,{children:"Surface error condition (if any) 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sErrS1"}),(0,d.jsx)(t.td,{children:"string(12)"}),(0,d.jsx)(t.td,{children:"Surface error condition (if any) 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sOpxM1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Surface option price 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sOpxM10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Surface option price 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sOpxS1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Surface option price 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sVolM1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Suface volatility 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sVolM10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Suface volatility 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sVolS1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Suface volatility 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"continuous stock dividend"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"surfAtm"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR surface ATM vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"surfOpx"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR surface price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"surfVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR surface volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{children:"underlying ticker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAsk"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"underlier ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAskM1"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"NBBO underlying ask 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAskM10"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"NBBO underlying ask 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAskS1"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"NBBO underlying ask 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uBid"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"underlier bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uBidM1"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"NBBO underlying bid 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uBidM10"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"NBBO underlying bid 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uBidS1"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"NBBO underlying bid 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uPrc"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"underlier price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uPrcM1"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Underlying price 1 minute after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uPrcM10"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Underlying price 10 minutes after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uPrcS1"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Underlying price 1 second after print was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"xAxis"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR surface xAxis value"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"xDe"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"xDelta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"yrs"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"years to expiry"})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var d=r(96540);const i={},s=d.createContext(i);function n(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);