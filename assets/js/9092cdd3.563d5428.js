"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[6817],{9344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=n(5893),l=n(1151);const s={title:"Floodlight Cuboid",sidebar_label:"Floodlight Cuboid"},d=void 0,r={id:"geometry/types/parametric-flood-light-cuboid",title:"Floodlight Cuboid",description:"Description",source:"@site/docs/geometry/types/parametric-flood-light-cuboid.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-flood-light-cuboid",permalink:"/docs/geometry/types/parametric-flood-light-cuboid",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-flood-light-cuboid.md",tags:[],version:"current",frontMatter:{title:"Floodlight Cuboid",sidebar_label:"Floodlight Cuboid"},sidebar:"sidebar",previous:{title:"Floodlight Cylinder",permalink:"/docs/geometry/types/parametric-flood-light-cylinder"},next:{title:"Introduction",permalink:"/docs/geometry/l3d-intro"}},c={},o=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function h(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Floodlight Cuboid",src:n(7758).Z+"",width:"500",height:"466"})}),"\n",(0,i.jsx)(t.p,{children:"A Spotlight in cube shape mounted on a bracket attached to a cubic plate."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can adjust the dimensions of the light by setting the ",(0,i.jsx)(t.code,{children:"Length"}),", ",(0,i.jsx)(t.code,{children:"Width"})," and ",(0,i.jsx)(t.code,{children:"Height"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Setting the ",(0,i.jsx)(t.code,{children:"TotalHeight"})," parameter will affect the size of the bracket."]}),"\n",(0,i.jsx)(t.li,{children:"The plate size can be changed using the base dimensions."}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Width"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Length"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Height"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousWidth"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousLength"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TotalHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<xs:element name="FloodLightCuboid">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <FloodLightCuboid>\n    <Width>500</Width>\n    <Length>500</Length>\n    <Height>300</Height>\n    <LuminousWidth>480</LuminousWidth>\n    <LuminousLength>480</LuminousLength>\n    <LuminousHeight>100</LuminousHeight>\n    <TotalHeight>900</TotalHeight>\n  </FloodLightCuboid>\n</P3D>\n"})})]})}function a(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7758:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/flood-light-cuboid-92d3c959c97c3025bb94881aab3f4087.webp"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var i=n(7294);const l={},s=i.createContext(l);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);