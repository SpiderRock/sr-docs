"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8269],{29906:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=a(74848),s=a(28453),r=a(11470),l=a(19365);const c={title:"StockImbalance"},i="Schema: StockImbalance (ID: 3035)",o={id:"MessageSchemas/Schema/Topics/market-data-stock/StockImbalance",title:"StockImbalance",description:"StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close.",source:"@site/docs/MessageSchemas/Schema/Topics/2990-market-data-stock/StockImbalance.md",sourceDirName:"MessageSchemas/Schema/Topics/2990-market-data-stock",slug:"/MessageSchemas/Schema/Topics/market-data-stock/StockImbalance",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-stock/StockImbalance",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockImbalance"},sidebar:"messageSchemasSidebar",previous:{title:"StockExchImbalanceV2",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-stock/StockExchImbalanceV2"},next:{title:"StockMarketSummary",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-stock/StockMarketSummary"}},d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"schema-stockimbalance-id-3035",children:["Schema: StockImbalance ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3035)"})]}),"\n",(0,t.jsxs)(n.p,{children:["StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"2990-market-data-stock"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"ClientLive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Product"}),(0,t.jsx)(n.td,{children:"SRLive"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10="}),(0,t.jsx)(n.td,{children:"ticker"}),(0,t.jsx)(n.td,{children:"TickerKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11="}),(0,t.jsx)(n.td,{children:"auctionType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AuctionReason",children:"enum : AuctionReason"})}),(0,t.jsx)(n.td,{children:"Opening/Closing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"auctionTime"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"103"}),(0,t.jsx)(n.td,{children:"maxImbalance"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"106"}),(0,t.jsx)(n.td,{children:"maxImbalanceExch"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"109"}),(0,t.jsx)(n.td,{children:"maxImbalanceMatchPx"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"maxImbalanceStatus"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AuctionStatus",children:"enum : AuctionStatus"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"115"}),(0,t.jsx)(n.td,{children:"cumBidImbalanceMkt"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"118"}),(0,t.jsx)(n.td,{children:"cumAskImbalanceMkt"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"121"}),(0,t.jsx)(n.td,{children:"cumBidImbalanceTot"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"124"}),(0,t.jsx)(n.td,{children:"cumAskImbalanceTot"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"127"}),(0,t.jsx)(n.td,{children:"cumPairedQty"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"130"}),(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockImbalance'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockImbalance'\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockImbalance\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'auctionTime|maxImbalance|maxImbalanceExch|maxImbalanceMatchPx|maxImbalanceStatus|cumBidImbalanceMkt|cumAskImbalanceMkt|cumBidImbalanceTot|cumAskImbalanceTot|cumPairedQty|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockImbalance' \\\n--data-urlencode 'view=auctionTime|maxImbalance|maxImbalanceExch|maxImbalanceMatchPx|maxImbalanceStatus|cumBidImbalanceMkt|cumAskImbalanceMkt|cumBidImbalanceTot|cumAskImbalanceTot|cumPairedQty|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockImbalance\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'auctionTime|maxImbalance|maxImbalanceExch|maxImbalanceMatchPx|maxImbalanceStatus|cumBidImbalanceMkt|cumAskImbalanceMkt|cumBidImbalanceTot|cumAskImbalanceTot|cumPairedQty|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'auctionTime:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockImbalance' \\\n--data-urlencode 'view=auctionTime|maxImbalance|maxImbalanceExch|maxImbalanceMatchPx|maxImbalanceStatus|cumBidImbalanceMkt|cumAskImbalanceMkt|cumBidImbalanceTot|cumAskImbalanceTot|cumPairedQty|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=auctionTime:ASC'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockImbalance\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'auctionTime|maxImbalance|maxImbalanceExch|maxImbalanceMatchPx|maxImbalanceStatus|cumBidImbalanceMkt|cumAskImbalanceMkt|cumBidImbalanceTot|cumAskImbalanceTot|cumPairedQty|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'maxImbalanceExch|maxImbalanceStatus\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockImbalance' \\\n--data-urlencode 'measure=auctionTime|maxImbalance|maxImbalanceExch|maxImbalanceMatchPx|maxImbalanceStatus|cumBidImbalanceMkt|cumAskImbalanceMkt|cumBidImbalanceTot|cumAskImbalanceTot|cumPairedQty|timestamp' \\\n--data-urlencode 'group=maxImbalanceExch|maxImbalanceStatus' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockImbalance\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockImbalance' \\\n--data-urlencode 'where='\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var t=a(34164);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>f});var t=a(96540),s=a(34164),r=a(23104),l=a(56347),c=a(205),i=a(57485),o=a(31682),d=a(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=m(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,u]=p({queryString:a,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),g=(()=>{const e=o??x;return h({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function I(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),s=c[a].value;s!==t&&(o(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function X(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,j.jsx)(I,{...n,...e}),(0,j.jsx)(X,{...n,...e})]})}function f(e){const n=(0,b.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>c});var t=a(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);