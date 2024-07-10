"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[30767],{74906:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var t=s(74848),n=s(28453);const d={title:"SpdrRiskGroupCancel"},c="Schema: SpdrRiskGroupCancel (ID: 1467)",i={id:"MessageSchemas/Schema/Topics/parent-orders/SpdrRiskGroupCancel",title:"SpdrRiskGroupCancel",description:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable.",source:"@site/docs/MessageSchemas/Schema/Topics/3985-parent-orders/SpdrRiskGroupCancel.md",sourceDirName:"MessageSchemas/Schema/Topics/3985-parent-orders",slug:"/MessageSchemas/Schema/Topics/parent-orders/SpdrRiskGroupCancel",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrRiskGroupCancel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRiskGroupCancel"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrReleaseWaitTrigger",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrReleaseWaitTrigger"},next:{title:"SpdrRouteCancel",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrRouteCancel"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-spdrriskgroupcancel-id-1467",children:["Schema: SpdrRiskGroupCancel ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 1467)"})]}),"\n",(0,t.jsx)(r.p,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"ClientTrading"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"10="}),(0,t.jsx)(r.td,{children:"riskGroupId"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{children:"all orders with the same riskGroupId share a common set of risk counters;.Grp. risk limits apply to these shared counters"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11="}),(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR trading account"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"12="}),(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"100"}),(0,t.jsx)(r.td,{children:"sysEnvironment"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"103"}),(0,t.jsx)(r.td,{children:"runStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,t.jsx)(r.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"spdrSource"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"cxlReason"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"altCancelId"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"userName"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"118"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>i});var t=s(96540);const n={},d=t.createContext(n);function c(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);