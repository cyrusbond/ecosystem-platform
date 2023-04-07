"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[464],{96491:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));o(8209);const a={id:"sub-plat-coupons",title:"Subscription Platform Coupons",sidebar_label:"Subscription Coupons"},s=void 0,r={unversionedId:"relying-parties/reference/sub-plat-coupons",id:"relying-parties/reference/sub-plat-coupons",title:"Subscription Platform Coupons",description:"Introduction",source:"@site/docs/relying-parties/reference/sub-plat-coupons.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/sub-plat-coupons",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-coupons",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-coupons.md",tags:[],version:"current",frontMatter:{id:"sub-plat-coupons",title:"Subscription Platform Coupons",sidebar_label:"Subscription Coupons"},sidebar:"docs",previous:{title:"Subscription Features",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-features"},next:{title:"Using APIs",permalink:"/ecosystem-platform/relying-parties/reference/using-apis"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Required preparation",id:"required-preparation",level:2},{value:"Creating coupons",id:"creating-coupons",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Creating the coupon",id:"creating-the-coupon",level:3},{value:"Creating coupon codes",id:"creating-coupon-codes",level:3},{value:"Saving the coupon",id:"saving-the-coupon",level:3},{value:"Linking coupons to Products",id:"linking-coupons-to-products",level:2},{value:"Testing coupons",id:"testing-coupons",level:2},{value:"Coupon validation",id:"coupon-validation",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"You can now reduce the amount charged to a customer by discounting their subscription with a coupon. A coupon can reduce a subscription by a flat amount or a percentage. Coupon configuration is done in Stripe."),(0,i.kt)("h2",{id:"required-preparation"},"Required preparation"),(0,i.kt)("p",null,"Any plans to create a new coupons should be verified by the Relying Party Product Manager, Finance, and any additional stakeholders as identified by the RP PM. Subscription Platform should be notified of new coupons via email including plan deck to ",(0,i.kt)("a",{parentName:"p",href:"mailto:subscription-services@mozilla.com"},"subscription-services@mozilla.com"),"."),(0,i.kt)("h2",{id:"creating-coupons"},"Creating coupons"),(0,i.kt)("p",null,"Coupons can be created in Stripe and assigned to different Product Subscriptions or Price plans using the metadata section. Contact SubPlat leads to discuss access if needed."),(0,i.kt)("h3",{id:"navigation"},"Navigation"),(0,i.kt)("p",null,"Coupons can be found under Products -> Coupons"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigating to Coupons",src:o(59369).Z,width:"1006",height:"246"})),(0,i.kt)("h3",{id:"creating-the-coupon"},"Creating the coupon"),(0,i.kt)("p",null,"After you land on the coupon page press the +New button to create a coupon. This will open up the coupon creation screen. Enter the mandatory information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - This is the name of the coupon that will be displayed on the invoice. This should be user friendly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type")," - Choose the type of coupon you are creating ( % off or, fixed amount)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Percent off")," - If you have chosen a percentage dicount fill in the % box."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Currency & Discount amount")," - If you have chosen a fixed amount discount choose your currency and the discount amount."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Apply to a specific products")," - Do not use this field, leave in the default off position"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duration")," - Select the duration of the coupon. This ties directly to the invoice. Forever means the coupon will be used for the first subscription and all renewals. Once means the coupon will only be valid for the initial subscritpion. Multiple months means that the coupon will be valid multiple times for a monthly subscription but only once for a yearly subscription unless the number of months is greater than 12."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Redemprion limits")," - Do not use this field. Leave both options unchecked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Codes")," - This allows us to set short codes that the user will enter into the Discount field during checkout. Turn this toggle on")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Coupon Creation",src:o(80345).Z,width:"970",height:"832"})),(0,i.kt)("h3",{id:"creating-coupon-codes"},"Creating coupon codes"),(0,i.kt)("p",null,"Once you turned on the codes toggle you will see a new section appear. You can make as many codes per coupon as you like, but keep in mind that the discount you set cannot be changed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code")," - Set a code for the coupon. This code will be used during the subscription checkout flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Eligible for first-time orders only")," - Do not use this field. This will prohibit customers that already have a subscription to another product from using the coupon on a new product (Ex: has VPN but wants Relay)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Limit to a specific customer")," - Do not use this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Limit the number of times this code can be redeemed")," - Select this option and put in a limit if you want to limit the number of times this coupon can be used. (Ex: only the first 300 people who read our blog can use the coupon)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add an expiry date")," - Select this option and enter a date time if you want this coupon to expire. (Ex: if the expiry of the coupon is Jan 1, 2022 9:00 PST users attempting to use this coupon on Jan 1, 2022 9:01 PST will see an error. )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Require minimum order value")," - Do not use this field. Instead be mindfull of which Products/ Prices you assign each coupon. (Ex: do not assign a $1USD off coupon to a $0.99USD subscription)")),(0,i.kt)("h3",{id:"saving-the-coupon"},"Saving the coupon"),(0,i.kt)("p",null,"Once you have filled in, and double checked all of your information, press the Create coupon button. Please note that once you create the coupon you are limited to what you can edit. Only the Name of the coupon can be edited. Already existing codes cannot be edited, only archived. However new codes can be added."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Coupon Codes",src:o(69382).Z,width:"755",height:"543"})),(0,i.kt)("h2",{id:"linking-coupons-to-products"},"Linking coupons to Products"),(0,i.kt)("p",null,"In order for our customers to be able to use the coupons during the subscription checkout flow we must tie the promotion code(s) to a specific product or price. We do this via the metadata section in Stripe. Add a new metadata item. Name it promotionCodes and provide it with a comma separated list of coupon codes."),(0,i.kt)("p",null,"Each product most likely has multiple prices in different currencies/locales. If you want a coupon to apply to all of the prices add the coupon the the metadata at the product level. If however you only want the coupon to apply to a locale or a specific price apply the metadata at that price level."),(0,i.kt)("p",null,"Please note that coupons have limitations. A fixed amount coupon of a certain currency can only be applied to a subscription in that currency. So if you add a $1USD coupon to a product that has Euro pricing this coupon will not work for customers paying in Euro."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Metadata",src:o(98398).Z,width:"1171",height:"411"})),(0,i.kt)("h2",{id:"testing-coupons"},"Testing coupons"),(0,i.kt)("p",null,"In order for the coupons to work on local or staging you need to ensure to add them to the correct Stripe Account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SUB_PLAT_STAGE")," - Use this account in test mode to configure coupons that can be used on staging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SUB_PLAT_DEV")," - Use this account in test mode to configure coupons that can be used on localhost."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subscriotion Platform")," - Use this account to configure coupons for production use.")),(0,i.kt)("h2",{id:"coupon-validation"},"Coupon validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"$0 Invoices")," - The system will allow a user to use a 100% off coupon whether it is a percentage or currency based discount"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Invoice Minimums")," - Stripe has a list of minimum and maximum charge amounts. This means that a discount coupon that goes below/above the minimum/maximums allowed will not allow the user to complete the subscription process. ",(0,i.kt)("a",{parentName:"li",href:"https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts"},"Stripe documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monthly Repeating Coupons")," - Monthly repeating coupons can only be applied to subscriptions that are billed monthly or daily. This will ensure that the user has an accurate representation of future billings. Since the discount is applied to the invoice, monthly repeating coupons will not alter a yearly subscription unless they repeat for 13+ months. This is the same for 6 month subscriptions.")))}p.isMDXComponent=!0},69382:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/codes-aaf45ebe8833a96fd7142c5f26517095.png"},80345:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-fd67584f40f6d60d191042f81275ef61.png"},98398:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metadata-3e85e57673c570c690cd5b5e4d5da89e.png"},59369:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/navigation-4be2b8218f48d70cee30ac0cd4fadd11.png"}}]);