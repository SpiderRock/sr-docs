"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41634],{34754:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=r(74848),i=r(28453);const t={title:"SpdrRiskExecution"},n="Schema: SpdrRiskExecution (ID: 2325)",l={id:"MessageSchemas/Schema/Topics/execution-engine/SpdrRiskExecution",title:"SpdrRiskExecution",description:"SpdrRiskExecution records are published every time a SpdrParentExecution record is published",source:"@site/docs/MessageSchemas/Schema/Topics/2270-execution-engine/SpdrRiskExecution.md",sourceDirName:"MessageSchemas/Schema/Topics/2270-execution-engine",slug:"/MessageSchemas/Schema/Topics/execution-engine/SpdrRiskExecution",permalink:"/docs/MessageSchemas/Schema/Topics/execution-engine/SpdrRiskExecution",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRiskExecution"},sidebar:"messageSchemasSidebar",previous:{title:"ExternAggGroupReport",permalink:"/docs/MessageSchemas/Schema/Topics/execution-engine/ExternAggGroupReport"},next:{title:"SpdrSweepDetail",permalink:"/docs/MessageSchemas/Schema/Topics/execution-engine/SpdrSweepDetail"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.h1,{id:"schema-spdrriskexecution-id-2325",children:["Schema: SpdrRiskExecution ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2325)"})]}),"\n",(0,s.jsx)(d.p,{children:"SpdrRiskExecution records are published every time a SpdrParentExecution record is published"}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"2270-execution-engine"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"SystemData"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"SRSE Product"}),(0,s.jsx)(d.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"#"}),(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"10"}),(0,s.jsx)(d.td,{children:"fillNumber"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"SpiderRock execution number (globally unique over trailing 10 days)"})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(d.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"#"}),(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"100"}),(0,s.jsx)(d.td,{children:"sysRealm"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SysRealm",children:"enum : SysRealm"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"103"}),(0,s.jsx)(d.td,{children:"sysEnvironment"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(d.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"106"}),(0,s.jsx)(d.td,{children:"runStatus"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,s.jsx)(d.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"109"}),(0,s.jsx)(d.td,{children:"version"}),(0,s.jsx)(d.td,{children:"byte"}),(0,s.jsx)(d.td,{children:"record version number;starts at zero and goes up every time an execution record is re-published (eg, bust, +1m marks, +10m marks, etc)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"112"}),(0,s.jsx)(d.td,{children:"execStatus"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/ExecStatus",children:"enum : ExecStatus"})}),(0,s.jsx)(d.td,{children:"SpiderRock execution status (Fill,Bust,Correct,Reject,SysRej)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"115"}),(0,s.jsx)(d.td,{children:"execShape"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/ExecShape",children:"enum : ExecShape"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"118"}),(0,s.jsx)(d.td,{children:"packageId"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"SR package Id"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"121"}),(0,s.jsx)(d.td,{children:"parentNumber"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"SR parent number"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"124"}),(0,s.jsx)(d.td,{children:"parentVersion"}),(0,s.jsx)(d.td,{children:"short"}),(0,s.jsx)(d.td,{children:"SPDR order instance number (1 = original order; 2 = 1st cancel/replace, etc)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"127"}),(0,s.jsx)(d.td,{children:"baseParentNumber"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"SPDR order number (initial number in cancel/replace sequence) (also, source parent for dynamically generated orders;eg auto-hedges)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"130"}),(0,s.jsx)(d.td,{children:"clOrdId"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"SR child order clOrdID resulting in fill"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"133"}),(0,s.jsx)(d.td,{children:"riskGroupId"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"riskGroupId (parent order group ID) for this execution report"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"142"}),(0,s.jsx)(d.td,{children:"parentShape"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SpdrOrderShape",children:"enum : SpdrOrderShape"})}),(0,s.jsx)(d.td,{children:"shape of originating parent order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"145"}),(0,s.jsx)(d.td,{children:"secKey"}),(0,s.jsx)(d.td,{children:"OptionKey"}),(0,s.jsx)(d.td,{children:"execution security key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"148"}),(0,s.jsx)(d.td,{children:"secType"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(d.td,{children:"execution security type [Stock, Future, Option]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"151"}),(0,s.jsx)(d.td,{children:"ticker"}),(0,s.jsx)(d.td,{children:"TickerKey"}),(0,s.jsx)(d.td,{children:"base stock key (used for symbol risk aggregation)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"154"}),(0,s.jsx)(d.td,{children:"accnt"}),(0,s.jsx)(d.td,{children:"string(16)"}),(0,s.jsx)(d.td,{children:"SpiderRock trading accnt [broker pkey]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"157"}),(0,s.jsx)(d.td,{children:"clientFirm"}),(0,s.jsx)(d.td,{children:"string(16)"}),(0,s.jsx)(d.td,{children:"SR client firm"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"160"}),(0,s.jsx)(d.td,{children:"spdrSource"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,s.jsx)(d.td,{children:"SpiderRock parent order source code [broker pkey]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"163"}),(0,s.jsx)(d.td,{children:"groupingCode"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"SpiderRock parent broker number [broker pkey]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"353"}),(0,s.jsx)(d.td,{children:"engineName"}),(0,s.jsx)(d.td,{children:"string(32)"}),(0,s.jsx)(d.td,{children:"SpiderRock execution engine that handled the parent order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"169"}),(0,s.jsx)(d.td,{children:"execRole"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/ExecRole",children:"enum : ExecRole"})}),(0,s.jsx)(d.td,{children:"SpiderRock relationship to this execution record"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"172"}),(0,s.jsx)(d.td,{children:"childOrderHandling"}),(0,s.jsx)(d.td,{children:"string(24)"}),(0,s.jsx)(d.td,{children:"child order handling string from the algo that generated the child order responsible for this fill"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"175"}),(0,s.jsx)(d.td,{children:"childAlgoHandler"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/ChildHandler",children:"enum : ChildHandler"})}),(0,s.jsx)(d.td,{children:"algo handler for this child order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"178"}),(0,s.jsx)(d.td,{children:"childSSaleFlag"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,s.jsx)(d.td,{children:"short sale flag"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"181"}),(0,s.jsx)(d.td,{children:"userName"}),(0,s.jsx)(d.td,{children:"string(24)"}),(0,s.jsx)(d.td,{children:"user name associated with the parent order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"184"}),(0,s.jsx)(d.td,{children:"orderSide"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(d.td,{children:"order side"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"187"}),(0,s.jsx)(d.td,{children:"spdrOrderStatus"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"190"}),(0,s.jsx)(d.td,{children:"spdrCloseReason"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"193"}),(0,s.jsx)(d.td,{children:"cumFillQuantity"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"cumulative fills (this parent number only)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"196"}),(0,s.jsx)(d.td,{children:"avgFillPrice"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"199"}),(0,s.jsx)(d.td,{children:"cumLegFillQuantity"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"cumulative fills (spread only)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"202"}),(0,s.jsx)(d.td,{children:"avgLegFillPrice"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"205"}),(0,s.jsx)(d.td,{children:"leavesQty"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"208"}),(0,s.jsx)(d.td,{children:"priceType"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/PriceType",children:"enum : PriceType"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"211"}),(0,s.jsx)(d.td,{children:"firmType"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(d.td,{children:"child order firm type [Customer, ProCust, Firm, MM, etc]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"214"}),(0,s.jsx)(d.td,{children:"priAggGroup"}),(0,s.jsx)(d.td,{children:"string(16)"}),(0,s.jsx)(d.td,{children:"primary aggregation group"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"217"}),(0,s.jsx)(d.td,{children:"secAggGroup"}),(0,s.jsx)(d.td,{children:"string(16)"}),(0,s.jsx)(d.td,{children:"secondary aggregation group"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"220"}),(0,s.jsx)(d.td,{children:"fillTransactDttm"}),(0,s.jsx)(d.td,{children:"DateTime"}),(0,s.jsx)(d.td,{children:"transaction date/time as reported by exchange or down stream broker"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"223"}),(0,s.jsx)(d.td,{children:"fillDttm"}),(0,s.jsx)(d.td,{children:"DateTime"}),(0,s.jsx)(d.td,{children:"Date/time of fill arrival (SRDateTime)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"226"}),(0,s.jsx)(d.td,{children:"fillExch"}),(0,s.jsx)(d.td,{children:"string(12)"}),(0,s.jsx)(d.td,{children:"ExDest code from child order execution report"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"229"}),(0,s.jsx)(d.td,{children:"fillExecId"}),(0,s.jsx)(d.td,{children:"text1"}),(0,s.jsx)(d.td,{children:"street side execution Id"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"232"}),(0,s.jsx)(d.td,{children:"fillExecRefId"}),(0,s.jsx)(d.td,{children:"text1"}),(0,s.jsx)(d.td,{children:"street side execution ref Id (only used when busting an execution)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"235"}),(0,s.jsx)(d.td,{children:"fillLegRefId"}),(0,s.jsx)(d.td,{children:"long"}),(0,s.jsx)(d.td,{children:"legRefId for multileg fills"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"238"}),(0,s.jsx)(d.td,{children:"fillLegRatio"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"legRatio (if spread order)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"241"}),(0,s.jsx)(d.td,{children:"fillExchFee"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SpiderRock estimate of the exchange fee based on liquidity tags (best effort)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"244"}),(0,s.jsx)(d.td,{children:"fillMarket"}),(0,s.jsx)(d.td,{children:"string(8)"}),(0,s.jsx)(d.td,{children:"usually from execReport.lastMkt as reported by child order venue"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"247"}),(0,s.jsx)(d.td,{children:"fillPrice"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"fill price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"250"}),(0,s.jsx)(d.td,{children:"fillQuantity"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"fill quantity"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"253"}),(0,s.jsx)(d.td,{children:"fillBid"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"market bid @ fill arrival"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"256"}),(0,s.jsx)(d.td,{children:"fillAsk"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"market ask @ fill arrival"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"259"}),(0,s.jsx)(d.td,{children:"fillMark"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"mid-market (or SR surface price if option) @ fill arrival"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"262"}),(0,s.jsx)(d.td,{children:"fillUBid"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"underlier market bid @ fill arrival"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"265"}),(0,s.jsx)(d.td,{children:"fillUAsk"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"underlier market bid @ fill arrival"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"268"}),(0,s.jsx)(d.td,{children:"fillVol"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"fill volatility @ fillLimitRefUPrc"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"271"}),(0,s.jsx)(d.td,{children:"fillVe"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"fill vega"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"274"}),(0,s.jsx)(d.td,{children:"fillGa"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"fill gamma"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"277"}),(0,s.jsx)(d.td,{children:"fillDe"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"fill delta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"280"}),(0,s.jsx)(d.td,{children:"fillTh"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"fill theta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"286"}),(0,s.jsx)(d.td,{children:"fillBeta"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SpiderRock estimate of beta to SPX"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"354"}),(0,s.jsx)(d.td,{children:"riskVega"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"risk vega"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"355"}),(0,s.jsx)(d.td,{children:"riskWtVega"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"risk gamma"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"356"}),(0,s.jsx)(d.td,{children:"riskNValue"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"risk delta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"357"}),(0,s.jsx)(d.td,{children:"riskDelta"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"risk delta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"358"}),(0,s.jsx)(d.td,{children:"riskDDelta"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"risk ddelta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"359"}),(0,s.jsx)(d.td,{children:"riskRm1"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"360"}),(0,s.jsx)(d.td,{children:"riskRm2"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"361"}),(0,s.jsx)(d.td,{children:"riskRm3"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"362"}),(0,s.jsx)(d.td,{children:"riskRm4"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"363"}),(0,s.jsx)(d.td,{children:"riskRm5"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"364"}),(0,s.jsx)(d.td,{children:"riskRm6"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"365"}),(0,s.jsx)(d.td,{children:"riskRm7"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"user defined (from parent order) [used to manage order groups]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"366"}),(0,s.jsx)(d.td,{children:"marginUDnVDn"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier down, vol down"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"367"}),(0,s.jsx)(d.td,{children:"marginUDnVUp"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier down, vol up"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"368"}),(0,s.jsx)(d.td,{children:"marginUUpVDn"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier up, vol down"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"369"}),(0,s.jsx)(d.td,{children:"marginUUpVUp"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier up, vol up"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"370"}),(0,s.jsx)(d.td,{children:"riskU50Dn"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier dn 50% shock slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"371"}),(0,s.jsx)(d.td,{children:"riskU50Up"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier up 50% shock slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"322"}),(0,s.jsx)(d.td,{children:"years"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"years to expiration"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"325"}),(0,s.jsx)(d.td,{children:"underliersPerCn"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"option delivery underliers per contract"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"328"}),(0,s.jsx)(d.td,{children:"underlierType"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/UnderlierType",children:"enum : UnderlierType"})}),(0,s.jsx)(d.td,{children:"type of underlier (affects $greek calculations)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"331"}),(0,s.jsx)(d.td,{children:"tickValue"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"334"}),(0,s.jsx)(d.td,{children:"pointValue"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"337"}),(0,s.jsx)(d.td,{children:"pointCurrency"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"340"}),(0,s.jsx)(d.td,{children:"uPrcRatio"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"UPrcRatio (SymbolRatio) from product definition"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"343"}),(0,s.jsx)(d.td,{children:"minTickSize"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"minimum market price variation (dnTickSize if on a boundary)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"346"}),(0,s.jsx)(d.td,{children:"priceFormat"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,s.jsx)(d.td,{children:"SpiderRock price display format code"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"349"}),(0,s.jsx)(d.td,{children:"uPriceFormat"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,s.jsx)(d.td,{children:"SpiderRock underlier price display format code"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"352"}),(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DateTime"}),(0,s.jsx)(d.td,{children:"timestamp of this record [not necessarily the timestamp of the fill itself]"})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function n(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);