"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[52401],{33970:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=s(74848),i=s(28453);const o={title:"Live Option Basket Calculator via MLink",sidebar_position:3},a=void 0,c={id:"Documentation/PlatformAPIs/MLink/OptionBasketCalculator",title:"Live Option Basket Calculator via MLink",description:"The SpiderRock Option Basket Calculator (Listed and FLEX) allows clients to send a collection of option definitions (FLEX/Listed) OptionItemDef to the server, grouped into a basket identified by a unique basket number. Clients can then request the server to recalculate the options in the basket on demand using a GetOptionBasket request. The MLinkS Servers will respond with the recalculated option details in the form of OptionItemCalc objects.",source:"@site/versioned_docs/version-8.4.10.2/Documentation/PlatformAPIs/MLink/3.OptionBasketCalculator.md",sourceDirName:"Documentation/PlatformAPIs/MLink",slug:"/Documentation/PlatformAPIs/MLink/OptionBasketCalculator",permalink:"/docs/8.4.10.2/Documentation/PlatformAPIs/MLink/OptionBasketCalculator",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",sidebarPosition:3,frontMatter:{title:"Live Option Basket Calculator via MLink",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"MLink Websocket API",permalink:"/docs/8.4.10.2/Documentation/PlatformAPIs/MLink/WebSocket"},next:{title:"Connecting with Postman",permalink:"/docs/8.4.10.2/Documentation/PlatformAPIs/MLink/Postman"}},r={},l=[{value:"Live Option Basket Calculator",id:"live-option-basket-calculator",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Client Sends OptionItemDef Objects",id:"client-sends-optionitemdef-objects",level:4},{value:"Client Requests Recalculation with GetBasketCalc",id:"client-requests-recalculation-with-getbasketcalc",level:4},{value:"Server Processes the Request",id:"server-processes-the-request",level:4},{value:"Server Sends OptionItemCalc Objects",id:"server-sends-optionitemcalc-objects",level:4}];function d(e){const t={a:"a",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The SpiderRock Option Basket Calculator (Listed and FLEX) allows clients to send a collection of option definitions (FLEX/Listed) ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemDef",children:"OptionItemDef"})," to the server, grouped into a basket identified by a unique basket number. Clients can then request the server to recalculate the options in the basket on demand using a ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/GetOptionBasket",children:"GetOptionBasket"})," request. The MLinkS Servers will respond with the recalculated option details in the form of ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemCalc",children:"OptionItemCalc"})," objects."]}),"\n",(0,n.jsxs)(t.p,{children:['Basket Calculator messages are available to SpiderRock Connect clients (hereafter "Subscribers") via SpiderRock Connect\'s ',(0,n.jsx)(t.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/",children:"MLink/WebSocket API"})," and ",(0,n.jsx)(t.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/",children:"MLink/REST API"}),". Clients have the possibility to override option default values when they define their basket. Overrideable values include volatility, underlying price, rate, model type etc... To gain access, clients must secure an MLink API Key, connect to an MLink/WebSocket server, and define their basket sending  ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemDef",children:(0,n.jsx)(t.em,{children:"OptionItemDef"})})," messages."]}),"\n",(0,n.jsxs)(t.p,{children:["This page focuses on the messages relevant to the Basket Calculator users. Interested users should also review SpiderRock Connect's more general ",(0,n.jsx)(t.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/",children:(0,n.jsx)(t.strong,{children:"MLink/Websocket API documentation"})})," for information on connecting, subscribing, sending, and receiving messages."]}),"\n",(0,n.jsx)(t.h3,{id:"live-option-basket-calculator",children:"Live Option Basket Calculator"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Message"}),(0,n.jsx)(t.th,{children:"Source"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemDef",children:"OptionItemDef"})}),(0,n.jsx)(t.td,{children:"Subscriber"}),(0,n.jsx)(t.td,{children:"This is the primary message used to define the Option Basket that an that a user is interested in. Option can be LISTED or FLEX"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/GetOptionBasket",children:"GetOptionBasket"})}),(0,n.jsx)(t.td,{children:"Subscriber"}),(0,n.jsx)(t.td,{children:"Trigger Option Basket Calculator"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemCalc",children:"OptionItemCalc"})}),(0,n.jsx)(t.td,{children:"SR"}),(0,n.jsx)(t.td,{children:"Live option basket pricing item calculation returned by the Basket Calc trigger"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"workflow",children:"Workflow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h4,{id:"client-sends-optionitemdef-objects",children:["Client Sends ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemDef",children:"OptionItemDef"})," Objects"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The client sends multiple OptionItemDef objects to the MLink server, each representing an option the client is interested in. These objects include key details about the option, such as option key, volatility, underlying price, rate, and other relevant information."}),"\n",(0,n.jsx)(t.p,{children:"Each OptionItemDef object includes a basketNumber field that groups multiple options into a single basket."}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h4,{id:"client-requests-recalculation-with-getbasketcalc",children:["Client Requests Recalculation with ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/GetOptionBasket",children:"GetBasketCalc"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The client sends a GetBasketCalc object to the server, specifying the basketNumber of the basket they want recalculated. This object serves as a request for the server to perform calculations on all the options within the specified basket."}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h4,{id:"server-processes-the-request",children:"Server Processes the Request"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Upon receiving the GetBasketCalc request, the server processes the request by recalculating the details of each option in the basket. This involves performing various computations based on the parameters provided in the OptionItemDef objects."}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h4,{id:"server-sends-optionitemcalc-objects",children:["Server Sends ",(0,n.jsx)(t.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink-custom/OptionItemCalc",children:"OptionItemCalc"})," Objects"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The server responds to the client's GetBasketCalc request by sending back multiple OptionItemCalc JSON objects. Each object contains the recalculated details of an option in the basket, including values such as delta, gamma, theta, and other Greeks, along with the option price and any error messages."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);