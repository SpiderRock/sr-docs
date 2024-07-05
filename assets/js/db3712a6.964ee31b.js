"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69071],{9962:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(74848),a=n(28453);const o={title:"SpdrParentBrokerSummary"},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrokerSummary/SpdrParentBrokerSummary",title:"SpdrParentBrokerSummary",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrokerSummary/SpdrParentBrokerSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrokerSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrokerSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrokerSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentBrokerSummary"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentBrkrState",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentBrkrState/"},next:{title:"SpdrParentCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentCancel/"}},i={},d=[];function S(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrParentBrokerSummary",children:"V8 Message Definition"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRParentBrokerSummary` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `tickerSrc` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `parentOrderHandling` ENUM('None','ActiveTaker','PostOnly','DMA','MktOnOpn','MktOnCls','Facilitate','Matrix','Legger','Seeker','SeekerLegger','CrossResponse','AuctionResponse','MLegAuctionResp','RFQRequest','AwayAlgo','ExchPing','BlockAuction','BlockResponse','SweepTake','CobMaker','FaceOmni','TestParent') NOT NULL DEFAULT 'None',\n    `tradingPeriod` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `numOrders` INT NOT NULL DEFAULT 0 COMMENT 'number of parent orders',\n    `numBrokers` INT NOT NULL DEFAULT 0 COMMENT 'number of parent brokers',\n    `numSecKeys` INT NOT NULL DEFAULT 0 COMMENT 'number of unique secKeys',\n    `numUnderliers` INT NOT NULL DEFAULT 0 COMMENT 'number of unique underlier secKeys',\n    `sumOrderSize` INT NOT NULL DEFAULT 0 COMMENT 'total parent order size',\n    `sumSweepMktSize` INT NOT NULL DEFAULT 0 COMMENT 'size that would be expected to fill immediately after parent order arrival',\n    `sumSweepFillQty` INT NOT NULL DEFAULT 0 COMMENT 'size that filled as a result of an initial sweep',\n    `sumActiveSeconds` FLOAT NOT NULL DEFAULT 0 COMMENT 'total seconds parent order is active',\n    `sumWorkingSeconds` FLOAT NOT NULL DEFAULT 0 COMMENT 'total seconds with at least one working child order',\n    `numChildOrders` INT NOT NULL DEFAULT 0 COMMENT 'total number of child orders generated',\n    `cumFillQty` INT NOT NULL DEFAULT 0,\n    `sumVwapQty` INT NOT NULL DEFAULT 0 COMMENT 'SUM: cumFillQty [if avgVwapPrice exists] (stock and futures only)',\n    `sumVwapPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'SUM: (avgVWapPrice - avgFillPrice) * cumFillQty [if avgVwapPrice exists] (stock and futures only)',\n    PRIMARY KEY USING HASH (`accnt`,`secType`,`tickerSrc`,`spdrSource`,`parentOrderHandling`,`tradingPeriod`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records.';\n\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(96540);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);