(()=>{"use strict";var e,a,c,d,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,d,f)=>{if(!c){var b=1/0;for(n=0;n<e.length;n++){c=e[n][0],d=e[n][1],f=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(n--,1);var l=d();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[c,d,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",82:"bcd3ef34",106:"d744a15b",167:"486ba757",247:"432fec2f",261:"reactPlayerKaltura",288:"dfccf318",368:"41f5386a",795:"63b87658",872:"a37313e4",941:"2ca6782d",1038:"c423245b",1047:"9ee9c2f8",1051:"1880a93e",1321:"d2baf1b2",1342:"6bd0212d",1452:"389220b7",1507:"4dd0955d",1529:"8c744b17",1687:"8267a4cd",1858:"86c686bd",1954:"fc0da154",2121:"reactPlayerFacebook",2124:"88fb5f9d",2177:"fd774138",2250:"4ecdda4a",2257:"95c87532",2419:"7c5954e6",2472:"ce634f1e",2546:"reactPlayerStreamable",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2841:"56abd40c",2928:"d2011f4f",2959:"0d1f1c53",2998:"909d3e79",3237:"1df93b7f",3414:"09070e4b",3520:"cc7fb5a4",3647:"e7087fcf",3696:"015fe5e8",3743:"reactPlayerVimeo",3805:"91efdb01",3843:"f530a774",3845:"fc9c3721",3853:"ad8be5c3",3899:"bb0a09d2",4151:"ff576332",4232:"7976d7e4",4283:"c66adc2f",4328:"573e544f",4359:"3d0ce9fc",4397:"3cc70d16",4426:"65eb48d4",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"ab8b636d",4507:"129514b0",4646:"56d3cc0a",4647:"7d0c4826",4657:"b099eb42",4667:"reactPlayerMixcloud",4717:"ef105518",4793:"23b13c2e",4828:"ed4728d3",4957:"2150471b",5015:"5eb549af",5209:"1a5cfe2b",5412:"7d4adaa7",5413:"dfe67240",5473:"f5000f06",5576:"3d86cae6",5709:"8ec30cb2",5732:"58221ad0",5764:"66cf4c41",5774:"406cc3cd",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6147:"c455d87c",6181:"8d63df11",6216:"reactPlayerTwitch",6250:"2b6d957d",6254:"05e0cb61",6325:"46731dd0",6423:"77a46a80",6487:"ad36dd7c",6570:"903ae864",6655:"70334ba8",6695:"198d1261",6752:"be5df1d1",6754:"cfc76383",6854:"25dd8fd2",6942:"5806c6d0",7050:"11b7fc92",7185:"3406bc1f",7194:"01740467",7266:"5e56b9d4",7340:"ce260bbc",7416:"6483afbc",7455:"27d52537",7467:"e45ea3d0",7596:"reactPlayerDailyMotion",7664:"reactPlayerPreview",7767:"149070b9",7918:"17896441",7920:"1a4e3797",8055:"reactPlayerWistia",8078:"d058e3e1",8114:"8d9a344b",8162:"50dc8f0c",8218:"3669837a",8301:"4ad67257",8358:"bf7ad130",8360:"95ed0894",8439:"3ba19fe4",8613:"8d4eac50",8669:"56aa118c",8742:"6ebf937c",8778:"b91521d0",8797:"09a0785f",8812:"f760ba82",8872:"554de2b7",8888:"reactPlayerVidyard",8931:"cf946124",9038:"cc6a76b5",9057:"94590018",9196:"e8fb5fdf",9436:"b35c5380",9514:"1be78505",9565:"f3f094fb",9817:"14eb3368",9936:"6ec7c3a5",9978:"10737780"}[e]||e)+"."+{40:"1b61b8ac",53:"7dc4fb2d",82:"4404585e",106:"97306484",167:"de9770e1",247:"5aff990b",261:"091ed2a3",288:"d679901e",368:"feaeee1d",795:"038456a3",872:"799cde97",941:"fa684362",1038:"7f6ec3d6",1047:"bf5f1371",1051:"b5dfabd4",1321:"0bcd169e",1342:"9c98ab73",1426:"be64a7dc",1452:"96eaa722",1507:"5d26f293",1529:"8f66fbb8",1661:"fd74edd0",1687:"91edf442",1858:"13320453",1954:"f11a2889",2121:"697cc207",2124:"74d3cd9e",2177:"0f12bfcd",2250:"d48c6355",2257:"5777b7b9",2419:"bb580448",2472:"08384176",2546:"4582143a",2741:"2611500a",2744:"8532ab84",2794:"c9840aef",2841:"0909807f",2928:"0293bb66",2959:"8a63f0c5",2998:"cd8b659f",3237:"dab1b257",3414:"88b3c435",3464:"459069d7",3520:"d4480b1c",3647:"da3af415",3696:"73f89586",3743:"42a0d9c0",3805:"b8d23f59",3843:"ae8391a3",3845:"6991415c",3853:"42e8bb04",3899:"b30eea45",4151:"99cb5c44",4232:"bde7aff6",4283:"e9c2d8b0",4328:"5b6ba48a",4359:"699f177b",4397:"0066295c",4426:"b53936e0",4439:"a9b14741",4442:"bb5d6f47",4467:"c19b76de",4507:"ce5fffd7",4646:"206d9abb",4647:"3fe15839",4657:"5455053c",4667:"3aafbc0c",4717:"2f0edab0",4793:"f0785188",4828:"99790c0f",4957:"63f92c90",4972:"e49176b8",5015:"8a784ac6",5209:"3570f0b0",5412:"b7454654",5413:"7de447fa",5473:"9b7aacb8",5576:"eec45970",5709:"86fe3adb",5732:"e0f2bcec",5764:"3ad88ff0",5774:"dbde9ac2",6011:"98545a61",6125:"bacff259",6147:"5299d87d",6181:"7b270dfc",6216:"d718da62",6250:"2262ba44",6254:"aa5a74bd",6316:"d9003c37",6325:"56a778b4",6423:"ee835a52",6487:"e156be3c",6570:"837a5cb0",6655:"ceb64717",6695:"4b7ee48d",6752:"07e6bb3b",6754:"9b0b154f",6854:"b803a6fa",6942:"536ae1ba",6945:"07888cb2",7050:"8307bf34",7185:"3caec4da",7194:"927ea82e",7266:"8283c8bd",7340:"f8ea69dd",7416:"b0195e01",7455:"8913beb1",7467:"7da9f999",7596:"a49c1936",7664:"9db1cd05",7724:"d0d58fef",7767:"f153e2ab",7918:"76f9d7a8",7920:"9a64d545",8055:"508ea7c7",8078:"4d2f8360",8114:"f4c44e1a",8162:"054836f8",8218:"678fa395",8301:"c613623a",8358:"8ce59add",8360:"a2d06764",8439:"fd468895",8613:"6f0da525",8669:"d657d635",8685:"19ce8911",8742:"f7b6c9af",8778:"48c4c035",8797:"2fc3487e",8812:"7038f2aa",8872:"41050318",8888:"1189c126",8894:"814fc599",8931:"b592f8c8",9038:"fe911a11",9057:"31dc2a18",9196:"43aed7f3",9436:"5b32f7d9",9487:"e0727ae8",9514:"bf7c0fe3",9565:"61f00875",9701:"3bfec2d8",9817:"a6edc89f",9936:"2451c9b6",9978:"54f43f4c"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="metamask-docs:",t.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/sdk-concepts/",t.gca=function(e){return e={10737780:"9978",17896441:"7918",94590018:"9057","8145e54e":"40","935f2afb":"53",bcd3ef34:"82",d744a15b:"106","486ba757":"167","432fec2f":"247",reactPlayerKaltura:"261",dfccf318:"288","41f5386a":"368","63b87658":"795",a37313e4:"872","2ca6782d":"941",c423245b:"1038","9ee9c2f8":"1047","1880a93e":"1051",d2baf1b2:"1321","6bd0212d":"1342","389220b7":"1452","4dd0955d":"1507","8c744b17":"1529","8267a4cd":"1687","86c686bd":"1858",fc0da154:"1954",reactPlayerFacebook:"2121","88fb5f9d":"2124",fd774138:"2177","4ecdda4a":"2250","95c87532":"2257","7c5954e6":"2419",ce634f1e:"2472",reactPlayerStreamable:"2546",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794","56abd40c":"2841",d2011f4f:"2928","0d1f1c53":"2959","909d3e79":"2998","1df93b7f":"3237","09070e4b":"3414",cc7fb5a4:"3520",e7087fcf:"3647","015fe5e8":"3696",reactPlayerVimeo:"3743","91efdb01":"3805",f530a774:"3843",fc9c3721:"3845",ad8be5c3:"3853",bb0a09d2:"3899",ff576332:"4151","7976d7e4":"4232",c66adc2f:"4283","573e544f":"4328","3d0ce9fc":"4359","3cc70d16":"4397","65eb48d4":"4426",reactPlayerYouTube:"4439",ba7d2542:"4442",ab8b636d:"4467","129514b0":"4507","56d3cc0a":"4646","7d0c4826":"4647",b099eb42:"4657",reactPlayerMixcloud:"4667",ef105518:"4717","23b13c2e":"4793",ed4728d3:"4828","2150471b":"4957","5eb549af":"5015","1a5cfe2b":"5209","7d4adaa7":"5412",dfe67240:"5413",f5000f06:"5473","3d86cae6":"5576","8ec30cb2":"5709","58221ad0":"5732","66cf4c41":"5764","406cc3cd":"5774",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125",c455d87c:"6147","8d63df11":"6181",reactPlayerTwitch:"6216","2b6d957d":"6250","05e0cb61":"6254","46731dd0":"6325","77a46a80":"6423",ad36dd7c:"6487","903ae864":"6570","70334ba8":"6655","198d1261":"6695",be5df1d1:"6752",cfc76383:"6754","25dd8fd2":"6854","5806c6d0":"6942","11b7fc92":"7050","3406bc1f":"7185","01740467":"7194","5e56b9d4":"7266",ce260bbc:"7340","6483afbc":"7416","27d52537":"7455",e45ea3d0:"7467",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","149070b9":"7767","1a4e3797":"7920",reactPlayerWistia:"8055",d058e3e1:"8078","8d9a344b":"8114","50dc8f0c":"8162","3669837a":"8218","4ad67257":"8301",bf7ad130:"8358","95ed0894":"8360","3ba19fe4":"8439","8d4eac50":"8613","56aa118c":"8669","6ebf937c":"8742",b91521d0:"8778","09a0785f":"8797",f760ba82:"8812","554de2b7":"8872",reactPlayerVidyard:"8888",cf946124:"8931",cc6a76b5:"9038",e8fb5fdf:"9196",b35c5380:"9436","1be78505":"9514",f3f094fb:"9565","14eb3368":"9817","6ec7c3a5":"9936"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],r=c[1],o=c[2],l=0;if(b.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var n=o(t)}for(a&&a(c);l<b.length;l++)f=b[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},c=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();