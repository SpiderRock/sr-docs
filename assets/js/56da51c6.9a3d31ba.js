"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50802],{82952:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>x});var n=i(74848),t=i(28453);const s={},r=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedPair/OptionImpliedPair",title:"OptionImpliedPair",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedPair/OptionImpliedPair.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedPair",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedPair/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedPair/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionCloseMark",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCloseMark/"},next:{title:"OptionImpliedVol",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"../../../Topics/srse-calculators/OptionImpliedPair",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(d.p,{children:"This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market."}),"\n",(0,n.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Topic"}),(0,n.jsx)(d.td,{children:"5030-srse-calculators"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MLink Token"}),(0,n.jsx)(d.td,{children:"SystemData"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Product"}),(0,n.jsx)(d.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"accessType"}),(0,n.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Key"}),(0,n.jsx)(d.th,{children:"Default Value"}),(0,n.jsx)(d.th,{children:"Comment"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(d.td,{children:"PRI, SEC"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_xx"}),(0,n.jsx)(d.td,{children:"DOUBLE"}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_cp"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,n.jsx)(d.td,{children:"PRI"}),(0,n.jsx)(d.td,{children:"'Call'"}),(0,n.jsx)(d.td,{children:"cp  Call"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_at"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_ts"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_tk"}),(0,n.jsx)(d.td,{children:"VARCHAR(12)"}),(0,n.jsx)(d.td,{children:"SEC"}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"uprc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"underlier price usually midmarket"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"years"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"years to expiration"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"rate"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"interest rate"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sdiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"sdiv stock dividend rate"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ddiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"cumulative discrete dividend values"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"symbolRatio"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"effUPrc  uprc  symbolRatio"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"strikeRatio"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"effStrike  okeyxx  strikeRatio"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cashOnExercise"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"cash on exercise multihedge only"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"xAxis"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option xAxis moneyness"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"axisFUPrc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option xAxis Fwd UPrc"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"axisVolRT"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option xAxis moneyness volatility x sqrtyears"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cbid"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"call option bid price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cask"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"call option ask price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cbiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility implied by option bid price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"caiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility implied by option ask price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"catm"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"call option atm volatility from SR surface"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cvol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"call option surface volatility"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cprc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"call option surface price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cde"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option delta from cvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cga"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option gamma from cvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cth"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option theta from cvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cve"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option vega from cvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cro"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option rho from cvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cph"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option phi from cvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pbid"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"put option bid price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pask"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"put option ask price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pbiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility implied by option bid price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"paiv"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"volatility implied by option ask price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"patm"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"put option atm volatility from SR surface"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pvol"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"put option surface volatility"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pprc"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"put option surface price"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pde"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option delta from pvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pga"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option gamma from pvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pth"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option theta from pvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pve"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option vega from pvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pro"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option rho from pvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"pph"}),(0,n.jsx)(d.td,{children:"FLOAT"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"0"}),(0,n.jsx)(d.td,{children:"option phi from pvol"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"calcErr"}),(0,n.jsx)(d.td,{children:"VARCHAR(24)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"''"}),(0,n.jsx)(d.td,{children:"option pricing error if any"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"calcSource"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"../../../Enums/CalcSource",children:"enum - CalcSource"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'None'"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"timestamp"}),(0,n.jsx)(d.td,{children:"DATETIME(6)"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_tk"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"3"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_xx"}),(0,n.jsx)(d.td,{children:"5"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_cp"}),(0,n.jsx)(d.td,{children:"6"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_at"}),(0,n.jsx)(d.td,{children:"7"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_ts"}),(0,n.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_yr"}),(0,n.jsx)(d.td,{children:"1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_mn"}),(0,n.jsx)(d.td,{children:"2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"okey_dy"}),(0,n.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Sequence"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ticker_tk"}),(0,n.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionImpliedPair` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'cp = Call',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'cp = Call',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'cp = Call',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cp = Call',\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cp = Call',\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cp = Call',\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'cp = Call',\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'cp = Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `uprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier price (usually mid-market)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'interest rate',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sdiv (stock dividend) rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative discrete dividend values',\n    `symbolRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'effUPrc = uprc * symbolRatio',\n    `strikeRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'effStrike = okey_xx * strikeRatio',\n    `cashOnExercise` FLOAT NOT NULL DEFAULT 0 COMMENT 'cash on exercise (multihedge only)',\n    `xAxis` FLOAT NOT NULL DEFAULT 0 COMMENT 'option xAxis moneyness',\n    `axisFUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option xAxis Fwd UPrc',\n    `axisVolRT` FLOAT NOT NULL DEFAULT 0 COMMENT 'option xAxis moneyness volatility x sqrt(years)',\n    `cbid` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option bid price',\n    `cask` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option ask price',\n    `cbiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `caiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `catm` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option atm volatility (from SR surface)',\n    `cvol` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option surface volatility',\n    `cprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option surface price',\n    `cde` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta (from cvol)',\n    `cga` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma (from cvol)',\n    `cth` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta (from cvol)',\n    `cve` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega (from cvol)',\n    `cro` FLOAT NOT NULL DEFAULT 0 COMMENT 'option rho (from cvol)',\n    `cph` FLOAT NOT NULL DEFAULT 0 COMMENT 'option phi (from cvol)',\n    `pbid` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option bid price',\n    `pask` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option ask price',\n    `pbiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `paiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `patm` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option atm volatility (from SR surface)',\n    `pvol` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option surface volatility',\n    `pprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option surface price',\n    `pde` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta (from pvol)',\n    `pga` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma (from pvol)',\n    `pth` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta (from pvol)',\n    `pve` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega (from pvol)',\n    `pro` FLOAT NOT NULL DEFAULT 0 COMMENT 'option rho (from pvol)',\n    `pph` FLOAT NOT NULL DEFAULT 0 COMMENT 'option phi (from pvol)',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'option pricing error (if any)',\n    `calcSource` ENUM('None','Tick','Loop') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market.';\n\n"})}),"\n",(0,n.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `uprc`,\n    `years`,\n    `rate`,\n    `sdiv`,\n    `ddiv`,\n    `symbolRatio`,\n    `strikeRatio`,\n    `cashOnExercise`,\n    `xAxis`,\n    `axisFUPrc`,\n    `axisVolRT`,\n    `cbid`,\n    `cask`,\n    `cbiv`,\n    `caiv`,\n    `catm`,\n    `cvol`,\n    `cprc`,\n    `cde`,\n    `cga`,\n    `cth`,\n    `cve`,\n    `cro`,\n    `cph`,\n    `pbid`,\n    `pask`,\n    `pbiv`,\n    `paiv`,\n    `patm`,\n    `pvol`,\n    `pprc`,\n    `pde`,\n    `pga`,\n    `pth`,\n    `pve`,\n    `pro`,\n    `pph`,\n    `calcErr`,\n    `calcSource`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgOptionImpliedPair`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,n.jsx)(d.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptionImpliedPair' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,d,i)=>{i.d(d,{R:()=>r,x:()=>l});var n=i(96540);const t={},s=n.createContext(t);function r(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);