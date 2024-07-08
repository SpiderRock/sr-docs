"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15721],{83782:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=i(74848),t=i(28453);const r={title:"MLink Websocket API"},d=void 0,c={id:"Documentation/Products/MLink/WebSocket",title:"MLink Websocket API",description:"The MLink Websocket API is implemented as a standard HTTP WebSocket service accessible at:",source:"@site/docs/Documentation/Products/MLink/WebSocket.md",sourceDirName:"Documentation/Products/MLink",slug:"/Documentation/Products/MLink/WebSocket",permalink:"/docs/Documentation/Products/MLink/WebSocket",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MLink Websocket API"},sidebar:"documentationSidebar",previous:{title:"MLink REST API",permalink:"/docs/Documentation/Products/MLink/RESTAPI"},next:{title:"SRSE",permalink:"/docs/Documentation/Products/SRSE/"}},l={},h=[{value:"Websocket Parameters - MLinkStream:",id:"websocket-parameters---mlinkstream",level:3},{value:"Websocket Parameters - MLinkSubscribe:",id:"websocket-parameters---mlinksubscribe",level:3},{value:"Reponse Order:",id:"reponse-order",level:4},{value:"MLink Stripes",id:"mlink-stripes",level:3},{value:"Native OPRA / NMS Stripes (EQT)",id:"native-opra--nms-stripes-eqt",level:4},{value:"Compound OPRA / NMS Stripes (EQT)",id:"compound-opra--nms-stripes-eqt",level:4},{value:"Index Source Stripes",id:"index-source-stripes",level:4},{value:"Coumpound Index Source Stripe",id:"coumpound-index-source-stripe",level:4},{value:"OTC / Mutual Fund / Other Source Stripes",id:"otc--mutual-fund--other-source-stripes",level:4},{value:"Coumpound OTC / Mutual Fund / Other Source Stripe",id:"coumpound-otc--mutual-fund--other-source-stripe",level:4},{value:"Market Indexes Stripes",id:"market-indexes-stripes",level:4},{value:"Compound Market Indexes Stripe",id:"compound-market-indexes-stripe",level:4},{value:"SPX Stripe",id:"spx-stripe",level:4},{value:"GTH Stripes",id:"gth-stripes",level:4},{value:"Compound GTH Stripe",id:"compound-gth-stripe",level:4},{value:"Websocket Active Latency",id:"websocket-active-latency",level:3},{value:"MLinkSignalReady",id:"mlinksignalready",level:4}];function a(e){const s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"The MLink Websocket API is implemented as a standard HTTP WebSocket service accessible at:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Real-time data - wss://mlink-live.nms.saturn.spiderrockconnect.com/mlink/"}),"\n",(0,n.jsx)(s.li,{children:"Delayed data - wss://mlink-delay.nms.saturn.spiderrockconnect.com/mlink/"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Query parameters are URL-encoded and passed in the querystring. If successful, responses are sent back via the HTTP request body section. The URL also determines the protocol."}),"\n",(0,n.jsx)(s.h3,{id:"websocket-parameters---mlinkstream",children:"Websocket Parameters - MLinkStream:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Message"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../MessageSchemas/Schema/Topics/mlink/MLinkStream",children:"MLinkSubscribe"})}),(0,n.jsx)(s.td,{children:"MLinkStream is a message type used to set or update an active subscription for a session by specifying a particular message type (msgName). This message allows clients to specify message types, filter conditions, and update frequency. It is essential for managing general subscriptions to specific streams."})]})})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "header": {\n    "mTyp": "MLinkStream"\n  },\n  "message": {\n    "queryLabel": "ExampleStockBookQuote",\n    "activeLatency": 1,\n    "msgName": "stockbookquote",\n    "where": "ticker.tk:eq:AMZN",\n    "view": "bidprice|askprice|bidsize|asksize"\n  }\n}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"websocket-parameters---mlinksubscribe",children:"Websocket Parameters - MLinkSubscribe:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Message"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../MessageSchemas/Schema/Topics/mlink/MLinkSubscribe",children:"MLinkSubscribe"})}),(0,n.jsx)(s.td,{children:"MLinkSubscribe is a message type used to set or update an active subscription for a session by specifying a particular message primary key (msgPKey) for a specific message and view. This message type is essential for managing subscriptions to specific primary keys within streams."})]})})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "header": {\n    "mTyp": "MLinkSubscribe"\n  },\n  "message": {\n    "activeLatency": 1,\n    "doReset":"No",\n    "View":[{"msgName": "LiveImpliedQuote", \n             "view":"de|ga|th|ve"}],\n    "Subscribe": [{"msgName": "LiveImpliedQuote", \n                   "msgPKey":"MSFT-NMS-EQT-2024-09-20-580-C"}],\n  }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Upon opening up a WebSocket connection to MLink, Authenticating, and requesting to stream a message (msgName) with user specified conditions (view, where, etc), the MLinkServer will initially clear cache. This means it will forward the latest updates to all of the primary keys in your message before it starts streaming."}),"\n",(0,n.jsx)(s.p,{children:"Clients have the possibilitiy to determine when cache has been cleared using the MLinkAdmin messages:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Initially, upon authentication MLinkServers will send an ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkAdmin"})})," with the authentication state"]}),"\n",(0,n.jsxs)(s.li,{children:["MLinkServers will then send an Acknowledgement message of type ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkStreamAck"})})," or ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkSubscribeAck"})})," to acknowledge reception of the message request."]}),"\n",(0,n.jsxs)(s.li,{children:["A first checkpoint  ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkStreamCheckPt"})})," is then sent with a message body state of begin (begin to clear cache)"]}),"\n",(0,n.jsx)(s.li,{children:"MLinkServers send the cached records"}),"\n",(0,n.jsxs)(s.li,{children:["A secondary checkpoint ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkStreamCheckPt"})})," is then sent with a message body state of Active (request is active)"]}),"\n",(0,n.jsxs)(s.li,{children:["The state.Active ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkStreamCheckPt"})})," is followed by another ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"MLinkStreamCheckPt"})})," with a message body state of Complete to alert the client side that cache has cleared"]}),"\n",(0,n.jsx)(s.li,{children:"MLink is now streaming."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Below is an example of streaming the following request, AMZN stock quote:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'msg = {\n                        "header": {\n                            "mTyp":"MLinkStream"\n                        },\n                        "message": { \n                            "queryLabel":"ExampleStockBookQuote",\n                            "activeLatency": 1,\n                            "msgName":"stockbookquote",\n                            "where":"ticker.tk:eq:AMZN"\n                        }\n                    }\n'})}),"\n",(0,n.jsx)(s.h4,{id:"reponse-order",children:"Reponse Order:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"{'header': {'mTyp': 'MLinkAdmin', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.464116', 'encT': '2023-11-09 15:26:23.464120', 'git': 'b981c14047'}, 'message': {'state': 'LoggedOn'}} \n\n{'header': {'mTyp': 'MLinkStreamAck', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573021', 'encT': '2023-11-09 15:26:23.573023', 'git': 'b981c14047'}, 'message': {'msgName': 'stockbookquote', 'result': 'OK'}}\n\n{'header': {'mTyp': 'MLinkStreamCheckPt', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573034', 'encT': '2023-11-09 15:26:23.573035', 'git': 'b981c14047'}, 'message': {'state': 'Begin', 'timestamp': '2023-11-09 15:26:23.566996'}}\n\n{'header': {'mTyp': 'StockBookQuote', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 18409, 'kLen': 0, 'mLen': 0, 'seqN': 206, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:29.699590', 'encT': '2023-11-09 15:26:29.707677', 'git': 'b981c14047'}, 'message': {'pkey': {'ticker': {'at': 'EQT', 'ts': 'NMS', 'tk': 'AMZN'}}, 'updateType': 'PrcChange', 'marketStatus': 'Open', 'bidPrice1': 141.69, 'bidSize1': 9, 'bidExch1': 'EDGX', 'bidMask1': 18240, 'askPrice1': 141.7, 'askSize1': 1, 'askExch1': 'MPRL', 'bidPrice2': 141.68, 'bidSize2': 1, 'bidExch2': 'IEX', 'askPrice2': 141.71, 'askSize2': 8, 'askExch2': 'EDGX', 'askMask2': 18240, 'srcTimestamp': 1699543589698404599, 'netTimestamp': 1699543589698443200}}\n\n{'header': {'mTyp': 'MLinkStreamCheckPt', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573034', 'encT': '2023-11-09 15:26:45.596555', 'git': 'b981c14047'}, 'message': {'state': 'Active', 'numMessagesSent': 1, 'timestamp': '2023-11-09 15:26:45.592286'}}\n\n{'header': {'mTyp': 'MLinkStreamCheckPt', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573034', 'encT': '2023-11-09 15:26:45.596582', 'git': 'b981c14047'}, 'message': {'state': 'Complete', 'waitElapsed': -22.0229465, 'queryElapsed': 22.0229815, 'tryFwdElapsed': -1.5e-05, 'flushElapsed': 1.5e-05, 'timestamp': '2023-11-09 15:26:45.592286'}}\n\n{'header': {'mTyp': 'StockBookQuote', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 18409, 'kLen': 0, 'mLen': 0, 'seqN': 93, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:47.543689', 'encT': '2023-11-09 15:26:47.611402', 'git': 'b981c14047'}, 'message': {'pkey': {'ticker': {'at': 'EQT', 'ts': 'NMS', 'tk': 'AMZN'}}, 'updateType': 'PrcChange', 'marketStatus': 'Open', 'bidPrice1': 141.64, 'bidSize1': 22, 'bidExch1': 'EDGX', 'bidMask1': 18240, 'askPrice1': 141.66, 'askSize1': 18, 'askExch1': 'EDGX', 'askMask1': 18240, 'bidPrice2': 141.62, 'bidSize2': 1, 'bidExch2': 'IEX', 'askPrice2': 141.71, 'askSize2': 1, 'askExch2': 'PSX', 'askMask2': 4096, 'srcTimestamp': 1699543607542434826, 'netTimestamp': 1699543607542516100}}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"mlink-stripes",children:"MLink Stripes"}),"\n",(0,n.jsx)(s.p,{children:"MLinkStream allows users to stripe their connections based on pre-defined sets of tickers (tk), indexes, or exchanges (ts) in order to either balance the load on the receiving end and/or segment (stripes correspond to different sets of assets). This is especially useful if you are trying to distribute the incoming message load, or are interested in tickers within specific stripes. An example of striped connections (1 Stripe = 1 WebSocket connection) can be found here: MLink-Samples\\client-python\\JSONFramed\\examples\\clientStripes.py"}),"\n",(0,n.jsx)(s.h4,{id:"native-opra--nms-stripes-eqt",children:"Native OPRA / NMS Stripes (EQT)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"startTicker"}),(0,n.jsx)(s.th,{children:"endTicker"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"A1"}),(0,n.jsx)(s.td,{children:"A"}),(0,n.jsx)(s.td,{children:"AMZN"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"A2"}),(0,n.jsx)(s.td,{children:"AMZN"}),(0,n.jsx)(s.td,{children:"COIN"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"B1"}),(0,n.jsx)(s.td,{children:"COIN"}),(0,n.jsx)(s.td,{children:"ENQZZ"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"B2"}),(0,n.jsx)(s.td,{children:"ENQZZ"}),(0,n.jsx)(s.td,{children:"GOOGL"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"C1"}),(0,n.jsx)(s.td,{children:"GOOGLE"}),(0,n.jsx)(s.td,{children:"IWM"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"C2"}),(0,n.jsx)(s.td,{children:"IWM"}),(0,n.jsx)(s.td,{children:"LRCX"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"D1"}),(0,n.jsx)(s.td,{children:"LRCX"}),(0,n.jsx)(s.td,{children:"METAA"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"D2"}),(0,n.jsx)(s.td,{children:"METAA"}),(0,n.jsx)(s.td,{children:"NFLX"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"E1"}),(0,n.jsx)(s.td,{children:"NFLX"}),(0,n.jsx)(s.td,{children:"NVDA"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"E2"}),(0,n.jsx)(s.td,{children:"NVDA"}),(0,n.jsx)(s.td,{children:"NVDAA"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"F1"}),(0,n.jsx)(s.td,{children:"NVDAA"}),(0,n.jsx)(s.td,{children:"QQQ"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"F2"}),(0,n.jsx)(s.td,{children:"QQQ"}),(0,n.jsx)(s.td,{children:"QQQA"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"G1"}),(0,n.jsx)(s.td,{children:"QQQA"}),(0,n.jsx)(s.td,{children:"SPY"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"G2"}),(0,n.jsx)(s.td,{children:"SPY"}),(0,n.jsx)(s.td,{children:"SPYA"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"H1"}),(0,n.jsx)(s.td,{children:"SPYA"}),(0,n.jsx)(s.td,{children:"TSLAA"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"H2"}),(0,n.jsx)(s.td,{children:"TSLAA"}),(0,n.jsx)(s.td,{children:"ZZZZZZ"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"compound-opra--nms-stripes-eqt",children:"Compound OPRA / NMS Stripes (EQT)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Start Stripe"}),(0,n.jsx)(s.th,{children:"End Stripe"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"A"}),(0,n.jsx)(s.td,{children:"A1"}),(0,n.jsx)(s.td,{children:"A2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"B"}),(0,n.jsx)(s.td,{children:"B1"}),(0,n.jsx)(s.td,{children:"B2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"C"}),(0,n.jsx)(s.td,{children:"C1"}),(0,n.jsx)(s.td,{children:"C2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"D"}),(0,n.jsx)(s.td,{children:"D1"}),(0,n.jsx)(s.td,{children:"D2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"E"}),(0,n.jsx)(s.td,{children:"E1"}),(0,n.jsx)(s.td,{children:"E2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"F"}),(0,n.jsx)(s.td,{children:"F1"}),(0,n.jsx)(s.td,{children:"F2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"G"}),(0,n.jsx)(s.td,{children:"G1"}),(0,n.jsx)(s.td,{children:"G2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"H"}),(0,n.jsx)(s.td,{children:"H1"}),(0,n.jsx)(s.td,{children:"H2"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"index-source-stripes",children:"Index Source Stripes"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Ticker Source"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"I1"}),(0,n.jsx)(s.td,{children:"CDIX"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"I2"}),(0,n.jsx)(s.td,{children:"DJI"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"I3"}),(0,n.jsx)(s.td,{children:"RUT"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"I4"}),(0,n.jsx)(s.td,{children:"MIAX"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"coumpound-index-source-stripe",children:"Coumpound Index Source Stripe"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Ticker Source"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"I"}),(0,n.jsxs)(s.td,{children:["I1",":I4"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"otc--mutual-fund--other-source-stripes",children:"OTC / Mutual Fund / Other Source Stripes"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Ticker Source"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"J1"}),(0,n.jsx)(s.td,{children:"OTC"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"J2"}),(0,n.jsx)(s.td,{children:"MFQS"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"J3"}),(0,n.jsx)(s.td,{children:"CUSIP"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"J4"}),(0,n.jsx)(s.td,{children:"ISIN"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"J5"}),(0,n.jsx)(s.td,{children:"SR"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"coumpound-otc--mutual-fund--other-source-stripe",children:"Coumpound OTC / Mutual Fund / Other Source Stripe"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Ticker Source"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"J"}),(0,n.jsxs)(s.td,{children:["J1",":J4"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"market-indexes-stripes",children:"Market Indexes Stripes"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Tickers"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"M1"}),(0,n.jsx)(s.td,{children:"NDX,NDXP,RUT,RUTW,MRUT"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"M2"}),(0,n.jsx)(s.td,{children:"SPY, VXX"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"M3"}),(0,n.jsx)(s.td,{children:"QQQ"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"M4"}),(0,n.jsx)(s.td,{children:"IWM"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"compound-market-indexes-stripe",children:"Compound Market Indexes Stripe"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Tickers"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"M"}),(0,n.jsxs)(s.td,{children:["M1",":M4"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"spx-stripe",children:"SPX Stripe"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Tickers"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"S"}),(0,n.jsx)(s.td,{children:"SPX,SPXW,XSP,VIX,VIXW"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"gth-stripes",children:"GTH Stripes"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Ticker Source"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"V"}),(0,n.jsx)(s.td,{children:"CFE"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"X1"}),(0,n.jsx)(s.td,{children:"CME"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"X2"}),(0,n.jsx)(s.td,{children:"CBOT"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"X3"}),(0,n.jsx)(s.td,{children:"NYMEX"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"X4"}),(0,n.jsx)(s.td,{children:"COMEX"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"compound-gth-stripe",children:"Compound GTH Stripe"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Stripe"}),(0,n.jsx)(s.th,{children:"Ticker Source"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"X"}),(0,n.jsxs)(s.td,{children:["X1",":X4"]})]})})]}),"\n",(0,n.jsx)(s.p,{children:"Note that stripes are exclusive, if a ticker is found within a specfic stripe, it will not be available in another. Ending ticker is not included in a stripe."}),"\n",(0,n.jsx)(s.h3,{id:"websocket-active-latency",children:"Websocket Active Latency"}),"\n",(0,n.jsx)(s.p,{children:"MLinkStream contains an ActiveLantency field that governs subsequent updates after the initial (cache) query.  If this field is set to 0 then the user is required to send a SignalReady message which will trigger the MLinkServer to send an update (if any) to all response messages."}),"\n",(0,n.jsx)(s.h4,{id:"mlinksignalready",children:"MLinkSignalReady"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Message"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../MessageSchemas/Schema/Topics/mlink/MLinkSignalReady",children:"MLinkSignalReady"})}),(0,n.jsx)(s.td,{children:"The message is used to signal that the client is ready for more messages. This is specifically useful in live subscription scenarios where the active latency is set to zero, meaning the server will wait for the client to send a MLinkSignalReady message before sending the next batch of messages."})]})})]}),"\n",(0,n.jsx)(s.p,{children:"Note:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"It is possible for the MLinkServer to have received multiple updates to a single Primary Key between successive SignalReady messages. If this occurs, only the most recent record update will be forwarded to the client."}),"\n",(0,n.jsx)(s.li,{children:"If activelyLatency is set to any integer N greater than or equal to zero it will have the effect of automatically triggering the transmission of any pending updates every N milliseconds with zero being interpreted as no delay."}),"\n",(0,n.jsx)(s.li,{children:"If the client system is unable to process messages at the speed with which they are being sent, MLinkServer will fall back to sending messsages at the rate the client is able to receive, which will also result is some messages being skipped in favor of more recent updates."}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>c});var n=i(96540);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);