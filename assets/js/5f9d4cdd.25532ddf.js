"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[92210],{88100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var n=r(74848),s=r(28453),i=r(11470),c=r(19365);const d={title:"AuctionPrintRC"},l="Schema: AuctionPrintRC (ID: 2486)",a={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC",title:"AuctionPrintRC",description:"METADATA",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionPrintRC.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintRC",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"AuctionPrintRC"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintBX",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintBX"},next:{title:"AuctionPrintSN",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-auctionprintrc-id-2486",children:["Schema: AuctionPrintRC ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 2486)"})]}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SRATS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"noticeNumber"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"AuctionNotice.noticeNumber"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"underlier ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"101"}),(0,n.jsx)(t.td,{children:"tradeDate"}),(0,n.jsx)(t.td,{children:"DateKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"102"}),(0,n.jsx)(t.td,{children:"isTestAuction"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"noticeTime"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"notice create timestamp (high precision)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"104"}),(0,n.jsx)(t.td,{children:"auctionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,n.jsx)(t.td,{children:"(eg. Block, Flash, Improvement, Facilitation, etc.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"105"}),(0,n.jsx)(t.td,{children:"auctionSource"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,n.jsx)(t.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"containsFlex"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{children:"Flex = European"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"107"}),(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"option root"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"108"}),(0,n.jsx)(t.td,{children:"expiry"}),(0,n.jsx)(t.td,{children:"DateKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"strike"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"rev/con strike"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"110"}),(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"industry string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"111"}),(0,n.jsx)(t.td,{children:"symbolType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"113"}),(0,n.jsx)(t.td,{children:"custSide"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,n.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"114"}),(0,n.jsx)(t.td,{children:"custQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"custPrc"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"116"}),(0,n.jsx)(t.td,{children:"hasCustPrc"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{children:"from AuctionNotice (if known)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"117"}),(0,n.jsx)(t.td,{children:"custFirmType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,n.jsx)(t.td,{children:"cust firm type (if disclosed)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"custAgentMPID"}),(0,n.jsx)(t.td,{children:"string(6)"}),(0,n.jsx)(t.td,{children:"cust agent exchange member initiating the auction (if disclosed)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"119"}),(0,n.jsx)(t.td,{children:"commEnhancement"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"additional commission (if any) paid by responder"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"120"}),(0,n.jsx)(t.td,{children:"noticeUBid"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"noticeUAsk"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"122"}),(0,n.jsx)(t.td,{children:"netSurfPrc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"SR Surface Price (entire package)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"123"}),(0,n.jsx)(t.td,{children:"iDays"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"iYears"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"iYears = iDays / 360.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"125"}),(0,n.jsx)(t.td,{children:"moneyRate"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365] [SR Supplied Estimate]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"126"}),(0,n.jsx)(t.td,{children:"ddivPv"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"present value of any expected dividends to expiry [SR Supplied Estimate]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"hasEstDDivs"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{children:"Yes if one or more expected ddiv is an estimate (not yet announced) [SR Supplied]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"128"}),(0,n.jsx)(t.td,{children:"sVol"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"surface volatility for rev/con strike [SR Supplied Estimate]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"129"}),(0,n.jsx)(t.td,{children:"rcEExPrem"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] [same model parameters; SR supplied parameters including DDivs; is zero for flex revcons]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"strikePv"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"131"}),(0,n.jsx)(t.td,{children:"effStockLendPv"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"effStockLendPv = custPrice - strikePv - ddivPv - rcEExPrem  [if cust price is visible]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"132"}),(0,n.jsx)(t.td,{children:"effStockRate"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"effStockRate = effStockLendPv / (uMid * iYears) [if cust price is visible]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"prtPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"reported OPRA print price (pkgPrice if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"134"}),(0,n.jsx)(t.td,{children:"prtPrice2"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"if reported as 2 separate prints at different prices (ie, partial size improvement)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"135"}),(0,n.jsx)(t.td,{children:"prtSize"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"prtSize2"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"reported OPRA print size (pgkSize if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"137"}),(0,n.jsx)(t.td,{children:"prtTime"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"reported OPRA print time (1st print if MLeg) (high precision)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"138"}),(0,n.jsx)(t.td,{children:"prtType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum : PrtType"})}),(0,n.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"prtUBid"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"best estimate of uBid @ auction print time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"140"}),(0,n.jsx)(t.td,{children:"prtUAsk"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"141"}),(0,n.jsx)(t.td,{children:"prtUPrc"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"best estimate of uPrc @ auction print time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"prtSurfPrc"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"surface prc @ auction print time (@ uMid) (pkgSurfPrc if MLeg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"143"}),(0,n.jsx)(t.td,{children:"prtStockLendPv"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"prtStockLendPv = prtPrice - strikePv - ddivPv - rcEExPrem"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"144"}),(0,n.jsx)(t.td,{children:"prtStockRate"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"prtStockRate = prtStockLendPv / (prtUPrc * iYears)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"uPrc1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 1m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"146"}),(0,n.jsx)(t.td,{children:"bidPrc1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"option nbbo bid @ auction print time + 1m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"147"}),(0,n.jsx)(t.td,{children:"askPrc1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"option nbbo ask @ auction print time + 1m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"surfPrc1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"surface prc @ auction print time + 1m (@ uMid)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"149"}),(0,n.jsx)(t.td,{children:"prtStockLendPv1m"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"prtStockLendPv1m = surfPrc1m - strikePv - ddivPv - rcEExPrem"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"150"}),(0,n.jsx)(t.td,{children:"prtStockRate1m"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"prtStockRate1m = prtStockLendPv1m / (uPrc1m * iYears)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"uPrc10m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"uPrc (mid market) @ auction print time + 10m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"152"}),(0,n.jsx)(t.td,{children:"bidPrc10m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"option nbbo bid @ auction print time + 10m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"153"}),(0,n.jsx)(t.td,{children:"askPrc10m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"option nbbo ask @ auction print time + 10m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"surfPrc10m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"surface prc @ auction print time + 10m (@ uMid)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"155"}),(0,n.jsx)(t.td,{children:"prtStockLendPv10m"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"prtStockLendPv10m = surfPrc10m - strikePv - ddivPv - rcEExPrem"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"156"}),(0,n.jsx)(t.td,{children:"prtStockRate10m"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"prtStockRate10m = prtStockLendPv10m / (uPrc10m * iYears)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'AuctionPrintRC'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=AuctionPrintRC'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintRC\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|effStockLendPv|effStockRate|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|prtStockLendPv|prtStockRate|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|prtStockLendPv1m|prtStockRate1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|prtStockLendPv10m|prtStockRate10m|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=AuctionPrintRC' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|effStockLendPv|effStockRate|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|prtStockLendPv|prtStockRate|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|prtStockLendPv1m|prtStockRate1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|prtStockLendPv10m|prtStockRate10m|timestamp' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintRC\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|effStockLendPv|effStockRate|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|prtStockLendPv|prtStockRate|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|prtStockLendPv1m|prtStockRate1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|prtStockLendPv10m|prtStockRate10m|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=AuctionPrintRC' \\\n--data-urlencode 'view=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|effStockLendPv|effStockRate|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|prtStockLendPv|prtStockRate|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|prtStockLendPv1m|prtStockRate1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|prtStockLendPv10m|prtStockRate10m|timestamp' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintRC\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|effStockLendPv|effStockRate|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|prtStockLendPv|prtStockRate|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|prtStockLendPv1m|prtStockRate1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|prtStockLendPv10m|prtStockRate10m|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'isTestAuction|auctionType|auctionSource|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|hasEstDDivs|prtType\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=AuctionPrintRC' \\\n--data-urlencode 'measure=ticker|tradeDate|isTestAuction|noticeTime|auctionType|auctionSource|containsFlex|root|expiry|strike|industry|symbolType|uAvgDailyVlm|custSide|custQty|custPrc|hasCustPrc|custFirmType|custAgentMPID|commEnhancement|noticeUBid|noticeUAsk|netSurfPrc|iDays|iYears|moneyRate|ddivPv|hasEstDDivs|sVol|rcEExPrem|strikePv|effStockLendPv|effStockRate|prtPrice|prtPrice2|prtSize|prtSize2|prtTime|prtType|prtUBid|prtUAsk|prtUPrc|prtSurfPrc|prtStockLendPv|prtStockRate|uPrc1m|bidPrc1m|askPrc1m|surfPrc1m|prtStockLendPv1m|prtStockRate1m|uPrc10m|bidPrc10m|askPrc10m|surfPrc10m|prtStockLendPv10m|prtStockRate10m|timestamp' \\\n--data-urlencode 'group=isTestAuction|auctionType|auctionSource|containsFlex|symbolType|custSide|hasCustPrc|custFirmType|hasEstDDivs|prtType' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'AuctionPrintRC\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'custAgentMPID:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(c.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=AuctionPrintRC' \\\n--data-urlencode 'where=custAgentMPID:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function c(e){let{children:t,hidden:r,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,c),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(96540),s=r(34164),i=r(23104),c=r(56347),d=r(205),l=r(57485),a=r(31682),o=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,c.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[c,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[a,u]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),P=(()=>{const e=a??x;return p({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{P&&l(P)}),[P]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=r(92303);const P={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:c,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=l.indexOf(t),s=d[r].value;s!==n&&(a(t),c(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:d.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.A)("tabs__item",P.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",P.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function S(e){const t=(0,j.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);