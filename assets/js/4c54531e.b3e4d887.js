"use strict";(self.webpackChunkBOB_docs=self.webpackChunkBOB_docs||[]).push([[358],{4401:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=i(4848),r=i(8453);const o={sidebar_position:4,sidebar_label:"Deploy, Mint, and Transfer BRC-20"},s="BRC-20",d={id:"build/how-to/brc-20",title:"BRC-20",description:"BRC-20 is a fungible token standard for Bitcoin built on top of ordinals. This standard defines three basic functions: deploy, mint and transfer.",source:"@site/docs/build/how-to/brc-20.md",sourceDirName:"build/how-to",slug:"/build/how-to/brc-20",permalink:"/docs/build/how-to/brc-20",draft:!1,unlisted:!1,editUrl:"https://github.com/bob-collective/bob/tree/master/docs/docs/build/how-to/brc-20.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Deploy, Mint, and Transfer BRC-20"},sidebar:"buildSidebar",previous:{title:"Inscribe and Transfer Ordinals",permalink:"/docs/build/how-to/ordinals"},next:{title:"Run a Full Node",permalink:"/docs/build/how-to/full-node"}},c={},a=[{value:"Wallets supporting BRC-20 Assets",id:"wallets-supporting-brc-20-assets",level:2},{value:"Deploy BRC-20",id:"deploy-brc-20",level:2},{value:"Mint BRC-20",id:"mint-brc-20",level:2},{value:"Transfer BRC-20",id:"transfer-brc-20",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"brc-20",children:"BRC-20"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://domo-2.gitbook.io/brc-20-experiment/",children:"BRC-20"})," is a fungible token standard for Bitcoin built on top of ordinals. This standard defines three basic functions: ",(0,t.jsx)(n.code,{children:"deploy"}),", ",(0,t.jsx)(n.code,{children:"mint"})," and ",(0,t.jsx)(n.code,{children:"transfer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To obtain the current account balance and token supplies of BRC-20 assets a ",(0,t.jsx)(n.strong,{children:"BRC-20 indexer is required"}),". Multiple online services provide this information. One of the most popular is called ",(0,t.jsx)(n.a,{href:"https://unisat.io/brc20",children:"UniSat"}),", where you can verify account balance and asset information. This indexer is ",(0,t.jsx)(n.a,{href:"https://github.com/unisat-wallet/libbrc20-indexer",children:"open-sourced"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"wallets-supporting-brc-20-assets",children:"Wallets supporting BRC-20 Assets"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.xverse.app/download",children:"Xverse"})," (Browser and mobile)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://unisat.io/download",children:"Unisat"})," (Browser)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-brc-20",children:"Deploy BRC-20"}),"\n",(0,t.jsxs)(n.p,{children:["To create a new BRC-20 asset, create an inscription with the content defining protocol (",(0,t.jsx)(n.code,{children:"p"}),") as ",(0,t.jsx)(n.code,{children:"brc-20"}),", operation (",(0,t.jsx)(n.code,{children:"op"}),") as ",(0,t.jsx)(n.code,{children:"deploy"}),", asset ticker (",(0,t.jsx)(n.code,{children:"tick"}),"), maximum supply (",(0,t.jsx)(n.code,{children:"max"}),"), and optional limit per mint (",(0,t.jsx)(n.code,{children:"lim"}),") depending on your preference. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{ \n  "p": "brc-20",\n  "op": "deploy",\n  "tick": "ordi",\n  "max": "21000000",\n  "lim": "1000"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Before deploying a new asset, make sure that the ticker has not been used before. In other cases, deployment will be considered invalid."})}),"\n",(0,t.jsx)(n.h2,{id:"mint-brc-20",children:"Mint BRC-20"}),"\n",(0,t.jsxs)(n.p,{children:["To mint a BRC-20 asset, create an inscription with the content defining protocol (",(0,t.jsx)(n.code,{children:"p"}),") as ",(0,t.jsx)(n.code,{children:"brc-20"}),", operation (",(0,t.jsx)(n.code,{children:"op"}),") as ",(0,t.jsx)(n.code,{children:"mint"}),", asset ticker (",(0,t.jsx)(n.code,{children:"tick"}),") and amount (",(0,t.jsx)(n.code,{children:"amt"}),") depending on your preference. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{ \n  "p": "brc-20",\n  "op": "mint",\n  "tick": "ordi",\n  "amt": "1000"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Before doing the mint operation, check that the asset you are trying to mint is still available and that you are not minting more than the allowed maximum."})}),"\n",(0,t.jsx)(n.h2,{id:"transfer-brc-20",children:"Transfer BRC-20"}),"\n",(0,t.jsxs)(n.p,{children:["To transfer the BRC-20 asset, create an inscription with the content defining protocol (",(0,t.jsx)(n.code,{children:"p"}),") as ",(0,t.jsx)(n.code,{children:"brc-20"}),", operation (",(0,t.jsx)(n.code,{children:"op"}),") as ",(0,t.jsx)(n.code,{children:"transfer"}),", asset ticker (",(0,t.jsx)(n.code,{children:"tick"}),") and amount (",(0,t.jsx)(n.code,{children:"amt"}),") depending on your preference. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{ \n  "p": "brc-20",\n  "op": "transfer",\n  "tick": "ordi",\n  "amt": "500"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"After the data are inscribed, send the inscription to the recipient to complete the asset transfer."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Each transfer inscription can only be used once."})]}),"\n",(0,t.jsxs)(n.p,{children:["Read more in ",(0,t.jsx)(n.a,{href:"https://domo-2.gitbook.io/brc-20-experiment/",children:"BRC-20 specification"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);