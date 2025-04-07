"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["25637"],{23387:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"MessageSchemas/Schema/Topics/option-pricing/StockEarningsCalendar","title":"StockEarningsCalendar","description":"StockEarningsCalendar records contain a historical (prior 12) earnings dates and future (next 12) projected dates.","source":"@site/docs/MessageSchemas/Schema/Topics/3585-option-pricing/StockEarningsCalendar.md","sourceDirName":"MessageSchemas/Schema/Topics/3585-option-pricing","slug":"/MessageSchemas/Schema/Topics/option-pricing/StockEarningsCalendar","permalink":"/docs/next/MessageSchemas/Schema/Topics/option-pricing/StockEarningsCalendar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"StockEarningsCalendar"},"sidebar":"messageSchemasSidebar","previous":{"title":"GlobalRates","permalink":"/docs/next/MessageSchemas/Schema/Topics/option-pricing/GlobalRates"},"next":{"title":"UserDividendOverride","permalink":"/docs/next/MessageSchemas/Schema/Topics/option-pricing/UserDividendOverride"}}'),r=t("52676"),a=t("91503"),l=t("71386"),i=t("9641");let d={title:"StockEarningsCalendar"},c="Schema: StockEarningsCalendar (ID: 3620)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"schema-stockearningscalendar-id-3620",children:["Schema: StockEarningsCalendar ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3620)"})]})}),"\n",(0,r.jsx)(n.p,{children:"StockEarningsCalendar records contain a historical (prior 12) earnings dates and future (next 12) projected dates."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3585-option-pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"EqtAnalytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10="}),(0,r.jsx)(n.td,{children:"ticker"}),(0,r.jsx)(n.td,{children:"TickerKey"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11="}),(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/EventSource",children:"enum : EventSource"})}),(0,r.jsx)(n.td,{children:"Live=currentEarningsDate; priorDay=previousEarningsDate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"eMoveHist"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"historical average (trailing 8) earnings moves prior to today"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"timestamp of record"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(n.p,{children:"Event"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"109"}),(0,r.jsx)(n.td,{children:"eventDate"}),(0,r.jsx)(n.td,{children:"DateKey"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"eventTime"}),(0,r.jsx)(n.td,{children:"string(8)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"earnStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/EarnStatus",children:"enum : EarnStatus"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"guidanceIssued"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/GuidanceIssued",children:"enum : GuidanceIssued"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"121"}),(0,r.jsx)(n.td,{children:"earnFiscalQtr"}),(0,r.jsx)(n.td,{children:"DateKey"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"124"}),(0,r.jsx)(n.td,{children:"earnChange"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/earnChange",children:"enum : earnChange"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"earnPctMove"}),(0,r.jsx)(n.td,{children:"float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"prvClose"}),(0,r.jsx)(n.td,{children:"float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"open"}),(0,r.jsx)(n.td,{children:"float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"136"}),(0,r.jsx)(n.td,{children:"high"}),(0,r.jsx)(n.td,{children:"float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"low"}),(0,r.jsx)(n.td,{children:"float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"142"}),(0,r.jsx)(n.td,{children:"close"}),(0,r.jsx)(n.td,{children:"float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"145"}),(0,r.jsx)(n.td,{children:"moveDate"}),(0,r.jsx)(n.td,{children:"DateKey"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"148"}),(0,r.jsx)(n.td,{children:"hEMove"}),(0,r.jsx)(n.td,{children:"float"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockEarningsCalendar'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockEarningsCalendar'\n\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockEarningsCalendar\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'eMoveHist|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockEarningsCalendar' \\\n--data-urlencode 'view=eMoveHist|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockEarningsCalendar\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'eMoveHist|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'eMoveHist:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockEarningsCalendar' \\\n--data-urlencode 'view=eMoveHist|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=eMoveHist:ASC'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockEarningsCalendar\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'eMoveHist|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockEarningsCalendar' \\\n--data-urlencode 'measure=eMoveHist|timestamp' \\\n--data-urlencode 'group=' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockEarningsCalendar\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockEarningsCalendar' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9641:function(e,n,t){t.d(n,{Z:()=>a});var s=t("52676");t("75271");var r=t("54461");function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_SSzl",a),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>X});var s=t("52676"),r=t("75271"),a=t("54461"),l=t("52289"),i=t("3225"),d=t("42834"),c=t("40578"),o=t("35834"),h=t("79616");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("44537");function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:d}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=d[c.indexOf(n)].value;t!==r&&(o(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:d.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...l,className:(0,a.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,a=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,m]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[g,x]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})},[a,s])]}({queryString:t,groupId:s}),[j,X]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[s,a]=(0,h.Nk)(t);return[s,(0,r.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:s}),v=(()=>{let e=g??j;return p({value:e,tabValues:a})?e:null})();return(0,d.Z)(()=>{v&&m(v)},[v]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),X(e)},[x,X,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_ArS0"),children:[(0,s.jsx)(g,{...n,...e}),(0,s.jsx)(x,{...n,...e})]})}function X(e){let n=(0,m.Z)();return(0,s.jsx)(j,{...e,children:u(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(75271);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);