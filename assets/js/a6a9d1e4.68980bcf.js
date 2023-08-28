"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4258],{78916:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));i(8209);const a={id:"integration-with-subscription-platform",title:"Integration with Subscription Platform",sidebar_label:"Integration with Subscription Platform"},r=void 0,s={unversionedId:"relying-parties/tutorials/integration-with-subscription-platform",id:"relying-parties/tutorials/integration-with-subscription-platform",title:"Integration with Subscription Platform",description:"Setting up A Subscription",source:"@site/docs/relying-parties/tutorials/integration-with-subscription-platform.md",sourceDirName:"relying-parties/tutorials",slug:"/relying-parties/tutorials/integration-with-subscription-platform",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/tutorials/integration-with-subscription-platform.md",tags:[],version:"current",frontMatter:{id:"integration-with-subscription-platform",title:"Integration with Subscription Platform",sidebar_label:"Integration with Subscription Platform"},sidebar:"docs",previous:{title:"Integration with FxA",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-fxa"},next:{title:"Pairing authentication",permalink:"/ecosystem-platform/relying-parties/tutorials/pairing"}},l={},p=[{value:"Setting up A Subscription",id:"setting-up-a-subscription",level:2},{value:"Pre-Development",id:"pre-development",level:3},{value:"File A ticket",id:"file-a-ticket",level:4},{value:"Have a kickoff meeting",id:"have-a-kickoff-meeting",level:4},{value:"Development",id:"development",level:3},{value:"Demoing Subscription Flows",id:"demoing-subscription-flows",level:4},{value:"Setting up your marketing pages",id:"setting-up-your-marketing-pages",level:4},{value:"Webhook Events",id:"webhook-events",level:4},{value:"Testing",id:"testing",level:4},{value:"Evaluating the current user flow",id:"evaluating-the-current-user-flow",level:2},{value:"Integration with Google IAP",id:"integration-with-google-iap",level:2},{value:"Integration with Apple IAP",id:"integration-with-apple-iap",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...i}=t;return(0,o.kt)(c,(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-up-a-subscription"},"Setting up A Subscription"),(0,o.kt)("h3",{id:"pre-development"},"Pre-Development"),(0,o.kt)("h4",{id:"file-a-ticket"},"File A ticket"),(0,o.kt)("p",null,"First thing's first. File an FxA ticket in Jira. This ticket can be used to track documentation for your subscription. You can use the component \"Subscription Platform\" but otherwise, don't worry too much about format for your issue. We will use this request to set up an initial meeting and get the ball rolling. We will track your subscription setup in Confluence in order to keep sensitive details such as price and release dates and market confidential."),(0,o.kt)("h4",{id:"have-a-kickoff-meeting"},"Have a kickoff meeting"),(0,o.kt)("p",null,"Once your ticket is filed, you should have had a RRA-style meeting with the Firefox Accounts team. During or shortly after this meeting, an initial subscription capability string or strings should be agreed upon."),(0,o.kt)("p",null,"We will use this meeting to do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up a Confluence page to track basic info about your product such as name & capability string or strings"),(0,o.kt)("li",{parentName:"ol"},"Get a rough estimate of your shipping timeline (don't worry if this isn't 100% pinned down)"),(0,o.kt)("li",{parentName:"ol"},"Get a staging subscription set up for you to start testing with")),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"Integration with FxA is the primary development task to complete for a working subscription integration. The additional Subscription Capability string will be included as the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," field in the response from the FxA Profile Server."),(0,o.kt)("p",null,"If your integration includes an application service, it will need a webhook handler to receive relying party events from the FxA Event Broker."),(0,o.kt)("h4",{id:"demoing-subscription-flows"},"Demoing Subscription Flows"),(0,o.kt)("p",null,"The FxA Team maintains the Firefox Fortress package ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa/packages/fortress")," in order to demonstrate various SubPlat capabilities including tiers & different cycle durations. This package runs at ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9292"),", and is an up-to-date representation of SubPlat features. In order complete the demo, you will need access to a Stripe dev instance. An Accounts team member can provide this upon request. Please see our ",(0,o.kt)("a",{parentName:"p",href:"/ecosystem-platform/tutorials/subscription-platform#configuration"},"developer docs")," to learn more."),(0,o.kt)("h4",{id:"setting-up-your-marketing-pages"},"Setting up your marketing pages"),(0,o.kt)("p",null,"If your integration includes lead pages to start a subscription flow, you will need to include the product and plan id's in the subscription 'buy' URL. This link for production has the form of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{hostname}/subscriptions/products/{productId}?plan={planId}\n")),(0,o.kt)("p",null,"Valid hostnames for the FxA environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Production - ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.firefox.com")),(0,o.kt)("li",{parentName:"ul"},"Stage - ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.stage.mozaws.net"))),(0,o.kt)("p",null,"Note that valid values for ",(0,o.kt)("inlineCode",{parentName:"p"},"productId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"planId")," will vary with environment as a different Stripe account is associated with each."),(0,o.kt)("p",null,"Additionally, if your product has multiple associated plans in any environment, you will need to ensure that you are routing users correctly. The most likely cases for this would be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If your product has plans with different billing intervals (monthly, annually)"),(0,o.kt)("li",{parentName:"ol"},"If your product has plans in different currencies")),(0,o.kt)("p",null,"Importantly, the Subscription Platform does not currently provide any inbuilt capabilities for routing users to a correct currency or for showing multiple plans to a user at once. If this is a requirement for your product, you must provide the appropriate UI and routing to ensure that users end up on the correct payment page for the correct product."),(0,o.kt)("h4",{id:"webhook-events"},"Webhook Events"),(0,o.kt)("p",null,"If your integration includes an application service, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#subscription-state-change"},"subscription state notifications")," will also be sent via ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," to your registered ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," URL."),(0,o.kt)("h4",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When integrated with the FxA stage or development environments, subscription sign-up's can be tested using ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/testing#cards"},"Stripe test cards"),"."),(0,o.kt)("h2",{id:"evaluating-the-current-user-flow"},"Evaluating the current user flow"),(0,o.kt)("p",null,"To see the user experience without setting up your localhost you can subscribe to any of the existing subscriptions that we have available. If you want to try out the upgrade flow please use MDN Plus."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPN - ",(0,o.kt)("a",{parentName:"li",href:"https://www-dev.allizom.org/en-US/products/vpn/#pricing"},"https://www-dev.allizom.org/en-US/products/vpn/#pricing")),(0,o.kt)("li",{parentName:"ul"},"Relay Premium - ",(0,o.kt)("a",{parentName:"li",href:"https://stage.fxprivaterelay.nonprod.cloudops.mozgcp.net/"},"https://stage.fxprivaterelay.nonprod.cloudops.mozgcp.net/")),(0,o.kt)("li",{parentName:"ul"},"MDN Plus - ",(0,o.kt)("a",{parentName:"li",href:"https://developer.allizom.org/en-US/plus#subscribe"},"https://developer.allizom.org/en-US/plus#subscribe"))),(0,o.kt)("p",null,"Once you selected a plan please create a new user. You can use the following Credit Card number: 4242424242424242 with any 3 digit CVC and a valid expiration date. NOTE: this is a test card and is only available on staging. Once you complete the subscription you can look at the email communications sent out by the SubPlat team."),(0,o.kt)("p",null,"To cancel your subscription simply go to ",(0,o.kt)("a",{parentName:"p",href:"https://accounts.stage.mozaws.net/subscriptions"},"https://accounts.stage.mozaws.net/subscriptions")," and press the cancel button."),(0,o.kt)("p",null,"To upgrade your subscription sign in to your account using the step above and go to the MDN Plus link. The website will now display your current plan and the upgrade options."),(0,o.kt)("h2",{id:"integration-with-google-iap"},"Integration with Google IAP"),(0,o.kt)("p",null,"To integrate your android app with the Subscription Platform, please see ",(0,o.kt)("a",{parentName:"p",href:"/ecosystem-platform/relying-parties/how-tos/google-iap"},"Google IAP"),"."),(0,o.kt)("h2",{id:"integration-with-apple-iap"},"Integration with Apple IAP"),(0,o.kt)("p",null,"To integrate your iOS app with the Subscription Platform, please see ",(0,o.kt)("a",{parentName:"p",href:"/ecosystem-platform/relying-parties/how-tos/apple-iap"},"Apple IAP"),"."))}d.isMDXComponent=!0}}]);