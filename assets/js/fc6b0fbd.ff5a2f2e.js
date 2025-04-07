"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["26637"],{27903:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNotice","title":"SpdrAllocationNotice","description":"METADATA","source":"@site/docs/MessageSchemas/Schema/Topics/3695-order-allocation/SpdrAllocationNotice.md","sourceDirName":"MessageSchemas/Schema/Topics/3695-order-allocation","slug":"/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNotice","permalink":"/docs/next/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNotice","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SpdrAllocationNotice"},"sidebar":"messageSchemasSidebar","previous":{"title":"3695-order-allocation","permalink":"/docs/next/MessageSchemas/Schema/Topics/order-allocation/"},"next":{"title":"SpdrAllocationNoticeStatus","permalink":"/docs/next/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNoticeStatus"}}'),s=t("52676"),i=t("91503"),l=t("71386"),d=t("9641");let a={title:"SpdrAllocationNotice"},c="Schema: SpdrAllocationNotice (ID: 3695)",o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"schema-spdrallocationnotice-id-3695",children:["Schema: SpdrAllocationNotice ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3695)"})]})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"3695-order-allocation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"ClientTrading"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SRSE Product"}),(0,s.jsx)(n.td,{children:"SRTrade"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(n.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10="}),(0,s.jsx)(n.td,{children:"allocNumber"}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"unique number assigned to this allocation notice"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"tradeDate"}),(0,s.jsx)(n.td,{children:"DateKey"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"103"}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"106"}),(0,s.jsx)(n.td,{children:"omniAccnt"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"omnibus accnt (SR accnt)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"109"}),(0,s.jsx)(n.td,{children:"secKey"}),(0,s.jsx)(n.td,{children:"OptionKey"}),(0,s.jsx)(n.td,{children:"security key (stock, future, or option)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"112"}),(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(n.td,{children:"security type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"115"}),(0,s.jsx)(n.td,{children:"mlegLegKey"}),(0,s.jsx)(n.td,{children:"text1"}),(0,s.jsx)(n.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"118"}),(0,s.jsx)(n.td,{children:"orderSide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(n.td,{children:"order side (always buy for MLEG orders)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"121"}),(0,s.jsx)(n.td,{children:"ssaleFlag"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,s.jsx)(n.td,{children:"ssale flag (None if not stock)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"124"}),(0,s.jsx)(n.td,{children:"positionType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,s.jsx)(n.td,{children:"positionType (None if not equity option)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"127"}),(0,s.jsx)(n.td,{children:"noticeState"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/NoticeState",children:"enum : NoticeState"})}),(0,s.jsx)(n.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"130"}),(0,s.jsx)(n.td,{children:"noticeText"}),(0,s.jsx)(n.td,{children:"text1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"133"}),(0,s.jsx)(n.td,{children:"allocMethod"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AllocMethod",children:"enum : AllocMethod"})}),(0,s.jsx)(n.td,{children:"method for delivery of the allocation instruction to the broker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"402"}),(0,s.jsx)(n.td,{children:"execBrkrCode"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"used for FIX routing (can be null)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"allocExDest"}),(0,s.jsx)(n.td,{children:"string(16)"}),(0,s.jsx)(n.td,{children:"used for FIX routing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"136"}),(0,s.jsx)(n.td,{children:"orderShape"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrOrderShape",children:"enum : SpdrOrderShape"})}),(0,s.jsx)(n.td,{children:"Single or MLeg"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"139"}),(0,s.jsx)(n.td,{children:"cumFillQuantity"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"total fill size of all ChildOrders"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"142"}),(0,s.jsx)(n.td,{children:"avgFillPrice"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{children:"parent order average fill price"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"145"}),(0,s.jsx)(n.td,{children:"netMoney"}),(0,s.jsx)(n.td,{children:"double"}),(0,s.jsx)(n.td,{children:"net allocation money"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"376"}),(0,s.jsx)(n.td,{children:"modifiedBy"}),(0,s.jsx)(n.td,{children:"string(24)"}),(0,s.jsx)(n.td,{children:"user who last modified this record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"379"}),(0,s.jsx)(n.td,{children:"modifiedIn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"382"}),(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DateTime"}),(0,s.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(n.p,{children:"ChildOrders"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"151"}),(0,s.jsx)(n.td,{children:"clOrdId"}),(0,s.jsx)(n.td,{children:"long"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"154"}),(0,s.jsx)(n.td,{children:"orderSize"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"157"}),(0,s.jsx)(n.td,{children:"cumFillQuantity"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"160"}),(0,s.jsx)(n.td,{children:"avgFillPrice"}),(0,s.jsx)(n.td,{children:"double"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"163"}),(0,s.jsx)(n.td,{children:"streetClOrdId"}),(0,s.jsx)(n.td,{children:"string(24)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"166"}),(0,s.jsx)(n.td,{children:"streetOrderId"}),(0,s.jsx)(n.td,{children:"string(24)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Fragments"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"172"}),(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"385"}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"175"}),(0,s.jsx)(n.td,{children:"allocAccnt"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"178"}),(0,s.jsx)(n.td,{children:"allocFragId"}),(0,s.jsx)(n.td,{children:"long"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"181"}),(0,s.jsx)(n.td,{children:"allocSize"}),(0,s.jsx)(n.td,{children:"int"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"OrderLegs"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"386"}),(0,s.jsx)(n.td,{children:"secKey"}),(0,s.jsx)(n.td,{children:"OptionKey"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"387"}),(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"388"}),(0,s.jsx)(n.td,{children:"mult"}),(0,s.jsx)(n.td,{children:"ushort"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"389"}),(0,s.jsx)(n.td,{children:"side"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"390"}),(0,s.jsx)(n.td,{children:"legId"}),(0,s.jsx)(n.td,{children:"long"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"391"}),(0,s.jsx)(n.td,{children:"altLegId"}),(0,s.jsx)(n.td,{children:"string(24)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"392"}),(0,s.jsx)(n.td,{children:"sumLegQty"}),(0,s.jsx)(n.td,{children:"int"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"393"}),(0,s.jsx)(n.td,{children:"sumLegMny"}),(0,s.jsx)(n.td,{children:"double"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"LegPosType"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"395"}),(0,s.jsx)(n.td,{children:"secKey"}),(0,s.jsx)(n.td,{children:"OptionKey"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"396"}),(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"397"}),(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"398"}),(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"string(16)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"399"}),(0,s.jsx)(n.td,{children:"ssaleFlag"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"positionType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"firmPosition"}),(0,s.jsx)(n.td,{children:"int"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'SpdrAllocationNotice'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=SpdrAllocationNotice'\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrAllocationNotice\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'tradeDate|clientFirm|omniAccnt|secKey|secType|mlegLegKey|orderSide|ssaleFlag|positionType|noticeState|noticeText|allocMethod|execBrkrCode|allocExDest|orderShape|cumFillQuantity|avgFillPrice|netMoney|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=SpdrAllocationNotice' \\\n--data-urlencode 'view=tradeDate|clientFirm|omniAccnt|secKey|secType|mlegLegKey|orderSide|ssaleFlag|positionType|noticeState|noticeText|allocMethod|execBrkrCode|allocExDest|orderShape|cumFillQuantity|avgFillPrice|netMoney|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrAllocationNotice\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'tradeDate|clientFirm|omniAccnt|secKey|secType|mlegLegKey|orderSide|ssaleFlag|positionType|noticeState|noticeText|allocMethod|execBrkrCode|allocExDest|orderShape|cumFillQuantity|avgFillPrice|netMoney|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'tradeDate:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=SpdrAllocationNotice' \\\n--data-urlencode 'view=tradeDate|clientFirm|omniAccnt|secKey|secType|mlegLegKey|orderSide|ssaleFlag|positionType|noticeState|noticeText|allocMethod|execBrkrCode|allocExDest|orderShape|cumFillQuantity|avgFillPrice|netMoney|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=tradeDate:ASC'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrAllocationNotice\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'tradeDate|clientFirm|omniAccnt|secKey|secType|mlegLegKey|orderSide|ssaleFlag|positionType|noticeState|noticeText|allocMethod|execBrkrCode|allocExDest|orderShape|cumFillQuantity|avgFillPrice|netMoney|modifiedBy|modifiedIn|timestamp\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'secType|orderSide|ssaleFlag|positionType|noticeState|allocMethod|orderShape|modifiedIn\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=SpdrAllocationNotice' \\\n--data-urlencode 'measure=tradeDate|clientFirm|omniAccnt|secKey|secType|mlegLegKey|orderSide|ssaleFlag|positionType|noticeState|noticeText|allocMethod|execBrkrCode|allocExDest|orderShape|cumFillQuantity|avgFillPrice|netMoney|modifiedBy|modifiedIn|timestamp' \\\n--data-urlencode 'group=secType|orderSide|ssaleFlag|positionType|noticeState|allocMethod|orderShape|modifiedIn' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'SpdrAllocationNotice\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'clientFirm:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,s.jsx)(d.Z,{value:"cUrl",label:"cUrl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=SpdrAllocationNotice' \\\n--data-urlencode 'where=clientFirm:eq:ExampleString'\n"})})})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9641:function(e,n,t){t.d(n,{Z:()=>i});var r=t("52676");t("75271");var s=t("54461");function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_SSzl",i),hidden:t,children:n})}},71386:function(e,n,t){t.d(n,{Z:()=>y});var r=t("52676"),s=t("75271"),i=t("54461"),l=t("52289"),d=t("3225"),a=t("42834"),c=t("40578"),o=t("35834"),h=t("79616");function u(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var j=t("44537");function m(e){let{className:n,block:t,selectedValue:s,selectValue:d,tabValues:a}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=a[c.indexOf(n)].value;t!==s&&(o(n),d(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...l,className:(0,i.Z)("tabs__item","tabItem_aitt",l?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function p(e){let{lazy:n,children:t,selectedValue:l}=e,d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=d.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:d.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,j]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[m,p]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,d.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,s.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:t,groupId:r}),[g,y]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,i]=(0,h.Nk)(t);return[r,(0,s.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),f=(()=>{let e=m??g;return x({value:e,tabValues:i})?e:null})();return(0,a.Z)(()=>{f&&j(f)},[f]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);j(e),p(e),y(e)},[p,y,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_ArS0"),children:[(0,r.jsx)(m,{...n,...e}),(0,r.jsx)(p,{...n,...e})]})}function y(e){let n=(0,j.Z)();return(0,r.jsx)(g,{...e,children:u(e.children)},String(n))}},91503:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(75271);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);