"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65108],{22699:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>x});var s=d(74848),t=d(28453);const r={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepDetail/SRSweepDetail",title:"SRSweepDetail",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepDetail/SRSweepDetail.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepDetail",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepDetail/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepDetail/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRStripeTrigger",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRStripeTrigger/"},next:{title:"SRSweepExchDetail",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SRSweepExchDetail/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/execution-engine/SpdrSweepDetail",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.p,{children:"SpdrSweepDetail records are published by execution engines when sweep trigger groups are processed"}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2270-execution-engine"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientTrading"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRTrade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parentNumber"}),(0,s.jsx)(n.td,{children:"CHAR(19)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"engineName"}),(0,s.jsx)(n.td,{children:"VARCHAR(32)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SpiderRock execution engine that handled the parent order"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskGroupId"}),(0,s.jsx)(n.td,{children:"CHAR(19)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"triggerGroupId"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"WaitTrigger group Id"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'Call'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parentOrderSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parentLimitPrice"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"orderSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isISOSweep"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskLimitSize"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskLimitReason"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrRisk",children:"enum - SpdrRisk"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"riskLimitDetail"}),(0,s.jsx)(n.td,{children:"TINYTEXT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBid1"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAsk1"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBidSize1"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAskSize1"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBidCnt1"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAskCnt1"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBidMask1"}),(0,s.jsx)(n.td,{children:"INT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAskMask1"}),(0,s.jsx)(n.td,{children:"INT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBid2"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAsk2"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBidSize2"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAskSize2"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBidCnt2"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAskCnt2"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboBidMask2"}),(0,s.jsx)(n.td,{children:"INT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbboAskMask2"}),(0,s.jsx)(n.td,{children:"INT UNSIGNED"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"netTimestamp"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parentNumber"}),(0,s.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRSweepDetail` (\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'SpiderRock execution engine that handled the parent order',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `triggerGroupId` BIGINT NOT NULL DEFAULT 0 COMMENT 'WaitTrigger group Id',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `parentOrderSize` INT NOT NULL DEFAULT 0,\n    `parentLimitPrice` DOUBLE NOT NULL DEFAULT 0,\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `isISOSweep` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `riskLimitSize` INT NOT NULL DEFAULT 0,\n    `riskLimitReason` ENUM('None','NullCounter','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVe','DayShWtVe','DayAbsWtVe','DayLnNValue','DayShNValue','DayAbsNValue','StkImpact','FutImpact','OptImpact','NullMRC','NullSRC','DDeltaLn','DDeltaSh','DDeltaAbs','WtVegaLn','WtVegaSh','WtVegaAbs','NValueLn','NValueSh','NValueAbs','CtrlDisable','AccEmaDdLn','AccEmaDdSh','AccEmaWvLn','AccEmaWvSh','SymEmaDdLn','SymEmaDdSh','SymEmaWvLn','SymEmaWvSh','ExpDDeltaLn','ExpDDeltaSh','ExpWtVegaLn','ExpWtVegaSh','ExpRm6Ln','ExpRm6Sh','SymDDeltaLn','SymDDeltaSh','SymVegaLn','SymVegaSh','SymWtVegaLn','SymWtVegaSh','SymRm7Ln','SymRm7Sh','GrpDdLn','GrpDdSh','GrpOptQtyLn','GrpOptQtySh','GrpOptQtyAbs','GrpVegaLn','GrpVegaSh','GrpVegaAbs','GrpRm1Ln','GrpRm1Sh','GrpRm1Abs','GrpRm2Ln','GrpRm2Sh','GrpRm3Ln','GrpRm3Sh','GrpRm4Ln','GrpRm4Sh','GrpRm5Ln','GrpRm5Sh','UDn50','UUp50','UDn15','UUp15','OrderSize','SysErr','StkErr','FutErr','OptErr','SSaleErr','SSaleRstr','StkSellLmt','Locate','StkRstct','SizeCap','ZeroCross','PreOpnQ','TrgWait','WaitStart','WaitTrigger','LegStep','TwapStep','MktNotReady','MaxRisk','NoStkBrw','BadMkt','BadLmt','NoAltOrdId','InvldBrkr','MaxChildOrders','MktHalted','UPrcErr','MinUBid','MaxUAsk','PreStart','ClntRteDn','ActiveSize','MktClosed','NoDDeltaMult','InvldDelta','RiskCollarRng','DayFutCnBot','DayFutCnSld','DayFutCnAbs','AccFutCnAbs') NOT NULL DEFAULT 'None',\n    `riskLimitDetail` TINYTEXT NOT NULL DEFAULT '',\n    `nbboBid1` DOUBLE NOT NULL DEFAULT 0,\n    `nbboAsk1` DOUBLE NOT NULL DEFAULT 0,\n    `nbboBidSize1` INT NOT NULL DEFAULT 0,\n    `nbboAskSize1` INT NOT NULL DEFAULT 0,\n    `nbboBidCnt1` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboAskCnt1` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboBidMask1` INT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboAskMask1` INT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboBid2` DOUBLE NOT NULL DEFAULT 0,\n    `nbboAsk2` DOUBLE NOT NULL DEFAULT 0,\n    `nbboBidSize2` INT NOT NULL DEFAULT 0,\n    `nbboAskSize2` INT NOT NULL DEFAULT 0,\n    `nbboBidCnt2` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboAskCnt2` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboBidMask2` INT UNSIGNED NOT NULL DEFAULT 0,\n    `nbboAskMask2` INT UNSIGNED NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`parentNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrSweepDetail records are published by execution engines when sweep trigger groups are processed';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `parentNumber`,\n    `engineName`,\n    `accnt`,\n    `clientFirm`,\n    `riskGroupId`,\n    `triggerGroupId`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `parentOrderSize`,\n    `parentLimitPrice`,\n    `orderSide`,\n    `isISOSweep`,\n    `riskLimitSize`,\n    `riskLimitReason`,\n    `riskLimitDetail`,\n    `nbboBid1`,\n    `nbboAsk1`,\n    `nbboBidSize1`,\n    `nbboAskSize1`,\n    `nbboBidCnt1`,\n    `nbboAskCnt1`,\n    `nbboBidMask1`,\n    `nbboAskMask1`,\n    `nbboBid2`,\n    `nbboAsk2`,\n    `nbboBidSize2`,\n    `nbboAskSize2`,\n    `nbboBidCnt2`,\n    `nbboAskCnt2`,\n    `nbboBidMask2`,\n    `nbboAskMask2`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRSweepDetail`\nWHERE \n    /* Replace with a CHAR(19) */\n    `parentNumber` = 'Example_parentNumber';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRSweepDetail' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var s=d(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);