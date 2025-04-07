"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["77368"],{31043:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>n,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"MessageSchemas/Schema/Topics/client-borrow/client-borrow","title":"1725-client-borrow","description":"| # | Message Name | Description |","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/1725-client-borrow/1725-client-borrow.md","sourceDirName":"MessageSchemas/Schema/Topics/1725-client-borrow","slug":"/MessageSchemas/Schema/Topics/client-borrow/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-borrow/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"1725-client-borrow"},"sidebar":"messageSchemasSidebar","previous":{"title":"SymbolControl","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-book-risk/SymbolControl"},"next":{"title":"AvailableStockLocates","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-borrow/AvailableStockLocates"}}'),o=r("52676"),c=r("91503");let i={sidebar_position:1,title:"1725-client-borrow"},a=void 0,n={},l=[];function d(e){let t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"#"}),(0,o.jsx)(t.th,{children:"Message Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1725"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"AvailableStockLocates",children:"AvailableStockLocates"})}),(0,o.jsx)(t.td,{children:"This table shows the available (unused) locates for each locate pool and firm.  Value update as trades occur that utilizes existing locates."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1731"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"ClientStockLocate",children:"ClientStockLocate"})}),(0,o.jsxs)(t.td,{children:["ClientStockLocate records contain locates quantities that clients have directly sourced.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"VLanBridge:FieldRename:coreClientFirm",":clientFirm",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"BridgeFromV7"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1730"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"StockBorrowRate",children:"StockBorrowRate"})}),(0,o.jsxs)(t.td,{children:["This data is sourced from various clearing firms and typically represents their public borrow rates.  Data is typically loaded once at the start of each trading day.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"StockBorrowRate records are published to the SpiderRock elastic cluster at the end of each trading period."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1735"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"StockLocateRequest",children:"StockLocateRequest"})}),(0,o.jsxs)(t.td,{children:["StockLocateRequest records represent a client locate requests. These originate either from the SRSE AwayStockLocateGateway or from other SR Tools or APIs.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"VLanBridge:FieldRename:coreClientFirm",":clientFirm",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"BridgeFromV7"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1740"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"StockLocateResponse",children:"StockLocateResponse"})}),(0,o.jsxs)(t.td,{children:["StockLocateResponse records are either locates or rejections of locate requests.  These records are clientFirm specific and are not shared.  SpiderRock execution engines are aware of the locate quantities in StockLocateResponse records.  Also, these records are shared and depricated accross all SpiderRock production environments.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"VLanBridge:FieldRename:coreClientFirm",":clientFirm",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"BridgeFromV7"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1745"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"StockPoolBorrowRate",children:"StockPoolBorrowRate"})}),(0,o.jsx)(t.td,{children:"Records are as loaded by clients and usually represents their negotiated borrow rates."})]})]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},91503:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var s=r(75271);let o={},c=s.createContext(o);function i(e){let t=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);