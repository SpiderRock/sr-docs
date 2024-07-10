"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17421],{94159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(74848),i=n(28453);const r={title:"RegionalOptionComposite"},d="Schema: RegionalOptionComposite (ID: 4405)",c={id:"MessageSchemas/Schema/Topics/product-definition/RegionalOptionComposite",title:"RegionalOptionComposite",description:"RegionalOptionComposite (internal only) records exist per composite option (aka per ISIN). Eg for BMW optioins there would be BMW-ESX-EQT composite for all standard options and then perhaps a BMW1-ESX-EQT for post corp action contracts with alternate multiplers etc",source:"@site/docs/MessageSchemas/Schema/Topics/4335-product-definition/RegionalOptionComposite.md",sourceDirName:"MessageSchemas/Schema/Topics/4335-product-definition",slug:"/MessageSchemas/Schema/Topics/product-definition/RegionalOptionComposite",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/RegionalOptionComposite",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RegionalOptionComposite"},sidebar:"messageSchemasSidebar",previous:{title:"ProductDefinitionV2",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2"},next:{title:"RegionalUnderlierComposite",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/RegionalUnderlierComposite"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-regionaloptioncomposite-id-4405",children:["Schema: RegionalOptionComposite ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4405)"})]}),"\n",(0,s.jsx)(t.p,{children:"RegionalOptionComposite (internal only) records exist per composite option (aka per ISIN). Eg for BMW optioins there would be BMW-ESX-EQT composite for all standard options and then perhaps a BMW1-ESX-EQT for post corp action contracts with alternate multiplers etc"}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"4335-product-definition"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"OptionDefinition"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"undIsin"}),(0,s.jsx)(t.td,{children:"string(12)"}),(0,s.jsx)(t.td,{children:"Underlying ISIN code"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11="}),(0,s.jsx)(t.td,{children:"compositeTKey"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"Composite TickerKey for the contract grouping"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,s.jsx)(t.td,{children:"Currency that the contracts trade in"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"101"}),(0,s.jsx)(t.td,{children:"contractSpecCode"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsxs)(t.td,{children:['Contract specification code used to deliniate between different contract groups / Format ->  "{ContractSize}',(0,s.jsx)(t.em,{children:"{HasDeliverables}"}),"{ContractMultiplier}",(0,s.jsx)(t.em,{children:"{SharesPerContract}"}),"{ExerciseType}",(0,s.jsx)(t.em,{children:"{HasAdjusted}"}),'{IsPhysicalSettlement}_{UnderlierType}"']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"102"}),(0,s.jsx)(t.td,{children:"contractSize"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"contract size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"contractMultipler"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"contract multipler"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"104"}),(0,s.jsx)(t.td,{children:"sharesPerContract"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"shares per contract"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"105"}),(0,s.jsx)(t.td,{children:"ExerciseType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,s.jsx)(t.td,{children:"exercise type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"PhysicalSettlement"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"is physical settlement?"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"107"}),(0,s.jsx)(t.td,{children:"HasAdjustment"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"has adjusment affected contracts?"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"108"}),(0,s.jsx)(t.td,{children:"multihedgeType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/Multihedge",children:"enum : Multihedge"})}),(0,s.jsx)(t.td,{children:"The type of underlying attribute that this composite represents"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(t.p,{children:"Contributors"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"110"}),(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"111"}),(0,s.jsx)(t.td,{children:"nativeExchSymbol"}),(0,s.jsx)(t.td,{children:"string(12)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"productISIN"}),(0,s.jsx)(t.td,{children:"string(12)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"MultihedgeUnderlying"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"140"}),(0,s.jsx)(t.td,{children:"sharesPerContract"}),(0,s.jsx)(t.td,{children:"float"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"143"}),(0,s.jsx)(t.td,{children:"nativeExchSymbol"}),(0,s.jsx)(t.td,{children:"string(12)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"146"}),(0,s.jsx)(t.td,{children:"activSymbology"}),(0,s.jsx)(t.td,{children:"string(16)"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);