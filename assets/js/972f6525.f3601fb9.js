"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81471],{35493:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=t(74848),s=t(28453),i=t(11470),l=t(19365);const a={title:"SpdrTheoExpSurface"},d="Schema: SpdrTheoExpSurface (ID: 1960)",c={id:"MessageSchemas/Schema/Topics/client-theos/SpdrTheoExpSurface",title:"SpdrTheoExpSurface",description:"SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.Surface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.See the technical note on client supplied theoretical surfaces for more details.",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/Topics/1945-client-theos/SpdrTheoExpSurface.md",sourceDirName:"MessageSchemas/Schema/Topics/1945-client-theos",slug:"/MessageSchemas/Schema/Topics/client-theos/SpdrTheoExpSurface",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/client-theos/SpdrTheoExpSurface",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{title:"SpdrTheoExpSurface"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrTheoExp2PtCurve",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/client-theos/SpdrTheoExp2PtCurve"},next:{title:"2120-core-extern",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/Topics/core-extern/"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"schema-spdrtheoexpsurface-id-1960",children:["Schema: SpdrTheoExpSurface ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 1960)"})]}),"\n",(0,n.jsxs)(r.p,{children:["SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Surface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"See the technical note on client supplied theoretical surfaces for more details."]}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"1945-client-theos"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"SystemData"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SRSE Product"}),(0,n.jsx)(r.td,{children:"SRTheo"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"#"}),(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"10="}),(0,n.jsx)(r.td,{children:"ekey"}),(0,n.jsx)(r.td,{children:"ExpiryKey"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"11="}),(0,n.jsx)(r.td,{children:"theoModel"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"12="}),(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{children:"client firm this theo model is associated with (controls visibility)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"100"}),(0,n.jsx)(r.td,{children:"ticker"}),(0,n.jsx)(r.td,{children:"TickerKey"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"103"}),(0,n.jsx)(r.td,{children:"skewFunc"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SkewFunc",children:"enum : SkewFunc"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"106"}),(0,n.jsx)(r.td,{children:"volTimeUnits"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/VolTimeUnits",children:"enum : VolTimeUnits"})}),(0,n.jsx)(r.td,{children:"default uses the SR native time metric (trading minutes); V6 is a prior SR metric (trading days)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"109"}),(0,n.jsx)(r.td,{children:"uPrcRefRule"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/uPrcRefRule",children:"enum : uPrcRefRule"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"112"}),(0,n.jsx)(r.td,{children:"refUPrc"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"-1 = use SR uPrc @ record insert"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"115"}),(0,n.jsx)(r.td,{children:"refUPrcWeight"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"w: [0,1];adjRefUPrc = w * refUPrc + (1 - w) * uPrc;note: w=1 implies sticky strike behavior;w=0 implies sticky delta behavior"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"118"}),(0,n.jsx)(r.td,{children:"refSRAtm"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"-1 = use SR surface atm @ record insert"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"121"}),(0,n.jsx)(r.td,{children:"refSRAtmWeight"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"w: [0,1];theoVolAdj = theoVol + tvSlope * (uPrc - refUPrc) + w * (liveSRAtm - refSRAtm)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"124"}),(0,n.jsx)(r.td,{children:"paramA"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"param A - J are inputs to the skewFunc model selected above"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"127"}),(0,n.jsx)(r.td,{children:"paramB"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"130"}),(0,n.jsx)(r.td,{children:"paramC"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"133"}),(0,n.jsx)(r.td,{children:"paramD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"136"}),(0,n.jsx)(r.td,{children:"paramE"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"139"}),(0,n.jsx)(r.td,{children:"paramF"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"142"}),(0,n.jsx)(r.td,{children:"paramG"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"145"}),(0,n.jsx)(r.td,{children:"paramH"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"148"}),(0,n.jsx)(r.td,{children:"paramI"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"151"}),(0,n.jsx)(r.td,{children:"paramJ"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"154"}),(0,n.jsx)(r.td,{children:"theoVol"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"theo volatility @ hypothetical atm strike (note: hypothetical atm strike depends on the definition of xAxis implied by the skewFunc model;usually the strike where xAxis = 0)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"157"}),(0,n.jsx)(r.td,{children:"bOpnVol"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"buy open vol"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"160"}),(0,n.jsx)(r.td,{children:"bClsVol"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"buy close vol"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"163"}),(0,n.jsx)(r.td,{children:"sOpnVol"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"sell open vol"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"166"}),(0,n.jsx)(r.td,{children:"sClsVol"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"sell close vol"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"169"}),(0,n.jsx)(r.td,{children:"bOpnEdge"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"edge spread to open when buying"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"172"}),(0,n.jsx)(r.td,{children:"bClsEdge"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"edge spread to close when buying"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"175"}),(0,n.jsx)(r.td,{children:"sOpnEdge"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"edge spread to open when selling"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"178"}),(0,n.jsx)(r.td,{children:"sClsEdge"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"edge spread to close when selling"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"181"}),(0,n.jsx)(r.td,{children:"buySellConvention"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/BuySellConvention",children:"enum : BuySellConvention"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"184"}),(0,n.jsx)(r.td,{children:"lnDDiv"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"(depricated)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"187"}),(0,n.jsx)(r.td,{children:"shDDiv"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"(depricated)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"190"}),(0,n.jsx)(r.td,{children:"lnSDiv"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"long sdiv"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"193"}),(0,n.jsx)(r.td,{children:"shSDiv"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"short sdiv"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"196"}),(0,n.jsx)(r.td,{children:"tvSlope"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"tvSlope = dTheoVol / dUPrc;theoVolAdj = theoVol + tvSlope * (uPrc - refUPrc).  Note: tvSlope affects the calculation of theoSurface veSlope values which in turn affect hedgeDelta calculations when account.hedgeType = 'TvS'"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"199"}),(0,n.jsx)(r.td,{children:"divRule"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/DivRule",children:"enum : DivRule"})}),(0,n.jsx)(r.td,{children:"specifies how DDiv and SDiv values will be incorporated"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"202"}),(0,n.jsx)(r.td,{children:"userRateOverride"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(r.td,{children:"use rate from the UserRateOverride table instead of SR Rate curve"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"205"}),(0,n.jsx)(r.td,{children:"userSDivOverride"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(r.td,{children:"use sdiv from the UserSDivOverride table instead of SR SDiv"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"208"}),(0,n.jsx)(r.td,{children:"userDDivOverride"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(r.td,{children:"use dividends from the UserDividendOverride table instead of SR Dividends"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"211"}),(0,n.jsx)(r.td,{children:"minUBid"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"any non-hold status will revert to markup if live uMid is outside of [minUBid, maxUAsk]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"214"}),(0,n.jsx)(r.td,{children:"maxUAsk"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"217"}),(0,n.jsx)(r.td,{children:"theoStatus"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"220"}),(0,n.jsx)(r.td,{children:"comment"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"223"}),(0,n.jsx)(r.td,{children:"updated"}),(0,n.jsx)(r.td,{children:"DateTime"}),(0,n.jsx)(r.td,{children:"datetime of last record update.  will default to current datetime on record load of not supplied"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"226"}),(0,n.jsx)(r.td,{children:"modifiedBy"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"229"}),(0,n.jsx)(r.td,{children:"modifiedIn"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"232"}),(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DateTime"}),(0,n.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrTheoExpSurface'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n#Required Parameters\n\"apiKey\": API_KEY,\n\"cmd\": 'getschema',\n\"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface'\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'view=ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'view=ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'skewFunc|volTimeUnits|uPrcRefRule|buySellConvention|divRule|userRateOverride|userSDivOverride|userDDivOverride|theoStatus|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getaggregate\',\n"msgType": MSG_TYPE,\n"measure": MEASURE,\n"group": GROUP,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'measure=ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=skewFunc|volTimeUnits|uPrcRefRule|buySellConvention|divRule|userRateOverride|userSDivOverride|userDDivOverride|theoStatus|modifiedIn' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"Python",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,n.jsx)(l.A,{value:"cUrl",label:"cUrl",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>b});var n=t(96540),s=t(34164),i=t(23104),l=t(56347),a=t(205),d=t(57485),c=t(31682),o=t(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=u(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,h]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,o.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),v=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{v&&d(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const r=e.currentTarget,t=d.indexOf(r),s=a[t].value;s!==n&&(c(r),l(s))},h=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function S(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...r,...e}),(0,f.jsx)(S,{...r,...e})]})}function b(e){const r=(0,j.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);