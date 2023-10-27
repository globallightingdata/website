"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[5846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"GLDF Container Specification",sidebar_label:"Container Specification"},l=void 0,o={unversionedId:"container/container-specification",id:"container/container-specification",title:"GLDF Container Specification",description:"General",source:"@site/docs/container/container-specification.md",sourceDirName:"container",slug:"/container/container-specification",permalink:"/docs/container/container-specification",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/container/container-specification.md",tags:[],version:"current",frontMatter:{title:"GLDF Container Specification",sidebar_label:"Container Specification"},sidebar:"sidebar",previous:{title:"Meta-Information",permalink:"/docs/container/meta-information"},next:{title:"IDs and timecodes",permalink:"/docs/conventions/ids-and-timecodes"}},m={},p=[{value:"General",id:"general",level:2},{value:"Root folder content",id:"root-folder-content",level:2},{value:"GLDF-XML file (<code>product.xml</code>)",id:"gldf-xml-file-productxml",level:2},{value:"GLDF-XSD Schema",id:"gldf-xsd-schema",level:2},{value:"Meta-Information File (<code>meta-information.xml</code>)",id:"meta-information-file-meta-informationxml",level:2},{value:"Directories",id:"directories",level:2},{value:"Container example",id:"container-example",level:2},{value:"L3D Container",id:"l3d-container",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The container files' ",(0,i.kt)("strong",{parentName:"li"},"underlying format")," is a standard ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ZIP_(file_format)"},"ZIP archive")),(0,i.kt)("li",{parentName:"ul"},"The container file ",(0,i.kt)("strong",{parentName:"li"},"extension")," is ",(0,i.kt)("inlineCode",{parentName:"li"},".gldf"))),(0,i.kt)("h2",{id:"root-folder-content"},"Root folder content"),(0,i.kt)("p",null,"In the root of the container file the following ",(0,i.kt)("strong",{parentName:"p"},"elements")," are ",(0,i.kt)("strong",{parentName:"p"},"expected")),(0,i.kt)("p",null,"Mandatory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GLDF-XML")," file, with the file name ",(0,i.kt)("inlineCode",{parentName:"li"},"product.xml"))),(0,i.kt)("p",null,"Optional"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple ",(0,i.kt)("strong",{parentName:"li"},"directories")," for assets like photometries, images, geometry files and other"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"meta-information.xml")," file. Intended for ",(0,i.kt)("strong",{parentName:"li"},"additional information")," like ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digital_signature"},"digital signatures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GLDF-XSD")," Schema file, with the filename ",(0,i.kt)("inlineCode",{parentName:"li"},"gldf.xsd"))),(0,i.kt)("h2",{id:"gldf-xml-file-productxml"},"GLDF-XML file (",(0,i.kt)("inlineCode",{parentName:"h2"},"product.xml"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Filename",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"filename")," of the GLDF XML inside the root directory ",(0,i.kt)("strong",{parentName:"li"},"must")," be ",(0,i.kt)("inlineCode",{parentName:"li"},"product.xml")))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"GLDF-XML")," file is expected to be ",(0,i.kt)("strong",{parentName:"li"},"valid as follows"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Valid ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/XML"},"XML syntax")),(0,i.kt)("li",{parentName:"ul"},"Valid against the referenced ",(0,i.kt)("inlineCode",{parentName:"li"},"gldf.xsd"),", see below"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Invalid")," XMLs files may not be parsed and ",(0,i.kt)("strong",{parentName:"li"},"lead to errors"))),(0,i.kt)("h2",{id:"gldf-xsd-schema"},"GLDF-XSD Schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"official")," GLDF-XSD Schema can always be found published on ",(0,i.kt)("a",{parentName:"li",href:"/download"},"gldf.io")," or our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/globallightingdata/gldf"},"Github repository")),(0,i.kt)("li",{parentName:"ul"},"The GLDF-XSD has to be ",(0,i.kt)("strong",{parentName:"li"},"referenced")," by the GLDF-XML file"),(0,i.kt)("li",{parentName:"ul"},"The GLDF-XSD Schema can be referenced either ",(0,i.kt)("strong",{parentName:"li"},"online")," or ",(0,i.kt)("strong",{parentName:"li"},"locally")," inside the container"),(0,i.kt)("li",{parentName:"ul"},"Referenced XSDs which ",(0,i.kt)("strong",{parentName:"li"},"differ")," from the officially published XSDs may lead to ",(0,i.kt)("strong",{parentName:"li"},"errors"),". Please use only the published XSDs for validation and development")),(0,i.kt)("h2",{id:"meta-information-file-meta-informationxml"},"Meta-Information File (",(0,i.kt)("inlineCode",{parentName:"h2"},"meta-information.xml"),")"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/container/meta-information"},"Meta-Information")),(0,i.kt)("h2",{id:"directories"},"Directories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"root")," directory may contain ",(0,i.kt)("strong",{parentName:"li"},"further directories")),(0,i.kt)("li",{parentName:"ul"},"These directories can contain ",(0,i.kt)("strong",{parentName:"li"},"assets")," like images, photometries, spectrums, 3D models or documents"),(0,i.kt)("li",{parentName:"ul"},"Directory ",(0,i.kt)("strong",{parentName:"li"},"names"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The directory name must reflect the ",(0,i.kt)("strong",{parentName:"li"},"first part")," of the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"contentType"))," of the files it contains"),(0,i.kt)("li",{parentName:"ul"},"For possible content types please refer the ",(0,i.kt)("a",{parentName:"li",href:"/docs/structure/files#available-content-types"},(0,i.kt)("inlineCode",{parentName:"a"},"Files")," documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The contenttype for JPG images is ",(0,i.kt)("inlineCode",{parentName:"li"},"image/jpg"),". The directory name for this asset must be ",(0,i.kt)("inlineCode",{parentName:"li"},"image")),(0,i.kt)("li",{parentName:"ul"},"The contenttype for PNG images is ",(0,i.kt)("inlineCode",{parentName:"li"},"image/png"),". The directory name for this asset must be ",(0,i.kt)("inlineCode",{parentName:"li"},"image")),(0,i.kt)("li",{parentName:"ul"},"The contenttype for Eulumdat photometries is ",(0,i.kt)("inlineCode",{parentName:"li"},"ldc/eulumdat"),". The directory name for this asset must be ",(0,i.kt)("inlineCode",{parentName:"li"},"ldc")),(0,i.kt)("li",{parentName:"ul"},"The contenttype for IES photometries is ",(0,i.kt)("inlineCode",{parentName:"li"},"ldc/ies"),". The directory name for this asset must be ",(0,i.kt)("inlineCode",{parentName:"li"},"ldc"))))))),(0,i.kt)("h2",{id:"container-example"},"Container example"),(0,i.kt)("p",null,"For a manufacturer with the name ",(0,i.kt)("em",{parentName:"p"},"ManufacturerXY")," and a luminaire with the name ",(0,i.kt)("em",{parentName:"p"},"Pendulum 50W LED"),", the GLDF file content could have the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    ManufacturerXY-Pendulum-50W-LED.gldf\n    |\u2014\u2014 product.xml\n    |\u2014\u2014 meta-information.xml\n    |\u2014\u2014 image/\n    |   |\u2014\u2014 productimage.jpg\n    |   |\u2014\u2014 familyimage.jpg\n    |\u2014\u2014 ldc/\n    |   |\u2014\u2014 lightsource-photometry.ldt\n    |   |\u2014\u2014 luminaire-photometry.ldt\n    |\u2014\u2014 geo/\n    |   |\u2014\u2014 luminaire-3d-model.l3d\n    |\u2014\u2014 document/\n    |   |\u2014\u2014 luminaire-manual.pdf\n    |\u2014\u2014 spectrum/\n    |   |\u2014\u2014 lightsource-spectrum.txt\n")),(0,i.kt)("h2",{id:"l3d-container"},"L3D Container"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-intro"},"Luminaire 3D")," container specification is described ",(0,i.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-container-spec"},"here")))}d.isMDXComponent=!0}}]);