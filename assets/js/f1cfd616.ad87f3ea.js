"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9768],{64407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));n(8209);const i={title:"Using a Custom Profile with Firefox"},r=void 0,l={unversionedId:"how-tos/using-a-custom-profile-with-firefox",id:"how-tos/using-a-custom-profile-with-firefox",title:"Using a Custom Profile with Firefox",description:"If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment.",source:"@site/docs/how-tos/using-a-custom-profile-with-firefox.md",sourceDirName:"how-tos",slug:"/how-tos/using-a-custom-profile-with-firefox",permalink:"/ecosystem-platform/how-tos/using-a-custom-profile-with-firefox",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-a-custom-profile-with-firefox.md",tags:[],version:"current",frontMatter:{title:"Using a Custom Profile with Firefox"},sidebar:"docs",previous:{title:"Node Debugging",permalink:"/ecosystem-platform/how-tos/node-debugging"},next:{title:"Using Sentry.io for Local Development",permalink:"/ecosystem-platform/how-tos/using-sentry-locally"}},s={},p=[{value:"Stage environment setup instructions for different platforms",id:"stage-environment-setup-instructions-for-different-platforms",level:2},{value:"Stage environment setup on Android:",id:"stage-environment-setup-on-android",level:3},{value:"Stage environment setup on iOS:",id:"stage-environment-setup-on-ios",level:3},{value:"Stage environment setup on desktop browser:",id:"stage-environment-setup-on-desktop-browser",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start firefox"),", which will open an instance of Firefox. It is configurable with the following environment variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_ENV")," - The API endpoints Firefox should use"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"local"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"stable"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"stage")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"local"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_DESKTOP_CONTEXT")," - The ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md#context"},(0,a.kt)("inlineCode",{parentName:"a"},"context"))," in which FxA is being run"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fx_ios_v1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"oauth_webchannel_v1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FIREFOX_BIN")," - Path to Firefox bin file"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FIREFOX_DEBUGGER")," - Open the ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox"},"Browser Toolbox")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_E10S")," - Enable ",(0,a.kt)("a",{parentName:"td",href:"https://wiki.mozilla.org/Electrolysis"},"Electrolysis")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("h2",{id:"stage-environment-setup-instructions-for-different-platforms"},"Stage environment setup instructions for different platforms"),(0,a.kt)("h3",{id:"stage-environment-setup-on-android"},"Stage environment setup on Android:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch Firefox browser"),(0,a.kt)("li",{parentName:"ol"},"Tap on the 3 dots menu and then on ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")),(0,a.kt)("li",{parentName:"ol"},"Scroll down to ",(0,a.kt)("inlineCode",{parentName:"li"},"About Firefox")," and tap on it"),(0,a.kt)("li",{parentName:"ol"},"Tap 5 consecutive times on Firefox Browser to enable the debug menu"),(0,a.kt)("li",{parentName:"ol"},"Go back"),(0,a.kt)("li",{parentName:"ol"},"Tap on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Custom Firefox Account"),' server just below "Turn on Sync"'),(0,a.kt)("li",{parentName:"ol"},"Enter value: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://accounts.stage.mozaws.net")," and tap OK"),(0,a.kt)("li",{parentName:"ol"},"Reopen the browser")),(0,a.kt)("h3",{id:"stage-environment-setup-on-ios"},"Stage environment setup on iOS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch Firefox browser"),(0,a.kt)("li",{parentName:"ol"},"Tap on ",(0,a.kt)("inlineCode",{parentName:"li"},"Next")," and then on ",(0,a.kt)("inlineCode",{parentName:"li"},"Start browsing")),(0,a.kt)("li",{parentName:"ol"},"Tap on Hamburger menu in the browser"),(0,a.kt)("li",{parentName:"ol"},"Tap on ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")),(0,a.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,a.kt)("inlineCode",{parentName:"li"},"About")," section and tap 5 consecutive times on the Firefox version (e.g Firefox Daylight 101.1) to enable the debug menu"),(0,a.kt)("li",{parentName:"ol"},"Scroll up to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Firefox Account")," section and tap on ",(0,a.kt)("inlineCode",{parentName:"li"},"Advanced Sync Settings"),". (If you are signed into an account, disconnect first.)"),(0,a.kt)("li",{parentName:"ol"},"Switch the ",(0,a.kt)("inlineCode",{parentName:"li"},"Use stage servers")," to ON."),(0,a.kt)("li",{parentName:"ol"},"Restart the browser.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," On mobile when switching between Stage and Prod viceversa, it\u2019s recommended to uninstall and reinstall the browser.")),(0,a.kt)("h3",{id:"stage-environment-setup-on-desktop-browser"},"Stage environment setup on desktop browser:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch Firefox browser."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"about:profiles")," and create a new profile."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"about:config"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the preference ",(0,a.kt)("inlineCode",{parentName:"li"},"identity.fxaccounts.autoconfig.uri")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://accounts.stage.mozaws.net"),".")))}u.isMDXComponent=!0}}]);