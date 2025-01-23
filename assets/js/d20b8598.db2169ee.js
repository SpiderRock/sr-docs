"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70665],{89781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>E,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(74848),r=t(28453);const s={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/ResponderMarkupRC",title:"ResponderMarkupRC",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/ResponderMarkupRC.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupRC/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ResponderMarkupBX",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupBX/"},next:{title:"ResponderMarkupSN",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRTrade/ResponderMarkupSN/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/liquidity-notice/ResponderMarkupRC",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"2450-liquidity-notice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"SRATS"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRTrade"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root_at"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root_ts"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root_tk"}),(0,i.jsx)(n.td,{children:"VARCHAR(12)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expiry"}),(0,i.jsx)(n.td,{children:"DATE"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'1900-01-01'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"respSide"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"auction responder side your side Buy  Buy Synthetic Sell Shares"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ticker_at"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ticker_ts"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ticker_tk"}),(0,i.jsx)(n.td,{children:"VARCHAR(12)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isDisabled"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"if Yes this autoresponder record is disabled"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expiryQtyAvail"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"revcons contracts available for responding day total this tickerexpiry all strikes note 1 contract  undPerCn underlier units"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tickerQtyAvail"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"revcons contracts available for responding day total this ticker all strikes note 1 contract  undPerCn underlier units"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"transactFee"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"you pay    you receive"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"stockRate"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"000  no effective lendborrow value  360 day convention"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"moneyRate"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"effective rate to borrowlend money to expiry 360 day convention compares to globalRate  360  365"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ddivPv"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"present value of any expected dividends to expiry"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"divControl"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/DivControl",children:"enum - DivControl"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"disable this autoresponder record if SR Dividends exist or are estimates"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"respondFlex"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"if not None much match auction notice containsFlex field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"incFeesInResp"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"include all estimated responder fees in final response price"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"roundRule"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/RoundRule",children:"enum - RoundRule"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openExpiryQty"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"remaining revcons 100 share units available for responding day total this tickerexpiry all strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openTickerQty"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"remaining revcons 100 share units available for responding day total ticker all strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cumFillQty"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"revcons 100 share units traded day total this expiry all strikes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cumFillMoney"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"cumulative fill money creditdebit this expiry"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgFillRate"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"avg fill effective stock rate this expiry"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isDivControlDisabled"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"yes if dividend control above is triggered"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uBid"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"live stock nbbo bid price SR Supplied"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uAsk"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"live stock nbbo ask price SR Supplied"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"iDays"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"iDays  effective interest days SR supplied"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"iYears"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"iYears  iDays  3600"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"strike"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"SR selected strike standard day strike"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rcEExPrem"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"rcEExPrem  pRvprice  pRvEprice  cRvprice  cRvEprice american price  european price same model parameters SR supplied parameters including DDivs is zero for flex revcons"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"strikePv"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"stockLendPv"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"stockLendPv  uPrc  stockRate  iYears stockRate supplied above"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"revConPrem"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"revConPrem  stockLendPv  strikePv  ddivPv  rcEExPrem if any uPrc  pRvprice  cRvprice ddivPv supplied above"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"effRevConLimit"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"effRevConLimit  refConPrem  transactFee lendborrow"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"limitPrice"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"limitPrice  ROUNDeffRevConLimit this is your response limit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"effStockLendPv"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"effStockLendPv  limitPrice  strikePv  ddivPv  rcEExPrem"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"effStockRate"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"effStockRate  effStockLendPv  uPrc  iYears"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedBy"}),(0,i.jsx)(n.td,{children:"VARCHAR(24)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modifiedIn"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DATETIME(6)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root_tk"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root_at"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root_ts"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expiry"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"respSide"}),(0,i.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgResponderMarkupRC` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `expiry` DATE NOT NULL DEFAULT '1900-01-01',\n    `respSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'auction responder side (your side); Buy = Buy Synthetic (Sell Shares)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `isDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes, this auto-responder record is disabled',\n    `expiryQtyAvail` INT NOT NULL DEFAULT 0 COMMENT 'revcons (contracts) available for responding (day total; this ticker/expiry; all strikes) [note: 1 contract = undPerCn underlier units]',\n    `tickerQtyAvail` INT NOT NULL DEFAULT 0 COMMENT 'revcons (contracts) available for responding (day total; this ticker; all strikes) [note: 1 contract = undPerCn underlier units]',\n    `transactFee` DOUBLE NOT NULL DEFAULT 0 COMMENT '(+ = you pay) / (- = you receive)',\n    `stockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT '0.00 = no effective lend/borrow value  (360 day convention)',\n    `moneyRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365]',\n    `ddivPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'present value of any expected dividends to expiry',\n    `divControl` ENUM('None','DisableAny','DisableEstimates') NOT NULL DEFAULT 'None' COMMENT 'disable this auto-responder record if SR Dividends exist or are estimates',\n    `respondFlex` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if not None, much match auction notice containsFlex field',\n    `incFeesInResp` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'include all estimated responder fees in final response price',\n    `roundRule` ENUM('None','Exact','Fuzzy') NOT NULL DEFAULT 'None',\n    `openExpiryQty` INT NOT NULL DEFAULT 0 COMMENT 'remaining revcons (100 share units) available for responding (day total; this ticker/expiry; all strikes)',\n    `openTickerQty` INT NOT NULL DEFAULT 0 COMMENT 'remaining revcons (100 share units) available for responding (day total; ticker; all strikes)',\n    `cumFillQty` INT NOT NULL DEFAULT 0 COMMENT 'revcons (100 share units) traded (day total; this expiry; all strikes)',\n    `cumFillMoney` DOUBLE NOT NULL DEFAULT 0 COMMENT 'cumulative fill money (credit/debit) (this expiry)',\n    `avgFillRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'avg fill effective stock rate (this expiry)',\n    `isDivControlDisabled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'yes if dividend control above is triggered',\n    `uBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live stock nbbo bid price [SR Supplied]',\n    `uAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'live stock nbbo ask price [SR Supplied]',\n    `iDays` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iDays = effective interest days [SR supplied]',\n    `iYears` DOUBLE NOT NULL DEFAULT 0 COMMENT 'iYears = iDays / 360.0',\n    `strike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR selected strike (standard day strike)',\n    `rcEExPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'rcEExPrem = (pRv.price - pRvE.price) - (cRv.price - cRvE.price) [american price - european price] (same model parameters; SR supplied parameters including DDivs; is zero for flex revcons)',\n    `strikePv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strikePv = strike * (1.0 - moneyRate * iYears) [moneyRate supplied above]',\n    `stockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'stockLendPv = uPrc * stockRate * iYears [stockRate supplied above]',\n    `revConPrem` DOUBLE NOT NULL DEFAULT 0 COMMENT 'revConPrem = stockLendPv + strikePv + ddivPv + rcEExPrem (if any) [uPrc + pRv.price - cRv.price] [ddivPv supplied above]',\n    `effRevConLimit` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effRevConLimit = refConPrem +/- transactFee [lend/borrow]',\n    `limitPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'limitPrice = ROUND(effRevConLimit) [this is your response limit]',\n    `effStockLendPv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockLendPv = limitPrice - strikePv - ddivPv - rcEExPrem',\n    `effStockRate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effStockRate = effStockLendPv / (uPrc * iYears)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`accnt`,`clientFirm`,`root_tk`,`root_at`,`root_ts`,`expiry`,`respSide`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFirm`,\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `expiry`,\n    `respSide`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `isDisabled`,\n    `expiryQtyAvail`,\n    `tickerQtyAvail`,\n    `transactFee`,\n    `stockRate`,\n    `moneyRate`,\n    `ddivPv`,\n    `divControl`,\n    `respondFlex`,\n    `incFeesInResp`,\n    `roundRule`,\n    `openExpiryQty`,\n    `openTickerQty`,\n    `cumFillQty`,\n    `cumFillMoney`,\n    `avgFillRate`,\n    `isDivControlDisabled`,\n    `uBid`,\n    `uAsk`,\n    `iDays`,\n    `iYears`,\n    `strike`,\n    `rcEExPrem`,\n    `strikePv`,\n    `stockLendPv`,\n    `revConPrem`,\n    `effRevConLimit`,\n    `limitPrice`,\n    `effStockLendPv`,\n    `effStockRate`,\n    `timestamp`\nFROM `SRTrade`.`MsgResponderMarkupRC`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `expiry` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgResponderMarkupRC` \nSET\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled` = 'None',\n    /* Replace with a INT */ \n    `expiryQtyAvail` = 5,\n    /* Replace with a INT */ \n    `tickerQtyAvail` = 5,\n    /* Replace with a DOUBLE */ \n    `transactFee` = 4.56,\n    /* Replace with a DOUBLE */ \n    `stockRate` = 4.56,\n    /* Replace with a DOUBLE */ \n    `moneyRate` = 4.56,\n    /* Replace with a DOUBLE */ \n    `ddivPv` = 4.56,\n    /* Replace with a ENUM('None','DisableAny','DisableEstimates') */ \n    `divControl` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `respondFlex` = 'None',\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp` = 'None',\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule` = 'None',\n    /* Replace with a INT */ \n    `openExpiryQty` = 5,\n    /* Replace with a INT */ \n    `openTickerQty` = 5,\n    /* Replace with a INT */ \n    `cumFillQty` = 5,\n    /* Replace with a DOUBLE */ \n    `cumFillMoney` = 4.56,\n    /* Replace with a DOUBLE */ \n    `avgFillRate` = 4.56,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDivControlDisabled` = 'None',\n    /* Replace with a DOUBLE */ \n    `uBid` = 4.56,\n    /* Replace with a DOUBLE */ \n    `uAsk` = 4.56,\n    /* Replace with a DOUBLE */ \n    `iDays` = 4.56,\n    /* Replace with a DOUBLE */ \n    `iYears` = 4.56,\n    /* Replace with a DOUBLE */ \n    `strike` = 4.56,\n    /* Replace with a DOUBLE */ \n    `rcEExPrem` = 4.56,\n    /* Replace with a DOUBLE */ \n    `strikePv` = 4.56,\n    /* Replace with a DOUBLE */ \n    `stockLendPv` = 4.56,\n    /* Replace with a DOUBLE */ \n    `revConPrem` = 4.56,\n    /* Replace with a DOUBLE */ \n    `effRevConLimit` = 4.56,\n    /* Replace with a DOUBLE */ \n    `limitPrice` = 4.56,\n    /* Replace with a DOUBLE */ \n    `effStockLendPv` = 4.56,\n    /* Replace with a DOUBLE */ \n    `effStockRate` = 4.56,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `expiry` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgResponderMarkupRC`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `root_tk`,\n    /* Replace with a DATE */\n    `expiry`,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDisabled`,\n    /* Replace with a INT */ \n    `expiryQtyAvail`,\n    /* Replace with a INT */ \n    `tickerQtyAvail`,\n    /* Replace with a DOUBLE */ \n    `transactFee`,\n    /* Replace with a DOUBLE */ \n    `stockRate`,\n    /* Replace with a DOUBLE */ \n    `moneyRate`,\n    /* Replace with a DOUBLE */ \n    `ddivPv`,\n    /* Replace with a ENUM('None','DisableAny','DisableEstimates') */ \n    `divControl`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `respondFlex`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `incFeesInResp`,\n    /* Replace with a ENUM('None','Exact','Fuzzy') */ \n    `roundRule`,\n    /* Replace with a INT */ \n    `openExpiryQty`,\n    /* Replace with a INT */ \n    `openTickerQty`,\n    /* Replace with a INT */ \n    `cumFillQty`,\n    /* Replace with a DOUBLE */ \n    `cumFillMoney`,\n    /* Replace with a DOUBLE */ \n    `avgFillRate`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isDivControlDisabled`,\n    /* Replace with a DOUBLE */ \n    `uBid`,\n    /* Replace with a DOUBLE */ \n    `uAsk`,\n    /* Replace with a DOUBLE */ \n    `iDays`,\n    /* Replace with a DOUBLE */ \n    `iYears`,\n    /* Replace with a DOUBLE */ \n    `strike`,\n    /* Replace with a DOUBLE */ \n    `rcEExPrem`,\n    /* Replace with a DOUBLE */ \n    `strikePv`,\n    /* Replace with a DOUBLE */ \n    `stockLendPv`,\n    /* Replace with a DOUBLE */ \n    `revConPrem`,\n    /* Replace with a DOUBLE */ \n    `effRevConLimit`,\n    /* Replace with a DOUBLE */ \n    `limitPrice`,\n    /* Replace with a DOUBLE */ \n    `effStockLendPv`,\n    /* Replace with a DOUBLE */ \n    `effStockRate`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_root_tk',\n    '2022-01-01',\n    'None',\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    5,\n    5,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    'None',\n    'None',\n    'None',\n    'None',\n    5,\n    5,\n    5,\n    4.56,\n    4.56,\n    'None',\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    4.56,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgResponderMarkupRC` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk'\n  AND\n    /* Replace with a DATE */\n    `expiry` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `respSide` = 'None';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='ResponderMarkupRC' ORDER BY ordinal_position ASC;\n"})})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);