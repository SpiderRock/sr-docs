"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44036],{37996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={},l=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/VolTimeCalculator/VolTimeCalculator",title:"VolTimeCalculator",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/VolTimeCalculator/VolTimeCalculator.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/VolTimeCalculator",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/VolTimeCalculator/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/VolTimeCalculator/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"TickerDefinitionExt",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerDefinitionExt/"},next:{title:"SRAuction",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAuction/"}},d={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function E(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/srse-calculators/VolTimeCalculator",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"SystemData"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endDate"}),(0,r.jsx)(n.td,{children:"DATE"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'1900-01-01'"}),(0,r.jsx)(n.td,{children:"period end date CST"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endTime"}),(0,r.jsx)(n.td,{children:"TIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'16:00:00'"}),(0,r.jsx)(n.td,{children:"period end time CST"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nowDttm"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'2000-01-01'"}),(0,r.jsx)(n.td,{children:"period start time CST"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nowSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{children:"default is clock time when selecting"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeMetric"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TimeMetric",children:"enum - TimeMetric"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'D252'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeMetricSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"holidayCalendar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalendarCode",children:"enum - CalendarCode"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'NYSE'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"holidayCalendarSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"years"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"volatility years from nowDttm to endDttm using TradingCalendar SR NMS TradingVolatility Calendar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"years365"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"partialDays"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of partial trading days halfdays between endpoints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"holidayDays"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of holidays days that would otherwise be trading days between endpoints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"completeDays"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of complete trading days between endpoints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trdMinutes"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of market trading minutes between endpoints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clkMinutes"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"number of nonmarket trading minutes between endpoints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trdMeasure"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"volatility years per trdMinute"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clkMeasure"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"volatility years per clkMinute"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"error"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"calculation error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'2000-01-01'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endDate"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgVolTimeCalculator` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `endDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'period end date (CST)',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `endTime` TIME(6) NOT NULL DEFAULT '16:00:00' COMMENT 'period end time (CST)',\n    `nowDttm` DATETIME(6) NOT NULL DEFAULT '2000-01-01' COMMENT 'period start time (CST)',\n    `nowSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default' COMMENT 'default is clock time when selecting',\n    `timeMetric` ENUM('None','D252','D365','SPX','WK1','WK2','WK3','WK4') NOT NULL DEFAULT 'D252',\n    `timeMetricSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `holidayCalendar` ENUM('None','NYSE','EUREX','BXE','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','CEDX','ICEFE') NOT NULL DEFAULT 'NYSE',\n    `holidayCalendarSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `years` DOUBLE NOT NULL DEFAULT 0 COMMENT 'volatility years from nowDttm to endDttm using TradingCalendar (SR NMS Trading/Volatility Calendar)',\n    `years365` DOUBLE NOT NULL DEFAULT 0,\n    `partialDays` INT NOT NULL DEFAULT 0 COMMENT 'number of partial trading days (half-days) between endpoints.',\n    `holidayDays` INT NOT NULL DEFAULT 0 COMMENT 'number of holidays (days that would otherwise be trading days) between endpoints.',\n    `completeDays` INT NOT NULL DEFAULT 0 COMMENT 'number of complete trading days between endpoints.',\n    `trdMinutes` INT NOT NULL DEFAULT 0 COMMENT 'number of market trading minutes between endpoints.',\n    `clkMinutes` INT NOT NULL DEFAULT 0 COMMENT 'number of non-market trading minutes between endpoints.',\n    `trdMeasure` DOUBLE NOT NULL DEFAULT 0 COMMENT 'volatility years per trdMinute',\n    `clkMeasure` DOUBLE NOT NULL DEFAULT 0 COMMENT 'volatility years per clkMinute',\n    `error` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'calculation error',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '2000-01-01',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`secType`,`endDate`,`userName`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table allows custom span risk calculations based on either user or SR supplied input values.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `secType`,\n    `endDate`,\n    `userName`,\n    `endTime`,\n    `nowDttm`,\n    `nowSrc`,\n    `timeMetric`,\n    `timeMetricSrc`,\n    `holidayCalendar`,\n    `holidayCalendarSrc`,\n    `years`,\n    `years365`,\n    `partialDays`,\n    `holidayDays`,\n    `completeDays`,\n    `trdMinutes`,\n    `clkMinutes`,\n    `trdMeasure`,\n    `clkMeasure`,\n    `error`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgVolTimeCalculator`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `endDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRAnalytics`.`MsgVolTimeCalculator` \nSET\n    /* Replace with a TIME(6) */\n    `endTime` = '12:34:56.000000',\n    /* Replace with a DATETIME(6) */\n    `nowDttm` = '2022-01-01 12:34:56.000000',\n    /* Replace with a ENUM('Default','User') */\n    `nowSrc` = 'Default',\n    /* Replace with a ENUM('None','D252','D365','SPX','WK1','WK2','WK3','WK4') */\n    `timeMetric` = 'D252',\n    /* Replace with a ENUM('Default','User') */\n    `timeMetricSrc` = 'Default',\n    /* Replace with a ENUM('None','NYSE','EUREX','BXE','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','CEDX','ICEFE') */\n    `holidayCalendar` = 'NYSE',\n    /* Replace with a ENUM('Default','User') */\n    `holidayCalendarSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `years` = 4.56,\n    /* Replace with a DOUBLE */\n    `years365` = 4.56,\n    /* Replace with a INT */\n    `partialDays` = 5,\n    /* Replace with a INT */\n    `holidayDays` = 5,\n    /* Replace with a INT */\n    `completeDays` = 5,\n    /* Replace with a INT */ \n    `trdMinutes` = 5,\n    /* Replace with a INT */ \n    `clkMinutes` = 5,\n    /* Replace with a DOUBLE */ \n    `trdMeasure` = 4.56,\n    /* Replace with a DOUBLE */ \n    `clkMeasure` = 4.56,\n    /* Replace with a VARCHAR(32) */\n    `error` = 'Example_error',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `endDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRAnalytics`.`MsgVolTimeCalculator`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType`,\n    /* Replace with a DATE */\n    `endDate`,\n    /* Replace with a VARCHAR(24) */ \n    `userName`,\n    /* Replace with a TIME(6) */\n    `endTime`,\n    /* Replace with a DATETIME(6) */\n    `nowDttm`,\n    /* Replace with a ENUM('Default','User') */\n    `nowSrc`,\n    /* Replace with a ENUM('None','D252','D365','SPX','WK1','WK2','WK3','WK4') */\n    `timeMetric`,\n    /* Replace with a ENUM('Default','User') */\n    `timeMetricSrc`,\n    /* Replace with a ENUM('None','NYSE','EUREX','BXE','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','CEDX','ICEFE') */\n    `holidayCalendar`,\n    /* Replace with a ENUM('Default','User') */\n    `holidayCalendarSrc`,\n    /* Replace with a DOUBLE */\n    `years`,\n    /* Replace with a DOUBLE */\n    `years365`,\n    /* Replace with a INT */\n    `partialDays`,\n    /* Replace with a INT */\n    `holidayDays`,\n    /* Replace with a INT */\n    `completeDays`,\n    /* Replace with a INT */ \n    `trdMinutes`,\n    /* Replace with a INT */ \n    `clkMinutes`,\n    /* Replace with a DOUBLE */ \n    `trdMeasure`,\n    /* Replace with a DOUBLE */ \n    `clkMeasure`,\n    /* Replace with a VARCHAR(32) */\n    `error`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'None',\n    '2022-01-01',\n    'Example_userName',\n    '12:34:56.000000',\n    '2022-01-01 12:34:56.000000',\n    'Default',\n    'D252',\n    'Default',\n    'NYSE',\n    'Default',\n    4.56,\n    4.56,\n    5,\n    5,\n    5,\n    5,\n    5,\n    4.56,\n    4.56,\n    'Example_error',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRAnalytics`.`MsgVolTimeCalculator` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `endDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='VolTimeCalculator' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);