"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([["4823"],{7176(e,t,n){n.r(t),n.d(t,{default:()=>y});var s=n(4848);n(6540);var i=n(6386),r=n(1113),o=n(3572),a=n(6497);let l={feature1:`
  <p>GLDF is a new, modern, and modular lighting data format with a structure, capable of supporting simple to complex 
  <strong>luminaires</strong> and <strong>sensors</strong>.</p>
  <p>Developed by <strong>DIAL</strong> and <strong>RELUX</strong> to save efforts in the creation and interpretation 
  of lighting data, offering more capabilities than ROLF or ULD. <strong>Open and freely</strong> available for 
  everyone.</p>
  `,xmlCodeText:`
  <p>The core element of GLDF is an <strong>XML file</strong>, which describes all product features and variations. 
  Containing three major blocks - metadata, product parts, the product itself - it allows the definition of luminaires in 
  a <strong>modular manner</strong>.</p>
  <p>With the possibility to <strong>reuse</strong> 
  elements and combine them to multiple variants of the same product <strong>effortless</strong>.</p>
  <p>All that is backed by a consistent, documented, and versioned XSD Schema to <strong>validate</strong> your data.</p>
  `,codeExample:`<?xml version="1.0" encoding="UTF-8"?>
  <Root xsi:noNamespaceSchemaLocation="GldfSchema.xsd">
    <Header />
    <GeneralDefinitions>
      <Files />
      <Sensors />
      <Photometries />
      <Spectrums />
      <LightSources />
      <ControlGears />
      <Equipments />
      <Emitters />
      <Geometries />    
    </GeneralDefinitions>
    <ProductDefinitions>
      <ProductMetaData />
      <Variants>
        <Variant />
        <Variant />
      </Variants>
    </ProductDefinitions>
  </Root>
  `,feature2:`
  <p>Create 3D models for your products and visualize them in <strong>different levels of detail</strong>. 
  From basic bodies, through parameterisable models up to detailed 3D geometries.</p>
  <p>Combine GLDF with our <strong>newly developed L3D format</strong>. To visualize enclosures in fine granularity, 
  precisely positioned light-emitting surfaces/sensors and movable parts with joints as required.</p>
  `,feature3:`
<p>GLDF was created by experts with <strong>decades of lighting experience</strong> for all modern use cases.</p>
<p>Our goal: everything a manufacturer could communicate about his product, should be possible in GLDF.</p>
<p><strong>This includes</strong> luminaires with multiple light emitters and/or sensors, conventional/LED light sources, spectrums, 
embeded/linked files, emergency lighting, maintenance factors, control gears, mounting point definitions, dimming curves, 
optional use of all ~350 CEN/TS 17623 - ZVEI BIM properties <strong>to name just a few</strong>.</p>
  `,feature4:`
