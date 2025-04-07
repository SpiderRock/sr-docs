"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["70480"],{38398:function(e,r,i){i.r(r),i.d(r,{default:()=>o,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>N,contentTitle:()=>c});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/OptExpiryDefinition","title":"OptExpiryDefinition","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/OptExpiryDefinition.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"LiveSurfacePerf","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/"},"next":{"title":"OptionCalculator","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/"}}'),t=i("52676"),d=i("91503");let s={},c=void 0,l={},N=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){let r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/product-definition/OptExpiryDefinition",children:"V8 Message Definiton"})}),"\n",(0,t.jsxs)(r.p,{children:["This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.\nBaseObj",":Root"]}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"4335-product-definition"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"OptionDefinition"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accessType"}),(0,t.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"option rootexpiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"option rootexpiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"option rootexpiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"option rootexpiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"option rootexpiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"option rootexpiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"master ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"master ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"master ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"settlement future if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"settlement future if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"settlement future if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"settlement future if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"settlement future if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"settlement future if any"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"underlier price driver for this option expiry default is fkey if it exists"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"underlier price driver for this option expiry default is fkey if it exists"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"underlier price driver for this option expiry default is fkey if it exists"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"underlier price driver for this option expiry default is fkey if it exists"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"underlier price driver for this option expiry default is fkey if it exists"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"underlier price driver for this option expiry default is fkey if it exists"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcDriverKeyType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"Stock or Future"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcBoundFKey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"underlier price bounding future if any for this option expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcBoundFKey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"underlier price bounding future if any for this option expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcBoundFKey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"underlier price bounding future if any for this option expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcBoundFKey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"underlier price bounding future if any for this option expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcBoundFKey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"underlier price bounding future if any for this option expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uPrcBoundFKey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"underlier price bounding future if any for this option expiry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"expiration"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{children:"option expiration date and time"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maturityDate"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"displayFactor"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cabPrice"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"priceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"minTickSize"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_tk"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_yr"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_mn"}),(0,t.jsx)(r.td,{children:"3"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_dy"}),(0,t.jsx)(r.td,{children:"4"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_at"}),(0,t.jsx)(r.td,{children:"5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ekey_ts"}),(0,t.jsx)(r.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptExpiryDefinition` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'option root+expiration',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'option root+expiration',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'option root+expiration',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'option root+expiration',\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'option root+expiration',\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'option root+expiration',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'master ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'master ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'master ticker',\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'settlement future (if any)',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'settlement future (if any)',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'settlement future (if any)',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'settlement future (if any)',\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'settlement future (if any)',\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'settlement future (if any)',\n    `uPrcDriverKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier price driver for this option expiry (default is fkey; if it exists)',\n    `uPrcDriverKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier price driver for this option expiry (default is fkey; if it exists)',\n    `uPrcDriverKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier price driver for this option expiry (default is fkey; if it exists)',\n    `uPrcDriverKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier price driver for this option expiry (default is fkey; if it exists)',\n    `uPrcDriverKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier price driver for this option expiry (default is fkey; if it exists)',\n    `uPrcDriverKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier price driver for this option expiry (default is fkey; if it exists)',\n    `uPrcDriverKeyType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Stock or Future',\n    `uPrcBoundFKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier price bounding future (if any) for this option expiry',\n    `uPrcBoundFKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier price bounding future (if any) for this option expiry',\n    `uPrcBoundFKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier price bounding future (if any) for this option expiry',\n    `uPrcBoundFKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier price bounding future (if any) for this option expiry',\n    `uPrcBoundFKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier price bounding future (if any) for this option expiry',\n    `uPrcBoundFKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'underlier price bounding future (if any) for this option expiry',\n    `expiration` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'option expiration date and time',\n    `maturityDate` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `displayFactor` DOUBLE NOT NULL DEFAULT 0,\n    `cabPrice` DOUBLE NOT NULL DEFAULT 0,\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32','EU2A','EU2B','EU2C','EU2D','EU2E','EU3A','EU3B','EU3C','EU3D','EU3E','EU4A','EU5A') NOT NULL DEFAULT 'None',\n    `minTickSize` DOUBLE NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.\\nBaseObj:Root';\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `uPrcDriverKey_at`,\n    `uPrcDriverKey_ts`,\n    `uPrcDriverKey_tk`,\n    `uPrcDriverKey_yr`,\n    `uPrcDriverKey_mn`,\n    `uPrcDriverKey_dy`,\n    `uPrcDriverKeyType`,\n    `uPrcBoundFKey_at`,\n    `uPrcBoundFKey_ts`,\n    `uPrcBoundFKey_tk`,\n    `uPrcBoundFKey_yr`,\n    `uPrcBoundFKey_mn`,\n    `uPrcBoundFKey_dy`,\n    `expiration`,\n    `maturityDate`,\n    `displayFactor`,\n    `cabPrice`,\n    `priceFormat`,\n    `minTickSize`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgOptExpiryDefinition`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1;\n"})}),"\n",(0,t.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptExpiryDefinition' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},91503:function(e,r,i){i.d(r,{Z:function(){return c},a:function(){return s}});var n=i(75271);let t={},d=n.createContext(t);function s(e){let r=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);