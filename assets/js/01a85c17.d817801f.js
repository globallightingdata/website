"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[4013],{3548:(e,t,a)=>{a.d(t,{n4:()=>c,Ne:()=>Z,ci:()=>P,CS:()=>f,wj:()=>l,nO:()=>m,iZ:()=>b,cH:()=>y});var s=a(7294),n=a(902),i=a(5102),r=a(5893);function l(){const e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function m(){const e=(0,s.useContext)(o);if(null===e)throw new n.i6("BlogPostProvider");return e}var d=a(4996),u=a(2263);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:x({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){const{siteConfig:t}=(0,u.Z)(),{withBaseUrl:a}=(0,d.Cg)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,m=s.image??n.image,d=n.keywords??[],u=`${t.url}${i.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:l,name:l,description:o,datePublished:r,...f?{dateModified:f}:{},...h(i.authors),...p(m,a,l),...d?{keywords:d}:{}}}(e.content,t,a)))}}function b(){const e=l(),{assets:t,metadata:a}=m(),{siteConfig:s}=(0,u.Z)(),{withBaseUrl:n}=(0,d.Cg)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,j=c.keywords??[],x=f?g(f):void 0,N=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:r,name:r,description:o,datePublished:i,...x?{dateModified:x}:{},...h(a.authors),...p(b,n,r),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function x(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var N=a(6550),v=a(3692),C=a(7392),k=a(8596);function y(e){const{pathname:t}=(0,N.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.Mg)(e.permalink,t))}(e,t)))),[e,t])}function P(e){const t=(0,C.vM)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function Z(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},1059:(e,t,a)=>{a.d(t,{Z:()=>L});var s=a(7294),n=a(512),i=a(3211),r=a(7524),l=a(5999),o=a(3548),c=a(6668),m=a(2503),d=a(5893);function u(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(m.Z,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.L)().blog.sidebar.groupByYear){const e=(0,o.ci)(t);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,d.jsx)(u,{year:t,yearGroupHeadingClassName:a,children:(0,d.jsx)(s,{items:n})},t)}))})}return(0,d.jsx)(s,{items:t})}const h=(0,s.memo)(g),p="sidebar_re4s",f="sidebarItemTitle_pO2u",b="sidebarItemList_Yudw",j="sidebarItem__DBe",x="sidebarItemLink_mo7H",N="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",C=e=>{let{items:t}=e;return(0,d.jsx)(o.Ne,{items:t,ulClassName:(0,n.Z)(b,"clean-list"),liClassName:j,linkClassName:x,linkActiveClassName:N})};function k(e){let{sidebar:t}=e;const a=(0,o.cH)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,n.Z)(p,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,n.Z)(f,"margin-bottom--md"),children:t.title}),(0,d.jsx)(h,{items:a,ListComponent:C,yearGroupHeadingClassName:v})]})})}const y=(0,s.memo)(k);var P=a(3102);const Z={yearGroupHeading:"yearGroupHeading_QT03"},_=e=>{let{items:t}=e;return(0,d.jsx)(o.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.cH)(t.items);return(0,d.jsx)(h,{items:a,ListComponent:_,yearGroupHeadingClassName:Z.yearGroupHeading})}function B(e){return(0,d.jsx)(P.Zo,{component:w,props:e})}const H=(0,s.memo)(B);function M(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?(0,d.jsx)(H,{sidebar:t}):(0,d.jsx)(y,{sidebar:t}):null}function L(e){const{sidebar:t,toc:a,children:s,...r}=e,l=t&&t.items.length>0;return(0,d.jsx)(i.Z,{...r,children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(M,{sidebar:t}),(0,d.jsx)("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,d.jsx)("div",{className:"col col--2",children:a})]})})})}},1223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(7294);var s=a(512),n=a(5999);const i=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(1667),l=a(5281),o=a(1059),c=a(3008),m=a(2503);const d={tag:"tag_Nnez"};var u=a(5893);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(c.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var p=a(197);function f(e){let{tags:t,sidebar:a}=e;const n=i();return(0,u.jsxs)(r.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(r.d,{title:n}),(0,u.jsx)(p.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(o.Z,{sidebar:a,children:[(0,u.jsx)(m.Z,{as:"h1",children:n}),(0,u.jsx)(h,{tags:t})]})]})}},3008:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var s=a(512),n=a(3692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(5893);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.Z,{href:t,title:o,className:(0,s.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}}}]);