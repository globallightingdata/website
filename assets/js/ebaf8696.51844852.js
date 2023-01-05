"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[2815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={title:"Recessed Cuboid",sidebar_label:"Recessed Cuboid"},l=void 0,o={unversionedId:"geometry/types/parametric-cuboid-recessed",id:"geometry/types/parametric-cuboid-recessed",title:"Recessed Cuboid",description:"Description",source:"@site/docs/geometry/types/parametric-cuboid-recessed.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-cuboid-recessed",permalink:"/docs/geometry/types/parametric-cuboid-recessed",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-cuboid-recessed.md",tags:[],version:"current",frontMatter:{title:"Recessed Cuboid",sidebar_label:"Recessed Cuboid"},sidebar:"sidebar",previous:{title:"Recessed Round",permalink:"/docs/geometry/types/parametric-round-recessed"},next:{title:"Open Luminaire",permalink:"/docs/geometry/types/parametric-open-luminaire"}},s={},m=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}],p={toc:m};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Recessed Cuboid",src:n(393).Z,width:"442",height:"453"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RecessedCuboid")," is a cube-shaped recessed luminaire."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Width"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Length"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"Height")," describe the total size of the entire luminaire."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LuminousWidth"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"LuminousLength")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"LuminousHeight")," describe the dimensions of the luminous surfaces."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"LuminousHeight")," describes how far the luminous part sticks out of the mounting surface."),(0,a.kt)("li",{parentName:"ul"},"Top dimensions are by default 80% of the lower dimensions.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Width"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Length"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Height"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousWidth"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousLength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TopWidth"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TopLength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mounting"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ceiling, Wall or Floor")))),(0,a.kt)("h2",{id:"xsd"},"XSD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<xs:element name="RecessedCuboid">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n      <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>\n      <xs:element name="TopLength" type="xs:int" minOccurs="0"/>\n      <xs:element name="Mounting">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Ceiling"/>\n            <xs:enumeration value="Wall"/>\n            <xs:enumeration value="Floor"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n')),(0,a.kt)("h2",{id:"xml"},"XML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<P3D>\n  <RecessedCuboid>\n    <Width>80</Width>\n    <Length>80</Length>\n    <Height>80</Height>\n    <LuminousWidth>70</LuminousWidth>\n    <LuminousLength>70</LuminousLength>\n    <LuminousHeight>70</LuminousHeight>\n    <Mounting>Ceiling</Mounting>\n  </RecessedCuboid>\n</P3D>\n")))}u.isMDXComponent=!0},393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recessed-cuboid-5c2f6f36c9c267ea02c5b77c030cd94f.webp"}}]);