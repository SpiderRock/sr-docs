"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64573],{55250:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var r=t(74848),s=t(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/AutoResponderVegaDir",title:"AutoResponderVegaDir",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/AutoResponderVegaDir.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderVegaDir/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AutoResponderSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderSN/"},next:{title:"ExternAggGroupGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupGateway/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"VARCHAR(16)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expiry"}),(0,r.jsx)(d.td,{children:"DATE"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"respSide"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"auction responder side your side"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userName"}),(0,r.jsx)(d.td,{children:"VARCHAR(24)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"username used for responding to auction notices"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"isDisabled"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"canIncludeFlex"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"if yes can respond to auction notices that include flex option legs"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"canIncludeStock"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"if yes can respond to auction notices that include a stock leg"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"cpFlag"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"if not Pair must match all option legs"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minYears"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"both markupminYears and markupmaxYears must be between minYears maxYears"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxYears"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minExpiry"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"both markupminExpiry and markupmaxExpiry must be between minExpiry maxExpiry"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxExpiry"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minXDelta"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"all leg xDelta must be between minXDelta maxXDelta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxXDelta"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minStrike"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"all leg strikes must be between minStrike maxStrike"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxStrike"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minSurfEdgePrem"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"spread surface edge in premium   through surface   behind surface"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"minSurfEdgeVol"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"spread surface edge in vol 001  10 vol pts   through surface   behind surface"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"incFeesInResp"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"include all estimated responder fees in final response price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"roundRule"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxResponseSize"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum number of contracts per response will respond for 100 if auction size  maxResponseSize"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"maxResponseVega"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum total vega per response"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"totalResponseVega"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum vega filled all day"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"totalResponseWtVega"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"maximum wtVega filled all day"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"autoHedge"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeInstrument"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Defaultactual underlier EQT or FUT IndexOptions use ETF FrontMonthactual underlier EQT or front month FUT IndexOptions use FM Fut StockhedgeSecKeyTickerKey FuturehedgeSecKeyExpiryKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeBetaRatio"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeScope"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSession"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"time in force for the autohedge order can be Day or ExtDay None defaults to pOrdertimeInForce"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"riskGroupId"}),(0,r.jsx)(d.td,{children:"CHAR(19)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Default 0 none  Required to be nonzero if autoHedge is something other than None"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"modifiedBy"}),(0,r.jsx)(d.td,{children:"VARCHAR(24)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"modifiedIn"}),(0,r.jsx)(d.td,{children:"ENUM"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_tk"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_at"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker_ts"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"expiry"}),(0,r.jsx)(d.td,{children:"6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"respSide"}),(0,r.jsx)(d.td,{children:"7"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>c});var r=t(96540);const s={},n=r.createContext(s);function i(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);