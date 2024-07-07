"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96465],{29562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>L,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var N=t(74848),T=t(28453);const o={title:"OptionPrint2"},L=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/OptionPrint2",title:"OptionPrint2",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/OptionPrint2.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint2/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrint2"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrint",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/"},next:{title:"OptionPrintProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrintProbability/"}},r={},s=[];function E(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,T.R)(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.p,{children:(0,N.jsx)(n.a,{href:"../../../Topics/market-data-options/OptionPrint2",children:"V8 Message Definition"})}),"\n",(0,N.jsx)(n.pre,{children:(0,N.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionPrint2` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'print size [contracts]',\n    `prtPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'print price',\n    `prtClusterNum` INT NOT NULL DEFAULT 0 COMMENT 'incremental print cluster counter (one counter per okey; used to group prints into clusters)',\n    `prtClusterSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size of prints in this sequence (sequence of prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None' COMMENT 'print type',\n    `printCodes` VARCHAR(18) NOT NULL DEFAULT '' COMMENT 'European trade condition codes',\n    `prtOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of participating orders',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print volume in contracts (regular, electronic) [AUTO, REOP, MESL, TESL]',\n    `oosVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print volume reported out of sequence (not regular way electronic) [OSEQ, LATE, OPEN, OPNL]',\n    `isoVolume` INT NOT NULL DEFAULT 0 COMMENT 'day ISO sweep volume [ISOI]',\n    `slaVolume` INT NOT NULL DEFAULT 0 COMMENT 'single leg aution volume [SLAN, SLAI]',\n    `mlaVolume` INT NOT NULL DEFAULT 0 COMMENT 'multi leg auction volume [MLAT, TLAT, MASL, TASL]',\n    `crxVolume` INT NOT NULL DEFAULT 0 COMMENT 'day electronic cross volume (no exposure period) [SLCN, SCLI, MLCT, TLCT]',\n    `flrVolume` INT NOT NULL DEFAULT 0 COMMENT 'day exchange floor volume [SLFT, MLFT, MFSL, TLFT, TFSL, CMBO]',\n    `mlgVolume` INT NOT NULL DEFAULT 0 COMMENT 'multi-leg (complex) volume [MLET, TLET]',\n    `uknVolume` INT NOT NULL DEFAULT 0 COMMENT 'other (uncategorized) volume',\n    `cxlVolume` INT NOT NULL DEFAULT 0 COMMENT 'day print/cancel volume (num of contracts printed and then cancelled) [CANC, CNCL, CNCO, CNOL]',\n    `totalVolume` INT NOT NULL DEFAULT 0 COMMENT 'total day volume',\n    `bidCount` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of bid prints',\n    `askCount` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of ask prints',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'bid print volume in contracts',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'ask print volume in contracts',\n    `ebid` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange bid (@ print time)',\n    `eask` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange ask (@ print time)',\n    `ebsz` INT NOT NULL DEFAULT 0 COMMENT 'exchange bid size',\n    `easz` INT NOT NULL DEFAULT 0 COMMENT 'exchange ask size',\n    `eage` FLOAT NOT NULL DEFAULT 0 COMMENT 'age of prevailing quote at time of print',\n    `prtSide` ENUM('None','Mid','Bid','Ask') NOT NULL DEFAULT 'None' COMMENT 'implied print side (based on ebid/eask and nbbo market)',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='The most recent (last) print record for each active equity and future option series.  Quote markup represents quote that existed just prior to the print on the reporting exchange.';\n\n"})})]})}function a(e={}){const{wrapper:n}={...(0,T.R)(),...e.components};return n?(0,N.jsx)(n,{...e,children:(0,N.jsx)(E,{...e})}):E(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>L,x:()=>i});var N=t(96540);const T={},o=N.createContext(T);function L(e){const n=N.useContext(o);return N.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(T):e.components||T:L(e.components),N.createElement(o.Provider,{value:n},e.children)}}}]);