"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31907],{83954:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=r(74848),s=r(28453),a=r(11470),i=r(19365);const l={title:"MarRiskCounter"},c="Schema: MarRiskCounter (ID: 4670)",d={id:"MessageSchemas/Schema/Topics/risk-counter/MarRiskCounter",title:"MarRiskCounter",description:"Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.A risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group.",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Topics/4625-risk-counter/MarRiskCounter.md",sourceDirName:"MessageSchemas/Schema/Topics/4625-risk-counter",slug:"/MessageSchemas/Schema/Topics/risk-counter/MarRiskCounter",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/risk-counter/MarRiskCounter",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{title:"MarRiskCounter"},sidebar:"messageSchemasSidebar",previous:{title:"4625-risk-counter",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/risk-counter/"},next:{title:"RiskGroupCounter",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/risk-counter/RiskGroupCounter"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"schema-marriskcounter-id-4670",children:["Schema: MarRiskCounter ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4670)"})]}),"\n",(0,t.jsxs)(n.p,{children:["Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"A risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group."]}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"4625-risk-counter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"ClientControl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Product"}),(0,t.jsx)(n.td,{children:"SRControl"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10="}),(0,t.jsx)(n.td,{children:"ticker"}),(0,t.jsx)(n.td,{children:"TickerKey"}),(0,t.jsx)(n.td,{children:"'*-ANY-ANY' represents the entire control group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11="}),(0,t.jsx)(n.td,{children:"riskGroup"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12="}),(0,t.jsx)(n.td,{children:"riskFirm"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{children:"client firm that can view/edit this record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13="}),(0,t.jsx)(n.td,{children:"isTestAccnt"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"sysRealm"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysRealm",children:"enum : SysRealm"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"101"}),(0,t.jsx)(n.td,{children:"sysEnvironment"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(n.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"102"}),(0,t.jsx)(n.td,{children:"riskEngine"}),(0,t.jsx)(n.td,{children:"string(32)"}),(0,t.jsx)(n.td,{children:"EE engine name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"103"}),(0,t.jsx)(n.td,{children:"liveMarginAcc"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"live net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"104"}),(0,t.jsx)(n.td,{children:"liveMarginDay"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"live net (per symbol) day portfolio (day trades only) margin (can include external sources)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"105"}),(0,t.jsx)(n.td,{children:"liveOpenExposure"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"live abs open child order $Delta (no netting) (open child orders only)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"116"}),(0,t.jsx)(n.td,{children:"dayFutCnBot"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"day future contracts bot"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"117"}),(0,t.jsx)(n.td,{children:"dayFutCnSld"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"day future contracts sld"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"118"}),(0,t.jsx)(n.td,{children:"accFutCnNet"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"accnt future contracts (net) [can be +/-] (start-of-day positions + day trades)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"106"}),(0,t.jsx)(n.td,{children:"dayMarginUDnVDn"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"day margin (UPrcDn/VolDn)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"107"}),(0,t.jsx)(n.td,{children:"dayMarginUDnVUp"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"day margin (UPrcDn/VolUp)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"108"}),(0,t.jsx)(n.td,{children:"dayMarginUUpVDn"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"day margin (UPrcUp/VolDn)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"109"}),(0,t.jsx)(n.td,{children:"dayMarginUUpVUp"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"day margin (UPrcUp/VolUp)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"110"}),(0,t.jsx)(n.td,{children:"accMarginUDnVDn"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"acc margin (UPrcDn/VolDn)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"111"}),(0,t.jsx)(n.td,{children:"accMarginUDnVUp"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"acc margin (UPrcDn/VolUp)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"accMarginUUpVDn"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"acc margin (UPrcUp/VolDn)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"113"}),(0,t.jsx)(n.td,{children:"accMarginUUpVUp"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"acc margin (UPrcUp/VolUp)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"114"}),(0,t.jsx)(n.td,{children:"counter"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"115"}),(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{children:"timestamp of latest change"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'MarRiskCounter'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=MarRiskCounter'\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskCounter\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'sysRealm|sysEnvironment|riskEngine|liveMarginAcc|liveMarginDay|liveOpenExposure|dayFutCnBot|dayFutCnSld|accFutCnNet|dayMarginUDnVDn|dayMarginUDnVUp|dayMarginUUpVDn|dayMarginUUpVUp|accMarginUDnVDn|accMarginUDnVUp|accMarginUUpVDn|accMarginUUpVUp|counter|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskGroup:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=MarRiskCounter' \\\n--data-urlencode 'view=sysRealm|sysEnvironment|riskEngine|liveMarginAcc|liveMarginDay|liveOpenExposure|dayFutCnBot|dayFutCnSld|accFutCnNet|dayMarginUDnVDn|dayMarginUDnVUp|dayMarginUUpVDn|dayMarginUUpVUp|accMarginUDnVDn|accMarginUDnVUp|accMarginUUpVDn|accMarginUUpVUp|counter|timestamp' \\\n--data-urlencode 'where=riskGroup:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskCounter\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'sysRealm|sysEnvironment|riskEngine|liveMarginAcc|liveMarginDay|liveOpenExposure|dayFutCnBot|dayFutCnSld|accFutCnNet|dayMarginUDnVDn|dayMarginUDnVUp|dayMarginUUpVDn|dayMarginUUpVUp|accMarginUDnVDn|accMarginUDnVUp|accMarginUUpVDn|accMarginUUpVUp|counter|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskGroup:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'sysRealm:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=MarRiskCounter' \\\n--data-urlencode 'view=sysRealm|sysEnvironment|riskEngine|liveMarginAcc|liveMarginDay|liveOpenExposure|dayFutCnBot|dayFutCnSld|accFutCnNet|dayMarginUDnVDn|dayMarginUDnVUp|dayMarginUUpVDn|dayMarginUUpVUp|accMarginUDnVDn|accMarginUDnVUp|accMarginUUpVDn|accMarginUUpVUp|counter|timestamp' \\\n--data-urlencode 'where=riskGroup:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=sysRealm:ASC'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskCounter\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'sysRealm|sysEnvironment|riskEngine|liveMarginAcc|liveMarginDay|liveOpenExposure|dayFutCnBot|dayFutCnSld|accFutCnNet|dayMarginUDnVDn|dayMarginUDnVUp|dayMarginUUpVDn|dayMarginUUpVUp|accMarginUDnVDn|accMarginUDnVUp|accMarginUUpVDn|accMarginUUpVUp|counter|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'sysRealm|sysEnvironment\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskGroup:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=MarRiskCounter' \\\n--data-urlencode 'measure=sysRealm|sysEnvironment|riskEngine|liveMarginAcc|liveMarginDay|liveOpenExposure|dayFutCnBot|dayFutCnSld|accFutCnNet|dayMarginUDnVDn|dayMarginUDnVUp|dayMarginUUpVDn|dayMarginUUpVUp|accMarginUDnVDn|accMarginUDnVUp|accMarginUUpVDn|accMarginUUpVUp|counter|timestamp' \\\n--data-urlencode 'group=sysRealm|sysEnvironment' \\\n--data-urlencode 'where=riskGroup:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'MarRiskCounter\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'riskGroup:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=MarRiskCounter' \\\n--data-urlencode 'where=riskGroup:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>U});var t=r(96540),s=r(34164),a=r(23104),i=r(56347),l=r(205),c=r(57485),d=r(31682),o=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,u]=m({queryString:r,groupId:s}),[g,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,o.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),y=(()=>{const e=d??g;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...a,className:(0,s.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function X(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function U(e){const n=(0,x.A)();return(0,j.jsx)(X,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);