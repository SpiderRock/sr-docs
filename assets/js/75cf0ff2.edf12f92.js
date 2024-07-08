"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1126],{17413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),o=t(28453);const s={title:"MLink Authentication"},r=void 0,c={id:"Documentation/PlatformAPIs/MLink/MLink-Authentication",title:"MLink Authentication",description:"Authentication Methods",source:"@site/docs/Documentation/PlatformAPIs/MLink/MLink-Authentication.md",sourceDirName:"Documentation/PlatformAPIs/MLink",slug:"/Documentation/PlatformAPIs/MLink/MLink-Authentication",permalink:"/docs/Documentation/PlatformAPIs/MLink/MLink-Authentication",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MLink Authentication"},sidebar:"documentationSidebar",previous:{title:"MLink Auction Responder",permalink:"/docs/Documentation/PlatformAPIs/MLink/MLink-AuctionResponder"},next:{title:"MLink REST API",permalink:"/docs/Documentation/PlatformAPIs/MLink/RESTAPI"}},a={},l=[{value:"Authentication Methods",id:"authentication-methods",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"authentication-methods",children:"Authentication Methods"}),"\n",(0,i.jsx)(n.p,{children:"You can authenticate to MLink through 2 different methods: Login or API Key. The Login method is intended for humans to access MLink via only a WebSocket connection. The API key method is intended for machines to access MLink through either a WebSocket connection or a REST API connection."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Login (WebSocket)"}),":\nUse this method to authenticate your application by challenging humans to login with their SpiderRock ID credentials along with multi-factor authentication (MFA)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The SpiderRock Support Desk will issue you a SpiderRock ID, by which you will receive an invitation to your registered email. From there, you will complete your setup and select with MFA method you want: Authenticator App or SMS. Upon completion of sign up you will have access to MLink as determined by your configuration."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session Keys:"})," a Session Key looks similar to an API key but is issued for each valid session after login. Therefore, once a user authenticates with their SpiderRock ID credentials their Session Key will be automatically issued and used for the remainer of the session."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"API Key (WebSocket and REST)"}),":\nUse this method to authenticate your application directly to MLink if there is no ability to use MFA or you only require a single data feed."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The SpiderRock Support Desk will issue an ",(0,i.jsx)(n.code,{children:"M2MUser"})," user as a datafeed profile, by which we will generate an API Key scoped to the permissions requested by the customer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using an API Key via REST:"}),' Add your API Key to the querystring as "apikey":\n',(0,i.jsx)(n.code,{children:"https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json?apikey=1234-5678-9012-31415"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using an API Key via WebSocket:"})," Send an MLinkLogon to MLink servers, then include ",(0,i.jsx)(n.code,{children:"apikey"})," as a header in the initial HTTP handshake request:"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'msg = {\n    "header": {"mTyp": "MLinkLogon"},\n    "message": {\n        "apiKey": "1234-5678-9012-3141" # Replace with actual API key or session key\n    } \n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async with websockets.connect(uriJson, \nextra_headers={"Authorization": "Bearer {apikey}"}, ping_timeout=None) as websocket:\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);