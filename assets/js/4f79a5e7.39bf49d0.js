"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[78091],{67698:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var d=s(74848),r=s(28453);const i={title:"Drop Recieve FIX Spec",sidebar_position:3},n=void 0,c={id:"Documentation/PlatformAPIs/FIX/drop-receive",title:"Drop Recieve FIX Spec",description:"This document describes the SpiderRock Drop Recieve FIX Gateway.  This SpiderRock FIX gateway allows a client to report a clients executions and/or positions for order marking and risk purposes.",source:"@site/docs/Documentation/PlatformAPIs/FIX/drop-receive.md",sourceDirName:"Documentation/PlatformAPIs/FIX",slug:"/Documentation/PlatformAPIs/FIX/drop-receive",permalink:"/docs/Documentation/PlatformAPIs/FIX/drop-receive",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Drop Recieve FIX Spec",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Drop Copy Specs",permalink:"/docs/Documentation/PlatformAPIs/FIX/drop-copy-specs"},next:{title:"Execution Drop Copy",permalink:"/docs/Documentation/PlatformAPIs/FIX/execution-drop-copy-spec"}},l={},x=[{value:"Application Messages",id:"application-messages",level:2},{value:"Execution Report",id:"execution-report",level:3},{value:"Aggregated Group position Report",id:"aggregated-group-position-report",level:3},{value:"XML Messages",id:"xml-messages",level:3}];function j(e){const t={em:"em",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"This document describes the SpiderRock Drop Recieve FIX Gateway.  This SpiderRock FIX gateway allows a client to report a clients executions and/or positions for order marking and risk purposes."}),"\n",(0,d.jsx)(t.p,{children:"This document is intended to be used in conjunction with the SpiderRock FIX Session Guide which describes session level message handling and other SpiderRock FIX conventions in more detail."}),"\n",(0,d.jsx)(t.h2,{id:"application-messages",children:"Application Messages"}),"\n",(0,d.jsx)(t.h3,{id:"execution-report",children:"Execution Report"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"FIX Tag"}),(0,d.jsx)(t.th,{children:"FIX Tag Name"}),(0,d.jsx)(t.th,{children:"type"}),(0,d.jsx)(t.th,{children:"Req'd"}),(0,d.jsx)(t.th,{children:"values"}),(0,d.jsxs)(t.th,{children:["associated record value",(0,d.jsx)("br",{})," (SpdrAwayExecution)"]}),(0,d.jsx)(t.th,{children:"comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"Standard Header"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"Y"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"MsgType = 8"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5020"}),(0,d.jsx)(t.td,{children:"SRAccnt"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"Either SRAccnt or Account is required"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"Account"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5022"}),(0,d.jsx)(t.td,{children:"SRClientFirm"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"SR client firm.  A default may be configured"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"11"}),(0,d.jsx)(t.td,{children:"ClOrdID"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"clientOrderId"}),(0,d.jsx)(t.td,{children:"client order ID (should be unique)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"17"}),(0,d.jsx)(t.td,{children:"ExecID"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["origExecID",(0,d.jsx)("br",{}),"lastExecID"]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"19"}),(0,d.jsx)(t.td,{children:"ExecRefID"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"most recent execution ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"60"}),(0,d.jsx)(t.td,{children:"TransactTime"}),(0,d.jsx)(t.td,{children:"utcTimestamp"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["fillTransactDttm",(0,d.jsx)("br",{}),"fillDttm"]}),(0,d.jsx)(t.td,{children:"transaction date/time as reported by exchange or down stream broker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5036"}),(0,d.jsx)(t.td,{children:"SRUsername"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"modifiedBy"}),(0,d.jsx)(t.td,{children:"user name associated with the parent order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"32"}),(0,d.jsx)(t.td,{children:"LastQty"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"fillQuantity"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"31"}),(0,d.jsx)(t.td,{children:"LastPx"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"fillPrice"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"30"}),(0,d.jsx)(t.td,{children:"LastMkt"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"fillExch"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"58"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"comment"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"150"}),(0,d.jsx)(t.td,{children:"ExecType"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsxs)(t.td,{children:["2-Fill",(0,d.jsx)("br",{}),"1-PartialFill ",(0,d.jsx)("br",{}),"F-Trade ",(0,d.jsx)("br",{}),"H-TradeCxl",(0,d.jsx)("br",{}),"G-TradeCorrect"]}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"38"}),(0,d.jsx)(t.td,{children:"OrderQty"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"childSize"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"54"}),(0,d.jsx)(t.td,{children:"Side"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsxs)(t.td,{children:["1=Buy",(0,d.jsx)("br",{}),"2=Sell",(0,d.jsx)("br",{}),"5=Sell Short",(0,d.jsx)("br",{}),"6=Sell Short Exempt"]}),(0,d.jsxs)(t.td,{children:["fillSide",(0,d.jsx)("br",{}),"ssaleFlag"]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"77"}),(0,d.jsx)(t.td,{children:"PositionEffect"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsxs)(t.td,{children:["O=Open",(0,d.jsx)("br",{}),"C=Close"]}),(0,d.jsx)(t.td,{children:"positionType"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"55"}),(0,d.jsx)(t.td,{children:"Symbol"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"Symbol for the position report"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"65"}),(0,d.jsx)(t.td,{children:"SymbolSfx"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"Suffix of the symbol for the position report"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"207"}),(0,d.jsx)(t.td,{children:"SecurityExchange"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["See ",(0,d.jsx)(t.em,{children:"Fix Session Guide, Appendix A"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"55"}),(0,d.jsx)(t.td,{children:"Symbol"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Stocks, Options, Futures",(0,d.jsx)("br",{}),"Symbol for the position report"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"65"}),(0,d.jsx)(t.td,{children:"SymbolSfx"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Stocks",(0,d.jsx)("br",{}),"Suffix of the symbol for the position report"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"541"}),(0,d.jsx)(t.td,{children:"MaturityDate"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Futures, Options",(0,d.jsx)("br",{}),"Used to specify a maturity date YYYYMMDD"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"202"}),(0,d.jsx)(t.td,{children:"StrikePrice"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Options",(0,d.jsx)("br",{}),"Strike price of the security"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"201"}),(0,d.jsx)(t.td,{children:"PutOrCall"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsxs)(t.td,{children:["0-Put",(0,d.jsx)("br",{}),"1-Call"]}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"Options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"200"}),(0,d.jsx)(t.td,{children:"MaturityMonthYear"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Futures, Options",(0,d.jsx)("br",{}),"The month and year of maturity YYYYMM"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"205"}),(0,d.jsx)(t.td,{children:"MaturityDay"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{children:"1-31"}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Futures, Options ",(0,d.jsx)("br",{}),"Can be used in conjunction with MaturityMonthYear to specify a particular maturity date"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"167"}),(0,d.jsx)(t.td,{children:"SecurityType"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsxs)(t.td,{children:["MLEG-MultiLeg",(0,d.jsx)("br",{}),"CS-Common Stock",(0,d.jsx)("br",{}),"FUT-Future",(0,d.jsx)("br",{}),"OPT-Option"]}),(0,d.jsx)(t.td,{children:"secType"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5290"}),(0,d.jsx)(t.td,{children:"SRUserData1"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"userData1"}),(0,d.jsx)(t.td,{children:"client supplied data field"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5291"}),(0,d.jsx)(t.td,{children:"SRUserData2"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"userData2"}),(0,d.jsx)(t.td,{children:"client supplied data field"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Normally there is no response to this message. In some cases, the Reject<3> or Business Reject Message<j> message will be returned if the message cannot be properly processed."}),"\n",(0,d.jsx)(t.h3,{id:"aggregated-group-position-report",children:"Aggregated Group position Report"}),"\n",(0,d.jsx)(t.p,{children:"SpiderRock FIX gateway implements a user defined message to update a firm\u2019s position for order marking and risk purposes."}),"\n",(0,d.jsx)(t.p,{children:"There is no acknowledged response for this message. An invalid message may reject with a Session or Business level Reject."}),"\n",(0,d.jsx)(t.p,{children:"The total position for a firm is calculated as a combination of:"}),"\n",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Start of day positions known by SpiderRock (for example a spreadsheet from a clearing firm)"}),(0,d.jsx)("li",{children:" Executed Fill Quantities executed by SpiderRock"}),(0,d.jsx)("li",{children:"  Open Order Quantities on orders issued by SpiderRock"}),(0,d.jsx)("li",{children:"Executed Fill Quantities Execution Reports dropped to SpiderRock"}),(0,d.jsx)("li",{children:"Aggregated Group Position Report Data"})]}),"\n",(0,d.jsx)(t.p,{children:"A firm may use all methods (start of day files, aggregation reports, and dropped executions) to report their positions."}),"\n",(0,d.jsx)(t.p,{children:"The start of day position and daily bought/sold quantities may be omitted or set to zero. Care must be taken not to double-count fills. For example, a new traded quantity should not be reported on both the aggregated group position report and as a dropped fill, nor should a fill from SpiderRock be dropped back to SpiderRock."}),"\n",(0,d.jsx)(t.p,{children:"The ClientID<109> and AggregationGroup<5701> values may be configured by SpiderRock by FIX session."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"FIX Tag"}),(0,d.jsx)(t.th,{children:"FIX Tag Name"}),(0,d.jsx)(t.th,{children:"type"}),(0,d.jsx)(t.th,{children:"Req'd"}),(0,d.jsx)(t.th,{children:"values"}),(0,d.jsxs)(t.th,{children:["associated record value",(0,d.jsx)("br",{})," (ExternAggGroupReport)"]}),(0,d.jsx)(t.th,{children:"comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"Standard Header"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"Y"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"MsgType = UAG"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"721"}),(0,d.jsx)(t.td,{children:"PosMaintRptId"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Unique identifier for this position report"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"109"}),(0,d.jsx)(t.td,{children:"ClientID"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"pkey.clientFirm"}),(0,d.jsx)(t.td,{children:"A SpiderRock supplied value"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5708"}),(0,d.jsx)(t.td,{children:"AggregationGroup"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"pkey.aggGroup"}),(0,d.jsx)(t.td,{children:"SpiderRock supplied value"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5701"}),(0,d.jsx)(t.td,{children:"OpenPositionQuantity"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"openPosition"}),(0,d.jsx)(t.td,{children:"Start of day position for all accounts - may be positive (long) or negative (short)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5702"}),(0,d.jsx)(t.td,{children:"OpenPositionQuantityShort"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"openPosition"}),(0,d.jsx)(t.td,{children:"Short start-of-day position for all accounts - must be positive if specified"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5703"}),(0,d.jsx)(t.td,{children:"OpenPositionType"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsxs)(t.td,{children:["1=Exact ",(0,d.jsx)(t.em,{children:"(default)"}),(0,d.jsx)("br",{}),"2=Truncated"]}),(0,d.jsx)(t.td,{children:"openPosType"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5704"}),(0,d.jsx)(t.td,{children:"BoughtQuantity"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"botQuantity"}),(0,d.jsx)(t.td,{children:"Quantity bought today.  Cannot be negative"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5705"}),(0,d.jsx)(t.td,{children:"SoldQuantity"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"sldQuantity"}),(0,d.jsx)(t.td,{children:"Quantity sold today.  Cannot be negative"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5706"}),(0,d.jsx)(t.td,{children:"BidLeaves"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bidLeaves"}),(0,d.jsx)(t.td,{children:"Current open quantity (buy). Cannot be negative"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5707"}),(0,d.jsx)(t.td,{children:"AskLeaves"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"askLeaves"}),(0,d.jsx)(t.td,{children:"Current open quantity (sell). Cannot be negative"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"779"}),(0,d.jsx)(t.td,{children:"LastUpdateTime"}),(0,d.jsx)(t.td,{children:"utcTimestamp"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"Timestamp of last update to date item"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"55"}),(0,d.jsx)(t.td,{children:"Symbol"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"Symbol for the position report"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"65"}),(0,d.jsx)(t.td,{children:"SymbolSfx"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"Suffix of the symbol for the position report"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"207"}),(0,d.jsx)(t.td,{children:"SecurityExchange"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["See ",(0,d.jsx)(t.em,{children:"Fix Session Guide, Appendix A"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"55"}),(0,d.jsx)(t.td,{children:"Symbol"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Stocks, Options, Futures",(0,d.jsx)("br",{}),"Symbol for the position report"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"65"}),(0,d.jsx)(t.td,{children:"SymbolSfx"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Stocks",(0,d.jsx)("br",{}),"Suffix of the symbol for the position report"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"541"}),(0,d.jsx)(t.td,{children:"MaturityDate"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Futures, Options",(0,d.jsx)("br",{}),"Used to specify a maturity date YYYYMMDD"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"202"}),(0,d.jsx)(t.td,{children:"StrikePrice"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Options",(0,d.jsx)("br",{}),"Strike price of the security"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"201"}),(0,d.jsx)(t.td,{children:"PutOrCall"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsxs)(t.td,{children:["0-Put",(0,d.jsx)("br",{}),"1-Call"]}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsx)(t.td,{children:"Options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"200"}),(0,d.jsx)(t.td,{children:"MaturityMonthYear"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Futures, Options",(0,d.jsx)("br",{}),"The month and year of maturity YYYYMM"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"205"}),(0,d.jsx)(t.td,{children:"MaturityDay"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{children:"1-31"}),(0,d.jsx)(t.td,{children:"secKey"}),(0,d.jsxs)(t.td,{children:["Futures, Options ",(0,d.jsx)("br",{}),"Can be used in conjunction with MaturityMonthYear to specify a particular maturity date"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"167"}),(0,d.jsx)(t.td,{children:"SecurityType"}),(0,d.jsx)(t.td,{children:"enum"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsxs)(t.td,{children:["MLEG-MultiLeg",(0,d.jsx)("br",{}),"CS-Common Stock",(0,d.jsx)("br",{}),"FUT-Future",(0,d.jsx)("br",{}),"OPT-Option"]}),(0,d.jsx)(t.td,{children:"secType"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Normally there is no response to this message. In some cases, the Reject<3> or Business Reject Message<j> message will be returned if the message cannot be properly processed."}),"\n",(0,d.jsx)(t.h3,{id:"xml-messages",children:"XML Messages"}),"\n",(0,d.jsx)(t.p,{children:"SpiderRock FIX Drop Recieve Gateway allows an execution report or a aggregation report to be sumitted as an XML formatted FIX message."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"FIX Tag"}),(0,d.jsx)(t.th,{children:"FIX Tag Name"}),(0,d.jsx)(t.th,{children:"type"}),(0,d.jsx)(t.th,{children:"Req'd"}),(0,d.jsx)(t.th,{children:"values"}),(0,d.jsxs)(t.th,{children:["associated record value",(0,d.jsx)("br",{})," (ExternAggGroupReport)"]}),(0,d.jsx)(t.th,{children:"comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"Standard Header"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"Y"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.em,{children:"MsgType = n"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"212"}),(0,d.jsx)(t.td,{children:"XmlDataLen"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"N"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ignored"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"213"}),(0,d.jsx)(t.td,{children:"XmlData"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"Y"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Should not contain embedded SOH characters.  Use '|' to delimit FIX fields"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Normally there is no response to this message. In some cases, the Reject<3> or Business Reject Message<j> message will be returned if the message cannot be properly processed."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var d=s(96540);const r={},i=d.createContext(r);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);