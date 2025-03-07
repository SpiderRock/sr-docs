"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69202],{14001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var s=t(74848),r=t(28453),i=t(11470),a=t(19365);const l={title:"StockQuoteProbability"},d="Schema: StockQuoteProbability (ID: 4280)",c={id:"MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability",title:"StockQuoteProbability",description:"METADATA",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/4255-probabilities/StockQuoteProbability.md",sourceDirName:"MessageSchemas/Schema/Topics/4255-probabilities",slug:"/MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"StockQuoteProbability"},sidebar:"messageSchemasSidebar",previous:{title:"StockPrintProbability",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/probabilities/StockPrintProbability"},next:{title:"4335-product-definition",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/product-definition/"}},o={},m=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"schema-stockquoteprobability-id-4280",children:["Schema: StockQuoteProbability ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4280)"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"4255-probabilities"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"StkProbModel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"ticker"}),(0,s.jsx)(n.td,{children:"TickerKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"stateModel"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"bidPrice"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"nbbo bid price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"askPrice"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"nbbo ask price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"bidSize"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"cumulative size @ bid price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"askSize"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"cumulative size @ ask price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"bidTakeProb"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"bid take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"askTakeProb"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"ask take probability of current nbbo market (zero exchange fee) [average size print]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"bidTakeRv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"askTakeRv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,s.jsx)(n.td,{children:"model result code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"bidImprPrice"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside bidPrice)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"askImprPrice"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"trial improvement price (usually 1 tick or 1/2 spread inside askPrice)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"bidTkImProb"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"bid take imprv probability of current nbbo market (zero exchange fee) [prob to sell (take) @ bid + imprIncrement]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"askTkImProb"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"ask take imprv probability of current nbbo market (zero exchange fee) [prob to buy (take) @ ask - imprIncrement]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"bidTkImRv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,s.jsx)(n.td,{children:"model result code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"139"}),(0,s.jsx)(n.td,{children:"askTkImRv"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PredictResult",children:"enum : PredictResult"})}),(0,s.jsx)(n.td,{children:"model result code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"142"}),(0,s.jsx)(n.td,{children:"midPrice"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"price corresponding to 0.50 probability"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"145"}),(0,s.jsx)(n.td,{children:"avgBidLink1m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"average bid link value (~1 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"148"}),(0,s.jsx)(n.td,{children:"maeBidLink1m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"151"}),(0,s.jsx)(n.td,{children:"avgAskLink1m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"average ask link value (~1 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"154"}),(0,s.jsx)(n.td,{children:"maeAskLink1m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"ask link value mean abs err (~1 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"157"}),(0,s.jsx)(n.td,{children:"avgBidLink10m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"average bid link value (~10 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"160"}),(0,s.jsx)(n.td,{children:"maeBidLink10m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"bid link value mean abs err (~10 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"163"}),(0,s.jsx)(n.td,{children:"avgAskLink10m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"average ask link value (~10 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"166"}),(0,s.jsx)(n.td,{children:"maeAskLink10m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"ask link value mean abs err (~10 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"169"}),(0,s.jsx)(n.td,{children:"avgMktWidth1m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"askPrice - bidPrice (~1 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"172"}),(0,s.jsx)(n.td,{children:"avgMktWidth10m"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"askPrice - bidPrice (~10 min)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"175"}),(0,s.jsx)(n.td,{children:"counter"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"record update counter (zero @ start of period;per ticker)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"178"}),(0,s.jsx)(n.td,{children:"qpSource"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/QPSource",children:"enum : QPSource"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"181"}),(0,s.jsx)(n.td,{children:"srcTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"feed timestamp from the packet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"184"}),(0,s.jsx)(n.td,{children:"netTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"inbound packet PTP timestamp from SR gateway switch (from StockBookQuote);zero = size only change"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"187"}),(0,s.jsx)(n.td,{children:"smsTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"state model server timestamp (just before publish)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockQuoteProbability'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockQuoteProbability'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockQuoteProbability\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'bidPrice|askPrice|bidSize|askSize|bidTakeProb|askTakeProb|bidTakeRv|askTakeRv|bidImprPrice|askImprPrice|bidTkImProb|askTkImProb|bidTkImRv|askTkImRv|midPrice|avgBidLink1m|maeBidLink1m|avgAskLink1m|maeAskLink1m|avgBidLink10m|maeBidLink10m|avgAskLink10m|maeAskLink10m|avgMktWidth1m|avgMktWidth10m|counter|qpSource|srcTimestamp|netTimestamp|smsTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockQuoteProbability' \\\n--data-urlencode 'view=bidPrice|askPrice|bidSize|askSize|bidTakeProb|askTakeProb|bidTakeRv|askTakeRv|bidImprPrice|askImprPrice|bidTkImProb|askTkImProb|bidTkImRv|askTkImRv|midPrice|avgBidLink1m|maeBidLink1m|avgAskLink1m|maeAskLink1m|avgBidLink10m|maeBidLink10m|avgAskLink10m|maeAskLink10m|avgMktWidth1m|avgMktWidth10m|counter|qpSource|srcTimestamp|netTimestamp|smsTimestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockQuoteProbability\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'bidPrice|askPrice|bidSize|askSize|bidTakeProb|askTakeProb|bidTakeRv|askTakeRv|bidImprPrice|askImprPrice|bidTkImProb|askTkImProb|bidTkImRv|askTkImRv|midPrice|avgBidLink1m|maeBidLink1m|avgAskLink1m|maeAskLink1m|avgBidLink10m|maeBidLink10m|avgAskLink10m|maeAskLink10m|avgMktWidth1m|avgMktWidth10m|counter|qpSource|srcTimestamp|netTimestamp|smsTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'bidPrice:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockQuoteProbability' \\\n--data-urlencode 'view=bidPrice|askPrice|bidSize|askSize|bidTakeProb|askTakeProb|bidTakeRv|askTakeRv|bidImprPrice|askImprPrice|bidTkImProb|askTkImProb|bidTkImRv|askTkImRv|midPrice|avgBidLink1m|maeBidLink1m|avgAskLink1m|maeAskLink1m|avgBidLink10m|maeBidLink10m|avgAskLink10m|maeAskLink10m|avgMktWidth1m|avgMktWidth10m|counter|qpSource|srcTimestamp|netTimestamp|smsTimestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=bidPrice:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockQuoteProbability\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'bidPrice|askPrice|bidSize|askSize|bidTakeProb|askTakeProb|bidTakeRv|askTakeRv|bidImprPrice|askImprPrice|bidTkImProb|askTkImProb|bidTkImRv|askTkImRv|midPrice|avgBidLink1m|maeBidLink1m|avgAskLink1m|maeAskLink1m|avgBidLink10m|maeBidLink10m|avgAskLink10m|maeAskLink10m|avgMktWidth1m|avgMktWidth10m|counter|qpSource|srcTimestamp|netTimestamp|smsTimestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'bidTakeRv|askTakeRv|bidTkImRv|askTkImRv|qpSource\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockQuoteProbability' \\\n--data-urlencode 'measure=bidPrice|askPrice|bidSize|askSize|bidTakeProb|askTakeProb|bidTakeRv|askTakeRv|bidImprPrice|askImprPrice|bidTkImProb|askTkImProb|bidTkImRv|askTkImRv|midPrice|avgBidLink1m|maeBidLink1m|avgAskLink1m|maeAskLink1m|avgBidLink10m|maeBidLink10m|avgAskLink10m|maeAskLink10m|avgMktWidth1m|avgMktWidth10m|counter|qpSource|srcTimestamp|netTimestamp|smsTimestamp' \\\n--data-urlencode 'group=bidTakeRv|askTakeRv|bidTkImRv|askTkImRv|qpSource' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockQuoteProbability\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockQuoteProbability' \\\n--data-urlencode 'where='\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>f});var s=t(96540),r=t(34164),i=t(23104),a=t(56347),l=t(205),d=t(57485),c=t(31682),o=t(70679);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[a,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,m]=k({queryString:t,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),x=(()=>{const e=c??p;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&d(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),m(e),b(e)}),[m,b,i]),tabValues:i}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),r=l[t].value;r!==s&&(c(n),a(r))},m=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:m,onClick:o,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function P(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function f(e){const n=(0,b.A)();return(0,j.jsx)(P,{...e,children:m(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);