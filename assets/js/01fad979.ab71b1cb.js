"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74900],{81948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(74848),s=n(28453);n(11470),n(19365);const a={title:"PostAck"},l="Schema: PostAck (ID: 3440)",c={id:"MessageSchemas/Schema/Topics/mlink/PostAck",title:"PostAck",description:"METADATA",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/3325-mlink/PostAck.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/PostAck",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/PostAck",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"PostAck"},sidebar:"messageSchemasSidebar",previous:{title:"MsgTickerKey",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/MsgTickerKey"},next:{title:"QueryResult",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/QueryResult"}},i={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-postack-id-3440",children:["Schema: PostAck ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3440)"})]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"3325-mlink"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"MLinkRest"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"msgType"}),(0,r.jsx)(t.td,{children:"ushort"}),(0,r.jsx)(t.td,{children:"message type of the data object being ack'd"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"103"}),(0,r.jsx)(t.td,{children:"sendTs"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"send timestamp of the data object being ack'd (note: MessageType + SendTimestamp should be unique)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"106"}),(0,r.jsx)(t.td,{children:"pkey"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{children:"pkey (string) of the message being ack'd"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"109"}),(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PostAckResult",children:"enum : PostAckResult"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"112"}),(0,r.jsx)(t.td,{children:"detail"}),(0,r.jsx)(t.td,{children:"text1"}),(0,r.jsx)(t.td,{})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),a=n(23104),l=n(56347),c=n(205),i=n(57485),o=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,d]=b({queryString:n,groupId:s}),[p,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=o??p;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),s=c[n].value;s!==r&&(o(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);