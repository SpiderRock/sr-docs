"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65662],{3224:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var d=s(74848),n=s(28453);const i={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/OptionFlexEvent",title:"OptionFlexEvent",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/OptionFlexEvent.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionFlexEvent/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionEOP",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionEOP/"},next:{title:"OptionLookback",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionLookback/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (LegsList)",id:"json-block-legslist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionFlexEvent",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"The most recent (last) record for each active FLEX option."}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"OptMktData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sequenceNumber"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"sequence of the flex event message counting from the start of day or last restart of the feed handler"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eventId"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"unique id of the event assigned by SpiderRock subsequent messages on the event will use the same id"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtExch"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"exchange code that produced this flex event"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtRoot"}),(0,d.jsx)(t.td,{children:"VARCHAR(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"security symbol of the FLEX option"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"requestId"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"request identifier associated with this trade assigned by the exchange these appear to not be 100 reliable particularly for PHLX"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"eventType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/FlexEventType",children:"enum - FlexEventType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"type of event this message represents eg RFQ QTE LST"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"totalQuantity"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"total quantity of the flex trade"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"packagePrice"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"total price of the flex trade inclusive of all legs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"timestamp of when this message was received"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"srcTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"timestamp from the exchange of when this message was sent"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LegsList"}),(0,d.jsx)(t.td,{children:"JSON"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sequenceNumber"}),(0,d.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"json-block-legslist",children:"JSON Block (LegsList)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{children:"OptionKey of the instrument if available"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flexType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/flexType",children:"enum - flexType"})}),(0,d.jsx)(t.td,{children:"European or American exercise AM or PM exercise time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"quantity"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"quantity of contracts in this leg of the event"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"price"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"price of this leg of the event could be quoted in percentage of closing price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"priceType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/priceType",children:"enum - priceType"})}),(0,d.jsx)(t.td,{children:"price type of the event"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"delta"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"delta supplied with the event for delta adjusted at close events"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"refPrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"reference price of the event for use in delta ajusting the final price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"closePrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"close price used for both percentage adjusted and delta adjusted events"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"priceAdj"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"final adjusted price made available after the event is marked as PctAdjApplied or DeltaAdjApplied"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strikeAdj"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"final adjusted strike made available after the event is marked PctAdjApplied"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidPrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"bid price from QTE messages"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSize"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"bid size from QTE messages"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askPrice"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"ask price from QTE messages"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSize"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"ask size from QTE messages"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rawText"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"raw text of the flex event"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionFlexEvent` (\n    `sequenceNumber` INT NOT NULL DEFAULT 0 COMMENT 'sequence of the flex event message counting from the start of day or last restart of the feed handler',\n    `eventId` INT NOT NULL DEFAULT 0 COMMENT 'unique id of the event assigned by SpiderRock, subsequent messages on the event will use the same id',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'exchange code that produced this flex event',\n    `prtRoot` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'security symbol of the FLEX option',\n    `requestId` INT NOT NULL DEFAULT 0 COMMENT 'request identifier associated with this trade assigned by the exchange (these appear to not be 100% reliable, particularly for PHLX)',\n    `eventType` ENUM('None','RFQ','QTE','LST','CXL','ADM','IND') NOT NULL DEFAULT 'None' COMMENT 'type of event this message represents, e.g., RFQ, QTE, LST',\n    `totalQuantity` INT NOT NULL DEFAULT 0 COMMENT 'total quantity of the flex trade',\n    `packagePrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'total price of the flex trade inclusive of all legs',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'timestamp of when this message was received',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'timestamp from the exchange of when this message was sent',\n    `LegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(LegsList)),\n    PRIMARY KEY USING HASH (`sequenceNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='The most recent (last) record for each active FLEX option.';\n\n"})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var d=s(96540);const n={},i=d.createContext(n);function r(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);