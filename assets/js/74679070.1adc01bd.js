"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23017],{1424:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var d=s(74848),r=s(28453);const i={title:"LiveSurfaceAtm"},n="Schema: LiveSurfaceAtm (ID: 1030)",l={id:"Schema/Topics/analytics/LiveSurfaceAtm",title:"LiveSurfaceAtm",description:"META DATA",source:"@site/docs/Schema/Topics/1000-analytics/LiveSurfaceAtm.md",sourceDirName:"Schema/Topics/1000-analytics",slug:"/Schema/Topics/analytics/LiveSurfaceAtm",permalink:"/docs/Schema/Topics/analytics/LiveSurfaceAtm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveSurfaceAtm"},sidebar:"schemaSidebar",previous:{title:"LiveRevConQuote",permalink:"/docs/Schema/Topics/analytics/LiveRevConQuote"},next:{title:"LiveSurfaceCurve",permalink:"/docs/Schema/Topics/analytics/LiveSurfaceCurve"}},c={},h=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-livesurfaceatm-id-1030",children:["Schema: LiveSurfaceAtm ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 1030)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"analytics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ekey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmCen"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"atm vol (xAxis = 0) (eMove/earnCntAdj censored)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmCenHist"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"censored (earnings events removed) historical realized volatility.  Trailing periods is 2x forward time to expiration.  From HistoricalVolatility(windowType=hlCen).mv_nnn"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmCenMove"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"fixed strike atm (censored) move from prior period"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmMove"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"fixed strike atm move from prior period"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmPhi"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"surface phi @ xAxis = 0"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmVega"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"surface vega @ xAxis = 0"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"atm vol (xAxis = 0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"atmVolHist"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"historical realized volatility (includes eMoveHist x earnCntAdj adjustment).  Note that this is the default atmVol if no implied markets existed previous day."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"axisFUPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"axis FwdUPrc (fwd underlying price used to compute xAxis)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"axisVolRT"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"axis volatility x sqrt(years) (used to compute xAxis) [usually 4m atm vol]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cAskMiss"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"number of call ask violations (surface outside the market)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cBidMiss"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"number of call bid violations (surface outside the market)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cCnt"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"num call strikes"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"counter"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"message counter - number of surface fits today"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ddiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"present value of discrete dividend stream"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eMove"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"implied earnings move (from LiveSurfaceTerm)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eMoveHist"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"historical earnings move (avg of trailing 8 moves). From StockEarningsCalendar.eMoveHist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"earnCnt"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"number of qualifying earnings events prior to expiration [can be fractional] (from StockEarningsCalendar)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"earnCntAdj"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"number of qualifying earnings events prior to expiration [adjusted] (from StockEarningsCalendar + LiveSurfaceTerm)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"exType"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"exercise type of the options used to compute this surface"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitAvgAbsErr"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"mean square error (mid-market values)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitAvgErr"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"surface fit R2 (mid-market values)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrAsk"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"ask of the option with the largest fit error"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrBid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"bid of the option with the largest fit error"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrCP"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum : CallPut"})}),(0,d.jsx)(t.td,{children:"okey_cp of the option with the largest fit error in this expiration"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrDe"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"delta of fixErrXX"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"surface prc of the option with the largest fit error"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"surface vol of the option with the largest fit error"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitErrXX"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"okey_xx of the option with the largest fit error in this expiration"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fitMaxPrcErr"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"worst case surface premium violation"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{children:"future that this option expiration month written on (if any)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"gridType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/GridType",children:"enum : GridType"})}),(0,d.jsx)(t.td,{children:"gridType defines D11 - U12 xAxis points + spline type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marketSession"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarketSession",children:"enum : MarketSession"})}),(0,d.jsx)(t.td,{children:"market session this surface is from"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxAtmVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"maximum estimated atm vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxCurvValue"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"maximum curvature (2nd derivative) of skew curve"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxCurvXAxis"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"xAxis of maximum curvature point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxXAxis"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"maximum xAxis value; xAxis values to the right extrapolate horizontally"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minAtmVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"minimum estimated atm vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minCurvValue"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"minimum curvature (2nd derivative) of skew curve (can be negative if curve is not strictly convex)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minCurvXAxis"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"xAxis of minimum curvature point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minXAxis"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"minimum xAxis value; xAxis values to the left extrapolate horizontally"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modelType"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"option pricing model used for price calcs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"moneynessType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MoneynessType",children:"enum : MoneynessType"})}),(0,d.jsx)(t.td,{children:"moneyness (xAxis) convention"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pAskMiss"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"number of put ask violations"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pBidMiss"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"number of put bid violations"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pCnt"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{children:"num put strikes"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"priceQuoteType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PriceQuoteType",children:"enum : PriceQuoteType"})}),(0,d.jsx)(t.td,{children:"Price or Vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pwidth"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"minimum mkt premium width"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"interest rate"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"stock dividend (borrow rate)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivCounter"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"sdiv surface fit counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivD1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv @ D1 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivD2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv @ D2 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivD3"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv @ D3 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivU1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv @ U1 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivU2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv @ U2 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdivU3"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sdiv @ U3 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewC0"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"central value (@xAxis = 0) [usually zero]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewCounter"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"skew surface fit counter"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D1 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D10 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD11"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D11 point (volatility skew curve)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D2 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD3"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D3 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD4"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D4 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD5"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D5 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD6"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D6 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD7"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D7 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD8"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D8 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewD9"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ D9 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewMinX"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"xAxis = (effStrike / effAxisFUPrc - 1.0) / axisVolRT; effStrike = strike * strikeRatio; effAxisFUPrc = axisFUPrc * symbolRatio"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewMinY"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skewMinX / skewMinY are the skew curve minimum point (usually a positive x value and a negative y value)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU1"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U1 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU10"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U10 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU11"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U11 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU2"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U2 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU3"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U3 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU4"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U4 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU5"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U5 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU6"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U6 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU7"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U7 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU8"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U8 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skewU9"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"skew @ U9 point"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"slope"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"volatility surface slope (dVol / dXAxis) @ ATM (xAxis=0)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"surfaceResult"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SurfaceResult",children:"enum : SurfaceResult"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{children:"underlying stock key that this option expiration attaches to"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeableStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TradeableStatus",children:"enum : TradeableStatus"})}),(0,d.jsx)(t.td,{children:"indicates whether the surface is currently tradeable or not (all server surface integrity checks pass)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uAsk"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"underlier ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uBid"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"underlier bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"underlierMode"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/UnderlierMode",children:"enum : UnderlierMode"})}),(0,d.jsx)(t.td,{children:"underlier pricing mode (None=use spot/stock market; FrontMonth=use front month future market * uPrcRatio; Actual = use actual underlier future market)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"varSwapFV"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"variance swap fair value (estimated by numerical integration over OTM price surface)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwidth"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"minimum mkt volatility width"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"years"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"time to expiration (in years)"})]})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>l});var d=s(96540);const r={},i=d.createContext(r);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);