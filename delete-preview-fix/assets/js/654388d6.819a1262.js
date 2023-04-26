"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const s={description:"Learn about MetaMask SDK connections."},i="MetaMask SDK connections",r={unversionedId:"concepts/sdk-connections",id:"concepts/sdk-connections",title:"MetaMask SDK connections",description:"Learn about MetaMask SDK connections.",source:"@site/wallet/concepts/sdk-connections.md",sourceDirName:"concepts",slug:"/concepts/sdk-connections",permalink:"/delete-preview-fix/wallet/concepts/sdk-connections",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about MetaMask SDK connections."},sidebar:"walletSidebar",previous:{title:"Concepts",permalink:"/delete-preview-fix/wallet/category/concepts"},next:{title:"Signing methods",permalink:"/delete-preview-fix/wallet/concepts/signing-methods"}},c={},l=[{value:"Connection status",id:"connection-status",level:2},{value:"Paused connections",id:"paused-connections",level:3},{value:"Cleared connections",id:"cleared-connections",level:3},{value:"Close connections manually",id:"close-connections-manually",level:4},{value:"Communication layer",id:"communication-layer",level:2}],p={toc:l};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metamask-sdk-connections"},"MetaMask SDK connections"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"/delete-preview-fix/wallet/how-to/use-sdk/"},"use MetaMask SDK")," to enable users to easily connect from your\ndapp to the MetaMask browser extension and MetaMask Mobile.\nWhen connecting to MetaMask Mobile, the SDK uses a secure ",(0,o.kt)("a",{parentName:"p",href:"#communication-layer"},"communication layer"),",\nand it's important to understand the ",(0,o.kt)("a",{parentName:"p",href:"#connection-status"},"status of the connection"),"."),(0,o.kt)("h2",{id:"connection-status"},"Connection status"),(0,o.kt)("h3",{id:"paused-connections"},"Paused connections"),(0,o.kt)("p",null,"Connections pause after MetaMask Mobile is in background (minimized) for 20 seconds.\nThis is to accommodate OS restrictions."),(0,o.kt)("p",null,"When a connection pauses, all traffic to MetaMask Mobile pauses, and the SDK doesn't produce any\nresponse until the user opens MetaMask Mobile again.\nThe SDK automatically deeplinks to MetaMask Mobile, so connections resume automatically.\nIf MetaMask Mobile is paused and the user completely closes MetaMask Mobile, the connection remains\npaused and resumes when the user opens it again."),(0,o.kt)("p",null,"Because of this, polling data from MetaMask Mobile may not work for long periods of time."),(0,o.kt)("admonition",{title:"known issue",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When MetaMask Mobile is running in the background, the connection may pause and fail to resume properly when the user reopens MetaMask.\nThe user must return to your dapp so the request is re-sent.\nThe SDK team is working on this issue, and is researching decentralized communication solutions that\nhold state such as ",(0,o.kt)("a",{parentName:"p",href:"https://waku.org/"},"Waku"),".")),(0,o.kt)("h3",{id:"cleared-connections"},"Cleared connections"),(0,o.kt)("p",null,"Connections clear if the user closes or refreshes your dapp, since MetaMask doesn't persist\nconnections on the dapp side.\nThis is for simplicity and security purposes."),(0,o.kt)("p",null,"If the user completely closes MetaMask Mobile without ",(0,o.kt)("a",{parentName:"p",href:"#paused-connections"},"pausing the connection"),"\nfirst, MetaMask infers that the user isn't using the wallet and closes the connection."),(0,o.kt)("h4",{id:"close-connections-manually"},"Close connections manually"),(0,o.kt)("p",null,"To close connections manually from MetaMask Mobile, go to ",(0,o.kt)("strong",{parentName:"p"},"Settings > Experimental"),", and select\n",(0,o.kt)("strong",{parentName:"p"},"Clear MetaMask SDK connections"),"."),(0,o.kt)("h2",{id:"communication-layer"},"Communication layer"),(0,o.kt)("p",null,"The SDK uses elliptic curve integrated encryption scheme (ECIES) to communicate with MetaMask Mobile.\nECIES is a hybrid encryption scheme that combines the benefits of both symmetric and asymmetric encryption.\nIt's a secure method of exchanging encrypted messages between two parties."),(0,o.kt)("p",null,"In ECIES, the sender (your dapp) generates a shared secret using the recipient's (MetaMask Mobile's)\npublic key and their own private key.\nThe shared secret is used to encrypt the message using a symmetric cipher (the SDK uses ",(0,o.kt)("inlineCode",{parentName:"p"},"AES-256-GCM"),").\nThe encrypted message is then combined with a message authentication code (MAC) and sent to the recipient."),(0,o.kt)("p",null,"MetaMask Mobile uses its private key and the dapp's public key to recreate the shared secret and\ndecrypt the message.\nThe MAC is used to verify the authenticity of the message."),(0,o.kt)("p",null,"One of the main benefits of ECIES is that it allows the sender and recipient to exchange messages\nwithout having to exchange a shared secret beforehand.\nIt also provides security against eavesdropping and tampering, since the shared secret is derived\nfrom the sender's and recipient's private keys, which are both kept secret."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence diagram",src:n(7922).Z,width:"1199",height:"759"})))}u.isMDXComponent=!0},7922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-comm-diagram-3898cc2647f3cedac655310c616ff2a6.svg"}}]);