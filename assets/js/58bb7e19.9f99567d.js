"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[1214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),g=n,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={title:"L3D .NET Parser",sidebar_label:"L3D .NET Parser"},i=void 0,l={unversionedId:"tools-dev/l3d-net-parser",id:"tools-dev/l3d-net-parser",title:"L3D .NET Parser",description:"L3D .NET library",source:"@site/docs/tools-dev/l3d-net-parser.md",sourceDirName:"tools-dev",slug:"/tools-dev/l3d-net-parser",permalink:"/docs/tools-dev/l3d-net-parser",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/tools-dev/l3d-net-parser.md",tags:[],version:"current",frontMatter:{title:"L3D .NET Parser",sidebar_label:"L3D .NET Parser"},sidebar:"sidebar",previous:{title:"GLDF .NET Parser",permalink:"/docs/tools-dev/gldf-net-parser"},next:{title:"Contribute",permalink:"/docs/contribute/"}},s={},d=[{value:"L3D .NET library",id:"l3d-net-library",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How to get started",id:"how-to-get-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Nuget package",id:"nuget-package",level:3},{value:"Examples",id:"examples",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"l3d-net-library"},"L3D .NET library"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d.net"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Github-Repository-lightgrey",alt:"Github"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/L3D.Net/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/L3D.Net.svg",alt:"NuGet Status"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://www.fuget.org/packages/L3D.Net"},(0,n.kt)("img",{parentName:"a",src:"https://www.fuget.org/packages/L3D.Net/badge.svg",alt:"L3D.Net on fuget.org"}))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,".NET Standard 2.0 library for the Luminaire 3D ",(0,n.kt)("a",{parentName:"p",href:"https://gldf.io/docs/geometry/l3d-intro"},"L3D")),(0,n.kt)("p",null,"With this library it is possible to read and build L3D container files. For that the library exposes two classes ",(0,n.kt)("inlineCode",{parentName:"p"},"Builder")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Reader"),".\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"Builder")," has a fluent API for defining all the luminaire parts and build the target container file.\nWith the ",(0,n.kt)("inlineCode",{parentName:"p"},"Reader")," is is possible to read the content of a L3D container and to parse the containing .obj files at once. So there is no other .obj parser needed."),(0,n.kt)("h2",{id:"how-to-get-started"},"How to get started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/de-de/dotnet/standard/net-standard"},".NET Standard 2.0")," compatible project")),(0,n.kt)("h3",{id:"nuget-package"},"Nuget package"),(0,n.kt)("p",null,"Add the package within your IDE or using the CLI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package L3D.Net\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples on how to read, write and validate a L3D container can always be found on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d.net"},"Github")))}u.isMDXComponent=!0}}]);