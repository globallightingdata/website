"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[4917],{620:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=i(5893),s=i(1151);const l={title:"Bollard Side",sidebar_label:"Bollard Side"},r=void 0,d={id:"geometry/types/parametric-bollard-side",title:"Bollard Side",description:"Description",source:"@site/docs/geometry/types/parametric-bollard-side.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-bollard-side",permalink:"/docs/geometry/types/parametric-bollard-side",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-bollard-side.md",tags:[],version:"current",frontMatter:{title:"Bollard Side",sidebar_label:"Bollard Side"},sidebar:"sidebar",previous:{title:"Bollard Cylinder",permalink:"/docs/geometry/types/parametric-bollard-cylinder"},next:{title:"Street Cylinder Centered",permalink:"/docs/geometry/types/parametric-street-cylinder-centered"}},h={},c=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function o(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Bollard Side",src:i(32).Z+"",width:"321",height:"500"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"BollardSide"})," is a Cube-shaped bollard with a square-shaped luminous surface aligned to C0 direction."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The parameter ",(0,n.jsx)(t.code,{children:"Height"})," will set the height of the head, whereas the ",(0,n.jsx)(t.code,{children:"TotalHeight"})," will affect the size of the entire model."]}),"\n",(0,n.jsx)(t.li,{children:"The default setting is one luminous surface aligned to C0."}),"\n",(0,n.jsx)(t.li,{children:"The default distance of the luminous surface is 2% of the height measured from the upper edge."}),"\n",(0,n.jsx)(t.li,{children:"There is only one luminous surface."}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Width"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Length"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Height"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LuminousWidth"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LuminousLength"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LuminousHeight"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TotalHeight"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<xs:element name="BollardSide">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Width" type="xs:int"/>\n      <xs:element name="Length" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousWidth" type="xs:int"/>\n      <xs:element name="LuminousLength" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int"/>\n      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,n.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <BollardSide>\n    <Width>400</Width>\n    <Length>400</Length>\n    <Height>1300</Height>\n    <LuminousWidth>300</LuminousWidth>\n    <LuminousLength>100</LuminousLength>\n    <LuminousHeight>100</LuminousHeight>\n  </BollardSide>\n</P3D>\n"})})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},32:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>r});var n=i(7294);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);