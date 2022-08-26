"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[5846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"GLDF Container Specification",sidebar_label:"Container Specification"},l=void 0,o={unversionedId:"container/container-specification",id:"container/container-specification",title:"GLDF Container Specification",description:"General",source:"@site/docs/container/container-specification.md",sourceDirName:"container",slug:"/container/container-specification",permalink:"/docs/container/container-specification",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/container/container-specification.md",tags:[],version:"current",frontMatter:{title:"GLDF Container Specification",sidebar_label:"Container Specification"},sidebar:"sidebar",previous:{title:"About GLDF Container",permalink:"/docs/container/about-container"},next:{title:"Measurement Units",permalink:"/docs/conventions/measurement-units"}},c={},p=[{value:"General",id:"general",level:2},{value:"Root folder content",id:"root-folder-content",level:2},{value:"GLDF-XML file",id:"gldf-xml-file",level:2},{value:"GLDF-XSD Schema",id:"gldf-xsd-schema",level:2},{value:"Directories",id:"directories",level:2},{value:"GLDF Container structure example",id:"gldf-container-structure-example",level:2},{value:"L3D Container specification",id:"l3d-container-specification",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The container files' ",(0,a.kt)("strong",{parentName:"li"},"underlying format")," is a standard ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ZIP_(file_format)"},"ZIP archive")),(0,a.kt)("li",{parentName:"ul"},"The container file ",(0,a.kt)("strong",{parentName:"li"},"extension")," is ",(0,a.kt)("inlineCode",{parentName:"li"},".gldf"))),(0,a.kt)("h2",{id:"root-folder-content"},"Root folder content"),(0,a.kt)("p",null,"In the root of the container file the following ",(0,a.kt)("strong",{parentName:"p"},"elements")," are ",(0,a.kt)("strong",{parentName:"p"},"expected")),(0,a.kt)("p",null,"Mandatory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GLDF-XML")," file, with the file name ",(0,a.kt)("inlineCode",{parentName:"li"},"product.xml"))),(0,a.kt)("p",null,"Optional"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GLDF-XSD")," Schema file, with the filename ",(0,a.kt)("inlineCode",{parentName:"li"},"gldf.xsd")),(0,a.kt)("li",{parentName:"ul"},"Multiple ",(0,a.kt)("strong",{parentName:"li"},"directories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signature")," file, without extension. Intended for a ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Digital_signature"},"digital signature"))," of the content above")),(0,a.kt)("h2",{id:"gldf-xml-file"},"GLDF-XML file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filename",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"filename")," of the GLDF-XML inside the root directory must be ",(0,a.kt)("inlineCode",{parentName:"li"},"product.xml")))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"GLDF-XML")," file is expected to be ",(0,a.kt)("strong",{parentName:"li"},"valid as follows"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Valid ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/XML"},"XML syntax")),(0,a.kt)("li",{parentName:"ul"},"Valid against the referenced ",(0,a.kt)("inlineCode",{parentName:"li"},"gldf.xsd"),", see below"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Invalid")," XMLs files may not be parsed and ",(0,a.kt)("strong",{parentName:"li"},"lead to errors"))),(0,a.kt)("h2",{id:"gldf-xsd-schema"},"GLDF-XSD Schema"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"official")," GLDF-XSD Schema can always be found published on our ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/globallightingdata/gldf"},"Github repository")),(0,a.kt)("li",{parentName:"ul"},"The GLDF-XSD has to be ",(0,a.kt)("strong",{parentName:"li"},"referenced")," by the GLDF-XML file"),(0,a.kt)("li",{parentName:"ul"},"The GLDF-XSD Schema can be referenced either ",(0,a.kt)("strong",{parentName:"li"},"online")," (recommended) or ",(0,a.kt)("strong",{parentName:"li"},"locally")," inside the container"),(0,a.kt)("li",{parentName:"ul"},"Referenced XSDs which ",(0,a.kt)("strong",{parentName:"li"},"differ")," from the official published XSDs may lead to ",(0,a.kt)("strong",{parentName:"li"},"errors"),". Please use only the published XSDs for validation and development")),(0,a.kt)("h2",{id:"directories"},"Directories"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"root")," directory may contain ",(0,a.kt)("strong",{parentName:"li"},"further directories")),(0,a.kt)("li",{parentName:"ul"},"These directories can contain ",(0,a.kt)("strong",{parentName:"li"},"assets")," like images, photometries, spectrums, 3d models or documents"),(0,a.kt)("li",{parentName:"ul"},"Directory ",(0,a.kt)("strong",{parentName:"li"},"names"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The directory name must reflect the ",(0,a.kt)("strong",{parentName:"li"},"first part")," of the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"contentType"))," of the files it contains"),(0,a.kt)("li",{parentName:"ul"},"For possible contenttypes please refer to our ",(0,a.kt)("a",{parentName:"li",href:"/xsd-reference/index_Files.html"},(0,a.kt)("strong",{parentName:"a"},"XSD reference"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Examples"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The contenttype for JPG images is ",(0,a.kt)("inlineCode",{parentName:"li"},"image/jpg"),". The directory name for this asset must be ",(0,a.kt)("inlineCode",{parentName:"li"},"image")),(0,a.kt)("li",{parentName:"ul"},"The contenttype for PNG images is ",(0,a.kt)("inlineCode",{parentName:"li"},"image/png"),". The directory name for this asset must be ",(0,a.kt)("inlineCode",{parentName:"li"},"image")),(0,a.kt)("li",{parentName:"ul"},"The contenttype for Eulumdat photometries is ",(0,a.kt)("inlineCode",{parentName:"li"},"ldc/eulumdat"),". The directory name for this asset must be ",(0,a.kt)("inlineCode",{parentName:"li"},"ldc")),(0,a.kt)("li",{parentName:"ul"},"The contenttype for IES photometries is ",(0,a.kt)("inlineCode",{parentName:"li"},"ldc/ies"),". The directory name for this asset must be ",(0,a.kt)("inlineCode",{parentName:"li"},"ldc"))))))),(0,a.kt)("h2",{id:"gldf-container-structure-example"},"GLDF Container structure example"),(0,a.kt)("p",null,"For a manufacturer with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"ManufacturerXY")," and a luminaire with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"Pendulum 50W LED"),", the GLDF file content could have the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    ManufacturerXY-Pendulum-50W-LED.gldf\n    |\u2014\u2014 product.xml\n    |\u2014\u2014 signature\n    |\u2014\u2014 image/\n    |   |\u2014\u2014 productimage.jpg\n    |   |\u2014\u2014 familyimage.jpg\n    |\u2014\u2014 ldc/\n    |   |\u2014\u2014 lightsource-photometry.ldt\n    |   |\u2014\u2014 luminaire-photometry.ldt\n    |\u2014\u2014 geo/\n    |   |\u2014\u2014 luminaire-3d-model.l3d\n    |\u2014\u2014 document/\n    |   |\u2014\u2014 luminaire-manual.pdf\n    |\u2014\u2014 spectrum/\n    |   |\u2014\u2014 lightsource-spectrum.txt\n")),(0,a.kt)("h2",{id:"l3d-container-specification"},"L3D Container specification"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d"},"Luminaire 3D")," container specification is described ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-container-spec"},"here")))}m.isMDXComponent=!0}}]);