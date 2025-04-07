"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["15806"],{20038:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt","title":"MLinkStreamCheckPt","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/3325-mlink/MLinkStreamCheckPt.md","sourceDirName":"MessageSchemas/Schema/Topics/3325-mlink","slug":"/MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"MLinkStreamCheckPt"},"sidebar":"messageSchemasSidebar","previous":{"title":"MLinkStreamAck","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/MLinkStreamAck"},"next":{"title":"MLinkSubscribe","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/MLinkSubscribe"}}'),s=n("52676"),i=n("91503");n("71386"),n("9641");let l={title:"MLinkStreamCheckPt"},a="Schema: MLinkStreamCheckPt (ID: 3382)",d={},c=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function o(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"schema-mlinkstreamcheckpt-id-3382",children:["Schema: MLinkStreamCheckPt ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3382)"})]})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"3325-mlink"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"MLinkWs"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"sessionID"}),(0,s.jsx)(t.td,{children:"short"}),(0,s.jsx)(t.td,{children:"from MLinkStream.sessionID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"queryID"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"from MLinkStream.queryID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"signalID"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"from MLinkSignalReady.signalID (if send sequence triggered by an MLinkSignalReady message)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"state"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MLinkStreamState",children:"enum : MLinkStreamState"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"detail"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"highwaterTs"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"numBytesSent"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"numMessagesSent"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"waitElapsed"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"wait time between active send operations (SRC or timer)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"queryElapsed"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"total time spent in active send loop"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"tryFwdElapsed"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"total time spent scan/skipping"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"sendElapsed"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"total time spend encoding/copying to send buffer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"flushElapsed"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"total time spend sending/blocking on web socket"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9641:function(e,t,n){n.d(t,{Z:()=>i});var r=n("52676");n("75271");var s=n("54461");function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",i),hidden:n,children:t})}},71386:function(e,t,n){n.d(t,{Z:()=>b});var r=n("52676"),s=n("75271"),i=n("54461"),l=n("52289"),a=n("3225"),d=n("42834"),c=n("40578"),o=n("35834"),h=n("79616");function u(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n("44537");function j(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:d}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),h=e=>{let t=e.currentTarget,n=d[c.indexOf(t)].value;n!==s&&(o(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:d.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...l,className:(0,i.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function p(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function f(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??u(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[j,p]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,i]=(0,h.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),k=(()=>{let e=j??f;return x({value:e,tabValues:i})?e:null})();return(0,d.Z)(()=>{k&&m(k)},[k]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),p(e),b(e)},[p,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(j,{...t,...e}),(0,r.jsx)(p,{...t,...e})]})}function b(e){let t=(0,m.Z)();return(0,r.jsx)(f,{...e,children:u(e.children)},String(t))}},91503:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(75271);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);