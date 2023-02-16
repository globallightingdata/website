"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[2905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Equipments",sidebar_label:"Equipments"},o=void 0,l={unversionedId:"structure/equipments",id:"structure/equipments",title:"Equipments",description:"Description",source:"@site/docs/structure/equipments.md",sourceDirName:"structure",slug:"/structure/equipments",permalink:"/docs/structure/equipments",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/structure/equipments.md",tags:[],version:"current",frontMatter:{title:"Equipments",sidebar_label:"Equipments"},sidebar:"sidebar",previous:{title:"Control Gears",permalink:"/docs/structure/control-gears"},next:{title:"Emitters",permalink:"/docs/structure/emitters"}},s={},p=[{value:"Description",id:"description",level:2},{value:"XSD description",id:"xsd-description",level:3},{value:"Location in XSD",id:"location-in-xsd",level:2},{value:"XML example",id:"xml-example",level:2},{value:"Referencing an equipment",id:"referencing-an-equipment",level:2},{value:"Equipment MetaData",id:"equipment-metadata",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Eqipments")," is the seventh child-element of ",(0,i.kt)("inlineCode",{parentName:"p"},"GeneralDefinitions")," - the part in the XML where ",(0,i.kt)("strong",{parentName:"p"},"global and reusable")," elements are defined (imagine them as the building blocks of each luminaire)."),(0,i.kt)("p",null,"Equipments primarily usage is to depict ",(0,i.kt)("strong",{parentName:"p"},"luminaires with classic lamps")," (i.e. not LEDs). They combine a classic lamp and optionally a control gear together with the required input power into one single unit. Which can be referenced later on:"),(0,i.kt)("h3",{id:"xsd-description"},"XSD description"),(0,i.kt)("img",{src:"/img/docs/structure/equipments-xsd.webp",alt:"Equipment in XSD",width:"540"}),(0,i.kt)("p",null,"In addition to the mandatory ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute for later reference, ",(0,i.kt)("inlineCode",{parentName:"p"},"Equipment"),"s ",(0,i.kt)("strong",{parentName:"p"},"can")," contain some additional ",(0,i.kt)("a",{parentName:"p",href:"#equipment-metadata"},(0,i.kt)("strong",{parentName:"a"},"metadata")),". However, the whole definition of equipments is ",(0,i.kt)("strong",{parentName:"p"},"optional"),". If no ",(0,i.kt)("inlineCode",{parentName:"p"},"lightSourceCount")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"controlGearCount"),' is provided, the value "1" is assumed for both.'),(0,i.kt)("p",null,"Once definied, equipments can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/structure/emitters"},"referenced in ",(0,i.kt)("inlineCode",{parentName:"a"},"Emitters")),". There their usage is to define ",(0,i.kt)("strong",{parentName:"p"},"further details for a changeable light emitter"),", which otherwise would consist of a photometry only instead:"),(0,i.kt)("img",{src:"/img/docs/structure/equipments-use-in-emitters.webp",alt:"Use in Emitter",width:"800"}),(0,i.kt)("h2",{id:"location-in-xsd"},"Location in XSD"),(0,i.kt)("img",{src:"/img/docs/structure/equipments-hierarchy.webp",alt:"Equipments in XSD",width:"550"}),(0,i.kt)("h2",{id:"xml-example"},"XML example"),(0,i.kt)("p",null,"Below you can find an example definition of an equipment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{15-21} showLineNumbers","{15-21}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">\n  <Header />\n  <GeneralDefinitions>\n    <LightSources>\n      <ChangeableLightSource id="lightSource1">\n        \x3c!-- Content skipped for clarity --\x3e\n      </ChangeableLightSource>\n    </LightSources>\n    <ControlGears>\n      <ControlGear id="controlGear1">\n        \x3c!-- Optional, content skipped for clarity --\x3e\n      </ControlGear>\n    </ControlGears>\n    <Equipments>\n      <Equipment id="equipment1">\n        <LightSourceReference changeableLightSourceId="lightSource1" />\n        <ControlGearReference controlGearId="controlGear1" />\n        <RatedInputPower>100</RatedInputPower>\n      </Equipment>\n    </Equipments>\n  </GeneralDefinitions>\n  <ProductDefinitions />\n</Root>\n')),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Equipment")," element must contain the ",(0,i.kt)("strong",{parentName:"p"},"mandatory")," ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute, a ",(0,i.kt)("inlineCode",{parentName:"p"},"LightSourceReference")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"RatedInputPower")," element. This ",(0,i.kt)("inlineCode",{parentName:"p"},"Equipment")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"can be ",(0,i.kt)("strong",{parentName:"li"},"referenced")," in subsequent elements via ",(0,i.kt)("em",{parentName:"li"},"equipment1")," (",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute, line 18)"),(0,i.kt)("li",{parentName:"ul"},"provide no optional ",(0,i.kt)("strong",{parentName:"li"},"metadata")," (see below)")),(0,i.kt)("h2",{id:"referencing-an-equipment"},"Referencing an equipment"),(0,i.kt)("p",null,"Once declared, all equipments can be referenced in subsequent XML elements via their ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute ",(0,i.kt)("strong",{parentName:"p"},"one or several")," times."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{16,25} showLineNumbers","{16,25}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">\n  <Header />\n  <GeneralDefinitions>\n    <LightSources>\n      <ChangeableLightSource id="lightSource1">\n        \x3c!-- Content skipped for clarity --\x3e\n      </ChangeableLightSource>\n    </LightSources>\n    <ControlGears>\n      <ControlGear id="controlGear1">\n        \x3c!-- Content skipped for clarity --\x3e\n      </ControlGear>\n    </ControlGears>\n    <Equipments>\n      <Equipment id="equipment1">\n        <LightSourceReference changeableLightSourceId="lightSource1" />\n        <ControlGearReference controlGearId="controlGear1" />\n        <RatedInputPower>100</RatedInputPower>\n      </Equipment>\n    </Equipments>\n    <Emitters>\n      <Emitter id="emitter1">\n        <ChangeableLightEmitter>\n          <EquipmentReference equipmentId="equipment1" />\n          \x3c!-- Further content skipped for clarity --\x3e\n        </ChangeableLightEmitter>\n      </Emitter>\n    </Emitters>\n  </GeneralDefinitions>\n  <ProductDefinitions />\n</Root>\n')),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Equipment")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("em",{parentName:"p"},"equipment11")," (line 18) is ",(0,i.kt)("strong",{parentName:"p"},"referenced")," once inside the element ",(0,i.kt)("inlineCode",{parentName:"p"},"Emitter")," and defines the ",(0,i.kt)("strong",{parentName:"p"},"luminaire's set of lamp and control gear inside a light emitter")," (line 27)."),(0,i.kt)("h2",{id:"equipment-metadata"},"Equipment MetaData"),(0,i.kt)("p",null,"It is possible to ",(0,i.kt)("strong",{parentName:"p"},"optionally")," specify some metadata inside equipment to ",(0,i.kt)("strong",{parentName:"p"},"complement")," its description with further details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{18,20-21} showLineNumbers","{18,20-21}":!0,showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">\n  <Header />\n  <GeneralDefinitions>\n    <LightSources>\n      <ChangeableLightSource id="lightSource1">\n        \x3c!-- Content skipped for clarity --\x3e\n      </ChangeableLightSource>\n    </LightSources>\n    <ControlGears>\n      <ControlGear id="controlGear1">\n        \x3c!-- Content skipped for clarity --\x3e\n      </ControlGear>\n    </ControlGears>\n    <Equipments>\n      <Equipment id="equipment1">\n        <LightSourceReference changeableLightSourceId="lightSource1" />\n        <ControlGearReference controlGearId="controlGear1" />\n        <RatedInputPower>100</RatedInputPower>\n        <EmergencyBallastLumenFactor>0.1</EmergencyBallastLumenFactor>\n        <EmergencyRatedLuminousFlux>8</EmergencyRatedLuminousFlux>\n      </Equipment>\n    </Equipments>\n  </GeneralDefinitions>\n  <ProductDefinitions />\n</Root>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ControlGearReference"),(0,i.kt)("br",{parentName:"li"}),"Reference to a ",(0,i.kt)("inlineCode",{parentName:"li"},"ControlGear")," element defined under GeneralDefinitions/ControlGears"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EmergencyBallastLumenFactor"),(0,i.kt)("br",{parentName:"li"}),"Ratio of the emergency luminous flux of the referenced light source (supplied by the referenced control gear) to the luminous flux of the same light source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EmergencyRatedLuminousFlux"),(0,i.kt)("br",{parentName:"li"}),"Emergency luminous flux of the referenced light source. Supplied by the referenced control gear (Unit: lumen)")))}m.isMDXComponent=!0}}]);