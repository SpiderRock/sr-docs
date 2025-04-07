"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["99991"],{93237:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/market-data-options/OptionPrint2","title":"OptionPrint2","description":"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange.","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2750-market-data-options/OptionPrint2.md","sourceDirName":"MessageSchemas/Schema/Topics/2750-market-data-options","slug":"/MessageSchemas/Schema/Topics/market-data-options/OptionPrint2","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-options/OptionPrint2","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"OptionPrint2"},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionPrint","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-options/OptionPrint"},"next":{"title":"OptionPrintMarkup","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/market-data-options/OptionPrintMarkup"}}'),s=n("52676"),i=n("91503"),l=n("71386"),a=n("9641");let d={title:"OptionPrint2"},o="Schema: OptionPrint2 (ID: 2805)",c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"schema-optionprint2-id-2805",children:["Schema: OptionPrint2 ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2805)"})]})}),"\n",(0,s.jsx)(t.p,{children:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"ClientLive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"okey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"prtExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"print size [contracts]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"prtClusterNum"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"incremental print cluster counter (one counter per okey; used to group prints into clusters)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"prtClusterSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative size of prints in this sequence (sequence of prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,s.jsx)(t.td,{children:"print type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"191"}),(0,s.jsx)(t.td,{children:"printCodes"}),(0,s.jsx)(t.td,{children:"string(18)"}),(0,s.jsx)(t.td,{children:"European trade condition codes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"prtOrders"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of participating orders"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day print volume in contracts (regular, electronic) [AUTO, REOP, MESL, TESL]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"oosVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day print volume reported out of sequence (not regular way electronic) [OSEQ, LATE, OPEN, OPNL]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"isoVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day ISO sweep volume [ISOI]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"slaVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"single leg aution volume [SLAN, SLAI]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"mlaVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"multi leg auction volume [MLAT, TLAT, MASL, TASL]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"crxVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day electronic cross volume (no exposure period) [SLCN, SCLI, MLCT, TLCT]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"flrVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day exchange floor volume [SLFT, MLFT, MFSL, TLFT, TFSL, CMBO]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"mlgVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"multi-leg (complex) volume [MLET, TLET]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"145"}),(0,s.jsx)(t.td,{children:"uknVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"other (uncategorized) volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"148"}),(0,s.jsx)(t.td,{children:"cxlVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day print/cancel volume (num of contracts printed and then cancelled) [CANC, CNCL, CNCO, CNOL]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"151"}),(0,s.jsx)(t.td,{children:"totalVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"total day volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"154"}),(0,s.jsx)(t.td,{children:"bidCount"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of bid prints"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"157"}),(0,s.jsx)(t.td,{children:"askCount"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of ask prints"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"160"}),(0,s.jsx)(t.td,{children:"bidVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"bid print volume in contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"163"}),(0,s.jsx)(t.td,{children:"askVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"ask print volume in contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"166"}),(0,s.jsx)(t.td,{children:"ebid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange bid (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"169"}),(0,s.jsx)(t.td,{children:"eask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange ask (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"172"}),(0,s.jsx)(t.td,{children:"ebsz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"exchange bid size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"175"}),(0,s.jsx)(t.td,{children:"easz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"exchange ask size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"178"}),(0,s.jsx)(t.td,{children:"eage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"181"}),(0,s.jsx)(t.td,{children:"prtSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,s.jsx)(t.td,{children:"implied print side (based on ebid/eask and nbbo market)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"184"}),(0,s.jsx)(t.td,{children:"prtTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"187"}),(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"190"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionPrint2'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionPrint2'\n\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint2\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|oosVolume|isoVolume|slaVolume|mlaVolume|crxVolume|flrVolume|mlgVolume|uknVolume|cxlVolume|totalVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionPrint2' \\\n--data-urlencode 'view=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|oosVolume|isoVolume|slaVolume|mlaVolume|crxVolume|flrVolume|mlgVolume|uknVolume|cxlVolume|totalVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint2\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|oosVolume|isoVolume|slaVolume|mlaVolume|crxVolume|flrVolume|mlgVolume|uknVolume|cxlVolume|totalVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'prtExch:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionPrint2' \\\n--data-urlencode 'view=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|oosVolume|isoVolume|slaVolume|mlaVolume|crxVolume|flrVolume|mlgVolume|uknVolume|cxlVolume|totalVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'where=printCodes:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=prtExch:ASC'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint2\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|oosVolume|isoVolume|slaVolume|mlaVolume|crxVolume|flrVolume|mlgVolume|uknVolume|cxlVolume|totalVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'prtExch|prtType|prtSide\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionPrint2' \\\n--data-urlencode 'measure=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|oosVolume|isoVolume|slaVolume|mlaVolume|crxVolume|flrVolume|mlgVolume|uknVolume|cxlVolume|totalVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|prtSide|prtTimestamp|netTimestamp|timestamp' \\\n--data-urlencode 'group=prtExch|prtType|prtSide' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint2\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionPrint2' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9641:function(e,t,n){n.d(t,{Z:()=>i});var r=n("52676");n("75271");var s=n("54461");function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",i),hidden:n,children:t})}},71386:function(e,t,n){n.d(t,{Z:()=>f});var r=n("52676"),s=n("75271"),i=n("54461"),l=n("52289"),a=n("3225"),d=n("42834"),o=n("40578"),c=n("35834"),u=n("79616");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n("44537");function x(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:d}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=d[o.indexOf(t)].value;n!==s&&(c(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:d.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:u,...l,className:(0,i.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[x,j]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,i]=(0,u.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),X=(()=>{let e=x??g;return p({value:e,tabValues:i})?e:null})();return(0,d.Z)(()=>{X&&m(X)},[X]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),j(e),f(e)},[j,f,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(x,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function f(e){let t=(0,m.Z)();return(0,r.jsx)(g,{...e,children:h(e.children)},String(t))}},91503:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(75271);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);