"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[37522],{91270:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=s(74848),n=s(28453),d=s(11470),i=s(19365);const a={title:"StockPositionRecordV5"},l="Schema: StockPositionRecordV5 (ID: 4850)",o={id:"MessageSchemas/Schema/Topics/risk-v5/StockPositionRecordV5",title:"StockPositionRecordV5",description:"StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.These records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.New records are published immediately when a position changes and about once per minute if no position has changed.Note that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks.",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/4740-risk-v5/StockPositionRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/StockPositionRecordV5",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/risk-v5/StockPositionRecordV5",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{title:"StockPositionRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"SodClearingRecordV5",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/risk-v5/SodClearingRecordV5"},next:{title:"SymbolMarginSummaryV5",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/risk-v5/SymbolMarginSummaryV5"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-stockpositionrecordv5-id-4850",children:["Schema: StockPositionRecordV5 ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4850)"})]}),"\n",(0,t.jsxs)(r.p,{children:["StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks."]}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientRisk"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRRisk"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"10="}),(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11="}),(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"12="}),(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"DateKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"13="}),(0,t.jsx)(r.td,{children:"riskSession"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"14="}),(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"103"}),(0,t.jsx)(r.td,{children:"riskServerCode"}),(0,t.jsx)(r.td,{children:"string(6)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"priAggGroup"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"primary aggregation group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"secAggGroup"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"secondary aggregation group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"symbolType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"tickValue"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"118"}),(0,t.jsx)(r.td,{children:"pointValue"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"121"}),(0,t.jsx)(r.td,{children:"pointCurrency"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"124"}),(0,t.jsx)(r.td,{children:"priceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(r.td,{children:"price display format code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"127"}),(0,t.jsx)(r.td,{children:"stkPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"current stock price (any market session) (persists if market closed/halted)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"130"}),(0,t.jsx)(r.td,{children:"stkBid"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"current stock bid (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"133"}),(0,t.jsx)(r.td,{children:"stkAsk"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"current stock ask (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"136"}),(0,t.jsx)(r.td,{children:"stkMark"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"current stock mark (freezes at SR CloseMarkTime)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"139"}),(0,t.jsx)(r.td,{children:"stkMarkErrCodes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarkErrorCode",children:"flag : MarkErrorCode"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"142"}),(0,t.jsx)(r.td,{children:"stkMarkSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/UMarkSource",children:"enum : UMarkSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"145"}),(0,t.jsx)(r.td,{children:"stkOpnMidMark"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"start-of-day SR stock mark (rotated from prior day record) [corp action adjusted]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"148"}),(0,t.jsx)(r.td,{children:"stkOpnClrMark"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"start-of-day CLR stock mark (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"stkOpnPosPrv"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"start-of-day SR share position (rotated from prior day record) [corp action adjusted]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"154"}),(0,t.jsx)(r.td,{children:"stkOpnPosClr"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"start-of-day CLR share position (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"stkOpnPos"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"start of period share position (effective; can be from either CLR or SR)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"160"}),(0,t.jsx)(r.td,{children:"stkOpnPosSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,t.jsx)(r.td,{children:"start of period position source"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"163"}),(0,t.jsx)(r.td,{children:"shBot"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares bot today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"shSld"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares sld today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"shSldShrt"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares sld short today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"shBotHdg"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares bot today from hedging (spdrSource=HedgeTool)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"shSldHdg"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares sld today from hedging (spdrSource=HedgeTool)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"shBotTrh"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares bot today from hedging (spdrSource=TradeHedge)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"181"}),(0,t.jsx)(r.td,{children:"shSldTrh"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares sld today from hedging (spdrSource=TradeHedge)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"184"}),(0,t.jsx)(r.td,{children:"shBotOpn"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares bot today from hedging (spdrSource=OpenHedge)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"187"}),(0,t.jsx)(r.td,{children:"shSldOpn"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares sld today from hedging (spdrSource=OpenHedge)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"190"}),(0,t.jsx)(r.td,{children:"shBotTrd"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares bot today from any trade hedging source (AutoHedge or Trades loop)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"193"}),(0,t.jsx)(r.td,{children:"shSldTrd"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of shares sld today from any trade hedging source (AutoHedge or Trades loop)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"196"}),(0,t.jsx)(r.td,{children:"stkMnyBot"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"sum of settle cash for all buy executions"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"199"}),(0,t.jsx)(r.td,{children:"stkMnySld"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"sum of settle cash for all sell executions"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"202"}),(0,t.jsx)(r.td,{children:"dayPnl"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"205"}),(0,t.jsx)(r.td,{children:"opnPnlMidMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"208"}),(0,t.jsx)(r.td,{children:"opnPnlClrMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"211"}),(0,t.jsx)(r.td,{children:"exDivAmt"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"amount of any dividend going ex today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"214"}),(0,t.jsx)(r.td,{children:"borrowRate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"overnight rate required to borrow stock (if known)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"217"}),(0,t.jsx)(r.td,{children:"beta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"220"}),(0,t.jsx)(r.td,{children:"betaSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"230"}),(0,t.jsx)(r.td,{children:"marginUDn"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc dn"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"231"}),(0,t.jsx)(r.td,{children:"marginUUp"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc up"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"223"}),(0,t.jsx)(r.td,{children:"numExecutions"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of included SpdrParentExecution records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"226"}),(0,t.jsx)(r.td,{children:"maxExecDttm"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"max (timestamp) of included SpdrParentExecution records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"229"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'StockPositionRecordV5'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=StockPositionRecordV5'\n\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPositionRecordV5\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'riskServerCode|priAggGroup|secAggGroup|symbolType|tickValue|pointValue|pointCurrency|priceFormat|stkPrc|stkBid|stkAsk|stkMark|stkMarkErrCodes|stkMarkSource|stkOpnMidMark|stkOpnClrMark|stkOpnPosPrv|stkOpnPosClr|stkOpnPos|stkOpnPosSrc|shBot|shSld|shSldShrt|shBotHdg|shSldHdg|shBotTrh|shSldTrh|shBotOpn|shSldOpn|shBotTrd|shSldTrd|stkMnyBot|stkMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|exDivAmt|borrowRate|beta|betaSource|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=StockPositionRecordV5' \\\n--data-urlencode 'view=riskServerCode|priAggGroup|secAggGroup|symbolType|tickValue|pointValue|pointCurrency|priceFormat|stkPrc|stkBid|stkAsk|stkMark|stkMarkErrCodes|stkMarkSource|stkOpnMidMark|stkOpnClrMark|stkOpnPosPrv|stkOpnPosClr|stkOpnPos|stkOpnPosSrc|shBot|shSld|shSldShrt|shBotHdg|shSldHdg|shBotTrh|shSldTrh|shBotOpn|shSldOpn|shBotTrd|shSldTrd|stkMnyBot|stkMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|exDivAmt|borrowRate|beta|betaSource|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPositionRecordV5\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'riskServerCode|priAggGroup|secAggGroup|symbolType|tickValue|pointValue|pointCurrency|priceFormat|stkPrc|stkBid|stkAsk|stkMark|stkMarkErrCodes|stkMarkSource|stkOpnMidMark|stkOpnClrMark|stkOpnPosPrv|stkOpnPosClr|stkOpnPos|stkOpnPosSrc|shBot|shSld|shSldShrt|shBotHdg|shSldHdg|shBotTrh|shSldTrh|shBotOpn|shSldOpn|shBotTrd|shSldTrd|stkMnyBot|stkMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|exDivAmt|borrowRate|beta|betaSource|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'riskServerCode:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=StockPositionRecordV5' \\\n--data-urlencode 'view=riskServerCode|priAggGroup|secAggGroup|symbolType|tickValue|pointValue|pointCurrency|priceFormat|stkPrc|stkBid|stkAsk|stkMark|stkMarkErrCodes|stkMarkSource|stkOpnMidMark|stkOpnClrMark|stkOpnPosPrv|stkOpnPosClr|stkOpnPos|stkOpnPosSrc|shBot|shSld|shSldShrt|shBotHdg|shSldHdg|shBotTrh|shSldTrh|shBotOpn|shSldOpn|shBotTrd|shSldTrd|stkMnyBot|stkMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|exDivAmt|borrowRate|beta|betaSource|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=riskServerCode:ASC'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPositionRecordV5\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'riskServerCode|priAggGroup|secAggGroup|symbolType|tickValue|pointValue|pointCurrency|priceFormat|stkPrc|stkBid|stkAsk|stkMark|stkMarkErrCodes|stkMarkSource|stkOpnMidMark|stkOpnClrMark|stkOpnPosPrv|stkOpnPosClr|stkOpnPos|stkOpnPosSrc|shBot|shSld|shSldShrt|shBotHdg|shSldHdg|shBotTrh|shSldTrh|shBotOpn|shSldOpn|shBotTrd|shSldTrd|stkMnyBot|stkMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|exDivAmt|borrowRate|beta|betaSource|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'symbolType|pointCurrency|priceFormat|stkMarkSource|stkOpnPosSrc|betaSource\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=StockPositionRecordV5' \\\n--data-urlencode 'measure=riskServerCode|priAggGroup|secAggGroup|symbolType|tickValue|pointValue|pointCurrency|priceFormat|stkPrc|stkBid|stkAsk|stkMark|stkMarkErrCodes|stkMarkSource|stkOpnMidMark|stkOpnClrMark|stkOpnPosPrv|stkOpnPosClr|stkOpnPos|stkOpnPosSrc|shBot|shSld|shSldShrt|shBotHdg|shSldHdg|shBotTrh|shSldTrh|shBotOpn|shSldOpn|shBotTrd|shSldTrd|stkMnyBot|stkMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|exDivAmt|borrowRate|beta|betaSource|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp' \\\n--data-urlencode 'group=symbolType|pointCurrency|priceFormat|stkMarkSource|stkOpnPosSrc|betaSource' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'StockPositionRecordV5\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=StockPositionRecordV5' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,r,s)=>{s.d(r,{A:()=>i});s(96540);var t=s(34164);const n={tabItem:"tabItem_Ymn6"};var d=s(74848);function i(e){let{children:r,hidden:s,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,i),hidden:s,children:r})}},11470:(e,r,s)=>{s.d(r,{A:()=>b});var t=s(96540),n=s(34164),d=s(23104),i=s(56347),a=s(205),l=s(57485),o=s(31682),c=s(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const n=(0,i.W6)(),d=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,l.aZ)(d),(0,t.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(n.location.search);r.set(d,e),n.replace({...n.location,search:r.toString()})}),[d,n])]}function m(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,d=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:d}))),[o,h]=x({queryString:s,groupId:n}),[m,j]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,d]=(0,c.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&d.set(e)}),[s,d])]}({groupId:n}),g=(()=>{const e=o??m;return p({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,d]),tabValues:d}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=s(74848);function y(e){let{className:r,block:s,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,d.a_)(),c=e=>{const r=e.currentTarget,s=l.indexOf(r),n=a[s].value;n!==t&&(o(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;r=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;r=l[s]??l[l.length-1];break}}r?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:a.map((e=>{let{value:r,label:s,attributes:d}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:h,onClick:c,...d,className:(0,n.A)("tabs__item",g.tabItem,d?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function S(e){let{lazy:r,children:s,selectedValue:n}=e;const d=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=d.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:d.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function f(e){const r=m(e);return(0,k.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,k.jsx)(y,{...r,...e}),(0,k.jsx)(S,{...r,...e})]})}function b(e){const r=(0,j.A)();return(0,k.jsx)(f,{...e,children:h(e.children)},String(r))}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var t=s(96540);const n={},d=t.createContext(n);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);