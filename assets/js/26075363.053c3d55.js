"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1705],{66799:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var r=s(74848),c=s(28453);const n={title:"StockLocateRequest"},i="Schema: StockLocateRequest (ID: 1735)",d={id:"Schema/Topics/client-borrow/StockLocateRequest",title:"StockLocateRequest",description:"StockLocateRequest records represent a client locate request.  These originate either from the SRSE AwayStockLocateGateway or from other SR Tools or APIs.",source:"@site/docs/Schema/Topics/1725-client-borrow/StockLocateRequest.md",sourceDirName:"Schema/Topics/1725-client-borrow",slug:"/Schema/Topics/client-borrow/StockLocateRequest",permalink:"/docs/Schema/Topics/client-borrow/StockLocateRequest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockLocateRequest"},sidebar:"schemaSidebar",previous:{title:"StockBorrowRate",permalink:"/docs/Schema/Topics/client-borrow/StockBorrowRate"},next:{title:"StockLocateResponse",permalink:"/docs/Schema/Topics/client-borrow/StockLocateResponse"}},o={},l=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-stocklocaterequest-id-1735",children:["Schema: StockLocateRequest ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1735)"})]}),"\n",(0,r.jsx)(t.p,{children:"StockLocateRequest records represent a client locate request.  These originate either from the SRSE AwayStockLocateGateway or from other SR Tools or APIs."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"client-borrow"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"coreClientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"coreClientFirm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locateFirm"}),(0,r.jsx)(t.td,{children:"string(6)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locatePool"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"locate pool @ firm granting the locate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isLivePool"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modifiedIn"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"requestMachine"}),(0,r.jsx)(t.td,{children:"string(24)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"requestOrigin"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/RequestOrigin",children:"enum : RequestOrigin"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"requestQuan"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"should be the cumulative request quantity for this ticker for this trading period"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var r=s(96540);const c={},n=r.createContext(c);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);