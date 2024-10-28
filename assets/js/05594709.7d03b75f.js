"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15538],{57482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=r(74848),s=r(28453),i=r(11470),l=r(19365);const c={title:"NoticeExecReport"},a="Schema: NoticeExecReport (ID: 2475)",d={id:"MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",title:"NoticeExecReport",description:"METADATA",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/2450-liquidity-notice/NoticeExecReport.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{title:"NoticeExecReport"},sidebar:"messageSchemasSidebar",previous:{title:"NoticeCancel",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/liquidity-notice/NoticeCancel"},next:{title:"NoticeResponse",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-noticeexecreport-id-2475",children:["Schema: NoticeExecReport ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 2475)"})]}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SRATS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"13="}),(0,n.jsx)(t.td,{children:"noticeNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"AuctionNotice.noticeNumber"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"14="}),(0,n.jsx)(t.td,{children:"baseParentNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"125"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"underlier ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"126"}),(0,n.jsx)(t.td,{children:"tradeDate"}),(0,n.jsx)(t.td,{children:"DateKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"SR Accnt"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"140"}),(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"SR ClientFirm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"141"}),(0,n.jsx)(t.td,{children:"noticeDttm"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"either notice create datetime or notice arrival@SR datetime (high precision)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"responseId"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{children:"from NoticeResponse.responseId (most recently processed response to noticeNumber for this accnt/clientFirm pair)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"respOrigin"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"101"}),(0,n.jsx)(t.td,{children:"stageType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"143"}),(0,n.jsx)(t.td,{children:"auctionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"144"}),(0,n.jsx)(t.td,{children:"auctionSource"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,n.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"respDttm"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"response arrival dttm (high precision)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"102"}),(0,n.jsx)(t.td,{children:"respSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"respSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"104"}),(0,n.jsx)(t.td,{children:"respActiveSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"active response order size (zero for ActiveHold)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"105"}),(0,n.jsx)(t.td,{children:"respPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"effRespPrice = respPrice + de * (uMid - refUPrc) + 0.5 * ga * (uMid - refUPrc)^2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"refUPrc"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"reference price for tied to underlier orders (mid-market tie) (block auctions only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"107"}),(0,n.jsx)(t.td,{children:"refDe"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"reference delta for tied to underlier orders (zero if tie is not desired) (block auctions only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"108"}),(0,n.jsx)(t.td,{children:"refGa"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"reference gamma for tied to underlier orders (zero if tie is not desired) (block auctions only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"128"}),(0,n.jsx)(t.td,{children:"roundRule"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,n.jsx)(t.td,{children:"Exact (100%) or Fuzzy (90%) [default is Exact] (block auctions only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"129"}),(0,n.jsx)(t.td,{children:"stepUpIncr"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"additional price increment (best price) (typically only used if auction is competitive)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"riskGroupId"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"any auction response is associated with this riskGroupID (and SpdrRiskGroupControl)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"110"}),(0,n.jsx)(t.td,{children:"strategy"}),(0,n.jsx)(t.td,{children:"string(32)"}),(0,n.jsx)(t.td,{children:"user strategy field (visible on SR tools)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"111"}),(0,n.jsx)(t.td,{children:"userData1"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"user data field (free text) (from NoticeResponse)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"respStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"113"}),(0,n.jsx)(t.td,{children:"respDetail"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"lastUPrc"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"effective uPrc (mid-market) from last trial pass"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"146"}),(0,n.jsx)(t.td,{children:"lastTrialPrc"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"effective response price from last trial pass"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"147"}),(0,n.jsx)(t.td,{children:"leavesQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"open order quantity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"cumFillQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"pkg cumFillQty if MLeg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"131"}),(0,n.jsx)(t.td,{children:"avgFillPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"pkg avgFillPrice if MLeg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"addLatency"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"latency from notice arrival@SR to external response send (in seconds) OR latency from notice create to response accepted (in seconds) (SRC Auctions)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"149"}),(0,n.jsx)(t.td,{children:"ackLatency"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"latency from external response send to external response ack (FRT) (in seconds) (external auctions only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"132"}),(0,n.jsx)(t.td,{children:"responseResult"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/NoticeResult",children:"enum : NoticeResult"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"responseTime"}),(0,n.jsx)(t.td,{children:"short"}),(0,n.jsx)(t.td,{children:"notice response arrival time (milliseconds since auction start)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"134"}),(0,n.jsx)(t.td,{children:"prtPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"reported print price (pkgPrice if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"135"}),(0,n.jsx)(t.td,{children:"prtSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"reported print size (pgkSize if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"prtTime"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"reported print time (1st print if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"150"}),(0,n.jsx)(t.td,{children:"prtUBid"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"best estimate of uBid @ auction print time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"prtUAsk"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,n.jsx)(t.p,{children:"OrderLegs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"117"}),(0,n.jsx)(t.td,{children:"secKey"}),(0,n.jsx)(t.td,{children:"OptionKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"secType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"119"}),(0,n.jsx)(t.td,{children:"side"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"120"}),(0,n.jsx)(t.td,{children:"ratio"}),(0,n.jsx)(t.td,{children:"int"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"positionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/LegPositionType",children:"enum : LegPositionType"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"122"}),(0,n.jsx)(t.td,{children:"legCumFillQty"}),(0,n.jsx)(t.td,{children:"int"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"123"}),(0,n.jsx)(t.td,{children:"legAvgFillPrice"}),(0,n.jsx)(t.td,{children:"double"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'NoticeExecReport'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=NoticeExecReport'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'NoticeExecReport\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|accnt|clientFirm|noticeDttm|responseId|respOrigin|stageType|auctionType|auctionSource|respDttm|respSide|respSize|respActiveSize|respPrice|refUPrc|refDe|refGa|roundRule|stepUpIncr|riskGroupId|strategy|userData1|respStatus|respDetail|lastUPrc|lastTrialPrc|leavesQty|cumFillQty|avgFillPrice|addLatency|ackLatency|responseResult|responseTime|prtPrice|prtSize|prtTime|prtUBid|prtUAsk|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=NoticeExecReport' \\\n--data-urlencode 'view=ticker|tradeDate|accnt|clientFirm|noticeDttm|responseId|respOrigin|stageType|auctionType|auctionSource|respDttm|respSide|respSize|respActiveSize|respPrice|refUPrc|refDe|refGa|roundRule|stepUpIncr|riskGroupId|strategy|userData1|respStatus|respDetail|lastUPrc|lastTrialPrc|leavesQty|cumFillQty|avgFillPrice|addLatency|ackLatency|responseResult|responseTime|prtPrice|prtSize|prtTime|prtUBid|prtUAsk|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'NoticeExecReport\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|accnt|clientFirm|noticeDttm|responseId|respOrigin|stageType|auctionType|auctionSource|respDttm|respSide|respSize|respActiveSize|respPrice|refUPrc|refDe|refGa|roundRule|stepUpIncr|riskGroupId|strategy|userData1|respStatus|respDetail|lastUPrc|lastTrialPrc|leavesQty|cumFillQty|avgFillPrice|addLatency|ackLatency|responseResult|responseTime|prtPrice|prtSize|prtTime|prtUBid|prtUAsk|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=NoticeExecReport' \\\n--data-urlencode 'view=ticker|tradeDate|accnt|clientFirm|noticeDttm|responseId|respOrigin|stageType|auctionType|auctionSource|respDttm|respSide|respSize|respActiveSize|respPrice|refUPrc|refDe|refGa|roundRule|stepUpIncr|riskGroupId|strategy|userData1|respStatus|respDetail|lastUPrc|lastTrialPrc|leavesQty|cumFillQty|avgFillPrice|addLatency|ackLatency|responseResult|responseTime|prtPrice|prtSize|prtTime|prtUBid|prtUAsk|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'NoticeExecReport\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|accnt|clientFirm|noticeDttm|responseId|respOrigin|stageType|auctionType|auctionSource|respDttm|respSide|respSize|respActiveSize|respPrice|refUPrc|refDe|refGa|roundRule|stepUpIncr|riskGroupId|strategy|userData1|respStatus|respDetail|lastUPrc|lastTrialPrc|leavesQty|cumFillQty|avgFillPrice|addLatency|ackLatency|responseResult|responseTime|prtPrice|prtSize|prtTime|prtUBid|prtUAsk|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'respOrigin|stageType|auctionType|auctionSource|respSide|roundRule|respStatus|responseResult\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=NoticeExecReport' \\\n--data-urlencode 'measure=ticker|tradeDate|accnt|clientFirm|noticeDttm|responseId|respOrigin|stageType|auctionType|auctionSource|respDttm|respSide|respSize|respActiveSize|respPrice|refUPrc|refDe|refGa|roundRule|stepUpIncr|riskGroupId|strategy|userData1|respStatus|respDetail|lastUPrc|lastTrialPrc|leavesQty|cumFillQty|avgFillPrice|addLatency|ackLatency|responseResult|responseTime|prtPrice|prtSize|prtTime|prtUBid|prtUAsk|timestamp' \\\n--data-urlencode 'group=respOrigin|stageType|auctionType|auctionSource|respSide|roundRule|respStatus|responseResult' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'NoticeExecReport\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=NoticeExecReport' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>R});var n=r(96540),s=r(34164),i=r(23104),l=r(56347),c=r(205),a=r(57485),d=r(31682),o=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,u]=x({queryString:r,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),g=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function f(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=a.indexOf(t),s=c[r].value;s!==n&&(d(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function X(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(f,{...t,...e}),(0,y.jsx)(v,{...t,...e})]})}function R(e){const t=(0,j.A)();return(0,y.jsx)(X,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);