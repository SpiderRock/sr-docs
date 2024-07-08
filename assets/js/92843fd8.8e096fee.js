"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67029],{97946:(d,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>x});var t=r(74848),i=r(28453);const s={},l=void 0,n={id:"MessageSchemas/Schema/SRSE Products/SRTrade/ToolCompositeExecution/ToolCompositeExecution",title:"ToolCompositeExecution",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ToolCompositeExecution/ToolCompositeExecution.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/ToolCompositeExecution",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/ToolCompositeExecution/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ToolCompositeExecution/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StkOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/StkOrderGateway/"},next:{title:"UserAuctionFilter",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/UserAuctionFilter/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (accnt) (Not Unique)",id:"secondary-index-accnt-not-unique",level:3},{value:"SECONDARY INDEX (clientFirm) (Not Unique)",id:"secondary-index-clientfirm-not-unique",level:3}];function j(d){const e={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Topic"}),(0,t.jsx)(e.td,{children:"3480-mlink-custom"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"MLink Token"}),(0,t.jsx)(e.td,{children:"ClientTrading"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Product"}),(0,t.jsx)(e.td,{children:"SRTrade"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accessType"}),(0,t.jsx)(e.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Key"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillNumber"}),(0,t.jsx)(e.td,{children:"CHAR(19)"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{children:"SpiderRock execution number globally unique over trailing 10 days"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tradeDate"}),(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade date"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accnt"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock Accnt Code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clientFirm"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock ClientFirm Code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_at"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_ts"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_tk"}),(0,t.jsx)(e.td,{children:"VARCHAR(12)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_yr"}),(0,t.jsx)(e.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_mn"}),(0,t.jsx)(e.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_dy"}),(0,t.jsx)(e.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_xx"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secKey_cp"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Key can be partially filled in look at secType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Security Type Stock Future Option"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"side"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"order  execution side"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"version"}),(0,t.jsx)(e.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"record version number starts at zero and goes up every time an execution record is republished eg bust 1m marks 10m marks etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentNumber"}),(0,t.jsx)(e.td,{children:"CHAR(19)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock parent number"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"baseParentNumber"}),(0,t.jsx)(e.td,{children:"CHAR(19)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock base parent number"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"spdrSource"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock parent order source code broker pkey"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"groupingCode"}),(0,t.jsx)(e.td,{children:"CHAR(19)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock parent broker number broker pkey"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"riskGroupId"}),(0,t.jsx)(e.td,{children:"CHAR(19)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"riskGroupId parent order group ID for this execution report"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"altOrderId"}),(0,t.jsx)(e.td,{children:"VARCHAR(24)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"alternate order ID usually clOrdId from client"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"srcRoutingCode"}),(0,t.jsx)(e.td,{children:"TINYTEXT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"inbound FIX routing code if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"userName"}),(0,t.jsx)(e.td,{children:"VARCHAR(24)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock user name associated with the parent order"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"server"}),(0,t.jsx)(e.td,{children:"VARCHAR(20)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock execution engine that handled the parent order"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_at"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock underlier ticker key synthetic for futures"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_ts"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock underlier ticker key synthetic for futures"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_tk"}),(0,t.jsx)(e.td,{children:"VARCHAR(12)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock underlier ticker key synthetic for futures"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sector"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"user supplied sector code from SymbolControl record"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clientTags"}),(0,t.jsx)(e.td,{children:"TINYTEXT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"indNum"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"ind code 00"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"subNum"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"sub code 0000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"grpNum"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"grp code 000000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"nbrNum"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"nbr code 00000000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"expCode"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"expiration tenor code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"skewCode"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"strike skew code  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"widthCode"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"market width code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"priceFormat"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock price display format code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"uPriceFormat"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock underlier price display code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"years"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"years to expiration  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"underlierType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier type affects greek calcs"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"minTickSize"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"NLV value of a single tick change in display premium\tpointValue  tickValue  tickSize"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pointValue"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"NLV value of a point"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pointCurrency"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"underliersPerCn"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underliers per contract futures and options"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentShape"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order shape Single MLeg etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentLimitType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order limit type Vol VolX PrcDe PrcDeX etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentLimitClass"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order limit class makeLimitClass if fill was from making takeLimitClass if fill was from taking"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentOrderHandling"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"base parent order algo take style algo"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentBalanceHandling"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"base parent order balance handling make style algo"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentOrderSize"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order size"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentDttm"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Datetime of parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentUMark"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier mid mark  parent order arrival options only"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentBid"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"market bid  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentAsk"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"market ask  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentFairPrc"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock fair price  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentFairWidth"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock fair width  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentLimitPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order limit price  parent order arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentLimitRefUPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"limit reference underlier price  parent order arrival options only"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentSSaleFlag"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order short sale flag can be Auto"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentPositionType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order position type can be Auto"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentStrategy"}),(0,t.jsx)(e.td,{children:"VARCHAR(36)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent strategy usually client supplied"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"parentAutoHedge"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock autohedge algorithm if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childDttm"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order send datetime if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childClOrdId"}),(0,t.jsx)(e.td,{children:"VARCHAR(24)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order clOrdId resulting in fill if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childRoutingCode"}),(0,t.jsx)(e.td,{children:"TINYTEXT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock child order routing code if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childSize"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order size"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childPrice"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order price"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childExch"}),(0,t.jsx)(e.td,{children:"VARCHAR(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order exchange code SpiderRock"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childExDest"}),(0,t.jsx)(e.td,{children:"VARCHAR(12)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order exchange code downstream"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childUPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier market price  child order send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childBid"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"market bid  child order send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childAsk"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"market ask  child order send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childFairPrc"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock fair price  child order send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childFairWidth"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock fair width  child order send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childVol"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order volatilty options only"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childProb"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order probability Tx"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childLimitPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order limit price  child order send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childLimitRefUPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"limit reference underlier price  child order send time options only"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childAlgoHandler"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"algo that generated the child order responsible for this fill"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childOrderHandling"}),(0,t.jsx)(e.td,{children:"VARCHAR(24)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"algo handler detail string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childCreateReason"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order create code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childCancelReason"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order cancel code if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childMktStance"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order was expected to be marketable  child send time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childCxlAttempted"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"cancel attempt was made on the child order prior to receiving this fill"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childSSaleFlag"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order short sale flag"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childPositionType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order position type"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childFirmType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"chld order firm type Customer ProCust Firm MM etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childCapacity"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"child order capacity"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillExch"}),(0,t.jsx)(e.td,{children:"VARCHAR(12)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"ExDest code from child order execution report lastMkt"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillPrice"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"fill price"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillDttm"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Datetime of fill arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillSize"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"fill quantity"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillPointValue"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"fill size x pointValue"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillVol"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"fill volatilty options only"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillProb"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"fill order probability Tx"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillLimitPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"parent order limit price  fill arrival time"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillLimitRefUPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"limit reference underlier price  fill arrival time options only"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillUPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"fill underlier midmarket"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillBeta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock estimate of beta to SPX"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillTv"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"theo vol user supplied"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillTp"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"theo price"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillBid"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option market bid  fill arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillAsk"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"option market ask  fill arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillFairPrc"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock fair price  fill arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillFairWidth"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock fair width  fill arrival"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillBrkrRate"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"billing brokerage rate tier 1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillRoutingRate"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"billing routing rate tier 1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillOrigExecID"}),(0,t.jsx)(e.td,{children:"VARCHAR(20)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"original execution ID string child order"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillLastExecID"}),(0,t.jsx)(e.td,{children:"VARCHAR(20)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"most recent execution ID same as origExecID unless CANCELCORRECTION has been processed"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillExecStatus"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock execution status FillBustCorrectRejectSysRej"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillRemoteText"}),(0,t.jsx)(e.td,{children:"VARCHAR(64)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"text comment from endpoint if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillTransactDttm"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"transaction datetime as reported by exchange or down stream broker"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillLiquidityTag"}),(0,t.jsx)(e.td,{children:"VARCHAR(2)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock normalized exch liquidity tag"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillExchFee"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock exchange fee estimate"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillDe"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillGa"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillVe"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"execRole"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock relationship to this execution record Direct Drop etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"execBrkrCode"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"exec broker acronym usually an MPID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"execBrkrAccnt"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"account at executing broker if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"execBrkrClFirm"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"clientfirm at executing broker if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"execBrkrUserName"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"user executing broker if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clearingFlipType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"type of clearing corp delivery"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clearingFlipFirm"}),(0,t.jsx)(e.td,{children:"VARCHAR(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"deliverTo clearing member eg OCC NSCC MPID or InstitutionID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clearingFlipAccnt"}),(0,t.jsx)(e.td,{children:"VARCHAR(10)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"deliverTo client account eg OCC AID or a DVP FBO code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clearingAgent"}),(0,t.jsx)(e.td,{children:"VARCHAR(10)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"deliverTo agent eg DVP Agent Bank ID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clearingTaxID"}),(0,t.jsx)(e.td,{children:"VARCHAR(10)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"deliverTo taxID eg DVP TaxID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"billingSecType"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock billing security type"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"billingCategory"}),(0,t.jsx)(e.td,{children:"ENUM"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SpiderRock billing category"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"priAggGroup"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"primary aggregation group"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"secAggGroup"}),(0,t.jsx)(e.td,{children:"VARCHAR(16)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"secondary aggregation group"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdDelta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade delta"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdDDelta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade delta"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdGamma"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade gamma"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdDGamma"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade dollar gamma"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdVega"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade vega"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdWtVega"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade wtVega vega  vol  sqrtmax01 years  4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdTheta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade theta"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdBeta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade beta"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdDBeta"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade beta"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdNotionalValue"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"cn  pointValue  uPrc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdMarketValue"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"cn  pointValue  fillPrice"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"marginUDnVDn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn vol dn"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"marginUDnVUp"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc dn vol up"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"marginUUpVDn"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up vol dn"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"marginUUpVUp"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Aggregate RiskSlide uPrc up vol up"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdFairEdge"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SR trade edge fill price to SR fair price"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdFairEdgeUnit"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SR trade edge normalized to 100 underlier"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdTheoEdge"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"theo edge user supplied theo volprc to SpiderRock surface price if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdTheoEdgeUnit"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"theo edge normalized to 100 underlier"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clArrivePnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"arrival PnL client arrival mark to fill mark from clArriveMark on parent order if any"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"arrivePnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"arrival PnL parent arrival mark to fill mark"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"arriveDnPnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"arrival Dn PnL arrivalPnL  uDriftArrivalPnL"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"uDriftArrivePnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier delta drift PnL arrival uMark to fill uMark"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"childLimitSlip"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Fill Slippage ChildLimitPrice to FillPrice"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"halfWidthPnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"estimated halfwidth PnL"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayDnPnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"delta neutral PnL to EOD"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayM1PnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"delta neutral PnL Fill  1M"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayM10PnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"delta neutral PnL Fill  10M"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"uDriftDayPnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier delta drift PnL to EOD"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"uDriftM1PnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier delta drift PnL Fill  1M"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"uDriftM10PnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"underlier delta drift PnL Fill  10M"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayPnL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"actual PnL to EOD fillMark to liveMark"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"m1Mark"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"T1min"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"m1UPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"T1min"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"m10Mark"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"T10min"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"m10UPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"T10min"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"liveMark"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Live  Record Query"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"liveUPrc"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"Live  Record Query"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"trdMarkError"}),(0,t.jsx)(e.td,{children:"VARCHAR(8)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"trade mark error code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayMarkError"}),(0,t.jsx)(e.td,{children:"VARCHAR(8)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"day mark error code"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"timestamp"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"SR system timestamp"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Sequence"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fillNumber"}),(0,t.jsx)(e.td,{children:"1"})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"secondary-index-accnt-not-unique",children:"SECONDARY INDEX (accnt) (Not Unique)"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Sequence"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accnt"}),(0,t.jsx)(e.td,{children:"1"})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"secondary-index-clientfirm-not-unique",children:"SECONDARY INDEX (clientFirm) (Not Unique)"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Sequence"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"clientFirm"}),(0,t.jsx)(e.td,{children:"1"})]})})]})]})}function h(d={}){const{wrapper:e}={...(0,i.R)(),...d.components};return e?(0,t.jsx)(e,{...d,children:(0,t.jsx)(j,{...d})}):j(d)}},28453:(d,e,r)=>{r.d(e,{R:()=>l,x:()=>n});var t=r(96540);const i={},s=t.createContext(i);function l(d){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function n(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(i):d.components||i:l(d.components),t.createElement(s.Provider,{value:e},d.children)}}}]);