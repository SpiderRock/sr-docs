"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1391],{76904:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=d(74848),r=d(28453);const s={},l=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeState/SRAutoHedgeState",title:"SRAutoHedgeState",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeState/SRAutoHedgeState.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeState",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeState/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeState/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRAutoHedgeControl",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRAutoHedgeControl/"},next:{title:"SRAvailExecAllocation",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRAvailExecAllocation/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/strategy-autohedge/SpdrAutoHedgeState",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.p,{children:"SpdrAutoHedgeState records are published by autohedge servers and describe the current state of an autohedge controller that is managing RiskGroup autohedge orders."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"5290-strategy-autohedge"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"ClientTrading"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRTrade"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"riskGroupId"}),(0,n.jsx)(t.td,{children:"CHAR(19)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecKey from SpdrAutoHedgeControltargetSecKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecKey from SpdrAutoHedgeControltargetSecKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecKey from SpdrAutoHedgeControltargetSecKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,n.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecKey from SpdrAutoHedgeControltargetSecKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecKey from SpdrAutoHedgeControltargetSecKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecKey from SpdrAutoHedgeControltargetSecKey"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"Execution Hedge SecType from SpdrAutoHedgeControltargetSecType can be None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"VARCHAR(16)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"groupingCode"}),(0,n.jsx)(t.td,{children:"CHAR(19)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"ticker group eg ES ZN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"ticker group eg ES ZN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{children:"ticker group eg ES ZN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securityDesc"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ssaleFlag"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"positionType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeState"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/HedgeGroupState",children:"enum - HedgeGroupState"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeText"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uPrc"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"hedge target underlier price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgePrcLmt"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"price limit of the hedge order if hedge is using hedgeFillUMarkLmtPrc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isDeltaMixed"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accumulatorError"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"grpDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"option delta bot in ctrlDe units"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"grpDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"grpDDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"option delta bot using uMid at time of option fill"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"grpDDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lastGrpFillDttm"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ctrlDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"hedge target delta units bot"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ctrlDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ctrlDDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"hedge target delta bot using actual fill price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ctrlDDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lastCtrlFillDttm"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"absOptCn"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"total number of option contracts executed in this hedge group"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"netDelta"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"grpDeltaBot  grpDeltaSld  ctrlDeltaBot  ctrlDeltaSld"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"netDDelta"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"grpDDeltaBot  grpDDeltaSld  ctrlDDeltaBot  ctrlDDeltaSld"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"openHedgeTime"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"size weighted average time in seconds hedge risk has been open executions to fills"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeTargetVol"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"implied  expected today annualized volatility for hedge target"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expectedPrcRange"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SQRTavgHedgeTime x hedgeTargetVol cone"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"opnDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"open risk delta bot in ctrlDe units"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"opnDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"opnDDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"open risk delta bot in ctrlDe units"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"opnDDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clsDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"close risk delta bot in ctrlDe units"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clsDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clsDDeltaBot"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"close risk delta bot in ctrlDe units"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clsDDeltaSld"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"slippagePnL"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"opnDeltaBot  clsDeltaPrcSld  opnDeltaPrcBot  opnDeltaSld  opnDeltaPrcSld  clsDeltaPrcBot"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"slippageUnitPnL"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"slippagePnL  grpDeltaBot  grpDeltaSld pnl  unit share or fc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"slippageNormPnL"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"slippageUnitPnL  expectedPrcRange"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minDDeltaBand"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxDDeltaBand"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bParentNumber"}),(0,n.jsx)(t.td,{children:"BIGINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bActiveSize"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bBrkrStatus"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bBrkrError"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sParentNumber"}),(0,n.jsx)(t.td,{children:"BIGINT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sActiveSize"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sBrkrStatus"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sBrkrError"}),(0,n.jsx)(t.td,{children:"TINYTEXT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ddMult"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underliersPerCn"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"future underliers per contract"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlierType"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/UnderlierType",children:"enum - UnderlierType"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{children:"type of underlier affects greek calculations"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pointValue"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"NLV value of a single point change in display premium hedge target"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pointCurrency"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"liveHedgeMark"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"hedgeSecKey live mark midmarket zero in SRSE"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"updtReason"}),(0,n.jsx)(t.td,{children:"VARCHAR(20)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"SR system timestamp"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"riskGroupId"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,n.jsx)(t.td,{children:"5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,n.jsx)(t.td,{children:"6"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,n.jsx)(t.td,{children:"7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,n.jsx)(t.td,{children:"8"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hedgeSecType"}),(0,n.jsx)(t.td,{children:"9"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"10"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRAutoHedgeState` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecType (from SpdrAutoHedgeControl.targetSecType) [can be None]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'ticker group (eg. @ES, @ZN)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'ticker group (eg. @ES, @ZN)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ticker group (eg. @ES, @ZN)',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `hedgeState` ENUM('None','NoHedgeCtrl','MLegHold','InBand','BandSh','BandLn','Exception','DDMultErr','UndTypeErr','UndPerCnErr','Init','UPrcErr','AccumulatorError') NOT NULL DEFAULT 'None',\n    `hedgeText` TINYTEXT NOT NULL DEFAULT '',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedge target underlier price',\n    `hedgePrcLmt` FLOAT NOT NULL DEFAULT 0 COMMENT 'price limit of the hedge order (if hedge is using hedgeFillUMarkLmtPrc)',\n    `isDeltaMixed` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `accumulatorError` TINYTEXT NOT NULL DEFAULT '',\n    `grpDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option delta bot (in ctrlDe units)',\n    `grpDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `grpDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option $delta bot (using uMid at time of option fill)',\n    `grpDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `lastGrpFillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ctrlDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedge target delta (units) bot',\n    `ctrlDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `ctrlDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedge target $delta bot (using actual fill price)',\n    `ctrlDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `lastCtrlFillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `absOptCn` INT NOT NULL DEFAULT 0 COMMENT 'total number of option contracts executed in this hedge group',\n    `netDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'grpDeltaBot - grpDeltaSld + ctrlDeltaBot - ctrlDeltaSld',\n    `netDDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'grpDDeltaBot - grpDDeltaSld + ctrlDDeltaBot - ctrlDDeltaSld',\n    `openHedgeTime` FLOAT NOT NULL DEFAULT 0 COMMENT 'size weighted average time (in seconds) hedge risk has been open (executions to fills)',\n    `hedgeTargetVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied / expected today (annualized) volatility for hedge target',\n    `expectedPrcRange` FLOAT NOT NULL DEFAULT 0 COMMENT 'SQRT(avgHedgeTime x hedgeTargetVol) cone',\n    `opnDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'open risk delta bot (in ctrlDe units)',\n    `opnDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `opnDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'open risk $delta bot (in ctrlDe units)',\n    `opnDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `clsDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'close risk delta bot (in ctrlDe units)',\n    `clsDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `clsDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'close risk $delta bot (in ctrlDe units)',\n    `clsDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `slippagePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'opnDeltaBot * (clsDeltaPrcSld - opnDeltaPrcBot) + opnDeltaSld * (opnDeltaPrcSld - clsDeltaPrcBot)',\n    `slippageUnitPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'slippagePnL / (grpDeltaBot + grpDeltaSld) [pnl / unit (share or fc)]',\n    `slippageNormPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'slippageUnitPnL / expectedPrcRange',\n    `minDDeltaBand` FLOAT NOT NULL DEFAULT 0,\n    `maxDDeltaBand` FLOAT NOT NULL DEFAULT 0,\n    `bParentNumber` BIGINT NOT NULL DEFAULT 0,\n    `bActiveSize` INT NOT NULL DEFAULT 0,\n    `bBrkrStatus` TINYTEXT NOT NULL DEFAULT '',\n    `bBrkrError` TINYTEXT NOT NULL DEFAULT '',\n    `sParentNumber` BIGINT NOT NULL DEFAULT 0,\n    `sActiveSize` INT NOT NULL DEFAULT 0,\n    `sBrkrStatus` TINYTEXT NOT NULL DEFAULT '',\n    `sBrkrError` TINYTEXT NOT NULL DEFAULT '',\n    `ddMult` DOUBLE NOT NULL DEFAULT 0,\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'future underliers per contract',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None' COMMENT 'type of underlier (affects $greek calculations)',\n    `pointValue` DOUBLE NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (hedge target)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `liveHedgeMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedgeSecKey live mark (mid-market) [zero in SRSE]',\n    `updtReason` VARCHAR(20) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'SR system timestamp',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`riskGroupId`,`hedgeSecKey_tk`,`hedgeSecKey_yr`,`hedgeSecKey_mn`,`hedgeSecKey_dy`,`hedgeSecKey_at`,`hedgeSecKey_ts`,`hedgeSecType`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrAutoHedgeState records are published by autohedge servers and describe the current state of an autohedge controller that is managing RiskGroup autohedge orders.';\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `riskGroupId`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeSecType`,\n    `clientFirm`,\n    `groupingCode`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `securityDesc`,\n    `ssaleFlag`,\n    `positionType`,\n    `hedgeState`,\n    `hedgeText`,\n    `uPrc`,\n    `hedgePrcLmt`,\n    `isDeltaMixed`,\n    `accumulatorError`,\n    `grpDeltaBot`,\n    `grpDeltaSld`,\n    `grpDDeltaBot`,\n    `grpDDeltaSld`,\n    `lastGrpFillDttm`,\n    `ctrlDeltaBot`,\n    `ctrlDeltaSld`,\n    `ctrlDDeltaBot`,\n    `ctrlDDeltaSld`,\n    `lastCtrlFillDttm`,\n    `absOptCn`,\n    `netDelta`,\n    `netDDelta`,\n    `openHedgeTime`,\n    `hedgeTargetVol`,\n    `expectedPrcRange`,\n    `opnDeltaBot`,\n    `opnDeltaSld`,\n    `opnDDeltaBot`,\n    `opnDDeltaSld`,\n    `clsDeltaBot`,\n    `clsDeltaSld`,\n    `clsDDeltaBot`,\n    `clsDDeltaSld`,\n    `slippagePnL`,\n    `slippageUnitPnL`,\n    `slippageNormPnL`,\n    `minDDeltaBand`,\n    `maxDDeltaBand`,\n    `bParentNumber`,\n    `bActiveSize`,\n    `bBrkrStatus`,\n    `bBrkrError`,\n    `sParentNumber`,\n    `sActiveSize`,\n    `sBrkrStatus`,\n    `sBrkrError`,\n    `ddMult`,\n    `underliersPerCn`,\n    `underlierType`,\n    `pointValue`,\n    `pointCurrency`,\n    `liveHedgeMark`,\n    `updtReason`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRAutoHedgeState`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `hedgeSecKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `hedgeSecKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `hedgeSecKey_tk` = 'Example_hedgeSecKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `hedgeSecKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `hedgeSecKey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `hedgeSecType` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRAutoHedgeState' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>l,x:()=>i});var n=d(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);