"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17096],{88653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=t(74848),r=t(28453),a=t(11470),l=t(19365);const i={title:"UserApiKey"},c="Schema: UserApiKey (ID: 3476)",o={id:"MessageSchemas/Schema/Topics/mlink/UserApiKey",title:"UserApiKey",description:"METADATA",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3325-mlink/UserApiKey.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/UserApiKey",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/UserApiKey",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{title:"UserApiKey"},sidebar:"messageSchemasSidebar",previous:{title:"QueryResult",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/QueryResult"},next:{title:"UserMetaData",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/mlink/UserMetaData"}},d={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Post Msgs API Call",id:"post-msgs-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"schema-userapikey-id-3476",children:["Schema: UserApiKey ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3476)"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"3325-mlink"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"MLinkRest"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"byte"}),(0,s.jsx)(n.td,{children:"API key serial number which identifies this key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"101"}),(0,s.jsx)(n.td,{children:"expires"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"API key expiration date, defaults to never 2100-01-01"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"102"}),(0,s.jsx)(n.td,{children:"created"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"API key creation date"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"label"}),(0,s.jsx)(n.td,{children:"string(255)"}),(0,s.jsx)(n.td,{children:"API key name/description (if any; may be client supplied)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"104"}),(0,s.jsx)(n.td,{children:"plaintextApiKey"}),(0,s.jsx)(n.td,{children:"string(36)"}),(0,s.jsx)(n.td,{children:"plaintext API key (only sent for an add operation)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"105"}),(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"did the call succeed?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"errorMessage"}),(0,s.jsx)(n.td,{children:"string(255)"}),(0,s.jsx)(n.td,{children:"error message if success == No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"107"}),(0,s.jsx)(n.td,{children:"action"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/MLinkActions",children:"enum : MLinkActions"})}),(0,s.jsx)(n.td,{children:"action to take"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"post-msgs-api-call",children:"Post Msgs API Call"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\n# Replace with your desired MLINK URL\nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Request Parameters\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'postmsgs\',\n    "postaction": "U", # (U)pdate, (I)nsert, (R)eplace, or (D)elete\n    "postmerge": "Y", # (Y)es or (N)o\n}\n\npayload = {\n    "header": {\n        "mTyp": "UserApiKey"\n    },\n    "message": {\n        "id": 1, // byte\n        "expires": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "created": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "label": "exampleString", // string\n        "plaintextApiKey": "exampleString", // string\n        "success": "enumValue", // enum(YesNo) - None, Yes, No\n        "errorMessage": "exampleString", // string\n        "action": "enumValue" // enum(MLinkActions) - None Select Insert Update Replace Delete\n    }\n}\n\nresponse = requests.post(MLINK_PROD_URL, params=params, json=payload)\n'})})}),(0,s.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\' \\\n--data-urlencode \'apiKey=XXXX-XXXX-XXXX-XXXX\' \\\n--data-urlencode \'cmd=postmsgs\' \\\n--data-urlencode \'postaction=U\' \\ # (U)pdate, (I)nsert, (R)eplace, or (D)elete\n--data-urlencode \'postmerge=Y\' \\ # (Y)es or (N)o\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "header": {\n        "mTyp": "UserApiKey"\n    },\n    "message": {\n        "id": 1, // byte\n        "expires": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "created": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "label": "exampleString", // string\n        "plaintextApiKey": "exampleString", // string\n        "success": "enumValue", // enum(YesNo) - None, Yes, No\n        "errorMessage": "exampleString", // string\n        "action": "enumValue" // enum(MLinkActions) - None Select Insert Update Replace Delete\n    }\n}\'\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var s=t(96540),r=t(34164),a=t(23104),l=t(56347),i=t(205),c=t(57485),o=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=m({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),y=(()=>{const e=o??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{y&&c(y)}),[y]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==s&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,b.jsx)(S,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);