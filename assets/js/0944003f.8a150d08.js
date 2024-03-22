"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[6883],{288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var i=n(5893),o=n(1151);const a={title:"Minimal Geo",sidebar_label:"Minimal Geo"},l=void 0,r={id:"getting-started/examples/minimalgeo",title:"Minimal Geo",description:"Introduction",source:"@site/docs/getting-started/examples/minimalgeo.md",sourceDirName:"getting-started/examples",slug:"/getting-started/examples/minimalgeo",permalink:"/docs/getting-started/examples/minimalgeo",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/getting-started/examples/minimalgeo.md",tags:[],version:"current",frontMatter:{title:"Minimal Geo",sidebar_label:"Minimal Geo"},sidebar:"sidebar",previous:{title:"Examples",permalink:"/docs/getting-started/examples"},next:{title:"Minimal LDC",permalink:"/docs/getting-started/examples/minimalldc"}},d={},m=[{value:"Introduction",id:"introduction",level:3},{value:"Explanation",id:"explanation",level:3},{value:"product.xml",id:"productxml",level:3},{value:"Download",id:"download",level:3}];function s(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates very simple minimal GLDF file implementation with no complexity."}),"\n",(0,i.jsxs)(t.p,{children:["Download the example here: ",(0,i.jsx)("a",{href:"https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo",target:"_blank",children:"Minimal Geo.gldf"})]}),"\n",(0,i.jsx)(t.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsx)(t.p,{children:"The setup of the file is very straightforward. It contains a simple 3D geometry, light emitter, and light source in the general definitions section with a minimum amount of meta information."}),"\n",(0,i.jsx)(t.p,{children:"It also references a basic L3D file in the file definitions. The screenshot below shows that the 3D file contains only one light-emitting object named LEO, which we will reference later in the Geomtry part of the product.xml file."}),"\n",(0,i.jsx)("img",{src:"/img/docs/getting-started/examples_minimalgeo_3D.webp",alt:"Minimal Geo r3d model in editor",width:"800"}),"\n",(0,i.jsx)(t.h3,{id:"productxml",children:"product.xml"}),"\n",(0,i.jsx)(t.p,{children:"The following XML code references the single light-emitting object of the 3D file. The 3D file is referenced in line 15-16 and the LEO inside this 3D file in the Emitter in line 68."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",metastring:"{15-16,69} showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    <Manufacturer>Philips Lighting</Manufacturer>\n    <FormatVersion major="1" minor="0" pre-release="3" />\n    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>\n    <UniqueGldfId>03fe1a15-8691-4cf0-876c-f9a67aa0e66b</UniqueGldfId>\n  </Header>\n  <GeneralDefinitions>\n    <Files>\n      <File id="ldtFile" contentType="ldc/eulumdat" \n            type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>\n      <File id="geometryFile" contentType="geo/l3d" \n            type="localFileName">SP542P_SRD_L1480_U3_1_xLED66S_940_OC.l3d</File>\n    </Files>\n    <Photometries>\n      <Photometry id="photometry01">\n        <PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>\n      </Photometry>\n    </Photometries>\n    <LightSources>\n      <FixedLightSource id="lightSource01">\n        <Name>\n          <Locale language="de">LED</Locale>\n        </Name>\n        <RatedInputPower>47.5</RatedInputPower>\n      </FixedLightSource>\n    </LightSources>\n    <Emitters>\n      <Emitter id="emitter01">\n        <FixedLightEmitter>\n          <PhotometryReference photometryId="photometry01"/>\n          <LightSourceReference fixedLightSourceId="lightSource01"/>\n          <RatedLuminousFlux>6600</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n    </Emitters>\n    <Geometries>\n      <ModelGeometry id="geometry01">\n        <GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>\n      </ModelGeometry>\n    </Geometries>\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>b1f7c1d1-d325-4640-862f-b732a98a1926</UniqueProductId>\n      <ProductNumber>\n        <Locale language="de">SP542P</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="de">Pendelleuchte SP542P LED66S/940</Locale>\n      </Name>\n    </ProductMetaData>\n    <Variants>\n      <Variant id="variant1">\n        <Name>\n          <Locale language="de">Variante 1</Locale>\n        </Name>\n        <Mountings>\n          <Ceiling>\n            <SurfaceMounted/>\n          </Ceiling>        \n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="geometry01">\n          <EmitterReference emitterId="emitter01">\n            <EmitterObjectExternalName>LEO</EmitterObjectExternalName>\n          </EmitterReference>\n        </ModelGeometryReference>\n        </Geometry>\n      </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"download",children:"Download"}),"\n",(0,i.jsx)("a",{href:"https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo",target:"_blank",children:"Minimal Geo.gldf"})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var i=n(7294);const o={},a=i.createContext(o);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);