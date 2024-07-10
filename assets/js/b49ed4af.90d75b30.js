"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[774],{51919:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=d(74848),n=d(28453);const s={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5/FuturePositionRecordV5",title:"FuturePositionRecordV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5/FuturePositionRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/FuturePositionRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ExpirationRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ExpirationRiskRecordV5/"},next:{title:"FutureRiskDetailV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/FutureRiskDetailV5/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/risk-v5/FuturePositionRecordV5",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(r.p,{children:"FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.\\nThese records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.\\nNew records are published immediately when a position changes and about once per minute if no position has changed.\\nNote that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientRisk"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"SRRisk"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accessType"}),(0,t.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_yr"}),(0,t.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_mn"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_dy"}),(0,t.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"VARCHAR(16)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"DATE"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"1900-01-01"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskSession"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/RiskSession",children:"enum - RiskSession"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"Regular"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"VARCHAR(16)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskServerCode"}),(0,t.jsx)(r.td,{children:"VARCHAR(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"aggGroup"}),(0,t.jsx)(r.td,{children:"VARCHAR(16)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"SR assigned aggregation group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"underlying ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"underlying ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{children:"underlying ticker"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"underliersPerCn"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of underlying units per futures contract"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"underlierType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/UnderlierType",children:"enum - UnderlierType"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tickValue"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"NLV value of a single tick change in display premium\tpointValue  tickValue  tickSize"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pointValue"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"NLV value of a single point change in display premium pointValue  tickValue  tickSize"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pointCurrency"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"priceFormat"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"price display format code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futPrc"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"current future price any market session persists if market closedhalted"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futBid"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"current future bid any market session zero if market closedhalted"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futAsk"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"current future ask any market session zero if market closedhalted"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futMark"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"current mark usually mid market freezes at SR CloseMarkTime"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futMarkErrCodes"}),(0,t.jsx)(r.td,{children:"VARCHAR(255)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futMarkSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/UMarkSource",children:"enum - UMarkSource"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futOpnMidMark"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"start of day SR mark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futOpnClrMark"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"start of day clearing mark usually exchange settlement mark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futOpnPosPrv"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"startofday SR contract position rotated from prior day record"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futOpnPosClr"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"startofday CKR contract position supplied by clientclearing firm via clearing position load"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futOpnPos"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"start of period contract position effective can be from either CLR or SR"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futOpnPosSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/PositionSource",children:"enum - PositionSource"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"start of period position source"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnBot"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts bot today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnSld"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts sld today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnBotTrd"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts bot today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnSldTrd"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts sld today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnBotHdg"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts bot today from open pos hedging spdrSourceHedgeTool"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnSldHdg"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts sld today from open pos hedging spdrSourceHedgeTool"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnBotTrh"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts bot today from open pos hedging spdrSourceTradeHedge"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnSldTrh"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts sld today from open pos hedging spdrSourceTradeHedge"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnBotOpn"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts bot today from open pos hedging spdrSourceOpenHedge"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnSldOpn"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts sld today from open pos hedging spdrSourceOpenHedge"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnOpened"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts opened today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cnClosed"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of contracts closed today"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futMnyBot"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"sum of settle cash for all buy executions"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"futMnySld"}),(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"sum of settle cash for all sell executions"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayPnl"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"opnPnlMidMark"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"opnPnlClrMark"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"beta"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"beta usually beta to SPX see AccountConfigbetaSource if applicable"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"betaSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/BetaSource",children:"enum - BetaSource"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"days"}),(0,t.jsx)(r.td,{children:"SMALLINT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"days to expiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rate"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"global rate to expiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"years"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"years to expiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rh"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"rho dPrc  dRate  only for STIR futures"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ve"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"vega dPrc  dVol  only for VIX futures"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ratePr"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"start of period global rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"yearsPr"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"start of period years to expiration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"marginUDn"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Aggregate RiskSlide uPrc dn"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"marginUUp"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Aggregate RiskSlide uPrc up"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numExecutions"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of included SpdrParentExecution records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maxExecDttm"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"1900-01-01 00:00:00.000000"}),(0,t.jsx)(r.td,{children:"maximum activity dttm of execution records included in this future risk record"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"1900-01-01 00:00:00.000000"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_tk"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_yr"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_mn"}),(0,t.jsx)(r.td,{children:"3"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_dy"}),(0,t.jsx)(r.td,{children:"4"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_at"}),(0,t.jsx)(r.td,{children:"5"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fkey_ts"}),(0,t.jsx)(r.td,{children:"6"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"7"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"8"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskSession"}),(0,t.jsx)(r.td,{children:"9"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"10"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgFuturePositionRecordV5` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `riskSession` ENUM('Regular','PostClose') NOT NULL DEFAULT 'Regular',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '',\n    `aggGroup` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned aggregation group',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlying ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlying ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlying ticker',\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'number of underlying units per futures contract',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None',\n    `tickValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32') NOT NULL DEFAULT 'None' COMMENT 'price display format code',\n    `futPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current future price (any market session) (persists if market closed/halted)',\n    `futBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current future bid (any market session) (zero if market closed/halted)',\n    `futAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current future ask (any market session) (zero if market closed/halted)',\n    `futMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current mark (usually mid market) (freezes at SR CloseMarkTime)',\n    `futMarkErrCodes` VARCHAR(255) NOT NULL DEFAULT 'None',\n    `futMarkSource` ENUM('None','OpenMark','CloseMark','Print','LiveQuote','QuoteBound') NOT NULL DEFAULT 'None',\n    `futOpnMidMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start of day SR mark',\n    `futOpnClrMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start of day clearing mark (usually exchange settlement mark)',\n    `futOpnPosPrv` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day SR contract position (rotated from prior day record)',\n    `futOpnPosClr` INT NOT NULL DEFAULT 0 COMMENT 'start-of-day CKR contract position (supplied by client/clearing firm via clearing position load)',\n    `futOpnPos` INT NOT NULL DEFAULT 0 COMMENT 'start of period contract position (effective; can be from either CLR or SR)',\n    `futOpnPosSrc` ENUM('None','Zero','SR','CLR') NOT NULL DEFAULT 'None' COMMENT 'start of period position source',\n    `cnBot` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today',\n    `cnSld` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today',\n    `cnBotTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today',\n    `cnSldTrd` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today',\n    `cnBotHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from open pos hedging (spdrSource=HedgeTool)',\n    `cnSldHdg` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from open pos hedging (spdrSource=HedgeTool)',\n    `cnBotTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from open pos hedging (spdrSource=TradeHedge)',\n    `cnSldTrh` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from open pos hedging (spdrSource=TradeHedge)',\n    `cnBotOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts bot today from open pos hedging (spdrSource=OpenHedge)',\n    `cnSldOpn` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts sld today from open pos hedging (spdrSource=OpenHedge)',\n    `cnOpened` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts opened today',\n    `cnClosed` INT NOT NULL DEFAULT 0 COMMENT 'number of contracts closed today',\n    `futMnyBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sum of settle cash for all buy executions',\n    `futMnySld` DOUBLE NOT NULL DEFAULT 0 COMMENT 'sum of settle cash for all sell executions',\n    `dayPnl` FLOAT NOT NULL DEFAULT 0,\n    `opnPnlMidMark` FLOAT NOT NULL DEFAULT 0,\n    `opnPnlClrMark` FLOAT NOT NULL DEFAULT 0,\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'beta (usually beta to SPX; see AccountConfig.betaSource) (if applicable)',\n    `betaSource` ENUM('None','betaSPX','betaQQQ','betaIWM','clientBeta') NOT NULL DEFAULT 'None',\n    `days` SMALLINT NOT NULL DEFAULT 0 COMMENT 'days to expiration',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'global rate to expiration',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `rh` FLOAT NOT NULL DEFAULT 0 COMMENT 'rho; (dPrc / dRate) - only for STIR futures',\n    `ve` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega; (dPrc / dVol) - only for VIX futures',\n    `ratePr` FLOAT NOT NULL DEFAULT 0 COMMENT 'start of period global rate',\n    `yearsPr` FLOAT NOT NULL DEFAULT 0 COMMENT 'start of period years to expiration',\n    `marginUDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc dn',\n    `marginUUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Aggregate RiskSlide: uPrc up',\n    `numExecutions` INT NOT NULL DEFAULT 0 COMMENT 'number of included SpdrParentExecution records',\n    `maxExecDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'maximum activity dttm of execution records included in this future risk record',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`,`accnt`,`tradeDate`,`riskSession`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.\\nThese records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.\\nNew records are published immediately when a position changes and about once per minute if no position has changed.\\nNote that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks.';\n\n"})})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>c});var t=d(96540);const n={},s=t.createContext(n);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);