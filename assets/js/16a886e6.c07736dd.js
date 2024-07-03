"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39970],{55612:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453);const s={title:"OptionPrintSet"},n="Schema: OptionPrintSet (ID: 2815)",c={id:"MessageSchemas/Schema/Topics/market-data-options/OptionPrintSet",title:"OptionPrintSet",description:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available.",source:"@site/docs/MessageSchemas/Schema/Topics/2750-market-data-options/OptionPrintSet.md",sourceDirName:"MessageSchemas/Schema/Topics/2750-market-data-options",slug:"/MessageSchemas/Schema/Topics/market-data-options/OptionPrintSet",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionPrintSet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrintSet"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintMarkup",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup"},next:{title:"OptionPrintSetSummary",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionPrintSetSummary"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-optionprintset-id-2815",children:["Schema: OptionPrintSet ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2815)"})]}),"\n",(0,r.jsx)(d.p,{children:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"2750-market-data-options"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"OptAnalytics"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"okey"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"prtNumber"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"Unique print set identifier, will increment but not guaranteed to be sequential"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"askCount"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{children:"number of ask prints"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"askVolume"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"ask print volume in contracts"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"bidCount"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{children:"number of bid prints"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"bidVolume"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"bid print volume in contracts"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"268"}),(0,r.jsx)(d.td,{children:"calcErr"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"calc error flag"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"cxlVolume"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"day print/cancel volume (num of contracts printed and then cancelled)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"232"}),(0,r.jsx)(d.td,{children:"ddiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"discrete stock dividend value (sum of dividends <= expiration)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"157"}),(0,r.jsx)(d.td,{children:"eage"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"age of prevailing quote at time of print"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"eask"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"exchange ask (@ print time)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"154"}),(0,r.jsx)(d.td,{children:"easz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"exchange ask size"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"ebid"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"exchange bid (@ print time)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"ebsz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"exchange bid size"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"fkey"}),(0,r.jsx)(d.td,{children:"ExpiryKey"}),(0,r.jsx)(d.td,{children:"underlying fkey (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"247"}),(0,r.jsx)(d.td,{children:"flexRoot"}),(0,r.jsx)(d.td,{children:"string(12)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"244"}),(0,r.jsx)(d.td,{children:"flexType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FlexType",children:"enum : FlexType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"241"}),(0,r.jsx)(d.td,{children:"multihedge"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,r.jsx)(d.td,{children:"Distinguishes options that have a single underlying security from those that are more complex:  multiple securities,cash components, binary options,etc:  'None','Simple','Complex','AllCash','Binary'"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"166"}),(0,r.jsx)(d.td,{children:"netTimestamp"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"inbound packet PTP timestamp from SR gateway switch; usually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"175"}),(0,r.jsx)(d.td,{children:"oAsk"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Option NBBO ask a the time the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"205"}),(0,r.jsx)(d.td,{children:"oAsk2"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Second level ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"199"}),(0,r.jsx)(d.td,{children:"oAskCnt"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"Number of exchanges on the NBBO ask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"187"}),(0,r.jsx)(d.td,{children:"oAskEx"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(d.td,{children:"First (or largest) option exchange on the ask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"193"}),(0,r.jsx)(d.td,{children:"oAskExSz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"Option ask size of the largest exchange on the ask at the time the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"354"}),(0,r.jsx)(d.td,{children:"oAskIv"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"option ask IV"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"292"}),(0,r.jsx)(d.td,{children:"oAskM1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"NBBO option ask 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"325"}),(0,r.jsx)(d.td,{children:"oAskM10"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"NBBO option ask 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"367"}),(0,r.jsx)(d.td,{children:"oAskNext"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"next NBBO option ask after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"356"}),(0,r.jsx)(d.td,{children:"oAskS1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"NBBO option ask 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"181"}),(0,r.jsx)(d.td,{children:"oAskSz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"Option NBBO cumulative ask size at the time the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"211"}),(0,r.jsx)(d.td,{children:"oAskSz2"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"Cumulative size on the second level ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"172"}),(0,r.jsx)(d.td,{children:"oBid"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Option NBBO bid a the time the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"202"}),(0,r.jsx)(d.td,{children:"oBid2"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Second level bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"196"}),(0,r.jsx)(d.td,{children:"oBidCnt"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"Number of exchanges on the NBBO bid"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"184"}),(0,r.jsx)(d.td,{children:"oBidEx"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(d.td,{children:"First (or largest) option exchange on the bid"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"190"}),(0,r.jsx)(d.td,{children:"oBidExSz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"Option bid size of the largest exchange on the bid at the time the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"353"}),(0,r.jsx)(d.td,{children:"oBidIv"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"option bid IV"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"289"}),(0,r.jsx)(d.td,{children:"oBidM1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"NBBO option bid 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"322"}),(0,r.jsx)(d.td,{children:"oBidM10"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"NBBO option bid 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"366"}),(0,r.jsx)(d.td,{children:"oBidNext"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"next NBBO option bid after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"355"}),(0,r.jsx)(d.td,{children:"oBidS1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"NBBO option bid 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"178"}),(0,r.jsx)(d.td,{children:"oBidSz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"Option NBBO cumulative bid size at the time the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"208"}),(0,r.jsx)(d.td,{children:"oBidSz2"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"Cumulative size on the second level bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"316"}),(0,r.jsx)(d.td,{children:"pnlM1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"pnl after 1 minute"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"349"}),(0,r.jsx)(d.td,{children:"pnlM10"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"pnl after 10 minutes"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"352"}),(0,r.jsx)(d.td,{children:"pnlM10Err"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{children:"Error condition for PnL calculated 10 minutes after the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"319"}),(0,r.jsx)(d.td,{children:"pnlM1Err"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{children:"Error condition for PnL calculated over the first 1 minute after the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"364"}),(0,r.jsx)(d.td,{children:"pnlS1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"pnl after 1 second"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"365"}),(0,r.jsx)(d.td,{children:"pnlS1Err"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{children:"Error condition for PnL calculated over the first 1 second after the print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"prtClusterNum"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"incremental print cluster counter (one counter per okey; used to group prints into clusters)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"prtClusterSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"253"}),(0,r.jsx)(d.td,{children:"prtDe"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print delta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"prtExch"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(d.td,{children:"exchange on which print took place"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"256"}),(0,r.jsx)(d.td,{children:"prtGa"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print gamma"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"250"}),(0,r.jsx)(d.td,{children:"prtIv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print implied vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"prtOrders"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{children:"number of participating orders (future exchanges only)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"prtPrice"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"280"}),(0,r.jsx)(d.td,{children:"prtProbability"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"[M1] probability that buying prtSize contracts @ prtPrice will have positive m10 pnl (prtPriceM10 >= prtPrice) [recorded at time of print]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"283"}),(0,r.jsx)(d.td,{children:"prtProbabilityM2"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"alternate probability model"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"286"}),(0,r.jsx)(d.td,{children:"prtProbabilityM3"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"alternate probability model"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"265"}),(0,r.jsx)(d.td,{children:"prtRo"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print rho"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"160"}),(0,r.jsx)(d.td,{children:"prtSide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"prtSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"print size [contracts]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"259"}),(0,r.jsx)(d.td,{children:"prtTh"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print theta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"163"}),(0,r.jsx)(d.td,{children:"prtTimestamp"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"exchange high precision timestamp (if available)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:"prtType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,r.jsx)(d.td,{children:"print type"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"262"}),(0,r.jsx)(d.td,{children:"prtVe"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"print vega"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"prtVolume"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"day print volume in contracts"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"226"}),(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"interest rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"310"}),(0,r.jsx)(d.td,{children:"sDivM1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"sDiv 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"343"}),(0,r.jsx)(d.td,{children:"sDivM10"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"sDiv 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"362"}),(0,r.jsx)(d.td,{children:"sDivS1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"sDiv 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"313"}),(0,r.jsx)(d.td,{children:"sErrM1"}),(0,r.jsx)(d.td,{children:"string(12)"}),(0,r.jsx)(d.td,{children:"Surface error condition (if any) 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"346"}),(0,r.jsx)(d.td,{children:"sErrM10"}),(0,r.jsx)(d.td,{children:"string(12)"}),(0,r.jsx)(d.td,{children:"Surface error condition (if any) 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"363"}),(0,r.jsx)(d.td,{children:"sErrS1"}),(0,r.jsx)(d.td,{children:"string(12)"}),(0,r.jsx)(d.td,{children:"Surface error condition (if any) 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"307"}),(0,r.jsx)(d.td,{children:"sOpxM1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Surface option price 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"340"}),(0,r.jsx)(d.td,{children:"sOpxM10"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Surface option price 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"361"}),(0,r.jsx)(d.td,{children:"sOpxS1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Surface option price 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"304"}),(0,r.jsx)(d.td,{children:"sVolM1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Suface volatility 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"337"}),(0,r.jsx)(d.td,{children:"sVolM10"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Suface volatility 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"360"}),(0,r.jsx)(d.td,{children:"sVolS1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Suface volatility 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"229"}),(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"continuous stock dividend"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"277"}),(0,r.jsx)(d.td,{children:"surfAtm"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR surface ATM vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"274"}),(0,r.jsx)(d.td,{children:"surfOpx"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR surface price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"271"}),(0,r.jsx)(d.td,{children:"surfVol"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR surface volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"underlying ticker"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"169"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"217"}),(0,r.jsx)(d.td,{children:"uAsk"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"underlier ask"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"298"}),(0,r.jsx)(d.td,{children:"uAskM1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"NBBO underlying ask 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"331"}),(0,r.jsx)(d.td,{children:"uAskM10"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"NBBO underlying ask 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"358"}),(0,r.jsx)(d.td,{children:"uAskS1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"NBBO underlying ask 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"214"}),(0,r.jsx)(d.td,{children:"uBid"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"underlier bid"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"295"}),(0,r.jsx)(d.td,{children:"uBidM1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"NBBO underlying bid 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"328"}),(0,r.jsx)(d.td,{children:"uBidM10"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"NBBO underlying bid 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"357"}),(0,r.jsx)(d.td,{children:"uBidS1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"NBBO underlying bid 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"220"}),(0,r.jsx)(d.td,{children:"uPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"underlier price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"301"}),(0,r.jsx)(d.td,{children:"uPrcM1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"Underlying price 1 minute after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"334"}),(0,r.jsx)(d.td,{children:"uPrcM10"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"Underlying price 10 minutes after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"359"}),(0,r.jsx)(d.td,{children:"uPrcS1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"Underlying price 1 second after print was received"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"238"}),(0,r.jsx)(d.td,{children:"xAxis"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR surface xAxis value"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"235"}),(0,r.jsx)(d.td,{children:"xDe"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"xDelta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"223"}),(0,r.jsx)(d.td,{children:"yrs"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"years to expiry"})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function n(e){const d=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(s.Provider,{value:d},e.children)}}}]);