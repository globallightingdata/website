"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[2634],{9179:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});t(6540);var s=t(7912),i=t(8069),r=t(7143),o=t(9030),a=t(4848);const l={feature1:"\n  <p>GLDF is a new, modern, and modular lighting data format with a structure, capable of supporting simple to complex \n  <strong>luminaires</strong> and <strong>sensors</strong>.</p>\n  <p>Developed by <strong>DIAL</strong> and <strong>RELUX</strong> to save efforts in the creation and interpretation \n  of lighting data, offering more capabilities than ROLF or ULD. <strong>Open and freely</strong> available for \n  everyone.</p>\n  ",xmlCodeText:"\n  <p>The core element of GLDF is an <strong>XML file</strong>, which describes all product features and variations. \n  Containing three major blocks - metadata, product parts, the product itself - it allows the definition of luminaires in \n  a <strong>modular manner</strong>.</p>\n  <p>With the possibility to <strong>reuse</strong> \n  elements and combine them to multiple variants of the same product <strong>effortless</strong>.</p>\n  <p>All that is backed by a consistent, documented, and versioned XSD Schema to <strong>validate</strong> your data.</p>\n  ",codeExample:'<?xml version="1.0" encoding="UTF-8"?>\n  <Root xsi:noNamespaceSchemaLocation="GldfSchema.xsd">\n    <Header />\n    <GeneralDefinitions>\n      <Files />\n      <Sensors />\n      <Photometries />\n      <Spectrums />\n      <LightSources />\n      <ControlGears />\n      <Equipments />\n      <Emitters />\n      <Geometries />    \n    </GeneralDefinitions>\n    <ProductDefinitions>\n      <ProductMetaData />\n      <Variants>\n        <Variant />\n        <Variant />\n      </Variants>\n    </ProductDefinitions>\n  </Root>\n  ',feature2:"\n  <p>Create 3D models for your products and visualize them in <strong>different levels of detail</strong>. \n  From basic bodies, through parameterisable models up to detailed 3D geometries.</p>\n  <p>Combine GLDF with our <strong>newly developed L3D format</strong>. To visualize enclosures in fine granularity, \n  precisely positioned light-emitting surfaces/sensors and movable parts with joints as required.</p>\n  ",feature3:"\n<p>GLDF was created by experts with <strong>decades of lighting experience</strong> for all modern use cases.</p>\n<p>Our goal: everything a manufacturer could communicate about his product, should be possible in GLDF.</p>\n<p><strong>This includes</strong> luminaires with multiple light emitters and/or sensors, conventional/LED light sources, spectrums, \nembeded/linked files, emergency lighting, maintenance factors, control gears, mounting point definitions, dimming curves, \noptional use of all ~350 CEN/TS 17623 - ZVEI BIM properties <strong>to name just a few</strong>.</p>\n  ",feature4:"\n<p>One product - one file. The product and geometry data is <strong>compressed and packaged</strong> into a .gldf container file \nwhich you can conveniently exchange and import into DIALux, RELUX and any other software that support it.</p>\n<p>GLDF contains all information that BIM applications require in the entire process. Regardless of whether it is <strong>CAD, \nlighting planning</strong> or <strong>facility management</strong>.</p>\n  "};function c(e){let{text:n}=e;return(0,a.jsx)("h2",{className:"Heading",children:n})}function d(e){let{href:n,type:t="primary",target:s,children:i}=e;return(0,a.jsx)("a",{className:`ActionButton ${t}`,href:n,target:s,children:i})}function u(e){let{title:n,text:t,moreContent:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{text:n}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}),s]})}function h(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{type:"primary",href:(0,o.Ay)("/getting-started/"),target:"_self",children:"Get started"}),(0,a.jsx)(d,{type:"secondary",href:"https://github.com/globallightingdata/gldf",target:"_blank",children:"View on Github"})]})}function m(e){let{element:n="section",children:t,className:s,background:i="light"}=e;const r=n;return(0,a.jsx)(r,{className:`Section ${s} ${i}`,children:t})}function g(e){let{columnOne:n,columnTwo:t,reverse:s}=e;return(0,a.jsxs)("div",{className:"TwoColumns "+(s?"reverse":""),children:[(0,a.jsx)("div",{className:"column first "+(s?"right":"left"),children:n}),(0,a.jsx)("div",{className:"column last "+(s?"left":"right"),children:t})]})}function p(){return(0,a.jsx)(m,{background:"dark",className:"HeaderHero",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h1",{className:"title",children:[(0,a.jsx)("span",{className:"titleHighlight",children:"G"}),"lobal ",(0,a.jsx)("span",{className:"titleHighlight",children:"L"}),"ighting ",(0,a.jsx)("span",{className:"titleHighlight",children:"D"}),"ata ",(0,a.jsx)("span",{className:"titleHighlight",children:"F"}),"ormat"]}),(0,a.jsx)("p",{className:"tagline",children:"Uniform, comprehensive data format for the lighting industry."}),(0,a.jsx)("div",{className:"buttons",children:(0,a.jsx)(h,{})})]})})}function x(){return(0,a.jsx)(m,{className:"Feature1",background:"light",children:(0,a.jsx)(g,{reverse:!0,columnOne:(0,a.jsx)(u,{title:"Modular and flexible",text:l.feature1}),columnTwo:(0,a.jsx)("img",{alt:"",src:"/img/homepage/modular.webp"})})})}function f(){return(0,a.jsx)(m,{className:"XmlCode",background:"tint",children:(0,a.jsx)(g,{columnOne:(0,a.jsx)(u,{title:"Written in XML, covered by XSD",text:l.xmlCodeText}),columnTwo:(0,a.jsx)(i.A,{language:"xml",children:l.codeExample})})})}function j(){return(0,a.jsx)(m,{className:"Feature2",background:"light",children:(0,a.jsx)(g,{columnOne:(0,a.jsx)(u,{title:"Multiple level of detail",text:l.feature2}),columnTwo:(0,a.jsx)("img",{alt:"",src:"/img/homepage/level-of-detail.webp"})})})}function b(){return(0,a.jsx)(m,{className:"Feature3",background:"tint",children:(0,a.jsx)(g,{reverse:!0,columnOne:(0,a.jsx)(u,{title:"Extensive input options",text:l.feature3}),columnTwo:(0,a.jsx)("img",{alt:"",src:"/img/homepage/hierarchy.webp"})})})}function w(){return(0,a.jsx)(m,{className:"Feature4",background:"light",children:(0,a.jsx)(g,{reverse:!0,columnOne:(0,a.jsx)(u,{title:"GLDF & L3D Container",text:l.feature4}),columnTwo:(0,a.jsx)("img",{alt:"",src:"/img/homepage/compress.webp"})})})}function v(){return(0,a.jsx)(m,{className:"Community",background:"light",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)(c,{text:"Developed by DIAL & RELUX - Open for everyone"}),(0,a.jsx)(g,{columnOne:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"firstP",children:[(0,a.jsx)("img",{src:(0,o.Ay)("img/logo.png"),alt:""}),(0,a.jsx)("span",{children:"GLDF is currently under development and will be maintained by DIAL and RELUX together."})]}),(0,a.jsx)("p",{children:"We appreciate early adopters starting to use it and welcome contributors to collaborate with us on the next version."}),(0,a.jsx)("p",{children:"We will keep this website up-to-date and publish a collection of resources for individuals and companies who want to learn how to use and contribute to GLDF."}),(0,a.jsx)("p",{children:"Here are a few ideas on how to get started:"})]}),columnTwo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Read our Blog. News will be published there"}),(0,a.jsx)("li",{children:"Have a look at the XSD reference"}),(0,a.jsx)("li",{children:"Visit our Github repository, download the XSD schema and try it out"}),(0,a.jsx)("li",{children:"We will publish and extend the documentation in the coming weeks and months. Bookmark us and follow our RSS feed on this website"}),(0,a.jsx)("li",{children:"Go through the Getting Started guide - we will publish it soon"})]}),(0,a.jsx)("p",{children:"Does everything work as expected? If not, we're always looking for improvements. Let us know by opening a discussion or issue on Github."})]})})]})})}const y=()=>(0,a.jsxs)(s.A,{wrapperClassName:"homepage",children:[(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:"GLDF | Global Lighting Data Format"})}),(0,a.jsx)(p,{}),(0,a.jsx)(x,{}),(0,a.jsx)(f,{}),(0,a.jsx)(b,{}),(0,a.jsx)(j,{}),(0,a.jsx)(w,{}),(0,a.jsx)(v,{})]})}}]);