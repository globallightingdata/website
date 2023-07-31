"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[2268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Creating good GLDF files",sidebar_label:"Creating good GLDF files"},r=void 0,l={unversionedId:"tips/good-products",id:"tips/good-products",title:"Creating good GLDF files",description:"How to create GLDF?",source:"@site/docs/tips/good-products.md",sourceDirName:"tips",slug:"/tips/good-products",permalink:"/docs/tips/good-products",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/tips/good-products.md",tags:[],version:"current",frontMatter:{title:"Creating good GLDF files",sidebar_label:"Creating good GLDF files"},sidebar:"sidebar",previous:{title:"Container Specification",permalink:"/docs/geometry/l3d-container-spec"},next:{title:"DIALux",permalink:"/docs/tools-dev/dialux"}},s={},d=[{value:"How to create GLDF?",id:"how-to-create-gldf",level:2},{value:"Validation",id:"validation",level:2},{value:"Provide consistent translations",id:"provide-consistent-translations",level:2},{value:"Provide a consistent default language",id:"provide-a-consistent-default-language",level:2},{value:"Interchangeable <code>Emitter</code> without <code>Geometry</code>",id:"interchangeable-emitter-without-geometry",level:2},{value:"Duplicate file names",id:"duplicate-file-names",level:2},{value:"Forbidden file name characters",id:"forbidden-file-name-characters",level:2},{value:"Too many <code>Variants</code>",id:"too-many-variants",level:2},{value:"Too large GLDF files",id:"too-large-gldf-files",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-create-gldf"},"How to create GLDF?"),(0,i.kt)("p",null,"The most efficient method is to create GLDF directly from the PIM system. It involves generating an XML file containing all the necessary files and properties. If you can already create ROLF or ULD files from your systems, creating GLDF should be a straightforward process. The container aspect is relatively new, but it's essentially just a zip archive with a renamed file suffix."),(0,i.kt)("p",null,"We have various tools in mind to support the creation of GLDF, similar to how DIAL or RELUX member tools supported ULD or ROLF creation. These tools range from Excel templates to database tools. The specifications for GLDF and L3D are publicly available, allowing the community to develop free and open tools."),(0,i.kt)("p",null,"Some PIM system manufacturers even provide GLDF generators due to the open format. Implementing GLDF should be relatively easy with such support. Additionally, on gldf.io, there are tools already available to investigate and create L3D and GLDF files. It's also possible to manually create GLDF files using an XML or text editor."),(0,i.kt)("p",null,"GLDF offers flexibility with many optional structure elements. You can start with a simple LDC file and the product name in GLDF, but, of course, this won't be sufficient for most applications."),(0,i.kt)("p",null,"A good starting point is to match the data amount of ROLF and ULD. Ensure you have a unique product name and number (and GTIN). A geometry, even a simple one, is mandatory. If the product has multiple light outputs and lamps, make sure to include them. It's recommended to add a product picture and a description in multiple languages. If your PIM system ,supports product variants, make sure to fill in the variant structure in GLDF."),(0,i.kt)("p",null,"The next level involves transporting all the data from your creating PIM system to GLDF. However, filling up all the native properties that GLDF offers can be quite challenging. It's essential to carefully consider the specific data and properties that are most relevant to your and your users needs."),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"Many rules in the GLDF XML are already validated by the XML schema (XSD) and errors prevented this way. If the XML is valid against the schema, an essential step towards a good GLDF has already been taken. But not all constraints can be covered with the XSD schema. Therefore, on this page you will find further rules, recommendations or simply hints on how to create good GLDF files."),(0,i.kt)("h2",{id:"provide-consistent-translations"},"Provide consistent translations"),(0,i.kt)("p",null,"The GLDF allows translations to be specified in many places, in the form of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Locale")," elements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{7-8,11-13}","{7-8,11-13}":!0},'<Root>\n  <Header />\n  <GeneralDefinitions />\n  <ProductDefinitions>\n    <ProductMetaData>\n      <ProductNumber>\n        <Locale language="en">Global product number</Locale>\n        <Locale language="de">Globale Produktnummer</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">Global product name in English</Locale>\n        <Locale language="de">Globaler Produktname auf Deutsch</Locale>\n        <Locale language="fr">Nom global du produit en fran\xe7ais</Locale>\n      </Name>\n    </ProductMetaData>\n    <Variants />\n  </ProductDefinitions>\n</Root>\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule"),": Provide for ",(0,i.kt)("strong",{parentName:"li"},"at least one language")," at each translatable element a translation of this language"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommandation"),": Provide English translations for each translatable element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommandation"),": If you define some language at one element, provide this language at all elements"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the example above, the ",(0,i.kt)("strong",{parentName:"li"},"first rule")," is satisfied because the luminaire data contains at least one consistent translation for both - the ",(0,i.kt)("inlineCode",{parentName:"li"},"ProductNumber")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," element. In this case even two languages: German (",(0,i.kt)("inlineCode",{parentName:"li"},"de"),") and English (",(0,i.kt)("inlineCode",{parentName:"li"},"en"),") are completly translated."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"first recommendation")," is also fulfilled, as all elements contain an English translation (",(0,i.kt)("inlineCode",{parentName:"li"},"en"),")."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"second recommendation"),", however, is violated because only one of the two elements contain a French translation (",(0,i.kt)("inlineCode",{parentName:"li"},"fr"),") and the other does not.")),(0,i.kt)("h2",{id:"provide-a-consistent-default-language"},"Provide a consistent default language"),(0,i.kt)("p",null,"The Header element contains a child element called ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultLanguage"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{3}","{3}":!0},"<Root>\n  <Header>\n    <DefaultLanguage>de</DefaultLanguage>\n  </Header>\n  <GeneralDefinitions />\n  <ProductDefinitions />\n</Root>\n")),(0,i.kt)("p",null,"It specifies for applications the language that should preferably be displayed if the product does not provide translations in the application's display language. Assuming an application such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.dialux.com"},"DIALux")," is running in German and a GLDF contains the two languages Spanish and French - with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultLanguage")," you could influence that one of the two languages, that should be used as a fallback. The important part for this to work is the following rule:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule"),": For the specified ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"DefaultLanguage")),", provide at each translatable element a translation of this language"))),(0,i.kt)("h2",{id:"interchangeable-emitter-without-geometry"},"Interchangeable ",(0,i.kt)("inlineCode",{parentName:"h2"},"Emitter")," without ",(0,i.kt)("inlineCode",{parentName:"h2"},"Geometry")),(0,i.kt)("p",null,"This rule applies only to GLDFs with the definition of ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/emitters"},(0,i.kt)("inlineCode",{parentName:"a"},"Emitter"))," but without ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/geometries"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))," elements. This use case is also indicated by the usage of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/variant#2-emitterreference"},(0,i.kt)("inlineCode",{parentName:"a"},"EmitterReference"))," element:"),(0,i.kt)("img",{src:"/img/docs/tips/good-gldfs-photometry-only.webp",alt:"Photometry Only - Do not use optional equipments",width:"900"}),(0,i.kt)("p",null,"The rule states:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule"),": In the so-called photometry-only case (when using ",(0,i.kt)("a",{parentName:"li",href:"/docs/structure/variant#2-emitterreference"},(0,i.kt)("inlineCode",{parentName:"a"},"EmitterReference"))," and omitting any ",(0,i.kt)("a",{parentName:"li",href:"/docs/structure/geometries"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))," definition), interchangeable emitter definitions like in the example above should be avoided. Because in this use case not only the photometric information is taken from the photometry, but also the geometric. Define multiple ",(0,i.kt)("a",{parentName:"li",href:"/docs/structure/emitters"},(0,i.kt)("inlineCode",{parentName:"a"},"Emitter"))," and use them in multiple ",(0,i.kt)("a",{parentName:"li",href:"/docs/structure/variant"},(0,i.kt)("inlineCode",{parentName:"a"},"Variants"))," instead."))),(0,i.kt)("h2",{id:"duplicate-file-names"},"Duplicate file names"),(0,i.kt)("p",null,"Another rule applies to the file structure within the GLDF container. As this is an ordinary ZIP archive, it is theoretically possible to create ",(0,i.kt)("strong",{parentName:"p"},"two different files")," with exactly the ",(0,i.kt)("strong",{parentName:"p"},"same file name")," within ",(0,i.kt)("strong",{parentName:"p"},"one folder"),". For example, within the ",(0,i.kt)("em",{parentName:"p"},"image")," folder, a product image of the luminaire named ",(0,i.kt)("em",{parentName:"p"},"product.jpg")," and a product image of the lamp also named ",(0,i.kt)("em",{parentName:"p"},"product.jpg"),". This can cause problems if applications need to unpack these files into a file system such NTFS on Windows (which does not support equal file names)."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule"),": Do not use equal file names for different files within one directory."))),(0,i.kt)("h2",{id:"forbidden-file-name-characters"},"Forbidden file name characters"),(0,i.kt)("p",null,"A similar rule applies to certain characters within the file name. In particular, the backslash ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," should be avoided. This is allowed in a ZIP archive, but when unzipping such a file it would lead to the file being unpacked into a subdirectory and thus an incorrect ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/files"},(0,i.kt)("inlineCode",{parentName:"a"},"File"))," reference."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule"),": Do not use the Backslash ",(0,i.kt)("inlineCode",{parentName:"li"},"\\")," charackter in file names"))),(0,i.kt)("h2",{id:"too-many-variants"},"Too many ",(0,i.kt)("inlineCode",{parentName:"h2"},"Variants")),(0,i.kt)("p",null,"It may be tempting to define not only a luminaire but a complete product family in one GLDF through the usage of ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/variant"},(0,i.kt)("inlineCode",{parentName:"a"},"Variants")),". However, the strongly recommendation here is to limit the definition to the essential variants of a ",(0,i.kt)("strong",{parentName:"p"},"single")," luminaire."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommandation"),": Specify only a single luminaire in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Variants"),", not a whole product family"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommandation"),": Limit each GLDF to a maximum of 15 ",(0,i.kt)("inlineCode",{parentName:"li"},"Variants")))),(0,i.kt)("h2",{id:"too-large-gldf-files"},"Too large GLDF files"),(0,i.kt)("p",null,"GLDFs are intended for the exchange of luminaire data. Be it as is or integrated within lighting design projects of applications such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.dialux.com"},"DIALux")," or ",(0,i.kt)("a",{parentName:"p",href:"https://relux.com/en/relux-desktop.html"},"RELUX"),". For this purpose, it is important that they do not exceed a manageable size."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommandation"),": Keep your GLDFs small and do not exceed the size of 5MB"))),(0,i.kt)("p",null,"You can achive this in several ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resize and compress your images. 1000 pixel and jpg with a 70% compression should be sufficient for most use cases"),(0,i.kt)("li",{parentName:"ul"},"Offload files like PDFs to the web and link them only in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/structure/files"},(0,i.kt)("inlineCode",{parentName:"a"},"File"))," element - instead of delivering them within the GLDF")))}m.isMDXComponent=!0}}]);