"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["52057"],{95471:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>d});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/product-status/MarketHoursConfig","title":"MarketHoursConfig","description":"Expected trading day market schedule for each TradingPeriod and SecType.  Including schedules for equity, futures, and options markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange.Typically includes records for the current week, previous week and next week","source":"@site/docs/MessageSchemas/Schema/Topics/4440-product-status/MarketHoursConfig.md","sourceDirName":"MessageSchemas/Schema/Topics/4440-product-status","slug":"/MessageSchemas/Schema/Topics/product-status/MarketHoursConfig","permalink":"/docs/next/MessageSchemas/Schema/Topics/product-status/MarketHoursConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MarketHoursConfig"},"sidebar":"messageSchemasSidebar","previous":{"title":"4440-product-status","permalink":"/docs/next/MessageSchemas/Schema/Topics/product-status/"},"next":{"title":"NMSCircuitBreaker","permalink":"/docs/next/MessageSchemas/Schema/Topics/product-status/NMSCircuitBreaker"}}'),a=n("52676"),t=n("91503"),i=n("71386"),l=n("9641");let o={title:"MarketHoursConfig"},d="Schema: MarketHoursConfig (ID: 4485)",c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsxs)(s.h1,{id:"schema-markethoursconfig-id-4485",children:["Schema: MarketHoursConfig ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 4485)"})]})}),"\n",(0,a.jsxs)(s.p,{children:["Expected trading day market schedule for each TradingPeriod and SecType.  Including schedules for equity, futures, and options markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Typically includes records for the current week, previous week and next week"]}),"\n",(0,a.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Attribute"}),(0,a.jsx)(s.th,{children:"Value"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Topic"}),(0,a.jsx)(s.td,{children:"4440-product-status"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"MLink Token"}),(0,a.jsx)(s.td,{children:"ClientLive"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"SRSE Product"}),(0,a.jsx)(s.td,{children:"SRLive"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"#"}),(0,a.jsx)(s.th,{children:"Field"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{children:"Comment"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"10="}),(0,a.jsx)(s.td,{children:"ticker"}),(0,a.jsx)(s.td,{children:"TickerKey"}),(0,a.jsx)(s.td,{children:'note: should be "*-ANY-ANY" (wildcard) for the per-TradingPeriod default MarketHoursConfig messages'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"11="}),(0,a.jsx)(s.td,{children:"secType"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,a.jsx)(s.td,{})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"12="}),(0,a.jsx)(s.td,{children:"tradeDate"}),(0,a.jsx)(s.td,{children:"DateKey"}),(0,a.jsx)(s.td,{})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"13="}),(0,a.jsx)(s.td,{children:"tradingPeriod"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/TradingPeriod",children:"enum : TradingPeriod"})}),(0,a.jsx)(s.td,{children:"note: this trading period should be the same for all tradeDates for each [ticker/secType] pair"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"100"}),(0,a.jsx)(s.td,{children:"timeZone"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/SRTimeZone",children:"enum : SRTimeZone"})}),(0,a.jsx)(s.td,{children:"note: this does not have to match the associated TradingPeriod timeZone (default is TradingPeriod.TimeZone)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"101"}),(0,a.jsx)(s.td,{children:"marketDayType"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/MarketDayType",children:"enum : MarketDayType"})}),(0,a.jsx)(s.td,{})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"102"}),(0,a.jsx)(s.td,{children:"srCloseMarkTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"SR Close Mark Time; usually regular market close - 5 minute (C - 5M)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"103"}),(0,a.jsx)(s.td,{children:"hasEarlySession"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(s.td,{children:"note: early session can start the previous day"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"104"}),(0,a.jsx)(s.td,{children:"earlyPreOpenTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"early session pre-open (orders accepted)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"105"}),(0,a.jsx)(s.td,{children:"earlySessionOpenTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"early session market open"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"106"}),(0,a.jsx)(s.td,{children:"earlySessionCloseTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"early session market close"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"107"}),(0,a.jsx)(s.td,{children:"hasRegularSession"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(s.td,{})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"108"}),(0,a.jsx)(s.td,{children:"regPreOpenTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"regular session pre-open (order accepted)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"109"}),(0,a.jsx)(s.td,{children:"regSessionOpenTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"regular session open"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"110"}),(0,a.jsx)(s.td,{children:"regSessionCloseTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"regular session close"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"111"}),(0,a.jsx)(s.td,{children:"hasLateSession"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(s.td,{})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"112"}),(0,a.jsx)(s.td,{children:"latePreOpenTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"extended session pre-open (orders accepted)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"113"}),(0,a.jsx)(s.td,{children:"lateSessionOpenTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"extended session open"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"114"}),(0,a.jsx)(s.td,{children:"lateSessionCloseTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"extended session close"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"115"}),(0,a.jsx)(s.td,{children:"hasExEarlyClose"}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(s.td,{children:"options have an early close on expiry day (secType = Option only)"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"116"}),(0,a.jsx)(s.td,{children:"exEarlyCloseTime"}),(0,a.jsx)(s.td,{children:"TimeSpan"}),(0,a.jsx)(s.td,{children:"expiry day early close time"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"117"}),(0,a.jsx)(s.td,{children:"timestamp"}),(0,a.jsx)(s.td,{children:"DateTime"}),(0,a.jsx)(s.td,{})]})]})]}),"\n",(0,a.jsx)(s.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'MarketHoursConfig'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=MarketHoursConfig'\n\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'view=timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'timeZone:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'view=timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=timeZone:ASC'\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'timeZone|marketDayType|hasEarlySession|hasRegularSession|hasLateSession|hasExEarlyClose\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'measure=timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp' \\\n--data-urlencode 'group=timeZone|marketDayType|hasEarlySession|hasRegularSession|hasLateSession|hasExEarlyClose' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9641:function(e,s,n){n.d(s,{Z:()=>t});var r=n("52676");n("75271");var a=n("54461");function t(e){let{children:s,hidden:n,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_SSzl",t),hidden:n,children:s})}},71386:function(e,s,n){n.d(s,{Z:()=>j});var r=n("52676"),a=n("75271"),t=n("54461"),i=n("52289"),l=n("3225"),o=n("42834"),d=n("40578"),c=n("35834"),h=n("79616");function u(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:s,tabValues:n}=e;return n.some(e=>e.value===s)}var p=n("44537");function x(e){let{className:s,block:n,selectedValue:a,selectValue:l,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),h=e=>{let s=e.currentTarget,n=o[d.indexOf(s)].value;n!==a&&(c(s),l(n))},u=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;s=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;s=d[n]??d[d.length-1]}}s?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},s),children:o.map(e=>{let{value:s,label:n,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>d.push(e),onKeyDown:u,onClick:h,...i,className:(0,t.Z)("tabs__item","tabItem_aitt",i?.className,{"tabs__item--active":a===s}),children:n??s},s)})})}function g(e){let{lazy:s,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==i}))})}function y(e){let s=function(e){let{defaultValue:s,queryString:n=!1,groupId:r}=e,t=function(e){let{values:s,children:n}=e;return(0,a.useMemo)(()=>{let e=s??u(n).map(e=>{let{props:{value:s,label:n,attributes:r,default:a}}=e;return{value:s,label:n,attributes:r,default:a}});return!function(e){let s=(0,c.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,n])}(e),[i,p]=(0,a.useState)(()=>(function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:s,tabValues:t})),[x,g]=function(e){let{queryString:s=!1,groupId:n}=e,r=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,d._X)(t),(0,a.useCallback)(e=>{if(!t)return;let s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})},[t,r])]}({queryString:n,groupId:r}),[y,j]=function(e){let{groupId:s}=e,n=s?`docusaurus.tab.${s}`:null,[r,t]=(0,h.Nk)(n);return[r,(0,a.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:r}),T=(()=>{let e=x??y;return m({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{T&&p(T)},[T]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),j(e)},[g,j,t]),tabValues:t}}(e);return(0,r.jsxs)("div",{className:(0,t.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(x,{...s,...e}),(0,r.jsx)(g,{...s,...e})]})}function j(e){let s=(0,p.Z)();return(0,r.jsx)(y,{...e,children:u(e.children)},String(s))}},91503:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var r=n(75271);let a={},t=r.createContext(a);function i(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);