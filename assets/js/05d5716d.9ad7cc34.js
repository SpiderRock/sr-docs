"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[43729],{3143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(74848),l=t(28453);const i={},d=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/OptionCalculator",title:"OptionCalculator",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/OptionCalculator.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptExpiryDefinition",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/"},next:{title:"OptionCloseMark",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCloseMark/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/srse-calculators/OptionCalculator",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"This table allows custom option pricing based on either user or SR supplied input values."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"Internal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI, SEC"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI, SEC"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI, SEC"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_xx"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_cp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'Call'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vol"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"volatility"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"volSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uPrc"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"underlying price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uPrcSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"years"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"yearstoexpiration default uses SR volatility time value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"yearsSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sdiv"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"continuous stock dividend using for pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sdivSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rate"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rateSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"exercise type of the option American or European"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exTypeSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"effStrike"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"effective strike used for pricing default is okeyStrike"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"effStrikeSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"symRatio"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"underlying symbol ratio for nonstandard options discrete dividend will be scaled by this factor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"symRatioSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"divString"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"discrete dividend string   yearsToExpiry years1amt1 years2amt2  or  1 date1amt1 date2amt2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"divSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modelType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcModelType",children:"enum - CalcModelType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modelTypeSrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Default'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"calcPrecision"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcPrecision",children:"enum - CalcPrecision"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Low'"}),(0,r.jsx)(n.td,{children:"numerical precision  of steps if a numerical method is used  more steps will be slower to calculate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"incGreeks"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'No'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"price"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"price premium"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"delta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"delta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gamma"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"gamma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"theta"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"theta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vega"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"vega"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"volga"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"volga"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vanna"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"vanna"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"deDecay"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"delta decay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rho"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"rho"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"phi"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"phi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"error"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pricerModel"}),(0,r.jsx)(n.td,{children:"VARCHAR(8)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'2000-01-01'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_tk"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_yr"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_mn"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_dy"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_xx"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_cp"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_at"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_ts"}),(0,r.jsx)(n.td,{children:"9"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_yr"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_mn"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"okey_dy"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionCalculator` (\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `vol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'volatility',\n    `volSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlying price',\n    `uPrcSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `years` DOUBLE NOT NULL DEFAULT 0 COMMENT 'years-to-expiration (default uses SR volatility time value)',\n    `yearsSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `sdiv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'continuous stock dividend using for pricing',\n    `sdivSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `rate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'discount rate used for pricing',\n    `rateSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `exType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None' COMMENT 'exercise type of the option (American or European)',\n    `exTypeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `effStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective strike used for pricing (default is okey.Strike)',\n    `effStrikeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `symRatio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlying symbol ratio (for non-standard options); discrete dividend will be scaled by this factor',\n    `symRatioSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `divString` TINYTEXT NOT NULL DEFAULT '' COMMENT 'discrete dividend string  [ yearsToExpiry, years1:amt1, years2:amt2, ...] or [ -1, date1:amt1, date2:amt2, ... ]',\n    `divSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `modelType` ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') NOT NULL DEFAULT 'None',\n    `modelTypeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `calcPrecision` ENUM('None','Low','Normal','High','Custom') NOT NULL DEFAULT 'Low' COMMENT 'numerical precision (# of steps) if a numerical method is used;  [more steps will be slower to calculate]',\n    `incGreeks` ENUM('None','Yes','No') NOT NULL DEFAULT 'No',\n    `price` DOUBLE NOT NULL DEFAULT 0 COMMENT 'price (premium)',\n    `delta` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta',\n    `gamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'gamma',\n    `theta` FLOAT NOT NULL DEFAULT 0 COMMENT 'theta',\n    `vega` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega',\n    `volga` FLOAT NOT NULL DEFAULT 0 COMMENT 'volga',\n    `vanna` FLOAT NOT NULL DEFAULT 0 COMMENT 'vanna',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta decay',\n    `rho` FLOAT NOT NULL DEFAULT 0 COMMENT 'rho',\n    `phi` FLOAT NOT NULL DEFAULT 0 COMMENT 'phi',\n    `error` VARCHAR(32) NOT NULL DEFAULT '',\n    `pricerModel` VARCHAR(8) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '2000-01-01',\n    PRIMARY KEY USING HASH (`userName`,`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table allows custom option pricing based on either user or SR supplied input values.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `userName`,\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `vol`,\n    `volSrc`,\n    `uPrc`,\n    `uPrcSrc`,\n    `years`,\n    `yearsSrc`,\n    `sdiv`,\n    `sdivSrc`,\n    `rate`,\n    `rateSrc`,\n    `exType`,\n    `exTypeSrc`,\n    `effStrike`,\n    `effStrikeSrc`,\n    `symRatio`,\n    `symRatioSrc`,\n    `divString`,\n    `divSrc`,\n    `modelType`,\n    `modelTypeSrc`,\n    `calcPrecision`,\n    `incGreeks`,\n    `price`,\n    `delta`,\n    `gamma`,\n    `theta`,\n    `vega`,\n    `volga`,\n    `vanna`,\n    `deDecay`,\n    `rho`,\n    `phi`,\n    `error`,\n    `pricerModel`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgOptionCalculator`\nWHERE \n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRAnalytics`.`MsgOptionCalculator` \nSET\n    /* Replace with a DOUBLE */\n    `vol` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `volSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `uPrc` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `uPrcSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `years` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `yearsSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `sdiv` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `sdivSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `rate` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `rateSrc` = 'Default',\n    /* Replace with a ENUM('None','American','European','Asian','Cliquet') */\n    `exType` = 'None',\n    /* Replace with a ENUM('Default','User') */\n    `exTypeSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `effStrike` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `effStrikeSrc` = 'Default',\n    /* Replace with a DOUBLE */\n    `symRatio` = 4.56,\n    /* Replace with a ENUM('Default','User') */\n    `symRatioSrc` = 'Default',\n    /* Replace with a TINYTEXT */\n    `divString` = 'dummy tiny text',\n    /* Replace with a ENUM('Default','User') */\n    `divSrc` = 'Default',\n    /* Replace with a ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') */\n    `modelType` = 'None',\n    /* Replace with a ENUM('Default','User') */\n    `modelTypeSrc` = 'Default',\n    /* Replace with a ENUM('None','Low','Normal','High','Custom') */\n    `calcPrecision` = 'Low',\n    /* Replace with a ENUM('None','Yes','No') */\n    `incGreeks` = 'No',\n    /* Replace with a DOUBLE */\n    `price` = 4.56,\n    /* Replace with a FLOAT */\n    `delta` = 1.23,\n    /* Replace with a FLOAT */\n    `gamma` = 1.23,\n    /* Replace with a FLOAT */\n    `theta` = 1.23,\n    /* Replace with a FLOAT */\n    `vega` = 1.23,\n    /* Replace with a FLOAT */\n    `volga` = 1.23,\n    /* Replace with a FLOAT */\n    `vanna` = 1.23,\n    /* Replace with a FLOAT */\n    `deDecay` = 1.23,\n    /* Replace with a FLOAT */\n    `rho` = 1.23,\n    /* Replace with a FLOAT */\n    `phi` = 1.23,\n    /* Replace with a VARCHAR(32) */\n    `error` = 'Example_error',\n    /* Replace with a VARCHAR(8) */\n    `pricerModel` = 'Example_pricerModel',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRAnalytics`.`MsgOptionCalculator`(\n    /* Replace with a VARCHAR(24) */ \n    `userName`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy`,\n    /* Replace with a DOUBLE */ \n    `okey_xx`,\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp`,\n    /* Replace with a DOUBLE */\n    `vol`,\n    /* Replace with a ENUM('Default','User') */\n    `volSrc`,\n    /* Replace with a DOUBLE */\n    `uPrc`,\n    /* Replace with a ENUM('Default','User') */\n    `uPrcSrc`,\n    /* Replace with a DOUBLE */\n    `years`,\n    /* Replace with a ENUM('Default','User') */\n    `yearsSrc`,\n    /* Replace with a DOUBLE */\n    `sdiv`,\n    /* Replace with a ENUM('Default','User') */\n    `sdivSrc`,\n    /* Replace with a DOUBLE */\n    `rate`,\n    /* Replace with a ENUM('Default','User') */\n    `rateSrc`,\n    /* Replace with a ENUM('None','American','European','Asian','Cliquet') */\n    `exType`,\n    /* Replace with a ENUM('Default','User') */\n    `exTypeSrc`,\n    /* Replace with a DOUBLE */\n    `effStrike`,\n    /* Replace with a ENUM('Default','User') */\n    `effStrikeSrc`,\n    /* Replace with a DOUBLE */\n    `symRatio`,\n    /* Replace with a ENUM('Default','User') */\n    `symRatioSrc`,\n    /* Replace with a TINYTEXT */\n    `divString`,\n    /* Replace with a ENUM('Default','User') */\n    `divSrc`,\n    /* Replace with a ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') */\n    `modelType`,\n    /* Replace with a ENUM('Default','User') */\n    `modelTypeSrc`,\n    /* Replace with a ENUM('None','Low','Normal','High','Custom') */\n    `calcPrecision`,\n    /* Replace with a ENUM('None','Yes','No') */\n    `incGreeks`,\n    /* Replace with a DOUBLE */\n    `price`,\n    /* Replace with a FLOAT */\n    `delta`,\n    /* Replace with a FLOAT */\n    `gamma`,\n    /* Replace with a FLOAT */\n    `theta`,\n    /* Replace with a FLOAT */\n    `vega`,\n    /* Replace with a FLOAT */\n    `volga`,\n    /* Replace with a FLOAT */\n    `vanna`,\n    /* Replace with a FLOAT */\n    `deDecay`,\n    /* Replace with a FLOAT */\n    `rho`,\n    /* Replace with a FLOAT */\n    `phi`,\n    /* Replace with a VARCHAR(32) */\n    `error`,\n    /* Replace with a VARCHAR(8) */\n    `pricerModel`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_userName',\n    'None',\n    'None',\n    'Example_okey_tk',\n    123,\n    1,\n    1,\n    4.56,\n    'Call',\n    4.56,\n    'Default',\n    4.56,\n    'Default',\n    4.56,\n    'Default',\n    4.56,\n    'Default',\n    4.56,\n    'Default',\n    'None',\n    'Default',\n    4.56,\n    'Default',\n    4.56,\n    'Default',\n    'dummy tiny text',\n    'Default',\n    'None',\n    'Default',\n    'Low',\n    'No',\n    4.56,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    1.23,\n    'Example_error',\n    'Example_pricerModel',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRAnalytics`.`MsgOptionCalculator` \nWHERE\n    /* Replace with a VARCHAR(24) */ \n    `userName` = 'Example_userName'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptionCalculator' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var r=t(96540);const l={},i=r.createContext(l);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);