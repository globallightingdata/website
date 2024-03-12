"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[7066],{410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=n(5893),l=n(1151);const r={title:"Floodlight Cylinder",sidebar_label:"Floodlight Cylinder"},d=void 0,s={id:"geometry/types/parametric-flood-light-cylinder",title:"Floodlight Cylinder",description:"Description",source:"@site/docs/geometry/types/parametric-flood-light-cylinder.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-flood-light-cylinder",permalink:"/docs/geometry/types/parametric-flood-light-cylinder",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-flood-light-cylinder.md",tags:[],version:"current",frontMatter:{title:"Floodlight Cylinder",sidebar_label:"Floodlight Cylinder"},sidebar:"sidebar",previous:{title:"Spot Cuboid",permalink:"/docs/geometry/types/parametric-spot-cuboid"},next:{title:"Floodlight Cuboid",permalink:"/docs/geometry/types/parametric-flood-light-cuboid"}},o={},h=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function c(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"FloodlightCylinder"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Floodlight Cylinder",src:n(5232).Z+"",width:"500",height:"469"})}),"\n",(0,i.jsx)(t.p,{children:"A Spotlight in cylinder shape mounted on a bracket attached to a plate."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can adjust the dimensions of the light by setting the ",(0,i.jsx)(t.code,{children:"LuminousDiameter"})," and ",(0,i.jsx)(t.code,{children:"LuminousHeight"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Setting the ",(0,i.jsx)(t.code,{children:"TotalHeight"})," parameter will affect the size of the bracket."]}),"\n",(0,i.jsxs)(t.li,{children:["The plate size can be changed using the base ",(0,i.jsx)(t.code,{children:"Diameter"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Diameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Height"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousDiameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TotalHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<xs:element name="FloodLightCylinder">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousDiameter" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <FloodLightCylinder>\n    <Diameter>300</Diameter>\n    <Height>600</Height>\n    <LuminousDiameter>280</LuminousDiameter>\n    <LuminousHeight>100</LuminousHeight>\n    <TotalHeight>800</TotalHeight>\n  </FloodLightCylinder>\n</P3D>\n"})})]})}function a(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5232:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/webp;base64,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"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>d});var i=n(7294);const l={},r=i.createContext(l);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);