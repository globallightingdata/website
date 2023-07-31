"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[7588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=l.createContext({}),p=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},c="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,u=c["".concat(d,".").concat(m)]||c[m]||A[m]||r;return n?l.createElement(u,i(i({ref:t},s),{},{components:n})):l.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>A,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var l=n(7462),o=(n(7294),n(3905));const r={title:"Parametric Geometry Introduction",sidebar_label:"Introduction"},i=void 0,a={unversionedId:"geometry/parametric-introduction",id:"geometry/parametric-introduction",title:"Parametric Geometry Introduction",description:"Concept",source:"@site/docs/geometry/parametric-introduction.md",sourceDirName:"geometry",slug:"/geometry/parametric-introduction",permalink:"/docs/geometry/parametric-introduction",draft:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/parametric-introduction.md",tags:[],version:"current",frontMatter:{title:"Parametric Geometry Introduction",sidebar_label:"Introduction"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/geometry/introduction"},next:{title:"Features",permalink:"/docs/geometry/parametric-features"}},d={},p=[{value:"Concept",id:"concept",level:2},{value:"Step by Step guide",id:"step-by-step-guide",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6",id:"step-6",level:3},{value:"Step 7",id:"step-7",level:3}],s={toc:p},c="wrapper";function A(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("p",null,"Parametric Geometry is a concept that allows you to create basic rudimentary 3D models of generic luminaires without having to model them. You can generate models based on a few product dimension parameters."),(0,o.kt)("p",null,"Our parametric 3D model web service allows you to upload an input XML file and provides the download link after generating the new L3D file. You can then use the file within your GLDF file."),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by Step guide"),(0,o.kt)("p",null,"This guide will walk you through the steps to create an example parametric L3D model and help you understand how the web service works."),(0,o.kt)("p",null,"The process outline is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an input XML file according to our ",(0,o.kt)("a",{href:"/xsd/p3d/p3d.xsd",target:"_blank"},"XSD")," file specification."),(0,o.kt)("li",{parentName:"ul"},"Send the input XML file to our Web service."),(0,o.kt)("li",{parentName:"ul"},"The web service will respond with an URL where you can download the generated L3D file.")),(0,o.kt)("p",null,"In this example, we will create a BAT file and a sample source XML file to demonstrate and test the web service"),(0,o.kt)("p",null,"The following is a windows platform-based example."),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"Open notepad.exe on your system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(479).Z,width:"750",height:"704"})),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"Enter the following code, save the file and exit the editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@Echo off\nREM File Dialog\nFor /f "usebackqdelims=" %%A in (\n  `powershell -Executionpolicy ByPass -Command "[void][System.Reflection.Assembly]::LoadWithPartialName(\'System.Windows.Forms\');$dlg = New-Object System.Windows.Forms.OpenFileDialog; if($dlg.ShowDialog() -eq \'OK\'){return $dlg.FileNames}"`\n) Do Set file=%%A\n\nREM API Call\ncurl --request "PUT" --header "Content-Type:application/xml" "https://p3d.relux.com/l3d/" --data @%file% --output out.xml\n\nREM get URL out of JSON\nFor /f "usebackqdelims=" %%A in (\n  `Powershell -Executionpolicy Bypass -command "([xml](gc \'out.xml\')).SelectSingleNode(\'//root\').innerText"`\n) Do Set url=%%A\necho %url%\n\nREM Filename of URL\nfor /f "tokens=1,2,3,4 delims=/ " %%a in ("%url%") do set filename=%%d\necho %filename%\n\nREM URL downlaod\npowershell -Command "Invoke-WebRequest %url%" -OutFile %filename%.l3d"\n\nREM clean up\ndel out.xml\n\npause\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(8701).Z,width:"800",height:"520"})),(0,o.kt)("h3",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"Click on Save As. Select All files as file type and save the file as example.bat"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(7047).Z,width:"800",height:"451"})),(0,o.kt)("h3",{id:"step-4"},"Step 4"),(0,o.kt)("p",null,"Open another instance of Notepad and paste the following text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<P3D>\n    <StandCuboidSide>\n     <Width>30</Width>\n     <Length>60</Length>\n     <Height>15</Height>\n     <LuminousWidth>20</LuminousWidth>\n     <LuminousLength>20</LuminousLength>\n     <TotalHeight>120</TotalHeight>\n    </StandCuboidSide>\n</P3D>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(2363).Z,width:"800",height:"508"})),(0,o.kt)("h3",{id:"step-5"},"Step 5"),(0,o.kt)("p",null,"Click Save as again and save the file as example-geometry.xml. You should now have two files in your directory."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(9325).Z,width:"800",height:"412"})),(0,o.kt)("h3",{id:"step-6"},"Step 6"),(0,o.kt)("p",null,"Double-click the bat file. Then a file selection dialog will appear. You can then select the source XML file, and the script will download the result L3D file to the location of your bat file. The result filename should start with StandCuboidSide... and end with .l3d. Your directory should look as in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(391).Z,width:"800",height:"407"})),(0,o.kt)("h3",{id:"step-7"},"Step 7"),(0,o.kt)("p",null,"Load up the ",(0,o.kt)("a",{href:"https://l3d-editor.gldf.io",target:"_blank"},"L3D Editor")," and open your new file to see the result."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open notepad.exe on windows 11",src:n(3734).Z,width:"800",height:"501"})))}A.isMDXComponent=!0},9325:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/files1-6b1d9e6af1f07216e72bd9adaf3e1b70.webp"},8701:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/notepad-5195530a2e7c55e6a63c37af6c118ff0.webp"},479:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/opennotepad-152a103c9ec5f0c117bc9a9ceea7f4ff.webp"},391:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/result-432a5abc626f8567aed1c0761f7ba731.webp"},3734:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/resulteditor-dc784e7e0bbbf629a9bdf29a8a543f69.webp"},7047:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/webp;base64,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"},2363:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/xmlnotepad-8e69291f6b709ca274d03f7624d1f893.webp"}}]);