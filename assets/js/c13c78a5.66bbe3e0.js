"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[5254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),p=i,g=s["".concat(d,".").concat(p)]||s[p]||u[p]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Minimal LDC",sidebar_label:"Minimal LDC"},o=void 0,l={unversionedId:"getting-started/examples/minimalldc",id:"getting-started/examples/minimalldc",title:"Minimal LDC",description:"Introduction",source:"@site/docs/getting-started/examples/minimalldc.md",sourceDirName:"getting-started/examples",slug:"/getting-started/examples/minimalldc",permalink:"/docs/getting-started/examples/minimalldc",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/getting-started/examples/minimalldc.md",tags:[],version:"current",frontMatter:{title:"Minimal LDC",sidebar_label:"Minimal LDC"},sidebar:"sidebar",previous:{title:"Minimal Geo",permalink:"/docs/getting-started/examples/minimalgeo"},next:{title:"Philips SP542P",permalink:"/docs/getting-started/examples/philips"}},d={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Explanation",id:"explanation",level:3},{value:"product.xml",id:"productxml",level:3},{value:"Download",id:"download",level:3}],m={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This example demonstrates very simple minimal GLDF file implementation with no 3D geometry. The only file reference is the light distribution curve."),(0,i.kt)("p",null,"Download the example here: ",(0,i.kt)("a",{href:"https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC",target:"_blank"},"Minimal LDC.gldf")),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The setup of the file is very straightforward. It contains no 3D geometry and only a simple light distribution curve."),(0,i.kt)("li",{parentName:"ul"},"There is only one file reference called ldtFile reference by one photometry called photometry01."),(0,i.kt)("li",{parentName:"ul"},"There is one light source and one emitter. The emitter references the light source and the photometry."),(0,i.kt)("li",{parentName:"ul"},"The geometry has the simplest possible structure. It only contains the reference to the light emitter (line 55)."),(0,i.kt)("li",{parentName:"ul"},"Because no geometry is defined, Relux and DIALux will use the LDT file to determine the geometry for their respective applications.")),(0,i.kt)("h3",{id:"productxml"},"product.xml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{16-36,55} showLineNumbers","{16-36,55}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">\n  <Header>\n    <Manufacturer>Philips Lighting</Manufacturer>\n    <FormatVersion major="1" minor="0" pre-release="3" />\n    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>\n    <UniqueGldfId>d0c97760-6e30-4ed7-ad3e-7ce11d105438</UniqueGldfId>\n  </Header>\n  <GeneralDefinitions>\n    <Files>\n      <File id="ldtFile" contentType="ldc/eulumdat" \n            type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>\n    </Files>\n    <Photometries>\n      <Photometry id="photometry01">\n        <PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>\n      </Photometry>\n    </Photometries>\n    <LightSources>\n      <FixedLightSource id="lightSource01">\n        <Name>\n          <Locale language="de">LED</Locale>\n        </Name>\n        <RatedInputPower>47.5</RatedInputPower>\n      </FixedLightSource>\n    </LightSources>\n    <Emitters>\n      <Emitter id="emitter01">\n        <FixedLightEmitter>\n          <PhotometryReference photometryId="photometry01" />\n          <LightSourceReference fixedLightSourceId="lightSource01" />\n          <RatedLuminousFlux>6600</RatedLuminousFlux>\n        </FixedLightEmitter>\n      </Emitter>\n    </Emitters>\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n      <UniqueProductId>86acec52-1dab-4f14-874e-d9251c5c093f</UniqueProductId>\n      <ProductNumber>\n        <Locale language="de">SP542P</Locale>\n      </ProductNumber>\n      <Name>\n        <Locale language="de">Pendelleuchte SP542P LED66S/940</Locale>\n      </Name>\n    </ProductMetaData>\n    <Variants>\n      <Variant id="variant1">\n        <Name>\n          <Locale language="de">Variante 1</Locale>\n        </Name>\n        <Geometry>\n          <EmitterReference emitterId="emitter01" />\n        </Geometry>\n      </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n')),(0,i.kt)("h3",{id:"download"},"Download"),(0,i.kt)("a",{href:"https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC",target:"_blank"},"Minimal LDC.gldf"))}u.isMDXComponent=!0}}]);