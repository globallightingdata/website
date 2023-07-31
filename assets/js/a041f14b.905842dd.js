"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,y=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Recessed Round",sidebar_label:"Recessed Round"},l=void 0,s={unversionedId:"geometry/types/parametric-round-recessed",id:"geometry/types/parametric-round-recessed",title:"Recessed Round",description:"Description",source:"@site/docs/geometry/types/parametric-round-recessed.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-round-recessed",permalink:"/docs/geometry/types/parametric-round-recessed",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-round-recessed.md",tags:[],version:"current",frontMatter:{title:"Recessed Round",sidebar_label:"Recessed Round"},sidebar:"sidebar",previous:{title:"Features",permalink:"/docs/geometry/parametric-features"},next:{title:"Recessed Cuboid",permalink:"/docs/geometry/types/parametric-cuboid-recessed"}},o={},d=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Recessed Round",src:n(3709).Z,width:"376",height:"368"})),(0,a.kt)("p",null,"Round recessed luminaire."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Diameter")," indicates the widest part of the luminaire."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Height")," describes the total height, including the recessed and protruding parts of the luminaire."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LuminousDiameter")," describes the diameter of the illuminated surface."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"TopDiameter")," is, by default, 80% of the total diameter and describes the diameter of the recessed part."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LuminousHeight")," describes how far the luminaire protrudes from the mounting surface."),(0,a.kt)("li",{parentName:"ul"},"The luminaire can be mounted on ceilings, walls or floors (",(0,a.kt)("inlineCode",{parentName:"li"},"Mounting"),").")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Diameter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Height"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousDiameter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TopDiameter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LuminousHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"value in mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mounting"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ceiling, Wall or Floor")))),(0,a.kt)("h2",{id:"xsd"},"XSD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<xs:element name="RecessedRound">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousDiameter" type="xs:int"/>\n      <xs:element name="TopDiameter" type="xs:int" minOccurs="0">\n      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="Mounting">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Ceiling"/>\n            <xs:enumeration value="Wall"/>\n            <xs:enumeration value="Floor"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n')),(0,a.kt)("h2",{id:"xml"},"XML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<P3D>\n  <RecessedRound>\n    <Diameter>50</Diameter>\n    <Height>50</Height>\n    <LuminousDiameter>40</LuminousDiameter>\n    <TopDiameter>40</TopDiameter>\n    <LuminousHeight>10</LuminousHeight>\n    <Mounting>Ceiling</Mounting>\n  </RecessedRound>\n</P3D>\n")))}c.isMDXComponent=!0},3709:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);