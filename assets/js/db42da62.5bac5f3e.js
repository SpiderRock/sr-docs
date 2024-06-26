"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8114],{81910:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var a=s(74848),c=s(28453);const r={title:"StockLocateRequestGateway"},i="Schema: StockLocateRequestGateway (ID: 5230)",n={id:"Schemas/Schema/Topics/srse-gateway/StockLocateRequestGateway",title:"StockLocateRequestGateway",description:"Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table.",source:"@site/docs/Schemas/Schema/Topics/5120-srse-gateway/StockLocateRequestGateway.md",sourceDirName:"Schemas/Schema/Topics/5120-srse-gateway",slug:"/Schemas/Schema/Topics/srse-gateway/StockLocateRequestGateway",permalink:"/docs/Schemas/Schema/Topics/srse-gateway/StockLocateRequestGateway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockLocateRequestGateway"},sidebar:"schemaSidebar",previous:{title:"StkOrderGateway",permalink:"/docs/Schemas/Schema/Topics/srse-gateway/StkOrderGateway"},next:{title:"ULinkContextGateway",permalink:"/docs/Schemas/Schema/Topics/srse-gateway/ULinkContextGateway"}},d={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"schema-stocklocaterequestgateway-id-5230",children:["Schema: StockLocateRequestGateway ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 5230)"})]}),"\n",(0,a.jsx)(t.p,{children:"Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table."}),"\n",(0,a.jsxs)("div",{className:"single-message-meta",children:[(0,a.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Attribute"}),(0,a.jsx)(t.th,{children:"Value"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"MLink Token"}),(0,a.jsx)(t.td,{children:"SystemData"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Topic"}),(0,a.jsx)(t.td,{children:"srse-gateway"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"SRSE Product"}),(0,a.jsx)(t.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,a.jsxs)("div",{className:"single-message-primarykey",children:[(0,a.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Comment"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ticker"}),(0,a.jsx)(t.td,{children:"TickerKey"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"coreClientFirm"}),(0,a.jsx)(t.td,{children:"string(16)"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"locateFirm"}),(0,a.jsx)(t.td,{children:"string(6)"}),(0,a.jsx)(t.td,{children:"locate firm (defaults to clientFirmConfig.defaultLocateFirm)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"locatePool"}),(0,a.jsx)(t.td,{children:"string(16)"}),(0,a.jsx)(t.td,{children:"locate pool @ firm granting the locate (defaults to clientFirmConfig.defaultLocatePool)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"isLivePool"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,a.jsx)(t.td,{})]})]})]})]}),"\n",(0,a.jsxs)("div",{className:"single-message-body",children:[(0,a.jsx)(t.h3,{id:"body",children:"BODY"}),(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Comment"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"requestQuan"}),(0,a.jsx)(t.td,{children:"int"}),(0,a.jsx)(t.td,{children:"cumulative request quantity for the trading day"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"timestamp"}),(0,a.jsx)(t.td,{children:"DateTime"}),(0,a.jsx)(t.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>n});var a=s(96540);const c={},r=a.createContext(c);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);