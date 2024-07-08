"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4974],{32046:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var r=d(74848),i=d(28453);const s={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentLimit/SpdrParentLimit",title:"SpdrParentLimit",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentLimit/SpdrParentLimit.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentLimit",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentLimit/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentLimit/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentExecution",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentExecution/"},next:{title:"SpdrParentOrder",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentOrder/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (groupingCode) (Not Unique)|Field|Sequence|",id:"secondary-index-groupingcode-not-uniquefieldsequence",level:3},{value:"SECONDARY INDEX (secKey_tk) (Not Unique)|Field|Sequence|",id:"secondary-index-seckey_tk-not-uniquefieldsequence",level:3}];function h(e){const t={h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"3985-parent-orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientTrading"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accnt"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_at"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_ts"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_xx"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_cp"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secType"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spdrSource"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderSide"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"groupingCode"}),(0,r.jsx)(t.td,{children:"CHAR(19)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"SR client firm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sysEnvironment"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"original source sys environment Stable Current etc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"runStatus"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"original source run status ProdBeta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderActiveSize"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"OrderActiveSize  1 will use all available parent order size OrderActiveSize  0 will cancel any existing child orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"addCumFillQuantity"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"If Yes then OrderActiveSize is calculated  order arrival as requested OrderActiveSize  existing CumFillQuantity"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderLimitType"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeLimitClass"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Simple  LimitPrice Surface  BESTLimitPrice SurfLimit Probability  BESTLimitPrice ProbLimit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeLimitClass"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Simple  LimitPrice Surface  BESTLimitPrice SurfLimit Probability  BESTLimitPrice ProbLimit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderPrcLimit"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Applies if LimitType  Prc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderRefUPrc"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"defaultunderliermid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderRefDelta"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"defaultoptiondelta"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderRefGamma"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"defaultoptiongamma"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderVolLimit"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Applies if LimitType  Vol uses SR dividends and borrow rates"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rateOverride"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"depricated zero  ignore zero  override"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sdivOverride"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"depricated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ddivOverride"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"depricated discrete dividend string override yearsToExpirydivYearsdivAmountdivYearsdivAmount"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideCode"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"depricated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderPrcOffset"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"default0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stateModel"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uStateModel"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeAlphaType"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Applies if takeLimitClass  Probability"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeAlphaType"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Applies if makeLimitClass  Probability"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeAlphaFactor"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"22 takeProbLimit  MAXtakeProbability takeProbAvg  takeAlphaFactor  takeProbStd if AlphaType  Relative"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeAlphaFactor"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"22 makeProbLimit  MAXmakeProbability makeProbAvg  makeAlphaFactor  makeProbStd if AlphaType  Relative"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeProbability"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"takeProbLimit  takeProbability if AlphaType  Static"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeProbability"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"makeProbLimit  makeProbability if AlphaType  Static"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeSurfPrcOffset"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"default0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeSurfVolOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"default0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"takeSurfWidthOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"1x to 1x       10  05  avgMktWidth 10  05  avgMktWidth"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeSurfPrcOffset"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"default0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeSurfVolOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"default0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"makeSurfWidthOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"1x to 1x       10  05  avgMktWidth 10  05  avgMktWidth"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderRefEventMult"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderRefEventDttm"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchMask"}),(0,r.jsx)(t.td,{children:"INT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"eligible exchanges 0  all a nonzero mask must be in the subset of the SpdrParentOrder exchMask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cxlUPrcRange"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"cancel parent order ifwhen outside the uPrice range  Halt  also cancel if halted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minUBid"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxUAsk"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional  001  none"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minMaxType"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"if Prc minUBidmaxUAsk are expressed as prices if Pct then they are expresses as pct change since parent order arrival"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minOptionPx"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional option price floor for tied to stock orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"startDttm"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"activeDuration"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional number of seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"progressExposeTime"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"minimum time secs to expose order 0  no minimum used to guarantee that the order is exposed at midmarket for some time before actively taking If the order is an Alpha type order updating this will reset the alpha progression"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expDayWtVegaOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day wtVega offset target"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxExpDayWtVegaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max accntexpiration day time weighted vega long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxExpDayWtVegaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max accntexpiration day time weighted vega short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxExpDayRMetric6Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctexpiration day rMetric6 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxExpDayRMetric6Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctexpiration day rMetric6 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symDayDDeltaOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day delta offset target"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayDDeltaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day delta long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayDDeltaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day delta short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symDayVegaOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day vega offset target"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayVegaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day vega long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayVegaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day vega short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symDayWtVegaOffset"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day wtVega offset target"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayWtVegaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day time weighted vega long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayWtVegaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day time weighted vega short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayRMetric7Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day rMetric7 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxSymDayRMetric7Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol day rMetric7 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayDDeltaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day delta long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayDDeltaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day delta short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayVegaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day vega long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayVegaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day vega short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayVegaAbs"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day vega abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"grpDayVegaRatio"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"target bot  sld ratio eg ratio20 means that neutral is bot vega  2x sld vega"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayContractsLn"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day opt contracts long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayContractsSh"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day opt contracts short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayContractsAbs"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day opt contracts abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric1Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric1 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric1Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric1 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric1Abs"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric1 abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"grpDayRMetric1Ratio"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"target bot  sld ratio eg ratio05 means that neutral is bot rMetric1  05x sld rMetric1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric2Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric2 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric2Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric2 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric3Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric3 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric3Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric3 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric4Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric4 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric4Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric4 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric5Ln"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric5 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGrpDayRMetric5Sh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctriskGroup day rMetric5 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symEmaCxlDDeltaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol 60s EMA delta long positive number  0 is no limit will immediately cxl all option orders in a symbol if any order in the symbol breaches"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symEmaCxlDDeltaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol 60s EMA delta short positive number  0 is no limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symEmaCxlWtVegaLn"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol 60s EMA wtVega long positive number  0 is no limit will immediately cxl all option orders in a symbol if any order in the symbol breaches"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symEmaCxlWtVegaSh"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max acctsymbol 60s EMA wtVega short positive number  0 is no limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"theoVol"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client supplied theoretical volatility used for markup only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clArriveMark"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client specified arrival mark passed through to ParentExecution markup only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData1"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData2"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkrCode"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"an SR assigned execBrkrCode"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedBy"}),(0,r.jsx)(t.td,{children:"VARCHAR(24)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedIn"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"timestamp of last modification"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_isDeleted"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromRotation"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromCache"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromApplication"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromBridge"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_timeSent"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_timeReceived"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_netTimeReceived"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_sysEnvironmentOrigin"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_sysRealmOrigin"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_sourceId"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accnt"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_tk"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_yr"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_mn"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_dy"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_xx"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_cp"}),(0,r.jsx)(t.td,{children:"7"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_at"}),(0,r.jsx)(t.td,{children:"8"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secKey_ts"}),(0,r.jsx)(t.td,{children:"9"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secType"}),(0,r.jsx)(t.td,{children:"10"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spdrSource"}),(0,r.jsx)(t.td,{children:"11"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderSide"}),(0,r.jsx)(t.td,{children:"12"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"groupingCode"}),(0,r.jsx)(t.td,{children:"13"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"14"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"secondary-index-groupingcode-not-uniquefieldsequence",children:"SECONDARY INDEX (groupingCode) (Not Unique)|Field|Sequence|"}),"\n",(0,r.jsx)(t.p,{children:"|---|---|\n|groupingCode|1|"}),"\n",(0,r.jsx)(t.h3,{id:"secondary-index-seckey_tk-not-uniquefieldsequence",children:"SECONDARY INDEX (secKey_tk) (Not Unique)|Field|Sequence|"}),"\n",(0,r.jsx)(t.p,{children:"|---|---|\n|secKey_tk|1|"})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var r=d(96540);const i={},s=r.createContext(i);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);