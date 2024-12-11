"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63307],{28261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var s=t(74848),r=t(28453),a=t(11470),i=t(19365);const l={title:"ClientAccountConfig"},c="Schema: ClientAccountConfig (ID: 1835)",o={id:"MessageSchemas/Schema/Topics/client-config/ClientAccountConfig",title:"ClientAccountConfig",description:"METADATA",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/Topics/1800-client-config/ClientAccountConfig.md",sourceDirName:"MessageSchemas/Schema/Topics/1800-client-config",slug:"/MessageSchemas/Schema/Topics/client-config/ClientAccountConfig",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/client-config/ClientAccountConfig",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{title:"ClientAccountConfig"},sidebar:"messageSchemasSidebar",previous:{title:"ClientAccntStrategyMap",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/client-config/ClientAccntStrategyMap"},next:{title:"ClientFirmConfig",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/Topics/client-config/ClientFirmConfig"}},d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"schema-clientaccountconfig-id-1835",children:["Schema: ClientAccountConfig ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1835)"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"1800-client-config"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientControl"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRControl"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"SR assigned client firm acronym"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"clientTags"}),(0,s.jsx)(n.td,{children:"text2"}),(0,s.jsx)(n.td,{children:"(optional) user defined account tag(s) (eg. tag,tag,tag,tag) [max of 10,000 total chars (including seps)]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"proxyFirm1"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"proxy firm #1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"proxyFirm2"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"proxy firm #2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"proxyFirm3"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"proxy firm #3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"theoModel"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"theo model (empty = use default from SR account config)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"theoModel2"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"theo model2 (empty = use default from SR account config)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"hedgeDeltaRule"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum : HedgeDeltaRule"})}),(0,s.jsx)(n.td,{children:"HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (dynamic), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface (dynamic)) [AccountConfig.hedgeDelta]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"binaryDays"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"used to force delta calcs binary prior to expiration (-1 = use SR account config value) (can be overridden by SymbolControl.binaryDays)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"accntColor"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"color used to display this account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"string(24)"}),(0,s.jsx)(n.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'ClientAccountConfig'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=ClientAccountConfig'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientAccountConfig\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'clientTags|proxyFirm1|proxyFirm2|proxyFirm3|theoModel|theoModel2|hedgeDeltaRule|binaryDays|accntColor|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=ClientAccountConfig' \\\n--data-urlencode 'view=clientTags|proxyFirm1|proxyFirm2|proxyFirm3|theoModel|theoModel2|hedgeDeltaRule|binaryDays|accntColor|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientAccountConfig\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'clientTags|proxyFirm1|proxyFirm2|proxyFirm3|theoModel|theoModel2|hedgeDeltaRule|binaryDays|accntColor|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'clientTags:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=ClientAccountConfig' \\\n--data-urlencode 'view=clientTags|proxyFirm1|proxyFirm2|proxyFirm3|theoModel|theoModel2|hedgeDeltaRule|binaryDays|accntColor|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=clientTags:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientAccountConfig\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'clientTags|proxyFirm1|proxyFirm2|proxyFirm3|theoModel|theoModel2|hedgeDeltaRule|binaryDays|accntColor|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'hedgeDeltaRule|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=ClientAccountConfig' \\\n--data-urlencode 'measure=clientTags|proxyFirm1|proxyFirm2|proxyFirm3|theoModel|theoModel2|hedgeDeltaRule|binaryDays|accntColor|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=hedgeDeltaRule|modifiedIn' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientAccountConfig\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=ClientAccountConfig' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(96540),r=t(34164),a=t(23104),i=t(56347),l=t(205),c=t(57485),o=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=p({queryString:t,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=o??g;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==s&&(o(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function X(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,y.jsx)(j,{...n,...e}),(0,y.jsx)(X,{...n,...e})]})}function b(e){const n=(0,x.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);