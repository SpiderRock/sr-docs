"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["48706"],{29017:function(e,t,n){n.d(t,{n:function(){return r}});var o=n(75271);let r=()=>{let[e,t]=(0,o.useState)("Staging");return(0,o.useEffect)(()=>{let e=()=>{let e=document.querySelector('.dropdown .navbar__link[aria-haspopup="true"]');if(e){let n=e.textContent;n&&t(n)}};e();let n=new MutationObserver(e),o=document.querySelector('.dropdown .navbar__link[aria-haspopup="true"]');return o&&n.observe(o,{characterData:!0,subtree:!0,childList:!0}),()=>{n.disconnect()}},[]),e}},76857:function(e,t,n){n.r(t),n.d(t,{default:()=>b});var o=n("52676"),r=n("59207");n("75271");var i=n("42592"),s=n("89619"),a=n("99659"),c=n("39360"),l=n("52717");let d="Documentation/GettingStarted/",x="MessageSchemas/Schema",u="Documentation/Products/",h=e=>{let{baseUrl:t}=e;return(0,o.jsx)(i.Z,{sx:{background:"linear-gradient(102.2deg, #1C2129 0%, #44495B 100%)",width:"100%",alignItems:"center"},children:(0,o.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between",paddingBottom:"20px",flexWrap:"wrap"},children:[(0,o.jsxs)(a.Z,{sx:{marginTop:"50px"},children:[(0,o.jsx)(c.Z,{variant:"h1",sx:{fontWeight:700,fontSize:"32px"},children:"SpiderRock Connect Documentation"}),(0,o.jsx)(c.Z,{sx:{fontWeight:400,fontSize:"20px"},children:"Discover how SpiderRock's products and APIs can work for you."}),(0,o.jsxs)(i.Z,{display:"flex",py:"20px",children:[(0,o.jsx)(l.Z,{sx:{backgroundColor:"#3683CC",fontWeight:400,fontSize:"16px",padding:"10px 20px 10px 20px",color:"white","&:hover":{backgroundColor:"#5496D4",color:"white"},textTransform:"none"},href:t+d,children:"Get Started"}),(0,o.jsx)(l.Z,{sx:{backgroundColor:"#44495B",color:"white","&:hover":{backgroundColor:"#5D6379",color:"white"},fontSize:"16px",padding:"10px 20px 10px 20px",textTransform:"none",marginLeft:"10px"},href:t+"MessageSchemas/Schema",children:"Explore Code Schemas"})]})]}),(0,o.jsxs)(i.Z,{sx:{marginTop:"5%",marginBottom:"5%",border:"1px solid #7B8298",borderRadius:"6px",display:"inline-block",paddingX:"3%"},children:[(0,o.jsx)(c.Z,{sx:{paddingTop:"10px",fontSize:"16px",fontWeight:700,color:"#F6F8FF"},children:"Migrating from V7?"}),(0,o.jsxs)(c.Z,{sx:{paddingBottom:"10px",fontSize:"14px",fontWeight:400,color:"#F6F8FF"},children:["Check out our ",(0,o.jsx)("a",{href:t+"Documentation/V8Migration",children:"migration guide"})," ",(0,o.jsx)("br",{}),"or"," ",(0,o.jsx)("a",{href:t+"MessageSchemas/V7%20to%20V8%20Differences/",children:"compare message differences"})]})]})]})})};var p=n("63988");let f=e=>{let{sectionTitle:t,sectionText:n,buttonText:r,buttonLink:a}=e;return(0,o.jsx)(i.Z,{sx:{backgroundColor:"#262A37",padding:"10%",height:"100%"},children:(0,o.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:[(0,o.jsx)(c.Z,{sx:{fontWeight:700,font:"FontFamily",fontSize:"20px"},children:t}),(0,o.jsx)(i.Z,{sx:{marginTop:"2px",marginBottom:"30px",fontWeight:400,fontSize:"14px",font:"Roboto"},children:n}),(0,o.jsx)(l.Z,{sx:{backgroundColor:"#3683CC",color:"white",fontWeight:400,fontSize:"14px","&:hover":{backgroundColor:"#5496D4",color:"white"},textTransform:"none",padding:"8px 16px 8px 16px",alignSelf:"flex-start"},href:a,children:r})]})})},m=e=>{let{baseUrl:t}=e,n=[{sectionTitle:"Platform Features",sectionText:(0,o.jsxs)(o.Fragment,{children:["Learn about ",(0,o.jsx)("a",{href:t+"Documentation/PlatformFeatures/OrderManagement/",children:"order execution"}),","," ",(0,o.jsx)("a",{href:t+"Documentation/PlatformFeatures/RiskManagement/",children:"risk management"}),", and"," ",(0,o.jsx)("a",{href:t+"Documentation/PlatformFeatures/Analytics/",children:"option analytics"}),"."]}),buttonText:"Discover our features",buttonLink:t+"Documentation/PlatformFeatures/"},{sectionTitle:"Our Products",sectionText:(0,o.jsxs)(o.Fragment,{children:["Learn about our ",(0,o.jsx)("a",{href:t+u,children:"Tools"})," and our"," ",(0,o.jsx)("a",{href:t+"Documentation/PlatformAPIs/SRSE/",children:"SRSE"}),", ",(0,o.jsx)("a",{href:t+"Documentation/PlatformAPIs/MLink/",children:"MLink"}),", and"," ",(0,o.jsx)("a",{href:t+"Documentation/PlatformAPIs/FIX/",children:"FIX"})," APIs."]}),buttonText:"Discover our products",buttonLink:t+u},{sectionTitle:"SpiderRock ATS",sectionText:(0,o.jsxs)(o.Fragment,{children:["Learn how to connect to our ",(0,o.jsx)("a",{href:t+"SpiderRockConnectATS/SpiderRockConnectATS/",children:"ATS"})," and utilize ",(0,o.jsx)("a",{href:t+"SpiderRockConnectATS/BlockAuctions/",children:"Block"})," and"," ",(0,o.jsx)("a",{href:t+"SpiderRockConnectATS/FlashAuctions/",children:"Flash"})," auctions."]}),buttonText:"Discover our ATS",buttonLink:t+"SpiderRockConnectATS/SpiderRockConnectATS/"},{sectionTitle:"Integration",sectionText:(0,o.jsxs)(o.Fragment,{children:["Learn how to ",(0,o.jsx)("a",{href:t+"Documentation/Integration/NetworkAccess/",children:"connect to us"}),","," ",(0,o.jsx)("a",{href:t+d,children:"get login creds"}),", and use our"," ",(0,o.jsx)("a",{href:t+"Documentation/Integration/V8Sandboxes/",children:"sandbox environments"}),"."]}),buttonText:"Discover how to integrate",buttonLink:t+"Documentation/Integration"},{sectionTitle:"Message Schemas",sectionText:(0,o.jsxs)(o.Fragment,{children:["Learn about our ",(0,o.jsx)("a",{href:t+x,children:"message schemas"})," ","and ",(0,o.jsx)("a",{href:t+"MessageSchemas/V8%20Staging%20to%20Production%20Differences/",children:"schema versioning"}),"."]}),buttonText:"Discover our schemas",buttonLink:t+x},{sectionTitle:"Historical Data",sectionText:(0,o.jsx)(o.Fragment,{children:"Access historical data and learn about our data services."}),buttonText:"Discover our data",buttonLink:t+"Documentation/HistoricalData/"}];return(0,o.jsx)(s.Z,{sx:{marginTop:3,marginBottom:3},children:(0,o.jsx)(p.ZP,{container:!0,spacing:3,children:n.map((e,t)=>(0,o.jsx)(p.ZP,{item:!0,xs:12,sm:6,md:4,display:"flex",children:(0,o.jsx)(f,{sectionText:e.sectionText,sectionTitle:e.sectionTitle,buttonLink:e.buttonLink,buttonText:e.buttonText})},t))})})};var g=n("29017"),j=n("88841");let S=(e,t)=>{let n="/docs",{globalData:o}=t,r=o["docusaurus-plugin-content-docs"].default.versions;if(r&&r.length>0){let t=r.find(t=>t.label===e);t&&(n=t.path)}return n+"/"};function b(){let e=(0,j.Z)(),t=S((0,g.n)(),e);return(0,o.jsxs)(r.Z,{description:"Discover how SpiderRock's products and APIs can work for you.",children:[(0,o.jsx)(h,{baseUrl:t}),(0,o.jsx)("main",{children:(0,o.jsx)(m,{baseUrl:t})})]})}}}]);