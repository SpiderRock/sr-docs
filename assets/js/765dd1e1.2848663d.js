"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[62060],{27449:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=s(74848),r=s(28453),a=s(11470),l=s(19365);const i={title:"SpdrUserCancel"},c="Schema: SpdrUserCancel (ID: 4140)",d={id:"MessageSchemas/Schema/Topics/parent-orders/SpdrUserCancel",title:"SpdrUserCancel",description:"Records inserted into this table cancels all parent orders associated with userName/clientFirm",source:"@site/docs/MessageSchemas/Schema/Topics/3985-parent-orders/SpdrUserCancel.md",sourceDirName:"MessageSchemas/Schema/Topics/3985-parent-orders",slug:"/MessageSchemas/Schema/Topics/parent-orders/SpdrUserCancel",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrUserCancel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrUserCancel"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStripeTrigger",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrStripeTrigger"},next:{title:"4195-parent-review",permalink:"/docs/MessageSchemas/Schema/Topics/parent-review/"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"schema-spdrusercancel-id-4140",children:["Schema: SpdrUserCancel ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4140)"})]}),"\n",(0,t.jsx)(n.p,{children:"Records inserted into this table cancels all parent orders associated with userName/clientFirm"}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"3985-parent-orders"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"SystemData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Product"}),(0,t.jsx)(n.td,{children:"SRTrade"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10="}),(0,t.jsx)(n.td,{children:"cxlUserName"}),(0,t.jsx)(n.td,{children:"string(24)"}),(0,t.jsx)(n.td,{children:"Cancel all parent orders associated with cxlUserName and clientFirm"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11="}),(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"sysEnvironment"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(n.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"103"}),(0,t.jsx)(n.td,{children:"runStatus"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,t.jsx)(n.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"106"}),(0,t.jsx)(n.td,{children:"cxlReason"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"119"}),(0,t.jsx)(n.td,{children:"engineName"}),(0,t.jsx)(n.td,{children:"string(32)"}),(0,t.jsx)(n.td,{children:"set by the engine handling event (should be blank on arrival)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"modifiedBy"}),(0,t.jsx)(n.td,{children:"string(24)"}),(0,t.jsx)(n.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"115"}),(0,t.jsx)(n.td,{children:"modifiedIn"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"118"}),(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrUserCancel'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrUserCancel'\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrUserCancel\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'sysEnvironment|runStatus|cxlReason|engineName|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'cxlUserName:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrUserCancel' \\\n--data-urlencode 'view=sysEnvironment|runStatus|cxlReason|engineName|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=cxlUserName:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrUserCancel\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'sysEnvironment|runStatus|cxlReason|engineName|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'cxlUserName:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'sysEnvironment:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrUserCancel' \\\n--data-urlencode 'view=sysEnvironment|runStatus|cxlReason|engineName|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=cxlUserName:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=sysEnvironment:ASC'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrUserCancel\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'sysEnvironment|runStatus|cxlReason|engineName|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'sysEnvironment|runStatus|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'cxlUserName:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrUserCancel' \\\n--data-urlencode 'measure=sysEnvironment|runStatus|cxlReason|engineName|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=sysEnvironment|runStatus|modifiedIn' \\\n--data-urlencode 'where=cxlUserName:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrUserCancel\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'cxlUserName:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrUserCancel' \\\n--data-urlencode 'where=cxlUserName:eq:ExampleString'\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>b});var t=s(96540),r=s(34164),a=s(23104),l=s(56347),i=s(205),c=s(57485),d=s(31682),o=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,u]=p({queryString:s,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,o.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),X=(()=>{const e=d??g;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{X&&c(X)}),[X]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=s(92303);const X={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function y(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),r=i[s].value;r!==t&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...a,className:(0,r.A)("tabs__item",X.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",X.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(f,{...n,...e})]})}function b(e){const n=(0,x.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);