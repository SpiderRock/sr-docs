"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93632],{19570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=r(74848),n=r(28453);const i={title:"AccountConfigGateway"},d="Schema: AccountConfigGateway (ID: 5120)",c={id:"Schemas/Schema/Topics/srse-gateway/AccountConfigGateway",title:"AccountConfigGateway",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/5120-srse-gateway/AccountConfigGateway.md",sourceDirName:"Schemas/Schema/Topics/5120-srse-gateway",slug:"/Schemas/Schema/Topics/srse-gateway/AccountConfigGateway",permalink:"/docs/Schemas/Schema/Topics/srse-gateway/AccountConfigGateway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AccountConfigGateway"},sidebar:"schemaSidebar",previous:{title:"VolTimeCalculator",permalink:"/docs/Schemas/Schema/Topics/srse-calculators/VolTimeCalculator"},next:{title:"AutoHedgeControlGateway",permalink:"/docs/Schemas/Schema/Topics/srse-gateway/AutoHedgeControlGateway"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-accountconfiggateway-id-5120",children:["Schema: AccountConfigGateway ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 5120)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"srse-gateway"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRAdvisor"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntColor"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntName"}),(0,s.jsx)(t.td,{children:"string(32)"}),(0,s.jsx)(t.td,{children:"account name (SR assigned)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AccntStatus",children:"enum : AccntStatus"})}),(0,s.jsx)(t.td,{children:"This accounts current status"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accountType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AccountType",children:"enum : AccountType"})}),(0,s.jsx)(t.td,{children:"SR account type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allocMethod"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AllocMethod",children:"enum : AllocMethod"})}),(0,s.jsx)(t.td,{children:"method for delivery of the allocation instruction to the broker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"brkrExDestOpt"}),(0,s.jsx)(t.td,{children:"string(12)"}),(0,s.jsxs)(t.td,{children:['order routing string (if any) [used to force orders to a broker route] [taking and DMA orders only] (eg. "EXCH',":MIAX",'" to force single exchange sweeping of NBBO)']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"brkrExDestStk"}),(0,s.jsx)(t.td,{children:"string(12)"}),(0,s.jsxs)(t.td,{children:['order routing string (if any) [used to force orders to a broker route] [taking and DMA orders only] (eg. "EXCH',":IEX",'" to force single exchange sweeping of NBBO)']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clearingAccntOpt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"eg C233701"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clearingAccntStk"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"eg C233702"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clearingFirmName"}),(0,s.jsx)(t.td,{children:"string(24)"}),(0,s.jsx)(t.td,{children:"string name (can be anything) [commonly used by position loaders] (not used in any FIX message)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clearingFirmOpt"}),(0,s.jsx)(t.td,{children:"string(4)"}),(0,s.jsx)(t.td,{children:"options clearing firm name or code [books and records only; visible in fix drop templates]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clearingFirmStk"}),(0,s.jsx)(t.td,{children:"string(4)"}),(0,s.jsx)(t.td,{children:"stock clearing firm name or code [books and records only; visible in fix drop templates]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientAccnt"}),(0,s.jsx)(t.td,{children:"string(32)"}),(0,s.jsx)(t.td,{children:'client assigned "long" account string (optional) [used to map between client and SR account strings]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientTags"}),(0,s.jsx)(t.td,{children:"text2"}),(0,s.jsx)(t.td,{children:"(optional) user defined account tag(s) (eg. tag,tag,tag,tag) [max of 10,000 total chars (including seps)]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"execBrkrAccntAlloc"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"exec broker account (usually Account<1>)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"execBrkrClFirmAlloc"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"exec broker client/firm (supplied by exec broker) (usually OnBehalfOfCompId<115>)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"execBrkrCode"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"execBrkrCode (determine market access route)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"execBrkrUserNameAlloc"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxOptChildOrdersPerDay"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"maximum number of option child orders allowed for this account per day (zero = no restriction)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"omniAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"omnibus account (if any)  (must be an existing account with the same clientFirm and type=Omnibus)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optAggGroup"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"opt grouping code (for computing aggregate positions) [default = ClientFirm]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"optPositionSrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,s.jsx)(t.td,{children:"override default position rule"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"priStkAggGroup"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"primary stk grouping code (for computing aggregate positions) [default = ClientFirm]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"proxyFirm1"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"proxy firm #1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"proxyFirm2"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"proxy firm #2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"proxyFirm3"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"proxy firm #3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rollupAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"rollup account (must be an existing account with the same clientFirm and type=Rollup)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secStkAggGroup"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:'secondary stk grouping code (for computing aggregate positions) [default = ""]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sourceAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"SR side source account (must be an existing account with the same clientFirm and type=Rollup; only available when type=Clearing)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stkPositionSrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,s.jsx)(t.td,{children:"override default position rule"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theoModel"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"theo model (primary)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theoModel2"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"theo model #2"})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);