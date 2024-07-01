"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10246],{60214:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(74848),s=t(28453);const i={title:"LiveSurfaceFixedTerm"},n="Schema: LiveSurfaceFixedTerm (ID: 1045)",l={id:"MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedTerm",title:"LiveSurfaceFixedTerm",description:"LiveSurfaceFixedTerm (surfaceType = 'Live') records contain a live implied volatility term record at standardized days-to-expiration.  SurfaceType = 'PriorDay' records contain the final record from the prior trading day.These records include implied and histrical earnings moves, implied earnings date adjustments, and interpolated/gridded atm, sdiv, and quote width values.LiveSurfaceTerm records are published to the SpiderRock elastic cluster every 10 minutes for all equity and index underliers with options.",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveSurfaceFixedTerm.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedTerm",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedTerm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveSurfaceFixedTerm"},sidebar:"messageSchemasSidebar",previous:{title:"LiveSurfaceFixedGrid",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedGrid"},next:{title:"LiveSurfacePerf",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfacePerf"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-livesurfacefixedterm-id-1045",children:["Schema: LiveSurfaceFixedTerm ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1045)"})]}),"\n",(0,r.jsxs)(d.p,{children:["LiveSurfaceFixedTerm (surfaceType = 'Live') records contain a live implied volatility term record at standardized days-to-expiration.  SurfaceType = 'PriorDay' records contain the final record from the prior trading day.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"These records include implied and histrical earnings moves, implied earnings date adjustments, and interpolated/gridded atm, sdiv, and quote width values.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"LiveSurfaceTerm records are published to the SpiderRock elastic cluster every 10 minutes for all equity and index underliers with options."]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"OptSurface"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"analytics"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"surfaceType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SurfaceCurveType",children:"enum : SurfaceCurveType"})}),(0,r.jsx)(d.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_105d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 105 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_10d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 10 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_126d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 126 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_189d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 189 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_21d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 21 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_252d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 252 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_378d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 378 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_42d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 42 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_504d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 504 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_5d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 5 day atm vol (censored using hEMult)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_63d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 63 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_84d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 84 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_decay"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"model decay parameter"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_lt"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"long term (504 day) model atm volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenH_st"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"short term (5 day) model atm volatility (censored using hEMult)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_105d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 105 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_10d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 10 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_126d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 126 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_189d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 189 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_21d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 21 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_252d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 252 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_378d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 378 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_42d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 42 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_504d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 504 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_5d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 5 day atm vol (censored using iEMult)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_63d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 63 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_84d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 84 day atm vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_decay"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"model decay parameter"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_lt"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"long term (504 day) model atm volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"atmCenI_st"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"short term (5 day) model atm volatility (censored using iEMult)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_105d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_10d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_126d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_189d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_21d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_252d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_378d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_42d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_504d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_5d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_63d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eCnt_84d"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of expected earnings events"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveEKey1"}),(0,r.jsx)(d.td,{children:"ExpiryKey"}),(0,r.jsx)(d.td,{children:"LiveSurfaceCurve.pkey.ekey immediately after 1st implied earnings move (note: this will not match the base earnings calendar if eMoveDtAdj1 != 0)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveEKey2"}),(0,r.jsx)(d.td,{children:"ExpiryKey"}),(0,r.jsx)(d.td,{children:"LiveSurfaceCurve.pkey.ekey immediately after 2nd implied earnings move (note: this will not match the base earnings calendar if eMoveDtAdj2 != 0)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveExpAdj1"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"number of expirations (+/-) that the next earn date was moved to best fit market term structure (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveExpAdj2"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"number of expirations (+/-) that the 2nd earn date was moved to best fit market term structure (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveYears1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"years to expiration from LiveSurfaceCurve.pkey.ekey = eMoveFKey1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveYears2"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"years to expiration from LiveSurfaceCurve.pkey.fkey = eMoveFKey2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveYrsAdj1"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"number of trading years (+/-) that the next earn date was moved to best fit market term structure (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"eMoveYrsAdj2"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"number of trading years (+/-) that the 2nd earn date was moved to best fit market term structure (if any)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expiryCount"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of actual expirations involved"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_105d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 105 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_10d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 10 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_126d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 126 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_189d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 189 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_21d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 21 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_252d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 252 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_378d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 378 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_42d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 42 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_504d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 504 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_5d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 5 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_63d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 63 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fwdUPrc_84d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 84 day implied forward price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hEMove"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"expected forward earnings move (average of the last 8-12 underlier earnings moves; w/max clipping)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hEMoveAvg"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"avg historical earnings move (last 8-12 underlier earnings moves)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hEMoveMax"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"min historical earnings move (last 8-12 underlier earnings moves)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hEMoveMin"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"max historical earnings move (last 8-12 underlier earnings moves)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hEMoveNum"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"num historical earnings moves in historical window"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hEMoveStd"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"std historical earnings move (last 8-12 underlier earnings moves)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEFitCode"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/EFitCode",children:"enum : EFitCode"})}),(0,r.jsx)(d.td,{children:"implied EFit Code"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEFitError"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"eMove fit error (term surface fit error)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEMove"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"implied earnings move (implied move; all earnings events)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEMoveAvg"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"average eMove today"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEMoveCnt"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"number of surface term fits today"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEMoveMax"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"emove max today"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEMoveMin"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"eMove min today"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"iEMoveStd"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"eMove std dev today"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_105d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 105 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_10d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 10 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_126d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 126 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_189d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 189 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_21d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 21 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_252d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 252 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_378d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 378 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_42d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 42 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_504d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 504 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_5d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 5 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_63d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 63 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sDiv_84d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 84 day implied sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"status"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CurveStatus",children:"enum : CurveStatus"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"synSpot"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"Synthetic spot price (market-derived spot when the underlying is not a traded instrument)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"time"}),(0,r.jsx)(d.td,{children:"TimeSpan"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"update timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_105d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 105 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_10d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 10 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_126d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 126 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_189d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 189 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_21d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 21 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_252d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 252 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_378d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 378 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_42d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 42 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_504d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 504 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_5d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 5 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_63d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 63 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vSlope_84d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 84 day atm vol slope"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_105d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 105 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_10d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 10 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_126d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 126 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_189d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 189 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_21d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 21 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_252d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 252 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_378d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 378 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_42d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 42 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_504d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 504 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_5d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 5 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_63d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 63 day market vwidth"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vWidth_84d"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"Interpolated 84 day market vwidth"})]})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);