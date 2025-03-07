"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2910],{44224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),a=t(11470),i=t(19365);const l={title:"SpreadMarketSummary"},d="Schema: SpreadMarketSummary (ID: 2925)",c={id:"MessageSchemas/Schema/Topics/market-data-spreads/SpreadMarketSummary",title:"SpreadMarketSummary",description:"These records represent live market summary snapshots for each active spread market",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2895-market-data-spreads/SpreadMarketSummary.md",sourceDirName:"MessageSchemas/Schema/Topics/2895-market-data-spreads",slug:"/MessageSchemas/Schema/Topics/market-data-spreads/SpreadMarketSummary",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-spreads/SpreadMarketSummary",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"SpreadMarketSummary"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadExchPrint",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-spreads/SpreadExchPrint"},next:{title:"SpreadPrint",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-spreads/SpreadPrint"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"schema-spreadmarketsummary-id-2925",children:["Schema: SpreadMarketSummary ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2925)"})]}),"\n",(0,r.jsx)(n.p,{children:"These records represent live market summary snapshots for each active spread market"}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SpreadMktData"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRSpread"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10="}),(0,r.jsx)(n.td,{children:"skey"}),(0,r.jsx)(n.td,{children:"TickerKey"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"ticker"}),(0,r.jsx)(n.td,{children:"TickerKey"}),(0,r.jsx)(n.td,{children:"underlier (or product group) tickerKey"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"iniPrice"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"first print price of the day during regular market hours"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"106"}),(0,r.jsx)(n.td,{children:"mrkPrice"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"last print handling during regular market hours"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"109"}),(0,r.jsx)(n.td,{children:"clsPrice"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"official exchange closing price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"minPrice"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"minimum print price within market hours"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"maxPrice"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"maximum print price within market hours"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"openInt"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"open interest"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"121"}),(0,r.jsx)(n.td,{children:"bidCount"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"num prints <= quote.bid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"124"}),(0,r.jsx)(n.td,{children:"bidVolume"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"volume when prtPrice <= quote.bid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"askCount"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"num prints >= quote.ask"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"askVolume"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"volume when prtPrice >= quote.ask"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"midCount"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"num prints inside quote.bid / quote.ask"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"136"}),(0,r.jsx)(n.td,{children:"midVolume"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"volume inside quote.bid / quote.ask"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"prtCount"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"number of distinct print reports"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"142"}),(0,r.jsx)(n.td,{children:"prtPrice"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"last print price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"145"}),(0,r.jsx)(n.td,{children:"expCount"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"number of updates included in exponential average"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"148"}),(0,r.jsx)(n.td,{children:"expWidth"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"exponential average market width (10 minute 1/2 life)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"151"}),(0,r.jsx)(n.td,{children:"expBidSize"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"exponential average bid size (10 minute 1/2 life)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"154"}),(0,r.jsx)(n.td,{children:"expAskSize"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"exponential average ask size (10 minute 1/2 life)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"157"}),(0,r.jsx)(n.td,{children:"lastPrint"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"160"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpreadMarketSummary'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpreadMarketSummary'\n\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadMarketSummary\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|iniPrice|mrkPrice|clsPrice|minPrice|maxPrice|openInt|bidCount|bidVolume|askCount|askVolume|midCount|midVolume|prtCount|prtPrice|expCount|expWidth|expBidSize|expAskSize|lastPrint|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpreadMarketSummary' \\\n--data-urlencode 'view=ticker|iniPrice|mrkPrice|clsPrice|minPrice|maxPrice|openInt|bidCount|bidVolume|askCount|askVolume|midCount|midVolume|prtCount|prtPrice|expCount|expWidth|expBidSize|expAskSize|lastPrint|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadMarketSummary\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|iniPrice|mrkPrice|clsPrice|minPrice|maxPrice|openInt|bidCount|bidVolume|askCount|askVolume|midCount|midVolume|prtCount|prtPrice|expCount|expWidth|expBidSize|expAskSize|lastPrint|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpreadMarketSummary' \\\n--data-urlencode 'view=ticker|iniPrice|mrkPrice|clsPrice|minPrice|maxPrice|openInt|bidCount|bidVolume|askCount|askVolume|midCount|midVolume|prtCount|prtPrice|expCount|expWidth|expBidSize|expAskSize|lastPrint|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadMarketSummary\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|iniPrice|mrkPrice|clsPrice|minPrice|maxPrice|openInt|bidCount|bidVolume|askCount|askVolume|midCount|midVolume|prtCount|prtPrice|expCount|expWidth|expBidSize|expAskSize|lastPrint|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpreadMarketSummary' \\\n--data-urlencode 'measure=ticker|iniPrice|mrkPrice|clsPrice|minPrice|maxPrice|openInt|bidCount|bidVolume|askCount|askVolume|midCount|midVolume|prtCount|prtPrice|expCount|expWidth|expBidSize|expAskSize|lastPrint|timestamp' \\\n--data-urlencode 'group=' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadMarketSummary\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpreadMarketSummary' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(96540),s=t(34164),a=t(23104),i=t(56347),l=t(205),d=t(57485),c=t(31682),o=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),g=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var X=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),s=l[t].value;s!==r&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,X.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,X.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,X.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=x(e);return(0,X.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,X.jsx)(y,{...n,...e}),(0,X.jsx)(b,{...n,...e})]})}function f(e){const n=(0,j.A)();return(0,X.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);