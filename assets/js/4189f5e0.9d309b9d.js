"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36191],{78818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=r(74848),o=r(28453);const c={sidebar_position:1,title:"1725-client-borrow"},i=void 0,a={id:"MessageSchemas/Schema/Topics/client-borrow/client-borrow",title:"1725-client-borrow",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/1725-client-borrow/1725-client-borrow.md",sourceDirName:"MessageSchemas/Schema/Topics/1725-client-borrow",slug:"/MessageSchemas/Schema/Topics/client-borrow/",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-borrow/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1725-client-borrow"},sidebar:"messageSchemasSidebar",previous:{title:"SymbolControl",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-book-risk/SymbolControl"},next:{title:"AvailableStockLocates",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-borrow/AvailableStockLocates"}},n={},d=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Message Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1725"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"AvailableStockLocates",children:"AvailableStockLocates"})}),(0,s.jsx)(t.td,{children:"This table shows the available (unused) locates for each locate pool and firm.  Value update as trades occur that utilizes existing locates."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1731"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"ClientStockLocate",children:"ClientStockLocate"})}),(0,s.jsxs)(t.td,{children:["ClientStockLocate records contain locates quantities that clients have directly sourced.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"VLanBridge:FieldRename:coreClientFirm",":clientFirm",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BridgeFromV7"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1730"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockBorrowRate",children:"StockBorrowRate"})}),(0,s.jsxs)(t.td,{children:["This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"StockBorrowRate records are published to the SpiderRock elastic cluster at the end of each trading period."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1735"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockLocateRequest",children:"StockLocateRequest"})}),(0,s.jsxs)(t.td,{children:["StockLocateRequest records represent a client locate requests. These originate either from the SRSE AwayStockLocateGateway or from other SR Tools or APIs.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"VLanBridge:FieldRename:coreClientFirm",":clientFirm",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BridgeFromV7"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1740"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockLocateResponse",children:"StockLocateResponse"})}),(0,s.jsxs)(t.td,{children:["StockLocateResponse records are either locates or rejections of locate requests.  These records are clientFirm specific and are not shared.  SpiderRock execution engines are aware of the locate quantities in StockLocateResponse records.  Also, these records are shared and depricated accross all SpiderRock production environments.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"VLanBridge:FieldRename:coreClientFirm",":clientFirm",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BridgeFromV7"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1745"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockPoolBorrowRate",children:"StockPoolBorrowRate"})}),(0,s.jsx)(t.td,{children:"Records are as loaded by clients and usually represents their negotiated borrow rates."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(96540);const o={},c=s.createContext(o);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);