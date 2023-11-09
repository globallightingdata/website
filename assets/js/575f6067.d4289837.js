"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[9604],{8937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(5893),a=n(1151);const o={title:"Welcome",description:"GLDF - new unified lighting data format for luminaires and sensors",author:"Robert",author_title:"CTO Relux",author_url:"https://github.com/robertrelux",author_image_url:"https://avatars.githubusercontent.com/u/71825892",hide_table_of_contents:!1,draft:!1},r=void 0,s={permalink:"/blog/2021/03/12/welcome",editUrl:"https://github.com/globallightingdata/website/tree/master/blog/2021-03-12-welcome.md",source:"@site/blog/2021-03-12-welcome.md",title:"Welcome",description:"GLDF - new unified lighting data format for luminaires and sensors",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[],readingTime:10.56,hasTruncateMarker:!0,authors:[{name:"Robert",title:"CTO Relux",url:"https://github.com/robertrelux",imageURL:"https://avatars.githubusercontent.com/u/71825892"}],frontMatter:{title:"Welcome",description:"GLDF - new unified lighting data format for luminaires and sensors",author:"Robert",author_title:"CTO Relux",author_url:"https://github.com/robertrelux",author_image_url:"https://avatars.githubusercontent.com/u/71825892",hide_table_of_contents:!1,draft:!1},unlisted:!1,prevItem:{title:"Roadmap",permalink:"/blog/2021/03/13/roadmap"}},l={authorsImageUrls:[void 0]},d=[{value:"Motivation and History",id:"motivation-and-history",level:2},{value:"GLDF Technical Benefits",id:"gldf-technical-benefits",level:2},{value:"LDC and Luminaire",id:"ldc-and-luminaire",level:2},{value:"GLDF Structure",id:"gldf-structure",level:2},{value:"Geometry Options",id:"geometry-options",level:2},{value:"Parametric Geometry",id:"parametric-geometry",level:2},{value:"Geometry Format L3D",id:"geometry-format-l3d",level:2},{value:"How to create GLDF?",id:"how-to-create-gldf",level:2}];function c(e){const t={blockquote:"blockquote",br:"br",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"RELUX and DIAL present the new unified lighting data format for luminaires and sensors: GLDF.\nIt could be used directly in RELUX and DIALux. GLDF is open and free available for everyone.\nThanks to the joint forces the format is technically robust, modern, and universal.\nIn the future it may replace other and older existing luminaire data formats, which is a huge\nbenefit in creating of data on manufacturer side and a benefit for designers and luminaire data\nusers in a reduced handling and an open structure. GLDF includes more capabilities as ROLF and\nULD format combined."}),"\n",(0,i.jsx)(t.h2,{id:"motivation-and-history",children:"Motivation and History"}),"\n",(0,i.jsx)(t.p,{children:"On my last LICHT 2018 proceedings and presentation in Davos, I ended with these words:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\u201cAnother potential and interesting application of the common lighting properties would be\na lighting data format. A new, modern and modular lighting data format could be the result\nof harmonised definitions and intense tests. This new one, could replace all other current\nlighting data formats from simple to complex, cause of the modular structure. And it\ncould contain much more information as today\u2018s exiting ones. But just a true replace could\nsave efforts in creation and interpretation of lighting data.\u201d"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/zU2c6x1.jpg",alt:"Gldf"})}),"\n",(0,i.jsx)(t.p,{children:"Today is the day where we can proudly announce a new modern luminaire and\nsensor data format will be very soon available. RELUX and DIAL have put almost two\nyears of work into a modern data format to cover actual use cases for the BIM area.\nThis is a big step for the lighting industry with its lighting software applications."}),"\n",(0,i.jsx)(t.h2,{id:"gldf-technical-benefits",children:"GLDF Technical Benefits"}),"\n",(0,i.jsx)(t.p,{children:"One advantage is obvious: luminaire manufacture members of RELUX and DIAL only\nhave to create one format and one geometry. In addition, the format also offers these\nnew technical features for everybody, even for non-members of the two software\nhouses:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"several variants of a product with its own GTIN"}),"\n",(0,i.jsx)(t.li,{children:"definition of lamps in absolute (LED) or relative (conventional) state"}),"\n",(0,i.jsxs)(t.li,{children:["embedding of pictures, geometries, documents etc. as a file or link by using a link:",(0,i.jsx)(t.br,{}),"\n","dynamic assets form a central server are possible"]}),"\n",(0,i.jsx)(t.li,{children:"geometry from eulumdat, parametric objects or as a 3D model; multiple LOD"}),"\n",(0,i.jsx)(t.li,{children:"light emission surfaces, rotating elements, suspension points and electrical connection can be defined"}),"\n",(0,i.jsx)(t.li,{children:"luminaires with multiple light emitters and/or sensors"}),"\n",(0,i.jsx)(t.li,{children:"emergency lighting LDCs or Emergency Ballast Lumen Factor"}),"\n",(0,i.jsx)(t.li,{children:"constant light output CLO and international maintenance factors"}),"\n",(0,i.jsx)(t.li,{children:"spectrum and dimming curves"}),"\n",(0,i.jsx)(t.li,{children:"checksum for pure data validation or detection of manipulating"}),"\n",(0,i.jsx)(t.li,{children:"optional use of all ~350 CEN/TS 17623 - ZVEI lighting BIM properties"}),"\n",(0,i.jsx)(t.li,{children:"use of other BIM, IFC or even custom properties"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"GLDF was created by RELUX and DIAL experts with decades of lighting experience for\nall modern BIM use cases. Everything a manufacturer could communicate about his\nproduct, can be enveloped in GLDF."}),"\n",(0,i.jsx)(t.h2,{id:"ldc-and-luminaire",children:"LDC and Luminaire"}),"\n",(0,i.jsx)(t.p,{children:"In the past often just the photometrics of luminaires, the LDC \u2013 Light Distribution\nCurve was handled and used in lighting calculation and simulation applications. For a\npure lighting calculation nothing more is truly needed. But with two or more light outputs\nor some additional photometric information like spectrum or flicker this gets\nproblematic. Today a designer has to deal with more than just lighting dimensioning.\nHe needs product information like tender text, prices, GTIN numbers and more. The\nproduct qualification process depends on a lot more data and on a simple picture and\n3D model. A LDC is neither a luminaire nor a product, it is just a part of the luminaire.\nBut an import one. RELUX and DIAL invented early on the two product data formats\nROLF and ULD to cover this design need. Manufactures are used to fill up product in-\nformation beyond the simple LDC. But ULD is closer to a binary format and could just\nbe created with tools restricted to members. Also, the ROLF is a proprietary format\nand just to be used in RELUX applications and created by RELUX members. Theoreti-\ncally ROLF (RELUX Open Luminaire Format) is an open XML structure and could be\ncreated and used outside RELUX tooling."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/w8LqRHd.jpg",alt:"Gldf"})}),"\n",(0,i.jsx)(t.h2,{id:"gldf-structure",children:"GLDF Structure"}),"\n",(0,i.jsx)(t.p,{children:"GLDF is technically a (zip) container with the file ending .gldf. In this container a XML\nfile define the product in a clear structure. Beside the XML the GLDF file contain sev-\neral file assets like pictures, LDCs, geometry and documents. The core element is the\nXML which describes all product features and variations. The XML contains three ma-\njor blocks: the header, the general definitions, and the product definitions.\nThe header just contains technical aspects and manufacturer information. The GLDF\nformat is open and free to use. But the usage in the software applications will still require\na membership or another kind of licence. So, the software decides what and\nhow deep it will interpret the GLDF depending on the included licences."}),"\n",(0,i.jsx)(t.p,{children:"The second block \u201cgeneral definitions\u201d contain all references to files and defines a setting\nof lamps, control gears, photometrics, geometries and equipment. All fundamental\naspects of the luminaire are referenced with IDs. GLDF can use photometrics from\nEulumdat, IES (IES LM-63) or the new IES XML (ANSI/IES TM-33 or UNI 11733).\nThe last block \u201cproduct definitions\u201d holds all properties of the product and all variants.\nThe single variants could have all properties separate from the product master. In\neach variant all reference IDs from the \u201cgeneral definitions\u201d will be put together to\nproducts. This allows a large and effective creation of variants of a product.\nGLDF could be used in an XML scheme with all capabilities. The GLDF scheme will be\navailable in XSD. Together with some examples it will be no problem for professionals\nto create GLDF files."}),"\n",(0,i.jsx)(t.p,{children:"Somebody with BIM and data format knowledge would ask: Why are you not doing\nthis in IFC instead of XML? IFC is open free and contain custom properties. Today IFC\nis just defined for buildings and not for single products or objects. Parallel to our work\non the luminaire format a CEN expert group (including me) is creating the prEN\n17549-1 and -2. A standard to describe single products in a customised IFC (XML)\nwhich validates to IFC4 XSD. Brilliant work but 2 years too late."}),"\n",(0,i.jsx)(t.p,{children:"Besides the timing native IFC is a quite complex way to describe luminaires. IFC could transport a\nluminaire in a building with 48 properties, rigid geometry and LDC properly. But it is\nfar more complex as our GLDF. To integrate our requirements on a modern data set\nof a luminaire and sensors (colors, rotatable joints, spectrum, variants, etc.) it would\ngrow dramatically in complexity. I doubt that this luminaire enhanced IFC would\nvalidate against the IFC XSD anymore. And there is no benefit in having forced GLDF\ninto IFC; no BIM authoring system would understand it and would therefore just\ndisplay parts of it. And it would be much harder to create and to interpret the format.\nMaybe we could check again the IFC relation of GLDF in a couple of years."}),"\n",(0,i.jsx)(t.h2,{id:"geometry-options",children:"Geometry Options"}),"\n",(0,i.jsx)(t.p,{children:"GLDF has three geometry options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"No geometry. Just the Eulumdat primitive."}),"\n",(0,i.jsx)(t.li,{children:"A parametric geometry with simple objects."}),"\n",(0,i.jsx)(t.li,{children:"A full 3D model based on the new L3D format."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Geometry is technically not necessary. The format could be created just with a name\nand a Eulumdat. The box or cylinder of Eulumdat will be taken as basic geometry.\nOf cause, it would make absolute sense to put a real 3D model into the GLDF. There\nwill be a new mesh-based 3D model format with the name L3D for this purpose. A\nway in between are the parametric geometry models. Here it is possible to describe\nbasic luminaire shapes with alphanumerical values. It is also possible to do both or all\nthree options in one file for the benefit of a multi LOD luminaire geometry."}),"\n",(0,i.jsx)(t.h2,{id:"parametric-geometry",children:"Parametric Geometry"}),"\n",(0,i.jsx)(t.p,{children:"The idea is simple: a set of basic luminaire geometry shapes could be altered with\nsome parameters to hit the real luminaire shape as good as possible. There is no\nneed of 3D modelling, an expert or modelling software. All parameters can be entered\nin a simple table and the 3D shape will be finished. RELUX started with a first set of\nbasic shapes and provide this idea to the ZVEI. At ZVEI the BIM project group finalised\nand tested the parametric geometry concept. We created an XML schema to transport\nthe parametric geometry inside the GLDF as separate XML file."}),"\n",(0,i.jsx)(t.p,{children:"Today there are 51 basic shapes which can be used. But this amount may change with\nthe time. Depending on the basic shape up to 46 parameters could be used to cus-\ntomise the basic shape. All parametric geometries have luminous surfaces and light\nemitters. Optional it is also possible to describe the electrical connector position. With\nthis description, especially of the LDC position, it is easily possible for a lighting design\nsoftware to build up an exact and full operatable luminaire model."}),"\n",(0,i.jsx)(t.p,{children:"With this system geometry could be created, processed, and transferred in a PIM system.\nAlmost everybody could create luminaire geometry. We will interpret and visualise\nthe parametric geometry. There are also ideas for some interesting helping and\ncreating tools."}),"\n",(0,i.jsx)(t.p,{children:"At the moment this concept is not compatible with the similar ETIM MC model. The\nMC classes has a different approach of a pure 3D object visualisation and could not\ncontain LDC or electrical connector positions. But ZVEI, DIAL, RELUX and ETIM working\non a mapping of both concepts. Ideally it should be compatible or a least simple to\nconvert."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/Y6JdZ0B.jpg",alt:"Geometry"})}),"\n",(0,i.jsx)(t.h2,{id:"geometry-format-l3d",children:"Geometry Format L3D"}),"\n",(0,i.jsx)(t.p,{children:"The 3D geometry took a lot of efforts in the GLDF project group and probably also later\nat manufacturer side. On the other side is a unified geometry a huge cost saving for\nthe manufacturers."}),"\n",(0,i.jsx)(t.p,{children:"Sadly, it is not possible to take an existing 3D format and just add some properties for\nthe lighting usage. For a long time, we focused Collada as open XML basement for our\nGLDF geometry. The 3D model authoring systems could not provide this custom lighting\nproperties (e.g., light emitter) in a unified way."}),"\n",(0,i.jsx)(t.p,{children:"So, we stick to what RELUX and DIAL had done quite well separately in the past and\ncreated an own new data format for geometry similar to the today exiting r3d and\nm3d (m4d, m3d+). But this time together and open for everybody."}),"\n",(0,i.jsx)(t.p,{children:"The new L3D geometry format is also a zipped container format which includes a descripting\nXML and OBJ 3D objects. OBJ is a simple open ascii based mesh format. It is\nquite common and could be exported from the most 3D modelling applications. OBJ\ncould also handle textures and surface material. This is an edge over to the old r3d\nand m3d. The XML stores the relation and rotation behaviour between the different\nOBJ objects and create in this way the full luminaire object. In the XML also all light\nemitting objects, the luminous surfaces, the pendulum- and the electrical connector\nare defined."}),"\n",(0,i.jsx)(t.p,{children:"Since the L3D is a new creation, it has to been created manually with OBJ files and the\nXML today. We will work on tool(s) to create L3D geometry files with a graphical\neditor. It would be technically possible to create L3D addons in AutoCAD, Revit,\nSketchup, Solidworks or Blender. It is \u201cjust\u201d an effort. Since the L3D format is open and\npublic available it should be possible that someone create a nice tool or addon. Of\ncause, it would be even better if someone made it publicly available too."}),"\n",(0,i.jsx)(t.p,{children:"L3D files could be used in GLDF: as file in the container and as file reference in the\nXML. The name of the light emitters, which are defined in the L3D, will be referenced\nin the GLDF. All Light emitter properties like offsets, sizes, rotations, etc. are set in the\nL3D file. We will interpret and visualise L3D via GLDF."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/K7kL5sX.jpg",alt:"GLDF"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-create-gldf",children:"How to create GLDF?"}),"\n",(0,i.jsx)(t.p,{children:"The best way is the creation of the GLDF right out of the PIM system. It is just an XML\nfile where all files and properties are written in. If you were able to create ROLF directly\nout of your systems, then you almost certainly get GLDF created. The container aspect is maybe\ntechnically new. But this is just a zip event and a renaming of the file\nsuffix. We have a lot of tools in mind to support the creation of GLDF in a similar way\nthe RELUX member tools supported the ROLF creation. There are a lot of options,\nfrom Excel template to database tool. The specification of GLDF and L3D is public\navailable. The public could develop free and open tools too."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(7294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);