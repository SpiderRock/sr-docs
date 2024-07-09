"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63231],{33596:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var r=t(74848),d=t(28453);const i={},l=void 0,n={id:"MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/RFQQuoteBroadcast",title:"RFQQuoteBroadcast",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/RFQQuoteBroadcast.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ProductTradingStatusV2",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/"},next:{title:"RootDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/RootDefinition/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"JSON Block (QuoteLegsList)",id:"json-block-quotelegslist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/tool-rows/RFQQuoteBroadcast",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"6120-tool-rows"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRLive"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityID"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"exchange spread ID eg CME ProductID or ISE SecurityID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exchSource"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ExchSource",children:"enum - ExchSource"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"first ticker in leg list"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"first ticker in leg list"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"first ticker in leg list"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityDesc"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"SR constructedblank on broadcast filled by tool or SRSE proxy"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqSource"}),(0,r.jsx)(s.td,{children:"VARCHAR(255)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqStrategy"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpreadStrategy",children:"enum - SpreadStrategy"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isCoveredStrategy"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isTradeable"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqBidPrice"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"best bid buy price for this RFQSpread book"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqBidQuan"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"cumulative bid buy quantity"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqAskPrice"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"best ask sell price for this RFQSpread book"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqAskQuan"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"cumulative ask sell quantity"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqPrtPrice"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"last print price for this RFQSpread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqPrtSize"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"last print size for this RFQSpread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqPrtVolume"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"total print volume for session for this RFQSpread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rfqPrtTime"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrice"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"best bid buy price for this RFQSpread from individual legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidQuan"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"minimum bid buy quantity from individual legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrice"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"best ask sell price for this RFQSpread from individual legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askQuan"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"minimum ask sell quantity from individual legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfDelta"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"delta of all legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfVega"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"vega of all legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfPrice"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"surfPrice SR midmarket of all legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theoPrice"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"theoPrice if applicable of all legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theoPriceLo"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"theoPrice if applicable of all legs best way"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theoPriceHi"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"theoPrice if applicable of all legs worst way"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"minUPrc"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"min uPrc of all option legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxUPrc"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"max uPrc of all option legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"minYears"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"min years of all option legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxYears"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"max years of all option legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSecTypes"}),(0,r.jsx)(s.td,{children:"VARCHAR(255)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"multi value"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exchange"}),(0,r.jsx)(s.td,{children:"VARCHAR(8)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"comma separated list"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"grpNum"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"industry group number equities only"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sector"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"user defined sector code if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"riskClass"}),(0,r.jsx)(s.td,{children:"VARCHAR(8)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"risk class letter code"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"optStatus"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posVega"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posGamma"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posTheta"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posDelta"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"netTimestamp"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"PTP timestamp of most recent message update"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"filterId"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"used by tooltoolServer session to multiplex filters"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numLegs"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"QuoteLegsList"}),(0,r.jsx)(s.td,{children:"JSON"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityID"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exchSource"}),(0,r.jsx)(s.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_tk"}),(0,r.jsx)(s.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"json-block-quotelegslist",children:"JSON Block (QuoteLegsList)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legKey"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legKeyType"}),(0,r.jsx)(s.td,{children:"enum"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSecurityID"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"product securityID if available 0 otherwise can be another spread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legParentSecID"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"product securityID of parent if unrolled from a compound spread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSecurityDesc"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Security description"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legRatio"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{children:"leg ratio 1 2 etc"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSide"}),(0,r.jsx)(s.td,{children:"enum"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legBidPrice"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"leg market bid"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legBidSize"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legAskPrice"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"leg market ask"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legAskSize"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legYears"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legUPrc"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legOptMult"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SPC if equity 1 if optionfuture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legFutMult"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"1 if equity uMult if optionfuture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfVol"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"leg surface volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfDe"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfVe"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfPrice"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"surface price as of message arrival"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legTheoPrice"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"theo price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legTheoPrcB"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"theo buy price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legTheoPrcS"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"theo sell price"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgRFQQuoteBroadcast` (\n    `securityID` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange spread ID (eg. CME ProductID or ISE SecurityID)',\n    `exchSource` ENUM('None','Broker','CME','ISE','CBOE','PHLX','CBOT','NYMEX','COMEX','NMS','ICE','CFE') NOT NULL DEFAULT 'None',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'first ticker in leg list',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'first ticker in leg list',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'first ticker in leg list',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'SR constructed;blank on broadcast (filled by tool or SRSE proxy)',\n    `rfqSource` VARCHAR(255) NOT NULL DEFAULT 'Any',\n    `rfqStrategy` ENUM('None','SingleLeg','CalHoriz','CalDiag','CalSprd','EqCalSprd','ForexCalSprd','TASCalSprd','Straddle','HorizStraddle','Strip','StraddleStrip','StripMnth','EnrgStrip','BalStrip','UnbalStrip','EnrgInterCommStrip','Strangle','Vertical','Box','Bundle','BundleSprd','BFly','PackBFly','IronBFly','DblBFly','CndnlCurve','Double','Condor','IronCondor','Ratio1x2','Ratio1x3','Ratio2x3','RiskRev','XmasTree','JellyRoll','Guts','ThreeWay','ThreeWayStrdVsCall','ThreeWayStrdVsPut','RedTick','InterCommod','Pack','MnthPack','PackSprd','Crack1x1','IntRateIntCmSprd','ImpTreasIntCmSprd','ComIntCmSprd','InvoiceSwpSprd','Conversion','Horizontal','Generic') NOT NULL DEFAULT 'None',\n    `isCoveredStrategy` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `isTradeable` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `rfqBidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best bid (buy) price for this RFQ/Spread book',\n    `rfqBidQuan` INT NOT NULL DEFAULT 0 COMMENT 'cumulative bid (buy) quantity',\n    `rfqAskPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best ask (sell) price for this RFQ/Spread book',\n    `rfqAskQuan` INT NOT NULL DEFAULT 0 COMMENT 'cumulative ask (sell) quantity',\n    `rfqPrtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price for this RFQ/Spread',\n    `rfqPrtSize` INT NOT NULL DEFAULT 0 COMMENT 'last print size for this RFQ/Spread',\n    `rfqPrtVolume` INT NOT NULL DEFAULT 0 COMMENT 'total print volume (for session) for this RFQ/Spread',\n    `rfqPrtTime` BIGINT NOT NULL DEFAULT 0,\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best bid (buy) price for this RFQ/Spread from individual legs',\n    `bidQuan` INT NOT NULL DEFAULT 0 COMMENT 'minimum bid (buy) quantity from individual legs',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best ask (sell) price for this RFQ/Spread from individual legs',\n    `askQuan` INT NOT NULL DEFAULT 0 COMMENT 'minimum ask (sell) quantity from individual legs',\n    `surfDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta of all legs',\n    `surfVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega of all legs',\n    `surfPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'surfPrice (SR mid-market) of all legs',\n    `theoPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoPrice (if applicable) of all legs',\n    `theoPriceLo` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoPrice (if applicable) of all legs (best way)',\n    `theoPriceHi` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoPrice (if applicable) of all legs (worst way)',\n    `minUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'min uPrc of all option legs',\n    `maxUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'max uPrc of all option legs',\n    `minYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'min years of all option legs',\n    `maxYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'max years of all option legs',\n    `legSecTypes` VARCHAR(255) NOT NULL DEFAULT 'Any' COMMENT 'multi value',\n    `exchange` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'comma separated list',\n    `grpNum` INT NOT NULL DEFAULT 0 COMMENT 'industry group number (equities only)',\n    `sector` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'user defined sector code (if any)',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'risk class letter code',\n    `optStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'Hold',\n    `posVega` FLOAT NOT NULL DEFAULT 0,\n    `posGamma` FLOAT NOT NULL DEFAULT 0,\n    `posTheta` FLOAT NOT NULL DEFAULT 0,\n    `posDelta` FLOAT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'PTP timestamp of most recent message update',\n    `filterId` BIGINT NOT NULL DEFAULT 0 COMMENT 'used by tool/toolServer session to multiplex filters',\n    `numLegs` INT NOT NULL DEFAULT 0,\n    `QuoteLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(QuoteLegsList)),\n    PRIMARY KEY USING HASH (`securityID`,`exchSource`),\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Live spread quotes with SpiderRock markup details for equity and future option spreads.  Legs details are included in a packed field.  This table contains the most recent market for each spread.';\n\n"})})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>n});var r=t(96540);const d={},i=r.createContext(d);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);