"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["75518"],{95933:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/product-status/ProductPriceBand","title":"ProductPriceBand","description":"This table contains live trading bands, as advertised by the listing exchange, for futures markets with bands.","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/4440-product-status/ProductPriceBand.md","sourceDirName":"MessageSchemas/Schema/Topics/4440-product-status","slug":"/MessageSchemas/Schema/Topics/product-status/ProductPriceBand","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/product-status/ProductPriceBand","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"ProductPriceBand"},"sidebar":"messageSchemasSidebar","previous":{"title":"NMSCircuitBreaker","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/product-status/NMSCircuitBreaker"},"next":{"title":"ProductTradingStatus","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/product-status/ProductTradingStatus"}}'),a=t("52676"),s=t("91503"),i=t("71386"),l=t("9641");let c={title:"ProductPriceBand"},o="Schema: ProductPriceBand (ID: 4460)",d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"schema-productpriceband-id-4460",children:["Schema: ProductPriceBand ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 4460)"})]})}),"\n",(0,a.jsx)(n.p,{children:"This table contains live trading bands, as advertised by the listing exchange, for futures markets with bands."}),"\n",(0,a.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Topic"}),(0,a.jsx)(n.td,{children:"4440-product-status"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"MLink Token"}),(0,a.jsx)(n.td,{children:"ClientLive"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SRSE Product"}),(0,a.jsx)(n.td,{children:"SRLive"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"#"}),(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Comment"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"10="}),(0,a.jsx)(n.td,{children:"fkey"}),(0,a.jsx)(n.td,{children:"ExpiryKey"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"100"}),(0,a.jsx)(n.td,{children:"lowLimitPrice"}),(0,a.jsx)(n.td,{children:"double"}),(0,a.jsx)(n.td,{children:"Low price limit (0 if not set)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"103"}),(0,a.jsx)(n.td,{children:"highLimitPrice"}),(0,a.jsx)(n.td,{children:"double"}),(0,a.jsx)(n.td,{children:"high price limit (0 if not set)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"106"}),(0,a.jsx)(n.td,{children:"maxPriceVar"}),(0,a.jsx)(n.td,{children:"double"}),(0,a.jsx)(n.td,{children:"Maximum price variation allowed (distance from last best price (bid/ask))"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"109"}),(0,a.jsx)(n.td,{children:"timestamp"}),(0,a.jsx)(n.td,{children:"DateTime"}),(0,a.jsx)(n.td,{children:"time of last state update"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'ProductPriceBand'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=ProductPriceBand'\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductPriceBand\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'lowLimitPrice|highLimitPrice|maxPriceVar|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=ProductPriceBand' \\\n--data-urlencode 'view=lowLimitPrice|highLimitPrice|maxPriceVar|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductPriceBand\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'lowLimitPrice|highLimitPrice|maxPriceVar|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'lowLimitPrice:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=ProductPriceBand' \\\n--data-urlencode 'view=lowLimitPrice|highLimitPrice|maxPriceVar|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=lowLimitPrice:ASC'\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductPriceBand\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'lowLimitPrice|highLimitPrice|maxPriceVar|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=ProductPriceBand' \\\n--data-urlencode 'measure=lowLimitPrice|highLimitPrice|maxPriceVar|timestamp' \\\n--data-urlencode 'group=' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"Python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductPriceBand\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,a.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=ProductPriceBand' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9641:function(e,n,t){t.d(n,{Z:()=>s});var r=t("52676");t("75271");var a=t("54461");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_SSzl",s),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>P});var r=t("52676"),a=t("75271"),s=t("54461"),i=t("52289"),l=t("3225"),c=t("42834"),o=t("40578"),d=t("35834"),u=t("79616");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function g(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let n=e.currentTarget,t=c[o.indexOf(n)].value;t!==a&&(d(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...i,className:(0,s.Z)("tabs__item","tabItem_aitt",i?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function X(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[g,X]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[f,P]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),x=(()=>{let e=g??f;return m({value:e,tabValues:s})?e:null})();return(0,c.Z)(()=>{x&&p(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),X(e),P(e)},[X,P,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(X,{...n,...e})]})}function P(e){let n=(0,p.Z)();return(0,r.jsx)(f,{...e,children:h(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(75271);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);