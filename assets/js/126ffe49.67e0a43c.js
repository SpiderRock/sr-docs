"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47912],{37166:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>n,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=d(74848),t=d(28453);const i={title:"OptionCalculator"},l="Schema: OptionCalculator (ID: 5030)",c={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",title:"OptionCalculator",description:"This table allows custom option pricing based on either user or SR supplied input values.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionCalculator.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionCalculator"},sidebar:"messageSchemasSidebar",previous:{title:"TradeCubeDetailV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/TradeCubeDetailV5"},next:{title:"OptionImpliedPair",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedPair"}},n={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-optioncalculator-id-5030",children:["Schema: OptionCalculator ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5030)"})]}),"\n",(0,r.jsx)(s.p,{children:"This table allows custom option pricing based on either user or SR supplied input values."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"srse-calculators"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"string(24)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"okey"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"calcPrecision"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CalcPrecision",children:"enum : CalcPrecision"})}),(0,r.jsx)(s.td,{children:"numerical precision (# of steps) if a numerical method is used;  [more steps will be slower to calculate]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deDecay"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"delta decay"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"delta"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"delta"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"divSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"divString"}),(0,r.jsx)(s.td,{children:"text1"}),(0,r.jsxs)(s.td,{children:["discrete dividend string  [ yearsToExpiry, years1",":amt1",", years2",":amt2",", ...] or [ -1, date1",":amt1",", date2",":amt2",", ... ]"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"effStrike"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"effective strike used for pricing (default is okey.Strike)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"effStrikeSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"error"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,r.jsx)(s.td,{children:"exercise type of the option (American or European)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exTypeSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"gamma"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"gamma"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"incGreeks"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modelType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modelTypeSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"phi"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"phi"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"price"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"price (premium)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pricerModel"}),(0,r.jsx)(s.td,{children:"string(8)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rate"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rateSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rho"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"rho"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sdiv"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"continuous stock dividend using for pricing"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sdivSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"symRatio"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"underlying symbol ratio (for non-standard options); discrete dividend will be scaled by this factor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"symRatioSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theta"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"theta"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uPrc"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"underlying price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uPrcSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vanna"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"vanna"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vega"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"vega"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vol"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"volSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"volga"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"volga"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"years"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"years-to-expiration (default uses SR volatility time value)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"yearsSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>l,x:()=>c});var r=d(96540);const t={},i=r.createContext(t);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);