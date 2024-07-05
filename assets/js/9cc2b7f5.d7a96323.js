"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31002],{42057:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var s=t(74848),r=t(28453);const i={title:"OptionTheoVol"},l="Schema: OptionTheoVol (ID: 5055)",n={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",title:"OptionTheoVol",description:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionTheoVol.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionTheoVol"},sidebar:"messageSchemasSidebar",previous:{title:"OptionImpliedVol",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedVol"},next:{title:"SpanRiskCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/SpanRiskCalculator"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.h1,{id:"schema-optiontheovol-id-5055",children:["Schema: OptionTheoVol ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 5055)"})]}),"\n",(0,s.jsx)(d.p,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"5030-srse-calculators"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"SystemData"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"SRSE Product"}),(0,s.jsx)(d.td,{children:"SRTheo"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"#"}),(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"10"}),(0,s.jsx)(d.td,{children:"okey"}),(0,s.jsx)(d.td,{children:"OptionKey"}),(0,s.jsx)(d.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(d.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"#"}),(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"223"}),(0,s.jsx)(d.td,{children:"calcErr"}),(0,s.jsx)(d.td,{children:"string(24)"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"103"}),(0,s.jsx)(d.td,{children:"clientFirmOut"}),(0,s.jsx)(d.td,{children:"string(16)"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"214"}),(0,s.jsx)(d.td,{children:"ddiv"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR DDiv (sum of discrete dividend amounts prior to expiration)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"154"}),(0,s.jsx)(d.td,{children:"de"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"implied greeks (from theo surface)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"172"}),(0,s.jsx)(d.td,{children:"deDecay"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"217"}),(0,s.jsx)(d.td,{children:"err"}),(0,s.jsx)(d.td,{children:"byte"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"157"}),(0,s.jsx)(d.td,{children:"ga"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"193"}),(0,s.jsx)(d.td,{children:"ivolAtm"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR Surface Volatility (atm)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"124"}),(0,s.jsx)(d.td,{children:"oask"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"option market ask"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"121"}),(0,s.jsx)(d.td,{children:"obid"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"option market bid"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"178"}),(0,s.jsx)(d.td,{children:"ph"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"208"}),(0,s.jsx)(d.td,{children:"rate"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR Rate (average interest rate to expiration)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"175"}),(0,s.jsx)(d.td,{children:"ro"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"202"}),(0,s.jsx)(d.td,{children:"sDe"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR Surface Delta"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"205"}),(0,s.jsx)(d.td,{children:"sVe"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR Surface Vega"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"211"}),(0,s.jsx)(d.td,{children:"sdiv"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR SDiv (continuous dividend;accretive with discrete dividends)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"181"}),(0,s.jsx)(d.td,{children:"sdivB"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"normalized sdiv when buying"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"184"}),(0,s.jsx)(d.td,{children:"sdivS"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"normalized sdiv when selling"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"199"}),(0,s.jsx)(d.td,{children:"sprc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR Surface Price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"196"}),(0,s.jsx)(d.td,{children:"svol"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"SR Surface Volatility"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"145"}),(0,s.jsx)(d.td,{children:"tbClsPrc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo buy (close) price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"139"}),(0,s.jsx)(d.td,{children:"tbPrc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo buy (open) price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"160"}),(0,s.jsx)(d.td,{children:"th"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"220"}),(0,s.jsx)(d.td,{children:"theoErr"}),(0,s.jsx)(d.td,{children:"string(24)"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"100"}),(0,s.jsx)(d.td,{children:"theoModel"}),(0,s.jsx)(d.td,{children:"string(16)"}),(0,s.jsx)(d.td,{children:"required in where clause (theo model must be associated with an accnt that is visible)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"226"}),(0,s.jsx)(d.td,{children:"theoStatus"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"109"}),(0,s.jsx)(d.td,{children:"ticker"}),(0,s.jsx)(d.td,{children:"TickerKey"}),(0,s.jsx)(d.td,{children:"underlier ticker"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"229"}),(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DateTime"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"136"}),(0,s.jsx)(d.td,{children:"tprc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo vol price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"148"}),(0,s.jsx)(d.td,{children:"tsClsPrc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo sell (close) price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"142"}),(0,s.jsx)(d.td,{children:"tsPrc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo sell (open) price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"127"}),(0,s.jsx)(d.td,{children:"tvol"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo vol"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"190"}),(0,s.jsx)(d.td,{children:"tvolAtm"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo model volatility (atm)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"130"}),(0,s.jsx)(d.td,{children:"tvolBOpn"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo buy/open vol"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"133"}),(0,s.jsx)(d.td,{children:"tvolSOpn"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"theo sell/open vol"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"118"}),(0,s.jsx)(d.td,{children:"uask"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier ask"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"115"}),(0,s.jsx)(d.td,{children:"ubid"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier bid"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"112"}),(0,s.jsx)(d.td,{children:"uprc"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"underlier price"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"169"}),(0,s.jsx)(d.td,{children:"va"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"163"}),(0,s.jsx)(d.td,{children:"ve"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"151"}),(0,s.jsx)(d.td,{children:"veSlope"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"166"}),(0,s.jsx)(d.td,{children:"vo"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"187"}),(0,s.jsx)(d.td,{children:"xAxis"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"xAxis value (depends on xAxis definition in TheoExpSurface record)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"106"}),(0,s.jsx)(d.td,{children:"years"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"volatility years to expiration (variable time metric; SR holiday calendar)"})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>l,x:()=>n});var s=t(96540);const r={},i=s.createContext(r);function l(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);