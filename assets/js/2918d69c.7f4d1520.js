"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23545],{68966:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var d=s(74848),r=s(28453);const i={title:"SpdrOptTheoRecord"},n="Schema: SpdrOptTheoRecord (ID: 1950)",c={id:"Schemas/Schema/Topics/client-theos/SpdrOptTheoRecord",title:"SpdrOptTheoRecord",description:"SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records.",source:"@site/docs/Schemas/Schema/Topics/1945-client-theos/SpdrOptTheoRecord.md",sourceDirName:"Schemas/Schema/Topics/1945-client-theos",slug:"/Schemas/Schema/Topics/client-theos/SpdrOptTheoRecord",permalink:"/docs/Schemas/Schema/Topics/client-theos/SpdrOptTheoRecord",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrOptTheoRecord"},sidebar:"schemaSidebar",previous:{title:"ClientBeta",permalink:"/docs/Schemas/Schema/Topics/client-theos/ClientBeta"},next:{title:"SpdrTheoExp2PtCurve",permalink:"/docs/Schemas/Schema/Topics/client-theos/SpdrTheoExp2PtCurve"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-spdropttheorecord-id-1950",children:["Schema: SpdrOptTheoRecord ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 1950)"})]}),"\n",(0,d.jsx)(t.p,{children:"SpdrOptTheoRecords can be used to override theoretical volatilities for specific strikes when using SpdrTheoExpSurface records."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"client-theos"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRTheo"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoModel"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"string(16)"}),(0,d.jsx)(t.td,{children:"client firm this theo model is associated with (controls visibility)"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"BEdge"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"edge premium spread when buying"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"BVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"buy vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SEdge"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"edge premium spread when selling"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"sell vol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TheoVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"mid-point (fair) volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"buySellConvention"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BuySellConvention",children:"enum : BuySellConvention"})}),(0,d.jsx)(t.td,{children:"rule used to interpret BVol, SVol, BEdge, and SEdge"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"refUPrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Reference uPrc for dynamic vol: vol = TheoVol + vegaSlope * (uPrc - refUPrc)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,d.jsx)(t.td,{children:"indicates where theos for this ticker will be utilized"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vegaSlope"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Set to zero for no dynamic.  hedge delta = delta + vegaSlope * vega;requires account.hedgeType = [TVol (theo delta + vegaSlope) or TvS (surface delta + vegaSlope)] (default is surface delta only)"})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var d=s(96540);const r={},i=d.createContext(r);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);