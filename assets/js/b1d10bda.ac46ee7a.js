"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45238],{98135:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=i(74848),n=i(28453);const r={title:"SpiderRock ATS",sidebar_position:1},t=void 0,l={id:"SpiderRockConnectATS/SpiderRockConnectATS",title:"SpiderRock ATS",description:"SpiderRock ATS Overview",source:"@site/docs/SpiderRockConnectATS/1.SpiderRockConnectATS.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/SpiderRockConnectATS",permalink:"/docs/next/SpiderRockConnectATS/SpiderRockConnectATS",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SpiderRock ATS",sidebar_position:1},sidebar:"spiderRockConnectATSSidebar",next:{title:"Block Auctions",permalink:"/docs/next/SpiderRockConnectATS/BlockAuctions"}},o={},c=[{value:"SpiderRock ATS Overview",id:"spiderrock-ats-overview",level:2},{value:"Flash Auctions",id:"flash-auctions",level:3},{value:"Block Auctions",id:"block-auctions",level:3},{value:"&quot;Mid-Market or Better&quot; Auction Start Condition",id:"mid-market-or-better-auction-start-condition",level:3},{value:"Mid-Market Restriction",id:"mid-market-restriction",level:4},{value:"Disclosures and Additional Information",id:"disclosures-and-additional-information",level:2}];function m(e){const s={annotation:"annotation",em:"em",h2:"h2",h3:"h3",h4:"h4",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"spiderrock-ats-overview",children:"SpiderRock ATS Overview"}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS is an alternative trading system for US equity options that supports trading individual option series as well as option spreads in both exchange listed and exchange FLEX instruments. All products that trade within the SpiderRock ATS clear at the Option Clearing Corp (OCC) and can be delivered to subscriber prime broker accounts in the normal fashion."}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS is operated by SpiderRock EXS, - LLC a FINRA-registered broker-dealer. Access to the ATS is available to other broker dealers and to all qualified institutional clients of SpiderRock EXS."}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS runs individual auctions lasting between 100ms to 5 minutes, designed to connect liquidity seekers looking to find counter-parties to trade with. At the start of the auction process notices are sent to potential liquidity providers inviting responses. These auction notices can be directed narrowly to one or more responders by name or broadly to all potential liquidity providers. Also, initiators can choose to remain anonymous or to reveal themselves.  In addition, initiators can choose to reveal their side and/or direction or keep them private."}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS auctions have a several features that include allowing both initiators and responders to specify limit prices either with traditional static price limits or with formula-based limits that take underlying price levels into account."}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS auctions can only be started if the initiator is willing to pay at least mid-market (or better) either by reference to the current NBBO mid-point or by reference to a SpiderRock fair price model regardless of whether the initiator chooses to reveal their side and/or price to responders or not."}),"\n",(0,a.jsx)(s.h3,{id:"flash-auctions",children:"Flash Auctions"}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS Flash Auctions can be initiated for any quantity, often by individual users looking to find electronic markets/quotes inside of the publicly displayed NBBO levels. These auctions are typically started by either SpiderRock or third party algos/execution routing strategies and are designed to elicit responses from algos and other trading technology that can respond timely."}),"\n",(0,a.jsx)(s.p,{children:"When a Flash Auction begins, notices are sent to prospective electronic responders and 100ms later, a trial match process is run.  During this trial match, all formula based prices are resolved and a penny price interval responder order book is formed.  If a presumptive match is possible, a cross order will be forwarded to an equity option exchange for exposure and potential price improvement. Otherwise, the Flash Auction will conclude with nothing done, and the order initiating the Flash Auction and any non-matching responses received will be cancelled."}),"\n",(0,a.jsx)(s.p,{children:"At the end of each Flash Auction, the initiator as well as all ATS subscribers are shown the complete responder side order book (if any) that existed when the auction concluded.  As a result, flash auctions can be utilized to discover liquidity opportunities in markets that are either not quoted - such as FLEX options - or in markets that are quoted at wide levels."}),"\n",(0,a.jsx)(s.p,{children:"It is possible for a Flash Auction initiator who is a broker dealer representing a client to propose and receive a transfer commission for initiating a Flash Auction on behalf of that client. To do so, the initiating firm and the expected transfer commission must be disclosed to all responders at the start of the auction.  This transfer commission is in addition to any commissions or fees paid to SpiderRock ATS for hosting the auction."}),"\n",(0,a.jsx)(s.h3,{id:"block-auctions",children:"Block Auctions"}),"\n",(0,a.jsx)(s.p,{children:"SpiderRock ATS Block Auctions can be initiated for 50 contracts or more and are typically started and managed by individual initiators.  These auctions are longer in duration (up to 5 minutes) and allow human traders to directly participate in the auction negotiation process.  They are functionally similar to an RFQ or inter-dealer broker process and are designed for trading option series or spreads in larger block quantities."}),"\n",(0,a.jsx)(s.p,{children:"When a Block Auction begins, notices are sent to prospective responders after which trial match processes are run at one second intervals.  During each trial match, all formula-based prices are resolved and a penny price interval responder order book is formed.  If a presumptive match is possible, the auction will be terminated immediately and the presumptive match will be forwarded to an equity option exchange and crossed per exchange rules."}),"\n",(0,a.jsxs)(s.p,{children:["If no presumptive match is possible, at the end of a trial match process, the resulting responder side order book will be shown to the initiator and all other ATS subscribers. This process will continue until either ",(0,a.jsx)(s.em,{children:"(a)"})," one or more responders arrive that can match with the initiator, ",(0,a.jsx)(s.em,{children:"(b)"})," the initiator improves their price enough to interact with resting responders, or ",(0,a.jsx)(s.em,{children:"(c)"})," the process reaches its expiration time with nothing done."]}),"\n",(0,a.jsx)(s.p,{children:"Information pertaining to Block Auctions will be disseminated to both ATS Subscribers and certain broker-dealer partners of SpiderRock, both directly and indirectly via EXS personnel and/or technology. These broker-dealer partners will not be Subscribers to the ATS, but will be enabled to receive and respond to certain Block Auction information, either through automated technology that interfaces and communicates with such partners via ICE Chat or through EXS\u2019s brokerage desk, in both cases in the same manner as is also available to ATS Subscribers. These broker-dealer partners, together with all ATS Subscribers, comprise the \u201cSpiderRock ATS Network.\u201d"}),"\n",(0,a.jsx)(s.p,{children:"The broker-dealer partners within the SpiderRock ATS Network - as described above - are generally those broker-dealers that EXS has determined that, due to their regular activity in the options markets or otherwise, may have an interest in receiving notice of, and may be able to provide contra-side liquidity to, Block Auctions in SpiderRock ATS."}),"\n",(0,a.jsx)(s.h3,{id:"mid-market-or-better-auction-start-condition",children:'"Mid-Market or Better" Auction Start Condition'}),"\n",(0,a.jsx)(s.p,{children:"Initiators of both Block and Flash auctions are required to disclose an actionable limit price at the start of any Block or Flash auction.  Initiators can request that this limit price be [Visible] or [Not Visible] to auction responders.  Regardless of whether this limit price is disclosed to responders it is an immediately actionable price that will trade if an appropriate matching response is received."}),"\n",(0,a.jsx)(s.p,{children:"Initiators of both Block and Flash auctions also have the option of revealing their identity to potential responders, or remaining anonymous. This decision has a significant impact on whether the Initiator\u2019s limit price must be mid-market or better in order to avoid being rejected by the system (the \u201cMid-Market Restriction\u201d)."}),"\n",(0,a.jsx)(s.p,{children:"In this regard, if the Initiator elects to disclose their identity to all potential responders, then the Mid-Market Restriction does not apply, and their limit price is not subject to any price restriction. However, if the Initiator elects to remain anonymous, even to one potential responder, then the following Mid-Market Restriction will apply to their limit price."}),"\n",(0,a.jsx)(s.h4,{id:"mid-market-restriction",children:"Mid-Market Restriction"}),"\n",(0,a.jsx)(s.p,{children:"For all individual listed option series, the initiator starting limit price (when buying the series) must be greater than or equal to the OPRA NBBO bid price + $0.01.  In addition, the initiator limit price must be greater than the least restrictive (to the initiator) of:"}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["The OPRA NBBO bid price + ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"0.05."}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:">"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:">"}),(0,a.jsx)(s.mi,{children:"T"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mi,{children:"P"}),(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mi,{children:"A"}),(0,a.jsx)(s.mi,{children:"N"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"j"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"y"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"\u2212"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"0.05. </li>\n<li>The OPRA NBBO mid-market price (adjusted down to the nearest penny) - "})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord",children:"0.05."}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"/"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"><"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:">"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"OPR"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"NBBO"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"mi"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ma"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"tp"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"dd"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"res"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"tp"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"nn"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mord",children:"\u2212"})]})]})]}),"0.01."]}),(0,a.jsx)("li",{children:"The SpiderRock Fair Mid price (adjusted down to the nearest penny)."})]}),"\n",(0,a.jsx)(s.p,{children:"For all listed option spreads the initiator starting limit price (when buying the spread) must be greater than the least restrictive (to the initiator) of:"}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["The OPRA NBBO leg package bid price + ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"0.05."}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:">"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:">"}),(0,a.jsx)(s.mi,{children:"T"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mi,{children:"P"}),(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mi,{children:"A"}),(0,a.jsx)(s.mi,{children:"N"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"j"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"y"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"\u2212"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"0.05. </li>\n<li>The OPRA NBBO leg package bid price (adjusted down to the nearest penny) - "})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord",children:"0.05."}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"/"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"><"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:">"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"OPR"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"NBBOl"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ka"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"bi"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"dd"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"res"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"tp"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"nn"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mord",children:"\u2212"})]})]})]}),"0.01."]}),(0,a.jsx)("li",{children:"The SpiderRock Fair Mid leg package price (adjusted down to the nearest penny)."})]}),"\n",(0,a.jsx)(s.p,{children:"When selling either series or spread, the starting Mid-Market Restriction is the mirror of those when buying the same series or spread."}),"\n",(0,a.jsx)(s.p,{children:"For purposes of the Mid-Market Restriction, the SpiderRock Fair Mid price is a proprietary price that represents SpiderRock\u2019s best estimate of what a fair market price would be for the series or spread in question.  This price can be understood as a statistical estimate of the price level of the next trade price, should one occur.  This SpiderRock Fair Mid price may not be in an even penny increment.  Also, this SpiderRock Fair Mid price level may not exist for all series or spreads, in which case any criteria based on this level will not apply when determining whether an auction can be started at a given price.  Nothing about the operation of an auction depends on the existence or value of the SpiderRock Fair Mid price.  At most, the Spider Rock Fair Mid price can allow auctions to start that would not otherwise be able to start using only OPRA NBBO derived price restrictions."}),"\n",(0,a.jsx)(s.p,{children:"For all FLEX option series and spreads, there is no restriction on the starting limit price level."}),"\n",(0,a.jsx)(s.h2,{id:"disclosures-and-additional-information",children:"Disclosures and Additional Information"}),"\n",(0,a.jsx)(s.p,{children:"The information above provides a brief summary of certain technical aspects of SpiderRock ATS and is compiled for concise reference purposes only. While it encapsulates key points and provides an overview of certain content found in the SpiderRock ATS Subscriber Manual, it may not capture every detail found in the manual. For comprehensive understanding and complete context, please refer to the SpiderRock ATS Subscriber Manual."}),"\n",(0,a.jsx)(s.p,{children:"Additional information on SpiderRock ATS auctions as well as information on being either an initiator or a responder can be found on this site or by contacting us directly."}),"\n",(0,a.jsxs)("ol",{children:[" ",(0,a.jsx)("b",{children:" Note: "})," SpiderRock ATS is currently operating in a technology preview mode in which all auctions are taking place in TEST accounts and do not represent live trading.  We anticipate starting live trading in the Fall of 2024. Contact us or check back regularly for more details. "]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>l});var a=i(96540);const n={},r=a.createContext(n);function t(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);