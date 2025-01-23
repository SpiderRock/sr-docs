"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10364],{34237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(74848),r=t(28453),s=t(11470),l=t(19365);const i={title:"StockExchImbalanceV2"},c="Schema: StockExchImbalanceV2 (ID: 3020)",o={id:"MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalanceV2",title:"StockExchImbalanceV2",description:"StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close.",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Topics/2990-market-data-stock/StockExchImbalanceV2.md",sourceDirName:"MessageSchemas/Schema/Topics/2990-market-data-stock",slug:"/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalanceV2",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalanceV2",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{title:"StockExchImbalanceV2"},sidebar:"messageSchemasSidebar",previous:{title:"StockExchImbalance",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance"},next:{title:"StockImbalance",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/market-data-stock/StockImbalance"}},d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"schema-stockexchimbalancev2-id-3020",children:["Schema: StockExchImbalanceV2 ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 3020)"})]}),"\n",(0,a.jsxs)(n.p,{children:["StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close."]}),"\n",(0,a.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Topic"}),(0,a.jsx)(n.td,{children:"2990-market-data-stock"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"MLink Token"}),(0,a.jsx)(n.td,{children:"EqtExchImbalance"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SRSE Product"}),(0,a.jsx)(n.td,{children:"SRLive"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"#"}),(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Comment"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"10="}),(0,a.jsx)(n.td,{children:"ticker"}),(0,a.jsx)(n.td,{children:"TickerKey"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"11="}),(0,a.jsx)(n.td,{children:"auctionTime"}),(0,a.jsx)(n.td,{children:"DateTime"}),(0,a.jsx)(n.td,{children:"Projected Auction Time (hhmm)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"12="}),(0,a.jsx)(n.td,{children:"auctionType"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/AuctionReason",children:"enum : AuctionReason"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"13="}),(0,a.jsx)(n.td,{children:"exchange"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/PrimaryExchange",children:"enum : PrimaryExchange"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"100"}),(0,a.jsx)(n.td,{children:"referencePx"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the Reference Price is used to calculate the Indicative Match Price."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"103"}),(0,a.jsx)(n.td,{children:"pairedQty"}),(0,a.jsx)(n.td,{children:"int"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the number of shares paired off at the Indicative Match Price."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"106"}),(0,a.jsx)(n.td,{children:"totalImbalanceQty"}),(0,a.jsx)(n.td,{children:"int"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the total imbalance quantity at the Indicative Match Price."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"109"}),(0,a.jsx)(n.td,{children:"marketImbalanceQty"}),(0,a.jsx)(n.td,{children:"int"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the total market order imbalance quantity at the Indicative Match Price."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"112"}),(0,a.jsx)(n.td,{children:"imbalanceSide"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/ImbalanceSide",children:"enum : ImbalanceSide"})}),(0,a.jsx)(n.td,{children:"The side of the TotalImbalanceQty."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"115"}),(0,a.jsx)(n.td,{children:"continuousBookClrPx"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the price at which all interest on the book can trade, including auction and imbalance offset interest, and disregarding auction collars."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"118"}),(0,a.jsx)(n.td,{children:"closingOnlyClrPx"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the price at which all eligible auction-only interest would trade, subject to auction collars."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"121"}),(0,a.jsx)(n.td,{children:"ssrFillingPx"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, not supported and defaulted to 0."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"124"}),(0,a.jsx)(n.td,{children:"indicativeMatchPx"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"For Pillar-powered markets, the price that has the highest executable volume of auction-eligible shares, subject to auction collars. It includes the non-displayed quantity of Reserve Orders."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"127"}),(0,a.jsx)(n.td,{children:"upperCollar"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"130"}),(0,a.jsx)(n.td,{children:"lowerCollar"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"133"}),(0,a.jsx)(n.td,{children:"auctionStatus"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/AuctionStatus",children:"enum : AuctionStatus"})}),(0,a.jsx)(n.td,{children:"Indicates whether the auction will run."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"136"}),(0,a.jsx)(n.td,{children:"freezeStatus"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"139"}),(0,a.jsx)(n.td,{children:"numExtensions"}),(0,a.jsx)(n.td,{children:"byte"}),(0,a.jsx)(n.td,{children:"Number of times the halt period has been extended."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"142"}),(0,a.jsx)(n.td,{children:"netTimestamp"}),(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"PTP timestamp"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockExchImbalanceV2'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockExchImbalanceV2'\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalanceV2\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|netTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockExchImbalanceV2' \\\n--data-urlencode 'view=referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|netTimestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalanceV2\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|netTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'referencePx:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockExchImbalanceV2' \\\n--data-urlencode 'view=referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|netTimestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=referencePx:ASC'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalanceV2\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|netTimestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'imbalanceSide|auctionStatus|freezeStatus\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockExchImbalanceV2' \\\n--data-urlencode 'measure=referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|netTimestamp' \\\n--data-urlencode 'group=imbalanceSide|auctionStatus|freezeStatus' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalanceV2\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockExchImbalanceV2' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),r=t(34164),s=t(23104),l=t(56347),i=t(205),c=t(57485),o=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,u]=p({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=o??x;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function X(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,b.jsx)(X,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);