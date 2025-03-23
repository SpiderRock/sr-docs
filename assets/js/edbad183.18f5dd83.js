"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11789],{71431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),i=r(11470),d=r(19365);const l={title:"OptionPrintMarkup"},a="Schema: OptionPrintMarkup (ID: 2810)",c={id:"MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup",title:"OptionPrintMarkup",description:"OptionPrintMarkup records contain every option print along with quote, surface details at print time",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/2750-market-data-options/OptionPrintMarkup.md",sourceDirName:"MessageSchemas/Schema/Topics/2750-market-data-options",slug:"/MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{title:"OptionPrintMarkup"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrint2",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-options/OptionPrint2"},next:{title:"OptionPrintSet",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-options/OptionPrintSet"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-optionprintmarkup-id-2810",children:["Schema: OptionPrintMarkup ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 2810)"})]}),"\n",(0,n.jsx)(t.p,{children:"OptionPrintMarkup records contain every option print along with quote, surface details at print time"}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"Internal"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"okey"}),(0,n.jsx)(t.td,{children:"OptionKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"prtNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"Unique print set identifier, will increment but not guaranteed to be sequential"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"fkey"}),(0,n.jsx)(t.td,{children:"ExpiryKey"}),(0,n.jsx)(t.td,{children:"underlying fkey (if any)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"underlying ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"prtExch"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,n.jsx)(t.td,{children:"Exchange on which print took place"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"prtSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"print size [contracts]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"prtPrice"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"prtType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,n.jsx)(t.td,{children:"print type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"prtOrders"}),(0,n.jsx)(t.td,{children:"ushort"}),(0,n.jsx)(t.td,{children:"number of participating orders"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"prtClusterNum"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"incremental print cluster counter (one counter per okey; used to group prints into clusters)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"prtClusterSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"prtVolume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"day print volume in contracts [this exchange]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"cxlVolume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"day print/cancel volume (num of contracts printed and then cancelled)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"bidCount"}),(0,n.jsx)(t.td,{children:"ushort"}),(0,n.jsx)(t.td,{children:"number of bid prints"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"askCount"}),(0,n.jsx)(t.td,{children:"ushort"}),(0,n.jsx)(t.td,{children:"number of ask prints"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"bidVolume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"bid print volume in contracts"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"askVolume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"ask print volume in contracts"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"ebid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"exchange bid (@ print time)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"eask"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"exchange ask (@ print time)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"ebsz"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"exchange bid size"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"easz"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"exchange ask size"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"160"}),(0,n.jsx)(t.td,{children:"eage"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"163"}),(0,n.jsx)(t.td,{children:"prtSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"166"}),(0,n.jsx)(t.td,{children:"oBid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Option NBBO bid a the time the print was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"169"}),(0,n.jsx)(t.td,{children:"oAsk"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Option NBBO ask a the time the print was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"172"}),(0,n.jsx)(t.td,{children:"oBidSz"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Option NBBO cumulative bid size at the time the print was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"175"}),(0,n.jsx)(t.td,{children:"oAskSz"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Option NBBO cumulative ask size at the time the print was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"178"}),(0,n.jsx)(t.td,{children:"oBidEx"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,n.jsx)(t.td,{children:"First (or largest) option exchange on the bid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"181"}),(0,n.jsx)(t.td,{children:"oAskEx"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,n.jsx)(t.td,{children:"First (or largest) option exchange on the ask"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"184"}),(0,n.jsx)(t.td,{children:"oBidExSz"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Option bid size of the largest exchange on the bid at the time the print was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"187"}),(0,n.jsx)(t.td,{children:"oAskExSz"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Option ask size of the largest exchange on the ask at the time the print was received"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"190"}),(0,n.jsx)(t.td,{children:"oBidCnt"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{children:"Number of exchanges on the NBBO bid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"193"}),(0,n.jsx)(t.td,{children:"oAskCnt"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{children:"Number of exchanges on the NBBO ask"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"196"}),(0,n.jsx)(t.td,{children:"oBid2"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Second level bid price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"199"}),(0,n.jsx)(t.td,{children:"oAsk2"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Second level ask price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"202"}),(0,n.jsx)(t.td,{children:"oBidSz2"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Cumulative size on the second level bid price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"205"}),(0,n.jsx)(t.td,{children:"oAskSz2"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Cumulative size on the second level ask price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"208"}),(0,n.jsx)(t.td,{children:"uBid"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"underlier bid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"211"}),(0,n.jsx)(t.td,{children:"uAsk"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"underlier ask"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"214"}),(0,n.jsx)(t.td,{children:"uPrc"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"underlier price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"217"}),(0,n.jsx)(t.td,{children:"yrs"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"years to expiry"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"220"}),(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"interest rate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"223"}),(0,n.jsx)(t.td,{children:"sdiv"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"continuous stock dividend"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"226"}),(0,n.jsx)(t.td,{children:"ddiv"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"discrete stock dividend value (sum of dividends <= expiration)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"229"}),(0,n.jsx)(t.td,{children:"xDe"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"xDelta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"232"}),(0,n.jsx)(t.td,{children:"xAxis"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR surface xAxis value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"235"}),(0,n.jsx)(t.td,{children:"multihedge"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,n.jsx)(t.td,{children:"Distinguishes options that have a single underlying security from those that are more complex:  multiple securities,cash components, binary options,etc:  'None','Simple','Complex','AllCash','Binary'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"238"}),(0,n.jsx)(t.td,{children:"prtIv"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print implied vol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"241"}),(0,n.jsx)(t.td,{children:"prtDe"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print delta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"244"}),(0,n.jsx)(t.td,{children:"prtGa"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print gamma"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"247"}),(0,n.jsx)(t.td,{children:"prtTh"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print theta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"250"}),(0,n.jsx)(t.td,{children:"prtVe"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print vega"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"prtRo"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"print rho"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"256"}),(0,n.jsx)(t.td,{children:"calcErr"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{children:"calc error flag"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"259"}),(0,n.jsx)(t.td,{children:"surfVol"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR surface volatility"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"262"}),(0,n.jsx)(t.td,{children:"surfOpx"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR surface price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"265"}),(0,n.jsx)(t.td,{children:"surfAtm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR surface ATM vol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"268"}),(0,n.jsx)(t.td,{children:"srcTimestamp"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"271"}),(0,n.jsx)(t.td,{children:"netTimestamp"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"inbound print packet PTP timestamp from SR gateway switch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"274"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionPrintMarkup'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionPrintMarkup'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintMarkup\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'prtNumber|fkey|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|oBid|oAsk|oBidSz|oAskSz|oBidEx|oAskEx|oBidExSz|oAskExSz|oBidCnt|oAskCnt|oBid2|oAsk2|oBidSz2|oAskSz2|uBid|uAsk|uPrc|yrs|rate|sdiv|ddiv|xDe|xAxis|multihedge|prtIv|prtDe|prtGa|prtTh|prtVe|prtRo|calcErr|surfVol|surfOpx|surfAtm|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionPrintMarkup' \\\n--data-urlencode 'view=prtNumber|fkey|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|oBid|oAsk|oBidSz|oAskSz|oBidEx|oAskEx|oBidExSz|oAskExSz|oBidCnt|oAskCnt|oBid2|oAsk2|oBidSz2|oAskSz2|uBid|uAsk|uPrc|yrs|rate|sdiv|ddiv|xDe|xAxis|multihedge|prtIv|prtDe|prtGa|prtTh|prtVe|prtRo|calcErr|surfVol|surfOpx|surfAtm|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=calcErr:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintMarkup\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'prtNumber|fkey|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|oBid|oAsk|oBidSz|oAskSz|oBidEx|oAskEx|oBidExSz|oAskExSz|oBidCnt|oAskCnt|oBid2|oAsk2|oBidSz2|oAskSz2|uBid|uAsk|uPrc|yrs|rate|sdiv|ddiv|xDe|xAxis|multihedge|prtIv|prtDe|prtGa|prtTh|prtVe|prtRo|calcErr|surfVol|surfOpx|surfAtm|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'prtNumber:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionPrintMarkup' \\\n--data-urlencode 'view=prtNumber|fkey|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|oBid|oAsk|oBidSz|oAskSz|oBidEx|oAskEx|oBidExSz|oAskExSz|oBidCnt|oAskCnt|oBid2|oAsk2|oBidSz2|oAskSz2|uBid|uAsk|uPrc|yrs|rate|sdiv|ddiv|xDe|xAxis|multihedge|prtIv|prtDe|prtGa|prtTh|prtVe|prtRo|calcErr|surfVol|surfOpx|surfAtm|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=calcErr:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=prtNumber:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintMarkup\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'prtNumber|fkey|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|oBid|oAsk|oBidSz|oAskSz|oBidEx|oAskEx|oBidExSz|oAskExSz|oBidCnt|oAskCnt|oBid2|oAsk2|oBidSz2|oAskSz2|uBid|uAsk|uPrc|yrs|rate|sdiv|ddiv|xDe|xAxis|multihedge|prtIv|prtDe|prtGa|prtTh|prtVe|prtRo|calcErr|surfVol|surfOpx|surfAtm|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'prtExch|prtType|prtSide|oBidEx|oAskEx|multihedge\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionPrintMarkup' \\\n--data-urlencode 'measure=prtNumber|fkey|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|oBid|oAsk|oBidSz|oAskSz|oBidEx|oAskEx|oBidExSz|oAskExSz|oBidCnt|oAskCnt|oBid2|oAsk2|oBidSz2|oAskSz2|uBid|uAsk|uPrc|yrs|rate|sdiv|ddiv|xDe|xAxis|multihedge|prtIv|prtDe|prtGa|prtTh|prtVe|prtRo|calcErr|surfVol|surfOpx|surfAtm|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'group=prtExch|prtType|prtSide|oBidEx|oAskEx|multihedge' \\\n--data-urlencode 'where=calcErr:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintMarkup\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionPrintMarkup' \\\n--data-urlencode 'where=calcErr:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),s=r(34164),i=r(23104),d=r(56347),l=r(205),a=r(57485),c=r(31682),o=r(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[d,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=x({queryString:r,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),g=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&a(g)}),[g]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function k(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=a.indexOf(t),s=l[r].value;s!==n&&(c(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(k,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function y(e){const t=(0,j.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);