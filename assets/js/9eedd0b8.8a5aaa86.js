"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["53379"],{4210:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>o});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/client-theos/SpdrTheoExpSurface","title":"SpdrTheoExpSurface","description":"SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.Surface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.See the technical note on client supplied theoretical surfaces for more details.","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/Topics/1945-client-theos/SpdrTheoExpSurface.md","sourceDirName":"MessageSchemas/Schema/Topics/1945-client-theos","slug":"/MessageSchemas/Schema/Topics/client-theos/SpdrTheoExpSurface","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-theos/SpdrTheoExpSurface","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{"title":"SpdrTheoExpSurface"},"sidebar":"messageSchemasSidebar","previous":{"title":"SpdrTheoExp2PtCurve","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/client-theos/SpdrTheoExp2PtCurve"},"next":{"title":"2120-core-extern","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/Topics/core-extern/"}}'),s=t("52676"),a=t("91503"),l=t("71386"),i=t("9641");let d={title:"SpdrTheoExpSurface"},o="Schema: SpdrTheoExpSurface (ID: 1960)",c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3},{value:"Post Msgs API Call",id:"post-msgs-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"schema-spdrtheoexpsurface-id-1960",children:["Schema: SpdrTheoExpSurface ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1960)"})]})}),"\n",(0,s.jsxs)(n.p,{children:["SpdrTheoExpSurface records reprent a client theoretical volatility surface for a ExpiryKey (ticker + expiration).  These records can either directly specify parameters to be used in a parameterized surface function or can link to a record (eg. SpdrTheoExp2PtCurve) containing x/y points sampling a client constructed curve.  Alternatively, they can specify that a SpiderRock implied skew curve should be used along with client supplied atm volatilities.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Surface dynamics can be specified in multiple ways with these records and a number of pricing parameter overrides are also available.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"See the technical note on client supplied theoretical surfaces for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"1945-client-theos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientTheo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRTheo"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"ekey"}),(0,s.jsx)(n.td,{children:"ExpiryKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11="}),(0,s.jsx)(n.td,{children:"theoModel"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"12="}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"client firm this theo model is associated with (controls visibility)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"ticker"}),(0,s.jsx)(n.td,{children:"TickerKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"skewFunc"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SkewFunc",children:"enum : SkewFunc"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"volTimeUnits"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/VolTimeUnits",children:"enum : VolTimeUnits"})}),(0,s.jsx)(n.td,{children:"default uses the SR native time metric (trading minutes); V6 is a prior SR metric (trading days)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"uPrcRefRule"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/uPrcRefRule",children:"enum : uPrcRefRule"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"refUPrc"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"-1 = use SR uPrc @ record insert"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"refUPrcWeight"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"w: [0,1];adjRefUPrc = w * refUPrc + (1 - w) * uPrc;note: w=1 implies sticky strike behavior;w=0 implies sticky delta behavior"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"refSRAtm"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"-1 = use SR surface atm @ record insert"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"refSRAtmWeight"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"w: [0,1];theoVolAdj = theoVol + tvSlope * (uPrc - refUPrc) + w * (liveSRAtm - refSRAtm)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"paramA"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"param A - J are inputs to the skewFunc model selected above"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"paramB"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"paramC"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"paramD"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"paramE"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"139"}),(0,s.jsx)(n.td,{children:"paramF"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"142"}),(0,s.jsx)(n.td,{children:"paramG"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"145"}),(0,s.jsx)(n.td,{children:"paramH"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"148"}),(0,s.jsx)(n.td,{children:"paramI"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"151"}),(0,s.jsx)(n.td,{children:"paramJ"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"154"}),(0,s.jsx)(n.td,{children:"theoVol"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"theo volatility @ hypothetical atm strike (note: hypothetical atm strike depends on the definition of xAxis implied by the skewFunc model;usually the strike where xAxis = 0)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"157"}),(0,s.jsx)(n.td,{children:"bOpnVol"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"buy open vol"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"160"}),(0,s.jsx)(n.td,{children:"bClsVol"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"buy close vol"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"163"}),(0,s.jsx)(n.td,{children:"sOpnVol"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sell open vol"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"166"}),(0,s.jsx)(n.td,{children:"sClsVol"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"sell close vol"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"169"}),(0,s.jsx)(n.td,{children:"bOpnEdge"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"edge spread to open when buying"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"172"}),(0,s.jsx)(n.td,{children:"bClsEdge"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"edge spread to close when buying"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"175"}),(0,s.jsx)(n.td,{children:"sOpnEdge"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"edge spread to open when selling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"178"}),(0,s.jsx)(n.td,{children:"sClsEdge"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"edge spread to close when selling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"181"}),(0,s.jsx)(n.td,{children:"buySellConvention"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySellConvention",children:"enum : BuySellConvention"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"184"}),(0,s.jsx)(n.td,{children:"lnDDiv"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"(depricated)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"187"}),(0,s.jsx)(n.td,{children:"shDDiv"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"(depricated)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"190"}),(0,s.jsx)(n.td,{children:"lnSDiv"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"long sdiv"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"193"}),(0,s.jsx)(n.td,{children:"shSDiv"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"short sdiv"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"196"}),(0,s.jsx)(n.td,{children:"tvSlope"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"tvSlope = dTheoVol / dUPrc;theoVolAdj = theoVol + tvSlope * (uPrc - refUPrc).  Note: tvSlope affects the calculation of theoSurface veSlope values which in turn affect hedgeDelta calculations when account.hedgeType = 'TvS'"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"199"}),(0,s.jsx)(n.td,{children:"divRule"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/DivRule",children:"enum : DivRule"})}),(0,s.jsx)(n.td,{children:"specifies how DDiv and SDiv values will be incorporated"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"202"}),(0,s.jsx)(n.td,{children:"userRateOverride"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"use rate from the UserRateOverride table instead of SR Rate curve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"205"}),(0,s.jsx)(n.td,{children:"userSDivOverride"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"use sdiv from the UserSDivOverride table instead of SR SDiv"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"208"}),(0,s.jsx)(n.td,{children:"userDDivOverride"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(n.td,{children:"use dividends from the UserDividendOverride table instead of SR Dividends"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"211"}),(0,s.jsx)(n.td,{children:"minUBid"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"any non-hold status will revert to markup if live uMid is outside of [minUBid, maxUAsk]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"214"}),(0,s.jsx)(n.td,{children:"maxUAsk"}),(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"217"}),(0,s.jsx)(n.td,{children:"theoStatus"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TheoStatus",children:"enum : TheoStatus"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"220"}),(0,s.jsx)(n.td,{children:"comment"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"223"}),(0,s.jsx)(n.td,{children:"updated"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"datetime of last record update.  will default to current datetime on record load of not supplied"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"226"}),(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"string(24)"}),(0,s.jsx)(n.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"229"}),(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"232"}),(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrTheoExpSurface'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'view=ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'view=ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=theoModel:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'skewFunc|volTimeUnits|uPrcRefRule|buySellConvention|divRule|userRateOverride|userSDivOverride|userDDivOverride|theoStatus|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'measure=ticker|skewFunc|volTimeUnits|uPrcRefRule|refUPrc|refUPrcWeight|refSRAtm|refSRAtmWeight|paramA|paramB|paramC|paramD|paramE|paramF|paramG|paramH|paramI|paramJ|theoVol|bOpnVol|bClsVol|sOpnVol|sClsVol|bOpnEdge|bClsEdge|sOpnEdge|sClsEdge|buySellConvention|lnDDiv|shDDiv|lnSDiv|shSDiv|tvSlope|divRule|userRateOverride|userSDivOverride|userDDivOverride|minUBid|maxUAsk|theoStatus|comment|updated|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=skewFunc|volTimeUnits|uPrcRefRule|buySellConvention|divRule|userRateOverride|userSDivOverride|userDDivOverride|theoStatus|modifiedIn' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrTheoExpSurface\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'theoModel:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrTheoExpSurface' \\\n--data-urlencode 'where=theoModel:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"post-msgs-api-call",children:"Post Msgs API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\n# Replace with your desired MLINK URL\nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Request Parameters\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'postmsgs\',\n    "postaction": "I", # (I)nsert, (U)pdate, (D)elete, or (R)eplace\n    "postmerge": "Y", # (Y)es or (N)o\n}\n\npayload = {\n    "header": {\n        "mTyp": "SpdrTheoExpSurface"\n    },\n    "message": {\n        "pkey": {\n            "ekey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL",\n                "dt": "2025-01-01"\n            },\n            "theoModel": "exampleString", // string\n            "clientFirm": "exampleString" // string\n        },\n        "ticker": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL"\n        },\n        "skewFunc": "enumValue", // enum(SkewFunc) - None, ICurve, SRDynCurve, TheoSpline, SVI\n        "volTimeUnits": "enumValue", // enum(VolTimeUnits) - Default, V6\n        "uPrcRefRule": "enumValue", // enum(uPrcRefRule) - NbboMid, NbboCross\n        "refUPrc": 1.0, // float\n        "refUPrcWeight": 1.0, // float\n        "refSRAtm": 1.0, // float\n        "refSRAtmWeight": 1.0, // float\n        "paramA": 1.0, // float\n        "paramB": 1.0, // float\n        "paramC": 1.0, // float\n        "paramD": 1.0, // float\n        "paramE": 1.0, // float\n        "paramF": 1.0, // float\n        "paramG": 1.0, // float\n        "paramH": 1.0, // float\n        "paramI": 1.0, // float\n        "paramJ": 1.0, // float\n        "theoVol": 1.0, // float\n        "bOpnVol": 1.0, // float\n        "bClsVol": 1.0, // float\n        "sOpnVol": 1.0, // float\n        "sClsVol": 1.0, // float\n        "bOpnEdge": 1.0, // float\n        "bClsEdge": 1.0, // float\n        "sOpnEdge": 1.0, // float\n        "sClsEdge": 1.0, // float\n        "buySellConvention": "enumValue", // enum(BuySellConvention) - None, Minimum, BSSpread, BSPctSprd, BSOffsetPts, BSOffsetPct\n        "lnDDiv": 1.0, // float\n        "shDDiv": 1.0, // float\n        "lnSDiv": 1.0, // float\n        "shSDiv": 1.0, // float\n        "tvSlope": 1.0, // float\n        "divRule": "enumValue", // enum(DivRule) - UseSRImplied, SDivValue, SDivOffset, MinMaxValue\n        "userRateOverride": "enumValue", // enum(YesNo) - None, Yes, No\n        "userSDivOverride": "enumValue", // enum(YesNo) - None, Yes, No\n        "userDDivOverride": "enumValue", // enum(YesNo) - None, Yes, No\n        "minUBid": 1.0, // float\n        "maxUAsk": 1.0, // float\n        "theoStatus": "enumValue", // enum(TheoStatus) - Hold, Auto, Scanner, Markup, CloseOnly\n        "comment": "exampleString", // string\n        "updated": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "modifiedBy": "exampleString", // string\n        "modifiedIn": "enumValue", // enum(SysEnvironment) - None, Neptune, Pluto, V7_Stable, V7_Latest, Saturn, Venus, Mars, SysTest, V7_Current\n        "timestamp": "2025-01-01 12:00:00.000000" // yyyy-MM-dd HH:mm:ss.SSSSSS\n    }\n}\n\nresponse = requests.post(MLINK_PROD_URL, params=params, json=payload)\n'})})}),(0,s.jsx)(i.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\' \\\n--data-urlencode \'apiKey=XXXX-XXXX-XXXX-XXXX\' \\\n--data-urlencode \'cmd=postmsgs\' \\\n--data-urlencode \'postaction=I\' \\ # (I)nsert, (U)pdate, (D)elete, or (R)eplace\n--data-urlencode \'postmerge=Y\' \\ # (Y)es or (N)o\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "header": {\n        "mTyp": "SpdrTheoExpSurface"\n    },\n    "message": {\n        "pkey": {\n            "ekey": {\n                "at": "EQT",\n                "ts": "NMS",\n                "tk": "AAPL",\n                "dt": "2025-01-01"\n            },\n            "theoModel": "exampleString", // string\n            "clientFirm": "exampleString" // string\n        },\n        "ticker": {\n            "at": "EQT",\n            "ts": "NMS",\n            "tk": "AAPL"\n        },\n        "skewFunc": "enumValue", // enum(SkewFunc) - None, ICurve, SRDynCurve, TheoSpline, SVI\n        "volTimeUnits": "enumValue", // enum(VolTimeUnits) - Default, V6\n        "uPrcRefRule": "enumValue", // enum(uPrcRefRule) - NbboMid, NbboCross\n        "refUPrc": 1.0, // float\n        "refUPrcWeight": 1.0, // float\n        "refSRAtm": 1.0, // float\n        "refSRAtmWeight": 1.0, // float\n        "paramA": 1.0, // float\n        "paramB": 1.0, // float\n        "paramC": 1.0, // float\n        "paramD": 1.0, // float\n        "paramE": 1.0, // float\n        "paramF": 1.0, // float\n        "paramG": 1.0, // float\n        "paramH": 1.0, // float\n        "paramI": 1.0, // float\n        "paramJ": 1.0, // float\n        "theoVol": 1.0, // float\n        "bOpnVol": 1.0, // float\n        "bClsVol": 1.0, // float\n        "sOpnVol": 1.0, // float\n        "sClsVol": 1.0, // float\n        "bOpnEdge": 1.0, // float\n        "bClsEdge": 1.0, // float\n        "sOpnEdge": 1.0, // float\n        "sClsEdge": 1.0, // float\n        "buySellConvention": "enumValue", // enum(BuySellConvention) - None, Minimum, BSSpread, BSPctSprd, BSOffsetPts, BSOffsetPct\n        "lnDDiv": 1.0, // float\n        "shDDiv": 1.0, // float\n        "lnSDiv": 1.0, // float\n        "shSDiv": 1.0, // float\n        "tvSlope": 1.0, // float\n        "divRule": "enumValue", // enum(DivRule) - UseSRImplied, SDivValue, SDivOffset, MinMaxValue\n        "userRateOverride": "enumValue", // enum(YesNo) - None, Yes, No\n        "userSDivOverride": "enumValue", // enum(YesNo) - None, Yes, No\n        "userDDivOverride": "enumValue", // enum(YesNo) - None, Yes, No\n        "minUBid": 1.0, // float\n        "maxUAsk": 1.0, // float\n        "theoStatus": "enumValue", // enum(TheoStatus) - Hold, Auto, Scanner, Markup, CloseOnly\n        "comment": "exampleString", // string\n        "updated": "2025-01-01 12:00:00.000000", // yyyy-MM-dd HH:mm:ss.SSSSSS\n        "modifiedBy": "exampleString", // string\n        "modifiedIn": "enumValue", // enum(SysEnvironment) - None, Neptune, Pluto, V7_Stable, V7_Latest, Saturn, Venus, Mars, SysTest, V7_Current\n        "timestamp": "2025-01-01 12:00:00.000000" // yyyy-MM-dd HH:mm:ss.SSSSSS\n    }\n}\'\n'})})})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9641:function(e,n,t){t.d(n,{Z:()=>a});var r=t("52676");t("75271");var s=t("54461");function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",a),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>v});var r=t("52676"),s=t("75271"),a=t("54461"),l=t("52289"),i=t("3225"),d=t("42834"),o=t("40578"),c=t("35834"),h=t("79616");function u(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("44537");function x(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:d}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=d[o.indexOf(n)].value;t!==s&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:d.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:h,...l,className:(0,a.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function f(e){let{lazy:n,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,p]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[x,f]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,s.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[j,v]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,a]=(0,h.Nk)(t);return[r,(0,s.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:r}),S=(()=>{let e=x??j;return m({value:e,tabValues:a})?e:null})();return(0,d.Z)(()=>{S&&p(S)},[S]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),v(e)},[f,v,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(x,{...n,...e}),(0,r.jsx)(f,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,r.jsx)(j,{...e,children:u(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(75271);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);