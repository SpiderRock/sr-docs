"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14143],{54398:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var d=s(74848),t=s(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/ResponderMarkupRC",title:"ResponderMarkupRC",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/ResponderMarkupRC.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ResponderMarkupBX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX/"},next:{title:"ResponderMarkupSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupSN/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/liquidity-notice/ResponderMarkupRC",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"2450-liquidity-notice"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"root_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"root_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"root_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expiry"}),(0,d.jsx)(r.td,{children:"DATE"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"1900-01-01"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"respSide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"auction responder side your side Buy  Buy Synthetic Sell Shares"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isDisabled"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expiryQtyAvail"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"revcons contracts available for responding day total this tickerexpiry all strikes note 1 contract  undPerCn underlier units"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tickerQtyAvail"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"revcons contracts available for responding day total this ticker all strikes note 1 contract  undPerCn underlier units"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"transactFee"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"you pay    you receive"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stockRate"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"000  no effective lendborrow value  360 day convention"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"moneyRate"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"effective rate to borrowlend money to expiry 360 day convention compares to globalRate  360  365"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ddivPv"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"present value of any expected dividends to expiry"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"divControl"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/DivControl",children:"enum - DivControl"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"disable this autoresponder record if SR Dividends exist or are estimates"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"respondFlex"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"if not None much match auction notice containsFlex field"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"incFeesInResp"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"include all estimated responder fees in final response price"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"roundRule"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/RoundRule",children:"enum - RoundRule"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"openExpiryQty"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"remaining revcons 100 share units available for responding day total this tickerexpiry all strikes"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"openTickerQty"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"remaining revcons 100 share units available for responding day total ticker all strikes"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cumFillQty"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"revcons 100 share units traded day total this expiry all strikes"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cumFillMoney"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"cumulative fill money creditdebit this expiry"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"avgFillRate"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"avg fill effective stock rate this expiry"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isDivControlDisabled"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"yes if dividend control above is triggered"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uBid"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"live stock nbbo bid price SR Supplied"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uAsk"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"live stock nbbo ask price SR Supplied"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"iDays"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"iDays  effective interest days SR supplied"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"iYears"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"iYears  iDays  3600"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strike"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"SR selected strike standard day strike"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rcEExPrem"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"rcEExPrem  pRvprice  pRvEprice  cRvprice  cRvEprice american price  european price same model parameters SR supplied parameters including DDivs is zero for flex revcons"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strikePv"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stockLendPv"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"stockLendPv  uPrc  stockRate  iYears stockRate supplied above"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"revConPrem"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"revConPrem  stockLendPv  strikePv  ddivPv  rcEExPrem if any uPrc  pRvprice  cRvprice ddivPv supplied above"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"effRevConLimit"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"effRevConLimit  refConPrem  transactFee lendborrow"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"limitPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"limitPrice  ROUNDeffRevConLimit this is your response limit"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"effStockLendPv"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"effStockLendPv  limitPrice  strikePv  ddivPv  rcEExPrem"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"effStockRate"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"effStockRate  effStockLendPv  uPrc  iYears"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"modifiedBy"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"modifiedIn"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"root_tk"}),(0,d.jsx)(r.td,{children:"3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"root_at"}),(0,d.jsx)(r.td,{children:"4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"root_ts"}),(0,d.jsx)(r.td,{children:"5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expiry"}),(0,d.jsx)(r.td,{children:"6"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"respSide"}),(0,d.jsx)(r.td,{children:"7"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgResponderMarkupRC` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'auction responder side (your side); Buy = Buy Synthetic (Sell Shares)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this auto-responder record is disabled',\n    `expiryQtyAvail` INT NOT NULL DEFAULT 0 COMMENT 'revcons (contracts) available for responding (day total; this ticker/expiry; all strikes) [note: 1 contract = undPerCn underlier units]',\n    `tickerQtyAvail` INT NOT NULL DEFAULT 0 COMMENT 'revcons (contracts) available for responding (day total; this ticker; all strikes) [note: 1 contract = undPerCn underlier units]',\n    `transactFee` DOUBLE NOT NULL DEFAULT 0 COMMENT '(+ = you pay) / (- = you receive)',\n    `stockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT '0.00 = no effective lend/borrow value  (360 day convention)',\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365]',\n    `ddivPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'present value of any expected dividends to expiry',\n    `divControl` ENUM('None','DisableAny','DisableEstimates') NOT NULL DEFAULT 'None' COMMENT 'disable this auto-responder record if SR Dividends exist or are estimates',\n    `respondFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if not None, much match auction notice containsFlex field',\n    `incFeesInResp` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'include all estimated responder fees in final response price',\n    `roundRule` ENUM('None','Exact','Fuzzy') NOT NULL DEFAULT 'None',\n    `openExpiryQty` INT NOT NULL DEFAULT 0 COMMENT 'remaining revcons (100 share units) available for responding (day total; this ticker/expiry; all strikes)',\n    `openTickerQty` INT NOT NULL DEFAULT 0 COMMENT 'remaining revcons (100 share units) available for responding (day total; ticker; all strikes)',\n    `cumFillQty` INT NOT NULL DEFAULT 0 COMMENT 'revcons (100 share units) traded (day total; this expiry; all strikes)',\n    `cumFillMoney` DOUBLE NOT NULL DEFAULT 0 COMMENT 'cumulative fill money (credit/debit) (this expiry)',\n    `avgFillRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'avg fill effective stock rate (this expiry)',\n    `isDivControlDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'yes if dividend control above is triggered',\n    `uBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live stock nbbo bid price [SR Supplied]',\n    `uAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live stock nbbo ask price [SR Supplied]',\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `strike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR selected strike (standard day strike)',\n    `rcEExPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] (same model parameters; SR supplied parameters including DDivs; is zero for flex revcons)',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `stockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'stockLendPv = uPrc * stockRate * iYears [stockRate supplied above]',\n    `revConPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'revConPrem = stockLendPv + strikePv + ddivPv + rcEExPrem (if any) [uPrc + pRv.price - cRv.price] [ddivPv supplied above]',\n    `effRevConLimit` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effRevConLimit = refConPrem +/- transactFee [lend/borrow]',\n    `limitPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'limitPrice = ROUND(effRevConLimit) [this is your response limit]',\n    `effStockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockLendPv = limitPrice - strikePv - ddivPv - rcEExPrem',\n    `effStockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockRate = effStockLendPv / (uPrc * iYears)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`root_tk`,`root_at`,`root_ts`,`expiry`,`respSide`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var d=s(96540);const t={},i=d.createContext(t);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);