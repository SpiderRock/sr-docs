"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["54378"],{69349:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>a,assets:()=>d,toc:()=>u,contentTitle:()=>o});var a=JSON.parse('{"id":"Documentation/PlatformAPIs/QueryExamples","title":"Query Examples","description":"Send an Order","source":"@site/versioned_docs/version-8.5.3.3/Documentation/PlatformAPIs/QueryExamples.md","sourceDirName":"Documentation/PlatformAPIs","slug":"/Documentation/PlatformAPIs/QueryExamples","permalink":"/docs/8.5.3.3/Documentation/PlatformAPIs/QueryExamples","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","sidebarPosition":6,"frontMatter":{"title":"Query Examples","sidebar_position":6},"sidebar":"documentationSidebar","previous":{"title":"Auction Responder Specs","permalink":"/docs/8.5.3.3/Documentation/PlatformAPIs/FIX/auction-responder-spec"},"next":{"title":"System Integration","permalink":"/docs/8.5.3.3/Documentation/Integration/"}}'),t=r("52676"),l=r("91503"),s=r("71386"),i=r("9641");let c={title:"Query Examples",sidebar_position:6},o=void 0,d={},u=[{value:"Send an Order",id:"send-an-order",level:2},{value:"Get a Quote",id:"get-a-quote",level:2},{value:"Insert a Position",id:"insert-a-position",level:2}];function p(e){let n={code:"code",h2:"h2",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"send-an-order",children:"Send an Order"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"Stock",label:"Stock",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REPLACE INTO srtrade.msgstkordergateway (ticker_at, ticker_ts, ticker_tk, accnt, orderSide, groupingCode, clientFirm, spdrActionType, orderSize, progressRule, marketSession, parentOrderHandling, parentBalanceHandling, orderLimitType, riskGroupId, traderName, CHECKSUM)\nVALUES ('EQT', 'NMS', 'AAPL', 'T.ACCNT', 'Buy', 'XXXX-XXXX-XXXX-XXXX', 'SRTest', 'addReplace', '100', 'AllowImmediate', 'AllDay', 'ActiveTaker', 'PostLimit', 'Market', 'XXXX-XXXX-XXXX-XXXX', 'user.name', 13);\n\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n        "header": {\n            "mTyp": "SpdrParentOrder",\n        },\n        "message": {\n            "spdrActionType": "AddReplace",\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL"\n            },\n            "secType": "Stock",\n            "accnt": "T.ACCNT",\n            "clientFirm": "SRTest",\n            "groupingCode": "XXXX-XXXX-XXXX-XXXX",\n            "userName": "user.name",\n            "orderSide": "Buy",\n            "orderSize": 100,\n            "marketSession": "AllDay",\n            "parentOrderHandling": "ActiveTaker",\n            "parentBalanceHandling": "PostLimit",\n            "riskGroupId": "XXXX-XXXX-XXXX-XXXX",\n        }\n    }\n'})})})]})}),(0,t.jsx)(i.Z,{value:"Option",label:"Option",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REPLACE INTO spiderrock.msgoptordergateway (accnt, clientFirm, marketSession, spdrActionType, okey_at, okey_ts, okey_tk, okey_yr, okey_mn, okey_dy, okey_xx, okey_cp, orderSide, orderSize, parentOrderHandling, parentBalanceHandling, progressRule, orderLimitType, takeLimitClass, makeLimitClass, tradername, groupingcode, riskgroupid, CHECKSUM)\nVALUES('T.ACCNT', 'SRTest', 'AllDay', 'AddReplace', 'EQT', 'NMS', 'SPX', 2025, 01, 01, 250, 'Call', 'Buy', 10, 'ActiveTaker', 'PostLimit', 'AllowImmediate', 'Market', 'Simple','Simple','user.name', 'XXXX-XXXX-XXXX-XXXX', 'XXXX-XXXX-XXXX-XXXX', 13);\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n        "header": {\n            "mTyp": "SpdrParentOrder",\n        },\n        "message": {\n            "spdrActionType": "AddReplace",\n            "parentShape": "Single",\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL"\n            },\n            "secType": "Option",\n            "accnt": "T.ACCNT",\n            "clientFirm": "SRTest",\n            "groupingCode": "XXXX-XXXX-XXXX-XXXX",\n            "userName": "user.name",\n            "orderSide": "Buy",\n            "orderSize": 10,\n            "progressRule": "Market",\n            "marketSession": "AllDay",\n            "parentOrderHandling": "ActiveTaker",\n            "parentBalanceHandling": "PostLimit",\n            "orderLimitType": "Simple",\n            "riskGroupId": "XXXX-XXXX-XXXX-XXXX",\n\n        }\n    }\n'})})})]})}),(0,t.jsx)(i.Z,{value:"Future",label:"Future",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"REPLACE INTO srtrade.msgstkordergateway (accnt, clientFirm, fkey_at, fkey_ts, fkey_tk, fkey_yr, fkey_mn, fkey_dy, spdractiontype, orderside, ordersize, publicsize, orderlimittype, parentorderhandling, parentbalancehandling, marketSession, groupingcode, riskgroupid, tradername, orderactivesize, CHECKSUM)\nVALUES ('T.ACCNT', 'SRTEST', 'FUT', 'CME', 'ES', 2025, 01, 01, 'addreplace', 'Buy', 5, 'Randomize', 'Market', 'ActiveTaker', 'PostLimit', 'RegMkt', 'XXXX-XXXX-XXXX-XXXX', 'XXXX-XXXX-XXXX-XXXX', 'user.name', 5, 13);\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n        "header": {\n            "mTyp": "SpdrParentOrder",\n        },\n        "message": {\n            "spdrActionType": "AddReplace",\n            "parentShape": "Single",\n            "secKey": {\n                "at": "FUT",\n                "ts": "CME",\n                "tk": "ES"\n            },\n            "secType": "Future",\n            "accnt": "T.ACCNT",\n            "clientFirm": "SRTest",\n            "groupingCode": "XXXX-XXXX-XXXX-XXXX",\n            "userName": "user.name",\n            "orderSide": "Buy",\n            "orderSize": 5,\n            "publicSize": "Randomize",\n            "marketSession": "RegMkt",\n            "parentOrderHandling": "ActiveTaker",\n            "parentBalanceHandling": "PostLimit",\n            "orderLimitType": "Market",\n            "riskGroupId": "XXXX-XXXX-XXXX-XXXX",\n        }\n    }\n'})})})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"get-a-quote",children:"Get a Quote"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"Stock",label:"Stock",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM srlive.msgstockbookquote WHERE ticker_tk = 'AAPL';\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "MLinkStream"\n    },\n    "message": {\n        "queryLabel": "ExampleStockNbbo",\n        "activeLatency": 1, \n        "msgName": "StockBookQuote", \n        "where":"ticker:eq:AAPL-NMS-EQT" \n    }\n}\n'})})})]})}),(0,t.jsx)(i.Z,{value:"Option",label:"Option",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM srlive.msgoptionnbboquote WHERE okey_tk = 'AAPL';\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "MLinkStream"\n    },\n    "message": {\n        "queryLabel": "ExampleOptionNbbo",\n        "activeLatency": 1, \n        "msgName": "OptionNbboQuote", \n    }\n}\n'})})})]})}),(0,t.jsx)(i.Z,{value:"Future",label:"Future",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM srlive.msgfuturebookquote WHERE fkey_tk = 'ES';\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n         "mTyp": "MLinkStream"\n    },\n    "message": {\n        "queryLabel": "ExampleOptionNbbo",\n        "activeLatency": 1, \n        "msgName": "FutureBookQuote", \n    }\n}\n'})})})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"insert-a-position",children:"Insert a Position"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"Stock",label:"Stock",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO srrisk.msgsodclearingrecordv5 (accnt,secKey_at,secKey_ts,secKey_tk,secType,tradeDate,clientFirm,daySide,clrPosition,clrMark,TIMESTAMP)\nVALUES ('T.ACCNT','EQT','NMS','AAPL','Stock','2025-01-01','SRTest','StartOfDay','100','50',NOW());\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "SodClearingRecordV5"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "T.ACCNT"\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL",\n                "dt": "2025-01-01",\n            },\n            "secType": "Stock",\n            "tradeDate": "2025-01-01",\n            "clientFirm": "SRTest"\n        },\n        "daySide": "StartOfDay",\n        "clrPosition": 100,\n        "clrMark": 50,\n        "timestamp": "2025-01-01 12:00:00.000000" \n    }\n} \n'})})})]})}),(0,t.jsx)(i.Z,{value:"Option",label:"Option",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO srrisk.msgsodclearingrecordv5 (accnt,secKey_at,secKey_ts,secKey_tk,secKey_yr,secKey_mn,secKey_dy,secKey_xx,secKey_cp,secType,tradeDate,clientFirm,daySide,clrPosition,clrMark,TIMESTAMP)\nVALUES ('T.ACCNT','EQT','NMS','AAPL','2025','01','01','250','Call','Option','2025-01-01','SRTest','StartOfDay','100','10',NOW());\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "SodClearingRecordV5"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "T.ACCNT"\n            "secKey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL",\n                "dt": "2025-01-01",\n                "xx": "250",\n                "cp": "Call",\n            },\n            "secType": "Option",\n            "tradeDate": "2025-01-01",\n            "clientFirm": "SRTest"\n        },\n        "daySide": "StartOfDay",\n        "clrPosition": 100,\n        "clrMark": 50,\n        "timestamp": "2025-01-01 12:00:00.000000" \n    }\n} \n'})})})]})}),(0,t.jsx)(i.Z,{value:"Future",label:"Future",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"SRSE",label:"SRSE",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO srrisk.msgsodclearingrecordv5 (accnt,secKey_at,secKey_ts,secKey_tk,secKey_yr,secKey_mn,secKey_dy,secType,tradeDate,clientFirm,daySide,clrPosition,clrMark,TIMESTAMP)\nVALUES ('T.ACCNT','FUT','CME','ES','2025','01','01','Future','2025-01-01','SRTest','StartOfDay','100','10',NOW());\n"})})}),(0,t.jsx)(i.Z,{value:"MLink",label:"MLink",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "header": {\n        "mTyp": "SodClearingRecordV5"\n    },\n    "message": {\n        "pkey": {\n            "accnt": "T.ACCNT"\n            "secKey": {\n                "at": "FUT",\n                "ts": "CME",\n                "tk": "ES",\n                "dt": "2025-01-01",\n            },\n            "secType": "Future",\n            "tradeDate": "2025-01-01",\n            "clientFirm": "SRTest"\n        },\n        "daySide": "StartOfDay",\n        "clrPosition": 100,\n        "clrMark": 10,\n        "timestamp": "2025-01-01 12:00:00.000000" \n    }\n} \n'})})})]})})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9641:function(e,n,r){r.d(n,{Z:()=>l});var a=r("52676");r("75271");var t=r("54461");function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_SSzl",l),hidden:r,children:n})}},71386:function(e,n,r){r.d(n,{Z:()=>k});var a=r("52676"),t=r("75271"),l=r("54461"),s=r("52289"),i=r("3225"),c=r("42834"),o=r("40578"),d=r("35834"),u=r("79616");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var X=r("44537");function S(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{let n=e.currentTarget,r=c[o.indexOf(n)].value;r!==t&&(d(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:c.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:p,onClick:u,...s,className:(0,l.Z)("tabs__item","tabItem_aitt",s?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function h(e){let{lazy:n,children:r,selectedValue:s}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function y(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:a}=e,l=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,X]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:l})),[S,h]=function(e){let{queryString:n=!1,groupId:r}=e,a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,t.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})},[l,a])]}({queryString:r,groupId:a}),[y,k]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[a,l]=(0,u.Nk)(r);return[a,(0,t.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:a}),g=(()=>{let e=S??y;return m({value:e,tabValues:l})?e:null})();return(0,c.Z)(()=>{g&&X(g)},[g]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!m({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);X(e),h(e),k(e)},[h,k,l]),tabValues:l}}(e);return(0,a.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_ArS0"),children:[(0,a.jsx)(S,{...n,...e}),(0,a.jsx)(h,{...n,...e})]})}function k(e){let n=(0,X.Z)();return(0,a.jsx)(y,{...e,children:p(e.children)},String(n))}},91503:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var a=r(75271);let t={},l=a.createContext(t);function s(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);