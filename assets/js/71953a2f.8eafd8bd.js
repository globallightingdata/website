"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[1643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={title:"DotNet Serializer for GLDF",description:"Release v0.5.0 of the GLDF.NET Parser",author:"Alex",author_title:"Developer DIAL",author_url:"https://github.com/Kurpanik",author_image_url:"https://avatars.githubusercontent.com/u/71767601?s=460",hide_table_of_contents:!1,tags:["gldf.net","tools","release"]},o=void 0,l={permalink:"/blog/2022/05/03/release-parser",editUrl:"https://github.com/globallightingdata/website/tree/master/blog/2022-05-03-release-parser.md",source:"@site/blog/2022-05-03-release-parser.md",title:"DotNet Serializer for GLDF",description:"Release v0.5.0 of the GLDF.NET Parser",date:"2022-05-03T00:00:00.000Z",formattedDate:"May 3, 2022",tags:[{label:"gldf.net",permalink:"/blog/tags/gldf-net"},{label:"tools",permalink:"/blog/tags/tools"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.175,hasTruncateMarker:!0,authors:[{name:"Alex",title:"Developer DIAL",url:"https://github.com/Kurpanik",imageURL:"https://avatars.githubusercontent.com/u/71767601?s=460"}],frontMatter:{title:"DotNet Serializer for GLDF",description:"Release v0.5.0 of the GLDF.NET Parser",author:"Alex",author_title:"Developer DIAL",author_url:"https://github.com/Kurpanik",author_image_url:"https://avatars.githubusercontent.com/u/71767601?s=460",hide_table_of_contents:!1,tags:["gldf.net","tools","release"]},nextItem:{title:"Release Candidate & Tools",permalink:"/blog/2022/04/01/rc1-and-tool"}},s={authorsImageUrls:[void 0]},p=[{value:"What is it",id:"what-is-it",level:2},{value:"What changed in v0.5",id:"what-changed-in-v05",level:2},{value:"Where can I get it",id:"where-can-i-get-it",level:2},{value:"How can I use it",id:"how-can-i-use-it",level:2},{value:"Serialisation",id:"serialisation",level:3},{value:"Deserialisation",id:"deserialisation",level:3},{value:"Serialisation options",id:"serialisation-options",level:3},{value:"More examples",id:"more-examples",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"GLDF.NET")," Parser - a GLDF XML serializer and deserializer for ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com"},"DotNet")," - is available now for GLDF ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.1"},"1.0.0-rc.1"),". In this blog post you will find a quick introduction and overview of its usage."),(0,i.kt)("h2",{id:"what-is-it"},"What is it"),(0,i.kt)("p",null,"GLFD.NET ist a ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com"},"DotNet")," (",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/de-de/dotnet/standard/net-standard"},"Standard 2.0"),") library for the Global Lighting Data Format with the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serialize and deserialize GLDF XML from and into typed objetcs"),(0,i.kt)("li",{parentName:"ul"},"100% format coverage"),(0,i.kt)("li",{parentName:"ul"},"Validate GLDF XML with the GLDF XmlSchema (",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/xsd-reference/index_Root.html"},"XSD"),")"),(0,i.kt)("li",{parentName:"ul"},"Read and write .gldf container files, including all assets and signature file"),(0,i.kt)("li",{parentName:"ul"},"Validate .gldf container files"),(0,i.kt)("li",{parentName:"ul"},"No dependencies, small footprint (~400kb)"),(0,i.kt)("li",{parentName:"ul"},"Windows & Unix compatible")),(0,i.kt)("h2",{id:"what-changed-in-v05"},"What changed in v0.5"),(0,i.kt)("p",null,"As you may already know, we've release GLDF 1.0.0-rc.1 a few day ago. The update of GLDF.NET to version v0.5.0 covers all changes and additional ones of version GLDF 0.9.0-beta.9. You can find a detailed changelog always on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/gldf/releases"},"release page on Github")),(0,i.kt)("h2",{id:"where-can-i-get-it"},"Where can I get it"),(0,i.kt)("p",null,"To download GLDF.NET simply use our Nuget package published on nuget.org"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/GLDF.Net"},"https://www.nuget.org/packages/GLDF.Net"))),(0,i.kt)("h2",{id:"how-can-i-use-it"},"How can I use it"),(0,i.kt)("p",null,"First, install GLDF.Net into your DotNet project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package GLDF.Net\n")),(0,i.kt)("h3",{id:"serialisation"},"Serialisation"),(0,i.kt)("p",null,"To serialize a DotNet object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," into XML, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializeToString(Root root)")," method like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var serializer = new GldfXmlSerializer();\n// ignore incomplete Root object for now\nvar root = new Root {Header = new Header {Author = "Blog Example"}};\nvar xml = serializer.SerializeToString(root);\n')),(0,i.kt)("p",null,"And if you would like to serialize a DotNet object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," directly into a .xml file, use ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializeToFile(Root root, string filePath)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var serializer = new GldfXmlSerializer();\n// ignore incomplete Root object for now\nvar root = new Root {Header = new Header {Author = "Blog Example"}};\nserializer.SerializeToFile(root, @"c:\\some\\file\\path\\luminaire.xml");\n')),(0,i.kt)("h3",{id:"deserialisation"},"Deserialisation"),(0,i.kt)("p",null,"To deserialize GLDF XML back into a DotNet object, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeserializeFromString(string xml)")," method like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var serializer = new GldfXmlSerializer();\nvar xml = @"<Root><Header><Author>Blog Example</Author></Header></Root>";\nRoot root = serializer.DeserializeFromString(xml);\n')),(0,i.kt)("p",null,"Or to deserialize a GLDF .xml file into a DotNet object, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeserializeFromFile(string filePath)")," method like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var serializer = new GldfXmlSerializer();\nvar filePath = @"c:\\some\\file\\path\\luminaire.xml";\nRoot root = serializer.DeserializeFromFile(filePath);\n')),(0,i.kt)("h3",{id:"serialisation-options"},"Serialisation options"),(0,i.kt)("p",null,"If required, you can set some XML setting as well. For all options see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/de-de/dotnet/api/system.xml.xmlwritersettings"},"MSDN api/xmlwritersettings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"XmlWriterSettings settings = new XmlWriterSettings();\nsettings.Encoding = Encoding.UTF32; // UTF-8 by default\nsettings.Indent = false; // true by default\nvar serializer = new GldfXmlSerializer(settings);\n")),(0,i.kt)("h3",{id:"more-examples"},"More examples"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"More examples for XML validation and reading and writing GLDF container files can be found in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/globallightingdata/gldf.net#container-readwrite"},"GLDF.NET Github repository"),".")))}c.isMDXComponent=!0}}]);