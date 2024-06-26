"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82073],{75694:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>n,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var t=d(74848),r=d(28453);const i={title:"LiveExpirySurface"},l="Schema: LiveExpirySurface (ID: 1135)",c={id:"Schemas/Schema/Topics/analytics/LiveExpirySurface",title:"LiveExpirySurface",description:"LiveExpirySurface (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close).",source:"@site/docs/Schemas/Schema/Topics/1000-analytics/LiveExpirySurface.md",sourceDirName:"Schemas/Schema/Topics/1000-analytics",slug:"/Schemas/Schema/Topics/analytics/LiveExpirySurface",permalink:"/docs/Schemas/Schema/Topics/analytics/LiveExpirySurface",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveExpirySurface"},sidebar:"schemaSidebar",previous:{title:"LiveAtmVol",permalink:"/docs/Schemas/Schema/Topics/analytics/LiveAtmVol"},next:{title:"LiveIVarSwapFixedTerm",permalink:"/docs/Schemas/Schema/Topics/analytics/LiveIVarSwapFixedTerm"}},n={},x=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-liveexpirysurface-id-1135",children:["Schema: LiveExpirySurface ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 1135)"})]}),"\n",(0,t.jsxs)(s.p,{children:["LiveExpirySurface (surfaceType = 'Live') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"SurfaceType = 'PriorDay' records contain the `closing surface record from the prior trading period (usually from just before the last main session close)."]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"analytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey"}),(0,t.jsx)(s.td,{children:"ExpiryKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SurfaceCurveType",children:"enum : SurfaceCurveType"})}),(0,t.jsx)(s.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"atmSlope"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"volatility surface slope (dVol / dXAxis) @ ATM (xAxis=0)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"atmVol"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"atm vol (xAxis = 0)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"axisFUPrc"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"axis FwdUPrc (fwd underlying price used to compute xAxis)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"axisVolRT"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"axis volatility x sqrt(years) (used to compute xAxis) [usually the minimum curve volatility]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD01"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = -1.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD02"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = -2.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD03"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = -3.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD04"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = -4.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU01"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = +1.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU02"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = +2.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU03"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = +3.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU04"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"xAxis = +4.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fitRate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"average interest rate to expiration (discount rate)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sdiv"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"stock dividend (borrow rate)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC00"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"curve coeff[0]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC01"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"curve coeff[1]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC02"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC03"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC04"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC05"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC06"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC07"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC08"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC09"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC10"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC11"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC12"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC13"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC14"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC15"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC16"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC17"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC18"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC19"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC20"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC21"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC22"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC23"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC24"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC25"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC26"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC27"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC28"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewMult"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"sVol = skewMult * BasisSkewFn(xMult * xAxis - xShift)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceResult"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SurfaceResult",children:"enum : SurfaceResult"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tradeableStatus"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TradeableStatus",children:"enum : TradeableStatus"})}),(0,t.jsx)(s.td,{children:"indicates whether the surface is currently tradeable or not (all server surface integrity checks pass)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"effective uPrc used for surface fitting"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uPrcDriver"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"underlier driver (mid-market)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"xMult"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"xShift"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"years"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"time to expiration (in years)"})]})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>l,x:()=>c});var t=d(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);