"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["93878"],{41363:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/probabilities/OptionPrintProbability","title":"OptionPrintProbability","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/4255-probabilities/OptionPrintProbability.md","sourceDirName":"MessageSchemas/Schema/Topics/4255-probabilities","slug":"/MessageSchemas/Schema/Topics/probabilities/OptionPrintProbability","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/probabilities/OptionPrintProbability","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"OptionPrintProbability"},"sidebar":"messageSchemasSidebar","previous":{"title":"FutureQuoteProbability","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/probabilities/FutureQuoteProbability"},"next":{"title":"OptionQuoteProbability","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/probabilities/OptionQuoteProbability"}}'),i=t("52676"),s=t("91503"),a=t("71386"),l=t("9641");let d={title:"OptionPrintProbability"},c="Schema: OptionPrintProbability (ID: 4265)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"schema-optionprintprobability-id-4265",children:["Schema: OptionPrintProbability ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 4265)"})]})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"4255-probabilities"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"OptProbModel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SRSE Product"}),(0,i.jsx)(n.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,i.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"#"}),(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10="}),(0,i.jsx)(n.td,{children:"okey"}),(0,i.jsx)(n.td,{children:"OptionKey"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"11="}),(0,i.jsx)(n.td,{children:"stateModel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"prtPrice"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"103"}),(0,i.jsx)(n.td,{children:"prtSize"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"106"}),(0,i.jsx)(n.td,{children:"prtProb"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"probability that this print will result in positive PnL"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"109"}),(0,i.jsx)(n.td,{children:"prtSide"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"112"}),(0,i.jsx)(n.td,{children:"bidPrice"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"nbbo bid price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"115"}),(0,i.jsx)(n.td,{children:"askPrice"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"nbbo ask price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"118"}),(0,i.jsx)(n.td,{children:"bidSize"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"cumulative size @ bid price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"121"}),(0,i.jsx)(n.td,{children:"askSize"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"cumulative size @ ask price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"124"}),(0,i.jsx)(n.td,{children:"avgBLink1m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"average buy link value (trailing 10)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"127"}),(0,i.jsx)(n.td,{children:"maeBLink1m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"buy link value mean abs err (trailing 1000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"130"}),(0,i.jsx)(n.td,{children:"avgSLink1m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"average sell link value (trailing 10)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"133"}),(0,i.jsx)(n.td,{children:"maeSLink1m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"sell link value mean abs err (trailing 1000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"136"}),(0,i.jsx)(n.td,{children:"avgBLink10m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"average buy link value (trailing 100)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"139"}),(0,i.jsx)(n.td,{children:"maeBLink10m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"bid link value mean abs err (trailing 1000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"142"}),(0,i.jsx)(n.td,{children:"avgSLink10m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"average ask link value (trailing 100)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"145"}),(0,i.jsx)(n.td,{children:"maeSLink10m"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"ask link value mean abs err (trailing 1000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"148"}),(0,i.jsx)(n.td,{children:"bCounter"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"buy counter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"151"}),(0,i.jsx)(n.td,{children:"sCounter"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"sell counter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"154"}),(0,i.jsx)(n.td,{children:"prtTimestamp"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"feed timestamp from the packet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"157"}),(0,i.jsx)(n.td,{children:"netTimestamp"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"inbound packet PTP timestamp from SR gateway switch (from OptionPrint)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"160"}),(0,i.jsx)(n.td,{children:"smsTimestamp"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"state model server timestamp (just before publish)"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionPrintProbability'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionPrintProbability'\n\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintProbability\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'prtPrice|prtSize|prtProb|prtSide|bidPrice|askPrice|bidSize|askSize|avgBLink1m|maeBLink1m|avgSLink1m|maeSLink1m|avgBLink10m|maeBLink10m|avgSLink10m|maeSLink10m|bCounter|sCounter|prtTimestamp|netTimestamp|smsTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionPrintProbability' \\\n--data-urlencode 'view=prtPrice|prtSize|prtProb|prtSide|bidPrice|askPrice|bidSize|askSize|avgBLink1m|maeBLink1m|avgSLink1m|maeSLink1m|avgBLink10m|maeBLink10m|avgSLink10m|maeSLink10m|bCounter|sCounter|prtTimestamp|netTimestamp|smsTimestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintProbability\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'prtPrice|prtSize|prtProb|prtSide|bidPrice|askPrice|bidSize|askSize|avgBLink1m|maeBLink1m|avgSLink1m|maeSLink1m|avgBLink10m|maeBLink10m|avgSLink10m|maeSLink10m|bCounter|sCounter|prtTimestamp|netTimestamp|smsTimestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'prtPrice:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionPrintProbability' \\\n--data-urlencode 'view=prtPrice|prtSize|prtProb|prtSide|bidPrice|askPrice|bidSize|askSize|avgBLink1m|maeBLink1m|avgSLink1m|maeSLink1m|avgBLink10m|maeBLink10m|avgSLink10m|maeSLink10m|bCounter|sCounter|prtTimestamp|netTimestamp|smsTimestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=prtPrice:ASC'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintProbability\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'prtPrice|prtSize|prtProb|prtSide|bidPrice|askPrice|bidSize|askSize|avgBLink1m|maeBLink1m|avgSLink1m|maeSLink1m|avgBLink10m|maeBLink10m|avgSLink10m|maeSLink10m|bCounter|sCounter|prtTimestamp|netTimestamp|smsTimestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'prtSide\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionPrintProbability' \\\n--data-urlencode 'measure=prtPrice|prtSize|prtProb|prtSide|bidPrice|askPrice|bidSize|askSize|avgBLink1m|maeBLink1m|avgSLink1m|maeSLink1m|avgBLink10m|maeBLink10m|avgSLink10m|maeSLink10m|bCounter|sCounter|prtTimestamp|netTimestamp|smsTimestamp' \\\n--data-urlencode 'group=prtSide' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrintProbability\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionPrintProbability' \\\n--data-urlencode 'where='\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9641:function(e,n,t){t.d(n,{Z:()=>s});var r=t("52676");t("75271");var i=t("54461");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_SSzl",s),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>b});var r=t("52676"),i=t("75271"),s=t("54461"),a=t("52289"),l=t("3225"),d=t("42834"),c=t("40578"),o=t("35834"),h=t("79616");function u(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function g(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:d}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),h=e=>{let n=e.currentTarget,t=d[c.indexOf(n)].value;t!==i&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:d.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...a,className:(0,s.Z)("tabs__item","tabItem_aitt",a?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function j(e){let{lazy:n,children:t,selectedValue:a}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,p]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[g,j]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[x,b]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,h.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),v=(()=>{let e=g??x;return m({value:e,tabValues:s})?e:null})();return(0,d.Z)(()=>{v&&p(v)},[v]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),j(e),b(e)},[j,b,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(j,{...n,...e})]})}function b(e){let n=(0,p.Z)();return(0,r.jsx)(x,{...e,children:u(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(75271);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);