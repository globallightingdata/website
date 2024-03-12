"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[3852],{6287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(5893),i=n(1151);const a={title:"Variant over Global Data",sidebar_label:"Variant over Global"},o=void 0,s={id:"conventions/variant-over-global",title:"Variant over Global Data",description:"GLDF files describe single products and Variants thereof. That said, even though you define a single product in a GLDF file, every product consists of at least one Variant, but there is no limit to the number of Variants of a single product you can add to a GLDF file.",source:"@site/docs/conventions/variant-over-global.md",sourceDirName:"conventions",slug:"/conventions/variant-over-global",permalink:"/docs/conventions/variant-over-global",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/conventions/variant-over-global.md",tags:[],version:"current",frontMatter:{title:"Variant over Global Data",sidebar_label:"Variant over Global"},sidebar:"sidebar",previous:{title:"GLDF over Photometry",permalink:"/docs/conventions/gldf-over-ldc"},next:{title:"Introduction",permalink:"/docs/geometry/introduction"}},l={},c=[{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["GLDF files describe single products and ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variants"})})," thereof. That said, even though you define a single product in a GLDF file, every product consists of at least one ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variant"})}),", but there is no limit to the number of ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variants"})})," of a single product you can add to a GLDF file."]}),"\n",(0,r.jsxs)(t.p,{children:["Some information applies to all ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variants"})})," of a product. Other information applies to specific ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variants"})})," only."]}),"\n",(0,r.jsxs)(t.p,{children:["For this reason, we divided the GLDF product definitions into two parts. The first part is the ",(0,r.jsx)(t.a,{href:"/docs/structure/product",children:(0,r.jsx)(t.code,{children:"ProductMetaData"})}),". Anything defined here will apply to all variants in the GLDF file."]}),"\n",(0,r.jsxs)(t.p,{children:["The second part is the ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variants"})})," part. You can define the variations of your product and apply properties to the different ",(0,r.jsx)(t.a,{href:"/docs/structure/variant",children:(0,r.jsx)(t.code,{children:"Variants"})})," individually instead of globally in the ",(0,r.jsx)(t.a,{href:"/docs/structure/product",children:(0,r.jsx)(t.code,{children:"ProductMetaData"})})," part above."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Convention",type:"important",children:[(0,r.jsxs)(t.p,{children:["If a property is present in ",(0,r.jsx)(t.code,{children:"ProductMetaData"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["it ",(0,r.jsx)(t.strong,{children:"applies to all variants"})," in the gldf file"]}),"\n",(0,r.jsxs)(t.li,{children:["properties ",(0,r.jsx)(t.strong,{children:"can be overwritten"})," or enhanced ",(0,r.jsx)(t.strong,{children:"by the variants"})]}),"\n"]}),(0,r.jsxs)(t.p,{children:["This convention ",(0,r.jsx)(t.strong,{children:"always prevails"})," without having to be explicitly defined."]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"Let's assume you have a standing luminaire in your product portfolio with different electrical components for other markets. You can apply all the same pictures, names, descriptions, etc., to all variants but define separate electrical properties in the electrical section of the descriptive attributes."}),"\n",(0,r.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"You have a track-mounted luminaire that comes with different reflectors. All Luminaires will have the same name, descriptive attributes, etc. However, the 3D Model and the Light distribution would change for the other variants."}),"\n",(0,r.jsxs)(t.p,{children:["For detailed examples with XML code, see ",(0,r.jsx)(t.a,{href:"/docs/structure/product#productmetadata--variants",children:(0,r.jsx)(t.code,{children:"ProductMetaData \u21c4 Variants"})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(7294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);