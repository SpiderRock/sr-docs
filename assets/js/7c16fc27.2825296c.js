"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6800],{42918:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=n(74848),i=n(28453);const r={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/LiveImpliedQuote",title:"LiveImpliedQuote",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/LiveImpliedQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"LiveIVarSwapFixedTerm",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/"},next:{title:"LiveImpliedQuoteAdj",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:(0,t.jsx)(d.a,{href:"../../../Topics/analytics/LiveImpliedQuote",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(d.p,{children:"CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.\\nNote that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.\\nIf you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.\\nIf you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."}),"\n",(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"1000-analytics"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"OptAnalytics"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Product"}),(0,t.jsx)(d.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accessType"}),(0,t.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Key"}),(0,t.jsx)(d.th,{children:"Default Value"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_at"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_ts"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_tk"}),(0,t.jsx)(d.td,{children:"VARCHAR(12)"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"''"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_yr"}),(0,t.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(d.td,{children:"PRI, SEC"}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_mn"}),(0,t.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(d.td,{children:"PRI, SEC"}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_dy"}),(0,t.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(d.td,{children:"PRI, SEC"}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_xx"}),(0,t.jsx)(d.td,{children:"DOUBLE"}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_cp"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,t.jsx)(d.td,{children:"PRI"}),(0,t.jsx)(d.td,{children:"'Call'"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_at"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_ts"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_tk"}),(0,t.jsx)(d.td,{children:"VARCHAR(12)"}),(0,t.jsx)(d.td,{children:"SEC"}),(0,t.jsx)(d.td,{children:"''"}),(0,t.jsx)(d.td,{children:"SR Ticker that this option rolls up to"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uPrc"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier price usually midmarket"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uOff"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"implied underlier price offset if any"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"years"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"years to expiration"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"xAxis"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option moneyness"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rate"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"discount rate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sdiv"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"sdiv continuous stock dividend rate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ddiv"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"cumulative discrete dividend value"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"oBid"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option bid price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"oAsk"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option ask price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"oBidIv"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"volatility implied by option bid price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"oAskIv"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"volatility implied by option ask price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"atmVol"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option atm volatility from SR surface"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sVol"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option surface volatility SR surface fit model"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sPrc"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option surface price ie PRICEsVol uPrc  uOff years rate sDiv discrete dividends if any"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sMark"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option surface mark option surface price wbounding rules always between bidask"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"veSlope"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"veSlope  dVol  dUprc assuming vol  xAxis  0 remains constant hedgeDelta  de  ve  100  veSlope if hedging with this assumption"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"de"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ga"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option gamma"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"th"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option theta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ve"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"va"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option vanna"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vo"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option volga"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ro"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option rho"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ph"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option phi"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"deDecay"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"option delta decay"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"up50"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier up 50 slide"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dn50"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier dn 50 slide"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"up15"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier up 15 slide"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dn15"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier dn 15 slide"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"up06"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier up 6 slide"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dn08"}),(0,t.jsx)(d.td,{children:"FLOAT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"underlier dn 8 slide"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"synSpot"}),(0,t.jsx)(d.td,{children:"DOUBLE"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"Synthetic spot price marketderived spot when the underlying is not a traded instrument"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"priceType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/CalcPriceType",children:"enum - CalcPriceType"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{children:"Equity or Future Black76 pricing framework  if Future then uPrc is the forwardUPrc and sdiv  rate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"calcErr"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ImpliedQuoteError",children:"enum - ImpliedQuoteError"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{children:"option pricing calculation error if any"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"calcSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/CalcSource",children:"enum - CalcSource"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"'None'"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"srcTimestamp"}),(0,t.jsx)(d.td,{children:"BIGINT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"OPRA source timestamp nanoseconds since epoch will be zero if calcSource  Tick"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"netTimestamp"}),(0,t.jsx)(d.td,{children:"BIGINT"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"0"}),(0,t.jsx)(d.td,{children:"SR timestamp  publish time"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DATETIME(6)"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Sequence"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_tk"}),(0,t.jsx)(d.td,{children:"1"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_yr"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_mn"}),(0,t.jsx)(d.td,{children:"3"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_dy"}),(0,t.jsx)(d.td,{children:"4"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_xx"}),(0,t.jsx)(d.td,{children:"5"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_cp"}),(0,t.jsx)(d.td,{children:"6"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_at"}),(0,t.jsx)(d.td,{children:"7"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_ts"}),(0,t.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Sequence"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_yr"}),(0,t.jsx)(d.td,{children:"1"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_mn"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey_dy"}),(0,t.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Sequence"})]})}),(0,t.jsx)(d.tbody,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker_tk"}),(0,t.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,t.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveImpliedQuote` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Ticker that this option rolls up to',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Ticker that this option rolls up to',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Ticker that this option rolls up to',\n    `uPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier price (usually mid-market)',\n    `uOff` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied underlier price offset (if any)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `xAxis` FLOAT NOT NULL DEFAULT 0 COMMENT 'option moneyness',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'discount rate',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sdiv (continuous stock dividend) rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative discrete dividend value',\n    `oBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'option bid price',\n    `oAsk` FLOAT NOT NULL DEFAULT 0 COMMENT 'option ask price',\n    `oBidIv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `oAskIv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `atmVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'option atm volatility (from SR surface)',\n    `sVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface volatility (SR surface fit model)',\n    `sPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface price; ie. PRICE(sVol, uPrc + uOff, years, rate, sDiv, {discrete dividends, if any})',\n    `sMark` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface mark (option surface price w/bounding rules; always between bid/ask)',\n    `veSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant); hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta',\n    `ga` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma',\n    `th` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta',\n    `ve` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega',\n    `va` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vanna',\n    `vo` FLOAT NOT NULL DEFAULT 0 COMMENT 'option volga',\n    `ro` FLOAT NOT NULL DEFAULT 0 COMMENT 'option rho',\n    `ph` FLOAT NOT NULL DEFAULT 0 COMMENT 'option phi',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta decay',\n    `up50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 50% slide',\n    `dn50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 50% slide',\n    `up15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 15% slide',\n    `dn15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 15% slide',\n    `up06` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 6% slide',\n    `dn08` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 8% slide',\n    `synSpot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Synthetic spot price (market-derived spot when the underlying is not a traded instrument)',\n    `priceType` ENUM('None','Equity','Future') NOT NULL DEFAULT 'None' COMMENT 'Equity or Future (Black76) pricing framework;  if Future then uPrc is the forwardUPrc and sdiv = rate',\n    `calcErr` ENUM('None','InvalidUPrc','InvalidSVol','PricingError') NOT NULL DEFAULT 'None' COMMENT 'option pricing calculation error (if any)',\n    `calcSource` ENUM('None','Tick','Loop') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'OPRA source timestamp (nanoseconds since epoch); will be zero if calcSource != Tick',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR timestamp @ publish time',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.\\nNote that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.\\nIf you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and \\'adjust\\' the values in this table to the new underlier value.\\nIf you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned.';\n\n"})}),"\n",(0,t.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `uPrc`,\n    `uOff`,\n    `years`,\n    `xAxis`,\n    `rate`,\n    `sdiv`,\n    `ddiv`,\n    `oBid`,\n    `oAsk`,\n    `oBidIv`,\n    `oAskIv`,\n    `atmVol`,\n    `sVol`,\n    `sPrc`,\n    `sMark`,\n    `veSlope`,\n    `de`,\n    `ga`,\n    `th`,\n    `ve`,\n    `va`,\n    `vo`,\n    `ro`,\n    `ph`,\n    `deDecay`,\n    `up50`,\n    `dn50`,\n    `up15`,\n    `dn15`,\n    `up06`,\n    `dn08`,\n    `synSpot`,\n    `priceType`,\n    `calcErr`,\n    `calcSource`,\n    `srcTimestamp`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveImpliedQuote`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,t.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveImpliedQuote' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>s,x:()=>c});var t=n(96540);const i={},r=t.createContext(i);function s(e){const d=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:d},e.children)}}}]);