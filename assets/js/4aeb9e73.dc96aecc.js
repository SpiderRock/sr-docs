"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[97467],{96124:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var c=s(74848),r=s(28453);const d={title:"AvailableStockLocates"},i="Schema: AvailableStockLocates (ID: 1725)",l={id:"MessageSchemas/Schema/Topics/client-borrow/AvailableStockLocates",title:"AvailableStockLocates",description:"This table shows the available (unused) locates for each locate pool and firm.  Value update as trades occur that utilizes existing locates.",source:"@site/docs/MessageSchemas/Schema/Topics/1725-client-borrow/AvailableStockLocates.md",sourceDirName:"MessageSchemas/Schema/Topics/1725-client-borrow",slug:"/MessageSchemas/Schema/Topics/client-borrow/AvailableStockLocates",permalink:"/docs/MessageSchemas/Schema/Topics/client-borrow/AvailableStockLocates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AvailableStockLocates"},sidebar:"messageSchemasSidebar",previous:{title:"1725-client-borrow",permalink:"/docs/MessageSchemas/Schema/Topics/client-borrow/"},next:{title:"StockBorrowRate",permalink:"/docs/MessageSchemas/Schema/Topics/client-borrow/StockBorrowRate"}},n={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h1,{id:"schema-availablestocklocates-id-1725",children:["Schema: AvailableStockLocates ",(0,c.jsx)("span",{className:"small-text",children:"(ID: 1725)"})]}),"\n",(0,c.jsx)(t.p,{children:"This table shows the available (unused) locates for each locate pool and firm.  Value update as trades occur that utilizes existing locates."}),"\n",(0,c.jsxs)("div",{className:"single-message-meta",children:[(0,c.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Attribute"}),(0,c.jsx)(t.th,{children:"Value"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Topic"}),(0,c.jsx)(t.td,{children:"1725-client-borrow"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"MLink Token"}),(0,c.jsx)(t.td,{children:"SystemData"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"SRSE Product"}),(0,c.jsx)(t.td,{children:"SRControl"})]})]})]})]}),"\n",(0,c.jsxs)("div",{className:"single-message-primarykey",children:[(0,c.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"#"}),(0,c.jsx)(t.th,{children:"Field"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Comment"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"10"}),(0,c.jsx)(t.td,{children:"ticker"}),(0,c.jsx)(t.td,{children:"TickerKey"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"11"}),(0,c.jsx)(t.td,{children:"coreClientFirm"}),(0,c.jsx)(t.td,{children:"string(16)"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"12"}),(0,c.jsx)(t.td,{children:"locateFirm"}),(0,c.jsx)(t.td,{children:"string(6)"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"13"}),(0,c.jsx)(t.td,{children:"locatePool"}),(0,c.jsx)(t.td,{children:"string(16)"}),(0,c.jsx)(t.td,{children:"locate pool @ firm granting the locate"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"14"}),(0,c.jsx)(t.td,{children:"isLivePool"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"15"}),(0,c.jsx)(t.td,{children:"tradeDate"}),(0,c.jsx)(t.td,{children:"DateKey"}),(0,c.jsx)(t.td,{})]})]})]})]}),"\n",(0,c.jsxs)("div",{className:"single-message-body",children:[(0,c.jsx)(t.h3,{id:"body",children:"BODY"}),(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"#"}),(0,c.jsx)(t.th,{children:"Field"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Comment"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"100"}),(0,c.jsx)(t.td,{children:"locateQuan"}),(0,c.jsx)(t.td,{children:"int"}),(0,c.jsx)(t.td,{children:"locate quantity sourced"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"103"}),(0,c.jsx)(t.td,{children:"locateQuanUsed"}),(0,c.jsx)(t.td,{children:"int"}),(0,c.jsx)(t.td,{children:"shares sold short against this locate"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"106"}),(0,c.jsx)(t.td,{children:"availableLocateQuan"}),(0,c.jsx)(t.td,{children:"int"}),(0,c.jsx)(t.td,{children:"locate balance currently available"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"109"}),(0,c.jsx)(t.td,{children:"isLocateExempt"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,c.jsx)(t.td,{children:"only market makers can be exempt"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"116"}),(0,c.jsx)(t.td,{children:"engineName"}),(0,c.jsx)(t.td,{children:"string(32)"}),(0,c.jsx)(t.td,{children:"SR server code"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"115"}),(0,c.jsx)(t.td,{children:"timestamp"}),(0,c.jsx)(t.td,{children:"DateTime"}),(0,c.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var c=s(96540);const r={},d=c.createContext(r);function i(e){const t=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(d.Provider,{value:t},e.children)}}}]);