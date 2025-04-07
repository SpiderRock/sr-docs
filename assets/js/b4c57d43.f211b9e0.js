"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["2721"],{66531:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>N,contentTitle:()=>c});var t=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX/ResponderMarkupBX","title":"ResponderMarkupBX","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX/ResponderMarkupBX.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"ParentOrderGatewayExt","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/ParentOrderGatewayExt/"},"next":{"title":"ResponderMarkupRC","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/"}}'),s=i("52676"),d=i("91503");let r={},c=void 0,l={},N=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/liquidity-notice/ResponderMarkupBX",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SRATS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRTrade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_yr"}),(0,s.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_mn"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_dy"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"respSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"auction responder side your side Buy  BuyBorrow Cash"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isDisabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expiryMoneyAvail"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"money available for responding day total this tickerexpiry all strikes note money  hiStrike  loStrike  pointValue per BX spread"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tickerMoneyAvail"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"money available for responding day total this ticker all strikes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"transactFee"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"moneyRate"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"000  no effective lendborrow value 360 day convention"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"incFeesInResp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"include all estimated responder fees in final response price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"roundRule"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RoundRule",children:"enum - RoundRule"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openExpiryMoney"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"remaining synthetics 100 share units available for responding day total this tickerexpiry all strikes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openTickerMoney"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"remaining synthetics 100 share units available for responding day total this ticker all strikes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cumFillMoney"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"cumulative fill money creditdebit this expiry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"avgFillRate"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"avg fill effective moneyRate this expiry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isDivControlDisabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{children:"yes if dividend control above is triggered"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iDays"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"iDays  effective interest days SR supplied"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iYears"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"iYears  iDays  3600"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNotices"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number of notices that match response bucket"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeSR"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number of SR auction numNotices"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeAMEX"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeBATS"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeBOX"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeCBOE"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeC2"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeEDGO"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeEMLD"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeGMNI"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeISE"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeMCRY"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeMEMX"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeMIAX"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeMPRL"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeNYSE"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeNQBX"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeNSDQ"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticePHLX"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticeSPHR"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numDisabled"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number skipped from isDisabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numListedFlexMiss"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number skipped from flexlisted filter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numNoticePriceMiss"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number skipped from limit price filter exchange only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numAggSizeLimit"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number skipped from aggregate contractvega size limit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numRiskGroupLimit"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number skipped from riskGroup limits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numResponses"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"number of response attempts number of parentOrdersNoticeExecReports"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numFullSize"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numAllocSize"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numPriceMiss"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numTooLate"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numOtherMiss"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numDidNotTrade"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"VARCHAR(24)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_tk"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_yr"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_mn"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_dy"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_at"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ekey_ts"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"respSide"}),(0,s.jsx)(n.td,{children:"9"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgResponderMarkupBX` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'auction responder side (your side) (Buy = Buy/Borrow Cash)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this auto-responder record is disabled',\n    `expiryMoneyAvail` BIGINT NOT NULL DEFAULT 0 COMMENT 'money available for responding (day total; this ticker/expiry; all strikes) [note: money = (hiStrike - loStrike) * pointValue per BX spread]',\n    `tickerMoneyAvail` BIGINT NOT NULL DEFAULT 0 COMMENT 'money available for responding (day total; this ticker; all strikes)',\n    `transactFee` DOUBLE NOT NULL DEFAULT 0,\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT '0.00 = no effective lend/borrow value (360 day convention)',\n    `incFeesInResp` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'include all estimated responder fees in final response price',\n    `roundRule` ENUM('None','Exact','Fuzzy') NOT NULL DEFAULT 'None',\n    `openExpiryMoney` INT NOT NULL DEFAULT 0 COMMENT 'remaining synthetics (100 share units) available for responding (day total; this ticker/expiry; all strikes)',\n    `openTickerMoney` INT NOT NULL DEFAULT 0 COMMENT 'remaining synthetics (100 share units) available for responding (day total; this ticker; all strikes)',\n    `cumFillMoney` DOUBLE NOT NULL DEFAULT 0 COMMENT 'cumulative fill money (credit/debit) (this expiry)',\n    `avgFillRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'avg fill effective moneyRate (this expiry)',\n    `isDivControlDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'yes if dividend control above is triggered',\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `numNotices` BIGINT NOT NULL DEFAULT 0 COMMENT 'number of notices that match response bucket',\n    `numNoticeSR` BIGINT NOT NULL DEFAULT 0 COMMENT 'number of SR auction numNotices',\n    `numNoticeAMEX` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeBATS` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeBOX` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeCBOE` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeC2` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeEDGO` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeEMLD` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeGMNI` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeISE` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeMCRY` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeMEMX` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeMIAX` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeMPRL` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeNYSE` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeNQBX` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeNSDQ` BIGINT NOT NULL DEFAULT 0,\n    `numNoticePHLX` BIGINT NOT NULL DEFAULT 0,\n    `numNoticeSPHR` BIGINT NOT NULL DEFAULT 0,\n    `numDisabled` BIGINT NOT NULL DEFAULT 0 COMMENT 'number skipped from isDisabled',\n    `numListedFlexMiss` BIGINT NOT NULL DEFAULT 0 COMMENT 'number skipped from flex/listed filter',\n    `numNoticePriceMiss` BIGINT NOT NULL DEFAULT 0 COMMENT 'number skipped from limit price filter (exchange only)',\n    `numAggSizeLimit` BIGINT NOT NULL DEFAULT 0 COMMENT 'number skipped from aggregate contract/vega size limit',\n    `numRiskGroupLimit` BIGINT NOT NULL DEFAULT 0 COMMENT 'number skipped from riskGroup limits',\n    `numResponses` BIGINT NOT NULL DEFAULT 0 COMMENT 'number of response attempts (number of parentOrders/NoticeExecReports)',\n    `numFullSize` BIGINT NOT NULL DEFAULT 0,\n    `numAllocSize` BIGINT NOT NULL DEFAULT 0,\n    `numPriceMiss` BIGINT NOT NULL DEFAULT 0,\n    `numTooLate` BIGINT NOT NULL DEFAULT 0,\n    `numOtherMiss` BIGINT NOT NULL DEFAULT 0,\n    `numDidNotTrade` BIGINT NOT NULL DEFAULT 0,\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`respSide`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `respSide`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `isDisabled`,\n    `expiryMoneyAvail`,\n    `tickerMoneyAvail`,\n    `transactFee`,\n    `moneyRate`,\n    `incFeesInResp`,\n    `roundRule`,\n    `openExpiryMoney`,\n    `openTickerMoney`,\n    `cumFillMoney`,\n    `avgFillRate`,\n    `isDivControlDisabled`,\n    `iDays`,\n    `iYears`,\n    `numNotices`,\n    `numNoticeSR`,\n    `numNoticeAMEX`,\n    `numNoticeBATS`,\n    `numNoticeBOX`,\n    `numNoticeCBOE`,\n    `numNoticeC2`,\n    `numNoticeEDGO`,\n    `numNoticeEMLD`,\n    `numNoticeGMNI`,\n    `numNoticeISE`,\n    `numNoticeMCRY`,\n    `numNoticeMEMX`,\n    `numNoticeMIAX`,\n    `numNoticeMPRL`,\n    `numNoticeNYSE`,\n    `numNoticeNQBX`,\n    `numNoticeNSDQ`,\n    `numNoticePHLX`,\n    `numNoticeSPHR`,\n    `numDisabled`,\n    `numListedFlexMiss`,\n    `numNoticePriceMiss`,\n    `numAggSizeLimit`,\n    `numRiskGroupLimit`,\n    `numResponses`,\n    `numFullSize`,\n    `numAllocSize`,\n    `numPriceMiss`,\n    `numTooLate`,\n    `numOtherMiss`,\n    `numDidNotTrade`,\n    `timestamp`\nFROM `SRTrade`.`MsgResponderMarkupBX`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgResponderMarkupBX` \nSET\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled` = 'None',\n    /* Replace with a BIGINT */ \n    `expiryMoneyAvail` = 1234567890,\n    /* Replace with a BIGINT */ \n    `tickerMoneyAvail` = 1234567890,\n    /* Replace with a DOUBLE */ \n    `transactFee` = 4.56,\n    /* Replace with a DOUBLE */ \n    `moneyRate` = 4.56,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp` = 'None',\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule` = 'None',\n    /* Replace with a INT */ \n    `openExpiryMoney` = 5,\n    /* Replace with a INT */ \n    `openTickerMoney` = 5,\n    /* Replace with a DOUBLE */ \n    `cumFillMoney` = 4.56,\n    /* Replace with a DOUBLE */ \n    `avgFillRate` = 4.56,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDivControlDisabled` = 'None',\n    /* Replace with a DOUBLE */ \n    `iDays` = 4.56,\n    /* Replace with a DOUBLE */ \n    `iYears` = 4.56,\n    /* Replace with a BIGINT */ \n    `numNotices` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeSR` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeAMEX` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeBATS` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeBOX` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeCBOE` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeC2` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeEDGO` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeEMLD` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeGMNI` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeISE` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeMCRY` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeMEMX` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeMIAX` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeMPRL` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeNYSE` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeNQBX` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeNSDQ` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticePHLX` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticeSPHR` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numDisabled` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numListedFlexMiss` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numNoticePriceMiss` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numAggSizeLimit` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numRiskGroupLimit` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numResponses` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numFullSize` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numAllocSize` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numPriceMiss` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numTooLate` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numOtherMiss` = 1234567890,\n    /* Replace with a BIGINT */ \n    `numDidNotTrade` = 1234567890,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgResponderMarkupBX`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy`,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled`,\n    /* Replace with a BIGINT */ \n    `expiryMoneyAvail`,\n    /* Replace with a BIGINT */ \n    `tickerMoneyAvail`,\n    /* Replace with a DOUBLE */ \n    `transactFee`,\n    /* Replace with a DOUBLE */ \n    `moneyRate`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp`,\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule`,\n    /* Replace with a INT */ \n    `openExpiryMoney`,\n    /* Replace with a INT */ \n    `openTickerMoney`,\n    /* Replace with a DOUBLE */ \n    `cumFillMoney`,\n    /* Replace with a DOUBLE */ \n    `avgFillRate`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDivControlDisabled`,\n    /* Replace with a DOUBLE */ \n    `iDays`,\n    /* Replace with a DOUBLE */ \n    `iYears`,\n    /* Replace with a BIGINT */ \n    `numNotices`,\n    /* Replace with a BIGINT */ \n    `numNoticeSR`,\n    /* Replace with a BIGINT */ \n    `numNoticeAMEX`,\n    /* Replace with a BIGINT */ \n    `numNoticeBATS`,\n    /* Replace with a BIGINT */ \n    `numNoticeBOX`,\n    /* Replace with a BIGINT */ \n    `numNoticeCBOE`,\n    /* Replace with a BIGINT */ \n    `numNoticeC2`,\n    /* Replace with a BIGINT */ \n    `numNoticeEDGO`,\n    /* Replace with a BIGINT */ \n    `numNoticeEMLD`,\n    /* Replace with a BIGINT */ \n    `numNoticeGMNI`,\n    /* Replace with a BIGINT */ \n    `numNoticeISE`,\n    /* Replace with a BIGINT */ \n    `numNoticeMCRY`,\n    /* Replace with a BIGINT */ \n    `numNoticeMEMX`,\n    /* Replace with a BIGINT */ \n    `numNoticeMIAX`,\n    /* Replace with a BIGINT */ \n    `numNoticeMPRL`,\n    /* Replace with a BIGINT */ \n    `numNoticeNYSE`,\n    /* Replace with a BIGINT */ \n    `numNoticeNQBX`,\n    /* Replace with a BIGINT */ \n    `numNoticeNSDQ`,\n    /* Replace with a BIGINT */ \n    `numNoticePHLX`,\n    /* Replace with a BIGINT */ \n    `numNoticeSPHR`,\n    /* Replace with a BIGINT */ \n    `numDisabled`,\n    /* Replace with a BIGINT */ \n    `numListedFlexMiss`,\n    /* Replace with a BIGINT */ \n    `numNoticePriceMiss`,\n    /* Replace with a BIGINT */ \n    `numAggSizeLimit`,\n    /* Replace with a BIGINT */ \n    `numRiskGroupLimit`,\n    /* Replace with a BIGINT */ \n    `numResponses`,\n    /* Replace with a BIGINT */ \n    `numFullSize`,\n    /* Replace with a BIGINT */ \n    `numAllocSize`,\n    /* Replace with a BIGINT */ \n    `numPriceMiss`,\n    /* Replace with a BIGINT */ \n    `numTooLate`,\n    /* Replace with a BIGINT */ \n    `numOtherMiss`,\n    /* Replace with a BIGINT */ \n    `numDidNotTrade`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_ekey_tk',\n    123,\n    1,\n    1,\n    'None',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    1234567890,\n    1234567890,\n    4.56,\n    4.56,\n    'None',\n    'None',\n    5,\n    5,\n    4.56,\n    4.56,\n    'None',\n    4.56,\n    4.56,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    1234567890,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgResponderMarkupBX` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='ResponderMarkupBX' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},91503:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var t=i(75271);let s={},d=t.createContext(s);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);