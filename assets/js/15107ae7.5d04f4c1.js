"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[8986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=p(n),c=a,g=s["".concat(o,".").concat(c)]||s[c]||d[c]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Wall Cuboid",sidebar_label:"Wall Cuboid"},l=void 0,m={unversionedId:"geometry/types/parametric-wall-cuboid",id:"geometry/types/parametric-wall-cuboid",title:"Wall Cuboid",description:"Description",source:"@site/docs/geometry/types/parametric-wall-cuboid.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-wall-cuboid",permalink:"/docs/geometry/types/parametric-wall-cuboid",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-wall-cuboid.md",tags:[],version:"current",frontMatter:{title:"Wall Cuboid",sidebar_label:"Wall Cuboid"},sidebar:"sidebar",previous:{title:"Stand Cuboid Side",permalink:"/docs/geometry/types/parametric-stand-cuboid-side"},next:{title:"Wall Cylinder",permalink:"/docs/geometry/types/parametric-wall-cylinder"}},o={},p=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wall Cuboid",src:n(5815).Z,width:"413",height:"500"})),(0,a.kt)("p",null,"This type is a cube-Shaped luminaire that is attached to a wall."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Parameters ",(0,a.kt)("inlineCode",{parentName:"li"},"Length"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Width"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"Height")," will determine the housing dimensions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LuminousLength"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"LuminousWidth")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"LuminousHeight")," determine the size of the luminous surfaces."),(0,a.kt)("li",{parentName:"ul"},"You can skew the housing by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"TopLength")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"TopWidth"),"."),(0,a.kt)("li",{parentName:"ul"},"You can define the light output areas trough ",(0,a.kt)("inlineCode",{parentName:"li"},"Type")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"Direct"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Indirect"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"DirectIndirect"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Width"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Length"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Height"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousWidth"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousLength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TopWidth"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TopLength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Direct, Indirect, DirectIndirect")))),(0,a.kt)("h2",{id:"xsd"},"XSD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<xs:element name="WallCuboid">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n      <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>\n      <xs:element name="TopLength" type="xs:int" minOccurs="0"/>\n      <xs:element name="Type" minOccurs="0">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Direct"/>\n            <xs:enumeration value="Indirect"/>\n            <xs:enumeration value="DirectIndirect"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n')),(0,a.kt)("h2",{id:"xml"},"XML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<P3D>\n  <WallCuboid>\n    <Width>400</Width>\n    <Length>400</Length>\n    <Height>800</Height>\n    <LuminousWidth>390</LuminousWidth>\n    <LuminousLength>390</LuminousLength>\n    <LuminousHeight>20</LuminousHeight>\n    <Type>DirectIndirect</Type>\n  </WallCuboid>\n</P3D>\n")))}d.isMDXComponent=!0},5815:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wall-cuboid-aa7e7e89f7f926b10e927415ee3b5caa.webp"}}]);