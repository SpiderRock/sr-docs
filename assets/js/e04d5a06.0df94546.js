"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["51364"],{78330:function(e,n,i){i.r(n),i.d(n,{default:()=>x,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/OptionPrintProbability","title":"OptionPrintProbability","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/OptionPrintProbability.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability","slug":"/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionPrint2","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/"},"next":{"title":"OptionPrintSummary","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintSummary/"}}'),d=i("52676"),r=i("91503");let s={},l=void 0,c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"../../../Topics/probabilities/OptionPrintProbability",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Topic"}),(0,d.jsx)(n.td,{children:"4255-probabilities"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MLink Token"}),(0,d.jsx)(n.td,{children:"OptProbModel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Product"}),(0,d.jsx)(n.td,{children:"SRLive"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accessType"}),(0,d.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_yr"}),(0,d.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI, SEC"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_mn"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI, SEC"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_dy"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI, SEC"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_xx"}),(0,d.jsx)(n.td,{children:"DOUBLE"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_cp"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'Call'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"stateModel"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/StateModel",children:"enum - StateModel"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtPrice"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtSize"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtProb"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"probability that this print will result in positive PnL"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtSide"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bidPrice"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"nbbo bid price"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"askPrice"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"nbbo ask price"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bidSize"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"cumulative size  bid price"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"askSize"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"cumulative size  ask price"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgBLink1m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"average buy link value trailing 10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maeBLink1m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"buy link value mean abs err trailing 1000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgSLink1m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"average sell link value trailing 10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maeSLink1m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"sell link value mean abs err trailing 1000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgBLink10m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"average buy link value trailing 100"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maeBLink10m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"bid link value mean abs err trailing 1000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgSLink10m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"average ask link value trailing 100"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maeSLink10m"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"ask link value mean abs err trailing 1000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bCounter"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"buy counter"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sCounter"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"sell counter"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtTimestamp"}),(0,d.jsx)(n.td,{children:"BIGINT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"feed timestamp from the packet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"netTimestamp"}),(0,d.jsx)(n.td,{children:"BIGINT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"inbound packet PTP timestamp from SR gateway switch from OptionPrint"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"smsTimestamp"}),(0,d.jsx)(n.td,{children:"BIGINT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"state model server timestamp just before publish"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_tk"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_yr"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_mn"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_dy"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_xx"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_cp"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_at"}),(0,d.jsx)(n.td,{children:"7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_ts"}),(0,d.jsx)(n.td,{children:"8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"stateModel"}),(0,d.jsx)(n.td,{children:"9"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_yr"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_mn"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_dy"}),(0,d.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionPrintProbability` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `prtPrice` FLOAT NOT NULL DEFAULT 0,\n    `prtSize` INT NOT NULL DEFAULT 0,\n    `prtProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'probability that this print will result in positive PnL',\n    `prtSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `avgBLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average buy link value (trailing 10)',\n    `maeBLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy link value mean abs err (trailing 1000)',\n    `avgSLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average sell link value (trailing 10)',\n    `maeSLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell link value mean abs err (trailing 1000)',\n    `avgBLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average buy link value (trailing 100)',\n    `maeBLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (trailing 1000)',\n    `avgSLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (trailing 100)',\n    `maeSLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (trailing 1000)',\n    `bCounter` INT NOT NULL DEFAULT 0 COMMENT 'buy counter',\n    `sCounter` INT NOT NULL DEFAULT 0 COMMENT 'sell counter',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from OptionPrint)',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`stateModel`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `stateModel`,\n    `prtPrice`,\n    `prtSize`,\n    `prtProb`,\n    `prtSide`,\n    `bidPrice`,\n    `askPrice`,\n    `bidSize`,\n    `askSize`,\n    `avgBLink1m`,\n    `maeBLink1m`,\n    `avgSLink1m`,\n    `maeSLink1m`,\n    `avgBLink10m`,\n    `maeBLink10m`,\n    `avgSLink10m`,\n    `maeSLink10m`,\n    `bCounter`,\n    `sCounter`,\n    `prtTimestamp`,\n    `netTimestamp`,\n    `smsTimestamp`\nFROM `SRLive`.`MsgOptionPrintProbability`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','M1','M2','M3','M4') */ \n    `stateModel` = 'None';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OptionPrintProbability' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},91503:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var t=i(75271);let d={},r=t.createContext(d);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);