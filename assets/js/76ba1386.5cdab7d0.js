"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76193],{44631:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=i(74848),n=i(28453);const a={title:"Trade App Manual",sidebar_position:1},s=void 0,o={id:"Documentation/Products/ToolSuite/TradeApp/TradeApp",title:"Trade App Manual",description:"The Trade App is an application in the SpiderRock Connect Platform that allows users to view live markets and associated position/risk information as well as manage orders for all provisioned equity, future, and option markets. Users can initate and respond to SpiderRock ATS auctions as well as manage SpiderRock Connect execution algo orders. The Trade App can be accessed via a web browser setup as a desktop application.  Information displayed on the tool is scoped by user and by client firm so sensitive data can only be accessed through strict controls. This tool is comparable to the Symbol Viewer (SV) in Citrix ToolSuite.",source:"@site/versioned_docs/version-8.4.08.4/Documentation/Products/ToolSuite/TradeApp/TradeApp.md",sourceDirName:"Documentation/Products/ToolSuite/TradeApp",slug:"/Documentation/Products/ToolSuite/TradeApp/",permalink:"/docs/8.4.08.4/Documentation/Products/ToolSuite/TradeApp/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",sidebarPosition:1,frontMatter:{title:"Trade App Manual",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"WebApp Tool Suite",permalink:"/docs/8.4.08.4/Documentation/Products/ToolSuite/"},next:{title:"Example - Initiating a Block Auction",permalink:"/docs/8.4.08.4/Documentation/Products/ToolSuite/TradeApp/BlockInitiatingExample"}},l={},d=[{value:"Trade App Application Components",id:"trade-app-application-components",level:2},{value:"Ticker Ribbon Controls",id:"ticker-ribbon-controls",level:2},{value:"Ticker Selector",id:"ticker-selector",level:3},{value:"Account Selector Menu",id:"account-selector-menu",level:3},{value:"User Profile",id:"user-profile",level:3},{value:"Analytics Panel",id:"analytics-panel",level:2},{value:"Primary Options Montage",id:"primary-options-montage",level:3},{value:"Expiry Bar",id:"expiry-bar",level:4},{value:"Option Montage Table",id:"option-montage-table",level:4},{value:"Rev/Con TradeSheet",id:"revcon-tradesheet",level:3},{value:"Volatility Surface Chart",id:"volatility-surface-chart",level:3},{value:"Order Queue",id:"order-queue",level:2},{value:"Auction Queue",id:"auction-queue",level:2},{value:"Order Entry",id:"order-entry",level:2},{value:"Order Items",id:"order-items",level:3},{value:"Order Parameters",id:"order-parameters",level:4},{value:"Order Display",id:"order-display",level:3},{value:"Errors",id:"errors",level:3},{value:"Order Management Workflow",id:"order-management-workflow",level:2},{value:"Direct Order Path (Trade App user is the ControlParty)",id:"direct-order-path-trade-app-user-is-the-controlparty",level:3},{value:"Staged Order Path (Trade App user is NOT the ControlParty)",id:"staged-order-path-trade-app-user-is-not-the-controlparty",level:3},{value:"Order Entry Examples",id:"order-entry-examples",level:2},{value:"Block Auction (Initiator)",id:"block-auction-initiator",level:3},{value:"Block Auction (Responder)",id:"block-auction-responder",level:3},{value:"Flash Auction (Initiator)",id:"flash-auction-initiator",level:3},{value:"Spider Sweep",id:"spider-sweep",level:3},{value:"Active Maker",id:"active-maker",level:3},{value:"Active Taker",id:"active-taker",level:3},{value:"Progression Algos",id:"progression-algos",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Trade App is an application in the SpiderRock Connect Platform that allows users to view live markets and associated position/risk information as well as manage orders for all provisioned equity, future, and option markets. Users can initate and respond to SpiderRock ATS auctions as well as manage SpiderRock Connect execution algo orders. The Trade App can be accessed via a web browser setup as a desktop application.  Information displayed on the tool is scoped by user and by client firm so sensitive data can only be accessed through strict controls. This tool is comparable to the Symbol Viewer (SV) in Citrix ToolSuite."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Full view of the SpiderRock Connect application",src:i(3025).A+"",width:"975",height:"463"})}),"\n",(0,r.jsx)(t.h2,{id:"trade-app-application-components",children:"Trade App Application Components"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Component"}),(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ticker Ribbon"}),(0,r.jsx)(t.td,{children:"Top"}),(0,r.jsx)(t.td,{children:"Allows users to select a ticker (product group) to display.  Contains live market data from the primary market, a 2 day lighting chart, dividend and earnings summaries, primary and secondary industry codes, and a trading account selector"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Order Queue"}),(0,r.jsx)(t.td,{children:"Left"}),(0,r.jsx)(t.td,{children:"Shows summary details and state for all active, staged, and closed orders for this user account.  Orders can be selected (transfered to the primary order ticket) or cancelled."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Auction Queue"}),(0,r.jsx)(t.td,{children:"Right"}),(0,r.jsx)(t.td,{children:"Shows new and pending block auctions. Includes custom auction fiters and search. Auctions can be selected (transfered to the primary order ticker) or hidden."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Analytics Panel"}),(0,r.jsx)(t.td,{children:"Center"}),(0,r.jsx)(t.td,{children:"Can display a number of panels including option montage(s) for listed and FLEX instruments as well as and various charts.  Also includes an integrated option scenario calculator."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Order Ticket"}),(0,r.jsx)(t.td,{children:"Bottom"}),(0,r.jsx)(t.td,{children:"Allows users to easily compose and manage single and multileg orders including ATS block and flash auction orders as well as SpiderRock Connect execution algorithms. Displays all available details for orders as they are working and enable allows full user order control."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"ticker-ribbon-controls",children:"Ticker Ribbon Controls"}),"\n",(0,r.jsx)(t.h3,{id:"ticker-selector",children:"Ticker Selector"}),"\n",(0,r.jsx)(t.p,{children:"The ticker selector on the Ticker Ribbon can be used to select either a stock symbol (eg. MSFT-NMS-EQT) or future complex symbol (eg. @ES-CME-FUT). This becomes the primary product group the center analytics panel. Only product groups for which you have market data provisioned will be accessible. The following ticker sources are currently available:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"TickerSrc"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Location"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NMS"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"US"}),(0,r.jsx)(t.td,{children:"US National Market System tickers. Includes all primary listed stock, ETF, and index symbols."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CME"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"US"}),(0,r.jsx)(t.td,{children:"CME/CME future product codes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CBOT"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"US"}),(0,r.jsx)(t.td,{children:"CME/CBOT futures and options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NYMEX"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"US"}),(0,r.jsx)(t.td,{children:"CME/NYMEX futures and options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"COMEX"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"US"}),(0,r.jsx)(t.td,{children:"CME/COMEX futures and options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CFE"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"US"}),(0,r.jsx)(t.td,{children:"CBOE/CFE futures and options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EUX"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Europe"}),(0,r.jsx)(t.td,{children:"All Pan-European equities and equity options"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"account-selector-menu",children:"Account Selector Menu"}),"\n",(0,r.jsx)(t.p,{children:"The account selector on the Ticker Ribbon accesses a selector menu that allows the user to select a primary position and risk account.  Accounts are searchable by code, name, or category tag.  Accounts can be either live trading or test accounts with test account only interacting with SpiderRock Connect exchange simulators and not with the real markets.  Test accounts are well highlighted to prevent confusion."}),"\n",(0,r.jsx)(t.h3,{id:"user-profile",children:"User Profile"}),"\n",(0,r.jsx)(t.p,{children:"Clicking on the user profile icon on the right-side of the Ticker Ribbon will display the current user\u2019s profile information.  This section displays the username, their user type, client firm, email address associated with the account, and the URL used.  This information can be important when troubleshooting with the SpiderRock Client Support Desk."}),"\n",(0,r.jsx)(t.h2,{id:"analytics-panel",children:"Analytics Panel"}),"\n",(0,r.jsx)(t.p,{children:"The Analytics Panel is currently made up of three separate views, only one of which is visible at a time."}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Primary Options Montage "}),(0,r.jsx)("li",{children:"Volatility Surface Chart "}),(0,r.jsx)("li",{children:"Reversal Conversion TradeSheet "})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-options-montage",children:"Primary Options Montage"}),"\n",(0,r.jsx)(t.p,{children:"The Options Montage displays data for one option expiration in an interactive grid.  This view is useful for analysis, as well as selecting the desired option(s) to be traded (shown below).  This panel is made up of two components that work together."}),"\n",(0,r.jsx)(t.h4,{id:"expiry-bar",children:"Expiry Bar"}),"\n",(0,r.jsx)(t.p,{children:"The Expiry Bar is made up of cards that display the user\u2019s desired expiries.  The user can change the expiration being displayed in the Option Montage component by clicking on any expiry card from the expiry bar (shown below).  The user can use the horizontal scroll bar on the Expiry Bar to view additional expirations when available.  The Expiry Bar not only allows the user to identify and select expirations, but it also displays data.  The user can click on the three-dot menu on the Expiry Bar to select the type of data displayed on each expiry card.  For example, if the user has ATM selected, they will view the at-the-money (ATM) implied volatility of each expiration as well as the change in the ATM for today."}),"\n",(0,r.jsx)(t.p,{children:"The user can choose between the following data selections for the expiration cards:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"ATM \u2013 Described above "}),(0,r.jsx)("li",{children:"Rate & Ern \u2013 Displays the interest rate used for this expiration as well as the number of earnings captured "}),(0,r.jsx)("li",{children:"Time \u2013 Displays the time to expiry in days and in years "}),(0,r.jsx)("li",{children:"Skew & Borrow \u2013 Displays skew as well as the implied borrow for this expiry "}),(0,r.jsx)("li",{children:"Straddle \u2013 Displays the price of the ATM straddle in both price and percent terms "})]}),"\n",(0,r.jsx)(t.p,{children:"This three-dot menu also allows the user to select the viewable strikes in the Option Montage table, as well as choose the viewable expirations."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Expiry Bar",src:i(15676).A+"",width:"975",height:"36"})}),"\n",(0,r.jsx)(t.h4,{id:"option-montage-table",children:"Option Montage Table"}),"\n",(0,r.jsx)(t.p,{children:"The Option Montage table is organized in a grid with strikes located in the center column. Call options are to the left of the strike column and put options are to the right of the strike column.  The user can scroll up/down using their mouse to view strikes that may not be shown in the view.  The delta column, as well as the scroll bar on the right side of the view have been shaded to allow the user to quickly identify strikes near at-the-money.  As the user scrolls on this view using their mouse each clickable field will be highlighted.  To select an option to be added to a trade ticket the user can click on either the bid or ask price of the relevant option.  Clicking on an ask price will result in the selected option being added to the trade ticket as a \u201cbuy\u201d, and clicking on the bid price will result in the selected option being added to the trade ticket as a \u201csell\u201d.  This feature helps the user efficiently build option orders.  If a mistake is made, the direction of each option can easily be changed in the trade ticket but updating the buy/sell toggle."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Option Montage Table",src:i(57431).A+"",width:"975",height:"291"})}),"\n",(0,r.jsx)(t.h3,{id:"revcon-tradesheet",children:"Rev/Con TradeSheet"}),"\n",(0,r.jsx)(t.p,{children:"This view allows the user to view reversal conversion data in an interactive and user-friendly format.  Data is displayed using a grid with expirations shown horizontally across the top of the view and strikes and option related data shown in vertical columns.  Data for each strike and expiry are organized in easily scannable cards.  This format allows the user to view all relevant rev/con data for all strikes and expirations simultaneously."}),"\n",(0,r.jsx)(t.p,{children:"Unlike the Options Montage where the Expiry Bar is separated from the main view, the Rev/Con Tradesheet has a scrollable expiry bar-like row that is built into the panel.  Each expiry is organized as a card that displays:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"The ATM implied borrow for that expiry, "}),(0,r.jsx)("li",{children:"The present value of the cumulative dividends to that expiry, and "}),(0,r.jsx)("li",{children:"The interest rate of that expiry. "})]}),"\n",(0,r.jsx)(t.p,{children:"The user can customize the expiries and strikes shown on the panel by clicking on the three-dot menu located to the far-right of the expiry row."}),"\n",(0,r.jsx)(t.p,{children:"Below the expiry row, rev/con data is organized into clickable cards.  There is one card for each expiry/strike.  Each card displays:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"The current borrow rate and change on the day calculated using SpiderRock fair value "}),(0,r.jsx)("li",{children:"The current borrow price and change on the day calculated using SpiderRock fair value "}),(0,r.jsx)("li",{children:"The Rev/Con bid and ask in price and borrow terms "})]}),"\n",(0,r.jsx)(t.p,{children:"The bid and ask prices/rates also act as interactive buttons. Clicking on either the bid or ask will open an Order Ticket with a rev/con structure built."}),"\n",(0,r.jsx)(t.h3,{id:"volatility-surface-chart",children:"Volatility Surface Chart"}),"\n",(0,r.jsx)(t.p,{children:"The Surface Chart displays the SpiderRock fair value lined up through the implied volatility market. There is also a bar chart that displays volume or open interest on the bottom."}),"\n",(0,r.jsx)(t.h2,{id:"order-queue",children:"Order Queue"}),"\n",(0,r.jsx)(t.p,{children:"The Order Queue, located on the left side of the SpiderRock Connect trading application (shown left), displays orders entered or staged by the user.  This queue will display:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Initiated orders created by the user within the application "}),(0,r.jsx)("li",{children:"Responses from the user to Block Auctions from the application "}),(0,r.jsx)("li",{children:"Initiating orders staged to the application via an API connection  "}),(0,r.jsx)("li",{children:"Potential Block Auction responses that have been staged via MLink after   having been pre-qualified by a filter. "})]}),"\n",(0,r.jsx)(t.p,{children:"The order type tabs at the top of the Order Queue can each be customized by hovering your mouse and choosing from the available types."}),"\n",(0,r.jsx)(t.p,{children:"The three-dot menu located to the right of the order type tabs allows the user to choose whether they view order cards in a wide or narrow format, as well as how orders are sorted."}),"\n",(0,r.jsx)(t.p,{children:"The search box will allow the user to search all order cards based on the entered values."}),"\n",(0,r.jsx)(t.p,{children:"The Cancel All Active selection will always be displayed on the Order Queue.  When clicked and confirmed this selection will cancel all active orders that are currently working."}),"\n",(0,r.jsx)(t.p,{children:"The show/hide icon will allow the user to hide the Order Queue."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Order Queue",src:i(28206).A+"",width:"301",height:"709"}),"\n",(0,r.jsx)(t.img,{alt:"Order Queue menu",src:i(45921).A+"",width:"249",height:"411"})]}),"\n",(0,r.jsx)(t.h2,{id:"auction-queue",children:"Auction Queue"}),"\n",(0,r.jsx)(t.p,{children:"The Auction Queue, located on the right side of the SpiderRock Connect application, displays an interactive list of Block Auctions.  This list is curated based on the user\u2019s defined auction filters (see Auction Filtering for more information).  Auctions are divided into active and closed categories, and the user can easily find relevant auctions using the search box.  Like the Order Queue there is a show/hide icon allowing the user to remove the Auction Queue from the application display."}),"\n",(0,r.jsx)(t.p,{children:"We also display the state of each auction on these cards.  The state \u201cCan Trade\u201d is notable because it means that there is a match on size, but not on price.  This indicates to both the initiator and responder that an improvement in price by either side could end the auction."}),"\n",(0,r.jsx)(t.p,{children:"This filter panel allows a user to filter by ticker, industry, auction size, strategy, expiry, as well as other criteria.  Users are allowed to build and apply multiple filters at once in order to target the most appropriate auctions for their needs."}),"\n",(0,r.jsx)(t.p,{children:"Only one ticker list and exclusion list can be applied per filter.  The user does have the ability to filter on tickers and industries in the same saved filter.  Both ticker lists and auction filters can be both saved and edited once they have been created."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Auction Queue panel",src:i(24792).A+"",width:"308",height:"717"}),"\n",(0,r.jsx)(t.img,{alt:"Auction Filter Menu",src:i(70547).A+"",width:"427",height:"824"})]}),"\n",(0,r.jsx)(t.h2,{id:"order-entry",children:"Order Entry"}),"\n",(0,r.jsx)(t.p,{children:"Users are able to enter and interact orders in several ways."}),"\n",(0,r.jsx)(t.p,{children:"Any card in either the order (left) or auction (right) queue panels can be selected to switch the order entry widget to same order or auction that is being displayed on the selected card.  If still active, the user can interact with this order by modifying or cancelling it."}),"\n",(0,r.jsx)(t.p,{children:"New orders can be created by selecting any 'bid' or 'offer' visible on the screen to start and show a new order ticket. This will initially display an order in 'Preview' mode that is be prepared for further action.  Additional legs can be added to the ticket by selecting more 'bids' or 'offers'.  Algo and order handling parameters can be selected.  And the resulting order can be either submitted as a live or staged order to SpiderRock Connect execution engines or deleted before become a real order."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Order Entry Ticket",src:i(15338).A+"",width:"975",height:"245"})}),"\n",(0,r.jsx)(t.p,{children:"The Order Ticket is made up of three sections:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:" Order Items "})," \u2013 This section displays each option and stock leg selected on the order.  Each order item will display live market and order data.  Status, order time remaining, strategy, and order handling selections are available above the order leg(s). "]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:" Order Parameters "})," \u2013 Once the user selects their desired algorithm on the far left side of the Order Parameters, the customizable order parameters will be displayed. "]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:" Order Display "})," \u2013 The Order Display is made up of three distinct sections (sections are described from left to right): "]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"The Order Risk Panel is broken up into three tabs: Risk metrics, order summary, and TCA data (where available). "}),(0,r.jsx)("li",{children:"An Order Display makes up the second panel.  The display for auctions is distinctly different from the display for SpiderRock Connect algorithms. "}),(0,r.jsx)("li",{children:"Interactive order buttons can be found on the far-right of the Order Display. "})]})]}),"\n",(0,r.jsx)(t.h3,{id:"order-items",children:"Order Items"}),"\n",(0,r.jsx)(t.p,{children:"This section displays the future, option, and/or stock legs that are the subject of order. Live market and order data is visible for each leg (as well as the complete package if more than one leg).  Status, order time remaining, strategy, and order handling selections are available above the order leg(s)."}),"\n",(0,r.jsx)(t.p,{children:"Strategies tags (eg. CSpread, Strangle, Straddle, etc) are automatically determined and shown for all multi-leg orders. If the first leg (in expiry, strike, call/put order) is a BUY then the strategy is consider regular way.  Otherwise the strategy is considered a 'flipped' spread and the strategy tag will have a '*' suffix (eg. RevCon vs RevCon*)."}),"\n",(0,r.jsx)(t.p,{children:"While it preview mode it is possible to change the orientation of a spread by 'flipping' it.  This will change the leg side of all legs, change the overall order side (B|Reg vs S|Inv) and change the sign (Credit vs Debit) of the order limit price.  Flipping a spread in this manner does not change any of the economics of the trade (the same items and money would change hands in the same directions) but it does change the perspective from which the user is acting."}),"\n",(0,r.jsx)(t.p,{children:"Once an order leave preview mode it will no longer be possible to change it's orientation by 'flipping' it."}),"\n",(0,r.jsx)(t.h4,{id:"order-parameters",children:"Order Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Once the items to trade are defined, the user must select the order parameters before starting an order.  SpiderRock Connect currently offers six execution strategies, two of which are ATS auctions (",(0,r.jsx)(t.strong,{children:"Block Auction, Flash Auction"}),"), and four are electronic algorithms (",(0,r.jsx)(t.strong,{children:"Spider Sweep, Active Maker, Active Taker, Spider Progression"}),")."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Execution Algorithm"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"SecType"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Block Initiate"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["option ",(0,r.jsx)("br",{})," spread"]}),(0,r.jsx)(t.td,{children:"Starts an ATS block auction (50 contracts or more) which will send auction notices to prospective counter-parties and typically run for 30 seconds to 5 minutes."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Block Respond"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["option ",(0,r.jsx)("br",{})," spread"]}),(0,r.jsx)(t.td,{children:"Creates an ATS block auction responds. Usually in response to a displayed auction queue card."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Flash Initiate"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"option, spread"}),(0,r.jsx)(t.td,{children:"Starts an ATS flash auction (any size). Auction will end immediately and results, including the respond order book, will be displayed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Spider Sweep"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"any"}),(0,r.jsx)(t.td,{children:"Initiates a market sweep algorithm.  Can sweep multiple markets simultaneously."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Active Maker"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"any"}),(0,r.jsx)(t.td,{children:"Initiates an active maker algorithm which posts in exchange order books and maintains a consisted level of aggresiveness as related markets move around"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Active Taker"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"any"}),(0,r.jsx)(t.td,{children:"Initiates an active taker algorithm which rests an order in a SpiderRock Connect execution engine which will remain dormant until all limit and other conditions are met and then immediately take liquidity from exchange order books."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Spider Progression"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"any"}),(0,r.jsx)(t.td,{children:"Initiates a long running hybrid make/take algorithm that will work an order over time according to a preset child arrival schedule (eg. TWAP, VWAP, Pulse). Typically works orders over periods of time ranging from 10 seconds to multiple hours."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"In addition to Block and Flash auctions (which we consider algorithms), SpiderRock Connect also offers:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Spider Sweep \u2013 This is an IOC algo intended to take screen liquidity. "}),(0,r.jsx)("li",{children:"Active Maker \u2013 Allows a client to make liquidity (will not take liquidity). "}),(0,r.jsx)("li",{children:"Active Taker \u2013 Allows a client to take liquidity. The order is hidden on the SpiderRock Connect system until the opportunity to take presents itself. "}),(0,r.jsx)("li",{children:"Spider Progression \u2013 In this algo, the order is broken into slices over the desired duration set by the user. "})]}),"\n",(0,r.jsx)(t.h3,{id:"order-display",children:"Order Display"}),"\n",(0,r.jsx)(t.p,{children:"The Order Display is made up of three distinct sections (sections are described from left to right):"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"The Order Risk Panel is broken up into three tabs: Risk metrics, order summary, and TCA data (where available). "}),(0,r.jsx)("li",{children:"An Order Display makes up the second panel.  The display for auctions is distinctly different from the display for SpiderRock Connect algorithms. "}),(0,r.jsx)("li",{children:"Interactive order buttons can be found on the far-right of the Order Display. "})]}),"\n",(0,r.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,r.jsx)(t.p,{children:"Errors are displayed and archived for the current day in our Error Panel which is located at the bottom of the SpiderRock Connect application.  When errors such as system or order errors occur, the user will receive a notification in the bottom right corner of the application.  The user will see the word error with a number inside of a red notification circle if there is a new error.  Once the user clicks on the error notification, thus opening the Error Panel, the red error notification will be cleared out."}),"\n",(0,r.jsx)(t.p,{children:"When clicking on the error notification section, the Error Panel is displayed. This panel displays all errors that have occurred in the current day, and this information is cleared out daily.  To close the panel, the user can click on the \u201c\u02c4\u201d icon to minimize the Error Panel."}),"\n",(0,r.jsx)(t.h2,{id:"order-management-workflow",children:"Order Management Workflow"}),"\n",(0,r.jsx)(t.p,{children:"Parent orders can be created and directly managed by their originator or they can be created by a separate party (Control Party) and managed by a trade app user (ModifyParty)."}),"\n",(0,r.jsx)(t.h3,{id:"direct-order-path-trade-app-user-is-the-controlparty",children:"Direct Order Path (Trade App user is the ControlParty)"}),"\n",(0,r.jsx)(t.p,{children:"A Trade App user can build a order ticket by selecting bid and/or ask prices from any of our option montage or trade sheet views as well as the ticker ribbon and other places where markets or products are displayed, setting order and algo parameters, and starting the order.  In the workflow the Trade App user is the ControlParty (the party that choose the item or spread being executed).  The user can choose to cancel/replace the order while it is working in order to modify any of it's active parameters. The user could choose to put the order on ActiveHold and preserve it for future action.  Or, they could choose to cancel the order and then create another order for the same item or spread.  In short, the Trade App user has complete control when working direct path orders."}),"\n",(0,r.jsx)(t.h3,{id:"staged-order-path-trade-app-user-is-not-the-controlparty",children:"Staged Order Path (Trade App user is NOT the ControlParty)"}),"\n",(0,r.jsx)(t.p,{children:"With staged order the Trade App user does NOT have control of the item or spread being traded, the order or leg side(s), or the maximum order size and cannot directly create new staged orders.  Rather, a staged order is created by either another user or another trading system and initially appears on the Trade App as a card in the Order Queue (left side panel)."}),"\n",(0,r.jsx)(t.p,{children:"These staged order cards can be selected by clicking them which will cause the main order ticket panel to populate with the legs, side, and initial algo parameters of the staged order.  The Trade App user can then set the working algo parameters as well as an active size and active duration for the staged order and start its associated execution algorithm within a SpiderRock Connect execution engine.  The Trade App user can modify the order while it is working by including changing its' active size or duration and modifying algo behavior parameters. This allows the ModifyParty to work an order in discrete slices if desired."}),"\n",(0,r.jsx)(t.p,{children:"While the order is active (including on ActiveHold) within SpiderRock Connect execution engines the originating control party will see the order as working / pending further action.  Any fills that accrue will be immediately reported to the originating party as fills on their working order.  If the Trade App user cancels the order it will return to the originating party as terminated."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"If the Trade App user is not the ControlParty for an order the order will be displayed with an orange bar to indicate that some actions are restricted for that order."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.a,{href:"/docs/next/Documentation/PlatformFeatures/OrderManagement/Staged-Orders",children:["Learn more about ",(0,r.jsx)(t.strong,{children:"staged orders"})," here."]})}),"\n",(0,r.jsx)(t.h2,{id:"order-entry-examples",children:"Order Entry Examples"}),"\n",(0,r.jsx)(t.h3,{id:"block-auction-initiator",children:"Block Auction (Initiator)"}),"\n",(0,r.jsx)(t.p,{children:"Block Auctions have an initiator selected expiry time and will expire as scheduled unless they trade early. Block Auction notices are potentially shown to other trade tool users, SpiderRock ICE Chat clients, and also to MLink auction notice subscribers based on initiator selected disclosure parameters."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:i(69499).A+"",width:"1759",height:"284"})}),"\n",(0,r.jsx)(t.p,{children:"After a Block Auction is started, the response book boxes will update about 1x per second as each auction trial match process is run. The Block Auction initiator can modify their limit price while the auction is running, either by manually entering a new price or by selecting a responder box and 'Updating' their order."}),"\n",(0,r.jsx)(t.h3,{id:"block-auction-responder",children:"Block Auction (Responder)"}),"\n",(0,r.jsx)(t.h3,{id:"flash-auction-initiator",children:"Flash Auction (Initiator)"}),"\n",(0,r.jsx)(t.p,{children:"Flash Auctions are always IOC orders, and given their short duration, they are only shown to electronic responders capable of responding in 100ms or less.  The immediate nature of these auctions also means there is less customization on their parameters (shown below).  While initiating customers can select Flash Auction as a strategy from the strategy pulldown menu on our parameters, Flash Auction responders need to be integrated with SpiderRock Connect via an API such as MLink (SpiderRock Connect\u2019s proprietary streaming API), SRSE (SpiderRock Connect\u2019s SQL-based API), or FIX."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:i(65464).A+"",width:"1759",height:"277"})}),"\n",(0,r.jsx)(t.p,{children:"Once the Flash Auction is started, the user is not able to edit the order due to the IOC duration. However, they modify their limit price and run again."}),"\n",(0,r.jsx)(t.h3,{id:"spider-sweep",children:"Spider Sweep"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:i(74534).A+"",width:"1540",height:"274"})}),"\n",(0,r.jsx)(t.h3,{id:"active-maker",children:"Active Maker"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:i(36621).A+"",width:"1540",height:"274"})}),"\n",(0,r.jsx)(t.h3,{id:"active-taker",children:"Active Taker"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:i(48884).A+"",width:"1540",height:"274"})}),"\n",(0,r.jsx)(t.h3,{id:"progression-algos",children:"Progression Algos"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:i(54139).A+"",width:"1540",height:"274"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},36621:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/ActiveMaker-3f9670d214aaa86b73da3bb7688f1fff.svg"},48884:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/ActiveTaker-f3d473e08cc035ad490f10256ad45040.svg"},69499:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/BlockAuction-cfd4c9af817b1f0551ee7fab162186e9.svg"},65464:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/FlashAuction-a1b738c215052d68f71536b65049cc17.svg"},54139:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/SpiderProgression-1534b9481d7f365db28cea890205df52.svg"},74534:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/SpiderSweep-385731aa9ca6458f155968508ed577e4.svg"},3025:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image1-aa685dbc9fa71958574e2ff0f738c4c4.png"},15676:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image11-ed3979c991466be480ed66ab95ae5fc2.png"},57431:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image12-57232ca432068ce4490cd7ccc6547462.png"},28206:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image13-276069f173f74e7b05bde249bfeeb913.png"},45921:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image14-62000cdaa79eb55dfb446624e2347602.png"},24792:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image15-e16c7194fca9987eda61a0fd54bba66e.png"},70547:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image16-f46b7c8dbc0428f1a45ac3a01cc4de6c.png"},15338:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/tt-image17-14eb2b985810cf777c2a979b17218200.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var r=i(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);