"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["534"],{9619:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"MessageSchemas/Schema/Topics/mlink/MLinkSubscribeCheckPt","title":"MLinkSubscribeCheckPt","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3325-mlink/MLinkSubscribeCheckPt.md","sourceDirName":"MessageSchemas/Schema/Topics/3325-mlink","slug":"/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeCheckPt","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeCheckPt","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"MLinkSubscribeCheckPt"},"sidebar":"messageSchemasSidebar","previous":{"title":"MLinkSubscribeAck","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck"},"next":{"title":"MsgDesc","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MsgDesc"}}'),s=r("52676"),i=r("91503");r("71386"),r("9641");let a={title:"MLinkSubscribeCheckPt"},l="Schema: MLinkSubscribeCheckPt (ID: 3388)",c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function u(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"schema-mlinksubscribecheckpt-id-3388",children:["Schema: MLinkSubscribeCheckPt ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3388)"})]})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3325-mlink"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"MLinkWs"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"sessionID"}),(0,s.jsx)(t.td,{children:"short"}),(0,s.jsx)(t.td,{children:"from MLinkSubscribe.sessionID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"subscribeID"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"from MLinkSubscribe.subscribeID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"signalID"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"MLinkSignalReady.signalID (if send sequence triggered by an MLinkSignalReady message)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"state"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MLinkSubscribeState",children:"enum : MLinkSubscribeState"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"detail"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{})]})]})]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9641:function(e,t,r){r.d(t,{Z:()=>i});var n=r("52676");r("75271");var s=r("54461");function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",i),hidden:r,children:t})}},71386:function(e,t,r){r.d(t,{Z:()=>j});var n=r("52676"),s=r("75271"),i=r("54461"),a=r("52289"),l=r("3225"),c=r("42834"),o=r("40578"),u=r("35834"),d=r("79616");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var b=r("44537");function x(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let t=e.currentTarget,r=c[o.indexOf(t)].value;r!==s&&(u(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t),children:c.map(e=>{let{value:t,label:r,attributes:a}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,i.Z)("tabs__item","tabItem_aitt",a?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function f(e){let{lazy:t,children:r,selectedValue:a}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function p(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,i=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[a,b]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:i})),[x,f]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})},[i,n])]}({queryString:r,groupId:n}),[p,j]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,i]=(0,d.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:n}),k=(()=>{let e=x??p;return m({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{k&&b(k)},[k]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);b(e),f(e),j(e)},[f,j,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,n.jsx)(x,{...t,...e}),(0,n.jsx)(f,{...t,...e})]})}function j(e){let t=(0,b.Z)();return(0,n.jsx)(p,{...e,children:h(e.children)},String(t))}},91503:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var n=r(75271);let s={},i=n.createContext(s);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);