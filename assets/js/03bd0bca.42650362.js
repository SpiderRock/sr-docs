"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64844],{66377:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(74848),d=r(28453);const i={},a=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/OptOrderReplaceGateway",title:"OptOrderReplaceGateway",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/OptOrderReplaceGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderReplaceGateway/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptOrderGateway",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/OptOrderGateway/"},next:{title:"ParentOrderGateway",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRTrade/ParentOrderGateway/"}},s={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/srse-gateway/OptOrderReplaceGateway",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.p,{children:"Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.\\nSee the SpiderRock Execution Engine concept guide for more details."}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"5120-srse-gateway"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"SystemData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRTrade"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_yr"}),(0,t.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_mn"}),(0,t.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_dy"}),(0,t.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_xx"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_cp"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'Call'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accnt"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spdrSource"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupingCode"}),(0,t.jsx)(n.td,{children:"CHAR(19)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orderNumber"}),(0,t.jsx)(n.td,{children:"BIGINT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"SPDR order number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orderSize"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"maximum fill size contracts"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orderActiveSize"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"total activated size total size released for execution 1  all available size"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orderPrcLimit"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Order price limit  Valid range 0005 99990  Required if orderLimitType is Prc PrcDe PrcDeX PrcDeT PrcDeXT  Ignored if orderLimitType is Market  Otherwise must be set to 0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orderVolLimit"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Order volatility limit  Valid range 0005 9000  Required if orderLimitType is Vol VolX  Ignored if orderLimitType is Market  Otherwise must be set to 0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"takeProbability"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0.50"}),(0,t.jsx)(n.td,{children:"probability threshold for taking an existing public quote"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"makeProbability"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0.50"}),(0,t.jsx)(n.td,{children:"probability threshold for posting in an exchange order book"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"strategy"}),(0,t.jsx)(n.td,{children:"VARCHAR(36)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Client strategy string  This value will appear on the SR Trade Monitor and in execution reports"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"userName"}),(0,t.jsx)(n.td,{children:"VARCHAR(24)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orderDttm"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'2000-01-01'"}),(0,t.jsx)(n.td,{children:"Order entry time  Will be set to arrival time if not supplied"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"positionType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ssaleFlag"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"used to determine stock autohedge flags"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_tk"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_yr"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_mn"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_dy"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_xx"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_cp"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_at"}),(0,t.jsx)(n.td,{children:"7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okey_ts"}),(0,t.jsx)(n.td,{children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accnt"}),(0,t.jsx)(n.td,{children:"9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spdrSource"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupingCode"}),(0,t.jsx)(n.td,{children:"11"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"12"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgOptOrderReplaceGateway` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `orderNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SPDR order number',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum fill size (contracts)',\n    `orderActiveSize` INT NOT NULL DEFAULT 0 COMMENT 'total activated size (total size released for execution) (-1 = all available size)',\n    `orderPrcLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Order price limit.  Valid range: [0.005, 9999.0].  Required if `orderLimitType` is Prc, PrcDe, PrcDeX, PrcDeT, PrcDeXT.  Ignored if `orderLimitType` is Market.  Otherwise must be set to 0.',\n    `orderVolLimit` FLOAT NOT NULL DEFAULT 0 COMMENT 'Order volatility limit.  Valid range: [0.005, 9.000].  Required if `orderLimitType` is Vol, VolX.  Ignored if `orderLimitType` is Market.  Otherwise must be set to 0.',\n    `takeProbability` FLOAT NOT NULL DEFAULT 0.50 COMMENT 'probability threshold for taking an existing public quote',\n    `makeProbability` FLOAT NOT NULL DEFAULT 0.50 COMMENT 'probability threshold for posting in an exchange order book',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'Client strategy string.  This value will appear on the SR Trade Monitor and in execution reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `orderDttm` DATETIME(6) NOT NULL DEFAULT '2000-01-01' COMMENT 'Order entry time.  Will be set to arrival time if not supplied.',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'used to determine stock auto-hedge flags',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`accnt`,`spdrSource`,`groupingCode`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.\\nSee the SpiderRock Execution Engine concept guide for more details.';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `accnt`,\n    `spdrSource`,\n    `groupingCode`,\n    `clientFirm`,\n    `orderNumber`,\n    `orderSize`,\n    `orderActiveSize`,\n    `orderPrcLimit`,\n    `orderVolLimit`,\n    `takeProbability`,\n    `makeProbability`,\n    `strategy`,\n    `userName`,\n    `orderDttm`,\n    `positionType`,\n    `ssaleFlag`,\n    `timestamp`\nFROM `SRTrade`.`MsgOptOrderReplaceGateway`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') */ \n    `spdrSource` = 'None'\n  AND\n    /* Replace with a CHAR(19) */\n    `groupingCode` = 'Example_groupingCode'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgOptOrderReplaceGateway` \nSET\n    /* Replace with a BIGINT */ \n    `orderNumber` = 1234567890,\n    /* Replace with a INT */ \n    `orderSize` = 5,\n    /* Replace with a INT */ \n    `orderActiveSize` = 5,\n    /* Replace with a FLOAT */\n    `orderPrcLimit` = 1.23,\n    /* Replace with a FLOAT */\n    `orderVolLimit` = 1.23,\n    /* Replace with a FLOAT */\n    `takeProbability` = 1.23,\n    /* Replace with a FLOAT */\n    `makeProbability` = 1.23,\n    /* Replace with a VARCHAR(36) */\n    `strategy` = 'Example_strategy',\n    /* Replace with a VARCHAR(24) */\n    `userName` = 'Example_userName',\n    /* Replace with a DATETIME(6) */\n    `orderDttm` = '2022-01-01 12:34:56.000000',\n    /* Replace with a ENUM('None','Opening','Closing','Auto') */ \n    `positionType` = 'None',\n    /* Replace with a ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') */ \n    `ssaleFlag` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') */ \n    `spdrSource` = 'None'\n  AND\n    /* Replace with a CHAR(19) */\n    `groupingCode` = 'Example_groupingCode'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgOptOrderReplaceGateway`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy`,\n    /* Replace with a DOUBLE */ \n    `okey_xx`,\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp`,\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') */ \n    `spdrSource`,\n    /* Replace with a CHAR(19) */\n    `groupingCode`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a BIGINT */ \n    `orderNumber`,\n    /* Replace with a INT */ \n    `orderSize`,\n    /* Replace with a INT */ \n    `orderActiveSize`,\n    /* Replace with a FLOAT */\n    `orderPrcLimit`,\n    /* Replace with a FLOAT */\n    `orderVolLimit`,\n    /* Replace with a FLOAT */\n    `takeProbability`,\n    /* Replace with a FLOAT */\n    `makeProbability`,\n    /* Replace with a VARCHAR(36) */\n    `strategy`,\n    /* Replace with a VARCHAR(24) */\n    `userName`,\n    /* Replace with a DATETIME(6) */\n    `orderDttm`,\n    /* Replace with a ENUM('None','Opening','Closing','Auto') */ \n    `positionType`,\n    /* Replace with a ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') */ \n    `ssaleFlag`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_okey_tk',\n    123,\n    1,\n    1,\n    4.56,\n    'Call',\n    'Example_accnt',\n    'None',\n    'Example_groupingCode',\n    'Example_clientFirm',\n    1234567890,\n    5,\n    5,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'Example_strategy',\n    'Example_userName',\n    '2022-01-01 12:34:56.000000',\n    'None',\n    'None',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgOptOrderReplaceGateway` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') */ \n    `spdrSource` = 'None'\n  AND\n    /* Replace with a CHAR(19) */\n    `groupingCode` = 'Example_groupingCode'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='OptOrderReplaceGateway' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const d={},i=t.createContext(d);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);