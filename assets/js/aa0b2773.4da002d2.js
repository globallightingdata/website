"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[29],{4714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(5893),l=n(1151);const r={title:"Wall Cylinder",sidebar_label:"Wall Cylinder"},s=void 0,c={id:"geometry/types/parametric-wall-cylinder",title:"Wall Cylinder",description:"Description",source:"@site/docs/geometry/types/parametric-wall-cylinder.md",sourceDirName:"geometry/types",slug:"/geometry/types/parametric-wall-cylinder",permalink:"/docs/geometry/types/parametric-wall-cylinder",draft:!1,unlisted:!1,editUrl:"https://github.com/globallightingdata/website/tree/master/docs/geometry/types/parametric-wall-cylinder.md",tags:[],version:"current",frontMatter:{title:"Wall Cylinder",sidebar_label:"Wall Cylinder"},sidebar:"sidebar",previous:{title:"Wall Cuboid",permalink:"/docs/geometry/types/parametric-wall-cuboid"},next:{title:"Wall Triangular",permalink:"/docs/geometry/types/parametric-wall-triangular"}},d={},a=[{value:"Description",id:"description",level:2},{value:"XSD",id:"xsd",level:2},{value:"XML",id:"xml",level:2}];function x(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Wall Cylinder",src:n(8072).Z+"",width:"381",height:"500"})}),"\n",(0,i.jsx)(t.p,{children:"This type is a cylinder-Shaped luminaire that is attached to a wall."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Diameter"})," and ",(0,i.jsx)(t.code,{children:"Height"})," will determine the housing dimensions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"LuminouDiameter"})," will set the size of the luminous surfaces."]}),"\n",(0,i.jsxs)(t.li,{children:["You can define the light output areas through ",(0,i.jsx)(t.code,{children:"Type"})," as ",(0,i.jsx)(t.code,{children:"Direct"}),", ",(0,i.jsx)(t.code,{children:"Indirect"}),", or ",(0,i.jsx)(t.code,{children:"DirectIndirect"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"The base elements default width is 80% of the main diameter."}),"\n",(0,i.jsx)(t.li,{children:"The base elements default depth is twice the distance of the outer point of the cylinder to the inner point of the intersection within the cylinder."}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Diameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Height"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousDiameter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LuminousHeight"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"value in mm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Direct, Indirect, DirectIndirect"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"xsd",children:"XSD"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<xs:element name="WallCylinder">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name="Diameter" type="xs:int"/>\n      <xs:element name="Height" type="xs:int"/>\n      <xs:element name="LuminousDiameter" type="xs:int"/>\n      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>\n      <xs:element name="Type" minOccurs="0">\n        <xs:simpleType>\n          <xs:restriction base="xs:string">\n            <xs:enumeration value="Direct"/>\n            <xs:enumeration value="Indirect"/>\n            <xs:enumeration value="DirectIndirect"/>\n          </xs:restriction>\n        </xs:simpleType>\n      </xs:element>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<P3D>\n  <WallCylinder>\n    <Diameter>100</Diameter>\n    <Height>200</Height>\n    <LuminousDiameter>100</LuminousDiameter>\n    <LuminousHeight>0</LuminousHeight>\n    <Type>DirectIndirect</Type>\n  </WallCylinder>\n</P3D>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8072:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/webp;base64,UklGRpweAABXRUJQVlA4IJAeAADQ3QCdASp9AfQBPoU0k0elIqIhs/9o0KAQiWlu1PeqTlcrbdP2936LY/plcdvwI/OcgOzBn5Oex03D0ALJj9Z9svSO+7ts3B/ax9vUjnN59r7qn+34MXYf3T8oP8T/v/RS/K/6XqD9pf9z7gX6q/6L7YuoB2q/AR/KP7l/ufu9+W/Uv9U/+z/Q/Ah/O/7mTDM+lIiSOXnpHLz0jrr0B1rWta1rWta1rWtayxQ7ve973ve973ve973vZpcrJiQ7ve973ve973vezS5WTEh3e973vcO9nM6t9gTxhtnZrvytiXu4vIXKXq423qqZMoUqzlNKiCANJAUVUzo+C+DSwdl8+SzcpcWHE9/cqCPegARkEPC0U9/fgdFkSoNyc4Z+63yyrgCO7VW5Ri1siZbLVuMW9tCb69aZ9XT7VW1xEqMQCNIWbOm06xRATO6S0qG5Y4sopRXykD3gel9JB6V3ha3k1H49fbw9HcZ078IPwVAEXpjyn625EZKSqvtkRJL+OJ1ihSWDJsv+9+x0NN14TjrhG01QvMy32Wd0usfmQWBeYQNPhruTIaTqVPuvf6e+8zBVZPKJisGtIuLT1QYBl28P6fwwvhSa0f9ns8OmNJJDs6j35ZMQwhSJe6v2ff+vUAVjg1FF4z4YGE6ITbdHY8HgVyqmkvVqY0M9gt6mS5B0dhSeozYBwtOIFfsArAbPhEHnL9K9+UKcuxdhu+YM3JiNCDdux3x2pm656yeNi2CPugilRIEMs0le8yNVKReEoFVkbDwcQmqDoZX+W4J5KOu+um+2lSy2G2tKmt6U3FL0ifJQFOYjZsDh/KPTMtBKyckfV5WVQMGeKOXJBm95JXqzKQkA1Vs0hwk616vqjMZ/qXARxS5sCMLMuqFyebeI/tdCfopPetOQrF6/NjGBHk2YOxtwuQjCuMh3Mn8IchcYC+ofpUpBs+kXyRdfL7YtoywagY7uAAAUNMfBJTV9iyCJXUuyrgD442ZVmVdAMVcOOtcEjTLdSEI1b/7m4OBTeoP/JHjep3zmU7bEBZ77f51uKPBu7jQBInnhf80ATUBW5TJ1QULxbeoGYy2vSwuTK9AfVG/S5cY9Tjh26n4p73Q8VnRQDyFPZvLPvNTvZKJM1bSbK+BhlaxbG6AYGGq0Rh2h5DtihfvjPiMSBxYq79ETZCirp4xS3MTu7+eo0gK1oKpcqGMS7OGpbB+ycUZgpXVjx7nByJRvRFxMMHDkge1eYjfuFNjIjwUh/P9kYJWErKnue12SXvguqSNkK8m52kD+z0mN2S+YQ09wzfIb6tUw3RaS74vpiXNtLhgFVk/fbmvJBqhgfZxhLWi9d1jd2rUrJjpc2F0Lbg6hQR1nh/vfpknqW1DUs6TWY9yJXiQyWZkDXKU7tyPTe0lgBdJTrM6pIVFsuy+VFGi5mRI8Uxs3ivsI7fdQAwKDwa3+YY1vqAFrq7LUx71HZR+xVf7LkZ1JD33Ksay6EO/Enzl04aAsYgHaCvCoBgCLFqXMD280DcD53tAALrSq8+8sZbEwKyJx7dVqxCgOFM3jJf+vNdOTsek2G4fLumIa/5Gv5OPOdqf6cTO2ztsy1vBKfWmBncIsHDq4JNND+ZpApqBw3EcQkA3MMb5qFpZjdQTb7HLm7PhNpmF2+VG439qZB6H/MT1nsU2fxEAxX1D8jvBTGgTUBofcMrg2h4ZIrDHMwyJX4tx3HOlifoxxRzxzJoJMI7YquvzJ/lnVq4bsxUoESZ2V3FTZCcZ5k9qKz+F/GGeTbLj0dpEbyEjP5N5TzHxw7lCIyyaLcfcZfCTBcG9DbOeQ9LqKNMgwrbvTrOn86s0VPOXC5razY2EinBe3JiSzI868594F1Ob6aO2o86rvpt20D5dAfAHyzbvH6Giimw28z1wf9PeVtQ8cHHoGY6+EseVaq0hUik2lxXwC9fD6jspYvm61D/AQnLEPOVo/3jwSejVkfOQMjzrIp0q2T+HMAvZ5B0sYYF35vOcctmV9u6NGFbOUc5xzE66zr48FKtMAOg9dZ9nkbwZfLcCu7vYkb+vljZhlZtuKE3lne9+ooX86GJZkv6cRT0wIqrP2Sxk0Nt32mHCWOxioVRSl/M2lXepnXb/UvyPZoIHeM3qGwQ7NbkZFT3QO3FZZVpf6O/Y6s8WZL3D4lxUolBNUgBnH8RaR2hx0Z6OKR1j7fz3ZRYJ3ZqOh1uVsDlHqLisyIN0YGmVdz4GqLuqYidhUKVfDRVrHJAvJSwJq+8rlwkRqmtE7yN6arAHWGaBek9a3l9QjI1vMzv/k7RHA6owV/KyVV/0+EQeZQyiP9U6Kd7fQvRr9fcrCQ2BPdAdSWa4N5rWH0wwmnMOSRbmJDqpblAcVXzs233J9KDsAAP779wAAAAAAAAAAXBblt8lZZp0ayfEzwe9jnZa7Nb4e0wcpTEg/JUliI2REoqXbULnITzJ//GK7PYVKn/NakXADakaJbcRe3qxJ4/minTlP+8ITwr3jt9MCjFsSlslHCkd3wyiyHVdMhbbePBkpdtF+cR1wfF3Xm8zYIOtVv0yHUUAkhQhkDoSqW2APWpx4m3qn+SCl85HP6TOncn9/lceXGASR/EEVOh8ULTjYwDNMTy4RT8W9BkHc+No0lOyfl7YbtQb2grRxq8kmd215l/Dj0wgTwOqiKLjInO6y9yyzzRXCjsYKeWBaLY7jna30mz7XT/xaZ+Cgdu5WVqLf8s97q9ofEDrzpi+gKhZ3uIwZD286/1h9vknZdT9cCPLGCjZ1dNvZeu6syqoQol5WkwUJTP86PLGeZDPT4Y5IeHH5mAlhx0GK8/elPhwF0ErR/U+b0RZXVIcGUp3IHVGss9nEu8DVGCaSBaL6qdQA2p/bLm55g6Emx6L8DE80UMJTwgmBwVoOk1J/HC8//4oF/37ugEHrn3ryL6mMqUs4uENrSG1n3CWFAav/CbpiyisPHLjz0F3Fhrcmo/S1REh51zScr+plfE6eOYGxgdl3fUQG9haNyzegWHNjJZOO54kDp9N+9e4JSf8IzYDACnNg8c3PkXC+vrPn/4dP/6ELC4UDVF3OMUiDvXxgH6wVB+XZuxgaHgaNTukaP29rZ/fbO5uXDxE/R4uNk+M+nm3WmcrIkMy5oHEJu9qTEYxIr29L/fuk3bFpluIJtsCNW0UMMmMftIm89DQx8IZjefHZ0+tCtzyG6yu3MVcLLL+Aw/GARjzIYf8+kkX0i6bqpiYcXmE46EaQCX4SYaXBHReOknunzt32FCrCPLLKzwHOnvV202CQ38Wi2pnOthwm3QhFAZZJl/k6lxvNJ76LNEOz4XbES2zJykPNO0agiJzCkEdBV/wW6+mXgx4eqv4AlzuH32V7KaorAHs6V27ykW0EoErlo9+FLB6g0J5ZX76EJzBCDzj/BPl/KjGgQN1W9loR9h/Qfxe7q2uEysw95xze4wH0I+TpIioPdYy4wAz40ONfeAd35WdL25aI6TQaPvA3C5qJm1uTQKYhfoFCzesfqIEQ7EiPuVvNWjWMzS/V7v6bUyRTPeSTQ7dHY6PFUAJ37x+fCKfLbIdVJ4UutGJgDRXP+isRH7WFwfqY9gjU+DRxGBbkVTAiSlqazD+2kVuiuOm9K7+d20dwkM5pmZnc49WdBLB6Bx3Mx+29DOkbAwi4kBYCKJjivOJbIDleJvlUEFUrhjhK8HJ9uCt0M6zueD9+CjK2+qM+z5VLrK5C1ebhtyPG1FxWc2Nbz8QHlSNO8ESJlBk2VMS4BIqS9xC2shop0HAfq3ZpdmuPL4fvFXYJLcwvC70Wx9d01BuE4wZNfFSzez6p+7TgY6VMU/LtY4KkoOoub042ZBHpZ3ItdO0ZPWQHnGsRE3CFoXmx/kS7YEqWXmJcXSKPrPwZZRZQJd02XWAtaOyIlwKWsxNAi8QqWgQ9GYiIkuYaQQUkiURmKBTza4t47Ez+2PpP2ekvRJY/qwx5kx8pQ6KDdEtTLFiSyO1F970TTrmepwywEFDR4MgeS2jlIZkInRgjS8vltHzwLzl9v5SKw34ia85dSPNnTHgPyG6NeUEgAMsdd2YB1DmsBWbSkhtsxMVM74XBWLBt6kpjhuIB2+Qi4GW5pPLaATDcTTLrqTiu96f8fdiZ8dX31m0gu1bKOPTCJMMZJS0Kq/Akmk/J/eTtxTpG28M/bc0p15OF8mDTFhGNT/UjBiLu1mzTl+cSUvde4sB3146USy+qcYFA7tHFDNoAx89iHCHQWUMVGggG2JyCnU8a4vxP+R+3bGwF8yTfPxQK3DoXJ3gjuP8X8BtejNEjE4mdlL2VjBBdVESqecOn0F9w4ciECEijq1P9UXig/LGmEgC2CBpGzgGKSv5o/4K0Jqog1l5waHTbdO6hrr5/telUIOsrr7ucD8AEV60oi4wXC1m0iHZjsXcPfleSeiz2CHJaf5hdqBlERH/lcdt7gxKVIdF4OZxDnWcbAgiTP4Yuq1LRM0ENX9zeGjHWNeKmbsadncTe5GaSGL2YroZFJUO6WxGJvgmDbfkYfjyNinggpKyniuVyS2VDuLF0dfhj84Z/7YlLJlTKFjOOpqj1b3KlcPzojZQoBkHJ/PmgPX1mUY8pYmZduyxw4pmed3DfU5dVURJHFcCnjf+kJkb1mE7lQEKUtBPf8oSnQJkQ9Oh60d++4qyAG9XonPCMm2mNLrlXXG50UYHVO1lYXnCC3qSH4Bl5wD8B2Bc2Zq9mdzdfA4FSXU03QUXw+BcnQTm+HN2TvOMwsbY3fvv3o7HF/LV3+loE5BkljILh0vL3HZApO8MVtd6s/KZLxAGVb0O3BvIqSu+c43WUqcvsBp0W1FYMnqWKf62l63VPckcDbP/NROkZUcADs7rLjy+BXbBhppt7cmF9Wt4i5XlvMfzGxW6tctQXml6Toza6srsLwV4WZ50qs9m/cTh0QXy3j+RxTq6X7RrQ0y+zuF4FsaMieKq2+AzNN3yo280MrLeDm8m3kOr5tk4zG1q+9+zHbWOsMjLYjkh4guYwvGPbKj72n13kU4qXoOBmrnf2ufoQ0RnT/RTca6STwX0ughCu4Gah6IYiet2NqlXQBo2/3esxB1Bd4TfPF9MAODF7KrBQ8oOkLTy2DMEW9tcn6Tfp4c9KrArtpGAEXOOsO4P8FA2h7+YqTPWPTDkrCYsSze74pNBWQGyxXzwEUlFFva7TLXHUXcs5jWlMDya1I0jLVXl6VW+rs4aRecU7q5Kj89RHkH/1/ZTny1Yy2ItuUN1x33+BtaSCxTOVEu54bj9IX6HwHDScnsI63wdZ5+Z32+uf4/eMi3dU34xiFn1fJL737xA2acj7bfqKzvpq0pyiP6aKuUpQbEboOc5lOm1t4xFwnyBohJ+7wA+F048UdhG3k/mMtLBSohokqNOb3KTX/VAP3Uoh8pjUKqV7imFH3TMAxML60KB2apnuA1kUIyM0VR939PF1pqhtU0ONik2buU5IKBmmWaIQnxMlu1CPdNRiQvuqRH8QbTd9S+bpC9Z0pTEnVdoK4ifmcKG03WFyM/AioLcBP7RaVmNi5olbwqbkuVQv0uk1lykdT/KknpGc8c4YgNAhoPrXw/Zj9mfJmQfZhHIH46o1YJnWedHSCn1fYP32zqJJ8dwadCFaH3mgcK/yVb6+kFNeSWWZQw5XPNIvS70nZosPG7hAx1EKh45YB2ReOodM/Ml+2gpzAUzLNQe1V0FT++GPloOPr9CJMU2lg9/V3MxTdh9EA4U/w/C4quL2+RiXJivbldf6Cx3R3AM8jNBYrxlqm9BfAEHnhlABiy6XztltafKpmwXNM9qVzs2J7OfYXFaKntSZ7KhIoOdiMYtysqwEMiSh9SmWPe3rpJ69VtTXHoUJM2+jhy8ddXQzNGwQZJczTCGsvd60G2bc5t4sP2MZYj5Nimu/Vgl/IEi+5bvHCWQjhydf7qElwAF11BJeq0m2vAzYNJ0cDUWskjIBIOA87lqN4Jp/xJ3kvF9IGey8ZMHxosekFESpHeJ9n6vgbmg3eihfViu6quPZ4i/SxfQuYcyTio4Asf5NXUpEXigguYqlOlWCBAZUrYzRXsSd0e+49PC7fLirOvvEASknbhbQrrc9Czb9K7mLs2f7g7jY89qUwFUW345N+P9TEMuduZ23qVBtI3JXKmbaeVZqUrHi21hcDL+xK6me+I26C61/PGjRIqGH0vKCyDiPeRr7/CGdoio2vaQ+8Wg3KAnUQBO3KF3rK5dWRmoCQ2VEC062xCEsIQgOQG4iNKt93BX333bJ7s0wpAEDKv5TO52GzG8bi/U0bKUftqjAGHaD/ryaCWbo9JZ+XAvqWwn6zA+ARWgn153FrAFxF7VQfddMgeUO33SMgzaaUWcprZo1bJZwgPvLxBPJUDaSrkgxIKiCDGmcATR8C3nAZXTEU5BLT/12lu2irryFSHzdV+EgFEf6iF0bELVsy8GkjJY5QEjWCvapjH6HJvSUFEuRh3tWUnQllhQvaUy48MP4wgyHLM3ZdcFJnACD/XJYv1fbIQaKQ0yU/WZqjRXUTg33qdlD4Hr8kLTWzoP3pzTvZeR/qIwCT48bNMbzUxdw5EMBvKtrWg8M993jV8xjwEoOkNnRgusJNRFs70BumoIeZDm/I6G/5agwvWvFojeHDai99IlVwCQrKToZmICfWqwzbY88Idk4PJSTdKx65rP44ax17JLT8Zyla1K/SN4CpI0qT8F3/3XbAjgBpClPqi6id3/YpNo0CzcTxVoNRSsx5d0etF57rEBohBTcf9UQwGHop7B7fe1vmC361l8UeKk3saW5rTxNknJwlOI+btukQ1YHoMuKGXf8FlREs1RxHzaR7dayerhe61nCZ37kMiB8ueXfr/x/Sozf2mAZUiAJaRcM2dnicdFWJuUIPJHQePdfg45wQBglReFZmGIKDZxEVrkdFnnS2yFL9Z8Rjg44T26jRsE3FUS4R5l+33CUCGa2p8GqCUpDRv7EuCnvqmnEAs8H1QgEF3G0SRXPrh2h4vb8uftbLCdigi3+IPG9ybI/9jA6gjGluZ1G+VoSyC2S/OP8Vg38pDJw0zH58bCYCnBZffjh1x/7WF+1XU6mrnXtUAdAOSg0DFpGshTHJUveSmFfVqH79zhTkeeXZ7sjrI0jmWChBM6CmbnN3xK/+Afnkhd3isaxQ+8p76ZvnCGUCOk71HtZ64xlTVWTGk5YcoSiVBny4ECbUi4p/1rnF6QdXR78ZVmH5KkM3AmN2UlVzB7Oy9aynpbB5P4rt98+W8YNvm7v5PZWfaM+LTGiWx+PEvPbB41srnMY9Wh28ls0kDWxho4PSV7CXXScE82kl6kIluZuv9IautDpyn2bbJ6uM0t17Qff15xxnqpKoEhcXlTEQqMBVi4Dre+tSeIVUf4ieFxUlgZpZQtT9MQTaE+7sGm18I91vjck5APfxfsQZ30zLiFcJk/PYdk6pkm2uArlJtQ9cJvReE38Noe5IzhlMj1K18IYg8E5g6JsC1JGSUqlTJZ2dLGK5pDhWnAErGIbOqFbNc+wOSZHJb6BPXfQetbl176Ue6FmpbpK2KlGxx/DP+L8Wzj689jtY/I33QAuqepepQM0MHhyOdbyxrZSUqIvyfzqPLxM/yeu6RjwCR0+eNCk51AHBbRIN42SFN8BruAjqkyxPv8FwsYJrxYBEo/zq3XZeCcxXoeq1J+rsNvLrF0a5cJ39hjNnDiKg5kxFIvdr4BioHIVrXbPPhshiAczT+IJBJoaeYMNFBwcAppOhh6cdq/P754jpmYc9Xj7BGgJXHD9dl3GJluXOsuDEYpBnTyo4g/U6CJ5BZv8YddQ/hJdlTBvELB+dHbU65PUS/6dQf6cbwnrSIL7WsiZ6biS6hq4ZN0g8wBTIAxxtCkhbRAtml0DhVVMASwxqh128FFespGUiP1Q/4RI5eCjmv21JxKYb198qvFJt0iNPS0AWt4Pu49PkYFXSze2YttvUWE2WWWM9tZkusgogFEtlLfoz+FWOZIK/eYIMxI0j7l+Ef9sJ7Ad4ltrd1qcjThoQO2qrYxELNX3jhEeDX+DMFuoSqPAC1VIVIQzcFhjZ29nuGeRzCONv0voIM1x1WPRvvmtRqWsuZ7letGGcy/0KG8hF6ZU49fNrb59lUD2O8KXEAFqlA7FjE8Z6LtQ1xM+RM9oXle6okPiCHIfpzsbXKsnS3Qd6CUH52FdvL3alCYH7XXrHG4G4UUDtZsR9sETGKYRcqzULrqdddh5+Dq26cp9m3CXSI3YA5z06iI83OCGJAxp3IhO8LrUcdQAdor8AgaC3m76F4OAao5ys5ZRV+qwTSHWL1SYLe7cRAdRSarkyPVjNS42na+aFeisY/DD82VXI+QNgVKsb+qLEpHfCDUFAppYbBG0OMoh+PDYDqdWVEBUMevKM7l0FqG2JGwipWEf6t0I34LS2iUuHRCIM61ZWvSQ9IVcnWQnmpNO0kELh0GhkfaXIxr+KlrC6LqBiTnyVLKPRN2SCKch5nlrBSFSmDKJmLPf7YhDj83IUGcBh++LxZQ7v8KfyhNJD6I3IDIFg0g0MtN9zVKaoMU6uf+KbhqU3ESJJ8UzOsDj3rwR95lUXRas1BFPHlxKhs5crcjr91ne46vWohegPBE5IlPMVYaU+9ww30b6lJtvtdh8B91UDrWsjJ3nSFaUV5UeFIV0cYkyDJQjdABmze9+l1Vfv02hfwKyNeYcBhXjWkQrYiM8lMmFTswwUUpCvKstsZdSv8NBN4zn928dZ58fwyv2jW6RXWD9Sc6g8pWJro+9N7f7UYSGhr+TNPXY1lwtsoj7nu8X5xnvyC0c9HvXEzRdt9vwUDD+HEHe2ChyPwUdP0nZ6byCYuB2D5zMxwlGKXi3r6h79DmHj4qkIhUi72v8SguUyCGHJNC1dJKRKlLMH3E+43XbSRLL7owmOTYEZLRfj8JIvjr3xZL4+I33L5Bgm+Zb2Z7xjHj8rglyoB3Xhvj3mgN5+L+tfpMRfgXoGKOZnK1Kx8qMXaMfmX0WHyJ4NT60Yqo8d7ngTOVSgo4atfji7zLdFQtJvCkaGQuw4K3i2xfHlEzUVup09pX8pK6KK2rDMZf/00Gui2ufoFcoo4zkceEzEFGCbrinX2CL30YCCPB2zakcxoSOZD6rD2l0RO8YrbnWOFPp1V6Op1jCdlgT+RMK6z6crXb5IRlk9+xKIKciwU2rw3etiC1Il0zLN7v24haQuOb4KORAiAdYQEQzhVRWt3SzKfnHvSOJgGACMEM90P3T0AHpt6lNdZ8HOItAao/WLbskKrnvJ8Y90XHE0uvW73Ju9d1pflyklb2yV5XXxgF+J67UQ64KnUgbFb6U6U+/mwYXu7JFS+i+Dp4ZvS9AXfsbR6TP7udEuNe3W/9gnLIcXRMinB06tW1M3QfLL/QJDx94ux07+hc/n6yQw1udiyAUALk4yX8T1frfhDv1j4nqUPJ1Byztey6KtVAv++JEYNlMZhxV3VUeN/b69l5TgSzjRWZNLxTe63+C2caHt80sXWCgwolvUKltDQkHcX4jb4caZ4a11qc6OOWU7x8A4mbBQKDZ46ng54TBWhLkOv3tKIUwkbA42g8iAdMV/t9hQ4xpjxxgL5I1+nt/010teQ/LCO+ikcto0XbfOt8/7uvVgrNuooP4q7SLXrFNWTx6QVHyPY34/p+bgyQLHlqXQtQ35x2Idzt/voU3JlNOCatNemYgQv4t1LkRZK/uEj+42GC1YnUNGlcsUMnZF7997+VmYjt/2VBSry3BeC1MSawl3Yq577akIRsOo/nU0keXAfWwOqfpON4Z4u3LNVE0/6gUp+yONlmIJOkNq+e+R4onzxThNvcegjQ9DveKYlbu2pKuuA9giL5rwuBm79N/qWpKrYqIU2Hq1nufmzuouARLaxK74Vbec+bw37mlXUp45Zb++W+ckOiI3465CxhUR7ILAIEtsbEBxo2MBsdODKDwVpHaG/CS3G/w9z/YOc1OU799XfPD02qjyYTa0WO/7eoj3VVp5xuGBSEKwRKJavHvCQfkPPpWLW3vk0ywqSRTJI9l4Q3Z6Gh57TA11yvBpGCCWSBeuuPkiUsas2XFOgm9SxS/jk9fL89eBGb5ZpptcnaNil9+EOItk+9nDg8KRc6Sao9S8CTvfCz8cDbuXfsk2l6N4imcRKaYlVKwnI4SNynzwapqyNfFkXYYWmttHmMAICUMTxXF4NYeMEScOaruehBnpXZjvXw5gRKphholV7+QFhcEzhh8yaThPKZaTmocJL6V9yUk5PYQAZK4uktdRZbHKnsDsgnm6iUaIOCbASMou863ghJFkfI8U/+7hXTGaY6EDGFsGy99nGD14lotmz4dYj6v+8fVsObmskXZ1gAcYP+Gq6TxLR7LhNXWNSbNpLk49qV6O4iF6q1Eh5js/no7sHzO4cGrFFN2fUgAAAA="},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(7294);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);