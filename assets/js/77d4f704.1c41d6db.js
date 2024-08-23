"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[60172],{21076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(74848),r=t(28453);const s={},d=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/FuturePrintProbability/FuturePrintProbability",title:"FuturePrintProbability",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/FuturePrintProbability/FuturePrintProbability.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/FuturePrintProbability",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/FuturePrintProbability/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/FuturePrintProbability/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FuturePrint",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/FuturePrint/"},next:{title:"FutureQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/FutureQuoteProbability/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/probabilities/FuturePrintProbability",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"4255-probabilities"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"FutProbModel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRLive"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_at"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_ts"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_tk"}),(0,i.jsx)(n.td,{children:"VARCHAR(12)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_yr"}),(0,i.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_mn"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_dy"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"stateModel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/StateModel",children:"enum - StateModel"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prtPrice"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prtSize"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prtProb"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"probability that this print will result in positive PnL"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prtSide"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bidPrice"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"nbbo bid price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"askPrice"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"nbbo ask price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bidSize"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"cumulative size  bid price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"askSize"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"cumulative size  ask price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgBLink1m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"average buy link value trailing 10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maeBLink1m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"buy link value mean abs err trailing 1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgSLink1m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"average sell link value trailing 10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maeSLink1m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"sell link value mean abs err trailing 1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgBLink10m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"average buy link value trailing 100"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maeBLink10m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"bid link value mean abs err trailing 1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgSLink10m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"average ask link value trailing 100"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maeSLink10m"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"ask link value mean abs err trailing 1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bCounter"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"buy counter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sCounter"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"sell counter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"prtTimestamp"}),(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"feed timestamp from the packet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"netTimestamp"}),(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"inbound packet PTP timestamp from SR gateway switch from FuturePrint"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"smsTimestamp"}),(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"state model server timestamp just before publish"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_tk"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_yr"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_mn"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_dy"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_at"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fkey_ts"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"stateModel"}),(0,i.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgFuturePrintProbability` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0,\n    `prtSize` INT NOT NULL DEFAULT 0,\n    `prtProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'probability that this print will result in positive PnL',\n    `prtSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `avgBLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average buy link value (trailing 10)',\n    `maeBLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy link value mean abs err (trailing 1000)',\n    `avgSLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average sell link value (trailing 10)',\n    `maeSLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell link value mean abs err (trailing 1000)',\n    `avgBLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average buy link value (trailing 100)',\n    `maeBLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (trailing 1000)',\n    `avgSLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (trailing 100)',\n    `maeSLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (trailing 1000)',\n    `bCounter` INT NOT NULL DEFAULT 0 COMMENT 'buy counter',\n    `sCounter` INT NOT NULL DEFAULT 0 COMMENT 'sell counter',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from FuturePrint)',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`,`stateModel`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `stateModel`,\n    `prtPrice`,\n    `prtSize`,\n    `prtProb`,\n    `prtSide`,\n    `bidPrice`,\n    `askPrice`,\n    `bidSize`,\n    `askSize`,\n    `avgBLink1m`,\n    `maeBLink1m`,\n    `avgSLink1m`,\n    `maeSLink1m`,\n    `avgBLink10m`,\n    `maeBLink10m`,\n    `avgSLink10m`,\n    `maeSLink10m`,\n    `bCounter`,\n    `sCounter`,\n    `prtTimestamp`,\n    `netTimestamp`,\n    `smsTimestamp`\nFROM `SRLive`.`MsgFuturePrintProbability`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','M1','M2','M3','M4') */ \n    `stateModel` = 'None';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='FuturePrintProbability' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);