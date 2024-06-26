"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27792],{89114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=r(74848),d=r(28453);const s={title:"SpdrParentLimit"},n="Schema: SpdrParentLimit (ID: 4090)",l={id:"Schemas/Schema/Topics/parent-orders/SpdrParentLimit",title:"SpdrParentLimit",description:"SpdrParentLimit records are supplied by clients (via SRSE) for use with parent orders having orderLimitType=Aux.  This table can be updated either before or after a parent order begins working and will influence the limit(s) used when working child orders.  Updates to this table do not constitute cancel/replace operations for the parent order.",source:"@site/docs/Schemas/Schema/Topics/3985-parent-orders/SpdrParentLimit.md",sourceDirName:"Schemas/Schema/Topics/3985-parent-orders",slug:"/Schemas/Schema/Topics/parent-orders/SpdrParentLimit",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrParentLimit",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentLimit"},sidebar:"schemaSidebar",previous:{title:"SpdrParentExecution",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrParentExecution"},next:{title:"SpdrParentOrder",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrParentOrder"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"schema-spdrparentlimit-id-4090",children:["Schema: SpdrParentLimit ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 4090)"})]}),"\n",(0,i.jsx)(t.p,{children:"SpdrParentLimit records are supplied by clients (via SRSE) for use with parent orders having orderLimitType=Aux.  This table can be updated either before or after a parent order begins working and will influence the limit(s) used when working child orders.  Updates to this table do not constitute cancel/replace operations for the parent order."}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"ClientTrading"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"parent-orders"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accnt"}),(0,i.jsx)(t.td,{children:"string(16)"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey"}),(0,i.jsx)(t.td,{children:"OptionKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spdrSource"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"groupingCode"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientFirm"}),(0,i.jsx)(t.td,{children:"string(16)"}),(0,i.jsx)(t.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"activeDuration"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"[optional] (number of seconds)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"addCumFillQuantity"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{children:"If Yes then OrderActiveSize is calculated @ order arrival as requested OrderActiveSize + existing 'CumFillQuantity'."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clArriveMark"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"client specified arrival mark (passed through to ParentExecution; markup only)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cxlUPrcRange"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/UPrcCxl",children:"enum : UPrcCxl"})}),(0,i.jsx)(t.td,{children:"cancel parent order if/when outside the uPrice range [ _Halt = also cancel if halted ]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ddivOverride"}),(0,i.jsx)(t.td,{children:"text1"}),(0,i.jsxs)(t.td,{children:["(depricated) discrete dividend string override ([yearsToExpiry,divYears",":divAmount",",divYears",":divAmount",", ...])"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchMask"}),(0,i.jsx)(t.td,{children:"uint"}),(0,i.jsx)(t.td,{children:"eligible exchanges (0 = all), a non-zero mask must be in the subset of the SpdrParentOrder exchMask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"execBrkrCode"}),(0,i.jsx)(t.td,{children:"string(16)"}),(0,i.jsx)(t.td,{children:"an SR assigned execBrkrCode"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expDayWtVegaOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day wtVega offset (target)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"grpDayRMetric1Ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"target bot / sld ratio (eg ratio=0.5 means that neutral is bot rMetric1 = 0.5x sld rMetric1)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"grpDayVegaRatio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"target bot / sld ratio (eg ratio=2.0 means that neutral is bot vega = 2x sld vega)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeAlphaFactor"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[-2,+2] makeProbLimit = MAX(makeProbability, makeProbAvg + makeAlphaFactor * makeProbStd) [if AlphaType = Relative]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeAlphaType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AlphaType",children:"enum : AlphaType"})}),(0,i.jsx)(t.td,{children:"Applies if makeLimitClass = Probability"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeLimitClass"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrLimitClass",children:"enum : SpdrLimitClass"})}),(0,i.jsx)(t.td,{children:"Simple = LimitPrice, Surface = BEST(LimitPrice, SurfLimit), Probability = BEST(LimitPrice, ProbLimit)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeProbability"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"makeProbLimit = makeProbability [if AlphaType = Static]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeSurfPrcOffset"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"default=0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeSurfVolOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"default=0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"makeSurfWidthOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[-1.x to +1.x]       -1.0 = -0.5 * avgMktWidth, +1.0 = +0.5 * avgMktWidth"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxExpDayRMetric6Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+expiration day rMetric6 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxExpDayRMetric6Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+expiration day rMetric6 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxExpDayWtVegaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max accnt+expiration day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxExpDayWtVegaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max accnt+expiration day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayContractsAbs"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day opt contracts abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayContractsLn"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day opt contracts long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayContractsSh"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day opt contracts short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayDDeltaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day $delta long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayDDeltaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day $delta short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric1Abs"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric1 abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric1Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric1 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric1Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric1 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric2Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric2 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric2Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric2 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric3Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric3 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric3Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric3 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric4Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric4 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric4Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric4 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric5Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric5 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayRMetric5Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day rMetric5 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayVegaAbs"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day vega abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayVegaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day vega long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxGrpDayVegaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+riskGroup day vega short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayDDeltaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day $delta long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayDDeltaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day $delta short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayRMetric7Ln"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day rMetric7 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayRMetric7Sh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day rMetric7 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayVegaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayVegaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayWtVegaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxSymDayWtVegaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxUAsk"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[optional] (< $0.01 = none)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minMaxType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/MinMaxType",children:"enum : MinMaxType"})}),(0,i.jsx)(t.td,{children:"if Prc minUBid/maxUAsk are expressed as prices; if Pct then they are expresses as pct change since parent order arrival"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minOptionPx"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[optional] option price floor for tied to stock orders"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minUBid"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[optional]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"modifiedBy"}),(0,i.jsx)(t.td,{children:"string(24)"}),(0,i.jsx)(t.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"modifiedIn"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderActiveSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"OrderActiveSize = -1 will use all available parent order size; OrderActiveSize = 0 will cancel any existing child orders;"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderLimitType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrLimitType",children:"enum : SpdrLimitType"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderPrcLimit"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"Applies if LimitType = Prc[]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderPrcOffset"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"default=0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderRefDelta"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"default=option.delta"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderRefEventDttm"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderRefEventMult"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderRefGamma"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"default=option.gamma"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderRefUPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"default=underlier.mid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"orderVolLimit"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Applies if LimitType = Vol[] [uses SR dividends and borrow rates]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"overrideCode"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/OverrideCode",children:"enum : OverrideCode"})}),(0,i.jsx)(t.td,{children:"(depricated)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"progressExposeTime"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"minimum time (secs) to expose order (0 = no minimum; used to guarantee that the order is exposed at mid-market for some time before actively taking) (If the order is an Alpha type order, updating this will reset the alpha progression)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"rateOverride"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"(depricated) zero = ignore;> zero = override"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"runStatus"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,i.jsx)(t.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sdivOverride"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"(depricated)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"startDttm"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stateModel"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symDayDDeltaOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day $delta offset (target)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symDayVegaOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day vega offset (target)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symDayWtVegaOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol day wtVega offset (target)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symEmaCxlDDeltaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symEmaCxlDDeltaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol 60s EMA $delta short (positive number; <= 0 is no limit)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symEmaCxlWtVegaLn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symEmaCxlWtVegaSh"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"max acct+symbol 60s EMA wtVega short (positive number; <= 0 is no limit)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sysEnvironment"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,i.jsx)(t.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeAlphaFactor"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[-2,+2] takeProbLimit = MAX(takeProbability, takeProbAvg + takeAlphaFactor * takeProbStd) [if AlphaType = Relative]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeAlphaType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AlphaType",children:"enum : AlphaType"})}),(0,i.jsx)(t.td,{children:"Applies if takeLimitClass = Probability"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeLimitClass"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrLimitClass",children:"enum : SpdrLimitClass"})}),(0,i.jsx)(t.td,{children:"Simple = LimitPrice, Surface = BEST(LimitPrice, SurfLimit), Probability = BEST(LimitPrice, ProbLimit)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeProbability"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"takeProbLimit = takeProbability [if AlphaType = Static]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeSurfPrcOffset"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"default=0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeSurfVolOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"default=0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"takeSurfWidthOffset"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[-1.x to +1.x]       -1.0 = -0.5 * avgMktWidth, +1.0 = +0.5 * avgMktWidth"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"theoVol"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"client supplied theoretical volatility (used for markup only)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"timestamp of last modification"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uStateModel"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/StateModel",children:"enum : StateModel"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"userData1"}),(0,i.jsx)(t.td,{children:"text1"}),(0,i.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"userData2"}),(0,i.jsx)(t.td,{children:"text1"}),(0,i.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var i=r(96540);const d={},s=i.createContext(d);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);