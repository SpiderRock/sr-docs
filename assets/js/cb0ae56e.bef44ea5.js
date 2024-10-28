"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31980],{10816:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=r(74848),n=r(28453),a=r(11470),l=r(19365);const i={title:"OptionCloseMark"},d="Schema: OptionCloseMark (ID: 3140)",c={id:"MessageSchemas/Schema/Topics/market-marks/OptionCloseMark",title:"OptionCloseMark",description:"OptionCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/3120-market-marks/OptionCloseMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/OptionCloseMark",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-marks/OptionCloseMark",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{title:"OptionCloseMark"},sidebar:"messageSchemasSidebar",previous:{title:"FutureSettlementMark",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-marks/FutureSettlementMark"},next:{title:"OptionOpenMark",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-optionclosemark-id-3140",children:["Schema: OptionCloseMark ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3140)"})]}),"\n",(0,t.jsxs)(s.p,{children:["OptionCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"OptMarkData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10="}),(0,t.jsx)(s.td,{children:"okey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"212"}),(0,t.jsx)(s.td,{children:"ticker"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{children:"SR Ticker that this option rolls up to"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"tradeDate"}),(0,t.jsx)(s.td,{children:"DateKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"103"}),(0,t.jsx)(s.td,{children:"clsMarkState"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ClsMarkState",children:"enum : ClsMarkState"})}),(0,t.jsx)(s.td,{children:"Preview or Final"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"106"}),(0,t.jsx)(s.td,{children:"uBid"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"SpiderRock closing underlier bid (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"109"}),(0,t.jsx)(s.td,{children:"uAsk"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"SpiderRock closing underlier ask (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"112"}),(0,t.jsx)(s.td,{children:"uSrCls"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"SpiderRock underlier closing mark (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"115"}),(0,t.jsx)(s.td,{children:"uClose"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"exchange underlier closing mark"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"118"}),(0,t.jsx)(s.td,{children:"bidPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SpiderRock closing option bid (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"121"}),(0,t.jsx)(s.td,{children:"askPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SpiderRock closing option ask (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"124"}),(0,t.jsx)(s.td,{children:"srClsPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"SpiderRock close mark (close - 5min) [NBBO mid-market]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"127"}),(0,t.jsx)(s.td,{children:"closePrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"official exchange closing mark (last print;then official close)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"130"}),(0,t.jsx)(s.td,{children:"hasSRClsPrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"133"}),(0,t.jsx)(s.td,{children:"hasClosePrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"209"}),(0,t.jsx)(s.td,{children:"hasUClsPrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"136"}),(0,t.jsx)(s.td,{children:"bidIV"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"implied vol of SpiderRock closing bid price (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"139"}),(0,t.jsx)(s.td,{children:"askIV"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"implied vol of SpiderRock closing ask price (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"142"}),(0,t.jsx)(s.td,{children:"srPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"sr close mark price (always within bidPx/askPx) (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"145"}),(0,t.jsx)(s.td,{children:"srVol"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"sr close mark volatility (C - 5m)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"148"}),(0,t.jsx)(s.td,{children:"srSrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/MarkSource",children:"enum : MarkSource"})}),(0,t.jsx)(s.td,{children:"sr close mark source (SRVol is SurfaceVol)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"151"}),(0,t.jsx)(s.td,{children:"de"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"delta"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"154"}),(0,t.jsx)(s.td,{children:"ga"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"gamma"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"157"}),(0,t.jsx)(s.td,{children:"th"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theta"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"160"}),(0,t.jsx)(s.td,{children:"ve"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"vega"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"163"}),(0,t.jsx)(s.td,{children:"vo"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"volga"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"166"}),(0,t.jsx)(s.td,{children:"va"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"vanna"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"169"}),(0,t.jsx)(s.td,{children:"rh"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"rho"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"172"}),(0,t.jsx)(s.td,{children:"ph"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"phi"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"175"}),(0,t.jsx)(s.td,{children:"srSlope"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"surface slope (SR surface)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"178"}),(0,t.jsx)(s.td,{children:"deDecay"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"delta decay"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"181"}),(0,t.jsx)(s.td,{children:"sdiv"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"sdiv rate"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"184"}),(0,t.jsx)(s.td,{children:"ddiv"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"ddiv amount (sum of discrete dividend amounts)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"210"}),(0,t.jsx)(s.td,{children:"ddivPv"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"ddiv (present value) amount (sum of discrete dividend pv amounts)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"187"}),(0,t.jsx)(s.td,{children:"rate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"discount rate"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"211"}),(0,t.jsx)(s.td,{children:"iDays"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"interest days (today to expiry) (T+1)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"190"}),(0,t.jsx)(s.td,{children:"years"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"years to expiration"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"193"}),(0,t.jsx)(s.td,{children:"error"}),(0,t.jsx)(s.td,{children:"byte"}),(0,t.jsx)(s.td,{children:"calculation error code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"196"}),(0,t.jsx)(s.td,{children:"openInterest"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"option open Interest"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"199"}),(0,t.jsx)(s.td,{children:"prtCount"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"print count"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"202"}),(0,t.jsx)(s.td,{children:"prtVolume"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"total printed volume (all prt types)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"205"}),(0,t.jsx)(s.td,{children:"srCloseMarkDttm"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"from MarketCloseQuote.srCloseMarkDttm (in trading period local timezone)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"213"}),(0,t.jsx)(s.td,{children:"configNow"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"timestamp in the trading period local timezone"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"208"}),(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"record timestamp"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionCloseMark'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionCloseMark'\n\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCloseMark\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|clsMarkState|uBid|uAsk|uSrCls|uClose|bidPrc|askPrc|srClsPrc|closePrc|hasSRClsPrc|hasClosePrc|hasUClsPrc|bidIV|askIV|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|iDays|years|error|openInterest|prtCount|prtVolume|srCloseMarkDttm|configNow|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionCloseMark' \\\n--data-urlencode 'view=ticker|tradeDate|clsMarkState|uBid|uAsk|uSrCls|uClose|bidPrc|askPrc|srClsPrc|closePrc|hasSRClsPrc|hasClosePrc|hasUClsPrc|bidIV|askIV|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|iDays|years|error|openInterest|prtCount|prtVolume|srCloseMarkDttm|configNow|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCloseMark\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|clsMarkState|uBid|uAsk|uSrCls|uClose|bidPrc|askPrc|srClsPrc|closePrc|hasSRClsPrc|hasClosePrc|hasUClsPrc|bidIV|askIV|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|iDays|years|error|openInterest|prtCount|prtVolume|srCloseMarkDttm|configNow|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionCloseMark' \\\n--data-urlencode 'view=ticker|tradeDate|clsMarkState|uBid|uAsk|uSrCls|uClose|bidPrc|askPrc|srClsPrc|closePrc|hasSRClsPrc|hasClosePrc|hasUClsPrc|bidIV|askIV|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|iDays|years|error|openInterest|prtCount|prtVolume|srCloseMarkDttm|configNow|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCloseMark\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|clsMarkState|uBid|uAsk|uSrCls|uClose|bidPrc|askPrc|srClsPrc|closePrc|hasSRClsPrc|hasClosePrc|hasUClsPrc|bidIV|askIV|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|iDays|years|error|openInterest|prtCount|prtVolume|srCloseMarkDttm|configNow|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'clsMarkState|hasSRClsPrc|hasClosePrc|hasUClsPrc|srSrc\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionCloseMark' \\\n--data-urlencode 'measure=ticker|tradeDate|clsMarkState|uBid|uAsk|uSrCls|uClose|bidPrc|askPrc|srClsPrc|closePrc|hasSRClsPrc|hasClosePrc|hasUClsPrc|bidIV|askIV|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|iDays|years|error|openInterest|prtCount|prtVolume|srCloseMarkDttm|configNow|timestamp' \\\n--data-urlencode 'group=clsMarkState|hasSRClsPrc|hasClosePrc|hasUClsPrc|srSrc' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCloseMark\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionCloseMark' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,s,r)=>{r.d(s,{A:()=>l});r(96540);var t=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:s,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:r,children:s})}},11470:(e,s,r)=>{r.d(s,{A:()=>X});var t=r(96540),n=r(34164),a=r(23104),l=r(56347),i=r(205),d=r(57485),c=r(31682),o=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:r,attributes:t,default:n}}=e;return{value:s,label:r,attributes:t,default:n}}))}(r);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function p(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,d.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(n.location.search);s.set(a,e),n.replace({...n.location,search:s.toString()})}),[a,n])]}function x(e){const{defaultValue:s,queryString:r=!1,groupId:n}=e,a=u(e),[l,d]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[c,h]=m({queryString:r,groupId:n}),[x,j]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,a]=(0,o.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),g=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&d(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function f(e){let{className:s,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const s=e.currentTarget,r=d.indexOf(s),n=i[r].value;n!==t&&(c(s),l(n))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;s=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;s=d[r]??d[d.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},s),children:i.map((e=>{let{value:s,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>d.push(e),onKeyDown:h,onClick:o,...a,className:(0,n.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===s}),children:r??s},s)}))})}function k(e){let{lazy:s,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function y(e){const s=x(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...s,...e}),(0,v.jsx)(k,{...s,...e})]})}function X(e){const s=(0,j.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(s))}},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>i});var t=r(96540);const n={},a=t.createContext(n);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);