"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[78227],{15472:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=d(74848),i=d(28453);const s={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/LiveSurfacePerf",title:"LiveSurfacePerf",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/LiveSurfacePerf.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"LiveSurfaceFixedTerm",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfaceFixedTerm/"},next:{title:"OptExpiryDefinition",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/analytics/LiveSurfacePerf",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(r.p,{children:"LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price 'resets' each day.\nLiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"1000-analytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SRMLinkAnalytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accessType"}),(0,t.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"perfSurfType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PerfSurfaceType",children:"enum - PerfSurfaceType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"Preferred surface type None Live PriorDay"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"date"}),(0,t.jsx)(r.td,{children:"VARCHAR(10)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"time"}),(0,t.jsx)(r.td,{children:"VARCHAR(8)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"SpiderRock underlier stock key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"exType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"modelType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/CalcModelType",children:"enum - CalcModelType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uMark"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"current underlier mark usually mid market"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"years"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"time to expiration in years"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rate"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"interest rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sdiv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"stock dividend borrow rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddiv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"present value of discrete dividend stream"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eventCnt"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of qualifying earnings or earnings like events between now and expiration can be fractional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"iEMove"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"implied event move if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hEMove"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"average of the trailing 12 historical quarterly earnings moves if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"strike"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"atm strike  uMark  MathExpyears  rate  ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cIVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"call surface atm vol  strike  uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pIVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"put surface atm vol  strike  uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cSOpx"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"call option price  cAtm uMark years sdiv rate ddivstrike  uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pSOpx"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"put option price  pAtm uMark years sdiv rate ddivstrike  uMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cDe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface call delta  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cGa"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface call gamma  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cTh"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface call theta  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cVe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface call vega  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cRo"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface call rho  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pDe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface put delta  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pGa"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface put gamma  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pTh"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface put theta  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pVe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface put vega  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pRo"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"surface put rho  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"xxCnt"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of valid surface strikes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pwidth"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"minimum mkt premium width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"vwidth"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"minimum mkt volatility width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fixCIVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fixed strike call surface atm vol  strike  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fixPIVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fixed strike put surface atm vol  strike  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fixCSOpx"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fixed strike call option price  fixCAtm uMark years sdiv rate ddivstrike  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fixPSOpx"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"fixed strike put option price  fixPAtm uMark years sdiv rate ddivstrike  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvUMark"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period underlier mark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvYears"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period years to expiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvSDiv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period sdiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvRate"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvDDiv"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvStrike"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period atm strike  prvUMark  MathExpyears  rate  ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvEventCnt"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of qualifying earnings or earnings like events between now and expiration can be fractional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvIEMove"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period implied event move if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCIVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface cAtm  strike  prvMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPIVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface pAtm  strike  prvMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCSOpx"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period call surface price  strike  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPSOpx"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period put surface price  strike  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCDe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface call delta  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCGa"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface call gamma  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCTh"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface call theta  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCVe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface call vega  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvCRo"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface call rho  cAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPDe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface put delta  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPGa"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface put gamma  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPTh"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface put theta  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPVe"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface put vega  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPRo"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period surface put rho  pAtm uMark years sdiv rate ddiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvXXCnt"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period number of valid surface strikes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvPWidth"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period minimum mkt premium width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prvVWidth"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prior period minimum mkt volatility width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cOptPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"call option pnl fixCOpx  prvCOpx"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pOptPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"put option pnl fixPOpx  prvPOpx"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dUPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"uMark  prvUMark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cDePnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvCDe  dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cGaPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"05  prvCGa  dUPrc  dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cThPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvCTh  years  prvYears"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cVePnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvCVe  sVol  prvSVol"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cRoPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvCRo  sdiv  prvSDiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pDePnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvPDe  dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pGaPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"05  prvPGa  dUPrc  dUPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pThPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvPTh  years  prvYears"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pVePnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvPVe  sVol  prvSVol"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pRoPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"prvPRo  sdiv  prvSDiv"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_tk"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_yr"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_mn"}),(0,t.jsx)(r.td,{children:"3"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_dy"}),(0,t.jsx)(r.td,{children:"4"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_at"}),(0,t.jsx)(r.td,{children:"5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_ts"}),(0,t.jsx)(r.td,{children:"6"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"perfSurfType"}),(0,t.jsx)(r.td,{children:"7"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveSurfacePerf` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `perfSurfType` ENUM('None','Live','PriorDay') NOT NULL DEFAULT 'None' COMMENT 'Preferred surface type: None; Live; PriorDay',\n    `date` VARCHAR(10) NOT NULL DEFAULT '',\n    `time` VARCHAR(8) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock underlier stock key',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock underlier stock key',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SpiderRock underlier stock key',\n    `exType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None',\n    `modelType` ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') NOT NULL DEFAULT 'None',\n    `uMark` FLOAT NOT NULL DEFAULT 0 COMMENT 'current underlier mark (usually mid market)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'time to expiration (in years)',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'interest rate',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock dividend (borrow rate)',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'present value of discrete dividend stream',\n    `eventCnt` FLOAT NOT NULL DEFAULT 0 COMMENT 'number of qualifying earnings (or earnings like) events (between now and expiration) [can be fractional]',\n    `iEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied event move (if any)',\n    `hEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'average of the trailing 12 historical (quarterly) earnings moves (if any)',\n    `strike` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm strike = uMark * Math.Exp(years * rate) - ddiv;',\n    `cIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'call surface atm vol @ strike = uMark',\n    `pIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'put surface atm vol @ strike = uMark',\n    `cSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option price @ (cAtm, uMark, years, sdiv, rate, ddiv);strike = uMark',\n    `pSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option price @ (pAtm, uMark, years, sdiv, rate, ddiv);strike = uMark',\n    `cDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call delta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call gamma @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call theta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call vega @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call rho @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `pDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put delta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put gamma @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put theta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put vega @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put rho @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `xxCnt` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of valid surface strikes',\n    `pwidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'minimum mkt premium width',\n    `vwidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'minimum mkt volatility width',\n    `fixCIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike call surface atm vol @ strike = prvUMark',\n    `fixPIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike put surface atm vol @ strike = prvUMark',\n    `fixCSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike call option price @ (fixCAtm, uMark, years, sdiv, rate, ddiv);strike = prvUMark',\n    `fixPSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike put option price @ (fixPAtm, uMark, years, sdiv, rate, ddiv);strike = prvUMark',\n    `prvUMark` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period underlier mark',\n    `prvYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period years to expiration',\n    `prvSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period sdiv',\n    `prvRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period rate',\n    `prvDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period ddiv',\n    `prvStrike` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period atm strike = prvUMark * Math.Exp(years * rate) - ddiv;',\n    `prvEventCnt` FLOAT NOT NULL DEFAULT 0 COMMENT 'number of qualifying earnings (or earnings like) events (between now and expiration) [can be fractional]',\n    `prvIEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period implied event move (if any)',\n    `prvCIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface cAtm @ strike = prvMark',\n    `prvPIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface pAtm @ strike = prvMark',\n    `prvCSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period call surface price @ strike = prvUMark',\n    `prvPSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period put surface price @ strike = prvUMark',\n    `prvCDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call delta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call gamma @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call theta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call vega @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call rho @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put delta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put gamma @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put theta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put vega @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put rho @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvXXCnt` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'prior period number of valid surface strikes',\n    `prvPWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period minimum mkt premium width',\n    `prvVWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period minimum mkt volatility width',\n    `cOptPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option pnl (fixCOpx - prvCOpx)',\n    `pOptPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option pnl (fixPOpx - prvPOpx)',\n    `dUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'uMark - prvUMark',\n    `cDePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCDe * dUPrc',\n    `cGaPnL` FLOAT NOT NULL DEFAULT 0 COMMENT '0.5 * prvCGa * dUPrc * dUPrc',\n    `cThPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCTh * (years - prvYears)',\n    `cVePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCVe * (sVol - prvSVol)',\n    `cRoPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCRo * (sdiv - prvSDiv)',\n    `pDePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPDe * dUPrc',\n    `pGaPnL` FLOAT NOT NULL DEFAULT 0 COMMENT '0.5 * prvPGa * dUPrc * dUPrc',\n    `pThPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPTh * (years - prvYears)',\n    `pVePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPVe * (sVol - prvSVol)',\n    `pRoPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPRo * (sdiv - prvSDiv)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`perfSurfType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price \\'resets\\' each day.\\nLiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics.';\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `perfSurfType`,\n    `date`,\n    `time`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `exType`,\n    `modelType`,\n    `uMark`,\n    `years`,\n    `rate`,\n    `sdiv`,\n    `ddiv`,\n    `eventCnt`,\n    `iEMove`,\n    `hEMove`,\n    `strike`,\n    `cIVol`,\n    `pIVol`,\n    `cSOpx`,\n    `pSOpx`,\n    `cDe`,\n    `cGa`,\n    `cTh`,\n    `cVe`,\n    `cRo`,\n    `pDe`,\n    `pGa`,\n    `pTh`,\n    `pVe`,\n    `pRo`,\n    `xxCnt`,\n    `pwidth`,\n    `vwidth`,\n    `fixCIVol`,\n    `fixPIVol`,\n    `fixCSOpx`,\n    `fixPSOpx`,\n    `prvUMark`,\n    `prvYears`,\n    `prvSDiv`,\n    `prvRate`,\n    `prvDDiv`,\n    `prvStrike`,\n    `prvEventCnt`,\n    `prvIEMove`,\n    `prvCIVol`,\n    `prvPIVol`,\n    `prvCSOpx`,\n    `prvPSOpx`,\n    `prvCDe`,\n    `prvCGa`,\n    `prvCTh`,\n    `prvCVe`,\n    `prvCRo`,\n    `prvPDe`,\n    `prvPGa`,\n    `prvPTh`,\n    `prvPVe`,\n    `prvPRo`,\n    `prvXXCnt`,\n    `prvPWidth`,\n    `prvVWidth`,\n    `cOptPnL`,\n    `pOptPnL`,\n    `dUPrc`,\n    `cDePnL`,\n    `cGaPnL`,\n    `cThPnL`,\n    `cVePnL`,\n    `cRoPnL`,\n    `pDePnL`,\n    `pGaPnL`,\n    `pThPnL`,\n    `pVePnL`,\n    `pRoPnL`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveSurfacePerf`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Live','PriorDay') */ \n    `perfSurfType` = 'None';\n"})}),"\n",(0,t.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveSurfacePerf' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>c});var t=d(96540);const i={},s=t.createContext(i);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);