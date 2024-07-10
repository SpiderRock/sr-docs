"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58880],{95676:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=d(74848),i=d(28453);const r={title:"ClientFirmConfig"},n="Schema: ClientFirmConfig (ID: 1850)",l={id:"MessageSchemas/Schema/Topics/client-config/ClientFirmConfig",title:"ClientFirmConfig",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/1800-client-config/ClientFirmConfig.md",sourceDirName:"MessageSchemas/Schema/Topics/1800-client-config",slug:"/MessageSchemas/Schema/Topics/client-config/ClientFirmConfig",permalink:"/docs/MessageSchemas/Schema/Topics/client-config/ClientFirmConfig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ClientFirmConfig"},sidebar:"messageSchemasSidebar",previous:{title:"ClientAccountConfig",permalink:"/docs/MessageSchemas/Schema/Topics/client-config/ClientAccountConfig"},next:{title:"ClientPrivateSRSE",permalink:"/docs/MessageSchemas/Schema/Topics/client-config/ClientPrivateSRSE"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-clientfirmconfig-id-1850",children:["Schema: ClientFirmConfig ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 1850)"})]}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"1800-client-config"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"ClientConfig"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10="}),(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"SR assigned client firm acronym"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"clientFirmStatus"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ClientFirmStatus",children:"enum : ClientFirmStatus"})}),(0,t.jsx)(s.td,{children:"ClientFirm status"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"103"}),(0,t.jsx)(s.td,{children:"clientFirmStatusDttm"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"The date/time this status was last changed"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"285"}),(0,t.jsx)(s.td,{children:"enabledIn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SysVersion",children:"enum : SysVersion"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"106"}),(0,t.jsx)(s.td,{children:"clientFirmType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ClientFirmType",children:"enum : ClientFirmType"})}),(0,t.jsx)(s.td,{children:"SponsorClientFirm [Accnts/Users] -> CoreClientFirm [Accnts/Users] -> SubClientFirm [Accnts/Users]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"109"}),(0,t.jsx)(s.td,{children:"clientFirmName"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"SR assigned client firm Name"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"112"}),(0,t.jsx)(s.td,{children:"clientFirmShortCode"}),(0,t.jsx)(s.td,{children:"string(4)"}),(0,t.jsx)(s.td,{children:"SR assigned client firm short code (usually an MPID or equivalent)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"115"}),(0,t.jsx)(s.td,{children:"clientFirmRelationship"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ClientFirmRelationship",children:"flag : ClientFirmRelationship"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"118"}),(0,t.jsx)(s.td,{children:"repCodeSR"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"SR client rep code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"121"}),(0,t.jsx)(s.td,{children:"clientTagPool"}),(0,t.jsx)(s.td,{children:"text2"}),(0,t.jsx)(s.td,{children:"(optional) complete (unique) pool of user defined account tag(s) (tag bag JSON definition block) [max of 10,000 total chars (including seps)]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"124"}),(0,t.jsx)(s.td,{children:"billingAccount"}),(0,t.jsx)(s.td,{children:"string(24)"}),(0,t.jsx)(s.td,{children:"billing account within the G/L system"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"127"}),(0,t.jsx)(s.td,{children:"billingSchedule"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"billing schedule code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"130"}),(0,t.jsx)(s.td,{children:"billingAddress1"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Billing Address - line 1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"133"}),(0,t.jsx)(s.td,{children:"billingAddress2"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Billing Address - line 2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"136"}),(0,t.jsx)(s.td,{children:"billingCity"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Billing Address - city"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"139"}),(0,t.jsx)(s.td,{children:"billingState"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Billing Address - state"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"142"}),(0,t.jsx)(s.td,{children:"billingZipCode"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"Billing Address - zipCode"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"145"}),(0,t.jsx)(s.td,{children:"billingCountry"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"Billing Address - country"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"148"}),(0,t.jsx)(s.td,{children:"billingPhoneNumber"}),(0,t.jsx)(s.td,{children:"string(15)"}),(0,t.jsx)(s.td,{children:"Billing - phone"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"151"}),(0,t.jsx)(s.td,{children:"billingEmailAddress"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Billing - emails (comma delimited string)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"154"}),(0,t.jsx)(s.td,{children:"reportAddress1"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Reporting Address - line 1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"157"}),(0,t.jsx)(s.td,{children:"reportAddress2"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Reporting Address - line 2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"160"}),(0,t.jsx)(s.td,{children:"reportCity"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Reporting Address - city"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"163"}),(0,t.jsx)(s.td,{children:"reportState"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Reporting Address - state"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"166"}),(0,t.jsx)(s.td,{children:"reportZipCode"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"Reporting Address - zipCode"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"169"}),(0,t.jsx)(s.td,{children:"reportCountry"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"Reporting Address - country"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"172"}),(0,t.jsx)(s.td,{children:"reportPhoneNumber"}),(0,t.jsx)(s.td,{children:"string(15)"}),(0,t.jsx)(s.td,{children:"Reporting - phone"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"175"}),(0,t.jsx)(s.td,{children:"reportEmailAddress"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"Reporting - emails (comma delimited string)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"178"}),(0,t.jsx)(s.td,{children:"coreClientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"the core client firm this (Sub) client firm rolls up to [blank if none]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"181"}),(0,t.jsx)(s.td,{children:"sponsorClientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"the sponsor client firm this (Sub or Core) client firm rolls up to [blank if none]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"184"}),(0,t.jsx)(s.td,{children:"canHaveTradingAccnt"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"disables all accnt activity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"187"}),(0,t.jsx)(s.td,{children:"legalEntityId"}),(0,t.jsx)(s.td,{children:"string(20)"}),(0,t.jsx)(s.td,{children:"(LEI) reg oversight committee assigned entity ID assigned to a firm.  20 character string, contains numbers and dashes."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"190"}),(0,t.jsx)(s.td,{children:"secLargeTraderId"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"SEC-assigned trading ID assigned to a firm.  13 character string, contains numbers and dashes."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"281"}),(0,t.jsx)(s.td,{children:"LtidEffectiveDate"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"LargeTraderID Effective Date"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"282"}),(0,t.jsx)(s.td,{children:"catCaisTidType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/CatCaisTidType",children:"enum : CatCaisTidType"})}),(0,t.jsx)(s.td,{children:"CAT CAIS TID (Transformed Identifiers) Type"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"283"}),(0,t.jsx)(s.td,{children:"catCaisTidValue"}),(0,t.jsx)(s.td,{children:"string(40)"}),(0,t.jsx)(s.td,{children:"CAT CAIS TID Value"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"284"}),(0,t.jsx)(s.td,{children:"catCaisCustType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/CatCaisCustType",children:"enum : CatCaisCustType"})}),(0,t.jsx)(s.td,{children:"CAT CAIS CustomerType"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"193"}),(0,t.jsx)(s.td,{children:"syncAggGroups"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsxs)(s.td,{children:["[tgt",":src",",tgt",":src",",...] target agg group [usually priAggGroup]; will accumulate SR executions; will sync w/srcAggGroup; tgt will follow (be made equal to) src"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"196"}),(0,t.jsx)(s.td,{children:"syncThreshold"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"number of idle seconds before syncing aggGroups (default: 5 seconds)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"199"}),(0,t.jsx)(s.td,{children:"viewGICS"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"client firm can see GICS codes in SRSE"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"202"}),(0,t.jsx)(s.td,{children:"viewCUSIP"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"client firm can see CUSIP codes in SRSE"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"205"}),(0,t.jsx)(s.td,{children:"restrictLocateUpload"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"restrict all associated users' ability to upload AwayStockLocate messages"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"208"}),(0,t.jsx)(s.td,{children:"restrictAutohedge"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"restrict all associated users' ability to submit orders with autohedge enabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"211"}),(0,t.jsx)(s.td,{children:"cxlRiskGroupOnReviewHedgeReject"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:'behavior if the stage/review hedge order is rejected.  "Yes" cancels the entire risk group.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"214"}),(0,t.jsx)(s.td,{children:"userRateSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/RateSource",children:"enum : RateSource"})}),(0,t.jsx)(s.td,{children:"Default GlobalRate (Discount Rate) source (uses system default curve unless otherwise specified)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"217"}),(0,t.jsx)(s.td,{children:"enableSrseProductSnapshots"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"If enabled 'Yes' daily_snapshots.py scripts will make create clientFirm-specific snapshots of SRSE products.  Grants are matched to UserConfig.SrseProductControl."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"229"}),(0,t.jsx)(s.td,{children:"authType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AuthType",children:"enum : AuthType"})}),(0,t.jsx)(s.td,{children:"type of user logon allowed"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"232"}),(0,t.jsx)(s.td,{children:"authExternName"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"eg.  CorpName"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"235"}),(0,t.jsx)(s.td,{children:"authExternParams"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsxs)(s.td,{children:["eg. ",(0,t.jsx)(s.code,{children:"https://corp.domain.com:xxxx"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"238"}),(0,t.jsx)(s.td,{children:"pwFileTransfer"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"[SR] Password for securing files in transit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"241"}),(0,t.jsx)(s.td,{children:"dropAllParentTags"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"271"}),(0,t.jsx)(s.td,{children:"enableSrseProd"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"also requires srse pool instance in schedule.txt (which advertises as SRSE-{SysRealm}-{RunStatus}-V8.services.consul...)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"274"}),(0,t.jsx)(s.td,{children:"modifiedBy"}),(0,t.jsx)(s.td,{children:"string(24)"}),(0,t.jsx)(s.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"277"}),(0,t.jsx)(s.td,{children:"modifiedIn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"280"}),(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,t.jsx)(s.p,{children:"LocatePool"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"223"}),(0,t.jsx)(s.td,{children:"locateFirm"}),(0,t.jsx)(s.td,{children:"string(6)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"226"}),(0,t.jsx)(s.td,{children:"locatePool"}),(0,t.jsx)(s.td,{children:"string(16)"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"DirectedCounterParty"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"247"}),(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"250"}),(0,t.jsx)(s.td,{children:"isCommParty"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"ExcludeCounterParty"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"287"}),(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"})]})})]}),"\n",(0,t.jsx)(s.p,{children:"RawDataBilling"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"256"}),(0,t.jsx)(s.td,{children:"token"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/RawDataToken",children:"enum : RawDataToken"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"259"}),(0,t.jsx)(s.td,{children:"scope"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/RawDataScope",children:"enum : RawDataScope"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"SourceIP"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"265"}),(0,t.jsx)(s.td,{children:"ipV4Range"}),(0,t.jsx)(s.td,{children:"string(20)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"268"}),(0,t.jsx)(s.td,{children:"ipV6Range"}),(0,t.jsx)(s.td,{children:"string(50)"})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>l});var t=d(96540);const i={},r=t.createContext(i);function n(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);