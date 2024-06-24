"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46274],{18493:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=i(74848),t=i(28453);const r={title:"MLinkSubscribe"},d="Message: MLinkSubscribe (ID: 3386)",c={id:"Schema/Topics/mlink/MLinkSubscribe",title:"MLinkSubscribe",description:"META DATA  (Topic: mlink )",source:"@site/docs/Schema/Topics/3325-mlink/MLinkSubscribe.md",sourceDirName:"Schema/Topics/3325-mlink",slug:"/Schema/Topics/mlink/MLinkSubscribe",permalink:"/sr-docs/docs/Schema/Topics/mlink/MLinkSubscribe",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MLinkSubscribe"},sidebar:"schemaSidebar",previous:{title:"MLinkStreamCheckPt",permalink:"/sr-docs/docs/Schema/Topics/mlink/MLinkStreamCheckPt"},next:{title:"MLinkSubscribeAck",permalink:"/sr-docs/docs/Schema/Topics/mlink/MLinkSubscribeAck"}},l={},h=[{value:"META DATA  (Topic: mlink )",id:"meta-data--topic-mlink-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"message-mlinksubscribe-id-3386",children:["Message: MLinkSubscribe ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3386)"})]}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(s.h3,{id:"meta-data--topic-mlink-",children:"META DATA  (Topic: mlink )"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"MLinkWs"})]})})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsx)(s.table,{children:(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})})})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(s.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"activeLatency"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"(optional) number of milliseconds between active send attempts (1 = minimum delay, 0 = wait for SignalReady) [default = 0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"compression"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../Enums/MLinkCompression",children:"enum : MLinkCompression"})}),(0,n.jsx)(s.td,{children:"(optional) FieldChangesOnly will supress fields in messages that have not changed since the previous send (resets automatically after every subscription)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"doReset"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes all current subscriptions will be removed prior to applying the actions below"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sessionID"}),(0,n.jsx)(s.td,{children:"short"}),(0,n.jsx)(s.td,{children:"(optional) actions below apply only to the sessionID virtual channel; should be zero for non-multiplexed web-socket connections."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"subscribeID"}),(0,n.jsx)(s.td,{children:"long"}),(0,n.jsx)(s.td,{children:"(optional) subscribeD will be reflected back in the corresponding MLinkSubscribeAck message; nothing is assumed about structure of this number"})]})]})]}),(0,n.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,n.jsx)(s.p,{children:"Subscribe"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"highwaterTs"}),(0,n.jsx)(s.td,{children:"long"}),(0,n.jsx)(s.td,{children:"(optional) records must have a header.sentTs that is later than this value (nanoseconds after the UNIX epoch) [-1 means start from current server side highwaterTs]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"msgName"}),(0,n.jsx)(s.td,{children:"string(32)"}),(0,n.jsx)(s.td,{children:"(required) a SpiderRock message name (topic channel) (can be string name or protobuf message number)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"msgPKey"}),(0,n.jsx)(s.td,{children:"string(128)"}),(0,n.jsx)(s.td,{children:"(required) must be an existing message.pkey; can be in either flat string or JSON format"})]})]})]}),(0,n.jsx)(s.p,{children:"Unsubscribe"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"msgName"}),(0,n.jsx)(s.td,{children:"string(32)"}),(0,n.jsx)(s.td,{children:"(required) a SpiderRock message name (topic channel) (can be string name or protobuf message number)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"msgPKey"}),(0,n.jsx)(s.td,{children:"string(128)"}),(0,n.jsx)(s.td,{children:"# an existing message.pkey; can be in either flat string or JSON format; if missing/empty all active msgName subscriptions will be removed"})]})]})]}),(0,n.jsx)(s.p,{children:"View"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"msgName"}),(0,n.jsx)(s.td,{children:"string(32)"}),(0,n.jsx)(s.td,{children:"a SpiderRock message name (topic channel) (can be string name or protobuf message number)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"view"}),(0,n.jsx)(s.td,{children:"string(128)"}),(0,n.jsx)(s.td,{children:"list (subset) of field names to return with this message type (eg. bidprice,askprice,bidsize,asksize)"})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>c});var n=i(96540);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);