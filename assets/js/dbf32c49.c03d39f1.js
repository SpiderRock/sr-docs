"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["29855"],{12096:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>h,contentTitle:()=>d});var t=JSON.parse('{"id":"MessageSchemas/Schema/Topics/market-data-options/OptionExchOrder","title":"OptionExchOrder","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/2750-market-data-options/OptionExchOrder.md","sourceDirName":"MessageSchemas/Schema/Topics/2750-market-data-options","slug":"/MessageSchemas/Schema/Topics/market-data-options/OptionExchOrder","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-options/OptionExchOrder","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"OptionExchOrder"},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionEOP","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-options/OptionEOP"},"next":{"title":"OptionExchPrint","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-options/OptionExchPrint"}}'),s=r("52676"),i=r("91503"),a=r("71386"),l=r("9641");let c={title:"OptionExchOrder"},d="Schema: OptionExchOrder (ID: 2765)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"schema-optionexchorder-id-2765",children:["Schema: OptionExchOrder ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2765)"})]})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2750-market-data-options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"Internal"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"okey"}),(0,s.jsx)(n.td,{children:"OptionKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"side"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"12="}),(0,s.jsx)(n.td,{children:"exch"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"exchOrderID"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"exchange assigned order ID (if any)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"size"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"size available to trade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"price"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"origOrderSize"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"original order size (if available)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"orderType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ExchOrderType",children:"enum : ExchOrderType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"orderStatus"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ExchOrderStatus",children:"enum : ExchOrderStatus"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"marketQualifier"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/MarketQualifier",children:"enum : MarketQualifier"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"execQualifier"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ExecQualifier",children:"enum : ExecQualifier"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"timeInForce"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TimeInForce",children:"enum : TimeInForce"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"firmType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"positionType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"clearingFirm"}),(0,s.jsx)(n.td,{children:"string(5)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"clearingAccnt"}),(0,s.jsx)(n.td,{children:"string(8)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"139"}),(0,s.jsx)(n.td,{children:"otherDetail"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"142"}),(0,s.jsx)(n.td,{children:"srcTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"source (exch) high precision timestamp (if available)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"145"}),(0,s.jsx)(n.td,{children:"netTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"SpiderRock network PTP timestamp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"148"}),(0,s.jsx)(n.td,{children:"dgwTimestamp"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"SpiderRock data gateway timestamp"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionExchOrder'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionExchOrder'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionExchOrder\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'exchOrderID|size|price|origOrderSize|orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType|clearingFirm|clearingAccnt|otherDetail|srcTimestamp|netTimestamp|dgwTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clearingFirm:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionExchOrder' \\\n--data-urlencode 'view=exchOrderID|size|price|origOrderSize|orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType|clearingFirm|clearingAccnt|otherDetail|srcTimestamp|netTimestamp|dgwTimestamp' \\\n--data-urlencode 'where=clearingFirm:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionExchOrder\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'exchOrderID|size|price|origOrderSize|orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType|clearingFirm|clearingAccnt|otherDetail|srcTimestamp|netTimestamp|dgwTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clearingFirm:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'exchOrderID:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionExchOrder' \\\n--data-urlencode 'view=exchOrderID|size|price|origOrderSize|orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType|clearingFirm|clearingAccnt|otherDetail|srcTimestamp|netTimestamp|dgwTimestamp' \\\n--data-urlencode 'where=clearingFirm:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=exchOrderID:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionExchOrder\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'exchOrderID|size|price|origOrderSize|orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType|clearingFirm|clearingAccnt|otherDetail|srcTimestamp|netTimestamp|dgwTimestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clearingFirm:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionExchOrder' \\\n--data-urlencode 'measure=exchOrderID|size|price|origOrderSize|orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType|clearingFirm|clearingAccnt|otherDetail|srcTimestamp|netTimestamp|dgwTimestamp' \\\n--data-urlencode 'group=orderType|orderStatus|marketQualifier|execQualifier|timeInForce|firmType|positionType' \\\n--data-urlencode 'where=clearingFirm:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionExchOrder\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clearingFirm:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionExchOrder' \\\n--data-urlencode 'where=clearingFirm:eq:ExampleString'\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9641:function(e,n,r){r.d(n,{Z:()=>i});var t=r("52676");r("75271");var s=r("54461");function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",i),hidden:r,children:n})}},71386:function(e,n,r){r.d(n,{Z:()=>f});var t=r("52676"),s=r("75271"),i=r("54461"),a=r("52289"),l=r("3225"),c=r("42834"),d=r("40578"),o=r("35834"),h=r("79616");function u(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("44537");function x(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:c}=e,d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),h=e=>{let n=e.currentTarget,r=c[d.indexOf(n)].value;r!==s&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{let r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:c.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:u,onClick:h,...a,className:(0,i.Z)("tabs__item","tabItem_aitt",a?.className,{"tabs__item--active":s===n}),children:r??n},n)})})}function g(e){let{lazy:n,children:r,selectedValue:a}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,i=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=n??u(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,p]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[x,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(i),(0,s.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:r,groupId:t}),[j,f]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,i]=(0,h.Nk)(r);return[t,(0,s.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:t}),X=(()=>{let e=x??j;return m({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{X&&p(X)},[X]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),f(e)},[g,f,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,t.jsx)(x,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function f(e){let n=(0,p.Z)();return(0,t.jsx)(j,{...e,children:u(e.children)},String(n))}},91503:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(75271);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);