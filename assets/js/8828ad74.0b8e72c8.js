"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[2795],{1307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"getting-started/examples/slv","title":"SLV - Tria 2 with sensor","description":"Introduction","source":"@site/docs/getting-started/examples/slv.md","sourceDirName":"getting-started/examples","slug":"/getting-started/examples/slv","permalink":"/docs/getting-started/examples/slv","draft":false,"unlisted":false,"editUrl":"https://github.com/globallightingdata/website/tree/master/docs/getting-started/examples/slv.md","tags":[],"version":"current","frontMatter":{"title":"SLV - Tria 2 with sensor","sidebar_label":"SLV - Tria 2 with sensor"},"sidebar":"sidebar","previous":{"title":"Philips SP542P","permalink":"/docs/getting-started/examples/philips"},"next":{"title":"Trilux Belviso S CDP","permalink":"/docs/getting-started/examples/trilux"}}');var i=t(4848),o=t(8453);const a={title:"SLV - Tria 2 with sensor",sidebar_label:"SLV - Tria 2 with sensor"},l=void 0,m={},c=[{value:"Introduction",id:"introduction",level:3},{value:"product.xml",id:"productxml",level:3},{value:"Download",id:"download",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates a GLDF file with an L3D model, two light outputs, and an integrated sensor. Everything is put together via the geometry node."}),"\n",(0,i.jsx)("img",{src:"/img/docs/getting-started/product_slv.webp",alt:"SLV NEW TRIA 2"}),"\n",(0,i.jsx)("img",{src:"/img/docs/getting-started/product_slv_3d.webp",alt:"SLV NEW TRIA 2"}),"\n",(0,i.jsx)(n.h3,{id:"productxml",children:"product.xml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:"showLineNumbers",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    <Manufacturer>SLV</Manufacturer>\n    <FormatVersion major="1" minor="0" pre-release="3" />\n    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>\n    <UniqueGldfId>d23f5211-3ee0-44bc-aaa6-56d86add35d1</UniqueGldfId>\n  </Header>\n  <GeneralDefinitions>\n    <Files>\n      <File id="ldtnarrow" contentType="ldc/eulumdat" type="localFileName">narrow.ldt</File>\n      <File id="ldtmiddle" contentType="ldc/eulumdat" type="localFileName">middle.ldt</File>\n      <File id="ldtwide" contentType="ldc/eulumdat" type="localFileName">wide.ldt</File>\n      <File id="geometryFile" contentType="geo/l3d" type="localFileName">example_007.l3d</File>\n      <File id="productImage" contentType="image/png" type="localFileName">NEW TRIA 2.png</File>\n      <File id="sensor" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>\n    </Files>\n    <Sensors>\n      <Sensor id="sensor1">\n        <SensorFileReference fileId="sensor" />\n      </Sensor>\n    </Sensors>\n    <Photometries>\n      <Photometry id="LightEmitterNarrow">\n        <PhotometryFileReference fileId="ldtnarrow" />\n        <DescriptivePhotometry>\n          <LuminousEfficacy>89</LuminousEfficacy>\n          <CIE-FluxCode>98 100 100 100 100</CIE-FluxCode>\n        </DescriptivePhotometry>\n      </Photometry>\n      <Photometry id="LightEmitterMiddle">\n        <PhotometryFileReference fileId="ldtmiddle" />\n        <DescriptivePhotometry>\n          <LuminousEfficacy>96</LuminousEfficacy>\n          <CIE-FluxCode>93 98 99 100 100</CIE-FluxCode>\n        </DescriptivePhotometry>\n      </Photometry>\n      <Photometry id="LightEmitterWide">\n        <PhotometryFileReference fileId="ldtwide" />\n        <DescriptivePhotometry>\n          <LuminousEfficacy>96</LuminousEfficacy>\n          <CIE-FluxCode>69 95 99 100 100</CIE-FluxCode>\n        </DescriptivePhotometry>\n      </Photometry>\n    </Photometries>\n    <LightSources>\n      <FixedLightSource id="LightSource1">\n        <Name>\n          <Locale language="en">LED</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">LED module</Locale>\n        </Description>\n        <RatedInputPower>18</RatedInputPower>\n        <ColorInformation>\n          <ColorRenderingIndex>80</ColorRenderingIndex>\n          <CorrelatedColorTemperature>4000</CorrelatedColorTemperature>\n          <InitialColorTolerance>3 SDCM</InitialColorTolerance>\n        </ColorInformation>\n      </FixedLightSource>\n      <FixedLightSource id="LightSource2">\n        <Name>\n          <Locale language="en">LED</Locale>\n        </Name>\n        <RatedInputPower>81</RatedInputPower>\n        <ColorInformation>\n          <ColorRenderingIndex>80</ColorRenderingIndex>\n          <CorrelatedColorTemperature>5000</CorrelatedColorTemperature>\n          <InitialColorTolerance>3 SDCM</InitialColorTolerance>\n        </ColorInformation>\n      </FixedLightSource>\n      <FixedLightSource id="LightSource3">\n        <Name>\n          <Locale language="en">LED</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">LED module</Locale>\n        </Description>\n        <RatedInputPower>81</RatedInputPower>\n        <ColorInformation>\n          <ColorRenderingIndex>80</ColorRenderingIndex>\n          <CorrelatedColorTemperature>3000</CorrelatedColorTemperature>\n          <InitialColorTolerance>3 SDCM</InitialColorTolerance>\n        </ColorInformation>\n      </FixedLightSource>\n    </LightSources>\n    <ControlGears>\n      <ControlGear id="ControlGear1">\n        <Name>\n          <Locale language="en">Control Gear 1</Locale>\n        </Name>\n      </ControlGear>\n    </ControlGears>\n    <Emitters>\n      <Emitter id="em-n-n">\n        <FixedLightEmitter emergencyBehaviour="None">\n          <PhotometryReference photometryId="LightEmitterNarrow" />\n          <LightSourceReference fixedLightSourceId="LightSource1" />\n          <RatedLuminousFlux>1600</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-m-n">\n        <FixedLightEmitter emergencyBehaviour="None">\n          <PhotometryReference photometryId="LightEmitterMiddle" />\n          <LightSourceReference fixedLightSourceId="LightSource2" />\n          <RatedLuminousFlux>7800</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-w-n">\n        <FixedLightEmitter emergencyBehaviour="None">\n          <PhotometryReference photometryId="LightEmitterWide" />\n          <LightSourceReference fixedLightSourceId="LightSource3" />\n          <RatedLuminousFlux>7800</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-w-c">\n        <FixedLightEmitter emergencyBehaviour="Combined">\n          <PhotometryReference photometryId="LightEmitterWide" />\n          <LightSourceReference fixedLightSourceId="LightSource3" />\n          <RatedLuminousFlux>7800</RatedLuminousFlux>\n          <EmergencyRatedLuminousFlux>100</EmergencyRatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-w-o">\n        <FixedLightEmitter emergencyBehaviour="EmergencyOnly">\n          <PhotometryReference photometryId="LightEmitterWide"></PhotometryReference>\n          <LightSourceReference fixedLightSourceId="LightSource3"></LightSourceReference>\n          <RatedLuminousFlux>100</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-s">\n        <SensorEmitter>\n          <SensorReference sensorId="sensor1" />\n        </SensorEmitter>\n      </Emitter>\n    </Emitters>\n    <Geometries>\n      <ModelGeometry id="ModelGeometry">\n        <GeometryFileReference fileId="geometryFile" levelOfDetail="Medium" />\n      </ModelGeometry>\n    </Geometries>\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>2fc6275d-1ecd-496a-8c55-b3d1b3b5d462</UniqueProductId>\n      <ProductNumber>\n        <Locale language="en">111352</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">NEW TRIA 2</Locale>\n      </Name>\n      <Description>\n        <Locale language="en">Recessed luminaire, two-flame, QR-C51, rectangular, \n          brushed aluminum, max. 100W, incl. clip springs</Locale>\n      </Description>\n      <ProductSeries>\n        <ProductSerie id="serie1">\n          <Name>\n            <Locale language="en">TRIA</Locale>\n          </Name>\n          <Hyperlinks>\n            <Hyperlink href="https://slv.com">SLV Website</Hyperlink>\n          </Hyperlinks>\n        </ProductSerie>\n      </ProductSeries>\n      <Pictures>\n        <Image fileId="productImage" imageType="Product Picture" />\n      </Pictures>\n      <DescriptiveAttributes>\n        <Electrical>\n          <ElectricalSafetyClass>III</ElectricalSafetyClass>\n          <IngressProtectionIPCode>IP20</IngressProtectionIPCode>\n        </Electrical>\n        <OperationsAndMaintenance>\n          <MedianUsefulLifeTimes>\n            <MedianUsefulLife>L80B50 70000h 25\xb0C</MedianUsefulLife>\n          </MedianUsefulLifeTimes>\n        </OperationsAndMaintenance>\n      </DescriptiveAttributes>\n    </ProductMetaData>\n    <Variants>\n      <Variant id="variant1_Combined_Emergency_and_no_emergency_and_no_sensor">\n        <Name>\n          <Locale language="en">comb Em / no Em / -</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">1st emitter combined emergency, 2nd emitter no emergency, no 3rd emitter</Locale>\n        </Description>\n        <Mountings>\n          <Ceiling>\n            <Recessed recessedDepth="11" />\n          </Ceiling>\n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="ModelGeometry">\n            <EmitterReference emitterId="em-n-n">\n              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-w-c">\n              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>\n            </EmitterReference>\n          </ModelGeometryReference>\n        </Geometry>\n        <DescriptiveAttributes>\n          <Mechanical>\n            <Weight>0.379</Weight>\n          </Mechanical>\n        </DescriptiveAttributes>\n      </Variant>\n      <Variant id="variant2_no_Emergency_and_only_emergency_and_sensor">\n        <Name>\n          <Locale language="en">no Em / only Em / sens</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">1st emitter no emergency, 2nd emitter only emergency, 3rd emitter is a sensor</Locale>\n        </Description>\n        <Mountings>\n          <Ceiling>\n            <Recessed recessedDepth="11" />\n          </Ceiling>\n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="ModelGeometry">\n            <EmitterReference emitterId="em-m-n">\n              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-w-o">\n              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-s">\n              <EmitterObjectExternalName>Sensor</EmitterObjectExternalName>\n            </EmitterReference>\n          </ModelGeometryReference>\n        </Geometry>\n        <DescriptiveAttributes>\n          <Mechanical>\n            <Weight>0.479</Weight>\n          </Mechanical>\n        </DescriptiveAttributes>\n      </Variant>\n      <Variant id="variant2_no_Emergency_and_no_emergency_and_sensor">\n        <Name>\n          <Locale language="en">no Em / no Em / sens</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">1st emitter no emergency, 2nd emitter no emergency, 3rd emitter is a sensor</Locale>\n        </Description>\n        <Mountings>\n          <Ceiling>\n            <Recessed recessedDepth="11" />\n          </Ceiling>\n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="ModelGeometry">\n            <EmitterReference emitterId="em-m-n">\n              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-w-n">\n              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-s">\n              <EmitterObjectExternalName>Sensor</EmitterObjectExternalName>\n            </EmitterReference>\n          </ModelGeometryReference>\n        </Geometry>\n        <DescriptiveAttributes>\n          <Mechanical>\n            <Weight>0.479</Weight>\n          </Mechanical>\n        </DescriptiveAttributes>\n      </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,i.jsx)("a",{href:"https://github.com/globallightingdata/examples/tree/master/SLV%20-%20Tria%202%20with%20sensor",target:"_blank",children:"SLV - Tria 2 with sensor"})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);