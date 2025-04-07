"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["31130"],{53006:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>u,contentTitle:()=>a});var n=JSON.parse('{"id":"MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN","title":"AuctionPrintSN","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionPrintSN.md","sourceDirName":"MessageSchemas/Schema/Topics/2450-liquidity-notice","slug":"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"AuctionPrintSN"},"sidebar":"messageSchemasSidebar","previous":{"title":"AuctionPrintRC","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC"},"next":{"title":"AuctionState","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState"}}'),s=r("52676"),i=r("91503"),c=r("71386"),d=r("9641");let l={title:"AuctionPrintSN"},a="Schema: AuctionPrintSN (ID: 2487)",o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"schema-auctionprintsn-id-2487",children:["Schema: AuctionPrintSN ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2487)"})]})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRATS"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"AuctionNotice.noticeNumber"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"101"}),(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"102"}),(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"noticeTime"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"notice create timestamp (high precision)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"104"}),(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,s.jsx)(t.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"105"}),(0,s.jsx)(t.td,{children:"auctionSource"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,s.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"containsFlex"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"Flex = European"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"107"}),(0,s.jsx)(t.td,{children:"root"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"option root"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"108"}),(0,s.jsx)(t.td,{children:"expiry"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"strike"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"rev/con strike"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"110"}),(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"industry string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"111"}),(0,s.jsx)(t.td,{children:"symbolType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"113"}),(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"114"}),(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"116"}),(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"117"}),(0,s.jsx)(t.td,{children:"custFirmType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"custAgentMPID"}),(0,s.jsx)(t.td,{children:"string(6)"}),(0,s.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"119"}),(0,s.jsx)(t.td,{children:"commEnhancement"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"120"}),(0,s.jsx)(t.td,{children:"noticeUBid"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"noticeUAsk"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"122"}),(0,s.jsx)(t.td,{children:"netSurfPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Surface Price (entire package)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"123"}),(0,s.jsx)(t.td,{children:"iDays"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"iYears"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"125"}),(0,s.jsx)(t.td,{children:"moneyRate"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"126"}),(0,s.jsx)(t.td,{children:"ddivPv"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"hasEstDDivs"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"128"}),(0,s.jsx)(t.td,{children:"sVol"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"129"}),(0,s.jsx)(t.td,{children:"rcEExPrem"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"strikePv"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"131"}),(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"132"}),(0,s.jsx)(t.td,{children:"prtPrice2"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"134"}),(0,s.jsx)(t.td,{children:"prtSize2"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"135"}),(0,s.jsx)(t.td,{children:"prtTime"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,s.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"137"}),(0,s.jsx)(t.td,{children:"prtUBid"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"best estimate of uBid @ auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"138"}),(0,s.jsx)(t.td,{children:"prtUAsk"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"prtUPrc"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"140"}),(0,s.jsx)(t.td,{children:"prtSurfPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"141"}),(0,s.jsx)(t.td,{children:"uPrc1m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 1m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"bidPrc1m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"143"}),(0,s.jsx)(t.td,{children:"askPrc1m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"144"}),(0,s.jsx)(t.td,{children:"surfPrc1m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"145"}),(0,s.jsx)(t.td,{children:"uPrc10m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"146"}),(0,s.jsx)(t.td,{children:"bidPrc10m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"147"}),(0,s.jsx)(t.td,{children:"askPrc10m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"148"}),(0,s.jsx)(t.td,{children:"surfPrc10m"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"149"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AuctionPrintSN'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AuctionPrintSN'\n\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintSN\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AuctionPrintSN' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|timestamp' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintSN\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AuctionPrintSN' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|timestamp' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintSN\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'isTestAuction|auctionType|auctionSource|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|hasEstDDivs|prtType\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AuctionPrintSN' \\\n--data-urlencode 'measure=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|timestamp' \\\n--data-urlencode 'group=isTestAuction|auctionType|auctionSource|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|hasEstDDivs|prtType' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintSN\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AuctionPrintSN' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9641:function(e,t,r){r.d(t,{Z:()=>i});var n=r("52676");r("75271");var s=r("54461");function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",i),hidden:r,children:t})}},71386:function(e,t,r){r.d(t,{Z:()=>y});var n=r("52676"),s=r("75271"),i=r("54461"),c=r("52289"),d=r("3225"),l=r("42834"),a=r("40578"),o=r("35834"),u=r("79616");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var p=r("44537");function x(e){let{className:t,block:r,selectedValue:s,selectValue:d,tabValues:l}=e,a=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.o5)(),u=e=>{let t=e.currentTarget,r=l[a.indexOf(t)].value;r!==s&&(o(t),d(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{let r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t),children:l.map(e=>{let{value:t,label:r,attributes:c}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:h,onClick:u,...c,className:(0,i.Z)("tabs__item","tabItem_aitt",c?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function j(e){let{lazy:t,children:r,selectedValue:c}=e,d=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=d.find(e=>e.props.value===c);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:d.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==c}))})}function P(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,i=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[c,p]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:i})),[x,j]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,d.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})},[i,n])]}({queryString:r,groupId:n}),[P,y]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,i]=(0,u.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:n}),g=(()=>{let e=x??P;return m({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{g&&p(g)},[g]),{selectedValue:c,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),j(e),y(e)},[j,y,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,n.jsx)(x,{...t,...e}),(0,n.jsx)(j,{...t,...e})]})}function y(e){let t=(0,p.Z)();return(0,n.jsx)(P,{...e,children:h(e.children)},String(t))}},91503:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return c}});var n=r(75271);let s={},i=n.createContext(s);function c(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);