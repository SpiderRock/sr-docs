"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21252],{4322:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var s=t(74848),r=t(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/SpdrParentReviewRequest",title:"SpdrParentReviewRequest",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/SpdrParentReviewRequest.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentReport",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReport/"},next:{title:"SpdrParentReviewResponse",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function h(e){const d={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"4195-parent-review"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"SystemData"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Product"}),(0,s.jsx)(d.td,{children:"SRTrade"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accessType"}),(0,s.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Key"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"parentNumber"}),(0,s.jsx)(d.td,{children:"CHAR(19)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{children:"SPDR order number"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sysEnvironment"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"original source sys environment Stable Current etc"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"runStatus"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"original source run status ProdBeta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"parentShape"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Parent Shape Single Cross MLeg MLegCross"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"altOrderId"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"alternate order ID usually clOrdId from client"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"altPrevOrderId"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"alternate prev order ID usually origClOrdId from client during cxlreplace"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"altAccnt"}),(0,s.jsx)(d.td,{children:"VARCHAR(32)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"alternate client assigned long account string optional used to map between client and SR account strings"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"altUserName"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"alternate client assigned user name optional used to map between client and SR account strings"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_at"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_ts"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_yr"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_mn"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_dy"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_xx"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secKey_cp"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"secType"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Security Type Stock Future Option"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"securityDesc"}),(0,s.jsx)(d.td,{children:"TINYTEXT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"additional security description"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accnt"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"SR trading account"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"clientFirm"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"SR client firm"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"spdrSource"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"from original parent order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"groupingCode"}),(0,s.jsx)(d.td,{children:"CHAR(19)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"from original parent order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"strategy"}),(0,s.jsx)(d.td,{children:"VARCHAR(36)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"clientsupplied strategy stringvisible on SpiderRock GUI tools and other order reports"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"userName"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"name of the user entering the order"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"orderSide"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"orderSize"}),(0,s.jsx)(d.td,{children:"INT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"maximum fill size contracts"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"firmType"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"used to override firmType in account config"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"orderCapacity"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"positionType"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ssaleFlag"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"used to determine stock autohedge flags"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"locateQuan"}),(0,s.jsx)(d.td,{children:"INT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"available locate quantity if selling short"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"locateFirm"}),(0,s.jsx)(d.td,{children:"VARCHAR(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"firm granting the locate also locate firm used on street FIX orders"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"locatePool"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"locate pool  firm granting the locate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"noCrossGroup"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"exchTraderId"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"largeTraderId"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"tradingLocation"}),(0,s.jsx)(d.td,{children:"VARCHAR(16)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecKey_at"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecKey_ts"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecKey_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecKey_yr"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecKey_mn"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecKey_dy"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeSecType"}),(0,s.jsx)(d.td,{children:"ENUM"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"hedgeUnits"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"userData1"}),(0,s.jsx)(d.td,{children:"TINYTEXT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"userData2"}),(0,s.jsx)(d.td,{children:"TINYTEXT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"childData"}),(0,s.jsx)(d.td,{children:"TINYTEXT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"client supplied data field passes through to down stream child orders"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"OrderLegsList"}),(0,s.jsx)(d.td,{children:"JSON"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"parentNumber"}),(0,s.jsx)(d.td,{children:"1"})]})})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>c});var s=t(96540);const r={},n=s.createContext(r);function i(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);