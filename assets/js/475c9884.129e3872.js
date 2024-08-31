"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56551],{53216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(74848),a=n(28453),s=n(11470),l=n(19365);const i={title:"FutAwayTktGateway"},c="Schema: FutAwayTktGateway (ID: 5145)",d={id:"MessageSchemas/Schema/Topics/srse-gateway/FutAwayTktGateway",title:"FutAwayTktGateway",description:"FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed.",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/Topics/5120-srse-gateway/FutAwayTktGateway.md",sourceDirName:"MessageSchemas/Schema/Topics/5120-srse-gateway",slug:"/MessageSchemas/Schema/Topics/srse-gateway/FutAwayTktGateway",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/srse-gateway/FutAwayTktGateway",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{title:"FutAwayTktGateway"},sidebar:"messageSchemasSidebar",previous:{title:"ExternAggGroupGateway",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/srse-gateway/ExternAggGroupGateway"},next:{title:"FutOrderGateway",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/srse-gateway/FutOrderGateway"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-futawaytktgateway-id-5145",children:["Schema: FutAwayTktGateway ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5145)"})]}),"\n",(0,r.jsxs)(t.p,{children:["FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"5120-srse-gateway"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"accnt"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"11="}),(0,r.jsx)(t.td,{children:"clientFillID"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"client execution ID, these must be unique on a per-account basis [copied into SpdrParentExecution.altFillId]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"12="}),(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"clientOrderID"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{children:"client orderID [copied into SpdrParentExecution.altOrderId]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"riskGroupId"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"Default: 0 (none).  Required to be non-zero if incorporating risk into an existing riskGroupId"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"fkey"}),(0,r.jsx)(t.td,{children:"ExpiryKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"fillSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"fillPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"fillQuantity"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"fillRefUPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"reference underlier price @ fill arrival time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"deliverExecReport"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"Drop a copy of the execution report"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"SRfillID"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"SR internal fill number, any values submitted will be overwritten by the SR generated fill number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"comment"}),(0,r.jsx)(t.td,{children:"string(64)"}),(0,r.jsx)(t.td,{children:"text comment (if any)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"execBrkr"}),(0,r.jsx)(t.td,{children:"string(12)"}),(0,r.jsx)(t.td,{children:"client (external) exec broker code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"userData1"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"userData2"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"strategy"}),(0,r.jsx)(t.td,{children:"string(36)"}),(0,r.jsx)(t.td,{children:"client-supplied strategy string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"fillDttm"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"148"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"151"}),(0,r.jsx)(t.td,{children:"checksum"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"Must be set to 13.  This helps detect some column,value misalignments."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'FutAwayTktGateway'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=FutAwayTktGateway'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutAwayTktGateway\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'clientOrderID|riskGroupId|fkey|fillSide|fillPrice|fillQuantity|fillRefUPrc|deliverExecReport|SRfillID|comment|execBrkr|userData1|userData2|strategy|fillDttm|timestamp|checksum\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=FutAwayTktGateway' \\\n--data-urlencode 'view=clientOrderID|riskGroupId|fkey|fillSide|fillPrice|fillQuantity|fillRefUPrc|deliverExecReport|SRfillID|comment|execBrkr|userData1|userData2|strategy|fillDttm|timestamp|checksum' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutAwayTktGateway\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'clientOrderID|riskGroupId|fkey|fillSide|fillPrice|fillQuantity|fillRefUPrc|deliverExecReport|SRfillID|comment|execBrkr|userData1|userData2|strategy|fillDttm|timestamp|checksum\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'clientOrderID:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=FutAwayTktGateway' \\\n--data-urlencode 'view=clientOrderID|riskGroupId|fkey|fillSide|fillPrice|fillQuantity|fillRefUPrc|deliverExecReport|SRfillID|comment|execBrkr|userData1|userData2|strategy|fillDttm|timestamp|checksum' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=clientOrderID:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutAwayTktGateway\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'clientOrderID|riskGroupId|fkey|fillSide|fillPrice|fillQuantity|fillRefUPrc|deliverExecReport|SRfillID|comment|execBrkr|userData1|userData2|strategy|fillDttm|timestamp|checksum\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'fillSide|deliverExecReport\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=FutAwayTktGateway' \\\n--data-urlencode 'measure=clientOrderID|riskGroupId|fkey|fillSide|fillPrice|fillQuantity|fillRefUPrc|deliverExecReport|SRfillID|comment|execBrkr|userData1|userData2|strategy|fillDttm|timestamp|checksum' \\\n--data-urlencode 'group=fillSide|deliverExecReport' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutAwayTktGateway\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=FutAwayTktGateway' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),a=n(34164),s=n(23104),l=n(56347),i=n(205),c=n(57485),d=n(31682),o=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:a}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,o.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{y&&c(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(d(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function X(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(w,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,f.jsx)(X,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);