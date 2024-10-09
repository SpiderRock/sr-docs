"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[37379],{61446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var d=t(74848),i=t(28453);const s={},r=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExpSurface/SpdrTheoExpSurface",title:"SpdrTheoExpSurface",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExpSurface/SpdrTheoExpSurface.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExpSurface",slug:"/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExpSurface/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExpSurface/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrTheoExp2PtCurve",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTheo/SpdrTheoExp2PtCurve/"},next:{title:"TheoSurfacePerf",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTheo/TheoSurfacePerf/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"../../../Topics/client-theos/SpdrTheoExpSurface",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(n.p,{children:"SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.\\nSurface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.\\nSee the technical note on client supplied theoretical surfaces for more details."}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Topic"}),(0,d.jsx)(n.td,{children:"1945-client-theos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MLink Token"}),(0,d.jsx)(n.td,{children:"SystemData"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Product"}),(0,d.jsx)(n.td,{children:"SRTheo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accessType"}),(0,d.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_yr"}),(0,d.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_mn"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_dy"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"theoModel"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientFirm"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"client firm this theo model is associated with controls visibility"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"skewFunc"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/SkewFunc",children:"enum - SkewFunc"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"volTimeUnits"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/VolTimeUnits",children:"enum - VolTimeUnits"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'Default'"}),(0,d.jsx)(n.td,{children:"default uses the SR native time metric trading minutes V6 is a prior SR metric trading days"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"uPrcRefRule"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/uPrcRefRule",children:"enum - uPrcRefRule"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'NbboMid'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"refUPrc"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-1"}),(0,d.jsx)(n.td,{children:"1  use SR uPrc  record insert"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"refUPrcWeight"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"w 01adjRefUPrc  w  refUPrc  1  w  uPrcnote w1 implies sticky strike behaviorw0 implies sticky delta behavior"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"refSRAtm"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-1"}),(0,d.jsx)(n.td,{children:"1  use SR surface atm  record insert"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"refSRAtmWeight"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"w 01theoVolAdj  theoVol  tvSlope  uPrc  refUPrc  w  liveSRAtm  refSRAtm"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramA"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"param A  J are inputs to the skewFunc model selected above"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramB"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramC"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramD"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramE"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramF"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramG"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramH"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramI"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"paramJ"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"theoVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"theo volatility  hypothetical atm strike note hypothetical atm strike depends on the definition of xAxis implied by the skewFunc modelusually the strike where xAxis  0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bOpnVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"buy open vol"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bClsVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"buy close vol"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sOpnVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"sell open vol"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sClsVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"sell close vol"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bOpnEdge"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"edge spread to open when buying"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bClsEdge"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"edge spread to close when buying"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sOpnEdge"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"edge spread to open when selling"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sClsEdge"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"edge spread to close when selling"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"buySellConvention"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/BuySellConvention",children:"enum - BuySellConvention"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lnDDiv"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-99"}),(0,d.jsx)(n.td,{children:"depricated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"shDDiv"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-99"}),(0,d.jsx)(n.td,{children:"depricated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lnSDiv"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-99"}),(0,d.jsx)(n.td,{children:"long sdiv"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"shSDiv"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"-99"}),(0,d.jsx)(n.td,{children:"short sdiv"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tvSlope"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"tvSlope  dTheoVol  dUPrctheoVolAdj  theoVol  tvSlope  uPrc  refUPrc  Note tvSlope affects the calculation of theoSurface veSlope values which in turn affect hedgeDelta calculations when accounthedgeType  TvS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"divRule"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/DivRule",children:"enum - DivRule"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'UseSRImplied'"}),(0,d.jsx)(n.td,{children:"specifies how DDiv and SDiv values will be incorporated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"userRateOverride"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'No'"}),(0,d.jsx)(n.td,{children:"use rate from the UserRateOverride table instead of SR Rate curve"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"userSDivOverride"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'No'"}),(0,d.jsx)(n.td,{children:"use sdiv from the UserSDivOverride table instead of SR SDiv"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"userDDivOverride"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'No'"}),(0,d.jsx)(n.td,{children:"use dividends from the UserDividendOverride table instead of SR Dividends"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minUBid"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"any nonhold status will revert to markup if live uMid is outside of minUBid maxUAsk"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxUAsk"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"theoStatus"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TheoStatus",children:"enum - TheoStatus"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'Hold'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"comment"}),(0,d.jsx)(n.td,{children:"VARCHAR(16)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"updated"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{children:"datetime of last record update  will default to current datetime on record load of not supplied"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modifiedBy"}),(0,d.jsx)(n.td,{children:"VARCHAR(24)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modifiedIn"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"timestamp"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_tk"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_yr"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_mn"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_dy"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_at"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ekey_ts"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"theoModel"}),(0,d.jsx)(n.td,{children:"7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientFirm"}),(0,d.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTheo`.`MsgSRTheoExpSurface` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `theoModel` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm this theo model is associated with (controls visibility)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `skewFunc` ENUM('None','ICurve','SRDynCurve','TheoSpline','SVI') NOT NULL DEFAULT 'None',\n    `volTimeUnits` ENUM('Default','V6') NOT NULL DEFAULT 'Default' COMMENT 'default uses the SR native time metric (trading minutes); V6 is a prior SR metric (trading days)',\n    `uPrcRefRule` ENUM('NbboMid','NbboCross') NOT NULL DEFAULT 'NbboMid',\n    `refUPrc` FLOAT NOT NULL DEFAULT -1 COMMENT '-1 = use SR uPrc @ record insert',\n    `refUPrcWeight` FLOAT NOT NULL DEFAULT 0 COMMENT 'w: [0,1];adjRefUPrc = w * refUPrc + (1 - w) * uPrc;note: w=1 implies sticky strike behavior;w=0 implies sticky delta behavior',\n    `refSRAtm` FLOAT NOT NULL DEFAULT -1 COMMENT '-1 = use SR surface atm @ record insert',\n    `refSRAtmWeight` FLOAT NOT NULL DEFAULT 0 COMMENT 'w: [0,1];theoVolAdj = theoVol + tvSlope * (uPrc - refUPrc) + w * (liveSRAtm - refSRAtm)',\n    `paramA` FLOAT NOT NULL DEFAULT 0 COMMENT 'param A - J are inputs to the skewFunc model selected above',\n    `paramB` FLOAT NOT NULL DEFAULT 0,\n    `paramC` FLOAT NOT NULL DEFAULT 0,\n    `paramD` FLOAT NOT NULL DEFAULT 0,\n    `paramE` FLOAT NOT NULL DEFAULT 0,\n    `paramF` FLOAT NOT NULL DEFAULT 0,\n    `paramG` FLOAT NOT NULL DEFAULT 0,\n    `paramH` FLOAT NOT NULL DEFAULT 0,\n    `paramI` FLOAT NOT NULL DEFAULT 0,\n    `paramJ` FLOAT NOT NULL DEFAULT 0,\n    `theoVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'theo volatility @ hypothetical atm strike (note: hypothetical atm strike depends on the definition of xAxis implied by the skewFunc model;usually the strike where xAxis = 0)',\n    `bOpnVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy open vol',\n    `bClsVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy close vol',\n    `sOpnVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell open vol',\n    `sClsVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell close vol',\n    `bOpnEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge spread to open when buying',\n    `bClsEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge spread to close when buying',\n    `sOpnEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge spread to open when selling',\n    `sClsEdge` FLOAT NOT NULL DEFAULT 0 COMMENT 'edge spread to close when selling',\n    `buySellConvention` ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') NOT NULL DEFAULT 'None',\n    `lnDDiv` FLOAT NOT NULL DEFAULT -99 COMMENT '(depricated)',\n    `shDDiv` FLOAT NOT NULL DEFAULT -99 COMMENT '(depricated)',\n    `lnSDiv` FLOAT NOT NULL DEFAULT -99 COMMENT 'long sdiv',\n    `shSDiv` FLOAT NOT NULL DEFAULT -99 COMMENT 'short sdiv',\n    `tvSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'tvSlope = dTheoVol / dUPrc;theoVolAdj = theoVol + tvSlope * (uPrc - refUPrc).  Note: tvSlope affects the calculation of theoSurface veSlope values which in turn affect hedgeDelta calculations when account.hedgeType = ''TvS''',\n    `divRule` ENUM('UseSRImplied','SDivValue','SDivOffset','MinMaxValue') NOT NULL DEFAULT 'UseSRImplied' COMMENT 'specifies how DDiv and SDiv values will be incorporated',\n    `userRateOverride` ENUM('None','Yes','No') NOT NULL DEFAULT 'No' COMMENT 'use rate from the UserRateOverride table instead of SR Rate curve',\n    `userSDivOverride` ENUM('None','Yes','No') NOT NULL DEFAULT 'No' COMMENT 'use sdiv from the UserSDivOverride table instead of SR SDiv',\n    `userDDivOverride` ENUM('None','Yes','No') NOT NULL DEFAULT 'No' COMMENT 'use dividends from the UserDividendOverride table instead of SR Dividends',\n    `minUBid` FLOAT NOT NULL DEFAULT 0 COMMENT 'any non-hold status will revert to markup if live uMid is outside of [minUBid, maxUAsk]',\n    `maxUAsk` FLOAT NOT NULL DEFAULT 0,\n    `theoStatus` ENUM('Hold','Auto','Scanner','Markup','CloseOnly') NOT NULL DEFAULT 'Hold',\n    `comment` VARCHAR(16) NOT NULL DEFAULT '',\n    `updated` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'datetime of last record update.  will default to current datetime on record load of not supplied',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`theoModel`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.\\nSurface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.\\nSee the technical note on client supplied theoretical surfaces for more details.';\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `theoModel`,\n    `clientFirm`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `skewFunc`,\n    `volTimeUnits`,\n    `uPrcRefRule`,\n    `refUPrc`,\n    `refUPrcWeight`,\n    `refSRAtm`,\n    `refSRAtmWeight`,\n    `paramA`,\n    `paramB`,\n    `paramC`,\n    `paramD`,\n    `paramE`,\n    `paramF`,\n    `paramG`,\n    `paramH`,\n    `paramI`,\n    `paramJ`,\n    `theoVol`,\n    `bOpnVol`,\n    `bClsVol`,\n    `sOpnVol`,\n    `sClsVol`,\n    `bOpnEdge`,\n    `bClsEdge`,\n    `sOpnEdge`,\n    `sClsEdge`,\n    `buySellConvention`,\n    `lnDDiv`,\n    `shDDiv`,\n    `lnSDiv`,\n    `shSDiv`,\n    `tvSlope`,\n    `divRule`,\n    `userRateOverride`,\n    `userSDivOverride`,\n    `userDDivOverride`,\n    `minUBid`,\n    `maxUAsk`,\n    `theoStatus`,\n    `comment`,\n    `updated`,\n    `timestamp`\nFROM `SRTheo`.`MsgSRTheoExpSurface`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTheo`.`MsgSRTheoExpSurface` \nSET\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk',\n    /* Replace with a ENUM('None','ICurve','SRDynCurve','TheoSpline','SVI') */ \n    `skewFunc` = 'None',\n    /* Replace with a ENUM('Default','V6') */\n    `volTimeUnits` = 'Default',\n    /* Replace with a ENUM('NbboMid','NbboCross') */\n    `uPrcRefRule` = 'NbboMid',\n    /* Replace with a FLOAT */\n    `refUPrc` = 1.23,\n    /* Replace with a FLOAT */\n    `refUPrcWeight` = 1.23,\n    /* Replace with a FLOAT */\n    `refSRAtm` = 1.23,\n    /* Replace with a FLOAT */\n    `refSRAtmWeight` = 1.23,\n    /* Replace with a FLOAT */\n    `paramA` = 1.23,\n    /* Replace with a FLOAT */\n    `paramB` = 1.23,\n    /* Replace with a FLOAT */\n    `paramC` = 1.23,\n    /* Replace with a FLOAT */\n    `paramD` = 1.23,\n    /* Replace with a FLOAT */\n    `paramE` = 1.23,\n    /* Replace with a FLOAT */\n    `paramF` = 1.23,\n    /* Replace with a FLOAT */\n    `paramG` = 1.23,\n    /* Replace with a FLOAT */\n    `paramH` = 1.23,\n    /* Replace with a FLOAT */\n    `paramI` = 1.23,\n    /* Replace with a FLOAT */\n    `paramJ` = 1.23,\n    /* Replace with a FLOAT */ \n    `theoVol` = 1.23,\n    /* Replace with a FLOAT */\n    `bOpnVol` = 1.23,\n    /* Replace with a FLOAT */\n    `bClsVol` = 1.23,\n    /* Replace with a FLOAT */\n    `sOpnVol` = 1.23,\n    /* Replace with a FLOAT */\n    `sClsVol` = 1.23,\n    /* Replace with a FLOAT */\n    `bOpnEdge` = 1.23,\n    /* Replace with a FLOAT */\n    `bClsEdge` = 1.23,\n    /* Replace with a FLOAT */\n    `sOpnEdge` = 1.23,\n    /* Replace with a FLOAT */\n    `sClsEdge` = 1.23,\n    /* Replace with a ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') */\n    `buySellConvention` = 'None',\n    /* Replace with a FLOAT */\n    `lnDDiv` = 1.23,\n    /* Replace with a FLOAT */\n    `shDDiv` = 1.23,\n    /* Replace with a FLOAT */\n    `lnSDiv` = 1.23,\n    /* Replace with a FLOAT */\n    `shSDiv` = 1.23,\n    /* Replace with a FLOAT */\n    `tvSlope` = 1.23,\n    /* Replace with a ENUM('UseSRImplied','SDivValue','SDivOffset','MinMaxValue') */\n    `divRule` = 'UseSRImplied',\n    /* Replace with a ENUM('None','Yes','No') */\n    `userRateOverride` = 'No',\n    /* Replace with a ENUM('None','Yes','No') */\n    `userSDivOverride` = 'No',\n    /* Replace with a ENUM('None','Yes','No') */\n    `userDDivOverride` = 'No',\n    /* Replace with a FLOAT */\n    `minUBid` = 1.23,\n    /* Replace with a FLOAT */\n    `maxUAsk` = 1.23,\n    /* Replace with a ENUM('Hold','Auto','Scanner','Markup','CloseOnly') */\n    `theoStatus` = 'Hold',\n    /* Replace with a VARCHAR(16) */\n    `comment` = 'Example_comment',\n    /* Replace with a DATETIME(6) */\n    `updated` = '2022-01-01 12:34:56.000000',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTheo`.`MsgSRTheoExpSurface`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy`,\n    /* Replace with a VARCHAR(16) */ \n    `theoModel`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','ICurve','SRDynCurve','TheoSpline','SVI') */ \n    `skewFunc`,\n    /* Replace with a ENUM('Default','V6') */\n    `volTimeUnits`,\n    /* Replace with a ENUM('NbboMid','NbboCross') */\n    `uPrcRefRule`,\n    /* Replace with a FLOAT */\n    `refUPrc`,\n    /* Replace with a FLOAT */\n    `refUPrcWeight`,\n    /* Replace with a FLOAT */\n    `refSRAtm`,\n    /* Replace with a FLOAT */\n    `refSRAtmWeight`,\n    /* Replace with a FLOAT */\n    `paramA`,\n    /* Replace with a FLOAT */\n    `paramB`,\n    /* Replace with a FLOAT */\n    `paramC`,\n    /* Replace with a FLOAT */\n    `paramD`,\n    /* Replace with a FLOAT */\n    `paramE`,\n    /* Replace with a FLOAT */\n    `paramF`,\n    /* Replace with a FLOAT */\n    `paramG`,\n    /* Replace with a FLOAT */\n    `paramH`,\n    /* Replace with a FLOAT */\n    `paramI`,\n    /* Replace with a FLOAT */\n    `paramJ`,\n    /* Replace with a FLOAT */ \n    `theoVol`,\n    /* Replace with a FLOAT */\n    `bOpnVol`,\n    /* Replace with a FLOAT */\n    `bClsVol`,\n    /* Replace with a FLOAT */\n    `sOpnVol`,\n    /* Replace with a FLOAT */\n    `sClsVol`,\n    /* Replace with a FLOAT */\n    `bOpnEdge`,\n    /* Replace with a FLOAT */\n    `bClsEdge`,\n    /* Replace with a FLOAT */\n    `sOpnEdge`,\n    /* Replace with a FLOAT */\n    `sClsEdge`,\n    /* Replace with a ENUM('None','Minimum','BSSpread','BSPctSprd','BSOffsetPts','BSOffsetPct') */\n    `buySellConvention`,\n    /* Replace with a FLOAT */\n    `lnDDiv`,\n    /* Replace with a FLOAT */\n    `shDDiv`,\n    /* Replace with a FLOAT */\n    `lnSDiv`,\n    /* Replace with a FLOAT */\n    `shSDiv`,\n    /* Replace with a FLOAT */\n    `tvSlope`,\n    /* Replace with a ENUM('UseSRImplied','SDivValue','SDivOffset','MinMaxValue') */\n    `divRule`,\n    /* Replace with a ENUM('None','Yes','No') */\n    `userRateOverride`,\n    /* Replace with a ENUM('None','Yes','No') */\n    `userSDivOverride`,\n    /* Replace with a ENUM('None','Yes','No') */\n    `userDDivOverride`,\n    /* Replace with a FLOAT */\n    `minUBid`,\n    /* Replace with a FLOAT */\n    `maxUAsk`,\n    /* Replace with a ENUM('Hold','Auto','Scanner','Markup','CloseOnly') */\n    `theoStatus`,\n    /* Replace with a VARCHAR(16) */\n    `comment`,\n    /* Replace with a DATETIME(6) */\n    `updated`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ekey_tk',\n    123,\n    1,\n    1,\n    'Example_theoModel',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    'Default',\n    'NbboMid',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'None',\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'UseSRImplied',\n    'No',\n    'No',\n    'No',\n    1.23,\n    1.23,\n    'Hold',\n    'Example_comment',\n    '2022-01-01 12:34:56.000000',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,d.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTheo`.`MsgSRTheoExpSurface` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `theoModel` = 'Example_theoModel'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTheo.doccolumns WHERE TABLE_NAME='SpdrTheoExpSurface' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var d=t(96540);const i={},s=d.createContext(i);function r(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);