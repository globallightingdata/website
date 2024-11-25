"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[3512],{9927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tips/good-products","title":"Creating good GLDF files","description":"How to create GLDF?","source":"@site/docs/tips/good-products.md","sourceDirName":"tips","slug":"/tips/good-products","permalink":"/docs/tips/good-products","draft":false,"unlisted":false,"editUrl":"https://github.com/globallightingdata/website/tree/master/docs/tips/good-products.md","tags":[],"version":"current","frontMatter":{"title":"Creating good GLDF files","sidebar_label":"Creating good GLDF files"},"sidebar":"sidebar","previous":{"title":"Container Specification","permalink":"/docs/geometry/l3d-container-spec"},"next":{"title":"DIALux","permalink":"/docs/tools-dev/dialux"}}');var a=t(4848),s=t(8453);const o={title:"Creating good GLDF files",sidebar_label:"Creating good GLDF files"},r=void 0,l={},d=[{value:"How to create GLDF?",id:"how-to-create-gldf",level:2},{value:"Validation",id:"validation",level:2},{value:"Provide consistent translations",id:"provide-consistent-translations",level:2},{value:"Provide a consistent default language",id:"provide-a-consistent-default-language",level:2},{value:"Interchangeable <code>Emitter</code> without <code>Geometry</code>",id:"interchangeable-emitter-without-geometry",level:2},{value:"Duplicate file names",id:"duplicate-file-names",level:2},{value:"Forbidden file name characters",id:"forbidden-file-name-characters",level:2},{value:"Too many <code>Variants</code>",id:"too-many-variants",level:2},{value:"Too large GLDF files",id:"too-large-gldf-files",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"how-to-create-gldf",children:"How to create GLDF?"}),"\n",(0,a.jsx)(n.p,{children:"The most efficient method is to create GLDF directly from the PIM system. It involves generating an XML file containing all the necessary files and properties. If you can already create ROLF or ULD files from your systems, creating GLDF should be a straightforward process. The container aspect is relatively new, but it's essentially just a zip archive with a renamed file suffix."}),"\n",(0,a.jsx)(n.p,{children:"We have various tools in mind to support the creation of GLDF, similar to how DIAL or RELUX member tools supported ULD or ROLF creation. These tools range from Excel templates to database tools. The specifications for GLDF and L3D are publicly available, allowing the community to develop free and open tools."}),"\n",(0,a.jsx)(n.p,{children:"Some PIM system manufacturers even provide GLDF generators due to the open format. Implementing GLDF should be relatively easy with such support. Additionally, on gldf.io, there are tools already available to investigate and create L3D and GLDF files. It's also possible to manually create GLDF files using an XML or text editor."}),"\n",(0,a.jsx)(n.p,{children:"GLDF offers flexibility with many optional structure elements. You can start with a simple LDC file and the product name in GLDF, but, of course, this won't be sufficient for most applications."}),"\n",(0,a.jsx)(n.p,{children:"A good starting point is to match the data amount of ROLF and ULD. Ensure you have a unique product name and number (and GTIN). A geometry, even a simple one, is mandatory. If the product has multiple light outputs and lamps, make sure to include them. It's recommended to add a product picture and a description in multiple languages. If your PIM system supports product variants, make sure to fill in the variant structure in GLDF."}),"\n",(0,a.jsx)(n.p,{children:"The next level involves transporting all the data from your creating PIM system to GLDF. However, filling up all the native properties that GLDF offers can be quite challenging. It's essential to carefully consider the specific data and properties that are most relevant to your and your users needs."}),"\n",(0,a.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,a.jsx)(n.p,{children:"Many rules in the GLDF XML are already validated by the XML schema (XSD) and errors prevented this way. If the XML is valid against the schema, an essential step towards a good GLDF has already been taken. But not all constraints can be covered with the XSD schema. Therefore, on this page you will find further rules, recommendations or simply hints on how to create good GLDF files."}),"\n",(0,a.jsx)(n.h2,{id:"provide-consistent-translations",children:"Provide consistent translations"}),"\n",(0,a.jsxs)(n.p,{children:["The GLDF allows translations to be specified in many places, in the form of the ",(0,a.jsx)(n.code,{children:"Locale"})," elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{7-8,11-13}",children:'<Root>\n  <Header />\n  <GeneralDefinitions />\n  <ProductDefinitions>\n    <ProductMetaData>\n      <ProductNumber>\n        <Locale language="en">Global product number</Locale>\n        <Locale language="de">Globale Produktnummer</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">Global product name in English</Locale>\n        <Locale language="de">Globaler Produktname auf Deutsch</Locale>\n        <Locale language="fr">Nom global du produit en fran\xe7ais</Locale>\n      </Name>\n    </ProductMetaData>\n    <Variants />\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rule"}),": Provide for ",(0,a.jsx)(n.strong,{children:"at least one language"})," at each translatable element a translation of this language"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Recommandation"}),": Provide English translations for each translatable element"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Recommandation"}),": If you define some language at one element, provide this language at all elements"]}),"\n"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["In the example above, the ",(0,a.jsx)(n.strong,{children:"first rule"})," is satisfied because the luminaire data contains at least one consistent translation for both - the ",(0,a.jsx)(n.code,{children:"ProductNumber"})," and the ",(0,a.jsx)(n.code,{children:"Name"})," element. In this case even two languages: German (",(0,a.jsx)(n.code,{children:"de"}),") and English (",(0,a.jsx)(n.code,{children:"en"}),") are completly translated."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.strong,{children:"first recommendation"})," is also fulfilled, as all elements contain an English translation (",(0,a.jsx)(n.code,{children:"en"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.strong,{children:"second recommendation"}),", however, is violated because only one of the two elements contain a French translation (",(0,a.jsx)(n.code,{children:"fr"}),") and the other does not."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"provide-a-consistent-default-language",children:"Provide a consistent default language"}),"\n",(0,a.jsxs)(n.p,{children:["The Header element contains a child element called ",(0,a.jsx)(n.code,{children:"DefaultLanguage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{3}",children:"<Root>\n  <Header>\n    <DefaultLanguage>de</DefaultLanguage>\n  </Header>\n  <GeneralDefinitions />\n  <ProductDefinitions />\n</Root>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It specifies for applications the language that should preferably be displayed if the product does not provide translations in the application's display language. Assuming an application such as ",(0,a.jsx)(n.a,{href:"https://www.dialux.com",children:"DIALux"})," is running in German and a GLDF contains the two languages Spanish and French - with the ",(0,a.jsx)(n.code,{children:"DefaultLanguage"})," you could influence that one of the two languages, that should be used as a fallback. The important part for this to work is the following rule:"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rule"}),": For the specified ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"DefaultLanguage"})}),", provide at each translatable element a translation of this language"]}),"\n"]})}),"\n",(0,a.jsxs)(n.h2,{id:"interchangeable-emitter-without-geometry",children:["Interchangeable ",(0,a.jsx)(n.code,{children:"Emitter"})," without ",(0,a.jsx)(n.code,{children:"Geometry"})]}),"\n",(0,a.jsxs)(n.p,{children:["This rule applies only to GLDFs with the definition of ",(0,a.jsx)(n.a,{href:"/docs/structure/emitters",children:(0,a.jsx)(n.code,{children:"Emitter"})})," but without ",(0,a.jsx)(n.a,{href:"/docs/structure/geometries",children:(0,a.jsx)(n.code,{children:"Geometry"})})," elements. This use case is also indicated by the usage of the ",(0,a.jsx)(n.a,{href:"/docs/structure/variant#2-emitterreference",children:(0,a.jsx)(n.code,{children:"EmitterReference"})})," element:"]}),"\n",(0,a.jsx)("img",{src:"/img/docs/tips/good-gldfs-photometry-only.webp",alt:"Photometry Only - Do not use optional equipments",width:"900"}),"\n",(0,a.jsx)(n.p,{children:"The rule states:"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rule"}),": In the so-called photometry-only case (when using ",(0,a.jsx)(n.a,{href:"/docs/structure/variant#2-emitterreference",children:(0,a.jsx)(n.code,{children:"EmitterReference"})})," and omitting any ",(0,a.jsx)(n.a,{href:"/docs/structure/geometries",children:(0,a.jsx)(n.code,{children:"Geometry"})})," definition), interchangeable emitter definitions like in the example above should be avoided. Because in this use case not only the photometric information is taken from the photometry, but also the geometric. Define multiple ",(0,a.jsx)(n.a,{href:"/docs/structure/emitters",children:(0,a.jsx)(n.code,{children:"Emitter"})})," and use them in multiple ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variants"})})," instead."]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"duplicate-file-names",children:"Duplicate file names"}),"\n",(0,a.jsxs)(n.p,{children:["Another rule applies to the file structure within the GLDF container. As this is an ordinary ZIP archive, it is theoretically possible to create ",(0,a.jsx)(n.strong,{children:"two different files"})," with exactly the ",(0,a.jsx)(n.strong,{children:"same file name"})," within ",(0,a.jsx)(n.strong,{children:"one folder"}),". For example, within the ",(0,a.jsx)(n.em,{children:"image"})," folder, a product image of the luminaire named ",(0,a.jsx)(n.em,{children:"product.jpg"})," and a product image of the lamp also named ",(0,a.jsx)(n.em,{children:"product.jpg"}),". This can cause problems if applications need to unpack these files into a file system such NTFS on Windows (which does not support equal file names)."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rule"}),": Do not use equal file names for different files within one directory."]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"forbidden-file-name-characters",children:"Forbidden file name characters"}),"\n",(0,a.jsxs)(n.p,{children:["A similar rule applies to certain characters within the file name. In particular, the backslash ",(0,a.jsx)(n.code,{children:"\\"})," should be avoided. This is allowed in a ZIP archive, but when unzipping such a file it would lead to the file being unpacked into a subdirectory and thus an incorrect ",(0,a.jsx)(n.a,{href:"/docs/structure/files",children:(0,a.jsx)(n.code,{children:"File"})})," reference."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rule"}),": Do not use the Backslash ",(0,a.jsx)(n.code,{children:"\\"})," charackter in file names"]}),"\n"]})}),"\n",(0,a.jsxs)(n.h2,{id:"too-many-variants",children:["Too many ",(0,a.jsx)(n.code,{children:"Variants"})]}),"\n",(0,a.jsxs)(n.p,{children:["It may be tempting to define not only a luminaire but a complete product family in one GLDF through the usage of ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variants"})}),". However, the strongly recommendation here is to limit the definition to the essential variants of a ",(0,a.jsx)(n.strong,{children:"single"})," luminaire."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Recommandation"}),": Specify only a single luminaire in the ",(0,a.jsx)(n.code,{children:"Variants"}),", not a whole product family"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Recommandation"}),": Limit each GLDF to a maximum of 15 ",(0,a.jsx)(n.code,{children:"Variants"})]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"too-large-gldf-files",children:"Too large GLDF files"}),"\n",(0,a.jsxs)(n.p,{children:["GLDFs are intended for the exchange of luminaire data. Be it as is or integrated within lighting design projects of applications such as ",(0,a.jsx)(n.a,{href:"https://www.dialux.com",children:"DIALux"})," or ",(0,a.jsx)(n.a,{href:"https://relux.com/en/relux-desktop.html",children:"RELUX"}),". For this purpose, it is important that they do not exceed a manageable size."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Recommandation"}),": Keep your GLDFs small and do not exceed the size of 5MB"]}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"You can achive this in several ways:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Resize and compress your images. 1000 pixel and jpg with a 70% compression should be sufficient for most use cases"}),"\n",(0,a.jsxs)(n.li,{children:["Offload files like PDFs to the web and link them only in the ",(0,a.jsx)(n.a,{href:"/docs/structure/files",children:(0,a.jsx)(n.code,{children:"File"})})," element - instead of delivering them within the GLDF"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);