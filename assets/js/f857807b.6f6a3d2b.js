"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93354],{11316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(74848),s=t(28453);const a={title:"V8 Sandboxes",sidebar_position:3},i=void 0,r={id:"Documentation/Integration/V8Sandboxes",title:"V8 Sandboxes",description:"SpiderRock's sandbox environments are mock environments that can be used to develop against and test your integration with the SpiderRock platform, including the SpiderRock Connect ATS. You can connect our WebApp Tool Suite and also make FIX or MLink connections to sandboxes.  Each sandbox is a single stand-alone (not connected to live market data or live markets) process that is running a specific platform code revision.",source:"@site/docs/Documentation/Integration/V8Sandboxes.md",sourceDirName:"Documentation/Integration",slug:"/Documentation/Integration/V8Sandboxes",permalink:"/docs/Documentation/Integration/V8Sandboxes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"V8 Sandboxes",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Network Access",permalink:"/docs/Documentation/Integration/NetworkAccess/"},next:{title:"Citrix Tool Suite",permalink:"/docs/Documentation/Integration/CitrixToolSuite"}},c={},d=[{value:"WebApp Trade Suite",id:"webapp-trade-suite",level:3},{value:"MLink API",id:"mlink-api",level:3},{value:"FIX API",id:"fix-api",level:3},{value:"Mock Data",id:"mock-data",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"SpiderRock's sandbox environments are mock environments that can be used to develop against and test your integration with the SpiderRock platform, including the SpiderRock Connect ATS. You can connect our WebApp Tool Suite and also make FIX or MLink connections to sandboxes.  Each sandbox is a single stand-alone (not connected to live market data or live markets) process that is running a specific platform code revision."}),"\n",(0,o.jsx)(n.p,{children:"No market data authorizations are required to access sandboxes and sandboxes are available 7 days a week / 23 hours a day whether markets are open or not.  Sandboxes contain a small number of representative tickers/products.  Some tickers are static (market data doesn't move).  Others are live (market data follows a cohesive random walk pattern)."}),"\n",(0,o.jsxs)(n.p,{children:["SpiderRock  normally operate two permanent sandbox environments, one based on the current production software revision and one based on the staging (pre-release) software revision. It is possible to spin up a bespoke environment for an individudal client. ",(0,o.jsx)(n.a,{href:"docs/Documentation/ContactUs.md",children:"Contact us"})," for more information regarding that option."]}),"\n",(0,o.jsx)(n.p,{children:"All of SpiderRock's sandboxes operate out of our NY5 datacenter facility and are network ajacent to our production facilities.  Sandbox FIX ports can be accessed by VPN or cross-connect.  Sandbox MLink and ToolSuite ports can be accesses directly over the internet."}),"\n",(0,o.jsxs)(n.p,{children:["Please ",(0,o.jsx)(n.a,{href:"docs/Documentation/ContactUs.md",children:"contact the client support desk"})," for access credentials and assistance with connectivity."]}),"\n",(0,o.jsx)(n.h3,{id:"webapp-trade-suite",children:"WebApp Trade Suite"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The Trade Tool can be ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://sandbox.spiderrockconnect.com/trade",children:"accessed here"})})," via your web browser."]}),"\n",(0,o.jsx)(n.li,{children:"Please contact the client support desk for a demo of this tool."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"mlink-api",children:"MLink API"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The Sandbox can be accessed through MLink here:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["WebSocket API: wss://mlink-test.nms.saturn.spiderrockconnect.com/mlink/",(0,o.jsx)("protocol",{})]}),"\n",(0,o.jsxs)(n.li,{children:["REST API: ",(0,o.jsx)(n.a,{href:"https://mlink-test.nms.saturn.spiderrockconnect.com/rest/",children:"https://mlink-test.nms.saturn.spiderrockconnect.com/rest/"}),(0,o.jsx)("protocol",{})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Authentication via MLink (REST and WebSocket) can be done by any random UUID represented as 32 hexadecimal (16 bytes) digits in a 8-4-4-4-12 pattern, separated by hyphens (AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"https://mlink-test.nms.saturn.spiderrockconnect.com/rest/json?apikey=AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA&cmd=getmsgs&msgtype=stockbookquote\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["View the ",(0,o.jsx)(n.a,{href:"/docs/Documentation/PlatformAPIs/MLink/",children:(0,o.jsx)(n.strong,{children:"MLink documentation here"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"fix-api",children:"FIX API"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.a,{href:"/docs/Documentation/PlatformAPIs/FIX/",children:(0,o.jsx)(n.strong,{children:"FIX Specs here"})}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"mock-data",children:"Mock Data"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A few test symbols are used in this environment, with mock market data."}),"\n",(0,o.jsx)(n.li,{children:"Load the Trade Tool or query an MLinkServer to view the available symbols and their current markets."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);