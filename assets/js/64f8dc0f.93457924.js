"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[48218],{41440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),i=n(11470),a=n(19365);const d={title:"LiveSurfaceDetail"},l="Schema: LiveSurfaceDetail (ID: 1130)",c={id:"MessageSchemas/Schema/Topics/analytics/LiveSurfaceDetail",title:"LiveSurfaceDetail",description:"LiveSurfaceDetail (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit details.SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close).",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/1000-analytics/LiveSurfaceDetail.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveSurfaceDetail",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/analytics/LiveSurfaceDetail",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{title:"LiveSurfaceDetail"},sidebar:"messageSchemasSidebar",previous:{title:"LiveSurfaceCurve",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/analytics/LiveSurfaceCurve"},next:{title:"LiveSurfaceFixedGrid",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedGrid"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-livesurfacedetail-id-1130",children:["Schema: LiveSurfaceDetail ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1130)"})]}),"\n",(0,r.jsxs)(t.p,{children:["LiveSurfaceDetail (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit details.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"1000-analytics"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"ekey"}),(0,r.jsx)(t.td,{children:"ExpiryKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"11="}),(0,r.jsx)(t.td,{children:"surfaceType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SurfaceCurveType",children:"enum : SurfaceCurveType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"underlying stock key that this option expiration attaches to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"101"}),(0,r.jsx)(t.td,{children:"fkey"}),(0,r.jsx)(t.td,{children:"ExpiryKey"}),(0,r.jsx)(t.td,{children:"underlying future key (if any)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"102"}),(0,r.jsx)(t.td,{children:"uPrcDriverKey"}),(0,r.jsx)(t.td,{children:"ExpiryKey"}),(0,r.jsx)(t.td,{children:"underlier driver key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"uPrcDriverType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(t.td,{children:"underlier driver key type (stock or future)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"104"}),(0,r.jsx)(t.td,{children:"ddiv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"(expected) cumulative discrete dividend $ amounts prior to expiration"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"105"}),(0,r.jsx)(t.td,{children:"ddivPv"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"(expected) cumulative npv of discrete dividend $ amounts prior to expiration (SR global rate curve)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"ddivSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/DDivSource",children:"enum : DDivSource"})}),(0,r.jsx)(t.td,{children:"Forecast if any of the dividends prior to expiry are forecast rather than announced"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"107"}),(0,r.jsx)(t.td,{children:"symbolRatio"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier price ratio (usually 1.0 or a multi-hedge option price ratio; if one exists)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"108"}),(0,r.jsx)(t.td,{children:"exType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,r.jsx)(t.td,{children:"exercise type (American or European)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"modelType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,r.jsx)(t.td,{children:"option pricing model used for price calcs (Normal, LogNormal, etc.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"110"}),(0,r.jsx)(t.td,{children:"priceType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CalcPriceType",children:"enum : CalcPriceType"})}),(0,r.jsx)(t.td,{children:"Equity has independent sdiv and rate, Future has sdiv = rate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"111"}),(0,r.jsx)(t.td,{children:"earnCnt"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"number of qualifying earnings events prior to expiration [can be fractional] (from StockEarningsCalendar)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"earnCntAdj"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"number of qualifying earnings events prior to expiration [adjusted] (from StockEarningsCalendar + LiveSurfaceTerm)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"113"}),(0,r.jsx)(t.td,{children:"moneynessType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/MoneynessType",children:"enum : MoneynessType"})}),(0,r.jsx)(t.td,{children:"moneyness (xAxis) convention"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"114"}),(0,r.jsx)(t.td,{children:"priceQuoteType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PriceQuoteType",children:"enum : PriceQuoteType"})}),(0,r.jsx)(t.td,{children:"Price or Vol"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"atmVolHist"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"historical realized volatility (includes eMoveHist x earnCntAdj adjustment).  Note that this is the default atmVol if no implied markets existed previous day."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"116"}),(0,r.jsx)(t.td,{children:"atmCenHist"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"censored (earnings events removed) historical realized volatility.  Trailing periods is 2x forward time to expiration.  From HistoricalVolatility(windowType=hlCen).mv_nnn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"117"}),(0,r.jsx)(t.td,{children:"uBetaHist"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"beta (this underlier vs basis underlier; T + 1 week)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"eMove"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"implied earnings move (from LiveSurfaceTerm)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"119"}),(0,r.jsx)(t.td,{children:"eMoveHist"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"historical earnings move (avg of trailing 8 moves). From StockEarningsCalendar.eMoveHist"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"120"}),(0,r.jsx)(t.td,{children:"minXAxis"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"minimum xAxis value; left most point with a valid supporting strike"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"maxXAxis"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"maximum xAxis value; right most point with a valid supporting strike"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"122"}),(0,r.jsx)(t.td,{children:"atmPhi"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface phi @ xAxis = 0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"123"}),(0,r.jsx)(t.td,{children:"atmRho"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface rho @ xAxis = 0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"atmVega"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"surface vega @ xAxis = 0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"125"}),(0,r.jsx)(t.td,{children:"uPrcRatio"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"uPrcAdj = uPrc * uPrcRatioFit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"126"}),(0,r.jsx)(t.td,{children:"pwidth"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"minimum mkt premium width"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"vwidth"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"minimum mkt volatility width"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"128"}),(0,r.jsx)(t.td,{children:"cCnt"}),(0,r.jsx)(t.td,{children:"ushort"}),(0,r.jsx)(t.td,{children:"num call strikes in base fit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"129"}),(0,r.jsx)(t.td,{children:"pCnt"}),(0,r.jsx)(t.td,{children:"ushort"}),(0,r.jsx)(t.td,{children:"num put strikes in base fit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"hasBracketMin"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"131"}),(0,r.jsx)(t.td,{children:"surfaceSkewType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SurfaceSkewType",children:"enum : SurfaceSkewType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"132"}),(0,r.jsx)(t.td,{children:"cBidMiss"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"number of call bid violations (surface outside the market)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"133"}),(0,r.jsx)(t.td,{children:"cAskMiss"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"number of call ask violations (surface outside the market)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"134"}),(0,r.jsx)(t.td,{children:"pBidMiss"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"number of put bid violations"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"135"}),(0,r.jsx)(t.td,{children:"pAskMiss"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"number of put ask violations"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"fitScoreT0"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"137"}),(0,r.jsx)(t.td,{children:"fitScoreT1"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"138"}),(0,r.jsx)(t.td,{children:"cumFitScoreT0"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"cumFitScoreT1"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"140"}),(0,r.jsx)(t.td,{children:"fitCounter"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"number of fit/count passes (current trade date / market open)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"141"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'LiveSurfaceDetail'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=LiveSurfaceDetail'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveSurfaceDetail\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|fkey|uPrcDriverKey|uPrcDriverType|ddiv|ddivPv|ddivSource|symbolRatio|exType|modelType|priceType|earnCnt|earnCntAdj|moneynessType|priceQuoteType|atmVolHist|atmCenHist|uBetaHist|eMove|eMoveHist|minXAxis|maxXAxis|atmPhi|atmRho|atmVega|uPrcRatio|pwidth|vwidth|cCnt|pCnt|hasBracketMin|surfaceSkewType|cBidMiss|cAskMiss|pBidMiss|pAskMiss|fitScoreT0|fitScoreT1|cumFitScoreT0|cumFitScoreT1|fitCounter|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=LiveSurfaceDetail' \\\n--data-urlencode 'view=ticker|fkey|uPrcDriverKey|uPrcDriverType|ddiv|ddivPv|ddivSource|symbolRatio|exType|modelType|priceType|earnCnt|earnCntAdj|moneynessType|priceQuoteType|atmVolHist|atmCenHist|uBetaHist|eMove|eMoveHist|minXAxis|maxXAxis|atmPhi|atmRho|atmVega|uPrcRatio|pwidth|vwidth|cCnt|pCnt|hasBracketMin|surfaceSkewType|cBidMiss|cAskMiss|pBidMiss|pAskMiss|fitScoreT0|fitScoreT1|cumFitScoreT0|cumFitScoreT1|fitCounter|timestamp' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveSurfaceDetail\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|fkey|uPrcDriverKey|uPrcDriverType|ddiv|ddivPv|ddivSource|symbolRatio|exType|modelType|priceType|earnCnt|earnCntAdj|moneynessType|priceQuoteType|atmVolHist|atmCenHist|uBetaHist|eMove|eMoveHist|minXAxis|maxXAxis|atmPhi|atmRho|atmVega|uPrcRatio|pwidth|vwidth|cCnt|pCnt|hasBracketMin|surfaceSkewType|cBidMiss|cAskMiss|pBidMiss|pAskMiss|fitScoreT0|fitScoreT1|cumFitScoreT0|cumFitScoreT1|fitCounter|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=LiveSurfaceDetail' \\\n--data-urlencode 'view=ticker|fkey|uPrcDriverKey|uPrcDriverType|ddiv|ddivPv|ddivSource|symbolRatio|exType|modelType|priceType|earnCnt|earnCntAdj|moneynessType|priceQuoteType|atmVolHist|atmCenHist|uBetaHist|eMove|eMoveHist|minXAxis|maxXAxis|atmPhi|atmRho|atmVega|uPrcRatio|pwidth|vwidth|cCnt|pCnt|hasBracketMin|surfaceSkewType|cBidMiss|cAskMiss|pBidMiss|pAskMiss|fitScoreT0|fitScoreT1|cumFitScoreT0|cumFitScoreT1|fitCounter|timestamp' \\\n--data-urlencode 'where=' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveSurfaceDetail\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|fkey|uPrcDriverKey|uPrcDriverType|ddiv|ddivPv|ddivSource|symbolRatio|exType|modelType|priceType|earnCnt|earnCntAdj|moneynessType|priceQuoteType|atmVolHist|atmCenHist|uBetaHist|eMove|eMoveHist|minXAxis|maxXAxis|atmPhi|atmRho|atmVega|uPrcRatio|pwidth|vwidth|cCnt|pCnt|hasBracketMin|surfaceSkewType|cBidMiss|cAskMiss|pBidMiss|pAskMiss|fitScoreT0|fitScoreT1|cumFitScoreT0|cumFitScoreT1|fitCounter|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'uPrcDriverType|ddivSource|exType|modelType|priceType|moneynessType|priceQuoteType|hasBracketMin|surfaceSkewType\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=LiveSurfaceDetail' \\\n--data-urlencode 'measure=ticker|fkey|uPrcDriverKey|uPrcDriverType|ddiv|ddivPv|ddivSource|symbolRatio|exType|modelType|priceType|earnCnt|earnCntAdj|moneynessType|priceQuoteType|atmVolHist|atmCenHist|uBetaHist|eMove|eMoveHist|minXAxis|maxXAxis|atmPhi|atmRho|atmVega|uPrcRatio|pwidth|vwidth|cCnt|pCnt|hasBracketMin|surfaceSkewType|cBidMiss|cAskMiss|pBidMiss|pAskMiss|fitScoreT0|fitScoreT1|cumFitScoreT0|cumFitScoreT1|fitCounter|timestamp' \\\n--data-urlencode 'group=uPrcDriverType|ddivSource|exType|modelType|priceType|moneynessType|priceQuoteType|hasBracketMin|surfaceSkewType' \\\n--data-urlencode 'where='\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'LiveSurfaceDetail\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=LiveSurfaceDetail' \\\n--data-urlencode 'where='\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>X});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),d=n(205),l=n(57485),c=n(31682),o=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),y=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const t=e.currentTarget,n=l.indexOf(t),s=d[n].value;s!==r&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function T(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function X(e){const t=(0,j.A)();return(0,f.jsx)(T,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);