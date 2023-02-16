"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[3074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,h=c["".concat(o,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[c]="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Sport Cuboid",sidebar_label:"Spot Cuboid"},l=void 0,m={unversionedId:"geometry/types/parametric-spot-cuboid",id:"geometry/types/parametric-spot-cuboid",title:"Sport Cuboid",description:"Description",source:"@site/docs/geometry/types/parametric-spot-cuboid.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-spot-cuboid",permalink:"/docs/geometry/types/parametric-spot-cuboid",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-spot-cuboid.md",tags:[],version:"current",frontMatter:{title:"Sport Cuboid",sidebar_label:"Spot Cuboid"},sidebar:"sidebar",previous:{title:"Spot Cylinder",permalink:"/docs/geometry/types/parametric-spot-cylinder"},next:{title:"Floodlight Cylinder",permalink:"/docs/geometry/types/parametric-flood-light-cylinder"}},o={},p=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spot Cuboid",src:n(4651).Z,width:"500",height:"348"})),(0,r.kt)("p",null,"A Spotlight in cube shape mounted on a bracket attached to a cubic plate."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can adjust the dimensions of the light by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"Length"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Width")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Height"),"."),(0,r.kt)("li",{parentName:"ul"},"Setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"TotalHeight")," parameter will affect the size of the bracket."),(0,r.kt)("li",{parentName:"ul"},"The plate size can be changed using the base dimensions."),(0,r.kt)("li",{parentName:"ul"},"The distance of the connector of the bracket to the luminaire is the same as the ",(0,r.kt)("inlineCode",{parentName:"li"},"Height"),"."),(0,r.kt)("li",{parentName:"ul"},"The length of the connection from the base surface to the bracket is 10% of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Height"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Length"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Height"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LuminousWidth"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LuminousLength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LuminousHeight"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseWidth"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseLength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseHeight"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value in mm")))),(0,r.kt)("h2",{id:"xsd"},"XSD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<xs:element name="SpotCuboid">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n      <xs:element name="BaseWidth" type="xs:int" minOccurs="0"/>\n      <xs:element name="BaseLength" type="xs:int" minOccurs="0"/>\n      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n')),(0,r.kt)("h2",{id:"xml"},"XML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<P3D>\n  <SpotCuboid>\n    <Width>300</Width>\n    <Length>600</Length>\n    <Height>200</Height>\n    <LuminousWidth>280</LuminousWidth>\n    <LuminousLength>580</LuminousLength>\n    <LuminousHeight>90</LuminousHeight>\n  </SpotCuboid>\n</P3D>\n")))}u.isMDXComponent=!0},4651:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);