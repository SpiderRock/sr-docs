"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84462],{30231:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=s(74848),d=s(28453);const r={title:"BookControl"},i="Schema: BookControl (ID: 1635)",c={id:"MessageSchemas/Schema/Topics/client-book-risk/BookControl",title:"BookControl",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/1630-client-book-risk/BookControl.md",sourceDirName:"MessageSchemas/Schema/Topics/1630-client-book-risk",slug:"/MessageSchemas/Schema/Topics/client-book-risk/BookControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/BookControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"BookControl"},sidebar:"messageSchemasSidebar",previous:{title:"AssetAccountControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/AssetAccountControl"},next:{title:"CustomControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/CustomControl"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-bookcontrol-id-1635",children:["Schema: BookControl ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 1635)"})]}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"1630-client-book-risk"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRControl"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"accnt"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11="}),(0,n.jsx)(t.td,{children:"clientFirm"}),(0,n.jsx)(t.td,{children:"string(16)"}),(0,n.jsx)(t.td,{children:"SR client firm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"bookStatus"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BookStatus",children:"enum : BookStatus"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"bookRiskMultiplier"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"book risk multiplier (xRM)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"maxAccHaircut"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) max pre-expiration target haircut ($37.50)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"minAccRho"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"minimum accnt rho (d$/dInt)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"maxAccRho"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"maximum accnt rho (d$/dInt)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"minDDelta"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"min accnt $delta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"maxDDelta"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"max accnt $delta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"maxAccAbsWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) max account abs wtVega (sum of abs{symbol net wtVega});wtVega = ve * vol / sqrt(max(0.1, years * 4))"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"minAccWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) minimum accnt net wtVega"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"maxAccWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) maximum accnt net wtVega"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"minIndWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) minimum ind (0) net wtVega (applies to each industry unless overriden by an IndustryControl record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"133"}),(0,n.jsx)(t.td,{children:"maxIndWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) maximum ind (0) net wtVega (applies to each industry unless overriden by an IndustryControl record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"136"}),(0,n.jsx)(t.td,{children:"minSubWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) minimum sub (00) net wtVega (applies to each subIndustry unless overriden by an IndustryControl record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"139"}),(0,n.jsx)(t.td,{children:"maxSubWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) maximum sub (00) net wtVega (applies to each subIndustry unless overriden by an IndustryControl record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"142"}),(0,n.jsx)(t.td,{children:"minGrpWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) minimum grp (000) net wtVega (applies to each indGroup unless overriden by an IndustryControl record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"145"}),(0,n.jsx)(t.td,{children:"maxGrpWtVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"(xRM) maximum grp (000) net wtVega (applies to each indGroup unless overriden by an IndustryControl record)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"148"}),(0,n.jsx)(t.td,{children:"userText"}),(0,n.jsx)(t.td,{children:"text1"}),(0,n.jsx)(t.td,{children:"free form text"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"151"}),(0,n.jsx)(t.td,{children:"modifiedBy"}),(0,n.jsx)(t.td,{children:"string(24)"}),(0,n.jsx)(t.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"154"}),(0,n.jsx)(t.td,{children:"modifiedIn"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"157"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"timestamp of last modification"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const d={},r=n.createContext(d);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);