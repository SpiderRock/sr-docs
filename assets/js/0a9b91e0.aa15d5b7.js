"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7290],{90374:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=r(74848),d=r(28453);const n={title:"SpdrExchRiskMgmt"},i="Schema: SpdrExchRiskMgmt (ID: 3925)",c={id:"MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt",title:"SpdrExchRiskMgmt",description:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.",source:"@site/docs/MessageSchemas/Schema/Topics/3895-order-routing-counter/SpdrExchRiskMgmt.md",sourceDirName:"MessageSchemas/Schema/Topics/3895-order-routing-counter",slug:"/MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt",permalink:"/docs/MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrExchRiskMgmt"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrClientFirmRiskMgmt",permalink:"/docs/MessageSchemas/Schema/Topics/order-routing-counter/SpdrClientFirmRiskMgmt"},next:{title:"3985-parent-orders",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-spdrexchriskmgmt-id-3925",children:["Schema: SpdrExchRiskMgmt ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3925)"})]}),"\n",(0,t.jsx)(s.p,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3895-order-routing-counter"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"exch"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"securityGroup"}),(0,t.jsx)(s.td,{children:"string(6)"}),(0,t.jsx)(s.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"112"}),(0,t.jsx)(s.td,{children:"accnt"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"most recently rejected accnt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"121"}),(0,t.jsx)(s.td,{children:"expires"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"Time the riggered Risk limit expires"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"124"}),(0,t.jsx)(s.td,{children:"modifiedBy"}),(0,t.jsx)(s.td,{children:"string(24)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"127"}),(0,t.jsx)(s.td,{children:"modifiedIn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"103"}),(0,t.jsx)(s.td,{children:"numRejects"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"115"}),(0,t.jsx)(s.td,{children:"rejectText"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"most recent rejectText"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"106"}),(0,t.jsx)(s.td,{children:"secKey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{children:"most recently rejected secKey"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"109"}),(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"118"}),(0,t.jsx)(s.td,{children:"spdrSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"status"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/RiskStatus",children:"enum : RiskStatus"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"130"}),(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"timestamp of last modification"})]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var t=r(96540);const d={},n=t.createContext(d);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);