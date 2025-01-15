"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34583],{86645:(e,t,n)=>{n.d(t,{A:()=>k});var o=n(96540),r=n(34164),i=n(75659),a=n(39599),s=n(74848);var c=n(11848),p=n(49559),l=n(46126),u=n(28466),d=n(78660),h=n(38413),m=n(31609);function x(e){return(0,m.Ay)("MuiTypography",e)}(0,h.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const g={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},f=a.A,b=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.A)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((0,p.A)((({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter((([e,t])=>"inherit"!==e&&t&&"object"==typeof t)).map((([e,t])=>({props:{variant:e},style:t}))),...Object.entries(e.palette).filter((0,d.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))),...Object.entries(e.palette?.text||{}).filter((([,e])=>"string"==typeof e)).map((([t])=>({props:{color:`text${(0,u.A)(t)}`},style:{color:(e.vars||e).palette.text[t]}}))),{props:({ownerState:e})=>"inherit"!==e.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]})))),S={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k=o.forwardRef((function(e,t){const{color:n,...o}=(0,l.b)({props:e,name:"MuiTypography"}),a=f({...o,...!g[n]&&{color:n}}),{align:c="inherit",className:p,component:d,gutterBottom:h=!1,noWrap:m=!1,paragraph:k=!1,variant:v="body1",variantMapping:y=S,...w}=a,A={...a,align:c,color:n,className:p,component:d,gutterBottom:h,noWrap:m,paragraph:k,variant:v,variantMapping:y},j=d||(k?"p":y[v]||S[v])||"span",T=(e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:a,classes:s}=e,c={root:["root",a,"inherit"!==e.align&&`align${(0,u.A)(t)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,i.A)(c,x,s)})(A);return(0,s.jsx)(b,{as:j,ref:t,className:(0,r.A)(T.root,p),...w,ownerState:A,style:{..."inherit"!==c&&{"--Typography-textAlign":c},...w.style}})}))},44675:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(90423),r=n(22765),i=n(58312);function a(){const e=(0,o.A)(r.A);return e[i.A]||e}},80589:(e,t,n)=>{n.d(t,{K:()=>r});var o=n(96540);const r=()=>{const[e,t]=(0,o.useState)("Staging");return(0,o.useEffect)((()=>{const e=()=>{const e=document.querySelector('.dropdown .navbar__link[aria-haspopup="true"]');if(e){const n=e.textContent;n&&t(n)}};e();const n=new MutationObserver(e),o=document.querySelector('.dropdown .navbar__link[aria-haspopup="true"]');return o&&n.observe(o,{characterData:!0,subtree:!0,childList:!0}),()=>{n.disconnect()}}),[]),e}},23826:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var o=n(79201),r=n(96540),i=n(58968),a=n(34164),s=n(31609),c=n(75659),p=n(13967),l=n(47379);var u=n(90423);function d({props:e,name:t,defaultTheme:n,themeId:o}){let r=(0,u.A)(n);return o&&(r=r[o]||r),function(e){const{theme:t,name:n,props:o}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,l.A)(t.components[n].defaultProps,o):o}({theme:r,name:t,props:e})}const h=(0,n(28351).Ay)();var m=n(42370),x=n(74848);const g=(0,m.A)(),f=h("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,p.A)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=e=>d({props:e,name:"MuiContainer",defaultTheme:g});var S=n(28466),k=n(11848),v=n(46126);const y=function(e={}){const{createStyledComponent:t=f,useThemeProps:n=b,componentName:o="MuiContainer"}=e,i=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const o=n,r=e.breakpoints.values[o];return 0!==r&&(t[e.breakpoints.up(o)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}))),l=r.forwardRef((function(e,t){const r=n(e),{className:l,component:u="div",disableGutters:d=!1,fixed:h=!1,maxWidth:m="lg",classes:g,...f}=r,b={...r,component:u,disableGutters:d,fixed:h,maxWidth:m},S=((e,t)=>{const{classes:n,fixed:o,disableGutters:r,maxWidth:i}=e,a={root:["root",i&&`maxWidth${(0,p.A)(String(i))}`,o&&"fixed",r&&"disableGutters"]};return(0,c.A)(a,(e=>(0,s.Ay)(t,e)),n)})(b,o);return(0,x.jsx)(i,{as:u,ownerState:b,className:(0,a.A)(S.root,l),ref:t,...f})}));return l}({createStyledComponent:(0,k.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,S.A)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,v.b)({props:e,name:"MuiContainer"})}),w=y;var A=n(11317),j=n(39599),T=n(89499),W=n(52308);const $=(0,m.A)(),M=h("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function C(e){return d({props:e,name:"MuiStack",defaultTheme:$})}function D(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,i)=>(e.push(o),i<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${i}`})),e)),[])}const R=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...(0,T.NI)({theme:t},(0,T.kW)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e})))};if(e.spacing){const o=(0,W.LX)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,T.kW)({values:e.direction,base:r}),a=(0,T.kW)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const o=t>0?i[n[t-1]]:"column";i[e]=o}}));const s=(t,n)=>{return e.useFlexGap?{gap:(0,W._W)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${r=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,W._W)(o,t)}};var r};n=(0,A.A)(n,(0,T.NI)({theme:t},a,s))}return n=(0,T.iZ)(t.breakpoints,n),n};const F=function(e={}){const{createStyledComponent:t=M,useThemeProps:n=C,componentName:o="MuiStack"}=e,i=t(R),p=r.forwardRef((function(e,t){const r=n(e),p=(0,j.A)(r),{component:l="div",direction:u="column",spacing:d=0,divider:h,children:m,className:g,useFlexGap:f=!1,...b}=p,S={direction:u,spacing:d,useFlexGap:f},k=(0,c.A)({root:["root"]},(e=>(0,s.Ay)(o,e)),{});return(0,x.jsx)(i,{as:l,ownerState:S,ref:t,className:(0,a.A)(k.root,g),...b,children:h?D(m,h):m})}));return p}({createStyledComponent:(0,k.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,v.b)({props:e,name:"MuiStack"})}),L=F;var N=n(86645),B=n(1861);const P="Documentation/GettingStarted/",G="MessageSchemas/Schema",z="Documentation/Products/",I=e=>{let{baseUrl:t}=e;return(0,x.jsx)(i.A,{sx:{background:"linear-gradient(102.2deg, #1C2129 0%, #44495B 100%)",width:"100%",alignItems:"center"},children:(0,x.jsxs)(w,{sx:{display:"flex",justifyContent:"space-between",paddingBottom:"20px",flexWrap:"wrap"},children:[(0,x.jsxs)(L,{sx:{marginTop:"50px"},children:[(0,x.jsx)(N.A,{variant:"h1",sx:{fontWeight:700,fontSize:"32px"},children:"SpiderRock Connect Documentation"}),(0,x.jsx)(N.A,{sx:{fontWeight:400,fontSize:"20px"},children:"Discover how SpiderRock's products and APIs can work for you."}),(0,x.jsxs)(i.A,{display:"flex",py:"20px",children:[(0,x.jsx)(B.A,{sx:{backgroundColor:"#3683CC",fontWeight:400,fontSize:"16px",padding:"10px 20px 10px 20px",color:"white","&:hover":{backgroundColor:"#5496D4",color:"white"},textTransform:"none"},href:t+P,children:"Get Started"}),(0,x.jsx)(B.A,{sx:{backgroundColor:"#44495B",color:"white","&:hover":{backgroundColor:"#5D6379",color:"white"},fontSize:"16px",padding:"10px 20px 10px 20px",textTransform:"none",marginLeft:"10px"},href:t+"MessageSchemas/Schema",children:"Explore Code Schemas"})]})]}),(0,x.jsxs)(i.A,{sx:{marginTop:"5%",marginBottom:"5%",border:"1px solid #7B8298",borderRadius:"6px",display:"inline-block",paddingX:"3%"},children:[(0,x.jsx)(N.A,{sx:{paddingTop:"10px",fontSize:"16px",fontWeight:700,color:"#F6F8FF"},children:"Migrating from V7?"}),(0,x.jsxs)(N.A,{sx:{paddingBottom:"10px",fontSize:"14px",fontWeight:400,color:"#F6F8FF"},children:["Check out our ",(0,x.jsx)("a",{href:t+"Documentation/V8Migration",children:"migration guide"})," ",(0,x.jsx)("br",{}),"or"," ",(0,x.jsx)("a",{href:t+"MessageSchemas/V7%20to%20V8%20Differences/",children:"compare message differences"})]})]})]})})};var O=n(44675);const E=r.createContext();function V(e){return(0,s.Ay)("MuiGrid",e)}const _=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],U=(0,n(38413).A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),..._.map((e=>`grid-xs-${e}`)),..._.map((e=>`grid-sm-${e}`)),..._.map((e=>`grid-md-${e}`)),..._.map((e=>`grid-lg-${e}`)),..._.map((e=>`grid-xl-${e}`))]),X=U;function H({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const o=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return o.slice(0,o.indexOf(n))}const q=(0,k.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:o,direction:r,item:i,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:p}=n;let l=[];o&&(l=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const o=[];return t.forEach((t=>{const r=e[t];Number(r)>0&&o.push(n[`spacing-${t}-${String(r)}`])})),o}(a,p,t));const u=[];return p.forEach((e=>{const o=n[e];o&&u.push(t[`grid-${e}-${String(o)}`])})),[t.root,o&&t.container,i&&t.item,c&&t.zeroMinWidth,...l,"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},..."wrap"!==e.wrap&&{flexWrap:e.wrap}})),(function({theme:e,ownerState:t}){const n=(0,T.kW)({values:t.direction,breakpoints:e.breakpoints.values});return(0,T.NI)({theme:e},n,(e=>{const t={flexDirection:e};return e.startsWith("column")&&(t[`& > .${X.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:o}=t;let r={};if(n&&0!==o){const t=(0,T.kW)({values:o,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=H({breakpoints:e.breakpoints.values,values:t})),r=(0,T.NI)({theme:e},t,((t,o)=>{const r=e.spacing(t);return"0px"!==r?{marginTop:`calc(-1 * ${r})`,[`& > .${X.item}`]:{paddingTop:r}}:n?.includes(o)?{}:{marginTop:0,[`& > .${X.item}`]:{paddingTop:0}}}))}return r}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:o}=t;let r={};if(n&&0!==o){const t=(0,T.kW)({values:o,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=H({breakpoints:e.breakpoints.values,values:t})),r=(0,T.NI)({theme:e},t,((t,o)=>{const r=e.spacing(t);if("0px"!==r){return{width:`calc(100% + ${r})`,marginLeft:`calc(-1 * ${r})`,[`& > .${X.item}`]:{paddingLeft:r}}}return n?.includes(o)?{}:{width:"100%",marginLeft:0,[`& > .${X.item}`]:{paddingLeft:0}}}))}return r}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((o,r)=>{let i={};if(t[r]&&(n=t[r]),!n)return o;if(!0===n)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=(0,T.kW)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof a?a[r]:a;if(null==s)return o;const c=Math.round(n/s*1e8)/1e6+"%";let p={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${c} + ${n})`;p={flexBasis:e,maxWidth:e}}}i={flexBasis:c,flexGrow:0,maxWidth:c,...p}}return 0===e.breakpoints.values[r]?Object.assign(o,i):o[e.breakpoints.up(r)]=i,o}),{})}));const K=e=>{const{classes:t,container:n,direction:o,item:r,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:p}=e;let l=[];n&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const o=e[t];if(Number(o)>0){const e=`spacing-${t}-${String(o)}`;n.push(e)}})),n}(i,p));const u=[];p.forEach((t=>{const n=e[t];n&&u.push(`grid-${t}-${String(n)}`)}));const d={root:["root",n&&"container",r&&"item",s&&"zeroMinWidth",...l,"row"!==o&&`direction-xs-${String(o)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,c.A)(d,V,t)},J=r.forwardRef((function(e,t){const n=(0,v.b)({props:e,name:"MuiGrid"}),{breakpoints:o}=(0,O.A)(),i=(0,j.A)(n),{className:s,columns:c,columnSpacing:p,component:l="div",container:u=!1,direction:d="row",item:h=!1,rowSpacing:m,spacing:g=0,wrap:f="wrap",zeroMinWidth:b=!1,...S}=i,k=m||g,y=p||g,w=r.useContext(E),A=u?c||12:w,T={},W={...S};o.keys.forEach((e=>{null!=S[e]&&(T[e]=S[e],delete W[e])}));const $={...i,columns:A,container:u,direction:d,item:h,rowSpacing:k,columnSpacing:y,wrap:f,zeroMinWidth:b,spacing:g,...T,breakpoints:o.keys},M=K($);return(0,x.jsx)(E.Provider,{value:A,children:(0,x.jsx)(q,{ownerState:$,className:(0,a.A)(M.root,s),as:l,ref:t,...W})})}));const Z=J,Q=e=>{let{sectionTitle:t,sectionText:n,buttonText:o,buttonLink:r}=e;return(0,x.jsx)(i.A,{sx:{backgroundColor:"#262A37",padding:"10%",height:"100%"},children:(0,x.jsxs)(w,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:[(0,x.jsx)(N.A,{sx:{fontWeight:700,font:"FontFamily",fontSize:"20px"},children:t}),(0,x.jsx)(i.A,{sx:{marginTop:"2px",marginBottom:"30px",fontWeight:400,fontSize:"14px",font:"Roboto"},children:n}),(0,x.jsx)(B.A,{sx:{backgroundColor:"#3683CC",color:"white",fontWeight:400,fontSize:"14px","&:hover":{backgroundColor:"#5496D4",color:"white"},textTransform:"none",padding:"8px 16px 8px 16px",alignSelf:"flex-start"},href:r,children:o})]})})},Y=e=>{let{baseUrl:t}=e;const n=[{sectionTitle:"Platform Features",sectionText:(0,x.jsxs)(x.Fragment,{children:["Learn about ",(0,x.jsx)("a",{href:t+"Documentation/PlatformFeatures/OrderManagement/",children:"order execution"}),","," ",(0,x.jsx)("a",{href:t+"Documentation/PlatformFeatures/RiskManagement/",children:"risk management"}),", and"," ",(0,x.jsx)("a",{href:t+"Documentation/PlatformFeatures/Analytics/",children:"option analytics"}),"."]}),buttonText:"Discover our features",buttonLink:t+"Documentation/PlatformFeatures/"},{sectionTitle:"Our Products",sectionText:(0,x.jsxs)(x.Fragment,{children:["Learn about our ",(0,x.jsx)("a",{href:t+z,children:"Tools"})," and our"," ",(0,x.jsx)("a",{href:t+"Documentation/PlatformAPIs/SRSE/",children:"SRSE"}),", ",(0,x.jsx)("a",{href:t+"Documentation/PlatformAPIs/MLink/",children:"MLink"}),", and"," ",(0,x.jsx)("a",{href:t+"Documentation/PlatformAPIs/FIX/",children:"FIX"})," APIs."]}),buttonText:"Discover our products",buttonLink:t+z},{sectionTitle:"SpiderRock ATS",sectionText:(0,x.jsxs)(x.Fragment,{children:["Learn how to connect to our ",(0,x.jsx)("a",{href:t+"SpiderRockConnectATS/SpiderRockConnectATS/",children:"ATS"})," and utilize ",(0,x.jsx)("a",{href:t+"SpiderRockConnectATS/BlockAuctions/",children:"Block"})," and"," ",(0,x.jsx)("a",{href:t+"SpiderRockConnectATS/FlashAuctions/",children:"Flash"})," auctions."]}),buttonText:"Discover our ATS",buttonLink:t+"SpiderRockConnectATS/SpiderRockConnectATS/"},{sectionTitle:"Integration",sectionText:(0,x.jsxs)(x.Fragment,{children:["Learn how to ",(0,x.jsx)("a",{href:t+"Documentation/Integration/NetworkAccess/",children:"connect to us"}),","," ",(0,x.jsx)("a",{href:t+P,children:"get login creds"}),", and use our"," ",(0,x.jsx)("a",{href:t+"Documentation/Integration/V8Sandboxes/",children:"sandbox environments"}),"."]}),buttonText:"Discover how to integrate",buttonLink:t+"Documentation/Integration"},{sectionTitle:"Message Schemas",sectionText:(0,x.jsxs)(x.Fragment,{children:["Learn about our ",(0,x.jsx)("a",{href:t+G,children:"message schemas"})," ","and ",(0,x.jsx)("a",{href:t+"MessageSchemas/V8%20Staging%20to%20Production%20Differences/",children:"schema versioning"}),"."]}),buttonText:"Discover our schemas",buttonLink:t+G},{sectionTitle:"Historical Data",sectionText:(0,x.jsx)(x.Fragment,{children:"Access historical data and learn about our data services."}),buttonText:"Discover our data",buttonLink:t+"Documentation/HistoricalData/"}];return(0,x.jsx)(w,{sx:{marginTop:3,marginBottom:3},children:(0,x.jsx)(Z,{container:!0,spacing:3,children:n.map(((e,t)=>(0,x.jsx)(Z,{item:!0,xs:12,sm:6,md:4,display:"flex",children:(0,x.jsx)(Q,{sectionText:e.sectionText,sectionTitle:e.sectionTitle,buttonLink:e.buttonLink,buttonText:e.buttonText})},t)))})})};var ee=n(80589),te=n(44586);const ne=(e,t)=>{let n="/docs";const{globalData:o}=t,r=o["docusaurus-plugin-content-docs"].default.versions;if(r&&r.length>0){const t=r.find((t=>t.label===e));t&&(n=t.path)}return n+"/"};function oe(){const e=(0,te.A)(),t=(0,ee.K)(),n=ne(t,e);return(0,x.jsxs)(o.A,{description:"Discover how SpiderRock's products and APIs can work for you.",children:[(0,x.jsx)(I,{baseUrl:n}),(0,x.jsx)("main",{children:(0,x.jsx)(Y,{baseUrl:n})})]})}}}]);