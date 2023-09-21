"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={title:"XML Hierarchy",sidebar_label:"XML Hierarchy"},o=void 0,s={unversionedId:"structure/xml-hierarchy",id:"structure/xml-hierarchy",title:"XML Hierarchy",description:"We designed GLDF to provide a standardized way of exchanging luminaire data between software tools and systems.",source:"@site/docs/structure/xml-hierarchy.md",sourceDirName:"structure",slug:"/structure/xml-hierarchy",permalink:"/docs/structure/xml-hierarchy",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/structure/xml-hierarchy.md",tags:[],version:"current",frontMatter:{title:"XML Hierarchy",sidebar_label:"XML Hierarchy"},sidebar:"sidebar",previous:{title:"XSD Reference",permalink:"/docs/getting-started/xsd-reference"},next:{title:"Header",permalink:"/docs/structure/header"}},l={},c=[{value:"Header",id:"header",level:3},{value:"General Definitions",id:"general-definitions",level:3},{value:"Product Definitions",id:"product-definitions",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We designed ",(0,i.kt)("inlineCode",{parentName:"p"},"GLDF")," to provide a standardized way of exchanging luminaire data between software tools and systems."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"GLDF")," file consists of three parts: ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"general definitions"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"product definitions"),". The header contains meta-information about the product and file, such as the manufacturer name, version information, time and date of file creation, manufacturer contact information, license keys, and more."),(0,i.kt)("p",null,"The second part, ",(0,i.kt)("inlineCode",{parentName:"p"},"general definitions"),", defines reusable blocks of information. The file uses these blocks to define ",(0,i.kt)("inlineCode",{parentName:"p"},"Files"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sensors"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Photometries"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Spectrums"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Light Sources"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Control Gears"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Equipment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Emitters"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Geometries"),"."),(0,i.kt)("p",null,"The third part is called ",(0,i.kt)("inlineCode",{parentName:"p"},"product definitions"),". Here is where you put together your information defined in the Genera Definitions section to describe the final luminaire product and its variants."),(0,i.kt)("img",{src:"/img/docs/structure/structure-dependencies.webp",alt:"GLDF XML structure dependencies",width:"500"}),(0,i.kt)("p",null,"For a detailed description of the individual parts of the GLDF file, please see the respective sections of the documentation."),(0,i.kt)("h3",{id:"header"},"Header"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/header"},"Header"))),(0,i.kt)("h3",{id:"general-definitions"},"General Definitions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/files"},"Files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/sensors"},"Sensors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/photometries"},"Photometries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/spectrums"},"Spectrums")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/light-sources"},"Light Sources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/control-gears"},"Control Gears")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/equipments"},"Equipments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/emitters"},"Emitters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/geometries"},"Geometries"))),(0,i.kt)("h3",{id:"product-definitions"},"Product Definitions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/product"},"Global Product Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/variant"},"Specific Variant Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/docs/structure/descriptive-attributes"},"Descriptive Attributes"))))}p.isMDXComponent=!0}}]);