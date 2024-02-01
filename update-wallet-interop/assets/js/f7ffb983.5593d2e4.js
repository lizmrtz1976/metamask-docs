"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var l=2;l<s;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(84287);const p={description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},o="Snaps quickstart",i={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap starter kit.",source:"@site/snaps/get-started/quickstart.mdx",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/update-wallet-interop/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/update-wallet-interop/snaps/get-started/install-flask"},next:{title:"How to",permalink:"/update-wallet-interop/snaps/how-to"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,r.kt)("p",null,"Get started creating your own Snap.\nUse the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit to initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"),(0,r.kt)(s.Z,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0",mdxType:"YoutubeEmbed"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,r.kt)("li",{parentName:"ul"},"A text editor (for example, ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 18.16 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,r.kt)("h2",{id:"create-the-project"},"Create the project"),(0,r.kt)("p",null,"Create a new Snap project using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap your-snap-name\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/update-wallet-interop/snaps/concepts/files"},"Snaps files")," to learn about your Snap project files."),(0,r.kt)("h2",{id:"start-the-snap"},"Start the Snap"),(0,r.kt)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,r.kt)("p",null,"Start the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.kt)("p",null,"You are now serving the Snap at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end dapp at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,r.kt)("h2",{id:"connect-to-the-snap"},"Connect to the Snap"),(0,r.kt)("p",null,"On the front-end dapp, select the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."),(0,r.kt)("p",null,"Once connected, select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\nscreen in MetaMask Flask."),(0,r.kt)("h2",{id:"customize-the-snap"},"Customize the Snap"),(0,r.kt)("p",null,"Open the project in a text editor.\nYou can customize your Snap by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,r.kt)("a",{parentName:"p",href:"/update-wallet-interop/snaps/reference/snaps-api#snapdialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\nimport { getMessage } from './message';\n\nexport const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return snap.request({\n        method: 'snap_dialog',\n        params: {\n          type: 'Confirmation',\n          content: panel([\n            text(`Hello, **${origin}**!`),\n            text('This custom confirmation is just for display purposes.'),\n            text(\n              'But you can edit the Snap source code to make it do something, if you want to!',\n            ),\n          ]),\n        },\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,r.kt)("p",null,"Edit the text in any ",(0,r.kt)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,r.kt)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the Snap."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request\nfor them.")),(0,r.kt)("p",null,"The next time you select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation screen."),(0,r.kt)("p",null,"You've now successfully connected, installed, interacted with, and customized your Snap!"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To learn more about the Snaps system, review fundamental concepts including the Snaps\n",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/concepts/overview"},"overview"),", ",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/concepts/apis"},"APIs"),", and\n",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/concepts/files"},"project files"),"."),(0,r.kt)("li",{parentName:"ul"},"To implement advanced features and use cases, see the\n",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/#what-can-you-do-with-a-snap"},"Snaps features list")," or follow the tutorials for\ncreating a ",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/tutorials/gas-estimation"},"gas estimation")," or\n",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/tutorials/transaction-insights"},"transaction insights")," Snap."),(0,r.kt)("li",{parentName:"ul"},"To ensure your Snap installation flow is accessible to all users, read the\n",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/concepts/design-guidelines"},"Snaps design guidelines"),"."),(0,r.kt)("li",{parentName:"ul"},"To ensure your Snap is safe for users, read the\n",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/concepts/security-guidelines"},"Snaps security guidelines"),"."),(0,r.kt)("li",{parentName:"ul"},"To test, debug, and publish, your Snap, read about how to ",(0,r.kt)("a",{parentName:"li",href:"/update-wallet-interop/snaps/how-to/develop-a-snap"},"develop a Snap"),".")))}m.isMDXComponent=!0},84287:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const r={wrapper:"wrapper_iojS"};function s(e){return n.createElement("div",{className:r.wrapper},n.createElement("iframe",{src:e.url,allowFullScreen:!0}))}}}]);