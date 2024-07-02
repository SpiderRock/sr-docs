"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[18480],{16031:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=t(74848),r=t(28453);const s={sidebar_position:1,title:"4335-product-definition"},o=void 0,d={id:"MessageSchemas/Schema/Topics/product-definition/product-definition",title:"4335-product-definition",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/Topics/4335-product-definition/4335-product-definition.md",sourceDirName:"MessageSchemas/Schema/Topics/4335-product-definition",slug:"/MessageSchemas/Schema/Topics/product-definition/",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"4335-product-definition"},sidebar:"messageSchemasSidebar",previous:{title:"StockQuoteProbability",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/StockQuoteProbability"},next:{title:"CCodeDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/CCodeDefinition"}},c={},a=[];function l(e){const i={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"#"}),(0,n.jsx)(i.th,{children:"Message Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4335"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./CCodeDefinition",children:"CCodeDefinition"})}),(0,n.jsxs)(i.td,{children:["Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"This table also contains definitions for exchange and user-defined spreads including spreads used as option underliers. SpiderRock typically uses a compact form of the exchange (spread) product ID as the ccode for these products if there is no natural (human-readable) exchange spread ticker issued for the spread.  Note that the full spread definition can be found in the ProductDefinition and human-readable version in the description field below.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Note that SpiderRock tickers below are synthetic and are created for organizational purposes only.  SpiderRock synthetic tickers typically begin with a '@' character."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4350"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./IndustryDefinition",children:"IndustryDefinition"})}),(0,n.jsx)(i.td,{children:"This table contains the definitions of ind (00), sub (0000), grp (000000), and nbr (00000000) numeric codes are used in the SpiderRock platform."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4355"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./OptExpiryDefinition",children:"OptExpiryDefinition"})}),(0,n.jsxs)(i.td,{children:["This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"BaseObj",":Root"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4360"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./ProductDefinitionV2",children:"ProductDefinitionV2"})}),(0,n.jsx)(i.td,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4405"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./RegionalOptionComposite",children:"RegionalOptionComposite"})}),(0,n.jsx)(i.td,{children:"RegionalOptionComposite (internal only) records exist per composite option (aka per ISIN). Eg for BMW optioins there would be BMW-ESX-EQT composite for all standard options and then perhaps a BMW1-ESX-EQT for post corp action contracts with alternate multiplers etc"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4400"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./RegionalUnderlierComposite",children:"RegionalUnderlierComposite"})}),(0,n.jsx)(i.td,{children:"RegionalUnderlierComposite (internal only) records exist per composite underlier (aka per ISIN). Eg for BMW there would be BMW-ESX-EQT which is the composite, but could have several contributing exchanges across the region"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4365"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./RootDefinition",children:"RootDefinition"})}),(0,n.jsx)(i.td,{children:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4390"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./SpreadDefinition",children:"SpreadDefinition"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4395"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./SpreadExchDefinition",children:"SpreadExchDefinition"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4375"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./TickerDefinition",children:"TickerDefinition"})}),(0,n.jsx)(i.td,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4380"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"./TickerDefinitionExt",children:"TickerDefinitionExt"})}),(0,n.jsx)(i.td,{children:"TickerDefinitionExt (external) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."})]})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>d});var n=t(96540);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);