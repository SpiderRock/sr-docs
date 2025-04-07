"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["88893"],{18987:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>h,contentTitle:()=>d});var t=JSON.parse('{"id":"MessageSchemas/Schema/Topics/product-definition/TickerDefinition","title":"TickerDefinition","description":"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets.","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/4335-product-definition/TickerDefinition.md","sourceDirName":"MessageSchemas/Schema/Topics/4335-product-definition","slug":"/MessageSchemas/Schema/Topics/product-definition/TickerDefinition","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/product-definition/TickerDefinition","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"TickerDefinition"},"sidebar":"messageSchemasSidebar","previous":{"title":"SpreadExchDefinition","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/product-definition/SpreadExchDefinition"},"next":{"title":"TickerDefinitionExt","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/product-definition/TickerDefinitionExt"}}'),i=r("52676"),s=r("91503"),c=r("71386"),l=r("9641");let a={title:"TickerDefinition"},d="Schema: TickerDefinition (ID: 4375)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"schema-tickerdefinition-id-4375",children:["Schema: TickerDefinition ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 4375)"})]})}),"\n",(0,i.jsx)(n.p,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"4335-product-definition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"EquityDefinition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SRSE Product"}),(0,i.jsx)(n.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,i.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"#"}),(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10="}),(0,i.jsx)(n.td,{children:"ticker"}),(0,i.jsx)(n.td,{children:"TickerKey"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"securityID"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"Security ID number from the source - Vendor, SR, Feed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"103"}),(0,i.jsx)(n.td,{children:"symbolType"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SymbolType",children:"enum : SymbolType"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"106"}),(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string(72)"}),(0,i.jsx)(n.td,{children:"Symbol name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"109"}),(0,i.jsx)(n.td,{children:"country"}),(0,i.jsx)(n.td,{children:"string(2)"}),(0,i.jsx)(n.td,{children:"ISO Issuer Country Code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"254"}),(0,i.jsx)(n.td,{children:"primaryCurrency"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"255"}),(0,i.jsx)(n.td,{children:"rateCurve"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/RateCurve",children:"enum : RateCurve"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"112"}),(0,i.jsx)(n.td,{children:"parValue"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"Security Parvalue"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"115"}),(0,i.jsx)(n.td,{children:"parValueCurrency"}),(0,i.jsx)(n.td,{children:"string(3)"}),(0,i.jsx)(n.td,{children:"Security Parvalue currency"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"118"}),(0,i.jsx)(n.td,{children:"pointValue"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"121"}),(0,i.jsx)(n.td,{children:"pointCurrency"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"124"}),(0,i.jsx)(n.td,{children:"primaryExch"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/PrimaryExchange",children:"enum : PrimaryExchange"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"127"}),(0,i.jsx)(n.td,{children:"altID"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"Alt Security ID number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"130"}),(0,i.jsx)(n.td,{children:"mic"}),(0,i.jsx)(n.td,{children:"string(4)"}),(0,i.jsx)(n.td,{children:"ISO Market Identification Code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"133"}),(0,i.jsx)(n.td,{children:"micSeg"}),(0,i.jsx)(n.td,{children:"string(4)"}),(0,i.jsx)(n.td,{children:"ISO Market Indentification Segment Code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"136"}),(0,i.jsx)(n.td,{children:"symbol"}),(0,i.jsx)(n.td,{children:"string(12)"}),(0,i.jsx)(n.td,{children:"trading symbol (w/o dot notation)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"139"}),(0,i.jsx)(n.td,{children:"issueClass"}),(0,i.jsx)(n.td,{children:"string(1)"}),(0,i.jsx)(n.td,{children:"issue class of stock symbol.  if no issue class field will be blank."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"256"}),(0,i.jsx)(n.td,{children:"sharesOutstanding"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"symbol shares outstanding, represented in thousands (actualsharesoutstanding = sharesoutstanding * 1000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"145"}),(0,i.jsx)(n.td,{children:"cusip"}),(0,i.jsx)(n.td,{children:"string(10)"}),(0,i.jsx)(n.td,{children:"cusip code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"148"}),(0,i.jsx)(n.td,{children:"indNum"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"IND (2 digits)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"151"}),(0,i.jsx)(n.td,{children:"subNum"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"SUB (4 digits)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"154"}),(0,i.jsx)(n.td,{children:"grpNum"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"GRP (6 digits)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"157"}),(0,i.jsx)(n.td,{children:"nbrNum"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"NBR (8 digits)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"160"}),(0,i.jsx)(n.td,{children:"sic"}),(0,i.jsx)(n.td,{children:"string(4)"}),(0,i.jsx)(n.td,{children:"SIC (Standard Industrial Classification) code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"163"}),(0,i.jsx)(n.td,{children:"cik"}),(0,i.jsx)(n.td,{children:"string(10)"}),(0,i.jsx)(n.td,{children:"Central Index Key (US specific)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"166"}),(0,i.jsx)(n.td,{children:"gics"}),(0,i.jsx)(n.td,{children:"string(8)"}),(0,i.jsx)(n.td,{children:"Global Industry Classification Standard"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"169"}),(0,i.jsx)(n.td,{children:"lei"}),(0,i.jsx)(n.td,{children:"string(20)"}),(0,i.jsx)(n.td,{children:"Legal Entity Identifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"172"}),(0,i.jsx)(n.td,{children:"naics"}),(0,i.jsx)(n.td,{children:"string(6)"}),(0,i.jsx)(n.td,{children:"North American Industry Classification System"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"175"}),(0,i.jsx)(n.td,{children:"cfi"}),(0,i.jsx)(n.td,{children:"string(6)"}),(0,i.jsx)(n.td,{children:"ISO Classification of Financial Instruments"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"178"}),(0,i.jsx)(n.td,{children:"cic"}),(0,i.jsx)(n.td,{children:"string(4)"}),(0,i.jsx)(n.td,{children:"Complementay Identification Code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"181"}),(0,i.jsx)(n.td,{children:"fisn"}),(0,i.jsx)(n.td,{children:"string(40)"}),(0,i.jsx)(n.td,{children:"Financial Instrument Short Name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"184"}),(0,i.jsx)(n.td,{children:"isin"}),(0,i.jsx)(n.td,{children:"string(12)"}),(0,i.jsx)(n.td,{children:"ISIN code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"187"}),(0,i.jsx)(n.td,{children:"figi"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"FIGI code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"190"}),(0,i.jsx)(n.td,{children:"bbgCompositeTicker"}),(0,i.jsx)(n.td,{children:"string(12)"}),(0,i.jsx)(n.td,{children:"Bloomberg Composite Ticker"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"193"}),(0,i.jsx)(n.td,{children:"bbgExchangeTicker"}),(0,i.jsx)(n.td,{children:"string(28)"}),(0,i.jsx)(n.td,{children:"Bloomberg Exchange Ticker"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"196"}),(0,i.jsx)(n.td,{children:"bbgCompositeGlobalID"}),(0,i.jsx)(n.td,{children:"string(12)"}),(0,i.jsx)(n.td,{children:"Bloomberg Composite Global ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"199"}),(0,i.jsx)(n.td,{children:"bbgGlobalID"}),(0,i.jsx)(n.td,{children:"string(12)"}),(0,i.jsx)(n.td,{children:"Bloomberg Global ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"202"}),(0,i.jsx)(n.td,{children:"bbgCurrency"}),(0,i.jsx)(n.td,{children:"string(3)"}),(0,i.jsx)(n.td,{children:"Bloomberg Trading Currency"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"205"}),(0,i.jsx)(n.td,{children:"otcPrimaryMarket"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/OTCPrimaryMarket",children:"enum : OTCPrimaryMarket"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"208"}),(0,i.jsx)(n.td,{children:"otcTier"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/OTCTier",children:"enum : OTCTier"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"211"}),(0,i.jsx)(n.td,{children:"otcReportingStatus"}),(0,i.jsx)(n.td,{children:"string(1)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"214"}),(0,i.jsx)(n.td,{children:"otcDisclosureStatus"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"217"}),(0,i.jsx)(n.td,{children:"otcFlags"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"220"}),(0,i.jsx)(n.td,{children:"stkPriceInc"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/StkPriceInc",children:"enum : StkPriceInc"})}),(0,i.jsx)(n.td,{children:"Price increment: None; FullPenny; Nickle"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"223"}),(0,i.jsx)(n.td,{children:"tkDefSource"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TkDefSource",children:"enum : TkDefSource"})}),(0,i.jsx)(n.td,{children:"Ticker definition source: None; Vendor; OTC; SR; Exchange"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"226"}),(0,i.jsx)(n.td,{children:"statusFlag"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TkStatusFlag",children:"enum : TkStatusFlag"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"229"}),(0,i.jsx)(n.td,{children:"tapeCode"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TapeCode",children:"enum : TapeCode"})}),(0,i.jsx)(n.td,{children:"SIP Tape Code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"232"}),(0,i.jsx)(n.td,{children:"stkVolume"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"daily stock volume"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"235"}),(0,i.jsx)(n.td,{children:"futVolume"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"daily future volume"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"238"}),(0,i.jsx)(n.td,{children:"optVolume"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"daily option volume"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"241"}),(0,i.jsx)(n.td,{children:"exchString"}),(0,i.jsx)(n.td,{children:"string(8)"}),(0,i.jsx)(n.td,{children:"exchanges listing any options on this underlying"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"244"}),(0,i.jsx)(n.td,{children:"hasOptions"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"Has Options flag"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"247"}),(0,i.jsx)(n.td,{children:"numOptions"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"total number of listed options"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"257"}),(0,i.jsx)(n.td,{children:"basisKey"}),(0,i.jsx)(n.td,{children:"TickerKey"}),(0,i.jsx)(n.td,{children:"skew basis fn key"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"258"}),(0,i.jsx)(n.td,{children:"reverseSkew"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"if Yes/No, force skew curve norma/reverse (left/right) orientation,  if None, auto-determine from data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"250"}),(0,i.jsx)(n.td,{children:"timeMetric"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,i.jsx)(n.td,{children:"trading time metric - 252 or 365 trading days or a weekly cycle type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"259"}),(0,i.jsx)(n.td,{children:"tradingPeriod"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TradingPeriod",children:"enum : TradingPeriod"})}),(0,i.jsx)(n.td,{children:"trading period code (defines 24-hour trading period start/stop)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"263"}),(0,i.jsx)(n.td,{children:"regionalCompositeTicker"}),(0,i.jsx)(n.td,{children:"TickerKey"}),(0,i.jsx)(n.td,{children:"regional composite ticker - set on European contributor products only"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"253"}),(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DateTime"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,i.jsx)(n.p,{children:"Exchange"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"261"}),(0,i.jsx)(n.td,{children:"stkExch"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"262"}),(0,i.jsx)(n.td,{children:"ticker"}),(0,i.jsx)(n.td,{children:"TickerKey"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'TickerDefinition'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=TickerDefinition'\n\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'TickerDefinition\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'securityID|symbolType|name|country|primaryCurrency|rateCurve|parValue|parValueCurrency|pointValue|pointCurrency|primaryExch|altID|mic|micSeg|symbol|issueClass|sharesOutstanding|cusip|indNum|subNum|grpNum|nbrNum|sic|cik|gics|lei|naics|cfi|cic|fisn|isin|figi|bbgCompositeTicker|bbgExchangeTicker|bbgCompositeGlobalID|bbgGlobalID|bbgCurrency|otcPrimaryMarket|otcTier|otcReportingStatus|otcDisclosureStatus|otcFlags|stkPriceInc|tkDefSource|statusFlag|tapeCode|stkVolume|futVolume|optVolume|exchString|hasOptions|numOptions|basisKey|reverseSkew|timeMetric|tradingPeriod|regionalCompositeTicker|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'name:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=TickerDefinition' \\\n--data-urlencode 'view=securityID|symbolType|name|country|primaryCurrency|rateCurve|parValue|parValueCurrency|pointValue|pointCurrency|primaryExch|altID|mic|micSeg|symbol|issueClass|sharesOutstanding|cusip|indNum|subNum|grpNum|nbrNum|sic|cik|gics|lei|naics|cfi|cic|fisn|isin|figi|bbgCompositeTicker|bbgExchangeTicker|bbgCompositeGlobalID|bbgGlobalID|bbgCurrency|otcPrimaryMarket|otcTier|otcReportingStatus|otcDisclosureStatus|otcFlags|stkPriceInc|tkDefSource|statusFlag|tapeCode|stkVolume|futVolume|optVolume|exchString|hasOptions|numOptions|basisKey|reverseSkew|timeMetric|tradingPeriod|regionalCompositeTicker|timestamp' \\\n--data-urlencode 'where=name:eq:ExampleString'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'TickerDefinition\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'securityID|symbolType|name|country|primaryCurrency|rateCurve|parValue|parValueCurrency|pointValue|pointCurrency|primaryExch|altID|mic|micSeg|symbol|issueClass|sharesOutstanding|cusip|indNum|subNum|grpNum|nbrNum|sic|cik|gics|lei|naics|cfi|cic|fisn|isin|figi|bbgCompositeTicker|bbgExchangeTicker|bbgCompositeGlobalID|bbgGlobalID|bbgCurrency|otcPrimaryMarket|otcTier|otcReportingStatus|otcDisclosureStatus|otcFlags|stkPriceInc|tkDefSource|statusFlag|tapeCode|stkVolume|futVolume|optVolume|exchString|hasOptions|numOptions|basisKey|reverseSkew|timeMetric|tradingPeriod|regionalCompositeTicker|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'name:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'securityID:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=TickerDefinition' \\\n--data-urlencode 'view=securityID|symbolType|name|country|primaryCurrency|rateCurve|parValue|parValueCurrency|pointValue|pointCurrency|primaryExch|altID|mic|micSeg|symbol|issueClass|sharesOutstanding|cusip|indNum|subNum|grpNum|nbrNum|sic|cik|gics|lei|naics|cfi|cic|fisn|isin|figi|bbgCompositeTicker|bbgExchangeTicker|bbgCompositeGlobalID|bbgGlobalID|bbgCurrency|otcPrimaryMarket|otcTier|otcReportingStatus|otcDisclosureStatus|otcFlags|stkPriceInc|tkDefSource|statusFlag|tapeCode|stkVolume|futVolume|optVolume|exchString|hasOptions|numOptions|basisKey|reverseSkew|timeMetric|tradingPeriod|regionalCompositeTicker|timestamp' \\\n--data-urlencode 'where=name:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=securityID:ASC'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'TickerDefinition\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'securityID|symbolType|name|country|primaryCurrency|rateCurve|parValue|parValueCurrency|pointValue|pointCurrency|primaryExch|altID|mic|micSeg|symbol|issueClass|sharesOutstanding|cusip|indNum|subNum|grpNum|nbrNum|sic|cik|gics|lei|naics|cfi|cic|fisn|isin|figi|bbgCompositeTicker|bbgExchangeTicker|bbgCompositeGlobalID|bbgGlobalID|bbgCurrency|otcPrimaryMarket|otcTier|otcReportingStatus|otcDisclosureStatus|otcFlags|stkPriceInc|tkDefSource|statusFlag|tapeCode|stkVolume|futVolume|optVolume|exchString|hasOptions|numOptions|basisKey|reverseSkew|timeMetric|tradingPeriod|regionalCompositeTicker|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'symbolType|primaryCurrency|rateCurve|pointCurrency|primaryExch|otcPrimaryMarket|otcTier|stkPriceInc|tkDefSource|statusFlag|tapeCode|hasOptions|reverseSkew|timeMetric|tradingPeriod\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'name:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=TickerDefinition' \\\n--data-urlencode 'measure=securityID|symbolType|name|country|primaryCurrency|rateCurve|parValue|parValueCurrency|pointValue|pointCurrency|primaryExch|altID|mic|micSeg|symbol|issueClass|sharesOutstanding|cusip|indNum|subNum|grpNum|nbrNum|sic|cik|gics|lei|naics|cfi|cic|fisn|isin|figi|bbgCompositeTicker|bbgExchangeTicker|bbgCompositeGlobalID|bbgGlobalID|bbgCurrency|otcPrimaryMarket|otcTier|otcReportingStatus|otcDisclosureStatus|otcFlags|stkPriceInc|tkDefSource|statusFlag|tapeCode|stkVolume|futVolume|optVolume|exchString|hasOptions|numOptions|basisKey|reverseSkew|timeMetric|tradingPeriod|regionalCompositeTicker|timestamp' \\\n--data-urlencode 'group=symbolType|primaryCurrency|rateCurve|pointCurrency|primaryExch|otcPrimaryMarket|otcTier|stkPriceInc|tkDefSource|statusFlag|tapeCode|hasOptions|reverseSkew|timeMetric|tradingPeriod' \\\n--data-urlencode 'where=name:eq:ExampleString'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'TickerDefinition\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'name:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(l.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=TickerDefinition' \\\n--data-urlencode 'where=name:eq:ExampleString'\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9641:function(e,n,r){r.d(n,{Z:()=>s});var t=r("52676");r("75271");var i=r("54461");function s(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_SSzl",s),hidden:r,children:n})}},71386:function(e,n,r){r.d(n,{Z:()=>y});var t=r("52676"),i=r("75271"),s=r("54461"),c=r("52289"),l=r("3225"),a=r("42834"),d=r("40578"),o=r("35834"),h=r("79616");function u(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var x=r("44537");function j(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:a}=e,d=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.o5)(),h=e=>{let n=e.currentTarget,r=a[d.indexOf(n)].value;r!==i&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{let r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:a.map(e=>{let{value:n,label:r,attributes:c}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:u,onClick:h,...c,className:(0,s.Z)("tabs__item","tabItem_aitt",c?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function p(e){let{lazy:n,children:r,selectedValue:c}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===c);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==c}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,s=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??u(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[c,x]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[j,p]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:r,groupId:t}),[g,y]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,s]=(0,h.Nk)(r);return[t,(0,i.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:t}),f=(()=>{let e=j??g;return m({value:e,tabValues:s})?e:null})();return(0,a.Z)(()=>{f&&x(f)},[f]),{selectedValue:c,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);x(e),p(e),y(e)},[p,y,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_ArS0"),children:[(0,t.jsx)(j,{...n,...e}),(0,t.jsx)(p,{...n,...e})]})}function y(e){let n=(0,x.Z)();return(0,t.jsx)(g,{...e,children:u(e.children)},String(n))}},91503:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var t=r(75271);let i={},s=t.createContext(i);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);