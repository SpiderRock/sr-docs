"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27319],{25338:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(74848),d=s(28453);const i={title:"FutAwayTktGateway"},n="Message: FutAwayTktGateway (ID: 5145)",l={id:"Schema/Topics/srse-gateway/FutAwayTktGateway",title:"FutAwayTktGateway",description:"FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed.",source:"@site/docs/Schema/Topics/5120-srse-gateway/FutAwayTktGateway.md",sourceDirName:"Schema/Topics/5120-srse-gateway",slug:"/Schema/Topics/srse-gateway/FutAwayTktGateway",permalink:"/docs/Schema/Topics/srse-gateway/FutAwayTktGateway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutAwayTktGateway"},sidebar:"schemaSidebar",previous:{title:"ExternAggGroupGateway",permalink:"/docs/Schema/Topics/srse-gateway/ExternAggGroupGateway"},next:{title:"FutOrderGateway",permalink:"/docs/Schema/Topics/srse-gateway/FutOrderGateway"}},a={},c=[{value:"META DATA  (Topic: srse-gateway )",id:"meta-data--topic-srse-gateway-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"message-futawaytktgateway-id-5145",children:["Message: FutAwayTktGateway ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5145)"})]}),"\n",(0,r.jsxs)(t.p,{children:["FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"meta-data--topic-srse-gateway-",children:"META DATA  (Topic: srse-gateway )"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accnt"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFillID"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"client execution ID, these must be unique on a per-account basis [copied into SpdrParentExecution.altFillId]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRfillID"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"SR internal fill number, any values submitted will be overwritten by the SR generated fill number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"checksum"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"Must be set to 13.  This helps detect some column,value misalignments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientOrderID"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{children:"client orderID [copied into SpdrParentExecution.altOrderId]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"comment"}),(0,r.jsx)(t.td,{children:"string(64)"}),(0,r.jsx)(t.td,{children:"text comment (if any)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"deliverExecReport"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"Drop a copy of the execution report"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"execBrkr"}),(0,r.jsx)(t.td,{children:"string(12)"}),(0,r.jsx)(t.td,{children:"client (external) exec broker code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fillDttm"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fillPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fillQuantity"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fillRefUPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"reference underlier price @ fill arrival time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fillSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey"}),(0,r.jsx)(t.td,{children:"ExpiryKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"riskGroupId"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"Default: 0 (none).  Required to be non-zero if incorporating risk into an existing riskGroupId"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategy"}),(0,r.jsx)(t.td,{children:"string(36)"}),(0,r.jsx)(t.td,{children:"client-supplied strategy string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData1"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userData2"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>l});var r=s(96540);const d={},i=r.createContext(d);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);