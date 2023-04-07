"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7002],{3649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var l=a(87462),i=(a(67294),a(3905));a(8209);const o={title:"Local Emails with MailDev"},n=void 0,s={unversionedId:"how-tos/local-emails-with-maildev",id:"how-tos/local-emails-with-maildev",title:"Local Emails with MailDev",description:"If you're interested in receiving emails locally you can use MailDev to intercept emails and display them in a local inbox.",source:"@site/docs/how-tos/local-emails-with-maildev.md",sourceDirName:"how-tos",slug:"/how-tos/local-emails-with-maildev",permalink:"/ecosystem-platform/how-tos/local-emails-with-maildev",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/local-emails-with-maildev.md",tags:[],version:"current",frontMatter:{title:"Local Emails with MailDev"},sidebar:"docs",previous:{title:"Creating an Account Locally",permalink:"/ecosystem-platform/how-tos/creating-an-account-locally"},next:{title:"Node Debugging",permalink:"/ecosystem-platform/how-tos/node-debugging"}},m={},r=[],p={toc:r};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're interested in receiving emails locally you can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/maildev"},"MailDev")," to intercept emails and display them in a local inbox."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the MailDev CLI globally:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g maildev\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Assuming you have FxA running locally you'll need to stop the ",(0,i.kt)("inlineCode",{parentName:"p"},"inbox")," service: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn pm2 stop inbox\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start MailDev on port 9999. You may need to start it with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," permissions: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo maildev -s 9999\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All emails will now be sent to the local inbox, which you can access at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:1080"},"http://localhost:1080")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MailDev inbox preview",src:a(26202).Z,width:"2190",height:"1330"})))}c.isMDXComponent=!0},26202:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/maildev-inbox-ea1bb03f9477f2fa891cae0d77a55def.png"}}]);