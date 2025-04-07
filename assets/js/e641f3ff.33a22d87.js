"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["87399"],{57928:function(e,d,n){n.r(d),n.d(d,{default:()=>j,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/LiveImpliedQuoteAdj","title":"LiveImpliedQuoteAdj","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/LiveImpliedQuoteAdj.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"LiveImpliedQuote","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/"},"next":{"title":"LiveRateCurve","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRateCurve/"}}'),i=n("52676"),s=n("91503");let r={},l=void 0,c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){let d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.p,{children:(0,i.jsx)(d.a,{href:"../../../Topics/analytics/LiveImpliedQuoteAdj",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Attribute"}),(0,i.jsx)(d.th,{children:"Value"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"Topic"}),(0,i.jsx)(d.td,{children:"1000-analytics"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"MLink Token"}),(0,i.jsx)(d.td,{children:"OptAnalytics"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"Product"}),(0,i.jsx)(d.td,{children:"SRAnalytics"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"accessType"}),(0,i.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Field"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Key"}),(0,i.jsx)(d.th,{children:"Default Value"}),(0,i.jsx)(d.th,{children:"Comment"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_at"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(d.td,{children:"PRI"}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_ts"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(d.td,{children:"PRI"}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_tk"}),(0,i.jsx)(d.td,{children:"VARCHAR(12)"}),(0,i.jsx)(d.td,{children:"PRI"}),(0,i.jsx)(d.td,{children:"''"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_yr"}),(0,i.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(d.td,{children:"PRI, SEC"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_mn"}),(0,i.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(d.td,{children:"PRI, SEC"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_dy"}),(0,i.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(d.td,{children:"PRI, SEC"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_xx"}),(0,i.jsx)(d.td,{children:"DOUBLE"}),(0,i.jsx)(d.td,{children:"PRI"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_cp"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,i.jsx)(d.td,{children:"PRI"}),(0,i.jsx)(d.td,{children:"'Call'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ticker_at"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ticker_ts"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ticker_tk"}),(0,i.jsx)(d.td,{children:"VARCHAR(12)"}),(0,i.jsx)(d.td,{children:"SEC"}),(0,i.jsx)(d.td,{children:"''"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"uprc"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier price usually midmarket"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"years"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"years to expiration"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"rate"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"interest rate"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"sdiv"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"sdiv stock dividend rate"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ddiv"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"cumulative discrete dividend values"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"obid"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option bid price"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"oask"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option ask price"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"obiv"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"volatility implied by option bid price"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"oaiv"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"volatility implied by option ask price"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"satm"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option atm volatility from SR surface"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"smny"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option moneyness"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"svol"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option surface volatility"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"sprc"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option surface price"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"smrk"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option surface price wbounding rules"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"veSlope"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"veSlope  dVol  dUprc assuming vol  xAxis  0 remains constanthedgeDelta  de  ve  100  veSlope if hedging with this assumption"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"de"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option delta"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ga"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option gamma"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"th"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option theta"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ve"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option vega"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"va"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option vanna"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"vo"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option volga"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ro"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option rho"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ph"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option phi"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"deDecay"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"option delta decay"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"up50"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier up 50 slide"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"dn50"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier dn 50 slide"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"up15"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier up 15 slide"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"dn15"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier dn 15 slide"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"up06"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier up 6 slide"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"dn08"}),(0,i.jsx)(d.td,{children:"FLOAT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"underlier dn 8 slide"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"synSpot"}),(0,i.jsx)(d.td,{children:"DOUBLE"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"Synthetic spot price marketderived spot when the underlying is not a traded instrument"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"priceType"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/CalcPriceType",children:"enum - CalcPriceType"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{children:"Equity or Future Black76 pricing framework  if Future then uPrc is the forwardUPrc and sdiv  rate"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"calcErr"}),(0,i.jsx)(d.td,{children:"VARCHAR(24)"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"''"}),(0,i.jsx)(d.td,{children:"option pricing error if any"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"calcSource"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/CalcSource",children:"enum - CalcSource"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"uPrcAdjResult"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"../../../Enums/AdjResult",children:"enum - AdjResult"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"'None'"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"timestamp"}),(0,i.jsx)(d.td,{children:"DATETIME(6)"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(d.td,{})]})]})]}),"\n",(0,i.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Field"}),(0,i.jsx)(d.th,{children:"Sequence"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_tk"}),(0,i.jsx)(d.td,{children:"1"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_yr"}),(0,i.jsx)(d.td,{children:"2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_mn"}),(0,i.jsx)(d.td,{children:"3"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_dy"}),(0,i.jsx)(d.td,{children:"4"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_xx"}),(0,i.jsx)(d.td,{children:"5"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_cp"}),(0,i.jsx)(d.td,{children:"6"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_at"}),(0,i.jsx)(d.td,{children:"7"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_ts"}),(0,i.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,i.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Field"}),(0,i.jsx)(d.th,{children:"Sequence"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_yr"}),(0,i.jsx)(d.td,{children:"1"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_mn"}),(0,i.jsx)(d.td,{children:"2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"okey_dy"}),(0,i.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,i.jsx)(d.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Field"}),(0,i.jsx)(d.th,{children:"Sequence"})]})}),(0,i.jsx)(d.tbody,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"ticker_tk"}),(0,i.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,i.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveImpliedQuoteAdj` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `uprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier price (usually mid-market)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'interest rate',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sdiv (stock dividend) rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative discrete dividend values',\n    `obid` FLOAT NOT NULL DEFAULT 0 COMMENT 'option bid price',\n    `oask` FLOAT NOT NULL DEFAULT 0 COMMENT 'option ask price',\n    `obiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `oaiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `satm` FLOAT NOT NULL DEFAULT 0 COMMENT 'option atm volatility (from SR surface)',\n    `smny` FLOAT NOT NULL DEFAULT 0 COMMENT 'option moneyness',\n    `svol` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface volatility',\n    `sprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface price',\n    `smrk` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface price (w/bounding rules)',\n    `veSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta',\n    `ga` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma',\n    `th` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta',\n    `ve` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega',\n    `va` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vanna',\n    `vo` FLOAT NOT NULL DEFAULT 0 COMMENT 'option volga',\n    `ro` FLOAT NOT NULL DEFAULT 0 COMMENT 'option rho',\n    `ph` FLOAT NOT NULL DEFAULT 0 COMMENT 'option phi',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta decay',\n    `up50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 50% slide',\n    `dn50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 50% slide',\n    `up15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 15% slide',\n    `dn15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 15% slide',\n    `up06` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 6% slide',\n    `dn08` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 8% slide',\n    `synSpot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Synthetic spot price (market-derived spot when the underlying is not a traded instrument)',\n    `priceType` ENUM('None','Equity','Future') NOT NULL DEFAULT 'None' COMMENT 'Equity or Future (Black76) pricing framework;  if Future then uPrc is the forwardUPrc and sdiv = rate',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'option pricing error (if any)',\n    `calcSource` ENUM('None','Tick','Loop') NOT NULL DEFAULT 'None',\n    `uPrcAdjResult` ENUM('None','OK','InvalidUPrc','UPrcRangeErr','OtherError','NullOption','StaleUPrc') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `uprc`,\n    `years`,\n    `rate`,\n    `sdiv`,\n    `ddiv`,\n    `obid`,\n    `oask`,\n    `obiv`,\n    `oaiv`,\n    `satm`,\n    `smny`,\n    `svol`,\n    `sprc`,\n    `smrk`,\n    `veSlope`,\n    `de`,\n    `ga`,\n    `th`,\n    `ve`,\n    `va`,\n    `vo`,\n    `ro`,\n    `ph`,\n    `deDecay`,\n    `up50`,\n    `dn50`,\n    `up15`,\n    `dn15`,\n    `up06`,\n    `dn08`,\n    `synSpot`,\n    `priceType`,\n    `calcErr`,\n    `calcSource`,\n    `uPrcAdjResult`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveImpliedQuoteAdj`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,i.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveImpliedQuoteAdj' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){let{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},91503:function(e,d,n){n.d(d,{Z:function(){return l},a:function(){return r}});var t=n(75271);let i={},s=t.createContext(i);function r(e){let d=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);