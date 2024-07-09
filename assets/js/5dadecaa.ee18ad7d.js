"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70421],{54679:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>n,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=d(74848),s=d(28453);const i={title:"LiveSurfacePerf"},l="Schema: LiveSurfacePerf (ID: 1055)",c={id:"MessageSchemas/Schema/Topics/analytics/LiveSurfacePerf",title:"LiveSurfacePerf",description:"LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day.LiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics.",source:"@site/docs/MessageSchemas/Schema/Topics/1000-analytics/LiveSurfacePerf.md",sourceDirName:"MessageSchemas/Schema/Topics/1000-analytics",slug:"/MessageSchemas/Schema/Topics/analytics/LiveSurfacePerf",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfacePerf",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveSurfacePerf"},sidebar:"messageSchemasSidebar",previous:{title:"LiveSurfaceFixedTerm",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/LiveSurfaceFixedTerm"},next:{title:"OptionLookback",permalink:"/docs/MessageSchemas/Schema/Topics/analytics/OptionLookback"}},n={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-livesurfaceperf-id-1055",children:["Schema: LiveSurfacePerf ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 1055)"})]}),"\n",(0,t.jsxs)(r.p,{children:["LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"LiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics."]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"1000-analytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"10"}),(0,t.jsx)(r.td,{children:"ekey"}),(0,t.jsx)(r.td,{children:"ExpiryKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11"}),(0,t.jsx)(r.td,{children:"perfSurfType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PerfSurfaceType",children:"enum : PerfSurfaceType"})}),(0,t.jsx)(r.td,{children:"Preferred surface type: None; Live; PriorDay"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"100"}),(0,t.jsx)(r.td,{children:"date"}),(0,t.jsx)(r.td,{children:"string(10)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"103"}),(0,t.jsx)(r.td,{children:"time"}),(0,t.jsx)(r.td,{children:"string(8)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"exType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"modelType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"uMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"current underlier mark (usually mid market)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"118"}),(0,t.jsx)(r.td,{children:"years"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"time to expiration (in years)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"121"}),(0,t.jsx)(r.td,{children:"rate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"interest rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"124"}),(0,t.jsx)(r.td,{children:"sdiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"stock dividend (borrow rate)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"127"}),(0,t.jsx)(r.td,{children:"ddiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"present value of discrete dividend stream"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"130"}),(0,t.jsx)(r.td,{children:"eventCnt"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of qualifying earnings (or earnings like) events (between now and expiration) [can be fractional]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"133"}),(0,t.jsx)(r.td,{children:"iEMove"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"implied event move (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"136"}),(0,t.jsx)(r.td,{children:"hEMove"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"average of the trailing 12 historical (quarterly) earnings moves (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"139"}),(0,t.jsx)(r.td,{children:"strike"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"atm strike = uMark * Math.Exp(years * rate) - ddiv;"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"142"}),(0,t.jsx)(r.td,{children:"cIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"call surface atm vol @ strike = uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"145"}),(0,t.jsx)(r.td,{children:"pIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"put surface atm vol @ strike = uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"148"}),(0,t.jsx)(r.td,{children:"cSOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"call option price @ (cAtm, uMark, years, sdiv, rate, ddiv);strike = uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"pSOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"put option price @ (pAtm, uMark, years, sdiv, rate, ddiv);strike = uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"154"}),(0,t.jsx)(r.td,{children:"cDe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface call delta @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"cGa"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface call gamma @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"160"}),(0,t.jsx)(r.td,{children:"cTh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface call theta @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"163"}),(0,t.jsx)(r.td,{children:"cVe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface call vega @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"cRo"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface call rho @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"pDe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface put delta @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"pGa"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface put gamma @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"pTh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface put theta @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"pVe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface put vega @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"181"}),(0,t.jsx)(r.td,{children:"pRo"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface put rho @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"184"}),(0,t.jsx)(r.td,{children:"xxCnt"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"number of valid surface strikes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"187"}),(0,t.jsx)(r.td,{children:"pwidth"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"minimum mkt premium width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"190"}),(0,t.jsx)(r.td,{children:"vwidth"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"minimum mkt volatility width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"193"}),(0,t.jsx)(r.td,{children:"fixCIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"fixed strike call surface atm vol @ strike = prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"196"}),(0,t.jsx)(r.td,{children:"fixPIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"fixed strike put surface atm vol @ strike = prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"199"}),(0,t.jsx)(r.td,{children:"fixCSOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"fixed strike call option price @ (fixCAtm, uMark, years, sdiv, rate, ddiv);strike = prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"202"}),(0,t.jsx)(r.td,{children:"fixPSOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"fixed strike put option price @ (fixPAtm, uMark, years, sdiv, rate, ddiv);strike = prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"205"}),(0,t.jsx)(r.td,{children:"prvUMark"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period underlier mark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"208"}),(0,t.jsx)(r.td,{children:"prvYears"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period years to expiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"211"}),(0,t.jsx)(r.td,{children:"prvSDiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period sdiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"214"}),(0,t.jsx)(r.td,{children:"prvRate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"217"}),(0,t.jsx)(r.td,{children:"prvDDiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"220"}),(0,t.jsx)(r.td,{children:"prvStrike"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period atm strike = prvUMark * Math.Exp(years * rate) - ddiv;"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"223"}),(0,t.jsx)(r.td,{children:"prvEventCnt"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"number of qualifying earnings (or earnings like) events (between now and expiration) [can be fractional]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"226"}),(0,t.jsx)(r.td,{children:"prvIEMove"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period implied event move (if any)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"229"}),(0,t.jsx)(r.td,{children:"prvCIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface cAtm @ strike = prvMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"232"}),(0,t.jsx)(r.td,{children:"prvPIVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface pAtm @ strike = prvMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"235"}),(0,t.jsx)(r.td,{children:"prvCSOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period call surface price @ strike = prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"238"}),(0,t.jsx)(r.td,{children:"prvPSOpx"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period put surface price @ strike = prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"241"}),(0,t.jsx)(r.td,{children:"prvCDe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface call delta @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"244"}),(0,t.jsx)(r.td,{children:"prvCGa"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface call gamma @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"247"}),(0,t.jsx)(r.td,{children:"prvCTh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface call theta @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"250"}),(0,t.jsx)(r.td,{children:"prvCVe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface call vega @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"253"}),(0,t.jsx)(r.td,{children:"prvCRo"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface call rho @ (cAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"256"}),(0,t.jsx)(r.td,{children:"prvPDe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface put delta @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"259"}),(0,t.jsx)(r.td,{children:"prvPGa"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface put gamma @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"262"}),(0,t.jsx)(r.td,{children:"prvPTh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface put theta @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"265"}),(0,t.jsx)(r.td,{children:"prvPVe"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface put vega @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"268"}),(0,t.jsx)(r.td,{children:"prvPRo"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period surface put rho @ (pAtm, uMark, years, sdiv, rate, ddiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"271"}),(0,t.jsx)(r.td,{children:"prvXXCnt"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"prior period number of valid surface strikes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"274"}),(0,t.jsx)(r.td,{children:"prvPWidth"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period minimum mkt premium width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"277"}),(0,t.jsx)(r.td,{children:"prvVWidth"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prior period minimum mkt volatility width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"280"}),(0,t.jsx)(r.td,{children:"cOptPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"call option pnl (fixCOpx - prvCOpx)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"283"}),(0,t.jsx)(r.td,{children:"pOptPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"put option pnl (fixPOpx - prvPOpx)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"286"}),(0,t.jsx)(r.td,{children:"dUPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"uMark - prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"289"}),(0,t.jsx)(r.td,{children:"cDePnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvCDe * dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"292"}),(0,t.jsx)(r.td,{children:"cGaPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"0.5 * prvCGa * dUPrc * dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"295"}),(0,t.jsx)(r.td,{children:"cThPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvCTh * (years - prvYears)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"298"}),(0,t.jsx)(r.td,{children:"cVePnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvCVe * (sVol - prvSVol)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"301"}),(0,t.jsx)(r.td,{children:"cRoPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvCRo * (sdiv - prvSDiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"304"}),(0,t.jsx)(r.td,{children:"pDePnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvPDe * dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"307"}),(0,t.jsx)(r.td,{children:"pGaPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"0.5 * prvPGa * dUPrc * dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"310"}),(0,t.jsx)(r.td,{children:"pThPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvPTh * (years - prvYears)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"313"}),(0,t.jsx)(r.td,{children:"pVePnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvPVe * (sVol - prvSVol)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"316"}),(0,t.jsx)(r.td,{children:"pRoPnL"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"prvPRo * (sdiv - prvSDiv)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"319"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>l,x:()=>c});var t=d(96540);const s={},i=t.createContext(s);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);