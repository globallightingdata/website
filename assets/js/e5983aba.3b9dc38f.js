"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[6314],{3055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(5893),s=t(1151);const r={title:"Open Luminaire",sidebar_label:"Open Luminaire"},l=void 0,c={id:"geometry/types/parametric-open-luminaire",title:"Open Luminaire",description:"Description",source:"@site/docs/geometry/types/parametric-open-luminaire.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-open-luminaire",permalink:"/docs/geometry/types/parametric-open-luminaire",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-open-luminaire.md",tags:[],version:"current",frontMatter:{title:"Open Luminaire",sidebar_label:"Open Luminaire"},sidebar:"sidebar",previous:{title:"Recessed Cuboid",permalink:"/docs/geometry/types/parametric-cuboid-recessed"},next:{title:"Cuboid",permalink:"/docs/geometry/types/parametric-cuboid"}},d={},o=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function x(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Open Luminaire ",src:t(4386).Z+"",width:"500",height:"441"})}),"\n",(0,i.jsx)(n.p,{children:"Open Luminaire has a base with openly accessible luminous object."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Width"}),", ",(0,i.jsx)(n.code,{children:"Length"})," and ",(0,i.jsx)(n.code,{children:"Height"})," will define the total size in the form of a bounding box."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LuminousWidth"}),", ",(0,i.jsx)(n.code,{children:"LuminousLength"})," and ",(0,i.jsx)(n.code,{children:"LuminousHeight"})," describe the bounding box of the luminous elements."]}),"\n",(0,i.jsx)(n.li,{children:"The width of the luminaire determines the number of luminous objects."}),"\n",(0,i.jsx)(n.li,{children:"Open luminaires are ceiling mounted."}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Width"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Length"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Height"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LuminousWidth"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LuminousLength"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LuminousHeight"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<xs:element name="OpenLuminaire">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<P3D>\n  <OpenLuminaire>\n    <Width>400</Width>\n    <Length>1800</Length>\n    <Height>400</Height>\n    <LuminousWidth>500</LuminousWidth>\n    <LuminousLength>1900</LuminousLength>\n    <LuminousHeight>500</LuminousHeight>\n  </OpenLuminaire>\n</P3D>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},4386:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/webp;base64,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"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var i=t(7294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);