"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={description:"Detect the MetaMask Ethereum provider object."},i="Detect MetaMask",p={unversionedId:"get-started/detect-metamask",id:"get-started/detect-metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/get-started/detect-metamask.md",sourceDirName:"get-started",slug:"/get-started/detect-metamask",permalink:"/delete-preview-fix/wallet/get-started/detect-metamask",draft:!1,tags:[],version:"current",frontMatter:{description:"Detect the MetaMask Ethereum provider object."},sidebar:"walletSidebar",previous:{title:"Run a development network",permalink:"/delete-preview-fix/wallet/get-started/run-development-network"},next:{title:"Detect a user's network",permalink:"/delete-preview-fix/wallet/get-started/detect-network"}},s={},l=[{value:"Use @metamask/detect-provider",id:"use-metamaskdetect-provider",level:2},{value:"Compile the module",id:"compile-the-module",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detect-metamask"},"Detect MetaMask"),(0,a.kt)("p",null,"The presence of the MetaMask Ethereum provider object, ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", in a user's browser\nindicates an Ethereum user."),(0,a.kt)("p",null,"To demonstrate this, verify if your browser is running MetaMask by copying and pasting the following\ncode snippet in the developer console of your browser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"if (typeof window.ethereum !== 'undefined') {\n  console.log('MetaMask is installed!');\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To differentiate MetaMask from other Ethereum-compatible browsers, you can detect MetaMask using the\n",(0,a.kt)("a",{parentName:"p",href:"/delete-preview-fix/wallet/reference/provider-api#windowethereumismetamask"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.isMetaMask"))," property.")),(0,a.kt)("h2",{id:"use-metamaskdetect-provider"},"Use @metamask/detect-provider"),(0,a.kt)("p",null,"We recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider")),"\nmodule to detect the MetaMask Ethereum provider on any platform or browser."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," to install\n",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider")," in your project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/delete-preview-fix/wallet/get-started/set-up-dev-environment#example"},"example project script"),", the following code detects the\nprovider using ",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from '@metamask/detect-provider';\n\n// This returns the provider, or null if it wasn't detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  // From now on, this should always be true:\n  // provider === window.ethereum\n  startApp(provider); // initialize your app\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  // If the provider returned by detectEthereumProvider isn't the same as\n  // window.ethereum, something is overwriting it \u2013 perhaps another wallet.\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n  // Access the decentralized web!\n}\n")),(0,a.kt)("h3",{id:"compile-the-module"},"Compile the module"),(0,a.kt)("p",null,"Use a bundler such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," to compile the module and create\nan output script.\nInstall Webpack in your project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev webpack\n")),(0,a.kt)("p",null,"Install the Webpack CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev webpack-cli\n")),(0,a.kt)("p",null,"Compile the module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx webpack\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When compiling the module, you might need to pass CLI options such as\n",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/experiments/"},(0,a.kt)("inlineCode",{parentName:"a"},"--experiments-top-level-await")),".\nYou can alternatively specify options in a configuration file as follows:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="webpack.config.cjs"',title:'"webpack.config.cjs"'},"module.exports = {\n    experiments: {\n        topLevelAwait: true,\n    },\n};\n"))),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx webpack")," again upon any changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),".\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/getting-started/"},"Webpack's Getting Started guide")," for more information."))}d.isMDXComponent=!0}}]);