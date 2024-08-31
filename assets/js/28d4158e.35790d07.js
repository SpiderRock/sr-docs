"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91794],{93302:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(74848),r=s(28453);const i={title:"Network Access",sidebar_position:1},d=void 0,c={id:"Documentation/Integration/NetworkAccess/NetworkAccess",title:"Network Access",description:"All SpiderRock Connect APIs and network services can be accessed by connecting to SpiderRock Connect's production (Saturn) or staging (Venus) environments. In addition, client can connect to one of the sandbox (Test/Dev) environments at any time as part of their software develop process.",source:"@site/versioned_docs/version-8.4.08.4/Documentation/Integration/NetworkAccess/NetworkAccess.md",sourceDirName:"Documentation/Integration/NetworkAccess",slug:"/Documentation/Integration/NetworkAccess/",permalink:"/docs/8.4.08.4/Documentation/Integration/NetworkAccess/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",sidebarPosition:1,frontMatter:{title:"Network Access",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"System Integration",permalink:"/docs/8.4.08.4/Documentation/Integration/"},next:{title:"V8 Sandboxes",permalink:"/docs/8.4.08.4/Documentation/Integration/V8Sandboxes"}},o={},l=[{value:"MLink End Points",id:"mlink-end-points",level:2},{value:"Production",id:"production",level:3},{value:"Staging",id:"staging",level:3},{value:"SRSE End Points",id:"srse-end-points",level:2},{value:"Production",id:"production-1",level:3},{value:"FIX End Points",id:"fix-end-points",level:2},{value:"FIX Production and UAT",id:"fix-production-and-uat",level:3},{value:"Sandboxes",id:"sandboxes",level:2},{value:"MLink / Development",id:"mlink--development",level:3},{value:"FIX / Development",id:"fix--development",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"All SpiderRock Connect APIs and network services can be accessed by connecting to SpiderRock Connect's production (Saturn) or staging (Venus) environments. In addition, client can connect to one of the sandbox (Test/Dev) environments at any time as part of their software develop process."}),"\n",(0,t.jsx)(n.p,{children:"All of SpiderRock Connect's service access points are public or semi-public addresses on the client facing (front-end) side of a reverse proxy cluster and are available as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Service"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Protocol"}),(0,t.jsx)(n.th,{children:"Availability"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"WebApp/WTS"})}),(0,t.jsx)(n.td,{children:"WebApp tool suite server pool"}),(0,t.jsx)(n.td,{children:"TCP/HTTPS"}),(0,t.jsx)(n.td,{children:"X-Con, VPN, Internet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MLink/REST"})}),(0,t.jsx)(n.td,{children:"Primary MLink/REST server pool"}),(0,t.jsx)(n.td,{children:"TCP/HTTPS"}),(0,t.jsx)(n.td,{children:"X-Con, VPN, Internet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MLink/WS"})}),(0,t.jsx)(n.td,{children:"Primary MLink/WS server pool"}),(0,t.jsx)(n.td,{children:"TCP/HTTPS"}),(0,t.jsx)(n.td,{children:"X-Con, VPN, Internet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"SRSE/Primary"})}),(0,t.jsx)(n.td,{children:"Primary SRSE server pool"}),(0,t.jsx)(n.td,{children:"TCP/MariaDB"}),(0,t.jsx)(n.td,{children:"X-Con, VPN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"SRSE/Private"})}),(0,t.jsx)(n.td,{children:"Private SRSE server pools"}),(0,t.jsx)(n.td,{children:"TCP/MariaDB"}),(0,t.jsx)(n.td,{children:"X-Con, VPN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"FIX/CGW"})}),(0,t.jsx)(n.td,{children:"FIX client gateway servers"}),(0,t.jsx)(n.td,{children:"TCP/FIX 4.x"}),(0,t.jsx)(n.td,{children:"X-Con, VPN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"FIX/Drop"})}),(0,t.jsx)(n.td,{children:"FIX drop servers"}),(0,t.jsx)(n.td,{children:"TCP/FIX 4.x"}),(0,t.jsx)(n.td,{children:"X-Con, VPN"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Production services for WebApp tools, MLink servers, and SRSE/Primary servers are organized into service pools and there is no guarantee that a client will connect to the same backend server if they disconnect/reconnect."}),"\n",(0,t.jsx)(n.p,{children:"All inbound client FIX sessions are assigned a unique IP/Port pair. This FIX connect address is associated with the SenderCompID/TargetCompID of a client's FIX session as well as their SpiderRock client firm.  SpiderRock Connect only accepts production FIX connections via cross-connect or VPN and will internally verify source address / client firm correspondence for all connections."}),"\n",(0,t.jsx)(n.p,{children:"SRSE/Private services are provisioned by IP/Port pair (you will receive a unique IP/Port for each SRSE/Private service provisioned). These private addresses are only available via cross-connect or VPN."}),"\n",(0,t.jsxs)(n.p,{children:["SpiderRock can establish site-to-site VPN service from most places in the world and can accept cross connects in Equinix CH2, NY4, NY5, EC2 and FR2 facilities.  ",(0,t.jsx)(n.a,{href:"/docs/ContactUs/",children:"Contact SpiderRock for more information or help getting connected."})]}),"\n",(0,t.jsx)(n.p,{children:"The primary access point for US equity, future, and option markets and data is NY5.  The primary access point for European markets and data is FR2.  In general, SpiderRock Connect does not make US data available in our European data centers or visa-versa."}),"\n",(0,t.jsx)(n.p,{children:"If a client wishes to run SpiderRock Connect's WebApp tool suite and access data from both the US and Europe interchangeably from the same tool instance, that client will need network access to both NY5 and FR2 from the machine or device the tool is running on."}),"\n",(0,t.jsx)(n.p,{children:"SpiderRock Connect services all have URLs that indicate the service type as well as the location of the service.  The general pattern is:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"<service-type>.<system-realm>.<system-environment>.spiderrockconnect.com/(protocol)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Saturn"})," is SpiderRock Connect's production system-environment and ",(0,t.jsx)(n.strong,{children:"Venus"})," is our staging system-environment and our system-realms are as follows:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"SysRealm"}),(0,t.jsx)(n.th,{children:"Location"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"NMS"})}),(0,t.jsx)(n.td,{children:"US/NY5"}),(0,t.jsx)(n.td,{children:"US equity and option markets and data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"CME"})}),(0,t.jsx)(n.td,{children:"US/DC3"}),(0,t.jsx)(n.td,{children:"US CME futures and options markets and data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"FR2"})}),(0,t.jsx)(n.td,{children:"EU/FR2"}),(0,t.jsx)(n.td,{children:"European equity, future, and options markets and data"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"mlink-end-points",children:"MLink End Points"}),"\n",(0,t.jsx)(n.p,{children:"MLink/REST and MLink/WebSocket APIs have various access endpoint addresses. These endpoints are globally accessible via internet routes but can also be accessed via private network routes. The following table lists the MLink endpoints and their respective IP addresses and FQDNs."}),"\n",(0,t.jsx)(n.p,{children:"MLink FQDNs utilizes the standard HTTPS port (443) and can be used for either REST or WebSocket connections."}),"\n",(0,t.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"MLink Endpoint"}),(0,t.jsx)(n.th,{children:"IP Address"}),(0,t.jsx)(n.th,{children:"FQDN"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Live"}),(0,t.jsx)(n.td,{children:"192.81.231.65"}),(0,t.jsx)(n.td,{children:"mlink-live.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"live market data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Delay"}),(0,t.jsx)(n.td,{children:"192.81.231.65"}),(0,t.jsx)(n.td,{children:"mlink-delay.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"delayed market data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Speed"}),(0,t.jsx)(n.td,{children:"192.81.231.65"}),(0,t.jsx)(n.td,{children:"mlink-speed.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"benchmark testing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Order"}),(0,t.jsx)(n.td,{children:"192.81.231.65"}),(0,t.jsx)(n.td,{children:"mlink-order.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"order entry"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"staging",children:"Staging"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"MLink Endpoint"}),(0,t.jsx)(n.th,{children:"IP Address"}),(0,t.jsx)(n.th,{children:"FQDN"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Live"}),(0,t.jsx)(n.td,{children:"192.81.231.81"}),(0,t.jsx)(n.td,{children:"mlink-live.nms.venus.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"live market data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Delay"}),(0,t.jsx)(n.td,{children:"192.81.231.81"}),(0,t.jsx)(n.td,{children:"mlink-delay.nms.venus.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"delayed market data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Speed"}),(0,t.jsx)(n.td,{children:"192.81.231.81"}),(0,t.jsx)(n.td,{children:"mlink-speed.nms.venus.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"benchmark testing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Order"}),(0,t.jsx)(n.td,{children:"192.81.231.81"}),(0,t.jsx)(n.td,{children:"mlink-order.nms.venus.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"order entry"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"srse-end-points",children:"SRSE End Points"}),"\n",(0,t.jsx)(n.p,{children:"SRSE can be accessed via private cross connection networks or via VPN. SRSE access is provisioned once a client is onboarded and accessible via the public pool of servers. If a client has a private SRSE instance, then that connection information will be provided by the Client Support Desk."}),"\n",(0,t.jsx)(n.h3,{id:"production-1",children:"Production"}),"\n",(0,t.jsx)(n.p,{children:"Private SRSE ports are provided by SpiderRock when provisioned."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"SRSE Endpoint"}),(0,t.jsx)(n.th,{children:"IP Address"}),(0,t.jsx)(n.th,{children:"Port"}),(0,t.jsx)(n.th,{children:"FQDN"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Public"}),(0,t.jsx)(n.td,{children:"192.81.231.66"}),(0,t.jsx)(n.td,{children:"3700"}),(0,t.jsx)(n.td,{children:"srse.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"Public SRSE pool"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SRSE Private"}),(0,t.jsx)(n.td,{children:"192.81.231.66"}),(0,t.jsx)(n.td,{children:"XXXX"}),(0,t.jsx)(n.td,{children:"srse.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"Private SRSE instance"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"fix-end-points",children:"FIX End Points"}),"\n",(0,t.jsxs)(n.p,{children:["FIX can be accessed via private cross connection networks or via VPN. FIX access is provisioned once a client is onboarded. Please ",(0,t.jsx)(n.a,{href:"/docs/ContactUs/",children:(0,t.jsx)(n.strong,{children:"contact the Client Support Desk"})})," to coordinate FIX access coordination with SpiderRock Networking. FIX connections include Order routing and Drop Copy services."]}),"\n",(0,t.jsx)(n.h3,{id:"fix-production-and-uat",children:"FIX Production and UAT"}),"\n",(0,t.jsx)(n.p,{children:"FIX session ports are assigned by SpiderRock when sessions are provisioned."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"FIX Endpoint"}),(0,t.jsx)(n.th,{children:"IP Address"}),(0,t.jsx)(n.th,{children:"FQDN"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fix-prod"}),(0,t.jsx)(n.td,{children:"192.81.231.68"}),(0,t.jsx)(n.td,{children:"fix-prod.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"Production FIX endpoint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fix-uat"}),(0,t.jsx)(n.td,{children:"192.81.231.67"}),(0,t.jsx)(n.td,{children:"fix-uat.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"UAT FIX endpoint"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"sandboxes",children:"Sandboxes"}),"\n",(0,t.jsx)(n.p,{children:"The SpiderRock Connect sandboxes are test/development environments that are globally accessible via internet routes but can also be accessed via private network routes. The following table lists the MLink endpoints and their respective IP addresses and FQDNs."}),"\n",(0,t.jsx)(n.h3,{id:"mlink--development",children:"MLink / Development"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"MLink Endpoint"}),(0,t.jsx)(n.th,{children:"IP Address"}),(0,t.jsx)(n.th,{children:"FQDN"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"mlink-test"}),(0,t.jsx)(n.td,{children:"192.81.231.72"}),(0,t.jsx)(n.td,{children:"mlink-test.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"production code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"mlink-test"}),(0,t.jsx)(n.td,{children:"192.81.231.88"}),(0,t.jsx)(n.td,{children:"mlink-test.nms.venus.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"staging (pre-release) code"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"fix--development",children:"FIX / Development"}),"\n",(0,t.jsx)(n.p,{children:"FIX sessions ports for sandboxes are available on request"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"FIX Endpoint"}),(0,t.jsx)(n.th,{children:"IP Address"}),(0,t.jsx)(n.th,{children:"FQDN"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fix-test"}),(0,t.jsx)(n.td,{children:"192.81.231.72"}),(0,t.jsx)(n.td,{children:"fix-test.nms.saturn.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"production code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fix-test"}),(0,t.jsx)(n.td,{children:"192.81.231.88"}),(0,t.jsx)(n.td,{children:"fix-test.nms.venus.spiderrockconnect.com"}),(0,t.jsx)(n.td,{children:"staging (pre-release) code"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);