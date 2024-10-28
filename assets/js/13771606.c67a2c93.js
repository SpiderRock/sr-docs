"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59166],{9693:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var d=t(74848),i=t(28453);const n={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol/LiveAtmVol",title:"LiveAtmVol",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol/LiveAtmVol.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"IndustryDefinition",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/IndustryDefinition/"},next:{title:"LiveBasisCurve",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveBasisCurve/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/analytics/LiveAtmVol",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"LiveAtmVol records are computed and publish continuously during trading hours"}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"1000-analytics"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"OptSurface"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRAnalytics"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlying tickerKey stock or product group that this option expiration is associated with"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlying tickerKey stock or product group that this option expiration is associated with"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"underlying tickerKey stock or product group that this option expiration is associated with"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrc"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"effective underlier price"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"years"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"SR years to expiry metric"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rate"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"average expected interest rate to expiry SR global rate curve"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ddiv"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"expected cumulative discrete dividend  amounts prior to expiration if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ddivPv"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"expected cumulative npv of discrete dividend  amounts prior to expiration SR global rate curve if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ddivSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/DDivSource",children:"enum - DDivSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"Forecast if any of the dividends prior to expiry are forecast rather than announced"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"atmVol"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"atm vol xAxis  0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"atmEMA"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"atm vol exp moving average halflife  30 seconds"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcRatio"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"uPrc  uPrcDriver  uPrcRatio when priceType  Future uPrc  uPrcDriver when priceType  Equity"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcRatioEMA"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"time smoothed implied uPrcRatio halflife  30 seconds"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sdiv"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"stock dividend borrow rate derived from callput balance when priceTypeStock rate otherwise"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sdivEMA"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"sdiv exp moving average halflife  30 seconds"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"minCPAdjVal"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"minimum cpAdjVal sdiv or uPrcRatio"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxCPAdjVal"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"minimum cpAdjVal sdiv or uPrcRatio"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cpAdjType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/CPAdjType",children:"enum - CPAdjType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"adjustment used to align callsputs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"priceType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/CalcPriceType",children:"enum - CalcPriceType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"Equity has independent uPrc and rate with sdiv derived from callput balance Future has sdiv  rate with uPrc derived from callput balance"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverKey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlier driver key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverKey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlier driver key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverKey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"underlier driver key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverKey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"underlier driver key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverKey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"underlier driver key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverKey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"underlier driver key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriverType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlier driver key type stock or future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uPrcDriver"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"underlier driver midmarket"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"axisFUPrc"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"forward underlier price  also atthemoney xAxis  0 synthetic strike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"synSpot"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Synthetic spot price marketderived spot when the underlying is not a traded instrument"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"vWidth"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"atm volatility market width estimated from near expiries"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numAtmStrikes"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeableStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TradeableStatus",children:"enum - TradeableStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"indicates whether the surface is currently tradeable or not all server surface integrity checks pass"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"surfaceResult"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SurfaceAdjResult",children:"enum - SurfaceAdjResult"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"netTimestamp"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"most recent unix timestamp all option quotes"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_tk"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_yr"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_mn"}),(0,d.jsx)(r.td,{children:"3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_dy"}),(0,d.jsx)(r.td,{children:"4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_at"}),(0,d.jsx)(r.td,{children:"5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ekey_ts"}),(0,d.jsx)(r.td,{children:"6"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveAtmVol` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlying tickerKey (stock or product group) that this option expiration is associated with',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlying tickerKey (stock or product group) that this option expiration is associated with',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlying tickerKey (stock or product group) that this option expiration is associated with',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective underlier price',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR years to expiry metric',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'average expected interest rate to expiry (SR global rate curve)',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT '(expected) cumulative discrete dividend $ amounts prior to expiration (if any)',\n    `ddivPv` FLOAT NOT NULL DEFAULT 0 COMMENT '(expected) cumulative npv of discrete dividend $ amounts prior to expiration (SR global rate curve) (if any)',\n    `ddivSource` ENUM('None','Announced','Forecast') NOT NULL DEFAULT 'None' COMMENT 'Forecast if any of the dividends prior to expiry are forecast rather than announced',\n    `atmVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm vol (xAxis = 0)',\n    `atmEMA` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm vol exp moving average (half-life ~ 30 seconds)',\n    `uPrcRatio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'uPrc = uPrcDriver * uPrcRatio (when priceType = Future); uPrc = uPrcDriver (when priceType = Equity)',\n    `uPrcRatioEMA` DOUBLE NOT NULL DEFAULT 0 COMMENT 'time smoothed implied uPrcRatio (half-life ~ 30 seconds)',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock dividend (borrow rate) (derived from call/put balance when priceType=Stock; =rate otherwise)',\n    `sdivEMA` FLOAT NOT NULL DEFAULT 0 COMMENT 'sdiv exp moving average (half-life ~ 30 seconds)',\n    `minCPAdjVal` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum cpAdjVal (sdiv or uPrcRatio)',\n    `maxCPAdjVal` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum cpAdjVal (sdiv or uPrcRatio)',\n    `cpAdjType` ENUM('None','SDiv','UPrcRatio') NOT NULL DEFAULT 'None' COMMENT 'adjustment used to align calls/puts',\n    `priceType` ENUM('None','Equity','Future') NOT NULL DEFAULT 'None' COMMENT '[Equity] has independent uPrc and rate with sdiv derived from call/put balance; [Future] has sdiv = rate with uPrc'' derived from call/put balance',\n    `uPrcDriverKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier driver key',\n    `uPrcDriverKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier driver key',\n    `uPrcDriverKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier driver key',\n    `uPrcDriverKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier driver key',\n    `uPrcDriverKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier driver key',\n    `uPrcDriverKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier driver key',\n    `uPrcDriverType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'underlier driver key type (stock or future)',\n    `uPrcDriver` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlier driver (mid-market)',\n    `axisFUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'forward underlier price;  also at-the-money (xAxis = 0) synthetic strike',\n    `synSpot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Synthetic spot price (market-derived spot when the underlying is not a traded instrument)',\n    `vWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm volatility market width (estimated from near expiries)',\n    `numAtmStrikes` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `tradeableStatus` ENUM('None','OK','SurfaceErr','LowCCnt','LowPCnt','FitPrcErr','BidAskMiss','LowCounter','DefaultSkew','SessionMiss','BaseErr','SwitchDelay','WideMktV','WideMktP','WideUMkt','UWidthEma','CCntEma','PCntEma','VWidthEma','PWidthEma','Closed') NOT NULL DEFAULT 'None' COMMENT 'indicates whether the surface is currently tradeable or not (all server surface integrity checks pass)',\n    `surfaceResult` ENUM('None','OK','Exception','AxisError','MarketClosed','NoBaseSurface','NoFutUPrc','NoStkUPrc','NullStock','UnknownFKey','ZeroYrs','MarketHalted','WideUMkt','BaseSurface','NotEnoughStrikes','KernelIVErr','KernelCPErr','ProxyError','BadAtmVol','BadSDiv','BadUOff','NoBaseAtmVol','NoDriverStock','NoDriverFuture') NOT NULL DEFAULT 'None',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'most recent unix timestamp (all option quotes)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveAtmVol records are computed and publish continuously during trading hours';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `uPrc`,\n    `years`,\n    `rate`,\n    `ddiv`,\n    `ddivPv`,\n    `ddivSource`,\n    `atmVol`,\n    `atmEMA`,\n    `uPrcRatio`,\n    `uPrcRatioEMA`,\n    `sdiv`,\n    `sdivEMA`,\n    `minCPAdjVal`,\n    `maxCPAdjVal`,\n    `cpAdjType`,\n    `priceType`,\n    `uPrcDriverKey_at`,\n    `uPrcDriverKey_ts`,\n    `uPrcDriverKey_tk`,\n    `uPrcDriverKey_yr`,\n    `uPrcDriverKey_mn`,\n    `uPrcDriverKey_dy`,\n    `uPrcDriverType`,\n    `uPrcDriver`,\n    `axisFUPrc`,\n    `synSpot`,\n    `vWidth`,\n    `numAtmStrikes`,\n    `tradeableStatus`,\n    `surfaceResult`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgLiveAtmVol`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1;\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='LiveAtmVol' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var d=t(96540);const i={},n=d.createContext(i);function s(e){const r=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(n.Provider,{value:r},e.children)}}}]);