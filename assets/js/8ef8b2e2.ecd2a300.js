"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28953],{93097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),l=t(19365);const d={title:"GetOptionPrice"},a="Schema: GetOptionPrice (ID: 3335)",c={id:"MessageSchemas/Schema/Topics/mlink/GetOptionPrice",title:"GetOptionPrice",description:"METADATA",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Topics/3325-mlink/GetOptionPrice.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/GetOptionPrice",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/mlink/GetOptionPrice",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{title:"GetOptionPrice"},sidebar:"messageSchemasSidebar",previous:{title:"FieldDesc",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/mlink/FieldDesc"},next:{title:"GetOptionVolatility",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/mlink/GetOptionVolatility"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Post Msgs API Call",id:"post-msgs-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"schema-getoptionprice-id-3335",children:["Schema: GetOptionPrice ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3335)"})]}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3325-mlink"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"RiskCalc"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"okey"}),(0,r.jsx)(n.td,{children:"OptionKey"}),(0,r.jsx)(n.td,{children:"can be listed or FLEX"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"202"}),(0,r.jsx)(n.td,{children:"vol"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"volatility (will be SR surface volatility if not supplied)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"uPrc"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"underlying price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"years"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"years-to-expiration (default uses SR volatility time value)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"203"}),(0,r.jsx)(n.td,{children:"sdiv"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"continuous stock dividend used for pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"204"}),(0,r.jsx)(n.td,{children:"rate"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"exType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,r.jsx)(n.td,{children:"exercise type of the option (American or European)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"exTime"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExerciseTime",children:"enum : ExerciseTime"})}),(0,r.jsx)(n.td,{children:"exercise time (AM or PM)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"201"}),(0,r.jsx)(n.td,{children:"holidayCalendar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalendarCode",children:"enum : CalendarCode"})}),(0,r.jsx)(n.td,{children:"holiday calendar code (eg. NYSE)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"timeMetric"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,r.jsx)(n.td,{children:"time metric (D252, D365, etc.)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"145"}),(0,r.jsx)(n.td,{children:"modelType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"148"}),(0,r.jsx)(n.td,{children:"calcEngine"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcEngine",children:"enum : CalcEngine"})}),(0,r.jsx)(n.td,{children:"underlying calc engine:  FastHybrid (listed strikes + SR discrtete dividends only).  NumericX works for any strike/expiry + discrete dividend set but is significantly slower."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"151"}),(0,r.jsx)(n.td,{children:"incGreeks"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"default (No)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"154"}),(0,r.jsx)(n.td,{children:"price"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"price (premium)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"157"}),(0,r.jsx)(n.td,{children:"effStrike"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"effective strike used to for pricing calc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"197"}),(0,r.jsx)(n.td,{children:"iDays"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"interest days to expiry"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"198"}),(0,r.jsx)(n.td,{children:"ddiv"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"sum of discrete dividend amounts payable prior to exercise (if any) (simple; not net present value)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"199"}),(0,r.jsx)(n.td,{children:"ddivPV"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"sum of present value of discrete dividend amounts payable prior to exercise (if any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"163"}),(0,r.jsx)(n.td,{children:"delta"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"delta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"166"}),(0,r.jsx)(n.td,{children:"gamma"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"gamma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"169"}),(0,r.jsx)(n.td,{children:"theta"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"theta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"172"}),(0,r.jsx)(n.td,{children:"vega"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"vega"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"175"}),(0,r.jsx)(n.td,{children:"volga"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"volga"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"178"}),(0,r.jsx)(n.td,{children:"vanna"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"vanna"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"181"}),(0,r.jsx)(n.td,{children:"deDecay"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"delta decay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"184"}),(0,r.jsx)(n.td,{children:"rho"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"rho"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"187"}),(0,r.jsx)(n.td,{children:"phi"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"phi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"190"}),(0,r.jsx)(n.td,{children:"error"}),(0,r.jsx)(n.td,{children:"string(32)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"193"}),(0,r.jsx)(n.td,{children:"pricerModel"}),(0,r.jsx)(n.td,{children:"string(8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"196"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(n.p,{children:"DiscreteDividend"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"DateTime"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"142"}),(0,r.jsx)(n.td,{children:"amount"}),(0,r.jsx)(n.td,{children:"float"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"post-msgs-api-call",children:"Post Msgs API Call"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests\n\n# Replace with your desired MLINK URL\nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Request Parameters\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'postmsgs\',\n    "postaction": "I", # (I)nsert, or (R)eplace\n    "postmerge": "Y", # (Y)es or (N)o\n}\n\npayload = {\n    "header": {\n        "mTyp": "GetOptionPrice"\n    },\n    "message": {\n        "okey": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL",\n            "dt": "2025-01-01",\n            "xx": 1,\n            "cp": "Call"\n        },\n        "vol": 1.0, // double\n        "uPrc": 1.0, // double\n        "years": 1.0, // double\n        "sdiv": 1.0, // double\n        "rate": 1.0, // double\n        "exType": "enumValue", // enum(ExerciseType) - None, American, European, Asian, Cliquet\n        "exTime": "enumValue", // enum(ExerciseTime) - None, PM, AM\n        "holidayCalendar": "enumValue", // enum(CalendarCode) - None, NYSE, EUREX, CBOE_EU, NXAM, NXBR, NXLS, NXML, NXOS, NXP, ICEFE, CME, NYMEX, COMEX, MGEX, BXE, CXE, DXE, EUX\n        "timeMetric": "enumValue", // enum(TimeMetric) - None, D252, D365, SRV6\n        "modelType": "enumValue", // enum(CalcModelType) - None, LogNormalExact, NormalExact, LogNormalApprox, NormalApprox\n        "calcEngine": "enumValue", // enum(CalcEngine) - None, FastHybrid, NumericLow, NumericStd, NumericMax\n        "incGreeks": "enumValue", // enum(YesNo) - None, Yes, No\n        "price": 1.0, // double\n        "effStrike": 1.0, // double\n        "iDays": 1, // int\n        "ddiv": 1.0, // float\n        "ddivPV": 1.0, // float\n        "delta": 1.0, // float\n        "gamma": 1.0, // float\n        "theta": 1.0, // float\n        "vega": 1.0, // float\n        "volga": 1.0, // float\n        "vanna": 1.0, // float\n        "deDecay": 1.0, // float\n        "rho": 1.0, // float\n        "phi": 1.0, // float\n        "error": "exampleString", // string\n        "pricerModel": "exampleString", // string\n        "timestamp": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "DiscreteDividend": [ // Repeating Field\n            {\n                "date": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n                "amount": 1.0 // float\n            }\n        ]\n    }\n}\n\nresponse = requests.post(MLINK_PROD_URL, params=params, json=payload)\n'})})}),(0,r.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\' \\\n--data-urlencode \'apiKey=XXXX-XXXX-XXXX-XXXX\' \\\n--data-urlencode \'cmd=postmsgs\' \\\n--data-urlencode \'postaction=I\' \\ # (I)nsert, or (R)eplace\n--data-urlencode \'postmerge=Y\' \\ # (Y)es or (N)o\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "header": {\n        "mTyp": "GetOptionPrice"\n    },\n    "message": {\n        "okey": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL",\n            "dt": "2025-01-01",\n            "xx": 1,\n            "cp": "Call"\n        },\n        "vol": 1.0, // double\n        "uPrc": 1.0, // double\n        "years": 1.0, // double\n        "sdiv": 1.0, // double\n        "rate": 1.0, // double\n        "exType": "enumValue", // enum(ExerciseType) - None, American, European, Asian, Cliquet\n        "exTime": "enumValue", // enum(ExerciseTime) - None, PM, AM\n        "holidayCalendar": "enumValue", // enum(CalendarCode) - None, NYSE, EUREX, CBOE_EU, NXAM, NXBR, NXLS, NXML, NXOS, NXP, ICEFE, CME, NYMEX, COMEX, MGEX, BXE, CXE, DXE, EUX\n        "timeMetric": "enumValue", // enum(TimeMetric) - None, D252, D365, SRV6\n        "modelType": "enumValue", // enum(CalcModelType) - None, LogNormalExact, NormalExact, LogNormalApprox, NormalApprox\n        "calcEngine": "enumValue", // enum(CalcEngine) - None, FastHybrid, NumericLow, NumericStd, NumericMax\n        "incGreeks": "enumValue", // enum(YesNo) - None, Yes, No\n        "price": 1.0, // double\n        "effStrike": 1.0, // double\n        "iDays": 1, // int\n        "ddiv": 1.0, // float\n        "ddivPV": 1.0, // float\n        "delta": 1.0, // float\n        "gamma": 1.0, // float\n        "theta": 1.0, // float\n        "vega": 1.0, // float\n        "volga": 1.0, // float\n        "vanna": 1.0, // float\n        "deDecay": 1.0, // float\n        "rho": 1.0, // float\n        "phi": 1.0, // float\n        "error": "exampleString", // string\n        "pricerModel": "exampleString", // string\n        "timestamp": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "DiscreteDividend": [ // Repeating Field\n            {\n                "date": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n                "amount": 1.0 // float\n            }\n        ]\n    }\n}\'\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>E});var r=t(96540),s=t(34164),i=t(23104),l=t(56347),d=t(205),a=t(57485),c=t(31682),o=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:s}),[j,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=c??j;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,t=a.indexOf(n),s=d[t].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(g,{...n,...e})]})}function E(e){const n=(0,p.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);