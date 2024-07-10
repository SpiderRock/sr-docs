"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73214],{92775:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=t(74848),i=t(28453);const r={title:"MLinkStream"},d="Schema: MLinkStream (ID: 3380)",l={id:"MessageSchemas/Schema/Topics/mlink/MLinkStream",title:"MLinkStream",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3325-mlink/MLinkStream.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/MLinkStream",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkStream",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MLinkStream"},sidebar:"messageSchemasSidebar",previous:{title:"MLinkSignalReady",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkSignalReady"},next:{title:"MLinkStreamAck",permalink:"/docs/MessageSchemas/Schema/Topics/mlink/MLinkStreamAck"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"schema-mlinkstream-id-3380",children:["Schema: MLinkStream ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3380)"})]}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"3325-mlink"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"MLinkWs"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"#"}),(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"100"}),(0,n.jsx)(s.td,{children:"msgName"}),(0,n.jsx)(s.td,{children:"string(32)"}),(0,n.jsx)(s.td,{children:"(required) a SpiderRock message name (topic channel) (can be string name or protobuf message number)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"103"}),(0,n.jsx)(s.td,{children:"where"}),(0,n.jsx)(s.td,{children:"text2"}),(0,n.jsxs)(s.td,{children:['(optional) where clause; eg. "(bidexch:eq',":AMEX"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"106"}),(0,n.jsx)(s.td,{children:"view"}),(0,n.jsx)(s.td,{children:"text2"}),(0,n.jsx)(s.td,{children:"(optional) list (subset) of field names to return with this message (eg. bidprice,askprice,bidsize,asksize) (default is all names)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"109"}),(0,n.jsx)(s.td,{children:"unsubscribe"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"(optional) if set to Yes the specified message type will be unsubscribed and thus no longer return"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"112"}),(0,n.jsx)(s.td,{children:"sessionID"}),(0,n.jsx)(s.td,{children:"short"}),(0,n.jsx)(s.td,{children:"(optional) actions below apply only to the sessionID virtual session; should be zero for non-multiplexed web-socket connections."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"115"}),(0,n.jsx)(s.td,{children:"queryID"}),(0,n.jsx)(s.td,{children:"long"}),(0,n.jsx)(s.td,{children:"(optional) queryID will be reflected back in the corresponding MLinkStreamAck message; nothing is assumed about structure of this number"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"118"}),(0,n.jsx)(s.td,{children:"queryLabel"}),(0,n.jsx)(s.td,{children:"string(64)"}),(0,n.jsx)(s.td,{children:"(optional) query label; used for logging and query tracking"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"121"}),(0,n.jsx)(s.td,{children:"activeLatency"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"(optional) number of milliseconds between active send attempts (1 = minimum delay, 0 = wait for SignalReady) [default = 0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"124"}),(0,n.jsx)(s.td,{children:"sysEnvironment"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(s.td,{children:"(optional) records cannot have [sysEnvironment + sysRealm] in their route history (no loops)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"127"}),(0,n.jsx)(s.td,{children:"sysRealm"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SysRealm",children:"enum : SysRealm"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"130"}),(0,n.jsx)(s.td,{children:"highwaterTs"}),(0,n.jsx)(s.td,{children:"long"}),(0,n.jsx)(s.td,{children:"(optional) records must have a header.sentTs that is later than this value (nanoseconds after the UNIX epoch) [-1 means start from current server side highwaterTs]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"133"}),(0,n.jsx)(s.td,{children:"stripeFilter"}),(0,n.jsx)(s.td,{children:"text1"}),(0,n.jsx)(s.td,{children:"(optional) if supplied records must be within the specified stripe"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"136"}),(0,n.jsx)(s.td,{children:"schemaHash"}),(0,n.jsx)(s.td,{children:"long"}),(0,n.jsx)(s.td,{children:"(optional) message schema hash [if supplied and matches server schema hash for this message binary encoding will be used]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"139"}),(0,n.jsx)(s.td,{children:"localMsgType"}),(0,n.jsx)(s.td,{children:"ushort"}),(0,n.jsx)(s.td,{children:"(optional) if != 0 the msgType number will be translated from msgType to localMsgType in the mlink server (protobuf and binary messages)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"142"}),(0,n.jsx)(s.td,{children:"localMsgName"}),(0,n.jsx)(s.td,{children:"string(32)"}),(0,n.jsx)(s.td,{children:"(optional) if exists the message name will be translated from msgName to localMsgName in the mlink server (json messages)"})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var n=t(96540);const i={},r=n.createContext(i);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);