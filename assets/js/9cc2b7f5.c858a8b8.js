"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31002],{42057:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var s=d(74848),r=d(28453);const i={title:"OptionTheoVol"},l="Schema: OptionTheoVol (ID: 5055)",n={id:"MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",title:"OptionTheoVol",description:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/OptionTheoVol.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionTheoVol",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionTheoVol"},sidebar:"messageSchemasSidebar",previous:{title:"OptionImpliedVol",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/OptionImpliedVol"},next:{title:"SpanRiskCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/SpanRiskCalculator"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-optiontheovol-id-5055",children:["Schema: OptionTheoVol ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 5055)"})]}),"\n",(0,s.jsx)(t.p,{children:"OptionTheoVol records contain client supplied theoretical volatility surface information resolved at the level if individual strikes.  Strike volatilities, prices, greeks and SpiderRock surface volatilites and prices are all available.  Values are computed on the fly using fast/accurate calculation methods as records are returned."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"5030-srse-calculators"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTheo"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"okey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"theoModel"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"required in where clause (theo model must be associated with an accnt that is visible)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"clientFirmOut"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"years"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"volatility years to expiration (variable time metric; SR holiday calendar)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"uprc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"ubid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier bid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"uask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"obid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option market bid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"oask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"option market ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"tvol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo vol"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"tvolBOpn"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo buy/open vol"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"tvolSOpn"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo sell/open vol"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"tprc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo vol price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"tbPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo buy (open) price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"tsPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo sell (open) price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"145"}),(0,s.jsx)(t.td,{children:"tbClsPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo buy (close) price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"148"}),(0,s.jsx)(t.td,{children:"tsClsPrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo sell (close) price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"151"}),(0,s.jsx)(t.td,{children:"veSlope"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"154"}),(0,s.jsx)(t.td,{children:"de"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"implied greeks (from theo surface)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"157"}),(0,s.jsx)(t.td,{children:"ga"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"160"}),(0,s.jsx)(t.td,{children:"th"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"163"}),(0,s.jsx)(t.td,{children:"ve"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"166"}),(0,s.jsx)(t.td,{children:"vo"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"169"}),(0,s.jsx)(t.td,{children:"va"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"172"}),(0,s.jsx)(t.td,{children:"deDecay"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"175"}),(0,s.jsx)(t.td,{children:"ro"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"178"}),(0,s.jsx)(t.td,{children:"ph"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"181"}),(0,s.jsx)(t.td,{children:"sdivB"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"normalized sdiv when buying"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"184"}),(0,s.jsx)(t.td,{children:"sdivS"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"normalized sdiv when selling"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"187"}),(0,s.jsx)(t.td,{children:"xAxis"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"xAxis value (depends on xAxis definition in TheoExpSurface record)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"190"}),(0,s.jsx)(t.td,{children:"tvolAtm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"theo model volatility (atm)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"193"}),(0,s.jsx)(t.td,{children:"ivolAtm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Surface Volatility (atm)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"196"}),(0,s.jsx)(t.td,{children:"svol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Surface Volatility"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"199"}),(0,s.jsx)(t.td,{children:"sprc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Surface Price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"202"}),(0,s.jsx)(t.td,{children:"sDe"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Surface Delta"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"205"}),(0,s.jsx)(t.td,{children:"sVe"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Surface Vega"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"208"}),(0,s.jsx)(t.td,{children:"rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR Rate (average interest rate to expiration)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"211"}),(0,s.jsx)(t.td,{children:"sdiv"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR SDiv (continuous dividend;accretive with discrete dividends)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"214"}),(0,s.jsx)(t.td,{children:"ddiv"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR DDiv (sum of discrete dividend amounts prior to expiration)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"217"}),(0,s.jsx)(t.td,{children:"err"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"220"}),(0,s.jsx)(t.td,{children:"theoErr"}),(0,s.jsx)(t.td,{children:"string(24)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"223"}),(0,s.jsx)(t.td,{children:"calcErr"}),(0,s.jsx)(t.td,{children:"string(24)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"226"}),(0,s.jsx)(t.td,{children:"theoStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"229"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>l,x:()=>n});var s=d(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);