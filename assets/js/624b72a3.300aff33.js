"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2521],{43642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(8209);const i={id:"metrics-for-relying-parties",title:"Metrics for Relying Parties",sidebar_label:"Metrics"},o=void 0,s={unversionedId:"relying-parties/reference/metrics-for-relying-parties",id:"relying-parties/reference/metrics-for-relying-parties",title:"Metrics for Relying Parties",description:"Last updated: March 24th, 2023",source:"@site/docs/relying-parties/reference/metrics-for-relying-parties.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/metrics-for-relying-parties",permalink:"/ecosystem-platform/relying-parties/reference/metrics-for-relying-parties",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/metrics-for-relying-parties.md",tags:[],version:"current",frontMatter:{id:"metrics-for-relying-parties",title:"Metrics for Relying Parties",sidebar_label:"Metrics"},sidebar:"docs",previous:{title:"Device Registration (Sync)",permalink:"/ecosystem-platform/relying-parties/how-tos/device-registration"},next:{title:"Subscription Platform Overview",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-overview"}},l={},p=[{value:"Subscriptions Services Data Sources",id:"subscriptions-services-data-sources",level:2},{value:"Stripe",id:"stripe",level:3},{value:"Mobile app store providers",id:"mobile-app-store-providers",level:3},{value:"FxA logs",id:"fxa-logs",level:3},{value:"Relying-Party Hosted Email Form",id:"relying-party-hosted-email-form",level:2},{value:"Relying-Party &quot;Engage&quot; Events",id:"relying-party-engage-events",level:2},{value:"Metrics-Related Query Parameters",id:"metrics-related-query-parameters",level:2},{value:"User Opt-out",id:"user-opt-out",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Last updated: ",(0,n.kt)("inlineCode",{parentName:"p"},"March 24th, 2023")),(0,n.kt)("h2",{id:"subscriptions-services-data-sources"},"Subscriptions Services Data Sources"),(0,n.kt)("p",null,"Subscription Platform provides product metrics in BigQuery by obtaining subscriptions data from the following sources: Stripe, mobile app store providers, and FxA logs."),(0,n.kt)("h3",{id:"stripe"},"Stripe"),(0,n.kt)("p",null,"The bulk of Subscriptions Services data comes from Stripe and is synced to BigQuery using Fivetran and its ",(0,n.kt)("a",{parentName:"p",href:"https://fivetran.com/docs/applications/stripe"},"Stripe connector"),". This data reflects the current subscription state of all active subscriptions paid for via Stripe or PayPal. It also includes information regarding subscriptions and customers, as well as products, plans, invoices, cards, charges, discounts, coupons, and promotion codes."),(0,n.kt)("p",null,"Some of the customer information includes the customer's postal code, state, and country for a subscription, which helps resolve issues for customers across a particular dimension (e.g., country, payment provider, etc.). However, as it intentionally excludes any personal identifiable information of customers (e.g., name, street address, phone number, email address), it can be challenging to use to help on an individual customer level. Other uses for this data is for retrieving all-time counts (e.g., total number of active subscriptions)."),(0,n.kt)("p",null,"Fivetran preserves historical data within ",(0,n.kt)("inlineCode",{parentName:"p"},"subscription_history")," by comparing the current state of the subscription with the most recent record in the history table and adding a new record if they vary. However, there are limitations with the Fivetran Stripe sync, as it only records historical state/changes for top-level subscription fields and not the associated subscription items which indicate the subscribed plan. As we have to rely on the subscription metadata fields ",(0,n.kt)("inlineCode",{parentName:"p"},"previous_plan_id")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"plan_change_date"),", which only records the most recent plan change, we can potentially miss/lose history if there are any problems with the Fivetran sync."),(0,n.kt)("p",null,"The Stripe Firestore DB was set up in October 2021. As of February 2023, Subscription Platform also syncs Stripe Firestore Customer and Subscriptions collections in BigQuery, including the latest data and changelogs."),(0,n.kt)("h3",{id:"mobile-app-store-providers"},"Mobile app store providers"),(0,n.kt)("p",null,"Subscriptions Services data is also obtained from two mobile app store providers: Apple and Google. This includes current and historical IAP subscription states, as well as information, such as date of billing and expired dates, subscription change event, etc. Apple provides limited data - it does not provide the country, price, or currency of subscriptions."),(0,n.kt)("p",null,"As of December 2022, Subscription Platform supports ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration"},"Apple IAP")," subscriptions, and stores current subscription state from that point forward in the Firestore database and synced in BigQuery."),(0,n.kt)("p",null,"Similar to Apple, Subscription Platform also handles the current state of Google IAP subscriptions, which are also stored in Firestore and synced in BigQuery."),(0,n.kt)("p",null,"These collections of IAP subscriptions synced in BigQuery each have changelogs that also get synced into a BigQuery table. These changelogs contain the historical state for IAP subscriptions - there is a BigQuery view for each that represents the current state of the collection calculated based on the latest changelog for each document. Since the historical state and changes are only recorded by the BigQuery sync itself, there are only records of the changes that occurred after the BigQuery syncs were set up."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Google IAP sync started 2021-10-18"),(0,n.kt)("li",{parentName:"ul"},"Apple IAP sync started 2022-12-15"))),(0,n.kt)("p",null,"The general use of this data is to understand what the subscription state was over time, as well as sequences of events."),(0,n.kt)("h3",{id:"fxa-logs"},"FxA logs"),(0,n.kt)("p",null,"FxA logs include account and subscription management event data that can help provide insights regarding the customers' journey through the FxA sign-in/sign-up process. It can also help identify potential drivers (e.g., call-to-action, medium, paid search term, etc.) that directed customers to a page for acquisition and attribution purposes, if query parameters are set up properly (see below for more information)."),(0,n.kt)("h2",{id:"relying-party-hosted-email-form"},"Relying-Party Hosted Email Form"),(0,n.kt)("p",null,"Reliers must do either one of the following when integrating with Firefox Accounts:\n0. Self-host the first step in the FxA authentication flow themselves (e.g. the form capturing the user's email)\n0. Send users to a FxA-hosted form at ",(0,n.kt)("a",{parentName:"p",href:"https://accounts.firefox.com/"},"https://accounts.firefox.com/"),"."),(0,n.kt)("p",null,"In the first case, when the email entry form is hosted by the relying party, the relying party must:"),(0,n.kt)("ol",{start:0},(0,n.kt)("li",{parentName:"ol"},"When the page that hosts the FxA form loads, have it make an XHR call to ",(0,n.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/metrics-flow"),". The domain name of the request should match the FxA page that is being redirected to (e.g. ",(0,n.kt)("a",{parentName:"li",href:"https://accounts.firefox.com"},"https://accounts.firefox.com"),"). You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"fetch")," to get this info."),(0,n.kt)("li",{parentName:"ol"},"Include the following query parameters in the above request (see chart below for descriptions):")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"entrypoint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"entrypoint_experiment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"entrypoint_variation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"utm_source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"utm_campaign")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"form_type")),(0,n.kt)("li",{parentName:"ul"},"An example: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/metrics-flow?entrypoint=my_page&utm_source=my_referrer&utm_campaign=my_campaign&form_type=email"))),(0,n.kt)("ol",{start:0},(0,n.kt)("li",{parentName:"ol"},"The response from ",(0,n.kt)("inlineCode",{parentName:"li"},"metrics-flow")," will be a JSON object that contains the fields ",(0,n.kt)("inlineCode",{parentName:"li"},"flowId")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"flowBeginTime"),". These values will need to be propagated to FxA as query parameters, which can be done using hidden form fields with the names ",(0,n.kt)("inlineCode",{parentName:"li"},"flow_id")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"flow_begin_time"),". You can see an example of how the ",(0,n.kt)("a",{parentName:"li",href:"about:welcome"},"about:welcome")," page does this by looking ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/activity-stream/blob/06aeeb331e9dd497e4d115d0e6cba51b9b25b36c/content-src/asrouter/templates/StartupOverlay/StartupOverlay.jsx#L30"},"here"),".")),(0,n.kt)("p",null,"Following these instructions will provide FxA and the relying party with the data needed to ensure a healthy user flow."),(0,n.kt)("h2",{id:"relying-party-engage-events"},'Relying-Party "Engage" Events'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: this is a limited, temporary solution for cross-product metrics that is due to be replaced in early 2020. Please contact the FxA team if you think you need access.")),(0,n.kt)("p",null,"The metrics that the Firefox Accounts platform sends to Amplitude reflect mainly direct interactions with FxA. These are mostly authentication events (registering, logging in, etc) or events related to account management (e.g. changes to a user\u2019s account settings). This means that interaction events within \u201crelying\u201d products of FxA (such as Firefox Monitor) that do not involve authentication are not logged to the FxA amplitude metrics system. To address this shortcoming, FxA-relying products can log metrics about product usage directly via the FxA metrics system. FxA has not previously allowed for the direct logging of these types of metrics by relying products, but we feel that this change is necessary to ensure that company-level metrics accurately reflect product usage."),(0,n.kt)("p",null,"Only one event is allowed per RP, and the required query parameters are different from other requests:"),(0,n.kt)("ol",{start:0},(0,n.kt)("li",{parentName:"ol"},"When the event of interest occurs, the RP server (not the user's browser) should submit a GET request to ",(0,n.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/metrics-flow")," with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Origin")," header set to the RP's registered FxA OAuth domain."),(0,n.kt)("li",{parentName:"ol"},"Include the following query parameters in the request:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_type")," - the static string \u201cengage\u201d - this ping tells us that a user engaged with a service in some way that we\u2019ve defined out of band"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"service")," - the oauth client identifier for the RP, this is an opaque 8-byte hex string that isn\u2019t private"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uid")," - the Firefox Accounts user id - this is an opaque hex string that identifies the user across all FxA relying parties. Here, it\u2019s the user who has engaged with the service in some way. (In the future, we plan to replace this with an anonymous / pseudonymous identifier supplied by ecosystem telemetry)")),(0,n.kt)("p",null,"Note that the RP's domain needs to be manually  added to the FxA ",(0,n.kt)("inlineCode",{parentName:"p"},"allowed_metrics_flow_origins")," list before these events will be accepted. Otherwise, they will be silently dropped."),(0,n.kt)("h2",{id:"metrics-related-query-parameters"},"Metrics-Related Query Parameters"),(0,n.kt)("p",null,"The values that are passed in the parameters below are subject to validation via regular expressions. ",(0,n.kt)("strong",{parentName:"p"},"If the parameter values do not conform to their associated regexes in ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/server/lib/flow-event.js"},"this file")," then all metrics events associated with the non-conforming parameters will not be logged!")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Values"),(0,n.kt)("th",{parentName:"tr",align:null},"Validation regex"),(0,n.kt)("th",{parentName:"tr",align:null},"Amplitude Chart Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"entrypoint")),(0,n.kt)("td",{parentName:"tr",align:null},"The specific page or browser UI element containing the first step of the FxA sign-in/sign-up process (e.g., enter email form)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"firstrun")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w.:-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://analytics.amplitude.com/mozilla-corp/chart/n8cd9no"},"Firstrun form views"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"entrypoint_experiment")),(0,n.kt)("td",{parentName:"tr",align:null},"Identifier for the experiment the user is part of (if any)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w.:-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"entrypoint_variation")),(0,n.kt)("td",{parentName:"tr",align:null},"Identifier for the experiment variation the user is part of (if any)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w.:-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"form_type")),(0,n.kt)("td",{parentName:"tr",align:null},"For self-hosted forms only (see above) the type of form that the user submits to begin the FxA flow"),(0,n.kt)("td",{parentName:"tr",align:null},"either: ",(0,n.kt)("inlineCode",{parentName:"td"},"email")," if the form captures the user's email, otherwise ",(0,n.kt)("inlineCode",{parentName:"td"},"other")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"NA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"utm_source")),(0,n.kt)("td",{parentName:"tr",align:null},"Unambiguous identifier of site or browser UI element that linked to the page containing the beginning of the FxA sign-in/sign-up process"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"blog.mozilla.org")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://analytics.amplitude.com/mozilla-corp/chart/f5sz7kt"},"Registration form views segmented by utm_source"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"utm_campaign")),(0,n.kt)("td",{parentName:"tr",align:null},"More general label for the campaign that the site is part of"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"firstrun")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null},"TBD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"utm_content")),(0,n.kt)("td",{parentName:"tr",align:null},"Used to track the name of an A-B test"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"my-experiment")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null},"TBD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"utm_term")),(0,n.kt)("td",{parentName:"tr",align:null},"Used to track the cohort or variation in an A-B test"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"my-experiment-var-a")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null},"TBD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"utm_medium")),(0,n.kt)("td",{parentName:"tr",align:null},"What type of link was used to direct to the page, if it came through a marketing campaign"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"email"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"cpc")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[\\w\\/.%-]","+$"),(0,n.kt)("td",{parentName:"tr",align:null},"TBD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"context")),(0,n.kt)("td",{parentName:"tr",align:null},"Not relevant to metrics, but this is ",(0,n.kt)("strong",{parentName:"td"},"required")," to be set to one of ",(0,n.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"fx_ios_v1")," if ",(0,n.kt)("inlineCode",{parentName:"td"},"service=sync"),". Please use the value that reflects the most likely operating system of the user."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"fx_ios_v1")),(0,n.kt)("td",{parentName:"tr",align:null},"^","[0-9a-z_-]","+$","/"),(0,n.kt)("td",{parentName:"tr",align:null},"NA")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note these may not be all the parameters you need to pass for your integration to work!")," A more exhaustive but ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md"},"less detailed list can be found here.")," What is documented above are only the parameters that are relevant for metrics analysis in (e.g.) amplitude."),(0,n.kt)("p",null,"Other Notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You must have access to the mozilla amplitude account to see the example charts. If you are a Mozilla employee, please contact Leif for information on gaining access to amplitude.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Regarding ",(0,n.kt)("inlineCode",{parentName:"p"},"utm_term"),": note that the current usage of this parameter is different from what is typical. In most scenarios, it is used to track the search terms that led the users to the page. If you would like to use the parameter in this way, please inform the Firefox Accounts team."))),(0,n.kt)("h2",{id:"user-opt-out"},"User Opt-out"),(0,n.kt)("p",null,"Users may opt-out of metrics from the FxA settings page. If they do, FxA will not collect or store metrics and relying parties must not either."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-profile-server/docs/API.md#get-v1profile"},"User profiles")," include the ",(0,n.kt)("inlineCode",{parentName:"p"},"metricsEnabled")," boolean. When the value is ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," relying parties should not collect any metrics tied to the user. Relying parties should check this value every time the profile is requested."))}d.isMDXComponent=!0}}]);