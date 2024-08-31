"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[95929],{91956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(74848),s=n(28453),r=n(11470),l=n(19365);const i={title:"FutureSettlementMark"},c="Schema: FutureSettlementMark (ID: 3130)",o={id:"MessageSchemas/Schema/Topics/market-marks/FutureSettlementMark",title:"FutureSettlementMark",description:"Future settlement marks from the listing exchange",source:"@site/docs/MessageSchemas/Schema/Topics/3120-market-marks/FutureSettlementMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/FutureSettlementMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/FutureSettlementMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutureSettlementMark"},sidebar:"messageSchemasSidebar",previous:{title:"FutureOpenMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/FutureOpenMark"},next:{title:"OptionCloseMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionCloseMark"}},d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"schema-futuresettlementmark-id-3130",children:["Schema: FutureSettlementMark ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 3130)"})]}),"\n",(0,a.jsx)(t.p,{children:"Future settlement marks from the listing exchange"}),"\n",(0,a.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Attribute"}),(0,a.jsx)(t.th,{children:"Value"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Topic"}),(0,a.jsx)(t.td,{children:"3120-market-marks"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"MLink Token"}),(0,a.jsx)(t.td,{children:"FutMarkData"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"SRSE Product"}),(0,a.jsx)(t.td,{children:"SRLive"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"#"}),(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Comment"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"10="}),(0,a.jsx)(t.td,{children:"fkey"}),(0,a.jsx)(t.td,{children:"ExpiryKey"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"100"}),(0,a.jsx)(t.td,{children:"settleDate"}),(0,a.jsx)(t.td,{children:"DateKey"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"103"}),(0,a.jsx)(t.td,{children:"settlePx"}),(0,a.jsx)(t.td,{children:"double"}),(0,a.jsx)(t.td,{children:"Exchange settlement price"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"106"}),(0,a.jsx)(t.td,{children:"lowLmtPx"}),(0,a.jsx)(t.td,{children:"double"}),(0,a.jsx)(t.td,{children:"Exchange low limit price"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"109"}),(0,a.jsx)(t.td,{children:"highLmtPx"}),(0,a.jsx)(t.td,{children:"double"}),(0,a.jsx)(t.td,{children:"Exchange high limit price"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"112"}),(0,a.jsx)(t.td,{children:"openInt"}),(0,a.jsx)(t.td,{children:"int"}),(0,a.jsx)(t.td,{children:"Exchange open interest (date prior to settle date)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"115"}),(0,a.jsx)(t.td,{children:"volume"}),(0,a.jsx)(t.td,{children:"int"}),(0,a.jsx)(t.td,{children:"Exchange volume (date prior to settle date)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"118"}),(0,a.jsx)(t.td,{children:"early"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"121"}),(0,a.jsx)(t.td,{children:"timestamp"}),(0,a.jsx)(t.td,{children:"DateTime"}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'FutureSettlementMark'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=FutureSettlementMark'\n\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureSettlementMark\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'settleDate|settlePx|lowLmtPx|highLmtPx|openInt|volume|early|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=FutureSettlementMark' \\\n--data-urlencode 'view=settleDate|settlePx|lowLmtPx|highLmtPx|openInt|volume|early|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureSettlementMark\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'settleDate|settlePx|lowLmtPx|highLmtPx|openInt|volume|early|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'settleDate:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=FutureSettlementMark' \\\n--data-urlencode 'view=settleDate|settlePx|lowLmtPx|highLmtPx|openInt|volume|early|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=settleDate:ASC'\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureSettlementMark\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'settleDate|settlePx|lowLmtPx|highLmtPx|openInt|volume|early|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'early\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=FutureSettlementMark' \\\n--data-urlencode 'measure=settleDate|settlePx|lowLmtPx|highLmtPx|openInt|volume|early|timestamp' \\\n--data-urlencode 'group=early' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"Python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FutureSettlementMark\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=FutureSettlementMark' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(96540),s=n(34164),r=n(23104),l=n(56347),i=n(205),c=n(57485),o=n(31682),d=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,u]=p({queryString:n,groupId:s}),[g,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),X=(()=>{const e=o??g;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{X&&c(X)}),[X]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=n(92303);const X={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==a&&(o(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",X.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function f(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",X.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(y,{...t,...e})]})}function b(e){const t=(0,x.A)();return(0,j.jsx)(f,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);