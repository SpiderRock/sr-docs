"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94438],{8050:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=n(74848),d=n(28453);const s={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRParentBrokerSummary/SRParentBrokerSummary",title:"SRParentBrokerSummary",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SRParentBrokerSummary/SRParentBrokerSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRParentBrokerSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRParentBrokerSummary/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRParentBrokerSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRParentBrkrState",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRParentBrkrState/"},next:{title:"SRParentCancel",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRParentCancel/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrParentBrokerSummary",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(r.p,{children:"SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientTrading"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accessType"}),(0,t.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"VARCHAR(16)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tickerSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parentOrderHandling"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ParentOrderHandling",children:"enum - ParentOrderHandling"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradingPeriod"}),(0,t.jsx)(r.td,{children:"DATE"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'1900-01-01'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"VARCHAR(16)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"SR client firm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numOrders"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of parent orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numBrokers"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of parent brokers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numSecKeys"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of unique secKeys"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numUnderliers"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of unique underlier secKeys"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumOrderSize"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"total parent order size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumSweepMktSize"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"size that would be expected to fill immediately after parent order arrival"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumSweepFillQty"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"size that filled as a result of an initial sweep"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumActiveSeconds"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"total seconds parent order is active"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumWorkingSeconds"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"total seconds with at least one working child order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numChildOrders"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"total number of child orders generated"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cumFillQty"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumVwapQty"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"SUM cumFillQty if avgVwapPrice exists stock and futures only"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sumVwapPnL"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"SUM avgVWapPrice  avgFillPrice  cumFillQty if avgVwapPrice exists stock and futures only"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tickerSrc"}),(0,t.jsx)(r.td,{children:"3"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:"4"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parentOrderHandling"}),(0,t.jsx)(r.td,{children:"5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradingPeriod"}),(0,t.jsx)(r.td,{children:"6"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"7"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRParentBrokerSummary` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `tickerSrc` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `parentOrderHandling` ENUM('None','ActiveTaker','PostOnly','DMA','MktOnOpn','MktOnCls','Facilitate','Matrix','Legger','Seeker','SeekerLegger','CrossResponse','AuctionResponse','MLegAuctionResp','RFQRequest','AwayAlgo','ExchPing','BlockAuction','BlockResponse','SweepTake','CobMaker','FaceOmni','TestParent') NOT NULL DEFAULT 'None',\n    `tradingPeriod` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `numOrders` INT NOT NULL DEFAULT 0 COMMENT 'number of parent orders',\n    `numBrokers` INT NOT NULL DEFAULT 0 COMMENT 'number of parent brokers',\n    `numSecKeys` INT NOT NULL DEFAULT 0 COMMENT 'number of unique secKeys',\n    `numUnderliers` INT NOT NULL DEFAULT 0 COMMENT 'number of unique underlier secKeys',\n    `sumOrderSize` INT NOT NULL DEFAULT 0 COMMENT 'total parent order size',\n    `sumSweepMktSize` INT NOT NULL DEFAULT 0 COMMENT 'size that would be expected to fill immediately after parent order arrival',\n    `sumSweepFillQty` INT NOT NULL DEFAULT 0 COMMENT 'size that filled as a result of an initial sweep',\n    `sumActiveSeconds` FLOAT NOT NULL DEFAULT 0 COMMENT 'total seconds parent order is active',\n    `sumWorkingSeconds` FLOAT NOT NULL DEFAULT 0 COMMENT 'total seconds with at least one working child order',\n    `numChildOrders` INT NOT NULL DEFAULT 0 COMMENT 'total number of child orders generated',\n    `cumFillQty` INT NOT NULL DEFAULT 0,\n    `sumVwapQty` INT NOT NULL DEFAULT 0 COMMENT 'SUM: cumFillQty [if avgVwapPrice exists] (stock and futures only)',\n    `sumVwapPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'SUM: (avgVWapPrice - avgFillPrice) * cumFillQty [if avgVwapPrice exists] (stock and futures only)',\n    PRIMARY KEY USING HASH (`accnt`,`secType`,`tickerSrc`,`spdrSource`,`parentOrderHandling`,`tradingPeriod`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records.';\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `secType`,\n    `tickerSrc`,\n    `spdrSource`,\n    `parentOrderHandling`,\n    `tradingPeriod`,\n    `clientFirm`,\n    `numOrders`,\n    `numBrokers`,\n    `numSecKeys`,\n    `numUnderliers`,\n    `sumOrderSize`,\n    `sumSweepMktSize`,\n    `sumSweepFillQty`,\n    `sumActiveSeconds`,\n    `sumWorkingSeconds`,\n    `numChildOrders`,\n    `cumFillQty`,\n    `sumVwapQty`,\n    `sumVwapPnL`\nFROM `SRTrade`.`MsgSRParentBrokerSummary`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `tickerSrc` = 'None'\n  AND\n    /* Replace with a ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') */ \n    `spdrSource` = 'None'\n  AND\n    /* Replace with a ENUM('None','ActiveTaker','PostOnly','DMA','MktOnOpn','MktOnCls','Facilitate','Matrix','Legger','Seeker','SeekerLegger','CrossResponse','AuctionResponse','MLegAuctionResp','RFQRequest','AwayAlgo','ExchPing','BlockAuction','BlockResponse','SweepTake','CobMaker','FaceOmni','TestParent') */ \n    `parentOrderHandling` = 'None'\n  AND\n    /* Replace with a DATE */\n    `tradingPeriod` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,t.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRParentBrokerSummary' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const d={},s=t.createContext(d);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);