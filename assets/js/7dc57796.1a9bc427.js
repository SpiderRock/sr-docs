"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["52150"],{20825:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/mlink/MLinkSignalReady","title":"MLinkSignalReady","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3325-mlink/MLinkSignalReady.md","sourceDirName":"MessageSchemas/Schema/Topics/3325-mlink","slug":"/MessageSchemas/Schema/Topics/mlink/MLinkSignalReady","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkSignalReady","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{"title":"MLinkSignalReady"},"sidebar":"messageSchemasSidebar","previous":{"title":"MLinkLogon","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkLogon"},"next":{"title":"MLinkStream","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/MLinkStream"}}'),a=t("52676"),s=t("91503");t("71386"),t("9641");let l={title:"MLinkSignalReady"},i="Schema: MLinkSignalReady (ID: 3410)",c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"schema-mlinksignalready-id-3410",children:["Schema: MLinkSignalReady ",(0,a.jsx)("span",{className:"small-text",children:"(ID: 3410)"})]})}),"\n",(0,a.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Topic"}),(0,a.jsx)(n.td,{children:"3325-mlink"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"MLink Token"}),(0,a.jsx)(n.td,{children:"MLinkWs"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,a.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"#"}),(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Comment"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"100"}),(0,a.jsx)(n.td,{children:"sessionID"}),(0,a.jsx)(n.td,{children:"short"}),(0,a.jsx)(n.td,{children:"(optional) subscription sessionID (if missing or -1 will signal all sessionIDs for this websocket connection)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"103"}),(0,a.jsx)(n.td,{children:"signalID"}),(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"(optional) will be reflected back in xCheckPt.signalID fields that indicates that a specified signal ready triggered active send is complete."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"106"}),(0,a.jsx)(n.td,{children:"readyScan"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"../../../Enums/ReadyScan",children:"enum : ReadyScan"})}),(0,a.jsx)(n.td,{children:"(optional; default is Incremental) Incremental = messages w/changes (all fields; cumulative changes) since previous MLinkSignalReady; FullScan = all messages"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9641:function(e,n,t){t.d(n,{Z:()=>s});var r=t("52676");t("75271");var a=t("54461");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_SSzl",s),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>j});var r=t("52676"),a=t("75271"),s=t("54461"),l=t("52289"),i=t("3225"),c=t("42834"),o=t("40578"),d=t("35834"),u=t("79616");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var f=t("44537");function p(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let n=e.currentTarget,t=c[o.indexOf(n)].value;t!==a&&(d(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...l,className:(0,s.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,f]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[p,x]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[b,j]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),g=(()=>{let e=p??b;return m({value:e,tabValues:s})?e:null})();return(0,c.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),x(e),j(e)},[x,j,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(p,{...n,...e}),(0,r.jsx)(x,{...n,...e})]})}function j(e){let n=(0,f.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(75271);let a={},s=r.createContext(a);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);