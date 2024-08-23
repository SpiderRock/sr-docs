"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31002],{42057:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=s(74848),r=s(28453),l=s(11470),i=s(19365);const a={title:"OptionTheoVol"},d="Schema: OptionTheoVol (ID: 5055)",c={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",title:"OptionTheoVol",description:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionTheoVol.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionTheoVol"},sidebar:"messageSchemasSidebar",previous:{title:"OptionImpliedVol",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedVol"},next:{title:"SpanRiskCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/SpanRiskCalculator"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-optiontheovol-id-5055",children:["Schema: OptionTheoVol ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 5055)"})]}),"\n",(0,n.jsx)(t.p,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"5030-srse-calculators"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRTheo"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"okey"}),(0,n.jsx)(t.td,{children:"OptionKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"theoModel"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"required in where clause (theo model must be associated with an accnt that is visible)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"clientFirmOut"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"years"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"volatility years to expiration (variable time metric; SR holiday calendar)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"underlier ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"uprc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"underlier price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"ubid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"underlier bid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"uask"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"underlier ask"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"obid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"option market bid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"oask"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"option market ask"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"tvol"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo vol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"tvolBOpn"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo buy/open vol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"tvolSOpn"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo sell/open vol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"tprc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo vol price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"tbPrc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo buy (open) price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"tsPrc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo sell (open) price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"tbClsPrc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo buy (close) price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"tsClsPrc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo sell (close) price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"veSlope"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"de"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"implied greeks (from theo surface)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"ga"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"160"}),(0,n.jsx)(t.td,{children:"th"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"163"}),(0,n.jsx)(t.td,{children:"ve"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"166"}),(0,n.jsx)(t.td,{children:"vo"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"169"}),(0,n.jsx)(t.td,{children:"va"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"172"}),(0,n.jsx)(t.td,{children:"deDecay"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"175"}),(0,n.jsx)(t.td,{children:"ro"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"178"}),(0,n.jsx)(t.td,{children:"ph"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"181"}),(0,n.jsx)(t.td,{children:"sdivB"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"normalized sdiv when buying"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"184"}),(0,n.jsx)(t.td,{children:"sdivS"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"normalized sdiv when selling"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"187"}),(0,n.jsx)(t.td,{children:"xAxis"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"xAxis value (depends on xAxis definition in TheoExpSurface record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"190"}),(0,n.jsx)(t.td,{children:"tvolAtm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"theo model volatility (atm)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"193"}),(0,n.jsx)(t.td,{children:"ivolAtm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Surface Volatility (atm)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"196"}),(0,n.jsx)(t.td,{children:"svol"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Surface Volatility"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"199"}),(0,n.jsx)(t.td,{children:"sprc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Surface Price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"202"}),(0,n.jsx)(t.td,{children:"sDe"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Surface Delta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"205"}),(0,n.jsx)(t.td,{children:"sVe"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Surface Vega"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"208"}),(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Rate (average interest rate to expiration)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"211"}),(0,n.jsx)(t.td,{children:"sdiv"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR SDiv (continuous dividend;accretive with discrete dividends)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"214"}),(0,n.jsx)(t.td,{children:"ddiv"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR DDiv (sum of discrete dividend amounts prior to expiration)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"217"}),(0,n.jsx)(t.td,{children:"err"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"220"}),(0,n.jsx)(t.td,{children:"theoErr"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"223"}),(0,n.jsx)(t.td,{children:"calcErr"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"226"}),(0,n.jsx)(t.td,{children:"theoStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"229"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionTheoVol'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionTheoVol'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'view=theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'theoModel:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'view=theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=theoModel:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'theoStatus\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'measure=theoModel|clientFirmOut|years|ticker|uprc|ubid|uask|obid|oask|tvol|tvolBOpn|tvolSOpn|tprc|tbPrc|tsPrc|tbClsPrc|tsClsPrc|veSlope|de|ga|th|ve|vo|va|deDecay|ro|ph|sdivB|sdivS|xAxis|tvolAtm|ivolAtm|svol|sprc|sDe|sVe|rate|sdiv|ddiv|err|theoErr|calcErr|theoStatus|timestamp' \\\n--data-urlencode 'group=theoStatus' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionTheoVol\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionTheoVol' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(34164);const r={tabItem:"tabItem_Ymn6"};var l=s(74848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>y});var n=s(96540),r=s(34164),l=s(23104),i=s(56347),a=s(205),d=s(57485),c=s(31682),o=s(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,d.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function j(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,l=u(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,h]=x({queryString:s,groupId:r}),[j,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),v=(()=>{const e=c??j;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{v&&d(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=s(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function f(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),o=e=>{const t=e.currentTarget,s=d.indexOf(t),r=a[s].value;r!==n&&(c(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;t=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;t=d[s]??d[d.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:a.map((e=>{let{value:t,label:s,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:h,onClick:o,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function X(e){let{lazy:t,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=j(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(X,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);