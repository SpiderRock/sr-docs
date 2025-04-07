"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["26939"],{45689:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/client-config/ClientFirmConfig","title":"ClientFirmConfig","description":"METADATA","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/1800-client-config/ClientFirmConfig.md","sourceDirName":"MessageSchemas/Schema/Topics/1800-client-config","slug":"/MessageSchemas/Schema/Topics/client-config/ClientFirmConfig","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-config/ClientFirmConfig","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"ClientFirmConfig"},"sidebar":"messageSchemasSidebar","previous":{"title":"ClientAccountConfig","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-config/ClientAccountConfig"},"next":{"title":"ClientPrivateSRSE","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-config/ClientPrivateSRSE"}}'),i=t("52676"),s=t("91503"),l=t("71386"),d=t("9641");let a={title:"ClientFirmConfig"},c="Schema: ClientFirmConfig (ID: 1850)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"schema-clientfirmconfig-id-1850",children:["Schema: ClientFirmConfig ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 1850)"})]})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"1800-client-config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"ClientConfig"})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,i.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"#"}),(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10="}),(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"SR assigned client firm acronym"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"clientFirmStatus"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/ClientFirmStatus",children:"enum : ClientFirmStatus"})}),(0,i.jsx)(n.td,{children:"ClientFirm status"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"103"}),(0,i.jsx)(n.td,{children:"clientFirmStatusDttm"}),(0,i.jsx)(n.td,{children:"DateTime"}),(0,i.jsx)(n.td,{children:"The date/time this status was last changed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"285"}),(0,i.jsx)(n.td,{children:"enabledIn"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SysVersion",children:"enum : SysVersion"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"106"}),(0,i.jsx)(n.td,{children:"clientFirmType"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/ClientFirmType",children:"enum : ClientFirmType"})}),(0,i.jsx)(n.td,{children:"SponsorClientFirm [Accnts/Users] -> CoreClientFirm [Accnts/Users] -> SubClientFirm [Accnts/Users]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"109"}),(0,i.jsx)(n.td,{children:"clientFirmName"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"SR assigned client firm Name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"112"}),(0,i.jsx)(n.td,{children:"clientFirmShortCode"}),(0,i.jsx)(n.td,{children:"string(4)"}),(0,i.jsx)(n.td,{children:"SR assigned client firm short code (usually an MPID or equivalent)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"115"}),(0,i.jsx)(n.td,{children:"clientFirmRelationship"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/ClientFirmRelationship",children:"flag : ClientFirmRelationship"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"118"}),(0,i.jsx)(n.td,{children:"repCodeSR"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"SR client rep code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"121"}),(0,i.jsx)(n.td,{children:"clientTagPool"}),(0,i.jsx)(n.td,{children:"text2"}),(0,i.jsx)(n.td,{children:"(optional) complete (unique) pool of user defined account tag(s) (tag bag JSON definition block) [max of 10,000 total chars (including seps)]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"124"}),(0,i.jsx)(n.td,{children:"billingAccount"}),(0,i.jsx)(n.td,{children:"string(24)"}),(0,i.jsx)(n.td,{children:"billing account within the G/L system"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"127"}),(0,i.jsx)(n.td,{children:"billingSchedule"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"billing schedule code"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"130"}),(0,i.jsx)(n.td,{children:"billingAddress1"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Billing Address - line 1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"133"}),(0,i.jsx)(n.td,{children:"billingAddress2"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Billing Address - line 2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"136"}),(0,i.jsx)(n.td,{children:"billingCity"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Billing Address - city"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"139"}),(0,i.jsx)(n.td,{children:"billingState"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Billing Address - state"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"142"}),(0,i.jsx)(n.td,{children:"billingZipCode"}),(0,i.jsx)(n.td,{children:"string(8)"}),(0,i.jsx)(n.td,{children:"Billing Address - zipCode"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"145"}),(0,i.jsx)(n.td,{children:"billingCountry"}),(0,i.jsx)(n.td,{children:"string(8)"}),(0,i.jsx)(n.td,{children:"Billing Address - country"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"148"}),(0,i.jsx)(n.td,{children:"billingPhoneNumber"}),(0,i.jsx)(n.td,{children:"string(15)"}),(0,i.jsx)(n.td,{children:"Billing - phone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"151"}),(0,i.jsx)(n.td,{children:"billingEmailAddress"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Billing - emails (comma delimited string)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"154"}),(0,i.jsx)(n.td,{children:"reportAddress1"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Reporting Address - line 1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"157"}),(0,i.jsx)(n.td,{children:"reportAddress2"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Reporting Address - line 2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"160"}),(0,i.jsx)(n.td,{children:"reportCity"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Reporting Address - city"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"163"}),(0,i.jsx)(n.td,{children:"reportState"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Reporting Address - state"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"166"}),(0,i.jsx)(n.td,{children:"reportZipCode"}),(0,i.jsx)(n.td,{children:"string(8)"}),(0,i.jsx)(n.td,{children:"Reporting Address - zipCode"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"169"}),(0,i.jsx)(n.td,{children:"reportCountry"}),(0,i.jsx)(n.td,{children:"string(8)"}),(0,i.jsx)(n.td,{children:"Reporting Address - country"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"172"}),(0,i.jsx)(n.td,{children:"reportPhoneNumber"}),(0,i.jsx)(n.td,{children:"string(15)"}),(0,i.jsx)(n.td,{children:"Reporting - phone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"175"}),(0,i.jsx)(n.td,{children:"reportEmailAddress"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"Reporting - emails (comma delimited string)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"178"}),(0,i.jsx)(n.td,{children:"coreClientFirm"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"the core client firm this (Sub) client firm rolls up to [blank if none]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"181"}),(0,i.jsx)(n.td,{children:"sponsorClientFirm"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"the sponsor client firm this (Sub or Core) client firm rolls up to [blank if none]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"184"}),(0,i.jsx)(n.td,{children:"canHaveTradingAccnt"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"disables all accnt activity"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"187"}),(0,i.jsx)(n.td,{children:"legalEntityId"}),(0,i.jsx)(n.td,{children:"string(20)"}),(0,i.jsx)(n.td,{children:"(LEI) reg oversight committee assigned entity ID assigned to a firm.  20 character string, contains numbers and dashes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"190"}),(0,i.jsx)(n.td,{children:"secLargeTraderId"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"SEC-assigned trading ID assigned to a firm.  13 character string, contains numbers and dashes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"281"}),(0,i.jsx)(n.td,{children:"LtidEffectiveDate"}),(0,i.jsx)(n.td,{children:"DateTime"}),(0,i.jsx)(n.td,{children:"LargeTraderID Effective Date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"282"}),(0,i.jsx)(n.td,{children:"catCaisTidType"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/CatCaisTidType",children:"enum : CatCaisTidType"})}),(0,i.jsx)(n.td,{children:"CAT CAIS TID (Transformed Identifiers) Type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"283"}),(0,i.jsx)(n.td,{children:"catCaisTidValue"}),(0,i.jsx)(n.td,{children:"string(40)"}),(0,i.jsx)(n.td,{children:"CAT CAIS TID Value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"284"}),(0,i.jsx)(n.td,{children:"catCaisCustType"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/CatCaisCustType",children:"enum : CatCaisCustType"})}),(0,i.jsx)(n.td,{children:"CAT CAIS CustomerType"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"193"}),(0,i.jsx)(n.td,{children:"syncAggGroups"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsxs)(n.td,{children:["[tgt",":src",",tgt",":src",",...] target agg group [usually priAggGroup]; will accumulate SR executions; will sync w/srcAggGroup; tgt will follow (be made equal to) src"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"196"}),(0,i.jsx)(n.td,{children:"syncThreshold"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"number of idle seconds before syncing aggGroups (default: 5 seconds)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"199"}),(0,i.jsx)(n.td,{children:"viewGICS"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"client firm can see GICS codes in SRSE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"202"}),(0,i.jsx)(n.td,{children:"viewCUSIP"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"client firm can see CUSIP codes in SRSE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"205"}),(0,i.jsx)(n.td,{children:"restrictLocateUpload"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"restrict all associated users' ability to upload AwayStockLocate messages"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"208"}),(0,i.jsx)(n.td,{children:"restrictAutohedge"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"restrict all associated users' ability to submit orders with autohedge enabled"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"211"}),(0,i.jsx)(n.td,{children:"cxlRiskGroupOnReviewHedgeReject"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:'behavior if the stage/review hedge order is rejected.  "Yes" cancels the entire risk group.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"214"}),(0,i.jsx)(n.td,{children:"userRateSource"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/RateSource",children:"enum : RateSource"})}),(0,i.jsx)(n.td,{children:"Default GlobalRate (Discount Rate) source (uses system default curve unless otherwise specified)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"217"}),(0,i.jsx)(n.td,{children:"enableSrseProductSnapshots"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"If enabled 'Yes' daily_snapshots.py scripts will make create clientFirm-specific snapshots of SRSE products.  Grants are matched to UserConfig.SrseProductControl."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"229"}),(0,i.jsx)(n.td,{children:"authType"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/AuthType",children:"enum : AuthType"})}),(0,i.jsx)(n.td,{children:"type of user logon allowed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"232"}),(0,i.jsx)(n.td,{children:"authExternName"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsx)(n.td,{children:"eg.  CorpName"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"235"}),(0,i.jsx)(n.td,{children:"authExternParams"}),(0,i.jsx)(n.td,{children:"text1"}),(0,i.jsxs)(n.td,{children:["eg. ",(0,i.jsx)(n.code,{children:"https://corp.domain.com:xxxx"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"238"}),(0,i.jsx)(n.td,{children:"pwFileTransfer"}),(0,i.jsx)(n.td,{children:"string(16)"}),(0,i.jsx)(n.td,{children:"[SR] Password for securing files in transit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"241"}),(0,i.jsx)(n.td,{children:"dropAllParentTags"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"271"}),(0,i.jsx)(n.td,{children:"enableSrseProd"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(n.td,{children:"also requires srse pool instance in schedule.txt (which advertises as SRSE-{SysRealm}-{RunStatus}-V8.services.consul...)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"274"}),(0,i.jsx)(n.td,{children:"modifiedBy"}),(0,i.jsx)(n.td,{children:"string(24)"}),(0,i.jsx)(n.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"277"}),(0,i.jsx)(n.td,{children:"modifiedIn"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"280"}),(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DateTime"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,i.jsx)(n.p,{children:"LocatePool"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"223"}),(0,i.jsx)(n.td,{children:"locateFirm"}),(0,i.jsx)(n.td,{children:"string(6)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"226"}),(0,i.jsx)(n.td,{children:"locatePool"}),(0,i.jsx)(n.td,{children:"string(16)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"DirectedCounterParty"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"247"}),(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"string(16)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"250"}),(0,i.jsx)(n.td,{children:"isCommParty"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"ExcludeCounterParty"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"287"}),(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"string(16)"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"RawDataBilling"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"256"}),(0,i.jsx)(n.td,{children:"token"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/RawDataToken",children:"enum : RawDataToken"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"259"}),(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/RawDataScope",children:"enum : RawDataScope"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"SourceIP"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"265"}),(0,i.jsx)(n.td,{children:"ipV4Range"}),(0,i.jsx)(n.td,{children:"string(20)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"268"}),(0,i.jsx)(n.td,{children:"ipV6Range"}),(0,i.jsx)(n.td,{children:"string(50)"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'ClientFirmConfig'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,i.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=ClientFirmConfig'\n\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientFirmConfig\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'clientFirmStatus|clientFirmStatusDttm|enabledIn|clientFirmType|clientFirmName|clientFirmShortCode|clientFirmRelationship|repCodeSR|clientTagPool|billingAccount|billingSchedule|billingAddress1|billingAddress2|billingCity|billingState|billingZipCode|billingCountry|billingPhoneNumber|billingEmailAddress|reportAddress1|reportAddress2|reportCity|reportState|reportZipCode|reportCountry|reportPhoneNumber|reportEmailAddress|coreClientFirm|sponsorClientFirm|canHaveTradingAccnt|legalEntityId|secLargeTraderId|LtidEffectiveDate|catCaisTidType|catCaisTidValue|catCaisCustType|syncAggGroups|syncThreshold|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|authExternName|authExternParams|pwFileTransfer|dropAllParentTags|enableSrseProd|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=ClientFirmConfig' \\\n--data-urlencode 'view=clientFirmStatus|clientFirmStatusDttm|enabledIn|clientFirmType|clientFirmName|clientFirmShortCode|clientFirmRelationship|repCodeSR|clientTagPool|billingAccount|billingSchedule|billingAddress1|billingAddress2|billingCity|billingState|billingZipCode|billingCountry|billingPhoneNumber|billingEmailAddress|reportAddress1|reportAddress2|reportCity|reportState|reportZipCode|reportCountry|reportPhoneNumber|reportEmailAddress|coreClientFirm|sponsorClientFirm|canHaveTradingAccnt|legalEntityId|secLargeTraderId|LtidEffectiveDate|catCaisTidType|catCaisTidValue|catCaisCustType|syncAggGroups|syncThreshold|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|authExternName|authExternParams|pwFileTransfer|dropAllParentTags|enableSrseProd|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientFirmConfig\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'clientFirmStatus|clientFirmStatusDttm|enabledIn|clientFirmType|clientFirmName|clientFirmShortCode|clientFirmRelationship|repCodeSR|clientTagPool|billingAccount|billingSchedule|billingAddress1|billingAddress2|billingCity|billingState|billingZipCode|billingCountry|billingPhoneNumber|billingEmailAddress|reportAddress1|reportAddress2|reportCity|reportState|reportZipCode|reportCountry|reportPhoneNumber|reportEmailAddress|coreClientFirm|sponsorClientFirm|canHaveTradingAccnt|legalEntityId|secLargeTraderId|LtidEffectiveDate|catCaisTidType|catCaisTidValue|catCaisCustType|syncAggGroups|syncThreshold|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|authExternName|authExternParams|pwFileTransfer|dropAllParentTags|enableSrseProd|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'clientFirmStatus:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=ClientFirmConfig' \\\n--data-urlencode 'view=clientFirmStatus|clientFirmStatusDttm|enabledIn|clientFirmType|clientFirmName|clientFirmShortCode|clientFirmRelationship|repCodeSR|clientTagPool|billingAccount|billingSchedule|billingAddress1|billingAddress2|billingCity|billingState|billingZipCode|billingCountry|billingPhoneNumber|billingEmailAddress|reportAddress1|reportAddress2|reportCity|reportState|reportZipCode|reportCountry|reportPhoneNumber|reportEmailAddress|coreClientFirm|sponsorClientFirm|canHaveTradingAccnt|legalEntityId|secLargeTraderId|LtidEffectiveDate|catCaisTidType|catCaisTidValue|catCaisCustType|syncAggGroups|syncThreshold|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|authExternName|authExternParams|pwFileTransfer|dropAllParentTags|enableSrseProd|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=clientFirmStatus:ASC'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientFirmConfig\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'clientFirmStatus|clientFirmStatusDttm|enabledIn|clientFirmType|clientFirmName|clientFirmShortCode|clientFirmRelationship|repCodeSR|clientTagPool|billingAccount|billingSchedule|billingAddress1|billingAddress2|billingCity|billingState|billingZipCode|billingCountry|billingPhoneNumber|billingEmailAddress|reportAddress1|reportAddress2|reportCity|reportState|reportZipCode|reportCountry|reportPhoneNumber|reportEmailAddress|coreClientFirm|sponsorClientFirm|canHaveTradingAccnt|legalEntityId|secLargeTraderId|LtidEffectiveDate|catCaisTidType|catCaisTidValue|catCaisCustType|syncAggGroups|syncThreshold|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|authExternName|authExternParams|pwFileTransfer|dropAllParentTags|enableSrseProd|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'clientFirmStatus|enabledIn|clientFirmType|canHaveTradingAccnt|catCaisTidType|catCaisCustType|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|dropAllParentTags|enableSrseProd|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=ClientFirmConfig' \\\n--data-urlencode 'measure=clientFirmStatus|clientFirmStatusDttm|enabledIn|clientFirmType|clientFirmName|clientFirmShortCode|clientFirmRelationship|repCodeSR|clientTagPool|billingAccount|billingSchedule|billingAddress1|billingAddress2|billingCity|billingState|billingZipCode|billingCountry|billingPhoneNumber|billingEmailAddress|reportAddress1|reportAddress2|reportCity|reportState|reportZipCode|reportCountry|reportPhoneNumber|reportEmailAddress|coreClientFirm|sponsorClientFirm|canHaveTradingAccnt|legalEntityId|secLargeTraderId|LtidEffectiveDate|catCaisTidType|catCaisTidValue|catCaisCustType|syncAggGroups|syncThreshold|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|authExternName|authExternParams|pwFileTransfer|dropAllParentTags|enableSrseProd|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=clientFirmStatus|enabledIn|clientFirmType|canHaveTradingAccnt|catCaisTidType|catCaisCustType|viewGICS|viewCUSIP|restrictLocateUpload|restrictAutohedge|cxlRiskGroupOnReviewHedgeReject|userRateSource|enableSrseProductSnapshots|authType|dropAllParentTags|enableSrseProd|modifiedIn' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{value:"Python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'ClientFirmConfig\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=ClientFirmConfig' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9641:function(e,n,t){t.d(n,{Z:()=>s});var r=t("52676");t("75271");var i=t("54461");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_SSzl",s),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>f});var r=t("52676"),i=t("75271"),s=t("54461"),l=t("52289"),d=t("3225"),a=t("42834"),c=t("40578"),o=t("35834"),h=t("79616");function u(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var x=t("44537");function p(e){let{className:n,block:t,selectedValue:i,selectValue:d,tabValues:a}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=a[c.indexOf(n)].value;t!==i&&(o(n),d(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...l,className:(0,s.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function j(e){let{lazy:n,children:t,selectedValue:l}=e,d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=d.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:d.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,x]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[p,j]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,d.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,h.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),y=(()=>{let e=p??g;return m({value:e,tabValues:s})?e:null})();return(0,a.Z)(()=>{y&&x(y)},[y]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);x(e),j(e),f(e)},[j,f,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(p,{...n,...e}),(0,r.jsx)(j,{...n,...e})]})}function f(e){let n=(0,x.Z)();return(0,r.jsx)(g,{...e,children:u(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(75271);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);