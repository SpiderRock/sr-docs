"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46159],{43430:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=t(74848),s=t(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/SpdrOptTheoRecord",title:"SpdrOptTheoRecord",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/SpdrOptTheoRecord.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrOptTheoRecord/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionTheoVol",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo/OptionTheoVol/"},next:{title:"SpdrTheoExp2PtCurve",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExp2PtCurve/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function o(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"../../../Topics/client-theos/SpdrOptTheoRecord",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(d.p,{children:"SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records."}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"1945-client-theos"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRTheo"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Default Value"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_cp"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'Call'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"theoModel"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"client firm this theo model is associated with controls visibility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"TheoVol"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"midpoint fair volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BVol"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"buy vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SVol"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"sell vol"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BEdge"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"edge premium spread when buying"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SEdge"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"edge premium spread when selling"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"buySellConvention"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySellConvention",children:"enum - BuySellConvention"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"rule used to interpret BVol SVol BEdge and SEdge"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"refUPrc"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"Reference uPrc for dynamic vol vol  TheoVol  vegaSlope  uPrc  refUPrc"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vegaSlope"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"Set to zero for no dynamic  hedge delta  delta  vegaSlope  vegarequires accounthedgeType  TVol theo delta  vegaSlope or TvS surface delta  vegaSlope default is surface delta only"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"theoStatus"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TheoStatus",children:"enum - TheoStatus"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Hold'"}),(0,r.jsx)(d.td,{children:"indicates where theos for this ticker will be utilized"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_tk"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_xx"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_cp"}),(0,r.jsx)(d.td,{children:"6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_at"}),(0,r.jsx)(d.td,{children:"7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_ts"}),(0,r.jsx)(d.td,{children:"8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"theoModel"}),(0,r.jsx)(d.td,{children:"9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"10"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgSROptTheoRecord` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm this theo model is associated with (controls visibility)',\n    `TheoVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'mid-point (fair) volatility',\n    `BVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy vol',\n    `SVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell vol',\n    `BEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge premium spread when buying',\n    `SEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge premium spread when selling',\n    `buySellConvention` ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') NOT NULL DEFAULT 'None' COMMENT 'rule used to interpret BVol, SVol, BEdge, and SEdge',\n    `refUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Reference uPrc for dynamic vol: vol = TheoVol + vegaSlope * (uPrc - refUPrc).',\n    `vegaSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'Set to zero for no dynamic.  hedge delta = delta + vegaSlope * vega;requires account.hedgeType = [TVol (theo delta + vegaSlope) or TvS (surface delta + vegaSlope)] (default is surface delta only)',\n    `theoStatus` ENUM('Hold','Auto','Scanner','Markup','CloseOnly') NOT NULL DEFAULT 'Hold' COMMENT 'indicates where theos for this ticker will be utilized',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`theoModel`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records.';\n\n"})})]})}function x(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>l});var r=t(96540);const s={},n=r.createContext(s);function i(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);