"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25803],{56787:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=i(74848),n=i(28453);const o={title:"Example - Initiating a Block Auction"},a=void 0,r={id:"Documentation/Products/ToolSuite/TradeApp/BlockInitiatingExample",title:"Example - Initiating a Block Auction",description:"Order Preview",source:"@site/docs/Documentation/Products/ToolSuite/TradeApp/BlockInitiatingExample.md",sourceDirName:"Documentation/Products/ToolSuite/TradeApp",slug:"/Documentation/Products/ToolSuite/TradeApp/BlockInitiatingExample",permalink:"/docs/Documentation/Products/ToolSuite/TradeApp/BlockInitiatingExample",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Example - Initiating a Block Auction"},sidebar:"documentationSidebar",previous:{title:"Trade App Manual",permalink:"/docs/Documentation/Products/ToolSuite/TradeApp/"},next:{title:"Example - Responding to a Block Auction",permalink:"/docs/Documentation/Products/ToolSuite/TradeApp/BlockRespondingExample"}},c={},l=[{value:"Order Preview",id:"order-preview",level:2},{value:"First Response Received",id:"first-response-received",level:2},{value:"Multiple Responses Received",id:"multiple-responses-received",level:2},{value:"Full Responses Received",id:"full-responses-received",level:2},{value:"Initiator Updates Price",id:"initiator-updates-price",level:2},{value:"Attempting to Cross",id:"attempting-to-cross",level:2},{value:"Auction Complete",id:"auction-complete",level:2},{value:"Disclosed Counterparties Example",id:"disclosed-counterparties-example",level:2}];function d(e){const t={h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"order-preview",children:"Order Preview"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Order Preview",src:i(97764).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"Once the initiating client has entered their auction parameters, they are in preview mode until the auction is started.  If the user has entered a size and public price, they will see risk metrics calculated based on the size and price."}),"\n",(0,s.jsx)(t.p,{children:"In this example, the initiator started the auction with SpiderRock\u2019s $1.47 fair value as their Public Price."}),"\n",(0,s.jsx)(t.h2,{id:"first-response-received",children:"First Response Received"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"First Response Received",src:i(11327).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"Once the Block Auction has been started, the state of the auction will change to \u201cActive\u201d (in this case the auction state reads \u201cActionable\u201d because the first response meets the initiator\u2019s 5,000 All Or None size condition), and the auction time will begin to count down.  As auction responses are entered, they will be displayed in the auction response panel."}),"\n",(0,s.jsx)(t.p,{children:"In this example, there is one response @ $1.51 for 5,000 contracts.  Since this is a Dutch auction, sizes are cumulative at less aggressive price levels."}),"\n",(0,s.jsx)(t.h2,{id:"multiple-responses-received",children:"Multiple Responses Received"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Multiple Responses Received",src:i(33238).A+"",width:"975",height:"245"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, a second response of 500 contracts @ $1.50 is received.  This is the most aggressive price but is not a tradable level since 500 contracts doesn\u2019t meet the 5,000 All-Or-None conditions set by the initiator. ",(0,s.jsx)(t.strong,{children:"Note"})," that the \u201cN\u201d icon indicates that this price level is the NBBO."]}),"\n",(0,s.jsx)(t.h2,{id:"full-responses-received",children:"Full Responses Received"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Full Responses Received",src:i(7497).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"In the example above, there is no match on price but there are matches on size.  The initiator can choose to remain a $1.47 bid, increase their bid to $1.48 to encourage other responders to match that level (since there are only 500 contracts at that level), or increase their price to $1.49 to accept the responder\u2019s offer, thus ending the auction."}),"\n",(0,s.jsx)(t.h2,{id:"initiator-updates-price",children:"Initiator Updates Price"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Initiator Updates Price",src:i(52672).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"In this case the initiator has decided to click on the $1.49 response.  This causes the \u201cPublic Price\u201d box to update to $1.49 (in edit mode, highlighted in blue). The initiator\u2019s price box still displays a price of $1.47 because the user must click the \u201cSend updates\u201d button in order to update their order."}),"\n",(0,s.jsx)(t.h2,{id:"attempting-to-cross",children:"Attempting to Cross"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Attempting to Cross",src:i(7707).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"Once the initiating client clicks \u201cSend updates,\u201d SpiderRock will initiate a cross on exchange as all auction conditions have been met.  SpiderRock will display an \u201cAttempting to cross\u201d status message until the cross is completed."}),"\n",(0,s.jsx)(t.h2,{id:"auction-complete",children:"Auction Complete"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Auction Complete",src:i(42354).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"Once the auction is crossed on exchange, SpiderRock will notify both the initiator and responder(s) and will display summary details of the transaction.  The \u201cFillQ\u201d and \u201cAvg Px\u201d columns in the order items display the individual leg fills, and the order summary tab provides additional details."}),"\n",(0,s.jsx)(t.h2,{id:"disclosed-counterparties-example",children:"Disclosed Counterparties Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Disclosed Counterparties Example",src:i(16738).A+"",width:"975",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"If the initiator had sent their auction to both the SR Network and to two of their direct counterparties, we would display the counterparties placement in the response panel as shown above."}),"\n",(0,s.jsx)(t.p,{children:"By selecting and disclosing to these counterparties, the initiator has revealed their identity to these counterparties, and vice versa. Note that these identities are not revealed to other participants of the auction."})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97764:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image1-84e707082acc699581dfc13c5df38365.png"},11327:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image2-2eb26ffaa3a459f473b1df9a6b1b6a66.png"},33238:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image3-d3564a9fb7550acd482e352482f04904.png"},7497:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image4-3c486652392d943ffb38094b5403bfc4.png"},52672:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image5-fd907222d081ce9e66445ee15622f1df.png"},7707:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image6-311012325530347ec64e098015fbe8cc.png"},42354:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image7-19f81f9feec9d22f1e1c902849e78360.png"},16738:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tt-bie-image8-606388951d68c8bb5d895b5cb49ac319.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(96540);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);