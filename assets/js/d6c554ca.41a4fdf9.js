"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["217"],{25074:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>u,contentTitle:()=>d});var s=JSON.parse('{"id":"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX","title":"AuctionNoticeBX","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNoticeBX.md","sourceDirName":"MessageSchemas/Schema/Topics/2450-liquidity-notice","slug":"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"AuctionNoticeBX"},"sidebar":"messageSchemasSidebar","previous":{"title":"AuctionNotice","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice"},"next":{"title":"AuctionNoticeRC","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC"}}'),r=n("52676"),i=n("91503"),c=n("71386"),l=n("9641");let a={title:"AuctionNoticeBX"},d="Schema: AuctionNoticeBX (ID: 2468)",o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsxs)(t.h1,{id:"schema-auctionnoticebx-id-2468",children:["Schema: AuctionNoticeBX ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2468)"})]})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SRATS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"noticeNumber"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"underlier ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"101"}),(0,r.jsx)(t.td,{children:"tradeDate"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"102"}),(0,r.jsx)(t.td,{children:"auctionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"auctionEvent"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"104"}),(0,r.jsx)(t.td,{children:"srcAuctionID"}),(0,r.jsx)(t.td,{children:"string(20)"}),(0,r.jsx)(t.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"105"}),(0,r.jsx)(t.td,{children:"srcAuctionType"}),(0,r.jsx)(t.td,{children:"string(4)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"auctionSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,r.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"107"}),(0,r.jsx)(t.td,{children:"isTestAuction"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"142"}),(0,r.jsx)(t.td,{children:"containsFlex"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"141"}),(0,r.jsx)(t.td,{children:"shortCode"}),(0,r.jsx)(t.td,{children:"string(10)"}),(0,r.jsx)(t.td,{children:"auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"137"}),(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"industry string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"138"}),(0,r.jsx)(t.td,{children:"symbolType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"139"}),(0,r.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"root"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"option root (+C.Lo/-P.Lo/-C.Hi/+P.Hi)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"110"}),(0,r.jsx)(t.td,{children:"expiry"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"111"}),(0,r.jsx)(t.td,{children:"loStrike"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"lo strike"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"hiStrike"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"hi strike"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"113"}),(0,r.jsx)(t.td,{children:"custSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(t.td,{children:"if available"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"114"}),(0,r.jsx)(t.td,{children:"custQty"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"custPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"public cust price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"116"}),(0,r.jsx)(t.td,{children:"hasCustPrc"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"117"}),(0,r.jsx)(t.td,{children:"custFirmType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,r.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"custAgentMPID"}),(0,r.jsx)(t.td,{children:"string(6)"}),(0,r.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"119"}),(0,r.jsx)(t.td,{children:"custClientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"cust client firm (if disclosed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"120"}),(0,r.jsx)(t.td,{children:"commEnhancement"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"custCommPaying"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"client is commission paying (to the responder)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"122"}),(0,r.jsx)(t.td,{children:"custQtyCond"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,r.jsx)(t.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"123"}),(0,r.jsx)(t.td,{children:"auctionDuration"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"143"}),(0,r.jsx)(t.td,{children:"pkgSurfPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"SR Surface Price (entire package)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"144"}),(0,r.jsx)(t.td,{children:"pkgBidPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"leg market best way price (pkg bid)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"145"}),(0,r.jsx)(t.td,{children:"pkgAskPrc"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"leg market worst way price (pkg ask)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"iDays"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"125"}),(0,r.jsx)(t.td,{children:"iYears"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"126"}),(0,r.jsx)(t.td,{children:"pointValue"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"point value of the associated options; expiry money = (hiStrike - loStrike) * pointValue;"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"140"}),(0,r.jsx)(t.td,{children:"pointCurrency"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"127"}),(0,r.jsx)(t.td,{children:"strikePv"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"128"}),(0,r.jsx)(t.td,{children:"effMoneyRate"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"effMoneyRate = (1.0 - (custPrc / (hiStrike - loStrike)) / iYears"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"129"}),(0,r.jsx)(t.td,{children:"srcTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"130"}),(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"131"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"132"}),(0,r.jsx)(t.td,{children:"includeSRNetwork"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(t.p,{children:"DirectedCounterParty"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"134"}),(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"135"}),(0,r.jsx)(t.td,{children:"inclExcl"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"136"}),(0,r.jsx)(t.td,{children:"isCommPaying"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AuctionNoticeBX'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AuctionNoticeBX'\n\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeBX\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|loStrike|hiStrike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|pkgSurfPrc|pkgBidPrc|pkgAskPrc|iDays|iYears|pointValue|pointCurrency|strikePv|effMoneyRate|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AuctionNoticeBX' \\\n--data-urlencode 'view=ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|loStrike|hiStrike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|pkgSurfPrc|pkgBidPrc|pkgAskPrc|iDays|iYears|pointValue|pointCurrency|strikePv|effMoneyRate|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeBX\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|loStrike|hiStrike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|pkgSurfPrc|pkgBidPrc|pkgAskPrc|iDays|iYears|pointValue|pointCurrency|strikePv|effMoneyRate|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AuctionNoticeBX' \\\n--data-urlencode 'view=ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|loStrike|hiStrike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|pkgSurfPrc|pkgBidPrc|pkgAskPrc|iDays|iYears|pointValue|pointCurrency|strikePv|effMoneyRate|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeBX\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|loStrike|hiStrike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|pkgSurfPrc|pkgBidPrc|pkgAskPrc|iDays|iYears|pointValue|pointCurrency|strikePv|effMoneyRate|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'auctionType|auctionEvent|auctionSource|isTestAuction|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|custCommPaying|custQtyCond|pointCurrency|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AuctionNoticeBX' \\\n--data-urlencode 'measure=ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|loStrike|hiStrike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|pkgSurfPrc|pkgBidPrc|pkgAskPrc|iDays|iYears|pointValue|pointCurrency|strikePv|effMoneyRate|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'group=auctionType|auctionEvent|auctionSource|isTestAuction|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|custCommPaying|custQtyCond|pointCurrency|includeSRNetwork' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{value:"Python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeBX\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,r.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AuctionNoticeBX' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString'\n"})})})]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9641:function(e,t,n){n.d(t,{Z:()=>i});var s=n("52676");n("75271");var r=n("54461");function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_SSzl",i),hidden:n,children:t})}},71386:function(e,t,n){n.d(t,{Z:()=>g});var s=n("52676"),r=n("75271"),i=n("54461"),c=n("52289"),l=n("3225"),a=n("42834"),d=n("40578"),o=n("35834"),u=n("79616");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var x=n("44537");function p(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e,d=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.o5)(),u=e=>{let t=e.currentTarget,n=a[d.indexOf(t)].value;n!==r&&(o(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:a.map(e=>{let{value:t,label:n,attributes:c}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:h,onClick:u,...c,className:(0,i.Z)("tabs__item","tabItem_aitt",c?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:c}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===c);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==c}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,i=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[c,x]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:i})),[p,j]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})},[i,s])]}({queryString:n,groupId:s}),[y,g]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[s,i]=(0,u.Nk)(n);return[s,(0,r.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:s}),f=(()=>{let e=p??y;return m({value:e,tabValues:i})?e:null})();return(0,a.Z)(()=>{f&&x(f)},[f]),{selectedValue:c,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);x(e),j(e),g(e)},[j,g,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,s.jsx)(p,{...t,...e}),(0,s.jsx)(j,{...t,...e})]})}function g(e){let t=(0,x.Z)();return(0,s.jsx)(y,{...e,children:h(e.children)},String(t))}},91503:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return c}});var s=n(75271);let r={},i=s.createContext(r);function c(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);