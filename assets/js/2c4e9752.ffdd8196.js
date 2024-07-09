"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58614],{67277:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=t(74848),c=t(28453);const n={title:"StockLocateResponse"},d="Schema: StockLocateResponse (ID: 1740)",i={id:"MessageSchemas/Schema/Topics/client-borrow/StockLocateResponse",title:"StockLocateResponse",description:"StockLocateResponse records are either locates or rejections of locate requests.  These records are clientFirm specific and are not shared.  SpiderRock execution engines are aware of the locate quantities in StockLocateResponse records.  Also, these records are shared and depricated accross all SpiderRock production environments.",source:"@site/docs/MessageSchemas/Schema/Topics/1725-client-borrow/StockLocateResponse.md",sourceDirName:"MessageSchemas/Schema/Topics/1725-client-borrow",slug:"/MessageSchemas/Schema/Topics/client-borrow/StockLocateResponse",permalink:"/docs/MessageSchemas/Schema/Topics/client-borrow/StockLocateResponse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockLocateResponse"},sidebar:"messageSchemasSidebar",previous:{title:"StockLocateRequest",permalink:"/docs/MessageSchemas/Schema/Topics/client-borrow/StockLocateRequest"},next:{title:"StockPoolBorrowRate",permalink:"/docs/MessageSchemas/Schema/Topics/client-borrow/StockPoolBorrowRate"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-stocklocateresponse-id-1740",children:["Schema: StockLocateResponse ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 1740)"})]}),"\n",(0,r.jsx)(s.p,{children:"StockLocateResponse records are either locates or rejections of locate requests.  These records are clientFirm specific and are not shared.  SpiderRock execution engines are aware of the locate quantities in StockLocateResponse records.  Also, these records are shared and depricated accross all SpiderRock production environments."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"1725-client-borrow"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRControl"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"#"}),(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"10"}),(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"11"}),(0,r.jsx)(s.td,{children:"coreClientFirm"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"12"}),(0,r.jsx)(s.td,{children:"locateFirm"}),(0,r.jsx)(s.td,{children:"string(6)"}),(0,r.jsx)(s.td,{children:"typically a clearing firm (or 3rd party locate desk)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"13"}),(0,r.jsx)(s.td,{children:"locatePool"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"locate pool @ firm granting the locate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"14"}),(0,r.jsx)(s.td,{children:"isLivePool"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"15"}),(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"#"}),(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"locateID"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"ID used to make locate requests (SR generated request ID if SR made the locate request; client supplied otherwise)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"103"}),(0,r.jsx)(s.td,{children:"requestQuan"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"original request quantity for requestID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"106"}),(0,r.jsx)(s.td,{children:"locateQuan"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"109"}),(0,r.jsx)(s.td,{children:"locateStatus"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/LocateStatus",children:"enum : LocateStatus"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"112"}),(0,r.jsx)(s.td,{children:"locateSource"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/LocateSource",children:"enum : LocateSource"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"115"}),(0,r.jsx)(s.td,{children:"isLocateExempt"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"Yes = ticker is locate exempt (only allowed for market makers)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"118"}),(0,r.jsx)(s.td,{children:"altSecurityId"}),(0,r.jsx)(s.td,{children:"string(12)"}),(0,r.jsx)(s.td,{children:"An alternative securityID (can be cusip or other)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"121"}),(0,r.jsx)(s.td,{children:"requestOrigin"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/RequestOrigin",children:"enum : RequestOrigin"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"124"}),(0,r.jsx)(s.td,{children:"requestTimestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"130"}),(0,r.jsx)(s.td,{children:"modifiedIn"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"133"}),(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>i});var r=t(96540);const c={},n=r.createContext(c);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);