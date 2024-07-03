"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44723],{39885:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=t(74848),s=t(28453);const i={title:"OptOrderReplaceGateway"},n="Schema: OptOrderReplaceGateway (ID: 5170)",c={id:"MessageSchemas/Schema/Topics/srse-gateway/OptOrderReplaceGateway",title:"OptOrderReplaceGateway",description:"Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.See the SpiderRock Execution Engine concept guide for more details.",source:"@site/docs/MessageSchemas/Schema/Topics/5120-srse-gateway/OptOrderReplaceGateway.md",sourceDirName:"MessageSchemas/Schema/Topics/5120-srse-gateway",slug:"/MessageSchemas/Schema/Topics/srse-gateway/OptOrderReplaceGateway",permalink:"/docs/MessageSchemas/Schema/Topics/srse-gateway/OptOrderReplaceGateway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptOrderReplaceGateway"},sidebar:"messageSchemasSidebar",previous:{title:"OptOrderGateway",permalink:"/docs/MessageSchemas/Schema/Topics/srse-gateway/OptOrderGateway"},next:{title:"ParentOrderGateway",permalink:"/docs/MessageSchemas/Schema/Topics/srse-gateway/ParentOrderGateway"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"schema-optorderreplacegateway-id-5170",children:["Schema: OptOrderReplaceGateway ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 5170)"})]}),"\n",(0,d.jsxs)(r.p,{children:["Records updated, or replaced into the OptionOrderReplaceGateway table are validated and then converted to SpdrParentOrder cancel/replace records and forwarded to the appropriate execution engine for futher processing.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"5120-srse-gateway"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"10"}),(0,d.jsx)(r.td,{children:"okey"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"11"}),(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"12"}),(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"13"}),(0,d.jsx)(r.td,{children:"groupingCode"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"14"}),(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"121"}),(0,d.jsx)(r.td,{children:"makeProbability"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"probability threshold for posting in an exchange order book"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"109"}),(0,d.jsx)(r.td,{children:"orderActiveSize"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"total activated size (total size released for execution) (-1 = all available size)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"130"}),(0,d.jsx)(r.td,{children:"orderDttm"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{children:"Order entry time.  Will be set to arrival time if not supplied."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"103"}),(0,d.jsx)(r.td,{children:"orderNumber"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"SPDR order number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"112"}),(0,d.jsx)(r.td,{children:"orderPrcLimit"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsxs)(r.td,{children:["Order price limit.  Valid range: [0.005, 9999.0].  Required if ",(0,d.jsx)(r.code,{children:"orderLimitType"})," is Prc, PrcDe, PrcDeX, PrcDeT, PrcDeXT.  Ignored if ",(0,d.jsx)(r.code,{children:"orderLimitType"})," is Market.  Otherwise must be set to 0."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"106"}),(0,d.jsx)(r.td,{children:"orderSize"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"maximum fill size (contracts)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"115"}),(0,d.jsx)(r.td,{children:"orderVolLimit"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsxs)(r.td,{children:["Order volatility limit.  Valid range: [0.005, 9.000].  Required if ",(0,d.jsx)(r.code,{children:"orderLimitType"})," is Vol, VolX.  Ignored if ",(0,d.jsx)(r.code,{children:"orderLimitType"})," is Market.  Otherwise must be set to 0."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"133"}),(0,d.jsx)(r.td,{children:"positionType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"136"}),(0,d.jsx)(r.td,{children:"ssaleFlag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,d.jsx)(r.td,{children:"used to determine stock auto-hedge flags"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"124"}),(0,d.jsx)(r.td,{children:"strategy"}),(0,d.jsx)(r.td,{children:"string(36)"}),(0,d.jsx)(r.td,{children:"Client strategy string.  This value will appear on the SR Trade Monitor and in execution reports."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"118"}),(0,d.jsx)(r.td,{children:"takeProbability"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"probability threshold for taking an existing public quote"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"139"}),(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"127"}),(0,d.jsx)(r.td,{children:"userName"}),(0,d.jsx)(r.td,{children:"string(24)"}),(0,d.jsx)(r.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var d=t(96540);const s={},i=d.createContext(s);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);