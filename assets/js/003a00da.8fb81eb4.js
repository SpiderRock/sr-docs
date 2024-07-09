"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53622],{72216:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>x,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=d(74848),r=d(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/LiveExpirySurface",title:"LiveExpirySurface",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/LiveExpirySurface.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveExpirySurface/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"LiveAtmVol",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveAtmVol/"},next:{title:"LiveIVarSwapFixedTerm",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveIVarSwapFixedTerm/"}},x={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function j(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"../../../Topics/analytics/LiveExpirySurface",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"1000-analytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"VARCHAR(12)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SurfaceCurveType",children:"enum - SurfaceCurveType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"effective uPrc used for surface fitting"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uPrcDriver"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"underlier driver midmarket"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"years"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"time to expiration in years"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rate"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"average interest rate to expiration discount rate"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sdiv"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"stock dividend borrow rate"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"atmVol"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"atm vol xAxis  0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"atmSlope"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"volatility surface slope dVol  dXAxis  ATM xAxis0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fitRate"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"axisFUPrc"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"axis FwdUPrc fwd underlying price used to compute xAxis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"axisVolRT"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"axis volatility x sqrtyears used to compute xAxis usually the minimum curve volatility"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewMult"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"sVol  skewMult  BasisSkewFnxMult  xAxis  xShift"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"xMult"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"xShift"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC00"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"curve coeff0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC01"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"curve coeff1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC02"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC03"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC04"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC05"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC06"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC07"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC08"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC09"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC10"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC11"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC12"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC13"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC14"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC15"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC16"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC17"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC18"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC19"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC20"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC21"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC22"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC23"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC24"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC25"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC26"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC27"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skewC28"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD04"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  40"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD03"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  30"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD02"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  20"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjD01"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU01"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU02"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  20"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU03"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  30"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpAdjU04"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"xAxis  40"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tradeableStatus"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TradeableStatus",children:"enum - TradeableStatus"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"indicates whether the surface is currently tradeable or not all server surface integrity checks pass"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceResult"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SurfaceResult",children:"enum - SurfaceResult"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"marketSession"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"market session this surface is from"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:"6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfaceType"}),(0,t.jsx)(s.td,{children:"7"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveExpirySurface` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `surfaceType` ENUM('None','Live','PrevDay','Interp','Close','Test') NOT NULL DEFAULT 'None',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective uPrc used for surface fitting',\n    `uPrcDriver` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlier driver (mid-market)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'time to expiration (in years)',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'average interest rate to expiration (discount rate)',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock dividend (borrow rate)',\n    `atmVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm vol (xAxis = 0)',\n    `atmSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility surface slope (dVol / dXAxis) @ ATM (xAxis=0)',\n    `fitRate` FLOAT NOT NULL DEFAULT 0,\n    `axisFUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'axis FwdUPrc (fwd underlying price used to compute xAxis)',\n    `axisVolRT` FLOAT NOT NULL DEFAULT 0 COMMENT 'axis volatility x sqrt(years) (used to compute xAxis) [usually the minimum curve volatility]',\n    `skewMult` FLOAT NOT NULL DEFAULT 0 COMMENT 'sVol = skewMult * BasisSkewFn(xMult * xAxis - xShift)',\n    `xMult` FLOAT NOT NULL DEFAULT 0,\n    `xShift` FLOAT NOT NULL DEFAULT 0,\n    `skewC00` FLOAT NOT NULL DEFAULT 0 COMMENT 'curve coeff[0]',\n    `skewC01` FLOAT NOT NULL DEFAULT 0 COMMENT 'curve coeff[1]',\n    `skewC02` FLOAT NOT NULL DEFAULT 0,\n    `skewC03` FLOAT NOT NULL DEFAULT 0,\n    `skewC04` FLOAT NOT NULL DEFAULT 0,\n    `skewC05` FLOAT NOT NULL DEFAULT 0,\n    `skewC06` FLOAT NOT NULL DEFAULT 0,\n    `skewC07` FLOAT NOT NULL DEFAULT 0,\n    `skewC08` FLOAT NOT NULL DEFAULT 0,\n    `skewC09` FLOAT NOT NULL DEFAULT 0,\n    `skewC10` FLOAT NOT NULL DEFAULT 0,\n    `skewC11` FLOAT NOT NULL DEFAULT 0,\n    `skewC12` FLOAT NOT NULL DEFAULT 0,\n    `skewC13` FLOAT NOT NULL DEFAULT 0,\n    `skewC14` FLOAT NOT NULL DEFAULT 0,\n    `skewC15` FLOAT NOT NULL DEFAULT 0,\n    `skewC16` FLOAT NOT NULL DEFAULT 0,\n    `skewC17` FLOAT NOT NULL DEFAULT 0,\n    `skewC18` FLOAT NOT NULL DEFAULT 0,\n    `skewC19` FLOAT NOT NULL DEFAULT 0,\n    `skewC20` FLOAT NOT NULL DEFAULT 0,\n    `skewC21` FLOAT NOT NULL DEFAULT 0,\n    `skewC22` FLOAT NOT NULL DEFAULT 0,\n    `skewC23` FLOAT NOT NULL DEFAULT 0,\n    `skewC24` FLOAT NOT NULL DEFAULT 0,\n    `skewC25` FLOAT NOT NULL DEFAULT 0,\n    `skewC26` FLOAT NOT NULL DEFAULT 0,\n    `skewC27` FLOAT NOT NULL DEFAULT 0,\n    `skewC28` FLOAT NOT NULL DEFAULT 0,\n    `cpAdjD04` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = -4.0',\n    `cpAdjD03` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = -3.0',\n    `cpAdjD02` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = -2.0',\n    `cpAdjD01` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = -1.0',\n    `cpAdjU01` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = +1.0',\n    `cpAdjU02` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = +2.0',\n    `cpAdjU03` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = +3.0',\n    `cpAdjU04` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis = +4.0',\n    `tradeableStatus` ENUM('None','OK','SurfaceErr','LowCCnt','LowPCnt','FitPrcErr','BidAskMiss','LowCounter','DefaultSkew','SessionMiss','BaseErr','SwitchDelay','WideMktV','WideMktP','WideUMkt','UWidthEma','CCntEma','PCntEma','VWidthEma','PWidthEma','Closed') NOT NULL DEFAULT 'None' COMMENT 'indicates whether the surface is currently tradeable or not (all server surface integrity checks pass)',\n    `surfaceResult` ENUM('None','OK','EOD','Init','Cache','PrevDay','NullExpIdx','NoStrikes','NoBaseCurve','BadBootAtm','NoGoodStrikes','BadAtmVol','Bootstrap','NoUPrc','NoIVols','NoModelPts','ZeroYears','NoSimpleVol','OptMktNotOpn','NoBaseSurface','UPrcOffCnt','SkewKnotCnt','Exception','AxisError','CAskFit1Err','CAskFit2Err','PAskFit1Err','PAskFit2Err','CBidFit1Err','CBidFit2Err','PBidFit1Err','PBidFit2Err','CobsSampleErr','NoPrcFit','NumStrikes','CMidFitErr','PMidFitErr','StrikeCount','VolKnotCnt','InterpError','NoAtmStrike','CobsConvexFitErr','CobsMidFitErr','ProxyError','NoOptExp','Expired','NoUnderlier','NoBaseUnderlier','InvalidUPrc','ZeroUPrc','WideUMkt','StalePrcFit','NoPrcCurves','PriceError','ConvergeFail','NoUPrcRatio','NoSDivValue') NOT NULL DEFAULT 'None',\n    `marketSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None' COMMENT 'market session this surface is from',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`surfaceType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveExpirySurface (surfaceType = \\'Live\\') records are computed and publish continuously during trading hours and represent a current best implied volatility market fit.\\nSurfaceType = \\'PriorDay\\' records contain the `closing surface record from the prior trading period (usually from just before the last main session close).';\n\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>c});var t=d(96540);const r={},i=t.createContext(r);function n(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);