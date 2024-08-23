"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25379],{91072:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var t=a(74848),i=a(28453);const n={title:"System Architecture",sidebar_position:1},r=void 0,o={id:"Documentation/PlatformAPIs/Overview",title:"System Architecture",description:"Overview",source:"@site/docs/Documentation/PlatformAPIs/Overview.md",sourceDirName:"Documentation/PlatformAPIs",slug:"/Documentation/PlatformAPIs/Overview",permalink:"/docs/Documentation/PlatformAPIs/Overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"System Architecture",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Platform APIs",permalink:"/docs/Documentation/PlatformAPIs/"},next:{title:"Software Release Cycle",permalink:"/docs/Documentation/PlatformAPIs/SoftwareReleases"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Message Design",id:"message-design",level:3},{value:"Message Life Cycle",id:"message-life-cycle",level:3},{value:"Message Transport",id:"message-transport",level:3},{value:"Message Organization",id:"message-organization",level:3},{value:"MBus Security Keys",id:"mbus-security-keys",level:3},{value:"MBus Access APIs",id:"mbus-access-apis",level:3},{value:"SRSE",id:"srse",level:3},{value:"MLink/REST",id:"mlinkrest",level:3},{value:"MLink/WebSocket",id:"mlinkwebsocket",level:3},{value:"FIX",id:"fix",level:3},{value:"SpiderStream Multicast",id:"spiderstream-multicast",level:3}];function d(e){const s={h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"SpiderRock Connect is an open message data processing system that enables both trading and risk management at scale. The platform runs on servers and service processes co-located in data centers with or near popular equity, option, and futures markets. Within the platform, a large number of messages are continuously sent between the various service processes that perform order and execution management, risk, market analytic, and compliance tasks. The platform is multi-tenant in nature and contains both SpiderRock, vendor/exchange, and client private data simultaneously with visibility strictly controlled with respect to both individual client/user and exchange/vendor proprietary boundaries."}),"\n",(0,t.jsx)(s.p,{children:"The system contains normalized market data that originates in the equity, future, and option markets as well as a variety of other types of analytic, risk, trading, and trading-adjacent messages. These messages, in various contexts, are referred to as schemas, records, instances, classes, or objects and make up SpiderRock Connect's message bus (MBus) framework. These messages are actively distributed within and between SpiderRock Connect's data centers and service processes. Some of these message schemas are used for communication between SpiderRock Connect's systems and client systems."}),"\n",(0,t.jsx)(s.h3,{id:"message-design",children:"Message Design"}),"\n",(0,t.jsx)(s.p,{children:"MBus messages comprise a collection of fields with typical types (string, float, double, int, text, etc.). Each of these collections can have repeating groups (small groups of fields that repeat 0 to N times within a message). The standard size of individual MBus messages, inclusive of all repeating groups, is less than 10KB in binary format. In other formats, the size can be somewhat smaller or larger."}),"\n",(0,t.jsx)(s.p,{children:"Most MBus messages have unique primary keys and are typically processed sequentially with each new message fully replacing any previous message with the same primary key. Message processing is optimized for the extremely high data update rates typically associated with market data. It is routine for an individual process of a given SpiderRock Connect service to consume market data messages at sustained rates exceeding 1 million msg/sec/core (binary encode/decode latency < 1us) on either a producing or consuming service."}),"\n",(0,t.jsx)(s.p,{children:"All MBus messages have well-defined schemas and can be transformed into a number of protocols including SR binary (proprietary), JSON, Protobuf, AVRO, Parquet, and simple CSV or TAB formats. These message schemas can be programmatically accessed via both SRSE (MariaDB tables) and MLink (HTTP/REST/web-socket) APIs, as well as by accessing file formats with embedded schema support (AVRO and Parquet)."}),"\n",(0,t.jsx)(s.p,{children:"SpiderRock Connect's internal MBus message set contains a mix of public, exchange controlled, external vendor controlled, and client firm-specific messages. Access to individual messages within the system is limited to clients/users with the appropriate credentials and permissions with appropriate ACL rules strictly enforced in the SRSE and MLink APIs and all UI tools."}),"\n",(0,t.jsx)(s.h3,{id:"message-life-cycle",children:"Message Life Cycle"}),"\n",(0,t.jsx)(s.p,{children:"The lifespan of messages can vary. In general, messages multicast between processes will live until replaced or proactively deleted. As this is a distributed system, messages can be deleted either locally within a single process or they can be marked as deleted and sent to other (remote) processes in the system. Distributed deletion is on a best-effort basis (no guarantee of successful deletion throughout the cluster). However, all processes in the system typically stop and restart at regular intervals (daily, weekly, etc.) that coincide with natural lulls in market activity. On restart, processes request current copies of all active (non-deleted) messages that are currently tracking from a cluster of Cache/Catchup services. This ensures that messages will eventually be purged from the system even if a distributed delete fails for some reason."}),"\n",(0,t.jsx)(s.p,{children:"Proactive message deletion can be initiated by any process in the system. However, most deletion events are initiated by one of the Cache/Cleanup services as part of a message cleanup operation. At regular intervals (usually every 30 minutes), all Cache/Cleanup servers sweep through all in-memory messages and check each message for deletion by rule. If a message deletion rule is in effect and triggered, the Cache/Cleanup server will initiate a distributed delete for that individual message."}),"\n",(0,t.jsx)(s.p,{children:"Most messages within the core platform have relatively short time horizons (1-3 days) however capture snapshots of markets and associated analytics are regularly gathered for historical data compilation and all trading and compliance-related messages are automatically streaming into associated HDFS style data processing infrastructure for further processing."}),"\n",(0,t.jsx)(s.h3,{id:"message-transport",children:"Message Transport"}),"\n",(0,t.jsx)(s.p,{children:"The overall global system is organized into SysEnvironments and SysRealms in different geographies and data centers. Each SysEnvironment/SysRealm contains a significant number of core service processes that are capable of sending (via multicast) messages to other peer processes in the same SysEnvironment/SysRealm. Messages are also routinely transported between SysEnvironments/SysRealms using inter-environment links built with internal MLink service gateways and transport channels."}),"\n",(0,t.jsx)(s.p,{children:"On a typical trading day, there will be more than 500 different schemas (message types) and around 100 million total message instances (unique primary keys) that make up SpiderRock Connect's MBus data collection. Internal message transport rates within individual SysEnvironments/SysRealms routinely exceed 1,000,000 messages per second during market hours."}),"\n",(0,t.jsx)(s.p,{children:"Data transport at these rates is performed by utilizing specialized (40GB/100GB FPGA/Kernel Bypass) network cards and highly optimized software drivers along with high-performance code-generated message serialization/deserialization techniques. Core CPU to CPU transport latencies within each SysEnvironment/SysRealm are typically less than 10 microseconds for 99.99% of all packets/records."}),"\n",(0,t.jsx)(s.h3,{id:"message-organization",children:"Message Organization"}),"\n",(0,t.jsx)(s.p,{children:"SpiderRock Connect's MBus messages are organized into topics based on the subject matter of the message. These topics are for organization only and have no special meaning."}),"\n",(0,t.jsx)(s.p,{children:"Messages that are available to clients via MLink servers are additionally organized into MLink Tokens which are part of ACL controls for each individual UserName with MLink Server access permissions. In other words, MLink servers only allow users to access schemas associated with the MLink Tokens that appear in that users' MLinkToken ACL list."}),"\n",(0,t.jsx)(s.p,{children:"Similarly, messages that are available via SRSE are organized into SRSE Products with similar ACL controls."}),"\n",(0,t.jsx)(s.p,{children:"Also, individual MBus messages can (but are not required to) have one or more of the following standard fields: StripeKey, ClientFirm, TickerKey, ExpiryKey, OptionKey, UserName."}),"\n",(0,t.jsx)(s.p,{children:"These are sometimes referred to as XRay fields and are used to systematically control access record instances and also to organize messages into stripe groups for load balancing."}),"\n",(0,t.jsx)(s.h3,{id:"mbus-security-keys",children:"MBus Security Keys"}),"\n",(0,t.jsx)(s.p,{children:"MBus messages feature a set of standard security keys (TickerKey, ExpiryKey, and OptionKey). These security keys are composable and make up a consistent set of keys for referring to all the market and products described by the platform."}),"\n",(0,t.jsx)(s.p,{children:"A TickerKey consists of the triple (Ticker, TickerSrc, and AssetType) where Ticker is a string of up to 12 characters and TickerSrc (e.g., NMS, CME, CBOT, EUX, EUREX) and AssetType (e.g., Equity, Future) are single byte enums. Note that the Ticker + TickerSrc combination is a globally key unique within the SpiderRock Connect data universe."}),"\n",(0,t.jsx)(s.p,{children:"These securities keys represent unique reference keys for the variety of tradable instruments and related structures in the platform and are often found in the primary keys of MBus messages. The exact instrument that a given key refers to depends on the context in which the key is found."}),"\n",(0,t.jsx)(s.p,{children:"For example, within the TickerDefinition.PKey, the TickerKey (MSFT-NMS-EQT) refers to Microsoft listed stock shares but within the RootDefinition.PKey the same TickerKey (MSFT-NMS-EQT) would refer to Microsoft listed equity options."}),"\n",(0,t.jsx)(s.p,{children:"Depending on context, individual TickerKeys can refer to stock shares, future roots, commodity codes, option roots, and other items. A TickerKey in general, can refer to anything that can be uniquely keyed by a (Symbol, TickerSrc, AssetType) triple."}),"\n",(0,t.jsx)(s.p,{children:"Similarly, an ExpiryKey consists of a TickerKey + ExpiryDate and an OptionKey refers to an ExpiryKey + Strike + CallPutFlag."}),"\n",(0,t.jsx)(s.h3,{id:"mbus-access-apis",children:"MBus Access APIs"}),"\n",(0,t.jsx)(s.p,{children:"The platform features several APIs for sending and receiving messages: MLink/REST, MLink/WebSock, SRSE, FIX, and SpiderStream. These APIs allow access to the live messages that make up SpiderRock Connect's trading platform and can be used for a wide variety of tasks including accessing market data, sending and managing complex orders, uploading and downloading positions and associated risk records, and otherwise integrating with the core platform."}),"\n",(0,t.jsx)(s.h3,{id:"srse",children:"SRSE"}),"\n",(0,t.jsx)(s.p,{children:"SRSE is a proprietary custom MariaDB storage engine that is accessible remotely using standard MySQL/MariaDB database drivers. This access point features SQL-like access to all underlying MBus messages including live market data messages and live trading messages. Client programs can access data via SQL select statements and can also, for some message types, send messages to the platform by inserting either individual records or complete files of records."}),"\n",(0,t.jsx)(s.p,{children:"With this API, the SRSE storage engine acts as a gateway between the live in-memory messages that make up the platform and the database engine. SELECT statements return data from this in-memory message backing store and INSERT statements publish messages both into this in-memory message store and through the platform. Indexes are automatically created and maintained for most messages and normal query optimization occurs automatically for most queries."}),"\n",(0,t.jsx)(s.p,{children:"This API supports the normal complement of SQL statements including indexes, where clauses, and joins and it has very high performance for most fast batch-style interactions."}),"\n",(0,t.jsx)(s.h3,{id:"mlinkrest",children:"MLink/REST"}),"\n",(0,t.jsx)(s.p,{children:"Client programs initiate HTTP/GET and HTTP/POST type interactions to send and/or receive either JSON or Protobuf encoded messages. MLink offers access to the same basic messages as SRSE however MLink is optimized for very fast/stateless GET/POST operations using standard web application technology and does not allow complex joins between messages. The MLink/REST API includes a rich set of commands for processing queries including where and group type clauses. It also features full schema queries at run-time and is suitable for building complex applications."}),"\n",(0,t.jsx)(s.h3,{id:"mlinkwebsocket",children:"MLink/WebSocket"}),"\n",(0,t.jsx)(s.p,{children:"Client programs initiate HTTP/WS connections and then send or receive either JSON or Protobuf encoded messages. This MLink API supports subscriptions and active (asynchronous) streaming of messages for applications that require relatively low latency (1-2ms) message delivery. It is a high-performance service capable of sending (Protobuf) messages in excess of 500,000 messages per second per stream to clients that are willing to and capable of consuming messages at these rates."}),"\n",(0,t.jsx)(s.p,{children:"SpiderRock Connect supplies client libraries (C++ and C#) that include high-performance Protobuf serialization and an event key/cache framework (CREATE, CHANGE, UPDATE, DELETE) for use with this API that may be useful when integrating with other systems or as the core of a SpiderRock-centric system."}),"\n",(0,t.jsx)(s.h3,{id:"fix",children:"FIX"}),"\n",(0,t.jsx)(s.p,{children:"SpiderRock Connect operates client-facing FIX order entry gateways capable of accepting parent orders from clients and returning appropriate execution reports. Orders can be for single items or spreads with SpiderRock Connect's algo parameters are represented as custom 5xxx FIX tags. In addition, execution, parent order, and child order drop session are available for all order activity."}),"\n",(0,t.jsx)(s.h3,{id:"spiderstream-multicast",children:"SpiderStream Multicast"}),"\n",(0,t.jsx)(s.p,{children:"Client programs listen for multicast messages that originate from SpiderRock Connect's data centers. This type of message delivery is typically only available for normalized market data and market data-like messages. Transport is via a proprietary SpiderRock Connect binary protocol. This approach is typically used by clients who want to consume the full spectrum of live market data and are co-located in or near the same data centers that we operate in."})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>o});var t=a(96540);const i={},n=t.createContext(i);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);