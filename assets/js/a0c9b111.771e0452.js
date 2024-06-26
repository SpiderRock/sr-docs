"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63393],{53653:(t,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var e=r(74848),s=r(28453);const n={title:"SpdrRiskGroupControl"},l="Schema: SpdrRiskGroupControl (ID: 4570)",d={id:"Schemas/Schema/Topics/risk-control/SpdrRiskGroupControl",title:"SpdrRiskGroupControl",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/4535-risk-control/SpdrRiskGroupControl.md",sourceDirName:"Schemas/Schema/Topics/4535-risk-control",slug:"/Schemas/Schema/Topics/risk-control/SpdrRiskGroupControl",permalink:"/docs/Schemas/Schema/Topics/risk-control/SpdrRiskGroupControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRiskGroupControl"},sidebar:"schemaSidebar",previous:{title:"SpdrRiskControl",permalink:"/docs/Schemas/Schema/Topics/risk-control/SpdrRiskControl"},next:{title:"MarRiskCounter",permalink:"/docs/Schemas/Schema/Topics/risk-counter/MarRiskCounter"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(t){const i={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i.h1,{id:"schema-spdrriskgroupcontrol-id-4570",children:["Schema: SpdrRiskGroupControl ",(0,e.jsx)("span",{className:"small-text",children:"(ID: 4570)"})]}),"\n",(0,e.jsxs)("div",{className:"single-message-meta",children:[(0,e.jsx)(i.h3,{id:"metadata",children:"METADATA"}),(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Attribute"}),(0,e.jsx)(i.th,{children:"Value"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"MLink Token"}),(0,e.jsx)(i.td,{children:"SystemData"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"Topic"}),(0,e.jsx)(i.td,{children:"risk-control"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"SRSE Product"}),(0,e.jsx)(i.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,e.jsxs)("div",{className:"single-message-primarykey",children:[(0,e.jsx)(i.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Field"}),(0,e.jsx)(i.th,{children:"Type"}),(0,e.jsx)(i.th,{children:"Comment"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"riskGroupId"}),(0,e.jsx)(i.td,{children:"long"}),(0,e.jsx)(i.td,{})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"accnt"}),(0,e.jsx)(i.td,{children:"string(16)"}),(0,e.jsx)(i.td,{})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"riskFirm"}),(0,e.jsx)(i.td,{children:"string(16)"}),(0,e.jsx)(i.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,e.jsxs)("div",{className:"single-message-body",children:[(0,e.jsx)(i.h3,{id:"body",children:"BODY"}),(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Field"}),(0,e.jsx)(i.th,{children:"Type"}),(0,e.jsx)(i.th,{children:"Comment"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"accEmaCxlDDeltaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"accEmaCxlDDeltaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct 60s EMA $delta short (positive number; <= 0 is no limit)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"accEmaCxlWtVegaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"accEmaCxlWtVegaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct 60s EMA wtVega short (positive number; <= 0 is no limit)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"expDayWtVegaOffset"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day wtVega offset (target)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"grpDayRMetric1Ratio"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"target bot / sld ratio (eg ratio=0.5 means that neutral is bot rMetric1 = 0.5x sld rMetric1)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"grpDayVegaRatio"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"target bot / sld ratio (eg ratio=2.0 means that neutral is bot vega = 2x sld vega)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"isDisabled"}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,e.jsx)(i.td,{children:"will disable all trading in this risk group (parent orders will cancel existing child orders and suspend new child orders)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxExpDayRMetric6Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+expiration day rMetric6 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxExpDayRMetric6Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+expiration day rMetric6 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxExpDayWtVegaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max accnt+expiration day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxExpDayWtVegaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max accnt+expiration day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayContractsAbs"}),(0,e.jsx)(i.td,{children:"int"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day opt contracts abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayContractsLn"}),(0,e.jsx)(i.td,{children:"int"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day opt contracts long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayContractsSh"}),(0,e.jsx)(i.td,{children:"int"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day opt contracts short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayDDeltaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day $delta long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayDDeltaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day $delta short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric1Abs"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric1 abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric1Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric1 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric1Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric1 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric2Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric2 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric2Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric2 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric3Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric3 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric3Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric3 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric4Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric4 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric4Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric4 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric5Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric5 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayRMetric5Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day rMetric5 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayVegaAbs"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day vega abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayVegaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day vega long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxGrpDayVegaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+riskGroup day vega short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayDDeltaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day $delta long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayDDeltaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day $delta short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayRMetric7Ln"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day rMetric7 long (positive number;-1=no limit);risk limit = max limit - current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayRMetric7Sh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day rMetric7 short (positive number;-1=no limit);risk limit = max limit + current net counter"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayVegaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayVegaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayWtVegaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"maxSymDayWtVegaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"modifiedBy"}),(0,e.jsx)(i.td,{children:"string(24)"}),(0,e.jsx)(i.td,{})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"modifiedIn"}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,e.jsx)(i.td,{})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"runStatus"}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,e.jsx)(i.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symDayDDeltaOffset"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day $delta offset (target)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symDayVegaOffset"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day vega offset (target)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symDayWtVegaOffset"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol day wtVega offset (target)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symEmaCxlDDeltaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symEmaCxlDDeltaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol 60s EMA $delta short (positive number; <= 0 is no limit)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symEmaCxlWtVegaLn"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"symEmaCxlWtVegaSh"}),(0,e.jsx)(i.td,{children:"float"}),(0,e.jsx)(i.td,{children:"max acct+symbol 60s EMA wtVega short (positive number; <= 0 is no limit)"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"sysEnvironment"}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,e.jsx)(i.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"timestamp"}),(0,e.jsx)(i.td,{children:"DateTime"}),(0,e.jsx)(i.td,{})]})]})]})]})]})}function x(t={}){const{wrapper:i}={...(0,s.R)(),...t.components};return i?(0,e.jsx)(i,{...t,children:(0,e.jsx)(o,{...t})}):o(t)}},28453:(t,i,r)=>{r.d(i,{R:()=>l,x:()=>d});var e=r(96540);const s={},n=e.createContext(s);function l(t){const i=e.useContext(n);return e.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function d(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),e.createElement(n.Provider,{value:i},t.children)}}}]);