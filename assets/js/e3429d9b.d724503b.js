"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3051],{89817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));n(8209);const r={title:"Third Party Authentication"},i=void 0,l={unversionedId:"reference/third-party-authentication",id:"reference/third-party-authentication",title:"Third Party Authentication",description:"Last updated: April 06th, 2022",source:"@site/docs/reference/third-party-authentication.md",sourceDirName:"reference",slug:"/reference/third-party-authentication",permalink:"/ecosystem-platform/reference/third-party-authentication",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/third-party-authentication.md",tags:[],version:"current",frontMatter:{title:"Third Party Authentication"},sidebar:"docs",previous:{title:"System Diagrams",permalink:"/ecosystem-platform/reference/system-diagrams"},next:{title:"Tokens",permalink:"/ecosystem-platform/reference/tokens"}},c={},p=[{value:"Design",id:"design",level:3},{value:"How to enable third party authentication for relying party",id:"how-to-enable-third-party-authentication-for-relying-party",level:3},{value:"How to setup Google auth locally",id:"how-to-setup-google-auth-locally",level:3},{value:"Auth server config",id:"auth-server-config",level:4},{value:"Content server config",id:"content-server-config",level:4},{value:"How to setup Apple auth locally",id:"how-to-setup-apple-auth-locally",level:3},{value:"Auth server config",id:"auth-server-config-1",level:4},{value:"Content server config",id:"content-server-config-1",level:4},{value:"How to view third party authentication screen",id:"how-to-view-third-party-authentication-screen",level:3},{value:"How to setup local env for https",id:"how-to-setup-local-env-for-https",level:3},{value:"How Apple auth generates secrets",id:"how-apple-auth-generates-secrets",level:3}],s={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Last updated: ",(0,a.kt)("inlineCode",{parentName:"p"},"April 06th, 2022")),(0,a.kt)("p",null,"FxA currently supports Apple and Google as third party authentication providers. This feature\nwas developed to support migrating Pocket users over to FxA. To maintain feature parity with Pocket, FxA added\nsupport for users to log in with their existing Apple/Google accounts within the FxA ecosystem."),(0,a.kt)("h3",{id:"design"},"Design"),(0,a.kt)("p",null,"For both Google and Apple authentication we use the oauth authorization code flow. The scopes requested are the default account\nprofile scopes for a user, ",(0,a.kt)("inlineCode",{parentName:"p"},"openid email profile"),". Using this flow allows FxA to not require loading any additional\nlibraries on our domain."),(0,a.kt)("p",null,"At the end of the third party oauth flow, FxA receives an OpenID connect ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token")," and uses that to create\nthe associated FxA account. After successfully creating a Firefox account, a session token is created\nand then the user is sent through the FxA OAuth flow and redirected back to the relying part. Note that\nat the end of this flow, the relying party gets an FxA OAuth token."),(0,a.kt)("p",null,"Please reference the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1pFzugkDOIR6eoXrBCx9FWWJhfnxFgWnRtk2mWFOp8DQ/edit#heading=h.qrbb2drvq5dg"},"feature doc")," for\nadditional design details and flow charts."),(0,a.kt)("h3",{id:"how-to-enable-third-party-authentication-for-relying-party"},"How to enable third party authentication for relying party"),(0,a.kt)("p",null,"Third party authentication is currently enabled for our test client 123Done and Pocket. To enable for another\nclient, you will need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/841743d8bdab55c0766289e89d5231550de97112/packages/fxa-content-server/app/scripts/lib/experiments/grouping-rules/third-party-auth.js#L22"},"feature flag"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const ROLLOUT_CONFIG = {\n  // 123Done\n  dcdb5ae7add825d2: GROUPS,\n  // Pocket\n  '7377719276ad44ee': GROUPS,\n  '749818d3f2e7857f': GROUPS,\n};\n")),(0,a.kt)("p",null,"Note that this experiment is disabled by default. If you would like to go through the flow, load email-first screen and append query params ",(0,a.kt)("inlineCode",{parentName:"p"},"?forceExperiment=thirdPartyAuth&forceExperimentGroup=treatment"),"."),(0,a.kt)("h3",{id:"how-to-setup-google-auth-locally"},"How to setup Google auth locally"),(0,a.kt)("p",null,"To enable Google auth locally, you will need to either setup a new client in the Google developer console or use the default config."),(0,a.kt)("h4",{id:"auth-server-config"},"Auth server config"),(0,a.kt)("p",null,"Update the auth server ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-auth-server/config/index.ts#L167"},"config")," to reflect the current client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  googleAuthConfig: {\n    clientId: {\n      default:\n        '210899493109-gll5587a3bo8huare772alo08734o4kh.apps.googleusercontent.com',\n      env: 'GOOGLE_AUTH_CLIENT_ID',\n      format: String,\n      doc: 'Google auth client id',\n    },\n    clientSecret: {\n      default: 'SSHH',\n      env: 'GOOGLE_AUTH_CLIENT_SECRET',\n      format: String,\n      doc: 'Google auth client secret',\n    },\n    redirectUri: {\n      default: 'http://localhost:3030/post_verify/third_party_auth/callback',\n      env: 'GOOGLE_AUTH_REDIRECT_URI',\n      format: String,\n      doc: 'Google auth redirect uri',\n    },\n    tokenEndpoint: {\n      default: 'https://oauth2.googleapis.com/token',\n      env: 'GOOGLE_AUTH_TOKEN_ENDPOINT',\n      format: String,\n      doc: 'Google auth token endpoint',\n    },\n  },\n")),(0,a.kt)("p",null,"Note that you should update your ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets.json")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/fxa-auth-server/config/")," to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret"),".\nThis will help reduce the risk of accidentally committing secrets into git."),(0,a.kt)("h4",{id:"content-server-config"},"Content server config"),(0,a.kt)("p",null,"Update the content server ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-content-server/server/lib/configuration.js#L246"},"config")," to reflect the Google client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  googleAuthConfig: {\n    enabled: {\n      default: true,\n      env: 'GOOGLE_AUTH_ENABLED',\n      format: String,\n    },\n    clientId: {\n      default:\n        '210899493109-gll5587a3bo8huare772alo08734o4kh.apps.googleusercontent.com',\n      env: 'GOOGLE_AUTH_CLIENT_ID',\n      format: String,\n      doc: 'Google auth client id',\n    },\n    redirectUri: {\n      default: 'http://localhost:3030/post_verify/third_party_auth/callback',\n      env: 'GOOGLE_AUTH_REDIRECT_URI',\n      format: String,\n      doc: 'Google auth redirect uri',\n    },\n    authorizationEndpoint: {\n      default: 'https://accounts.google.com/o/oauth2/v2/auth',\n      env: 'GOOGLE_AUTH_AUTHORIZATION_ENDPOINT',\n      format: String,\n      doc: 'Google auth token endpoint',\n    },\n  },\n")),(0,a.kt)("h3",{id:"how-to-setup-apple-auth-locally"},"How to setup Apple auth locally"),(0,a.kt)("p",null,"To create an Apple OAuth client you will need to have an Apple developer account. To run Apple authentication locally you\nwill also need to have https unfortunately, see ",(0,a.kt)("a",{parentName:"p",href:"#how-to-setup-local-env-for-https"},"setup instructions"),"."),(0,a.kt)("h4",{id:"auth-server-config-1"},"Auth server config"),(0,a.kt)("p",null,"Update the auth server ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-auth-server/config/index.ts#L140"},"config")," to reflect the current client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  appleAuthConfig: {\n    clientId: {\n      default: 'com.mozilla.firefox.accounts.auth',\n      env: 'APPLE_AUTH_CLIENT_ID',\n      format: String,\n      doc: 'Apple auth client id',\n    },\n    clientSecret: {\n      default: 'SSHH',\n      env: 'APPLE_AUTH_CLIENT_SECRET',\n      format: String,\n      doc: 'Apple auth client secret',\n    },\n    redirectUri: {\n      default:\n        'https://localhost.dev:3030/post_verify/third_party_auth/callback',\n      env: 'APPLE_AUTH_REDIRECT_URI',\n      format: String,\n      doc: 'Apple auth redirect uri',\n    },\n    tokenEndpoint: {\n      default: 'https://appleid.apple.com/auth/token',\n      env: 'APPLE_AUTH_TOKEN_ENDPOINT',\n      format: String,\n      doc: 'Apple auth token endpoint',\n    },\n  },\n")),(0,a.kt)("h4",{id:"content-server-config-1"},"Content server config"),(0,a.kt)("p",null,"Update config to reflect your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-content-server/server/lib/configuration.js#L272"},"client"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  appleAuthConfig: {\n    enabled: {\n      default: true,\n      env: 'APPLE_AUTH_ENABLED',\n      format: String,\n    },\n    clientId: {\n      default: 'com.mozilla.firefox.accounts.auth',\n      env: 'APPLE_AUTH_CLIENT_ID',\n      format: String,\n      doc: 'Apple auth client id',\n    },\n    redirectUri: {\n      default:\n        'https://localhost.dev:3030/post_verify/third_party_auth/callback',\n      env: 'APPLE_AUTH_REDIRECT_URI',\n      format: String,\n      doc: 'Apple auth redirect uri',\n    },\n    authorizationEndpoint: {\n      default: 'https://appleid.apple.com/auth/authorize',\n      env: 'APPLE_AUTH_AUTHORIZATION_ENDPOINT',\n      format: String,\n      doc: 'Apple auth token endpoint',\n    },\n  },\n")),(0,a.kt)("h3",{id:"how-to-view-third-party-authentication-screen"},"How to view third party authentication screen"),(0,a.kt)("p",null,"Once Apple and Google clients are configured, you can simply open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3030/?forceExperiment=thirdPartyAuth&forceExperimentGroup=google"),"."),(0,a.kt)("h3",{id:"how-to-setup-local-env-for-https"},"How to setup local env for https"),(0,a.kt)("p",null,"For local https you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," to create your certs. Once those are created you will need to update your host file to point to the https enabled domain."),(0,a.kt)("p",null,"Ex. On OSX you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/hosts")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost.dev")," for https"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"##\n# Host Database\n#\n# localhost is used to configure the loopback interface\n# when the system is booting.  Do not change this entry.\n##\n127.0.0.1       localhost\n127.0.0.1       localhost.dev\n")),(0,a.kt)("p",null,"To enable auth and content server to run in https mode you will need to update ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-content-server/server/lib/configuration.js#L385"},"config")," to specify a key file from mkcert and toggle ",(0,a.kt)("inlineCode",{parentName:"p"},"use_https")," to true."),(0,a.kt)("h3",{id:"how-apple-auth-generates-secrets"},"How Apple auth generates secrets"),(0,a.kt)("p",null,"To create a secret key please reference this ",(0,a.kt)("a",{parentName:"p",href:"https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple"},"blog"),".\nIn their example, you can use a Ruby script to generate the client secret. At some point in the future we will need to generate these secrets on ",(0,a.kt)("a",{parentName:"p",href:"https://bannister.me/blog/generating-a-client-secret-for-sign-in-with-apple-on-each-request"},"each request")," because manually generated ones expire in 6 months."))}u.isMDXComponent=!0}}]);