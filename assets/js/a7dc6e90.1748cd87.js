"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[6942],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return p}});var o=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=o.createContext({}),u=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},d=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(r),p=i,g=c["".concat(s,".").concat(p)]||c[p]||f[p]||n;return r?o.createElement(g,a(a({ref:e},d),{},{components:r})):o.createElement(g,a({ref:e},d))}));function p(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,a=new Array(n);a[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2687:function(t,e,r){r.r(e),r.d(e,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=r(7462),i=r(3366),n=(r(7294),r(3905)),a=["components"],l={},s="Tools",u={type:"mdx",permalink:"/tools",source:"@site/src/pages/tools.md",title:"Tools",description:"With the new Tools \u201cGLDF-Editor\u201d and \u201cL3D-Editor\u201d it is much easier to view, edit and create L3D and GLDF files than with just standard text editors. The tools are free to use for everyone.",frontMatter:{}},d=[{value:"GLDF Tooling",id:"gldf-tooling",level:2},{value:"GLDF Editor -beta-",id:"gldf-editor--beta-",level:2},{value:"L3D Editor -beta-",id:"l3d-editor--beta-",level:2},{value:"Feedback",id:"feedback",level:2}],f={toc:d};function c(t){var e=t.components,l=(0,i.Z)(t,a);return(0,n.kt)("wrapper",(0,o.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tools"},"Tools"),(0,n.kt)("p",null,"With the new Tools \u201cGLDF-Editor\u201d and \u201cL3D-Editor\u201d it is much easier to view, edit and create L3D and GLDF files than with just standard text editors. The tools are free to use for everyone."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gldf-editor.gldf.io"},"gldf-editor.gldf.io"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://l3d-editor.gldf.io"},"l3d-editor.gldf.io")),(0,n.kt)("h2",{id:"gldf-tooling"},"GLDF Tooling"),(0,n.kt)("p",null,"GLDF is open source, published under MIT licence. So everybody can use GLDF and create applications to generate or interpret GLDF. Even as commercial applications. RELUX and DIAL do the first step and provide the first tooling for L3D and GLDF. With this tools it is much easier to view, edit and create L3D and GLDF files as just with standard text editors. The tools are free to use. With this tools we hope that a larger community will start to investigate the possibilities of GLDF. Also professional data format experts could use this tools to get a better access to the new lighting formats."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Logos",src:r(1455).Z,width:"350",height:"188"})),(0,n.kt)("h2",{id:"gldf-editor--beta-"},"GLDF Editor -beta-"),(0,n.kt)("p",null,"GLDF Editor is a web application to create and modify GLDF files. It runs in browsers and handles files from the local hard drive. GLDF Editor can be used to view existing GLDF files as well as to change them. To create a new GLDF file a template from a set of different complexity levels can be selected on startup. The GLDFs can be enriched with assets like images, photometric files, PDF documents or 3D geometries in the open L3D format. The assets can be uploaded from the local file system or just linked with an URL. It is possible to view and edit almost all the native properties of GLDF. The GLDF Editor is just to be used with one file at once."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot GLDF Editor",src:r(5756).Z,width:"430",height:"228"}),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gldf-editor.gldf.io"},"gldf-editor.gldf.io")),(0,n.kt)("h2",{id:"l3d-editor--beta-"},"L3D Editor -beta-"),(0,n.kt)("p",null,"L3D is the new 3D geometry file format for GLDF. It is comparable to the old r3d and m3d formats, but modern and open for everyone. With the L3D Editor it is possible to create a full L3D file with a custom geometry. With the tool it is possible to set light emitter objects (LEO), joints, electrical connectors, sensors, pendulum connectors and light emitting surfaces (LES). The geometry has to be imported from OBJ files. OBJ is an open and very common 3D data format. You can export OBJ from many 3D modelling applications. The L3D Editor is a web application running in browsers. The tool can open existing L3D files from the hard drive and allows to change them. L3D Editor stores the resulting L3D files on the local hard drive."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot L3D Editor",src:r(9984).Z,width:"430",height:"212"}),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://l3d-editor.gldf.io"},"l3d-editor.gldf.io")),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"Both tools are new and in a beta state. We are happy to get your feedback, failure reports and wishes. Please send everything related the GLDF Editor to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@relux.com"},"support@relux.com")," and everything related to the L3D Editor to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@dialux.com"},"support@dialux.com"),"."))}c.isMDXComponent=!0},1455:function(t,e){e.Z="data:image/webp;base64,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"},5756:function(t,e){e.Z="data:image/webp;base64,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"},9984:function(t,e){e.Z="data:image/webp;base64,UklGRpgQAABXRUJQVlA4IIwQAAAUUQCdASquAdQAAAA0Bu9J3SVBR1tXyS9GcLlRFC2HnktN03nfINOo3o68qcZrU4nPzpf2fevwAsR+073Lwtvtvm9fheb/Hr4Lv2T/o+wH/M/756xH+55eP2/1F+l8ZMOj+E/oz/T8DAM8jiQ19rFbD8svBJRelspYa4t3RatIjkb3P6WGViU5YP9xi2Y+rvGptJs4uvVMvXEJ9imC39UFTR8xzcebwRoYNv52geNs3dQfWW1tyrHkg2pGOpf6/bh5rFGCl1yvpQD4XUFmhY6k8zcMVks4fpFh4g72ysc3tNxGm+/BP7MniiK5cc2yjL7Cf1k69qL5XDol6NH8QTj410CPBxRSHz6g9SdtMknu0BEliSFBOHheOkRoeN7TAbyYvXQbImNTmCfP+s4Oe7fzBXF8uGnjCaJ2+Hm4Xi+MRnpCXQ/EtdM/0vu2iYUSshqcI05X+O9nW6MgOZPcsD/YcGXFhJ7nkoqIezzlw0Y95sSfJUtenzbiwX+d9b0kphLGN9Go4mdYcE1kGljiTGm2hrP/bPZi39jwLdv6B7G33ZE8Vb6Kug71+ryVDJMZPGq4c9vOb2PXFc+y1Y/Tp/HkKJW8RZtCCF5oMlJFRTeRshcTekOr+AWhnGHGbOdeXj0Pu5OdfqJGWaWrn7TXmW1WYHtj7JTPsmamGq2rkvPCjfkRxc4PBiDy2gKbtrZ5DOayvIcdQTHJwGy+2PkswMsLbeqfE9fiLiwz72Jm9w6N7RCn+ISfpzCwJZ6LscwBJQ4G4+MMb+fwoHDs4aJ46TJIaxMcEnNsMoFdPg+z9CvXUmmvFkwhSUo2/t/vH2vuQ7jcA/JIOsVl2eETW6EZRybmiiQxgh+Mk1rWjTelGIADAAAA/tbAfrjntcoDdwyzfXfuazreKnBE8oslv0VwB7N/7ZtrPSCt/G8hJU+SmU6pJ0Dzcy2hcFROMIUP/ChTHRHq8B7sjjzozrPWftPEUaddFNa0o1+hlVvLJX3gu6zTv/K0KTLEK3h9aZo0F5DLSUU8XjtvgLocpD7GA3Uz4t5xUQSPy66m6Rf7o8BV/Kcduu6Za8JHo+xDe8TiNFbssI/Gg1qn66hL0KaXTZ7iRK9FwFv0uXg8DasI2od7ImCoSXl/1+JTeOGrYN5DuiHzSkwAOcACUPsYb4/TQjAg9I6NATnjovkRQUKZNodikQu1n0r5Ko7lL6NIquVpEBnMvKH3ebiuziyECQEMffTPdg/ZQufaxD3fwWryj/cmtvdrojAt/p69j2TxPevy7jQ91iB2X+AYO9cxrX0Vm2qTq/89Dk+BLT5vYD+TnKVvw/hWU/R935kXRvc7ldQJ3WaXEBDB20qZxLlEyP2EDVmOJKgI4sUqbH4GqlBP2YO9s1Amfkyho3yXQCUVEpq43ZF8lwcNVLGJ6ncsRrKYopIOhk7B1eO6SfR2YNpVHu/EbUeU8HwCsCN1mXzaGJ41Gg7qWYcLGYt4Ig5ebDAC3VrLBPBIbPscyJP2wz/+E5maW9BlRAQsTos5dBp3o8fHULiZrhC0SuPYnM0hgSkZ1rtLpePq66WUm8l+EyUamIGo3V/ts7mhkHtDFR+gGGWWnyIRu3hsQGK3Q9Q3q1rVNtkPSmo2kag3UmP/oFMxKQjJPZCfXrzQmjELSmOgkCRGUS7NTqxBp896qckVrTZI5fCuJR0+AME9n5KY30s3yRsWihFRYD3vSSZJxKlXe53QFNkr3TMJ7+Wg0fVV4Cl4ku020Pl4kL74vtqh8QQXHCgIks2buD4N/M7OphE4DbQuZqt80+4zZfVwth5x4BaV+MwWM1rtpAKBIiR+NtvDM20UA2RtpIrhbXc9VAJ3fAH0S+9CHnXpvcgDk/IJz8nVHS9ILn2SJdnhuVWmpdIOhbZUYTdo6x3v0JyzbhEyCVQ0UocVuwkNR3mBNPQuX99Icxc321OUyaOyKq7XwFfZ1kV0dg32pdNvktLBrsrNapl1SizicNNTfekeQgqfUGFlbgbTsVySxYVPlxMOT+OzT66Q74Cln+//df0TvleRr1xGyJsCsFYjjk2GsO5M9/KwEbGd0wGcpOKruxXC3+T9y/VKTNnysy1GW54PXcpXub0qr1+8KXWwkISpWU1wHo9zSutLNvrCAE1U5XhVVLAP54oNMZ+eQhJhg1tiU7st5GaAF/FOZTQnh+9tDoHdcjxY82RAW432UV3CMoyyOKDtrGzcwpPeSHLnVjXQcBEniDRTVxouVvl57PLxsnG3rfkMufh5loojhogZ0XDOblQKO9efSdw+NxnyOCZoJ4o9c2XDIgUcLYRrBdTx9Gg+na9+QEiY9+WTLTdn/usZZ0JGrRhGkKJ5pi/kKAi/MvJdYjf0VkgcephKSLN/TKJnD1ODVPaDm4FHbu/3zozuIsaGs7yWllKMUeAMZBr1fvYfXK3bbyZw1l0+IEe0LFpCEtviOLRHITxAl0lMcRYjDEmObLNEjFkZ+r2BVKJ1BI+8jd26kcL0PYA8saCZ3PIZ0Dxhf6lW8/3z/If/gzPFDUM+S8v6kfakQ32UNYESsm10yDXL9CpvEb+0lGGt//W7mds0tHCXP96A89Yy1/9U+fuuz/1+yW2g/ZU+9/00zj/mGlJ9jFmX29cG7CnCoyteaMrO7LLybW+Dak5bq40kmFPZ/pBSqtX/l1W2PiIBkqLRxzmIK8XD0Ag434cACpCm/mw4usYSPSXKppkk5gDeVRfngn/N6x5K5xsYDpV4GmoeOv2ARYr1ODnAU66baX9O8xiO2VHH4jD1j2xTFRx/9P1y/FRh4DHHsSulaJSpbJAPyicIInxXU9hEiHY0j6AI+i0mTXzyC+w7MjY+KvAnZ2cY6ZS9UPax9yOjxQBRNiTMtOtPxtS0TgKokv9a4p31xR0ekE6CeUZywMbrWoIW50vtPzgeBwDlKp05hcLfu/SAEbLPXDD3OAoOqjkSX1Oa+wzTPjMO9hlLr5pIFi3ti6s7Bn5Bx6y04u2LIwH7nYa/GpSOeNQI8yFTgNqBJZPNW27lazZgoyeYL2cHpNV8pUXW4OnxyW5y/ulYHh0QSQN62Ssk+VmUXmrpCW5+p2HfQbvF8sgJrDLLuoLqmM+2R/aw9mjmTrQu4iwzO/4wwCRM7Zgxidz1d+4fRVN5mxmvHckE3gXiWubqvDQKQm604K3a+GQ2pAf4j6hUgd7Q5uoeGKb/uXYf3hE/f7McvsuFOmSoDoTrJLdKEbv0796loEfOCfNmL/RnnKrxQPL7CBMIjnshbO6kZZrVO9gPq4zkNOiGs3tgLsK137c9f37snkyyK8F4W21B56riZgySA4fxcQAEPw330Fr3oChmXZbQ0JrSBFbnIGz8dOg3S87N3ho5tU0fY7BWADTHuI80j1aK4u9Txe5ndr1TofPkO4dxpaKf3vD2WZe1K9Qlez51NCvsO5t0D965t7YAB7WaEt9kP1IKCCslNacyT/uRGlQEguMQjKEtlKLueRd7VE2TzcIEf51Hb42BmK0ZFQFNHvyUchQWxFl65GQV3fSkwzI4R0hQDlHURs3AeXTAadrwU5NuIK86vVecIiLqeNJwMM61KV0lhVmgGrZLZoXM/1NNYCyr36Ywz1bK+p6GGVH9OBAzgQx7TcVeDiCTJu+ak1r+IkmO1ndgMSYw6wTrMO3goLDRjd8knxZM15lMrkEkWxzOHV+g4tmfHN9OsDXpUnpFBBzLUMKO4mzFAf//5e/MjpR7LVaXU//aI/P5uM1Aav9jBH1i1rvO2GvXc6e0UW7RJBoLB+A3SRkkHcIjQq/BayqScaGnWKyHxwdbJ8oWMnygPf8FhuTEZEoq1/hXNFGzTg+itwjomoOBeHwQUmar7EjL3njAIws6DSyXqZWP6olZjPkJuqZ9rvC7WEywuK4zzZ2XnZF7G0T8cDbfWlp4Y+IHWXHF+yQuQN0fNl06pD8YqsAUp7liZ9wsXkzb8vN3fYUITPYEw9r9kDNl1t2/TwxHcYMij2SdfrgFIq1eJeq2ul/CQhoakbptJtEQ6guQaWsjxbLNzibH2eClaZZqc9B6pUvnnzVMEWUy6Zt+Sy6iVBmz51SaFKE7HdMfM3M/Ku9rqZUPpTooo6zyfxX/Y2CPwRWk1qs+adLi8cwntDUHKptWuPc1eK6A5doxtk4Wy3zTh8Dmg0k3+2ks+9j0PhvjS14cM2MKes9DuMHr9joqGDGwk2Xa+odUaitaur1YCihXh7ioa9jCvOpvbCYsPIp84+3cuHALgVnJIGV/T20YLrTW4bW6WAD8RwfDYXG++YQhvi6VsbixMmyL77wR+uayz+8AkWSH6c0db7Rg+RY0QpSQrWYfMCaYnjJjjTvyv4AlHdr0pDPvckuOX1cX9yIz+RwkbMFsXT5U+ZiimKIC1F+uiP6gGETEFsaJpNA748CoAGW8KDb2cjQcKpq6dvHJsfJzrNlTm0w2GC7ELfszEov/uGLsKNuQSEUmOdlmyqZt+1Bt6TSegNJifVqiUR7hwibd8SVckNdi1QB0vo7L5nE+99QYGgSKe4MmpMwbTXFvlUxLRCGoa5K1ZezX2mY8zLsXUp7z4UDubnN6BCtihJwr5KUVNmElKrgr0KzBGG5lJQZmLET7n5HWE18KKU6uWcci8Sy723pGncSYnHhjPse9tYNtg+K7dcR2x9RygFid6ZSvFX0etWoGdufRPP2bFyd6ncnHDOdN8gyWDXTEYtDMkwQa3CgvA4UpB+68Z3X4RCLgc9Game6oIIZUCbuC+vtNeVypgI1LeYbcnDuMjeEYCEu28p9fuTa89pl+hL7H5WcpHaSj53VhgZPXOASji7sOnYWUb/YkERDU3jFj0K9wm28h++GNhwOQIsGtvZQ0oeflIVRicfJ503jMj1xti4/oB+7CVpeYpG7sSEKX5vGAu2AbubZsxEC/dnk3Zi1mF7uxufCkMsneUFmlTTFqVyEtg+5egJAAkcLJU/XFn4Ygy7krH50bP67w5+9HkPBFcbqtrnWvNtZFC32nAMvM06Yoach/AbICzKBKsXtCA10La2VGFlRj8MI+LWPA24iGS7+bziorIsusautnbgnqYkffsVQhfvj98blelqyTDqo0Z5It6zVfzQqEr0Tzq9aVeSPSbAYp6gTPYcfHNEcjIQoQCGcd+ACloHd4o1lVrjBl+0Dv3ewbOcv8n9iSXmd6ZwB+aGpYNzY7PsaVnqRERsTknL+B+Vj5Jtv1ZvDxpEc4Y+9yeeDM+VFS3XTJUJz/6BIsv+DYpjuddkiqmdQItPxZXKyrwKc5VdyJONQtwmk5DHn4jP8ltXWhzqttUefENmGHK2tX4jRKCYPLvtoStSUJUlPBWg0kP88cIC3dXQK0IJ2nRhyJBRAV6VFFL1Xt5zoTp06JuyhDXSowiKQmRGoWFNvYXEAhJYU6eFH7XOgYllRN4kMHclaq0a6ZvWNJpxXnfa4q59LIZhymVvuxDs02l3jd5TQArWz6n6hENTbS7Eecy2Td2Ci5cThR12VknlCbOCHv8xge7BTjJgrHi8eiL6nFTvy+UVkmwMspIgK+NFzfwy3YY3qT7QJjciq/Oyk1Wyxd+dEtUbWEt0Wta3AGEkIrJ2DaquOThl47bB6PohEuHPegkZVWrh4mgVqaQWe8db6iqZKdMRiNqEYoAAA="}}]);