"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5680],{58418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));a(16758);const r={id:"apple-iap",title:"Apple IAP",sidebar_label:"Apple IAP"},o=void 0,p={unversionedId:"relying-parties/how-twos/apple-iap",id:"relying-parties/how-twos/apple-iap",title:"Apple IAP",description:"Introduction",source:"@site/docs/relying-parties/how-twos/apple-iap.md",sourceDirName:"relying-parties/how-twos",slug:"/relying-parties/how-twos/apple-iap",permalink:"/ecosystem-platform/relying-parties/how-twos/apple-iap",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/how-twos/apple-iap.md",tags:[],version:"current",frontMatter:{id:"apple-iap",title:"Apple IAP",sidebar_label:"Apple IAP"},sidebar:"docs",previous:{title:"End-to-end Encryption",permalink:"/ecosystem-platform/relying-parties/how-twos/end-to-end-encryption"},next:{title:"Metrics",permalink:"/ecosystem-platform/relying-parties/reference/metrics-for-relying-parties"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Create an IAP configuration document",id:"create-an-iap-configuration-document",level:3},{value:"Add App Store Server API keys in SubPlat",id:"add-app-store-server-api-keys-in-subplat",level:3},{value:"Send App Store Server notifications to SubPlat",id:"send-app-store-server-notifications-to-subplat",level:3},{value:"Map Apple IAP to Stripe plans",id:"map-apple-iap-to-stripe-plans",level:3},{value:"Prevent Apple IAP subscribers from double subscribing",id:"prevent-apple-iap-subscribers-from-double-subscribing",level:3},{value:"SubPlat API Calls",id:"subplat-api-calls",level:2},{value:"Getting the current subscription status for an FxA user",id:"getting-the-current-subscription-status-for-an-fxa-user",level:3},{value:"Registering an Apple IAP subscriber",id:"registering-an-apple-iap-subscriber",level:3},{value:"(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform",id:"optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform",level:3},{value:"Testing your integration",id:"testing-your-integration",level:2},{value:"End-to-end testing of SubPlat APIs",id:"end-to-end-testing-of-subplat-apis",level:3},{value:"Idiosyncrasies of the App Store Server API",id:"idiosyncrasies-of-the-app-store-server-api",level:3}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"As of December 2022, the Subscription Platform supports ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/app-store/subscriptions/"},"Apple IAP")," integrations for products with Mozilla VPN as one example. An integration allows us to maintain an awareness of an Apple IAP subscriber's subscription status for a given iOS app, including any state changes, which we forward on to the relevant relying party."),(0,n.kt)("p",null,"Importantly, Apple provides read-only access to Apple IAP subscriptions. Consequently, we do not (and cannot) modify Apple IAP subscriptions (e.g. making plan changes such as upgrades)."),(0,n.kt)("p",null,"A more technical discussion (geared toward FxA engineers) can be found in ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration"},"Apple IAP Integration"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This guide assumes you are already integrated with FxA/the Subscription Platform; please see ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform"},"Integration with Subscription Platform")," for more information."),(0,n.kt)("p",null,"Ideally, you will also want to grant 1-2 Subscription Platform engineers working on the integration developer access to your iOS app in ",(0,n.kt)("a",{parentName:"p",href:"https://appstoreconnect.apple.com/"},"App Store Connect")," (",(0,n.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1760053"},"example bug"),"). This allows us to access your iOS app\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appstoreserverapi"},"App Store Server API")," keys, to look up needed app-specific information and to configure an endpoint to receive App Store Server notifications."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"These steps can be done by a product manager or developer and in parallel with steps in ",(0,n.kt)("a",{parentName:"p",href:"#subplat-api-calls"},"SubPlat API Calls"),". More information regarding specific Stripe metadata keys mentioned below can be found in the ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/tutorials/subscription-platform#stripe-productplans"},"Subscription Platform integration tutorial"),"."),(0,n.kt)("h3",{id:"create-an-iap-configuration-document"},"Create an IAP configuration document"),(0,n.kt)("p",null,"This document represents a list of App Store plans (identified uniquely by their App Store ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appstoreserverapi/productid/"},(0,n.kt)("inlineCode",{parentName:"a"},"productId"),"s")," for your product."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go into App Store Connect and find your iOS app\u2019s human-readable ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/appstoreserverapi/productid/"},(0,n.kt)("inlineCode",{parentName:"a"},"productId")),"s and ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/appstoreserverapi/bundleid/"},(0,n.kt)("inlineCode",{parentName:"a"},"bundleId")),"."),(0,n.kt)("li",{parentName:"ol"},"Create a configuration document similar in form to ",(0,n.kt)("a",{parentName:"li",href:"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/guardian-vpn"},"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/guardian-vpn")," (omitting Android plans) including a ",(0,n.kt)("inlineCode",{parentName:"li"},"bundleId")," property. This can be in a Google document for now.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: The only information SubPlat uses from the VPN document currently is the ",(0,n.kt)("inlineCode",{parentName:"li"},"productId")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"platform"),". The VPN configuration document is structured in this way for historical reasons. We may change how this information is structured for future integrations."))),(0,n.kt)("li",{parentName:"ol"},"File a ticket in the ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/browse/FXA"},"FXA Jira project"),' to create a new document in SubPlat\'s "IAP config" Firestore collection, and provide the document from Step 2 along with an ',(0,n.kt)("inlineCode",{parentName:"li"},"appName"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"appName")," is a human-readable name that SubPlat uses to uniquely identify your app in our system (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},'"guardian-vpn"')," is the ",(0,n.kt)("inlineCode",{parentName:"li"},"appName")," for the Mozilla VPN in the link above).\nWhen the ticket is complete and deployed, you should be able to view your configuration at ",(0,n.kt)("a",{parentName:"li",href:"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/$%7BappName%7D"},"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/${appName}"),".")))),(0,n.kt)("h3",{id:"add-app-store-server-api-keys-in-subplat"},"Add App Store Server API keys in SubPlat"),(0,n.kt)("p",null,"A SubPlat engineer with developer access to App Store Connect (see ",(0,n.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),") can configure this for you when ready."),(0,n.kt)("p",null,"App Store Server API keys are needed for SubPlat to make calls to Apple\u2019s API. See ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration"},"Apple IAP Integration")," for more information on how to obtain these keys."),(0,n.kt)("h3",{id:"send-app-store-server-notifications-to-subplat"},"Send App Store Server notifications to SubPlat"),(0,n.kt)("p",null,"A SubPlat engineer with developer access to App Store Connect (see ",(0,n.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),") can configure this for you when ready."),(0,n.kt)("p",null,"The Sandbox and, when ready, Production endpoints in App Store Connect must be updated with SubPlat's notification endpoint in order for our system to receive App Store Server notifications."),(0,n.kt)("h3",{id:"map-apple-iap-to-stripe-plans"},"Map Apple IAP to Stripe plans"),(0,n.kt)("p",null,"In order to know what capabilities to grant a given Apple IAP user, we map App Store Connect ",(0,n.kt)("inlineCode",{parentName:"p"},"productId"),"s to ",(0,n.kt)("a",{parentName:"p",href:"https://support.stripe.com/questions/how-to-create-products-and-prices"},"Stripe ",(0,n.kt)("inlineCode",{parentName:"a"},"price")," or ",(0,n.kt)("inlineCode",{parentName:"a"},"plan"))," IDs (",(0,n.kt)("inlineCode",{parentName:"p"},"price"),"s supersede ",(0,n.kt)("inlineCode",{parentName:"p"},"plan"),"s)."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go into App Store Connect and find your iOS app\u2019s human-readable ",(0,n.kt)("inlineCode",{parentName:"li"},"productId"),"s."),(0,n.kt)("li",{parentName:"ol"},"In the Stripe dashboard for the desired environment (stage or production), create a new, valid product in Stripe and a new, valid plan underneath that product.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We hope to simplify this process in SubPlat 3.0, expected in 2023; see this ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/browse/PSP-64?focusedCommentId=627245"},"Jira comment")," for more details."))),(0,n.kt)("li",{parentName:"ol"},"Add each App Store ",(0,n.kt)("inlineCode",{parentName:"li"},"productId")," as a comma-separated value to a new ",(0,n.kt)("inlineCode",{parentName:"li"},"appStoreProductIds")," metadata property on the newly created plan.")),(0,n.kt)("h3",{id:"prevent-apple-iap-subscribers-from-double-subscribing"},"Prevent Apple IAP subscribers from double subscribing"),(0,n.kt)("p",null,"As noted previously, we don\u2019t support upgrades or any plan changes for Apple IAP subscribers. However, it is possible for an Apple IAP subscriber to try to sign up again for your product on the Subscription Platform website. Follow these steps to prevent them from double subscribing."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Stripe dashboard for the given environment (stage or production), remove any ",(0,n.kt)("inlineCode",{parentName:"li"},"productSet")," properties that may have been previously set on the newly created product/plan from ",(0,n.kt)("a",{parentName:"li",href:"#map-apple-iap-to-stripe-plans"},"Map Apple IAP to Stripe plans"),"."),(0,n.kt)("li",{parentName:"ol"},"Add a ",(0,n.kt)("inlineCode",{parentName:"li"},"productSet")," metadata key with a value equal to the comma-separated list of all the unique ",(0,n.kt)("inlineCode",{parentName:"li"},"productSet"),"s for all your product\u2019s plans in the environment to the new product referenced in Step 1. Without their own ",(0,n.kt)("inlineCode",{parentName:"li"},"productSet")," specified, the new plan will inherit its product\u2019s ",(0,n.kt)("inlineCode",{parentName:"li"},"productSet"),".")),(0,n.kt)("h2",{id:"subplat-api-calls"},"SubPlat API Calls"),(0,n.kt)("p",null,"These steps can be done by a developer and in parallel with the steps in ",(0,n.kt)("a",{parentName:"p",href:"#configuration"},"Configuration"),"."),(0,n.kt)("p",null,"As mentioned in the ",(0,n.kt)("a",{parentName:"p",href:"#introduction"},"Introduction"),", SubPlat has read-only access to App Store subscription information. We will store Apple IAP subscribers' data in our system and update the information when we receive notifications from the App Store server, broadcasting updates in real time to the relevant relying parties."),(0,n.kt)("h3",{id:"getting-the-current-subscription-status-for-an-fxa-user"},"Getting the current subscription status for an FxA user"),(0,n.kt)("p",null,"Assuming you are already integrated with FxA generally (see ",(0,n.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),"), are receiving subscription updates for other types of subscriptions (e.g. for PayPal or Stripe), and you have completed the ",(0,n.kt)("a",{parentName:"p",href:"#map-apple-iap-to-stripe-plans"},"mapping of App Store to Stripe plans"),", no further work is required to continue receiving these updates for Apple IAP subscribers. You can also pull this information from FxA with the existing ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/api#tag/Account/operation/getAccountProfile"},(0,n.kt)("inlineCode",{parentName:"a"},"/account/profile"))," endpoint without any further changes. "),(0,n.kt)("h3",{id:"registering-an-apple-iap-subscriber"},"Registering an Apple IAP subscriber"),(0,n.kt)("p",null,"SubPlat needs to be able to associate an Apple IAP subscription in Apple's system to a specific FxA user. This is done by registering each Apple IAP subscriber with the ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapAppstoretransactionAppname"},(0,n.kt)("inlineCode",{parentName:"a"},"/subscriptions/iap/app-store-transaction/${appName}"))," endpoint."),(0,n.kt)("p",null,"By design, we allow only one FxA user per App Store ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid/"},(0,n.kt)("inlineCode",{parentName:"a"},"originalTransactionId")),", which is how Apple uniquely identifies a subscription."),(0,n.kt)("p",null,"This endpoint can be used to register a new Apple IAP subscriber or to migrate an existing Apple IAP subscriber. For the latter, see ",(0,n.kt)("a",{parentName:"p",href:"#optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform"},"(Optional) Migrate existing Apple IAP subscribers to the Subscription Platform"),"."),(0,n.kt)("h3",{id:"optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform"},"(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform"),(0,n.kt)("p",null,"This section only applies to products that currently have a direct integration with Apple who need to migrate existing subscribers to the Subscription Platform."),(0,n.kt)("p",null,"These steps can be done by a developer. While step 1 can be completed in parallel, otherwise perform this migration after completing the steps under ",(0,n.kt)("a",{parentName:"p",href:"#configuration"},"Configuration")," and ",(0,n.kt)("a",{parentName:"p",href:"#subplat-api-calls"},"SubPlat API Calls"),". See also the ",(0,n.kt)("a",{parentName:"p",href:"#testing-your-integration"},"Testing your integration")," section."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"File a ticket in the ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/browse/FXA"},"FXA Jira project")," to add a temporary scope for ",(0,n.kt)("inlineCode",{parentName:"li"},"'profile:subscriptions'")," to the App Store registration endpoint.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example ticket to add ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/browse/FXA-5833"},"FXA-5833")," and remove ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/browse/FXA-5848"},"FXA-5848"),"."))),(0,n.kt)("li",{parentName:"ol"},"Use the existing registration endpoint (",(0,n.kt)("a",{parentName:"li",href:"/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapAppstoretransactionAppname"},(0,n.kt)("inlineCode",{parentName:"a"},"/subscriptions/iap/app-store-transaction/${appName}")),") to register each existing user with SubPlat.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Important: While SubPlat routes can handle thousands of requests per second, we recommend limiting requests to 10-20 per minute to start and potentially increase that if there are no issues. This is because, at the time of writing, the App Store Server APIs docs don\u2019t list a rate limit threshold, and we make more than one request to Apple for each SubPlat request.")))),(0,n.kt)("h2",{id:"testing-your-integration"},"Testing your integration"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Like many systems, Apple's Sandbox environment does not necessarily exhibit behavior consistent with what is stated in their docs. When in doubt, directly test the scenario in question, potentially more than once, to understand what to expect.")),(0,n.kt)("h3",{id:"end-to-end-testing-of-subplat-apis"},"End-to-end testing of SubPlat APIs"),(0,n.kt)("p",null,"After development and the steps above are complete (and importantly, before involving QA), it is recommended for the lead RP integration engineer to pair with the lead SubPlat integration engineer to test the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#getting-the-current-subscription-status-for-an-fxa-user"},"Getting the current subscription status for an FxA user")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#registering-an-apple-iap-subscriber"},"Registering an Apple IAP subscriber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#send-app-store-server-notifications-to-subplat"},"Receiving a Sandbox notification in our stage environment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform"},"(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform"))),(0,n.kt)("h3",{id:"idiosyncrasies-of-the-app-store-server-api"},"Idiosyncrasies of the App Store Server API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The unique subscription identifier used by Apple (",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid/"},"original transaction ID"),") is per App Store account. When testing with different FxA accounts, it is therefore necessary to either:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(Recommended) Use a separate Sandbox App Store account for each FxA account."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/browse/PSP-509?focusedCommentId=592265"},"Clear the Sandbox App Store account's purchase history")," in App Store Connect in between test cases."))),(0,n.kt)("li",{parentName:"ul"},"Unlike in Production where Apple retries notifications several times over a period of days, in the Sandbox environment, Apple ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/appstoreservernotifications/responding_to_app_store_server_notifications"},"only sends each notification once with no retries"),"."),(0,n.kt)("li",{parentName:"ul"},"In the Sandbox environment, ",(0,n.kt)("a",{parentName:"li",href:"https://help.apple.com/app-store-connect/#/dev7e89e149d"},"subscriptions autorenew at an accelerated rate and auto-expire after 12 renewals")," if no action is taken otherwise.")))}c.isMDXComponent=!0}}]);