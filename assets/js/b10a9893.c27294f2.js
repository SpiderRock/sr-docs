"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1270],{54434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(74848),i=r(28453),s=r(11470),d=r(19365);const c={title:"ProductDefinitionV2"},a="Schema: ProductDefinitionV2 (ID: 4360)",l={id:"MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2",title:"ProductDefinitionV2",description:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records.",source:"@site/docs/MessageSchemas/Schema/Topics/4335-product-definition/ProductDefinitionV2.md",sourceDirName:"MessageSchemas/Schema/Topics/4335-product-definition",slug:"/MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ProductDefinitionV2"},sidebar:"messageSchemasSidebar",previous:{title:"OptExpiryDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/OptExpiryDefinition"},next:{title:"RegionalOptionComposite",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/RegionalOptionComposite"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-productdefinitionv2-id-4360",children:["Schema: ProductDefinitionV2 ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4360)"})]}),"\n",(0,n.jsx)(t.p,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"4335-product-definition"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"FutureDefinition"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"secKey"}),(0,n.jsx)(t.td,{children:"OptionKey"}),(0,n.jsx)(t.td,{children:"SR Security Key [can be partially filled in (look at secType)]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11="}),(0,n.jsx)(t.td,{children:"secType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(t.td,{children:"Security Type [Stock, Future, Option]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"248"}),(0,n.jsx)(t.td,{children:"securityID"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"unique exchange id (exch assigned)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"master underlier"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"251"}),(0,n.jsx)(t.td,{children:"SRspreadID"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"productClass"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ProductClass",children:"enum : ProductClass"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"underlierID"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"underlier product id (option only) [securityID of undKey/undType product]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"undKey"}),(0,n.jsx)(t.td,{children:"ExpiryKey"}),(0,n.jsx)(t.td,{children:"SR Underlier Security Key [can be partially filled in (look at undType)] (option only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"undType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(t.td,{children:"Underlier Security Type [Stock, Future] (option only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"productGroup"}),(0,n.jsx)(t.td,{children:"string(6)"}),(0,n.jsx)(t.td,{children:"Underlying product code.  I.E. All GE (Eurodollar) spreads, options, futures will be in the same productGroup - This is the Asset field from the SecurityDefinition message"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"securityGroup"}),(0,n.jsx)(t.td,{children:"string(6)"}),(0,n.jsx)(t.td,{children:"Exchange specific code for a group of related securities that are all affected by market events.  I.E. All E-mini weekly options (EW) - This is SecurityGroup field from the SecurityDefinition messages"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"marketSegmentID"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Exchange specific market segment identifier"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"249"}),(0,n.jsx)(t.td,{children:"ricCode"}),(0,n.jsx)(t.td,{children:"string(32)"}),(0,n.jsx)(t.td,{children:"Full RIC Code - only provided for non-user defined instruments"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"250"}),(0,n.jsx)(t.td,{children:"securityDesc"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"full exchange symbol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"string(8)"}),(0,n.jsx)(t.td,{children:"listing exchange"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"productType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ProductType",children:"enum : ProductType"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"productTerm"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ProductTerm",children:"enum : ProductTerm"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"productIndexType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ProductIndexType",children:"enum : ProductIndexType"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"productRate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"contractSize"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"contractUnit"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ContractUnit",children:"enum : ContractUnit"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"priceFormat"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"minTickSize"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"displayFactor"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"160"}),(0,n.jsx)(t.td,{children:"strikeScale"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"manual strike price adjustment multiplier (used for some CME products if set, otherwise displayFactor is used) (okey_xx = strikePrice * manualStrikeScale)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"163"}),(0,n.jsx)(t.td,{children:"minLotSize"}),(0,n.jsx)(t.td,{children:"short"}),(0,n.jsx)(t.td,{children:"minimum lot size"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"166"}),(0,n.jsx)(t.td,{children:"bookDepth"}),(0,n.jsx)(t.td,{children:"short"}),(0,n.jsx)(t.td,{children:"levels in the Globex quote book"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"169"}),(0,n.jsx)(t.td,{children:"impliedBookDepth"}),(0,n.jsx)(t.td,{children:"short"}),(0,n.jsx)(t.td,{children:"levels in the globex implied quote book (0 if no implied depth)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"172"}),(0,n.jsx)(t.td,{children:"impMarketInd"}),(0,n.jsx)(t.td,{children:"short"}),(0,n.jsx)(t.td,{children:"implied market type (0 = no implied, 1 = implied in, 2 = implied out, 3 = implied in & out)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"175"}),(0,n.jsx)(t.td,{children:"minPriceIncrementAmount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(depricate) minimum price amount (points per handle)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"178"}),(0,n.jsx)(t.td,{children:"parValue"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"per contract par value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"181"}),(0,n.jsx)(t.td,{children:"contMultiplier"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"contract deliverable multipler"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"184"}),(0,n.jsx)(t.td,{children:"cabPrice"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"(depricate) cabinet price (minimum closing price for OOM options)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"187"}),(0,n.jsx)(t.td,{children:"tradeCurr"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"190"}),(0,n.jsx)(t.td,{children:"settleCurr"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"193"}),(0,n.jsx)(t.td,{children:"strikeCurr"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"196"}),(0,n.jsx)(t.td,{children:"expiration"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"future expiration or option expiration (if product is an option). we use the last TRADING day as the expiration date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"199"}),(0,n.jsx)(t.td,{children:"maturity"}),(0,n.jsx)(t.td,{children:"DateKey"}),(0,n.jsx)(t.td,{children:"future maturity date or option maturity date.  this is the delivery month."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"202"}),(0,n.jsx)(t.td,{children:"exerciseType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,n.jsx)(t.td,{children:"(depricate; in RootDefinition) Exercise style"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"205"}),(0,n.jsx)(t.td,{children:"userDefined"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"208"}),(0,n.jsx)(t.td,{children:"decayStartYear"}),(0,n.jsx)(t.td,{children:"short"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"211"}),(0,n.jsx)(t.td,{children:"decayStartMonth"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"214"}),(0,n.jsx)(t.td,{children:"decayStartDay"}),(0,n.jsx)(t.td,{children:"byte"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"217"}),(0,n.jsx)(t.td,{children:"decayQty"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"daily decay quantity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"220"}),(0,n.jsx)(t.td,{children:"priceRatio"}),(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"price ratio for interest rate intercommodity spreads"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"247"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,n.jsx)(t.p,{children:"Legs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"226"}),(0,n.jsx)(t.td,{children:"legID"}),(0,n.jsx)(t.td,{children:"string(24)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"229"}),(0,n.jsx)(t.td,{children:"secKey"}),(0,n.jsx)(t.td,{children:"OptionKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"232"}),(0,n.jsx)(t.td,{children:"secType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"235"}),(0,n.jsx)(t.td,{children:"side"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"238"}),(0,n.jsx)(t.td,{children:"ratio"}),(0,n.jsx)(t.td,{children:"ushort"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"241"}),(0,n.jsx)(t.td,{children:"refDelta"}),(0,n.jsx)(t.td,{children:"float"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"244"}),(0,n.jsx)(t.td,{children:"refPrc"}),(0,n.jsx)(t.td,{children:"double"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'ProductDefinitionV2'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=ProductDefinitionV2'\n\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductDefinitionV2\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'securityID|ticker|SRspreadID|productClass|underlierID|undKey|undType|productGroup|securityGroup|marketSegmentID|ricCode|securityDesc|exchange|productType|productTerm|productIndexType|productRate|contractSize|contractUnit|priceFormat|minTickSize|displayFactor|strikeScale|minLotSize|bookDepth|impliedBookDepth|impMarketInd|minPriceIncrementAmount|parValue|contMultiplier|cabPrice|tradeCurr|settleCurr|strikeCurr|expiration|maturity|exerciseType|userDefined|decayStartYear|decayStartMonth|decayStartDay|decayQty|priceRatio|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'productGroup:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=ProductDefinitionV2' \\\n--data-urlencode 'view=securityID|ticker|SRspreadID|productClass|underlierID|undKey|undType|productGroup|securityGroup|marketSegmentID|ricCode|securityDesc|exchange|productType|productTerm|productIndexType|productRate|contractSize|contractUnit|priceFormat|minTickSize|displayFactor|strikeScale|minLotSize|bookDepth|impliedBookDepth|impMarketInd|minPriceIncrementAmount|parValue|contMultiplier|cabPrice|tradeCurr|settleCurr|strikeCurr|expiration|maturity|exerciseType|userDefined|decayStartYear|decayStartMonth|decayStartDay|decayQty|priceRatio|timestamp' \\\n--data-urlencode 'where=productGroup:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductDefinitionV2\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'securityID|ticker|SRspreadID|productClass|underlierID|undKey|undType|productGroup|securityGroup|marketSegmentID|ricCode|securityDesc|exchange|productType|productTerm|productIndexType|productRate|contractSize|contractUnit|priceFormat|minTickSize|displayFactor|strikeScale|minLotSize|bookDepth|impliedBookDepth|impMarketInd|minPriceIncrementAmount|parValue|contMultiplier|cabPrice|tradeCurr|settleCurr|strikeCurr|expiration|maturity|exerciseType|userDefined|decayStartYear|decayStartMonth|decayStartDay|decayQty|priceRatio|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'productGroup:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'securityID:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=ProductDefinitionV2' \\\n--data-urlencode 'view=securityID|ticker|SRspreadID|productClass|underlierID|undKey|undType|productGroup|securityGroup|marketSegmentID|ricCode|securityDesc|exchange|productType|productTerm|productIndexType|productRate|contractSize|contractUnit|priceFormat|minTickSize|displayFactor|strikeScale|minLotSize|bookDepth|impliedBookDepth|impMarketInd|minPriceIncrementAmount|parValue|contMultiplier|cabPrice|tradeCurr|settleCurr|strikeCurr|expiration|maturity|exerciseType|userDefined|decayStartYear|decayStartMonth|decayStartDay|decayQty|priceRatio|timestamp' \\\n--data-urlencode 'where=productGroup:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=securityID:ASC'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductDefinitionV2\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'securityID|ticker|SRspreadID|productClass|underlierID|undKey|undType|productGroup|securityGroup|marketSegmentID|ricCode|securityDesc|exchange|productType|productTerm|productIndexType|productRate|contractSize|contractUnit|priceFormat|minTickSize|displayFactor|strikeScale|minLotSize|bookDepth|impliedBookDepth|impMarketInd|minPriceIncrementAmount|parValue|contMultiplier|cabPrice|tradeCurr|settleCurr|strikeCurr|expiration|maturity|exerciseType|userDefined|decayStartYear|decayStartMonth|decayStartDay|decayQty|priceRatio|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'productClass|undType|productType|productTerm|productIndexType|contractUnit|priceFormat|tradeCurr|settleCurr|strikeCurr|exerciseType|userDefined\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'productGroup:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=ProductDefinitionV2' \\\n--data-urlencode 'measure=securityID|ticker|SRspreadID|productClass|underlierID|undKey|undType|productGroup|securityGroup|marketSegmentID|ricCode|securityDesc|exchange|productType|productTerm|productIndexType|productRate|contractSize|contractUnit|priceFormat|minTickSize|displayFactor|strikeScale|minLotSize|bookDepth|impliedBookDepth|impMarketInd|minPriceIncrementAmount|parValue|contMultiplier|cabPrice|tradeCurr|settleCurr|strikeCurr|expiration|maturity|exerciseType|userDefined|decayStartYear|decayStartMonth|decayStartDay|decayQty|priceRatio|timestamp' \\\n--data-urlencode 'group=productClass|undType|productType|productTerm|productIndexType|contractUnit|priceFormat|tradeCurr|settleCurr|strikeCurr|exerciseType|userDefined' \\\n--data-urlencode 'where=productGroup:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"Python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ProductDefinitionV2\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'productGroup:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(d.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=ProductDefinitionV2' \\\n--data-urlencode 'where=productGroup:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,d),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),i=r(34164),s=r(23104),d=r(56347),c=r(205),a=r(57485),l=r(31682),o=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const i=(0,d.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=h(e),[d,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=x({queryString:r,groupId:i}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,o.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),y=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{y&&a(y)}),[y]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),o=e=>{const t=e.currentTarget,r=a.indexOf(t),i=c[r].value;i!==n&&(l(t),d(i))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:u,onClick:o,...s,className:(0,i.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function X(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function T(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,f.jsx)(g,{...t,...e}),(0,f.jsx)(X,{...t,...e})]})}function b(e){const t=(0,j.A)();return(0,f.jsx)(T,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);