"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77226],{63827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),a=t(19365);const l={title:"LiveImpliedQuote"},d="Schema: LiveImpliedQuote (ID: 1015)",c={id:"MessageSchemas/Schema/Topics/analytics/LiveImpliedQuote",title:"LiveImpliedQuote",description:"CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned.",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveImpliedQuote.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuote",permalink:"/docs/next/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveImpliedQuote"},sidebar:"messageSchemasSidebar",previous:{title:"LiveIVarSwapFixedTerm",permalink:"/docs/next/MessageSchemas/Schema/Topics/analytics/LiveIVarSwapFixedTerm"},next:{title:"LiveImpliedQuoteAdj",permalink:"/docs/next/MessageSchemas/Schema/Topics/analytics/LiveImpliedQuoteAdj"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"schema-liveimpliedquote-id-1015",children:["Schema: LiveImpliedQuote ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1015)"})]}),"\n",(0,r.jsxs)(n.p,{children:["CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."]}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"1000-analytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"OptAnalytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10="}),(0,r.jsx)(n.td,{children:"okey"}),(0,r.jsx)(n.td,{children:"OptionKey"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"ticker"}),(0,r.jsx)(n.td,{children:"TickerKey"}),(0,r.jsx)(n.td,{children:"SR Ticker that this option rolls up to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"uPrc"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier price (usually mid-market)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"106"}),(0,r.jsx)(n.td,{children:"uOff"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"implied underlier price offset (if any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"109"}),(0,r.jsx)(n.td,{children:"years"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"years to expiration"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"xAxis"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option moneyness"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"rate"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"discount rate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"sdiv"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"sdiv (continuous stock dividend) rate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"121"}),(0,r.jsx)(n.td,{children:"ddiv"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"cumulative discrete dividend value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"124"}),(0,r.jsx)(n.td,{children:"oBid"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option bid price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"oAsk"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option ask price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"oBidIv"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"volatility implied by option bid price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"oAskIv"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"volatility implied by option ask price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"136"}),(0,r.jsx)(n.td,{children:"atmVol"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option atm volatility (from SR surface)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"sVol"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option surface volatility (SR surface fit model)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"142"}),(0,r.jsx)(n.td,{children:"sPrc"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option surface price; ie. PRICE(sVol, uPrc + uOff, years, rate, sDiv, {discrete dividends, if any})"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"145"}),(0,r.jsx)(n.td,{children:"sMark"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option surface mark (option surface price w/bounding rules; always between bid/ask)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"148"}),(0,r.jsx)(n.td,{children:"veSlope"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant); hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"151"}),(0,r.jsx)(n.td,{children:"de"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option delta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"154"}),(0,r.jsx)(n.td,{children:"ga"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option gamma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"157"}),(0,r.jsx)(n.td,{children:"th"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option theta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"160"}),(0,r.jsx)(n.td,{children:"ve"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option vega"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"163"}),(0,r.jsx)(n.td,{children:"va"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option vanna"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"166"}),(0,r.jsx)(n.td,{children:"vo"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option volga"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"169"}),(0,r.jsx)(n.td,{children:"ro"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option rho"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"172"}),(0,r.jsx)(n.td,{children:"ph"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option phi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"175"}),(0,r.jsx)(n.td,{children:"deDecay"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"option delta decay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"178"}),(0,r.jsx)(n.td,{children:"up50"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier up 50% slide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"181"}),(0,r.jsx)(n.td,{children:"dn50"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier dn 50% slide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"184"}),(0,r.jsx)(n.td,{children:"up15"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier up 15% slide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"187"}),(0,r.jsx)(n.td,{children:"dn15"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier dn 15% slide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"190"}),(0,r.jsx)(n.td,{children:"up06"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier up 6% slide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"193"}),(0,r.jsx)(n.td,{children:"dn08"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"underlier dn 8% slide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"196"}),(0,r.jsx)(n.td,{children:"synSpot"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"Synthetic spot price (market-derived spot when the underlying is not a traded instrument)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"199"}),(0,r.jsx)(n.td,{children:"priceType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcPriceType",children:"enum : CalcPriceType"})}),(0,r.jsx)(n.td,{children:"Equity or Future (Black76) pricing framework;  if Future then uPrc is the forwardUPrc and sdiv = rate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"202"}),(0,r.jsx)(n.td,{children:"calcErr"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ImpliedQuoteError",children:"enum : ImpliedQuoteError"})}),(0,r.jsx)(n.td,{children:"option pricing calculation error (if any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"205"}),(0,r.jsx)(n.td,{children:"calcSource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcSource",children:"enum : CalcSource"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"208"}),(0,r.jsx)(n.td,{children:"srcTimestamp"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"OPRA source timestamp (nanoseconds since epoch); will be zero if calcSource != Tick"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"211"}),(0,r.jsx)(n.td,{children:"netTimestamp"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"SR timestamp @ publish time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"214"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'LiveImpliedQuote'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=LiveImpliedQuote'\n\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuote\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|uPrc|uOff|years|xAxis|rate|sdiv|ddiv|oBid|oAsk|oBidIv|oAskIv|atmVol|sVol|sPrc|sMark|veSlope|de|ga|th|ve|va|vo|ro|ph|deDecay|up50|dn50|up15|dn15|up06|dn08|synSpot|priceType|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=LiveImpliedQuote' \\\n--data-urlencode 'view=ticker|uPrc|uOff|years|xAxis|rate|sdiv|ddiv|oBid|oAsk|oBidIv|oAskIv|atmVol|sVol|sPrc|sMark|veSlope|de|ga|th|ve|va|vo|ro|ph|deDecay|up50|dn50|up15|dn15|up06|dn08|synSpot|priceType|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuote\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|uPrc|uOff|years|xAxis|rate|sdiv|ddiv|oBid|oAsk|oBidIv|oAskIv|atmVol|sVol|sPrc|sMark|veSlope|de|ga|th|ve|va|vo|ro|ph|deDecay|up50|dn50|up15|dn15|up06|dn08|synSpot|priceType|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=LiveImpliedQuote' \\\n--data-urlencode 'view=ticker|uPrc|uOff|years|xAxis|rate|sdiv|ddiv|oBid|oAsk|oBidIv|oAskIv|atmVol|sVol|sPrc|sMark|veSlope|de|ga|th|ve|va|vo|ro|ph|deDecay|up50|dn50|up15|dn15|up06|dn08|synSpot|priceType|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuote\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|uPrc|uOff|years|xAxis|rate|sdiv|ddiv|oBid|oAsk|oBidIv|oAskIv|atmVol|sVol|sPrc|sMark|veSlope|de|ga|th|ve|va|vo|ro|ph|deDecay|up50|dn50|up15|dn15|up06|dn08|synSpot|priceType|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'priceType|calcErr|calcSource\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=LiveImpliedQuote' \\\n--data-urlencode 'measure=ticker|uPrc|uOff|years|xAxis|rate|sdiv|ddiv|oBid|oAsk|oBidIv|oAskIv|atmVol|sVol|sPrc|sMark|veSlope|de|ga|th|ve|va|vo|ro|ph|deDecay|up50|dn50|up15|dn15|up06|dn08|synSpot|priceType|calcErr|calcSource|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'group=priceType|calcErr|calcSource' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveImpliedQuote\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=LiveImpliedQuote' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var r=t(96540),s=t(34164),i=t(23104),a=t(56347),l=t(205),d=t(57485),c=t(31682),o=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),v=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&d(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),s=l[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function X(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function b(e){const n=(0,j.A)();return(0,g.jsx)(X,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);