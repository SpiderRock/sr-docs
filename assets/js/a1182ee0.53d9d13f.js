"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["28044"],{14264:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>i});var n=JSON.parse('{"id":"MessageSchemas/Schema/Topics/mlink/PostAck","title":"PostAck","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3325-mlink/PostAck.md","sourceDirName":"MessageSchemas/Schema/Topics/3325-mlink","slug":"/MessageSchemas/Schema/Topics/mlink/PostAck","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/PostAck","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"PostAck"},"sidebar":"messageSchemasSidebar","previous":{"title":"MsgTickerKey","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MsgTickerKey"},"next":{"title":"QueryResult","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/QueryResult"}}'),s=r("52676"),a=r("91503");r("71386"),r("9641");let l={title:"PostAck"},i="Schema: PostAck (ID: 3440)",c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"schema-postack-id-3440",children:["Schema: PostAck ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3440)"})]})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3325-mlink"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"MLinkRest"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"msgType"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"message type of the data object being ack'd"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"sendTs"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"send timestamp of the data object being ack'd (note: MessageType + SendTimestamp should be unique)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"pkey"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"pkey (string) of the message being ack'd"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"result"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PostAckResult",children:"enum : PostAckResult"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"detail"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9641:function(e,t,r){r.d(t,{Z:()=>a});var n=r("52676");r("75271");var s=r("54461");function a(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",a),hidden:r,children:t})}},71386:function(e,t,r){r.d(t,{Z:()=>b});var n=r("52676"),s=r("75271"),a=r("54461"),l=r("52289"),i=r("3225"),c=r("42834"),o=r("40578"),d=r("35834"),u=r("79616");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var p=r("44537");function x(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,r=c[o.indexOf(t)].value;r!==s&&(d(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:c.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:u,...l,className:(0,a.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function f(e){let{lazy:t,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function j(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,p]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[x,f]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(a),(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}({queryString:r,groupId:n}),[j,b]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,a]=(0,u.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:n}),k=(()=>{let e=x??j;return m({value:e,tabValues:a})?e:null})();return(0,c.Z)(()=>{k&&p(k)},[k]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),b(e)},[f,b,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_ArS0"),children:[(0,n.jsx)(x,{...t,...e}),(0,n.jsx)(f,{...t,...e})]})}function b(e){let t=(0,p.Z)();return(0,n.jsx)(j,{...e,children:h(e.children)},String(t))}},91503:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return l}});var n=r(75271);let s={},a=n.createContext(s);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);