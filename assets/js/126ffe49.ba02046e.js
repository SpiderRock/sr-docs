"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47912],{37166:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=n(74848),s=n(28453),a=n(11470),l=n(19365);const i={title:"OptionCalculator"},c="Schema: OptionCalculator (ID: 5030)",d={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",title:"OptionCalculator",description:"This table allows custom option pricing based on either user or SR supplied input values.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionCalculator.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",permalink:"/docs/next/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionCalculator"},sidebar:"messageSchemasSidebar",previous:{title:"5030-srse-calculators",permalink:"/docs/next/MessageSchemas/Schema/Topics/srse-calculators/"},next:{title:"OptionImpliedPair",permalink:"/docs/next/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedPair"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-optioncalculator-id-5030",children:["Schema: OptionCalculator ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 5030)"})]}),"\n",(0,t.jsx)(r.p,{children:"This table allows custom option pricing based on either user or SR supplied input values."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"5030-srse-calculators"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"Internal"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"10="}),(0,t.jsx)(r.td,{children:"userName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11="}),(0,t.jsx)(r.td,{children:"okey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"100"}),(0,t.jsx)(r.td,{children:"vol"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"volatility"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"103"}),(0,t.jsx)(r.td,{children:"volSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"uPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"underlying price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"uPrcSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"years"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"years-to-expiration (default uses SR volatility time value)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"yearsSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"118"}),(0,t.jsx)(r.td,{children:"sdiv"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"continuous stock dividend using for pricing"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"121"}),(0,t.jsx)(r.td,{children:"sdivSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"124"}),(0,t.jsx)(r.td,{children:"rate"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"discount rate used for pricing"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"127"}),(0,t.jsx)(r.td,{children:"rateSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"130"}),(0,t.jsx)(r.td,{children:"exType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,t.jsx)(r.td,{children:"exercise type of the option (American or European)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"133"}),(0,t.jsx)(r.td,{children:"exTypeSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"136"}),(0,t.jsx)(r.td,{children:"effStrike"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"effective strike used for pricing (default is okey.Strike)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"139"}),(0,t.jsx)(r.td,{children:"effStrikeSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"142"}),(0,t.jsx)(r.td,{children:"symRatio"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"underlying symbol ratio (for non-standard options); discrete dividend will be scaled by this factor"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"145"}),(0,t.jsx)(r.td,{children:"symRatioSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"148"}),(0,t.jsx)(r.td,{children:"divString"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsxs)(r.td,{children:["discrete dividend string  [ yearsToExpiry, years1",":amt1",", years2",":amt2",", ...] or [ -1, date1",":amt1",", date2",":amt2",", ... ]"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"divSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"154"}),(0,t.jsx)(r.td,{children:"modelType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"modelTypeSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"160"}),(0,t.jsx)(r.td,{children:"calcPrecision"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/CalcPrecision",children:"enum : CalcPrecision"})}),(0,t.jsx)(r.td,{children:"numerical precision (# of steps) if a numerical method is used;  [more steps will be slower to calculate]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"163"}),(0,t.jsx)(r.td,{children:"incGreeks"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"price"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"price (premium)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"delta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"delta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"gamma"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"gamma"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"theta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"theta"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"vega"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"vega"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"181"}),(0,t.jsx)(r.td,{children:"volga"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"volga"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"184"}),(0,t.jsx)(r.td,{children:"vanna"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"vanna"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"187"}),(0,t.jsx)(r.td,{children:"deDecay"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"delta decay"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"190"}),(0,t.jsx)(r.td,{children:"rho"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"rho"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"193"}),(0,t.jsx)(r.td,{children:"phi"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"phi"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"196"}),(0,t.jsx)(r.td,{children:"error"}),(0,t.jsx)(r.td,{children:"string(32)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"199"}),(0,t.jsx)(r.td,{children:"pricerModel"}),(0,t.jsx)(r.td,{children:"string(8)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"202"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionCalculator'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionCalculator'\n\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCalculator\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'vol|volSrc|uPrc|uPrcSrc|years|yearsSrc|sdiv|sdivSrc|rate|rateSrc|exType|exTypeSrc|effStrike|effStrikeSrc|symRatio|symRatioSrc|divString|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks|price|delta|gamma|theta|vega|volga|vanna|deDecay|rho|phi|error|pricerModel|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'userName:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionCalculator' \\\n--data-urlencode 'view=vol|volSrc|uPrc|uPrcSrc|years|yearsSrc|sdiv|sdivSrc|rate|rateSrc|exType|exTypeSrc|effStrike|effStrikeSrc|symRatio|symRatioSrc|divString|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks|price|delta|gamma|theta|vega|volga|vanna|deDecay|rho|phi|error|pricerModel|timestamp' \\\n--data-urlencode 'where=userName:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCalculator\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'vol|volSrc|uPrc|uPrcSrc|years|yearsSrc|sdiv|sdivSrc|rate|rateSrc|exType|exTypeSrc|effStrike|effStrikeSrc|symRatio|symRatioSrc|divString|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks|price|delta|gamma|theta|vega|volga|vanna|deDecay|rho|phi|error|pricerModel|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'userName:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'vol:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionCalculator' \\\n--data-urlencode 'view=vol|volSrc|uPrc|uPrcSrc|years|yearsSrc|sdiv|sdivSrc|rate|rateSrc|exType|exTypeSrc|effStrike|effStrikeSrc|symRatio|symRatioSrc|divString|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks|price|delta|gamma|theta|vega|volga|vanna|deDecay|rho|phi|error|pricerModel|timestamp' \\\n--data-urlencode 'where=userName:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=vol:ASC'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCalculator\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'vol|volSrc|uPrc|uPrcSrc|years|yearsSrc|sdiv|sdivSrc|rate|rateSrc|exType|exTypeSrc|effStrike|effStrikeSrc|symRatio|symRatioSrc|divString|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks|price|delta|gamma|theta|vega|volga|vanna|deDecay|rho|phi|error|pricerModel|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'volSrc|uPrcSrc|yearsSrc|sdivSrc|rateSrc|exType|exTypeSrc|effStrikeSrc|symRatioSrc|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'userName:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionCalculator' \\\n--data-urlencode 'measure=vol|volSrc|uPrc|uPrcSrc|years|yearsSrc|sdiv|sdivSrc|rate|rateSrc|exType|exTypeSrc|effStrike|effStrikeSrc|symRatio|symRatioSrc|divString|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks|price|delta|gamma|theta|vega|volga|vanna|deDecay|rho|phi|error|pricerModel|timestamp' \\\n--data-urlencode 'group=volSrc|uPrcSrc|yearsSrc|sdivSrc|rateSrc|exType|exTypeSrc|effStrikeSrc|symRatioSrc|divSrc|modelType|modelTypeSrc|calcPrecision|incGreeks' \\\n--data-urlencode 'where=userName:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionCalculator\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'userName:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionCalculator' \\\n--data-urlencode 'where=userName:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>X});var t=n(96540),s=n(34164),a=n(23104),l=n(56347),i=n(205),c=n(57485),d=n(31682),o=n(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=u(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[d,h]=m({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,o.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=d??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const r=e.currentTarget,n=c.indexOf(r),s=i[n].value;s!==t&&(d(r),l(s))},h=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:h,onClick:o,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function S(e){let{lazy:r,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function f(e){const r=x(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...r,...e}),(0,y.jsx)(S,{...r,...e})]})}function X(e){const r=(0,j.A)();return(0,y.jsx)(f,{...e,children:h(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>i});var t=n(96540);const s={},a=t.createContext(s);function l(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);