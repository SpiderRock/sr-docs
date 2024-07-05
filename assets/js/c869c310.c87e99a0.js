"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[78264],{48567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(74848),n=r(28453);const a={title:"Order Entry Workflows"},i=void 0,s={id:"Documentation/Products/ToolSuite/TradeToolManual/OrderEntryWorkflows",title:"Order Entry Workflows",description:"Parent and Staged Order Workflows",source:"@site/docs/Documentation/Products/ToolSuite/TradeToolManual/OrderEntryWorkflows.md",sourceDirName:"Documentation/Products/ToolSuite/TradeToolManual",slug:"/Documentation/Products/ToolSuite/TradeToolManual/OrderEntryWorkflows",permalink:"/docs/Documentation/Products/ToolSuite/TradeToolManual/OrderEntryWorkflows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Order Entry Workflows"},sidebar:"documentationSidebar",previous:{title:"Trade Tool",permalink:"/docs/Documentation/Products/ToolSuite/TradeToolManual/"},next:{title:"Trade Tool Components",permalink:"/docs/Documentation/Products/ToolSuite/TradeToolManual/TradeToolComponents/"}},d={},l=[{value:"Parent and Staged Order Workflows",id:"parent-and-staged-order-workflows",level:2},{value:"Parent Order Path",id:"parent-order-path",level:3},{value:"Staged Order Path",id:"staged-order-path",level:3},{value:"Order Entry Workflows",id:"order-entry-workflows",level:2}];function c(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"parent-and-staged-order-workflows",children:"Parent and Staged Order Workflows"}),"\n",(0,o.jsx)(t.p,{children:"SpiderRock Connect application users can choose between two order paths: a Parent Order path and a Staged Order path.  Each of these paths is described below."}),"\n",(0,o.jsx)(t.h3,{id:"parent-order-path",children:"Parent Order Path"}),"\n",(0,o.jsx)(t.p,{children:"A Parent Order has defined securities as well as a size that a client intends to trade.  Once activated, the full size of a Parent Order is active, although the full size of the order does not need to be actively interacting with the market at any one time.  This means that SpiderRock can initiate child orders that interact with the market and these child orders may be in sizes less than the full Parent Order size.  Since the full size of a Parent Order is technically active once the order is activated, canceling the Parent Order permanently terminates the order.  In order for the client to continue with a canceled Parent Order, they must either duplicate the previous Parent Order or build a new Parent Order from scratch."}),"\n",(0,o.jsx)(t.p,{children:"In the SpiderRock Connect application, a user can choose to create a Parent Order by (1) adding an option(s) and/or stock to an Order Ticket, (2) entering order parameters, and depending on the trading strategy chosen \u2013 (3) clicking either the <Send> or <Start> button.  By starting the order directly from the Order Ticket (as opposed to first staging that order), the user has chosen the Parent Order path and has made the order active size equal to the order size."}),"\n",(0,o.jsx)(t.h3,{id:"staged-order-path",children:"Staged Order Path"}),"\n",(0,o.jsx)(t.p,{children:"A key difference between Staged Orders and Parent Orders is that Staged Orders allow the user to set an active size that is less than or equal to the order size.  This feature allows the user to send smaller active sizes to algorithms or auctions without the need to terminate the entire order when they decide to cancel the active slice they are working on. A Staged Order can be created in one of two ways:"}),"\n",(0,o.jsx)("ol",{children:(0,o.jsxs)(t.p,{children:["(1)\tThe order is staged into the SpiderRock Connect application using an API such as MLink or FIX. ",(0,o.jsx)("br",{}),"\n(2)\tThe order is built using an order ticket, and the user clicks the <Stage> button."]})}),"\n",(0,o.jsx)(t.p,{children:"For example, a user might have a total of 5,000 contracts to buy, and they may wish to start a Block Auction on only 2,500 contracts.  The Staged Order path allows the user to send an active size of 2,500 via a Block Auction, and if this portion of the order trades, or the user wishes to terminate the active size, the Staged Order remains.  If in the above example the 2,500 contracts traded, the remaining Staged Order would still allow the user to trade another 2,500 contracts.  If the 2,500 was canceled, only the active size would be canceled, and the Staged Order would allow the user to send up to 5,000 contracts at a later time."}),"\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.a,{href:"docs/Documentation/PlatformFeatures/OrderExecution/Staged-Orders.md",children:"here"})," for more information about Staged Orders."]}),"\n",(0,o.jsx)(t.h2,{id:"order-entry-workflows",children:"Order Entry Workflows"}),"\n",(0,o.jsxs)(t.p,{children:["Two workflows for order entry exist: the first is to stage an order to SpiderRock Connect via an API such as MLink of FIX. The second is to select options and/or stock using: ",(0,o.jsx)(t.em,{children:"(a)"})," the Option Montage, ",(0,o.jsx)(t.em,{children:"(b)"})," the Rev/Con TradeSheet, or ",(0,o.jsx)(t.em,{children:"(c)"})," the bid/ask buttons located on the Ticker Ribbon."]}),"\n",(0,o.jsx)(t.p,{children:"For the purposes of this section, we will focus on the second workflow where users build orders inside of the application."}),"\n",(0,o.jsxs)("ol",{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)("b",{children:" a. Building an order using the Options Montage "})," ",(0,o.jsx)("br",{}),"\nUsers should first use their mouse to select the desired expiry card on the Expiry Bar (please note that only one expiry can be shown in the options montage at a time).  To select an option, the user should hover their mouse over the desired row, and all clickable fields will be highlighted.  Before an option is selected, no order ticket will be visible.  Once the first option is selected, the trade ticket will open below the Options Montage and the selected option will be added to the order items.  Clicking on a bid price on the option montage will add the selected option to the order ticket with \u201csell\u201d selected as the direction.  Clicking on an ask price will add the option with \u201cbuy\u201d selected as the direction.  After adding an option leg(s) the user can click on the <add stock> button or click on the bid or ask button on the Ticker Ribbon."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)("b",{children:" b. Building an order using the Rev/Con TradeSheet "})," ",(0,o.jsx)("br",{}),"\nUsers can hover then click on a bid or ask of any of the cards on the Rev/Con TradeSheet and the desired structure will automatically be displayed in the Order Items section of the Order Ticket."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)("b",{children:" c. Building an order using the bid/ask buttons on the Ticker Ribbon "})," ",(0,o.jsx)("br",{}),"\nClicking on the bid button on the Ticker Ribbon will open an Order Ticket with a single equity leg with \u201csell\u201d set as the direction.  Clicking on the ask button on the Ticker Ribbon will open an Order Ticket with a single equity leg with \u201cbuy\u201d set as the direction.  The user can add options to this Order Ticket by then opening the Options Montage and selecting an option as described above."]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var o=r(96540);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);