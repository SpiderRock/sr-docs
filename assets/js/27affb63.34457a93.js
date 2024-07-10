"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66562],{56067:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=r(74848),t=r(28453);const d={title:"RootDefinition"},s="Schema: RootDefinition (ID: 4365)",c={id:"MessageSchemas/Schema/Topics/product-definition/RootDefinition",title:"RootDefinition",description:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes.",source:"@site/docs/MessageSchemas/Schema/Topics/4335-product-definition/RootDefinition.md",sourceDirName:"MessageSchemas/Schema/Topics/4335-product-definition",slug:"/MessageSchemas/Schema/Topics/product-definition/RootDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/RootDefinition",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RootDefinition"},sidebar:"messageSchemasSidebar",previous:{title:"RegionalUnderlierComposite",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/RegionalUnderlierComposite"},next:{title:"SpreadDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/SpreadDefinition"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.h1,{id:"schema-rootdefinition-id-4365",children:["Schema: RootDefinition ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4365)"})]}),"\n",(0,n.jsx)(i.p,{children:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes."}),"\n",(0,n.jsx)(i.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Attribute"}),(0,n.jsx)(i.th,{children:"Value"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Topic"}),(0,n.jsx)(i.td,{children:"4335-product-definition"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"MLink Token"}),(0,n.jsx)(i.td,{children:"OptionDefinition"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SRSE Product"}),(0,n.jsx)(i.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(i.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"#"}),(0,n.jsx)(i.th,{children:"Field"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Comment"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"10="}),(0,n.jsx)(i.td,{children:"root"}),(0,n.jsx)(i.td,{children:"TickerKey"}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"100"}),(0,n.jsx)(i.td,{children:"ticker"}),(0,n.jsx)(i.td,{children:"TickerKey"}),(0,n.jsx)(i.td,{children:"master underlying (can be a stock/product group; eg. @ES)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"103"}),(0,n.jsx)(i.td,{children:"osiRoot"}),(0,n.jsx)(i.td,{children:"string(8)"}),(0,n.jsx)(i.td,{children:"long version of the root.  the short version is used in the TickerKey (for example RYAAY1, not RYAA1)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"106"}),(0,n.jsx)(i.td,{children:"ccode"}),(0,n.jsx)(i.td,{children:"TickerKey"}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"109"}),(0,n.jsx)(i.td,{children:"uPrcDriverKey"}),(0,n.jsx)(i.td,{children:"ExpiryKey"}),(0,n.jsx)(i.td,{children:"(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"112"}),(0,n.jsx)(i.td,{children:"uPrcDriverType"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(i.td,{children:"Stock or Future (note: if Future and uPrcDriverKey does not have an expiry month then FrontMonth will be used)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"115"}),(0,n.jsx)(i.td,{children:"uPrcDriverKey2"}),(0,n.jsx)(i.td,{children:"ExpiryKey"}),(0,n.jsx)(i.td,{children:"(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"118"}),(0,n.jsx)(i.td,{children:"uPrcDriverType2"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(i.td,{children:"Stock or Future (note: if Future and uPrcDriverKey does not have an expiry month then FrontMonth will be used)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"121"}),(0,n.jsx)(i.td,{children:"uPrcBoundCCode"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(i.td,{children:"if Yes and if a future exists with ccode=CCode and futExpiry = optExpiry the use this future as a pricing bound"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"124"}),(0,n.jsx)(i.td,{children:"expirationMap"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/ExpirationMap",children:"enum : ExpirationMap"})}),(0,n.jsx)(i.td,{children:"determines the underlying future (if any)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"127"}),(0,n.jsx)(i.td,{children:"underlierMode"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/UnderlierMode",children:"enum : UnderlierMode"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"130"}),(0,n.jsx)(i.td,{children:"optionType"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/OptionType",children:"enum : OptionType"})}),(0,n.jsx)(i.td,{children:"indicator for option type"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"133"}),(0,n.jsx)(i.td,{children:"multihedge"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,n.jsx)(i.td,{children:"indicates type of multihedge (None = standard root; all other root types are not None)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"136"}),(0,n.jsx)(i.td,{children:"exerciseTime"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/ExerciseTime",children:"enum : ExerciseTime"})}),(0,n.jsx)(i.td,{children:"Exercise time type"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"139"}),(0,n.jsx)(i.td,{children:"exerciseType"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,n.jsx)(i.td,{children:"Exercise style"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"142"}),(0,n.jsx)(i.td,{children:"timeMetric"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,n.jsx)(i.td,{children:"trading time metric - 252 or 365 trading days or a weekly cycle type"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"145"}),(0,n.jsx)(i.td,{children:"pricingModel"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/PricingModel",children:"enum : PricingModel"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"148"}),(0,n.jsx)(i.td,{children:"moneynessType"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/MoneynessType",children:"enum : MoneynessType"})}),(0,n.jsx)(i.td,{children:"moneyness (xAxis) convention: PctStd = (K / fUPrc - 1) / (axisVol * RT), LogStd = LOG(K/fUPrc) / (axisVol * RT), NormStd = (K - fUPrc) / (axisVol * RT)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"151"}),(0,n.jsx)(i.td,{children:"priceQuoteType"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/PriceQuoteType",children:"enum : PriceQuoteType"})}),(0,n.jsx)(i.td,{children:"quoting style for the option series on the exchange, price (standard price quote) or volatility quoted (vol points)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"154"}),(0,n.jsx)(i.td,{children:"volumeTier"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/VolumeTier",children:"enum : VolumeTier"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"157"}),(0,n.jsx)(i.td,{children:"positionLimit"}),(0,n.jsx)(i.td,{children:"int"}),(0,n.jsx)(i.td,{children:"max contract limit"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"160"}),(0,n.jsx)(i.td,{children:"exchanges"}),(0,n.jsx)(i.td,{children:"string(24)"}),(0,n.jsx)(i.td,{children:"exchange codes"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"163"}),(0,n.jsx)(i.td,{children:"tickValue"}),(0,n.jsx)(i.td,{children:"float"}),(0,n.jsx)(i.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"166"}),(0,n.jsx)(i.td,{children:"pointValue"}),(0,n.jsx)(i.td,{children:"float"}),(0,n.jsx)(i.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"169"}),(0,n.jsx)(i.td,{children:"pointCurrency"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"172"}),(0,n.jsx)(i.td,{children:"strikeScale"}),(0,n.jsx)(i.td,{children:"double"}),(0,n.jsx)(i.td,{children:"manual strike price adjustment multiplier (used for some CME products if set, otherwise displayFactor is used) (okey_xx = strikePrice * manualStrikeScale)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"175"}),(0,n.jsx)(i.td,{children:"strikeRatio"}),(0,n.jsx)(i.td,{children:"float"}),(0,n.jsx)(i.td,{children:"note: effective strike = strike * strikeRatio - cashOnExercise"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"178"}),(0,n.jsx)(i.td,{children:"cashOnExercise"}),(0,n.jsx)(i.td,{children:"float"}),(0,n.jsx)(i.td,{children:"note: cashOnExercise is positive if it decreases the effective strike price"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"181"}),(0,n.jsx)(i.td,{children:"underliersPerCn"}),(0,n.jsx)(i.td,{children:"int"}),(0,n.jsx)(i.td,{children:"note: always 100 if underlying list is in use"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"184"}),(0,n.jsx)(i.td,{children:"premiumMult"}),(0,n.jsx)(i.td,{children:"double"}),(0,n.jsx)(i.td,{children:"note: OCC premium/strike multiplier (usually 100)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"185"}),(0,n.jsx)(i.td,{children:"symbolRatio"}),(0,n.jsx)(i.td,{children:"float"}),(0,n.jsx)(i.td,{children:"note: currently used when AdjConvention is None, value of 0 implies symbolRatio is 1"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"187"}),(0,n.jsx)(i.td,{children:"adjConvention"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/AdjConvention",children:"enum : AdjConvention"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"190"}),(0,n.jsx)(i.td,{children:"optPriceInc"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/OptPriceInc",children:"enum : OptPriceInc"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"193"}),(0,n.jsx)(i.td,{children:"priceFormat"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,n.jsx)(i.td,{children:"price display format"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"196"}),(0,n.jsx)(i.td,{children:"tradeCurr"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"199"}),(0,n.jsx)(i.td,{children:"settleCurr"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"202"}),(0,n.jsx)(i.td,{children:"strikeCurr"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"205"}),(0,n.jsx)(i.td,{children:"defaultSurfaceRoot"}),(0,n.jsx)(i.td,{children:"TickerKey"}),(0,n.jsx)(i.td,{children:"fallback ticker to use for option surfaces if no native surfaces are available"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"218"}),(0,n.jsx)(i.td,{children:"ricRoot"}),(0,n.jsx)(i.td,{children:"string(6)"}),(0,n.jsx)(i.td,{children:"RIC Root"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"208"}),(0,n.jsx)(i.td,{children:"timestamp"}),(0,n.jsx)(i.td,{children:"DateTime"}),(0,n.jsx)(i.td,{})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,n.jsx)(i.p,{children:"Underlying"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Field"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Comment"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"214"}),(0,n.jsx)(i.td,{children:"ticker"}),(0,n.jsx)(i.td,{children:"TickerKey"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"217"}),(0,n.jsx)(i.td,{children:"spc"}),(0,n.jsx)(i.td,{children:"float"})]})]})]}),"\n",(0,n.jsx)(i.p,{children:"Exchange"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Field"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Comment"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"220"}),(0,n.jsx)(i.td,{children:"optExch"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"221"}),(0,n.jsx)(i.td,{children:"nativeRoot"}),(0,n.jsx)(i.td,{children:"string(12)"})]})]})]})]})}function x(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>c});var n=r(96540);const t={},d=n.createContext(t);function s(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);