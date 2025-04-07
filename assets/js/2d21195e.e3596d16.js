"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["60853"],{33363:function(e,t,i){i.r(t),i.d(t,{default:()=>x,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/SpdrRiskGroupControl","title":"SpdrRiskGroupControl","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/SpdrRiskGroupControl.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupControl/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SpdrRiskGroupCancel","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRiskGroupCancel/"},"next":{"title":"SpdrRouteCancel","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrRouteCancel/"}}'),a=i("52676"),r=i("91503");let s={},l=void 0,c={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function m(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"../../../Topics/risk-control/SpdrRiskGroupControl",children:"V8 Message Definiton"})}),"\n",(0,a.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Attribute"}),(0,a.jsx)(t.th,{children:"Value"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Topic"}),(0,a.jsx)(t.td,{children:"4535-risk-control"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"MLink Token"}),(0,a.jsx)(t.td,{children:"SystemData"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Product"}),(0,a.jsx)(t.td,{children:"SRTrade"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accessType"}),(0,a.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Key"}),(0,a.jsx)(t.th,{children:"Default Value"}),(0,a.jsx)(t.th,{children:"Comment"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"riskGroupId"}),(0,a.jsx)(t.td,{children:"CHAR(19)"}),(0,a.jsx)(t.td,{children:"PRI"}),(0,a.jsx)(t.td,{children:"'0000-0000-0000-0000'"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accnt"}),(0,a.jsx)(t.td,{children:"VARCHAR(16)"}),(0,a.jsx)(t.td,{children:"PRI"}),(0,a.jsx)(t.td,{children:"''"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"riskFirm"}),(0,a.jsx)(t.td,{children:"VARCHAR(16)"}),(0,a.jsx)(t.td,{children:"PRI"}),(0,a.jsx)(t.td,{children:"''"}),(0,a.jsx)(t.td,{children:"SR client firm"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"sysEnvironment"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"'None'"}),(0,a.jsx)(t.td,{children:"original source sys environment Stable Current etc"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"runStatus"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"'None'"}),(0,a.jsx)(t.td,{children:"original source run status ProdBeta"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"isDisabled"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"'None'"}),(0,a.jsx)(t.td,{children:"will disable all trading in this risk group parent orders will cancel existing child orders and suspend new child orders"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"expDayWtVegaOffset"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day wtVega offset target"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxExpDayWtVegaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max accntexpiration day time weighted vega long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxExpDayWtVegaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max accntexpiration day time weighted vega short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxExpDayRMetric6Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctexpiration day rMetric6 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxExpDayRMetric6Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctexpiration day rMetric6 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symDayDDeltaOffset"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day delta offset target"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayDDeltaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day delta long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayDDeltaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day delta short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symDayVegaOffset"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day vega offset target"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayVegaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day vega long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayVegaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day vega short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symDayWtVegaOffset"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day wtVega offset target"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayWtVegaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day time weighted vega long positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayWtVegaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day time weighted vega short positive number1no limitrisk limit  max limit  current net counter  offset"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayRMetric7Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day rMetric7 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxSymDayRMetric7Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol day rMetric7 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayContractsLn"}),(0,a.jsx)(t.td,{children:"INT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day opt contracts long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayContractsSh"}),(0,a.jsx)(t.td,{children:"INT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day opt contracts short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayContractsAbs"}),(0,a.jsx)(t.td,{children:"INT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day opt contracts abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayDDeltaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day delta long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayDDeltaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day delta short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayVegaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day vega long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayVegaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day vega short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayVegaAbs"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day vega abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"grpDayVegaRatio"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"1.0"}),(0,a.jsx)(t.td,{children:"target bot  sld ratio eg ratio20 means that neutral is bot vega  2x sld vega"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric1Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric1 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric1Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric1 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric1Abs"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric1 abs positive number1no limitrisk limit  max limit  abscurrent net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"grpDayRMetric1Ratio"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"1.0"}),(0,a.jsx)(t.td,{children:"target bot  sld ratio eg ratio05 means that neutral is bot rMetric1  05x sld rMetric1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric2Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric2 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric2Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric2 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric3Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric3 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric3Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric3 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric4Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric4 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric4Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric4 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric5Ln"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric5 long positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"maxGrpDayRMetric5Sh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctriskGroup day rMetric5 short positive number1no limitrisk limit  max limit  current net counter"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accEmaCxlDDeltaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acct 60s EMA delta long positive number  0 is no limit will immediately cxl all option orders in a symbol if any order in the symbol breaches"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accEmaCxlDDeltaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acct 60s EMA delta short positive number  0 is no limit"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accEmaCxlWtVegaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acct 60s EMA wtVega long positive number  0 is no limit will immediately cxl all option orders in a symbol if any order in the symbol breaches"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accEmaCxlWtVegaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acct 60s EMA wtVega short positive number  0 is no limit"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symEmaCxlDDeltaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol 60s EMA delta long positive number  0 is no limit will immediately cxl all option orders in a symbol if any order in the symbol breaches"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symEmaCxlDDeltaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol 60s EMA delta short positive number  0 is no limit"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symEmaCxlWtVegaLn"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol 60s EMA wtVega long positive number  0 is no limit will immediately cxl all option orders in a symbol if any order in the symbol breaches"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symEmaCxlWtVegaSh"}),(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"max acctsymbol 60s EMA wtVega short positive number  0 is no limit"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"modifiedBy"}),(0,a.jsx)(t.td,{children:"VARCHAR(24)"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"''"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"modifiedIn"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"'None'"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"timestamp"}),(0,a.jsx)(t.td,{children:"DATETIME(6)"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Sequence"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"riskGroupId"}),(0,a.jsx)(t.td,{children:"1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"accnt"}),(0,a.jsx)(t.td,{children:"2"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"riskFirm"}),(0,a.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRRiskGroupControl` (\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'will disable all trading in this risk group (parent orders will cancel existing child orders and suspend new child orders)',\n    `expDayWtVegaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day wtVega offset (target)',\n    `maxExpDayWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max accnt+expiration day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxExpDayWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max accnt+expiration day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `maxExpDayRMetric6Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+expiration day rMetric6 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxExpDayRMetric6Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+expiration day rMetric6 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `symDayDDeltaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day $delta offset (target)',\n    `maxSymDayDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day $delta long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day $delta short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `symDayVegaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day vega offset (target)',\n    `maxSymDayVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `symDayWtVegaOffset` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day wtVega offset (target)',\n    `maxSymDayWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day (time weighted) vega long (positive number;-1=no limit);risk limit = max limit - (current net counter - offset)',\n    `maxSymDayWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day (time weighted) vega short (positive number;-1=no limit);risk limit = max limit + (current net counter - offset)',\n    `maxSymDayRMetric7Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day rMetric7 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxSymDayRMetric7Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol day rMetric7 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayContractsLn` INT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day opt contracts long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayContractsSh` INT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day opt contracts short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayContractsAbs` INT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day opt contracts abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `maxGrpDayDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day $delta long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day $delta short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day vega long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day vega short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayVegaAbs` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day vega abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `grpDayVegaRatio` FLOAT NOT NULL DEFAULT 1.0 COMMENT 'target bot / sld ratio (eg ratio=2.0 means that neutral is bot vega = 2x sld vega)',\n    `maxGrpDayRMetric1Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric1 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric1Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric1 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric1Abs` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric1 abs (positive number;-1=no limit);risk limit = max limit - abs(current net counter)',\n    `grpDayRMetric1Ratio` FLOAT NOT NULL DEFAULT 1.0 COMMENT 'target bot / sld ratio (eg ratio=0.5 means that neutral is bot rMetric1 = 0.5x sld rMetric1)',\n    `maxGrpDayRMetric2Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric2 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric2Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric2 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric3Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric3 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric3Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric3 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric4Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric4 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric4Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric4 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `maxGrpDayRMetric5Ln` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric5 long (positive number;-1=no limit);risk limit = max limit - current net counter',\n    `maxGrpDayRMetric5Sh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+riskGroup day rMetric5 short (positive number;-1=no limit);risk limit = max limit + current net counter',\n    `accEmaCxlDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `accEmaCxlDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA $delta short (positive number; <= 0 is no limit)',\n    `accEmaCxlWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `accEmaCxlWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct 60s EMA wtVega short (positive number; <= 0 is no limit)',\n    `symEmaCxlDDeltaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA $delta long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `symEmaCxlDDeltaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA $delta short (positive number; <= 0 is no limit)',\n    `symEmaCxlWtVegaLn` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA wtVega long (positive number; <= 0 is no limit) [will immediately cxl all option orders in a symbol if any order in the symbol breaches]',\n    `symEmaCxlWtVegaSh` FLOAT NOT NULL DEFAULT -1 COMMENT 'max acct+symbol 60s EMA wtVega short (positive number; <= 0 is no limit)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`riskGroupId`,`accnt`,`riskFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,a.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `riskGroupId`,\n    `accnt`,\n    `riskFirm`,\n    `sysEnvironment`,\n    `runStatus`,\n    `isDisabled`,\n    `expDayWtVegaOffset`,\n    `maxExpDayWtVegaLn`,\n    `maxExpDayWtVegaSh`,\n    `maxExpDayRMetric6Ln`,\n    `maxExpDayRMetric6Sh`,\n    `symDayDDeltaOffset`,\n    `maxSymDayDDeltaLn`,\n    `maxSymDayDDeltaSh`,\n    `symDayVegaOffset`,\n    `maxSymDayVegaLn`,\n    `maxSymDayVegaSh`,\n    `symDayWtVegaOffset`,\n    `maxSymDayWtVegaLn`,\n    `maxSymDayWtVegaSh`,\n    `maxSymDayRMetric7Ln`,\n    `maxSymDayRMetric7Sh`,\n    `maxGrpDayContractsLn`,\n    `maxGrpDayContractsSh`,\n    `maxGrpDayContractsAbs`,\n    `maxGrpDayDDeltaLn`,\n    `maxGrpDayDDeltaSh`,\n    `maxGrpDayVegaLn`,\n    `maxGrpDayVegaSh`,\n    `maxGrpDayVegaAbs`,\n    `grpDayVegaRatio`,\n    `maxGrpDayRMetric1Ln`,\n    `maxGrpDayRMetric1Sh`,\n    `maxGrpDayRMetric1Abs`,\n    `grpDayRMetric1Ratio`,\n    `maxGrpDayRMetric2Ln`,\n    `maxGrpDayRMetric2Sh`,\n    `maxGrpDayRMetric3Ln`,\n    `maxGrpDayRMetric3Sh`,\n    `maxGrpDayRMetric4Ln`,\n    `maxGrpDayRMetric4Sh`,\n    `maxGrpDayRMetric5Ln`,\n    `maxGrpDayRMetric5Sh`,\n    `accEmaCxlDDeltaLn`,\n    `accEmaCxlDDeltaSh`,\n    `accEmaCxlWtVegaLn`,\n    `accEmaCxlWtVegaSh`,\n    `symEmaCxlDDeltaLn`,\n    `symEmaCxlDDeltaSh`,\n    `symEmaCxlWtVegaLn`,\n    `symEmaCxlWtVegaSh`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRRiskGroupControl`\nWHERE \n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm';\n"})}),"\n",(0,a.jsx)(t.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgSRRiskGroupControl` \nSET\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `sysEnvironment` = 'None',\n    /* Replace with a ENUM('None','Prod','Beta','UAT','SysTest') */ \n    `runStatus` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled` = 'None',\n    /* Replace with a FLOAT */\n    `expDayWtVegaOffset` = 1.23,\n    /* Replace with a FLOAT */\n    `maxExpDayWtVegaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxExpDayWtVegaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxExpDayRMetric6Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxExpDayRMetric6Sh` = 1.23,\n    /* Replace with a FLOAT */\n    `symDayDDeltaOffset` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayDDeltaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayDDeltaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `symDayVegaOffset` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayVegaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayVegaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `symDayWtVegaOffset` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayWtVegaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayWtVegaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayRMetric7Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxSymDayRMetric7Sh` = 1.23,\n    /* Replace with a INT */\n    `maxGrpDayContractsLn` = 5,\n    /* Replace with a INT */\n    `maxGrpDayContractsSh` = 5,\n    /* Replace with a INT */\n    `maxGrpDayContractsAbs` = 5,\n    /* Replace with a FLOAT */\n    `maxGrpDayDDeltaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayDDeltaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayVegaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayVegaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayVegaAbs` = 1.23,\n    /* Replace with a FLOAT */\n    `grpDayVegaRatio` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric1Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric1Sh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric1Abs` = 1.23,\n    /* Replace with a FLOAT */\n    `grpDayRMetric1Ratio` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric2Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric2Sh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric3Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric3Sh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric4Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric4Sh` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric5Ln` = 1.23,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric5Sh` = 1.23,\n    /* Replace with a FLOAT */\n    `accEmaCxlDDeltaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `accEmaCxlDDeltaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `accEmaCxlWtVegaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `accEmaCxlWtVegaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `symEmaCxlDDeltaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `symEmaCxlDDeltaSh` = 1.23,\n    /* Replace with a FLOAT */\n    `symEmaCxlWtVegaLn` = 1.23,\n    /* Replace with a FLOAT */\n    `symEmaCxlWtVegaSh` = 1.23,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm';\n"})}),"\n",(0,a.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgSRRiskGroupControl`(\n    /* Replace with a CHAR(19) */\n    `riskGroupId`,\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm`,\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `sysEnvironment`,\n    /* Replace with a ENUM('None','Prod','Beta','UAT','SysTest') */ \n    `runStatus`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled`,\n    /* Replace with a FLOAT */\n    `expDayWtVegaOffset`,\n    /* Replace with a FLOAT */\n    `maxExpDayWtVegaLn`,\n    /* Replace with a FLOAT */\n    `maxExpDayWtVegaSh`,\n    /* Replace with a FLOAT */\n    `maxExpDayRMetric6Ln`,\n    /* Replace with a FLOAT */\n    `maxExpDayRMetric6Sh`,\n    /* Replace with a FLOAT */\n    `symDayDDeltaOffset`,\n    /* Replace with a FLOAT */\n    `maxSymDayDDeltaLn`,\n    /* Replace with a FLOAT */\n    `maxSymDayDDeltaSh`,\n    /* Replace with a FLOAT */\n    `symDayVegaOffset`,\n    /* Replace with a FLOAT */\n    `maxSymDayVegaLn`,\n    /* Replace with a FLOAT */\n    `maxSymDayVegaSh`,\n    /* Replace with a FLOAT */\n    `symDayWtVegaOffset`,\n    /* Replace with a FLOAT */\n    `maxSymDayWtVegaLn`,\n    /* Replace with a FLOAT */\n    `maxSymDayWtVegaSh`,\n    /* Replace with a FLOAT */\n    `maxSymDayRMetric7Ln`,\n    /* Replace with a FLOAT */\n    `maxSymDayRMetric7Sh`,\n    /* Replace with a INT */\n    `maxGrpDayContractsLn`,\n    /* Replace with a INT */\n    `maxGrpDayContractsSh`,\n    /* Replace with a INT */\n    `maxGrpDayContractsAbs`,\n    /* Replace with a FLOAT */\n    `maxGrpDayDDeltaLn`,\n    /* Replace with a FLOAT */\n    `maxGrpDayDDeltaSh`,\n    /* Replace with a FLOAT */\n    `maxGrpDayVegaLn`,\n    /* Replace with a FLOAT */\n    `maxGrpDayVegaSh`,\n    /* Replace with a FLOAT */\n    `maxGrpDayVegaAbs`,\n    /* Replace with a FLOAT */\n    `grpDayVegaRatio`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric1Ln`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric1Sh`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric1Abs`,\n    /* Replace with a FLOAT */\n    `grpDayRMetric1Ratio`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric2Ln`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric2Sh`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric3Ln`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric3Sh`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric4Ln`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric4Sh`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric5Ln`,\n    /* Replace with a FLOAT */\n    `maxGrpDayRMetric5Sh`,\n    /* Replace with a FLOAT */\n    `accEmaCxlDDeltaLn`,\n    /* Replace with a FLOAT */\n    `accEmaCxlDDeltaSh`,\n    /* Replace with a FLOAT */\n    `accEmaCxlWtVegaLn`,\n    /* Replace with a FLOAT */\n    `accEmaCxlWtVegaSh`,\n    /* Replace with a FLOAT */\n    `symEmaCxlDDeltaLn`,\n    /* Replace with a FLOAT */\n    `symEmaCxlDDeltaSh`,\n    /* Replace with a FLOAT */\n    `symEmaCxlWtVegaLn`,\n    /* Replace with a FLOAT */\n    `symEmaCxlWtVegaSh`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_riskGroupId',\n    'Example_accnt',\n    'Example_riskFirm',\n    'None',\n    'None',\n    'None',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    5,\n    5,\n    5,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,a.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgSRRiskGroupControl` \nWHERE\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `riskFirm` = 'Example_riskFirm';\n"})}),"\n",(0,a.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrRiskGroupControl' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},91503:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return s}});var n=i(75271);let a={},r=n.createContext(a);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);