"use strict";(self.webpackChunkBOB_docs=self.webpackChunkBOB_docs||[]).push([[9595],{4460:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var l=n(4848),t=n(8453);const s={},r="OracleTokenPaymaster",c={id:"contracts/src/src/paymasters/OracleTokenPaymaster.sol/contract.OracleTokenPaymaster",title:"OracleTokenPaymaster",description:"Git Source",source:"@site/docs/contracts/src/src/paymasters/OracleTokenPaymaster.sol/contract.OracleTokenPaymaster.md",sourceDirName:"contracts/src/src/paymasters/OracleTokenPaymaster.sol",slug:"/contracts/src/src/paymasters/OracleTokenPaymaster.sol/contract.OracleTokenPaymaster",permalink:"/docs/contracts/src/src/paymasters/OracleTokenPaymaster.sol/contract.OracleTokenPaymaster",draft:!1,unlisted:!1,editUrl:"https://github.com/bob-collective/bob/tree/master/docs/docs/contracts/src/src/paymasters/OracleTokenPaymaster.sol/contract.OracleTokenPaymaster.md",tags:[],version:"current",frontMatter:{},sidebar:"contractSidebar",previous:{title:"IOracle",permalink:"/docs/contracts/src/src/paymasters/Oracle.sol/interface.IOracle"},next:{title:"FullRelay",permalink:"/docs/contracts/src/src/relay/FullRelay.sol/contract.FullRelay"}},i={},o=[{value:"State Variables",id:"state-variables",level:2},{value:"nativeTokenOracle",id:"nativetokenoracle",level:3},{value:"tokenOracles",id:"tokenoracles",level:3},{value:"gasUsedByPost",id:"gasusedbypost",level:3},{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"versionPaymaster",id:"versionpaymaster",level:3},{value:"addOracle",id:"addoracle",level:3},{value:"fetchPrice",id:"fetchprice",level:3},{value:"_ethToTokens",id:"_ethtotokens",level:3},{value:"setPostGasUsage",id:"setpostgasusage",level:3},{value:"withdrawAll",id:"withdrawall",level:3},{value:"getPayer",id:"getpayer",level:3},{value:"_getPaymasterData",id:"_getpaymasterdata",level:3},{value:"_calculatePreCharge",id:"_calculateprecharge",level:3},{value:"_verifyPaymasterData",id:"_verifypaymasterdata",level:3},{value:"__preRelayedCall",id:"__prerelayedcall",level:3},{value:"_preRelayedCall",id:"_prerelayedcall",level:3},{value:"_postRelayedCall",id:"_postrelayedcall",level:3},{value:"_postRelayedCallInternal",id:"_postrelayedcallinternal",level:3},{value:"Events",id:"events",level:2},{value:"PreRelayPayment",id:"prerelaypayment",level:3},{value:"PostRelay",id:"postrelay",level:3},{value:"Structs",id:"structs",level:2},{value:"TokenDetails",id:"tokendetails",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"oracletokenpaymaster",children:"OracleTokenPaymaster"})}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"https://github.com/bob-collective/bob/blob/master/src/paymasters/OracleTokenPaymaster.sol",children:"Git Source"})}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Inherits:"}),"\nBasePaymaster"]}),"\n",(0,l.jsx)(a.p,{children:"A very basic paymaster that makes the payer pay in ERC20 tokens."}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"The token prices need to be provided by an IOracle."}),"\n",(0,l.jsx)(a.li,{children:"No swaps are done - the paymaster simply receives ERC20 tokens. This means\nthat over time, the paymaster's eth balance will decrease. It is up to the\nowner of the contract to replenish the eth balance."}),"\n",(0,l.jsx)(a.li,{children:"The owner of the contract can withdraw their received erc20 balances."}),"\n",(0,l.jsx)(a.li,{children:"Users specify an erc20 address and a maximum amount they are willing to pay\nfor the tx. This reduces the trust put in the oracle."}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"state-variables",children:"State Variables"}),"\n",(0,l.jsx)(a.h3,{id:"nativetokenoracle",children:"nativeTokenOracle"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"IOracle nativeTokenOracle;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"tokenoracles",children:"tokenOracles"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"mapping(IERC20 => TokenDetails) public tokenOracles;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"gasusedbypost",children:"gasUsedByPost"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"uint256 public gasUsedByPost;\n"})}),"\n",(0,l.jsx)(a.h2,{id:"functions",children:"Functions"}),"\n",(0,l.jsx)(a.h3,{id:"constructor",children:"constructor"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"constructor(IOracle _nativeTokenOracle);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"versionpaymaster",children:"versionPaymaster"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function versionPaymaster() external view virtual override returns (string memory);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"addoracle",children:"addOracle"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function addOracle(IERC20 _token, uint256 _decimals, IOracle _oracle) external onlyOwner;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"fetchprice",children:"fetchPrice"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function fetchPrice(IOracle _oracle) internal view returns (uint192 price);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_ethtotokens",children:"_ethToTokens"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _ethToTokens(IERC20 token, uint256 ethAmount) internal view returns (uint256);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"setpostgasusage",children:"setPostGasUsage"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function setPostGasUsage(uint256 _gasUsedByPost) external onlyOwner;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"withdrawall",children:"withdrawAll"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function withdrawAll(IERC20 token) external onlyOwner;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"getpayer",children:"getPayer"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function getPayer(GsnTypes.RelayRequest calldata relayRequest) public view virtual returns (address);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_getpaymasterdata",children:"_getPaymasterData"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _getPaymasterData(bytes memory paymasterData) private pure returns (IERC20 token, uint256 maxTokens);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_calculateprecharge",children:"_calculatePreCharge"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _calculatePreCharge(IERC20 token, GsnTypes.RelayRequest calldata relayRequest, uint256 maxPossibleGas)\n    internal\n    view\n    returns (address payer, uint256 ethPrecharge, uint256 tokenPreCharge);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_verifypaymasterdata",children:"_verifyPaymasterData"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _verifyPaymasterData(GsnTypes.RelayRequest calldata relayRequest) internal view virtual override;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"__prerelayedcall",children:"__preRelayedCall"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function __preRelayedCall(\n    GsnTypes.RelayRequest calldata relayRequest,\n    bytes calldata signature,\n    bytes calldata approvalData,\n    uint256 maxPossibleGas\n) public;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_prerelayedcall",children:"_preRelayedCall"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _preRelayedCall(\n    GsnTypes.RelayRequest calldata relayRequest,\n    bytes calldata,\n    bytes calldata,\n    uint256 maxPossibleGas\n) internal virtual override returns (bytes memory context, bool revertOnRecipientRevert);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_postrelayedcall",children:"_postRelayedCall"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _postRelayedCall(\n    bytes calldata context,\n    bool,\n    uint256 gasUseWithoutPost,\n    GsnTypes.RelayData calldata relayData\n) internal virtual override;\n"})}),"\n",(0,l.jsx)(a.h3,{id:"_postrelayedcallinternal",children:"_postRelayedCallInternal"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"function _postRelayedCallInternal(\n    address payer,\n    uint256 tokenPrecharge,\n    uint256 valueRequested,\n    uint256 gasUseWithoutPost,\n    GsnTypes.RelayData calldata relayData,\n    IERC20 token\n) internal;\n"})}),"\n",(0,l.jsx)(a.h2,{id:"events",children:"Events"}),"\n",(0,l.jsx)(a.h3,{id:"prerelaypayment",children:"PreRelayPayment"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"event PreRelayPayment(uint256 ethAmount, IERC20 token, uint256 tokenAmount, address indexed payer);\n"})}),"\n",(0,l.jsx)(a.h3,{id:"postrelay",children:"PostRelay"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"event PostRelay(uint256 actualEthAmount, IERC20 token, uint256 actualTokenAmount, address payer);\n"})}),"\n",(0,l.jsx)(a.h2,{id:"structs",children:"Structs"}),"\n",(0,l.jsx)(a.h3,{id:"tokendetails",children:"TokenDetails"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-solidity",children:"struct TokenDetails {\n    uint256 div;\n    IOracle oracle;\n}\n"})})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var l=n(6540);const t={},s=l.createContext(t);function r(e){const a=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:a},e.children)}}}]);