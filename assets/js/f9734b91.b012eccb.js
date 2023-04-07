"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6711],{21391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));r(8209);const o={id:"sub-plat-features",title:"Subscription Features",sidebar_label:"Subscription Features"},s=void 0,n={unversionedId:"relying-parties/reference/sub-plat-features",id:"relying-parties/reference/sub-plat-features",title:"Subscription Features",description:"Before reading this page, it will be useful to have a grounding in Sub Plat terminology. Please see the Subscription Platform Overview for more information.",source:"@site/docs/relying-parties/reference/sub-plat-features.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/sub-plat-features",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-features",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-features.md",tags:[],version:"current",frontMatter:{id:"sub-plat-features",title:"Subscription Features",sidebar_label:"Subscription Features"},sidebar:"docs",previous:{title:"Subscription Platform Overview",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-overview"},next:{title:"Subscription Coupons",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-coupons"}},l={},p=[{value:"Payment Methods",id:"payment-methods",level:2},{value:"Staffed Support",id:"staffed-support",level:2},{value:"Data Reporting",id:"data-reporting",level:2},{value:"Geo-Restrictions",id:"geo-restrictions",level:2},{value:"Currency &amp; Market Support",id:"currency--market-support",level:2},{value:"Billing intervals",id:"billing-intervals",level:3},{value:"Tiers &amp; upgradable subscriptions",id:"tiers--upgradable-subscriptions",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before reading this page, it will be useful to have a grounding in Sub Plat terminology. Please see the Subscription Platform Overview for more information."),(0,a.kt)("h2",{id:"payment-methods"},"Payment Methods"),(0,a.kt)("p",null,"The Subscription Platform currently supports payments with major credit cards through Stripe and Paypal. Supported Products with Mobile products may also integrate to Apple and Google IAP through the Subscription Platform."),(0,a.kt)("h2",{id:"staffed-support"},"Staffed Support"),(0,a.kt)("p",null,"Subscription Platform integrates with ZenDesk to provide staffed support. The Subscription Platform team partners with the Support Team to manage ZenDesk. The Support team is directly responsible for provisioning resourcing for support and setting up SLAs for your subscription offerings."),(0,a.kt)("h2",{id:"data-reporting"},"Data Reporting"),(0,a.kt)("p",null,"Data reporting consists of standard FxA funnel metrics, Stripe data & ZenDesk ticket data in addition to any telemetry you collect in your offering. Please see ",(0,a.kt)("a",{parentName:"p",href:"/ecosystem-platform/relying-parties/reference/metrics-for-relying-parties"},"this document")," to understand access and status for all of these endpoints."),(0,a.kt)("h2",{id:"geo-restrictions"},"Geo-Restrictions"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"The Subscription Platform does not implement any geo-restrictions"),". Instead, we rely on Stripe to reject credit cards from countries that our legal team has not given us permission to ship in. This means that if you're building a lead page to market a subscription product, you will be responsible for geo-restricting access to the Subscription Platform."),(0,a.kt)("h2",{id:"currency--market-support"},"Currency & Market Support"),(0,a.kt)("p",null,"The Subscription Platform currently supports several ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/l/cp/MMwzvYV4"},"currencies and markets"),"."),(0,a.kt)("p",null,"Importantly, if you wish to offer your product in multiple different currencies, you will have to configure your marketing page to correctly route different users to different plans depending on their region. You will also need to set up individual stripe plans for each currency."),(0,a.kt)("p",null,"Reach out to the Subscription Platform team in Slack at #subscription-platform to request additional market support so that we may advise you on next steps toward coverage."),(0,a.kt)("h3",{id:"billing-intervals"},"Billing intervals"),(0,a.kt)("p",null,"The Subscription Platform supports billing intervals of one-month, six months, and one year. Subscriptions auto-renew and do not expire until a user cancels them."),(0,a.kt)("p",null,"Like currencies, each billing interval represents a separate ",(0,a.kt)("strong",{parentName:"p"},"plan")," in Stripe. This means, if you wish to offer multiple different intervals, you will need to implement multiple different ",(0,a.kt)("strong",{parentName:"p"},"plans"),"."),(0,a.kt)("h3",{id:"tiers--upgradable-subscriptions"},"Tiers & upgradable subscriptions"),(0,a.kt)("p",null,"The Subscription Platform supports upgradable subscriptions between tiers of a product. This is a streamlined way to organize a set of subscription products that are related. For example, you might wish to sell a subscription to Firefox Private Network Proxy for $2.99 a month with an optional upgrade to unlock the Firefox Private Network VPN for $4.99 a month."),(0,a.kt)("p",null,"Rather than making a user go through an entire payments Flow, Sub Plat allows upgrades with a single click. Users are charged a pro-rated amount for the the upgrade for their current billing cycle and in subsequent billing cycles they will be charged the full amount of their new subscription."))}c.isMDXComponent=!0}}]);