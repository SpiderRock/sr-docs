"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44070],{22314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(74848),s=n(28453),a=n(11470),l=n(19365);const i={title:"MarRiskControlTkOverride"},d="Schema: MarRiskControlTkOverride (ID: 4551)",o={id:"MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",title:"MarRiskControlTkOverride",description:"MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/Topics/4535-risk-control/MarRiskControlTkOverride.md",sourceDirName:"MessageSchemas/Schema/Topics/4535-risk-control",slug:"/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{title:"MarRiskControlTkOverride"},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControl",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/risk-control/MarRiskControl"},next:{title:"SpdrRiskControl",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl"}},c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-marriskcontroltkoverride-id-4551",children:["Schema: MarRiskControlTkOverride ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4551)"})]}),"\n",(0,r.jsx)(t.p,{children:"MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"4535-risk-control"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRControl"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"riskFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"11="}),(0,r.jsx)(t.td,{children:"riskGroup"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"12="}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"13="}),(0,r.jsx)(t.td,{children:"isTestAccnt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"if Yes, this control applies only to risk from test accnts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"stkEnabled"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"101"}),(0,r.jsx)(t.td,{children:"futEnabled"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"102"}),(0,r.jsx)(t.td,{children:"optEnabled"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"blockShortSales"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"block all short sales"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"104"}),(0,r.jsx)(t.td,{children:"orderMaxStkQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"number of equity shares that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"105"}),(0,r.jsx)(t.td,{children:"orderMaxFutQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"number of futures contracts that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"orderMaxOptQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"number of option contracts that can be bought or sold by a single parent order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"107"}),(0,r.jsx)(t.td,{children:"orderMaxStkDDelta"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"108"}),(0,r.jsx)(t.td,{children:"orderMaxFutDDelta"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"orderMaxOptDDelta"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"110"}),(0,r.jsx)(t.td,{children:"stkCollarPct"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"111"}),(0,r.jsx)(t.td,{children:"futCollarPct"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"optCollarPct"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"113"}),(0,r.jsx)(t.td,{children:"maxAccFutCnAbs"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"max absolute (net) accnt future contracts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"114"}),(0,r.jsx)(t.td,{children:"maxDayFutCnBot"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"day future contracts bot"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"maxDayFutCnSld"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"day future contracts sld"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"116"}),(0,r.jsx)(t.td,{children:"maxDayFutCnAbs"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"max absolute (net) day future contracts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"117"}),(0,r.jsx)(t.td,{children:"modifiedBy"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"modifiedIn"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"119"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'MarRiskControlTkOverride'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=MarRiskControlTkOverride'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskControlTkOverride\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'stkEnabled|futEnabled|optEnabled|blockShortSales|orderMaxStkQty|orderMaxFutQty|orderMaxOptQty|orderMaxStkDDelta|orderMaxFutDDelta|orderMaxOptDDelta|stkCollarPct|futCollarPct|optCollarPct|maxAccFutCnAbs|maxDayFutCnBot|maxDayFutCnSld|maxDayFutCnAbs|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskFirm:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=MarRiskControlTkOverride' \\\n--data-urlencode 'view=stkEnabled|futEnabled|optEnabled|blockShortSales|orderMaxStkQty|orderMaxFutQty|orderMaxOptQty|orderMaxStkDDelta|orderMaxFutDDelta|orderMaxOptDDelta|stkCollarPct|futCollarPct|optCollarPct|maxAccFutCnAbs|maxDayFutCnBot|maxDayFutCnSld|maxDayFutCnAbs|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=riskFirm:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskControlTkOverride\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'stkEnabled|futEnabled|optEnabled|blockShortSales|orderMaxStkQty|orderMaxFutQty|orderMaxOptQty|orderMaxStkDDelta|orderMaxFutDDelta|orderMaxOptDDelta|stkCollarPct|futCollarPct|optCollarPct|maxAccFutCnAbs|maxDayFutCnBot|maxDayFutCnSld|maxDayFutCnAbs|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskFirm:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'stkEnabled:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=MarRiskControlTkOverride' \\\n--data-urlencode 'view=stkEnabled|futEnabled|optEnabled|blockShortSales|orderMaxStkQty|orderMaxFutQty|orderMaxOptQty|orderMaxStkDDelta|orderMaxFutDDelta|orderMaxOptDDelta|stkCollarPct|futCollarPct|optCollarPct|maxAccFutCnAbs|maxDayFutCnBot|maxDayFutCnSld|maxDayFutCnAbs|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=riskFirm:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=stkEnabled:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskControlTkOverride\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'stkEnabled|futEnabled|optEnabled|blockShortSales|orderMaxStkQty|orderMaxFutQty|orderMaxOptQty|orderMaxStkDDelta|orderMaxFutDDelta|orderMaxOptDDelta|stkCollarPct|futCollarPct|optCollarPct|maxAccFutCnAbs|maxDayFutCnBot|maxDayFutCnSld|maxDayFutCnAbs|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'stkEnabled|futEnabled|optEnabled|blockShortSales|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskFirm:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=MarRiskControlTkOverride' \\\n--data-urlencode 'measure=stkEnabled|futEnabled|optEnabled|blockShortSales|orderMaxStkQty|orderMaxFutQty|orderMaxOptQty|orderMaxStkDDelta|orderMaxFutDDelta|orderMaxOptDDelta|stkCollarPct|futCollarPct|optCollarPct|maxAccFutCnAbs|maxDayFutCnBot|maxDayFutCnSld|maxDayFutCnAbs|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=stkEnabled|futEnabled|optEnabled|blockShortSales|modifiedIn' \\\n--data-urlencode 'where=riskFirm:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskControlTkOverride\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskFirm:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=MarRiskControlTkOverride' \\\n--data-urlencode 'where=riskFirm:eq:ExampleString'\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),s=n(34164),a=n(23104),l=n(56347),i=n(205),d=n(57485),o=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,u]=x({queryString:n,groupId:s}),[p,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=o??p;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&d(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),s=i[n].value;s!==r&&(o(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(f,{...t,...e})]})}function v(e){const t=(0,j.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);