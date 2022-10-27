"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1324],{7038:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));i(1839);const r={id:"pairing",title:"Pairing authentication",sidebar_label:"Pairing authentication"},o=void 0,l={unversionedId:"relying-parties/tutorials/pairing",id:"relying-parties/tutorials/pairing",title:"Pairing authentication",description:"Overview",source:"@site/docs/relying-parties/tutorials/pairing.md",sourceDirName:"relying-parties/tutorials",slug:"/relying-parties/tutorials/pairing",permalink:"/ecosystem-platform/relying-parties/tutorials/pairing",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/tutorials/pairing.md",tags:[],version:"current",frontMatter:{id:"pairing",title:"Pairing authentication",sidebar_label:"Pairing authentication"},sidebar:"docs",previous:{title:"Integration with Subscription Platform",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform"},next:{title:"End-to-end Encryption",permalink:"/ecosystem-platform/relying-parties/how-twos/end-to-end-encryption"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"User Flow",id:"user-flow",level:2},{value:"Implementation",id:"implementation",level:2},{value:"High-level description of the flow",id:"high-level-description-of-the-flow",level:3},{value:"Detailed implementation description",id:"detailed-implementation-description",level:3},{value:"Where does the code live?",id:"where-does-the-code-live",level:3},{value:"Security concerns and desired security properties",id:"security-concerns-and-desired-security-properties",level:2},{value:"Possible evolutions",id:"possible-evolutions",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,'A Firefox Account user can connect a new device to their account without entering a password,\nby instead "pairing" with an already-connected device in order to obtain account credentials.'),(0,n.kt)("p",null,"Currently, the pairing implementation is limited to a mobile device (Firefox Android and iOS) scanning a QR code displayed on a computer (Firefox Desktop) already connected to a Firefox Account. We hope to expand these capabilities in future."),(0,n.kt)("h2",{id:"user-flow"},"User Flow"),(0,n.kt)("p",null,"Let's assume that the user is already signed-in to their Desktop Firefox profile."),(0,n.kt)("p",null,"On their mobile device, Firefox invites them to navigate to firefox.com/pair on their Desktop browser,\nand offers to scan the QR code which will be generated by that device. Like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Firefox Mobile pairing screen",src:i(144).Z,width:"398",height:"500"})),(0,n.kt)("p",null,"When they visit that URL on their Desktop device, it will confirm their intent to connect\nanother device, and then generate and display a QR code. Like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Firefox Desktop pairing screen",src:i(7025).Z,width:"778",height:"600"})),(0,n.kt)("p",null,"When the user scans the QR code, each device will show a confirmation screen,\nand after user approval the new device will be connected to their account."),(0,n.kt)("p",null,"A detailed technical user-flow is available ",(0,n.kt)("a",{parentName:"p",href:"https://lucid.app/lucidchart/9a420c19-1e92-42a5-8eae-908a442c1044/edit?page=0"},"here"),"."),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("h3",{id:"high-level-description-of-the-flow"},"High-level description of the flow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The two devices exchange a one-time secret key via QR code, and use it to create\na shared, encrypted and authenticated communication channel over websockets.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla-services/channelserver"},"Channel Server")," is responsible\nfor proxying communication between the two devices."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa-pairing-channel"},"Pairing Channel library")," provides the\ncrypto necessary to authenticate and encrypt the channel, using TLS1.3 in pre-shared-key mode."),(0,n.kt)("li",{parentName:"ul"},"The Desktop device is responsible for creating the channel and its corresponding secret key,\nand advertising those details in a QR code."),(0,n.kt)("li",{parentName:"ul"},"The Mobile device connects to the channel using the details it scans from the QR code."))),(0,n.kt)("li",{parentName:"ol"},"The Mobile device prepares an OAuth request for connecting to FxA, but instead of redirecting\nto a webpage on ",(0,n.kt)("a",{parentName:"li",href:"https://accounts.firefox.com"},"https://accounts.firefox.com"),", it sends the OAuth request to the Desktop device\nover the pairing channel."),(0,n.kt)("li",{parentName:"ol"},"The Desktop device receives the OAuth request, confirms user consent, and uses its existing\ncredentials to tell the FxA server to grant a corresponding OAuth authorization code. Instead\nof delivering the code via the usual OAuth HTTP redirect, it sends the code back to the Mobile device over the pairing channel."),(0,n.kt)("li",{parentName:"ol"},"The Mobile device receives the code and processes it just as it would for an ordinary\nweb-based OAuth flow, by talking to the FxA server to exchange the code for some OAuth tokens.")),(0,n.kt)("p",null,'There is some additional message-passing the takes place over the pairing channel in order to\nshow confirmation screens and help smooth out the experience, but the high-level abstraction\nis "do an OAuth flow, but using the pairing channel instead of HTTP redirects".'),(0,n.kt)("h3",{id:"detailed-implementation-description"},"Detailed implementation description"),(0,n.kt)("p",null,"The implementation is described ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/pairing-architecture.md"},"here"),"."),(0,n.kt)("p",null,"Please note that the ",(0,n.kt)("a",{parentName:"p",href:"https://lucid.app/lucidchart/1bc1b604-0047-4542-8827-ed8518b0433e/edit?page=0"},"FxA Pairing Flow - Application Layer")," Lucidchart diagram should be treated as the ",(0,n.kt)("strong",{parentName:"p"},"source of truth"),"\nregarding the pairing protocol and kept up-to-date. There is also a rendered png of the diagram available on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/pairing-architecture.md#detailed-flow"},"detailed architecture docs"),"."),(0,n.kt)("h3",{id:"where-does-the-code-live"},"Where does the code live?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla-services/channelserver"},"Channel Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa-pairing-channel"},"Pairing Channel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://searchfox.org/mozilla-central/rev/23c25cd32a1e87095301273937b4ee162f41e860/services/fxaccounts/FxAccountsPairing.jsm"},"Desktop client implementation")," (",(0,n.kt)("a",{parentName:"li",href:"https://searchfox.org/mozilla-central/rev/23c25cd32a1e87095301273937b4ee162f41e860/browser/components/preferences/fxaPairDevice.js"},"UI"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/application-services/blob/40bef1314d9cf20fdfa8e1c1539a5205c4bdd462/components/fxa-client/src/oauth.rs#L111-L136"},"Mobile client implementation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/44bbb161d958f084c1bb39902554f69a2333de90/packages/fxa-content-server/app/scripts/models/pairing/supplicant-state-machine.js"},"Content server implementation"))),(0,n.kt)("h2",{id:"security-concerns-and-desired-security-properties"},"Security concerns and desired security properties"),(0,n.kt)("p",null,"Described ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/pairing-architecture.md#intended-security-properties"},"here"),"."),(0,n.kt)("h2",{id:"possible-evolutions"},"Possible evolutions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reverse pairing: allow a computer to connect to an account by scanning a QR code with an already connected mobile Firefox."),(0,n.kt)("li",{parentName:"ul"},"Pairing using a code to type: more accessible, allows device without a back camera to pair (i.e. 2 computers).")))}d.isMDXComponent=!0},7025:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/fxa-pairing-desktop-78a4f013872dc35572a01fa0de2a6748.png"},144:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/fxa-pairing-mobile-27675340d53bf99d9201749169a5dfb6.png"}}]);