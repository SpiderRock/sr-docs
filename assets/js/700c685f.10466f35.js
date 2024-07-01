"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28210],{746:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var d=i(74848),s=i(28453);const r={title:"GetOptionVolatility"},n="Schema: GetOptionVolatility (ID: 3340)",l={id:"MessageSchemas/Schema/Topics/mlink/GetOptionVolatility",title:"GetOptionVolatility",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3325-mlink/GetOptionVolatility.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/GetOptionVolatility",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/GetOptionVolatility",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GetOptionVolatility"},sidebar:"messageSchemasSidebar",previous:{title:"GetOptionPrice",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/GetOptionPrice"},next:{title:"MLinkAdmin",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkAdmin"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-getoptionvolatility-id-3340",children:["Schema: GetOptionVolatility ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 3340)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"RiskCalc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"mlink"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsx)(t.table,{children:(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})})})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calcEngine"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CalcEngine",children:"enum : CalcEngine"})}),(0,d.jsx)(t.td,{children:"underlying calc engine:  FastHybrid (listed strikes + SR discrtete dividends only).  NumericX works for any strike/expiry + discrete dividend set but is significantly slower."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"callPut"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum : CallPut"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"deDecay"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"delta decay"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"delta"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"delta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dividendAmount"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sum of discrete dividend amounts payable prior to exercise (if any) (simple; not net present value)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"effStrike"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"effective strike used to for pricing calc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"error"}),(0,d.jsx)(t.td,{children:"string(32)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exTime"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/ExerciseTime",children:"enum : ExerciseTime"})}),(0,d.jsx)(t.td,{children:"exercise time (AM or PM)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,d.jsx)(t.td,{children:"exercise type of the option (American or European)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"expiry"}),(0,d.jsx)(t.td,{children:"DateKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"gamma"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"gamma"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"incGreeks"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"default (No)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modelType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"phi"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"phi"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"price"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"option price (premium)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pricerModel"}),(0,d.jsx)(t.td,{children:"string(8)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"discount rate used for pricing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rho"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"rho"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"root"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdiv"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"continuous stock dividend using for pricing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strike"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theta"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"theta"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timeMetric"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,d.jsx)(t.td,{children:"time metric (D252, D365, etc.)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uPrc"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"underlying price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vanna"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"vanna"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vega"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"vega"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vol"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"volatility (implied)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"volga"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"volga"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"years"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"years-to-expiration (default uses SR volatility time value)"})]})]})]}),(0,d.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,d.jsx)(t.p,{children:"DiscreteDividend"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"amount"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var d=i(96540);const s={},r=d.createContext(s);function n(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);