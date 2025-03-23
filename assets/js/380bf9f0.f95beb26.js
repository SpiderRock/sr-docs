"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27269],{74416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var s=t(74848),i=t(28453);const d={},c=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRAuction/SRAuctionState/SRAuctionState",title:"SRAuctionState",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAuction/SRAuctionState/SRAuctionState.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAuction/SRAuctionState",slug:"/MessageSchemas/Schema/SRSE Products/SRAuction/SRAuctionState/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAuction/SRAuctionState/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRAuction",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAuction/"},next:{title:"SpdrAuctionState",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAuction/SpdrAuctionState/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (LegsList)",id:"json-block-legslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/market-data-auctions/SpdrAuctionState",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2510-market-data-auctions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"OptExchAuction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRAuction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'Call'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionExch"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"exchange handling the auction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionExDest"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"external exDest of auction usually means auction is offexchange"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"srAuctionID"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"unique SR AUCTION ID required when responding to an auction notice"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exchAuctionId"}),(0,s.jsx)(n.td,{children:"VARCHAR(20)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exchAuctionType"}),(0,s.jsx)(n.td,{children:"VARCHAR(4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isTestAuction"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"test auction should only respond from Taccnts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionEvent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AuctionEvent",children:"enum - AuctionEvent"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionShape"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/NoticeShape",children:"enum - NoticeShape"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AuctionType",children:"enum - AuctionType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"Market side clientimbalance side of auction if known responder should be opposite side"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"size available to trade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionPrice"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"auction price can be positive or negative"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isAuctionPriceValid"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionDuration"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"expected auction  imbalance action duration ms"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionStartSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"initial starting auction size"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionStartPrice"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"initial starting auction price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionStartTimestamp"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"auction start timestamp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minResponseSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"minimum size of the response order"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limitType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AuctionLimitType",children:"enum - AuctionLimitType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"client  imbalance limit type if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"firmType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"firm type of the client side of auction if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"memberMPID"}),(0,s.jsx)(n.td,{children:"VARCHAR(10)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"exchange member initiating auction if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientAccnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(10)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"client account designation if known"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otherDetail"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"additional auction detail exchange specific"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"matchedSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"size already matched may still be available to trade at a better price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numUpdates"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number of auction updates received not counting auction termination message"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numResponses"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"as reported by exchange if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bestResponseSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bestResponsePrice"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cumFillQuantity"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"as reported by exchange if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"avgFillPrice"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"marketStatus"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/MarketStatus",children:"enum - MarketStatus"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"market status preopen open closed etc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"srcTimestamp"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"source timestamp nanoseconds if available"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"netTimestamp"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"network timestamp message arrival  direct exchange gateway"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dgwTimestamp"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"network timestamp mbus message send  direct exchange gateway"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LegsList"}),(0,s.jsx)(n.td,{children:"JSON"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'JSON_ARRAY()'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionExch"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auctionExDest"}),(0,s.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"json-block-legslist",children:"JSON Block (LegsList)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"legSecKey"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/legSecKey",children:"enum - legSecKey"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"legSecType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"legSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"legRatio"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/legRatio",children:"enum - legRatio"})}),(0,s.jsx)(n.td,{children:"leg ratio 1 2 etc"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAuction`.`MsgSRAuctionState` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `auctionExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','SPHR','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'exchange handling the auction',\n    `auctionExDest` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'external exDest of auction (usually means auction is off-exchange)',\n    `srAuctionID` BIGINT NOT NULL DEFAULT 0 COMMENT 'unique SR AUCTION ID (required when responding to an auction notice)',\n    `exchAuctionId` VARCHAR(20) NOT NULL DEFAULT '',\n    `exchAuctionType` VARCHAR(4) NOT NULL DEFAULT '',\n    `isTestAuction` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'test auction (should only respond from T.accnts)',\n    `auctionEvent` ENUM('None','Start','Update','End') NOT NULL DEFAULT 'None',\n    `auctionShape` ENUM('None','Single','MLeg') NOT NULL DEFAULT 'None',\n    `auctionType` ENUM('None','Exposure','Improvement','Facilitation','Solicitation','Opening','Closing','RFQ','Block','Flash') NOT NULL DEFAULT 'None',\n    `auctionSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'Market side (client/imbalance side of auction; if known) [responder should be opposite side]',\n    `auctionSize` INT NOT NULL DEFAULT 0 COMMENT 'size available to trade',\n    `auctionPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'auction price (can be positive or negative)',\n    `isAuctionPriceValid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `auctionDuration` INT NOT NULL DEFAULT 0 COMMENT 'expected auction / imbalance action duration (ms)',\n    `auctionStartSize` INT NOT NULL DEFAULT 0 COMMENT 'initial (starting) auction size',\n    `auctionStartPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'initial (starting) auction price',\n    `auctionStartTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'auction start timestamp',\n    `minResponseSize` INT NOT NULL DEFAULT 0 COMMENT 'minimum size of the response order',\n    `limitType` ENUM('None','Market','Limit') NOT NULL DEFAULT 'None' COMMENT 'client / imbalance limit type (if available)',\n    `firmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'firm type of the client side of auction (if available)',\n    `memberMPID` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'exchange member initiating auction (if available)',\n    `clientAccnt` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'client account designation (if known)',\n    `otherDetail` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'additional auction detail (exchange specific)',\n    `matchedSize` INT NOT NULL DEFAULT 0 COMMENT 'size already matched (may still be available to trade at a better price)',\n    `numUpdates` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of auction updates received (not counting auction termination message)',\n    `numResponses` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'as reported by exchange (if available)',\n    `bestResponseSize` INT NOT NULL DEFAULT 0,\n    `bestResponsePrice` DOUBLE NOT NULL DEFAULT 0,\n    `cumFillQuantity` INT NOT NULL DEFAULT 0 COMMENT 'as reported by exchange (if available)',\n    `avgFillPrice` DOUBLE NOT NULL DEFAULT 0,\n    `marketStatus` ENUM('None','PreOpen','PreCross','Cross','Open','Closed','Halted','AfterHours') NOT NULL DEFAULT 'None' COMMENT 'market status (pre-open, open, closed, etc)',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'source timestamp (nanoseconds) if available',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'network timestamp message arrival @ direct exchange gateway',\n    `dgwTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'network timestamp mbus message send @ direct exchange gateway',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `LegsList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(LegsList)),\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`auctionExch`,`auctionExDest`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `auctionExch`,\n    `auctionExDest`,\n    `srAuctionID`,\n    `exchAuctionId`,\n    `exchAuctionType`,\n    `isTestAuction`,\n    `auctionEvent`,\n    `auctionShape`,\n    `auctionType`,\n    `auctionSide`,\n    `auctionSize`,\n    `auctionPrice`,\n    `isAuctionPriceValid`,\n    `auctionDuration`,\n    `auctionStartSize`,\n    `auctionStartPrice`,\n    `auctionStartTimestamp`,\n    `minResponseSize`,\n    `limitType`,\n    `firmType`,\n    `memberMPID`,\n    `clientAccnt`,\n    `otherDetail`,\n    `matchedSize`,\n    `numUpdates`,\n    `numResponses`,\n    `bestResponseSize`,\n    `bestResponsePrice`,\n    `cumFillQuantity`,\n    `avgFillPrice`,\n    `marketStatus`,\n    `srcTimestamp`,\n    `netTimestamp`,\n    `dgwTimestamp`,\n    `timestamp`,\n    `LegsList`\nFROM `SRAuction`.`MsgSRAuctionState`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `secKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','SPHR','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') */ \n    `auctionExch` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `auctionExDest` = 'Example_auctionExDest';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRAuction.doccolumns WHERE TABLE_NAME='SRAuctionState' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const i={},d=s.createContext(i);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);