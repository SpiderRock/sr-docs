"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82076],{39208:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var l=d(74848),s=d(28453);const i={},t=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgePolicyConfig/PositionHedgePolicyConfig",title:"PositionHedgePolicyConfig",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgePolicyConfig/PositionHedgePolicyConfig.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgePolicyConfig",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgePolicyConfig/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgePolicyConfig/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskCounter",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/MarRiskCounter/"},next:{title:"PositionHedgeTrigger",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRControl/PositionHedgeTrigger/"}},a={},r=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (HedgeWavesList)",id:"json-block-hedgewaveslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"../../../Topics/client-config/PositionHedgePolicyConfig",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Topic"}),(0,l.jsx)(n.td,{children:"1800-client-config"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MLink Token"}),(0,l.jsx)(n.td,{children:"ClientControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Product"}),(0,l.jsx)(n.td,{children:"SRControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessType"}),(0,l.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Key"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accnt"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"policy"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/PositionHedgePolicy",children:"enum - PositionHedgePolicy"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"enabled"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"hedgeDeltaRule"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum - HedgeDeltaRule"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"HedgeDelta Source IVol  use SR implied surface sticky strike IvS  use SR surface dynamic TVol  use user supplied theo surface sticky strike TvS  use user supplied theo surface dynamic AccountConfighedgeDelta"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"binaryDays"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"used to force delta calcs binary prior to expiration 10  force to binary at the start of the final regular market 05  force to binary half way through final regular market"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"balanceSymbols"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"balance accnt level deltas from all symbols using this policy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"hedgeAlgo"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HedgeAlgo",children:"enum - HedgeAlgo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"execBrkrAlgo"}),(0,l.jsx)(n.td,{children:"VARCHAR(32)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"display name of exec broker algo should not have spaces"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"execBrkrCode"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"required if BROKERALGO"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"execBkkrTags"}),(0,l.jsx)(n.td,{children:"TINYTEXT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"keyvalue set of algo tags"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodHedgeWindow"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HedgeWindow",children:"enum - HedgeWindow"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodSymHedgeBandDD"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"individual symbol hedge band delta"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodSymHedgeBandGR"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"individual symbol hedge band gamma ratio"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodBalanceSymbols"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"balance accnt level deltas from all symbols using this policy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodHedgeAlgo"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/HedgeAlgo",children:"enum - HedgeAlgo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodExecBrkrAlgo"}),(0,l.jsx)(n.td,{children:"VARCHAR(32)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"display name of exec broker algo should not have spaces"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodExecBrkrCode"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"required if BROKERALGO"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eodExecBkkrTags"}),(0,l.jsx)(n.td,{children:"TINYTEXT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"keyvalue set of algo tags that get forwarded to exec broker on order"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsHedgeWindow"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/ClsHedgeWindow",children:"enum - ClsHedgeWindow"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsAuctionSymHedgeBandDD"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"individual symbol hedge band delta if participating in closing auction"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsAuctionSymHedgeBandGR"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"individual symbol hedge band gamma ratio if participating in closing auction"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsSymHedgeBandDD"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"individual symbol hedge band delta if using an EOD algo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsSymHedgeBandGR"}),(0,l.jsx)(n.td,{children:"FLOAT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"individual symbol hedge band gamma ratio if using an EOD algo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsBalanceSymbols"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{children:"balance accnt level deltas from all symbols using this policy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsHedgeAlgo"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/ClsHedgeAlgo",children:"enum - ClsHedgeAlgo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsExecBrkrAlgo"}),(0,l.jsx)(n.td,{children:"VARCHAR(32)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"display name of exec broker algo should not have spaces"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsExecBrkrCode"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"required if BROKERALGO"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clsExecBkkrTags"}),(0,l.jsx)(n.td,{children:"TINYTEXT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"keyvalue set of algo tags that get forwarded to exec broker on order"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedBy"}),(0,l.jsx)(n.td,{children:"VARCHAR(24)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"user who last modified this record"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedIn"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timestamp"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(n.td,{children:"timestamp of last modification"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"HedgeWavesList"}),(0,l.jsx)(n.td,{children:"JSON"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'JSON_ARRAY()'"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Sequence"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accnt"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"policy"}),(0,l.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"json-block-hedgewaveslist",children:"JSON Block (HedgeWavesList)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"hedgeTime"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/hedgeTime",children:"enum - hedgeTime"})}),(0,l.jsx)(n.td,{children:"create hedge wave at hedgeTime each trading day HHMMSS"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"symHedgeBandDD"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/symHedgeBandDD",children:"enum - symHedgeBandDD"})}),(0,l.jsx)(n.td,{children:"individual symbol hedge band delta"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"symHedgeBandGR"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/symHedgeBandGR",children:"enum - symHedgeBandGR"})}),(0,l.jsx)(n.td,{children:"individual symbol hedge band gamma ratio"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgPositionHedgePolicyConfig` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `policy` ENUM('None','Default','A','B','C','D') NOT NULL DEFAULT 'None',\n    `enabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hedgeDeltaRule` ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') NOT NULL DEFAULT 'None' COMMENT 'HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (dynamic), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface (dynamic)) [AccountConfig.hedgeDelta]',\n    `binaryDays` FLOAT NOT NULL DEFAULT 0 COMMENT 'used to force delta calcs binary prior to expiration (1.0 = force to binary at the start of the final regular market; 0.5 = force to binary half way through final regular market)',\n    `balanceSymbols` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'balance accnt level deltas from all symbols using this policy',\n    `hedgeAlgo` ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') NOT NULL DEFAULT 'None',\n    `execBrkrAlgo` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'display name of exec broker algo (should not have spaces)',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'required if BROKER_ALGO',\n    `execBkkrTags` TINYTEXT NOT NULL DEFAULT '' COMMENT 'key/value set of algo tags',\n    `eodHedgeWindow` ENUM('None','Sec_10','Sec_30','Sec_60','Min_1','Min_10','Min_30') NOT NULL DEFAULT 'None',\n    `eodSymHedgeBandDD` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band ($delta)',\n    `eodSymHedgeBandGR` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band (gamma ratio)',\n    `eodBalanceSymbols` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'balance accnt level deltas from all symbols using this policy',\n    `eodHedgeAlgo` ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') NOT NULL DEFAULT 'None',\n    `eodExecBrkrAlgo` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'display name of exec broker algo (should not have spaces)',\n    `eodExecBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'required if BROKER_ALGO',\n    `eodExecBkkrTags` TINYTEXT NOT NULL DEFAULT '' COMMENT 'key/value set of algo tags that get forwarded to exec broker on order',\n    `clsHedgeWindow` ENUM('None','NoAction','CloseAuction','CloseAuctionOrAlgo') NOT NULL DEFAULT 'None',\n    `clsAuctionSymHedgeBandDD` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band ($delta) (if participating in closing auction)',\n    `clsAuctionSymHedgeBandGR` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band (gamma ratio) (if participating in closing auction)',\n    `clsSymHedgeBandDD` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band ($delta) (if using an EOD algo)',\n    `clsSymHedgeBandGR` FLOAT NOT NULL DEFAULT 0 COMMENT 'individual symbol hedge band (gamma ratio) (if using an EOD algo)',\n    `clsBalanceSymbols` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'balance accnt level deltas from all symbols using this policy',\n    `clsHedgeAlgo` ENUM('None','SR_SWEEP','BRKR_ALGO') NOT NULL DEFAULT 'None',\n    `clsExecBrkrAlgo` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'display name of exec broker algo (should not have spaces)',\n    `clsExecBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'required if BROKER_ALGO',\n    `clsExecBkkrTags` TINYTEXT NOT NULL DEFAULT '' COMMENT 'key/value set of algo tags that get forwarded to exec broker on order',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    `HedgeWavesList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(HedgeWavesList)),\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`policy`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `policy`,\n    `enabled`,\n    `hedgeDeltaRule`,\n    `binaryDays`,\n    `balanceSymbols`,\n    `hedgeAlgo`,\n    `execBrkrAlgo`,\n    `execBrkrCode`,\n    `execBkkrTags`,\n    `eodHedgeWindow`,\n    `eodSymHedgeBandDD`,\n    `eodSymHedgeBandGR`,\n    `eodBalanceSymbols`,\n    `eodHedgeAlgo`,\n    `eodExecBrkrAlgo`,\n    `eodExecBrkrCode`,\n    `eodExecBkkrTags`,\n    `clsHedgeWindow`,\n    `clsAuctionSymHedgeBandDD`,\n    `clsAuctionSymHedgeBandGR`,\n    `clsSymHedgeBandDD`,\n    `clsSymHedgeBandGR`,\n    `clsBalanceSymbols`,\n    `clsHedgeAlgo`,\n    `clsExecBrkrAlgo`,\n    `clsExecBrkrCode`,\n    `clsExecBkkrTags`,\n    `timestamp`,\n    `HedgeWavesList`\nFROM `SRControl`.`MsgPositionHedgePolicyConfig`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','Default','A','B','C','D') */ \n    `policy` = 'None';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgPositionHedgePolicyConfig` \nSET\n    /* Replace with a ENUM('None','Yes','No') */ \n    `enabled` = 'None',\n    /* Replace with a ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') */ \n    `hedgeDeltaRule` = 'None',\n    /* Replace with a FLOAT */ \n    `binaryDays` = 1.23,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `balanceSymbols` = 'None',\n    /* Replace with a ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') */ \n    `hedgeAlgo` = 'None',\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo` = 'Example_execBrkrAlgo',\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode` = 'Example_execBrkrCode',\n    /* Replace with a TINYTEXT */ \n    `execBkkrTags` = 'dummy tiny text',\n    /* Replace with a ENUM('None','Sec_10','Sec_30','Sec_60','Min_1','Min_10','Min_30') */ \n    `eodHedgeWindow` = 'None',\n    /* Replace with a FLOAT */ \n    `eodSymHedgeBandDD` = 1.23,\n    /* Replace with a FLOAT */ \n    `eodSymHedgeBandGR` = 1.23,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `eodBalanceSymbols` = 'None',\n    /* Replace with a ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') */ \n    `eodHedgeAlgo` = 'None',\n    /* Replace with a VARCHAR(32) */ \n    `eodExecBrkrAlgo` = 'Example_eodExecBrkrAlgo',\n    /* Replace with a VARCHAR(16) */ \n    `eodExecBrkrCode` = 'Example_eodExecBrkrCode',\n    /* Replace with a TINYTEXT */ \n    `eodExecBkkrTags` = 'dummy tiny text',\n    /* Replace with a ENUM('None','NoAction','CloseAuction','CloseAuctionOrAlgo') */ \n    `clsHedgeWindow` = 'None',\n    /* Replace with a FLOAT */ \n    `clsAuctionSymHedgeBandDD` = 1.23,\n    /* Replace with a FLOAT */ \n    `clsAuctionSymHedgeBandGR` = 1.23,\n    /* Replace with a FLOAT */ \n    `clsSymHedgeBandDD` = 1.23,\n    /* Replace with a FLOAT */ \n    `clsSymHedgeBandGR` = 1.23,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `clsBalanceSymbols` = 'None',\n    /* Replace with a ENUM('None','SR_SWEEP','BRKR_ALGO') */ \n    `clsHedgeAlgo` = 'None',\n    /* Replace with a VARCHAR(32) */ \n    `clsExecBrkrAlgo` = 'Example_clsExecBrkrAlgo',\n    /* Replace with a VARCHAR(16) */ \n    `clsExecBrkrCode` = 'Example_clsExecBrkrCode',\n    /* Replace with a TINYTEXT */ \n    `clsExecBkkrTags` = 'dummy tiny text',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000',\n    /* Replace with a JSON */\n    `HedgeWavesList` = '{\"key\": \"value\"}'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','Default','A','B','C','D') */ \n    `policy` = 'None';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgPositionHedgePolicyConfig`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','Default','A','B','C','D') */ \n    `policy`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `enabled`,\n    /* Replace with a ENUM('None','IVol','IvS','TVol','TvS','Binary','IvS_25','IvS_50','IvS_75','TvAll','TvAllS') */ \n    `hedgeDeltaRule`,\n    /* Replace with a FLOAT */ \n    `binaryDays`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `balanceSymbols`,\n    /* Replace with a ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') */ \n    `hedgeAlgo`,\n    /* Replace with a VARCHAR(32) */ \n    `execBrkrAlgo`,\n    /* Replace with a VARCHAR(16) */ \n    `execBrkrCode`,\n    /* Replace with a TINYTEXT */ \n    `execBkkrTags`,\n    /* Replace with a ENUM('None','Sec_10','Sec_30','Sec_60','Min_1','Min_10','Min_30') */ \n    `eodHedgeWindow`,\n    /* Replace with a FLOAT */ \n    `eodSymHedgeBandDD`,\n    /* Replace with a FLOAT */ \n    `eodSymHedgeBandGR`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `eodBalanceSymbols`,\n    /* Replace with a ENUM('None','SR_VWAP','SR_PASSIVE','BROKER_ALGO') */ \n    `eodHedgeAlgo`,\n    /* Replace with a VARCHAR(32) */ \n    `eodExecBrkrAlgo`,\n    /* Replace with a VARCHAR(16) */ \n    `eodExecBrkrCode`,\n    /* Replace with a TINYTEXT */ \n    `eodExecBkkrTags`,\n    /* Replace with a ENUM('None','NoAction','CloseAuction','CloseAuctionOrAlgo') */ \n    `clsHedgeWindow`,\n    /* Replace with a FLOAT */ \n    `clsAuctionSymHedgeBandDD`,\n    /* Replace with a FLOAT */ \n    `clsAuctionSymHedgeBandGR`,\n    /* Replace with a FLOAT */ \n    `clsSymHedgeBandDD`,\n    /* Replace with a FLOAT */ \n    `clsSymHedgeBandGR`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `clsBalanceSymbols`,\n    /* Replace with a ENUM('None','SR_SWEEP','BRKR_ALGO') */ \n    `clsHedgeAlgo`,\n    /* Replace with a VARCHAR(32) */ \n    `clsExecBrkrAlgo`,\n    /* Replace with a VARCHAR(16) */ \n    `clsExecBrkrCode`,\n    /* Replace with a TINYTEXT */ \n    `clsExecBkkrTags`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`,\n    /* Replace with a JSON */\n    `HedgeWavesList`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'None',\n    1.23,\n    'None',\n    'None',\n    'Example_execBrkrAlgo',\n    'Example_execBrkrCode',\n    'dummy tiny text',\n    'None',\n    1.23,\n    1.23,\n    'None',\n    'None',\n    'Example_eodExecBrkrAlgo',\n    'Example_eodExecBrkrCode',\n    'dummy tiny text',\n    'None',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'None',\n    'None',\n    'Example_clsExecBrkrAlgo',\n    'Example_clsExecBrkrCode',\n    'dummy tiny text',\n    '2022-01-01 12:34:56.000000',\n    '{\"key\": \"value\"}'\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgPositionHedgePolicyConfig` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','Default','A','B','C','D') */ \n    `policy` = 'None';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='PositionHedgePolicyConfig' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>c});var l=d(96540);const s={},i=l.createContext(s);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);