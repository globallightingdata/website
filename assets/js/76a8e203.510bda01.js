"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[135],{664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=t(5893),s=t(1151);const l={title:"Cylinder",sidebar_label:"Cylinder"},r=void 0,d={id:"geometry/types/parametric-cylinder",title:"Cylinder",description:"Description",source:"@site/docs/geometry/types/parametric-cylinder.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-cylinder",permalink:"/docs/geometry/types/parametric-cylinder",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-cylinder.md",tags:[],version:"current",frontMatter:{title:"Cylinder",sidebar_label:"Cylinder"},sidebar:"sidebar",previous:{title:"Parabolic",permalink:"/docs/geometry/types/parametric-parabolic"},next:{title:"Stand Cylinder",permalink:"/docs/geometry/types/parametric-stand-cylinder"}},o={},a=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function m(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cylinder",src:t(2821).Z+"",width:"355",height:"500"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Diameter"})," and ",(0,i.jsx)(n.code,{children:"Height"})," describe the bounding box size of the luminaire."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LuminousDiameter"})," and ",(0,i.jsx)(n.code,{children:"LuminousHeight"})," describe the dimensions of the illuminated surface."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LuminousHeight"})," will let the luminous surface extrude out of the object."]}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.code,{children:"Mounting"})," type is a ",(0,i.jsx)(n.code,{children:"Pendulum"}),", the ",(0,i.jsx)(n.code,{children:"PendulumLength"})," will set the default pendulum length."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Diameter"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Height"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TopDiameter"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LuminousDiameter"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LuminousHeight"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mounting"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Ceiling, Wall, Floor, Pendulum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PendulumLength"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<xs:element name="Cylinder">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>\n      <xs:element name="LuminousDiameter" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="Mounting">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Ceiling"/>\n            <xs:enumeration value="Wall"/>\n            <xs:enumeration value="Floor"/>\n            <xs:enumeration value="Pendulum"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n      <xs:element name="PendulumLength" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<P3D>\n  <Cylinder>\n    <Diameter>340</Diameter>\n    <Height>200</Height>\n    <TopDiameter>250</TopDiameter>\n    <LuminousDiameter>320</LuminousDiameter>\n    <LuminousHeight>0</LuminousHeight>\n    <Mounting>Pendulum</Mounting>\n    <PendulumLength>400</PendulumLength>\n  </Cylinder>\n</P3D>\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},2821:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/webp;base64,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"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var i=t(7294);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);