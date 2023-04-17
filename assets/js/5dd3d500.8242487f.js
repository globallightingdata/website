"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[4576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"GLDF Release v1.0.rc2",description:"GLDF v1.0 releace candidate 2",author:"Alex",author_title:"Developer DIAL",author_url:"https://github.com/Kurpanik",author_image_url:"https://avatars.githubusercontent.com/u/71767601?s=460",hide_table_of_contents:!1,tags:["gldf","release"]},i=void 0,l={permalink:"/blog/2023/04/17/release-gldf-rc2",editUrl:"https://github.com/globallightingdata/website/tree/master/blog/2023-04-17-release-gldf-rc2.md",source:"@site/blog/2023-04-17-release-gldf-rc2.md",title:"GLDF Release v1.0.rc2",description:"GLDF v1.0 releace candidate 2",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"gldf",permalink:"/blog/tags/gldf"},{label:"release",permalink:"/blog/tags/release"}],readingTime:1.55,hasTruncateMarker:!0,authors:[{name:"Alex",title:"Developer DIAL",url:"https://github.com/Kurpanik",imageURL:"https://avatars.githubusercontent.com/u/71767601?s=460"}],frontMatter:{title:"GLDF Release v1.0.rc2",description:"GLDF v1.0 releace candidate 2",author:"Alex",author_title:"Developer DIAL",author_url:"https://github.com/Kurpanik",author_image_url:"https://avatars.githubusercontent.com/u/71767601?s=460",hide_table_of_contents:!1,tags:["gldf","release"]},nextItem:{title:"L3D Editor 1.0 - Final Release",permalink:"/blog/2023/03/09/release-l3d-editor"}},s={authorsImageUrls:[void 0]},d=[{value:"Mandatory breaking changes",id:"mandatory-breaking-changes",level:2},{value:"<code>Header</code>",id:"header",level:3},{value:"<code>ProducMetaData</code>",id:"producmetadata",level:3},{value:"Possible breaking changes",id:"possible-breaking-changes",level:2},{value:"<code>SensorEmitter</code>",id:"sensoremitter",level:3},{value:"<code>ProductSeries</code>",id:"productseries",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On the way to the final version 1.0 of the GLDF, we have published the next release candidate based on feedback. As always, the changelog can be found on Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.2"},"GLDF v1.0.rc2"),"."),(0,a.kt)("p",null,"Since this is still a pre-release version, we have taken the opportunity to include necessary breaking changes that we would like to avoid in the final version. Below is a short guide on how to migrate existing GLDFs from rc1 to the new rc2 version."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Some of the changes affect every GLDF. Others might require adaptation:"),(0,a.kt)("h2",{id:"mandatory-breaking-changes"},"Mandatory breaking changes"),(0,a.kt)("h3",{id:"header"},(0,a.kt)("inlineCode",{parentName:"h3"},"Header")),(0,a.kt)("p",null,"The mandatory structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Header")," element has changed as follows. To adapt a GLDF as quickly as possible, simply copy the following XML and replace the contents with your data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Header>\n  <Manufacturer>Manufacturer XY</Manufacturer>\n  <FormatVersion major="1" minor="0" pre-release="2"/>\n  <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n  <GldfCreationTimeCode>2023-04-17T14:00:00Z</GldfCreationTimeCode>\n  <UniqueGldfId>INSERT UUID/GUID HERE - SHOULD ALWAYS BE UNIQUE</UniqueGldfId>\n</Header>\n')),(0,a.kt)("p",null,"Otherwise, adapt your elements and their order according to the ",(0,a.kt)("a",{parentName:"p",href:"pathname:///xsd-reference/index_Header.html"},(0,a.kt)("strong",{parentName:"a"},"XSD-Reference"))),(0,a.kt)("h3",{id:"producmetadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"ProducMetaData")),(0,a.kt)("p",null,"Add to your ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductMetaData")," an ",(0,a.kt)("inlineCode",{parentName:"p"},"UniqueProductId")," as first child element."),(0,a.kt)("p",null,"The topic ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/#unique-ids"},(0,a.kt)("strong",{parentName:"a"},"Unique IDs"))," describes the differences between ",(0,a.kt)("inlineCode",{parentName:"p"},"UniqueGldfId")," in the Header and ",(0,a.kt)("inlineCode",{parentName:"p"},"UniqueProductId")," inside ProducMetaData. Containig only mandatory fields, ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducMetaData")," should now look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'<ProductMetaData>\n  <UniqueProductId>INSERT GUID HERE</UniqueProductId>\n  <ProductNumber>\n    <Locale language="en">LightNnumber</Locale>\n    <Locale language="de">Produktnummer</Locale>\n  </ProductNumber>\n  <Name>\n    <Locale language="en">Product name</Locale>\n    <Locale language="de">Produktname</Locale>\n  </Name>\n</ProductMetaData>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"possible-breaking-changes"},"Possible breaking changes"),(0,a.kt)("h3",{id:"sensoremitter"},(0,a.kt)("inlineCode",{parentName:"h3"},"SensorEmitter")),(0,a.kt)("p",null,"Should you use ",(0,a.kt)("inlineCode",{parentName:"p"},"Sensor")," elements in your GLDF, replace references in ",(0,a.kt)("inlineCode",{parentName:"p"},"Emitter")," as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers {13-15}",showLineNumbers:!0,"{13-15}":!0},'<GeneralDefinitions>\n  <Files>\n    <File id="sensorFile" contentType="sensor/sensldt" \n          type="localFileName">sens.ldt</File>\n  </Files>\n  <Sensors>\n    <Sensor id="sensor">\n      <SensorFileReference fileId="sensorFile" />\n    </Sensor>\n  </Sensors>\n  <Emitters>\n    <Emitter id="sensorEmitter">\n      <SensorEmitter>\n        <SensorReference sensorId="sensor" />\n      </SensorEmitter>\n    </Emitter>\n  </Emitters>\n</GeneralDefinitions>\n')),(0,a.kt)("h3",{id:"productseries"},(0,a.kt)("inlineCode",{parentName:"h3"},"ProductSeries")),(0,a.kt)("p",null,"Should you use ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducSeries")," elements. Either in ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductMetaData")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Variants"),", add an unique ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute to them"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers {4}",showLineNumbers:!0,"{4}":!0},'<ProductDefinitions>\n  <ProductMetaData>\n    \x3c!-- Content skipped --\x3e\n    <ProductSerie id="Add-Unique-ID-Here">\n      <Name>\n        <Locale language="en">Produkt family</Locale>\n      </Name>\n    </ProductSerie>\n  </ProductMetaData>\n</ProductDefinitions>\n')))}p.isMDXComponent=!0}}]);