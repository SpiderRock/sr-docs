"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["29391"],{76525:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck","title":"MLinkSubscribeAck","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3325-mlink/MLinkSubscribeAck.md","sourceDirName":"MessageSchemas/Schema/Topics/3325-mlink","slug":"/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"MLinkSubscribeAck"},"sidebar":"messageSchemasSidebar","previous":{"title":"MLinkSubscribe","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkSubscribe"},"next":{"title":"MLinkSubscribeCheckPt","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeCheckPt"}}'),n=s("52676"),i=s("91503");s("71386"),s("9641");let l={title:"MLinkSubscribeAck"},c="Schema: MLinkSubscribeAck (ID: 3387)",d={},a=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){let r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsxs)(r.h1,{id:"schema-mlinksubscribeack-id-3387",children:["Schema: MLinkSubscribeAck ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3387)"})]})}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"3325-mlink"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"MLinkWs"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"#"}),(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"100"}),(0,n.jsx)(r.td,{children:"sessionID"}),(0,n.jsx)(r.td,{children:"short"}),(0,n.jsx)(r.td,{children:"from MLinkSubscribe.sessionID"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"103"}),(0,n.jsx)(r.td,{children:"subscribeID"}),(0,n.jsx)(r.td,{children:"long"}),(0,n.jsx)(r.td,{children:"from MLinkSubscribe.subscribeID"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"106"}),(0,n.jsx)(r.td,{children:"numActiveSubscriptions"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"109"}),(0,n.jsx)(r.td,{children:"didReset"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(r.td,{children:"if Yes all current subscriptions were removed prior to applying the actions below"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,n.jsx)(r.p,{children:"View"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"115"}),(0,n.jsx)(r.td,{children:"msgName"}),(0,n.jsx)(r.td,{children:"string(32)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"118"}),(0,n.jsx)(r.td,{children:"view"}),(0,n.jsx)(r.td,{children:"string(128)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"121"}),(0,n.jsx)(r.td,{children:"result"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SubscribeMsgResult",children:"enum : SubscribeMsgResult"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"124"}),(0,n.jsx)(r.td,{children:"detail"}),(0,n.jsx)(r.td,{children:"string(32)"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Unsubscribe"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"130"}),(0,n.jsx)(r.td,{children:"msgName"}),(0,n.jsx)(r.td,{children:"string(32)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"133"}),(0,n.jsx)(r.td,{children:"msgPKey"}),(0,n.jsx)(r.td,{children:"string(128)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"136"}),(0,n.jsx)(r.td,{children:"result"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SubscribeMsgResult",children:"enum : SubscribeMsgResult"})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Subscribe"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"142"}),(0,n.jsx)(r.td,{children:"msgName"}),(0,n.jsx)(r.td,{children:"string(32)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"145"}),(0,n.jsx)(r.td,{children:"msgPKey"}),(0,n.jsx)(r.td,{children:"string(128)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"148"}),(0,n.jsx)(r.td,{children:"result"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SubscribeMsgResult",children:"enum : SubscribeMsgResult"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"151"}),(0,n.jsx)(r.td,{children:"detail"}),(0,n.jsx)(r.td,{children:"string(32)"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9641:function(e,r,s){s.d(r,{Z:()=>i});var t=s("52676");s("75271");var n=s("54461");function i(e){let{children:r,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_SSzl",i),hidden:s,children:r})}},71386:function(e,r,s){s.d(r,{Z:()=>f});var t=s("52676"),n=s("75271"),i=s("54461"),l=s("52289"),c=s("3225"),d=s("42834"),a=s("40578"),h=s("35834"),u=s("79616");function o(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:r,tabValues:s}=e;return s.some(e=>e.value===r)}var j=s("44537");function b(e){let{className:r,block:s,selectedValue:n,selectValue:c,tabValues:d}=e,a=[],{blockElementScrollPositionUntilNextRender:h}=(0,l.o5)(),u=e=>{let r=e.currentTarget,s=d[a.indexOf(r)].value;s!==n&&(h(r),c(s))},o=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let s=a.indexOf(e.currentTarget)+1;r=a[s]??a[0];break}case"ArrowLeft":{let s=a.indexOf(e.currentTarget)-1;r=a[s]??a[a.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},r),children:d.map(e=>{let{value:r,label:s,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>a.push(e),onKeyDown:o,onClick:u,...l,className:(0,i.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":n===r}),children:s??r},r)})})}function m(e){let{lazy:r,children:s,selectedValue:l}=e,c=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){let e=c.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:c.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function p(e){let r=function(e){let{defaultValue:r,queryString:s=!1,groupId:t}=e,i=function(e){let{values:r,children:s}=e;return(0,n.useMemo)(()=>{let e=r??o(s).map(e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}});return!function(e){let r=(0,h.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,s])}(e),[l,j]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=s.find(e=>e.default)??s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:i})),[b,m]=function(e){let{queryString:r=!1,groupId:s}=e,t=(0,c.k6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,a._X)(i),(0,n.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})},[i,t])]}({queryString:s,groupId:t}),[p,f]=function(e){let{groupId:r}=e,s=r?`docusaurus.tab.${r}`:null,[t,i]=(0,u.Nk)(s);return[t,(0,n.useCallback)(e=>{s&&i.set(e)},[s,i])]}({groupId:t}),k=(()=>{let e=b??p;return x({value:e,tabValues:i})?e:null})();return(0,d.Z)(()=>{k&&j(k)},[k]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);j(e),m(e),f(e)},[m,f,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,t.jsx)(b,{...r,...e}),(0,t.jsx)(m,{...r,...e})]})}function f(e){let r=(0,j.Z)();return(0,t.jsx)(p,{...e,children:o(e.children)},String(r))}},91503:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return l}});var t=s(75271);let n={},i=t.createContext(n);function l(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);