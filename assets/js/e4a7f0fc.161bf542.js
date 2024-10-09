"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14715],{33074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=n(74848),r=n(28453),i=n(11470),a=n(19365);const l={title:"OptionPrint"},d="Schema: OptionPrint (ID: 2800)",c={id:"MessageSchemas/Schema/Topics/market-data-options/OptionPrint",title:"OptionPrint",description:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange.",source:"@site/docs/MessageSchemas/Schema/Topics/2750-market-data-options/OptionPrint.md",sourceDirName:"MessageSchemas/Schema/Topics/2750-market-data-options",slug:"/MessageSchemas/Schema/Topics/market-data-options/OptionPrint",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-options/OptionPrint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrint"},sidebar:"messageSchemasSidebar",previous:{title:"OptionOpenAuctionSummary",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-options/OptionOpenAuctionSummary"},next:{title:"OptionPrint2",permalink:"/docs/next/MessageSchemas/Schema/Topics/market-data-options/OptionPrint2"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-optionprint-id-2800",children:["Schema: OptionPrint ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2800)"})]}),"\n",(0,s.jsx)(t.p,{children:"The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"OptMktData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"okey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"prtExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"print size [contracts]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"prtClusterNum"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"incremental print cluster counter (one counter per okey; used to group prints into clusters)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"prtClusterSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative size of prints in this sequence (sequence of prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,s.jsx)(t.td,{children:"print type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"203"}),(0,s.jsx)(t.td,{children:"printCodes"}),(0,s.jsx)(t.td,{children:"string(18)"}),(0,s.jsx)(t.td,{children:"European trade condition codes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"prtOrders"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of participating orders"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day print volume in contracts [this exchange]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"cxlVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"day print/cancel volume (num of contracts printed and then cancelled)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"bidCount"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of bid prints"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"askCount"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of ask prints"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"bidVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"bid print volume in contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"askVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"ask print volume in contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"ebid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange bid (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"eask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange ask (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"145"}),(0,s.jsx)(t.td,{children:"ebsz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"exchange bid size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"148"}),(0,s.jsx)(t.td,{children:"easz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"exchange ask size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"151"}),(0,s.jsx)(t.td,{children:"eage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"154"}),(0,s.jsx)(t.td,{children:"bidPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"nbbo bid price (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"157"}),(0,s.jsx)(t.td,{children:"askPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"nbbo ask price (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"160"}),(0,s.jsx)(t.td,{children:"bidPrice2"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"2nd best bid price (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"163"}),(0,s.jsx)(t.td,{children:"askPrice2"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"2nd best ask price (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"166"}),(0,s.jsx)(t.td,{children:"bidSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"bid size in contracts (largest exch quote)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"169"}),(0,s.jsx)(t.td,{children:"askSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"ask size in contracts (largest exch quote)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"172"}),(0,s.jsx)(t.td,{children:"cumBidSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"bid size in contracts (total nbbo size)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"175"}),(0,s.jsx)(t.td,{children:"cumAskSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"ask size in contracts (total nbbo size)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"178"}),(0,s.jsx)(t.td,{children:"cumBidSize2"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative size at 2nd price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"181"}),(0,s.jsx)(t.td,{children:"cumAskSize2"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative size at 2nd price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"184"}),(0,s.jsx)(t.td,{children:"bidMask"}),(0,s.jsx)(t.td,{children:"uint"}),(0,s.jsx)(t.td,{children:"exchange bid bit mask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"187"}),(0,s.jsx)(t.td,{children:"askMask"}),(0,s.jsx)(t.td,{children:"uint"}),(0,s.jsx)(t.td,{children:"exchange ask bit mask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"190"}),(0,s.jsx)(t.td,{children:"prtSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,s.jsx)(t.td,{children:"implied print side (based on ebid/eask and nbbo market)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"193"}),(0,s.jsx)(t.td,{children:"prtTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"196"}),(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"199"}),(0,s.jsx)(t.td,{children:"oqNetTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"202"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionPrint'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionPrint'\n\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|bidPrice|askPrice|bidPrice2|askPrice2|bidSize|askSize|cumBidSize|cumAskSize|cumBidSize2|cumAskSize2|bidMask|askMask|prtSide|prtTimestamp|netTimestamp|oqNetTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionPrint' \\\n--data-urlencode 'view=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|bidPrice|askPrice|bidPrice2|askPrice2|bidSize|askSize|cumBidSize|cumAskSize|cumBidSize2|cumAskSize2|bidMask|askMask|prtSide|prtTimestamp|netTimestamp|oqNetTimestamp|timestamp' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|bidPrice|askPrice|bidPrice2|askPrice2|bidSize|askSize|cumBidSize|cumAskSize|cumBidSize2|cumAskSize2|bidMask|askMask|prtSide|prtTimestamp|netTimestamp|oqNetTimestamp|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'prtExch:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionPrint' \\\n--data-urlencode 'view=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|bidPrice|askPrice|bidPrice2|askPrice2|bidSize|askSize|cumBidSize|cumAskSize|cumBidSize2|cumAskSize2|bidMask|askMask|prtSide|prtTimestamp|netTimestamp|oqNetTimestamp|timestamp' \\\n--data-urlencode 'where=printCodes:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=prtExch:ASC'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|bidPrice|askPrice|bidPrice2|askPrice2|bidSize|askSize|cumBidSize|cumAskSize|cumBidSize2|cumAskSize2|bidMask|askMask|prtSide|prtTimestamp|netTimestamp|oqNetTimestamp|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'prtExch|prtType|prtSide\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionPrint' \\\n--data-urlencode 'measure=prtExch|prtSize|prtPrice|prtClusterNum|prtClusterSize|prtType|printCodes|prtOrders|prtVolume|cxlVolume|bidCount|askCount|bidVolume|askVolume|ebid|eask|ebsz|easz|eage|bidPrice|askPrice|bidPrice2|askPrice2|bidSize|askSize|cumBidSize|cumAskSize|cumBidSize2|cumAskSize2|bidMask|askMask|prtSide|prtTimestamp|netTimestamp|oqNetTimestamp|timestamp' \\\n--data-urlencode 'group=prtExch|prtType|prtSide' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionPrint\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'printCodes:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionPrint' \\\n--data-urlencode 'where=printCodes:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),r=n(34164),i=n(23104),a=n(56347),l=n(205),d=n(57485),c=n(31682),o=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,d]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function X(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),r=l[n].value;r!==s&&(c(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(X,{...t,...e}),(0,b.jsx)(f,{...t,...e})]})}function y(e){const t=(0,j.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);