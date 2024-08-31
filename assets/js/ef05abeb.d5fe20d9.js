"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73083],{37812:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var t=s(74848),r=s(28453),i=s(11470),a=s(19365);const d={title:"SpdrSweepDetail"},l="Schema: SpdrSweepDetail (ID: 2330)",c={id:"MessageSchemas/Schema/Topics/execution-engine/SpdrSweepDetail",title:"SpdrSweepDetail",description:"SpdrSweepDetail records are published by execution engines when sweep trigger groups are processed",source:"@site/docs/MessageSchemas/Schema/Topics/2270-execution-engine/SpdrSweepDetail.md",sourceDirName:"MessageSchemas/Schema/Topics/2270-execution-engine",slug:"/MessageSchemas/Schema/Topics/execution-engine/SpdrSweepDetail",permalink:"/docs/MessageSchemas/Schema/Topics/execution-engine/SpdrSweepDetail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrSweepDetail"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrRiskExecution",permalink:"/docs/MessageSchemas/Schema/Topics/execution-engine/SpdrRiskExecution"},next:{title:"SpdrSweepExchDetail",permalink:"/docs/MessageSchemas/Schema/Topics/execution-engine/SpdrSweepExchDetail"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"schema-spdrsweepdetail-id-2330",children:["Schema: SpdrSweepDetail ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2330)"})]}),"\n",(0,t.jsx)(n.p,{children:"SpdrSweepDetail records are published by execution engines when sweep trigger groups are processed"}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"2270-execution-engine"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"SystemData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Product"}),(0,t.jsx)(n.td,{children:"SRTrade"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10="}),(0,t.jsx)(n.td,{children:"parentNumber"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"194"}),(0,t.jsx)(n.td,{children:"engineName"}),(0,t.jsx)(n.td,{children:"string(32)"}),(0,t.jsx)(n.td,{children:"SpiderRock execution engine that handled the parent order"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"103"}),(0,t.jsx)(n.td,{children:"accnt"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"106"}),(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"109"}),(0,t.jsx)(n.td,{children:"riskGroupId"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"triggerGroupId"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"WaitTrigger group Id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"115"}),(0,t.jsx)(n.td,{children:"secKey"}),(0,t.jsx)(n.td,{children:"OptionKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"118"}),(0,t.jsx)(n.td,{children:"secType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"121"}),(0,t.jsx)(n.td,{children:"parentOrderSize"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"124"}),(0,t.jsx)(n.td,{children:"parentLimitPrice"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"127"}),(0,t.jsx)(n.td,{children:"orderSide"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"130"}),(0,t.jsx)(n.td,{children:"isISOSweep"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"133"}),(0,t.jsx)(n.td,{children:"riskLimitSize"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"136"}),(0,t.jsx)(n.td,{children:"riskLimitReason"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SpdrRisk",children:"enum : SpdrRisk"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"139"}),(0,t.jsx)(n.td,{children:"riskLimitDetail"}),(0,t.jsx)(n.td,{children:"text1"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"142"}),(0,t.jsx)(n.td,{children:"nbboBid1"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"145"}),(0,t.jsx)(n.td,{children:"nbboAsk1"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"148"}),(0,t.jsx)(n.td,{children:"nbboBidSize1"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"151"}),(0,t.jsx)(n.td,{children:"nbboAskSize1"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"154"}),(0,t.jsx)(n.td,{children:"nbboBidCnt1"}),(0,t.jsx)(n.td,{children:"byte"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"157"}),(0,t.jsx)(n.td,{children:"nbboAskCnt1"}),(0,t.jsx)(n.td,{children:"byte"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"160"}),(0,t.jsx)(n.td,{children:"nbboBidMask1"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"163"}),(0,t.jsx)(n.td,{children:"nbboAskMask1"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"166"}),(0,t.jsx)(n.td,{children:"nbboBid2"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"169"}),(0,t.jsx)(n.td,{children:"nbboAsk2"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"172"}),(0,t.jsx)(n.td,{children:"nbboBidSize2"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"175"}),(0,t.jsx)(n.td,{children:"nbboAskSize2"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"178"}),(0,t.jsx)(n.td,{children:"nbboBidCnt2"}),(0,t.jsx)(n.td,{children:"byte"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"181"}),(0,t.jsx)(n.td,{children:"nbboAskCnt2"}),(0,t.jsx)(n.td,{children:"byte"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"184"}),(0,t.jsx)(n.td,{children:"nbboBidMask2"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"187"}),(0,t.jsx)(n.td,{children:"nbboAskMask2"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"190"}),(0,t.jsx)(n.td,{children:"netTimestamp"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"193"}),(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrSweepDetail'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrSweepDetail'\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrSweepDetail\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'engineName|accnt|clientFirm|riskGroupId|triggerGroupId|secKey|secType|parentOrderSize|parentLimitPrice|orderSide|isISOSweep|riskLimitSize|riskLimitReason|riskLimitDetail|nbboBid1|nbboAsk1|nbboBidSize1|nbboAskSize1|nbboBidCnt1|nbboAskCnt1|nbboBidMask1|nbboAskMask1|nbboBid2|nbboAsk2|nbboBidSize2|nbboAskSize2|nbboBidCnt2|nbboAskCnt2|nbboBidMask2|nbboAskMask2|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'engineName:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrSweepDetail' \\\n--data-urlencode 'view=engineName|accnt|clientFirm|riskGroupId|triggerGroupId|secKey|secType|parentOrderSize|parentLimitPrice|orderSide|isISOSweep|riskLimitSize|riskLimitReason|riskLimitDetail|nbboBid1|nbboAsk1|nbboBidSize1|nbboAskSize1|nbboBidCnt1|nbboAskCnt1|nbboBidMask1|nbboAskMask1|nbboBid2|nbboAsk2|nbboBidSize2|nbboAskSize2|nbboBidCnt2|nbboAskCnt2|nbboBidMask2|nbboAskMask2|netTimestamp|timestamp' \\\n--data-urlencode 'where=engineName:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrSweepDetail\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'engineName|accnt|clientFirm|riskGroupId|triggerGroupId|secKey|secType|parentOrderSize|parentLimitPrice|orderSide|isISOSweep|riskLimitSize|riskLimitReason|riskLimitDetail|nbboBid1|nbboAsk1|nbboBidSize1|nbboAskSize1|nbboBidCnt1|nbboAskCnt1|nbboBidMask1|nbboAskMask1|nbboBid2|nbboAsk2|nbboBidSize2|nbboAskSize2|nbboBidCnt2|nbboAskCnt2|nbboBidMask2|nbboAskMask2|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'engineName:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'engineName:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrSweepDetail' \\\n--data-urlencode 'view=engineName|accnt|clientFirm|riskGroupId|triggerGroupId|secKey|secType|parentOrderSize|parentLimitPrice|orderSide|isISOSweep|riskLimitSize|riskLimitReason|riskLimitDetail|nbboBid1|nbboAsk1|nbboBidSize1|nbboAskSize1|nbboBidCnt1|nbboAskCnt1|nbboBidMask1|nbboAskMask1|nbboBid2|nbboAsk2|nbboBidSize2|nbboAskSize2|nbboBidCnt2|nbboAskCnt2|nbboBidMask2|nbboAskMask2|netTimestamp|timestamp' \\\n--data-urlencode 'where=engineName:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=engineName:ASC'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrSweepDetail\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'engineName|accnt|clientFirm|riskGroupId|triggerGroupId|secKey|secType|parentOrderSize|parentLimitPrice|orderSide|isISOSweep|riskLimitSize|riskLimitReason|riskLimitDetail|nbboBid1|nbboAsk1|nbboBidSize1|nbboAskSize1|nbboBidCnt1|nbboAskCnt1|nbboBidMask1|nbboAskMask1|nbboBid2|nbboAsk2|nbboBidSize2|nbboAskSize2|nbboBidCnt2|nbboAskCnt2|nbboBidMask2|nbboAskMask2|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'secType|orderSide|isISOSweep|riskLimitReason\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'engineName:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrSweepDetail' \\\n--data-urlencode 'measure=engineName|accnt|clientFirm|riskGroupId|triggerGroupId|secKey|secType|parentOrderSize|parentLimitPrice|orderSide|isISOSweep|riskLimitSize|riskLimitReason|riskLimitDetail|nbboBid1|nbboAsk1|nbboBidSize1|nbboAskSize1|nbboBidCnt1|nbboAskCnt1|nbboBidMask1|nbboAskMask1|nbboBid2|nbboAsk2|nbboBidSize2|nbboAskSize2|nbboBidCnt2|nbboAskCnt2|nbboBidMask2|nbboAskMask2|netTimestamp|timestamp' \\\n--data-urlencode 'group=secType|orderSide|isISOSweep|riskLimitReason' \\\n--data-urlencode 'where=engineName:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrSweepDetail\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'engineName:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrSweepDetail' \\\n--data-urlencode 'where=engineName:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),r=s(34164),i=s(23104),a=s(56347),d=s(205),l=s(57485),c=s(31682),o=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=b({queryString:s,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),j=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function S(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=l.indexOf(n),r=d[s].value;r!==t&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:d.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function k(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function X(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(S,{...n,...e}),(0,g.jsx)(k,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,g.jsx)(X,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);