"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91483],{46002:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>a});var r=s(74848),c=s(28453);const i={title:"AvailableStockLocates"},l="Message: AvailableStockLocates (ID: 1725)",n={id:"Schema/Topics/client-borrow/AvailableStockLocates",title:"AvailableStockLocates",description:"This table shows the available (unused) locates for each locate pool and firm.  Value update as trades occur that utilizes existing locates.",source:"@site/docs/Schema/Topics/1725-client-borrow/AvailableStockLocates.md",sourceDirName:"Schema/Topics/1725-client-borrow",slug:"/Schema/Topics/client-borrow/AvailableStockLocates",permalink:"/docs/Schema/Topics/client-borrow/AvailableStockLocates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AvailableStockLocates"},sidebar:"schemaSidebar",previous:{title:"SymbolControl",permalink:"/docs/Schema/Topics/client-book-risk/SymbolControl"},next:{title:"StockBorrowRate",permalink:"/docs/Schema/Topics/client-borrow/StockBorrowRate"}},d={},a=[{value:"META DATA  (Topic: client-borrow )",id:"meta-data--topic-client-borrow-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"message-availablestocklocates-id-1725",children:["Message: AvailableStockLocates ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1725)"})]}),"\n",(0,r.jsx)(t.p,{children:"This table shows the available (unused) locates for each locate pool and firm.  Value update as trades occur that utilizes existing locates."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"meta-data--topic-client-borrow-",children:"META DATA  (Topic: client-borrow )"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"coreClientFirm"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locateFirm"}),(0,r.jsx)(t.td,{children:"string(6)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locatePool"}),(0,r.jsx)(t.td,{children:"string(16)"}),(0,r.jsx)(t.td,{children:"locate pool @ firm granting the locate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isLivePool"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tradeDate"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"availableLocateQuan"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"locate balance currently available"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"engineName"}),(0,r.jsx)(t.td,{children:"string(32)"}),(0,r.jsx)(t.td,{children:"SR server code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isLocateExempt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(t.td,{children:"only market makers can be exempt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locateQuan"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"locate quantity sourced"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"locateQuanUsed"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"shares sold short against this locate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>n});var r=s(96540);const c={},i=r.createContext(c);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);