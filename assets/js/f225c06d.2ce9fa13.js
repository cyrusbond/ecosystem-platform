"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7140],{1675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));n(1839);const o={title:"Scheduled Maintenance"},l=void 0,r={unversionedId:"reference/scheduled-maintenance",id:"reference/scheduled-maintenance",title:"Scheduled Maintenance",description:"Scheduled Maintenance",source:"@site/docs/reference/scheduled-maintenance.md",sourceDirName:"reference",slug:"/reference/scheduled-maintenance",permalink:"/ecosystem-platform/reference/scheduled-maintenance",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/scheduled-maintenance.md",tags:[],version:"current",frontMatter:{title:"Scheduled Maintenance"},sidebar:"docs",previous:{title:"Application Tracing",permalink:"/ecosystem-platform/reference/application-tracing"},next:{title:"Mobile Specifics",permalink:"/ecosystem-platform/reference/mobile-specifics"}},c={},s=[{value:"Scheduled Maintenance",id:"scheduled-maintenance",level:2},{value:"Scheduling Procedure",id:"scheduling-procedure",level:2},{value:"Downtime Procedure Notes",id:"downtime-procedure-notes",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"scheduled-maintenance"},"Scheduled Maintenance"),(0,i.kt)("p",null,"When planning scheduled maintenance that will result in downtime for Firefox Accounts you must follow these procedures to notify users. Activities that can cause downtime include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MySQL changes requiring failover"),(0,i.kt)("li",{parentName:"ul"},"Redis changes requiring failover")),(0,i.kt)("h2",{id:"scheduling-procedure"},"Scheduling Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pick a time to perform the scheduled maintenance. Based on historical traffic patterns, Saturday at 11PM ET is a good default choice. Think about how long you'll need to apply changes. 30 minutes is a good default choice, but ensure that gives you wiggle room if it takes longer than expected."),(0,i.kt)("li",{parentName:"ol"},"Announce the scheduled maintenance in the Firefox Accounts + Operations meeting on Tuesday. Talk through what change is being made, rollback procedures, impact on users, that sort of thing"),(0,i.kt)("li",{parentName:"ol"},"Draft a notice containing:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The time (include a link to ",(0,i.kt)("a",{parentName:"li",href:"https://time.is/compare"},"https://time.is/compare")," for easier timezones)"),(0,i.kt)("li",{parentName:"ul"},"The change being made"),(0,i.kt)("li",{parentName:"ul"},"Impact on users"),(0,i.kt)("li",{parentName:"ul"},"Example:",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"On ",(0,i.kt)("a",{parentName:"p",href:"https://time.is/2300_24_Apr_2021_in_Toronto?Firefox_Accounts_scheduled_maintenance"},"2021-04-24 at 11pm ET")," (this Saturday) we will be upgrading the Firefox Accounts oauth database to a larger instance size. End users will not be able to sign in or make new subscriptions for 5-10 minutes.")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Send the notice to ",(0,i.kt)("a",{parentName:"li",href:"mailto:firefox-accounts-notices@mozilla.com"},"firefox-accounts-notices@mozilla.com")),(0,i.kt)("li",{parentName:"ol"},"Send the notice to Slack channels:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#fxa"),(0,i.kt)("li",{parentName:"ul"},"#subscription-platform")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Set maintenance window for ",(0,i.kt)("a",{parentName:"li",href:"https://moz-svc-ops.pagerduty.com/service-directory/PLMUB9U/activity"},"Kinto Webextensions")," so Sven doesn't get paged")),(0,i.kt)("h2",{id:"downtime-procedure-notes"},"Downtime Procedure Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take a snapshot if you're making changes to MySQL or Redis"),(0,i.kt)("li",{parentName:"ul"},"Re-up your scheduled maintenance notice in Slack before maintenance begins"),(0,i.kt)("li",{parentName:"ul"},"Send a Slack message when scheduled maintenance has been completed")))}d.isMDXComponent=!0}}]);