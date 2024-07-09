"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82299],{14702:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(74848),t=s(28453);const i={title:"SpreadBookMarkup"},n="Schema: SpreadBookMarkup (ID: 2895)",c={id:"MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup",title:"SpreadBookMarkup",description:"Live spread quotes with SpiderRock markup details for equity and future option spreads.",source:"@site/docs/MessageSchemas/Schema/Topics/2895-market-data-spreads/SpreadBookMarkup.md",sourceDirName:"MessageSchemas/Schema/Topics/2895-market-data-spreads",slug:"/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpreadBookMarkup"},sidebar:"messageSchemasSidebar",previous:{title:"2895-market-data-spreads",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/"},next:{title:"SpreadBookQuote",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookQuote"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-spreadbookmarkup-id-2895",children:["Schema: SpreadBookMarkup ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2895)"})]}),"\n",(0,r.jsx)(d.p,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SpreadMktData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRSpread"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"skey"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"SR Spread Key (should have corresponding ProductDefinition record)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"isTest"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{children:"Yes indicates that response is made of entirely of isTest=Yes SpreadExchOrders"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"common spread underlier"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"298"}),(0,r.jsx)(d.td,{children:"SRspreadID"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"priceFormat"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"bidPrice1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"isBidPrice1Valid"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"askPrice1"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:"isAskPrice1Valid"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"bidSize1"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"cumulative size at bidPrice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"askSize1"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"cumulative size at askPrice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"bidMask1"}),(0,r.jsx)(d.td,{children:"uint"}),(0,r.jsx)(d.td,{children:"exchange bid bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"askMask1"}),(0,r.jsx)(d.td,{children:"uint"}),(0,r.jsx)(d.td,{children:"exchange ask bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"bidExch1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(d.td,{children:"exchange at bid price with the largest size (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"askExch1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(d.td,{children:"exchange at ask price with the largest size (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"bidTime"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"last bid price or size change"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"askTime"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"last ask price or size change"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"updateType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/UpdateType",children:"enum : UpdateType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"numStkLegs"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"numFutLegs"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"numOptLegs"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"157"}),(0,r.jsx)(d.td,{children:"userDefined"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"296"}),(0,r.jsx)(d.td,{children:"spreadClass"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"297"}),(0,r.jsx)(d.td,{children:"containsHedge"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"166"}),(0,r.jsx)(d.td,{children:"legBidPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"169"}),(0,r.jsx)(d.td,{children:"legAskPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"172"}),(0,r.jsx)(d.td,{children:"legBidSz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"175"}),(0,r.jsx)(d.td,{children:"legAskSz"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"178"}),(0,r.jsx)(d.td,{children:"surfPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"181"}),(0,r.jsx)(d.td,{children:"surfDelta"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"184"}),(0,r.jsx)(d.td,{children:"surfGamma"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"187"}),(0,r.jsx)(d.td,{children:"surfVega"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"190"}),(0,r.jsx)(d.td,{children:"surfWtVega"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"193"}),(0,r.jsx)(d.td,{children:"surfError"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"error code from surface price calc (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"196"}),(0,r.jsx)(d.td,{children:"minExpiry"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"expiry of earliest option leg(s)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"199"}),(0,r.jsx)(d.td,{children:"maxExpiry"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"expiry of latest option leg(s)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"202"}),(0,r.jsx)(d.td,{children:"minYears"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"205"}),(0,r.jsx)(d.td,{children:"maxYears"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"208"}),(0,r.jsx)(d.td,{children:"refUPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"reference underlier price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"211"}),(0,r.jsx)(d.td,{children:"printPrice"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"last spread print price (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"214"}),(0,r.jsx)(d.td,{children:"printTime"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"217"}),(0,r.jsx)(d.td,{children:"printSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"last spread print size (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"220"}),(0,r.jsx)(d.td,{children:"printVolume"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"223"}),(0,r.jsx)(d.td,{children:"grpNum"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"226"}),(0,r.jsx)(d.td,{children:"securityDesc"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"229"}),(0,r.jsx)(d.td,{children:"filterId"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"tool server filter request ID"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"232"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]})]})]}),(0,r.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,r.jsx)(d.p,{children:"MarkupLegs"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"238"}),(0,r.jsx)(d.td,{children:"legSecKey"}),(0,r.jsx)(d.td,{children:"OptionKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"241"}),(0,r.jsx)(d.td,{children:"legSecType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"244"}),(0,r.jsx)(d.td,{children:"legPriceFormat"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"247"}),(0,r.jsx)(d.td,{children:"legSecurityDesc"}),(0,r.jsx)(d.td,{children:"string(20)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"250"}),(0,r.jsx)(d.td,{children:"legSide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"253"}),(0,r.jsx)(d.td,{children:"legRatio"}),(0,r.jsx)(d.td,{children:"ushort"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"256"}),(0,r.jsx)(d.td,{children:"legBidPrice"}),(0,r.jsx)(d.td,{children:"double"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"259"}),(0,r.jsx)(d.td,{children:"legBidSize"}),(0,r.jsx)(d.td,{children:"int"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"262"}),(0,r.jsx)(d.td,{children:"legAskPrice"}),(0,r.jsx)(d.td,{children:"double"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"265"}),(0,r.jsx)(d.td,{children:"legAskSize"}),(0,r.jsx)(d.td,{children:"int"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"268"}),(0,r.jsx)(d.td,{children:"legYears"}),(0,r.jsx)(d.td,{children:"float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"271"}),(0,r.jsx)(d.td,{children:"legUPrc"}),(0,r.jsx)(d.td,{children:"double"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"280"}),(0,r.jsx)(d.td,{children:"legSurfVol"}),(0,r.jsx)(d.td,{children:"float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"283"}),(0,r.jsx)(d.td,{children:"legSurfPrice"}),(0,r.jsx)(d.td,{children:"float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"286"}),(0,r.jsx)(d.td,{children:"legSurfDe"}),(0,r.jsx)(d.td,{children:"float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"289"}),(0,r.jsx)(d.td,{children:"legSurfGa"}),(0,r.jsx)(d.td,{children:"float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"292"}),(0,r.jsx)(d.td,{children:"legSurfVe"}),(0,r.jsx)(d.td,{children:"float"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"295"}),(0,r.jsx)(d.td,{children:"legSurfErr"}),(0,r.jsx)(d.td,{children:"byte"})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);