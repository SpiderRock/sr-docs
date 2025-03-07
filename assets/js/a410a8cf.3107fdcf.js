"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[92719],{40813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var r=t(74848),l=t(28453),s=t(11470),i=t(19365);const d={title:"GetOptionVolatility"},a="Schema: GetOptionVolatility (ID: 3340)",c={id:"MessageSchemas/Schema/Topics/mlink/GetOptionVolatility",title:"GetOptionVolatility",description:"METADATA",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/3325-mlink/GetOptionVolatility.md",sourceDirName:"MessageSchemas/Schema/Topics/3325-mlink",slug:"/MessageSchemas/Schema/Topics/mlink/GetOptionVolatility",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/GetOptionVolatility",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{title:"GetOptionVolatility"},sidebar:"messageSchemasSidebar",previous:{title:"GetOptionPrice",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/GetOptionPrice"},next:{title:"MLinkAdmin",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/Topics/mlink/MLinkAdmin"}},o={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Post Msgs API Call",id:"post-msgs-api-call",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"schema-getoptionvolatility-id-3340",children:["Schema: GetOptionVolatility ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3340)"})]}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"3325-mlink"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"RiskCalc"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"197"}),(0,r.jsx)(n.td,{children:"okey"}),(0,r.jsx)(n.td,{children:"OptionKey"}),(0,r.jsx)(n.td,{children:"can be listed or FLEX"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"112"}),(0,r.jsx)(n.td,{children:"price"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"option price (premium)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{children:"uPrc"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"underlying price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"118"}),(0,r.jsx)(n.td,{children:"years"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"years-to-expiration (default uses SR volatility time value)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"199"}),(0,r.jsx)(n.td,{children:"sdiv"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"continuous stock dividend used for pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"rate"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"discount rate used for pricing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"127"}),(0,r.jsx)(n.td,{children:"exType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExerciseType",children:"enum : ExerciseType"})}),(0,r.jsx)(n.td,{children:"exercise type of the option (American or European)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"130"}),(0,r.jsx)(n.td,{children:"exTime"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExerciseTime",children:"enum : ExerciseTime"})}),(0,r.jsx)(n.td,{children:"exercise time (AM or PM)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"198"}),(0,r.jsx)(n.td,{children:"holidayCalendar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalendarCode",children:"enum : CalendarCode"})}),(0,r.jsx)(n.td,{children:"holiday calendar code (eg. NYSE)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"133"}),(0,r.jsx)(n.td,{children:"timeMetric"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,r.jsx)(n.td,{children:"time metric (D252, D365, etc.)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"145"}),(0,r.jsx)(n.td,{children:"modelType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcModelType",children:"enum : CalcModelType"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"148"}),(0,r.jsx)(n.td,{children:"calcEngine"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CalcEngine",children:"enum : CalcEngine"})}),(0,r.jsx)(n.td,{children:"underlying calc engine:  FastHybrid (listed strikes + SR discrtete dividends only).  NumericX works for any strike/expiry + discrete dividend set but is significantly slower."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"151"}),(0,r.jsx)(n.td,{children:"incGreeks"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(n.td,{children:"default (No)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"201"}),(0,r.jsx)(n.td,{children:"vol"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"volatility (implied)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"157"}),(0,r.jsx)(n.td,{children:"effStrike"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"effective strike used to for pricing calc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"160"}),(0,r.jsx)(n.td,{children:"dividendAmount"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"sum of discrete dividend amounts payable prior to exercise (if any) (simple; not net present value)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"163"}),(0,r.jsx)(n.td,{children:"delta"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"delta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"166"}),(0,r.jsx)(n.td,{children:"gamma"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"gamma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"169"}),(0,r.jsx)(n.td,{children:"theta"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"theta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"172"}),(0,r.jsx)(n.td,{children:"vega"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"vega"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"175"}),(0,r.jsx)(n.td,{children:"volga"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"volga"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"178"}),(0,r.jsx)(n.td,{children:"vanna"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"vanna"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"181"}),(0,r.jsx)(n.td,{children:"deDecay"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"delta decay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"184"}),(0,r.jsx)(n.td,{children:"rho"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"rho"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"187"}),(0,r.jsx)(n.td,{children:"phi"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"phi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"190"}),(0,r.jsx)(n.td,{children:"error"}),(0,r.jsx)(n.td,{children:"string(32)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"193"}),(0,r.jsx)(n.td,{children:"pricerModel"}),(0,r.jsx)(n.td,{children:"string(8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"196"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DateTime"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(n.p,{children:"DiscreteDividend"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"139"}),(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"DateTime"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"142"}),(0,r.jsx)(n.td,{children:"amount"}),(0,r.jsx)(n.td,{children:"float"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"post-msgs-api-call",children:"Post Msgs API Call"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"Python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests\n\n# Replace with your desired MLINK URL\nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Request Parameters\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'postmsgs\',\n    "postaction": "I", # (I)nsert, or (R)eplace\n    "postmerge": "Y", # (Y)es or (N)o\n}\n\npayload = {\n    "header": {\n        "mTyp": "GetOptionVolatility"\n    },\n    "message": {\n        "okey": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL",\n            "dt": "2025-01-01",\n            "xx": 1,\n            "cp": "Call"\n        },\n        "price": 1.0, // double\n        "uPrc": 1.0, // double\n        "years": 1.0, // double\n        "sdiv": 1.0, // double\n        "rate": 1.0, // double\n        "exType": "enumValue", // enum(ExerciseType) - None, American, European, Asian, Cliquet\n        "exTime": "enumValue", // enum(ExerciseTime) - None, PM, AM\n        "holidayCalendar": "enumValue", // enum(CalendarCode) - None, NYSE, EUREX, CBOE_EU, NXAM, NXBR, NXLS, NXML, NXOS, NXP, ICEFE, CME, NYMEX, COMEX, MGEX, BXE, CXE, DXE, EUX\n        "timeMetric": "enumValue", // enum(TimeMetric) - None, D252, D365, SRV6\n        "modelType": "enumValue", // enum(CalcModelType) - None, LogNormalExact, NormalExact, LogNormalApprox, NormalApprox\n        "calcEngine": "enumValue", // enum(CalcEngine) - None, FastHybrid, NumericLow, NumericStd, NumericMax\n        "incGreeks": "enumValue", // enum(YesNo) - None, Yes, No\n        "vol": 1.0, // double\n        "effStrike": 1.0, // double\n        "dividendAmount": 1.0, // float\n        "delta": 1.0, // float\n        "gamma": 1.0, // float\n        "theta": 1.0, // float\n        "vega": 1.0, // float\n        "volga": 1.0, // float\n        "vanna": 1.0, // float\n        "deDecay": 1.0, // float\n        "rho": 1.0, // float\n        "phi": 1.0, // float\n        "error": "exampleString", // string\n        "pricerModel": "exampleString", // string\n        "timestamp": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "DiscreteDividend": [ // Repeating Field\n            {\n                "date": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n                "amount": 1.0 // float\n            }\n        ]\n    }\n}\n\nresponse = requests.post(MLINK_PROD_URL, params=params, json=payload)\n'})})}),(0,r.jsx)(i.A,{value:"cUrl",label:"cUrl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\' \\\n--data-urlencode \'apiKey=XXXX-XXXX-XXXX-XXXX\' \\\n--data-urlencode \'cmd=postmsgs\' \\\n--data-urlencode \'postaction=I\' \\ # (I)nsert, or (R)eplace\n--data-urlencode \'postmerge=Y\' \\ # (Y)es or (N)o\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "header": {\n        "mTyp": "GetOptionVolatility"\n    },\n    "message": {\n        "okey": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL",\n            "dt": "2025-01-01",\n            "xx": 1,\n            "cp": "Call"\n        },\n        "price": 1.0, // double\n        "uPrc": 1.0, // double\n        "years": 1.0, // double\n        "sdiv": 1.0, // double\n        "rate": 1.0, // double\n        "exType": "enumValue", // enum(ExerciseType) - None, American, European, Asian, Cliquet\n        "exTime": "enumValue", // enum(ExerciseTime) - None, PM, AM\n        "holidayCalendar": "enumValue", // enum(CalendarCode) - None, NYSE, EUREX, CBOE_EU, NXAM, NXBR, NXLS, NXML, NXOS, NXP, ICEFE, CME, NYMEX, COMEX, MGEX, BXE, CXE, DXE, EUX\n        "timeMetric": "enumValue", // enum(TimeMetric) - None, D252, D365, SRV6\n        "modelType": "enumValue", // enum(CalcModelType) - None, LogNormalExact, NormalExact, LogNormalApprox, NormalApprox\n        "calcEngine": "enumValue", // enum(CalcEngine) - None, FastHybrid, NumericLow, NumericStd, NumericMax\n        "incGreeks": "enumValue", // enum(YesNo) - None, Yes, No\n        "vol": 1.0, // double\n        "effStrike": 1.0, // double\n        "dividendAmount": 1.0, // float\n        "delta": 1.0, // float\n        "gamma": 1.0, // float\n        "theta": 1.0, // float\n        "vega": 1.0, // float\n        "volga": 1.0, // float\n        "vanna": 1.0, // float\n        "deDecay": 1.0, // float\n        "rho": 1.0, // float\n        "phi": 1.0, // float\n        "error": "exampleString", // string\n        "pricerModel": "exampleString", // string\n        "timestamp": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "DiscreteDividend": [ // Repeating Field\n            {\n                "date": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n                "amount": 1.0 // float\n            }\n        ]\n    }\n}\'\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const l={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>E});var r=t(96540),l=t(34164),s=t(23104),i=t(56347),d=t(205),a=t(57485),c=t(31682),o=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=h(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:l}),[j,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,o.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),f=(()=>{const e=c??j;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),o=e=>{const n=e.currentTarget,t=a.indexOf(n),l=d[t].value;l!==r&&(c(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:o,...s,className:(0,l.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(g,{...n,...e})]})}function E(e){const n=(0,p.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);