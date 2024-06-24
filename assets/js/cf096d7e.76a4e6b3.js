"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46363],{87650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(74848),c=n(28453);const i={title:"AccountConfig"},r="Message: AccountConfig (ID: 1805)",d={id:"Schema/Topics/client-config/AccountConfig",title:"AccountConfig",description:"META DATA  (Topic: client-config )",source:"@site/docs/Schema/Topics/1800-client-config/AccountConfig.md",sourceDirName:"Schema/Topics/1800-client-config",slug:"/Schema/Topics/client-config/AccountConfig",permalink:"/docs/Schema/Topics/client-config/AccountConfig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AccountConfig"},sidebar:"schemaSidebar",previous:{title:"StockPoolBorrowRate",permalink:"/docs/Schema/Topics/client-borrow/StockPoolBorrowRate"},next:{title:"AccountExchGroupConfig",permalink:"/docs/Schema/Topics/client-config/AccountExchGroupConfig"}},l={},o=[{value:"META DATA  (Topic: client-config )",id:"meta-data--topic-client-config-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-accountconfig-id-1805",children:["Message: AccountConfig ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1805)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-client-config-",children:"META DATA  (Topic: client-config )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRAdmin"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"SR assigned client firm acronym"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntColor"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"citrix account color string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntName"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"account name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/AccntStatus",children:"enum : AccntStatus"})}),(0,s.jsx)(t.td,{children:"This accounts current status"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accntStatusDttm"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"The Date/time this accounts status was changed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accountType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/AccountType",children:"enum : AccountType"})}),(0,s.jsx)(t.td,{children:"SR account type (omnibus accounts are expected to be flat at the end of the day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"awayExecControl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/AwayExecControl",children:"enum : AwayExecControl"})}),(0,s.jsx)(t.td,{children:"Whether to include Away Executions in EE risk counters"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"billingSchedule"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"overrides billingSchedule at clientFirm level"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"binaryDays"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"used to force delta calcs binary prior to expiration"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"catFdidEndDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{children:"CAT FDID EndDate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"catFdidOpenDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{children:"CAT FDID OpenDate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientAccnt"}),(0,s.jsx)(t.td,{children:"string(32)"}),(0,s.jsx)(t.td,{children:"client assigned account string (optional) [used to map between client and SR configs]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientAccntIds"}),(0,s.jsx)(t.td,{children:"text2"}),(0,s.jsx)(t.td,{children:"comma separated list of alternate client defined accnt strings that all map to this accountConfig"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientTags"}),(0,s.jsx)(t.td,{children:"text2"}),(0,s.jsx)(t.td,{children:"(optional) user defined account tag(s) (eg. tag,tag,tag,tag) [max of 10,000 total chars (including seps)]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientUserName"}),(0,s.jsx)(t.td,{children:"string(32)"}),(0,s.jsx)(t.td,{children:"client assigned account userName (optional) [usued to map between client and SR configs]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"defaultTradingAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"[our type=Rollup] default trading accnt (must be type=Trading) (if ticker not found in AltSymbolMap)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hedgeDeltaRule"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/HedgeDeltaRule",children:"enum : HedgeDeltaRule"})}),(0,s.jsx)(t.td,{children:"HedgeDelta Source (IVol = use SR implied surface (sticky strike), IvS = use SR surface (dynamic), TVol = use user supplied theo surface (sticky strike), TvS = use user supplied theo surface (dynamic)) [AccountConfig.hedgeDelta]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedBy"}),(0,s.jsx)(t.td,{children:"string(24)"}),(0,s.jsx)(t.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modifiedIn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboFixDropMarking"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"Whether or not to markup the FIX drop with nbbo information"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noCrossGroup"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"no cross grouping code (accounts with the same nCrossGroup will not cross with themselves) [default = ClientFirm]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"omniAccnt"}),(0,s.jsx)(t.td,{children:"string(25)"}),(0,s.jsx)(t.td,{children:"associated omnibus account (if any)\t(must be type=Omnibus) [this account can do aggregated trading in omniAccnt]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"omniAccnt2"}),(0,s.jsx)(t.td,{children:"string(25)"}),(0,s.jsx)(t.td,{children:"associated omnibus account (if any)\t(must be type=Omnibus) [this account can do aggregated trading in omniAccnt2]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"proxyFirm1"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"proxy firm #1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"proxyFirm2"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"proxy firm #2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"proxyFirm3"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"proxy firm #3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"requireAltOrderId"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"Parent order must have an AltOrderId to proceed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskGroupControl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/RiskGroupControl",children:"enum : RiskGroupControl"})}),(0,s.jsx)(t.td,{children:"enables enhanced risk group controls, ParentCap.n means each parent order can be at most 1/n of the risk group limit, StrictLimits implies PC.4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symCtrlAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"eg. SR.1 [default = accnt]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tgtReconcileAccntCF"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"target reconciliation accnt (CLR Side) (must be type=Reconcile) [this account aggregates into target reconcile account]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tgtReconcileAccntSR"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"target reconciliation accnt (SR Side) (must be type=Reconcile) [this account aggregates into target reconcile account]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tgtRollupAccnt"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"target rollup account (must be type=Rollup) [this account rolls up into target account]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theoModel"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"theo model (primary)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theoModel2"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"theo model #2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"timestamp of last modification"})]})]})]}),(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(t.p,{children:"RiskLevel"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"customGroup"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"riskLevel"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/MarRiskLevel",children:"enum : MarRiskLevel"})}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const c={},i=s.createContext(c);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);