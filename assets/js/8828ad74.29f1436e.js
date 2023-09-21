"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[5087],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(t),g=i,p=s["".concat(c,".").concat(g)]||s[g]||u[g]||o;return t?r.createElement(p,a(a({ref:n},d),{},{components:t})):r.createElement(p,a({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(7462),i=(t(7294),t(3905));const o={title:"SLV - Tria 2 with sensor",sidebar_label:"SLV - Tria 2 with sensor"},a=void 0,l={unversionedId:"getting-started/examples/slv",id:"getting-started/examples/slv",title:"SLV - Tria 2 with sensor",description:"Introduction",source:"@site/docs/getting-started/examples/slv.md",sourceDirName:"getting-started/examples",slug:"/getting-started/examples/slv",permalink:"/docs/getting-started/examples/slv",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/getting-started/examples/slv.md",tags:[],version:"current",frontMatter:{title:"SLV - Tria 2 with sensor",sidebar_label:"SLV - Tria 2 with sensor"},sidebar:"sidebar",previous:{title:"Philips SP542P",permalink:"/docs/getting-started/examples/philips"},next:{title:"Trilux Belviso S CDP",permalink:"/docs/getting-started/examples/trilux"}},c={},m=[{value:"Introduction",id:"introduction",level:3},{value:"product.xml",id:"productxml",level:3},{value:"Download",id:"download",level:3}],d={toc:m},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This example demonstrates a GLDF file with an L3D model, two light outputs, and an integrated sensor. Everything is put together via the geometry node."),(0,i.kt)("img",{src:"/img/docs/getting-started/product_slv.webp",alt:"SLV NEW TRIA 2"}),(0,i.kt)("img",{src:"/img/docs/getting-started/product_slv_3d.webp",alt:"SLV NEW TRIA 2"}),(0,i.kt)("h3",{id:"productxml"},"product.xml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">\n  <Header>\n    <Manufacturer>SLV</Manufacturer>\n    <CreationTimeCode>2021-05-25T14:40:00Z</CreationTimeCode>\n    <CreatedWithApplication>Keyboard</CreatedWithApplication>\n    <FormatVersion>1.0.0-rc.1</FormatVersion>\n  </Header>\n  <GeneralDefinitions>\n    <Files>\n      <File id="ldtnarrow" contentType="ldc/eulumdat" type="localFileName">narrow.ldt</File>\n      <File id="ldtmiddle" contentType="ldc/eulumdat" type="localFileName">middle.ldt</File>\n      <File id="ldtwide" contentType="ldc/eulumdat" type="localFileName">wide.ldt</File>\n      <File id="geometryFile" contentType="geo/l3d" type="localFileName">example_007.l3d</File>\n      <File id="productImage" contentType="image/png" type="localFileName">NEW TRIA 2.png</File>\n      <File id="sensor" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>\n    </Files>\n    <Sensors>\n      <Sensor id="sensor1">\n        <SensorFileReference fileId="sensor"/>\n      </Sensor>\n    </Sensors>\n    <Photometries>\n      <Photometry id="LightEmitterNarrow">\n        <PhotometryFileReference fileId="ldtnarrow"/>\n        <DescriptivePhotometry>\n          <LuminousEfficacy>89</LuminousEfficacy>\n          <CIE-FluxCode>98 100 100 100 100</CIE-FluxCode>\n        </DescriptivePhotometry>\n      </Photometry>\n      <Photometry id="LightEmitterMiddle">\n        <PhotometryFileReference fileId="ldtmiddle"/>\n        <DescriptivePhotometry>\n          <LuminousEfficacy>96</LuminousEfficacy>\n          <CIE-FluxCode>93 98 99 100 100</CIE-FluxCode>\n        </DescriptivePhotometry>\n      </Photometry>\n      <Photometry id="LightEmitterWide">\n        <PhotometryFileReference fileId="ldtwide"/>\n        <DescriptivePhotometry>\n          <LuminousEfficacy>96</LuminousEfficacy>\n          <CIE-FluxCode>69 95 99 100 100</CIE-FluxCode>\n        </DescriptivePhotometry>\n      </Photometry>\n    </Photometries>\n    <LightSources>\n      <FixedLightSource id="LightSource1">\n        <Name>\n          <Locale language="en">LED</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">LED module</Locale>\n        </Description>\n        <RatedInputPower>18</RatedInputPower>\n        <ColorInformation>\n          <ColorRenderingIndex>80</ColorRenderingIndex>\n          <CorrelatedColorTemperature>4000</CorrelatedColorTemperature>\n          <InitialColorTolerance>3 SDCM</InitialColorTolerance>\n        </ColorInformation>\n      </FixedLightSource>\n      <FixedLightSource id="LightSource2">\n        <Name>\n          <Locale language="en">LED</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">LED module</Locale>\n        </Description>\n        <RatedInputPower>81</RatedInputPower>\n        <ColorInformation>\n          <ColorRenderingIndex>80</ColorRenderingIndex>\n          <CorrelatedColorTemperature>5000</CorrelatedColorTemperature>\n          <InitialColorTolerance>3 SDCM</InitialColorTolerance>\n        </ColorInformation>\n      </FixedLightSource>\n      <FixedLightSource id="LightSource3">\n        <Name>\n          <Locale language="en">LED</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">LED module</Locale>\n        </Description>\n        <RatedInputPower>81</RatedInputPower>\n        <ColorInformation>\n          <ColorRenderingIndex>80</ColorRenderingIndex>\n          <CorrelatedColorTemperature>3000</CorrelatedColorTemperature>\n          <InitialColorTolerance>3 SDCM</InitialColorTolerance>\n        </ColorInformation>\n      </FixedLightSource>\n    </LightSources>\n    <ControlGears>\n      <ControlGear id="ControlGear1">\n        <Name>\n          <Locale language="en">Control Gear1 1</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">Control Gear1 1</Locale>\n        </Description>\n      </ControlGear>\n    </ControlGears>\n    <Emitters>\n      <Emitter id="em-n-n">\n        <FixedLightEmitter emergencyBehaviour="None">\n          <PhotometryReference photometryId="LightEmitterNarrow"/>\n          <LightSourceReference fixedLightSourceId="LightSource1"/>\n          <RatedLuminousFlux>1600</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-m-n">\n        <FixedLightEmitter emergencyBehaviour="None">\n          <PhotometryReference photometryId="LightEmitterMiddle"/>\n          <LightSourceReference fixedLightSourceId="LightSource2"/>\n          <RatedLuminousFlux>7800</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-w-n">\n        <FixedLightEmitter emergencyBehaviour="None">\n          <PhotometryReference photometryId="LightEmitterWide"/>\n          <LightSourceReference fixedLightSourceId="LightSource3"/>\n          <RatedLuminousFlux>7800</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-w-c">\n        <FixedLightEmitter emergencyBehaviour="Combined">\n          <PhotometryReference photometryId="LightEmitterWide"/>\n          <LightSourceReference fixedLightSourceId="LightSource3"/>\n          <RatedLuminousFlux>7800</RatedLuminousFlux>\n          <EmergencyRatedLuminousFlux>100</EmergencyRatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-w-o">\n        <FixedLightEmitter emergencyBehaviour="EmergencyOnly">\n          <PhotometryReference photometryId="LightEmitterWide"></PhotometryReference>\n          <LightSourceReference fixedLightSourceId="LightSource3"></LightSourceReference>\n          <RatedLuminousFlux>100</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n      <Emitter id="em-s">\n        <Sensor sensorId="sensor1"/>\n      </Emitter>\n    </Emitters>\n    <Geometries>\n      <ModelGeometry id="ModelGeometry">\n        <GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>\n      </ModelGeometry>\n    </Geometries>\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <ProductNumber>\n        <Locale language="en">111352</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="en">NEW TRIA 2</Locale>\n      </Name>\n      <Description>\n        <Locale language="de">Einbauleuchte, zweiflammig, QR-C51, rechteckig, aluminium  geb\xfcrstet, max. 100W, inkl. Clipfedern</Locale>\n        <Locale language="en">Recessed luminaire, two.....</Locale>\n      </Description>\n      <ProductSeries>\n        <ProductSerie>\n          <Name>\n            <Locale language="en">TRIA</Locale>\n          </Name>\n          <Hyperlinks>\n            <Hyperlink href="https://slv.com">Manufacturer URL</Hyperlink>\n          </Hyperlinks>\n        </ProductSerie>\n      </ProductSeries>\n      <Pictures>\n        <Image fileId="productImage" imageType="Product Picture"/>\n      </Pictures>\n      <DescriptiveAttributes>\n        <Electrical>\n          <ElectricalSafetyClass>III</ElectricalSafetyClass>\n          <IngressProtectionIPCode>IP20</IngressProtectionIPCode>\n        </Electrical>\n        <OperationsAndMaintenance>\n          <MedianUsefulLifeTimes>\n            <MedianUsefulLife>L80B50 70000h 25\xb0C</MedianUsefulLife>\n          </MedianUsefulLifeTimes>\n        </OperationsAndMaintenance>\n      </DescriptiveAttributes>\n    </ProductMetaData>\n    <Variants>\n      <Variant id="variant1_Combined_Emergency_and_no_emergency_and_no_sensor">\n        <Name>\n          <Locale language="en">comb Em / no Em / -</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">1st emitter combined emergency, 2nd emitter no emergency, no 3rd emitter</Locale>\n        </Description>\n        <Mountings>\n          <Ceiling>\n            <Recessed recessedDepth="11"/>\n          </Ceiling>\n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="ModelGeometry">\n            <EmitterReference emitterId="em-n-n">\n              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-w-c">\n              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>\n            </EmitterReference>\n          </ModelGeometryReference>\n        </Geometry>\n        <DescriptiveAttributes>\n          <Mechanical>\n            <Weight>0.379</Weight>\n          </Mechanical>\n        </DescriptiveAttributes>\n      </Variant>\n      <Variant id="variant2_no_Emergency_and_only_emergency_and_sensor">\n        <Name>\n          <Locale language="en">no Em / only Em / sens</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">1st emitter no emergency, 2nd emitter only emergency, 3rd emitter is a sensor</Locale>\n        </Description>\n        <Mountings>\n          <Ceiling>\n            <Recessed recessedDepth="11"/>\n          </Ceiling>\n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="ModelGeometry">\n            <EmitterReference emitterId="em-m-n">\n              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-w-o">\n              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-s">\n              <EmitterObjectExternalName>Sensor</EmitterObjectExternalName>\n            </EmitterReference>\n          </ModelGeometryReference>\n        </Geometry>\n        <DescriptiveAttributes>\n          <Mechanical>\n            <Weight>0.479</Weight>\n          </Mechanical>\n        </DescriptiveAttributes>\n      </Variant>\n      <Variant id="variant2_no_Emergency_and_no_emergency_and_sensor">\n        <Name>\n          <Locale language="en">no Em / no Em / sens</Locale>\n        </Name>\n        <Description>\n          <Locale language="en">1st emitter no emergency, 2nd emitter no emergency, 3rd emitter is a sensor</Locale>\n        </Description>\n        <Mountings>\n          <Ceiling>\n            <Recessed recessedDepth="11"/>\n          </Ceiling>\n        </Mountings>\n        <Geometry>\n          <ModelGeometryReference geometryId="ModelGeometry">\n            <EmitterReference emitterId="em-m-n">\n              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>\n            </EmitterReference>\n            <EmitterReference emitterId="em-w-n">\n            <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>\n          </EmitterReference>\n          <EmitterReference emitterId="em-s">\n            <EmitterObjectExternalName>Sensor</EmitterObjectExternalName>\n          </EmitterReference>\n          </ModelGeometryReference>\n        </Geometry>\n        <DescriptiveAttributes>\n          <Mechanical>\n            <Weight>0.479</Weight>\n          </Mechanical>\n        </DescriptiveAttributes>\n      </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n')),(0,i.kt)("h3",{id:"download"},"Download"),(0,i.kt)("a",{href:"https://github.com/globallightingdata/examples/tree/master/SLV%20-%20Tria%202%20with%20sensor",target:"_blank"},"SLV - Tria 2 with sensor"))}u.isMDXComponent=!0}}]);