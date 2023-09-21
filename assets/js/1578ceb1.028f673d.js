"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[4640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"Header",sidebar_label:"Header"},o=void 0,s={unversionedId:"structure/header",id:"structure/header",title:"Header",description:"The Header is the first part of the GLDF product.xml file. It contains meta-information about the manufacturer, GLDF version. And Relux/DIAL license information if applicable. It does not necessarily have product information.",source:"@site/docs/structure/header.md",sourceDirName:"structure",slug:"/structure/header",permalink:"/docs/structure/header",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/structure/header.md",tags:[],version:"current",frontMatter:{title:"Header",sidebar_label:"Header"},sidebar:"sidebar",previous:{title:"XML Hierarchy",permalink:"/docs/structure/xml-hierarchy"},next:{title:"Files",permalink:"/docs/structure/files"}},p={},l=[{value:"Author",id:"author",level:2},{value:"Manufacturer",id:"manufacturer",level:2},{value:"CreationTimeCode",id:"creationtimecode",level:2},{value:"CreatedWithApplication",id:"createdwithapplication",level:2},{value:"FormatVersion",id:"formatversion",level:2},{value:"DefaultLanguage",id:"defaultlanguage",level:2},{value:"LicenseKeys",id:"licensekeys",level:2},{value:"ReluxMemberId and DIALuxMemberId",id:"reluxmemberid-and-dialuxmemberid",level:2},{value:"Contact",id:"contact",level:2}],m={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," is the first part of the GLDF product.xml file. It contains meta-information about the manufacturer, GLDF version. And Relux/DIAL license information if applicable. It does not necessarily have product information."),(0,r.kt)("img",{src:"/img/docs/structure/header.webp",alt:"GLDF XML structure header",width:"400"}),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," describes the author of the GLDF file. The author can be a company or the name of an individual who made the file."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:string"))),(0,r.kt)("h2",{id:"manufacturer"},"Manufacturer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Manufacturer")," will typically be the name of the company that produces or sells the luminaire."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:string"))),(0,r.kt)("h2",{id:"creationtimecode"},"CreationTimeCode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CreationTimeCode")," is the date and time when you create or generate the GLDF file. The data type is xs:dateTime"),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:dateTime"))),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The format of xs:dateTime is: yyyy-mm-ddThh:mm:ss.sssssssssssszzzzzz"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Lexical form")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"yyyy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A four-digit numeral that represents the year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A two-digit numeral that represents the month.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A two-digit numeral that represents the day.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hh"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A two-digit numeral that represents the hour.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A two-digit numeral that represents the minute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ss"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A two-digit numeral that represents the second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},".ssssssssssss"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional. 1-to-12 digit numeral that represents fractional seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zzzzzz"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional, represents the time zone."))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<CreationTimeCode>2022-04-03T18:07:42Z</CreationTimeCode>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<CreationTimeCode>2023-02-08T12:00:00-02:00</CreationTimeCode>\n")),(0,r.kt)("h2",{id:"createdwithapplication"},"CreatedWithApplication"),(0,r.kt)("p",null,"This section describes which application the author used to make the GLDF file."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:string"))),(0,r.kt)("h2",{id:"formatversion"},"FormatVersion"),(0,r.kt)("p",null,"This section describes which Version of GLDF is being used."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")," must be ",(0,r.kt)("strong",{parentName:"p"},"1.0.0-rc.1"))),(0,r.kt)("h2",{id:"defaultlanguage"},"DefaultLanguage"),(0,r.kt)("p",null,"If the GLDF file provides mutiple translations, ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultLanguage")," describes the language which applications should fall back to display this GLDF, if no one matches the applications current GUI language. Should ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultLanguage")," not be provided, the implementation will be application-specific (and preferably English)."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:language"))),(0,r.kt)("h2",{id:"licensekeys"},"LicenseKeys"),(0,r.kt)("p",null,"For Relux and DIALux to utilize the GLDF file to its full extent, you may need to add a license key. The key is provided to the manufacturers by Relux and DIAL. Further 3rd party license keys are also possible, should the be required."),(0,r.kt)("img",{src:"/img/docs/structure/licensekeys.webp",alt:"GLDF XML structure header",width:"700"}),(0,r.kt)("p",null,"The content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LicenceKey")," Element shall be the key as provided by Relux or DIALux. The application tag will determine the company the license key is intended for."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype LicenseKey: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Datatype application: ",(0,r.kt)("strong",{parentName:"p"},"xs:string"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{6-9} showLineNumbers","{6-9}":!0,showLineNumbers:!0},'<Header>\n  <Manufacturer>Manufacturer</Manufacturer>\n  <CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>\n  <CreatedWithApplication>n/a</CreatedWithApplication>\n  <FormatVersion>1.0.0-rc.1</FormatVersion>\n  <LicenseKeys>\n    <LicenseKey application="RELUX">Relux Key</LicenseKey>\n    <LicenseKey application="DIALux">DIALux Key</LicenseKey>\n  </LicenseKeys>\n</Header>\n')),(0,r.kt)("h2",{id:"reluxmemberid-and-dialuxmemberid"},"ReluxMemberId and DIALuxMemberId"),(0,r.kt)("p",null,"Relux and DIAL may assign company IDs to manufacturers. These Ids will help applications associate GLDF files with a specific manufacturer."),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Datatype: ",(0,r.kt)("strong",{parentName:"p"},"xs:string"))),(0,r.kt)("h2",{id:"contact"},"Contact"),(0,r.kt)("p",null,"This section holds contact information for the manufacturer. You can add an unlimited amount of contacts. Most fields are strings and you can fill them as you wish - except for email addresses and hyperlinks with a specific structure. Email addresses are the only mandatory contact information if you add contact information to the header."),(0,r.kt)("img",{src:"/img/docs/structure/contactstruct.webp",alt:"GLDF XML structure for contact information within header",width:"500"}),(0,r.kt)("p",null,'You can add an unlimited amount of email addresses. The tag must contain a description and a valid E-Mail address in the "mailto" attribute of the element.'),(0,r.kt)("img",{src:"/img/docs/structure/emailhyperlinks.webp",alt:"GLDF XML structure for contact information within header",width:"450"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<Contact>\n  <Address>\n    <Name>Name</Name>\n    <Street>Street</Street>\n    <Number>1</Number>\n    <ZIPCode>123456</ZIPCode>\n    <City>Duisburg</City>\n    <Country>Germany</Country>\n    <EMailAddresses>\n      <EMail mailto="sample@samlpe.com">E-Mail</EMail>\n      <EMail mailto="sample2@damlpe.com">E-Mail2</EMail>\n    </EMailAddresses>\n    <Websites>\n      <Hyperlink href="http://www.relux.com">Light Sample</Hyperlink>\n    </Websites>\n  </Address>\n</Contact>\n')),(0,r.kt)("admonition",{title:"Convention",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"FirstName: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Name: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Street: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Number: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"ZIPCode: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"City: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Country: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Phone: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"EMailAddresses: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Attribute mailto: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"Websites: ",(0,r.kt)("strong",{parentName:"p"},"see EMailAddresses")),(0,r.kt)("p",{parentName:"admonition"},"Hyperlink: ",(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},'href" ',(0,r.kt)("strong",{parentName:"p"},"xs:string")),(0,r.kt)("p",{parentName:"admonition"},"language: ",(0,r.kt)("strong",{parentName:"p"},"xs:language")),(0,r.kt)("p",{parentName:"admonition"},"region: ",(0,r.kt)("strong",{parentName:"p"},"xs:language")),(0,r.kt)("p",{parentName:"admonition"},"countryCode: ",(0,r.kt)("strong",{parentName:"p"},"xs:language"),' pattern value="',"[a-zA-Z]","{2}"),(0,r.kt)("p",{parentName:"admonition"},"AdditionalInfo: ",(0,r.kt)("strong",{parentName:"p"},"xs:string"))))}u.isMDXComponent=!0}}]);