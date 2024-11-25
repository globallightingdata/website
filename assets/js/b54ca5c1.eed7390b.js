"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[2713],{2276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"geometry/types/parametric-spot-cylinder","title":"Spot Cylinder","description":"Description","source":"@site/docs/geometry/types/parametric-spot-cylinder.md","sourceDirName":"geometry/types","slug":"/geometry/types/parametric-spot-cylinder","permalink":"/docs/geometry/types/parametric-spot-cylinder","draft":false,"unlisted":false,"editUrl":"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-spot-cylinder.md","tags":[],"version":"current","frontMatter":{"title":"Spot Cylinder","sidebar_label":"Spot Cylinder"},"sidebar":"sidebar","previous":{"title":"Street Cylinder Side","permalink":"/docs/geometry/types/parametric-street-cylinder-side"},"next":{"title":"Spot Cuboid","permalink":"/docs/geometry/types/parametric-spot-cuboid"}}');var s=n(4848),r=n(8453);const l={title:"Spot Cylinder",sidebar_label:"Spot Cylinder"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function o(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Spot Cylinder",src:n(9543).A+"",width:"450",height:"500"})}),"\n",(0,s.jsx)(t.p,{children:"A Spotlight in cylinder shape mounted on a bracket attached to a plate."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can adjust the dimensions of the light by setting the ",(0,s.jsx)(t.code,{children:"Diameter"})," and ",(0,s.jsx)(t.code,{children:"Length"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Setting the ",(0,s.jsx)(t.code,{children:"TotalHeight"})," parameter will affect the size of the bracket."]}),"\n",(0,s.jsxs)(t.li,{children:["The plate size can be changed using the ",(0,s.jsx)(t.code,{children:"BaseDiameter"})," parameter."]}),"\n",(0,s.jsxs)(t.li,{children:["The distance of the connector of the bracket to the luminaire is the same as the ",(0,s.jsx)(t.code,{children:"Height"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The length of the connection from the base surface to the bracket is 1/2 of the ",(0,s.jsx)(t.code,{children:"Height"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Diameter"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Height"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LuminousDiameter"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TotalHeight"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BaseDiameter"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BaseHeight"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<xs:element name="SpotCylinder">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousDiameter" type="xs:int"/>\n      <xs:element name="TotalHeight" type="xs:int"/>\n      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>\n      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <SpotCylinder>\n    <Diameter>60</Diameter>\n    <Height>70</Height>\n    <LuminousDiameter>50</LuminousDiameter>\n    <TotalHeight>130</TotalHeight>\n  </SpotCylinder>\n</P3D>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9543:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/spot-cylinder-ceaf6a53f81444963fdf72fa439f13d8.webp"},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);