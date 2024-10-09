"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22183],{64337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=r(74848),s=r(28453),i=r(11470),a=r(19365);const l={title:"FuturePrintMarkup"},d="Schema: FuturePrintMarkup (ID: 2605)",c={id:"MessageSchemas/Schema/Topics/market-data-futures/FuturePrintMarkup",title:"FuturePrintMarkup",description:"FuturePrintMarkup records are created for all future prints",source:"@site/docs/MessageSchemas/Schema/Topics/2580-market-data-futures/FuturePrintMarkup.md",sourceDirName:"MessageSchemas/Schema/Topics/2580-market-data-futures",slug:"/MessageSchemas/Schema/Topics/market-data-futures/FuturePrintMarkup",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-futures/FuturePrintMarkup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FuturePrintMarkup"},sidebar:"messageSchemasSidebar",previous:{title:"FuturePrint",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-futures/FuturePrint"},next:{title:"FuturePrintSet",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-futures/FuturePrintSet"}},u={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-futureprintmarkup-id-2605",children:["Schema: FuturePrintMarkup ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 2605)"})]}),"\n",(0,n.jsx)(t.p,{children:"FuturePrintMarkup records are created for all future prints"}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2580-market-data-futures"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"FutAnalytics"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"fkey"}),(0,n.jsx)(t.td,{children:"ExpiryKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"prtNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"Unique print set identifier; will increment but not guaranteed to be sequential."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"underlying stock key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"prtExch"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/FutExch",children:"enum : FutExch"})}),(0,n.jsx)(t.td,{children:"print exchange"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"prtSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"print size [contracts]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"prtPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"print price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"prtType"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{children:"print type [exchange specific]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"prtOrders"}),(0,n.jsx)(t.td,{children:"ushort"}),(0,n.jsx)(t.td,{children:"number of orders participating in this print"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"prtClusterNum"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"incremental print cluster counter (one counter per fkey; used to group prints into clusters)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"prtClusterSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"prtVolume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"cumulative day (electronic) print volume in contracts"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"prtSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,n.jsx)(t.td,{children:"Print side: None; Mid; Bid; Ask"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"bidPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"exch best bid @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"askPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"exch best ask @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"bidSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"bid size @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"askSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"ask size @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"bidPrice2"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"exch 2nd best bid @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"askPrice2"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"exch 2nd best ask @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"bidSize2"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"2nd best bid @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"askSize2"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"2nd best ask @ print arrival time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"srcTimestamp"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"160"}),(0,n.jsx)(t.td,{children:"netTimestamp"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"inbound print packet PTP timestamp from SR gateway switch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"163"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'FuturePrintMarkup'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=FuturePrintMarkup'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePrintMarkup\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'prtNumber|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|prtSide|bidPrice|askPrice|bidSize|askSize|bidPrice2|askPrice2|bidSize2|askSize2|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=FuturePrintMarkup' \\\n--data-urlencode 'view=prtNumber|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|prtSide|bidPrice|askPrice|bidSize|askSize|bidPrice2|askPrice2|bidSize2|askSize2|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePrintMarkup\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'prtNumber|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|prtSide|bidPrice|askPrice|bidSize|askSize|bidPrice2|askPrice2|bidSize2|askSize2|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'prtNumber:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=FuturePrintMarkup' \\\n--data-urlencode 'view=prtNumber|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|prtSide|bidPrice|askPrice|bidSize|askSize|bidPrice2|askPrice2|bidSize2|askSize2|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=prtNumber:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePrintMarkup\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'prtNumber|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|prtSide|bidPrice|askPrice|bidSize|askSize|bidPrice2|askPrice2|bidSize2|askSize2|srcTimestamp|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'prtExch|prtSide\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=FuturePrintMarkup' \\\n--data-urlencode 'measure=prtNumber|ticker|prtExch|prtSize|prtPrice|prtType|prtOrders|prtClusterNum|prtClusterSize|prtVolume|prtSide|bidPrice|askPrice|bidSize|askSize|bidPrice2|askPrice2|bidSize2|askSize2|srcTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'group=prtExch|prtSide' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePrintMarkup\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=FuturePrintMarkup' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),l=r(205),d=r(57485),c=r(31682),u=r(70679);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[a,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,o]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),g=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),j(e)}),[o,j,i]),tabValues:i}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function X(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=d.indexOf(t),s=l[r].value;s!==n&&(c(t),a(s))},o=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:o,onClick:u,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(X,{...t,...e}),(0,b.jsx)(f,{...t,...e})]})}function v(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:o(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);