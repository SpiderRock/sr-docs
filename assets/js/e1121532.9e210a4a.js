"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32005],{61534:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var r=d(74848),s=d(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/SpdrStrategyReportLeggerX",title:"SpdrStrategyReportLeggerX",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/SpdrStrategyReportLeggerX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStrategyReportLegX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/"},next:{title:"SpdrStrategyStateLegX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyStateLegX/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"5355-strategy-legger"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategyNumber"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"strategy number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategyStatus"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accnt"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"SR trading account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"SR client firm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spdrSource"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkrCode"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional override the default execBrkrCode for this order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"externExDest"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"routing code for orders directed to an external order router default  null should match FixRoutingTabledestination in SR accnt config"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"externParams"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategy"}),(0,r.jsx)(t.td,{children:"VARCHAR(36)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"clientsupplied strategy string visible on SpiderRock GUI tools and other order reports"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userName"}),(0,r.jsx)(t.td,{children:"VARCHAR(24)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"name of the user entering the order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderSize"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"strategy size number of complete spreads"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"leggerLimit"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"strategy limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"leggerLimitType"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"strategy limit type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"leggerLimitInc"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"strategy limit price tick increment for"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"leggerAlgo"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"balanceHandling"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"base parent order balance handling make style algo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"legExposurePct"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"percentage of legger order than can be exposed on a single leg without completing related legs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"legCompletionSlippage"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"maximum leg price slippage to complete an open strategy order"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"marketSession"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"startDttm"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional parent order start time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"orderDuration"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional number of seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"goodTillDttm"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"optional default 20990101"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"autoHedge"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeInstrument"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeBetaRatio"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeScope"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSession"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"externHedgeExDest"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"external broker exDest only used if orderHandlingExtern\t\t\t Should match FixRoutingTabledestination type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"externHedgeParams"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData1"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData2"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"childData"}),(0,r.jsx)(t.td,{children:"VARCHAR(255)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"client supplied data field passes through to down stream child orders"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_isDeleted"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromRotation"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromCache"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromApplication"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_fromBridge"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_timeSent"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_timeReceived"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_netTimeReceived"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_sysEnvironmentOrigin"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_sysRealmOrigin"}),(0,r.jsx)(t.td,{children:"ENUM"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_sourceId"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"readonly"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategyNumber"}),(0,r.jsx)(t.td,{children:"1"})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>i,x:()=>c});var r=d(96540);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);