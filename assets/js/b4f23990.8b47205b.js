"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["14988"],{63896:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>u,contentTitle:()=>d});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/wsh-corporate-event/WshFutureQuarters","title":"WshFutureQuarters","description":"WshFutureQuarters records contain future earnings projected dates from Wall Street Horizons.","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/7600-wsh-corporate-event/WshFutureQuarters.md","sourceDirName":"MessageSchemas/Schema/Topics/7600-wsh-corporate-event","slug":"/MessageSchemas/Schema/Topics/wsh-corporate-event/WshFutureQuarters","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/wsh-corporate-event/WshFutureQuarters","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"WshFutureQuarters"},"sidebar":"messageSchemasSidebar","previous":{"title":"7600-wsh-corporate-event","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/wsh-corporate-event/"},"next":{"title":"7800-nations-index-prices","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/nations-index-prices/"}}'),s=t("52676"),a=t("91503"),l=t("71386"),i=t("9641");let c={title:"WshFutureQuarters"},d="Schema: WshFutureQuarters (ID: 7600)",o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"schema-wshfuturequarters-id-7600",children:["Schema: WshFutureQuarters ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 7600)"})]})}),"\n",(0,s.jsx)(n.p,{children:"WshFutureQuarters records contain future earnings projected dates from Wall Street Horizons."}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"7600-wsh-corporate-event"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"WSHCorporateEvent"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"ticker"}),(0,s.jsx)(n.td,{children:"TickerKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/EventSource",children:"enum : EventSource"})}),(0,s.jsx)(n.td,{children:"Live=currentEarningsDate; priorDay=previousEarningsDate"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"stkExch"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"Wall Street Horizon stock exchange code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"ts"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"last update time (Date)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(n.p,{children:"Earnings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"confidenceInd"}),(0,s.jsx)(n.td,{children:"string(3)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"earningDate"}),(0,s.jsx)(n.td,{children:"DateTime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"quarter"}),(0,s.jsx)(n.td,{children:"string(2)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"fiscalYr"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"earningDateStatus"}),(0,s.jsx)(n.td,{children:"string(11)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"quarterEndDate"}),(0,s.jsx)(n.td,{children:"DateTime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"fillingDueDate"}),(0,s.jsx)(n.td,{children:"DateTime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"timeOfDay"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"disclaimer"}),(0,s.jsx)(n.td,{children:"string(3)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"auditSrc"}),(0,s.jsx)(n.td,{children:"string(128)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'WshFutureQuarters'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=WshFutureQuarters'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'WshFutureQuarters\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'stkExch|ts\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=WshFutureQuarters' \\\n--data-urlencode 'view=stkExch|ts' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'WshFutureQuarters\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'stkExch|ts\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'stkExch:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=WshFutureQuarters' \\\n--data-urlencode 'view=stkExch|ts' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=stkExch:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'WshFutureQuarters\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'stkExch|ts\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=WshFutureQuarters' \\\n--data-urlencode 'measure=stkExch|ts' \\\n--data-urlencode 'group=' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'WshFutureQuarters\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=WshFutureQuarters' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9641:function(e,n,t){t.d(n,{Z:()=>a});var r=t("52676");t("75271");var s=t("54461");function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",a),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>X});var r=t("52676"),s=t("75271"),a=t("54461"),l=t("52289"),i=t("3225"),c=t("42834"),d=t("40578"),o=t("35834"),u=t("79616");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("44537");function g(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:c}=e,d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{let n=e.currentTarget,t=c[d.indexOf(n)].value;t!==s&&(o(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...l,className:(0,a.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[g,x]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(a),(0,s.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[j,X]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,a]=(0,u.Nk)(t);return[r,(0,s.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:r}),f=(()=>{let e=g??j;return p({value:e,tabValues:a})?e:null})();return(0,c.Z)(()=>{f&&m(f)},[f]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),X(e)},[x,X,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(x,{...n,...e})]})}function X(e){let n=(0,m.Z)();return(0,r.jsx)(j,{...e,children:h(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(75271);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);