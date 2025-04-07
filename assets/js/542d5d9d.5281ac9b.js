"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["49317"],{12702:function(e,t,s){s.r(t),s.d(t,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol","title":"OptionTheoVol","description":"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned.","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionTheoVol.md","sourceDirName":"MessageSchemas/Schema/Topics/5030-srse-calculators","slug":"/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"OptionTheoVol"},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionImpliedVolV4","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedVolV4"},"next":{"title":"SpanRiskCalculator","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/srse-calculators/SpanRiskCalculator"}}'),r=s("52676"),l=s("91503"),i=s("71386"),a=s("9641");let d={title:"OptionTheoVol"},c="Schema: OptionTheoVol (ID: 5055)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsxs)(t.h1,{id:"schema-optiontheovol-id-5055",children:["Schema: OptionTheoVol ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5055)"})]})}),"\n",(0,r.jsx)(t.p,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientTheo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTheo"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"okey"}),(0,r.jsx)(t.td,{children:"OptionKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"theoModel"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"required in where clause (theo model must be associated with an accnt that is visible)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"clientFirmOut"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"years"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"volatility years to expiration (variable time metric; SR holiday calendar)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"underlier ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"uprc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"ubid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier bid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"uask"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"obid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option market bid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"oask"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option market ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"tvol"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo vol"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"tvolBOpn"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo buy/open vol"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"tvolSOpn"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo sell/open vol"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"tprc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo vol price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"tbPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo buy (open) price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"tsPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo sell (open) price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"tbClsPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo buy (close) price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"tsClsPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo sell (close) price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"veSlope"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"154"}),(0,r.jsx)(t.td,{children:"de"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"implied greeks (from theo surface)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"157"}),(0,r.jsx)(t.td,{children:"ga"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"th"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"163"}),(0,r.jsx)(t.td,{children:"ve"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"166"}),(0,r.jsx)(t.td,{children:"vo"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"169"}),(0,r.jsx)(t.td,{children:"va"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"172"}),(0,r.jsx)(t.td,{children:"deDecay"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"175"}),(0,r.jsx)(t.td,{children:"ro"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"178"}),(0,r.jsx)(t.td,{children:"ph"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"181"}),(0,r.jsx)(t.td,{children:"sdivB"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"normalized sdiv when buying"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"184"}),(0,r.jsx)(t.td,{children:"sdivS"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"normalized sdiv when selling"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"187"}),(0,r.jsx)(t.td,{children:"xAxis"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"xAxis value (depends on xAxis definition in TheoExpSurface record)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"190"}),(0,r.jsx)(t.td,{children:"tvolAtm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"theo model volatility (atm)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"193"}),(0,r.jsx)(t.td,{children:"ivolAtm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Volatility (atm)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"196"}),(0,r.jsx)(t.td,{children:"svol"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"199"}),(0,r.jsx)(t.td,{children:"sprc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"202"}),(0,r.jsx)(t.td,{children:"sDe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Delta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"205"}),(0,r.jsx)(t.td,{children:"sVe"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Vega"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"208"}),(0,r.jsx)(t.td,{children:"rate"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Rate (average interest rate to expiration)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"211"}),(0,r.jsx)(t.td,{children:"sdiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR SDiv (continuous dividend;accretive with discrete dividends)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"214"}),(0,r.jsx)(t.td,{children:"ddiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR DDiv (sum of discrete dividend amounts prior to expiration)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"217"}),(0,r.jsx)(t.td,{children:"err"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"220"}),(0,r.jsx)(t.td,{children:"theoErr"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"223"}),(0,r.jsx)(t.td,{children:"calcErr"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"226"}),(0,r.jsx)(t.td,{children:"theoStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"229"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionTheoVol'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionTheoVol'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'view=theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'theoModel:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'view=theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=theoModel:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'theoStatus\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'measure=theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp' \\\n--data-urlencode 'group=theoStatus' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9641:function(e,t,s){s.d(t,{Z:()=>l});var n=s("52676");s("75271");var r=s("54461");function l(e){let{children:t,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_SSzl",l),hidden:s,children:t})}},71386:function(e,t,s){s.d(t,{Z:()=>g});var n=s("52676"),r=s("75271"),l=s("54461"),i=s("52289"),a=s("3225"),d=s("42834"),c=s("40578"),o=s("35834"),h=s("79616");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:s}=e;return s.some(e=>e.value===t)}var x=s("44537");function j(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:d}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),h=e=>{let t=e.currentTarget,s=d[c.indexOf(t)].value;s!==r&&(o(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},t),children:d.map(e=>{let{value:t,label:s,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...i,className:(0,l.Z)("tabs__item","tabItem_aitt",i?.className,{"tabs__item--active":r===t}),children:s??t},t)})})}function m(e){let{lazy:t,children:s,selectedValue:i}=e,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:s=!1,groupId:n}=e,l=function(e){let{values:t,children:s}=e;return(0,r.useMemo)(()=>{let e=t??u(s).map(e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,s])}(e),[i,x]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=s.find(e=>e.default)??s[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:l})),[j,m]=function(e){let{queryString:t=!1,groupId:s}=e,n=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c._X)(l),(0,r.useCallback)(e=>{if(!l)return;let t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})},[l,n])]}({queryString:s,groupId:n}),[v,g]=function(e){let{groupId:t}=e,s=t?`docusaurus.tab.${t}`:null,[n,l]=(0,h.Nk)(s);return[n,(0,r.useCallback)(e=>{s&&l.set(e)},[s,l])]}({groupId:n}),f=(()=>{let e=j??v;return p({value:e,tabValues:l})?e:null})();return(0,d.Z)(()=>{f&&x(f)},[f]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);x(e),m(e),g(e)},[m,g,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_ArS0"),children:[(0,n.jsx)(j,{...t,...e}),(0,n.jsx)(m,{...t,...e})]})}function g(e){let t=(0,x.Z)();return(0,n.jsx)(v,{...e,children:u(e.children)},String(t))}},91503:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return i}});var n=s(75271);let r={},l=n.createContext(r);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);