"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1270],{54434:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=i(74848),r=i(28453);const s={title:"ProductDefinitionV2"},n="Schema: ProductDefinitionV2 (ID: 4360)",c={id:"MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2",title:"ProductDefinitionV2",description:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records.",source:"@site/docs/MessageSchemas/Schema/Topics/4335-product-definition/ProductDefinitionV2.md",sourceDirName:"MessageSchemas/Schema/Topics/4335-product-definition",slug:"/MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ProductDefinitionV2"},sidebar:"messageSchemasSidebar",previous:{title:"OptExpiryDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/OptExpiryDefinition"},next:{title:"RegionalOptionComposite",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/RegionalOptionComposite"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-productdefinitionv2-id-4360",children:["Schema: ProductDefinitionV2 ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4360)"})]}),"\n",(0,t.jsx)(d.p,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"4335-product-definition"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"FutureDefinition"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"10"}),(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{children:"SR Security Key [can be partially filled in (look at secType)]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"11"}),(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(d.td,{children:"Security Type [Stock, Future, Option]"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"251"}),(0,t.jsx)(d.td,{children:"SRspreadID"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"166"}),(0,t.jsx)(d.td,{children:"bookDepth"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{children:"levels in the Globex quote book"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"184"}),(0,t.jsx)(d.td,{children:"cabPrice"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"(depricate) cabinet price (minimum closing price for OOM options)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"181"}),(0,t.jsx)(d.td,{children:"contMultiplier"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"contract deliverable multipler"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"145"}),(0,t.jsx)(d.td,{children:"contractSize"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"148"}),(0,t.jsx)(d.td,{children:"contractUnit"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ContractUnit",children:"enum : ContractUnit"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"217"}),(0,t.jsx)(d.td,{children:"decayQty"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"daily decay quantity"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"214"}),(0,t.jsx)(d.td,{children:"decayStartDay"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"211"}),(0,t.jsx)(d.td,{children:"decayStartMonth"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"208"}),(0,t.jsx)(d.td,{children:"decayStartYear"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"157"}),(0,t.jsx)(d.td,{children:"displayFactor"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"130"}),(0,t.jsx)(d.td,{children:"exchange"}),(0,t.jsx)(d.td,{children:"string(8)"}),(0,t.jsx)(d.td,{children:"listing exchange"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"202"}),(0,t.jsx)(d.td,{children:"exerciseType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,t.jsx)(d.td,{children:"(depricate; in RootDefinition) Exercise style"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"196"}),(0,t.jsx)(d.td,{children:"expiration"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"future expiration or option expiration (if product is an option). we use the last TRADING day as the expiration date."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"172"}),(0,t.jsx)(d.td,{children:"impMarketInd"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{children:"implied market type (0 = no implied, 1 = implied in, 2 = implied out, 3 = implied in & out)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"169"}),(0,t.jsx)(d.td,{children:"impliedBookDepth"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{children:"levels in the globex implied quote book (0 if no implied depth)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"124"}),(0,t.jsx)(d.td,{children:"marketSegmentID"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"Exchange specific market segment identifier"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"199"}),(0,t.jsx)(d.td,{children:"maturity"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{children:"future maturity date or option maturity date.  this is the delivery month."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"163"}),(0,t.jsx)(d.td,{children:"minLotSize"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{children:"minimum lot size"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"175"}),(0,t.jsx)(d.td,{children:"minPriceIncrementAmount"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"(depricate) minimum price amount (points per handle)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"154"}),(0,t.jsx)(d.td,{children:"minTickSize"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"178"}),(0,t.jsx)(d.td,{children:"parValue"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"per contract par value"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"151"}),(0,t.jsx)(d.td,{children:"priceFormat"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"220"}),(0,t.jsx)(d.td,{children:"priceRatio"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"price ratio for interest rate intercommodity spreads"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"106"}),(0,t.jsx)(d.td,{children:"productClass"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ProductClass",children:"enum : ProductClass"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"118"}),(0,t.jsx)(d.td,{children:"productGroup"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"Underlying product code.  I.E. All GE (Eurodollar) spreads, options, futures will be in the same productGroup - This is the Asset field from the SecurityDefinition message"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"139"}),(0,t.jsx)(d.td,{children:"productIndexType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ProductIndexType",children:"enum : ProductIndexType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"142"}),(0,t.jsx)(d.td,{children:"productRate"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"136"}),(0,t.jsx)(d.td,{children:"productTerm"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ProductTerm",children:"enum : ProductTerm"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"133"}),(0,t.jsx)(d.td,{children:"productType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ProductType",children:"enum : ProductType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"249"}),(0,t.jsx)(d.td,{children:"ricCode"}),(0,t.jsx)(d.td,{children:"string(32)"}),(0,t.jsx)(d.td,{children:"Full RIC Code - only provided for non-user defined instruments"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"250"}),(0,t.jsx)(d.td,{children:"securityDesc"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"full exchange symbol"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"121"}),(0,t.jsx)(d.td,{children:"securityGroup"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"Exchange specific code for a group of related securities that are all affected by market events.  I.E. All E-mini weekly options (EW) - This is SecurityGroup field from the SecurityDefinition messages"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"248"}),(0,t.jsx)(d.td,{children:"securityID"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"unique exchange id (exch assigned)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"190"}),(0,t.jsx)(d.td,{children:"settleCurr"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"193"}),(0,t.jsx)(d.td,{children:"strikeCurr"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"160"}),(0,t.jsx)(d.td,{children:"strikeScale"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"manual strike price adjustment multiplier (used for some CME products if set, otherwise displayFactor is used) (okey_xx = strikePrice * manualStrikeScale)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"103"}),(0,t.jsx)(d.td,{children:"ticker"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"master underlier"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"247"}),(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"187"}),(0,t.jsx)(d.td,{children:"tradeCurr"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"112"}),(0,t.jsx)(d.td,{children:"undKey"}),(0,t.jsx)(d.td,{children:"ExpiryKey"}),(0,t.jsx)(d.td,{children:"SR Underlier Security Key [can be partially filled in (look at undType)] (option only)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"115"}),(0,t.jsx)(d.td,{children:"undType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(d.td,{children:"Underlier Security Type [Stock, Future] (option only)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"109"}),(0,t.jsx)(d.td,{children:"underlierID"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"underlier product id (option only) [securityID of undKey/undType product]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"205"}),(0,t.jsx)(d.td,{children:"userDefined"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{})]})]})]}),(0,t.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(d.p,{children:"Legs"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"226"}),(0,t.jsx)(d.td,{children:"legID"}),(0,t.jsx)(d.td,{children:"string(24)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"238"}),(0,t.jsx)(d.td,{children:"ratio"}),(0,t.jsx)(d.td,{children:"ushort"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"241"}),(0,t.jsx)(d.td,{children:"refDelta"}),(0,t.jsx)(d.td,{children:"float"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"244"}),(0,t.jsx)(d.td,{children:"refPrc"}),(0,t.jsx)(d.td,{children:"double"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"229"}),(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"232"}),(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"235"}),(0,t.jsx)(d.td,{children:"side"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,i)=>{i.d(d,{R:()=>n,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function n(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);