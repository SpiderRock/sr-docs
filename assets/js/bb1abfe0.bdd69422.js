"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[78026],{75960:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=n(74848),i=n(28453);const r={title:"MLink",sidebar_position:3},c=void 0,a={id:"Documentation/PlatformAPIs/MLink/MLink",title:"MLink",description:"The SpiderRock MLink API provides access to live-data objects from a SpiderRock system environment. This page provides documentation for how developers can connect to MLink servers and send or receive these live-data objects.",source:"@site/docs/Documentation/PlatformAPIs/MLink/MLink.md",sourceDirName:"Documentation/PlatformAPIs/MLink",slug:"/Documentation/PlatformAPIs/MLink/",permalink:"/docs/Documentation/PlatformAPIs/MLink/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MLink",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Stripes",permalink:"/docs/Documentation/PlatformAPIs/Stripes"},next:{title:"MLink REST API",permalink:"/docs/Documentation/PlatformAPIs/MLink/RESTAPI"}},d={},o=[{value:"Message Categories",id:"message-categories",level:2},{value:"Message Patterns",id:"message-patterns",level:3},{value:"Connection Types",id:"connection-types",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The SpiderRock MLink API provides access to live-data objects from a SpiderRock system environment. This page provides documentation for how developers can connect to MLink servers and send or receive these live-data objects."}),"\n",(0,t.jsx)(s.p,{children:"The MLink API has the following primary features:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"HTTP/REST style API including GET and POST commands, filtering, aggregation."}),"\n",(0,t.jsx)(s.li,{children:"HTTP/WebSocket style API for subscribing to live-data updates in both narrow and broad contexts."}),"\n",(0,t.jsx)(s.li,{children:"3 message delivery protocols: JSON, Framed JSON or Google Protocol Buffers"}),"\n",(0,t.jsx)(s.li,{children:"Real-time, delayed, and simulated market data"}),"\n",(0,t.jsx)(s.li,{children:"Access via API Key or TOTP/Session Key authentication*"}),"\n",(0,t.jsx)(s.li,{children:"A rich set of data topics that cover live market data and analytics as live risk and trading live-data objects."}),"\n",(0,t.jsxs)(s.li,{children:["Full on-line ",(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/",children:"message schema"})," support for all live-data objects."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"message-categories",children:"Message Categories"}),"\n",(0,t.jsxs)(s.p,{children:["In MLink, messages are organized and permissioned by ",(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/",children:"MLink tokens"}),". Access to live-data objects is granted by associating an MLink token with the API Key / UserName used to log in. The full set of available ",(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/",children:"MLink tokens"})," can be found in the ",(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/",children:"Message Schemas"})," section of this site which is generated directly from the current system codebase and is always up to date."]}),"\n",(0,t.jsx)(s.p,{children:"Some examples of MLink Tokens are:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Token"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/EqtMktData",children:"EqtMktData"})}),(0,t.jsx)(s.td,{children:"Stock quote and prints"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/OptMktData",children:"OptMktData"})}),(0,t.jsx)(s.td,{children:"Options quote and prints"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/FutMktData",children:"FutMktData"})}),(0,t.jsx)(s.td,{children:"Futures quote and prints"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/EqtMarkData",children:"EqtMarkData"})}),(0,t.jsx)(s.td,{children:"Stock open and close marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/OptMarkData",children:"OptMarkData"})}),(0,t.jsx)(s.td,{children:"Options open, close, surface, closing greeks marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/FutMarkData",children:"FutMarkData"})}),(0,t.jsx)(s.td,{children:"Futures open, close and settlement marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/EqtExchImbalance",children:"EqtExchImbalance"})}),(0,t.jsx)(s.td,{children:"Stock market auction imbalances"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/OptSurface",children:"OptSurface"})}),(0,t.jsx)(s.td,{children:"Options surfaces, at-the-money volatility and related"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/OptAnalytics",children:"OptAnalytics"})}),(0,t.jsx)(s.td,{children:"Options implied quotes and risk slides"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/OptExchAuction",children:"OptExchAuction"})}),(0,t.jsx)(s.td,{children:"Auction State trial match message"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/RiskCalc",children:"RiskCalc"})}),(0,t.jsx)(s.td,{children:"Option Volatility and Price Calculator"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/EquityDefinition",children:"EquityDefinition"})}),(0,t.jsx)(s.td,{children:"Production definitions for equities"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/ClientTrading",children:"ClientTrading"})}),(0,t.jsx)(s.td,{children:"Client Trading (Orders, Executions) messages"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/ClientRisk",children:"ClientRisk"})}),(0,t.jsx)(s.td,{children:"Client Risk messages"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/MLink%20Tokens/SRConnect",children:"SRConnect"})}),(0,t.jsx)(s.td,{children:"Auction related messages for the ATS"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"message-patterns",children:"Message Patterns"}),"\n",(0,t.jsx)(s.p,{children:"All MLink messages are generated from a core system object IDL and follow common patterns, including the following:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Live Data Objects with Primary Key:"})}),"\n",(0,t.jsx)(s.p,{children:'These messages have a well-defined primary key (unique per message type) and follow a create/replace pattern such that any new message arriving in MLink will completely replace the previous record with the same primary key, if one exists. NOTE: any REST query for this message pattern will result in the current, cached copy of all responsive records being returned to the client. An example of this pattern is the  "NBBOOptionQuote" message'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Security Keys:"})}),"\n",(0,t.jsx)(s.p,{children:"Several messages contain security keys (TickerKey, ExpiryKey, and/or OptionKey)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["TickerKey: ",(0,t.jsx)(s.code,{children:"SSSS-TS-AT"})," where SSSS is the security symbol (eg. AAPL), TS is a ticker source (eg. NMS), and AT is a asset type (eg. EQT)."]}),"\n",(0,t.jsxs)(s.li,{children:["ExpiryKey: ",(0,t.jsx)(s.code,{children:"SSSS-TS-AT-YYYY-MM-DD"})," where YYYY is year, MM is month, and DD is day."]}),"\n",(0,t.jsxs)(s.li,{children:["OptionKey: ",(0,t.jsx)(s.code,{children:"SSSS-TS-AT-YYYY-MM-DD-XXXX-CP"})," where XXXX is the strike price, and CP is either (Call, Put, or Both)."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Ticker Sources (ts) can be of the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"None=0,SR=1,NMS=2,CME=3,ICE=4,CFE=5,CBOT=6,NYMEX=7,COMEX=8,RUT=9,CIDX=10,ARCA=11,NYSE=12,OTC=13,NSDQ=14,MFQS=15,MIAX=16,DJI=17,CUSIP=18,ISIN=19"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Asset Types (at) can be of the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"None=0,EQT=1,IDX=2,BND=3,CUR=4,COM=5,FUT=6,SYN=7,WAR=8,FLX=9,MUT=10,SPD=11,MM=12,MF=13,COIN=14,TOKEN=15"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Special Data Objects:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Spreads: ",(0,t.jsx)(s.code,{children:"#SSSShhhh"})," where hhhh is a hexadecimal ID number. It is not possible to determine the security being traded without referring to the associated product definition."]}),"\n",(0,t.jsx)(s.li,{children:"FLEX: encoded as OptionKeys with the security symbol being the standard FLEX root."}),"\n",(0,t.jsx)(s.li,{children:"Market Data: distributed with one of the above security keys where the symbol is the exchange trading symbol. Product definition records are available for all trading instruments that contain more complete details."}),"\n",(0,t.jsxs)(s.li,{children:["Synthetics: ",(0,t.jsx)(s.code,{children:"_SSSS"})," or ",(0,t.jsx)(s.code,{children:"SSSS_"})," computed for the purpose of pricing options more accurately (eg. multi-hedge basket underliers or roll+model derived options on futures quotes)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Admin Data Objects without Primary Keys:"})}),"\n",(0,t.jsx)(s.p,{children:'Some SR MLink objects do not have natural primary keys and are used as administrative messages between MLink and a client. An example of this pattern is "MLinkLogon".'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/Topics/mlink/",children:(0,t.jsx)(s.strong,{children:"HTTP/REST Admin Messages:"})})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Messages"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkApiKey"}),(0,t.jsx)(s.td,{children:"Used to return a temporary ApiKey (./getapikey)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"QueryResult"}),(0,t.jsx)(s.td,{children:"Futures quote/print metrics (the last message in a response.body block) (./getmsg or ./getmsgs)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MsgDesc"}),(0,t.jsx)(s.td,{children:"Message Description (describes an SR message) (in response to ./getmsgtypes call)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"FieldDesc"}),(0,t.jsx)(s.td,{children:"Field Description (schema) (in response to a ./getschema call)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SummaryNumeric"}),(0,t.jsx)(s.td,{children:"Summary detail for a numeric field (in response to a ./getsummary call)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SummaryString"}),(0,t.jsx)(s.td,{children:"Summary detail for a string field (in response to a ./getsummary call)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PostAck"}),(0,t.jsx)(s.td,{children:"Post acknowlegement for an individual SR message post attempt (./postmsgs)"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/MessageSchemas/Schema/Topics/mlink/",children:(0,t.jsx)(s.strong,{children:"MLink/WebSocket Admin Messages:"})})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Messages"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkAdmin"}),(0,t.jsx)(s.td,{children:"Sent in response to a WebSocket connect attempt and also in response to an MLinkLogon message"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkLogon"}),(0,t.jsx)(s.td,{children:"Used to logon (authenticate) (only required if credentials were not supplied in initial HTTP connect)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkStream"}),(0,t.jsx)(s.td,{children:"Set or update the active subscription query for this session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkStreamAck"}),(0,t.jsx)(s.td,{children:"Sent in repsponse to an MLinkStream attempt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkStreamCheckPt"}),(0,t.jsx)(s.td,{children:"Query Check Point (None=0,Begin=1,Active=2,Complete=3,Replaced=4,Terminated=5)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkSignalReady"}),(0,t.jsx)(s.td,{children:"Used to signal that the client is ready for more messages (live subscriptions w/o an active latency)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkDataAck"}),(0,t.jsx)(s.td,{children:"Sent in response to an message upload attempt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkSubscribe"}),(0,t.jsx)(s.td,{children:"Set or update an active subscription for a session by msgPKey"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkSubscribeAck"}),(0,t.jsx)(s.td,{children:"Sent in reponse to an MLinkSubscribe attempt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkSubscribeCheckPt"}),(0,t.jsx)(s.td,{children:"Subscription Check Point (None=0,Begin=1,Active=2,Terminated=3)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLinkHeartbeat"}),(0,t.jsx)(s.td,{children:"MLink Connection heart beat; sent by default every 10 seconds"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"connection-types",children:"Connection Types"}),"\n",(0,t.jsx)(s.p,{children:"You can connect to the MLink API through 2 different connection types: REST or Websocket."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"docs/Documentation/PlatformAPIs/MLink/RESTAPI.md",children:(0,t.jsx)(s.strong,{children:"REST API"})})," should be used for applications that need to query data from time to time, this connection type allows for more conservative message consumption which keeps costs lower."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"docs/Documentation/PlatformAPIs/MLink/WebSocket.md",children:(0,t.jsx)(s.strong,{children:"Websocket"})})," connection should be used for applications that require a live subscription to data, this connection type flows data to the screen automatically and tends to consume more messages as a result."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);