"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53227],{12089:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(74848),t=n(28453),a=n(11470),i=n(19365);const l={title:"MarketHoursConfig"},o="Schema: MarketHoursConfig (ID: 4485)",d={id:"MessageSchemas/Schema/Topics/product-status/MarketHoursConfig",title:"MarketHoursConfig",description:"Expected trading day market schedule for each TradingPeriod and SecType.  Including schedules for equity, futures, and options markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange.Typically includes records for the current week, previous week and next week",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/Topics/4440-product-status/MarketHoursConfig.md",sourceDirName:"MessageSchemas/Schema/Topics/4440-product-status",slug:"/MessageSchemas/Schema/Topics/product-status/MarketHoursConfig",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/product-status/MarketHoursConfig",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{title:"MarketHoursConfig"},sidebar:"messageSchemasSidebar",previous:{title:"4440-product-status",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/product-status/"},next:{title:"NMSCircuitBreaker",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/product-status/NMSCircuitBreaker"}},c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-markethoursconfig-id-4485",children:["Schema: MarketHoursConfig ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4485)"})]}),"\n",(0,r.jsxs)(s.p,{children:["Expected trading day market schedule for each TradingPeriod and SecType.  Including schedules for equity, futures, and options markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Typically includes records for the current week, previous week and next week"]}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"4440-product-status"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"ClientLive"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRLive"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"#"}),(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"10="}),(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:'note: should be "*-ANY-ANY" (wildcard) for the per-TradingPeriod default MarketHoursConfig messages'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"11="}),(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"12="}),(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"13="}),(0,r.jsx)(s.td,{children:"tradingPeriod"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TradingPeriod",children:"enum : TradingPeriod"})}),(0,r.jsx)(s.td,{children:"note: this trading period should be the same for all tradeDates for each [ticker/secType] pair"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"timeZone"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SRTimeZone",children:"enum : SRTimeZone"})}),(0,r.jsx)(s.td,{children:"note: this does not have to match the associated TradingPeriod timeZone (default is TradingPeriod.TimeZone)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"101"}),(0,r.jsx)(s.td,{children:"marketDayType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/MarketDayType",children:"enum : MarketDayType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"102"}),(0,r.jsx)(s.td,{children:"srCloseMarkTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"SR Close Mark Time; usually regular market close - 5 minute (C - 5M)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"103"}),(0,r.jsx)(s.td,{children:"hasEarlySession"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"note: early session can start the previous day"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"104"}),(0,r.jsx)(s.td,{children:"earlyPreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"early session pre-open (orders accepted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"105"}),(0,r.jsx)(s.td,{children:"earlySessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"early session market open"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"106"}),(0,r.jsx)(s.td,{children:"earlySessionCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"early session market close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"107"}),(0,r.jsx)(s.td,{children:"hasRegularSession"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"108"}),(0,r.jsx)(s.td,{children:"regPreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"regular session pre-open (order accepted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"109"}),(0,r.jsx)(s.td,{children:"regSessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"regular session open"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"110"}),(0,r.jsx)(s.td,{children:"regSessionCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"regular session close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"111"}),(0,r.jsx)(s.td,{children:"hasLateSession"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"112"}),(0,r.jsx)(s.td,{children:"latePreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"extended session pre-open (orders accepted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"113"}),(0,r.jsx)(s.td,{children:"lateSessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"extended session open"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"114"}),(0,r.jsx)(s.td,{children:"lateSessionCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"extended session close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"115"}),(0,r.jsx)(s.td,{children:"hasExEarlyClose"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"options have an early close on expiry day (secType = Option only)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"116"}),(0,r.jsx)(s.td,{children:"exEarlyCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"expiry day early close time"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"117"}),(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'MarketHoursConfig'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=MarketHoursConfig'\n\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'view=timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'timeZone:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'view=timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=timeZone:ASC'\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'timeZone|marketDayType|hasEarlySession|hasRegularSession|hasLateSession|hasExEarlyClose\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'measure=timeZone|marketDayType|srCloseMarkTime|hasEarlySession|earlyPreOpenTime|earlySessionOpenTime|earlySessionCloseTime|hasRegularSession|regPreOpenTime|regSessionOpenTime|regSessionCloseTime|hasLateSession|latePreOpenTime|lateSessionOpenTime|lateSessionCloseTime|hasExEarlyClose|exEarlyCloseTime|timestamp' \\\n--data-urlencode 'group=timeZone|marketDayType|hasEarlySession|hasRegularSession|hasLateSession|hasExEarlyClose' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarketHoursConfig\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=MarketHoursConfig' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>i});n(96540);var r=n(34164);const t={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:s,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>S});var r=n(96540),t=n(34164),a=n(23104),i=n(56347),l=n(205),o=n(57485),d=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}}))}(n);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const t=(0,i.W6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(t.location.search);s.set(a,e),t.replace({...t.location,search:s.toString()})}),[a,t])]}function g(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:a}))),[d,u]=p({queryString:n,groupId:t}),[g,x]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,a]=(0,c.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:t}),y=(()=>{const e=d??g;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function T(e){let{className:s,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const s=e.currentTarget,n=o.indexOf(s),t=l[n].value;t!==r&&(d(s),i(t))},u=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,t.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:t}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function X(e){const s=g(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",y.tabList),children:[(0,j.jsx)(T,{...s,...e}),(0,j.jsx)(f,{...s,...e})]})}function S(e){const s=(0,x.A)();return(0,j.jsx)(X,{...e,children:u(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);