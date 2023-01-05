"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[9381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,y=s["".concat(m,".").concat(u)]||s[u]||c[u]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Bollard Cylinder",sidebar_label:"Bollard Cylinder"},i=void 0,o={unversionedId:"geometry/types/parametric-bollard-cylinder",id:"geometry/types/parametric-bollard-cylinder",title:"Bollard Cylinder",description:"Description",source:"@site/docs/geometry/types/parametric-bollard-cylinder.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-bollard-cylinder",permalink:"/docs/geometry/types/parametric-bollard-cylinder",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-bollard-cylinder.md",tags:[],version:"current",frontMatter:{title:"Bollard Cylinder",sidebar_label:"Bollard Cylinder"},sidebar:"sidebar",previous:{title:"Bollard Cuboid",permalink:"/docs/geometry/types/parametric-bollard-cuboid"},next:{title:"Bollard Side",permalink:"/docs/geometry/types/parametric-bollard-side"}},m={},d=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bollard Cylinder",src:n(379).Z,width:"367",height:"500"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BollardCylinder")," is a Cylinder-shaped bollard with a luminous surface around the model."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"Height")," will set the height of the head, whereas the ",(0,a.kt)("inlineCode",{parentName:"li"},"TotalHeight")," will affect the size of the entire model."),(0,a.kt)("li",{parentName:"ul"},"The default setting is one luminous surface aligned to C0."),(0,a.kt)("li",{parentName:"ul"},"The default distance of the luminous surface is 2% of the height measured from the upper edge."),(0,a.kt)("li",{parentName:"ul"},"There is only one size for luminous surfaces."),(0,a.kt)("li",{parentName:"ul"},"Any Value in ",(0,a.kt)("inlineCode",{parentName:"li"},"C0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"C90"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"C180")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"C270")," greater than zero means there will be a luminuous surface as defined in the luminous dimensions.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Diameter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Height"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TotalHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C90"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C180"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C270"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")))),(0,a.kt)("h2",{id:"xsd"},"XSD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<xs:element name="BollardCylinder">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int" minOccurs="0"/>\n      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="C0" type="xs:int" minOccurs="0"/>\n      <xs:element name="C90" type="xs:int" minOccurs="0"/>\n      <xs:element name="C180" type="xs:int" minOccurs="0"/>\n      <xs:element name="C270" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n')),(0,a.kt)("h2",{id:"xml"},"XML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<P3D>\n  <BollardCylinder>\n    <Diameter>300</Diameter>\n    <Height>200</Height>\n    <LuminousHeight>200</LuminousHeight>\n    <TotalHeight>1300</TotalHeight>\n  </BollardCylinder>\n</P3D>\n")))}c.isMDXComponent=!0},379:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);