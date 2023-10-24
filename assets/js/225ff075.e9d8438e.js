"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[7439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),h=o,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?i.createElement(d,a(a({ref:t},p),{},{components:n})):i.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<r;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=n(7462),o=(n(7294),n(3905));const r={title:"Photometries",sidebar_label:"Photometries"},a=void 0,l={unversionedId:"structure/photometries",id:"structure/photometries",title:"Photometries",description:"Description",source:"@site/docs/structure/photometries.md",sourceDirName:"structure",slug:"/structure/photometries",permalink:"/docs/structure/photometries",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/structure/photometries.md",tags:[],version:"current",frontMatter:{title:"Photometries",sidebar_label:"Photometries"},sidebar:"sidebar",previous:{title:"Sensors",permalink:"/docs/structure/sensors"},next:{title:"Spectrums",permalink:"/docs/structure/spectrums"}},s={},m=[{value:"Description",id:"description",level:2},{value:"Location in XSD",id:"location-in-xsd",level:2},{value:"XSD description",id:"xsd-description",level:2},{value:"XML example",id:"xml-example",level:2},{value:"Referencing a photometry",id:"referencing-a-photometry",level:2},{value:"Photometry MetaData",id:"photometry-metadata",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Photometries")," is the third child-element of ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneralDefinitions")," - the part in the XML where ",(0,o.kt)("strong",{parentName:"p"},"global and reusable")," elements are defined (imagine them as the building blocks of each luminaire). Probably most GLDF will contain one or more photometries. However, the definition of photometries is ",(0,o.kt)("strong",{parentName:"p"},"optional"),"."),(0,o.kt)("p",null,"First of all, a single ",(0,o.kt)("inlineCode",{parentName:"p"},"Photometry")," element references a ",(0,o.kt)("a",{parentName:"p",href:"/docs/structure/files"},(0,o.kt)("strong",{parentName:"a"},"File"))," element which describes the location of the ldc file (.ies/.ldt) itself. Furthermore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Photometry")," element ",(0,o.kt)("strong",{parentName:"p"},"can")," contain various additional ",(0,o.kt)("a",{parentName:"p",href:"#photometry-metadata"},(0,o.kt)("strong",{parentName:"a"},"metadata"))," to complement the ldc file."),(0,o.kt)("h2",{id:"location-in-xsd"},"Location in XSD"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Photometries in XSD",src:n(304).Z,width:"586",height:"897"})),(0,o.kt)("h2",{id:"xsd-description"},"XSD description"),(0,o.kt)("img",{src:"/img/docs/structure/photometries-xsd.webp",alt:"Photometries in XSD",width:"750"}),(0,o.kt)("h2",{id:"xml-example"},"XML example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{9-13} showLineNumbers","{9-13}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header/>\n  <GeneralDefinitions>\n    <Files>\n      <File id="photometryFile" contentType="ldc/ies" type="localFileName">photometryFileName.ldt</File>\n    </Files>\n    <Photometries>\n      <Photometry id="photometry1">\n        <PhotometryFileReference fileId="photometryFile" />\n      </Photometry>\n    </Photometries>\n  </GeneralDefinitions>\n  <ProductDefinitions/>\n</Root>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Photometry")," Element above describes a single photometry with only ",(0,o.kt)("strong",{parentName:"p"},"mandatory")," content. It..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"references")," itself the ldc ",(0,o.kt)("inlineCode",{parentName:"li"},"File")," element with ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," ",(0,o.kt)("em",{parentName:"li"},"photometryFile")," (line 6 + 10)"),(0,o.kt)("li",{parentName:"ul"},"can be ",(0,o.kt)("strong",{parentName:"li"},"referenced")," in subsequent elements via ",(0,o.kt)("em",{parentName:"li"},"photometry1")," (its ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," attribute, line 9)"),(0,o.kt)("li",{parentName:"ul"},"provides no optional ",(0,o.kt)("strong",{parentName:"li"},"metadata")," (see below)")),(0,o.kt)("p",null,"Its simply the ",(0,o.kt)("strong",{parentName:"p"},"definition of a ldc file as a photometry")," for further usage in the description of a luminare."),(0,o.kt)("h2",{id:"referencing-a-photometry"},"Referencing a photometry"),(0,o.kt)("p",null,"Once declared, all photometries can be referenced in subsequent XML elements via their ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute ",(0,o.kt)("strong",{parentName:"p"},"one or several")," times."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{10,21} showLineNumbers","{10,21}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header/>\n  <GeneralDefinitions>\n    <Files>\n      <File id="photometryFile" contentType="ldc/ies" type="localFileName">MyLightSource_50W-E27.ldt</File>\n    </Files>\n    <Photometries>\n      <Photometry id="photometry1">\n        <PhotometryFileReference fileId="photometryFile" />\n      </Photometry>\n    </Photometries>\n    <LightSources>\n      <ChangeableLightSource id="lightSource1">\n        <Name>\n          <Locale language="en">My LightSource 50W E27</Locale>\n        </Name>\n        <RatedInputPower>50</RatedInputPower>\n        <RatedLuminousFlux>400</RatedLuminousFlux>\n        <PhotometryReference photometryId="photometry1"/>\n      </ChangeableLightSource>\n    </LightSources>\n  </GeneralDefinitions>\n  <ProductDefinitions/>\n</Root>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Photometry")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," ",(0,o.kt)("em",{parentName:"p"},"photometry1")," (line 9) is referenced once inside the subsequent element ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeableLightSource")," and defines the light source's ",(0,o.kt)("strong",{parentName:"p"},"light distribution curve")," (line 20)."),(0,o.kt)("h2",{id:"photometry-metadata"},"Photometry MetaData"),(0,o.kt)("p",null,"It is possible to ",(0,o.kt)("strong",{parentName:"p"},"optionally")," specify various metadata inside a photometry element to ",(0,o.kt)("strong",{parentName:"p"},"complement")," the content of the somewhat limited ldc file formats like IES and Eulumdat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{12-36} showLineNumbers","{12-36}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header/>\n  <GeneralDefinitions>\n    <Files>\n      <File id="photometryFile" contentType="ldc/ies" type="localFileName">photometryFileName.ldt</File>\n    </Files>\n    <Photometries>\n      <Photometry id="photometry1">\n        <PhotometryFileReference fileId="photometryFile" />\n            <DescriptivePhotometry>\n                <LuminaireLuminance>100</LuminaireLuminance>\n                <LightOutputRatio>0.5</LightOutputRatio>\n                <LuminousEfficacy>0.5</LuminousEfficacy>\n                <DownwardFluxFraction>0.5</DownwardFluxFraction>\n                <DownwardLightOutputRatio>0.5</DownwardLightOutputRatio>\n                <UpwardLightOutputRatio>0.5</UpwardLightOutputRatio>\n                <TenthPeakDivergence>\n                    <C0-C180>100</C0-C180>\n                    <C90-C270>100</C90-C270>\n                </TenthPeakDivergence>\n                <HalfPeakDivergence>\n                    <C0-C180>100</C0-C180>\n                    <C90-C270>100</C90-C270>\n                </HalfPeakDivergence>\n                <PhotometricCode>830/359</PhotometricCode>\n                <CIE-FluxCode>69 98 100 100 65</CIE-FluxCode>\n                <CutOffAngle>100</CutOffAngle>\n                <UGR-4H8H-70-50-20-LQ>\n                    <X>100</X>\n                    <Y>100</Y>\n                </UGR-4H8H-70-50-20-LQ>\n                <IESNA-LightDistributionDefinition>Type V Circular</IESNA-LightDistributionDefinition>\n                <LightDistributionBUG-Rating>LZ1</LightDistributionBUG-Rating>\n            </DescriptivePhotometry>\n      </Photometry>\n    </Photometries>\n  </GeneralDefinitions>\n  <ProductDefinitions/>\n</Root>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LuminaireLuminance"),(0,o.kt)("br",{parentName:"li"}),"Average luminance of the luminous surface (Unit: cd/m\xb2). See also EN 13032-1:2012"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LightOutputRatio"),(0,o.kt)("br",{parentName:"li"}),"Ratio of the luminous flux of the luminaire to the sum of the individual luminous fluxes of its conventional light source(s). According to EN 12665:2018"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LuminousEfficacy"),(0,o.kt)("br",{parentName:"li"}),"Quotient of the luminous flux emitted by the luminaire and the power absorbed by the light source and associated circuits of the luminaire"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DownwardFluxFraction"),(0,o.kt)("br",{parentName:"li"}),"Ratio of the downward flux to the total flux of the luminaire"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DownwardLightOutputRatio"),(0,o.kt)("br",{parentName:"li"}),"Ratio of the downward luminous flux of the luminaire to the sum of the individual luminous fluxes of the its light source(s). Not valid for absolute photometry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UpwardLightOutputRatio"),(0,o.kt)("br",{parentName:"li"}),"Ratio of the upward luminous flux of the luminaire to the sum of the individual luminous fluxes of the its light source(s). Not valid for absolute photometry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TenthPeakDivergence"),(0,o.kt)("br",{parentName:"li"}),"Angle of the beam center to the point where the luminous intensity is reduced to one tenth. See also EN 61341:Ed.2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HalfPeakDivergence"),(0,o.kt)("br",{parentName:"li"}),"Angle of the beam center to the point where the luminous intensity is reduced to half. See also EN 61341:Ed.2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PhotometricCode"),(0,o.kt)("br",{parentName:"li"}),"Photometric code consists out of CRI, CCT, initial color variation (MacAdam ellipse steps), color variation through life (MacAdam ellipse steps) and lumen maintenance value (Lx). E.g. 830/359"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CIE-FluxCode"),(0,o.kt)("br",{parentName:"li"}),"Set of values: flux triplet, downward flux fraction and light output ratio"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CutOffAngle"),(0,o.kt)("br",{parentName:"li"}),"Angle, measured up from nadir, between the vertical axis and the first line of sight at which the light sources and the surfaces of high luminance are not visible"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UGR-4H8H-70-50-20-LQ"),(0,o.kt)("br",{parentName:"li"}),"UGR table value of a 4H8H room and degrees of reflection 70/50/20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IESNA-LightDistributionDefinition"),(0,o.kt)("br",{parentName:"li"}),"US-Types of luminaire light distribution according to IESNA for street lighting. Please note: These types are used in IES photometry files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LightDistributionBUG-Rating"),(0,o.kt)("br",{parentName:"li"}),"Backlight, Uplight and Glare known as BUG classification. According to IDA/IESNA BUG evaluates the light output of outdoor lights regarding to glare, light pollution and light trespass")))}c.isMDXComponent=!0},304:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photometries-hierarchy-ed79eedb507adc6fb1c0996fee5af896.webp"}}]);