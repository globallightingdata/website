"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[9028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Referencing in GLDF",sidebar_label:"Referencing"},a=void 0,l={unversionedId:"conventions/referencing",id:"conventions/referencing",title:"Referencing in GLDF",description:"As described in the chapters on XML hierarchy, the GLDF is structured in a modular way, where parts of the luminaire are defined first and then combined to form Variants. This is done in the XML by referencing the blocks with each other.",source:"@site/docs/conventions/referencing.md",sourceDirName:"conventions",slug:"/conventions/referencing",permalink:"/docs/conventions/referencing",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/conventions/referencing.md",tags:[],version:"current",frontMatter:{title:"Referencing in GLDF",sidebar_label:"Referencing"},sidebar:"sidebar",previous:{title:"Measurement Units",permalink:"/docs/conventions/measurement-units"},next:{title:"GLDF over Photometry",permalink:"/docs/conventions/gldf-over-ldc"}},s={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/xml-hierarchy"},"chapters on XML hierarchy"),", the GLDF is structured in a ",(0,i.kt)("strong",{parentName:"p"},"modular")," way, where parts of the luminaire are defined first and then ",(0,i.kt)("strong",{parentName:"p"},"combined to form ",(0,i.kt)("a",{parentName:"strong",href:"/docs/structure/variant"},"Variants")),". This is done in the XML by referencing the blocks with each other."),(0,i.kt)("admonition",{title:"Convention",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For this purpose, each block, that can be ",(0,i.kt)("strong",{parentName:"p"},"referenced in subsequent blocks"),", has an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute.")),(0,i.kt)("p",null,"ID values can be freely chosen, but must fulfil some restrictions. The most important are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ids must be globally unique. This means that an ID may not be used more than once in the entire GLDF XML."),(0,i.kt)("li",{parentName:"ul"},"Ids must not contain white spaces."),(0,i.kt)("li",{parentName:"ul"},"Ids are case sensitive. For example, ",(0,i.kt)("em",{parentName:"li"},"photometryFile")," and ",(0,i.kt)("em",{parentName:"li"},"photometryfile")," are therefor two different values Ids."),(0,i.kt)("li",{parentName:"ul"},"We recommend naming Ids in a semantically meaningful way to keep the overview. So instead of e.g. ",(0,i.kt)("em",{parentName:"li"},"id-1"),", a better naming would be ",(0,i.kt)("em",{parentName:"li"},"lightSourceImageFile")," or ",(0,i.kt)("em",{parentName:"li"},"emitterEmergencyMode"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," value of a ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," element in this example is ",(0,i.kt)("inlineCode",{parentName:"p"},"photometryFile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers {9}",showLineNumbers:!0,"{9}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n    <Header>\n        \x3c!-- Skipped for clarity --\x3e\n    </Header>\n    <GeneralDefinitions>\n        <Files>\n            <File id="photometryFile" contentType="ldc/eulumdat" \n                  type="localFileName">SomePhotometry.ldt</File>\n        </Files>\n    </GeneralDefinitions>\n    <ProductDefinitions>\n        \x3c!-- Skipped for clarity --\x3e\n    </ProductDefinitions>\n</Root>\n')),(0,i.kt)("p",null,"These blocks can now be referenced in subsequent elements."),(0,i.kt)("admonition",{title:"Convention",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For the purpose of referencing prepreviously defined blocks, subsequent XML node(s) contains XML elements, which ",(0,i.kt)("strong",{parentName:"p"},"ends")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"...Reference")," in their ",(0,i.kt)("strong",{parentName:"p"},"name"),".")),(0,i.kt)("p",null,"As an example, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"Photometry")," specification contains an XML element called ",(0,i.kt)("inlineCode",{parentName:"p"},"PhotometryFileReference"),". Its content must be a previously defined ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," element. The ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," itself indicates where the actual photometry file is stored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers {9-10,14}",showLineNumbers:!0,"{9-10,14}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n    <Header>\n        \x3c!-- Skipped for clarity --\x3e\n    </Header>\n    <GeneralDefinitions>\n        <Files>\n            <File id="photometryFile" contentType="ldc/eulumdat" \n                  type="localFileName">SomePhotometry.ldt</File>\n        </Files>\n        <Photometries>\n            <Photometry id="photometry">\n                <PhotometryFileReference fileId="photometryFile"/>\n            </Photometry>\n        </Photometries>\n        \x3c!-- Skipped for clarity --\x3e\n    </GeneralDefinitions>\n    <ProductDefinitions>\n        \x3c!-- Skipped for clarity --\x3e\n    </ProductDefinitions>\n</Root>\n')))}d.isMDXComponent=!0}}]);