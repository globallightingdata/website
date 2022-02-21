"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[604],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,p=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},675:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"Welcome",description:"GLDF - new unified lighting data format for luminaires and sensors",author:"Robert",author_title:"CTO Relux",author_url:"https://github.com/robertrelux",author_image_url:"https://avatars.githubusercontent.com/u/71825892",hide_table_of_contents:!1,tags:["news"],draft:!1},s=void 0,d={permalink:"/blog/2021/03/12/welcome",source:"@site/blog/2021-03-12-welcome.md",title:"Welcome",description:"GLDF - new unified lighting data format for luminaires and sensors",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:10.56,truncated:!0,authors:[{name:"Robert",title:"CTO Relux",url:"https://github.com/robertrelux",imageURL:"https://avatars.githubusercontent.com/u/71825892"}],frontMatter:{title:"Welcome",description:"GLDF - new unified lighting data format for luminaires and sensors",author:"Robert",author_title:"CTO Relux",author_url:"https://github.com/robertrelux",author_image_url:"https://avatars.githubusercontent.com/u/71825892",hide_table_of_contents:!1,tags:["news"],draft:!1},prevItem:{title:"Roadmap",permalink:"/blog/2021/03/13/roadmap"}},u={authorsImageUrls:[void 0]},c=[{value:"Motivation and History",id:"motivation-and-history",children:[],level:2},{value:"GLDF Technical Benefits",id:"gldf-technical-benefits",children:[],level:2},{value:"LDC and Luminaire",id:"ldc-and-luminaire",children:[],level:2},{value:"GLDF Structure",id:"gldf-structure",children:[],level:2},{value:"Geometry Options",id:"geometry-options",children:[],level:2},{value:"Parametric Geometry",id:"parametric-geometry",children:[],level:2},{value:"Geometry Format L3D",id:"geometry-format-l3d",children:[],level:2},{value:"How to create GLDF?",id:"how-to-create-gldf",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RELUX and DIAL present the new unified lighting data format for luminaires and sensors: GLDF.\nIt could be used directly in RELUX and DIALux. GLDF is open and free available for everyone.\nThanks to the joint forces the format is technically robust, modern, and universal.\nIn the future it may replace other and older existing luminaire data formats, which is a huge\nbenefit in creating of data on manufacturer side and a benefit for designers and luminaire data\nusers in a reduced handling and an open structure. GLDF includes more capabilities as ROLF and\nULD format combined."),(0,o.kt)("h2",{id:"motivation-and-history"},"Motivation and History"),(0,o.kt)("p",null,"On my last LICHT 2018 proceedings and presentation in Davos, I ended with these words:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201cAnother potential and interesting application of the common lighting properties would be\na lighting data format. A new, modern and modular lighting data format could be the result\nof harmonised definitions and intense tests. This new one, could replace all other current\nlighting data formats from simple to complex, cause of the modular structure. And it\ncould contain much more information as today\u2018s exiting ones. But just a true replace could\nsave efforts in creation and interpretation of lighting data.\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/zU2c6x1.jpg",alt:"Gldf"})),(0,o.kt)("p",null,"Today is the day where we can proudly announce a new modern luminaire and\nsensor data format will be very soon available. RELUX and DIAL have put almost two\nyears of work into a modern data format to cover actual use cases for the BIM area.\nThis is a big step for the lighting industry with its lighting software applications."),(0,o.kt)("h2",{id:"gldf-technical-benefits"},"GLDF Technical Benefits"),(0,o.kt)("p",null,"One advantage is obvious: luminaire manufacture members of RELUX and DIAL only\nhave to create one format and one geometry. In addition, the format also offers these\nnew technical features for everybody, even for non-members of the two software\nhouses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"several variants of a product with its own GTIN"),(0,o.kt)("li",{parentName:"ul"},"definition of lamps in absolute (LED) or relative (conventional) state"),(0,o.kt)("li",{parentName:"ul"},"embedding of pictures, geometries, documents etc. as a file or link by using a link:",(0,o.kt)("br",{parentName:"li"}),"dynamic assets form a central server are possible"),(0,o.kt)("li",{parentName:"ul"},"geometry from eulumdat, parametric objects or as a 3D model; multiple LOD"),(0,o.kt)("li",{parentName:"ul"},"light emission surfaces, rotating elements, suspension points and electrical connection can be defined"),(0,o.kt)("li",{parentName:"ul"},"luminaires with multiple light emitters and/or sensors"),(0,o.kt)("li",{parentName:"ul"},"emergency lighting LDCs or Emergency Ballast Lumen Factor"),(0,o.kt)("li",{parentName:"ul"},"constant light output CLO and international maintenance factors"),(0,o.kt)("li",{parentName:"ul"},"spectrum and dimming curves"),(0,o.kt)("li",{parentName:"ul"},"checksum for pure data validation or detection of manipulating"),(0,o.kt)("li",{parentName:"ul"},"optional use of all ~350 CEN/TS 17623 - ZVEI lighting BIM properties"),(0,o.kt)("li",{parentName:"ul"},"use of other BIM, IFC or even custom properties")),(0,o.kt)("p",null,"GLDF was created by RELUX and DIAL experts with decades of lighting experience for\nall modern BIM use cases. Everything a manufacturer could communicate about his\nproduct, can be enveloped in GLDF."),(0,o.kt)("h2",{id:"ldc-and-luminaire"},"LDC and Luminaire"),(0,o.kt)("p",null,"In the past often just the photometrics of luminaires, the LDC \u2013 Light Distribution\nCurve was handled and used in lighting calculation and simulation applications. For a\npure lighting calculation nothing more is truly needed. But with two or more light outputs\nor some additional photometric information like spectrum or flicker this gets\nproblematic. Today a designer has to deal with more than just lighting dimensioning.\nHe needs product information like tender text, prices, GTIN numbers and more. The\nproduct qualification process depends on a lot more data and on a simple picture and\n3D model. A LDC is neither a luminaire nor a product, it is just a part of the luminaire.\nBut an import one. RELUX and DIAL invented early on the two product data formats\nROLF and ULD to cover this design need. Manufactures are used to fill up product in-\nformation beyond the simple LDC. But ULD is closer to a binary format and could just\nbe created with tools restricted to members. Also, the ROLF is a proprietary format\nand just to be used in RELUX applications and created by RELUX members. Theoreti-\ncally ROLF (RELUX Open Luminaire Format) is an open XML structure and could be\ncreated and used outside RELUX tooling."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/w8LqRHd.jpg",alt:"Gldf"})),(0,o.kt)("h2",{id:"gldf-structure"},"GLDF Structure"),(0,o.kt)("p",null,"GLDF is technically a (zip) container with the file ending .gldf. In this container a XML\nfile define the product in a clear structure. Beside the XML the GLDF file contain sev-\neral file assets like pictures, LDCs, geometry and documents. The core element is the\nXML which describes all product features and variations. The XML contains three ma-\njor blocks: the header, the general definitions, and the product definitions.\nThe header just contains technical aspects and manufacturer information. The GLDF\nformat is open and free to use. But the usage in the software applications will still require\na membership or another kind of licence. So, the software decides what and\nhow deep it will interpret the GLDF depending on the included licences."),(0,o.kt)("p",null,"The second block \u201cgeneral definitions\u201d contain all references to files and defines a setting\nof lamps, control gears, photometrics, geometries and equipment. All fundamental\naspects of the luminaire are referenced with IDs. GLDF can use photometrics from\nEulumdat, IES (IES LM-63) or the new IES XML (ANSI/IES TM-33 or UNI 11733).\nThe last block \u201cproduct definitions\u201d holds all properties of the product and all variants.\nThe single variants could have all properties separate from the product master. In\neach variant all reference IDs from the \u201cgeneral definitions\u201d will be put together to\nproducts. This allows a large and effective creation of variants of a product.\nGLDF could be used in an XML scheme with all capabilities. The GLDF scheme will be\navailable in XSD. Together with some examples it will be no problem for professionals\nto create GLDF files."),(0,o.kt)("p",null,"Somebody with BIM and data format knowledge would ask: Why are you not doing\nthis in IFC instead of XML? IFC is open free and contain custom properties. Today IFC\nis just defined for buildings and not for single products or objects. Parallel to our work\non the luminaire format a CEN expert group (including me) is creating the prEN\n17549-1 and -2. A standard to describe single products in a customised IFC (XML)\nwhich validates to IFC4 XSD. Brilliant work but 2 years too late."),(0,o.kt)("p",null,"Besides the timing native IFC is a quite complex way to describe luminaires. IFC could transport a\nluminaire in a building with 48 properties, rigid geometry and LDC properly. But it is\nfar more complex as our GLDF. To integrate our requirements on a modern data set\nof a luminaire and sensors (colours, rotatable joints, spectrum, variants, etc.) it would\ngrow dramatically in complexity. I doubt that this luminaire enhanced IFC would\nvalidate against the IFC XSD anymore. And there is no benefit in having forced GLDF\ninto IFC; no BIM authoring system would understand it and would therefore just\ndisplay parts of it. And it would be much harder to create and to interpret the format.\nMaybe we could check again the IFC relation of GLDF in a couple of years."),(0,o.kt)("h2",{id:"geometry-options"},"Geometry Options"),(0,o.kt)("p",null,"GLDF has three geometry options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No geometry. Just the Eulumdat primitive."),(0,o.kt)("li",{parentName:"ul"},"A parametric geometry with simple objects."),(0,o.kt)("li",{parentName:"ul"},"A full 3D model based on the new L3D format.")),(0,o.kt)("p",null,"Geometry is technically not necessary. The format could be created just with a name\nand a Eulumdat. The box or cylinder of Eulumdat will be taken as basic geometry.\nOf cause, it would make absolute sense to put a real 3D model into the GLDF. There\nwill be a new mesh-based 3D model format with the name L3D for this purpose. A\nway in between are the parametric geometry models. Here it is possible to describe\nbasic luminaire shapes with alphanumerical values. It is also possible to do both or all\nthree options in one file for the benefit of a multi LOD luminaire geometry."),(0,o.kt)("h2",{id:"parametric-geometry"},"Parametric Geometry"),(0,o.kt)("p",null,"The idea is simple: a set of basic luminaire geometry shapes could be altered with\nsome parameters to hit the real luminaire shape as good as possible. There is no\nneed of 3D modelling, an expert or modelling software. All parameters can be entered\nin a simple table and the 3D shape will be finished. RELUX started with a first set of\nbasic shapes and provide this idea to the ZVEI. At ZVEI the BIM project group finalised\nand tested the parametric geometry concept. We created an XML schema to transport\nthe parametric geometry inside the GLDF as separate XML file."),(0,o.kt)("p",null,"Today there are 51 basic shapes which can be used. But this amount may change with\nthe time. Depending on the basic shape up to 46 parameters could be used to cus-\ntomise the basic shape. All parametric geometries have luminous surfaces and light\nemitters. Optional it is also possible to describe the electrical connector position. With\nthis description, especially of the LDC position, it is easily possible for a lighting design\nsoftware to build up an exact and full operatable luminaire model."),(0,o.kt)("p",null,"With this system geometry could be created, processed, and transferred in a PIM system.\nAlmost everybody could create luminaire geometry. We will interpret and visualise\nthe parametric geometry. There are also ideas for some interesting helping and\ncreating tools."),(0,o.kt)("p",null,"At the moment this concept is not compatible with the similar ETIM MC model. The\nMC classes has a different approach of a pure 3D object visualisation and could not\ncontain LDC or electrical connector positions. But ZVEI, DIAL, RELUX and ETIM working\non a mapping of both concepts. Ideally it should be compatible or a least simple to\nconvert."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Y6JdZ0B.jpg",alt:"Geometry"})),(0,o.kt)("h2",{id:"geometry-format-l3d"},"Geometry Format L3D"),(0,o.kt)("p",null,"The 3D geometry took a lot of efforts in the GLDF project group and probably also later\nat manufacturer side. On the other side is a unified geometry a huge cost saving for\nthe manufacturers."),(0,o.kt)("p",null,"Sadly, it is not possible to take an existing 3D format and just add some properties for\nthe lighting usage. For a long time, we focused Collada as open XML basement for our\nGLDF geometry. The 3D model authoring systems could not provide this custom lighting\nproperties (e.g., light emitter) in a unified way."),(0,o.kt)("p",null,"So, we stick to what RELUX and DIAL had done quite well separately in the past and\ncreated an own new data format for geometry similar to the today exiting r3d and\nm3d (m4d, m3d+). But this time together and open for everybody."),(0,o.kt)("p",null,"The new L3D geometry format is also a zipped container format which includes a descripting\nXML and OBJ 3D objects. OBJ is a simple open ascii based mesh format. It is\nquite common and could be exported from the most 3D modelling applications. OBJ\ncould also handle textures and surface material. This is an edge over to the old r3d\nand m3d. The XML stores the relation and rotation behaviour between the different\nOBJ objects and create in this way the full luminaire object. In the XML also all light\nemitting objects, the luminous surfaces, the pendulum- and the electrical connector\nare defined."),(0,o.kt)("p",null,"Since the L3D is a new creation, it has to been created manually with OBJ files and the\nXML today. We will work on tool(s) to create L3D geometry files with a graphical\neditor. It would be technically possible to create L3D addons in AutoCAD, Revit,\nSketchup, Solidworks or Blender. It is \u201cjust\u201d an effort. Since the L3D format is open and\npublic available it should be possible that someone create a nice tool or addon. Of\ncause, it would be even better if someone made it publicly available too."),(0,o.kt)("p",null,"L3D files could be used in GLDF: as file in the container and as file reference in the\nXML. The name of the light emitters, which are defined in the L3D, will be referenced\nin the GLDF. All Light emitter properties like offsets, sizes, rotations, etc. are set in the\nL3D file. We will interpret and visualise L3D via GLDF."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/K7kL5sX.jpg",alt:"GLDF"})),(0,o.kt)("h2",{id:"how-to-create-gldf"},"How to create GLDF?"),(0,o.kt)("p",null,"The best way is the creation of the GLDF right out of the PIM system. It is just an XML\nfile where all files and properties are written in. If you were able to create ROLF directly\nout of your systems, then you almost certainly get GLDF created. The container aspect is maybe\ntechnically new. But this is just a zip event and a renaming of the file\nsuffix. We have a lot of tools in mind to support the creation of GLDF in a similar way\nthe RELUX member tools supported the ROLF creation. There are a lot of options,\nfrom Excel template to database tool. The specification of GLDF and L3D is public\navailable. The public could develop free and open tools too."))}h.isMDXComponent=!0}}]);