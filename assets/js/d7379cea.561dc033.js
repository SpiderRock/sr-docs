"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["566"],{33678:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>u,contentTitle:()=>c});var a=JSON.parse('{"id":"MessageSchemas/Schema/Topics/market-statistics/OptionOpenVega","title":"OptionOpenVega","description":"This table contains cumulative open interest, day trading volume in terms of both contracts and vega.","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3225-market-statistics/OptionOpenVega.md","sourceDirName":"MessageSchemas/Schema/Topics/3225-market-statistics","slug":"/MessageSchemas/Schema/Topics/market-statistics/OptionOpenVega","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-statistics/OptionOpenVega","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"OptionOpenVega"},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionOpenInterest","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-statistics/OptionOpenInterest"},"next":{"title":"StockBeta","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-statistics/StockBeta"}}'),s=t("52676"),r=t("91503"),i=t("71386"),l=t("9641");let o={title:"OptionOpenVega"},c="Schema: OptionOpenVega (ID: 3235)",d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"schema-optionopenvega-id-3235",children:["Schema: OptionOpenVega ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3235)"})]})}),"\n",(0,s.jsx)(n.p,{children:"This table contains cumulative open interest, day trading volume in terms of both contracts and vega."}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"3225-market-statistics"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SRMLinkAnalytics"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"ekey"}),(0,s.jsx)(n.td,{children:"ExpiryKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"tradingDate"}),(0,s.jsx)(n.td,{children:"DateKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"ticker"}),(0,s.jsx)(n.td,{children:"TickerKey"}),(0,s.jsx)(n.td,{children:"ticker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"openInt"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"open interest"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"volume"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"option volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"openVega"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"open vega (sum of vega * open interest)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"vegaVolume"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sum of vega * volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"numOptions"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"number of strikes in this expiration month"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionOpenVega'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionOpenVega'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenVega\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'tradingDate|ticker|openInt|volume|openVega|vegaVolume|numOptions|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionOpenVega' \\\n--data-urlencode 'view=tradingDate|ticker|openInt|volume|openVega|vegaVolume|numOptions|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenVega\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'tradingDate|ticker|openInt|volume|openVega|vegaVolume|numOptions|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'tradingDate:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionOpenVega' \\\n--data-urlencode 'view=tradingDate|ticker|openInt|volume|openVega|vegaVolume|numOptions|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=tradingDate:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenVega\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'tradingDate|ticker|openInt|volume|openVega|vegaVolume|numOptions|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionOpenVega' \\\n--data-urlencode 'measure=tradingDate|ticker|openInt|volume|openVega|vegaVolume|numOptions|timestamp' \\\n--data-urlencode 'group=' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionOpenVega\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionOpenVega' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9641:function(e,n,t){t.d(n,{Z:()=>r});var a=t("52676");t("75271");var s=t("54461");function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",r),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>x});var a=t("52676"),s=t("75271"),r=t("54461"),i=t("52289"),l=t("3225"),o=t("42834"),c=t("40578"),d=t("35834"),u=t("79616");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("44537");function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==s&&(d(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,r.Z)("tabs__item","tabItem_aitt",i?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function X(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,r=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:r})),[g,X]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})},[r,a])]}({queryString:t,groupId:a}),[v,x]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,r]=(0,u.Nk)(t);return[a,(0,s.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:a}),j=(()=>{let e=g??v;return p({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),X(e),x(e)},[X,x,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList_ArS0"),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(X,{...n,...e})]})}function x(e){let n=(0,m.Z)();return(0,a.jsx)(v,{...e,children:h(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(75271);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);