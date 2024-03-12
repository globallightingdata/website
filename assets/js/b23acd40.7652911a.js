"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[5385],{6747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(5893),s=n(1151);const r={title:"Parabolic",sidebar_label:"Parabolic"},l=void 0,a={id:"geometry/types/parametric-parabolic",title:"Parabolic",description:"Description",source:"@site/docs/geometry/types/parametric-parabolic.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-parabolic",permalink:"/docs/geometry/types/parametric-parabolic",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-parabolic.md",tags:[],version:"current",frontMatter:{title:"Parabolic",sidebar_label:"Parabolic"},sidebar:"sidebar",previous:{title:"Sphere",permalink:"/docs/geometry/types/parametric-sphere"},next:{title:"Cylinder",permalink:"/docs/geometry/types/parametric-cylinder"}},c={},d=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function x(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Parabolic Luminaire",src:n(2567).Z+"",width:"418",height:"494"})}),"\n",(0,i.jsx)(t.p,{children:"Parabolic shaped luminaire."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The base diameter has a default value of 50% of the main diameter."}),"\n",(0,i.jsx)(t.li,{children:"The base height default value is 50% of the main height."}),"\n",(0,i.jsx)(t.li,{children:"The default diameter of the base is 50% of the main diameter."}),"\n",(0,i.jsx)(t.li,{children:"The default height of the base is 50% of the main height parameter."}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Diameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Height"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousDiameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BaseDiameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BaseHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mounting"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Ceiling, Wall, Floor, Pendulum"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PendulumLength"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<xs:element name="Parabolic">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousDiameter" type="xs:int" minOccurs="0"/>\n      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>\n      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="Mounting">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Ceiling"/>\n            <xs:enumeration value="Wall"/>\n            <xs:enumeration value="Floor"/>\n            <xs:enumeration value="Pendulum"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n      <xs:element name="PendulumLength" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <Parabolic>\n    <Diameter>400</Diameter>\n    <Height>600</Height>\n    <Mounting>Floor</Mounting>\n  </Parabolic>\n</P3D>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},2567:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/parabolic-dfa5f4077584fa1e5b32d17414ea0bf7.webp"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(7294);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);