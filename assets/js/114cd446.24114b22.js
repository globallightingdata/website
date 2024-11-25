"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[808],{7656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"geometry/types/parametric-stand-cuboid-centered","title":"Stand Cuboid Centered","description":"Description","source":"@site/docs/geometry/types/parametric-stand-cuboid-centered.md","sourceDirName":"geometry/types","slug":"/geometry/types/parametric-stand-cuboid-centered","permalink":"/docs/geometry/types/parametric-stand-cuboid-centered","draft":false,"unlisted":false,"editUrl":"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-stand-cuboid-centered.md","tags":[],"version":"current","frontMatter":{"title":"Stand Cuboid Centered","sidebar_label":"Stand Cuboid Centered"},"sidebar":"sidebar","previous":{"title":"Stand Cylinder","permalink":"/docs/geometry/types/parametric-stand-cylinder"},"next":{"title":"Stand Cuboid Side","permalink":"/docs/geometry/types/parametric-stand-cuboid-side"}}');var s=n(4848),d=n(8453);const r={title:"Stand Cuboid Centered",sidebar_label:"Stand Cuboid Centered"},l=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function a(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stand Cuboid Centered",src:n(8534).A+"",width:"290",height:"600"})}),"\n",(0,s.jsxs)(t.p,{children:["A cube-shaped standing luminaire. This parametric model allows you to define the ",(0,s.jsx)(t.code,{children:"TotalHeight"})," and the ",(0,s.jsx)(t.code,{children:"Height"})," of the luminaire, not including the stand."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The stand height is the ",(0,s.jsx)(t.code,{children:"TotalHeight"})," minus the luminaire ",(0,s.jsx)(t.code,{children:"Height"}),". The stand is always in the middle of the luminaire."]}),"\n",(0,s.jsxs)(t.li,{children:["Default length and width of the foot will be the same as the main ",(0,s.jsx)(t.code,{children:"Length"})," and ",(0,s.jsx)(t.code,{children:"Width"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Default height of the foot is 2 cm. Width and length of the stand are 5 cm. Luminous dimensions must be smaller than the main dimensions."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Type"})," \u279c ",(0,s.jsx)(t.code,{children:"Direct"}),": LEO and LES placed at the bottom center of the luminaire. All four sides grow upwards with ",(0,s.jsx)(t.code,{children:"LumimousHeight"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Type"})," \u279c ",(0,s.jsx)(t.code,{children:"Indirect"}),": LEO and LES placed at the top center of the luminaire. All four sides grow downwards with ",(0,s.jsx)(t.code,{children:"LumimousHeight"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Type"})," \u279c ",(0,s.jsx)(t.code,{children:"DirectIndirect"}),": LEO placed in the center of the luminaire. LES on top and bottom surfaces centered. ",(0,s.jsx)(t.code,{children:"LuminousHeight"})," > 0 means LES on all four surfaces."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Width"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Length"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Height"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LuminousWidth"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LuminousLength"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LuminousHeight"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TopWidth"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TopLength"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TotalHeight"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Direct, Indirect, DirectIndirect"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<xs:element name="StandCuboidCentered">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>\n      <xs:element name="TopLength" type="xs:int" minOccurs="0"/>\n      <xs:element name="TotalHeight" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="Type" minOccurs="0">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Direct"/>\n            <xs:enumeration value="Indirect"/>\n            <xs:enumeration value="DirectIndirect"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <StandCuboidCentered>\n    <Width>350</Width>\n    <Length>350</Length>\n    <Height>80</Height>\n    <LuminousWidth>330</LuminousWidth>\n    <LuminousLength>330</LuminousLength>\n    <TotalHeight>1800</TotalHeight>\n  </StandCuboidCentered>\n</P3D>\n"})})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8534:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/stand-cuboid-centered-143ed77c85dce4bf4267358e9c3ca3bb.webp"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);