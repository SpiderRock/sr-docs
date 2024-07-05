"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73483],{2527:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var i=s(74848),r=s(28453);const d={title:"ExpirationControl"},n="Schema: ExpirationControl (ID: 1645)",c={id:"MessageSchemas/Schema/Topics/client-book-risk/ExpirationControl",title:"ExpirationControl",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/1630-client-book-risk/ExpirationControl.md",sourceDirName:"MessageSchemas/Schema/Topics/1630-client-book-risk",slug:"/MessageSchemas/Schema/Topics/client-book-risk/ExpirationControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/ExpirationControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ExpirationControl"},sidebar:"messageSchemasSidebar",previous:{title:"CustomControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/CustomControl"},next:{title:"FutureControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/FutureControl"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"schema-expirationcontrol-id-1645",children:["Schema: ExpirationControl ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 1645)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"1630-client-book-risk"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SystemData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"#"}),(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10"}),(0,i.jsx)(t.td,{children:"accnt"}),(0,i.jsx)(t.td,{children:"string(16)"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"11"}),(0,i.jsx)(t.td,{children:"year"}),(0,i.jsx)(t.td,{children:"short"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"12"}),(0,i.jsx)(t.td,{children:"month"}),(0,i.jsx)(t.td,{children:"byte"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"13"}),(0,i.jsx)(t.td,{children:"day"}),(0,i.jsx)(t.td,{children:"byte"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"14"}),(0,i.jsx)(t.td,{children:"clientFirm"}),(0,i.jsx)(t.td,{children:"string(16)"}),(0,i.jsx)(t.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"#"}),(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100"}),(0,i.jsx)(t.td,{children:"expStatus"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/OptStatus",children:"enum : OptStatus"})}),(0,i.jsx)(t.td,{children:"expiration trading control"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"106"}),(0,i.jsx)(t.td,{children:"maxTheta"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"(xRM) maximum net expiry theta"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"121"}),(0,i.jsx)(t.td,{children:"maxWtVePctAt"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"% of min/max expiry wtVega in AT {-0.10 <= xde <= +0.10} strikes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"115"}),(0,i.jsx)(t.td,{children:"maxWtVePctDd"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"% of min/max expiry wtVega in DD {xde < -0.30} strikes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"118"}),(0,i.jsx)(t.td,{children:"maxWtVePctDn"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"% of min/max expiry wtVega in DN {-0.30 <= xde < -0.10} strikes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"127"}),(0,i.jsx)(t.td,{children:"maxWtVePctDu"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"% of min/max expiry wtVega in DU {+0.30 < xde} strikes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"124"}),(0,i.jsx)(t.td,{children:"maxWtVePctUp"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"% of min/max expiry wtVega in UP {+0.10 < xde <= +0.30} strikes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"112"}),(0,i.jsx)(t.td,{children:"maxWtVega"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"(xRM) maximum net expiry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"103"}),(0,i.jsx)(t.td,{children:"minTheta"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"(xRM) minimum net expiry theta"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"109"}),(0,i.jsx)(t.td,{children:"minWtVega"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"(xRM) minimum net expiry wtVega;wtVega = ve * vol / sqrt(max(0.1, years * 4))"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"130"}),(0,i.jsx)(t.td,{children:"modifiedBy"}),(0,i.jsx)(t.td,{children:"string(24)"}),(0,i.jsx)(t.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"133"}),(0,i.jsx)(t.td,{children:"modifiedIn"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"136"}),(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"timestamp of last modification"})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var i=s(96540);const r={},d=i.createContext(r);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);