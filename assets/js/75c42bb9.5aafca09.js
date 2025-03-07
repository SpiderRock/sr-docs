"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84689],{19597:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(74848),s=i(28453);const r={title:"Portal App Manual",sidebar_position:2},a=void 0,o={id:"Documentation/Products/ToolSuite/PortalApp",title:"Portal App Manual",description:"The Portal App is an application in the SpiderRock Connect platform that allows users to view and manage certain messages within our system. Similar to how users use SRSE or MLink APIs, users can view messages they have scope for and if they have the correct permissions, also edit them as needed. Unlike SRSE or MLink, the Portal is a provided front end that can be accessed via a web browser or desktop application. The messages within this tool are scoped by user and by client firm so sensitive data can only be accessed through strict controls. This tool replaces the Admin Viewer and Control Viewer in Citrix tools for Platform V7.",source:"@site/docs/Documentation/Products/ToolSuite/PortalApp.md",sourceDirName:"Documentation/Products/ToolSuite",slug:"/Documentation/Products/ToolSuite/PortalApp",permalink:"/docs/next/Documentation/Products/ToolSuite/PortalApp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Portal App Manual",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Example - Responding to a Block Auction",permalink:"/docs/next/Documentation/Products/ToolSuite/TradeApp/BlockRespondingExample"},next:{title:"Citrix Tool Suite",permalink:"/docs/next/Documentation/Products/CitrixTools"}},l={},d=[{value:"Accessing the Portal",id:"accessing-the-portal",level:2},{value:"Viewing Messages",id:"viewing-messages",level:2},{value:"Editing Messages",id:"editing-messages",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Query Panel",id:"query-panel",level:3},{value:"Chip Filters",id:"chip-filters",level:3},{value:"Quick Filters",id:"quick-filters",level:3},{value:"Time Filters",id:"time-filters",level:3},{value:"Summarizing",id:"summarizing",level:2},{value:"Comparison",id:"comparison",level:2},{value:"Importing / Exporting Data",id:"importing--exporting-data",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Changing Servers",id:"changing-servers",level:3},{value:"Viewing Debug Window",id:"viewing-debug-window",level:3}];function c(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Portal App is an application in the SpiderRock Connect platform that allows users to view and manage certain messages within our system. Similar to how users use SRSE or MLink APIs, users can view messages they have scope for and if they have the correct permissions, also edit them as needed. Unlike SRSE or MLink, the Portal is a provided front end that can be accessed via a web browser or desktop application. The messages within this tool are scoped by user and by client firm so sensitive data can only be accessed through strict controls. This tool replaces the Admin Viewer and Control Viewer in Citrix tools for Platform V7."}),"\n",(0,n.jsx)(t.h2,{id:"accessing-the-portal",children:"Accessing the Portal"}),"\n",(0,n.jsxs)(t.p,{children:["Users can either log into the Portal through the web at ",(0,n.jsx)(t.a,{href:"https://www.spiderrockconnect.com/portal",children:"https://www.spiderrockconnect.com/portal"})," or an installed desktop application. Users can gain access to the Portal after a SpiderRock Support Admin or Sponsor Firm Admin creates credentials for them or grants access to and existing user. Like the entire SpiderRock Connect system, multi-factor authentication is required for login."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"alt text",src:i(38349).A+"",width:"309",height:"359"}),(0,n.jsx)(t.img,{alt:"alt text",src:i(6582).A+"",width:"323",height:"301"})]}),"\n",(0,n.jsx)(t.h2,{id:"viewing-messages",children:"Viewing Messages"}),"\n",(0,n.jsx)(t.p,{children:"Users can view messages by navigating to them in the upper-right hand corner and can view them by SRSE category or MLink token (MLink token is default). Once a grouping has been chosen, the user can either filter further by grouping or search all of them (All is default)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(60383).A+"",width:"975",height:"76"})}),"\n",(0,n.jsx)(t.p,{children:"Finally, once the individual message type is found, the user clicks on it and all messages of that message type will be loaded in the below Results Grid."}),"\n",(0,n.jsx)(t.p,{children:"By default, a subset of fields (or columns) in the grid are shown, to see every field users can optionally enable the \u201cShow All Columns\u201d toggle. Note showing all columns decreases performance and speed as more bandwidth is needed to deliver the full dataset to the screen."}),"\n",(0,n.jsx)(t.p,{children:"From there, a user may select an individual message that will then load all of the fields for that record in the Details Panel to the right."}),"\n",(0,n.jsx)(t.h2,{id:"editing-messages",children:"Editing Messages"}),"\n",(0,n.jsx)(t.p,{children:"If the user has access to be able to edit a particular message type, the fields will be shown as editable in the Details Panel."}),"\n",(0,n.jsx)(t.p,{children:"If a user edits a field, the field will be shown with a blue outline to indicate the field has been changed and will update upon saving the changes. Once the record is saved, the field will show its' editable status."}),"\n",(0,n.jsx)(t.p,{children:"To save changes, users should click the \u2018Save Changes\u2019 button in the Details Panel."}),"\n",(0,n.jsx)(t.h2,{id:"filtering",children:"Filtering"}),"\n",(0,n.jsx)(t.p,{children:"Due to the same results limits found in MLink, the Portal will only return up to 500 results to the Results Grid. In order to return a refined result set that a user may be trying to specifically find, users are expected to use our advanced filtering system to target their expected results. There are several ways to add filters listed below."}),"\n",(0,n.jsx)(t.h3,{id:"query-panel",children:"Query Panel"}),"\n",(0,n.jsx)(t.p,{children:"At the top of the application, the Query Panel shows commonly used fields to filter on per message type. A user can either enter strings or select enums they can then apply to the filter system. Once applied, these filters show in the below chip system where they can be edited or removed."}),"\n",(0,n.jsx)(t.h3,{id:"chip-filters",children:"Chip Filters"}),"\n",(0,n.jsx)(t.p,{children:"If a user wants to add a filter for a field not visible, the user can click the \u201c+\u201dbutton in the chip filter section to select any field in the record, an operator and enter a filter value. If a non-visible field is added as a filter, it will then appear in the Results Grid. Chip filters can be edited by clicking on the chip or removed by clicking the \u201cx\u201d on the chip."}),"\n",(0,n.jsx)(t.p,{children:"Complex filters can be made by changing the AND/OR operator when more than one filter is added."}),"\n",(0,n.jsx)(t.h3,{id:"quick-filters",children:"Quick Filters"}),"\n",(0,n.jsx)(t.p,{children:"If a user wants to add a quick filter, simply hover over a cell in the Results Grid to reveal a \u201c+/-\u201dcontrol on the right side of the cell. By clicking the \u201c+\u201d, a user will add a filter equaling the value of the field of the selected cell (additive).  By clicking the \u201c-\u201d, a user will add a filter not equal to the value of the field of the selected cell (reductive)."}),"\n",(0,n.jsx)(t.h3,{id:"time-filters",children:"Time Filters"}),"\n",(0,n.jsx)(t.p,{children:"On the upper-right side of the application, there is a time control where a user can either choose a value from the dropdown control or click through the histogram to navigate through time. Clicking into the histogram will zoom into the time period of that bar and divide time further."}),"\n",(0,n.jsx)(t.p,{children:"Using the dropdown, a user can click the calendar icon to select pre-defined time ranges or if you click on the left side you can enter a specific date-time range."}),"\n",(0,n.jsx)(t.h2,{id:"summarizing",children:"Summarizing"}),"\n",(0,n.jsx)(t.p,{children:"If a user would like to see summaries of a message type in aggregate, they can choose to add a Summary Grid by clicking the plus button in the Summarize Bar and adding a field to summarize and aggregate by. The Portal allows for up to 3 fields to aggregate by, but will summarize the content for every field in the message type for as many records that exist to the scope of the user\u2019s settings. This gives the user an ability to view data in its entirety rather than being limited to the only being able to view 500 records at a time."}),"\n",(0,n.jsx)(t.h2,{id:"comparison",children:"Comparison"}),"\n",(0,n.jsx)(t.p,{children:"If a user would like to compare two or more records together, they can select multiple records by holding Shift or Ctrl (Cmd if on Mac) and clicking a new record.  Once multiple records have been selected a Compare button will appear at the bottom of the Results Grid. If clicked, a new Comparison Grid will appear that will show all fields of the selected records so a user can scroll across and look for differences. If the content is not different from each other, the content is presented in gray text, if the content differs from each other, the content will be displayed in white so that the values can be more easily compared."}),"\n",(0,n.jsx)(t.p,{children:"To exit Comparison Mode, the clear selection button may be pressed and the user will be returned to the Results Grid with nothing selected."}),"\n",(0,n.jsx)(t.h2,{id:"importing--exporting-data",children:"Importing / Exporting Data"}),"\n",(0,n.jsx)(t.p,{children:"In order to add a new record to a message type, a user can click the \u201c+\u201d button to reveal a dropdown. From here a user can add a new single record which will open up a Details Panel with an empty form for the user to enter information. Upon clicking the \u201cCreate Record\u201d button the new record will have been saved."}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, a user can import several records from a CSV file that\u2019s properly formatted by choosing \u201cImport from file\u201d. After being selected a user can browse for a file to upload. From there, the Portal will check the format to ensure it matches the schema of the message type it\u2019s being imported into and present any errors to the user. After ensuring the format aligns, the user can import the entire file and will add new records as determined by the CSV file."}),"\n",(0,n.jsx)(t.p,{children:"In order to export data, find the menu icon in the bottom left of any grid. Opening the menu, the user will see various options for how to export and download the data."}),"\n",(0,n.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,n.jsx)(t.p,{children:"The Portal supports a few advanced features for users in more unique situations."}),"\n",(0,n.jsx)(t.h3,{id:"changing-servers",children:"Changing Servers"}),"\n",(0,n.jsx)(t.p,{children:"In some cases, running the Portal on a network that doesn\u2019t have access to the internet requires users to change the source of the backend servers. In this case, users should expect to get any special IP address or URL from their network administrators. Once obtained, the user can change the server by opening the user menu in the upper right corner of the application and using the dropdown of the \u201cBackend Server\u201d option."}),"\n",(0,n.jsx)(t.h3,{id:"viewing-debug-window",children:"Viewing Debug Window"}),"\n",(0,n.jsx)(t.p,{children:"Occasionally, a user may want to access the Portal\u2019s Debug Window if asked by our Support team. This window contains helpful information to our team to understand why a user may be experiencing something unexpected. To open this window, simply press Shift+Ctrl+;"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},38349:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pt-image1-6882f84ae171caca837483ce288ea014.png"},6582:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pt-image2-09072aabf38b4ae8412abfd9a8f6ee00.png"},60383:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pt-image3-9f009b2a69f0307b131ddd936ea785fd.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);