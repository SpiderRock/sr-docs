"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[54323],{87218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(74848),d=t(28453);const s={},c=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentReject/SRFixParentReject",title:"SRFixParentReject",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentReject/SRFixParentReject.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentReject",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentReject/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentReject/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRFixParentExecution",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentExecution/"},next:{title:"SRHedgePolicyState",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRHedgePolicyState/"}},i={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/parent-orders/SpdrFixParentReject",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed"}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3985-parent-orders"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"Internal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"altOrderId"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"usually client FIX clOrdId"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"srcRoutingCode"}),(0,r.jsx)(n.td,{children:"VARCHAR(65)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"client FIX session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientSeqNumIn"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"altPrevOrderId"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"usually client FIX origClOrdId"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parentNumber"}),(0,r.jsx)(n.td,{children:"CHAR(19)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"accnt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR client firm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_xx"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_cp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Call'"}),(0,r.jsx)(n.td,{children:"security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"security type Stock Future Option"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rejectType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/RejectType",children:"enum - RejectType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spdrOrderStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum - SpdrOrderStatus"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'PendNew'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spdrCloseReason"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrCloseReason",children:"enum - SpdrCloseReason"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spdrRejectReason"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrRejectReason",children:"enum - SpdrRejectReason"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spdrRejectLevel"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum - SpdrRiskLevel"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"altOrderId"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"srcRoutingCode"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRFixParentReject` (\n    `altOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'usually client FIX clOrdId',\n    `srcRoutingCode` VARCHAR(65) NOT NULL DEFAULT '' COMMENT 'client FIX session',\n    `clientSeqNumIn` INT NOT NULL DEFAULT 0,\n    `altPrevOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'usually client FIX origClOrdId',\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'accnt',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type [Stock, Future, Option]',\n    `rejectType` ENUM('None','ParentOrder','ParentCancel') NOT NULL DEFAULT 'None',\n    `spdrOrderStatus` ENUM('PendNew','New','PendClose','Closed','Rejected','SendReject') NOT NULL DEFAULT 'PendNew',\n    `spdrCloseReason` ENUM('None','Cancelled','Filled','Replaced','Expired','Limit','System','LegReject','DoneForDay','IOCExpire','UserCxl','NoProgress','TooManyRej','ReplReject','AlgoClose','Restart','InvldParentLimit','FilledRepl','ForceClose','DmaReject','DmaExpire','DmaBrkrCxl','ReviewReject','MarketState','AlgoReject','ReviewTimeout','ChildReject','ChildCancel','ReviewClose','UPrcRange','LegBrkrClosed','ExchRisk','CrossFailed') NOT NULL DEFAULT 'None',\n    `spdrRejectReason` ENUM('None','AccntHold','UnknwnOpt','UnknwnStk','Expired','BadSize','BadOrdNum','DupOrdNum','BadVolPx','BadLmtType','BadMktPrc','BadLimit','SysReject','TestOrder','CustType','NoFirmPos','BadCent','NoSurface','UnknwnAcc','UnknwnRoot','OrdSpacing','BadOptMkt','BadStkMkt','SendFailed','BadExpose','BadPrem','NoOptLeg','Min2Leg','Max6Leg','BadStkSz','BadRatio','BadLegID','DupLegID','MixedRoots','OffMkt','CentVol','CentLeg','CentRng','CentSAtm','CentSpln','CentErr','NoRiskGrp','BadDDivs','NoPricer','CalcErr','TwapLate','TwapTime','NoAcctMap','UserUnk','UserHold','GTCHold','SysException','StkCrossed','BadOrdType','BadSSaleFlag','NoBorrow','NoFacilitateAccnt','UnknwnFut','MktNotOpen','NoRoutes','NoLocate','SSaleRstr','NoLegs','BadSide','BadLegKeyType','UnknwnRefStk','BadRefMktPrc','UnknwnRefFut','UnknwnRefAtm','BadRefVe','BadProdDef','StkOddLot','RiskException','MaxParticipation','MarExemptHold','NoMarRec','NullCounter','StkQty','FutQty','OptQty','StkDDelta','FutDDelta','OptDDelta','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVega','DayShWtVega','DayAbsWtVega','DayLnNValue','DayShNValue','DayAbsNValue','InvldStratAccnt','AccFrozen','ConfigErr','NoFMFuture','NoLinkage','NoProdDef','BadRiskID','InvldAutoH','LegChange','CxlSpacing','BadHedgeInst','TooLateToReduce','PendCxlRepl','InvldCxlRepl','InvldCxl','DmaReject','NoUPrc','TwapSteps','UnknwnFirm','NoSSaleFlg','AccntNotMM','BadSource','VwapLate','AlreadyFilled','UnknownSecKey','InvldGTD','NotSupported','CutoffTime','ParentShape','NoFaceSide','NoFaceLegs','AuctionSize','InvldClFirm','BadLegBrkr','NoLegBrkr','StkLegNotAllowed','BadLeadSide','UnknwnRefUnd','ExecEngineType','NoExchAvail','SelfTrade','PointValueErr','PointCurrencyErr','StkCollar','FutCollar','OptCollar','LmtCollar','RefUPrcErr','InvldUser','InvldAccnt','UnknownCrossId','WidUMkt','UMktCls','UPrcRange','RiskCollarRng') NOT NULL DEFAULT 'None',\n    `spdrRejectLevel` ENUM('None','MarExsOnSponsLvl','MarExsOnSponsTkLvl','MarExsOnCoreLvl','MarExsOnCoreTkLvl','MarSponsOnCoreLvl','MarSponsOnCoreTkLvl','MarCoreOnCoreLvl','MarCoreOnCoreTkLvl','MarCoreOnSubLvl','MarCoreOnSubTkLvl','MarCoreOnAccntLvl','MarCoreOnAccntTkLvl','MarSubOnAccntLvl','MarSubOnAccntTkLvl','MarCoreOnCustomLvl','MarCoreOnCustomTkLvl','MarSubOnCustomLvl','MarSubOnCustomTkLvl','UserLvl','UserTkLvl','AccntLvl','AccntTkLvl','CFirmLvl','CFirmTkLvl','RiskGroup','HardLvl','SoftLvl','GblTkLvl') NOT NULL DEFAULT 'None',\n    `text` TINYTEXT NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    PRIMARY KEY USING HASH (`altOrderId`,`srcRoutingCode`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `altOrderId`,\n    `srcRoutingCode`,\n    `clientSeqNumIn`,\n    `altPrevOrderId`,\n    `parentNumber`,\n    `accnt`,\n    `clientFirm`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `rejectType`,\n    `spdrOrderStatus`,\n    `spdrCloseReason`,\n    `spdrRejectReason`,\n    `spdrRejectLevel`,\n    `text`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRFixParentReject`\nWHERE \n    /* Replace with a VARCHAR(24) */ \n    `altOrderId` = 'Example_altOrderId'\n  AND\n    /* Replace with a VARCHAR(65) */ \n    `srcRoutingCode` = 'Example_srcRoutingCode';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRFixParentReject' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(96540);const d={},s=r.createContext(d);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);