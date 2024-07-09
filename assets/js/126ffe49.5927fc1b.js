"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47912],{37166:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>n,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(74848),t=s(28453);const i={title:"OptionCalculator"},l="Schema: OptionCalculator (ID: 5030)",c={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",title:"OptionCalculator",description:"This table allows custom option pricing based on either user or SR supplied input values.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionCalculator.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionCalculator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionCalculator"},sidebar:"messageSchemasSidebar",previous:{title:"5030-srse-calculators",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/"},next:{title:"OptionImpliedPair",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedPair"}},n={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-optioncalculator-id-5030",children:["Schema: OptionCalculator ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5030)"})]}),"\n",(0,r.jsx)(d.p,{children:"This table allows custom option pricing based on either user or SR supplied input values."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"userName"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"okey"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"vol"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"volSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"uPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"underlying price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"uPrcSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"years"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"years-to-expiration (default uses SR volatility time value)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:"yearsSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"continuous stock dividend using for pricing"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"sdivSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"rateSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"exType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,r.jsx)(d.td,{children:"exercise type of the option (American or European)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"exTypeSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"effStrike"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"effective strike used for pricing (default is okey.Strike)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"effStrikeSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"symRatio"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"underlying symbol ratio (for non-standard options); discrete dividend will be scaled by this factor"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"symRatioSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"divString"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsxs)(d.td,{children:["discrete dividend string  [ yearsToExpiry, years1",":amt1",", years2",":amt2",", ...] or [ -1, date1",":amt1",", date2",":amt2",", ... ]"]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"divSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"154"}),(0,r.jsx)(d.td,{children:"modelType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"157"}),(0,r.jsx)(d.td,{children:"modelTypeSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"160"}),(0,r.jsx)(d.td,{children:"calcPrecision"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcPrecision",children:"enum : CalcPrecision"})}),(0,r.jsx)(d.td,{children:"numerical precision (# of steps) if a numerical method is used;  [more steps will be slower to calculate]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"163"}),(0,r.jsx)(d.td,{children:"incGreeks"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"166"}),(0,r.jsx)(d.td,{children:"price"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"price (premium)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"169"}),(0,r.jsx)(d.td,{children:"delta"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"delta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"172"}),(0,r.jsx)(d.td,{children:"gamma"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"gamma"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"175"}),(0,r.jsx)(d.td,{children:"theta"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"theta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"178"}),(0,r.jsx)(d.td,{children:"vega"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"vega"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"181"}),(0,r.jsx)(d.td,{children:"volga"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"volga"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"184"}),(0,r.jsx)(d.td,{children:"vanna"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"vanna"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"187"}),(0,r.jsx)(d.td,{children:"deDecay"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"delta decay"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"190"}),(0,r.jsx)(d.td,{children:"rho"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"rho"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"193"}),(0,r.jsx)(d.td,{children:"phi"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"phi"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"196"}),(0,r.jsx)(d.td,{children:"error"}),(0,r.jsx)(d.td,{children:"string(32)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"199"}),(0,r.jsx)(d.td,{children:"pricerModel"}),(0,r.jsx)(d.td,{children:"string(8)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"202"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>l,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function l(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);