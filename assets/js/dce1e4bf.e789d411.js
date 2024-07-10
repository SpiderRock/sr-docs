"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53397],{27423:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=r(74848),s=r(28453);const i={title:"SpdrAwayExecution"},n="Schema: SpdrAwayExecution (ID: 1450)",c={id:"MessageSchemas/Schema/Topics/away-drop/SpdrAwayExecution",title:"SpdrAwayExecution",description:"SpdrAwayExecution records are published by ToolServers, SRSE, and FIX drop recv gateways.  They are consumed by AwayExecutionMarkupServer which, in turn, publishes corresponding SpdrParentExecution records, including M1 and M10 updates.",source:"@site/docs/MessageSchemas/Schema/Topics/1450-away-drop/SpdrAwayExecution.md",sourceDirName:"MessageSchemas/Schema/Topics/1450-away-drop",slug:"/MessageSchemas/Schema/Topics/away-drop/SpdrAwayExecution",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/SpdrAwayExecution",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAwayExecution"},sidebar:"messageSchemasSidebar",previous:{title:"1450-away-drop",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/"},next:{title:"SpdrDropExecution",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/SpdrDropExecution"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-spdrawayexecution-id-1450",children:["Schema: SpdrAwayExecution ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 1450)"})]}),"\n",(0,t.jsx)(d.p,{children:"SpdrAwayExecution records are published by ToolServers, SRSE, and FIX drop recv gateways.  They are consumed by AwayExecutionMarkupServer which, in turn, publishes corresponding SpdrParentExecution records, including M1 and M10 updates."}),"\n",(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"1450-away-drop"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"ClientTrading"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRTrade"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(d.blockquote,{children:["\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(d.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"#"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"10="}),(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR accnt"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"11="}),(0,t.jsx)(d.td,{children:"clientFillId"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"client fill ID (should be unique for each accnt)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"12="}),(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR client firm"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"100"}),(0,t.jsx)(d.td,{children:"fillNumber"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"SpiderRock execution number (globally unique over trailing 10 days) [copied in SpdrParentExecution.pkey.fillNumber]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"200"}),(0,t.jsx)(d.td,{children:"engineName"}),(0,t.jsx)(d.td,{children:"string(32)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"109"}),(0,t.jsx)(d.td,{children:"spdrSource"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,t.jsx)(d.td,{children:"SR source code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"112"}),(0,t.jsx)(d.td,{children:"execStatus"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ExecStatus",children:"enum : ExecStatus"})}),(0,t.jsx)(d.td,{children:"SR execution status (Fill,Bust,Correct,Reject)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"115"}),(0,t.jsx)(d.td,{children:"clientOrderId"}),(0,t.jsx)(d.td,{children:"string(24)"}),(0,t.jsx)(d.td,{children:"client order ID (should be unique for each clientFirm) (if any) [copied into SpdrParentExecution.altOrderId]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"118"}),(0,t.jsx)(d.td,{children:"srcRoutingCode"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"inbound FIX routing code (drop server) (if any)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"121"}),(0,t.jsx)(d.td,{children:"riskGroupId"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"riskGroupId (parent order group ID) for this away execution report (will be incorporated into a corresponding EE risk group counter if != 0)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"124"}),(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{children:"SR security key"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"127"}),(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(d.td,{children:"SR security type [Stock, Future, Option]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"130"}),(0,t.jsx)(d.td,{children:"execRole"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ExecRole",children:"enum : ExecRole"})}),(0,t.jsx)(d.td,{children:"SpiderRock relationship to this execution record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"133"}),(0,t.jsx)(d.td,{children:"extExecBroker"}),(0,t.jsx)(d.td,{children:"string(12)"}),(0,t.jsx)(d.td,{children:"Client execBroker code"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"136"}),(0,t.jsx)(d.td,{children:"fillSide"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(d.td,{children:"fill side"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"139"}),(0,t.jsx)(d.td,{children:"fillPrice"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"fill price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"142"}),(0,t.jsx)(d.td,{children:"fillPriceType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PriceType",children:"enum : PriceType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"145"}),(0,t.jsx)(d.td,{children:"fillQuantity"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"fill quantity"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"148"}),(0,t.jsx)(d.td,{children:"childSize"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"child order size"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"151"}),(0,t.jsx)(d.td,{children:"fillExch"}),(0,t.jsx)(d.td,{children:"string(6)"}),(0,t.jsx)(d.td,{children:"fill exchange (if any)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"154"}),(0,t.jsx)(d.td,{children:"fillDttm"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"fill date/time"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"157"}),(0,t.jsx)(d.td,{children:"fillRefUPrc"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"reference underlier price @ fill arrival time"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"160"}),(0,t.jsx)(d.td,{children:"origExecID"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"original execution ID string (child order)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"163"}),(0,t.jsx)(d.td,{children:"lastExecID"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"most recent execution ID (same as origExecID unless CANCEL/CORRECTION has been processed)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"166"}),(0,t.jsx)(d.td,{children:"fillTransactDttm"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"transaction date/time as reported by exchange or down stream broker"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"169"}),(0,t.jsx)(d.td,{children:"fillReportDetail"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"extra detail (if any) from child execution"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"172"}),(0,t.jsx)(d.td,{children:"ssaleFlag"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"175"}),(0,t.jsx)(d.td,{children:"positionType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"178"}),(0,t.jsx)(d.td,{children:"theoVol"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"client supplied theoretical volatility (used for markup only)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"181"}),(0,t.jsx)(d.td,{children:"comment"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"text comment (if any)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"184"}),(0,t.jsx)(d.td,{children:"userData1"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"187"}),(0,t.jsx)(d.td,{children:"userData2"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"190"}),(0,t.jsx)(d.td,{children:"strategy"}),(0,t.jsx)(d.td,{children:"string(36)"}),(0,t.jsx)(d.td,{children:"client-supplied strategy string"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"193"}),(0,t.jsx)(d.td,{children:"modifiedBy"}),(0,t.jsx)(d.td,{children:"string(24)"}),(0,t.jsx)(d.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"196"}),(0,t.jsx)(d.td,{children:"modifiedIn"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"199"}),(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"timestamp of last modification"})]})]})]})]})}function o(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function n(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);