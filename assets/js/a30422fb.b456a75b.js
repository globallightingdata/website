"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[6518],{1112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(5893),l=t(1151);const a={title:"GLDF Release v1.0.rc3",description:"GLDF v1.0 releace candidate 3",author:"Alex",author_title:"Developer DIAL",author_url:"https://github.com/Kurpanik",author_image_url:"https://avatars.githubusercontent.com/u/71767601?s=460",hide_table_of_contents:!1,tags:["gldf","release"]},i=void 0,o={permalink:"/blog/2023/06/23/release-gldf-rc3",editUrl:"https://github.com/globallightingdata/website/tree/master/blog/2023-06-23-release-gldf-rc3.md",source:"@site/blog/2023-06-23-release-gldf-rc3.md",title:"GLDF Release v1.0.rc3",description:"GLDF v1.0 releace candidate 3",date:"2023-06-23T00:00:00.000Z",tags:[{label:"gldf",permalink:"/blog/tags/gldf"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.37,hasTruncateMarker:!0,authors:[{name:"Alex",title:"Developer DIAL",url:"https://github.com/Kurpanik",imageURL:"https://avatars.githubusercontent.com/u/71767601?s=460"}],frontMatter:{title:"GLDF Release v1.0.rc3",description:"GLDF v1.0 releace candidate 3",author:"Alex",author_title:"Developer DIAL",author_url:"https://github.com/Kurpanik",author_image_url:"https://avatars.githubusercontent.com/u/71767601?s=460",hide_table_of_contents:!1,tags:["gldf","release"]},unlisted:!1,nextItem:{title:"GLDF Release v1.0.rc2",permalink:"/blog/2023/04/17/release-gldf-rc2"}},s={authorsImageUrls:[void 0]},c=[{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Possible breaking changes",id:"possible-breaking-changes",level:2},{value:"Cylinder <code>plane</code> attribute removed",id:"cylinder-plane-attribute-removed",level:3},{value:"New features",id:"new-features",level:2},{value:"LightSource combinations",id:"lightsource-combinations",level:3},{value:"Multi channel luminaires",id:"multi-channel-luminaires",level:3},{value:"XML example",id:"xml-example",level:4}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Today we have published the third release candidate of version 1.0. The changelog can be found on Github as always: ",(0,r.jsx)(n.a,{href:"https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.3",children:"GLDF v1.0.rc3"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Below is a short guide on how to migrate existing GLDFs from rc.2 to the new rc.3 version. We have kept the changes to a minimum."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsxs)(n.p,{children:["Reference the new XSD and update the ",(0,r.jsx)(n.code,{children:"FormatVersion"})," element as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:"showLineNumbers {2,5}",children:'<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n <Header>\n  <Manufacturer>Acme</Manufacturer>\n  <FormatVersion major="1" minor="0" pre-release="3" />\n  ...\n'})}),"\n",(0,r.jsx)(n.h2,{id:"possible-breaking-changes",children:"Possible breaking changes"}),"\n",(0,r.jsxs)(n.h3,{id:"cylinder-plane-attribute-removed",children:["Cylinder ",(0,r.jsx)(n.code,{children:"plane"})," attribute removed"]}),"\n",(0,r.jsxs)(n.p,{children:["Should you use the Cylinder simple geometry element with its ",(0,r.jsx)(n.code,{children:"plane"})," attribute set, then you have to remove this attribute. The default Cylinder plane orientation is now the same as in Eulumdat."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:"showLineNumbers {4}",children:'<GeneralDefinitions>\n <Geometries>\n  <SimpleGeometry id="cylinder200">\n   <Cylinder>\n    <Diameter>200</Diameter>\n    <Height>500</Height>\n   </Cylinder>\n   <CircularEmitter>\n    <Diameter>190</Diameter>\n   </CircularEmitter>\n  </SimpleGeometry>\n </Geometries>  \n</GeneralDefinitions>\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsx)(n.h3,{id:"lightsource-combinations",children:"LightSource combinations"}),"\n",(0,r.jsxs)(n.p,{children:["With the new version, the different types within ",(0,r.jsx)(n.a,{href:"/docs/structure/light-sources",children:"LightSources"})," can now be combined. This was not possible till now, so that a GLDF had to consist of 1-n ",(0,r.jsx)(n.code,{children:"ChangeableLightSource"})," ",(0,r.jsx)(n.strong,{children:"or"})," 1-n ",(0,r.jsx)(n.code,{children:"FixedLightSource"})," exclusively. This has been extended  to depict luminaires with combinations of changeable light sources with fixed LEDs - or even multi channel light sources now, see below."]}),"\n",(0,r.jsx)(n.h3,{id:"multi-channel-luminaires",children:"Multi channel luminaires"}),"\n",(0,r.jsxs)(n.p,{children:["With release candidate 3, the GLDF now supports multi channel luminaires. For this purpose, a new LightSource element called ",(0,r.jsx)(n.code,{children:"MultiChannelLightSource"})," has been introduced. As well as a corresponding emitter called ",(0,r.jsx)(n.code,{children:"MultiChannelLightEmitter"}),", which references this LightSource. The documentation for both will follow soon ",(0,r.jsx)(n.a,{href:"/docs/structure/light-sources",children:"here (LightSource)"})," and ",(0,r.jsx)(n.a,{href:"/docs/structure/emitters",children:"here (Emitters)"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"xml-example",children:"XML example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:"showLineNumbers {51-88,107-112,131}",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n <Header>\n  <Manufacturer>Acme</Manufacturer>\n  <FormatVersion major="1" minor="0" pre-release="3"/>\n  <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n  <GldfCreationTimeCode>2023-06-23T08:00:00Z</GldfCreationTimeCode>\n  <UniqueGldfId>1d485787-7eee-4e75-aba4-e4c4875e69f9</UniqueGldfId>\n </Header>\n <GeneralDefinitions>\n  <Files>\n   <File id="photometryRedFile" contentType="ldc/eulumdat" \n         type="url">http://example.org/photometryRed.ldt</File>\n   <File id="photometryGreenFile" contentType="ldc/eulumdat" \n         type="url">http://example.org/photometryGreen.ldt</File>\n   <File id="photometryBlueFile" contentType="ldc/eulumdat" \n         type="url">http://example.org/photometryBlue.ldt</File>\n   <File id="spectrumRedFile" contentType="spectrum/text" \n         type="url">http://example.org/spectrumRed.txt</File>\n   <File id="spectrumGreenFile" contentType="spectrum/text" \n         type="url">http://example.org/spectrumGreen.txt</File>\n   <File id="spectrumBlueFile" contentType="spectrum/text" \n         type="url">http://example.org/spectrumBlue.txt</File>\n   <File id="lightSourceImage" contentType="image/jpg" \n         type="url">http://example.org/image.jpg</File>\n  </Files>\n  <Photometries>\n   <Photometry id="photometryRed">\n    <PhotometryFileReference fileId="photometryRedFile"/>\n   </Photometry>\n   <Photometry id="photometryGreen">\n    <PhotometryFileReference fileId="photometryGreenFile"/>\n   </Photometry>\n   <Photometry id="photometryBlue">\n    <PhotometryFileReference fileId="photometryBlueFile"/>\n   </Photometry>\n  </Photometries>\n  <Spectrums>\n   <Spectrum id="spectrumRed">\n    <SpectrumFileReference fileId="spectrumRedFile"/>\n   </Spectrum>\n   <Spectrum id="spectrumGreen">\n    <SpectrumFileReference fileId="spectrumGreenFile"/>\n   </Spectrum>\n   <Spectrum id="spectrumBlue">\n    <SpectrumFileReference fileId="spectrumBlueFile"/>\n   </Spectrum>\n  </Spectrums>\n  <LightSources>\n   <MultiChannelLightSource id="multiChannelLightSource">\n    <Name>\n     <Locale language="en">RGB MultiChannel</Locale>\n    </Name>\n    <RatedInputPower>50</RatedInputPower>\n    <LightSourceImages>\n     <Image fileId="lightSourceImage" imageType="Product Picture"/>\n    </LightSourceImages>\n    <Channels>\n     <Channel type="Red">\n      <DisplayName>\n       <Locale language="en">Red channel</Locale>\n       <Locale language="de">Roter Kanal</Locale>\n      </DisplayName>\n      <SpectrumReference spectrumId="spectrumRed"/>\n      <PhotometryReference photometryId="photometryRed"/>\n      <RatedLuminousFlux>150</RatedLuminousFlux>\n     </Channel>\n     <Channel type="Green">\n      <DisplayName>\n       <Locale language="en">Green channel</Locale>\n       <Locale language="de">Gr\xfcner Kanal</Locale>\n      </DisplayName>\n      <SpectrumReference spectrumId="spectrumGreen"/>\n      <PhotometryReference photometryId="photometryGreen"/>\n      <RatedLuminousFlux>160</RatedLuminousFlux>\n     </Channel>\n     <Channel type="Blue">\n      <DisplayName>\n       <Locale language="en">Blue channel</Locale>\n       <Locale language="de">Blauer Kanal</Locale>\n      </DisplayName>\n      <SpectrumReference spectrumId="spectrumBlue"/>\n      <PhotometryReference photometryId="photometryBlue"/>\n      <RatedLuminousFlux>140</RatedLuminousFlux>\n     </Channel>\n    </Channels>\n   </MultiChannelLightSource>\n  </LightSources>\n  <ControlGears>\n   <ControlGear id="controlGear">\n    <Name>\n     <Locale language="en">Electronic ballast</Locale>\n    </Name>\n    <NominalVoltage>\n     <VoltageRange>\n      <Min>220</Min>\n      <Max>230</Max>\n     </VoltageRange>\n    </NominalVoltage>\n    <StandbyPower>5</StandbyPower>\n    <Dimmable>true</Dimmable>\n    <ColorControllable>true</ColorControllable>\n   </ControlGear>\n  </ControlGears>\n  <Emitters>\n   <Emitter id="emitter">\n    <MultiChannelLightEmitter>\n     <LightSourceReference multiChannelLightSourceId="multiChannelLightSource"/>\n     <ControlGearReference controlGearId="controlGear"/>\n    </MultiChannelLightEmitter>\n   </Emitter>\n  </Emitters>\n </GeneralDefinitions>\n <ProductDefinitions>\n  <ProductMetaData>\n   <UniqueProductId>6a911f84-b812-4e29-9622-6b971f6ae202</UniqueProductId>\n   <ProductNumber>\n    <Locale language="en">123</Locale>\n   </ProductNumber>\n   <Name>\n    <Locale language="en">MultiChannel example</Locale>\n   </Name>\n  </ProductMetaData>\n  <Variants>\n   <Variant id="variant1">\n    <Name>\n     <Locale language="en">MultiChannel example variant</Locale>\n    </Name>\n    <Geometry>\n     <EmitterReference emitterId="emitter"/>\n    </Geometry>\n   </Variant>\n  </Variants>\n </ProductDefinitions>\n</Root>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const l={},a=r.createContext(l);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);