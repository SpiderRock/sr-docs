"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21544],{26217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=r(74848),s=r(28453),d=r(11470),i=r(19365);const a={title:"FuturePositionRecordV5"},l="Schema: FuturePositionRecordV5 (ID: 4775)",c={id:"MessageSchemas/Schema/Topics/risk-v5/FuturePositionRecordV5",title:"FuturePositionRecordV5",description:"FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.These records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.New records are published immediately when a position changes and about once per minute if no position has changed.Note that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks.",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Topics/4740-risk-v5/FuturePositionRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/FuturePositionRecordV5",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/risk-v5/FuturePositionRecordV5",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{title:"FuturePositionRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"ExpirationRiskRecordV5",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5"},next:{title:"FutureRiskDetailV5",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/risk-v5/FutureRiskDetailV5"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"schema-futurepositionrecordv5-id-4775",children:["Schema: FuturePositionRecordV5 ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4775)"})]}),"\n",(0,t.jsxs)(n.p,{children:["FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks."]}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"ClientRisk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Product"}),(0,t.jsx)(n.td,{children:"SRRisk"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10="}),(0,t.jsx)(n.td,{children:"fkey"}),(0,t.jsx)(n.td,{children:"ExpiryKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11="}),(0,t.jsx)(n.td,{children:"accnt"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12="}),(0,t.jsx)(n.td,{children:"tradeDate"}),(0,t.jsx)(n.td,{children:"DateKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13="}),(0,t.jsx)(n.td,{children:"riskSession"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"14="}),(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"103"}),(0,t.jsx)(n.td,{children:"riskServerCode"}),(0,t.jsx)(n.td,{children:"string(6)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"106"}),(0,t.jsx)(n.td,{children:"aggGroup"}),(0,t.jsx)(n.td,{children:"string(16)"}),(0,t.jsx)(n.td,{children:"SR assigned aggregation group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"109"}),(0,t.jsx)(n.td,{children:"ticker"}),(0,t.jsx)(n.td,{children:"TickerKey"}),(0,t.jsx)(n.td,{children:"underlying ticker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"underliersPerCn"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of underlying units per futures contract"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"115"}),(0,t.jsx)(n.td,{children:"underlierType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"118"}),(0,t.jsx)(n.td,{children:"tickValue"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"121"}),(0,t.jsx)(n.td,{children:"pointValue"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"124"}),(0,t.jsx)(n.td,{children:"pointCurrency"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"127"}),(0,t.jsx)(n.td,{children:"priceFormat"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(n.td,{children:"price display format code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"130"}),(0,t.jsx)(n.td,{children:"futPrc"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"current future price (any market session) (persists if market closed/halted)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"133"}),(0,t.jsx)(n.td,{children:"futBid"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"current future bid (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"136"}),(0,t.jsx)(n.td,{children:"futAsk"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"current future ask (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"139"}),(0,t.jsx)(n.td,{children:"futMark"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"current mark (usually mid market) (freezes at SR CloseMarkTime)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"142"}),(0,t.jsx)(n.td,{children:"futMarkErrCodes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/MarkErrorCode",children:"flag : MarkErrorCode"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"145"}),(0,t.jsx)(n.td,{children:"futMarkSource"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/UMarkSource",children:"enum : UMarkSource"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"148"}),(0,t.jsx)(n.td,{children:"futOpnMidMark"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"start of day SR mark"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"151"}),(0,t.jsx)(n.td,{children:"futOpnClrMark"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"start of day clearing mark (usually exchange settlement mark)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"154"}),(0,t.jsx)(n.td,{children:"futOpnPosPrv"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"start-of-day SR contract position (rotated from prior day record)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"157"}),(0,t.jsx)(n.td,{children:"futOpnPosClr"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"start-of-day CKR contract position (supplied by client/clearing firm via clearing position load)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"160"}),(0,t.jsx)(n.td,{children:"futOpnPos"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"start of period contract position (effective; can be from either CLR or SR)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"163"}),(0,t.jsx)(n.td,{children:"futOpnPosSrc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,t.jsx)(n.td,{children:"start of period position source"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"166"}),(0,t.jsx)(n.td,{children:"cnBot"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts bot today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"169"}),(0,t.jsx)(n.td,{children:"cnSld"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts sld today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"172"}),(0,t.jsx)(n.td,{children:"cnBotTrd"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts bot today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"175"}),(0,t.jsx)(n.td,{children:"cnSldTrd"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts sld today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"178"}),(0,t.jsx)(n.td,{children:"cnBotHdg"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts bot today from open pos hedging (spdrSource=HedgeTool)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"181"}),(0,t.jsx)(n.td,{children:"cnSldHdg"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts sld today from open pos hedging (spdrSource=HedgeTool)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"184"}),(0,t.jsx)(n.td,{children:"cnBotTrh"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts bot today from open pos hedging (spdrSource=TradeHedge)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"187"}),(0,t.jsx)(n.td,{children:"cnSldTrh"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts sld today from open pos hedging (spdrSource=TradeHedge)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"190"}),(0,t.jsx)(n.td,{children:"cnBotOpn"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts bot today from open pos hedging (spdrSource=OpenHedge)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"193"}),(0,t.jsx)(n.td,{children:"cnSldOpn"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts sld today from open pos hedging (spdrSource=OpenHedge)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"196"}),(0,t.jsx)(n.td,{children:"cnOpened"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts opened today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"199"}),(0,t.jsx)(n.td,{children:"cnClosed"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of contracts closed today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"202"}),(0,t.jsx)(n.td,{children:"futMnyBot"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"sum of settle cash for all buy executions"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"205"}),(0,t.jsx)(n.td,{children:"futMnySld"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"sum of settle cash for all sell executions"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"208"}),(0,t.jsx)(n.td,{children:"dayPnl"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"211"}),(0,t.jsx)(n.td,{children:"opnPnlMidMark"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"214"}),(0,t.jsx)(n.td,{children:"opnPnlClrMark"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"217"}),(0,t.jsx)(n.td,{children:"beta"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource) (if applicable)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"220"}),(0,t.jsx)(n.td,{children:"betaSource"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"223"}),(0,t.jsx)(n.td,{children:"days"}),(0,t.jsx)(n.td,{children:"short"}),(0,t.jsx)(n.td,{children:"days to expiration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"226"}),(0,t.jsx)(n.td,{children:"rate"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"global rate to expiration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"229"}),(0,t.jsx)(n.td,{children:"years"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"years to expiration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"232"}),(0,t.jsx)(n.td,{children:"rh"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"rho; (dPrc / dRate) - only for STIR futures"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"235"}),(0,t.jsx)(n.td,{children:"ve"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"vega; (dPrc / dVol) - only for VIX futures"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"238"}),(0,t.jsx)(n.td,{children:"ratePr"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"start of period global rate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"241"}),(0,t.jsx)(n.td,{children:"yearsPr"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"start of period years to expiration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"251"}),(0,t.jsx)(n.td,{children:"marginUDn"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc dn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"252"}),(0,t.jsx)(n.td,{children:"marginUUp"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"Aggregate RiskSlide: uPrc up"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"244"}),(0,t.jsx)(n.td,{children:"numExecutions"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"number of included SpdrParentExecution records"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"247"}),(0,t.jsx)(n.td,{children:"maxExecDttm"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{children:"maximum activity dttm of execution records included in this future risk record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"250"}),(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'FuturePositionRecordV5'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=FuturePositionRecordV5'\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePositionRecordV5\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'riskServerCode|aggGroup|ticker|underliersPerCn|underlierType|tickValue|pointValue|pointCurrency|priceFormat|futPrc|futBid|futAsk|futMark|futMarkErrCodes|futMarkSource|futOpnMidMark|futOpnClrMark|futOpnPosPrv|futOpnPosClr|futOpnPos|futOpnPosSrc|cnBot|cnSld|cnBotTrd|cnSldTrd|cnBotHdg|cnSldHdg|cnBotTrh|cnSldTrh|cnBotOpn|cnSldOpn|cnOpened|cnClosed|futMnyBot|futMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|beta|betaSource|days|rate|years|rh|ve|ratePr|yearsPr|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=FuturePositionRecordV5' \\\n--data-urlencode 'view=riskServerCode|aggGroup|ticker|underliersPerCn|underlierType|tickValue|pointValue|pointCurrency|priceFormat|futPrc|futBid|futAsk|futMark|futMarkErrCodes|futMarkSource|futOpnMidMark|futOpnClrMark|futOpnPosPrv|futOpnPosClr|futOpnPos|futOpnPosSrc|cnBot|cnSld|cnBotTrd|cnSldTrd|cnBotHdg|cnSldHdg|cnBotTrh|cnSldTrh|cnBotOpn|cnSldOpn|cnOpened|cnClosed|futMnyBot|futMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|beta|betaSource|days|rate|years|rh|ve|ratePr|yearsPr|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePositionRecordV5\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'riskServerCode|aggGroup|ticker|underliersPerCn|underlierType|tickValue|pointValue|pointCurrency|priceFormat|futPrc|futBid|futAsk|futMark|futMarkErrCodes|futMarkSource|futOpnMidMark|futOpnClrMark|futOpnPosPrv|futOpnPosClr|futOpnPos|futOpnPosSrc|cnBot|cnSld|cnBotTrd|cnSldTrd|cnBotHdg|cnSldHdg|cnBotTrh|cnSldTrh|cnBotOpn|cnSldOpn|cnOpened|cnClosed|futMnyBot|futMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|beta|betaSource|days|rate|years|rh|ve|ratePr|yearsPr|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'riskServerCode:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=FuturePositionRecordV5' \\\n--data-urlencode 'view=riskServerCode|aggGroup|ticker|underliersPerCn|underlierType|tickValue|pointValue|pointCurrency|priceFormat|futPrc|futBid|futAsk|futMark|futMarkErrCodes|futMarkSource|futOpnMidMark|futOpnClrMark|futOpnPosPrv|futOpnPosClr|futOpnPos|futOpnPosSrc|cnBot|cnSld|cnBotTrd|cnSldTrd|cnBotHdg|cnSldHdg|cnBotTrh|cnSldTrh|cnBotOpn|cnSldOpn|cnOpened|cnClosed|futMnyBot|futMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|beta|betaSource|days|rate|years|rh|ve|ratePr|yearsPr|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=riskServerCode:ASC'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePositionRecordV5\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'riskServerCode|aggGroup|ticker|underliersPerCn|underlierType|tickValue|pointValue|pointCurrency|priceFormat|futPrc|futBid|futAsk|futMark|futMarkErrCodes|futMarkSource|futOpnMidMark|futOpnClrMark|futOpnPosPrv|futOpnPosClr|futOpnPos|futOpnPosSrc|cnBot|cnSld|cnBotTrd|cnSldTrd|cnBotHdg|cnSldHdg|cnBotTrh|cnSldTrh|cnBotOpn|cnSldOpn|cnOpened|cnClosed|futMnyBot|futMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|beta|betaSource|days|rate|years|rh|ve|ratePr|yearsPr|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'underlierType|pointCurrency|priceFormat|futMarkSource|futOpnPosSrc|betaSource\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=FuturePositionRecordV5' \\\n--data-urlencode 'measure=riskServerCode|aggGroup|ticker|underliersPerCn|underlierType|tickValue|pointValue|pointCurrency|priceFormat|futPrc|futBid|futAsk|futMark|futMarkErrCodes|futMarkSource|futOpnMidMark|futOpnClrMark|futOpnPosPrv|futOpnPosClr|futOpnPos|futOpnPosSrc|cnBot|cnSld|cnBotTrd|cnSldTrd|cnBotHdg|cnSldHdg|cnBotTrh|cnSldTrh|cnBotOpn|cnSldOpn|cnOpened|cnClosed|futMnyBot|futMnySld|dayPnl|opnPnlMidMark|opnPnlClrMark|beta|betaSource|days|rate|years|rh|ve|ratePr|yearsPr|marginUDn|marginUUp|numExecutions|maxExecDttm|timestamp' \\\n--data-urlencode 'group=underlierType|pointCurrency|priceFormat|futMarkSource|futOpnPosSrc|betaSource' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(i.A,{value:"Python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'FuturePositionRecordV5\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=FuturePositionRecordV5' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var d=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),s=r(34164),d=r(23104),i=r(56347),a=r(205),l=r(57485),c=r(31682),o=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),d=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(d),(0,t.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,d=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:d}))),[c,u]=x({queryString:r,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,d]=(0,o.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),f=(()=>{const e=c??j;return p({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,d]),tabValues:d}}var m=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),o=e=>{const n=e.currentTarget,r=l.indexOf(n),s=a[r].value;s!==t&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:d}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...d,className:(0,s.A)("tabs__item",f.tabItem,d?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function P(e){let{lazy:n,children:r,selectedValue:s}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(P,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);