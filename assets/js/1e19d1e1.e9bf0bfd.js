"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94648],{55889:(s,t,e)=>{e.r(t),e.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=e(74848),i=e(28453);const r={title:"HistoricalVolatilities"},l="Schema: HistoricalVolatilities (ID: 3225)",c={id:"MessageSchemas/Schema/Topics/market-statistics/HistoricalVolatilities",title:"HistoricalVolatilities",description:"Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible.HistoricalVolatility records are published to the SpiderRock elastic cluster nightly.",source:"@site/docs/MessageSchemas/Schema/Topics/3225-market-statistics/HistoricalVolatilities.md",sourceDirName:"MessageSchemas/Schema/Topics/3225-market-statistics",slug:"/MessageSchemas/Schema/Topics/market-statistics/HistoricalVolatilities",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/HistoricalVolatilities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"HistoricalVolatilities"},sidebar:"messageSchemasSidebar",previous:{title:"3225-market-statistics",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/"},next:{title:"OptionOpenInterest",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/OptionOpenInterest"}},n={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(s){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...s.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-historicalvolatilities-id-3225",children:["Schema: HistoricalVolatilities ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 3225)"})]}),"\n",(0,d.jsxs)(t.p,{children:["Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"HistoricalVolatility records are published to the SpiderRock elastic cluster nightly."]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"3225-market-statistics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"OptSurface"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"#"}),(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"10"}),(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"11"}),(0,d.jsx)(t.td,{children:"windowType"}),(0,d.jsx)(t.td,{children:"string(12)"}),(0,d.jsx)(t.td,{children:"eg. cc, ccCen, ccClCen, hl, hlCen, iv63, iv126, etc"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"#"}),(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"100"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"string(10)"}),(0,d.jsx)(t.td,{children:"most recent closing date"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"145"}),(0,d.jsx)(t.td,{children:"mv_105d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"115"}),(0,d.jsx)(t.td,{children:"mv_10d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"151"}),(0,d.jsx)(t.td,{children:"mv_126d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"157"}),(0,d.jsx)(t.td,{children:"mv_189d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"121"}),(0,d.jsx)(t.td,{children:"mv_21d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"163"}),(0,d.jsx)(t.td,{children:"mv_252d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"169"}),(0,d.jsx)(t.td,{children:"mv_378d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"127"}),(0,d.jsx)(t.td,{children:"mv_42d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"175"}),(0,d.jsx)(t.td,{children:"mv_504d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"109"}),(0,d.jsx)(t.td,{children:"mv_5d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"historical mean value (5 day window)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"133"}),(0,d.jsx)(t.td,{children:"mv_63d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"139"}),(0,d.jsx)(t.td,{children:"mv_84d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"148"}),(0,d.jsx)(t.td,{children:"sd_105d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"118"}),(0,d.jsx)(t.td,{children:"sd_10d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"154"}),(0,d.jsx)(t.td,{children:"sd_126d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"160"}),(0,d.jsx)(t.td,{children:"sd_189d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"124"}),(0,d.jsx)(t.td,{children:"sd_21d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"166"}),(0,d.jsx)(t.td,{children:"sd_252d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"172"}),(0,d.jsx)(t.td,{children:"sd_378d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"130"}),(0,d.jsx)(t.td,{children:"sd_42d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"178"}),(0,d.jsx)(t.td,{children:"sd_504d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"112"}),(0,d.jsx)(t.td,{children:"sd_5d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"historical std dev (5 day window)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"136"}),(0,d.jsx)(t.td,{children:"sd_63d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"142"}),(0,d.jsx)(t.td,{children:"sd_84d"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"103"}),(0,d.jsx)(t.td,{children:"securityID"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"181"}),(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"record update timestamp"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"106"}),(0,d.jsx)(t.td,{children:"value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"most recent historical value"})]})]})]})]})]})}function x(s={}){const{wrapper:t}={...(0,i.R)(),...s.components};return t?(0,d.jsx)(t,{...s,children:(0,d.jsx)(a,{...s})}):a(s)}},28453:(s,t,e)=>{e.d(t,{R:()=>l,x:()=>c});var d=e(96540);const i={},r=d.createContext(i);function l(s){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof s?s(t):{...t,...s}}),[t,s])}function c(s){let t;return t=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),d.createElement(r.Provider,{value:t},s.children)}}}]);