(()=>{"use strict";var e,a,f,d,c,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.c=t,e=[],r.O=(a,f,d,c)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,d,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(c,b),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",93:"e76b61f9",117:"35b8fec4",136:"c0615bfa",239:"70acafe9",247:"987cad44",283:"ba8153a7",399:"4a0e76ae",451:"d2bb60ab",464:"36f4a5f7",472:"9a1311ca",528:"248d6ffe",560:"5654da00",577:"1c0d01d7",586:"5556484c",654:"45a56422",758:"23f82a46",762:"8c1bc555",888:"a108884c",1022:"3817a60c",1081:"0a9812da",1143:"2e3e970c",1319:"628988b7",1324:"e3246db5",1355:"8285d874",1403:"630dc608",1412:"4f13d67a",1413:"46ae467a",1845:"f97f9915",1864:"e27cd83e",1967:"74bde459",1983:"97ed811c",2004:"0e957593",2041:"b2f6a9b5",2129:"ab225c16",2218:"2c6eb2fd",2373:"21033e4e",2397:"65ede1c8",2438:"a3ec3556",2475:"da37101f",2521:"624b72a3",2582:"ef0ac018",2651:"272f43cb",2679:"e476581f",2779:"f0b750c2",2802:"88343e6f",2876:"ee91edb8",3051:"e3429d9b",3156:"4ab9c840",3216:"82f49eb5",3261:"a9484c01",3296:"f482079a",3326:"c9dcca9b",3426:"06eb90e0",3486:"0adb6319",3487:"3e20135b",3516:"3333f936",3659:"ecada9b8",3675:"fd8139f4",3698:"1491e8ae",3810:"48c68ad3",3860:"158abbab",4081:"70dcf99a",4170:"5eeb9047",4249:"8867b911",4258:"a6a9d1e4",4348:"b6dfc324",4467:"e0868feb",4528:"10bed0e6",4531:"bedc1d4a",4584:"bc8c620a",4659:"50e33a0d",4682:"91051824",4833:"f923bd50",4838:"cb26f007",4937:"6f7562a3",4977:"03e06aa7",4992:"44109891",5002:"3f5cff60",5042:"5c93823d",5094:"6801025a",5172:"7af5887e",5325:"b485b3aa",5530:"e8b5107e",5667:"2e476804",5675:"a702eb3a",5680:"53e94997",5763:"06b68135",5885:"e748dd17",5958:"a1190613",5979:"b6c08e50",6005:"6da97d5b",6039:"b40bf177",6049:"76176154",6119:"646981ee",6168:"51b72358",6221:"55cc11e8",6354:"0fe33e41",6411:"9110f38f",6444:"9aba6085",6488:"0481c177",6646:"f5b0050a",6704:"52572dea",6711:"f9734b91",6745:"bf476a78",6755:"0cb9c435",6842:"6fdce5db",6853:"d289dfcd",6864:"f2aa5a66",6889:"698ffa79",6953:"f7f60e58",7002:"9dac1f3c",7072:"42f3785a",7138:"685e9813",7140:"f225c06d",7179:"71f89b38",7553:"d179580e",7627:"9242f14e",7640:"f71bf9e2",7669:"4819920a",7772:"027f3190",7815:"ad410354",7918:"17896441",7920:"1a4e3797",8032:"63165f34",8052:"a0d07a01",8062:"8bc421df",8073:"0945cc86",8110:"32ae25e3",8112:"33161a8b",8135:"a5f3d4d3",8167:"9e8709bd",8211:"d7d14c06",8272:"3a6cf436",8545:"030341eb",8592:"common",8609:"338770ad",8612:"f0ad3fbb",8708:"9bbb9bff",8842:"985217f7",8863:"635781a4",8898:"8b3b5a19",8906:"55c9eed9",8968:"991fd4ed",8970:"d3959fc5",8991:"42795c4f",8997:"f077f840",8998:"b5043254",9098:"dc463d44",9157:"2641d68d",9250:"117aaa88",9291:"93a20088",9408:"1e4e8123",9514:"1be78505",9529:"dab73f02",9643:"fc49bffc",9671:"0e384e19",9768:"f1cfd616",9797:"9cefbf99",9847:"3ec46315",9872:"224a8709",9910:"5e0adf7f",9925:"43ad54b5"}[e]||e)+"."+{53:"713892ab",93:"a28db5aa",117:"94b35da2",136:"54b04ac5",239:"d1c88002",247:"a834201d",283:"01fa30c8",399:"65af86fb",451:"4cd6787a",464:"10f2d2e9",472:"915ba72c",528:"67af3071",560:"2142186f",577:"d2ac792b",586:"fb0b00d5",654:"5edab197",758:"36380d47",762:"823ff93a",888:"eaed878b",1022:"3d55aeb1",1081:"e479dc89",1143:"0af3205b",1319:"e87f9741",1324:"a7feba22",1355:"1c4f1d78",1403:"a0645eef",1412:"15f4c6d7",1413:"4e85790c",1845:"4428cbee",1864:"0517b334",1967:"08dba5fc",1983:"cda5f6aa",2004:"9e721d97",2041:"9672e823",2129:"19b709c3",2218:"2afa469e",2373:"7b0780b8",2397:"cd60abd9",2438:"d70ae77a",2475:"ca050b84",2521:"61f779d5",2582:"61c09196",2651:"09a4aff7",2679:"12e92ee6",2779:"de424a4c",2802:"0368b83f",2876:"5a753b2b",3051:"877e71b3",3156:"baa09dd8",3216:"92b79490",3261:"ea788116",3296:"eb0b03f9",3326:"d1ecf918",3426:"328800e7",3486:"57a56dc1",3487:"8dff3725",3516:"e55300c5",3527:"99e64843",3659:"d0146717",3675:"2a228e72",3698:"bb820a40",3810:"6aadab3d",3860:"25407664",4081:"df891ebc",4170:"59e1944f",4249:"3f74bf82",4258:"4f1b5488",4348:"55b50d68",4467:"0cb5c393",4528:"5c480b0a",4531:"32d5cf11",4584:"7c8a5cda",4659:"837c5faf",4682:"6f2cd357",4833:"6e74006e",4838:"0e867285",4937:"065a9980",4972:"504c3e8f",4977:"2ce34d28",4992:"6b7b382d",5002:"2f18c921",5042:"25ed6223",5094:"245a305a",5172:"f99dc39f",5325:"610aae3c",5530:"553a9e85",5667:"d20d2ae3",5675:"080e9550",5680:"6bfe7bde",5763:"a5a2a230",5885:"4beba584",5958:"26d74e93",5979:"3d79959e",6005:"f9ed82a3",6039:"f4bf701c",6049:"7cdf47c2",6119:"0a6c467a",6168:"8f3af42d",6221:"1726fb23",6354:"cd86a51f",6411:"da60122d",6444:"b7c7cbb5",6488:"51226850",6646:"5a9dcd55",6704:"6309e189",6711:"215e2c46",6745:"86dbf14c",6755:"a948bedb",6780:"5c04d351",6842:"15f78bd6",6853:"6c0403ac",6864:"c0711775",6889:"214adc20",6945:"2a9194e7",6953:"25abd962",7002:"f07db80b",7072:"719fac31",7138:"c0af4914",7140:"a191e8b2",7179:"cd637423",7553:"0f23c5c6",7627:"afa6847c",7640:"9531304d",7669:"df921aad",7772:"00457644",7815:"09962f00",7918:"5bfd9ed0",7920:"dbf9e5d8",8032:"4649b7a9",8052:"a4284ff4",8062:"2f79a446",8073:"935cfadb",8110:"b4743676",8112:"04f44587",8135:"5f0029cc",8167:"5e311f70",8211:"22ca1ea8",8272:"99659723",8545:"ec1bda57",8592:"77a5bdf4",8609:"d9591fe7",8612:"e4d03189",8708:"f6ba91b6",8842:"3fa90ec0",8863:"14c60016",8894:"e5934655",8898:"f95e1b58",8906:"f09f6ac6",8968:"ad083e7c",8970:"dbbe26fe",8991:"23d928ee",8997:"31e5880b",8998:"c0de12e8",9098:"ea83b08e",9157:"437cb7b8",9250:"8967b580",9291:"f4e55f92",9408:"f945fe55",9514:"3544126a",9529:"b63b8e36",9643:"976a88e7",9671:"4fc65e47",9768:"87e4c0f7",9797:"d8460309",9847:"5e397faf",9872:"05d563ef",9910:"687af50d",9925:"1cd6b8b5"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="firefox-ecosystem-platform:",r.l=(e,a,f,b)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+f){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),d[e]=[a];var u=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/ecosystem-platform/",r.gca=function(e){return e={17896441:"7918",44109891:"4992",76176154:"6049",91051824:"4682","935f2afb":"53",e76b61f9:"93","35b8fec4":"117",c0615bfa:"136","70acafe9":"239","987cad44":"247",ba8153a7:"283","4a0e76ae":"399",d2bb60ab:"451","36f4a5f7":"464","9a1311ca":"472","248d6ffe":"528","5654da00":"560","1c0d01d7":"577","5556484c":"586","45a56422":"654","23f82a46":"758","8c1bc555":"762",a108884c:"888","3817a60c":"1022","0a9812da":"1081","2e3e970c":"1143","628988b7":"1319",e3246db5:"1324","8285d874":"1355","630dc608":"1403","4f13d67a":"1412","46ae467a":"1413",f97f9915:"1845",e27cd83e:"1864","74bde459":"1967","97ed811c":"1983","0e957593":"2004",b2f6a9b5:"2041",ab225c16:"2129","2c6eb2fd":"2218","21033e4e":"2373","65ede1c8":"2397",a3ec3556:"2438",da37101f:"2475","624b72a3":"2521",ef0ac018:"2582","272f43cb":"2651",e476581f:"2679",f0b750c2:"2779","88343e6f":"2802",ee91edb8:"2876",e3429d9b:"3051","4ab9c840":"3156","82f49eb5":"3216",a9484c01:"3261",f482079a:"3296",c9dcca9b:"3326","06eb90e0":"3426","0adb6319":"3486","3e20135b":"3487","3333f936":"3516",ecada9b8:"3659",fd8139f4:"3675","1491e8ae":"3698","48c68ad3":"3810","158abbab":"3860","70dcf99a":"4081","5eeb9047":"4170","8867b911":"4249",a6a9d1e4:"4258",b6dfc324:"4348",e0868feb:"4467","10bed0e6":"4528",bedc1d4a:"4531",bc8c620a:"4584","50e33a0d":"4659",f923bd50:"4833",cb26f007:"4838","6f7562a3":"4937","03e06aa7":"4977","3f5cff60":"5002","5c93823d":"5042","6801025a":"5094","7af5887e":"5172",b485b3aa:"5325",e8b5107e:"5530","2e476804":"5667",a702eb3a:"5675","53e94997":"5680","06b68135":"5763",e748dd17:"5885",a1190613:"5958",b6c08e50:"5979","6da97d5b":"6005",b40bf177:"6039","646981ee":"6119","51b72358":"6168","55cc11e8":"6221","0fe33e41":"6354","9110f38f":"6411","9aba6085":"6444","0481c177":"6488",f5b0050a:"6646","52572dea":"6704",f9734b91:"6711",bf476a78:"6745","0cb9c435":"6755","6fdce5db":"6842",d289dfcd:"6853",f2aa5a66:"6864","698ffa79":"6889",f7f60e58:"6953","9dac1f3c":"7002","42f3785a":"7072","685e9813":"7138",f225c06d:"7140","71f89b38":"7179",d179580e:"7553","9242f14e":"7627",f71bf9e2:"7640","4819920a":"7669","027f3190":"7772",ad410354:"7815","1a4e3797":"7920","63165f34":"8032",a0d07a01:"8052","8bc421df":"8062","0945cc86":"8073","32ae25e3":"8110","33161a8b":"8112",a5f3d4d3:"8135","9e8709bd":"8167",d7d14c06:"8211","3a6cf436":"8272","030341eb":"8545",common:"8592","338770ad":"8609",f0ad3fbb:"8612","9bbb9bff":"8708","985217f7":"8842","635781a4":"8863","8b3b5a19":"8898","55c9eed9":"8906","991fd4ed":"8968",d3959fc5:"8970","42795c4f":"8991",f077f840:"8997",b5043254:"8998",dc463d44:"9098","2641d68d":"9157","117aaa88":"9250","93a20088":"9291","1e4e8123":"9408","1be78505":"9514",dab73f02:"9529",fc49bffc:"9643","0e384e19":"9671",f1cfd616:"9768","9cefbf99":"9797","3ec46315":"9847","224a8709":"9872","5e0adf7f":"9910","43ad54b5":"9925"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>d=e[a]=[f,c]));f.push(d[2]=c);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,c,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})(),r.nc=void 0})();