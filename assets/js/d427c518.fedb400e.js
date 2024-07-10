"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56157],{86992:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>x});var r=d(74848),n=d(28453);const t={},c=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SpanRiskCalculator/SpanRiskCalculator",title:"SpanRiskCalculator",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpanRiskCalculator/SpanRiskCalculator.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SpanRiskCalculator",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpanRiskCalculator/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpanRiskCalculator/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SkewBasisCurveV4",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4/"},next:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadCloseMark/"}},i={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/srse-calculators/SpanRiskCalculator",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Default Value"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_yr"}),(0,r.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(s.td,{children:"PRI, SEC"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_mn"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{children:"PRI, SEC"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_dy"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{children:"PRI, SEC"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_xx"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_cp"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'Call'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vol"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"volSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uPrc"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"underlying price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uPrcSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"years"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"yearstoexpiration default uses SR volatility time value"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"yearsSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sdiv"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"continuous stock dividend using for pricing"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sdivSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rate"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rateSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"None"}),(0,r.jsx)(s.td,{children:"exercise type of the option American or European"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exTypeSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"effStrike"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"effective strike used for pricing default is okeyStrike"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"effStrikeSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"symRatio"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"underlying symbol ratio for nonstandard options discrete dividend will be scaled by this factor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"symRatioSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"divString"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"discrete dividend string   yearsToExpiry years1amt1 years2amt2  or  1 date1amt1 date2amt2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"divSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modelType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CalcModelType",children:"enum - CalcModelType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"None"}),(0,r.jsx)(s.td,{children:"LogNormalExact LogNormalApprox NormalExact NormalApprox"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modelTypeSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"calcPrecision"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CalcPrecision",children:"enum - CalcPrecision"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Low"}),(0,r.jsx)(s.td,{children:"numerical precision  of steps if a numerical method is used  more steps will be slower to calculate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pointValue"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"value of a point in the underlying product"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pointValueSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Default"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prcSpanUp"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prcSpanDn"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prcSpanType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/PrcSpanType",children:"enum - PrcSpanType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Exch"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"volSpan"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"volSpanType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/VolSpanType",children:"enum - VolSpanType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Exch"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"spanCalcType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpanCalcType",children:"enum - SpanCalcType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"PnL"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeDeltaNeutral"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"No"}),(0,r.jsx)(s.td,{children:"all option will be assumed hedged delta neutral stock and futures will not have slide values"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"adjYears"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"year adjustment effYears  years  adjYears 1  no limit"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxYears"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"upper bound for years effYears  MINmaxYears effYears 1  no limit"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span01"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span1 uPrcunch volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span02"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span2 uPrcunch voldown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span03"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span3 uPrc33 volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span04"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span4 uPrc33 voldn"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span05"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span5 uPrc33 volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span06"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span6 uPrc33 voldown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span07"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span7 uPrc67 volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span08"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span8 uPrc67 voldown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span09"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span9 uPrc67 volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span10"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span10 uPrc67 voldown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span11"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span11 uPrc100 volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span12"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span12 uPrc100 voldown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span13"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span13 uPrc100 volup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span14"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span14 uPrc100 voldown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span15"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span15 uPrc300 price slide  033"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"span16"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"span16 uPrc300 price slide  033"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"error"}),(0,r.jsx)(s.td,{children:"VARCHAR(32)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"calculation error"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"2000-01-01"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_tk"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_yr"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_mn"}),(0,r.jsx)(s.td,{children:"3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_dy"}),(0,r.jsx)(s.td,{children:"4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_xx"}),(0,r.jsx)(s.td,{children:"5"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_cp"}),(0,r.jsx)(s.td,{children:"6"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_at"}),(0,r.jsx)(s.td,{children:"7"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_ts"}),(0,r.jsx)(s.td,{children:"8"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:"9"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"10"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_yr"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_mn"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_dy"}),(0,r.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgSpanRiskCalculator` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `vol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'volatility',\n    `volSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlying price',\n    `uPrcSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `years` DOUBLE NOT NULL DEFAULT 0 COMMENT 'years-to-expiration (default uses SR volatility time value)',\n    `yearsSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `sdiv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'continuous stock dividend using for pricing',\n    `sdivSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `rate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'discount rate used for pricing',\n    `rateSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `exType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None' COMMENT 'exercise type of the option (American or European)',\n    `exTypeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `effStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective strike used for pricing (default is okey.Strike)',\n    `effStrikeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `symRatio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlying symbol ratio (for non-standard options); discrete dividend will be scaled by this factor',\n    `symRatioSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `divString` TINYTEXT NOT NULL DEFAULT '' COMMENT 'discrete dividend string  [ yearsToExpiry, years1:amt1, years2:amt2, ...] or [ -1, date1:amt1, date2:amt2, ... ]',\n    `divSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `modelType` ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') NOT NULL DEFAULT 'None' COMMENT 'LogNormalExact, LogNormalApprox, NormalExact, NormalApprox',\n    `modelTypeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `calcPrecision` ENUM('None','Low','Normal','High','Custom') NOT NULL DEFAULT 'Low' COMMENT 'numerical precision (# of steps) if a numerical method is used;  [more steps will be slower to calculate]',\n    `pointValue` DOUBLE NOT NULL DEFAULT 0 COMMENT '$ value of a point in the underlying product',\n    `pointValueSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `prcSpanUp` FLOAT NOT NULL DEFAULT 0,\n    `prcSpanDn` FLOAT NOT NULL DEFAULT 0,\n    `prcSpanType` ENUM('None','Pct','Log','Pts','SD1d','Exch') NOT NULL DEFAULT 'Exch',\n    `volSpan` FLOAT NOT NULL DEFAULT 0,\n    `volSpanType` ENUM('None','Pct','Log','Pts','Abs','vAnn','Exch') NOT NULL DEFAULT 'Exch',\n    `spanCalcType` ENUM('PnL','Delta','Vega','WVega','TVega','WtVega','Gamma','Theta') NOT NULL DEFAULT 'PnL',\n    `hedgeDeltaNeutral` ENUM('None','Yes','No') NOT NULL DEFAULT 'No' COMMENT 'all option will be assumed hedged delta neutral, stock and futures will not have slide values',\n    `adjYears` DOUBLE NOT NULL DEFAULT -1 COMMENT 'year adjustment: effYears = years + adjYears (-1 = no limit)',\n    `maxYears` DOUBLE NOT NULL DEFAULT -1 COMMENT 'upper bound for years: effYears = MIN(maxYears, effYears) (-1 = no limit)',\n    `span01` FLOAT NOT NULL DEFAULT 0 COMMENT 'span1: uPrc=unch, vol=up',\n    `span02` FLOAT NOT NULL DEFAULT 0 COMMENT 'span2: uPrc=unch, vol=down',\n    `span03` FLOAT NOT NULL DEFAULT 0 COMMENT 'span3: uPrc=+33%, vol=up',\n    `span04` FLOAT NOT NULL DEFAULT 0 COMMENT 'span4: uPrc=+33%, vol=dn',\n    `span05` FLOAT NOT NULL DEFAULT 0 COMMENT 'span5: uPrc=-33%, vol=up',\n    `span06` FLOAT NOT NULL DEFAULT 0 COMMENT 'span6: uPrc=-33%, vol=down',\n    `span07` FLOAT NOT NULL DEFAULT 0 COMMENT 'span7: uPrc=+67%, vol=up',\n    `span08` FLOAT NOT NULL DEFAULT 0 COMMENT 'span8: uPrc=+67%, vol=down',\n    `span09` FLOAT NOT NULL DEFAULT 0 COMMENT 'span9: uPrc=-67%, vol=up',\n    `span10` FLOAT NOT NULL DEFAULT 0 COMMENT 'span10: uPrc=-67%, vol=down',\n    `span11` FLOAT NOT NULL DEFAULT 0 COMMENT 'span11: uPrc=+100%, vol=up',\n    `span12` FLOAT NOT NULL DEFAULT 0 COMMENT 'span12: uPrc=+100%, vol=down',\n    `span13` FLOAT NOT NULL DEFAULT 0 COMMENT 'span13: uPrc=-100%, vol=up',\n    `span14` FLOAT NOT NULL DEFAULT 0 COMMENT 'span14: uPrc=-100%, vol=down',\n    `span15` FLOAT NOT NULL DEFAULT 0 COMMENT 'span15: uPrc=+300%; price slide * 0.33',\n    `span16` FLOAT NOT NULL DEFAULT 0 COMMENT 'span16: uPrc=-300%, price slide * 0.33',\n    `error` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'calculation error',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '2000-01-01',\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`userName`),\n    KEY `ExpirationIndex` (`secKey_yr`,`secKey_mn`,`secKey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table allows custom span risk calculations based on either user or SR supplied input values.';\n\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>c,x:()=>l});var r=d(96540);const n={},t=r.createContext(n);function c(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);