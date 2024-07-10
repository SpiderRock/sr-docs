"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7205],{93037:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=r(74848),d=r(28453);const n={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/SpreadCloseMark",title:"SpreadCloseMark",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/SpreadCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadBookQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/"},next:{title:"SpreadMarketSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"../../../Topics/market-marks/SpreadCloseMark",children:"V8 Message Definiton"})}),"\n",(0,t.jsxs)(s.p,{children:["SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads\\nSpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final\\nBaseObj",":Spread"]}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRSpread"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skey_at"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skey_ts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skey_tk"}),(0,t.jsx)(s.td,{children:"VARCHAR(12)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clsMarkState"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Close mark state None LastPrt SRClose ExchClose Final"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"opnPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Open price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"minPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Low price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"High price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"prtCount"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Print count"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"prtVolume"}),(0,t.jsx)(s.td,{children:"INT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Print volume"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"avgMktSize"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Average market size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"avgMktWidth"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Average market width"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bidPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"bid price close  1min"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"askPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"ask price close  1min"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srClsPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"SR close mark close  1min"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"closePrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"official exchange closing mark last printthen official close"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skey_tk"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skey_at"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"skey_ts"}),(0,t.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadCloseMark` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `clsMarkState` ENUM('None','LastPrt','SRClose','ExchClose','Final') NOT NULL DEFAULT 'None' COMMENT 'Close mark state. None; LastPrt; SRClose; ExchClose; Final',\n    `opnPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Open price',\n    `minPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Low price',\n    `maxPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'High price',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'Print count',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'Print volume',\n    `avgMktSize` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Average market size',\n    `avgMktWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Average market width',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (close - 1min)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (close - 1min)',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (last print;then official close)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads\\nSpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final\\nBaseObj:Spread';\n\n"})})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>i});var t=r(96540);const d={},n=t.createContext(d);function c(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);