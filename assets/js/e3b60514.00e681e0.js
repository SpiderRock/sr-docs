"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34609],{16173:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=r(74848),s=r(28453),a=r(11470),l=r(19365);const i={title:"OptionOpenMark"},d="Schema: OptionOpenMark (ID: 3145)",c={id:"MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",title:"OptionOpenMark",description:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/Topics/3120-market-marks/OptionOpenMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{title:"OptionOpenMark"},sidebar:"messageSchemasSidebar",previous:{title:"OptionCloseMark",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/market-marks/OptionCloseMark"},next:{title:"OptionSettlementMark",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/market-marks/OptionSettlementMark"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"schema-optionopenmark-id-3145",children:["Schema: OptionOpenMark ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3145)"})]}),"\n",(0,t.jsx)(n.p,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"OptMarkData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Product"}),(0,t.jsx)(n.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10="}),(0,t.jsx)(n.td,{children:"okey"}),(0,t.jsx)(n.td,{children:"OptionKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"tradeDate"}),(0,t.jsx)(n.td,{children:"DateKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"191"}),(0,t.jsx)(n.td,{children:"opnMarkState"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/OpnMarkState",children:"enum : OpnMarkState"})}),(0,t.jsx)(n.td,{children:"Preview or Final (note: preview is not corp action adjusted)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"109"}),(0,t.jsx)(n.td,{children:"uSrCls"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"SR open uMark; [SR close uMark (C - 5m) overnight adjusted]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"uClose"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"exchange open uMark; [exchange close uMark overnight adjusted]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"121"}),(0,t.jsx)(n.td,{children:"srClsPrc"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"SR open mark; [SR close mark (close - 5m) overnight adjusted]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"124"}),(0,t.jsx)(n.td,{children:"closePrc"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"exchange open mark; [exchange close mark overnight adjusted] [if available]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"133"}),(0,t.jsx)(n.td,{children:"srPrc"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"SR open surface price; [SR close surface price overnight adjusted]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"136"}),(0,t.jsx)(n.td,{children:"srVol"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"SR surface volatility"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"139"}),(0,t.jsx)(n.td,{children:"srSrc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/MarkSource",children:"enum : MarkSource"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"142"}),(0,t.jsx)(n.td,{children:"de"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"greeks from SR surface volatility"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"145"}),(0,t.jsx)(n.td,{children:"ga"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"148"}),(0,t.jsx)(n.td,{children:"th"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"151"}),(0,t.jsx)(n.td,{children:"ve"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"154"}),(0,t.jsx)(n.td,{children:"vo"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"volga (SR surface)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"157"}),(0,t.jsx)(n.td,{children:"va"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"vanna (SR surface)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"160"}),(0,t.jsx)(n.td,{children:"rh"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"163"}),(0,t.jsx)(n.td,{children:"ph"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"166"}),(0,t.jsx)(n.td,{children:"srSlope"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"surface slope (SR surface)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"169"}),(0,t.jsx)(n.td,{children:"deDecay"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"172"}),(0,t.jsx)(n.td,{children:"sdiv"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"term sdiv (stock dividend) rate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"175"}),(0,t.jsx)(n.td,{children:"ddiv"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"sum of discrete dividends"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"192"}),(0,t.jsx)(n.td,{children:"ddivPv"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"sum of present value of discrete dividends"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"178"}),(0,t.jsx)(n.td,{children:"rate"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"term discount rate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"181"}),(0,t.jsx)(n.td,{children:"years"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"years to expiration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"184"}),(0,t.jsx)(n.td,{children:"error"}),(0,t.jsx)(n.td,{children:"byte"}),(0,t.jsx)(n.td,{children:"pricing calc error (0 = none)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"187"}),(0,t.jsx)(n.td,{children:"corpAction"}),(0,t.jsx)(n.td,{children:"text1"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"190"}),(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionOpenMark'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionOpenMark'\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenMark\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'tradeDate|opnMarkState|uSrCls|uClose|srClsPrc|closePrc|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|years|error|corpAction|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionOpenMark' \\\n--data-urlencode 'view=tradeDate|opnMarkState|uSrCls|uClose|srClsPrc|closePrc|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|years|error|corpAction|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenMark\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'tradeDate|opnMarkState|uSrCls|uClose|srClsPrc|closePrc|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|years|error|corpAction|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'tradeDate:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionOpenMark' \\\n--data-urlencode 'view=tradeDate|opnMarkState|uSrCls|uClose|srClsPrc|closePrc|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|years|error|corpAction|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=tradeDate:ASC'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenMark\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'tradeDate|opnMarkState|uSrCls|uClose|srClsPrc|closePrc|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|years|error|corpAction|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'opnMarkState|srSrc\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionOpenMark' \\\n--data-urlencode 'measure=tradeDate|opnMarkState|uSrCls|uClose|srClsPrc|closePrc|srPrc|srVol|srSrc|de|ga|th|ve|vo|va|rh|ph|srSlope|deDecay|sdiv|ddiv|ddivPv|rate|years|error|corpAction|timestamp' \\\n--data-urlencode 'group=opnMarkState|srSrc' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenMark\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionOpenMark' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>b});var t=r(96540),s=r(34164),a=r(23104),l=r(56347),i=r(205),d=r(57485),c=r(31682),o=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=u(e),[l,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,o.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),g=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&d(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const n=e.currentTarget,r=d.indexOf(n),s=i[r].value;s!==t&&(c(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function X(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(X,{...n,...e})]})}function b(e){const n=(0,j.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);