"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[1975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1692:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Getting started",hide_table_of_contents:!1},i=void 0,l={type:"mdx",permalink:"/getting-started",source:"@site/src/pages/getting-started.md",title:"Getting started",description:"Getting started",frontMatter:{title:"Getting started",hide_table_of_contents:!1}},s=[{value:"Getting started",id:"getting-started",level:2},{value:"How to proceed",id:"how-to-proceed",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Notepad++",id:"notepad",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"GLDF XML Example",id:"gldf-xml-example",level:3},{value:"Next steps",id:"next-steps",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Welcome! We\u2019re excited that you want learn GLDF."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GLDF")," is an open and free ",(0,r.kt)("strong",{parentName:"p"},"luminaire and sensor data format")," that can be used across the entire lighting industry. Developed in cooperation by ",(0,r.kt)("a",{parentName:"p",href:"https://dial.de"},(0,r.kt)("strong",{parentName:"a"},"DIAL"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://relux.com"},(0,r.kt)("strong",{parentName:"a"},"RELUX"))," with the intention to meet the latest ",(0,r.kt)("strong",{parentName:"p"},"product data")," and ",(0,r.kt)("strong",{parentName:"p"},"BIM process requirements"),". As well as to create a new standard to help manufacturers, planners and software developers to interchange product data and work together in a more consistent and efficient way."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This guide contains")," suggestions and resources on how to get started with the global lighting data format. And what is our recommended order depending on your prior knowledge and preferred way of learning. What you need to get started, how to stay up-to-date and what could be your next steps.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-proceed"},"How to proceed"),(0,r.kt)("p",null,"The following sources can of course be viewed in any order. However, if you have little to no experience with the GLDF, we recommend the following chronology:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Introduction videos"),(0,r.kt)("br",{parentName:"p"}),"\n","Should you have not come into contact with GLDF yet. Or only have a rough idea of what the format is and what it is capable of, we recommend taking a look at our introductory videos on YouTube and/or read some presentations and papers. These are listed in the ",(0,r.kt)("a",{parentName:"p",href:"/download#presentations-and-papers"},(0,r.kt)("strong",{parentName:"a"},"Download / Links"))," section and will be gradually extended.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Documentation"),(0,r.kt)("br",{parentName:"p"}),"\n","With this prior knowledge, we recommend reading the ",(0,r.kt)("a",{parentName:"p",href:"/docs"},(0,r.kt)("strong",{parentName:"a"},"documentation"))," next. It introduces all aspects of the format. And includes not only GLDF descriptions, specifications and visual explanations. But contains also code examples for people who learn by doing, chapters on tools, libraries, tutorials for using GLDF in DIALux and RELUX, tips & tricks and more.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),(0,r.kt)("br",{parentName:"p"}),"\n","The GLDF example files can be of further help. They represent real GLDFs that can be used for orientation purposes. A separate chapter in the documentation is dedicated to them here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/examples"},(0,r.kt)("strong",{parentName:"a"},"Examples")),". Or visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/examples"},(0,r.kt)("strong",{parentName:"a"},"Github reposity"))," directly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Templates"),(0,r.kt)("br",{parentName:"p"}),"\n","With the knowledge from the documentation and GLDF example files, we recommend creating your own GLDFs for the first time. Our predesigned templates can provide a starting point for this. A separate chapter in the documentation is dedicated to them here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/templates"},(0,r.kt)("strong",{parentName:"a"},"Templates")),". Or visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/templates"},(0,r.kt)("strong",{parentName:"a"},"Github reposity"))," directly. If you are inexperienced in working with XML, we recommend to read the ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},(0,r.kt)("strong",{parentName:"a"},"Requirements"))," chapter beforehand.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tools"),(0,r.kt)("br",{parentName:"p"}),"\n","Not everything has to be written by hand. In the ",(0,r.kt)("a",{parentName:"p",href:"/tools"},(0,r.kt)("strong",{parentName:"a"},"Tooling section"))," you can find useful applications for working with GLDF. And in the ",(0,r.kt)("a",{parentName:"p",href:"/download#gldf-parser"},(0,r.kt)("strong",{parentName:"a"},"Download"))," area  you will find further libraries that can be used in your own software to read and write GLDF & L3D - again open source. There are also separate chapters on both in the documentation: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools-dev/gldf-net-parser"},(0,r.kt)("strong",{parentName:"a"},"GLDF Parser")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools-dev/l3d-net-parser"},(0,r.kt)("strong",{parentName:"a"},"L3D Parser")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools-dev/l3d-editor"},(0,r.kt)("strong",{parentName:"a"},"L3D Editor"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools-dev/gldf-editor"},(0,r.kt)("strong",{parentName:"a"},"GLDF Editor")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"XSD reference"),(0,r.kt)("br",{parentName:"p"}),"\n","And lastly, the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///xsd-reference/index_Root.html"},(0,r.kt)("strong",{parentName:"a"},"XSD reference"))," is intended for the daily work with GLDF. It describes the complete XML Schema visually. And is useful to look up possible elements and attributes, their required order, data types, enumerations and more easily. How to use the XSD reference is described ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/xsd-reference"},(0,r.kt)("strong",{parentName:"a"},"in the documentation"))," as well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Further resources"),"\nAnother good source of information are the websites of the two companies behind GLDF: ",(0,r.kt)("a",{parentName:"p",href:"https://dial.de"},(0,r.kt)("strong",{parentName:"a"},"dial.de"))," & ",(0,r.kt)("a",{parentName:"p",href:"https://relux.com"},(0,r.kt)("strong",{parentName:"a"},"relux.com")),". Have also a look on the repository overview of our Github team to find out new projects in the future: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata"},(0,r.kt)("strong",{parentName:"a"},"globallightingdata")),"."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Staying Informed")),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/blog"},(0,r.kt)("strong",{parentName:"a"},"GLDF blog"))," is the official source for updates from the GLDF team. Anything important, including releases and changelog notes, roadmaps and more will be posted there first.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To create the very first GLDF XML on your own, ",(0,r.kt)("strong",{parentName:"p"},"a simple text editor is all you need"),". Additionally an ",(0,r.kt)("strong",{parentName:"p"},"application to create ZIP archives")," is required to create the ",(0,r.kt)("a",{parentName:"p",href:"/docs/container/about-container"},"GLDF container")," afterwards."),(0,r.kt)("p",null,"However, if you want a little more comfort when writing GLDFs, we recommend an advanced text editor or an IDE right away. Two of the most useful functions when writing XML are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"XML Schema validation"),(0,r.kt)("li",{parentName:"ul"},"Code completion and IntelliSense")),(0,r.kt)("p",null,"If you do not already use a preferred text editor, we suggest one of the following with the above features:"),(0,r.kt)("h3",{id:"notepad"},"Notepad++"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://notepad-plus-plus.org"},"Notepadd++ for Windows")," is a free and lightweight editor, but already offers XML schema validation:"),(0,r.kt)("img",{src:"/img/docs/getting-started/requirements-notepad-plugin.webp",alt:"Notepad++ Validate feature",width:"750"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Provided the GLDF XSD is referenced (1), Notepad++ marks the faulty parts directly (2):"),(0,r.kt)("img",{src:"/img/docs/getting-started/requirements-notepad-validation.webp",alt:"Notepad++ validation",width:"750"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,r.kt)("p",null,"One step further goes the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code IDE"),", which is available for all common operating systems. In addition to XML schema validation (1) like in Notepad++, Visual Studio Code also offers full code completion and IntelliSense (2):"),(0,r.kt)("img",{src:"/img/docs/getting-started/requirements-studio-code-validation.webp",alt:"Notepad++ validation",width:"650"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gldf-xml-example"},"GLDF XML Example"),(0,r.kt)("p",null,"If you would like to test it out right away, copy and paste this XML of a minimal GLDF and try to validate it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<?xml version="1.0" encoding="UTF-8"?>\n<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/gldf.xsd">\n  <Header>\n    <Manufacturer>GlobalLightingData</Manufacturer>\n    <CreationTimeCode>2022-11-30T09:00:00</CreationTimeCode>\n    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>\n    <FormatVersion>1.0.0-rc.1</FormatVersion>\n  </Header>\n  <GeneralDefinitions>\n  </GeneralDefinitions>\n  <ProductDefinitions>\n    <ProductMetaData>\n        <ProductNumber>\n            <Locale language="en">42</Locale>\n        </ProductNumber>\n        <Name>\n            <Locale language="en">Example Luminaire</Locale>\n        </Name>\n    </ProductMetaData>\n    <Variants>\n        <Variant id="variant-1">\n            <Name>\n                <Locale language="en">Example Luminaire Variant 1</Locale>\n            </Name>\n        </Variant>\n    </Variants>\n  </ProductDefinitions>\n</Root>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"If you would like to start with the documentation, you can get to the first chapter here: ",(0,r.kt)("a",{parentName:"p",href:"/docs"},(0,r.kt)("strong",{parentName:"a"},"Introduction"))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Contribute",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You would like to contribute to GLDF? Have a look on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/contribute"},(0,r.kt)("strong",{parentName:"a"},"Get involved chapter")),". We would also appreciate to welcome you as a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/contribute/become-a-partner"},(0,r.kt)("strong",{parentName:"a"},"DIALux & Relux member")),".")))}m.isMDXComponent=!0}}]);