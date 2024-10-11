"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[26684],{2720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(74848),s=t(28453),r=t(11470),l=t(19365);const i={title:"SpdrRiskControl"},d="Schema: SpdrRiskControl (ID: 4560)",o={id:"MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",title:"SpdrRiskControl",description:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/Topics/4535-risk-control/SpdrRiskControl.md",sourceDirName:"MessageSchemas/Schema/Topics/4535-risk-control",slug:"/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{title:"SpdrRiskControl"},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControlTkOverride",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride"},next:{title:"SpdrRiskGroupControl",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/risk-control/SpdrRiskGroupControl"}},c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"schema-spdrriskcontrol-id-4560",children:["Schema: SpdrRiskControl ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 4560)"})]}),"\n",(0,a.jsx)(n.p,{children:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm"}),"\n",(0,a.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Topic"}),(0,a.jsx)(n.td,{children:"4535-risk-control"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"MLink Token"}),(0,a.jsx)(n.td,{children:"ClientControl"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SRSE Product"}),(0,a.jsx)(n.td,{children:"SRControl"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"#"}),(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Comment"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"12="}),(0,a.jsx)(n.td,{children:"ticker"}),(0,a.jsx)(n.td,{children:"TickerKey"}),(0,a.jsx)(n.td,{children:"'*-ANY-ANY' default (if a more precise ticker control does not exist)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"13="}),(0,a.jsx)(n.td,{children:"riskControlKey"}),(0,a.jsx)(n.td,{children:"string(16)"}),(0,a.jsx)(n.td,{children:"must be an SRClientAccnt if riskControlLevel=Accnt; must be an SRUser if riskControlLevel=User; ignored if riskControlLevel=ClientFirm"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"14="}),(0,a.jsx)(n.td,{children:"riskControlLevel"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/RiskControlLevel",children:"enum : RiskControlLevel"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"15="}),(0,a.jsx)(n.td,{children:"riskFirm"}),(0,a.jsx)(n.td,{children:"string(16)"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"16="}),(0,a.jsx)(n.td,{children:"isTestAccnt"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(n.td,{children:"if Yes, this control applies only to risk from test accnts"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"197"}),(0,a.jsx)(n.td,{children:"stkEnabled"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"198"}),(0,a.jsx)(n.td,{children:"futEnabled"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"199"}),(0,a.jsx)(n.td,{children:"optEnabled"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"200"}),(0,a.jsx)(n.td,{children:"marginLimitDay"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"201"}),(0,a.jsx)(n.td,{children:"openExposureLimit"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"maximum abs open child order $Delta (no netting) (open child orders only)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"127"}),(0,a.jsx)(n.td,{children:"maxDayDDeltaLn"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open long $Delta per trading session"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"130"}),(0,a.jsx)(n.td,{children:"maxDayDDeltaSh"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open short $Delta per trading session"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"133"}),(0,a.jsx)(n.td,{children:"maxDayDDeltaAbs"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"absolute $Delta,"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"145"}),(0,a.jsx)(n.td,{children:"maxDayWtVegaLn"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open long WtVega per trading session"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"148"}),(0,a.jsx)(n.td,{children:"maxDayWtVegaSh"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open short WtVega per trading session"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"151"}),(0,a.jsx)(n.td,{children:"maxDayWtVegaAbs"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open absolute WtVega,"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"202"}),(0,a.jsx)(n.td,{children:"maxDayNValueLn"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open long notional value per trading session"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"203"}),(0,a.jsx)(n.td,{children:"maxDayNValueSh"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"open short notional value per trading session"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"204"}),(0,a.jsx)(n.td,{children:"maxDayNValueAbs"}),(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"absolute notional value,"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"172"}),(0,a.jsx)(n.td,{children:"modifiedBy"}),(0,a.jsx)(n.td,{children:"string(24)"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"175"}),(0,a.jsx)(n.td,{children:"modifiedIn"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"178"}),(0,a.jsx)(n.td,{children:"timestamp"}),(0,a.jsx)(n.td,{children:"DateTime"}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrRiskControl'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrRiskControl'\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrRiskControl\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'stkEnabled|futEnabled|optEnabled|marginLimitDay|openExposureLimit|maxDayDDeltaLn|maxDayDDeltaSh|maxDayDDeltaAbs|maxDayWtVegaLn|maxDayWtVegaSh|maxDayWtVegaAbs|maxDayNValueLn|maxDayNValueSh|maxDayNValueAbs|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskControlKey:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrRiskControl' \\\n--data-urlencode 'view=stkEnabled|futEnabled|optEnabled|marginLimitDay|openExposureLimit|maxDayDDeltaLn|maxDayDDeltaSh|maxDayDDeltaAbs|maxDayWtVegaLn|maxDayWtVegaSh|maxDayWtVegaAbs|maxDayNValueLn|maxDayNValueSh|maxDayNValueAbs|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=riskControlKey:eq:ExampleString'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrRiskControl\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'stkEnabled|futEnabled|optEnabled|marginLimitDay|openExposureLimit|maxDayDDeltaLn|maxDayDDeltaSh|maxDayDDeltaAbs|maxDayWtVegaLn|maxDayWtVegaSh|maxDayWtVegaAbs|maxDayNValueLn|maxDayNValueSh|maxDayNValueAbs|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskControlKey:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'stkEnabled:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrRiskControl' \\\n--data-urlencode 'view=stkEnabled|futEnabled|optEnabled|marginLimitDay|openExposureLimit|maxDayDDeltaLn|maxDayDDeltaSh|maxDayDDeltaAbs|maxDayWtVegaLn|maxDayWtVegaSh|maxDayWtVegaAbs|maxDayNValueLn|maxDayNValueSh|maxDayNValueAbs|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=riskControlKey:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=stkEnabled:ASC'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrRiskControl\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'stkEnabled|futEnabled|optEnabled|marginLimitDay|openExposureLimit|maxDayDDeltaLn|maxDayDDeltaSh|maxDayDDeltaAbs|maxDayWtVegaLn|maxDayWtVegaSh|maxDayWtVegaAbs|maxDayNValueLn|maxDayNValueSh|maxDayNValueAbs|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'stkEnabled|futEnabled|optEnabled|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskControlKey:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrRiskControl' \\\n--data-urlencode 'measure=stkEnabled|futEnabled|optEnabled|marginLimitDay|openExposureLimit|maxDayDDeltaLn|maxDayDDeltaSh|maxDayDDeltaAbs|maxDayWtVegaLn|maxDayWtVegaSh|maxDayWtVegaAbs|maxDayNValueLn|maxDayNValueSh|maxDayNValueAbs|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=stkEnabled|futEnabled|optEnabled|modifiedIn' \\\n--data-urlencode 'where=riskControlKey:eq:ExampleString'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrRiskControl\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskControlKey:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrRiskControl' \\\n--data-urlencode 'where=riskControlKey:eq:ExampleString'\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),s=t(34164),r=t(23104),l=t(56347),i=t(205),d=t(57485),o=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[l,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=p({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),y=(()=>{const e=o??x;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{y&&d(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),s=i[t].value;s!==a&&(o(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function X(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,j.jsx)(X,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);