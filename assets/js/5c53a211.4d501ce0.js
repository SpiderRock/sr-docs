"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25040],{45422:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=t(74848),s=t(28453);const r={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol/OptionTheoVol",title:"OptionTheoVol",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol/OptionTheoVol.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRTheo",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTheo/"},next:{title:"SROptTheoRecord",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTheo/SROptTheoRecord/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"../../../Topics/srse-calculators/OptionTheoVol",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(d.p,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."}),"\n",(0,n.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Topic"}),(0,n.jsx)(d.td,{children:"5030-srse-calculators"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MLink Token"}),(0,n.jsx)(d.td,{children:"ClientTheo"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Product"}),(0,n.jsx)(d.td,{children:"SRTheo"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"accessType"}),(0,n.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Key"}),(0,n.jsx)(d.th,{children:"Default Value"}),(0,n.jsx)(d.th,{children:"Comment"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_xx"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_cp"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'Call'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"theoModel"}),(0,n.jsx)(d.td,{children:"VARCHAR(16)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{children:"required in where clause theo model must be associated with an accnt that is visible"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"clientFirmOut"}),(0,n.jsx)(d.td,{children:"VARCHAR(16)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"years"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility years to expiration variable time metric SR holiday calendar"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{children:"underlier ticker"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{children:"underlier ticker"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{children:"SEC"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{children:"underlier ticker"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"uprc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"underlier price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ubid"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"underlier bid"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"uask"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"underlier ask"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"obid"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option market bid"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oask"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option market ask"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tvol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo vol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tvolBOpn"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo buyopen vol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tvolSOpn"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo sellopen vol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tprc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo vol price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tbPrc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo buy open price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tsPrc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo sell open price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tbClsPrc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo buy close price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tsClsPrc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo sell close price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"veSlope"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"veSlope  dVol  dUprc assuming vol  xAxis  0 remains constanthedgeDelta  de  ve  100  veSlope if hedging with this assumption"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"de"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"implied greeks from theo surface"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ga"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"th"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ve"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"vo"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"va"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"deDecay"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ro"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ph"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sdivB"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"normalized sdiv when buying"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sdivS"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"normalized sdiv when selling"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"xAxis"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"xAxis value depends on xAxis definition in TheoExpSurface record"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tvolAtm"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"theo model volatility atm"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ivolAtm"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR Surface Volatility atm"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"svol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR Surface Volatility"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sprc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR Surface Price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sDe"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR Surface Delta"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sVe"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR Surface Vega"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"rate"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR Rate average interest rate to expiration"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sdiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR SDiv continuous dividendaccretive with discrete dividends"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ddiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"SR DDiv sum of discrete dividend amounts prior to expiration"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"err"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"theoErr"}),(0,n.jsx)(d.td,{children:"VARCHAR(24)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"calcErr"}),(0,n.jsx)(d.td,{children:"VARCHAR(24)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"theoStatus"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TheoStatus",children:"enum - TheoStatus"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'Hold'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"timestamp"}),(0,n.jsx)(d.td,{children:"DATETIME(6)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_tk"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"3"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_xx"}),(0,n.jsx)(d.td,{children:"5"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_cp"}),(0,n.jsx)(d.td,{children:"6"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_at"}),(0,n.jsx)(d.td,{children:"7"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_ts"}),(0,n.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_tk"}),(0,n.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgOptionTheoVol` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'required in where clause (theo model must be associated with an accnt that is visible)',\n    `clientFirmOut` VARCHAR(16) NOT NULL DEFAULT '',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility years to expiration (variable time metric; SR holiday calendar)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier ticker',\n    `uprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier price',\n    `ubid` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier bid',\n    `uask` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier ask',\n    `obid` FLOAT NOT NULL DEFAULT 0 COMMENT 'option market bid',\n    `oask` FLOAT NOT NULL DEFAULT 0 COMMENT 'option market ask',\n    `tvol` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo vol',\n    `tvolBOpn` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo buy/open vol',\n    `tvolSOpn` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo sell/open vol',\n    `tprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo vol price',\n    `tbPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo buy (open) price',\n    `tsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo sell (open) price',\n    `tbClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo buy (close) price',\n    `tsClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo sell (close) price',\n    `veSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied greeks (from theo surface)',\n    `ga` FLOAT NOT NULL DEFAULT 0,\n    `th` FLOAT NOT NULL DEFAULT 0,\n    `ve` FLOAT NOT NULL DEFAULT 0,\n    `vo` FLOAT NOT NULL DEFAULT 0,\n    `va` FLOAT NOT NULL DEFAULT 0,\n    `deDecay` FLOAT NOT NULL DEFAULT 0,\n    `ro` FLOAT NOT NULL DEFAULT 0,\n    `ph` FLOAT NOT NULL DEFAULT 0,\n    `sdivB` FLOAT NOT NULL DEFAULT 0 COMMENT 'normalized sdiv when buying',\n    `sdivS` FLOAT NOT NULL DEFAULT 0 COMMENT 'normalized sdiv when selling',\n    `xAxis` FLOAT NOT NULL DEFAULT 0 COMMENT 'xAxis value (depends on xAxis definition in TheoExpSurface record)',\n    `tvolAtm` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo model volatility (atm)',\n    `ivolAtm` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Volatility (atm)',\n    `svol` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Volatility',\n    `sprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Price',\n    `sDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Delta',\n    `sVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Surface Vega',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR Rate (average interest rate to expiration)',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR SDiv (continuous dividend;accretive with discrete dividends)',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR DDiv (sum of discrete dividend amounts prior to expiration)',\n    `err` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `theoErr` VARCHAR(24) NOT NULL DEFAULT '',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '',\n    `theoStatus` ENUM('Hold','Auto','Scanner','Markup','CloseOnly') NOT NULL DEFAULT 'Hold',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned.';\n\n"})}),"\n",(0,n.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `theoModel`,\n    `clientFirmOut`,\n    `years`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `uprc`,\n    `ubid`,\n    `uask`,\n    `obid`,\n    `oask`,\n    `tvol`,\n    `tvolBOpn`,\n    `tvolSOpn`,\n    `tprc`,\n    `tbPrc`,\n    `tsPrc`,\n    `tbClsPrc`,\n    `tsClsPrc`,\n    `veSlope`,\n    `de`,\n    `ga`,\n    `th`,\n    `ve`,\n    `vo`,\n    `va`,\n    `deDecay`,\n    `ro`,\n    `ph`,\n    `sdivB`,\n    `sdivS`,\n    `xAxis`,\n    `tvolAtm`,\n    `ivolAtm`,\n    `svol`,\n    `sprc`,\n    `sDe`,\n    `sVe`,\n    `rate`,\n    `sdiv`,\n    `ddiv`,\n    `err`,\n    `theoErr`,\n    `calcErr`,\n    `theoStatus`,\n    `timestamp`\nFROM `SRTheo`.`MsgOptionTheoVol`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,n.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRTheo.doccolumns WHERE TABLE_NAME='OptionTheoVol' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>l});var n=t(96540);const s={},r=n.createContext(s);function i(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);