<p>One product - one file. The product and geometry data is <strong>compressed and packaged</strong> into a .gldf container file 
which you can conveniently exchange and import into DIALux, RELUX and any other software that support it.</p>
<p>GLDF contains all information that BIM applications require in the entire process. Regardless of whether it is <strong>CAD, 
lighting planning</strong> or <strong>facility management</strong>.</p>
  `};function c({text:e}){return(0,s.jsx)("h2",{className:"Heading",children:e})}function d({href:e,type:t="primary",target:n,children:i}){return(0,s.jsx)("a",{className:`ActionButton ${t}`,href:e,target:n,children:i})}function u({title:e,text:t,moreContent:n}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{text:e}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}),n]})}function h(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{type:"primary",href:(0,a.Ay)("/getting-started/"),target:"_self",children:"Get started"}),(0,s.jsx)(d,{type:"secondary",href:"https://github.com/globallightingdata/gldf",target:"_blank",children:"View on Github"})]})}function g({element:e="section",children:t,className:n,background:i="light"}){return(0,s.jsx)(e,{className:`Section ${n} ${i}`,children:t})}function m({columnOne:e,columnTwo:t,reverse:n}){return(0,s.jsxs)("div",{className:`TwoColumns ${n?"reverse":""}`,children:[(0,s.jsx)("div",{className:`column first ${n?"right":"left"}`,children:e}),(0,s.jsx)("div",{className:`column last ${n?"left":"right"}`,children:t})]})}function p(){return(0,s.jsx)(g,{background:"dark",className:"HeaderHero",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h1",{className:"title",children:[(0,s.jsx)("span",{className:"titleHighlight",children:"G"}),"lobal ",(0,s.jsx)("span",{className:"titleHighlight",children:"L"}),"ighting ",(0,s.jsx)("span",{className:"titleHighlight",children:"D"}),"ata ",(0,s.jsx)("span",{className:"titleHighlight",children:"F"}),"ormat"]}),(0,s.jsx)("p",{className:"tagline",children:"Uniform, comprehensive data format for the lighting industry."}),(0,s.jsx)("div",{className:"buttons",children:(0,s.jsx)(h,{})})]})})}function x(){return(0,s.jsx)(g,{className:"Feature1",background:"light",children:(0,s.jsx)(m,{reverse:!0,columnOne:(0,s.jsx)(u,{title:"Modular and flexible",text:l.feature1}),columnTwo:(0,s.jsx)("img",{alt:"",src:"/img/homepage/modular.webp"})})})}function f(){return(0,s.jsx)(g,{className:"XmlCode",background:"tint",children:(0,s.jsx)(m,{columnOne:(0,s.jsx)(u,{title:"Written in XML, covered by XSD",text:l.xmlCodeText}),columnTwo:(0,s.jsx)(r.A,{language:"xml",children:l.codeExample})})})}function j(){return(0,s.jsx)(g,{className:"Feature2",background:"light",children:(0,s.jsx)(m,{columnOne:(0,s.jsx)(u,{title:"Multiple level of detail",text:l.feature2}),columnTwo:(0,s.jsx)("img",{alt:"",src:"/img/homepage/level-of-detail.webp"})})})}function b(){return(0,s.jsx)(g,{className:"Feature3",background:"tint",children:(0,s.jsx)(m,{reverse:!0,columnOne:(0,s.jsx)(u,{title:"Extensive input options",text:l.feature3}),columnTwo:(0,s.jsx)("img",{alt:"",src:"/img/homepage/hierarchy.webp"})})})}function w(){return(0,s.jsx)(g,{className:"Feature4",background:"light",children:(0,s.jsx)(m,{reverse:!0,columnOne:(0,s.jsx)(u,{title:"GLDF & L3D Container",text:l.feature4}),columnTwo:(0,s.jsx)("img",{alt:"",src:"/img/homepage/compress.webp"})})})}function v(){return(0,s.jsx)(g,{className:"Community",background:"light",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)(c,{text:"Developed by DIAL & RELUX - Open for everyone"}),(0,s.jsx)(m,{columnOne:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{className:"firstP",children:[(0,s.jsx)("img",{src:(0,a.Ay)("img/logo.png"),alt:""}),(0,s.jsx)("span",{children:"GLDF is currently under development and will be maintained by DIAL and RELUX together."})]}),(0,s.jsx)("p",{children:"We appreciate early adopters starting to use it and welcome contributors to collaborate with us on the next version."}),(0,s.jsx)("p",{children:"We will keep this website up-to-date and publish a collection of resources for individuals and companies who want to learn how to use and contribute to GLDF."}),(0,s.jsx)("p",{children:"Here are a few ideas on how to get started:"})]}),columnTwo:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Read our Blog. News will be published there"}),(0,s.jsx)("li",{children:"Have a look at the XSD reference"}),(0,s.jsx)("li",{children:"Visit our Github repository, download the XSD schema and try it out"}),(0,s.jsx)("li",{children:"We will publish and extend the documentation in the coming weeks and months. Bookmark us and follow our RSS feed on this website"}),(0,s.jsx)("li",{children:"Go through the Getting Started guide - we will publish it soon"})]}),(0,s.jsx)("p",{children:"Does everything work as expected? If not, we're always looking for improvements. Let us know by opening a discussion or issue on Github."})]})})]})})}let y=()=>(0,s.jsxs)(i.A,{wrapperClassName:"homepage",children:[(0,s.jsx)(o.A,{children:(0,s.jsx)("title",{children:"GLDF | Global Lighting Data Format"})}),(0,s.jsx)(p,{}),(0,s.jsx)(x,{}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{}),(0,s.jsx)(j,{}),(0,s.jsx)(w,{}),(0,s.jsx)(v,{})]})}}]);