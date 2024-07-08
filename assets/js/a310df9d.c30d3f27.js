"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23925],{59787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(74848),s=t(28453);const i={title:"System Integration",sidebar_position:4},o=void 0,c={id:"Documentation/Integration/Integration",title:"System Integration",description:"All SpiderRock network services can be accessed by connecting to a service in one of our production (Saturn) or staging (Venus) system environments or sandboxes (test environments).",source:"@site/docs/Documentation/Integration/Integration.md",sourceDirName:"Documentation/Integration",slug:"/Documentation/Integration/",permalink:"/docs/Documentation/Integration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"System Integration",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Software Release Cycle",permalink:"/docs/Documentation/PlatformAPIs/SoftwareReleases"},next:{title:"Web App Tool Suite",permalink:"/docs/Documentation/Integration/WebAppToolSuite"}},d={},l=[];function a(e){const n={a:"a",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"All SpiderRock network services can be accessed by connecting to a service in one of our production (Saturn) or staging (Venus) system environments or sandboxes (test environments)."}),"\n",(0,r.jsx)(n.p,{children:"All SpiderRock service access points are public or semi-public addresses on the public facing (frontend) side of a reverse proxy cluster. Production services for WebApp Tools, MLink servers, and SRSE servers are organized into service pools and there is no guarantee that you will connect to the same backend server if you disconnect/reconnect."}),"\n",(0,r.jsx)(n.p,{children:"We can establish site-to-site VPN service from most places in the world and we accept cross connects in Equinix CH2, NY4, NY5, EC2 and FR2 facilities.  Contact us for more information."}),"\n",(0,r.jsx)(n.p,{children:"The primary access point for US equity, future, and option data is NY5.  The primary access point for eurpean data is FR2. In general, you will need to access NY5 for US centric data and FR2 for European centric data."}),"\n",(0,r.jsx)(n.p,{children:"If you wish to run our WebApp tool suite and access data from both the US and Europe interchangably from the same tool instance you will need network access to both NY5 and FR2 from the tool."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Service"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Protocol"}),(0,r.jsx)(n.th,{children:"Availability"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"WebApp/WTS"})}),(0,r.jsx)(n.td,{children:"WebApp tool suite server pool"}),(0,r.jsx)(n.td,{children:"TCP/HTTPS"}),(0,r.jsx)(n.td,{children:"X-Con, VPN, INet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"MLink/REST"})}),(0,r.jsx)(n.td,{children:"Primary MLink/REST server pool"}),(0,r.jsx)(n.td,{children:"TCP/HTTPS"}),(0,r.jsx)(n.td,{children:"X-Con, VPN, Inet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"MLink/WS"})}),(0,r.jsx)(n.td,{children:"Pirmary MLink/WS server pool"}),(0,r.jsx)(n.td,{children:"TCP/HTTPS"}),(0,r.jsx)(n.td,{children:"X-Con, VPN, INet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"SRSE/Primary"})}),(0,r.jsx)(n.td,{children:"Primary SRSE server pool"}),(0,r.jsx)(n.td,{children:"TCP/MariaDB"}),(0,r.jsx)(n.td,{children:"X-Con, VPN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"SRSE/Private"})}),(0,r.jsx)(n.td,{children:"Private SRSE server pools"}),(0,r.jsx)(n.td,{children:"TCP/MariaDB"}),(0,r.jsx)(n.td,{children:"X-Con, VPN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"FIX/CGW"})}),(0,r.jsx)(n.td,{children:"FIX client gateway servers"}),(0,r.jsx)(n.td,{children:"TCP/FIX 4.x"}),(0,r.jsx)(n.td,{children:"X-Con, VPN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"FIX/Drop"})}),(0,r.jsx)(n.td,{children:"FIX drop servers"}),(0,r.jsx)(n.td,{children:"TCP/FIX 4.x"}),(0,r.jsx)(n.td,{children:"X-Con, VPN"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"SpiderRock services all have URLs that indicate the service type as well as the location of the service.  The general pattern is:"}),"\n",(0,r.jsx)(n.p,{children:"<service-type>.<system-realm>.<system-environment>.spiderrockconnect.com/(protocol)"}),"\n",(0,r.jsx)(n.p,{children:"SATURN is our production system-environment and VENUS is our staging system-environment and our system-realms are as follows:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"SysRealm"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"NMS"})}),(0,r.jsx)(n.td,{children:"US/NY5 sys realm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CME"})}),(0,r.jsx)(n.td,{children:"US/CME sys realm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"FR2"})}),(0,r.jsx)(n.td,{children:"EU/FR2 sys realm"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"URL"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://mlink-test.nms.saturn.spiderrockconnect.com",children:"https://mlink-test.nms.saturn.spiderrockconnect.com"})}),(0,r.jsx)(n.td,{children:"The access point for the mlink sandbox service running in the NMS system realm in the SATURN system environment."})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);