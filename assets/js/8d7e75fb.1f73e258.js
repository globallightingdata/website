"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[1839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),k=n,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||s;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={title:"GLDF Introduction",sidebar_label:"Introduction",slug:"/"},l=void 0,o={unversionedId:"overview/introduction",id:"overview/introduction",title:"GLDF Introduction",description:"Welcome to the GLDF docs. The complete documentation, examples, guides and developer notes will soon be available here.",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/overview/introduction.md",tags:[],version:"current",frontMatter:{title:"GLDF Introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Purpose",permalink:"/docs/overview/purpose"}},i={},c=[{value:"How to use these docs",id:"how-to-use-these-docs",level:2},{value:"Topics done",id:"topics-done",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the GLDF docs. The complete documentation, examples, guides and developer notes will soon be available here."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We will gradually expand the following pages over the coming weeks and months. So check back occasionally.")),(0,n.kt)("h2",{id:"how-to-use-these-docs"},"How to use these docs"),(0,n.kt)("p",null,"You can start here and read through these docs like a book. Or you can read the specific sections you needed. Should you need a reference, have a look on the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///xsd-reference/index_Root.html"},(0,n.kt)("strong",{parentName:"a"},"XSD reference"))," anytime."),(0,n.kt)("h2",{id:"topics-done"},"Topics done"),(0,n.kt)("p",null,"As long as not all chapters of the documentation are complete, you can find an overview of the already finished documentation here"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Overview"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs"},(0,n.kt)("span",{class:"red-text"},"GLDF Introduction"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/overview/purpose"},(0,n.kt)("span",{class:"red-text"},"GLDF Purpose"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/overview/features"},(0,n.kt)("span",{class:"red-text"},"GLDF Features"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Getting started"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/getting-started/requirements"},(0,n.kt)("span",{class:"green-text"},"Requirements"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/getting-started/create-first-gldf"},(0,n.kt)("span",{class:"red-text"},"Create your first GLDF"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/getting-started/examples"},(0,n.kt)("span",{class:"red-text"},"Examples"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/getting-started/templates"},(0,n.kt)("span",{class:"green-text"},"Templates"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/getting-started/xsd-reference"},(0,n.kt)("span",{class:"green-text"},"XSD Reference"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"XML Structure"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/xml-hierarchy"},(0,n.kt)("span",{class:"red-text"},"XML Hierarchy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/header"},(0,n.kt)("span",{class:"red-text"},"Header"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/files"},(0,n.kt)("span",{class:"green-text"},"Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/sensors"},(0,n.kt)("span",{class:"red-text"},"Sensors"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/photometries"},(0,n.kt)("span",{class:"green-text"},"Photometries"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/spectrums"},(0,n.kt)("span",{class:"green-text"},"Spectrums"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/light-sources"},(0,n.kt)("span",{class:"red-text"},"Light Sources"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/control-gears"},(0,n.kt)("span",{class:"green-text"},"Control Gears"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/equipments"},(0,n.kt)("span",{class:"green-text"},"Equipments"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/emitters"},(0,n.kt)("span",{class:"green-text"},"Emitters"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/geometries"},(0,n.kt)("span",{class:"red-text"},"Geometries"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/product"},(0,n.kt)("span",{class:"green-text"},"Product MetaData"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/variant"},(0,n.kt)("span",{class:"red-text"},"Variant"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/structure/descriptive-attributes"},(0,n.kt)("span",{class:"red-text"},"Descriptive Attributes"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GLDF Container"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/container/about-container"},(0,n.kt)("span",{class:"green-text"},"About Container"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/container/container-specification"},(0,n.kt)("span",{class:"green-text"},"Container Specification"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conventions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/conventions/measurement-units"},(0,n.kt)("span",{class:"red-text"},"Measurement Units"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/conventions/referencing"},(0,n.kt)("span",{class:"red-text"},"Referencing"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/conventions/gldf-over-ldc"},(0,n.kt)("span",{class:"red-text"},"GLDF over LDC"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/conventions/variant-over-global"},(0,n.kt)("span",{class:"red-text"},"Variant over Global"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"3D Geometry"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/geometry/introduction"},(0,n.kt)("span",{class:"red-text"},"Introduction"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/geometry/l3d-intro"},(0,n.kt)("span",{class:"green-text"},"L3D Introduction"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/geometry/l3d-examples"},(0,n.kt)("span",{class:"green-text"},"L3D Examples"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/geometry/l3d-xml-reference"},(0,n.kt)("span",{class:"green-text"},"L3D XML Reference"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/geometry/l3d-container-spec"},(0,n.kt)("span",{class:"green-text"},"L3D Container specification"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tips"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tips/good-products"},(0,n.kt)("span",{class:"red-text"},"Creating good GLDF files"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tools & Develop"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/dialux"},(0,n.kt)("span",{class:"red-text"},"GLDF in DIALux"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/relux"},(0,n.kt)("span",{class:"red-text"},"GLDF in RELUX"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tooling"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/gldf-editor"},(0,n.kt)("span",{class:"red-text"},"GLDF Editor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/l3d-editor"},(0,n.kt)("span",{class:"green-text"},"L3D Editor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/gldf-check"},(0,n.kt)("span",{class:"red-text"},"GLDF Check"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/gldf-checksum-service"},(0,n.kt)("span",{class:"red-text"},"GLDF Checksum Service"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parsers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/gldf-net-parser"},(0,n.kt)("span",{class:"green-text"},"GLDF.NET Parser"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/l3d-net-parser"},(0,n.kt)("span",{class:"green-text"},"L3D.Net Parser"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Plugins"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/revit-plugin"},(0,n.kt)("span",{class:"red-text"},"Revit Plugin"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/tools-dev/autodesk-plugin"},(0,n.kt)("span",{class:"red-text"},"Autodesk Plugin"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Get involved"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/contribute"},(0,n.kt)("span",{class:"green-text"},"Contribute"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/docs/contribute/become-a-partner"},(0,n.kt)("span",{class:"red-text"},"Become a Partner")))))))}d.isMDXComponent=!0}}]);