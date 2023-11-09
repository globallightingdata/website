"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[3500],{6609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=n(5893),s=n(1151);const r={title:"Sphere",sidebar_label:"Sphere"},l=void 0,c={id:"geometry/types/parametric-sphere",title:"Sphere",description:"Description",source:"@site/docs/geometry/types/parametric-sphere.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-sphere",permalink:"/docs/geometry/types/parametric-sphere",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-sphere.md",tags:[],version:"current",frontMatter:{title:"Sphere",sidebar_label:"Sphere"},sidebar:"sidebar",previous:{title:"Cuboid",permalink:"/docs/geometry/types/parametric-cuboid"},next:{title:"Parabolic",permalink:"/docs/geometry/types/parametric-parabolic"}},d={},h=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function a(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Sphere Luminaire",src:n(2303).Z+"",width:"444",height:"549"})}),"\n",(0,i.jsx)(t.p,{children:"This model consists of a sphere on a base if the base height is greater than 0."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Diameter"})," describes the diameter of the sphere."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"BaseHeight"})," and ",(0,i.jsx)(t.code,{children:"Diameter"})," represent the size of the base."]}),"\n",(0,i.jsxs)(t.li,{children:["If you set the mounting type to ",(0,i.jsx)(t.code,{children:"Pendulum"}),", the value ",(0,i.jsx)(t.code,{children:"PendulumLength"})," will specify the length of the pendulum."]}),"\n",(0,i.jsx)(t.li,{children:"The default base diameter will be 60% of the diameter of the sphere."}),"\n",(0,i.jsx)(t.li,{children:"The height of the base will be 2 times the distance between the edge of the sphere and the interesction with the sphere."}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Diameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BaseHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BaseDiameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mounting"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Ceiling, Wall, Floor, Pendulum"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PendulumLength"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<xs:element name="Sphere">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>\n      <xs:element name="Mounting">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Ceiling"/>\n            <xs:enumeration value="Wall"/>\n            <xs:enumeration value="Floor"/>\n            <xs:enumeration value="Pendulum"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n      <xs:element name="PendulumLength" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <Sphere>\n    <Diameter>300</Diameter>\n    <BaseHeight>50</BaseHeight>\n    <BaseDiameter>200</BaseDiameter>\n    <Mounting>Pendulum</Mounting>\n    <PendulumLength>800</PendulumLength>\n  </Sphere>\n</P3D>\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2303:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/webp;base64,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"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var i=n(7294);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);