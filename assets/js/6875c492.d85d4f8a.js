"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[8610],{9703:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(5999),s=n(2244),i=n(5893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.Z,{permalink:n,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},1161:(e,t,n)=>{n.d(t,{Z:()=>R});n(7294);var a=n(512),s=n(3548),i=n(5893);function r(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var l=n(3692);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,s.nO)(),{permalink:c,title:d}=n,g=r?"h1":"h2";return(0,i.jsx)(g,{className:(0,a.Z)(o.title,t),children:r?d:(0,i.jsx)(l.Z,{to:c,children:d})})}var d=n(5999),g=n(8824),u=n(9788);const m={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.c)();return t=>{const n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,s.nO)(),{date:r,readingTime:l}=n,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.Z)(m.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(h,{readingTime:l})]})]});var c}var b=n(6788);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function Z(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,s.nO)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,i.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.Z)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,i.jsx)(b.Z,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(j,{}),(0,i.jsx)(Z,{})]})}var N=n(8780),T=n(5896);function k(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,s.nO)();return(0,i.jsx)("div",{id:r?N.uR:void 0,className:(0,a.Z)("markdown",n),children:(0,i.jsx)(T.Z,{children:t})})}var w=n(5281),_=n(7265),y=n(1526);function P(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function O(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(l.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(P,{})})}function A(){const{metadata:e,isBlogPostPage:t}=(0,s.nO)(),{tags:n,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=n.length>0;if(!(u||g||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",w.k.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(y.Z,{tags:n})})}),e&&(0,i.jsx)(_.Z,{className:(0,a.Z)("margin-top--sm",w.k.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.Z)("col",{"col--9":g}),children:(0,i.jsx)(y.Z,{tags:n})}),g&&(0,i.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,i.jsx)(O,{blogPostTitle:r,to:e.permalink})})]})}function R(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.nO)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,a.Z)(l,n),children:[(0,i.jsx)(v,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(A,{})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(3548),s=n(1161),i=n(5893);function r(e){let{items:t,component:n=s.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.n4,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(7294);var a=n(512),s=n(5999),i=n(1667),r=n(5281),l=n(8242),o=n(3692),c=n(1059),d=n(9703),g=n(197),u=n(9985),m=n(3230),h=n(2503),p=n(5893);function x(e){let{tag:t}=e;const n=(0,l.Wi)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.d,{title:n,description:t.description}),(0,p.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=(0,l.Wi)(t);return(0,p.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(m.Z,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.Z,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.Z,{href:t.allTagsPath,children:(0,p.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.Z,{items:n}),(0,p.jsx)(d.Z,{metadata:i})]})}function b(e){return(0,p.jsxs)(i.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},3230:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(512),s=n(4061),i=n(5281),r=n(9047),l=n(5893);function o(e){let{className:t}=e;return(0,l.jsx)(r.Z,{type:"caution",title:(0,l.jsx)(s.cI,{}),className:(0,a.Z)(t,i.k.common.unlistedBanner),children:(0,l.jsx)(s.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.T$,{}),(0,l.jsx)(o,{...e})]})}},2244:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(512),s=n(3692),i=n(5893);function r(e){const{permalink:t,title:n,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3008:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var a=n(512),s=n(3692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(5893);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(s.Z,{href:t,title:o,className:(0,a.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},1526:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(512),s=n(5999),i=n(3008);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(5893);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.Z)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.Z,{...e})},e.permalink)))})]})}},8242:(e,t,n)=>{n.d(t,{HV:()=>l,Wi:()=>r});n(7294);var a=n(5999),s=n(8824);n(5893);function i(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,a.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},4061:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>r,eU:()=>l,ht:()=>c,xo:()=>d});n(7294);var a=n(5999),s=n(5742),i=n(5893);function r(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);