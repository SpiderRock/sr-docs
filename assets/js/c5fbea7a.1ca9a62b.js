"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56825],{54459:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=s(74848),i=s(28453);const d={title:"OptionCorpActionRecordV5"},n="Schema: OptionCorpActionRecordV5 (ID: 4795)",c={id:"MessageSchemas/Schema/Topics/risk-v5/OptionCorpActionRecordV5",title:"OptionCorpActionRecordV5",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/4740-risk-v5/OptionCorpActionRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/OptionCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/OptionCorpActionRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionCorpActionRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"IndustryRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/IndustryRiskRecordV5"},next:{title:"OptionExAsRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/OptionExAsRecordV5"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-optioncorpactionrecordv5-id-4795",children:["Schema: OptionCorpActionRecordV5 ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4795)"})]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRRisk"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10="}),(0,r.jsx)(t.td,{children:"root"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"root at EOD on trading date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"11="}),(0,r.jsx)(t.td,{children:"exDate"}),(0,r.jsx)(t.td,{children:"DateKey"}),(0,r.jsx)(t.td,{children:"ex-date of the action"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"sodRoot"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{children:"(new) mh root post adjustment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"markMultiplier"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"sodMark = eodMark x markMultiplier"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"positionMultiplier"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"sodPosition = eodPosition x positionMultiplier"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"strikeFactor"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"sodStrike = eodStrike x strikeMultiplier - strikeFactor"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"strikeMultiplier"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"sodStrike = eodStrike x strikeMultiplier - strikeFactor"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"115"}),(0,r.jsx)(t.td,{children:"strikePrecision"}),(0,r.jsx)(t.td,{children:"short"}),(0,r.jsx)(t.td,{children:"number of decimal places to round after adjusting strike (usually 2)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"118"}),(0,r.jsx)(t.td,{children:"corpActionText"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"descriptive detail (optional)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"121"}),(0,r.jsx)(t.td,{children:"corpActionType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CAType",children:"enum : CAType"})}),(0,r.jsx)(t.td,{children:"corporate action type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"124"}),(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var r=s(96540);const i={},d=r.createContext(i);function n(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);