"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80936],{95616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(74848),r=n(28453),s=n(11470),a=n(19365);const l={title:"OptionAtmMinuteBarData"},d="Schema: OptionAtmMinuteBarData (ID: 6820)",o={id:"MessageSchemas/Schema/Topics/wts-trade-tool/OptionAtmMinuteBarData",title:"OptionAtmMinuteBarData",description:"METADATA",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/Topics/6760-wts-trade-tool/OptionAtmMinuteBarData.md",sourceDirName:"MessageSchemas/Schema/Topics/6760-wts-trade-tool",slug:"/MessageSchemas/Schema/Topics/wts-trade-tool/OptionAtmMinuteBarData",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/wts-trade-tool/OptionAtmMinuteBarData",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{title:"OptionAtmMinuteBarData"},sidebar:"messageSchemasSidebar",previous:{title:"6760-wts-trade-tool",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/wts-trade-tool/"},next:{title:"7600-wsh-corporate-event",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/Topics/wsh-corporate-event/"}},c={},u=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"Get Schema API Call",id:"get-schema-api-call",level:3},{value:"Get Msg API Call",id:"get-msg-api-call",level:3},{value:"Get Msgs API Call",id:"get-msgs-api-call",level:3},{value:"Get Aggregate API Call",id:"get-aggregate-api-call",level:3},{value:"Get Count API Call",id:"get-count-api-call",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"schema-optionatmminutebardata-id-6820",children:["Schema: OptionAtmMinuteBarData ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 6820)"})]}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"6760-wts-trade-tool"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"OptSurface"})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,i.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"#"}),(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10="}),(0,i.jsx)(t.td,{children:"ekey"}),(0,i.jsx)(t.td,{children:"ExpiryKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"11="}),(0,i.jsx)(t.td,{children:"tradingDate"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"12="}),(0,i.jsx)(t.td,{children:"minute"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"minutes since 2000-01-01"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100"}),(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"TickerKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"103"}),(0,i.jsx)(t.td,{children:"startTime"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"Start of trading period for this product (note: this field will only be populated in the first message sent)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"106"}),(0,i.jsx)(t.td,{children:"startTimeMinute"}),(0,i.jsx)(t.td,{children:"string(8)"}),(0,i.jsx)(t.td,{children:"Minute representation of startTime (note: this field will only be populated in the first message sent)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"109"}),(0,i.jsx)(t.td,{children:"endTime"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"End of trading period for this product (note: this field will only be populated in the first message sent)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"112"}),(0,i.jsx)(t.td,{children:"endTimeMinute"}),(0,i.jsx)(t.td,{children:"string(8)"}),(0,i.jsx)(t.td,{children:"Minute representation of endTime (note: this field will only be populated in the first message sent)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"115"}),(0,i.jsx)(t.td,{children:"uPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"Underlying price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"118"}),(0,i.jsx)(t.td,{children:"years"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Years to expiry"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"121"}),(0,i.jsx)(t.td,{children:"rate"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Interest rate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"124"}),(0,i.jsx)(t.td,{children:"sdiv"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Continuous stock dividend"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"127"}),(0,i.jsx)(t.td,{children:"ddiv"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Discrete stock dividend value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"130"}),(0,i.jsx)(t.td,{children:"uPrcRatio"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"Implied underlying price offset. For options with futures underlyings, this is like sDiv for futures."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"133"}),(0,i.jsx)(t.td,{children:"ivol"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"atm ivol (atm: strike = fUPrc)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"136"}),(0,i.jsx)(t.td,{children:"ivxx"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"fixed strike ivol (ivol @ refStrike)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"139"}),(0,i.jsx)(t.td,{children:"ivCen"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"atm ivol (atm: strike = fUPrc) [eMove/earnings censored]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"142"}),(0,i.jsx)(t.td,{children:"slope"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"dVol / dXAxis"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"145"}),(0,i.jsx)(t.td,{children:"vWidth"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"implied volatility width (best market)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"148"}),(0,i.jsx)(t.td,{children:"refStrike"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"reference strike (usually prior day closing uPrc)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"151"}),(0,i.jsx)(t.td,{children:"ivolHi"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Implied Volatility high value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"154"}),(0,i.jsx)(t.td,{children:"ivolLo"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Implied Volatility low value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"157"}),(0,i.jsx)(t.td,{children:"ivxxHi"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Implied Volatility of Previous Day's ATM strike, high value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"160"}),(0,i.jsx)(t.td,{children:"ivxxLo"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Implied Volatility of Previous Day's ATM strike, low value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"163"}),(0,i.jsx)(t.td,{children:"ivCenHi"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Censored implied volatility high value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"166"}),(0,i.jsx)(t.td,{children:"ivCenLo"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Censored implied volatility low value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"169"}),(0,i.jsx)(t.td,{children:"sdivHi"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Continuous carry rate, high value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"172"}),(0,i.jsx)(t.td,{children:"sdivLo"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Continuous carry rate, low value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"175"}),(0,i.jsx)(t.td,{children:"uPrcRatioHi"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"Underlying price offset value, high value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"178"}),(0,i.jsx)(t.td,{children:"uPrcRatioLo"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"Underlying price offset value, low value (during bar)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"181"}),(0,i.jsx)(t.td,{children:"slopeHi"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Slope high value (during bar).  The difference between the put and call at 1/2 standard deviation from the ATM point."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"184"}),(0,i.jsx)(t.td,{children:"slopeLo"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Slope low value (during bar).  The difference between the put and call at 1/2 standard deviation from the ATM point."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"187"}),(0,i.jsx)(t.td,{children:"varSwapFV"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"variance swap fair value (estimated by numerical integration over OTM price surface)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"190"}),(0,i.jsx)(t.td,{children:"maxDIVol"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"maximum change in IVol (between LSA rec publishes)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"193"}),(0,i.jsx)(t.td,{children:"maxDSDiv"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"maximum change is SDiv (between LSA rec publishes)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"196"}),(0,i.jsx)(t.td,{children:"uPrcSPY"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"SPY underlying price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"199"}),(0,i.jsx)(t.td,{children:"ivolSPY"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SPY atm ivol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"202"}),(0,i.jsx)(t.td,{children:"ivxxSPY"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"SPY fixed strike ivol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"205"}),(0,i.jsx)(t.td,{children:"marketSegment"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/MarketSegment",children:"enum : MarketSegment"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"208"}),(0,i.jsx)(t.td,{children:"ts"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{children:"last update time (Date)"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"get-schema-api-call",children:"Get Schema API Call"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"Python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json'\n\n# Replace with your MLINK API Key\nAPI_KEY = 'XXXX-XXXX-XXXX-XXXX'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = 'OptionAtmMinuteBarData'\n\n# Request Parameters for Get Schema Of The MsgType\nparams = {\n    # Required Parameters\n    \"apiKey\": API_KEY,\n    \"cmd\": 'getschema',\n    \"msgType\": MSG_TYPE, \n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n"})})}),(0,i.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\ncurl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getschema' \\\n--data-urlencode 'msgType=OptionAtmMinuteBarData'\n\n"})})})]}),"\n",(0,i.jsx)(t.h3,{id:"get-msg-api-call",children:"Get Msg API Call"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"Python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionAtmMinuteBarData\'\n\n# Replace with your pkey value for getting the specific message desired\nPKEY = \'ReplaceThisValueForTheQueryToWork\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned. \nVIEW = \'ticker|startTime|startTimeMinute|endTime|endTimeMinute|uPrc|years|rate|sdiv|ddiv|uPrcRatio|ivol|ivxx|ivCen|slope|vWidth|refStrike|ivolHi|ivolLo|ivxxHi|ivxxLo|ivCenHi|ivCenLo|sdivHi|sdivLo|uPrcRatioHi|uPrcRatioLo|slopeHi|slopeLo|varSwapFV|maxDIVol|maxDSDiv|uPrcSPY|ivolSPY|ivxxSPY|marketSegment|ts\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:valuse" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'startTimeMinute:eq:ExampleString\'\n\n# Request Parameters for getmsg Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsg\',\n    "pkey": PKEY,\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsg' \\\n--data-urlencode 'pkey=ReplaceThisValueForTheQueryToWork' \\\n--data-urlencode 'msgType=OptionAtmMinuteBarData' \\\n--data-urlencode 'view=ticker|startTime|startTimeMinute|endTime|endTimeMinute|uPrc|years|rate|sdiv|ddiv|uPrcRatio|ivol|ivxx|ivCen|slope|vWidth|refStrike|ivolHi|ivolLo|ivxxHi|ivxxLo|ivCenHi|ivCenLo|sdivHi|sdivLo|uPrcRatioHi|uPrcRatioLo|slopeHi|slopeLo|varSwapFV|maxDIVol|maxDSDiv|uPrcSPY|ivolSPY|ivxxSPY|marketSegment|ts' \\\n--data-urlencode 'where=startTimeMinute:eq:ExampleString'\n"})})})]}),"\n",(0,i.jsx)(t.h3,{id:"get-msgs-api-call",children:"Get Msgs API Call"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"Python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionAtmMinuteBarData\'\n\n# Replace with your desired view. A "|" separated list of views can be provided\n# If no view is provided, all views will be returned\nVIEW = \'ticker|startTime|startTimeMinute|endTime|endTimeMinute|uPrc|years|rate|sdiv|ddiv|uPrcRatio|ivol|ivxx|ivCen|slope|vWidth|refStrike|ivolHi|ivolLo|ivxxHi|ivxxLo|ivCenHi|ivCenLo|sdivHi|sdivLo|uPrcRatioHi|uPrcRatioLo|slopeHi|slopeLo|varSwapFV|maxDIVol|maxDSDiv|uPrcSPY|ivolSPY|ivxxSPY|marketSegment|ts\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'startTimeMinute:eq:ExampleString\'\n\n# Replace with your desired limit of how many messages you receive. The default limit is 500\nLIMIT = 500\n\n# Order clause eg. "(field1:DESC | field1:ASC | field2:DESC:ABS | field2:ASC:ABS" (default is unordered; default is faster)\nORDER = \'ticker:ASC\'\n\n# Request Parameters for getmsgs Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getmsgs\',\n    "msgType": MSG_TYPE,\n    # Optional Parameters\n    "view": VIEW, \n    "where": WHERE,\n    "limit": LIMIT,\n    "order": ORDER\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getmsgs' \\\n--data-urlencode 'msgType=OptionAtmMinuteBarData' \\\n--data-urlencode 'view=ticker|startTime|startTimeMinute|endTime|endTimeMinute|uPrc|years|rate|sdiv|ddiv|uPrcRatio|ivol|ivxx|ivCen|slope|vWidth|refStrike|ivolHi|ivolLo|ivxxHi|ivxxLo|ivCenHi|ivCenLo|sdivHi|sdivLo|uPrcRatioHi|uPrcRatioLo|slopeHi|slopeLo|varSwapFV|maxDIVol|maxDSDiv|uPrcSPY|ivolSPY|ivxxSPY|marketSegment|ts' \\\n--data-urlencode 'where=startTimeMinute:eq:ExampleString' \\\n--data-urlencode 'limit=500' \\\n--data-urlencode 'order=ticker:ASC'\n"})})})]}),"\n",(0,i.jsx)(t.h3,{id:"get-aggregate-api-call",children:"Get Aggregate API Call"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"Python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionAtmMinuteBarData\'\n\n# Replace with fields you want to see aggregate values for. A "|" separated list of measures should be provided\nMEASURE = \'ticker|startTime|startTimeMinute|endTime|endTimeMinute|uPrc|years|rate|sdiv|ddiv|uPrcRatio|ivol|ivxx|ivCen|slope|vWidth|refStrike|ivolHi|ivolLo|ivxxHi|ivxxLo|ivCenHi|ivCenLo|sdivHi|sdivLo|uPrcRatioHi|uPrcRatioLo|slopeHi|slopeLo|varSwapFV|maxDIVol|maxDSDiv|uPrcSPY|ivolSPY|ivxxSPY|marketSegment|ts\'\n\n# Replace with fields you want to see aggregated. A "|" separated list of fields should be provided\nGROUP = \'marketSegment\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'startTimeMinute:eq:ExampleString\'\n\n# Request Parameters for getaggregate Of The MsgType\nparams = {\n    # Required Parameters\n    "apiKey": API_KEY,\n    "cmd": \'getaggregate\',\n    "msgType": MSG_TYPE,\n    "measure": MEASURE,\n    "group": GROUP,\n    # Optional Parameters\n    "where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getaggregate' \\\n--data-urlencode 'msgType=OptionAtmMinuteBarData' \\\n--data-urlencode 'measure=ticker|startTime|startTimeMinute|endTime|endTimeMinute|uPrc|years|rate|sdiv|ddiv|uPrcRatio|ivol|ivxx|ivCen|slope|vWidth|refStrike|ivolHi|ivolLo|ivxxHi|ivxxLo|ivCenHi|ivCenLo|sdivHi|sdivLo|uPrcRatioHi|uPrcRatioLo|slopeHi|slopeLo|varSwapFV|maxDIVol|maxDSDiv|uPrcSPY|ivolSPY|ivxxSPY|marketSegment|ts' \\\n--data-urlencode 'group=marketSegment' \\\n--data-urlencode 'where=startTimeMinute:eq:ExampleString'\n"})})})]}),"\n",(0,i.jsx)(t.h3,{id:"get-count-api-call",children:"Get Count API Call"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"Python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import requests \n\n# Replace with your desired MLINK URL \nMLINK_PROD_URL = \'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json\'\n\n# Replace with your MLINK API Key\nAPI_KEY = \'XXXX-XXXX-XXXX-XXXX\'\n\n# Replace with your desired MsgType.  \nMSG_TYPE = \'OptionAtmMinuteBarData\'\n\n# Replace with your desired where clause.\n# a string in the form "field1:eq:value" or "(field1:ne:value1 & field1:ne:value2)\n# "WHERE" clauses can contain the following comparison symbols:\n# :gt: is greater than\n# :ge: is greater than or equal to\n# :lt: is less than\n# :le: is less than or equal to\n# :eq: is equal\n# :ne: is not equal\n# %26 is an AND statement\n# | is an OR statement\n# :sw: is starts with\n# :ew: is ends with\n# :cv: is contains values\n# :nv: is does not contain value\n# :cb: is contained between (two dates for instance) separated by \'$\'\nWHERE = \'startTimeMinute:eq:ExampleString\'\n\n# Request Parameters for getCount Of The MsgType\nparams = {\n# Required Parameters\n"apiKey": API_KEY,\n"cmd": \'getcount\',\n"msgType": MSG_TYPE,\n# Optional Parameters\n"where": WHERE,\n}\n\nresponse = requests.get(MLINK_PROD_URL, params=params)\n'})})}),(0,i.jsx)(a.A,{value:"cUrl",label:"cUrl",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -G 'https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json' \\\n--data-urlencode 'apiKey=XXXX-XXXX-XXXX-XXXX' \\\n--data-urlencode 'cmd=getcount' \\\n--data-urlencode 'msgType=OptionAtmMinuteBarData' \\\n--data-urlencode 'where=startTimeMinute:eq:ExampleString'\n"})})})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>b});var i=n(96540),r=n(34164),s=n(23104),a=n(56347),l=n(205),d=n(57485),o=n(31682),c=n(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[a,d]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),j=(()=>{const e=o??p;return x({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&d(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function f(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),r=l[n].value;r!==i&&(o(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function X(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function b(e){const t=(0,v.A)();return(0,g.jsx)(X,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);