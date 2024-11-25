"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[7535],{7881:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"structure/product","title":"Global Product Data","description":"ProductDefinitions Description","source":"@site/docs/structure/product.md","sourceDirName":"structure","slug":"/structure/product","permalink":"/docs/structure/product","draft":false,"unlisted":false,"editUrl":"https://github.com/globallightingdata/website/tree/master/docs/structure/product.md","tags":[],"version":"current","frontMatter":{"title":"Global Product Data","sidebar_label":"Global Product Data"},"sidebar":"sidebar","previous":{"title":"Geometries","permalink":"/docs/structure/geometries"},"next":{"title":"Specific Variant Data","permalink":"/docs/structure/variant"}}');var a=i(4848),t=i(8453);const o={title:"Global Product Data",sidebar_label:"Global Product Data"},c=void 0,s={},d=[{value:"ProductDefinitions Description",id:"productdefinitions-description",level:2},{value:"<code>ProductMetaData</code> \u21c4 <code>Variants</code>",id:"productmetadata--variants",level:3},{value:"<code>ProductMetaData</code> XSD description",id:"productmetadata-xsd-description",level:3},{value:"XML example",id:"xml-example",level:3},{value:"Luminaire maintenance",id:"luminaire-maintenance",level:3},{value:"<code>Cie97LuminaireType</code>",id:"cie97luminairetype",level:4},{value:"<code>CieLuminaireMaintenanceFactors</code>",id:"cieluminairemaintenancefactors",level:4},{value:"<code>IesLuminaireLightLossFactors</code>",id:"iesluminairelightlossfactors",level:4},{value:"<code>JiegMaintenanceFactors</code>",id:"jiegmaintenancefactors",level:4},{value:"<code>Variant</code> overwrites <code>ProductMetaData</code>",id:"variant-overwrites-productmetadata",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"productdefinitions-description",children:"ProductDefinitions Description"}),"\n",(0,a.jsxs)(n.p,{children:["After the ",(0,a.jsx)(n.a,{href:"/docs/structure/header",children:(0,a.jsx)(n.code,{children:"Header"})})," (1) and ",(0,a.jsx)(n.a,{href:"/docs/structure/files",children:(0,a.jsx)(n.code,{children:"GeneralDefinitions"})})," (2) elements have beed defined, the ",(0,a.jsx)(n.strong,{children:"actual product description"})," in form of a third ",(0,a.jsx)(n.code,{children:"Root"})," child element named ",(0,a.jsx)(n.code,{children:"ProductDefinitions"})," (3) element can follow now:"]}),"\n",(0,a.jsx)("img",{src:"/img/docs/structure/product-xsd.webp",alt:"ProductDefinitions in XSD",width:"540"}),"\n",(0,a.jsxs)(n.p,{children:["It consists of ",(0,a.jsx)(n.strong,{children:"two child elements"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Exactly 1 ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," XML element, discussed in this chapter"]}),"\n",(0,a.jsxs)(n.li,{children:["1-n ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variant"})})," XML elements, discussed in the next chapter"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For a valid luminaire description, one ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," and at least one ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variant"})})," element are ",(0,a.jsx)(n.strong,{children:"mandatory"}),". But what is the difference?"]}),"\n",(0,a.jsxs)(n.h3,{id:"productmetadata--variants",children:[(0,a.jsx)(n.code,{children:"ProductMetaData"})," \u21c4 ",(0,a.jsx)(n.code,{children:"Variants"})]}),"\n",(0,a.jsxs)(n.p,{children:["Both elements holds ",(0,a.jsx)(n.strong,{children:"marketing information"})," about the luminaire on the one hand. Like product name and number, description texts in multiple languages, product images or the categorisation of the lumianire in product series. As well as a lot of further ",(0,a.jsx)(n.a,{href:"/docs/structure/descriptive-attributes",children:"descriptive attributes"})," like housing colors, ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/EN_62262",children:"ik rating"})," or the ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ATEX_directive",children:"ATEX"})," directive where applicable."]}),"\n",(0,a.jsxs)(n.p,{children:["And ",(0,a.jsx)(n.strong,{children:"technical information"})," such as the mounting point of the luminaire, maintenance recommendations or the most important: a reference to the previously defined ",(0,a.jsx)(n.a,{href:"/docs/geometry/introduction",children:(0,a.jsx)(n.code,{children:"Geometries"})})," and ",(0,a.jsx)(n.a,{href:"/docs/structure/emitters",children:(0,a.jsx)(n.code,{children:"Emitters"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The differences between ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," and ",(0,a.jsx)(n.code,{children:"Variant"})," are as follows"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A GLDF can only contain one ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," but multiple ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variant"})})]}),"\n",(0,a.jsxs)(n.li,{children:["The child elements of ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," define ",(0,a.jsx)(n.strong,{children:"global"})," properties of the luminaire"]}),"\n",(0,a.jsxs)(n.li,{children:["The child elements of ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variant"})})," define ",(0,a.jsx)(n.strong,{children:"specific"})," properties of the ",(0,a.jsx)(n.strong,{children:"variants"})," of a luminaire"]}),"\n",(0,a.jsxs)(n.li,{children:["Some properties are childs of only one of the elements. The maintenance recommendations can only be found on ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," for example. The GTIN on the other hand has to be defined for each ",(0,a.jsx)(n.a,{href:"/docs/structure/variant",children:(0,a.jsx)(n.code,{children:"Variant"})})]}),"\n",(0,a.jsxs)(n.li,{children:["For child elements with the ",(0,a.jsx)(n.strong,{children:"same name"})," on both, ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," and ",(0,a.jsx)(n.code,{children:"Variant"}),", applies: if both are defined, ",(0,a.jsx)(n.code,{children:"Variant"})," overwrites ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". ",(0,a.jsx)(n.strong,{children:"This is important to understand"})," and therefore explained in detail ",(0,a.jsx)(n.a,{href:"/docs/structure/product#variant-overwrites-productmetadata",children:"below"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Most ",(0,a.jsx)(n.strong,{children:"marketing information"})," are ",(0,a.jsx)(n.strong,{children:"optional"}),". However, the more are specified, the better users can work with the GLDF."]})}),"\n",(0,a.jsxs)(n.h3,{id:"productmetadata-xsd-description",children:[(0,a.jsx)(n.code,{children:"ProductMetaData"})," XSD description"]}),"\n",(0,a.jsx)("img",{src:"/img/docs/structure/product-xsd-metadata.webp",alt:"ProductDefinitions in XSD",width:"400"}),"\n",(0,a.jsx)(n.h3,{id:"xml-example",children:"XML example"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ProductMetaData"})," is a relatively straightforward element and in its simplest form only requires three mandatory fields: An ",(0,a.jsx)(n.strong,{children:"unique product id"}),", the ",(0,a.jsx)(n.strong,{children:"product number"})," and the ",(0,a.jsx)(n.strong,{children:"product name"})," in one language (preferably English):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{11-19} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">1234-AB</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n      </Name>\n    </ProductMetaData>\n    <Variants>\n      \x3c!--Skipped for clarity--\x3e\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsxs)(n.admonition,{title:"Unique Product Id",type:"tip",children:[(0,a.jsxs)(n.p,{children:["The element ",(0,a.jsx)(n.code,{children:"UniqueProductId"})," is particularly important, as it makes it possible to recognise the same (updated) product across multiple GLDF files. You could use the product's article number, GTIN or EAN for it, but we ",(0,a.jsx)(n.strong,{children:"recommend UUIDs (GUIDs)"})," related only for this use case, since all other values could change over time."]}),(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["See also ",(0,a.jsx)(n.a,{href:"/getting-started#unique-ids",children:"Unique IDs"})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"A complete example, on the other hand, could look as follows. In general, it is recommended to provide as much information about the product as possible:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{11-59} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">1234-AB</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n        <Locale language="de">Meine Leuchte</Locale>\n      </Name>\n      <Description>\n        <Locale language="en">Wall-mounted, dimmable luminaire with rotatable joints</Locale>\n        <Locale language="de">Dimmbare Leuchte mit drehbaren Gelenken in Wandmontage</Locale>\n      </Description>\n      <TenderText>\n        <Locale language="en">Our bestseller, winner of the Red Dot Award</Locale>\n        <Locale language="de">Unser Verkaufsschlager, Gewinner des Red Dot Awards</Locale>\n      </TenderText>\n      <ProductSeries>\n        <ProductSerie id="familyXY">\n          <Name>\n            <Locale language="en">Product family XY</Locale>\n            <Locale language="de">Produktfamilie XY</Locale>\n          </Name>\n        </ProductSerie>\n        <ProductSerie id="familyYZ">\n          <Name>\n            <Locale language="en">Our series YZ</Locale>\n            <Locale language="de">Unsere Serie YZ</Locale>\n          </Name>\n        </ProductSerie>\n      </ProductSeries>\n      <Pictures>\n        <Image fileId="pictureFile1" imageType="Product Picture" />\n        <Image fileId="pictureFile2" imageType="Application Picture" />\n        <Image fileId="pictureFile3" imageType="Technical Sketch" />\n        <Image fileId="pictureFile4" imageType="Other" />\n      </Pictures>\n      <LuminaireMaintenance>\n        <Cie97LuminaireType>Dust Proof IP5X</Cie97LuminaireType>\n        <CieLuminaireMaintenanceFactors>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Normal">0.9</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Normal">0.8</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="3" roomCondition="Normal">0.6</LuminaireMaintenanceFactor>\n        </CieLuminaireMaintenanceFactors>\n      </LuminaireMaintenance>\n      <DescriptiveAttributes>\n        \x3c!-- see documentation for DescriptiveAttributes--\x3e\n      </DescriptiveAttributes>\n    </ProductMetaData>\n    <Variants>\n      \x3c!--Skipped for clarity--\x3e\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["An introduction to ",(0,a.jsx)(n.code,{children:"DescriptiveAttributes"})," can be found ",(0,a.jsx)(n.a,{href:"/docs/structure/descriptive-attributes",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"luminaire-maintenance",children:"Luminaire maintenance"}),"\n",(0,a.jsxs)(n.p,{children:["There are several options for specifying the ",(0,a.jsx)(n.strong,{children:"maintenance properties"})," of a luminaire:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Cie97LuminaireType"})," acording to the ",(0,a.jsx)(n.strong,{children:"CIE 97"})," standard"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CieLuminaireMaintenanceFactors"})," acording to CIE Luminaire Maintenance Factor standard (",(0,a.jsx)(n.strong,{children:"LMF"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"IesLuminaireLightLossFactors"})," according to IES Light Loss Factor standard (",(0,a.jsx)(n.strong,{children:"LLF"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"JiegMaintenanceFactors"})," according to the Japanese maintenance factor method ",(0,a.jsx)(n.strong,{children:"JIEG-001"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to define ",(0,a.jsx)(n.strong,{children:"one or several"})," types."]}),"\n",(0,a.jsx)(n.h4,{id:"cie97luminairetype",children:(0,a.jsx)(n.code,{children:"Cie97LuminaireType"})}),"\n",(0,a.jsxs)(n.p,{children:["The luminaire maintenance according to ",(0,a.jsx)(n.strong,{children:"CIE 97"})," is indicated by ",(0,a.jsx)(n.strong,{children:"specifying a luminaire type"}),". For each type a ",(0,a.jsx)(n.strong,{children:"cleaning schedule/interval presets"})," is specified in this standard. Possible types are:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Bare Batten"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Open Top Housing (Natural Ventilated)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Closed Top Housing (Unventilated)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Enclosed IP2X"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Dust Proof IP5X"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Enclosed Indirect (Uplight)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Airhandling, Forced Ventilated"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{20} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">42</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n      </Name>\n      <LuminaireMaintenance>\n        <Cie97LuminaireType>Dust Proof IP5X</Cie97LuminaireType>\n      </LuminaireMaintenance>\n    </ProductMetaData>\n    <Variants>\n      \x3c!--Skipped for clarity--\x3e\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsx)(n.h4,{id:"cieluminairemaintenancefactors",children:(0,a.jsx)(n.code,{children:"CieLuminaireMaintenanceFactors"})}),"\n",(0,a.jsxs)(n.p,{children:["Luminaire maintenance acording to ",(0,a.jsx)(n.strong,{children:"CIE LMF"})," allows the specification of a ",(0,a.jsx)(n.strong,{children:"maintenance factor"})," (lumen ",(0,a.jsx)(n.strong,{children:"degradation"})," due to pollution) for different room ",(0,a.jsx)(n.strong,{children:"conditions and years"}),", that have past"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{20-29} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">42</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n      </Name>\n      <LuminaireMaintenance>\n        <CieLuminaireMaintenanceFactors>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Very Clean">0.99</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Clean">0.95</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Normal">0.91</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Dirty">0.82</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Very Clean">0.96</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Clean">0.92</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Normal">0.85</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Dirty">0.74</LuminaireMaintenanceFactor>\n        </CieLuminaireMaintenanceFactors>\n      </LuminaireMaintenance>\n    </ProductMetaData>\n    <Variants>\n      \x3c!--Skipped for clarity--\x3e\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsx)(n.h4,{id:"iesluminairelightlossfactors",children:(0,a.jsx)(n.code,{children:"IesLuminaireLightLossFactors"})}),"\n",(0,a.jsxs)(n.p,{children:["Luminaire maintenance acording to ",(0,a.jsx)(n.strong,{children:"IES LLF"})," is similar to CIE LMF. Its again the ",(0,a.jsx)(n.strong,{children:"ratio of illuminance"})," for a given area to the value that would occur if lamps operated at their ",(0,a.jsx)(n.strong,{children:"initial rated lumens"}),". In comparison, the element is only named differently and now called ",(0,a.jsx)(n.code,{children:"LuminaireDirtDepreciation"}),". As well as the description of the room characteristic is minimally different: The specification ",(0,a.jsx)(n.code,{children:"Normal"})," in the CIE standard is now called ",(0,a.jsx)(n.code,{children:"Moderate"}),". And an additional room condition ",(0,a.jsx)(n.code,{children:"Very Dirty"})," is possible."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{20-31} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">42</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n      </Name>\n      <LuminaireMaintenance>\n        <IesLuminaireLightLossFactors>\n          <LuminaireDirtDepreciation years="1" roomCondition="Very Clean">0.99</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="1" roomCondition="Clean">0.98</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="1" roomCondition="Moderate">0.95</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="1" roomCondition="Dirty">0.91</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="1" roomCondition="Very Dirty">0.85</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="2" roomCondition="Very Clean">0.96</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="2" roomCondition="Clean">0.94</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="2" roomCondition="Moderate">0.91</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="2" roomCondition="Dirty">0.82</LuminaireDirtDepreciation>\n          <LuminaireDirtDepreciation years="2" roomCondition="Very Dirty">0.77</LuminaireDirtDepreciation>\n        </IesLuminaireLightLossFactors>\n      </LuminaireMaintenance>\n    </ProductMetaData>\n    <Variants>\n      \x3c!--Skipped for clarity--\x3e\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsx)(n.h4,{id:"jiegmaintenancefactors",children:(0,a.jsx)(n.code,{children:"JiegMaintenanceFactors"})}),"\n",(0,a.jsxs)(n.p,{children:["The Japanese standard ",(0,a.jsx)(n.strong,{children:"Jieg-001"})," does not differ greatly from CIE and IES. Once again, maintenance factors can be specified depending on the room condition and duration in years. The room conditions are limited to three types, with the possible values ",(0,a.jsx)(n.code,{children:"Clean"}),", ",(0,a.jsx)(n.code,{children:"Normal"})," and ",(0,a.jsx)(n.code,{children:"Dirty"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{20-27} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">42</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n      </Name>\n      <LuminaireMaintenance>\n        <JiegMaintenanceFactors>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Clean">0.99</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Normal">0.95</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="1" roomCondition="Dirty">0.85</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Clean">0.96</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Normal">0.90</LuminaireMaintenanceFactor>\n          <LuminaireMaintenanceFactor years="2" roomCondition="Dirty">0.77</LuminaireMaintenanceFactor>\n        </JiegMaintenanceFactors>\n      </LuminaireMaintenance>\n    </ProductMetaData>\n    <Variants>\n      \x3c!--Skipped for clarity--\x3e\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"variant-overwrites-productmetadata",children:[(0,a.jsx)(n.code,{children:"Variant"})," overwrites ",(0,a.jsx)(n.code,{children:"ProductMetaData"})]}),"\n",(0,a.jsxs)(n.p,{children:["Some of the child properties can be defined at the level of ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," as well as at ",(0,a.jsx)(n.code,{children:"Variant"}),". This affects the following elements:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ProductNumber"}),"\n",(0,a.jsx)(n.li,{children:"Name"}),"\n",(0,a.jsx)(n.li,{children:"Description"}),"\n",(0,a.jsx)(n.li,{children:"TenderText"}),"\n",(0,a.jsx)(n.li,{children:"ProductSeries"}),"\n",(0,a.jsx)(n.li,{children:"Pictures"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/structure/descriptive-attributes",children:"DescriptiveAttributes"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"recommended"})," procedure is to first define all relevant properties on ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". And ",(0,a.jsx)(n.strong,{children:"if these change"})," for individual variants of the luminaire, only then ",(0,a.jsx)(n.strong,{children:"overwrite"})," them. An example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"{13-21,25-27,30-38} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    \x3c!--Skipped for clarity--\x3e\n  </Header>\n  <GeneralDefinitions>\n    \x3c!--Skipped for clarity--\x3e\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">42</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">My luminaire</Locale>\n      </Name>\n      <Description>\n        <Locale language="en">Our bestseller</Locale>\n      </Description>\n    </ProductMetaData>\n    <Variants>\n      <Variant id="simple-variant">\n        <Name>\n          <Locale language="en">My luminaire variant A</Locale>\n        </Name>\n      </Variant>\n      <Variant id="rgb-variant">\n        <ProductNumber>\n          <Locale language="en">42-rgb</Locale>\n        </ProductNumber>\n        <Name>\n          <Locale language="en">My luminaire variant B</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">Our bestseller with rgb module</Locale>\n        </Description>\n      </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example we have a ",(0,a.jsx)(n.code,{children:"ProductMetaData"})," element, which defines the following ",(0,a.jsx)(n.strong,{children:"global"})," properties"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Line 12: The ",(0,a.jsx)(n.code,{children:"ProductNumber"})," of this luminaire is ",(0,a.jsx)(n.strong,{children:"globally"})," defined as ",(0,a.jsx)(n.em,{children:"42"})]}),"\n",(0,a.jsxs)(n.li,{children:["Line 15: The ",(0,a.jsx)(n.code,{children:"Name"})," of this luminaire is ",(0,a.jsx)(n.strong,{children:"globally"})," defnied as ",(0,a.jsx)(n.em,{children:"My luminaire"})]}),"\n",(0,a.jsxs)(n.li,{children:["Line 18: The ",(0,a.jsx)(n.code,{children:"Description"})," of this luminaire is ",(0,a.jsx)(n.strong,{children:"globally"})," defined as ",(0,a.jsx)(n.em,{children:"Our bestseller"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["And ",(0,a.jsx)(n.strong,{children:"two"})," ",(0,a.jsx)(n.code,{children:"Variant"})," of this lumianire, of which the first with ",(0,a.jsx)(n.code,{children:"id"})," ",(0,a.jsx)(n.em,{children:"simple-variant"})," (Line 22-26) defines the following ",(0,a.jsx)(n.strong,{children:"variant-specific"})," properties"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["No ",(0,a.jsx)(n.code,{children:"ProductNumber"})," defined: So ",(0,a.jsx)(n.strong,{children:"nothing overwrites"})," the globally defined ",(0,a.jsx)(n.code,{children:"ProductNumber"})," ",(0,a.jsx)(n.em,{children:"42"})," in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". Which means that this variant of the luminaire is probably still sold under the product number defined above."]}),"\n",(0,a.jsxs)(n.li,{children:["Line 24: The ",(0,a.jsx)(n.code,{children:"Name"})," is ",(0,a.jsx)(n.strong,{children:"specifically defined"})," as ",(0,a.jsx)(n.em,{children:"My luminaire variant A"})," for this ",(0,a.jsx)(n.code,{children:"Variant"})," - So it ",(0,a.jsx)(n.strong,{children:"overwrites"})," the ",(0,a.jsx)(n.code,{children:"Name"})," ",(0,a.jsx)(n.em,{children:"My luminaire"})," defined in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". Which means that this variant of the luminaire can e.g. be recognized in lighting calculation software like DIALux oder RELUX under this new name (and not ",(0,a.jsx)(n.em,{children:"My luminaire"})," defined in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["No ",(0,a.jsx)(n.code,{children:"Description"})," defined: So ",(0,a.jsx)(n.strong,{children:"nothing overwrites"})," the globally defined ",(0,a.jsx)(n.code,{children:"Description"})," ",(0,a.jsx)(n.em,{children:"Our bestseller"})," in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),".",(0,a.jsx)(n.br,{}),"\n","Which means that this variant of the luminaire is e.g. still described with the text defined above in documentation generated by lighting calculation software."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["And a second Variant with ",(0,a.jsx)(n.code,{children:"id"})," ",(0,a.jsx)(n.em,{children:"rgb-variant"})," with"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Line 29: The ",(0,a.jsx)(n.code,{children:"ProductNumber"})," is ",(0,a.jsx)(n.strong,{children:"specifically defined"})," as ",(0,a.jsx)(n.em,{children:"42-rgb"})," for this ",(0,a.jsx)(n.code,{children:"Variant"})," - So it ",(0,a.jsx)(n.strong,{children:"overwrites"})," the ",(0,a.jsx)(n.code,{children:"ProductNumber"})," ",(0,a.jsx)(n.em,{children:"42"})," defined in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". Which means that this variant of the luminaire is e.g. sold under a new product number and not the one defined above in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Line 32: The ",(0,a.jsx)(n.code,{children:"Name"})," is specifically defined as ",(0,a.jsx)(n.em,{children:"My luminaire variant B"})," for this ",(0,a.jsx)(n.code,{children:"Variant"})," - So it ",(0,a.jsx)(n.strong,{children:"overwrites"})," the ",(0,a.jsx)(n.code,{children:"Name"})," ",(0,a.jsx)(n.em,{children:"My luminaire"})," defined in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". Which means that this variant of the luminaire can be e.g. recognized in lighting calculation software like DIALux oder RELUX under this new name (and not ",(0,a.jsx)(n.em,{children:"My luminaire"})," defined in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),"). And ",(0,a.jsx)(n.strong,{children:"distinguished"})," from the other variant with id ",(0,a.jsx)(n.em,{children:"simple-variant"})]}),"\n",(0,a.jsxs)(n.li,{children:["Line 34: The ",(0,a.jsx)(n.code,{children:"Description"})," is ",(0,a.jsx)(n.strong,{children:"specifically defined"})," as ",(0,a.jsx)(n.em,{children:"Our bestseller with rgb module"})," for this ",(0,a.jsx)(n.code,{children:"Variant"})," - So it ",(0,a.jsx)(n.strong,{children:"overwrites"})," the ",(0,a.jsx)(n.code,{children:"Description"})," ",(0,a.jsx)(n.em,{children:"Our bestseller"})," defined in ",(0,a.jsx)(n.code,{children:"ProductMetaData"}),". Which means that this variant of the luminaire has a specific description which usually should state the ",(0,a.jsx)(n.strong,{children:"differences or special characteristics"})," of a variant."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(6540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);