"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45790],{45947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var s=n(74848),r=n(28453),l=n(11470),i=n(19365);const a={title:"LiveImpliedQuoteDisp"},c="Schema: LiveImpliedQuoteDisp (ID: 1017)",d={id:"MessageSchemas/Schema/Topics/analytics/LiveImpliedQuoteDisp",title:"LiveImpliedQuoteDisp",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveImpliedQuoteDisp.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuoteDisp",permalink:"/docs/next/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuoteDisp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveImpliedQuoteDisp"},sidebar:"messageSchemasSidebar",previous:{title:"LiveImpliedQuoteAdj",permalink:"/docs/next/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuoteAdj"},next:{title:"LiveRateCurve",permalink:"/docs/next/MessageSchemas/Schema/Topics/analytics/LiveRateCurve"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-liveimpliedquotedisp-id-1017",children:["Schema: LiveImpliedQuoteDisp ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1017)"})]}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"1000-analytics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"OptAnalytics"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"okey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"SR Ticker that this option rolls up to (LiveImpliedQuote)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"101"}),(0,s.jsx)(t.td,{children:"uPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier price (usually mid-market) LiveImpliedQuote"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"102"}),(0,s.jsx)(t.td,{children:"clsBidIv"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"OptionCloseMark.bidIV"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"clsAskIv"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"OptionCloseMark.AskIv"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"104"}),(0,s.jsx)(t.td,{children:"clsMidVol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"105"}),(0,s.jsx)(t.td,{children:"clsSrVol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous close SrVol from OptionCloseMark.srVol"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"oBidIv"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"volatility implied by option bid price from LiveImpliedQuote"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"107"}),(0,s.jsx)(t.td,{children:"oAskIv"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"volatility implied by option ask price from LiveImpliedQuote"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"108"}),(0,s.jsx)(t.td,{children:"midVol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"mid-market vol, if oBidIv is -1, midVol is AVG(0, oAskIv), if oAskIv is -1, midVol is 0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"sVol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option surface volatility (SR surface fit model) from LiveImpliedQuote"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"110"}),(0,s.jsx)(t.td,{children:"sPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option surface price; ie. PRICE(sVol, uPrc + uOff, years, rate, sDiv, {discrete dividends, if any}) from LiveImpliedQuote"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"111"}),(0,s.jsx)(t.td,{children:"prtPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last Print Price (from OptionPrint)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"surfVol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR surface volatility from OptionPrintSet (at time of print)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"113"}),(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day print volume in contracts from OptionPrintSet"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"114"}),(0,s.jsx)(t.td,{children:"prtIV"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"print implied volatility"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"de"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option delta"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"116"}),(0,s.jsx)(t.td,{children:"ga"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option gamma"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"117"}),(0,s.jsx)(t.td,{children:"th"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option theta"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"ve"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option vega"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"119"}),(0,s.jsx)(t.td,{children:"va"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option vanna"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"120"}),(0,s.jsx)(t.td,{children:"vo"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option volga"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"ro"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option rho"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"122"}),(0,s.jsx)(t.td,{children:"ph"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option phi"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"123"}),(0,s.jsx)(t.td,{children:"calcErr"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/ImpliedQuoteError",children:"enum : ImpliedQuoteError"})}),(0,s.jsx)(t.td,{children:"option pricing calculation error (if any)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"calcSource"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CalcSource",children:"enum : CalcSource"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"125"}),(0,s.jsx)(t.td,{children:"srcTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"OPRA source timestamp (nanoseconds since epoch); will be zero if calcSource != Tick"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"126"}),(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"SR timestamp @ publish time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'LiveImpliedQuoteDisp'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=LiveImpliedQuoteDisp'\n\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuoteDisp\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|uPrc|clsBidIv|clsAskIv|clsMidVol|clsSrVol|oBidIv|oAskIv|midVol|sVol|sPrc|prtPrc|surfVol|prtVolume|prtIV|de|ga|th|ve|va|vo|ro|ph|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=LiveImpliedQuoteDisp' \\\n--data-urlencode 'view=ticker|uPrc|clsBidIv|clsAskIv|clsMidVol|clsSrVol|oBidIv|oAskIv|midVol|sVol|sPrc|prtPrc|surfVol|prtVolume|prtIV|de|ga|th|ve|va|vo|ro|ph|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuoteDisp\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|uPrc|clsBidIv|clsAskIv|clsMidVol|clsSrVol|oBidIv|oAskIv|midVol|sVol|sPrc|prtPrc|surfVol|prtVolume|prtIV|de|ga|th|ve|va|vo|ro|ph|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=LiveImpliedQuoteDisp' \\\n--data-urlencode 'view=ticker|uPrc|clsBidIv|clsAskIv|clsMidVol|clsSrVol|oBidIv|oAskIv|midVol|sVol|sPrc|prtPrc|surfVol|prtVolume|prtIV|de|ga|th|ve|va|vo|ro|ph|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuoteDisp\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|uPrc|clsBidIv|clsAskIv|clsMidVol|clsSrVol|oBidIv|oAskIv|midVol|sVol|sPrc|prtPrc|surfVol|prtVolume|prtIV|de|ga|th|ve|va|vo|ro|ph|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'calcErr|calcSource\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=LiveImpliedQuoteDisp' \\\n--data-urlencode 'measure=ticker|uPrc|clsBidIv|clsAskIv|clsMidVol|clsSrVol|oBidIv|oAskIv|midVol|sVol|sPrc|prtPrc|surfVol|prtVolume|prtIV|de|ga|th|ve|va|vo|ro|ph|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'group=calcErr|calcSource' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuoteDisp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=LiveImpliedQuoteDisp' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>I});var s=n(96540),r=n(34164),l=n(23104),i=n(56347),a=n(205),c=n(57485),d=n(31682),o=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[d,u]=m({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=d??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function f(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),r=a[n].value;r!==s&&(d(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function X(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(X,{...t,...e})]})}function I(e){const t=(0,j.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);