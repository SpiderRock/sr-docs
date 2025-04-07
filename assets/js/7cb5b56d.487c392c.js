"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["1093"],{18122:function(e,r,s){s.r(r),s.d(r,{default:()=>x,frontMatter:()=>l,metadata:()=>n,assets:()=>h,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup","title":"SpreadBookMarkup","description":"Live spread quotes with SpiderRock markup details for equity and future option spreads.","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/2895-market-data-spreads/SpreadBookMarkup.md","sourceDirName":"MessageSchemas/Schema/Topics/2895-market-data-spreads","slug":"/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"SpreadBookMarkup"},"sidebar":"messageSchemasSidebar","previous":{"title":"2895-market-data-spreads","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-spreads/"},"next":{"title":"SpreadBookQuote","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookQuote"}}'),t=s("52676"),i=s("91503"),d=s("71386"),a=s("9641");let l={title:"SpreadBookMarkup"},c="Schema: SpreadBookMarkup (ID: 2895)",h={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsxs)(r.h1,{id:"schema-spreadbookmarkup-id-2895",children:["Schema: SpreadBookMarkup ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2895)"})]})}),"\n",(0,t.jsx)(r.p,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"2895-market-data-spreads"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SpreadMktData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRSpread"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"10="}),(0,t.jsx)(r.td,{children:"skey"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{children:"SR Spread Key (should have corresponding ProductDefinition record)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11="}),(0,t.jsx)(r.td,{children:"isTest"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Yes indicates that response is made of entirely of isTest=Yes SpreadExchOrders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"100"}),(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{children:"common spread underlier"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"298"}),(0,t.jsx)(r.td,{children:"SRspreadID"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"103"}),(0,t.jsx)(r.td,{children:"priceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"bidPrice1"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"bid price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"isBidPrice1Valid"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"askPrice1"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"ask price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"isAskPrice1Valid"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"118"}),(0,t.jsx)(r.td,{children:"bidSize1"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative size at bidPrice"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"121"}),(0,t.jsx)(r.td,{children:"askSize1"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"cumulative size at askPrice"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"124"}),(0,t.jsx)(r.td,{children:"bidMask1"}),(0,t.jsx)(r.td,{children:"uint"}),(0,t.jsx)(r.td,{children:"exchange bid bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"127"}),(0,t.jsx)(r.td,{children:"askMask1"}),(0,t.jsx)(r.td,{children:"uint"}),(0,t.jsx)(r.td,{children:"exchange ask bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"130"}),(0,t.jsx)(r.td,{children:"bidExch1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,t.jsx)(r.td,{children:"exchange at bid price with the largest size (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"133"}),(0,t.jsx)(r.td,{children:"askExch1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,t.jsx)(r.td,{children:"exchange at ask price with the largest size (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"136"}),(0,t.jsx)(r.td,{children:"bidTime"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"last bid price or size change"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"139"}),(0,t.jsx)(r.td,{children:"askTime"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"last ask price or size change"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"142"}),(0,t.jsx)(r.td,{children:"updateType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/UpdateType",children:"enum : UpdateType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"145"}),(0,t.jsx)(r.td,{children:"numStkLegs"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"148"}),(0,t.jsx)(r.td,{children:"numFutLegs"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"numOptLegs"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"userDefined"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"299"}),(0,t.jsx)(r.td,{children:"spreadClass"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpreadClass",children:"enum : SpreadClass"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"297"}),(0,t.jsx)(r.td,{children:"containsHedge"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"legBidPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"legAskPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"legBidSz"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"legAskSz"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"surfPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"181"}),(0,t.jsx)(r.td,{children:"surfDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"184"}),(0,t.jsx)(r.td,{children:"surfGamma"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"187"}),(0,t.jsx)(r.td,{children:"surfVega"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"190"}),(0,t.jsx)(r.td,{children:"surfWtVega"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"193"}),(0,t.jsx)(r.td,{children:"surfError"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"error code from surface price calc (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"196"}),(0,t.jsx)(r.td,{children:"minExpiry"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"expiry of earliest option leg(s)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"199"}),(0,t.jsx)(r.td,{children:"maxExpiry"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"expiry of latest option leg(s)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"202"}),(0,t.jsx)(r.td,{children:"minYears"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"205"}),(0,t.jsx)(r.td,{children:"maxYears"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"208"}),(0,t.jsx)(r.td,{children:"refUPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"reference underlier price"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"211"}),(0,t.jsx)(r.td,{children:"printPrice"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"last spread print price (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"214"}),(0,t.jsx)(r.td,{children:"printTime"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"217"}),(0,t.jsx)(r.td,{children:"printSize"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"last spread print size (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"220"}),(0,t.jsx)(r.td,{children:"printVolume"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"223"}),(0,t.jsx)(r.td,{children:"grpNum"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"226"}),(0,t.jsx)(r.td,{children:"securityDesc"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"229"}),(0,t.jsx)(r.td,{children:"filterId"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"tool server filter request ID"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"232"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,t.jsx)(r.p,{children:"MarkupLegs"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"238"}),(0,t.jsx)(r.td,{children:"legSecKey"}),(0,t.jsx)(r.td,{children:"OptionKey"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"241"}),(0,t.jsx)(r.td,{children:"legSecType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"244"}),(0,t.jsx)(r.td,{children:"legPriceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"247"}),(0,t.jsx)(r.td,{children:"legSecurityDesc"}),(0,t.jsx)(r.td,{children:"string(20)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"250"}),(0,t.jsx)(r.td,{children:"legSide"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"253"}),(0,t.jsx)(r.td,{children:"legRatio"}),(0,t.jsx)(r.td,{children:"ushort"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"256"}),(0,t.jsx)(r.td,{children:"legBidPrice"}),(0,t.jsx)(r.td,{children:"double"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"259"}),(0,t.jsx)(r.td,{children:"legBidSize"}),(0,t.jsx)(r.td,{children:"int"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"262"}),(0,t.jsx)(r.td,{children:"legAskPrice"}),(0,t.jsx)(r.td,{children:"double"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"265"}),(0,t.jsx)(r.td,{children:"legAskSize"}),(0,t.jsx)(r.td,{children:"int"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"268"}),(0,t.jsx)(r.td,{children:"legYears"}),(0,t.jsx)(r.td,{children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"271"}),(0,t.jsx)(r.td,{children:"legUPrc"}),(0,t.jsx)(r.td,{children:"double"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"280"}),(0,t.jsx)(r.td,{children:"legSurfVol"}),(0,t.jsx)(r.td,{children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"283"}),(0,t.jsx)(r.td,{children:"legSurfPrice"}),(0,t.jsx)(r.td,{children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"286"}),(0,t.jsx)(r.td,{children:"legSurfDe"}),(0,t.jsx)(r.td,{children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"289"}),(0,t.jsx)(r.td,{children:"legSurfGa"}),(0,t.jsx)(r.td,{children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"292"}),(0,t.jsx)(r.td,{children:"legSurfVe"}),(0,t.jsx)(r.td,{children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"295"}),(0,t.jsx)(r.td,{children:"legSurfErr"}),(0,t.jsx)(r.td,{children:"byte"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(a.Z,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpreadBookMarkup'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,t.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpreadBookMarkup'\n\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(a.Z,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadBookMarkup\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|SRspreadID|priceFormat|bidPrice1|isBidPrice1Valid|askPrice1|isAskPrice1Valid|bidSize1|askSize1|bidMask1|askMask1|bidExch1|askExch1|bidTime|askTime|updateType|numStkLegs|numFutLegs|numOptLegs|userDefined|spreadClass|containsHedge|legBidPrc|legAskPrc|legBidSz|legAskSz|surfPrc|surfDelta|surfGamma|surfVega|surfWtVega|surfError|minExpiry|maxExpiry|minYears|maxYears|refUPrc|printPrice|printTime|printSize|printVolume|grpNum|securityDesc|filterId|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'securityDesc:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpreadBookMarkup' \\\n--data-urlencode 'view=ticker|SRspreadID|priceFormat|bidPrice1|isBidPrice1Valid|askPrice1|isAskPrice1Valid|bidSize1|askSize1|bidMask1|askMask1|bidExch1|askExch1|bidTime|askTime|updateType|numStkLegs|numFutLegs|numOptLegs|userDefined|spreadClass|containsHedge|legBidPrc|legAskPrc|legBidSz|legAskSz|surfPrc|surfDelta|surfGamma|surfVega|surfWtVega|surfError|minExpiry|maxExpiry|minYears|maxYears|refUPrc|printPrice|printTime|printSize|printVolume|grpNum|securityDesc|filterId|timestamp' \\\n--data-urlencode 'where=securityDesc:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(a.Z,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadBookMarkup\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|SRspreadID|priceFormat|bidPrice1|isBidPrice1Valid|askPrice1|isAskPrice1Valid|bidSize1|askSize1|bidMask1|askMask1|bidExch1|askExch1|bidTime|askTime|updateType|numStkLegs|numFutLegs|numOptLegs|userDefined|spreadClass|containsHedge|legBidPrc|legAskPrc|legBidSz|legAskSz|surfPrc|surfDelta|surfGamma|surfVega|surfWtVega|surfError|minExpiry|maxExpiry|minYears|maxYears|refUPrc|printPrice|printTime|printSize|printVolume|grpNum|securityDesc|filterId|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'securityDesc:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpreadBookMarkup' \\\n--data-urlencode 'view=ticker|SRspreadID|priceFormat|bidPrice1|isBidPrice1Valid|askPrice1|isAskPrice1Valid|bidSize1|askSize1|bidMask1|askMask1|bidExch1|askExch1|bidTime|askTime|updateType|numStkLegs|numFutLegs|numOptLegs|userDefined|spreadClass|containsHedge|legBidPrc|legAskPrc|legBidSz|legAskSz|surfPrc|surfDelta|surfGamma|surfVega|surfWtVega|surfError|minExpiry|maxExpiry|minYears|maxYears|refUPrc|printPrice|printTime|printSize|printVolume|grpNum|securityDesc|filterId|timestamp' \\\n--data-urlencode 'where=securityDesc:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(a.Z,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadBookMarkup\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|SRspreadID|priceFormat|bidPrice1|isBidPrice1Valid|askPrice1|isAskPrice1Valid|bidSize1|askSize1|bidMask1|askMask1|bidExch1|askExch1|bidTime|askTime|updateType|numStkLegs|numFutLegs|numOptLegs|userDefined|spreadClass|containsHedge|legBidPrc|legAskPrc|legBidSz|legAskSz|surfPrc|surfDelta|surfGamma|surfVega|surfWtVega|surfError|minExpiry|maxExpiry|minYears|maxYears|refUPrc|printPrice|printTime|printSize|printVolume|grpNum|securityDesc|filterId|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'priceFormat|isBidPrice1Valid|isAskPrice1Valid|bidExch1|askExch1|updateType|userDefined|spreadClass|containsHedge\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'securityDesc:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpreadBookMarkup' \\\n--data-urlencode 'measure=ticker|SRspreadID|priceFormat|bidPrice1|isBidPrice1Valid|askPrice1|isAskPrice1Valid|bidSize1|askSize1|bidMask1|askMask1|bidExch1|askExch1|bidTime|askTime|updateType|numStkLegs|numFutLegs|numOptLegs|userDefined|spreadClass|containsHedge|legBidPrc|legAskPrc|legBidSz|legAskSz|surfPrc|surfDelta|surfGamma|surfVega|surfWtVega|surfError|minExpiry|maxExpiry|minYears|maxYears|refUPrc|printPrice|printTime|printSize|printVolume|grpNum|securityDesc|filterId|timestamp' \\\n--data-urlencode 'group=priceFormat|isBidPrice1Valid|isAskPrice1Valid|bidExch1|askExch1|updateType|userDefined|spreadClass|containsHedge' \\\n--data-urlencode 'where=securityDesc:eq:ExampleString'\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(a.Z,{value:"Python",label:"Python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpreadBookMarkup\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'securityDesc:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,t.jsx)(a.Z,{value:"cUrl",label:"cUrl",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpreadBookMarkup' \\\n--data-urlencode 'where=securityDesc:eq:ExampleString'\n"})})})]})]})}function x(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9641:function(e,r,s){s.d(r,{Z:()=>i});var n=s("52676");s("75271");var t=s("54461");function i(e){let{children:r,hidden:s,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_SSzl",i),hidden:s,children:r})}},71386:function(e,r,s){s.d(r,{Z:()=>f});var n=s("52676"),t=s("75271"),i=s("54461"),d=s("52289"),a=s("3225"),l=s("42834"),c=s("40578"),h=s("35834"),o=s("79616");function u(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:r,tabValues:s}=e;return s.some(e=>e.value===r)}var p=s("44537");function j(e){let{className:r,block:s,selectedValue:t,selectValue:a,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.o5)(),o=e=>{let r=e.currentTarget,s=l[c.indexOf(r)].value;s!==t&&(h(r),a(s))},u=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;r=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;r=c[s]??c[c.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},r),children:l.map(e=>{let{value:r,label:s,attributes:d}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:u,onClick:o,...d,className:(0,i.Z)("tabs__item","tabItem_aitt",d?.className,{"tabs__item--active":t===r}),children:s??r},r)})})}function m(e){let{lazy:r,children:s,selectedValue:d}=e,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){let e=a.find(e=>e.props.value===d);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==d}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:s=!1,groupId:n}=e,i=function(e){let{values:r,children:s}=e;return(0,t.useMemo)(()=>{let e=r??u(s).map(e=>{let{props:{value:r,label:s,attributes:n,default:t}}=e;return{value:r,label:s,attributes:n,default:t}});return!function(e){let r=(0,h.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,s])}(e),[d,p]=(0,t.useState)(()=>(function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=s.find(e=>e.default)??s[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:i})),[j,m]=function(e){let{queryString:r=!1,groupId:s}=e,n=(0,a.k6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c._X)(i),(0,t.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})},[i,n])]}({queryString:s,groupId:n}),[g,f]=function(e){let{groupId:r}=e,s=r?`docusaurus.tab.${r}`:null,[n,i]=(0,o.Nk)(s);return[n,(0,t.useCallback)(e=>{s&&i.set(e)},[s,i])]}({groupId:n}),k=(()=>{let e=j??g;return x({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{k&&p(k)},[k]),{selectedValue:d,selectValue:(0,t.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),m(e),f(e)},[m,f,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,n.jsx)(j,{...r,...e}),(0,n.jsx)(m,{...r,...e})]})}function f(e){let r=(0,p.Z)();return(0,n.jsx)(g,{...e,children:u(e.children)},String(r))}},91503:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return d}});var n=s(75271);let t={},i=n.createContext(t);function d(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);