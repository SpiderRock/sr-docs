"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49859],{17558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),a=n(11470),i=n(19365);const l={title:"StockPrint"},d="Schema: StockPrint (ID: 3045)",c={id:"MessageSchemas/Schema/Topics/market-data-stock/StockPrint",title:"StockPrint",description:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well.",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/Topics/2990-market-data-stock/StockPrint.md",sourceDirName:"MessageSchemas/Schema/Topics/2990-market-data-stock",slug:"/MessageSchemas/Schema/Topics/market-data-stock/StockPrint",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/market-data-stock/StockPrint",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{title:"StockPrint"},sidebar:"messageSchemasSidebar",previous:{title:"StockMarketSummary",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/market-data-stock/StockMarketSummary"},next:{title:"StockPrintMarkup",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/market-data-stock/StockPrintMarkup"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-stockprint-id-3045",children:["Schema: StockPrint ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3045)"})]}),"\n",(0,r.jsx)(t.p,{children:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"EqtMktData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"prtExch"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,r.jsx)(t.td,{children:"print exch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"prtSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"print size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"prtPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"prtClusterNum"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"incremental print cluster counter (one counter per ticker; used to group prints into clusters)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"prtClusterSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"prtVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"cumulative print size today"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"mrkPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"last regular market print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"clsPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"official closing price (if available)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"prtType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkPrintType",children:"enum : StkPrintType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"164"}),(0,r.jsx)(t.td,{children:"printCodes"}),(0,r.jsx)(t.td,{children:"string(18)"}),(0,r.jsx)(t.td,{children:"European trade condition codes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"prtCond1"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"print condition (from SIP feed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"prtCond2"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"prtCond3"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"prtCond4"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"ebid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"exchange bid (@ print time) [SIP feed]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"eask"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"exchange ask (@ print time) [SIP feed]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"ebsz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"exchange bid size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"easz"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"exchange ask size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"eage"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"154"}),(0,r.jsx)(t.td,{children:"prtSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"157"}),(0,r.jsx)(t.td,{children:"prtTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch; usually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"163"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockPrint'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockPrint'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPrint\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtVolume|mrkPrice|clsPrice|prtType|printCodes|prtCond1|prtCond2|prtCond3|prtCond4|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockPrint' \\\n--data-urlencode 'view=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtVolume|mrkPrice|clsPrice|prtType|printCodes|prtCond1|prtCond2|prtCond3|prtCond4|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPrint\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtVolume|mrkPrice|clsPrice|prtType|printCodes|prtCond1|prtCond2|prtCond3|prtCond4|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'prtExch:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockPrint' \\\n--data-urlencode 'view=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtVolume|mrkPrice|clsPrice|prtType|printCodes|prtCond1|prtCond2|prtCond3|prtCond4|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=printCodes:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=prtExch:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPrint\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtVolume|mrkPrice|clsPrice|prtType|printCodes|prtCond1|prtCond2|prtCond3|prtCond4|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'prtExch|prtType|prtSide\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockPrint' \\\n--data-urlencode 'measure=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtVolume|mrkPrice|clsPrice|prtType|printCodes|prtCond1|prtCond2|prtCond3|prtCond4|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'group=prtExch|prtType|prtSide' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPrint\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockPrint' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),s=n(34164),a=n(23104),i=n(56347),l=n(205),d=n(57485),c=n(31682),o=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var X=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),s=l[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,X.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,X.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,X.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=x(e);return(0,X.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,X.jsx)(f,{...t,...e}),(0,X.jsx)(y,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,X.jsx)(b,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);