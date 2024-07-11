"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65579],{73848:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>x});var r=s(74848),t=s(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/OptionCalculator",title:"OptionCalculator",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/OptionCalculator.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCalculator/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptExpiryDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/"},next:{title:"OptionCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionCloseMark/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"../../../Topics/srse-calculators/OptionCalculator",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(d.p,{children:"This table allows custom option pricing based on either user or SR supplied input values."}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"5030-srse-calculators"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Default Value"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userName"}),(0,r.jsx)(d.td,{children:"VARCHAR(24)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI, SEC"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI, SEC"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{children:"PRI, SEC"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_cp"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"'Call'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vol"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"volSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"uPrc"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"underlying price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"uPrcSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"years"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"yearstoexpiration default uses SR volatility time value"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"yearsSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"continuous stock dividend using for pricing"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sdivSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"rateSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"exType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"exercise type of the option American or European"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"exTypeSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"effStrike"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"effective strike used for pricing default is okeyStrike"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"effStrikeSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"symRatio"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"underlying symbol ratio for nonstandard options discrete dividend will be scaled by this factor"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"symRatioSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"divString"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"discrete dividend string   yearsToExpiry years1amt1 years2amt2  or  1 date1amt1 date2amt2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"divSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"modelType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcModelType",children:"enum - CalcModelType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"modelTypeSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FieldSrc",children:"enum - FieldSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Default'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"calcPrecision"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CalcPrecision",children:"enum - CalcPrecision"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Low'"}),(0,r.jsx)(d.td,{children:"numerical precision  of steps if a numerical method is used  more steps will be slower to calculate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"incGreeks"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'No'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"price"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"price premium"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"delta"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"delta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"gamma"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"gamma"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"theta"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"theta"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vega"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"vega"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"volga"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"volga"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"vanna"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"vanna"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"deDecay"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"delta decay"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"rho"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"rho"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"phi"}),(0,r.jsx)(d.td,{children:"FLOAT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"phi"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"error"}),(0,r.jsx)(d.td,{children:"VARCHAR(32)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"pricerModel"}),(0,r.jsx)(d.td,{children:"VARCHAR(8)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'2000-01-01'"}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userName"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_tk"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_xx"}),(0,r.jsx)(d.td,{children:"6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_cp"}),(0,r.jsx)(d.td,{children:"7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_at"}),(0,r.jsx)(d.td,{children:"8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_ts"}),(0,r.jsx)(d.td,{children:"9"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_yr"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_mn"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"okey_dy"}),(0,r.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionCalculator` (\n    `userName` VARCHAR(24) NOT NULL DEFAULT '',\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `vol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'volatility',\n    `volSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlying price',\n    `uPrcSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `years` DOUBLE NOT NULL DEFAULT 0 COMMENT 'years-to-expiration (default uses SR volatility time value)',\n    `yearsSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `sdiv` DOUBLE NOT NULL DEFAULT 0 COMMENT 'continuous stock dividend using for pricing',\n    `sdivSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `rate` DOUBLE NOT NULL DEFAULT 0 COMMENT 'discount rate used for pricing',\n    `rateSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `exType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None' COMMENT 'exercise type of the option (American or European)',\n    `exTypeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `effStrike` DOUBLE NOT NULL DEFAULT 0 COMMENT 'effective strike used for pricing (default is okey.Strike)',\n    `effStrikeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `symRatio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'underlying symbol ratio (for non-standard options); discrete dividend will be scaled by this factor',\n    `symRatioSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `divString` TINYTEXT NOT NULL DEFAULT '' COMMENT 'discrete dividend string  [ yearsToExpiry, years1:amt1, years2:amt2, ...] or [ -1, date1:amt1, date2:amt2, ... ]',\n    `divSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `modelType` ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') NOT NULL DEFAULT 'None',\n    `modelTypeSrc` ENUM('Default','User') NOT NULL DEFAULT 'Default',\n    `calcPrecision` ENUM('None','Low','Normal','High','Custom') NOT NULL DEFAULT 'Low' COMMENT 'numerical precision (# of steps) if a numerical method is used;  [more steps will be slower to calculate]',\n    `incGreeks` ENUM('None','Yes','No') NOT NULL DEFAULT 'No',\n    `price` DOUBLE NOT NULL DEFAULT 0 COMMENT 'price (premium)',\n    `delta` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta',\n    `gamma` FLOAT NOT NULL DEFAULT 0 COMMENT 'gamma',\n    `theta` FLOAT NOT NULL DEFAULT 0 COMMENT 'theta',\n    `vega` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega',\n    `volga` FLOAT NOT NULL DEFAULT 0 COMMENT 'volga',\n    `vanna` FLOAT NOT NULL DEFAULT 0 COMMENT 'vanna',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta decay',\n    `rho` FLOAT NOT NULL DEFAULT 0 COMMENT 'rho',\n    `phi` FLOAT NOT NULL DEFAULT 0 COMMENT 'phi',\n    `error` VARCHAR(32) NOT NULL DEFAULT '',\n    `pricerModel` VARCHAR(8) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '2000-01-01',\n    PRIMARY KEY USING HASH (`userName`,`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table allows custom option pricing based on either user or SR supplied input values.';\n\n"})})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>l});var r=s(96540);const t={},n=r.createContext(t);function i(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);