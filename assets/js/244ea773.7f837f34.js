"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63186],{48601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(74848),i=n(28453);const r={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextEvent/ULinkContextEvent",title:"ULinkContextEvent",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextEvent/ULinkContextEvent.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextEvent",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextEvent/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextEvent/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SymbolControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/SymbolControl/"},next:{title:"ULinkContextGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/ULinkContextGateway/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/tool-core/ULinkContextEvent",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"5745-tool-core"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRControl"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"userName"}),(0,s.jsx)(t.td,{children:"VARCHAR(24)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"most recent SR accnt optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"most recent symbol optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"most recent symbol optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"most recent symbol optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"VARCHAR(16)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"source tool name eg SV CT BBLink SRSE etc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ulinkEvent"}),(0,s.jsx)(t.td,{children:"VARCHAR(8)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"ulink event eg F1 F2 Enter etc if any"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ulinkDetail"}),(0,s.jsx)(t.td,{children:"TINYTEXT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"additional ulink context detail if any"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"timestamp of ulink initiation"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"userName"}),(0,s.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgULinkContextEvent` (\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'most recent SR accnt (optional)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'most recent symbol (optional)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'most recent symbol (optional)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'most recent symbol (optional)',\n    `source` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'source tool name (eg. SV, CT, BBLink, SRSE, etc)',\n    `ulinkEvent` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'ulink event (eg: F1, F2, Enter, etc) (if any)',\n    `ulinkDetail` TINYTEXT NOT NULL DEFAULT '' COMMENT 'additional ulink context detail (if any)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of ulink initiation',\n    PRIMARY KEY USING HASH (`userName`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);