"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1869],{26356:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));i(8209);const l={title:"Query Parameters"},o=void 0,r={unversionedId:"relying-parties/reference/query-parameters",id:"relying-parties/reference/query-parameters",title:"Query Parameters",description:"Current as of Nov 17th, 2022",source:"@site/docs/relying-parties/reference/query-parameters.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/query-parameters",permalink:"/ecosystem-platform/relying-parties/reference/query-parameters",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/query-parameters.md",tags:[],version:"current",frontMatter:{title:"Query Parameters"},sidebar:"docs",previous:{title:"Metrics",permalink:"/ecosystem-platform/relying-parties/reference/metrics-for-relying-parties"},next:{title:"Subscription Platform Overview",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-overview"}},s={},p=[{value:"OAuth parameters",id:"oauth-parameters",level:2},{value:"<code>client_id</code>",id:"client_id",level:3},{value:"When to specify",id:"when-to-specify",level:4},{value:"<code>prompt</code>",id:"prompt",level:3},{value:"Options",id:"options",level:4},{value:"When to specify",id:"when-to-specify-1",level:4},{value:"<code>redirect_uri</code>",id:"redirect_uri",level:3},{value:"When to specify",id:"when-to-specify-2",level:4},{value:"<code>scope</code>",id:"scope",level:3},{value:"Options",id:"options-1",level:4},{value:"When to specify",id:"when-to-specify-3",level:4},{value:"<code>state</code>",id:"state",level:3},{value:"When to specify",id:"when-to-specify-4",level:4},{value:"Firefox/Sync parameters",id:"firefoxsync-parameters",level:2},{value:"<code>action</code>",id:"action",level:3},{value:"Options",id:"options-2",level:4},{value:"When to specify",id:"when-to-specify-5",level:4},{value:"<code>entrypoint</code>",id:"entrypoint",level:3},{value:"<code>entrypoint_experiment</code> and <code>entrypoint_variation</code>",id:"entrypoint_experiment-and-entrypoint_variation",level:3},{value:"When to specify",id:"when-to-specify-6",level:4},{value:"<code>service</code>",id:"service",level:3},{value:"Options",id:"options-3",level:4},{value:"When to specify",id:"when-to-specify-7",level:4},{value:"<code>setting</code>",id:"setting",level:3},{value:"Options",id:"options-4",level:4},{value:"When to specify",id:"when-to-specify-8",level:4},{value:"Generic parameters",id:"generic-parameters",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"Options",id:"options-5",level:4},{value:"<code>email</code>",id:"email",level:3},{value:"When to specify",id:"when-to-specify-9",level:4},{value:"<code>utm_campaign</code>",id:"utm_campaign",level:3},{value:"When to specify",id:"when-to-specify-10",level:4},{value:"<code>utm_content</code>",id:"utm_content",level:3},{value:"When to specify",id:"when-to-specify-11",level:4},{value:"<code>utm_medium</code>",id:"utm_medium",level:3},{value:"When to specify",id:"when-to-specify-12",level:4},{value:"<code>utm_source</code>",id:"utm_source",level:3},{value:"When to specify",id:"when-to-specify-13",level:4},{value:"<code>utm_term</code>",id:"utm_term",level:3},{value:"When to specify",id:"when-to-specify-14",level:4},{value:"Email verification parameters",id:"email-verification-parameters",level:2},{value:"<code>code</code>",id:"code",level:3},{value:"When to use",id:"when-to-use",level:4},{value:"<code>uid</code>",id:"uid",level:3},{value:"When to use",id:"when-to-use-1",level:4},{value:"Experimental/development parameters",id:"experimentaldevelopment-parameters",level:2},{value:"<code>automatedBrowser</code>",id:"automatedbrowser",level:3},{value:"Options",id:"options-6",level:4},{value:"<code>disable_local_storage</code>",id:"disable_local_storage",level:3},{value:"Options",id:"options-7",level:4},{value:"When to use",id:"when-to-use-2",level:4},{value:"<code>forceExperiment</code>",id:"forceexperiment",level:3},{value:"Options",id:"options-8",level:4},{value:"<code>forceExperimentGroup</code>",id:"forceexperimentgroup",level:3},{value:"Options",id:"options-9",level:4},{value:"Reset Password parameters",id:"reset-password-parameters",level:2},{value:"<code>reset_password_confirm</code>",id:"reset_password_confirm",level:3},{value:"Options",id:"options-10",level:4},{value:"When to use",id:"when-to-use-3",level:4},{value:"<code>emailToHashWith</code>",id:"emailtohashwith",level:3},{value:"Options",id:"options-11",level:4},{value:"When to use",id:"when-to-use-4",level:4},{value:"Secondary email parameters",id:"secondary-email-parameters",level:2},{value:"Options",id:"options-12",level:4},{value:"When to specify",id:"when-to-specify-15",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Current as of ",(0,a.kt)("inlineCode",{parentName:"p"},"Nov 17th, 2022")),(0,a.kt)("p",null,"Query parameters are used to pass data from the relying party to Firefox Accounts."),(0,a.kt)("h2",{id:"oauth-parameters"},"OAuth parameters"),(0,a.kt)("h3",{id:"client_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"client_id")),(0,a.kt)("p",null,"Specify the OAuth client_id of the relier being signed in to."),(0,a.kt)("h4",{id:"when-to-specify"},"When to specify"),(0,a.kt)("p",null,"When authenticating a user for OAuth."),(0,a.kt)("h3",{id:"prompt"},(0,a.kt)("inlineCode",{parentName:"h3"},"prompt")),(0,a.kt)("p",null,"Specifies whether the content server prompts for permissions consent. Only applicable for ",(0,a.kt)("inlineCode",{parentName:"p"},"trusted")," relying parties.\nUntrusted relying parties always show the prompt."),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"consent")," - Show the permissions prompt if any additional\npermissions are required. Only applicable for ",(0,a.kt)("inlineCode",{parentName:"li"},"trusted")," relying parties.\nUntrusted relying parties always show the prompt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"none")," - Require no user interaction if the user is signed in.\nOnly applicable for authorized relying parties that are not requesting\nkeys. An error is returned to the RP for all others.\nSee the ",(0,a.kt)("a",{parentName:"li",href:"/reference/oauth-details#promptnone-support"},"prompt=none doc")," for more info."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"login")," - Always prompt the user for their password and re-authenticate\nregardless if they have signed into the browser or have a cached session.")),(0,a.kt)("h4",{id:"when-to-specify-1"},"When to specify"),(0,a.kt)("p",null,"When authenticating a user for OAuth."),(0,a.kt)("h3",{id:"redirect_uri"},(0,a.kt)("inlineCode",{parentName:"h3"},"redirect_uri")),(0,a.kt)("p",null,"Which URI should a user be redirected back to upon completion of the OAuth transaction."),(0,a.kt)("h4",{id:"when-to-specify-2"},"When to specify"),(0,a.kt)("p",null,"When authenticating a user for OAuth."),(0,a.kt)("h3",{id:"scope"},(0,a.kt)("inlineCode",{parentName:"h3"},"scope")),(0,a.kt)("p",null,"Specify the OAuth scope requested."),(0,a.kt)("h4",{id:"options-1"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile"))),(0,a.kt)("h4",{id:"when-to-specify-3"},"When to specify"),(0,a.kt)("p",null,"When authenticating a user for OAuth."),(0,a.kt)("h3",{id:"state"},(0,a.kt)("inlineCode",{parentName:"h3"},"state")),(0,a.kt)("p",null,"Specify an OAuth state token."),(0,a.kt)("h4",{id:"when-to-specify-4"},"When to specify"),(0,a.kt)("p",null,"When authenticating a user with OAuth."),(0,a.kt)("h2",{id:"firefoxsync-parameters"},"Firefox/Sync parameters"),(0,a.kt)("h3",{id:"action"},(0,a.kt)("inlineCode",{parentName:"h3"},"action")),(0,a.kt)("p",null,"Specifies the behavior of users sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),". As of December 2019, the only supported\n",(0,a.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"force_auth"),"."),(0,a.kt)("p",null,"Specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"action=email"),' causes the "email-first" flow where unauthenticated users are\nfirst asked to enter their email address w/o a password. If an account exists for the\naddress, the user is asked to login, if no account exists, the user is asked to create\nan account.'),(0,a.kt)("h4",{id:"options-2"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"force_auth"))),(0,a.kt)("h4",{id:"when-to-specify-5"},"When to specify"),(0,a.kt)("p",null,"When authenticating a user"),(0,a.kt)("h3",{id:"entrypoint"},(0,a.kt)("inlineCode",{parentName:"h3"},"entrypoint")),(0,a.kt)("p",null,"If they user arrived at Firefox Accounts from within Firefox browser chrome, specify where in Firefox the user came from."),(0,a.kt)("h3",{id:"entrypoint_experiment-and-entrypoint_variation"},(0,a.kt)("inlineCode",{parentName:"h3"},"entrypoint_experiment")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"entrypoint_variation")),(0,a.kt)("p",null,"If an experiment is running at the entrypoint, set these properties to the name of the experiment and the variation that the user is part of."),(0,a.kt)("h4",{id:"when-to-specify-6"},"When to specify"),(0,a.kt)("p",null,"Universal"),(0,a.kt)("h3",{id:"service"},(0,a.kt)("inlineCode",{parentName:"h3"},"service")),(0,a.kt)("p",null,"Specify which non-OAuth service a user is signing in to."),(0,a.kt)("h4",{id:"options-3"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sync"))),(0,a.kt)("h4",{id:"when-to-specify-7"},"When to specify"),(0,a.kt)("p",null,"Only available if ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"fx_desktop_v3")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fx_ios_v1")),(0,a.kt)("h3",{id:"setting"},(0,a.kt)("inlineCode",{parentName:"h3"},"setting")),(0,a.kt)("p",null,"Specify a profile field to make editable."),(0,a.kt)("h4",{id:"options-4"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"avatar"))),(0,a.kt)("h4",{id:"when-to-specify-8"},"When to specify"),(0,a.kt)("p",null,"If Firefox Accounts is opened to ",(0,a.kt)("inlineCode",{parentName:"p"},"/settings")," and a profile field should be made editable."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/settings")),(0,a.kt)("h2",{id:"generic-parameters"},"Generic parameters"),(0,a.kt)("h3",{id:"context"},(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"Specify an alternate context in which Firefox Accounts is being run, if not as a standard web page."),(0,a.kt)("h4",{id:"options-5"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fx_desktop_v3")," - Firefox Accounts is being used to sign in to Sync on\nFirefox Desktop using WebChannels. Used to add the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncPreferencesNotification"),"\ncapability"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fx_ios_v1")," - Firefox Accounts is being used to sign in to Sync on Firefox\nfor iOS using CustomEvents.")),(0,a.kt)("h3",{id:"email"},(0,a.kt)("inlineCode",{parentName:"h3"},"email")),(0,a.kt)("p",null,"When used on ",(0,a.kt)("inlineCode",{parentName:"p"},"/signin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/oauth/signin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/signup"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"/oauth/signup"),", suggest a user to sign in. If set to the string ",(0,a.kt)("inlineCode",{parentName:"p"},"blank"),", an empty sign in form will be displayed and no suggested accounts will appear."),(0,a.kt)("p",null,"When specified at ",(0,a.kt)("inlineCode",{parentName:"p"},"/force_auth"),", the user will be forced to sign in as the specified email. If an account does not exist for the specified email, the user will be unable to sign in."),(0,a.kt)("h4",{id:"when-to-specify-9"},"When to specify"),(0,a.kt)("p",null,"If the user's email address is already known."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MUST")," be specified when using force_auth, either via ",(0,a.kt)("inlineCode",{parentName:"p"},"?action=force_auth")," in the OAuth flow, or browsing directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"/force_auth")," for Sync."),(0,a.kt)("h3",{id:"utm_campaign"},(0,a.kt)("inlineCode",{parentName:"h3"},"utm_campaign")),(0,a.kt)("p",null,"The Google Analytics ",(0,a.kt)("inlineCode",{parentName:"p"},"utm_campaign")," field. Will be passed back to the relier\nwhen authentication completes."),(0,a.kt)("h4",{id:"when-to-specify-10"},"When to specify"),(0,a.kt)("p",null,"Universal"),(0,a.kt)("h3",{id:"utm_content"},(0,a.kt)("inlineCode",{parentName:"h3"},"utm_content")),(0,a.kt)("p",null,"The Google Analytics ",(0,a.kt)("inlineCode",{parentName:"p"},"utm_content")," field. Will be passed back to the relier\nwhen authentication completes."),(0,a.kt)("h4",{id:"when-to-specify-11"},"When to specify"),(0,a.kt)("p",null,"Universal"),(0,a.kt)("h3",{id:"utm_medium"},(0,a.kt)("inlineCode",{parentName:"h3"},"utm_medium")),(0,a.kt)("p",null,"The Google Analytics ",(0,a.kt)("inlineCode",{parentName:"p"},"utm_medium")," field. Will be passed back to the relier\nwhen authentication completes."),(0,a.kt)("h4",{id:"when-to-specify-12"},"When to specify"),(0,a.kt)("p",null,"Universal"),(0,a.kt)("h3",{id:"utm_source"},(0,a.kt)("inlineCode",{parentName:"h3"},"utm_source")),(0,a.kt)("p",null,"The Google Analytics ",(0,a.kt)("inlineCode",{parentName:"p"},"utm_source")," field. Will be passed back to the relier\nwhen authentication completes."),(0,a.kt)("h4",{id:"when-to-specify-13"},"When to specify"),(0,a.kt)("p",null,"Universal"),(0,a.kt)("h3",{id:"utm_term"},(0,a.kt)("inlineCode",{parentName:"h3"},"utm_term")),(0,a.kt)("p",null,"The Google Analytics ",(0,a.kt)("inlineCode",{parentName:"p"},"utm_term")," field. Will be passed back to the relier\nwhen authentication completes."),(0,a.kt)("h4",{id:"when-to-specify-14"},"When to specify"),(0,a.kt)("p",null,"Universal"),(0,a.kt)("h2",{id:"email-verification-parameters"},"Email verification parameters"),(0,a.kt)("h3",{id:"code"},(0,a.kt)("inlineCode",{parentName:"h3"},"code")),(0,a.kt)("p",null,"Used in the verification flows to specify the verification code."),(0,a.kt)("h4",{id:"when-to-use"},"When to use"),(0,a.kt)("p",null,"Should not be used by relying parties."),(0,a.kt)("h3",{id:"uid"},(0,a.kt)("inlineCode",{parentName:"h3"},"uid")),(0,a.kt)("p",null,"Used in two cases:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By the verification flows to specify the user id of the user being verified."),(0,a.kt)("li",{parentName:"ol"},"By relying parties when loading a settings page to specify which account should be used.")),(0,a.kt)("h4",{id:"when-to-use-1"},"When to use"),(0,a.kt)("p",null,"Relying parties who send users to a settings page to e.g., set an avatar, can pass a uid to\nensure users with multiple accounts update the avatar for the correct account."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Options below are experimental and have no guarantees.")),(0,a.kt)("h2",{id:"experimentaldevelopment-parameters"},"Experimental/development parameters"),(0,a.kt)("h3",{id:"automatedbrowser"},(0,a.kt)("inlineCode",{parentName:"h3"},"automatedBrowser")),(0,a.kt)("p",null,"Used by functional tests to indicate the browser is being automated."),(0,a.kt)("h4",{id:"options-6"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false")," (default)")),(0,a.kt)("h3",{id:"disable_local_storage"},(0,a.kt)("inlineCode",{parentName:"h3"},"disable_local_storage")),(0,a.kt)("p",null,"Used by functional tests to synthesize localStorage being disabled."),(0,a.kt)("h4",{id:"options-7"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"))),(0,a.kt)("h4",{id:"when-to-use-2"},"When to use"),(0,a.kt)("p",null,"Should not be used by relying parties. Should only be used by functional tests."),(0,a.kt)("h3",{id:"forceexperiment"},(0,a.kt)("inlineCode",{parentName:"h3"},"forceExperiment")),(0,a.kt)("p",null,"Force a particular AB test."),(0,a.kt)("h4",{id:"options-8"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"emailFirst")," - Should the user go through the email-first flow?")),(0,a.kt)("h3",{id:"forceexperimentgroup"},(0,a.kt)("inlineCode",{parentName:"h3"},"forceExperimentGroup")),(0,a.kt)("p",null,"Force the user into a particular AB test experiment group."),(0,a.kt)("h4",{id:"options-9"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"control")," - default behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"treatment")," - new behavior.")),(0,a.kt)("h2",{id:"reset-password-parameters"},"Reset Password parameters"),(0,a.kt)("h3",{id:"reset_password_confirm"},(0,a.kt)("inlineCode",{parentName:"h3"},"reset_password_confirm")),(0,a.kt)("p",null,"Used to skip the confirmation form to reset a password"),(0,a.kt)("h4",{id:"options-10"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")," (default)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("h4",{id:"when-to-use-3"},"When to use"),(0,a.kt)("p",null,"Should not be used by relying parties.\nShould only be used for accounts that must be reset."),(0,a.kt)("h3",{id:"emailtohashwith"},(0,a.kt)("inlineCode",{parentName:"h3"},"emailToHashWith")),(0,a.kt)("p",null,"Allows you to override the default email that a reset password is hashed with."),(0,a.kt)("h4",{id:"options-11"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user's current primary email (default)")),(0,a.kt)("h4",{id:"when-to-use-4"},"When to use"),(0,a.kt)("p",null,"After a user has changed their primary email you need to hash with the original account email\nif they perform a reset password."),(0,a.kt)("h2",{id:"secondary-email-parameters"},"Secondary email parameters"),(0,a.kt)("h4",{id:"options-12"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false")," (default)")),(0,a.kt)("h4",{id:"when-to-specify-15"},"When to specify"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/settings/emails")))}c.isMDXComponent=!0}}]);