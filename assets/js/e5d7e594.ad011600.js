"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[6231],{6224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"geometry/types/parametric-wall-triangular","title":"Wall Triangular","description":"Description","source":"@site/docs/geometry/types/parametric-wall-triangular.md","sourceDirName":"geometry/types","slug":"/geometry/types/parametric-wall-triangular","permalink":"/docs/geometry/types/parametric-wall-triangular","draft":false,"unlisted":false,"editUrl":"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-wall-triangular.md","tags":[],"version":"current","frontMatter":{"title":"Wall Triangular","sidebar_label":"Wall Triangular"},"sidebar":"sidebar","previous":{"title":"Wall Cylinder","permalink":"/docs/geometry/types/parametric-wall-cylinder"},"next":{"title":"Bollard Cuboid","permalink":"/docs/geometry/types/parametric-bollard-cuboid"}}');var s=t(4848),l=t(8453);const r={title:"Wall Triangular",sidebar_label:"Wall Triangular"},d=void 0,c={},x=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2},{value:"Example",id:"example",level:3}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wall Triangular",src:t(220).A+"",width:"465",height:"429"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Wall Triangular"})," is a triangular-shaped wall-mounted luminaire."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Width"}),", ",(0,s.jsx)(n.code,{children:"Length"}),", and ",(0,s.jsx)(n.code,{children:"Height"})," determine the housing dimensions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LuminousWidth"}),", ",(0,s.jsx)(n.code,{children:"LuminousLength"}),", and either ",(0,s.jsx)(n.code,{children:"LuminousHeight"})," or ",(0,s.jsx)(n.code,{children:"ReflectorDepth"})," determine the size of the luminous surfaces:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LuminousHeight"})," describes how far the luminous part sticks out of the housing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ReflectorDepth"})," describes how far the luminous part is recessed into the housing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["You can skew the housing by setting ",(0,s.jsx)(n.code,{children:"TopLength"})," and ",(0,s.jsx)(n.code,{children:"TopWidth"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The default ",(0,s.jsx)(n.code,{children:"TopWidth"})," is 80% of the main ",(0,s.jsx)(n.code,{children:"Width"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The default ",(0,s.jsx)(n.code,{children:"TopLength"})," is 80% of the main ",(0,s.jsx)(n.code,{children:"Length"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["You can define the light output areas through ",(0,s.jsx)(n.code,{children:"Type"})," as ",(0,s.jsx)(n.code,{children:"Direct"}),", ",(0,s.jsx)(n.code,{children:"Indirect"}),", or ",(0,s.jsx)(n.code,{children:"DirectIndirect"})," ",(0,s.jsx)(n.em,{children:"(optional)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Optionally, ",(0,s.jsx)(n.code,{children:"HousingColor"})," can be provided as a 4 digit RAL color code."]}),"\n",(0,s.jsxs)(n.li,{children:["Optionally, ",(0,s.jsx)(n.code,{children:"FileName"})," can be provided (without an extension)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Width"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Length"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Height"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"LuminousWidth"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"LuminousLength"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"LuminousHeight"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"ReflectorDepth"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Value in mm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"TopWidth"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["Value in mm (default is 80% of ",(0,s.jsx)(n.code,{children:"Width"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"TopLength"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"int"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["Value in mm (default is 80% of ",(0,s.jsx)(n.code,{children:"Length"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"Direct"}),", ",(0,s.jsx)(n.code,{children:"Indirect"}),", ",(0,s.jsx)(n.code,{children:"DirectIndirect"})," ",(0,s.jsx)(n.em,{children:"(optional)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"HousingColor"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["4 digit RAL color code ",(0,s.jsx)(n.em,{children:"(optional)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"FileName"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["Optional file name (without an extension) ",(0,s.jsx)(n.em,{children:"(optional)"})]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"xsd",children:"XSD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<xs:element name="WallTriangular">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:choice>\n        <xs:element name="LuminousHeight" type="xs:int"/>\n        <xs:element name="ReflectorDepth" type="xs:int"/>\n      </xs:choice>\n      <xs:element name="Type" minOccurs="0">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Direct"/>\n            <xs:enumeration value="Indirect"/>\n            <xs:enumeration value="DirectIndirect"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n      <xs:element name="HousingColor" minOccurs="0">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:pattern value="[1-9][0-9]{3}"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n      <xs:element name="FileName" type="xs:string" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<P3D filename="WallTriangular">\n  <WallTriangular>\n    <Width>120</Width>\n    <Length>250</Length>\n    <Height>200</Height>\n    <LuminousWidth>100</LuminousWidth>\n    <LuminousLength>220</LuminousLength>\n    <LuminousHeight>20</LuminousHeight>\n    <HousingColor>9005</HousingColor>\n    <FileName>example_filename</FileName>\n  </WallTriangular>\n</P3D>\n'})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},220:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/webp;base64,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"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);