"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[7794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),h=i,u=g["".concat(m,".").concat(h)]||g[h]||c[h]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"L3D Examples",sidebar_label:"Examples"},o=void 0,l={unversionedId:"geometry/l3d-examples",id:"geometry/l3d-examples",title:"L3D Examples",description:"The source of all examples can be downloaded from the L3D Github Repository",source:"@site/docs/geometry/l3d-examples.md",sourceDirName:"geometry",slug:"/geometry/l3d-examples",permalink:"/docs/geometry/l3d-examples",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/l3d-examples.md",tags:[],version:"current",frontMatter:{title:"L3D Examples",sidebar_label:"Examples"},sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/geometry/l3d-getting-started"},next:{title:"Legacy M3D & ROLF",permalink:"/docs/geometry/l3d-legacy"}},m={},s=[{value:"Example 1: Simple Cube Luminaire (example_000)",id:"example-1-simple-cube-luminaire-example_000",level:2},{value:"Example 1 cube",id:"example-1-cube",level:4},{value:"Cube Geometry",id:"cube-geometry",level:3},{value:"Light Emitting Object",id:"light-emitting-object",level:3},{value:"Light Emitting Surfaces",id:"light-emitting-surfaces",level:3},{value:"Example 2: Cube Luminaire With Translated Parts (example_001)",id:"example-2-cube-luminaire-with-translated-parts-example_001",level:2},{value:"Example 2 cube",id:"example-2-cube",level:4},{value:"Cube Geometry",id:"cube-geometry-1",level:3},{value:"Light Emitting Object",id:"light-emitting-object-1",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The source of all examples can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/l3d/tree/master/examples"},"L3D Github Repository")),(0,i.kt)("h2",{id:"example-1-simple-cube-luminaire-example_000"},"Example 1: Simple Cube Luminaire (example_000)"),(0,i.kt)("p",null,"Assuming in the models directory is a cube.obj file available which contains a simple cube with the following data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Length: 0.5m"),(0,i.kt)("li",{parentName:"ul"},"Width: 0.25m"),(0,i.kt)("li",{parentName:"ul"},"Height: 0.1m")),(0,i.kt)("h4",{id:"example-1-cube"},"Example 1 cube"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/globallightingdata/l3d/master/docs/images/e1-cube.png",alt:"Cube"})),(0,i.kt)("p",null,"We want to add a LightEmittingObject at the bottom of the cube and create a luminaire with the insert point at the center of the bottom face.\nThe following example xml creates exactly what we want."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<Luminaire xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n        xsi:noNamespaceSchemaLocation="https://gldf.io/l3d.xsd">\n  <Header>\n    <CreatedWithApplication>Example-Tool</CreatedWithApplication>\n    <CreationTimeCode>2021-03-03T10:10:10</CreationTimeCode>\n  </Header>\n  <GeometryDefinitions>\n    <GeometryFileDefinition id="cube" filename="cube.obj" units="m" />\n  </GeometryDefinitions>\n  <Structure>\n    <Geometry partName="luminaire">\n      <Position x="0" y="0" z="0" />\n      <Rotation x="0" y="0" z="0" />\n      <GeometryReference geometryId="cube" />\n      <LightEmittingObjects>\n        <LightEmittingObject partName="leo">\n          <Position x="0" y="0" z="0" />\n          <Rotation x="0" y="0" z="0" />\n          <Rectangle sizeX="0.5" sizeY="0.25" />\n        </LightEmittingObject>\n      </LightEmittingObjects>\n      <LightEmittingFaceAssignments>\n        <Assignment faceIndex="3" lightEmittingPartName="leo" />\n      </LightEmittingFaceAssignments>\n    </Geometry>\n  </Structure>\n</Luminaire>\n')),(0,i.kt)("h3",{id:"cube-geometry"},"Cube Geometry"),(0,i.kt)("p",null,"To reference the ",(0,i.kt)("inlineCode",{parentName:"p"},"cube.obj")," file in the models directory, we need to create a ",(0,i.kt)("a",{parentName:"p",href:"#GeometryFileDefinition"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GeometryFileDefinition")))," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GeometryFileDefinitions")," element and set the attributes. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"id"))," attribute can freely be chosen but must start with a letter and must be unique among all ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"GeometryFileDefinition"))," elements in the XML file. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"filename"))," has to be ",(0,i.kt)("inlineCode",{parentName:"p"},"cube.obj")," without the models directory path. Sinse the ",(0,i.kt)("inlineCode",{parentName:"p"},"cube.obj")," file coordinates are in meters, we neet to set the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"units"))," attribute to ",(0,i.kt)("strong",{parentName:"p"},"m"),".  "),(0,i.kt)("p",null,"After that we can create a ",(0,i.kt)("a",{parentName:"p",href:"#Geometry"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Geometry")))," element in the ",(0,i.kt)("a",{parentName:"p",href:"#Structure"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Structure")))," element. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"partName"))," also can be chosen freely but must be unique among all ",(0,i.kt)("a",{parentName:"p",href:"#Geometry"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Geometry"))),", ",(0,i.kt)("a",{parentName:"p",href:"#Joint"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Joint")))," and ",(0,i.kt)("a",{parentName:"p",href:"#LightEmittingObject"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"LightEmittingObject")))," elements, and must also start with a letter."),(0,i.kt)("p",null,"As we see the cube is already placed correctly, so we don't need any translation or rotation of the geometry in this example."),(0,i.kt)("p",null,"To tell that this geometry element has to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cube.obj")," as gometry source, we need to create a reference to the defined ",(0,i.kt)("a",{parentName:"p",href:"#GeometryFileDefinition"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GeometryFileDefinition"))),". We do that by creating a ",(0,i.kt)("a",{parentName:"p",href:"#GeometryReference"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GeometryReference")))," element and set the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"geometryId"))," attribute to the id we defined in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"GeometryFileDefinition"))," - ",(0,i.kt)("em",{parentName:"p"},"cube"),"."),(0,i.kt)("h3",{id:"light-emitting-object"},"Light Emitting Object"),(0,i.kt)("p",null,"To add a light emitting object to our luminaire we need to create a ",(0,i.kt)("a",{parentName:"p",href:"#LightEmittingObject"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"LightEmittinObject")))," in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"LightEmittingObjects"))," element of the current geometry part. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"partName"))," attribute can freely be chosen just as in the ",(0,i.kt)("a",{parentName:"p",href:"#Geometry"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Geometry")))," element. The only difference ist that this name will be referenced by the ",(0,i.kt)("strong",{parentName:"p"},"GLDF-XML"),"."),(0,i.kt)("p",null,"Initially the light emitting object will be placed relative to the parent geometry part. In this ",(0,i.kt)("a",{parentName:"p",href:"#Example-1-cube"},"example")," the initial position is coincidentally at the right position."),(0,i.kt)("p",null,"The shape of the light emitting object can be rectangular or circular. To define the shape of the light emitting object we need to create a ",(0,i.kt)("a",{parentName:"p",href:"#Rectangle"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Rectangle")))," or a ",(0,i.kt)("a",{parentName:"p",href:"#Circle"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Circle")))," child element in our LightEmittingObject element. In this case the shape is rectangular, so we need to create a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Rectangle"))," element. Sinse the light emitting object corresponds to the whole bottom surface the attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"sizeX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sizeY")," equal the length and width of the cube."),(0,i.kt)("h3",{id:"light-emitting-surfaces"},"Light Emitting Surfaces"),(0,i.kt)("p",null,"As the last step we have to indicate which of the cube surfaces/triangles should act as the light emitting surfaces. We know that the light emitting object is on the bottom of the cube so the bottom surface should act as light emitting surface too. In this cube the triangle indices of the bottom surface are 6 and 7."),(0,i.kt)("p",null,"To indicate that this two triangle should act as light emitting surface we need to create a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"LightEmittingFaceAssignments"))," element with two ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Assignment"))," child elements. Each for every triangle. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Assignment"))," element needs the attributes ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"faceIndex"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"lightEmittingPartName")),". ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"faceIndex"))," is the (zero based) triangle index in the model and the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"lightEmittingPartName"))," is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"partName"))," of the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"LightEmittingObject"))," element this light emitting surface is related to."),(0,i.kt)("p",null,"In case you have many successive triangle indices you could also use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"RangeAssignment"))," element, which takes the attributes ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"faceIndexBegin"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"faceIndexEnd"))," instead of a single ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"faceIndex")),"."),(0,i.kt)("h2",{id:"example-2-cube-luminaire-with-translated-parts-example_001"},"Example 2: Cube Luminaire With Translated Parts (example_001)"),(0,i.kt)("p",null,"Assuming in the models directory is a cube.obj file available which contains a simple cube with the following data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Length: 0.5m"),(0,i.kt)("li",{parentName:"ul"},"Width: 0.25m"),(0,i.kt)("li",{parentName:"ul"},"Height: 0.1m")),(0,i.kt)("h4",{id:"example-2-cube"},"Example 2 cube"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/globallightingdata/l3d/master/docs/images/e2-cube.png",alt:"Cube"})),(0,i.kt)("p",null,"We want to create a luminaire with a light emitting object at the bottom of the luminaire. Just like in the previous example. The only difference is that this time the geometry doesn't align with the insert point.\nHere we have to make some adjustemnts in order to create the exact same luminaire as in the last example."),(0,i.kt)("p",null,"The xml below contains these adjustments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<Luminaire xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n           xsi:noNamespaceSchemaLocation="https://gldf.io/l3d.xsd">\n  <Header>\n    <CreatedWithApplication>Example-Tool</CreatedWithApplication>\n    <CreationTimeCode>2021-03-03T10:10:10</CreationTimeCode>\n  </Header>\n  <GeometryDefinitions>\n    <GeometryFileDefinition id="cube" filename="cube.obj" units="m" />\n  </GeometryDefinitions>\n  <Structure>\n    <Geometry partName="luminaire">\n      <Position x="-0.25" y="-0.125" z="0.05" />\n      <Rotation x="0" y="0" z="0" />\n      <GeometryReference geometryId="cube" />\n      <LightEmittingObjects>\n        <LightEmittingObject partName="leo">\n          <Position x="0.25" y="0.125" z="-0.05" />\n          <Rotation x="0" y="0" z="0" />\n          <Rectangle sizeX="0.5" sizeY="0.25" />\n        </LightEmittingObject>\n      </LightEmittingObjects>\n      <LightEmittingFaceAssignments>\n        <Assignment faceIndex="3" lightEmittingPartName="leo" />\n      </LightEmittingFaceAssignments>\n    </Geometry>\n  </Structure>\n</Luminaire>\n')),(0,i.kt)("h3",{id:"cube-geometry-1"},"Cube Geometry"),(0,i.kt)("p",null,"As we know the cube is not placed as we want it, so we need to correct that by moving the cube to the right position. We move the cube by minus half size in x and minus half size in y direction and up by half of its height. The model doesn't need any rotation, but the element is mandatory."),(0,i.kt)("h3",{id:"light-emitting-object-1"},"Light Emitting Object"),(0,i.kt)("p",null,"Initially the light emitting object will be placed relative to the parent geometry part. In this ",(0,i.kt)("a",{parentName:"p",href:"#Example-2-cube"},"example")," the initial position would be in the corner of the cube (zero position), which is not what we want. In order to correct that we need to move the light emitting object to the correct position. Coincidentally the values to move the light emitting object are the negative values of the values we used for the  geometry position."))}c.isMDXComponent=!0}}]);