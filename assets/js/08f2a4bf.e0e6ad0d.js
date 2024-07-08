"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34444],{96248:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>x});var r=t(74848),s=t(28453);const i={},n=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeControl/SpdrAutoHedgeControl",title:"SpdrAutoHedgeControl",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeControl/SpdrAutoHedgeControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeControl",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeControl/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeControl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrAllocationNoticeStatus",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAllocationNoticeStatus/"},next:{title:"SpdrAutoHedgeState",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"5290-strategy-autohedge"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"riskGroupId"}),(0,r.jsx)(d.td,{children:"CHAR(19)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"riskGroupId  0 means hedgeScope  Accnt"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecKey from SpdrParentExecutionhedgeSecKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecKey from SpdrParentExecutionhedgeSecKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecKey from SpdrParentExecutionhedgeSecKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecKey from SpdrParentExecutionhedgeSecKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecKey from SpdrParentExecutionhedgeSecKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecKey from SpdrParentExecutionhedgeSecKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"Execution Hedge SecType Stock or Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altOrderId"}),(0,r.jsx)(d.td,{children:"VARCHAR(24)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"alternate order ID usually clOrdId from client"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altAccnt"}),(0,r.jsx)(d.td,{children:"VARCHAR(32)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"alternate client assigned long account string optional used to map between client and SR account strings"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altUserName"}),(0,r.jsx)(d.td,{children:"VARCHAR(24)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"alternate client assigned user name optional used to map between client and SR account strings"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"srcRoutingCode"}),(0,r.jsx)(d.td,{children:"VARCHAR(65)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"inbound FIX routing code or SRSEtool server appID if any"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"execBrkrCode"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"optional override the default execBrkrCode for this order"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"externExDest"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"routing code for orders directed to an external order router default  null should match FixRoutingTabledestination in SR accnt config"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"externParams"}),(0,r.jsx)(d.td,{children:"VARCHAR(255)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"strategy"}),(0,r.jsx)(d.td,{children:"VARCHAR(36)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"clientsupplied strategy stringvisible on SpiderRock GUI tools and other order reports"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userName"}),(0,r.jsx)(d.td,{children:"VARCHAR(24)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"name of the user entering the order"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"autoHedge"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge algorithm used for restoring tickets"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeTarget"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minHedgeDDelta"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"do not generate autohedge orders if total group Delta is between minHedgeDDelta and maxHedgeDDelta eg100000 100000"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxHedgeDDelta"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderSize"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"initial and maximum size of a hedge parent buy or sell order  note actual working size will be controlled by the autohedge server based on filled deltas but working size cannot exceed orderSize"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"positionType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxExposureSize"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum simultaneous cumulative child order public size exposure 1  orderActiveSize order can overfill if  orderActiveSize and numMakeExchanges  1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"numMakeExchanges"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"number of exchanges 1  4 on which to publish public making orders  Effective number might be less than requested number if sufficient exchanges are not available"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"publicSize"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"public order size handling Noneuse default size handling usually limits public size to typical market size Randomizerandomize public size FullSizeexpose entire order size where possible"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"canOverlapCxlRepl"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"can execution engines overlap cancelreplace operations order can overfill if YES at most one active overlapping cxlreplace operation for each parent order"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"progressRule"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Immediate  all size immediately available TWAP  size released in time intervalsVWAP  size released in volume intervalsTwapForce  size released in intervalsexecution forced at the end of interval"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"progressSliceCnt"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"number of twap slices to use default  4 or 8 max 20"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"progressExposeTime"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"minimum time secs to expose order 0  no minimum used to guarantee that the order is exposed at midmarket for some time before actively taking"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vwapParticipation"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"target vwap participation rate target  of trade activity"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minMktOnClosePct"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Minimum pct 0  100 of order reserved for the onclose auction"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxMakeExchFee"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum making exchange fee in point value zero  no limit use nonzero number for limit to apply"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxTakeExchFee"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum taking exchange fee in point value zero  no limit use nonzero number for limit to apply"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"incTakeExchFee"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"include exchange fee in probability"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"incMakeExchFee"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"include exchange fee in probability"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"makeExchRule"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ActiveMaker exchange preference rule MaxPart will pick exchanges to maximize participation FeeOrder will pick exchanges to minimize fees maximize rebates ImprvOnly will only make when improving NBBO"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxChildOrders"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum number of child orders that can be generated by this parent order order will terminate ifwhen this cap is reachedzero or neg  unlimited"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"exchMask"}),(0,r.jsx)(d.td,{children:"INT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"eligible exchanges 0  all"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"marketSession"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"startDttm"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"optional parent order start time"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderDuration"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"optional number of seconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"activeDuration"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"optional number of seconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"goodTillDttm"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"optional default 20990101"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"parentOrderHandling"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"parentBalanceHandling"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderLimitType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"takeLimitClass"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Simple  LimitPrice Probability  BESTLimitPrice ProbLimit"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"makeLimitClass"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Simple  LimitPrice Probability  BESTLimitPrice ProbLimit"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderPrcLimit"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Applies if LimitType  Prc"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderPrcOffset"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"default0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"stateModel"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"takeAlphaType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Applies if takeLimitClass  Probability"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"makeAlphaType"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Applies if makeLimitClass  Probability"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"takeAlphaFactor"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"22 takeProbLimit  MAXtakeProbability takeProbAvg  takeAlphaFactor  takeProbStd if AlphaType  Relative"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"makeAlphaFactor"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"22 makeProbLimit  MAXmakeProbability makeProbAvg  makeAlphaFactor  makeProbStd if AlphaType  Relative"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"takeProbability"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"takeProbLimit  takeProbability if AlphaType  Static"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"makeProbability"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"makeProbLimit  makeProbability if AlphaType  Static"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"record timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_isDeleted"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromRotation"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromCache"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromApplication"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_fromBridge"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_timeSent"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_timeReceived"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_netTimeReceived"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sysEnvironmentOrigin"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sysRealmOrigin"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"_sourceId"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"readonly"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"riskGroupId"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(d.td,{children:"6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(d.td,{children:"7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(d.td,{children:"8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecType"}),(0,r.jsx)(d.td,{children:"9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"10"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);