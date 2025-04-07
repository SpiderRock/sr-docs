"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["74194"],{21092:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>d});var s=JSON.parse('{"id":"MessageSchemas/Schema/Topics/client-book-risk/IndustryControl","title":"IndustryControl","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/1630-client-book-risk/IndustryControl.md","sourceDirName":"MessageSchemas/Schema/Topics/1630-client-book-risk","slug":"/MessageSchemas/Schema/Topics/client-book-risk/IndustryControl","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/client-book-risk/IndustryControl","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"IndustryControl"},"sidebar":"messageSchemasSidebar","previous":{"title":"FutureControl","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/client-book-risk/FutureControl"},"next":{"title":"RiskClassControl","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/client-book-risk/RiskClassControl"}}'),a=t("52676"),r=t("91503"),l=t("71386"),i=t("9641");let o={title:"IndustryControl"},d="Schema: IndustryControl (ID: 1655)",c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3},{value:"Post Msgs API Call",id:"post-msgs-api-call",level:3}];function m(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"schema-industrycontrol-id-1655",children:["Schema: IndustryControl ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 1655)"})]})}),"\n",(0,a.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Topic"}),(0,a.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"MLink Token"}),(0,a.jsx)(n.td,{children:"ClientControl"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SRSE Product"}),(0,a.jsx)(n.td,{children:"SRControl"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"#"}),(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Comment"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"10="}),(0,a.jsx)(n.td,{children:"accnt"}),(0,a.jsx)(n.td,{children:"string(16)"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"11="}),(0,a.jsx)(n.td,{children:"icode"}),(0,a.jsx)(n.td,{children:"int"}),(0,a.jsx)(n.td,{children:"can be 1, 2, or 3 digits"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"12="}),(0,a.jsx)(n.td,{children:"clientFirm"}),(0,a.jsx)(n.td,{children:"string(16)"}),(0,a.jsx)(n.td,{children:"SR client firm"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"100"}),(0,a.jsx)(n.td,{children:"indStatus"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/OptStatus",children:"enum : OptStatus"})}),(0,a.jsx)(n.td,{children:"industry trading control"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"103"}),(0,a.jsx)(n.td,{children:"minWtVega"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"(xRM) minimum net industry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"106"}),(0,a.jsx)(n.td,{children:"maxWtVega"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"(xRM) maximum net industry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"109"}),(0,a.jsx)(n.td,{children:"maxWtVePctM1"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"% of min/max industry wtVega in M1 {days < 10} expirations"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"112"}),(0,a.jsx)(n.td,{children:"maxWtVePctM2"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"% of min/max industry wtVega in M2 {10 < days < 25} expirations"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"115"}),(0,a.jsx)(n.td,{children:"maxWtVePctM3"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"% of min/max industry wtVega in M3 {25 < days < 65} expirations"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"118"}),(0,a.jsx)(n.td,{children:"maxWtVePctM4"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"% of min/max industry wtVega in M4 {65 < days < 128} expirations"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"121"}),(0,a.jsx)(n.td,{children:"maxWtVePctM5"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"% of min/max industry wtVega in M5 {128 < days} expirations"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"124"}),(0,a.jsx)(n.td,{children:"modifiedBy"}),(0,a.jsx)(n.td,{children:"string(24)"}),(0,a.jsx)(n.td,{children:"user who last modified this record"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"127"}),(0,a.jsx)(n.td,{children:"modifiedIn"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"130"}),(0,a.jsx)(n.td,{children:"timestamp"}),(0,a.jsx)(n.td,{children:"DateTime"}),(0,a.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'IndustryControl'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,a.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=IndustryControl'\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'IndustryControl\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'indStatus|minWtVega|maxWtVega|maxWtVePctM1|maxWtVePctM2|maxWtVePctM3|maxWtVePctM4|maxWtVePctM5|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=IndustryControl' \\\n--data-urlencode 'view=indStatus|minWtVega|maxWtVega|maxWtVePctM1|maxWtVePctM2|maxWtVePctM3|maxWtVePctM4|maxWtVePctM5|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'IndustryControl\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'indStatus|minWtVega|maxWtVega|maxWtVePctM1|maxWtVePctM2|maxWtVePctM3|maxWtVePctM4|maxWtVePctM5|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'indStatus:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=IndustryControl' \\\n--data-urlencode 'view=indStatus|minWtVega|maxWtVega|maxWtVePctM1|maxWtVePctM2|maxWtVePctM3|maxWtVePctM4|maxWtVePctM5|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=indStatus:ASC'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'IndustryControl\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'indStatus|minWtVega|maxWtVega|maxWtVePctM1|maxWtVePctM2|maxWtVePctM3|maxWtVePctM4|maxWtVePctM5|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'indStatus|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=IndustryControl' \\\n--data-urlencode 'measure=indStatus|minWtVega|maxWtVega|maxWtVePctM1|maxWtVePctM2|maxWtVePctM3|maxWtVePctM4|maxWtVePctM5|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=indStatus|modifiedIn' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'IndustryControl\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=IndustryControl' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"post-msgs-api-call",children:"Post Msgs API Call"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests\n\n# Replace with your desired MLINK URL\nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Request Parameters\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'postmsgs\',\n    "postaction": "I", # (I)nsert, (U)pdate, (R)eplace, or (D)elete\n    "postmerge": "Y", # (Y)es or (N)o\n}\n\npayload = {\n    "header": {\n        "mTyp": "IndustryControl"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "exampleString", // string\n            "icode": 1, // int\n            "clientFirm": "exampleString" // string\n        },\n        "indStatus": "enumValue", // enum(OptStatus) - Hold, TwoWay, BuyOnly, SellOnly, CloseOnly, CloseNow, CloseRisk, BuyCloseOnly, SellCloseOnly\n        "minWtVega": 1.0, // float\n        "maxWtVega": 1.0, // float\n        "maxWtVePctM1": 1.0, // float\n        "maxWtVePctM2": 1.0, // float\n        "maxWtVePctM3": 1.0, // float\n        "maxWtVePctM4": 1.0, // float\n        "maxWtVePctM5": 1.0, // float\n        "modifiedBy": "exampleString", // string\n        "modifiedIn": "enumValue", // enum(SysEnvironment) - None, Neptune, Pluto, V7_Stable, V7_Latest, Saturn, Venus, Mars, SysTest, V7_Current\n        "timestamp": "2025-01-01 12:00:00.000000" // yyyy-MM-dd HH:mm:ss.SSSSSS\n    }\n}\n\nresponse = requests.post(MLINK_PROD_URL, params=params, json=payload)\n'})})}),(0,a.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\' \\\n--data-urlencode \'apiKey=XXXX-XXXX-XXXX-XXXX\' \\\n--data-urlencode \'cmd=postmsgs\' \\\n--data-urlencode \'postaction=I\' \\ # (I)nsert, (U)pdate, (R)eplace, or (D)elete\n--data-urlencode \'postmerge=Y\' \\ # (Y)es or (N)o\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "header": {\n        "mTyp": "IndustryControl"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "exampleString", // string\n            "icode": 1, // int\n            "clientFirm": "exampleString" // string\n        },\n        "indStatus": "enumValue", // enum(OptStatus) - Hold, TwoWay, BuyOnly, SellOnly, CloseOnly, CloseNow, CloseRisk, BuyCloseOnly, SellCloseOnly\n        "minWtVega": 1.0, // float\n        "maxWtVega": 1.0, // float\n        "maxWtVePctM1": 1.0, // float\n        "maxWtVePctM2": 1.0, // float\n        "maxWtVePctM3": 1.0, // float\n        "maxWtVePctM4": 1.0, // float\n        "maxWtVePctM5": 1.0, // float\n        "modifiedBy": "exampleString", // string\n        "modifiedIn": "enumValue", // enum(SysEnvironment) - None, Neptune, Pluto, V7_Stable, V7_Latest, Saturn, Venus, Mars, SysTest, V7_Current\n        "timestamp": "2025-01-01 12:00:00.000000" // yyyy-MM-dd HH:mm:ss.SSSSSS\n    }\n}\'\n'})})})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9641:function(e,n,t){t.d(n,{Z:()=>r});var s=t("52676");t("75271");var a=t("54461");function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_SSzl",r),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>X});var s=t("52676"),a=t("75271"),r=t("54461"),l=t("52289"),i=t("3225"),o=t("42834"),d=t("40578"),c=t("35834"),u=t("79616");function m(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==a&&(c(n),i(t))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:m,onClick:u,...l,className:(0,r.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function y(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,r=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??m(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:r})),[x,g]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(r),(0,a.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})},[r,s])]}({queryString:t,groupId:s}),[y,X]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[s,r]=(0,u.Nk)(t);return[s,(0,a.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:s}),f=(()=>{let e=x??y;return h({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{f&&p(f)},[f]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),X(e)},[g,X,r]),tabValues:r}}(e);return(0,s.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList_ArS0"),children:[(0,s.jsx)(x,{...n,...e}),(0,s.jsx)(g,{...n,...e})]})}function X(e){let n=(0,p.Z)();return(0,s.jsx)(y,{...e,children:m(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(75271);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);