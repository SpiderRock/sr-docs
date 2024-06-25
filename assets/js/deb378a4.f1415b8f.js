"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[553],{61229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var r=t(74848),s=t(28453);const d={title:"SpdrAccntCancel"},c="Message: SpdrAccntCancel (ID: 3985)",i={id:"Schema/Topics/parent-orders/SpdrAccntCancel",title:"SpdrAccntCancel",description:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock trading accnt.",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrAccntCancel.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrAccntCancel",permalink:"/docs/Schema/Topics/parent-orders/SpdrAccntCancel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAccntCancel"},sidebar:"schemaSidebar",previous:{title:"SpdrExchRiskMgmt",permalink:"/docs/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt"},next:{title:"SpdrBrokerCancel",permalink:"/docs/Schema/Topics/parent-orders/SpdrBrokerCancel"}},l={},a=[{value:"META DATA  (Topic: parent-orders )",id:"meta-data--topic-parent-orders-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const n={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"message-spdraccntcancel-id-3985",children:["Message: SpdrAccntCancel ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3985)"})]}),"\n",(0,r.jsx)(n.p,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock trading accnt."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(n.h3,{id:"meta-data--topic-parent-orders-",children:"META DATA  (Topic: parent-orders )"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientTrading"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRSE Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(n.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{children:"SR trading account"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"altCancelId"}),(0,r.jsx)(n.td,{children:"string(24)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cxlReason"}),(0,r.jsx)(n.td,{children:"string(16)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"engineName"}),(0,r.jsx)(n.td,{children:"string(32)"}),(0,r.jsx)(n.td,{children:"set by the engine handling event (should be blank on arrival)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"string(24)"}),(0,r.jsx)(n.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"runStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,r.jsx)(n.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sysEnvironment"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(n.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{children:"timestamp of last modification"})]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(96540);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);