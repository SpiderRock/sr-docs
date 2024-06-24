"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93532],{16264:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=r(74848),s=r(28453);const i={title:"OptionPositionRecordV5"},n="Message: OptionPositionRecordV5 (ID: 4805)",l={id:"Schema/Topics/risk-v5/OptionPositionRecordV5",title:"OptionPositionRecordV5",description:"OptionPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.These records are published by a CoreRiskServer and represent the position and risk markup detail for a single option series.New records are published immediately when a position changes and about once per minute if no position has changed.Note that all records for a single underlier are published simultaneously and records for the same chain should have consistent marks.",source:"@site/docs/Schema/Topics/4740-risk-v5/OptionPositionRecordV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/OptionPositionRecordV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/OptionPositionRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPositionRecordV5"},sidebar:"schemaSidebar",previous:{title:"OptionExAsRecordV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/OptionExAsRecordV5"},next:{title:"ProductRiskDetailV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/ProductRiskDetailV5"}},c={},h=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"message-optionpositionrecordv5-id-4805",children:["Message: OptionPositionRecordV5 ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4805)"})]}),"\n",(0,t.jsxs)(d.p,{children:["OptionPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single option series.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that all records for a single underlier are published simultaneously and records for the same chain should have consistent marks."]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"ClientRisk"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"okey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{children:"ends with '$n' if an MH allocation fraction (n = 1-N) [MMH segment number]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tradeDate"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"riskSession"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/RiskSession",children:"enum : RiskSession"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"aggGroup"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR assigned agg group"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"atmVega"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"live surface atm vega"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"atmVol"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"live surface atm volatility"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"beta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"beta (usually beta to SPX; see AccountConfig.betaSource)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"betaSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"binaryDays"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"hedgeDelta = -1.0,-0.5,0,+0.5,+1.0 if less than binary days to expiration;usually [0.0 - 2.0]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cash"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 30%, vol = 0.10, 6mn deal close"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cashOnEx"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"cash on settlement (multihedge)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnAtmEquiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"current position (atm equivalent contracts: (cnNetPos * ve / atmVega)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnBot"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"number of contracts bot today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnClosed"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"number of contracts closed today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnNetCurPos"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"current position (cnOpnPos + cnBot - cnSld) net of reversals/conversions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnNetOpnPos"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"opening position (cnOpnPos) net of reversals/conversions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnOpened"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"number of contracts opened today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cnSld"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"number of contracts sld today"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dadj"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"dadj frational dividend value; 1.0 except for some multihedge roots"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dayPnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"days"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{children:"days to expiration"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ddiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"present value of discrete dividends (pricing)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ddivPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"de"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"delta;(dOpx / dUPrc)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"deDecay"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"delta decay, charm, delta bleed; (dDelta/dTime)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"divDays"}),(0,t.jsx)(d.td,{children:"short"}),(0,t.jsx)(d.td,{children:"days to the next dividend (0 = exDate is today, -1 = exDate is yesterday)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"dnDayPnl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"earn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"vol earn ramp out (no underlier move)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"edgeClosed"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"edge from closing trades (model #1)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"edgeOpened"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"edge from opening trades (model #1)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"err"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{children:"computation error code (if any)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"errPr"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{children:"prior period computation error code (if any)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"exType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"exValue"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"early exercise value (amLimit - bsPrice)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"fkey"}),(0,t.jsx)(d.td,{children:"ExpiryKey"}),(0,t.jsx)(d.td,{children:"underlying future (if written on a future)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ga"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"gamma;(dDelta / dUPrc)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"gaPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hedgeDe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"hedge delta (either ivol or tvol based;follows binary rules)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hedgeDePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period hedge delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hedgeDeltaRule"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/HedgeDeltaRule",children:"enum : HedgeDeltaRule"})}),(0,t.jsx)(d.td,{children:"HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (sticky delta), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface and atm veSlope (sticky delta)) [AccountConfig.hedgeDelta]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hedgeGa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"hedge gamma (either ivol or tvol based;follows binary rules)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"iVol"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"surface volatility"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"iVolPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period surface volatility"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"iVolSrc"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/MarkSource",children:"enum : MarkSource"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"isBinary"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(d.td,{children:"hedge delta/gamma has switched to 'binary'"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"loBound"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"minimum no-arb opx (zero volatility given sdiv/ddiv/years/rate)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"marginUDnVDn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn, vol dn"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"marginUDnVUp"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc dn, vol up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"marginUUpVDn"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up, vol dn"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"marginUUpVUp"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"Aggregate RiskSlide: uPrc up, vol up"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"markErrCodes"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/MarkErrorCode",children:"flag : MarkErrorCode"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"maxExecDttm"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"maximum activity dttm of execution records included in this option risk summary"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"multihedge"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"multihedgePVRatio"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"pv multiplier (fraction of underlier value (uPerCn x uPrc) / SUM(uPerCn x uPrc) associated with this fragment"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"multihedgeSource"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"MH Ticker Key (starts with '_') (if exists)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"numExecutions"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"number of included SpdrParentExecution records"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlClrMark"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlDDiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * optPhi * dDDv"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlDe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * hedgeDe * dUPrc"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlErr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"unattributed pnl: SR Vol Pnl - opnPnlDe - opnPnlGa - opnPnlTh - opnPnlVe - opnPnlRat - opnPnlSDiv - opnPnlDDiv"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlGa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * 0.5 * optGamma * dUPrc * dUPrc"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlMidMark"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlRate"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * optRho * dRate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlSDiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * optPhi * dSDv"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlSl"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * vol/uPrc * slope * optVega * dUPrc"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlSv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * (SR Vol Pnl - opnPnlDe)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlTh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * optTheta * dTime"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlVa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * optVanna * dVol * dUPrc"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlVe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * optVega * dVol"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlVo"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"open position * mult * 0.5 * optVolga * dVol * dVol"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"opnPnlVolMark"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optAsk"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"current option market ask (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optBid"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"current option market bid (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optMidMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"current option mark (mid market) (freezes at SR CloseMarkTime)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optMnyBot"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"sum of settle cash for all buy executions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optMnySld"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"sum of settle cash for all sell executions"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnClrMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"start-of-day clearing mark [should be corp action adjusted]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnMidMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"start-of-day SR mid mark [corp action adjusted]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnPos"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"start of period contract position (effective; can be from either CLR or SR)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnPosClr"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"start-of-day CKR contract position (supplied by client/clearing firm via clearing position load) [should be corp action adjusted]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnPosPrv"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"start-of-day SR contract position (rotated from prior day record) [corp action adjusted]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnPosSrc"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,t.jsx)(d.td,{children:"start of period position source"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optOpnVolMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"start-of-day SR vol mark [corp action adjusted]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optVolMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"current option mark (volatility surface) (freezes at SR CloseMarkTime)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"optionType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/OptionType",children:"enum : OptionType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ph"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"phi;(dOpx / dSDiv)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"phPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pointCurrency"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"pointValue"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"premOvPar"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"premium over parity for the option position"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"priceFormat"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(d.td,{children:"option price display format code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rate"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"global rate to expiration (pricing)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ratePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rh"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"rho;(dOpx / dRate)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rhPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"riskAlert"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AlertCode",children:"enum : AlertCode"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"riskServerCode"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 5%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd08"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 8%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 10%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 15%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd1e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 1x implied earn move, vol ramp out, delta-neutral"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd2e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 2x implied earn move, vol ramp out, delta-neutral"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd50"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 50%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sd90"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier dn 90%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sdiv"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"continuous stock div (pricing)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sdivPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shBotC0"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"hypothetical shares bot (~1/minute intervals)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shBotC1"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"hypothetical shares bot (~10/minute intervals)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shMnyC0"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"hypothetical money"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shMnyC1"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"hypothetical money"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shSldC0"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"hypothetical shares sld"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"shSldC1"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"hypothetical shares sld"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"srSlope"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"ivol correlation (srSlope = dVol / dUPrc) [always SR surface veSlope]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"strikeRatio"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"strike ratio"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su05"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 5%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su06"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 6%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su10"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 10%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su15"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 15%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su1e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 1x implied earn move, vol ramp out, delta-neutral"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su2e"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 2x implied earn move, vol ramp out, delta-neutral"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su50"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 50%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"su90"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"underlier up 90%, sticky delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tBClsPx"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo buy/close price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tBOpnPx"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo buy/open price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tDe"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tDePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period theo delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tDePr2"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period theo delta"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tErr"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{children:"theo vol error code (TheoError)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tErr2"}),(0,t.jsx)(d.td,{children:"byte"}),(0,t.jsx)(d.td,{children:"theo vol error code (model #2)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tGa"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo gamma"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tOpx"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tOpx2"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo price (model #2)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tOpxPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period theo price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tOpxPr2"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period theo price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tSClsPx"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo sell/close price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tSOpnPx"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo sell/open price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tVol"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo volatility"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tVol2"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theo volatility (model #2)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tVolPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period theo volatility (theoModel)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tVolPr2"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period theo volatility (theoModel#2)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"th"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"theta;(dOpx / dTime)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"thPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"theoModel"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"theo model #1"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"theoModel2"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"theo model #2 (used for edge markup)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tickValue"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ticker"}),(0,t.jsx)(d.td,{children:"TickerKey"}),(0,t.jsx)(d.td,{children:"underlying ticker"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"trdDelta"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"deltas from trades (fixed at the time of trade)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"trdDeltaMny"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"deltas x uPrc from trades (fixed at the time of trade)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"trdGamma"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"gamma from trades (fixed at the time of trade)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uAsk"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"current underlier ask (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uBid"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"current underlier bid (any market session) (zero if market closed/halted)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"current underlier mark (usually mid market) (freezes at SR CloseMarkTime)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uMarkSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/UMarkSource",children:"enum : UMarkSource"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uOpnMark"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"start-of-day SR underlier mark (rotated from prior day record) [corp action adjusted]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uPrc"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"current underlier price (any market session) (persists if market closed/halted)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uPrcRatio"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"stock price multiplier"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"uPriceFormat"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,t.jsx)(d.td,{children:"underlier price display format code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"underlierType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,t.jsx)(d.td,{children:"type of underlier (affects $greek calculations)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"underliersPerCn"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"underliers per contract"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"va"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"vanna (SR surface)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vaPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ve"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"vega;(dOpx / dVol)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"veSlope"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"ivol correlation (veSlope = dVol / dUPrc) [can be either SR surface veSlope or client theo veSlope]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"veSlopePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"prior period veSlope"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"vo"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"volga (SR surface)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"voPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"xde"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"xdelta (C: +0.5 - de, P: -0.5 - de)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"xdePr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"years"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"years to expiration"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"yearsPr"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function n(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);