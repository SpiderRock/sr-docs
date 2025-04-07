"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["98732"],{37299:function(e,r,n){n.r(r),n.d(r,{default:()=>x,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject/SpdrFixParentReject","title":"SpdrFixParentReject","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject/SpdrFixParentReject.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SpdrFixParentExecution","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentExecution/"},"next":{"title":"SpdrMLegBrkrEvent","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrMLegBrkrEvent/"}}'),d=n("52676"),s=n("91503");let c={},l=void 0,i={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){let r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrFixParentReject",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed"}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altOrderId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"usually client FIX clOrdId"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcRoutingCode"}),(0,d.jsx)(r.td,{children:"VARCHAR(65)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"client FIX session"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientSeqNumIn"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altPrevOrderId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"usually client FIX origClOrdId"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentNumber"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"accnt"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR client firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_xx"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_cp"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'Call'"}),(0,d.jsx)(r.td,{children:"security key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"security type Stock Future Option"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rejectType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/RejectType",children:"enum - RejectType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrOrderStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum - SpdrOrderStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'PendNew'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrCloseReason"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum - SpdrCloseReason"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrRejectReason"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum - SpdrRejectReason"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrRejectLevel"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum - SpdrRiskLevel"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"text"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altOrderId"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcRoutingCode"}),(0,d.jsx)(r.td,{children:"2"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRFixParentReject` (\n    `altOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'usually client FIX clOrdId',\n    `srcRoutingCode` VARCHAR(65) NOT NULL DEFAULT '' COMMENT 'client FIX session',\n    `clientSeqNumIn` INT NOT NULL DEFAULT 0,\n    `altPrevOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'usually client FIX origClOrdId',\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'accnt',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type [Stock, Future, Option]',\n    `rejectType` ENUM('None','ParentOrder','ParentCancel') NOT NULL DEFAULT 'None',\n    `spdrOrderStatus` ENUM('PendNew','New','PendClose','Closed','Rejected','SendReject') NOT NULL DEFAULT 'PendNew',\n    `spdrCloseReason` ENUM('None','Cancelled','Filled','Replaced','Expired','Limit','System','LegReject','DoneForDay','IOCExpire','UserCxl','NoProgress','TooManyRej','ReplReject','AlgoClose','Restart','InvldParentLimit','FilledRepl','ForceClose','DmaReject','DmaExpire','DmaBrkrCxl','ReviewReject','MarketState','AlgoReject','ReviewTimeout','ChildReject','ChildCancel','ReviewClose','UPrcRange','LegBrkrClosed','ExchRisk','CrossFailed') NOT NULL DEFAULT 'None',\n    `spdrRejectReason` ENUM('None','AccntHold','UnknwnOpt','UnknwnStk','Expired','BadSize','BadOrdNum','DupOrdNum','BadVolPx','BadLmtType','BadMktPrc','BadLimit','SysReject','TestOrder','CustType','NoFirmPos','BadCent','NoSurface','UnknwnAcc','UnknwnRoot','OrdSpacing','BadOptMkt','BadStkMkt','SendFailed','BadExpose','BadPrem','NoOptLeg','Min2Leg','Max6Leg','BadStkSz','BadRatio','BadLegID','DupLegID','MixedRoots','OffMkt','CentVol','CentLeg','CentRng','CentSAtm','CentSpln','CentErr','NoRiskGrp','BadDDivs','NoPricer','CalcErr','TwapLate','TwapTime','NoAcctMap','UserUnk','UserHold','GTCHold','SysException','StkCrossed','BadOrdType','BadSSaleFlag','NoBorrow','NoFacilitateAccnt','UnknwnFut','MktNotOpen','NoRoutes','NoLocate','SSaleRstr','NoLegs','BadSide','BadLegKeyType','UnknwnRefStk','BadRefMktPrc','UnknwnRefFut','UnknwnRefAtm','BadRefVe','BadProdDef','StkOddLot','RiskException','MaxParticipation','MarExemptHold','NoMarRec','NullCounter','StkQty','FutQty','OptQty','StkDDelta','FutDDelta','OptDDelta','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVega','DayShWtVega','DayAbsWtVega','DayLnNValue','DayShNValue','DayAbsNValue','AccFrozen','ConfigErr','NoFMFuture','NoLinkage','NoProdDef','BadRiskID','InvldAutoH','LegChange','CxlSpacing','BadHedgeInst','TooLateToReduce','PendCxlRepl','InvldCxlRepl','InvldCxl','DmaReject','NoUPrc','TwapSteps','UnknwnFirm','NoSSaleFlg','AccntNotMM','BadSource','VwapLate','AlreadyFilled','UnknownSecKey','InvldGTD','CutoffTime','ParentShape','NoFaceSide','NoFaceLegs','AuctionSize','InvldClFirm','BadLegBrkr','NoLegBrkr','StkLegNotAllowed','BadLeadSide','UnknwnRefUnd','ExecEngineType','NoExchAvail','SelfTrade','PointValueErr','StkCollar','FutCollar','OptCollar','LmtCollar','RefUPrcErr','InvldUser','InvldAccnt','UnknownCrossId','WidUMkt','UMktCls','UPrcRange','RiskCollarRng') NOT NULL DEFAULT 'None',\n    `spdrRejectLevel` ENUM('None','MarExsOnSponsLvl','MarExsOnSponsTkLvl','MarExsOnCoreLvl','MarExsOnCoreTkLvl','MarSponsOnCoreLvl','MarSponsOnCoreTkLvl','MarCoreOnCoreLvl','MarCoreOnCoreTkLvl','MarCoreOnSubLvl','MarCoreOnSubTkLvl','MarCoreOnAccntLvl','MarCoreOnAccntTkLvl','MarSubOnAccntLvl','MarSubOnAccntTkLvl','MarCoreOnCustomLvl','MarCoreOnCustomTkLvl','MarSubOnCustomLvl','MarSubOnCustomTkLvl','UserLvl','UserTkLvl','AccntLvl','AccntTkLvl','CFirmLvl','CFirmTkLvl','RiskGroup','HardLvl','SoftLvl','GblTkLvl') NOT NULL DEFAULT 'None',\n    `text` TINYTEXT NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    PRIMARY KEY USING HASH (`altOrderId`,`srcRoutingCode`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `altOrderId`,\n    `srcRoutingCode`,\n    `clientSeqNumIn`,\n    `altPrevOrderId`,\n    `parentNumber`,\n    `accnt`,\n    `clientFirm`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `rejectType`,\n    `spdrOrderStatus`,\n    `spdrCloseReason`,\n    `spdrRejectReason`,\n    `spdrRejectLevel`,\n    `text`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRFixParentReject`\nWHERE \n    /* Replace with a VARCHAR(24) */ \n    `altOrderId` = 'Example_altOrderId'\n  AND\n    /* Replace with a VARCHAR(65) */ \n    `srcRoutingCode` = 'Example_srcRoutingCode';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrFixParentReject' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},91503:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return c}});var t=n(75271);let d={},s=t.createContext(d);function c(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);