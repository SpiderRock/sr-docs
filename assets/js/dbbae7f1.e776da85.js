"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89085],{80289:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var i=d(74848),t=d(28453);const l={title:"ToolCompositeExecution"},n="Message: ToolCompositeExecution (ID: 3480)",s={id:"Schema/Topics/mlink-custom/ToolCompositeExecution",title:"ToolCompositeExecution",description:"META DATA  (Topic: mlink-custom )",source:"@site/docs/Schema/Topics/3480-mlink-custom/ToolCompositeExecution.md",sourceDirName:"Schema/Topics/3480-mlink-custom",slug:"/Schema/Topics/mlink-custom/ToolCompositeExecution",permalink:"/sr-docs/docs/Schema/Topics/mlink-custom/ToolCompositeExecution",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ToolCompositeExecution"},sidebar:"schemaSidebar",previous:{title:"QueryResult",permalink:"/sr-docs/docs/Schema/Topics/mlink/QueryResult"},next:{title:"GlobalDividends",permalink:"/sr-docs/docs/Schema/Topics/option-pricing/GlobalDividends"}},c={},h=[{value:"META DATA  (Topic: mlink-custom )",id:"meta-data--topic-mlink-custom-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const r={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"message-toolcompositeexecution-id-3480",children:["Message: ToolCompositeExecution ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 3480)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(r.h3,{id:"meta-data--topic-mlink-custom-",children:"META DATA  (Topic: mlink-custom )"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Attribute"}),(0,i.jsx)(r.th,{children:"Value"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"MLink Token"}),(0,i.jsx)(r.td,{children:"ClientTrading"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SRSE Product"}),(0,i.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Comment"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillNumber"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsx)(r.td,{children:"SpiderRock execution number (globally unique over trailing 10 days)"})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(r.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Comment"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"accnt"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"SpiderRock Accnt Code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"altOrderId"}),(0,i.jsx)(r.td,{children:"string(24)"}),(0,i.jsx)(r.td,{children:"alternate order ID (usually clOrdId from client)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"arriveDnPnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"arrival Dn PnL (arrivalPnL - uDriftArrivalPnL)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"arrivePnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"arrival PnL (parent arrival mark to fill mark)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"baseParentNumber"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsx)(r.td,{children:"SpiderRock base parent number"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"billingCategory"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/BillingCategory",children:"enum : BillingCategory"})}),(0,i.jsx)(r.td,{children:"SpiderRock billing category"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"billingSecType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/BillingSecType",children:"enum : BillingSecType"})}),(0,i.jsx)(r.td,{children:"SpiderRock billing security type"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childAlgoHandler"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ChildHandler",children:"enum : ChildHandler"})}),(0,i.jsx)(r.td,{children:"algo that generated the child order responsible for this fill"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childAsk"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"market ask @ child order send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childBid"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"market bid @ child order send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childCancelReason"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ChildCancelReason",children:"enum : ChildCancelReason"})}),(0,i.jsx)(r.td,{children:"child order cancel code (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childCapacity"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/OrderCapacity",children:"enum : OrderCapacity"})}),(0,i.jsx)(r.td,{children:"child order capacity"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childClOrdId"}),(0,i.jsx)(r.td,{children:"string(24)"}),(0,i.jsx)(r.td,{children:"child order clOrdId resulting in fill (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childCreateReason"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ChildCreateReason",children:"enum : ChildCreateReason"})}),(0,i.jsx)(r.td,{children:"child order create code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childCxlAttempted"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(r.td,{children:"cancel attempt was made on the child order prior to receiving this fill"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"child order send date/time (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childExDest"}),(0,i.jsx)(r.td,{children:"string(12)"}),(0,i.jsx)(r.td,{children:"child order exchange code (downstream)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childExch"}),(0,i.jsx)(r.td,{children:"string(6)"}),(0,i.jsx)(r.td,{children:"child order exchange code (SpiderRock)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childFairPrc"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock fair price @ child order send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childFairWidth"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock fair width @ child order send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childFirmType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,i.jsx)(r.td,{children:"chld order firm type [Customer, ProCust, Firm, MM, etc]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childLimitPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"parent order limit price @ child order send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childLimitRefUPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"limit reference underlier price @ child order send time (options only)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childLimitSlip"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Fill Slippage (ChildLimitPrice to FillPrice)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childMktStance"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/MktStance",children:"enum : MktStance"})}),(0,i.jsx)(r.td,{children:"child order was expected to be marketable @ child send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childOrderHandling"}),(0,i.jsx)(r.td,{children:"string(24)"}),(0,i.jsx)(r.td,{children:"algo handler detail string"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childPositionType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,i.jsx)(r.td,{children:"child order position type"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childPrice"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"child order price"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childProb"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"child order probability (T+x)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childRoutingCode"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{children:"SpiderRock child order routing code (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childSSaleFlag"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,i.jsx)(r.td,{children:"child order short sale flag"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childSize"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"child order size"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childUPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"underlier market price @ child order send time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"childVol"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"child order volatilty (options only)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clArrivePnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"arrival PnL (client arrival mark to fill mark) [from clArriveMark on parent order if any]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clearingAgent"}),(0,i.jsx)(r.td,{children:"string(10)"}),(0,i.jsx)(r.td,{children:"deliverTo agent (eg. DVP Agent Bank ID)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clearingFlipAccnt"}),(0,i.jsx)(r.td,{children:"string(10)"}),(0,i.jsx)(r.td,{children:"deliverTo client account (eg. OCC AID# or a DVP FBO code)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clearingFlipFirm"}),(0,i.jsx)(r.td,{children:"string(6)"}),(0,i.jsx)(r.td,{children:"deliverTo clearing member (eg. OCC#, NSCC#, MPID, or InstitutionID)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clearingFlipType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/FlipType",children:"enum : FlipType"})}),(0,i.jsx)(r.td,{children:"type of clearing corp delivery"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clearingTaxID"}),(0,i.jsx)(r.td,{children:"string(10)"}),(0,i.jsx)(r.td,{children:"deliverTo taxID (eg. DVP TaxID)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clientFirm"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"SpiderRock ClientFirm Code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clientTags"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dayDnPnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"delta neutral PnL (to EOD)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dayM10PnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"delta neutral PnL (Fill + 10M)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dayM1PnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"delta neutral PnL (Fill + 1M)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dayMarkError"}),(0,i.jsx)(r.td,{children:"string(8)"}),(0,i.jsx)(r.td,{children:"day mark error code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dayPnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"actual PnL to EOD (fillMark to liveMark)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"execBrkrAccnt"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"account at executing broker (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"execBrkrClFirm"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"client/firm at executing broker (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"execBrkrCode"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"exec broker acronym (usually an MPID)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"execBrkrUserName"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"user executing broker (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"execRole"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ExecRole",children:"enum : ExecRole"})}),(0,i.jsx)(r.td,{children:"SpiderRock relationship to this execution record (Direct, Drop, etc)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"expCode"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ExpCode",children:"enum : ExpCode"})}),(0,i.jsx)(r.td,{children:"expiration tenor code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillAsk"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"option market ask @ fill arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillBeta"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock estimate of beta to SPX"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillBid"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"option market bid @ fill arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillBrkrRate"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"billing brokerage rate (tier 1)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillDe"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"Date/time of fill arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillExch"}),(0,i.jsx)(r.td,{children:"string(12)"}),(0,i.jsx)(r.td,{children:"ExDest code from child order execution report (lastMkt)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillExchFee"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock exchange fee estimate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillExecStatus"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ExecStatus",children:"enum : ExecStatus"})}),(0,i.jsx)(r.td,{children:"SpiderRock execution status (Fill,Bust,Correct,Reject,SysRej)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillFairPrc"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock fair price @ fill arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillFairWidth"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock fair width @ fill arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillGa"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillLastExecID"}),(0,i.jsx)(r.td,{children:"string(20)"}),(0,i.jsx)(r.td,{children:"most recent execution ID (same as origExecID unless CANCEL/CORRECTION has been processed)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillLimitPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"parent order limit price @ fill arrival time"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillLimitRefUPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"limit reference underlier price @ fill arrival time (options only)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillLiquidityTag"}),(0,i.jsx)(r.td,{children:"string(2)"}),(0,i.jsx)(r.td,{children:"SpiderRock normalized exch liquidity tag"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillOrigExecID"}),(0,i.jsx)(r.td,{children:"string(20)"}),(0,i.jsx)(r.td,{children:"original execution ID string (child order)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillPointValue"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"fill size x pointValue"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillPrice"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"fill price"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillProb"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"fill order probability (T+x)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillRemoteText"}),(0,i.jsx)(r.td,{children:"string(64)"}),(0,i.jsx)(r.td,{children:"text comment from endpoint (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillRoutingRate"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"billing routing rate (tier 1)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillSize"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"fill quantity"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillTp"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"theo price"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillTransactDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"transaction date/time as reported by exchange or down stream broker"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillTv"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"theo vol (user supplied)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillUPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"fill underlier mid-market"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillVe"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fillVol"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"fill volatilty (options only)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"groupingCode"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsx)(r.td,{children:"SpiderRock parent broker number [broker pkey]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"grpNum"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"grp code (000000)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"halfWidthPnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"estimated half-width PnL"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"indNum"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"ind code (00)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"liveMark"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Live @ Record Query"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"liveUPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Live @ Record Query"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"m10Mark"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"T+10min"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"m10UPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"T+10min"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"m1Mark"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"T+1min"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"m1UPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"T+1min"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"marginUDnVDn"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc dn, vol dn"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"marginUDnVUp"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc dn, vol up"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"marginUUpVDn"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc up, vol dn"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"marginUUpVUp"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Aggregate RiskSlide: uPrc up, vol up"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"minTickSize"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nbrNum"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"nbr code (00000000)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentAsk"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"market ask @ parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentAutoHedge"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/AutoHedge",children:"enum : AutoHedge"})}),(0,i.jsx)(r.td,{children:"SpiderRock auto-hedge algorithm (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentBalanceHandling"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ParentBalanceHandling",children:"enum : ParentBalanceHandling"})}),(0,i.jsx)(r.td,{children:"base parent order balance handling [make style algo]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentBid"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"market bid @ parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentDttm"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"Date/time of parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentFairPrc"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock fair price @ parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentFairWidth"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SpiderRock fair width @ parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentLimitClass"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/SpdrLimitClass",children:"enum : SpdrLimitClass"})}),(0,i.jsx)(r.td,{children:"parent order limit class (makeLimitClass if fill was from making; takeLimitClass if fill was from taking)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentLimitPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"parent order limit price @ parent order arrival"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentLimitRefUPrc"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"limit reference underlier price @ parent order arrival (options only)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentLimitType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/SpdrLimitType",children:"enum : SpdrLimitType"})}),(0,i.jsx)(r.td,{children:"parent order limit type [Vol, VolX, PrcDe, PrcDeX, etc]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentNumber"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsx)(r.td,{children:"SpiderRock parent number"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentOrderHandling"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ParentOrderHandling",children:"enum : ParentOrderHandling"})}),(0,i.jsx)(r.td,{children:"base parent order algo [take style algo]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentOrderSize"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"parent order size"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentPositionType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,i.jsx)(r.td,{children:"parent order position type (can be Auto)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentSSaleFlag"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,i.jsx)(r.td,{children:"parent order short sale flag (can be Auto)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentShape"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/SpdrOrderShape",children:"enum : SpdrOrderShape"})}),(0,i.jsx)(r.td,{children:"parent order shape [Single, MLeg, etc]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentStrategy"}),(0,i.jsx)(r.td,{children:"string(36)"}),(0,i.jsx)(r.td,{children:"parent strategy [usually client supplied]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"parentUMark"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"underlier mid mark @ parent order arrival (options only)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"pointCurrency"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"pointValue"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"$NLV value of a point"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"priAggGroup"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"primary aggregation group"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"priceFormat"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,i.jsx)(r.td,{children:"SpiderRock price display format code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"riskGroupId"}),(0,i.jsx)(r.td,{children:"long"}),(0,i.jsx)(r.td,{children:"riskGroupId (parent order group ID) for this execution report"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"secAggGroup"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"secondary aggregation group"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"secKey"}),(0,i.jsx)(r.td,{children:"OptionKey"}),(0,i.jsx)(r.td,{children:"Security Key [can be partially filled in (look at secType)]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"secType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,i.jsx)(r.td,{children:"Security Type [Stock, Future, Option]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"sector"}),(0,i.jsx)(r.td,{children:"string(16)"}),(0,i.jsx)(r.td,{children:"user supplied sector code (from SymbolControl record)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"server"}),(0,i.jsx)(r.td,{children:"string(20)"}),(0,i.jsx)(r.td,{children:"SpiderRock execution engine that handled the parent order"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"side"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(r.td,{children:"order / execution side"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"skewCode"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/SkewCode",children:"enum : SkewCode"})}),(0,i.jsx)(r.td,{children:"strike skew code (@ parent order arrival)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spdrSource"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,i.jsx)(r.td,{children:"SpiderRock parent order source code [broker pkey]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"srcRoutingCode"}),(0,i.jsx)(r.td,{children:"text1"}),(0,i.jsx)(r.td,{children:"inbound FIX routing code, if any"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"subNum"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"sub code (0000)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ticker"}),(0,i.jsx)(r.td,{children:"TickerKey"}),(0,i.jsx)(r.td,{children:"SpiderRock underlier ticker key [synthetic for futures]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"timestamp"}),(0,i.jsx)(r.td,{children:"DateTime"}),(0,i.jsx)(r.td,{children:"SR system timestamp"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"tradeDate"}),(0,i.jsx)(r.td,{children:"DateKey"}),(0,i.jsx)(r.td,{children:"trade date"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdBeta"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade beta"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdDBeta"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade $beta"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdDDelta"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade $delta"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdDGamma"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade dollar gamma"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdDelta"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade delta"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdFairEdge"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SR trade edge (fill price to SR fair price)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdFairEdgeUnit"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"SR trade edge normalized to $100 underlier"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdGamma"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade gamma"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdMarkError"}),(0,i.jsx)(r.td,{children:"string(8)"}),(0,i.jsx)(r.td,{children:"trade mark error code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdMarketValue"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"cn * pointValue * fillPrice"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdNotionalValue"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"cn * pointValue * uPrc"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdTheoEdge"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"theo edge (user supplied theo vol/prc to SpiderRock surface price) (if any)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdTheoEdgeUnit"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"theo edge normalized to $100 underlier"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdTheta"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade theta"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdVega"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade vega"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trdWtVega"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"trade wtVega: (vega * vol / sqrt(max(0.1, years * 4))"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"uDriftArrivePnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"underlier delta drift PnL (arrival uMark to fill uMark)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"uDriftDayPnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"underlier delta drift PnL (to EOD)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"uDriftM10PnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"underlier delta drift PnL (Fill + 10M)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"uDriftM1PnL"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"underlier delta drift PnL (Fill + 1M)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"uPriceFormat"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,i.jsx)(r.td,{children:"SpiderRock underlier price display code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"underlierType"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,i.jsx)(r.td,{children:"underlier type (affects $greek calcs)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"underliersPerCn"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"underliers per contract (futures and options)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"userName"}),(0,i.jsx)(r.td,{children:"string(24)"}),(0,i.jsx)(r.td,{children:"SpiderRock user name associated with the parent order"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"version"}),(0,i.jsx)(r.td,{children:"byte"}),(0,i.jsx)(r.td,{children:"record version number; starts at zero and goes up every time an execution record is re-published (eg, bust, +1m marks, +10m marks, etc)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"widthCode"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../../Enums/WidthCode",children:"enum : WidthCode"})}),(0,i.jsx)(r.td,{children:"market width code"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"years"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"years to expiration (@ parent order arrival)"})]})]})]})]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>s});var i=d(96540);const t={},l=i.createContext(t);function n(e){const r=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(l.Provider,{value:r},e.children)}}}]);