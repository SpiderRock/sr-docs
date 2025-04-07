"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["32210"],{32300:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>o});var s=JSON.parse('{"id":"MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir","title":"AutoResponderVegaDir","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2450-liquidity-notice/AutoResponderVegaDir.md","sourceDirName":"MessageSchemas/Schema/Topics/2450-liquidity-notice","slug":"/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"AutoResponderVegaDir"},"sidebar":"messageSchemasSidebar","previous":{"title":"AutoResponderSN","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderSN"},"next":{"title":"NoticeCancel","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/NoticeCancel"}}'),r=t("52676"),a=t("91503"),i=t("71386"),l=t("9641");let d={title:"AutoResponderVegaDir"},o="Schema: AutoResponderVegaDir (ID: 2495)",c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3},{value:"Post Msgs API Call",id:"post-msgs-api-call",level:3}];function m(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"schema-autorespondervegadir-id-2495",children:["Schema: AutoResponderVegaDir ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2495)"})]})}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SRATS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10="}),(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"14="}),(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"16="}),(0,r.jsx)(n.td,{children:"root"}),(0,r.jsx)(n.td,{children:"TickerKey"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12="}),(0,r.jsx)(n.td,{children:"respSide"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(n.td,{children:"auction responder side (your side)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17="}),(0,r.jsx)(n.td,{children:"responderID"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"client supplied responder ID (can be any number including zero)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"string(24)"}),(0,r.jsx)(n.td,{children:"username used for responding to auction notices"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"102"}),(0,r.jsx)(n.td,{children:"isDisabled"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"if Yes, this auto-responder record is disabled"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"136"}),(0,r.jsx)(n.td,{children:"enabledUntil"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"will be enabled up until this time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"canIncludeFlex"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"if yes, can respond to auction notices that include flex option legs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"104"}),(0,r.jsx)(n.td,{children:"canIncludeStock"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"if yes, can respond to auction notices that include a stock leg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"105"}),(0,r.jsx)(n.td,{children:"cpFlag"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum : CallPut"})}),(0,r.jsx)(n.td,{children:"if not Pair must match all option legs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"137"}),(0,r.jsx)(n.td,{children:"minNetVegaRatio"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"minimum ratio of abs(netVega)/totalVega to enable a response (hard lower limit of 0.25)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"138"}),(0,r.jsx)(n.td,{children:"minYears"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"all leg years must be between [minYears, maxYears]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"maxYears"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"140"}),(0,r.jsx)(n.td,{children:"minExpiry"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"all leg expiries must be between [minExpiry, maxExpiry]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"141"}),(0,r.jsx)(n.td,{children:"maxExpiry"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"110"}),(0,r.jsx)(n.td,{children:"minXDelta"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"all leg xDelta must be between [minXDelta, maxXDelta]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"111"}),(0,r.jsx)(n.td,{children:"maxXDelta"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"minStrike"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"all leg strikes must be between [minStrike, maxStrike]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"113"}),(0,r.jsx)(n.td,{children:"maxStrike"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"114"}),(0,r.jsx)(n.td,{children:"minSurfEdgePrem"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"spread surface edge (in premium) (+ = through surface; - = behind surface)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"minSurfEdgeVol"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"spread surface edge (in vol) (0.01 = 1.0 vol pts) (+ = through surface; - = behind surface)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"131"}),(0,r.jsx)(n.td,{children:"incFeesInResp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"include all estimated responder fees in final response price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"132"}),(0,r.jsx)(n.td,{children:"roundRule"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"117"}),(0,r.jsx)(n.td,{children:"maxResponseSize"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"maximum number of contracts per response (will respond for 100% if auction size <= maxResponseSize)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"maxResponseVega"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"maximum total vega per response"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"134"}),(0,r.jsx)(n.td,{children:"totalResponseVega"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"maximum vega (filled) all day"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"135"}),(0,r.jsx)(n.td,{children:"totalResponseWtVega"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"maximum wtVega (filled) all day"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"119"}),(0,r.jsx)(n.td,{children:"autoHedge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AutoHedge",children:"enum : AutoHedge"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"120"}),(0,r.jsx)(n.td,{children:"hedgeInstrument"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/HedgeInst",children:"enum : HedgeInst"})}),(0,r.jsx)(n.td,{children:"Default=actual underlier (EQT or FUT) [IndexOptions use ETF]; FrontMonth=actual underlier (EQT) or front month (FUT) [IndexOptions use FM Fut]; Stock=hedgeSecKey.TickerKey; Future=hedgeSecKey.ExpiryKey"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"121"}),(0,r.jsx)(n.td,{children:"hedgeSecKey"}),(0,r.jsx)(n.td,{children:"ExpiryKey"}),(0,r.jsx)(n.td,{children:"autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"122"}),(0,r.jsx)(n.td,{children:"hedgeBetaRatio"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123"}),(0,r.jsx)(n.td,{children:"hedgeScope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/HedgeScope",children:"enum : HedgeScope"})}),(0,r.jsx)(n.td,{children:"hedge group scope [RiskGroup or Accnt]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"124"}),(0,r.jsx)(n.td,{children:"hedgeSession"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,r.jsx)(n.td,{children:"time in force for the autohedge order (can be Day or ExtDay) [None defaults to pOrder.timeInForce]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"125"}),(0,r.jsx)(n.td,{children:"riskGroupId"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsxs)(n.td,{children:["Default: 0 (none).  Required to be non-zero if ",(0,r.jsx)(n.code,{children:"autoHedge"})," is something other than None."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"string(24)"}),(0,r.jsx)(n.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"128"}),(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"129"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AutoResponderVegaDir'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AutoResponderVegaDir'\n\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AutoResponderVegaDir\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'userName|isDisabled|enabledUntil|canIncludeFlex|canIncludeStock|cpFlag|minNetVegaRatio|minYears|maxYears|minExpiry|maxExpiry|minXDelta|maxXDelta|minStrike|maxStrike|minSurfEdgePrem|minSurfEdgeVol|incFeesInResp|roundRule|maxResponseSize|maxResponseVega|totalResponseVega|totalResponseWtVega|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|riskGroupId|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AutoResponderVegaDir' \\\n--data-urlencode 'view=userName|isDisabled|enabledUntil|canIncludeFlex|canIncludeStock|cpFlag|minNetVegaRatio|minYears|maxYears|minExpiry|maxExpiry|minXDelta|maxXDelta|minStrike|maxStrike|minSurfEdgePrem|minSurfEdgeVol|incFeesInResp|roundRule|maxResponseSize|maxResponseVega|totalResponseVega|totalResponseWtVega|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|riskGroupId|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AutoResponderVegaDir\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'userName|isDisabled|enabledUntil|canIncludeFlex|canIncludeStock|cpFlag|minNetVegaRatio|minYears|maxYears|minExpiry|maxExpiry|minXDelta|maxXDelta|minStrike|maxStrike|minSurfEdgePrem|minSurfEdgeVol|incFeesInResp|roundRule|maxResponseSize|maxResponseVega|totalResponseVega|totalResponseWtVega|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|riskGroupId|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'userName:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AutoResponderVegaDir' \\\n--data-urlencode 'view=userName|isDisabled|enabledUntil|canIncludeFlex|canIncludeStock|cpFlag|minNetVegaRatio|minYears|maxYears|minExpiry|maxExpiry|minXDelta|maxXDelta|minStrike|maxStrike|minSurfEdgePrem|minSurfEdgeVol|incFeesInResp|roundRule|maxResponseSize|maxResponseVega|totalResponseVega|totalResponseWtVega|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|riskGroupId|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=userName:ASC'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AutoResponderVegaDir\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'userName|isDisabled|enabledUntil|canIncludeFlex|canIncludeStock|cpFlag|minNetVegaRatio|minYears|maxYears|minExpiry|maxExpiry|minXDelta|maxXDelta|minStrike|maxStrike|minSurfEdgePrem|minSurfEdgeVol|incFeesInResp|roundRule|maxResponseSize|maxResponseVega|totalResponseVega|totalResponseWtVega|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|riskGroupId|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'isDisabled|canIncludeFlex|canIncludeStock|cpFlag|incFeesInResp|roundRule|autoHedge|hedgeInstrument|hedgeScope|hedgeSession|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AutoResponderVegaDir' \\\n--data-urlencode 'measure=userName|isDisabled|enabledUntil|canIncludeFlex|canIncludeStock|cpFlag|minNetVegaRatio|minYears|maxYears|minExpiry|maxExpiry|minXDelta|maxXDelta|minStrike|maxStrike|minSurfEdgePrem|minSurfEdgeVol|incFeesInResp|roundRule|maxResponseSize|maxResponseVega|totalResponseVega|totalResponseWtVega|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|riskGroupId|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=isDisabled|canIncludeFlex|canIncludeStock|cpFlag|incFeesInResp|roundRule|autoHedge|hedgeInstrument|hedgeScope|hedgeSession|modifiedIn' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AutoResponderVegaDir\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AutoResponderVegaDir' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"post-msgs-api-call",children:"Post Msgs API Call"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests\n\n# Replace with your desired MLINK URL\nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Request Parameters\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'postmsgs\',\n    "postaction": "U", # (U)pdate, (I)nsert, or (R)eplace\n    "postmerge": "Y", # (Y)es or (N)o\n}\n\npayload = {\n    "header": {\n        "mTyp": "AutoResponderVegaDir"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "exampleString", // string\n            "clientFirm": "exampleString", // string\n            "root": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL"\n            },\n            "respSide": "enumValue", // enum(BuySell) - None, Buy, Sell\n            "responderID": 1 // int\n        },\n        "userName": "exampleString", // string\n        "isDisabled": "enumValue", // enum(YesNo) - None, Yes, No\n        "enabledUntil": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "canIncludeFlex": "enumValue", // enum(YesNo) - None, Yes, No\n        "canIncludeStock": "enumValue", // enum(YesNo) - None, Yes, No\n        "cpFlag": "enumValue", // enum(CallPut) - Call, Put, Pair\n        "minNetVegaRatio": 1.0, // float\n        "minYears": 1.0, // float\n        "maxYears": 1.0, // float\n        "minExpiry": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "maxExpiry": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "minXDelta": 1.0, // float\n        "maxXDelta": 1.0, // float\n        "minStrike": 1.0, // double\n        "maxStrike": 1.0, // double\n        "minSurfEdgePrem": 1.0, // float\n        "minSurfEdgeVol": 1.0, // float\n        "incFeesInResp": "enumValue", // enum(YesNo) - None, Yes, No\n        "roundRule": "enumValue", // enum(RoundRule) - None, Exact, Fuzzy\n        "maxResponseSize": 1, // int\n        "maxResponseVega": 1.0, // float\n        "totalResponseVega": 1.0, // float\n        "totalResponseWtVega": 1.0, // float\n        "autoHedge": "enumValue", // enum(AutoHedge) - None, Static, AutoMid, AutoCrx, AutoTrn, SpdrAuto, Spdr10S, Spdr30S, Spdr90S, Spdr5M, Spdr30M, SpdrDay, SmartFast, SmartNorm, FastCrx, FastDark, SlowDark, AlphaVwap1pct, AlphaVwap2pct, AlphaVwap5pct, AlphaVwap25pct, Custom, AwayAlgo\n        "hedgeInstrument": "enumValue", // enum(HedgeInst) - None, Default, FrontMonth, Stock, Future\n        "hedgeSecKey": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL",\n            "dt": "2025-01-01"\n        },\n        "hedgeBetaRatio": 1.0, // float\n        "hedgeScope": "enumValue", // enum(HedgeScope) - None, Accnt, RiskGroup\n        "hedgeSession": "enumValue", // enum(MarketSession) - None, PreMkt, RegMkt, PostMkt, PreRegMkt, RegPostMkt, AllDay\n        "riskGroupId": 1, // long\n        "modifiedBy": "exampleString", // string\n        "modifiedIn": "enumValue", // enum(SysEnvironment) - None, Neptune, Pluto, V7_Stable, V7_Latest, Saturn, Venus, Mars, SysTest, V7_Current\n        "timestamp": "2025-01-01 12:00:00.000000" // yyyy-MM-dd HH:mm:ss.SSSSSS\n    }\n}\n\nresponse = requests.post(MLINK_PROD_URL, params=params, json=payload)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\' \\\n--data-urlencode \'apiKey=XXXX-XXXX-XXXX-XXXX\' \\\n--data-urlencode \'cmd=postmsgs\' \\\n--data-urlencode \'postaction=U\' \\ # (U)pdate, (I)nsert, or (R)eplace\n--data-urlencode \'postmerge=Y\' \\ # (Y)es or (N)o\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "header": {\n        "mTyp": "AutoResponderVegaDir"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "exampleString", // string\n            "clientFirm": "exampleString", // string\n            "root": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL"\n            },\n            "respSide": "enumValue", // enum(BuySell) - None, Buy, Sell\n            "responderID": 1 // int\n        },\n        "userName": "exampleString", // string\n        "isDisabled": "enumValue", // enum(YesNo) - None, Yes, No\n        "enabledUntil": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "canIncludeFlex": "enumValue", // enum(YesNo) - None, Yes, No\n        "canIncludeStock": "enumValue", // enum(YesNo) - None, Yes, No\n        "cpFlag": "enumValue", // enum(CallPut) - Call, Put, Pair\n        "minNetVegaRatio": 1.0, // float\n        "minYears": 1.0, // float\n        "maxYears": 1.0, // float\n        "minExpiry": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "maxExpiry": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "minXDelta": 1.0, // float\n        "maxXDelta": 1.0, // float\n        "minStrike": 1.0, // double\n        "maxStrike": 1.0, // double\n        "minSurfEdgePrem": 1.0, // float\n        "minSurfEdgeVol": 1.0, // float\n        "incFeesInResp": "enumValue", // enum(YesNo) - None, Yes, No\n        "roundRule": "enumValue", // enum(RoundRule) - None, Exact, Fuzzy\n        "maxResponseSize": 1, // int\n        "maxResponseVega": 1.0, // float\n        "totalResponseVega": 1.0, // float\n        "totalResponseWtVega": 1.0, // float\n        "autoHedge": "enumValue", // enum(AutoHedge) - None, Static, AutoMid, AutoCrx, AutoTrn, SpdrAuto, Spdr10S, Spdr30S, Spdr90S, Spdr5M, Spdr30M, SpdrDay, SmartFast, SmartNorm, FastCrx, FastDark, SlowDark, AlphaVwap1pct, AlphaVwap2pct, AlphaVwap5pct, AlphaVwap25pct, Custom, AwayAlgo\n        "hedgeInstrument": "enumValue", // enum(HedgeInst) - None, Default, FrontMonth, Stock, Future\n        "hedgeSecKey": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL",\n            "dt": "2025-01-01"\n        },\n        "hedgeBetaRatio": 1.0, // float\n        "hedgeScope": "enumValue", // enum(HedgeScope) - None, Accnt, RiskGroup\n        "hedgeSession": "enumValue", // enum(MarketSession) - None, PreMkt, RegMkt, PostMkt, PreRegMkt, RegPostMkt, AllDay\n        "riskGroupId": 1, // long\n        "modifiedBy": "exampleString", // string\n        "modifiedIn": "enumValue", // enum(SysEnvironment) - None, Neptune, Pluto, V7_Stable, V7_Latest, Saturn, Venus, Mars, SysTest, V7_Current\n        "timestamp": "2025-01-01 12:00:00.000000" // yyyy-MM-dd HH:mm:ss.SSSSSS\n    }\n}\'\n'})})})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9641:function(e,n,t){t.d(n,{Z:()=>a});var s=t("52676");t("75271");var r=t("54461");function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_SSzl",a),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>S});var s=t("52676"),r=t("75271"),a=t("54461"),i=t("52289"),l=t("3225"),d=t("42834"),o=t("40578"),c=t("35834"),u=t("79616");function m(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:d}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{let n=e.currentTarget,t=d[o.indexOf(n)].value;t!==r&&(c(n),l(t))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:d.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:m,onClick:u,...i,className:(0,a.Z)("tabs__item","tabItem_aitt",i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,a=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??m(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[x,g]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})},[a,s])]}({queryString:t,groupId:s}),[j,S]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:s}),y=(()=>{let e=x??j;return h({value:e,tabValues:a})?e:null})();return(0,d.Z)(()=>{y&&p(y)},[y]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),S(e)},[g,S,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_ArS0"),children:[(0,s.jsx)(x,{...n,...e}),(0,s.jsx)(g,{...n,...e})]})}function S(e){let n=(0,p.Z)();return(0,s.jsx)(j,{...e,children:m(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(75271);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);