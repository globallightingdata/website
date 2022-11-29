"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[7794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,g=d["".concat(m,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={title:"L3D Examples",sidebar_label:"Examples"},l=void 0,o={unversionedId:"geometry/l3d-examples",id:"geometry/l3d-examples",title:"L3D Examples",description:"The source and .obj files of all examples can be downloaded from the L3D Github Repository",source:"@site/docs/geometry/l3d-examples.md",sourceDirName:"geometry",slug:"/geometry/l3d-examples",permalink:"/docs/geometry/l3d-examples",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/l3d-examples.md",tags:[],version:"current",frontMatter:{title:"L3D Examples",sidebar_label:"Examples"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/geometry/l3d-intro"},next:{title:"XML Reference",permalink:"/docs/geometry/l3d-xml-reference"}},m={},s=[{value:"Example 1: Simple Cube Luminaire",id:"example-1-simple-cube-luminaire",level:2},{value:"Example 1 Cube",id:"example-1-cube",level:3},{value:"Example 1 Cube Geometry",id:"example-1-cube-geometry",level:3},{value:"Example 1 Light Emitting Object",id:"example-1-light-emitting-object",level:3},{value:"Example 1 Light Emitting Surfaces",id:"example-1-light-emitting-surfaces",level:3},{value:"Example 2: Cube Luminaire With Translated Parts",id:"example-2-cube-luminaire-with-translated-parts",level:2},{value:"Example 2 Cube",id:"example-2-cube",level:3},{value:"Example 2 Cube Geometry",id:"example-2-cube-geometry",level:3},{value:"Example 2 Light Emitting Object",id:"example-2-light-emitting-object",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The source and .obj files of all examples can be downloaded from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d/tree/master/examples"},"L3D Github Repository")),(0,a.kt)("h2",{id:"example-1-simple-cube-luminaire"},"Example 1: Simple Cube Luminaire"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d/tree/master/examples/example_000"},(0,a.kt)("em",{parentName:"a"},"(example_000)")),": Assuming in the models directory is a ",(0,a.kt)("em",{parentName:"p"},"cube.obj")," file available which contains a simple cube with the following data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Length: 0.5m"),(0,a.kt)("li",{parentName:"ul"},"Width: 0.25m"),(0,a.kt)("li",{parentName:"ul"},"Height: 0.1m")),(0,a.kt)("h3",{id:"example-1-cube"},"Example 1 Cube"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cube",src:n(3593).Z,width:"850",height:"506"})),(0,a.kt)("p",null,"We want to add a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#lightemittingobject"},(0,a.kt)("inlineCode",{parentName:"a"},"LightEmittingObject"))," at the bottom of the cube and create a luminaire with the insert point at the center of the bottom face.\nThe following example xml creates exactly what we want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Luminaire xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n        xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/l3d/l3d.xsd">\n  <Header>\n    <CreatedWithApplication>Example-Tool</CreatedWithApplication>\n    <CreationTimeCode>2021-03-03T10:10:10</CreationTimeCode>\n  </Header>\n  <GeometryDefinitions>\n    <GeometryFileDefinition id="cube" filename="cube.obj" units="m" />\n  </GeometryDefinitions>\n  <Structure>\n    <Geometry partName="luminaire">\n      <Position x="0" y="0" z="0" />\n      <Rotation x="0" y="0" z="0" />\n      <GeometryReference geometryId="cube" />\n      <LightEmittingObjects>\n        <LightEmittingObject partName="leo">\n          <Position x="0" y="0" z="0" />\n          <Rotation x="0" y="0" z="0" />\n          <Rectangle sizeX="0.5" sizeY="0.25" />\n        </LightEmittingObject>\n      </LightEmittingObjects>\n      <LightEmittingFaceAssignments>\n        <Assignment faceIndex="3" lightEmittingPartName="leo" />\n      </LightEmittingFaceAssignments>\n    </Geometry>\n  </Structure>\n</Luminaire>\n')),(0,a.kt)("h3",{id:"example-1-cube-geometry"},"Example 1 Cube Geometry"),(0,a.kt)("p",null,"To reference the ",(0,a.kt)("em",{parentName:"p"},"cube.obj")," file in the models directory, we need to create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometryfiledefinition"},(0,a.kt)("inlineCode",{parentName:"a"},"GeometryFileDefinition")),"] in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometryfiledefinition"},(0,a.kt)("inlineCode",{parentName:"a"},"GeometryFileDefinition"))," element and set the attributes. The ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute can freely be chosen but must start with a letter and must be unique among all ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometryfiledefinition"},(0,a.kt)("inlineCode",{parentName:"a"},"GeometryFileDefinition"))," elements in the XML file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"filename")," has to be ",(0,a.kt)("inlineCode",{parentName:"p"},"cube.obj")," without the models directory path. Sinse the ",(0,a.kt)("inlineCode",{parentName:"p"},"cube.obj")," file coordinates are in meters, we neet to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"units")," attribute to m."),(0,a.kt)("p",null,"After that we can create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometry"},(0,a.kt)("inlineCode",{parentName:"a"},"Geometry"))," element in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#structure"},(0,a.kt)("inlineCode",{parentName:"a"},"Structure"))," element. The ",(0,a.kt)("inlineCode",{parentName:"p"},"partName")," also can be chosen freely but must be unique among all ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometry"},(0,a.kt)("inlineCode",{parentName:"a"},"Geometry")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#joint"},(0,a.kt)("inlineCode",{parentName:"a"},"Joint"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#lightemittingobject"},(0,a.kt)("inlineCode",{parentName:"a"},"LightEmittingObject"))," elements, and must also start with a letter."),(0,a.kt)("p",null,"As we see the cube is already placed correctly, so we don't need any translation or rotation of the geometry in this example."),(0,a.kt)("p",null,"To tell that this geometry element has to use the ",(0,a.kt)("em",{parentName:"p"},"cube.obj")," as gometry source, we need to create a reference to the defined ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometryfiledefinition"},(0,a.kt)("inlineCode",{parentName:"a"},"GeometryFileDefinition")),". We do that by creating a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometryreference"},(0,a.kt)("inlineCode",{parentName:"a"},"GeometryReference"))," element and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"geometryId")," attribute to the id we defined in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometryfiledefinition"},(0,a.kt)("inlineCode",{parentName:"a"},"GeometryFileDefinition"))," - ",(0,a.kt)("em",{parentName:"p"},"cube"),"."),(0,a.kt)("h3",{id:"example-1-light-emitting-object"},"Example 1 Light Emitting Object"),(0,a.kt)("p",null,"To add a light emitting object to our luminaire we need to create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#lightemittingobject"},(0,a.kt)("inlineCode",{parentName:"a"},"LightEmittingObject"))," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LightEmittingObjects")," element of the current geometry part. The ",(0,a.kt)("inlineCode",{parentName:"p"},"partName")," attribute can freely be chosen just as in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#geometry"},(0,a.kt)("inlineCode",{parentName:"a"},"Geometry"))," element. The only difference ist that this name will be referenced by the GLDF-XML."),(0,a.kt)("p",null,"Initially the light emitting object will be placed relative to the parent geometry part. In this example the initial position is coincidentally at the right position."),(0,a.kt)("p",null,"The shape of the light emitting object can be rectangular or circular. To define the shape of the light emitting object we need to create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))," or a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#circle"},(0,a.kt)("inlineCode",{parentName:"a"},"Circle"))," child element in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#lightemittingobject"},(0,a.kt)("inlineCode",{parentName:"a"},"LightEmittingObject"))," element. In this case the shape is rectangular, so we need to create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))," element. Sinse the light emitting object corresponds to the whole bottom surface the attributes ",(0,a.kt)("inlineCode",{parentName:"p"},"sizeX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sizeY")," equal the length and width of the cube."),(0,a.kt)("h3",{id:"example-1-light-emitting-surfaces"},"Example 1 Light Emitting Surfaces"),(0,a.kt)("p",null,"As the last step we have to indicate which of the cube surfaces/triangles should act as the light emitting surfaces. We know that the light emitting object is on the bottom of the cube so the bottom surface should act as light emitting surface too. In this cube the triangle indices of the bottom surface are 6 and 7."),(0,a.kt)("p",null,"To indicate that this two triangle should act as light emitting surface we need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"LightEmittingFaceAssignments")," element with two ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#assignment"},(0,a.kt)("inlineCode",{parentName:"a"},"Assignment"))," child elements. Each for every triangle. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#assignment"},(0,a.kt)("inlineCode",{parentName:"a"},"Assignment"))," element needs the attributes ",(0,a.kt)("inlineCode",{parentName:"p"},"faceIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lightEmittingPartName"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"faceIndex")," is the (zero based) triangle index in the model and the ",(0,a.kt)("inlineCode",{parentName:"p"},"lightEmittingPartName")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"partName")," of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#lightemittingobject"},(0,a.kt)("inlineCode",{parentName:"a"},"LightEmittingObject"))," element this light emitting surface is related to."),(0,a.kt)("p",null,"In case you have many successive triangle indices you could also use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/geometry/l3d-xml-reference#rangeassignment"},(0,a.kt)("inlineCode",{parentName:"a"},"RangeAssignment"))," element, which takes the attributes ",(0,a.kt)("inlineCode",{parentName:"p"},"faceIndexBegin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"faceIndexEnd")," instead of a single ",(0,a.kt)("inlineCode",{parentName:"p"},"faceIndex"),"."),(0,a.kt)("h2",{id:"example-2-cube-luminaire-with-translated-parts"},"Example 2: Cube Luminaire With Translated Parts"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d/tree/master/examples/example_001"},(0,a.kt)("em",{parentName:"a"},"(example_001)")),": Assuming in the models directory is a ",(0,a.kt)("em",{parentName:"p"},"cube.obj")," file available which contains a simple cube with the following data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Length: 0.5m"),(0,a.kt)("li",{parentName:"ul"},"Width: 0.25m"),(0,a.kt)("li",{parentName:"ul"},"Height: 0.1m")),(0,a.kt)("h3",{id:"example-2-cube"},"Example 2 Cube"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cube",src:n(4537).Z,width:"850",height:"507"})),(0,a.kt)("p",null,"We want to create a luminaire with a light emitting object at the bottom of the luminaire. Just like in the previous example. The only difference is that this time the geometry doesn't align with the insert point.\nHere we have to make some adjustemnts in order to create the exact same luminaire as in the last example."),(0,a.kt)("p",null,"The xml below contains these adjustments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Luminaire xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n           xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/l3d/l3d.xsd">\n  <Header>\n    <CreatedWithApplication>Example-Tool</CreatedWithApplication>\n    <CreationTimeCode>2021-03-03T10:10:10</CreationTimeCode>\n  </Header>\n  <GeometryDefinitions>\n    <GeometryFileDefinition id="cube" filename="cube.obj" units="m" />\n  </GeometryDefinitions>\n  <Structure>\n    <Geometry partName="luminaire">\n      <Position x="-0.25" y="-0.125" z="0.05" />\n      <Rotation x="0" y="0" z="0" />\n      <GeometryReference geometryId="cube" />\n      <LightEmittingObjects>\n        <LightEmittingObject partName="leo">\n          <Position x="0.25" y="0.125" z="-0.05" />\n          <Rotation x="0" y="0" z="0" />\n          <Rectangle sizeX="0.5" sizeY="0.25" />\n        </LightEmittingObject>\n      </LightEmittingObjects>\n      <LightEmittingFaceAssignments>\n        <Assignment faceIndex="3" lightEmittingPartName="leo" />\n      </LightEmittingFaceAssignments>\n    </Geometry>\n  </Structure>\n</Luminaire>\n')),(0,a.kt)("h3",{id:"example-2-cube-geometry"},"Example 2 Cube Geometry"),(0,a.kt)("p",null,"As we know the cube is not placed as we want it, so we need to correct that by moving the cube to the right position. We move the cube by minus half size in x and minus half size in y direction and up by half of its height. The model doesn't need any rotation, but the element is mandatory."),(0,a.kt)("h3",{id:"example-2-light-emitting-object"},"Example 2 Light Emitting Object"),(0,a.kt)("p",null,"Initially the light emitting object will be placed relative to the parent geometry part. In this example the initial position would be in the corner of the cube (zero position), which is not what we want. In order to correct that we need to move the light emitting object to the correct position. Coincidentally the values to move the light emitting object are the negative values of the values we used for the  geometry position."))}p.isMDXComponent=!0},3593:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/l3d-e1-cube-2aeca0ad9bdd18e2f93578d3d96dc8b9.webp"},4537:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/l3d-e2-cube-3721e2adc0dfa9118534d7c24d138fc3.webp"}}]);