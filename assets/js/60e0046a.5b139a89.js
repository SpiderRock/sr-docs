"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4029],{40449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var s=n(74848),i=n(28453),r=n(11470),c=n(19365);const a={title:"AuctionNoticeSN"},l="Schema: AuctionNoticeSN (ID: 2467)",d={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",title:"AuctionNoticeSN",description:"METADATA",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionNoticeSN.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{title:"AuctionNoticeSN"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeRC",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC"},next:{title:"AuctionPrint",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-auctionnoticesn-id-2467",children:["Schema: AuctionNoticeSN ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2467)"})]}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRATS"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"101"}),(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"102"}),(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"auctionEvent"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"104"}),(0,s.jsx)(t.td,{children:"srcAuctionID"}),(0,s.jsx)(t.td,{children:"string(20)"}),(0,s.jsx)(t.td,{children:"auction ID as known by the auction source (empty for SRC)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"105"}),(0,s.jsx)(t.td,{children:"srcAuctionType"}),(0,s.jsx)(t.td,{children:"string(4)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"auctionSource"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,s.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"107"}),(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"108"}),(0,s.jsx)(t.td,{children:"containsFlex"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"Flex = European"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"shortCode"}),(0,s.jsx)(t.td,{children:"string(8)"}),(0,s.jsx)(t.td,{children:"8 letter auction short code (unique per day) (block auctions only) (can be used to find auctions on SR tools)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"110"}),(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"industry string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"111"}),(0,s.jsx)(t.td,{children:"symbolType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"113"}),(0,s.jsx)(t.td,{children:"root"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"option root (+C/-P)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"114"}),(0,s.jsx)(t.td,{children:"expiry"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"strike"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"strike"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"116"}),(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"117"}),(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"public cust price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"119"}),(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"120"}),(0,s.jsx)(t.td,{children:"custFirmType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"custAgentMPID"}),(0,s.jsx)(t.td,{children:"string(6)"}),(0,s.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"122"}),(0,s.jsx)(t.td,{children:"custClientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"cust client firm (if disclosed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"123"}),(0,s.jsx)(t.td,{children:"commEnhancement"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"custCommPaying"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"client is commission paying (to the responder)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"125"}),(0,s.jsx)(t.td,{children:"custQtyCond"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CustQtyCond",children:"enum : CustQtyCond"})}),(0,s.jsx)(t.td,{children:"UpToQty, AllOrNone, QtyOrMore"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"126"}),(0,s.jsx)(t.td,{children:"auctionDuration"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"[expected] auction duration (in milliseconds)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"uBid"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"live stock price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"128"}),(0,s.jsx)(t.td,{children:"uAsk"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"129"}),(0,s.jsx)(t.td,{children:"iDays"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"iYears"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"131"}),(0,s.jsx)(t.td,{children:"moneyRate"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"132"}),(0,s.jsx)(t.td,{children:"ddivPv"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"hasEstDDivs"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"134"}),(0,s.jsx)(t.td,{children:"sVol"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"135"}),(0,s.jsx)(t.td,{children:"rcEExPrem"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"strikePv"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"137"}),(0,s.jsx)(t.td,{children:"srcTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"138"}),(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"from ats / exchange net timestamp if possible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"140"}),(0,s.jsx)(t.td,{children:"includeSRNetwork"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(t.p,{children:"DirectedCounterParty"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"143"}),(0,s.jsx)(t.td,{children:"inclExcl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/InclExclDisclose",children:"enum : InclExclDisclose"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"144"}),(0,s.jsx)(t.td,{children:"isCommPaying"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AuctionNoticeSN'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AuctionNoticeSN'\n\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeSN\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|strike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|uBid|uAsk|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AuctionNoticeSN' \\\n--data-urlencode 'view=ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|strike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|uBid|uAsk|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeSN\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|strike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|uBid|uAsk|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AuctionNoticeSN' \\\n--data-urlencode 'view=ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|strike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|uBid|uAsk|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeSN\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|strike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|uBid|uAsk|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|srcTimestamp|netTimestamp|timestamp|includeSRNetwork\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'auctionType|auctionEvent|auctionSource|isTestAuction|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|custCommPaying|custQtyCond|hasEstDDivs|includeSRNetwork\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AuctionNoticeSN' \\\n--data-urlencode 'measure=ticker|tradeDate|auctionType|auctionEvent|srcAuctionID|srcAuctionType|auctionSource|isTestAuction|containsFlex|shortCode|industry|symbolType|uAvgDailyVlm|root|expiry|strike|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|custClientFirm|commEnhancement|custCommPaying|custQtyCond|auctionDuration|uBid|uAsk|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|srcTimestamp|netTimestamp|timestamp|includeSRNetwork' \\\n--data-urlencode 'group=auctionType|auctionEvent|auctionSource|isTestAuction|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|custCommPaying|custQtyCond|hasEstDDivs|includeSRNetwork' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"Python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionNoticeSN\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'srcAuctionID:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AuctionNoticeSN' \\\n--data-urlencode 'where=srcAuctionID:eq:ExampleString'\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,c),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>X});var s=n(96540),i=n(34164),r=n(23104),c=n(56347),a=n(205),l=n(57485),d=n(31682),o=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const i=(0,c.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[c,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,u]=x({queryString:n,groupId:i}),[p,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,o.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),y=(()=>{const e=d??p;return m({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{y&&l(y)}),[y]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const t=e.currentTarget,n=l.indexOf(t),i=a[n].value;i!==s&&(d(t),c(i))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:o,...r,className:(0,i.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function A(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(f,{...t,...e})]})}function X(e){const t=(0,j.A)();return(0,g.jsx)(A,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);