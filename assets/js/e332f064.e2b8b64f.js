"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36808],{34969:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>x});var s=d(74848),i=d(28453);const r={},n=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/SymbolRiskDetailV5",title:"SymbolRiskDetailV5",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/SymbolRiskDetailV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SymbolMarginSummaryV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/"},next:{title:"SymbolRiskSummaryV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskSummaryV5/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRRisk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"SR assigned client firm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientTags"}),(0,s.jsx)(t.td,{children:"TEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"optional user defined account tags eg tagtagtagtag max of 10000 total chars including seps"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkStatus"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optStatus"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskClass"}),(0,s.jsx)(t.td,{children:"VARCHAR(8)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Symbol Risk Class Code user supplied SymbolControlriskClass"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theoModel"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SR assigned theo model tag associated with user supplied theo surfaces AccountConfigtheoModel"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theoModel2"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SR assigned theo model2 tag associated with user supplied theo surfaces AccountConfigtheoModel2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hedgeDeltaRule"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"HedgeDelta Source IVol  use SR implied surface sticky strike IvS  use SR surface sticky delta TVol  use user supplied theo surface sticky strike TvS  use user supplied theo surface and atm veSlope sticky delta AccountConfighedgeDelta"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"holdReason"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"User supplied description only informational SymbolControlholdReason"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"binaryDays"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Fractional days 0  50 prior to expiration after which hedgeDeltas become binary 10 05 0 05 10 SymbolControlbinaryDays"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ctrlUpdate"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"last update dttm of SymbolControl record SymbolControltimestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"periodEndTime"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"DTTM of the end of the current trading period"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbolType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SymbolType Equity ETF ShortETF ADR CashIndex FutureComplex"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Symbol namedescription"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sector"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"beta"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"beta usually beta to SPX see AccountConfigbetaSource"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"betaSource"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkVolume"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"trailing 30 day average daily stock volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optVolume"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"trailing 30 day average daily option volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tapeCode"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"market data tape code"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"marginType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"margin slide type NMSEquity   15 NMSIndex  86 NMSMedium  10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pointCurrency"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dAmt"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"amount of the next expected dividend"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dDays"}),(0,s.jsx)(t.td,{children:"SMALLINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"days to next expected dividend negative indicates days from a recent exdate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eDays"}),(0,s.jsx)(t.td,{children:"SMALLINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"days to next expected earnings negative indicates days from a recent announcement"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"locateQuan"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"starting locate quantity in this symbol befores trades"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"availableLocateQuan"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"available equity locate quantity in this symbol after trades"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gcFlag"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"is this symbol a general collateral name no special borrow rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gcRate"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"expected overnight rate if general collateral usually FF overnight rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"borrowRate"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"expected overnight borrow rate special borrrow"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stMinIVol"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"minimum atm implied volatility all expirations with a position"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stMaxIVol"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"maximum atm implied volatility all expirations with a position"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"earnMult"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"expected earnings multiplier affects some risk slides 10  80"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"earnMultErr"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"baseVol"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"from earn mult fit 075 yrs"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tailVol"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"weighted toward max expiration"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"6"})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>l});var s=d(96540);const i={},r=s.createContext(i);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);