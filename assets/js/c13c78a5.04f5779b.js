"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[5254],{1283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=n(5893),l=n(1151);const r={title:"Minimal LDC",sidebar_label:"Minimal LDC"},o=void 0,a={id:"getting-started/examples/minimalldc",title:"Minimal LDC",description:"Introduction",source:"@site/docs/getting-started/examples/minimalldc.md",sourceDirName:"getting-started/examples",slug:"/getting-started/examples/minimalldc",permalink:"/docs/getting-started/examples/minimalldc",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/getting-started/examples/minimalldc.md",tags:[],version:"current",frontMatter:{title:"Minimal LDC",sidebar_label:"Minimal LDC"},sidebar:"sidebar",previous:{title:"Minimal Geo",permalink:"/docs/getting-started/examples/minimalgeo"},next:{title:"Philips SP542P",permalink:"/docs/getting-started/examples/philips"}},d={},s=[{value:"Introduction",id:"introduction",level:3},{value:"Explanation",id:"explanation",level:3},{value:"product.xml",id:"productxml",level:3},{value:"Download",id:"download",level:3}];function c(e){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates very simple minimal GLDF file implementation with no 3D geometry. The only file reference is the light distribution curve."}),"\n",(0,i.jsxs)(t.p,{children:["Download the example here: ",(0,i.jsx)("a",{href:"https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC",target:"_blank",children:"Minimal LDC.gldf"})]}),"\n",(0,i.jsx)(t.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The setup of the file is very straightforward. It contains no 3D geometry and only a simple light distribution curve."}),"\n",(0,i.jsx)(t.li,{children:"There is only one file reference called ldtFile reference by one photometry called photometry01."}),"\n",(0,i.jsx)(t.li,{children:"There is one light source and one emitter. The emitter references the light source and the photometry."}),"\n",(0,i.jsx)(t.li,{children:"The geometry has the simplest possible structure. It only contains the reference to the light emitter (line 55)."}),"\n",(0,i.jsx)(t.li,{children:"Because no geometry is defined, Relux and DIALux will use the LDT file to determine the geometry for their respective applications."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"productxml",children:"product.xml"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",metastring:"{16-36,55} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    <Manufacturer>Philips Lighting</Manufacturer>\n    <FormatVersion major="1" minor="0" pre-release="3" />\n    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>\n    <UniqueGldfId>d0c97760-6e30-4ed7-ad3e-7ce11d105438</UniqueGldfId>\n  </Header>\n  <GeneralDefinitions>\n    <Files>\n      <File id="ldtFile" contentType="ldc/eulumdat" \n            type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>\n    </Files>\n    <Photometries>\n      <Photometry id="photometry01">\n        <PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>\n      </Photometry>\n    </Photometries>\n    <LightSources>\n      <FixedLightSource id="lightSource01">\n        <Name>\n          <Locale language="de">LED</Locale>\n        </Name>\n        <RatedInputPower>47.5</RatedInputPower>\n      </FixedLightSource>\n    </LightSources>\n    <Emitters>\n      <Emitter id="emitter01">\n        <FixedLightEmitter>\n          <PhotometryReference photometryId="photometry01" />\n          <LightSourceReference fixedLightSourceId="lightSource01" />\n          <RatedLuminousFlux>6600</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n    </Emitters>\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>86acec52-1dab-4f14-874e-d9251c5c093f</UniqueProductId>\n      <ProductNumber>\n        <Locale language="de">SP542P</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="de">Pendelleuchte SP542P LED66S/940</Locale>\n      </Name>\n    </ProductMetaData>\n    <Variants>\n      <Variant id="variant1">\n        <Name>\n          <Locale language="de">Variante 1</Locale>\n        </Name>\n        <Geometry>\n          <EmitterReference emitterId="emitter01" />\n        </Geometry>\n      </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"download",children:"Download"}),"\n",(0,i.jsx)("a",{href:"https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC",target:"_blank",children:"Minimal LDC.gldf"})]})}function m(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const l={},r=i.createContext(l);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);