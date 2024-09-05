"use strict";(self.webpackChunkBOB_docs=self.webpackChunkBOB_docs||[]).push([[4252],{1319:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(4848),n=i(8453);const o={sidebar_position:3,sidebar_label:"Phase 1: Optimistic BOB"},r="Phase 1: Optimistic BOB",s={id:"learn/bob-stack/op-stack",title:"Phase 1: Optimistic BOB",description:"The first deployment of BOB uses the OP Stack, benefiting from infrastructure, marketing, and BD support. Eventually, The BOB OP-Stack deployment can be Superchain-compatible making it easy for users to move seamlessly between different Superchain rollups.",source:"@site/docs/learn/bob-stack/op-stack.md",sourceDirName:"learn/bob-stack",slug:"/learn/bob-stack/op-stack",permalink:"/docs/learn/bob-stack/op-stack",draft:!1,unlisted:!1,editUrl:"https://github.com/bob-collective/bob/tree/master/docs/docs/learn/bob-stack/op-stack.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Phase 1: Optimistic BOB"},sidebar:"learnSidebar",previous:{title:"Rollup Roadmap",permalink:"/docs/learn/bob-stack/roadmap"},next:{title:"Phase 2: Optimistic Merged Mining",permalink:"/docs/learn/bob-stack/merged-mining"}},l={},c=[{value:"Why OP Stack?",id:"why-op-stack",level:2},{value:"Adopting the OP Stack",id:"adopting-the-op-stack",level:2},{value:"Governance",id:"governance",level:3},{value:"Data Availability",id:"data-availability",level:3},{value:"Sequencing",id:"sequencing",level:3},{value:"Execution",id:"execution",level:3},{value:"Settlement &amp; Fraud Proofs",id:"settlement--fraud-proofs",level:3},{value:"Overview of Changes",id:"overview-of-changes",level:4},{value:"<code>L2OutputOracle</code>",id:"l2outputoracle",level:5},{value:"<code>OptimismPortal</code>",id:"optimismportal",level:5},{value:"<code>DisputeGameFactory</code>",id:"disputegamefactory",level:5},{value:"For Bridges and Centralized Exchanges",id:"for-bridges-and-centralized-exchanges",level:4},{value:"Update Logic to Support Fault Proofs",id:"update-logic-to-support-fault-proofs",level:5},{value:"Update Withdrawal Monitor",id:"update-withdrawal-monitor",level:5},{value:"Update Dispute Monitor",id:"update-dispute-monitor",level:5},{value:"Next Steps",id:"next-steps",level:4},{value:"Settlement &amp; Merged mining",id:"settlement--merged-mining",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"phase-1-optimistic-bob",children:"Phase 1: Optimistic BOB"})}),"\n",(0,a.jsxs)(t.p,{children:["The first deployment of BOB uses the ",(0,a.jsx)(t.a,{href:"https://stack.optimism.io",children:"OP Stack"}),", benefiting from infrastructure, marketing, and BD support. Eventually, The BOB OP-Stack deployment can be ",(0,a.jsx)(t.a,{href:"https://www.optimism.io/superchain",children:"Superchain-compatible"})," making it easy for users to move seamlessly between different Superchain rollups."]}),"\n",(0,a.jsxs)(t.p,{children:["We are working on extending the functionality of the OP stack specifically for Bitcoin: (1) fees payable in tokenized BTC via ",(0,a.jsx)(t.a,{href:"https://opengsn.org/",children:"OpenGSN"})," and ",(0,a.jsx)(t.a,{href:"https://ethereum.org/en/roadmap/account-abstraction/",children:"account abstraction"})," to ensure easy on-ramp from Bitcoin, and (2) in ",(0,a.jsx)(t.a,{href:"/docs/learn/bob-stack/merged-mining",children:"phase 2"}),", verify the rollup state through Bitcoin miners.\nWhen possible, we implement smart contracts directly on the EVM to ensure OP stack updates can be directly applied to BOB."]}),"\n",(0,a.jsx)(t.h2,{id:"why-op-stack",children:"Why OP Stack?"}),"\n",(0,a.jsxs)(t.p,{children:["There are several great options for rollups including building them from scratch or using zk rollups (",(0,a.jsx)(t.a,{href:"https://starkware.co/",children:"Starkware"}),", ",(0,a.jsx)(t.a,{href:"https://zksync.io/",children:"zkSync"}),", ",(0,a.jsx)(t.a,{href:"https://polygon.technology/polygon-zkevm",children:"Polygon"}),", ",(0,a.jsx)(t.a,{href:"https://scroll.io/",children:"Scroll"}),", ...) and optimistic rollups (",(0,a.jsx)(t.a,{href:"https://arbitrum.io/",children:"Arbitrum"}),", ",(0,a.jsx)(t.a,{href:"https://docs.optimism.io/stack/getting-started",children:"OP Stack"}),", ...). BOB's key values are experimentation, real-world impact, and freedom of choice."]}),"\n",(0,a.jsx)(t.p,{children:"In our opinion, OP Stack aligns best with these values as it allows developers to quickly deploy new protocols without having to reimplement existing protocols in new programming languages. It also gives users choice as the Superchain concept allows users to freely move between OP Stack rollups. We have further considered Arbitrum, but opted against this since, under the hood, Arbitrum uses WASM and has more incompatibilities than OP Stack (albeit the team is working very hard to mitigate those). ZK rollups are too untested for our preference and require smart contract modifications (type 3 and 4 zkEVM rollups), are slow (type 1 and 2 zkEVM), or require complete rewrites of wallet software and integrations (Starkware, ...)."}),"\n",(0,a.jsx)(t.p,{children:"BOB is built so that developers can deploy any EVM smart contract without changes."}),"\n",(0,a.jsx)(t.h2,{id:"adopting-the-op-stack",children:"Adopting the OP Stack"}),"\n",(0,a.jsx)(t.p,{children:"BOB modifies the standard OP Stack:"}),"\n",(0,a.jsx)(t.h3,{id:"governance",children:"Governance"}),"\n",(0,a.jsx)(t.p,{children:"BOB will have its own governance to reach community decisions and enact changes. Governance will be rolled out gradually as the community grows."}),"\n",(0,a.jsx)(t.p,{children:"If BOB chooses to be comptabile with the Superchain, then parts of BOB will be subject to OP governance with the Superchain upgrade. An OP Security Council will be capable of enacting security upgrades of the OP chain and L1 and L2 bridge contracts."}),"\n",(0,a.jsx)(t.h3,{id:"data-availability",children:"Data Availability"}),"\n",(0,a.jsxs)(t.p,{children:["A Data Availability (DA) layer stores the raw inputs to the state transition function for the execution layer. The OP Stack supports ",(0,a.jsx)(t.a,{href:"https://stack.optimism.io/docs/understand/landscape/#data-availability",children:"multiple DAs but sets Ethereum as the de facto DA"}),". The OP Stack Superchain is considering a dedicated ",(0,a.jsx)(t.a,{href:"https://stack.optimism.io/docs/understand/explainer/#alt-data-availability-layer-plasma-protocol",children:"Plasma DA chain"})," to address the rising cost and limited scalability of Ethereum as a DA layer."]}),"\n",(0,a.jsx)(t.p,{children:"BOB is using Ethereum as DA, but we are investigating alternatives for future optimization:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Bitcoin: The Celestia team has a specification for ",(0,a.jsx)(t.a,{href:"https://github.com/rollkit/bitcoin-da/blob/main/spec.md",children:"using Bitcoin as a DA layer"})," that suits BOB needs and would ensure compatibility with Celestia deployments. Using Bitcoin as a DA layer would introduce complexity around wallets as users would need to provide BTC alongside their EVM transactions to pay for DA costs."]}),"\n",(0,a.jsx)(t.li,{children:"Celestia: If Celestia were to add an option to pay for DA cost in (bridged) Bitcoin, Celestia might become a cheaper and decent alternative to using Ethereum or Bitcoin as a DA layer."}),"\n",(0,a.jsx)(t.li,{children:"Merged mined DA chains: Specialized DA chains that inherit security from Bitcoin via merged mining. This would be the most secure and scalable solution but requires significant development effort."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"sequencing",children:"Sequencing"}),"\n",(0,a.jsx)(t.p,{children:"The OP Stack uses a single, centralized sequencer. BOB will use the same sequencer model for its launch but with the addition of merged mining, add functionality to verify the work of the sequencer by Bitcoin miners."}),"\n",(0,a.jsx)(t.p,{children:"We are welcoming efforts to decentralize sequencers pushed by the OP Stack."}),"\n",(0,a.jsx)(t.h3,{id:"execution",children:"Execution"}),"\n",(0,a.jsxs)(t.p,{children:["OP Stack uses a fork of go-ethereum called ",(0,a.jsx)(t.a,{href:"https://op-geth.optimism.io/",children:"op-geth"}),". BOB has no changes to op-geth."]}),"\n",(0,a.jsx)(t.p,{children:"Instead of changing the execution client, necessary features including proving Bitcoin state and paying transaction fees in bridged Bitcoin are added within the EVM as smart contracts. This has the advantage that:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"The BOB OP Stack deployment stays up-to-date with improvements made by other teams improving the OP Stack without having to maintain a custom fork. In turn, this ensures that features available on other EVM chains and rollups are 1:1 applicable to BOB."}),"\n",(0,a.jsx)(t.li,{children:"Technology built on top of the EVM within BOB like the merged mining security, paying in bridged Bitcoin for transaction fees, and the BTC light client can be deployed on any EVM chain. BOB is thus ready for a multi-chain and multi-rollup world."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"settlement--fraud-proofs",children:"Settlement & Fraud Proofs"}),"\n",(0,a.jsx)(t.p,{children:"The OP Stack settles on Ethereum. Initially, the OP Stack lacked fraud proofs which was a major downside of using OP Stack as users could not prove fraudulent behavior by the sequencer. On July 10th 2024, the OP-stack used by the BOB chain switches to a full fraud-proof enabled implementation, thus ensuring honest sequencer operation."}),"\n",(0,a.jsxs)(t.admonition,{title:"Important Notice for Bridges and Users",type:"info",children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"ALL"})," withdrawals that are not finalized before the Fault Proofs upgrade executes will need to be reproven after the upgrade is complete."]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Reproving simply requires that you execute the withdrawal proving flow again."}),"\n",(0,a.jsx)(t.li,{children:"Withdrawals prior to the Fault Proofs upgrade must wait a 7-day challenge period before finalization. As a result, any withdrawal initiated less than 7 days before the upgrade cannot be finalized before the upgrade is executed. You may want to consider waiting until after the upgrade is complete to begin a withdrawal during this 7-day window."}),"\n"]})]}),"\n",(0,a.jsx)(t.h4,{id:"overview-of-changes",children:"Overview of Changes"}),"\n",(0,a.jsxs)(t.p,{children:["If you are operating a custom bridge, review this section for changes you need to make. If you are using Optimism SDK or Viem for your bridging, you can ",(0,a.jsx)(t.a,{href:"#for-bridges-and-centralized-exchanges",children:"skip to the next section"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"L2OutputOracle"})," is being entirely removed and replaced by the ",(0,a.jsx)(t.code,{children:"OptimismPortal"})," and ",(0,a.jsx)(t.code,{children:"DisputeGameFactory"}),". The ",(0,a.jsx)(t.code,{children:"L2OutputOracle"})," smart contract is currently used by the trusted Proposer role to store L2 state output proposals.\nPresently, developers use these outputs to prove that their withdrawals actually happened on L2. But with fault proofs, developers will have to change how their client software proves withdrawals in the first step of the two-step withdrawal process."]}),"\n",(0,a.jsx)(t.h5,{id:"l2outputoracle",children:(0,a.jsx)(t.code,{children:"L2OutputOracle"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"OptimismPortal"})," is changing slightly with Fault Proof Mainnet because it now points to the ",(0,a.jsx)(t.code,{children:"DisputeGameFactory"})," contract instead of the ",(0,a.jsx)(t.code,{children:"L2OutputOracle"})," contract.\nMost notable change for developers is that withdrawals will have to be proven against the ",(0,a.jsx)(t.code,{children:"rootClaim"})," of some dispute game rather than referencing an output in the ",(0,a.jsx)(t.code,{children:"L2OutputOracle"})," contract."]}),"\n",(0,a.jsx)(t.h5,{id:"optimismportal",children:(0,a.jsx)(t.code,{children:"OptimismPortal"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"OptimismPortal"})," smart contract is the low-level contract on L1 used to execute deposits and withdrawals.\nPreviously, developers would look at the ",(0,a.jsx)(t.code,{children:"L2OutputOracle"})," to find the exact next output that included their withdrawal.\nNow, developers must look at the ",(0,a.jsx)(t.code,{children:"OptimismPortal"})," contract to determine the ",(0,a.jsx)(t.code,{children:"respectedGameType"})," and then use this information to query the ",(0,a.jsx)(t.code,{children:"DisputeGameFactory"})," for a list of recent ",(0,a.jsx)(t.code,{children:"DisputeGame"})," contracts with the correct game type."]}),"\n",(0,a.jsx)(t.h5,{id:"disputegamefactory",children:(0,a.jsx)(t.code,{children:"DisputeGameFactory"})}),"\n",(0,a.jsx)(t.p,{children:"It is recommended that developers search for a reasonable number of recent games, say 100 games, and pick the first proposal with a sufficient block number.\nDevelopers should then verify this proposal locally as the default game type will allow for permissionless proposals and there is no longer a strong guarantee that proposals will be valid."}),"\n",(0,a.jsx)(t.h4,{id:"for-bridges-and-centralized-exchanges",children:"For Bridges and Centralized Exchanges"}),"\n",(0,a.jsx)(t.p,{children:"Enable the fault proofs impacts bridges, centralized exchanges, and custom solutions that use withdrawals."}),"\n",(0,a.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,a.jsx)(t.p,{children:"Withdrawals that haven't finalized before the upgrade occurs will be unable to be finalized post-upgrade without reproving. This means these withdrawals will need to go through a new 7-day period. The time accrued before the upgrade will not count.\nThis means the withdrawal time could be as long as 13-14 days during the upgrade window. (If you submit it ~6 days before the upgrade, then must re-prove after the upgrade, you will have to wait a new seven days.)"})}),"\n",(0,a.jsx)(t.h5,{id:"update-logic-to-support-fault-proofs",children:"Update Logic to Support Fault Proofs"}),"\n",(0,a.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,a.jsxs)(t.p,{children:["Most teams use the Optimism SDK or Viem to handle this logic under the hood and will simply need to update their software version ahead of the upgrade. However, any project performing withdrawals programmatically will need to update their client code (see ",(0,a.jsx)(t.a,{href:"#optimismportal",children:(0,a.jsx)(t.code,{children:"OptimismPortal"})})," for details)."]})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Option 1: Optimism SDK Update."})," If you use OptimismSDK for bridging, simply update to version 3.2.0 or higher.\nThe Optimism SDK changes do not break the API and require no changes other than updating to the correct software version to support the new ",(0,a.jsx)(t.code,{children:"OptimismPortal"})," logic. The Optimism SDK will automatically begin to use the new logic once it detects that the FPM update has gone live."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Option 2: Viem Update."})," Update to the latest version of Viem (version of >=2.9.0). Viem will automatically begin to use the new logic once it detects that the FPM update has gone live."]}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"update-withdrawal-monitor",children:"Update Withdrawal Monitor"}),"\n",(0,a.jsx)(t.p,{children:"The Withdrawal Monitor service is an important part of the two-step withdrawal system that checks if anyone has been able to prove withdrawals that do not actually appear on L2.\nThe Withdrawal Monitor is now slightly slower at startup time but is more reliable, simpler, and compatible with more infrastructure to more easily support any OP Stack chain.\nChanges to the Withdrawal Monitor are entirely backwards compatible."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Option 1: Withdrawal from source."})," If building or using withdrawal-monitor from source, make sure that you are using the latest develop branch. All withdrawal monitor changes are fully backwards compatible."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Option 2: Docker image."})," If using docker, use the latest chain-mon docker image."]}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"update-dispute-monitor",children:"Update Dispute Monitor"}),"\n",(0,a.jsx)(t.p,{children:"The Dispute Monitor service detects when invalid outputs have been proposed. Given the large number of changes to the output proposal system, the current Fault Monitor is being replaced in favor of a new Dispute Monitor purposely built for the fault proof monitor system."}),"\n",(0,a.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,a.jsx)(t.p,{children:"Any team running the current Fault Monitor will see the monitor stop functioning when the Fault Proof Monitor upgrade goes live. These teams should run the new service and update their alerting accordingly."})}),"\n",(0,a.jsx)(t.h4,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["See the ",(0,a.jsx)(t.a,{href:"https://docs.optimism.io/stack/protocol/fault-proofs/explainer",children:"Fault Proofs Explainer"})," to learn more about the three main components of the Fault Proof System."]}),"\n",(0,a.jsxs)(t.li,{children:["You can also read more about ",(0,a.jsx)(t.a,{href:"https://docs.optimism.io/stack/protocol/fault-proofs/cannon",children:"Cannon FPVM"})," and ",(0,a.jsx)(t.a,{href:"https://docs.optimism.io/stack/protocol/fault-proofs/mips",children:"Mips.sol"}),", the onchain smart contract implementation of Cannon."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"settlement--merged-mining",children:"Settlement & Merged mining"}),"\n",(0,a.jsx)(t.p,{children:"We are working towards an approach to add merged mining security to the rollup by making a PoW part of state transition. Consequently, a lack of PoW constitutes a fault by the sequencer. Thereby, Bitcoin miners validate the rollup to offset the trust in the sequencer (in both the centralized and decentralized sequencer case)."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var a=i(6540);const n={},o=a.createContext(n);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);