"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5942],{19760:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>T,frontMatter:()=>r,metadata:()=>c,toc:()=>N});var a=s(74848),o=s(28453);const r={title:"StockCloseMark"},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/StockCloseMark",title:"StockCloseMark",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/StockCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockCloseMark"},sidebar:"messageSchemasSidebar",previous:{title:"StockBorrowRate",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate/"},next:{title:"StockDetail",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockDetail/"}},i={},N=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"../../../Topics/market-marks/StockCloseMark",children:"V8 Message Definition"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockCloseMark` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clsMarkState` ENUM('None','LastPrt','SRClose','ExchClose','Final') NOT NULL DEFAULT 'None' COMMENT 'Close mark state. None; LastPrt; SRClose; ExchClose; Final',\n    `opnPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Open price',\n    `minPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Low price',\n    `maxPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'High price',\n    `sharesOutstanding` BIGINT NOT NULL DEFAULT 0 COMMENT 'Shares outstanding',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'Print count',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'Print volume',\n    `realizedVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'Realized vol',\n    `avgMktSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market size',\n    `avgMktWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market width',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price (close - 1min)',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price (close - 1min)',\n    `srClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min)',\n    `closePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (last print; then official close)',\n    `hasSRClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hasClosePrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `srCloseMarkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from MarketCloseQuote.srCloseMarkDttm',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record publish/update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.\\nStockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final';\n\n"})})]})}function T(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var a=s(96540);const o={},r=a.createContext(o);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);