"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38340],{6473:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=s(74848),n=s(28453);const c={},i=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/StockLocateRequestGateway",title:"StockLocateRequestGateway",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/StockLocateRequestGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockLocateRequest",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequest/"},next:{title:"StockLocateResponse",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/srse-gateway/StockLocateRequestGateway",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"5120-srse-gateway"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"coreClientFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locateFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(6)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"locate firm defaults to clientFirmConfigdefaultLocateFirm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locatePool"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"locate pool  firm granting the locate defaults to clientFirmConfigdefaultLocatePool"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isLivePool"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"requestQuan"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"cumulative request quantity for the trading day"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"coreClientFirm"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locateFirm"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locatePool"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isLivePool"}),(0,r.jsx)(t.td,{children:"7"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgStockLocateRequestGateway` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `coreClientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'locate firm (defaults to clientFirmConfig.defaultLocateFirm)',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'locate pool @ firm granting the locate (defaults to clientFirmConfig.defaultLocatePool)',\n    `isLivePool` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `requestQuan` INT NOT NULL DEFAULT 0 COMMENT 'cumulative request quantity for the trading day',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`coreClientFirm`,`locateFirm`,`locatePool`,`isLivePool`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table.';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var r=s(96540);const n={},c=r.createContext(n);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);