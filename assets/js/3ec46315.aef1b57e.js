"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9847],{3973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(8209);const o={id:"integration-with-fxa",title:"Integration with FxA",sidebar_label:"Integration with FxA"},s=void 0,l={unversionedId:"relying-parties/tutorials/integration-with-fxa",id:"relying-parties/tutorials/integration-with-fxa",title:"Integration with FxA",description:"Last updated: September 7th, 2023",source:"@site/docs/relying-parties/tutorials/integrating-with-fxa.md",sourceDirName:"relying-parties/tutorials",slug:"/relying-parties/tutorials/integration-with-fxa",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-fxa",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/tutorials/integrating-with-fxa.md",tags:[],version:"current",frontMatter:{id:"integration-with-fxa",title:"Integration with FxA",sidebar_label:"Integration with FxA"},sidebar:"docs",previous:{title:"Introduction",permalink:"/ecosystem-platform/"},next:{title:"Integration with Subscription Platform",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Pre-Development",id:"pre-development",level:2},{value:"OpenID Connect Integration",id:"openid-connect-integration",level:2},{value:"Relying Party vs. Resource Server",id:"relying-party-vs-resource-server",level:3},{value:"Development",id:"development",level:3},{value:"Preparing for Production",id:"preparing-for-production",level:3},{value:"User Authentication with OpenID Connect in a nutshell",id:"user-authentication-with-openid-connect-in-a-nutshell",level:3},{value:"OAuth Credentials",id:"oauth-credentials",level:3},{value:"Profile Data",id:"profile-data",level:3},{value:"/authorization query parameters",id:"authorization-query-parameters",level:3},{value:"Scopes",id:"scopes",level:3},{value:"Webhook Events",id:"webhook-events",level:3},{value:"Register for webhooks",id:"register-for-webhooks",level:3},{value:"Some flow diagrams",id:"some-flow-diagrams",level:2},{value:"A full oauth flow",id:"a-full-oauth-flow",level:3}],d={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last updated: ",(0,r.kt)("inlineCode",{parentName:"p"},"September 7th, 2023")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Firefox Accounts integration is available for Mozilla groups on request. This integration is handled using ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect (OIDC)"),", ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/protocols/oauth2"},"OAuth 2.0"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhooks")," for authentication, authorization, and receiving events regarding FxA users. Integrations with FxA assume the role of a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relying_party"},"Relying Party (RP)")," and/or a ",(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/the-resource-server/"},"Resource Server (RS)")," depending on the type of integration, with FxA assuming the role of an OpenID Provider."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial will help you integrate with Firefox Accounts but there are ",(0,r.kt)("a",{parentName:"p",href:"/relying-parties/reference/integration-requirements"},"additional requirements a relying party is expected to fulfill and maintain"),".  Please ensure you're in compliance with expectations to continue uninterrupted service.")),(0,r.kt)("h2",{id:"pre-development"},"Pre-Development"),(0,r.kt)("p",null,"Before starting integration, please send a request to fxa-staff","[at]","mozilla.com to request a short meeting so we can all document our expectations and timelines.  Please include answers to the following questions in the email:"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What type of Relying Party / Resource Server are you integrating?"),"\nExamples would be, a web site, a native app, a browser, an API, or an extension in the browser."),(0,r.kt)("p",{parentName:"li"},"Most integrations will be a Relying Party, not a Resource Server. ",(0,r.kt)("a",{parentName:"p",href:"#relying-party-vs-resource-server"},"See below for clarification")," on the differences.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Do you know how to implement OIDC/OAuth?"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will you need read access to a user\u2019s profile data?"),"\nSee ",(0,r.kt)("a",{parentName:"p",href:"#profile-data"},"available profile data"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will you need ",(0,r.kt)("em",{parentName:"strong"},"ongoing")," read access to a user\u2019s profile data even if the user isn't actively logging in?"),"\nIf necessary, a relying party can use a ",(0,r.kt)("em",{parentName:"p"},"refresh token")," to query\nfor a user's profile data, whether or not that user is logged in to the\nrelying party.  For example, if a user changes their email address and\nthe relying party wants to update their local database with the changes."),(0,r.kt)("p",{parentName:"li"},"A refresh token is given out if ",(0,r.kt)("inlineCode",{parentName:"p"},"access_type=offline")," when making the\nauthorization request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will you need ",(0,r.kt)("em",{parentName:"strong"},"write")," access to a user\u2019s profile data?"),"\nOnly the ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"displayname")," can be changed remotely.  See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-profile-server/docs/API.md#api-endpoints"},"API\ndocumentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will you need to access Sync data?"),"\nThis is likely only needed for browser integrations.  Most relying parties\nwill not need this.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will you need encryption keys to encrypt user data?"),"\nOptionally, when a relying party gets their access token they can also get\na stable encryption key back (this is a ",(0,r.kt)("em",{parentName:"p"},"scoped key"),").  This key is derived\nfrom the user's password and ",(0,r.kt)("strong",{parentName:"p"},"if the user changes or forgets their\npassword this key will change"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will your application display its own \u201center your email\u201d form?"),"\nProviding your own form can give users a tight knit experience, but you'll\nneed to send your own ",(0,r.kt)("a",{parentName:"p",href:"#self-hosted-email-first-flow"},"top of funnel\nmetrics")," if you do.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Who are the stakeholders?"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Who can be contacted for important updates, e.g., API changes?"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What is the schedule and key dates?"),"\nAt a minimum, when will QA start, when do you want to be live?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Roughly, what amount of traffic do you expect?"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will your integration provide a subscription service?"),"\nIf it will, please describe the products your integration will provide\nservice for.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will your integration include subscription lead pages?"),"\nThese are generally marketing pages that include a link to start the\nsubscription flow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Will you utilize JWT tokens?"),"\nThis is rare.  ",(0,r.kt)("a",{parentName:"p",href:"../../reference/tokens#jwt-access-tokens"},"Learn more"),"."))),(0,r.kt)("p",null,"We communicate with our relying parties via the ",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/a/mozilla.com/g/firefox-accounts-notices"},"firefox-accounts-notices group"),".  Please join this list to avoid any surprises."),(0,r.kt)("h2",{id:"openid-connect-integration"},"OpenID Connect Integration"),(0,r.kt)("h3",{id:"relying-party-vs-resource-server"},"Relying Party vs. Resource Server"),(0,r.kt)("p",null,"A Relying Party (RP) is an application or website that outsources its user authentication functionality to an OpenID Provider, defined as part of the OpenID specifications. The user will be prompted to login to the Relying Party with their Firefox Account, and is able to see the login as a distinct ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.firefox.com/settings#connected-services"},"Connected Service")," in FxA Settings. OpenID Connect contains many specifications for a variety of identity exchange and authorization, based on the OAuth 2.0 framework of specifications."),(0,r.kt)("p",null,"A Relying Party may also act as a Resource Server, an OAuth 2.0 term for an API server. In that case a user will never see a direct Relying Party login and will not see a distinct row in their Connected Devices list on the FxA Settings page. Services that are accessed via Firefox (Sync, Relay, etc.) using its OAuth token are all examples of Resource Servers. Their access shows up in FxA Settings as the browser session the user is logged into."),(0,r.kt)("h3",{id:"development"},"Development"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You are encouraged to use ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.stage.mozaws.net/"},"our staging servers")," to develop against.  Our staging server has a persistent database and changes made there are saved.  Spot testing and some new accounts are fine but you are expected to clean up any significant amount of data (eg. accounts made from automated testing).  If you're using PyFxA ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/PyFxA/#testing-email-addresses"},"here is an example")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy_account()"),".")),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Review the ",(0,r.kt)("a",{parentName:"li",href:"https://openid.net/developers/how-connect-works/"},"OpenID Connect")," and ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/docs/protocols/oauth2"},"OAuth 2.0")," documentation."),(0,r.kt)("li",{parentName:"ol"},"Register for staging OAuth credentials by filing a ",(0,r.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_status_firefox65=---&cf_status_firefox66=---&cf_status_firefox67=---&cf_status_firefox_esr60=---&cf_tracking_firefox65=---&cf_tracking_firefox66=---&cf_tracking_firefox67=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&component=Operations%3A%20Deployment%20Requests&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-37=X&flag_type-5=X&flag_type-607=X&flag_type-708=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-800=X&flag_type-803=X&flag_type-846=X&flag_type-864=X&flag_type-929=X&flag_type-935=X&form_name=enter_bug&groups=mozilla-employee-confidential&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Cloud%20Services&rep_platform=Unspecified&target_milestone=---&version=unspecified"},"deployment bug"),". See ",(0,r.kt)("a",{parentName:"li",href:"#oauth-credentials"},"OAuth credentials"),"."),(0,r.kt)("li",{parentName:"ol"},"Your development servers should point to: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://oauth.stage.mozaws.net"),"."),(0,r.kt)("li",{parentName:"ol"},"User authentication follows the ",(0,r.kt)("a",{parentName:"li",href:"https://openid.net/connect/"},"OpenID Connect")," protocol."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#authorization-query-parameters"},"Query parameters")," are set and validate when redirecting to Firefox Accounts."),(0,r.kt)("li",{parentName:"ol"},"If you are ",(0,r.kt)("a",{parentName:"li",href:"#self-hosted-email-first-flow"},"hosting your own login form")," initialize and propagate the top of funnel metrics."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#user-data-hygiene"},"User data and account notifications are properly")," handled and compliant with Firefox Account requirements."),(0,r.kt)("li",{parentName:"ol"},"An icon suitable to display in Firefox Account\u2019s ",(0,r.kt)("a",{parentName:"li",href:"https://accounts.firefox.com/settings#connected-services"},"Connected Services")," list has been sent to Firefox Account developers.  Please confirm with Firefox Accounts what the current requirements are."),(0,r.kt)("li",{parentName:"ol"},"If multiple ",(0,r.kt)("a",{parentName:"li",href:"https://www.oauth.com/oauth2-servers/the-resource-server/"},"Resource Servers")," are accessed, create a distinct token for communicating with each server, limited to only the scopes required by that server.  This may mean dropping your initial access token and using a refresh token to get additional, less privileged access tokens.")),(0,r.kt)("h3",{id:"preparing-for-production"},"Preparing for Production"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Update your deployment bug asking for production OAuth credentials and setup of your production ",(0,r.kt)("a",{parentName:"li",href:"#register-for-webhooks"},"webhook endpoint"),"."),(0,r.kt)("li",{parentName:"ol"},"Production servers point to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://oauth.accounts.firefox.com/"),".  Additional endpoints can be discovered dynamically at ",(0,r.kt)("inlineCode",{parentName:"li"},"https://accounts.firefox.com/.well-known/openid-configuration"),"."),(0,r.kt)("li",{parentName:"ol"},"Someone from the FxA team has reviewed the integration code and tested the flow.")),(0,r.kt)("h3",{id:"user-authentication-with-openid-connect-in-a-nutshell"},"User Authentication with OpenID Connect in a nutshell"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Create a state token (randomly generated and unguessable) and associate it with a local session."),(0,r.kt)("li",{parentName:"ol"},"Send ",(0,r.kt)("a",{parentName:"li",href:"#authorization-query-parameters"},"/authentication request")," to Firefox Accounts. Upon completion, Firefox Accounts redirects back to your app with state and code."),(0,r.kt)("li",{parentName:"ol"},"Confirm the returned state token by comparing it with the state token associated with the local session."),(0,r.kt)("li",{parentName:"ol"},"Exchange the code for an access token and possibly a refresh token."),(0,r.kt)("li",{parentName:"ol"},"If you asked for ",(0,r.kt)("inlineCode",{parentName:"li"},"scope=profile")," you can fetch user profile information, using the access token, from the FxA Profile Server."),(0,r.kt)("li",{parentName:"ol"},"Associate the profile information with the local session and create an account in the local application database as needed.")),(0,r.kt)("h3",{id:"oauth-credentials"},"OAuth Credentials"),(0,r.kt)("p",null,"OAuth Client Credentials are needed for each application accessing FxA. For example, a website that users can login to with mobile applications for iOS and Android should request 3 sets of OAuth credentials, one for each mobile app/platform, and one for the web service."),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"client_id - a public identifier that is used to identify your service. Can be public."),(0,r.kt)("li",{parentName:"ol"},"client_secret - a private secret that is sent from the backend when interacting with the OAuth server. Must not be shared publicly, checked into a public repository, or bundled with compiled code.")),(0,r.kt)("h3",{id:"profile-data"},"Profile Data"),(0,r.kt)("p",null,"Firefox Accounts only stores core identity data and associated profile information about users. Firefox Accounts does not store user data specific to relying services. Core identity data stored in Firefox Accounts includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a stable user identifier (uid)"),(0,r.kt)("li",{parentName:"ul"},"the user provided email address"),(0,r.kt)("li",{parentName:"ul"},"the user's locale provided by the browser during account creation"),(0,r.kt)("li",{parentName:"ul"},"an optional display name"),(0,r.kt)("li",{parentName:"ul"},"an optional profile image")),(0,r.kt)("h3",{id:"authorization-query-parameters"},"/authorization query parameters"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," (required)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," (required). This is a space separated string. Review the list of ",(0,r.kt)("a",{parentName:"li",href:"#scopes"},"scopes"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," (required).  This must be a randomly generated unguessable string."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"entrypoint")," (required).  This is for metrics purposes and should represent the service making the request.  This should be agreed upon by the Firefox Accounts team."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"email")," (required for ",(0,r.kt)("a",{parentName:"li",href:"#self-hosted-email-first-flow"},"self hosted email-first flow"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"flow_begin_time")," (required for ",(0,r.kt)("a",{parentName:"li",href:"#self-hosted-email-first-flow"},"self hosted email-first flow"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"flow_id")," (required for ",(0,r.kt)("a",{parentName:"li",href:"#self-hosted-email-first-flow"},"self hosted email-first flow"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"code_challenge")," (required for PKCE) This is a hash of a randomly generated string."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"code_challenge_method")," (required for PKCE) As of this writing only ",(0,r.kt)("inlineCode",{parentName:"li"},"s256")," is supported."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," (suggested).  This should be either ",(0,r.kt)("inlineCode",{parentName:"li"},"email")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"force_auth"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"access_type")," (suggested).  This should be either ",(0,r.kt)("inlineCode",{parentName:"li"},"online")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"offline"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"utm_campaign")," (suggested)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"utm_source")," (suggested)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"utm_medium")," (optional)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"utm_term")," (optional)")),(0,r.kt)("h3",{id:"scopes"},"Scopes"),(0,r.kt)("p",null,"This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"scope=profile")," for most Relying Parties, but there is ",(0,r.kt)("a",{parentName:"p",href:"/reference/oauth-details#oauth-scopes"},"further documentation")," which integrations acting as a ",(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/the-resource-server/"},"Resource Server")," should be aware of."),(0,r.kt)("h3",{id:"webhook-events"},"Webhook Events"),(0,r.kt)("p",null,"If your integration includes an application service that stores profile information, you should create a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," URL handler to handle ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc8417"},"Security Event Tokens (SET)")," for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#relying-party-event-format"},"Relying Party events"),". These events will need to be verified using the FxA JWT keys that can be found from following the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwks_uri")," in the FxA well-known open-id configuration. For production, this URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://accounts.firefox.com/.well-known/openid-configuration"),"."),(0,r.kt)("p",null,"The FxA JWT public keys should be retrieved from this URL at start-up, and used to verify the webhook JWT. The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html"},"documentation on verifying a JWT")," for Step 1/2 are applicable to FxA JWT events."),(0,r.kt)("p",null,"Integrations that are acting as a ",(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/the-resource-server/"},"Resource Server")," will need to respond successfully with a 200 status code even if the user referenced has not used the integration."),(0,r.kt)("p",null,"If you're using TypeScript, an example of verifying a JWT is shown here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import http from 'http';\nimport jwt from 'jsonwebtoken';\nimport jwkToPem from 'jwk-to-pem';\n\n\nfunction authenticate(request: http.IncomingMessage): object {\n    // Assuming this is how you retrieve your auth header.\n    const authHeader = request.headers.authorization;\n\n    // Require an auth header\n    if (!authHeader) {\n        throw Error('No auth header found');\n    }\n\n    // Extract the first portion which should be 'Bearer'\n    const headerType = authHeader.substr(0, authHeader.indexOf(' '));\n    if (headerType !== 'Bearer') {\n        throw Error('Invalid auth type');\n    }\n\n    // The remaining portion, which should be the token\n    const headerToken = authHeader.substr(authHeader.indexOf(' ') + 1);\n\n    // Decode the token, require it to come out ok as an object\n    const token = jwt.decode(headerToken, { complete: true });\n    if (!token || typeof token === 'string') {\n        throw Error('Invalid token type');\n    }\n\n    // Verify we have a key for this kid, this assumes that you have fetched\n    // the publicJwks from FxA and put both them in an Array.\n    const jwk = publicJwks.find(j => j.kid === token.header.kid);\n    if (!jwk) {\n        throw Error('No jwk found for this kid: ' + token.header.kid);\n    }\n    const jwkPem = jwkToPem(jwk);\n\n    // Verify the token is valid\n    const decoded: string | object = jwt.verify(headerToken, jwkPem, {\n        algorithms: ['RS256'],\n    });\n    if (!isIdToken(decoded)) {\n        throw Error('Invalid token format: ' + decoded);\n    }\n    // This is the JWT data itself.\n    return decoded;\n}\n")),(0,r.kt)("p",null,"Webhooks are processed from our event broker service. Currently, we emit events for password change, profile change, subscription change and delete account."),(0,r.kt)("p",null,"For additional documentation please reference the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-event-broker/README.md"},"readme"),"."),(0,r.kt)("h3",{id:"register-for-webhooks"},"Register for webhooks"),(0,r.kt)("p",null,"Once you have setup a service to receive webhook events, you can then register the webhook url by creating a pull request in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-infra"},"cloudops-infra"),". To edit webhooks coming from FxA stage, you'll need to edit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-infra/blob/master/projects/fxa/tf/nonprod/envs/stage/resources/eventbroker.tf#L16-L77"},"projects/fxa/tf/nonprod/envs/stage/resources/eventbroker.tf"),". To edit webhooks coming from FxA prod you'll need to edit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-infra/blob/master/projects/fxa/tf/prod/envs/prod/resources/eventbroker.tf#L16-L82"},"projects/fxa/tf/prod/envs/prod/resources/eventbroker.tf"),". You'll need to add your client id to ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint_topic_config"),", and your webhook url to ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint_subscription_config"),". See an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-infra/pull/3727"},"example PR"),"."),(0,r.kt)("p",null,"Integrations that are acting as a ",(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/the-resource-server/"},"Resource Server")," should indicate their role when having their webhook URL endpoint configured by the FxA team, this is a separate option in the webhook configuration."),(0,r.kt)("h2",{id:"some-flow-diagrams"},"Some flow diagrams"),(0,r.kt)("h3",{id:"a-full-oauth-flow"},"A full oauth flow"),(0,r.kt)(i.G,{chart:"sequenceDiagram\nparticipant UA as User-Agent<br>(Browser)\nparticipant FxA as Firefox Accounts\nparticipant RP as Relying Party\n\nUA->>RP: User visits site\nRP->>UA: Display UI\nUA->>RP: User clicks login\nRP--\x3e>RP: Generate state token\nRP->>UA: Set cookie with state token, initiate redirect to FxA\nUA->>FxA: Redirect to FxA w/ state token\nFxA->>UA: Display UI\nUA->>UA: Authenticate, authorize\nUA->>FxA: Send authorization\nFxA--\x3e>FxA: Generate OAuth credentials\nFxA->>UA: Initiate redirect to RP w/ OAuth credentials, state token\nUA->>RP: Redirect to RP w/ OAuth credentials, state token, cookie\nRP--\x3e>RP: Compare state token in URL w/ state token in cookie\nalt state token match\n  RP->>FxA: Use OAuth credentials\nelse state token mismatch\n  RP->>UA: Inform user an error occurred\nend",mdxType:"Mermaid"}))}u.isMDXComponent=!0}}]);