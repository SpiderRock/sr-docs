"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74314],{50596:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(74848),t=s(28453);const a={title:"MLink Websocket API",sidebar_position:2},r=void 0,c={id:"Documentation/PlatformAPIs/MLink/WebSocket",title:"MLink Websocket API",description:"The MLink Websocket API is implemented as a standard HTTP WebSocket service accessible at:",source:"@site/docs/Documentation/PlatformAPIs/MLink/2.WebSocket.md",sourceDirName:"Documentation/PlatformAPIs/MLink",slug:"/Documentation/PlatformAPIs/MLink/WebSocket",permalink:"/docs/next/Documentation/PlatformAPIs/MLink/WebSocket",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"MLink Websocket API",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"MLink REST API",permalink:"/docs/next/Documentation/PlatformAPIs/MLink/RESTAPI"},next:{title:"Live Option Basket Calculator via MLink",permalink:"/docs/next/Documentation/PlatformAPIs/MLink/OptionBasketCalculator"}},o={},l=[{value:"Authentication to MLink",id:"authentication-to-mlink",level:3},{value:"Websocket Parameters - MLinkStream:",id:"websocket-parameters---mlinkstream",level:3},{value:"Websocket Parameters - MLinkSubscribe:",id:"websocket-parameters---mlinksubscribe",level:3},{value:"Response Order:",id:"response-order",level:4},{value:"Websocket Active Latency",id:"websocket-active-latency",level:3},{value:"MLinkSignalReady",id:"mlinksignalready",level:4},{value:"MLinkSignalReady and LiveImpliedQuoteAdj stream",id:"mlinksignalready-and-liveimpliedquoteadj-stream",level:4},{value:"Establishing a connection",id:"establishing-a-connection",level:3},{value:"Protocol Usage",id:"protocol-usage",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The MLink Websocket API is implemented as a standard HTTP WebSocket service accessible at:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Real-time data - wss://mlink-live.nms.saturn.spiderrockconnect.com/mlink/"}),"\n",(0,i.jsx)(n.li,{children:"Delayed data - wss://mlink-delay.nms.saturn.spiderrockconnect.com/mlink/"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"authentication-to-mlink",children:"Authentication to MLink"}),"\n",(0,i.jsx)(n.p,{children:"You can authenticate to MLink through 2 different methods: Login or API Key. The Login method is intended for humans to access MLink via only a WebSocket connection. The API key method is intended for machines to access MLink through either a WebSocket connection or a REST API connection."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Login (WebSocket)"}),":\nUse this method to authenticate your application by challenging humans to login with their SpiderRock Connect ID credentials along with multi-factor authentication (MFA)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The SpiderRock Client Support Desk will issue you a SpiderRock ID, by which you will receive an invitation to your registered email. From there, you will complete your setup and select which MFA method you want: Authenticator App or SMS. Upon completion of sign up you will have access to MLink as determined by your configuration."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session Keys:"})," a Session Key looks similar to an API key but is issued for each valid session after login. Therefore, once a user authenticates with their SpiderRock ID credentials their Session Key will be automatically issued and used for the remainder of the session."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"API Key (WebSocket )"}),":\nUse this method to authenticate your application directly to MLink if there is no ability to use MFA or you only require a single data feed."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The SpiderRock Client Support Desk will issue an ",(0,i.jsx)(n.code,{children:"M2MUser"})," user as a datafeed profile, by which we will generate an API Key scoped to the permissions requested by the customer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Using an API Key via WebSocket: Send an MLinkLogon to MLink servers, OR include ",(0,i.jsx)(n.code,{children:"apikey"})," as a header in the initial HTTP handshake request:"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "header": {"mTyp": "MLinkLogon"},\n  "message": {\n      "apiKey": "1234-5678-9012-3141" # Replace with actual API key or session key\n  } \n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async with websockets.connect(uriJson, \nadditional_headers={"Authorization": "Bearer {apikey}"}, ping_timeout=None) as websocket:\n'})}),"\n",(0,i.jsx)(n.h3,{id:"websocket-parameters---mlinkstream",children:"Websocket Parameters - MLinkStream:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Message"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkStream",children:"MLinkStream"})}),(0,i.jsx)(n.td,{children:"MLinkStream is a message type used to set or update an active subscription for a session by specifying a particular message type (msgName). This message allows clients to specify message types, filter conditions, and update frequency. It is essential for managing general subscriptions to specific streams."})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "header": {\n    "mTyp": "MLinkStream"\n  },\n  "message": {\n    "queryLabel": "ExampleStockBookQuote",\n    "activeLatency": 1,\n    "msgName": "stockbookquote",\n    "where": "ticker.tk:eq:AMZN",\n    "view": "bidprice|askprice|bidsize|asksize"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"websocket-parameters---mlinksubscribe",children:"Websocket Parameters - MLinkSubscribe:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Message"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkSubscribe",children:"MLinkSubscribe"})}),(0,i.jsx)(n.td,{children:"MLinkSubscribe is a message type used to set or update an active subscription for a session by specifying a particular message primary key (msgPKey) for a specific message and view. This message type is essential for managing subscriptions to specific primary keys within streams."})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "header": {\n    "mTyp": "MLinkSubscribe"\n  },\n  "message": {\n    "activeLatency": 1,\n    "doReset":"No",\n    "View":[{"msgName": "LiveImpliedQuote", \n             "view":"de|ga|th|ve"}],\n    "Subscribe": [{"msgName": "LiveImpliedQuote", \n                   "msgPKey":"MSFT-NMS-EQT-2024-09-20-580-C"}],\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Upon opening up a WebSocket connection to MLink, Authenticating, and requesting to stream a message (msgName) with user specified conditions (view, where, etc), the MLinkServer will initially clear cache. This means it will forward the latest updates to all of the primary keys in your message before it starts streaming."}),"\n",(0,i.jsx)(n.p,{children:"Clients have the possibility to determine when cache has been cleared using the MLinkAdmin messages:\nThe MLink Servers follow a specific sequence for clearing cache when starting a stream. The process involves sending initial administrative and acknowledgement messages, followed by cache clearance checkpoints, and finally, the streaming of messages. If there is an issue with the message construction or permissions, the MLinkStreamAck message will indicate an error."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Initially, upon authentication MLinkServers will send an ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkAdmin",children:(0,i.jsx)(n.em,{children:"MLinkAdmin"})})," with the authentication state"]}),"\n",(0,i.jsxs)(n.li,{children:["MLinkServers will then send an Acknowledgement message of type ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkStreamAck",children:(0,i.jsx)(n.em,{children:"MLinkStreamAck"})})," or ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkSubscribeAck",children:(0,i.jsx)(n.em,{children:"MLinkSubscribeAck"})})," to acknowledge reception of the message request."]}),"\n",(0,i.jsxs)(n.li,{children:["A first checkpoint  ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt",children:(0,i.jsx)(n.em,{children:"MLinkStreamCheckPt"})})," is then sent with a message body state of begin (begin to clear cache)"]}),"\n",(0,i.jsx)(n.li,{children:"MLinkServers send the cached records"}),"\n",(0,i.jsxs)(n.li,{children:["A secondary checkpoint ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt",children:(0,i.jsx)(n.em,{children:"MLinkStreamCheckPt"})})," is then sent with a message body state of Active (request is active)"]}),"\n",(0,i.jsxs)(n.li,{children:["The state.Active ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt",children:(0,i.jsx)(n.em,{children:"MLinkStreamCheckPt"})})," is followed by another ",(0,i.jsx)(n.a,{href:"/docs/next/MessageSchemas/Schema/Topics/mlink/MLinkStreamCheckPt",children:(0,i.jsx)(n.em,{children:"MLinkStreamCheckPt"})})," with a message body state of Complete to alert the client side that cache has cleared"]}),"\n",(0,i.jsx)(n.li,{children:"MLink is now streaming."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Below is an example of streaming the following request, AMZN stock quote:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'msg = {\n                        "header": {\n                            "mTyp":"MLinkStream"\n                        },\n                        "message": { \n                            "queryLabel":"ExampleStockBookQuote",\n                            "activeLatency": 1,\n                            "msgName":"stockbookquote",\n                            "where":"ticker.tk:eq:AMZN"\n                        }\n                    }\n'})}),"\n",(0,i.jsx)(n.h4,{id:"response-order",children:"Response Order:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{'header': {'mTyp': 'MLinkAdmin', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.464116', 'encT': '2023-11-09 15:26:23.464120', 'git': 'b981c14047'}, 'message': {'state': 'LoggedOn'}} \n\n{'header': {'mTyp': 'MLinkStreamAck', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573021', 'encT': '2023-11-09 15:26:23.573023', 'git': 'b981c14047'}, 'message': {'msgName': 'stockbookquote', 'result': 'OK'}}\n\n{'header': {'mTyp': 'MLinkStreamCheckPt', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573034', 'encT': '2023-11-09 15:26:23.573035', 'git': 'b981c14047'}, 'message': {'state': 'Begin', 'timestamp': '2023-11-09 15:26:23.566996'}}\n\n{'header': {'mTyp': 'StockBookQuote', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 18409, 'kLen': 0, 'mLen': 0, 'seqN': 206, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:29.699590', 'encT': '2023-11-09 15:26:29.707677', 'git': 'b981c14047'}, 'message': {'pkey': {'ticker': {'at': 'EQT', 'ts': 'NMS', 'tk': 'AMZN'}}, 'updateType': 'PrcChange', 'marketStatus': 'Open', 'bidPrice1': 141.69, 'bidSize1': 9, 'bidExch1': 'EDGX', 'bidMask1': 18240, 'askPrice1': 141.7, 'askSize1': 1, 'askExch1': 'MPRL', 'bidPrice2': 141.68, 'bidSize2': 1, 'bidExch2': 'IEX', 'askPrice2': 141.71, 'askSize2': 8, 'askExch2': 'EDGX', 'askMask2': 18240, 'srcTimestamp': 1699543589698404599, 'netTimestamp': 1699543589698443200}}\n\n{'header': {'mTyp': 'MLinkStreamCheckPt', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573034', 'encT': '2023-11-09 15:26:45.596555', 'git': 'b981c14047'}, 'message': {'state': 'Active', 'numMessagesSent': 1, 'timestamp': '2023-11-09 15:26:45.592286'}}\n\n{'header': {'mTyp': 'MLinkStreamCheckPt', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 0, 'kLen': 0, 'mLen': 0, 'seqN': 0, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:23.573034', 'encT': '2023-11-09 15:26:45.596582', 'git': 'b981c14047'}, 'message': {'state': 'Complete', 'waitElapsed': -22.0229465, 'queryElapsed': 22.0229815, 'tryFwdElapsed': -1.5e-05, 'flushElapsed': 1.5e-05, 'timestamp': '2023-11-09 15:26:45.592286'}}\n\n{'header': {'mTyp': 'StockBookQuote', 'sEnv0': 'Saturn', 'sRlm0': 'NMS', 'sID': 18409, 'kLen': 0, 'mLen': 0, 'seqN': 93, 'appN': 'MLinkServer.Prod.B.Extern', 'mn': 'SROCKNY5-130', 'sTim': '2023-11-09 15:26:47.543689', 'encT': '2023-11-09 15:26:47.611402', 'git': 'b981c14047'}, 'message': {'pkey': {'ticker': {'at': 'EQT', 'ts': 'NMS', 'tk': 'AMZN'}}, 'updateType': 'PrcChange', 'marketStatus': 'Open', 'bidPrice1': 141.64, 'bidSize1': 22, 'bidExch1': 'EDGX', 'bidMask1': 18240, 'askPrice1': 141.66, 'askSize1': 18, 'askExch1': 'EDGX', 'askMask1': 18240, 'bidPrice2': 141.62, 'bidSize2': 1, 'bidExch2': 'IEX', 'askPrice2': 141.71, 'askSize2': 1, 'askExch2': 'PSX', 'askMask2': 4096, 'srcTimestamp': 1699543607542434826, 'netTimestamp': 1699543607542516100}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"websocket-active-latency",children:"Websocket Active Latency"}),"\n",(0,i.jsx)(n.p,{children:"MLinkStream contains an ActiveLatency field that governs subsequent updates after the initial (cache) query.  If this field is set to 0 then the user is required to send a SignalReady message which will trigger the MLinkServer to send an update (if any) to all response messages."}),"\n",(0,i.jsx)(n.h4,{id:"mlinksignalready",children:"MLinkSignalReady"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Field Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionID"}),(0,i.jsx)(n.td,{children:"short"}),(0,i.jsx)(n.td,{children:"(Optional) Actions below apply only to the sessionID virtual session; should be zero for non-multiplexed web-socket connections."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signalID"}),(0,i.jsx)(n.td,{children:"GroupingCode"}),(0,i.jsx)(n.td,{children:"(Optional) Will be reflected back in xCheckPt.signalID fields that indicates that a specified signal ready triggered active send is complete."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"readyScan"}),(0,i.jsx)(n.td,{children:"enum"}),(0,i.jsx)(n.td,{children:"(Optional; default is Incremental) Incremental = messages w/changes (all fields; cumulative changes) since previous MLinkSignalReady; FullScan = all messages."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is possible for the MLinkServer to have received multiple updates to a single Primary Key between successive SignalReady messages. If this occurs, only the most recent record update will be forwarded to the client."}),"\n",(0,i.jsx)(n.li,{children:"If activelyLatency is set to any integer N greater than or equal to zero it will have the effect of automatically triggering the transmission of any pending updates every N milliseconds with zero being interpreted as no delay."}),"\n",(0,i.jsx)(n.li,{children:"If the client system is unable to process messages at the speed with which they are being sent, MLinkServer will fall back to sending messages at the rate the client is able to receive, which will also result is some messages being skipped in favor of more recent updates."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"mlinksignalready-and-liveimpliedquoteadj-stream",children:"MLinkSignalReady and LiveImpliedQuoteAdj stream"}),"\n",(0,i.jsx)(n.p,{children:"The underlier-adjusted version of LiveImpliedQuote records used in parallel with MLinkSignalReady allow users to recalculate surfaces on demand. All records returned by the MLinkServer will be adjusted for the latest underlying price for each specific ticker."}),"\n",(0,i.jsx)(n.p,{children:"After opening up a connection and setting the activeLatency to 0, users can send a series of MLinkSignalReady messages with a readyScan of FullScan to generate an underlier-adjusted response. With reasonable interval time between each, users can actively sample the LiveImpliedQuoteAdj message."}),"\n",(0,i.jsx)(n.p,{children:"The following 2 message requests allow for this:"}),"\n",(0,i.jsx)(n.p,{children:"SignalReady (Should be sent in intervals through the same connection)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:'signal = {\n            "header": {\n                "mTyp": "MLinkSignalReady"\n            },\n            "message": {\n                "readyScan": "FullScan" #[readyScan:enum:ReadyScan:None=0,Incremental=2,FullScan=3]  \n            }\n        }\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"MLinkStream"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:'msg = {\n                    "header": {\n                        "mTyp": "MLinkStream"\n                    },\n                    "message": {\n                        "queryLabel": "ExampleImpliedQuoteAdj",\n                        "activeLatency": 0, #wait for Signal ready\n                        "msgName": "LiveImpliedQuoteAdj", \n                        "where":"ticker:eq:AAPL-NMS-EQT" #can also do ticker.tk:eq:AAPL & ticker.at:eq:EQT & ticker.ts:eq:NMS\n                    }\n                }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Please refer to client-python\\JSONFramed\\examples\\clientSignalReady.py for further examples."}),"\n",(0,i.jsx)(n.h3,{id:"establishing-a-connection",children:"Establishing a connection"}),"\n",(0,i.jsx)(n.p,{children:"After authenticating a websocket connection:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The first message sent from the client to MLink\nmust be an "MLinkLogon" message containing either an API Key or SessionKey.'}),"\n",(0,i.jsx)(n.li,{children:'The first message sent from MLink to the client will be an "MLinkAdmin" message containing an application state [LoggedOn, WaitingForLogon, AuthError, OtherError] depending on the authentication state.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If at any time during a session, a user sends an MLinkLogon message, the server will attempt to (re-)authenticate the user and will return an MLinkAdmin message."}),"\n",(0,i.jsx)(n.h3,{id:"protocol-usage",children:"Protocol Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"JSON"})," - Standard JSON, each websocket frame can only contain one JSON message at a time."]}),"\n",(0,i.jsx)(n.p,{children:"Import Classes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"import asyncio\nimport json\nimport time\nimport websockets\nimport nest_asyncio\nimport threading\nimport datetime\nnest_asyncio.apply()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Authentication:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"uriJson = \"wss://mlink-live.nms.saturn.spiderrockconnect.com/mlink/json\"\napiKey = 'your api key'\npassword = 'your password'\napi_key_token = f\"{apiKey}.{password}\"\n"})}),"\n",(0,i.jsx)(n.p,{children:"Asynchronously query AAPL:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:'async def recv_msg(websocket):\n  buffer = await websocket.recv()\n  parts = list(filter(None, buffer.split(b\'\\r\\n\')))\n    for msg in parts:\n      result = json.loads(msg)\n      print(result, \'\\n\')\nreturn True\n\nasync def query_mlink(api_key_token):\n  retry = True\n  while retry:\n    try:\n      async with websockets.connect(\n        uriJson,\n        additional_headers={"Authorization": f"Bearer {api_key_token}"},\n        ping_timeout=None\n      ) as websocket:\n        msg = {\n                "header": {\n                    "mTyp": "MLinkStream"\n                },\n                "message": {\n                    "queryLabel": "ExampleStockNbbo",\n                    "activeLatency": 1, #1 ms\n                    "msgName": "StockBookQuote", \n                    "where":"ticker.tk:eq:AAPL | ticker.at:eq:EQT | ticker.ts:eq:NMS"\n                }\n            }\n        t = time.time_ns()\n        tstr = \'.\'.join([time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime(t / 1000000000)), "%06d" % ((t / 1000) % 1000000)])\n        msg[\'header\'][\'sTim\'] = tstr\n        msg[\'header\'][\'encT\'] = tstr\n        smsg = json.dumps(msg)\n        await websocket.send(smsg)\n        notDone = True\n        while notDone:\n          notDone = await recv_msg(websocket)\n          retry = False\n        except asyncio.exceptions.TimeoutError:\n          print("timeout occurred, retrying...")\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Framed JSON"})," - SpiderRock JSON with protobuf-like header."]}),"\n",(0,i.jsx)(n.p,{children:"Same as JSON above, except for the parser:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:'async def query_mlink(api_key_token):\n  retry = True\n  while retry:\n    try:\n      async with websockets.connect(\n        uriJson, \n        additional_headers={"Authorization": f"Bearer {api_key_token}"},\n        ping_timeout=None\n      ) as websocket:\n        msg = {\n                "header": {\n                    "mTyp": "MLinkStream"\n                },\n                "message": {\n                    "queryLabel": "ExampleStockNbbo",\n                    "activeLatency": 1, #stream\n                    "msgName": "StockBookQuote", \n                    "where":"ticker.tk:eq:AAPL & ticker.at:eq:EQT & ticker.ts:eq:NMS"\n                }\n            }\n        t = time.time_ns()\n        tstr = \'.\'.join([time.strftime("%Y-%m-%d %H:%M:%S",time.gmtime(t/1000000000)),"%06d"%((t/1000)%1000000)])\n        msg[\'header\'][\'sTim\'] = tstr\n        msg[\'header\'][\'encT\'] = tstr\n        smsg = json.dumps(msg)\n        jmsg = \'\'.join([\'\\r\\nJ\', \'%011d\'%len(smsg), smsg]) #header\n        await websocket.send(jmsg)\n        notDone = True\n        while notDone:\n          buffer = await websocket.recv()\n          parts = list(filter(None,buffer.split(b\'\\r\\n\')))\n          for msg in parts:\n            result = json.loads(msg[12:])\n            print(result, \'\\n\')\n        except asyncio.exceptions.TimeoutError:\n          print("timeout occurred, retrying...")\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);