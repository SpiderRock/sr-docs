"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89169],{84642:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var r=i(74848),n=i(28453);const t={title:"MLinkSubscribeAck"},d="Schema: MLinkSubscribeAck (ID: 3387)",c={id:"MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck",title:"MLinkSubscribeAck",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3325-mlink/MLinkSubscribeAck.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MLinkSubscribeAck"},sidebar:"messageSchemasSidebar",previous:{title:"MLinkSubscribe",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkSubscribe"},next:{title:"MLinkSubscribeCheckPt",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeCheckPt"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-mlinksubscribeack-id-3387",children:["Schema: MLinkSubscribeAck ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3387)"})]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"MLinkWs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"mlink"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsx)(s.table,{children:(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})})})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"didReset"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"if Yes all current subscriptions were removed prior to applying the actions below"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numActiveSubscriptions"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sessionID"}),(0,r.jsx)(s.td,{children:"short"}),(0,r.jsx)(s.td,{children:"from MLinkSubscribe.sessionID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"subscribeID"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"from MLinkSubscribe.subscribeID"})]})]})]}),(0,r.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,r.jsx)(s.p,{children:"Subscribe"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"detail"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"msgName"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{children:"(required) a SpiderRock message name (topic channel)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"msgPKey"}),(0,r.jsx)(s.td,{children:"string(128)"}),(0,r.jsx)(s.td,{children:"(required) must be an existing message.pkey; can be in either flat string or JSON format"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"result"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SubscribeMsgResult",children:"enum : SubscribeMsgResult"})}),(0,r.jsx)(s.td,{})]})]})]}),(0,r.jsx)(s.p,{children:"Unsubscribe"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"msgName"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{children:"(required) a SpiderRock message name (topic channel)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"msgPKey"}),(0,r.jsx)(s.td,{children:"string(128)"}),(0,r.jsx)(s.td,{children:"an existing message.pkey; can be in either flat string or JSON format; if missing/empty all active msgName subscriptions will be removed"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"result"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SubscribeMsgResult",children:"enum : SubscribeMsgResult"})}),(0,r.jsx)(s.td,{})]})]})]}),(0,r.jsx)(s.p,{children:"View"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"detail"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"msgName"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{children:"a SpiderRock message name (topic channel) (can be string name or protobuf message number)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"result"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SubscribeMsgResult",children:"enum : SubscribeMsgResult"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"view"}),(0,r.jsx)(s.td,{children:"string(128)"}),(0,r.jsx)(s.td,{children:"list (subset) of field names to return with this message type (eg. bidprice,askprice,bidsize,asksize)"})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>c});var r=i(96540);const n={},t=r.createContext(n);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);