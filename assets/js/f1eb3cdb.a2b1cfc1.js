"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93161],{34226:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=t(74848),s=t(28453),i=t(11470),d=t(19365);const a={title:"SpdrMLegBrkrEvent"},l="Schema: SpdrMLegBrkrEvent (ID: 4025)",c={id:"MessageSchemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent",title:"SpdrMLegBrkrEvent",description:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders.",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/Topics/3985-parent-orders/SpdrMLegBrkrEvent.md",sourceDirName:"MessageSchemas/Schema/Topics/3985-parent-orders",slug:"/MessageSchemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{title:"SpdrMLegBrkrEvent"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrFixParentReject",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentReject"},next:{title:"SpdrMLegBrkrState",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/parent-orders/SpdrMLegBrkrState"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"schema-spdrmlegbrkrevent-id-4025",children:["Schema: SpdrMLegBrkrEvent ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4025)"})]}),"\n",(0,n.jsx)(r.p,{children:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"ClientTrading"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SRSE Product"}),(0,n.jsx)(r.td,{children:"SRTrade"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"#"}),(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"10="}),(0,n.jsx)(r.td,{children:"parentNumber"}),(0,n.jsx)(r.td,{children:"long"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"11="}),(0,n.jsx)(r.td,{children:"recType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/EventRecType",children:"enum : EventRecType"})}),(0,n.jsx)(r.td,{children:"type of record [New,Repl,Close]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"100"}),(0,n.jsx)(r.td,{children:"ticker"}),(0,n.jsx)(r.td,{children:"TickerKey"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"103"}),(0,n.jsx)(r.td,{children:"accnt"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"106"}),(0,n.jsx)(r.td,{children:"spdrSource"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"109"}),(0,n.jsx)(r.td,{children:"groupingCode"}),(0,n.jsx)(r.td,{children:"long"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"112"}),(0,n.jsx)(r.td,{children:"orderSide"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"115"}),(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{children:"SR client firm code"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"118"}),(0,n.jsx)(r.td,{children:"altAccnt"}),(0,n.jsx)(r.td,{children:"string(32)"}),(0,n.jsx)(r.td,{children:'alternate (client assigned) "long" account string (optional)'})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"121"}),(0,n.jsx)(r.td,{children:"altUserName"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{children:"alternate (client assigned) user name (optional)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"124"}),(0,n.jsx)(r.td,{children:"eventNumber"}),(0,n.jsx)(r.td,{children:"ushort"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"127"}),(0,n.jsx)(r.td,{children:"stageType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,n.jsx)(r.td,{children:"parent is a staged order [ToolVisible]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"260"}),(0,n.jsx)(r.td,{children:"stageReview"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/StageReview",children:"enum : StageReview"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"130"}),(0,n.jsx)(r.td,{children:"baseParentNumber"}),(0,n.jsx)(r.td,{children:"long"}),(0,n.jsx)(r.td,{children:"SPDR order number (initial number in cancel/replace sequence) (also, source parent for dynamically generated orders;eg auto-hedges)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"133"}),(0,n.jsx)(r.td,{children:"prevParentNumber"}),(0,n.jsx)(r.td,{children:"long"}),(0,n.jsx)(r.td,{children:"SPDR order number (order being cancelled/replaced) (zero if none)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"261"}),(0,n.jsx)(r.td,{children:"engineName"}),(0,n.jsx)(r.td,{children:"string(32)"}),(0,n.jsx)(r.td,{children:"server stripe"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"139"}),(0,n.jsx)(r.td,{children:"spdrBrokerStatus"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrBrokerStatus",children:"enum : SpdrBrokerStatus"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"142"}),(0,n.jsx)(r.td,{children:"spdrOrderStatus"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"145"}),(0,n.jsx)(r.td,{children:"spdrCloseReason"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"148"}),(0,n.jsx)(r.td,{children:"spdrRejectReason"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum : SpdrRejectReason"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"151"}),(0,n.jsx)(r.td,{children:"spdrComment"}),(0,n.jsx)(r.td,{children:"text1"}),(0,n.jsx)(r.td,{children:"additional detail if parent closed or rejected"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"172"}),(0,n.jsx)(r.td,{children:"cumSquareQty"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"cum spread quantity filled (all legs received)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"175"}),(0,n.jsx)(r.td,{children:"avgSquarePrc"}),(0,n.jsx)(r.td,{children:"double"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"178"}),(0,n.jsx)(r.td,{children:"cumPartialQty"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"cum spread quantity partially filled (at least one leg received) [expected cumFilledQty if all legs square up]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"181"}),(0,n.jsx)(r.td,{children:"uBid"}),(0,n.jsx)(r.td,{children:"double"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"184"}),(0,n.jsx)(r.td,{children:"uAsk"}),(0,n.jsx)(r.td,{children:"double"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"187"}),(0,n.jsx)(r.td,{children:"bidPrc"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"190"}),(0,n.jsx)(r.td,{children:"askPrc"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"193"}),(0,n.jsx)(r.td,{children:"bidSize"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"196"}),(0,n.jsx)(r.td,{children:"askSize"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"199"}),(0,n.jsx)(r.td,{children:"openOrderSize"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"202"}),(0,n.jsx)(r.td,{children:"hedgeSecKey"}),(0,n.jsx)(r.td,{children:"ExpiryKey"}),(0,n.jsx)(r.td,{children:"auto-hedge sec key"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"205"}),(0,n.jsx)(r.td,{children:"hedgeSecType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(r.td,{children:"auto-hedge sec type"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"208"}),(0,n.jsx)(r.td,{children:"riskLimitSize"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"risk limit size"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"211"}),(0,n.jsx)(r.td,{children:"riskLimitDesc"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrRisk",children:"enum : SpdrRisk"})}),(0,n.jsx)(r.td,{children:"reason for size reduction"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"262"}),(0,n.jsx)(r.td,{children:"riskLimitLevel"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,n.jsx)(r.td,{children:"risk limit level responsible for reduction"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"214"}),(0,n.jsx)(r.td,{children:"riskLimitDetail"}),(0,n.jsx)(r.td,{children:"text1"}),(0,n.jsx)(r.td,{children:"risk limit detail"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"217"}),(0,n.jsx)(r.td,{children:"limitPrice"}),(0,n.jsx)(r.td,{children:"double"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"220"}),(0,n.jsx)(r.td,{children:"limitErr"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/LimitError",children:"enum : LimitError"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"223"}),(0,n.jsx)(r.td,{children:"limitErrDesc"}),(0,n.jsx)(r.td,{children:"text1"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"226"}),(0,n.jsx)(r.td,{children:"algoState"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"229"}),(0,n.jsx)(r.td,{children:"algoCounter"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"232"}),(0,n.jsx)(r.td,{children:"makeState"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum : AlgoState"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"235"}),(0,n.jsx)(r.td,{children:"makeCounter"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"238"}),(0,n.jsx)(r.td,{children:"brokerState"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/BrokerState",children:"enum : BrokerState"})}),(0,n.jsx)(r.td,{children:"broker monitor state"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"241"}),(0,n.jsx)(r.td,{children:"spdrMktState"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrMarketState",children:"enum : SpdrMarketState"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"244"}),(0,n.jsx)(r.td,{children:"childOrderMask"}),(0,n.jsx)(r.td,{children:"uint"}),(0,n.jsx)(r.td,{children:"bit-mask of all exchange for which a child order was generated"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"247"}),(0,n.jsx)(r.td,{children:"numChildOrders"}),(0,n.jsx)(r.td,{children:"ushort"}),(0,n.jsx)(r.td,{children:"total number of child orders generated by this parent broker (parent number)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"250"}),(0,n.jsx)(r.td,{children:"numDayChildOrders"}),(0,n.jsx)(r.td,{children:"ushort"}),(0,n.jsx)(r.td,{children:"total number of child orders generated by this parent broker (all day; base parent number)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"253"}),(0,n.jsx)(r.td,{children:"modifiedBy"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"256"}),(0,n.jsx)(r.td,{children:"modifiedIn"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"259"}),(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DateTime"}),(0,n.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrMLegBrkrEvent'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrMLegBrkrEvent'\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrMLegBrkrEvent\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|accnt|spdrSource|groupingCode|orderSide|clientFirm|altAccnt|altUserName|eventNumber|stageType|stageReview|baseParentNumber|prevParentNumber|engineName|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|spdrComment|cumSquareQty|avgSquarePrc|cumPartialQty|uBid|uAsk|bidPrc|askPrc|bidSize|askSize|openOrderSize|hedgeSecKey|hedgeSecType|riskLimitSize|riskLimitDesc|riskLimitLevel|riskLimitDetail|limitPrice|limitErr|limitErrDesc|algoState|algoCounter|makeState|makeCounter|brokerState|spdrMktState|childOrderMask|numChildOrders|numDayChildOrders|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrMLegBrkrEvent' \\\n--data-urlencode 'view=ticker|accnt|spdrSource|groupingCode|orderSide|clientFirm|altAccnt|altUserName|eventNumber|stageType|stageReview|baseParentNumber|prevParentNumber|engineName|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|spdrComment|cumSquareQty|avgSquarePrc|cumPartialQty|uBid|uAsk|bidPrc|askPrc|bidSize|askSize|openOrderSize|hedgeSecKey|hedgeSecType|riskLimitSize|riskLimitDesc|riskLimitLevel|riskLimitDetail|limitPrice|limitErr|limitErrDesc|algoState|algoCounter|makeState|makeCounter|brokerState|spdrMktState|childOrderMask|numChildOrders|numDayChildOrders|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrMLegBrkrEvent\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|accnt|spdrSource|groupingCode|orderSide|clientFirm|altAccnt|altUserName|eventNumber|stageType|stageReview|baseParentNumber|prevParentNumber|engineName|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|spdrComment|cumSquareQty|avgSquarePrc|cumPartialQty|uBid|uAsk|bidPrc|askPrc|bidSize|askSize|openOrderSize|hedgeSecKey|hedgeSecType|riskLimitSize|riskLimitDesc|riskLimitLevel|riskLimitDetail|limitPrice|limitErr|limitErrDesc|algoState|algoCounter|makeState|makeCounter|brokerState|spdrMktState|childOrderMask|numChildOrders|numDayChildOrders|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrMLegBrkrEvent' \\\n--data-urlencode 'view=ticker|accnt|spdrSource|groupingCode|orderSide|clientFirm|altAccnt|altUserName|eventNumber|stageType|stageReview|baseParentNumber|prevParentNumber|engineName|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|spdrComment|cumSquareQty|avgSquarePrc|cumPartialQty|uBid|uAsk|bidPrc|askPrc|bidSize|askSize|openOrderSize|hedgeSecKey|hedgeSecType|riskLimitSize|riskLimitDesc|riskLimitLevel|riskLimitDetail|limitPrice|limitErr|limitErrDesc|algoState|algoCounter|makeState|makeCounter|brokerState|spdrMktState|childOrderMask|numChildOrders|numDayChildOrders|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrMLegBrkrEvent\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|accnt|spdrSource|groupingCode|orderSide|clientFirm|altAccnt|altUserName|eventNumber|stageType|stageReview|baseParentNumber|prevParentNumber|engineName|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|spdrComment|cumSquareQty|avgSquarePrc|cumPartialQty|uBid|uAsk|bidPrc|askPrc|bidSize|askSize|openOrderSize|hedgeSecKey|hedgeSecType|riskLimitSize|riskLimitDesc|riskLimitLevel|riskLimitDetail|limitPrice|limitErr|limitErrDesc|algoState|algoCounter|makeState|makeCounter|brokerState|spdrMktState|childOrderMask|numChildOrders|numDayChildOrders|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'spdrSource|orderSide|stageType|stageReview|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|hedgeSecType|riskLimitDesc|riskLimitLevel|limitErr|algoState|makeState|brokerState|spdrMktState|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrMLegBrkrEvent' \\\n--data-urlencode 'measure=ticker|accnt|spdrSource|groupingCode|orderSide|clientFirm|altAccnt|altUserName|eventNumber|stageType|stageReview|baseParentNumber|prevParentNumber|engineName|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|spdrComment|cumSquareQty|avgSquarePrc|cumPartialQty|uBid|uAsk|bidPrc|askPrc|bidSize|askSize|openOrderSize|hedgeSecKey|hedgeSecType|riskLimitSize|riskLimitDesc|riskLimitLevel|riskLimitDetail|limitPrice|limitErr|limitErrDesc|algoState|algoCounter|makeState|makeCounter|brokerState|spdrMktState|childOrderMask|numChildOrders|numDayChildOrders|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=spdrSource|orderSide|stageType|stageReview|spdrBrokerStatus|spdrOrderStatus|spdrCloseReason|spdrRejectReason|hedgeSecType|riskLimitDesc|riskLimitLevel|limitErr|algoState|makeState|brokerState|spdrMktState|modifiedIn' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrMLegBrkrEvent\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrMLegBrkrEvent' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function d(e){let{children:r,hidden:t,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>b});var n=t(96540),s=t(34164),i=t(23104),d=t(56347),a=t(205),l=t(57485),c=t(31682),o=t(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const s=(0,d.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=u(e),[d,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,h]=p({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,o.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),g=(()=>{const e=c??x;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=t(74848);function k(e){let{className:r,block:t,selectedValue:n,selectValue:d,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const r=e.currentTarget,t=l.indexOf(r),s=a[t].value;s!==n&&(c(r),d(s))},h=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=x(e);return(0,S.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,S.jsx)(k,{...r,...e}),(0,S.jsx)(v,{...r,...e})]})}function b(e){const r=(0,j.A)();return(0,S.jsx)(y,{...e,children:h(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);