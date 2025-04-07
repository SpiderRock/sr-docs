"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["11183"],{31871:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>a,assets:()=>d,toc:()=>h,contentTitle:()=>o});var a=JSON.parse('{"id":"MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance","title":"StockExchImbalance","description":"StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close.","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2990-market-data-stock/StockExchImbalance.md","sourceDirName":"MessageSchemas/Schema/Topics/2990-market-data-stock","slug":"/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalance","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"StockExchImbalance"},"sidebar":"messageSchemasSidebar","previous":{"title":"StockBookQuote","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-stock/StockBookQuote"},"next":{"title":"StockExchImbalanceV2","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalanceV2"}}'),r=t("52676"),s=t("91503"),l=t("71386"),i=t("9641");let c={title:"StockExchImbalance"},o="Schema: StockExchImbalance (ID: 3015)",d={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"schema-stockexchimbalance-id-3015",children:["Schema: StockExchImbalance ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3015)"})]})}),"\n",(0,r.jsxs)(n.p,{children:["StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"2990-market-data-stock"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientLive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRLive"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10="}),(0,r.jsx)(n.td,{children:"ticker"}),(0,r.jsx)(n.td,{children:"TickerKey"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11="}),(0,r.jsx)(n.td,{children:"auctionTime"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"Projected Auction Time (hhmm)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12="}),(0,r.jsx)(n.td,{children:"auctionType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AuctionReason",children:"enum : AuctionReason"})}),(0,r.jsx)(n.td,{children:"Auction type: None; Open; Market; Halt; Closing; RegulatoryImbalance"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13="}),(0,r.jsx)(n.td,{children:"exchange"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PrimaryExchange",children:"enum : PrimaryExchange"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"referencePx"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the Reference Price is used to calculate the Indicative Match Price."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"pairedQty"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the number of shares paired off at the Indicative Match Price."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"106"}),(0,r.jsx)(n.td,{children:"totalImbalanceQty"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the total imbalance quantity at the Indicative Match Price. If the value is negative, the imbalance is on the sell side; if the value is positive, the imbalance is on the buy side."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"109"}),(0,r.jsx)(n.td,{children:"marketImbalanceQty"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the total market order imbalance quantity at the Indicative Match Price. If the value is negative, the imbalance is on the sell side; if the value is positive the imbalance is on the buy side."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"imbalanceSide"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ImbalanceSide",children:"enum : ImbalanceSide"})}),(0,r.jsx)(n.td,{children:"The side of the TotalImbalanceQty."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"continuousBookClrPx"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the price at which all interest on the book can trade, including auction and imbalance offset interest, and disregarding auction collars."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"closingOnlyClrPx"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the price at which all eligible auction-only interest would trade, subject to auction collars."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"121"}),(0,r.jsx)(n.td,{children:"ssrFillingPx"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, not supported and defaulted to 0."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"124"}),(0,r.jsx)(n.td,{children:"indicativeMatchPx"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"For Pillar-powered markets, the price that has the highest executable volume of auction-eligible shares, subject to auction collars. It includes the non-displayed quantity of Reserve Orders."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"upperCollar"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"lowerCollar"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"If the IndicativeMatchPrice is not strictly between the UpperCollar and the LowerCollar, special auction rules apply. See Rule 7.35P for details."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"auctionStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AuctionStatus",children:"enum : AuctionStatus"})}),(0,r.jsx)(n.td,{children:"Indicates whether the auction will run."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"136"}),(0,r.jsx)(n.td,{children:"freezeStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"Indicates freeze"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"numExtensions"}),(0,r.jsx)(n.td,{children:"byte"}),(0,r.jsx)(n.td,{children:"Number of times the halt period has been extended."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"142"}),(0,r.jsx)(n.td,{children:"sourceTime"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"Time record was generated in the order book (in seconds)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"145"}),(0,r.jsx)(n.td,{children:"netTimestamp"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"PTP timestamp"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockExchImbalance'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockExchImbalance'\n\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalance\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|sourceTime|netTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockExchImbalance' \\\n--data-urlencode 'view=referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|sourceTime|netTimestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalance\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|sourceTime|netTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'referencePx:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockExchImbalance' \\\n--data-urlencode 'view=referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|sourceTime|netTimestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=referencePx:ASC'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalance\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|sourceTime|netTimestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'imbalanceSide|auctionStatus|freezeStatus\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockExchImbalance' \\\n--data-urlencode 'measure=referencePx|pairedQty|totalImbalanceQty|marketImbalanceQty|imbalanceSide|continuousBookClrPx|closingOnlyClrPx|ssrFillingPx|indicativeMatchPx|upperCollar|lowerCollar|auctionStatus|freezeStatus|numExtensions|sourceTime|netTimestamp' \\\n--data-urlencode 'group=imbalanceSide|auctionStatus|freezeStatus' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockExchImbalance\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockExchImbalance' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9641:function(e,n,t){t.d(n,{Z:()=>s});var a=t("52676");t("75271");var r=t("54461");function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_SSzl",s),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>f});var a=t("52676"),r=t("75271"),s=t("54461"),l=t("52289"),i=t("3225"),c=t("42834"),o=t("40578"),d=t("35834"),h=t("79616");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=c[o.indexOf(n)].value;t!==r&&(d(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:h,...l,className:(0,s.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:s})),[x,g]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})},[s,a])]}({queryString:t,groupId:a}),[j,f]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,s]=(0,h.Nk)(t);return[a,(0,r.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:a}),b=(()=>{let e=x??j;return m({value:e,tabValues:s})?e:null})();return(0,c.Z)(()=>{b&&p(b)},[b]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),f(e)},[g,f,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_ArS0"),children:[(0,a.jsx)(x,{...n,...e}),(0,a.jsx)(g,{...n,...e})]})}function f(e){let n=(0,p.Z)();return(0,a.jsx)(j,{...e,children:u(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var a=t(75271);let r={},s=a.createContext(r);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);