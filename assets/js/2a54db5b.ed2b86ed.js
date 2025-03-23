"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69960],{38487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(74848),s=n(28453),i=n(11470),a=n(19365);const l={title:"OptionImpliedPair"},c="Schema: OptionImpliedPair (ID: 5035)",d={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedPair",title:"OptionImpliedPair",description:"This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market.",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionImpliedPair.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedPair",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedPair",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{title:"OptionImpliedPair"},sidebar:"messageSchemasSidebar",previous:{title:"OptionCalculator",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator"},next:{title:"OptionImpliedVol",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedVol"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-optionimpliedpair-id-5035",children:["Schema: OptionImpliedPair ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5035)"})]}),"\n",(0,r.jsx)(t.p,{children:"This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"Internal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"okey"}),(0,r.jsx)(t.td,{children:"OptionKey"}),(0,r.jsx)(t.td,{children:"cp = Call"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"uprc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier price (usually mid-market)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"years"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"years to expiration"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"rate"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"interest rate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"sdiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"sdiv (stock dividend) rate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"ddiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"cumulative discrete dividend values"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"symbolRatio"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"effUPrc = uprc * symbolRatio"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"strikeRatio"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"effStrike = okey_xx * strikeRatio"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"cashOnExercise"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"cash on exercise (multihedge only)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"xAxis"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option xAxis moneyness"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"axisFUPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option xAxis Fwd UPrc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"axisVolRT"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option xAxis moneyness volatility x sqrt(years)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"cbid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"call option bid price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"cask"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"call option ask price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"cbiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"volatility implied by option bid price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"caiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"volatility implied by option ask price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"catm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"call option atm volatility (from SR surface)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"cvol"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"call option surface volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"154"}),(0,r.jsx)(t.td,{children:"cprc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"call option surface price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"157"}),(0,r.jsx)(t.td,{children:"cde"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option delta (from cvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"cga"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option gamma (from cvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"163"}),(0,r.jsx)(t.td,{children:"cth"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option theta (from cvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"166"}),(0,r.jsx)(t.td,{children:"cve"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option vega (from cvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"169"}),(0,r.jsx)(t.td,{children:"cro"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option rho (from cvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"172"}),(0,r.jsx)(t.td,{children:"cph"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option phi (from cvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"175"}),(0,r.jsx)(t.td,{children:"pbid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"put option bid price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"178"}),(0,r.jsx)(t.td,{children:"pask"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"put option ask price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"181"}),(0,r.jsx)(t.td,{children:"pbiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"volatility implied by option bid price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"184"}),(0,r.jsx)(t.td,{children:"paiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"volatility implied by option ask price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"187"}),(0,r.jsx)(t.td,{children:"patm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"put option atm volatility (from SR surface)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"190"}),(0,r.jsx)(t.td,{children:"pvol"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"put option surface volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"193"}),(0,r.jsx)(t.td,{children:"pprc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"put option surface price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"196"}),(0,r.jsx)(t.td,{children:"pde"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option delta (from pvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"199"}),(0,r.jsx)(t.td,{children:"pga"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option gamma (from pvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"202"}),(0,r.jsx)(t.td,{children:"pth"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option theta (from pvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"205"}),(0,r.jsx)(t.td,{children:"pve"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option vega (from pvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"208"}),(0,r.jsx)(t.td,{children:"pro"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option rho (from pvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"211"}),(0,r.jsx)(t.td,{children:"pph"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"option phi (from pvol)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"214"}),(0,r.jsx)(t.td,{children:"calcErr"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{children:"option pricing error (if any)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"217"}),(0,r.jsx)(t.td,{children:"calcSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CalcSource",children:"enum : CalcSource"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"220"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionImpliedPair'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionImpliedPair'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionImpliedPair\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|uprc|years|rate|sdiv|ddiv|symbolRatio|strikeRatio|cashOnExercise|xAxis|axisFUPrc|axisVolRT|cbid|cask|cbiv|caiv|catm|cvol|cprc|cde|cga|cth|cve|cro|cph|pbid|pask|pbiv|paiv|patm|pvol|pprc|pde|pga|pth|pve|pro|pph|calcErr|calcSource|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionImpliedPair' \\\n--data-urlencode 'view=ticker|uprc|years|rate|sdiv|ddiv|symbolRatio|strikeRatio|cashOnExercise|xAxis|axisFUPrc|axisVolRT|cbid|cask|cbiv|caiv|catm|cvol|cprc|cde|cga|cth|cve|cro|cph|pbid|pask|pbiv|paiv|patm|pvol|pprc|pde|pga|pth|pve|pro|pph|calcErr|calcSource|timestamp' \\\n--data-urlencode 'where=calcErr:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionImpliedPair\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|uprc|years|rate|sdiv|ddiv|symbolRatio|strikeRatio|cashOnExercise|xAxis|axisFUPrc|axisVolRT|cbid|cask|cbiv|caiv|catm|cvol|cprc|cde|cga|cth|cve|cro|cph|pbid|pask|pbiv|paiv|patm|pvol|pprc|pde|pga|pth|pve|pro|pph|calcErr|calcSource|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionImpliedPair' \\\n--data-urlencode 'view=ticker|uprc|years|rate|sdiv|ddiv|symbolRatio|strikeRatio|cashOnExercise|xAxis|axisFUPrc|axisVolRT|cbid|cask|cbiv|caiv|catm|cvol|cprc|cde|cga|cth|cve|cro|cph|pbid|pask|pbiv|paiv|patm|pvol|pprc|pde|pga|pth|pve|pro|pph|calcErr|calcSource|timestamp' \\\n--data-urlencode 'where=calcErr:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionImpliedPair\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|uprc|years|rate|sdiv|ddiv|symbolRatio|strikeRatio|cashOnExercise|xAxis|axisFUPrc|axisVolRT|cbid|cask|cbiv|caiv|catm|cvol|cprc|cde|cga|cth|cve|cro|cph|pbid|pask|pbiv|paiv|patm|pvol|pprc|pde|pga|pth|pve|pro|pph|calcErr|calcSource|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'calcSource\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionImpliedPair' \\\n--data-urlencode 'measure=ticker|uprc|years|rate|sdiv|ddiv|symbolRatio|strikeRatio|cashOnExercise|xAxis|axisFUPrc|axisVolRT|cbid|cask|cbiv|caiv|catm|cvol|cprc|cde|cga|cth|cve|cro|cph|pbid|pask|pbiv|paiv|patm|pvol|pprc|pde|pga|pth|pve|pro|pph|calcErr|calcSource|timestamp' \\\n--data-urlencode 'group=calcSource' \\\n--data-urlencode 'where=calcErr:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionImpliedPair\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'calcErr:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionImpliedPair' \\\n--data-urlencode 'where=calcErr:eq:ExampleString'\n"})})})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>X});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),l=n(205),c=n(57485),d=n(31682),o=n(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,h]=x({queryString:n,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),v=(()=>{const e=d??m;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),s=l[n].value;s!==r&&(d(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function X(e){const t=(0,j.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);