"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[42929],{19888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),a=r(11470),d=r(19365);const l={title:"SpdrStrategyOrderLeggerX"},i="Schema: SpdrStrategyOrderLeggerX (ID: 5355)",c={id:"MessageSchemas/Schema/Topics/strategy-legger/SpdrStrategyOrderLeggerX",title:"SpdrStrategyOrderLeggerX",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/5355-strategy-legger/SpdrStrategyOrderLeggerX.md",sourceDirName:"MessageSchemas/Schema/Topics/5355-strategy-legger",slug:"/MessageSchemas/Schema/Topics/strategy-legger/SpdrStrategyOrderLeggerX",permalink:"/docs/next/MessageSchemas/Schema/Topics/strategy-legger/SpdrStrategyOrderLeggerX",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrStrategyOrderLeggerX"},sidebar:"messageSchemasSidebar",previous:{title:"5355-strategy-legger",permalink:"/docs/next/MessageSchemas/Schema/Topics/strategy-legger/"},next:{title:"SpdrStrategyReportLegX",permalink:"/docs/next/MessageSchemas/Schema/Topics/strategy-legger/SpdrStrategyReportLegX"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-spdrstrategyorderleggerx-id-5355",children:["Schema: SpdrStrategyOrderLeggerX ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 5355)"})]}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"5355-strategy-legger"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"Internal"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"strategyNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"strategy order number"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"spdrSource"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"SR trading account"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"SR client firm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"strategyStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/StrategyStatus",children:"enum : StrategyStatus"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"241"}),(0,n.jsx)(t.td,{children:"execBrkrCode"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"(optional) override the default execBrkrCode for this order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"242"}),(0,n.jsx)(t.td,{children:"externExDest"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"routing code for orders directed to an external order router (default = null); should match FixRoutingTable.destination (in SR accnt config)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"externParams"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"external algo names/parameters (usually just an algo name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"strategy"}),(0,n.jsx)(t.td,{children:"string(36)"}),(0,n.jsx)(t.td,{children:"client-supplied strategy string; visible on SpiderRock GUI tools and other order reports."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"userName"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{children:"name of the user entering the order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"orderSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"strategy size (number of complete spreads)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"leggerLimit"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"strategy limit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"leggerLimitType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/LeggerLimitType",children:"enum : LeggerLimitType"})}),(0,n.jsx)(t.td,{children:"strategy limit type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"leggerAlgo"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/LeggerAlgo",children:"enum : LeggerAlgo"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"balanceHandling"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ParentBalanceHandling",children:"enum : ParentBalanceHandling"})}),(0,n.jsx)(t.td,{children:"base parent order balance handling [make style algo]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"legExposurePct"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"percentage of legger order than can be exposed on a single leg without completing related legs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"legCompletionSlippage"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"maximum leg price slippage to complete an open strategy order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"239"}),(0,n.jsx)(t.td,{children:"marketSession"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"startDttm"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"[optional] (parent order start time)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"orderDuration"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"[optional] (number of seconds)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"goodTillDttm"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"[optional] (default: 2099-01-01)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"160"}),(0,n.jsx)(t.td,{children:"autoHedge"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AutoHedge",children:"enum : AutoHedge"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"163"}),(0,n.jsx)(t.td,{children:"hedgeInstrument"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/HedgeInst",children:"enum : HedgeInst"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"166"}),(0,n.jsx)(t.td,{children:"hedgeSecKey"}),(0,n.jsx)(t.td,{children:"ExpiryKey"}),(0,n.jsx)(t.td,{children:"autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"169"}),(0,n.jsx)(t.td,{children:"hedgeBetaRatio"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"172"}),(0,n.jsx)(t.td,{children:"hedgeScope"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/HedgeScope",children:"enum : HedgeScope"})}),(0,n.jsx)(t.td,{children:"hedge group scope [RiskGroup or Accnt]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"240"}),(0,n.jsx)(t.td,{children:"hedgeSession"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"243"}),(0,n.jsx)(t.td,{children:"externHedgeExDest"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"external broker exDest (only used if orderHandling=Extern)\t\t\t# Should match FixRoutingTable.destination type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"181"}),(0,n.jsx)(t.td,{children:"externHedgeParams"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"external algo names/parameters (usually just an algo name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"184"}),(0,n.jsx)(t.td,{children:"userData1"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"187"}),(0,n.jsx)(t.td,{children:"userData2"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"190"}),(0,n.jsx)(t.td,{children:"childData"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"client supplied data field; passes through to down stream child orders"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"193"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,n.jsx)(t.p,{children:"Legs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"199"}),(0,n.jsx)(t.td,{children:"legId"}),(0,n.jsx)(t.td,{children:"long"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"202"}),(0,n.jsx)(t.td,{children:"legPriority"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/LegPriority",children:"enum : LegPriority"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"205"}),(0,n.jsx)(t.td,{children:"secKey"}),(0,n.jsx)(t.td,{children:"OptionKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"208"}),(0,n.jsx)(t.td,{children:"secType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"211"}),(0,n.jsx)(t.td,{children:"mult"}),(0,n.jsx)(t.td,{children:"ushort"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"214"}),(0,n.jsx)(t.td,{children:"side"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"217"}),(0,n.jsx)(t.td,{children:"posType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"220"}),(0,n.jsx)(t.td,{children:"ssaleFlag"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"223"}),(0,n.jsx)(t.td,{children:"exchMask"}),(0,n.jsx)(t.td,{children:"uint"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"226"}),(0,n.jsx)(t.td,{children:"minUBid"}),(0,n.jsx)(t.td,{children:"double"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"229"}),(0,n.jsx)(t.td,{children:"maxUAsk"}),(0,n.jsx)(t.td,{children:"double"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"232"}),(0,n.jsx)(t.td,{children:"minMaxType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/MinMaxType",children:"enum : MinMaxType"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"235"}),(0,n.jsx)(t.td,{children:"refUPrc"}),(0,n.jsx)(t.td,{children:"double"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"238"}),(0,n.jsx)(t.td,{children:"refDelta"}),(0,n.jsx)(t.td,{children:"float"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrStrategyOrderLeggerX'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrStrategyOrderLeggerX'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrStrategyOrderLeggerX\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'spdrSource|accnt|clientFirm|strategyStatus|execBrkrCode|externExDest|externParams|strategy|userName|orderSize|leggerLimit|leggerLimitType|leggerAlgo|balanceHandling|legExposurePct|legCompletionSlippage|marketSession|startDttm|orderDuration|goodTillDttm|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|externHedgeExDest|externHedgeParams|userData1|userData2|childData|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrStrategyOrderLeggerX' \\\n--data-urlencode 'view=spdrSource|accnt|clientFirm|strategyStatus|execBrkrCode|externExDest|externParams|strategy|userName|orderSize|leggerLimit|leggerLimitType|leggerAlgo|balanceHandling|legExposurePct|legCompletionSlippage|marketSession|startDttm|orderDuration|goodTillDttm|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|externHedgeExDest|externHedgeParams|userData1|userData2|childData|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrStrategyOrderLeggerX\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'spdrSource|accnt|clientFirm|strategyStatus|execBrkrCode|externExDest|externParams|strategy|userName|orderSize|leggerLimit|leggerLimitType|leggerAlgo|balanceHandling|legExposurePct|legCompletionSlippage|marketSession|startDttm|orderDuration|goodTillDttm|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|externHedgeExDest|externHedgeParams|userData1|userData2|childData|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'spdrSource:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrStrategyOrderLeggerX' \\\n--data-urlencode 'view=spdrSource|accnt|clientFirm|strategyStatus|execBrkrCode|externExDest|externParams|strategy|userName|orderSize|leggerLimit|leggerLimitType|leggerAlgo|balanceHandling|legExposurePct|legCompletionSlippage|marketSession|startDttm|orderDuration|goodTillDttm|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|externHedgeExDest|externHedgeParams|userData1|userData2|childData|timestamp' \\\n--data-urlencode 'where=accnt:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=spdrSource:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrStrategyOrderLeggerX\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'spdrSource|accnt|clientFirm|strategyStatus|execBrkrCode|externExDest|externParams|strategy|userName|orderSize|leggerLimit|leggerLimitType|leggerAlgo|balanceHandling|legExposurePct|legCompletionSlippage|marketSession|startDttm|orderDuration|goodTillDttm|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|externHedgeExDest|externHedgeParams|userData1|userData2|childData|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'spdrSource|strategyStatus|leggerLimitType|leggerAlgo|balanceHandling|marketSession|autoHedge|hedgeInstrument|hedgeScope|hedgeSession\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrStrategyOrderLeggerX' \\\n--data-urlencode 'measure=spdrSource|accnt|clientFirm|strategyStatus|execBrkrCode|externExDest|externParams|strategy|userName|orderSize|leggerLimit|leggerLimitType|leggerAlgo|balanceHandling|legExposurePct|legCompletionSlippage|marketSession|startDttm|orderDuration|goodTillDttm|autoHedge|hedgeInstrument|hedgeSecKey|hedgeBetaRatio|hedgeScope|hedgeSession|externHedgeExDest|externHedgeParams|userData1|userData2|childData|timestamp' \\\n--data-urlencode 'group=spdrSource|strategyStatus|leggerLimitType|leggerAlgo|balanceHandling|marketSession|autoHedge|hedgeInstrument|hedgeScope|hedgeSession' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrStrategyOrderLeggerX\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'accnt:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrStrategyOrderLeggerX' \\\n--data-urlencode 'where=accnt:eq:ExampleString'\n"})})})]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),s=r(34164),a=r(23104),d=r(56347),l=r(205),i=r(57485),c=r(31682),o=r(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=u(e),[d,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,h]=x({queryString:r,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=c??m;return g({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function S(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const t=e.currentTarget,r=i.indexOf(t),s=l[r].value;s!==n&&(c(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:h,onClick:o,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function X(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function f(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,y.jsx)(S,{...t,...e}),(0,y.jsx)(X,{...t,...e})]})}function b(e){const t=(0,p.A)();return(0,y.jsx)(f,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);