"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63509],{64446:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(74848),t=n(28453);const i={title:"AccountExchGroupConfig"},d="Schema: AccountExchGroupConfig (ID: 1806)",c={id:"Schemas/Schema/Topics/client-config/AccountExchGroupConfig",title:"AccountExchGroupConfig",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/1800-client-config/AccountExchGroupConfig.md",sourceDirName:"Schemas/Schema/Topics/1800-client-config",slug:"/Schemas/Schema/Topics/client-config/AccountExchGroupConfig",permalink:"/docs/Schemas/Schema/Topics/client-config/AccountExchGroupConfig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AccountExchGroupConfig"},sidebar:"schemaSidebar",previous:{title:"AccountConfig",permalink:"/docs/Schemas/Schema/Topics/client-config/AccountConfig"},next:{title:"AccountRouteConfig",permalink:"/docs/Schemas/Schema/Topics/client-config/AccountRouteConfig"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-accountexchgroupconfig-id-1806",children:["Schema: AccountExchGroupConfig ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1806)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"client-config"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRAdmin"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exchGroup"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExchGroup",children:"enum : ExchGroup"})}),(0,s.jsx)(r.td,{children:"eg (NMS, CMX, ICE, ESX)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSecType",children:"enum : SpdrSecType"})}),(0,s.jsx)(r.td,{children:"eg (Stock, Future, Option)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"SR assigned client firm acronym"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allocAccnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allocExDest"}),(0,s.jsx)(r.td,{children:"string(12)"}),(0,s.jsx)(r.td,{children:"allocation routing string (if any) [Allocation Messages]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allocMLegRule"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AllocMLegRule",children:"enum : AllocMLegRule"})}),(0,s.jsx)(r.td,{children:"rule for how to send allocation instructions for mleg orders to the broker"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allocMethod"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AllocMethod",children:"enum : AllocMethod"})}),(0,s.jsx)(r.td,{children:"method for delivery of the allocation instruction to the broker"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allowReviewExecs"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"allow stage review executions [StageReview Orders]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"auctionResponder"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AuctionResponder",children:"enum : AuctionResponder"})}),(0,s.jsx)(r.td,{children:"can respond to exchange / away auctions"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"betaSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BetaSource",children:"enum : BetaSource"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"canISOSweep"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"can initiate ISO Sweep WaitTrigger orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"canRequestLiquidity"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"can request additional liquidity (from the ATS) when taking"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catAccnt"}),(0,s.jsx)(r.td,{children:"string(40)"}),(0,s.jsx)(r.td,{children:"CAT Firm Designated ID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catBrkrAccnt"}),(0,s.jsx)(r.td,{children:"string(40)"}),(0,s.jsx)(r.td,{children:"Brkrs CAT Firm Designated ID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catBrkrAccntType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CatAccntType",children:"enum : CatAccntType"})}),(0,s.jsx)(r.td,{children:"CAT account holder type"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catBrkrFirmType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CatFirmType",children:"enum : CatFirmType"})}),(0,s.jsx)(r.td,{children:"CAT source firm type"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catBrkrIMID"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"B/D firm FDID (only if client is a B/D) (supplied by FINRA fbo client)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catReportable"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CatReportType",children:"enum : CatReportType"})}),(0,s.jsx)(r.td,{children:"CAT reportable type"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clearingAccnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"eg C233702"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clearingFirm"}),(0,s.jsx)(r.td,{children:"string(4)"}),(0,s.jsx)(r.td,{children:"stock clearing firm name or code [books and records only; not visible in fix templates]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clearingFirmName"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"string name (can be anything) [commonly used by position loaders] (not used in any FIX message)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clearingLoadTime"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ClearingLoadTime",children:"enum : ClearingLoadTime"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientAccnt"}),(0,s.jsx)(r.td,{children:"string(32)"}),(0,s.jsx)(r.td,{children:"client assigned account string (optional) [overrides AccountConfig.clientAccnt]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientAccntIds"}),(0,s.jsx)(r.td,{children:"text2"}),(0,s.jsx)(r.td,{children:"all other accounts that affect this accounts position (eg. C233702, C233703).  Affects incoming FIX drops (and perhaps scripts)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientUserName"}),(0,s.jsx)(r.td,{children:"string(32)"}),(0,s.jsx)(r.td,{children:"client assigned account userName (optional) [overrides AccountConfig.clientUserName]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"custOrderCapacity"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OrderCapacity",children:"enum : OrderCapacity"})}),(0,s.jsx)(r.td,{children:"Order capacity of Account at Customer's Firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cxlOnHalt"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"cancel parent orders if the item being traded (or underlier) is halted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execBrkrAccntAlloc"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"exec broker account (usually Account)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execBrkrClFirmAlloc"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"exec broker client/firm (supplied by exec broker) (usually OnBehalfOfCompId<115>)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execBrkrUserNameAlloc"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execEngineMode"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExecEngineMode",children:"enum : ExecEngineMode"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execMode"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExecMode",children:"enum : ExecMode"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"firmType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futClearingRange"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/FutClearingRange",children:"enum : FutClearingRange"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futCustType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/FutCustType",children:"enum : FutCustType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"incMakeExchFee"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/IncExchFee",children:"enum : IncExchFee"})}),(0,s.jsx)(r.td,{children:"include exchange fee in limit calculations"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"incTakeExchFee"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/IncExchFee",children:"enum : IncExchFee"})}),(0,s.jsx)(r.td,{children:"include exchange fee in limit calculations"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"isLowVelocity"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"if Yes all 390Rule counters will be computed even if not a PriorityCust"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"locateFirm"}),(0,s.jsx)(r.td,{children:"string(6)"}),(0,s.jsx)(r.td,{children:"locate firm [must be one of the items in the clientFirmConfig.LocatePool list]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"locatePool"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"locate pool @ firm granting the locate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"makeExchList"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"exchange order for non-marketable orders eg: BATS,NYSE,CBOE"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"makeExchRule"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MakeExchRule",children:"enum : MakeExchRule"})}),(0,s.jsx)(r.td,{children:"ActiveMaker exchange preference rule: 'MaxPart' will pick exchanges to maximize participation; 'FeeOrder' will pick exchanges to minimize fees [maximize rebates]; 'ImprvOnly' will only make when improving NBBO."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxChildOrdersPerDay"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"maximum number of option child orders allowed for this account per day (zero = no restriction)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxParentBrkrsPerDay"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"maximum number of execution engine stock broker (default=10,000)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifiedBy"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifiedIn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"oddLotFlag"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OddLotFlag",children:"enum : OddLotFlag"})}),(0,s.jsx)(r.td,{children:"RoundLotsOnly restricts most child order sizes to multiples of 100"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderCapacity"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OrderCapacity",children:"enum : OrderCapacity"})}),(0,s.jsx)(r.td,{children:"Order capacity"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"positionSrc"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,s.jsx)(r.td,{children:"override default position rule"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"priAggGroup"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"primary stk grouping code (for computing aggregate positions) [default = ClientFirm]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"requireExternPos"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"all sell orders require an ExternAggGroupReport (externSource = SRSE) record"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"requireLocate"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"locate check enforced in SR systems"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"reviewExDest"}),(0,s.jsx)(r.td,{children:"string(12)"}),(0,s.jsx)(r.td,{children:"order routing string (if any) [StageReview Orders]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"riskCxlThrottle"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"maximum risk throttle cancel rate (per second)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"roundRule"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,s.jsx)(r.td,{children:"Stock Price Rounding rule (Fuzzy = 90%, Exact = 100%)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"routeAllocRule"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RouteAllocRule",children:"enum : RouteAllocRule"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secAggGroup"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:'secondary stk grouping code (for computing aggregate positions) [default = ""]'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"splitZero"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"sell stock down to zero before selling short"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"stageReview"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/StageReview",children:"enum : StageReview"})}),(0,s.jsx)(r.td,{children:"Strict will re-review size incr/decr and userPrc changes; Normal will re-review size incr only"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"stageReviewURL"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"Stage Review URL for this account (HTTP(S) / REST / WS)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"takeExchList"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"exchange order for marketable orders eg: BATS,NYSE,CBOE"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tiedPriceRounding"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TiedPriceRounding",children:"enum : TiedPriceRounding"})}),(0,s.jsx)(r.td,{children:"option limit price rounding rule: Loose = up to 1/4 tick extra; Strict = never exceed limit"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{children:"timestamp of last modification"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"userMarking"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"users are required to do the long/short marking on orders"})]})]})]}),(0,s.jsx)(r.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(r.p,{children:"AccntRouteTable"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"brkrExDest"}),(0,s.jsx)(r.td,{children:"string(12)"}),(0,s.jsx)(r.td,{children:"order routing string (if any) [used to force orders use a specific ExDest regardless of the actual exchange destination]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"enabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execBrkrCode"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"routeAllocMetric"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>c});var s=n(96540);const t={},i=s.createContext(t);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);