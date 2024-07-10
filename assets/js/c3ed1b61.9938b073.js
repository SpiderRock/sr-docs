"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28276],{18217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=r(74848),n=r(28453);const d={title:"EquityCorpActionRecordV5"},c="Schema: EquityCorpActionRecordV5 (ID: 4760)",i={id:"MessageSchemas/Schema/Topics/risk-v5/EquityCorpActionRecordV5",title:"EquityCorpActionRecordV5",description:"corp action record (managed by SR)",source:"@site/docs/MessageSchemas/Schema/Topics/4740-risk-v5/EquityCorpActionRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/EquityCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/EquityCorpActionRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"EquityCorpActionRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"CurrencyTransaction",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/CurrencyTransaction"},next:{title:"ExpirationRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/ExpirationRiskRecordV5"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-equitycorpactionrecordv5-id-4760",children:["Schema: EquityCorpActionRecordV5 ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4760)"})]}),"\n",(0,s.jsx)(t.p,{children:"corp action record (managed by SR)"}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"4740-risk-v5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRRisk"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"ticker at EOD on trading date"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11="}),(0,s.jsx)(t.td,{children:"exDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{children:"ex-date of the action"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"corpActionText"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"descriptive detail (optional)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(t.p,{children:"Cash"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"amount"}),(0,s.jsx)(t.td,{children:"double"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"cashType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CorpActionCash",children:"enum : CorpActionCash"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"description"}),(0,s.jsx)(t.td,{children:"string(32)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Component"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"tickerSOD"}),(0,s.jsx)(t.td,{children:"TickerKey"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"componentRatio"}),(0,s.jsx)(t.td,{children:"double"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"componentFraction"}),(0,s.jsx)(t.td,{children:"double"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"componentMark"}),(0,s.jsx)(t.td,{children:"double"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"componentType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/CorpActionComponent",children:"enum : CorpActionComponent"})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var s=r(96540);const n={},d=s.createContext(n);function c(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);