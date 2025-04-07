"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["81156"],{74008:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>u,contentTitle:()=>d});var s=JSON.parse('{"id":"MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt","title":"SpdrExchRiskMgmt","description":"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/3895-order-routing-counter/SpdrExchRiskMgmt.md","sourceDirName":"MessageSchemas/Schema/Topics/3895-order-routing-counter","slug":"/MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"SpdrExchRiskMgmt"},"sidebar":"messageSchemasSidebar","previous":{"title":"SpdrClientFirmRiskMgmt","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/order-routing-counter/SpdrClientFirmRiskMgmt"},"next":{"title":"3985-parent-orders","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/parent-orders/"}}'),r=t("52676"),a=t("91503"),i=t("71386"),l=t("9641");let c={title:"SpdrExchRiskMgmt"},d="Schema: SpdrExchRiskMgmt (ID: 3925)",o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"schema-spdrexchriskmgmt-id-3925",children:["Schema: SpdrExchRiskMgmt ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3925)"})]})}),"\n",(0,r.jsx)(n.p,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3895-order-routing-counter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientTrading"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10="}),(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11="}),(0,r.jsx)(n.td,{children:"exch"}),(0,r.jsx)(n.td,{children:"string(8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12="}),(0,r.jsx)(n.td,{children:"securityGroup"}),(0,r.jsx)(n.td,{children:"string(6)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/RiskStatus",children:"enum : RiskStatus"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"numRejects"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"106"}),(0,r.jsx)(n.td,{children:"secKey"}),(0,r.jsx)(n.td,{children:"OptionKey"}),(0,r.jsx)(n.td,{children:"most recently rejected secKey"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"109"}),(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{children:"most recently rejected accnt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"rejectText"}),(0,r.jsx)(n.td,{children:"text1"}),(0,r.jsx)(n.td,{children:"most recent rejectText"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"spdrSource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"121"}),(0,r.jsx)(n.td,{children:"expires"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"Time the riggered Risk limit expires"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"124"}),(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"string(24)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrExchRiskMgmt'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrExchRiskMgmt'\n\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrExchRiskMgmt\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'status|numRejects|secKey|secType|accnt|rejectText|spdrSource|expires|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrExchRiskMgmt' \\\n--data-urlencode 'view=status|numRejects|secKey|secType|accnt|rejectText|spdrSource|expires|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrExchRiskMgmt\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'status|numRejects|secKey|secType|accnt|rejectText|spdrSource|expires|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'status:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrExchRiskMgmt' \\\n--data-urlencode 'view=status|numRejects|secKey|secType|accnt|rejectText|spdrSource|expires|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=status:ASC'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrExchRiskMgmt\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'status|numRejects|secKey|secType|accnt|rejectText|spdrSource|expires|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'status|secType|spdrSource|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrExchRiskMgmt' \\\n--data-urlencode 'measure=status|numRejects|secKey|secType|accnt|rejectText|spdrSource|expires|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=status|secType|spdrSource|modifiedIn' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrExchRiskMgmt\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrExchRiskMgmt' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9641:function(e,n,t){t.d(n,{Z:()=>a});var s=t("52676");t("75271");var r=t("54461");function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_SSzl",a),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>X});var s=t("52676"),r=t("75271"),a=t("54461"),i=t("52289"),l=t("3225"),c=t("42834"),d=t("40578"),o=t("35834"),u=t("79616");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:c}=e,d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),u=e=>{let n=e.currentTarget,t=c[d.indexOf(n)].value;t!==r&&(o(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.Z)("tabs__item","tabItem_aitt",i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,a=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[g,x]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(a),(0,r.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})},[a,s])]}({queryString:t,groupId:s}),[j,X]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:s}),y=(()=>{let e=g??j;return m({value:e,tabValues:a})?e:null})();return(0,c.Z)(()=>{y&&p(y)},[y]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),x(e),X(e)},[x,X,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_ArS0"),children:[(0,s.jsx)(g,{...n,...e}),(0,s.jsx)(x,{...n,...e})]})}function X(e){let n=(0,p.Z)();return(0,s.jsx)(j,{...e,children:h(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(75271);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);