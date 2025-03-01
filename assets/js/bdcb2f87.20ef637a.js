"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[30461],{53520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(74848),a=r(28453),s=r(11470),l=r(19365);const i={title:"Query Examples",sidebar_position:6},o=void 0,c={id:"Documentation/PlatformAPIs/QueryExamples",title:"Query Examples",description:"Send an Order",source:"@site/docs/Documentation/PlatformAPIs/QueryExamples.md",sourceDirName:"Documentation/PlatformAPIs",slug:"/Documentation/PlatformAPIs/QueryExamples",permalink:"/docs/next/Documentation/PlatformAPIs/QueryExamples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Query Examples",sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"Auction Responder Specs",permalink:"/docs/next/Documentation/PlatformAPIs/FIX/auction-responder-spec"},next:{title:"System Integration",permalink:"/docs/next/Documentation/Integration/"}},d={},u=[{value:"Send an Order",id:"send-an-order",level:2},{value:"Stock",id:"stock",level:3},{value:"Option",id:"option",level:3},{value:"Future",id:"future",level:3},{value:"Get a Quote",id:"get-a-quote",level:2},{value:"Stock",id:"stock-1",level:3},{value:"Option",id:"option-1",level:3},{value:"Future",id:"future-1",level:3},{value:"Insert a Position",id:"insert-a-position",level:2},{value:"Stock",id:"stock-2",level:3},{value:"Option",id:"option-2",level:3},{value:"Future",id:"future-2",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"send-an-order",children:"Send an Order"}),"\n",(0,t.jsx)(n.h3,{id:"stock",children:"Stock"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REPLACE INTO srtrade.msgstkordergateway (ticker_at, ticker_ts, ticker_tk, accnt, orderSide, groupingCode, clientFirm, spdrActionType, orderSize, progressRule, marketSession, parentOrderHandling, parentBalanceHandling, orderLimitType, riskGroupId, traderName, CHECKSUM)\nVALUES ('EQT', 'NMS', 'AAPL', 'T.ACCNT', 'Buy', 'XXXX-XXXX-XXXX-XXXX', 'SRTest', 'addReplace', '100', 'AllowImmediate', 'AllDay', 'ActiveTaker', 'PostLimit', 'Market', 'XXXX-XXXX-XXXX-XXXX', 'user.name', 13);\n\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n        "header": {\n            "mTyp": "SpdrParentOrder",\n        },\n        "message": {\n            "spdrActionType": "AddReplace",\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL"\n            },\n            "secType": "Stock",\n            "accnt": "T.ACCNT",\n            "clientFirm": "SRTest",\n            "groupingCode": "XXXX-XXXX-XXXX-XXXX",\n            "userName": "user.name",\n            "orderSide": "Buy",\n            "orderSize": 100,\n            "marketSession": "AllDay",\n            "parentOrderHandling": "ActiveTaker",\n            "parentBalanceHandling": "PostLimit",\n            "riskGroupId": "XXXX-XXXX-XXXX-XXXX",\n        }\n    }\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"option",children:"Option"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REPLACE INTO spiderrock.msgoptordergateway (accnt, clientFirm, marketSession, spdrActionType, okey_at, okey_ts, okey_tk, okey_yr, okey_mn, okey_dy, okey_xx, okey_cp, orderSide, orderSize, parentOrderHandling, parentBalanceHandling, progressRule, orderLimitType, takeLimitClass, makeLimitClass, tradername, groupingcode, riskgroupid, CHECKSUM)\nVALUES('T.ACCNT', 'SRTest', 'AllDay', 'AddReplace', 'EQT', 'NMS', 'SPX', 2025, 01, 01, 250, 'Call', 'Buy', 10, 'ActiveTaker', 'PostLimit', 'AllowImmediate', 'Market', 'Simple','Simple','user.name', 'XXXX-XXXX-XXXX-XXXX', 'XXXX-XXXX-XXXX-XXXX', 13);\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n        "header": {\n            "mTyp": "SpdrParentOrder",\n        },\n        "message": {\n            "spdrActionType": "AddReplace",\n            "parentShape": "Single",\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL"\n            },\n            "secType": "Option",\n            "accnt": "T.ACCNT",\n            "clientFirm": "SRTest",\n            "groupingCode": "XXXX-XXXX-XXXX-XXXX",\n            "userName": "user.name",\n            "orderSide": "Buy",\n            "orderSize": 10,\n            "progressRule": "Market",\n            "marketSession": "AllDay",\n            "parentOrderHandling": "ActiveTaker",\n            "parentBalanceHandling": "PostLimit",\n            "orderLimitType": "Simple",\n            "riskGroupId": "XXXX-XXXX-XXXX-XXXX",\n\n        }\n    }\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"future",children:"Future"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REPLACE INTO srtrade.msgstkordergateway (accnt, clientFirm, fkey_at, fkey_ts, fkey_tk, fkey_yr, fkey_mn, fkey_dy, spdractiontype, orderside, ordersize, publicsize, orderlimittype, parentorderhandling, parentbalancehandling, marketSession, groupingcode, riskgroupid, tradername, orderactivesize, CHECKSUM)\nVALUES ('T.ACCNT', 'SRTEST', 'FUT', 'CME', 'ES', 2025, 01, 01, 'addreplace', 'Buy', 5, 'Randomize', 'Market', 'ActiveTaker', 'PostLimit', 'RegMkt', 'XXXX-XXXX-XXXX-XXXX', 'XXXX-XXXX-XXXX-XXXX', 'user.name', 5, 13);\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n        "header": {\n            "mTyp": "SpdrParentOrder",\n        },\n        "message": {\n            "spdrActionType": "AddReplace",\n            "parentShape": "Single",\n            "secKey": {\n                "at": "FUT",\n                "ts": "CME",\n                "tk": "ES"\n            },\n            "secType": "Future",\n            "accnt": "T.ACCNT",\n            "clientFirm": "SRTest",\n            "groupingCode": "XXXX-XXXX-XXXX-XXXX",\n            "userName": "user.name",\n            "orderSide": "Buy",\n            "orderSize": 5,\n            "publicSize": "Randomize",\n            "marketSession": "RegMkt",\n            "parentOrderHandling": "ActiveTaker",\n            "parentBalanceHandling": "PostLimit",\n            "orderLimitType": "Market",\n            "riskGroupId": "XXXX-XXXX-XXXX-XXXX",\n        }\n    }\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"get-a-quote",children:"Get a Quote"}),"\n",(0,t.jsx)(n.h3,{id:"stock-1",children:"Stock"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM srlive.msgstockbookquote WHERE ticker_tk = 'AAPL';\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "MLinkStream"\n    },\n    "message": {\n        "queryLabel": "ExampleStockNbbo",\n        "activeLatency": 1, \n        "msgName": "StockBookQuote", \n        "where":"ticker:eq:AAPL-NMS-EQT" \n    }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"option-1",children:"Option"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM srlive.msgoptionnbboquote WHERE okey_tk = 'AAPL';\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "MLinkStream"\n    },\n    "message": {\n        "queryLabel": "ExampleOptionNbbo",\n        "activeLatency": 1, \n        "msgName": "OptionNbboQuote", \n    }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"future-1",children:"Future"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM srlive.msgfuturebookquote WHERE fkey_tk = 'ES';\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n         "mTyp": "MLinkStream"\n    },\n    "message": {\n        "queryLabel": "ExampleOptionNbbo",\n        "activeLatency": 1, \n        "msgName": "FutureBookQuote", \n    }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"insert-a-position",children:"Insert a Position"}),"\n",(0,t.jsx)(n.h3,{id:"stock-2",children:"Stock"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO srrisk.msgsodclearingrecordv5 (accnt,secKey_at,secKey_ts,secKey_tk,secType,tradeDate,clientFirm,daySide,clrPosition,clrMark,TIMESTAMP)\nVALUES ('T.ACCNT','EQT','NMS','AAPL','Stock','2025-01-01','SRTest','StartOfDay','100','50',NOW());\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "SodClearingRecordV5"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "T.ACCNT"\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL",\n                "dt": "2025-01-01",\n            },\n            "secType": "Stock",\n            "tradeDate": "2025-01-01",\n            "clientFirm": "SRTest"\n        },\n        "daySide": "StartOfDay",\n        "clrPosition": 100,\n        "clrMark": 50,\n        "timestamp": "2025-01-01 12:00:00.000000" \n    }\n} \n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"option-2",children:"Option"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO srrisk.msgsodclearingrecordv5 (accnt,secKey_at,secKey_ts,secKey_tk,secKey_yr,secKey_mn,secKey_dy,secKey_xx,secKey_cp,secType,tradeDate,clientFirm,daySide,clrPosition,clrMark,TIMESTAMP)\nVALUES ('T.ACCNT','EQT','NMS','AAPL','2025','01','01','250','Call','Option','2025-01-01','SRTest','StartOfDay','100','10',NOW());\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "SodClearingRecordV5"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "T.ACCNT"\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL",\n                "dt": "2025-01-01",\n                "xx": "250",\n                "cp": "Call",\n            },\n            "secType": "Option",\n            "tradeDate": "2025-01-01",\n            "clientFirm": "SRTest"\n        },\n        "daySide": "StartOfDay",\n        "clrPosition": 100,\n        "clrMark": 50,\n        "timestamp": "2025-01-01 12:00:00.000000" \n    }\n} \n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"future-2",children:"Future"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO srrisk.msgsodclearingrecordv5 (accnt,secKey_at,secKey_ts,secKey_tk,secKey_yr,secKey_mn,secKey_dy,secType,tradeDate,clientFirm,daySide,clrPosition,clrMark,TIMESTAMP)\nVALUES ('T.ACCNT','FUT','CME','ES','2025','01','01','Future','2025-01-01','SRTest','StartOfDay','100','10',NOW());\n"})})}),(0,t.jsx)(l.A,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "SodClearingRecordV5"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "T.ACCNT"\n            "secKey": {\n                "at": "FUT",\n                "ts": "CME",\n                "tk": "ES",\n                "dt": "2025-01-01",\n            },\n            "secType": "Future",\n            "tradeDate": "2025-01-01",\n            "clientFirm": "SRTest"\n        },\n        "daySide": "StartOfDay",\n        "clrPosition": 100,\n        "clrMark": 10,\n        "timestamp": "2025-01-01 12:00:00.000000" \n    }\n} \n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>A});var t=r(96540),a=r(34164),s=r(23104),l=r(56347),i=r(205),o=r(57485),c=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function X(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=X({queryString:r,groupId:a}),[h,S]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),y=(()=>{const e=c??h;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),S(e)}),[u,S,s]),tabValues:s}}var S=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(c(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function T(e){const n=h(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,k.jsx)(g,{...n,...e}),(0,k.jsx)(x,{...n,...e})]})}function A(e){const n=(0,S.A)();return(0,k.jsx)(T,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);