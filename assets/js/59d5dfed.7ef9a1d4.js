"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49765],{23158:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var t=s(74848),n=s(28453),i=s(11470),a=s(19365);const d={title:"FutureBookQuote"},l="Schema: FutureBookQuote (ID: 2580)",c={id:"MessageSchemas/Schema/Topics/market-data-futures/FutureBookQuote",title:"FutureBookQuote",description:"This table contains live future quote records from the listing exchange.  Each record contains up to four price levels and represents a live snapshot of the book for a specific future.",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2580-market-data-futures/FutureBookQuote.md",sourceDirName:"MessageSchemas/Schema/Topics/2580-market-data-futures",slug:"/MessageSchemas/Schema/Topics/market-data-futures/FutureBookQuote",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-futures/FutureBookQuote",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"FutureBookQuote"},sidebar:"messageSchemasSidebar",previous:{title:"2580-market-data-futures",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-futures/"},next:{title:"FutureMarketSummary",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-futures/FutureMarketSummary"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-futurebookquote-id-2580",children:["Schema: FutureBookQuote ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2580)"})]}),"\n",(0,t.jsx)(r.p,{children:"This table contains live future quote records from the listing exchange.  Each record contains up to four price levels and represents a live snapshot of the book for a specific future."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"2580-market-data-futures"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"FutMktData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRLive"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"10="}),(0,t.jsx)(r.td,{children:"fkey"}),(0,t.jsx)(r.td,{children:"ExpiryKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"100"}),(0,t.jsx)(r.td,{children:"updateType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/UpdateType",children:"enum : UpdateType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"103"}),(0,t.jsx)(r.td,{children:"marketStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarketStatus",children:"enum : MarketStatus"})}),(0,t.jsx)(r.td,{children:"market status (open, halted, etc)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"bidPrice1"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"askPrice1"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"bidSize1"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"bid size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"askSize1"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"ask size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"118"}),(0,t.jsx)(r.td,{children:"bidOrders1"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"121"}),(0,t.jsx)(r.td,{children:"askOrders1"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"124"}),(0,t.jsx)(r.td,{children:"bidPrice2"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"127"}),(0,t.jsx)(r.td,{children:"askPrice2"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"130"}),(0,t.jsx)(r.td,{children:"bidSize2"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"bid size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"133"}),(0,t.jsx)(r.td,{children:"askSize2"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"ask size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"136"}),(0,t.jsx)(r.td,{children:"bidOrders2"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"139"}),(0,t.jsx)(r.td,{children:"askOrders2"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"142"}),(0,t.jsx)(r.td,{children:"bidPrice3"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"145"}),(0,t.jsx)(r.td,{children:"askPrice3"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"148"}),(0,t.jsx)(r.td,{children:"bidSize3"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"bid size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"askSize3"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"ask size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"154"}),(0,t.jsx)(r.td,{children:"bidOrders3"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"askOrders3"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"160"}),(0,t.jsx)(r.td,{children:"bidPrice4"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"163"}),(0,t.jsx)(r.td,{children:"askPrice4"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"bidSize4"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"bid size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"askSize4"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"ask size in contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"bidOrders4"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"askOrders4"}),(0,t.jsx)(r.td,{children:"ushort"}),(0,t.jsx)(r.td,{children:"number of participating orders at the ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"srcTimestamp"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"source high precision timestamp (if available)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"181"}),(0,t.jsx)(r.td,{children:"netTimestamp"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'FutureBookQuote'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=FutureBookQuote'\n\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureBookQuote\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'updateType|marketStatus|bidPrice1|askPrice1|bidSize1|askSize1|bidOrders1|askOrders1|bidPrice2|askPrice2|bidSize2|askSize2|bidOrders2|askOrders2|bidPrice3|askPrice3|bidSize3|askSize3|bidOrders3|askOrders3|bidPrice4|askPrice4|bidSize4|askSize4|bidOrders4|askOrders4|srcTimestamp|netTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=FutureBookQuote' \\\n--data-urlencode 'view=updateType|marketStatus|bidPrice1|askPrice1|bidSize1|askSize1|bidOrders1|askOrders1|bidPrice2|askPrice2|bidSize2|askSize2|bidOrders2|askOrders2|bidPrice3|askPrice3|bidSize3|askSize3|bidOrders3|askOrders3|bidPrice4|askPrice4|bidSize4|askSize4|bidOrders4|askOrders4|srcTimestamp|netTimestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureBookQuote\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'updateType|marketStatus|bidPrice1|askPrice1|bidSize1|askSize1|bidOrders1|askOrders1|bidPrice2|askPrice2|bidSize2|askSize2|bidOrders2|askOrders2|bidPrice3|askPrice3|bidSize3|askSize3|bidOrders3|askOrders3|bidPrice4|askPrice4|bidSize4|askSize4|bidOrders4|askOrders4|srcTimestamp|netTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'updateType:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=FutureBookQuote' \\\n--data-urlencode 'view=updateType|marketStatus|bidPrice1|askPrice1|bidSize1|askSize1|bidOrders1|askOrders1|bidPrice2|askPrice2|bidSize2|askSize2|bidOrders2|askOrders2|bidPrice3|askPrice3|bidSize3|askSize3|bidOrders3|askOrders3|bidPrice4|askPrice4|bidSize4|askSize4|bidOrders4|askOrders4|srcTimestamp|netTimestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=updateType:ASC'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureBookQuote\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'updateType|marketStatus|bidPrice1|askPrice1|bidSize1|askSize1|bidOrders1|askOrders1|bidPrice2|askPrice2|bidSize2|askSize2|bidOrders2|askOrders2|bidPrice3|askPrice3|bidSize3|askSize3|bidOrders3|askOrders3|bidPrice4|askPrice4|bidSize4|askSize4|bidOrders4|askOrders4|srcTimestamp|netTimestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'updateType|marketStatus\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=FutureBookQuote' \\\n--data-urlencode 'measure=updateType|marketStatus|bidPrice1|askPrice1|bidSize1|askSize1|bidOrders1|askOrders1|bidPrice2|askPrice2|bidSize2|askSize2|bidOrders2|askOrders2|bidPrice3|askPrice3|bidSize3|askSize3|bidOrders3|askOrders3|bidPrice4|askPrice4|bidSize4|askSize4|bidOrders4|askOrders4|srcTimestamp|netTimestamp' \\\n--data-urlencode 'group=updateType|marketStatus' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureBookQuote\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=FutureBookQuote' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,r,s)=>{s.d(r,{A:()=>a});s(96540);var t=s(34164);const n={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:r,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,a),hidden:s,children:r})}},11470:(e,r,s)=>{s.d(r,{A:()=>y});var t=s(96540),n=s(34164),i=s(23104),a=s(56347),d=s(205),l=s(57485),c=s(31682),o=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:s}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function x(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[c,u]=m({queryString:s,groupId:n}),[x,j]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,o.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:n}),b=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function k(e){let{className:r,block:s,selectedValue:t,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const r=e.currentTarget,s=l.indexOf(r),n=d[s].value;n!==t&&(c(r),a(n))},u=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;r=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;r=l[s]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:d.map((e=>{let{value:r,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function f(e){let{lazy:r,children:s,selectedValue:n}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function X(e){const r=x(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,g.jsx)(k,{...r,...e}),(0,g.jsx)(f,{...r,...e})]})}function y(e){const r=(0,j.A)();return(0,g.jsx)(X,{...e,children:u(e.children)},String(r))}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>d});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);