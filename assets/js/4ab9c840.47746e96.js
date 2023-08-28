"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3156],{12805:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>b,assets:()=>r,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>g});var o=a(87462),n=a(67294),l=a(3905);a(8209);const c={id:"account",title:"Account",hide_table_of_contents:!1},d=void 0,s={unversionedId:"gql-api/objects/account",id:"gql-api/objects/account",title:"Account",description:"The current authenticated user's Firefox Account record.",source:"@site/docs/gql-api/objects/account.mdx",sourceDirName:"gql-api/objects",slug:"/gql-api/objects/account",permalink:"/ecosystem-platform/gql-api/objects/account",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/account.mdx",tags:[],version:"current",frontMatter:{id:"account",title:"Account",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountStatusPayload",permalink:"/ecosystem-platform/gql-api/objects/account-status-payload"},next:{title:"AttachedClient",permalink:"/ecosystem-platform/gql-api/objects/attached-client"}},r={},i=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>uid</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountbuidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>accountCreated</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountbaccountcreatedbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>passwordCreated</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountbpasswordcreatedbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>displayName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountbdisplaynamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>avatar</b></code><Bullet /><code>Avatar!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountbavatarbcodeavatar--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>locale</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountblocalebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>subscriptions</b></code><Bullet /><code>[Subscription!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountbsubscriptionsbcodesubscription--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>totp</b></code><Bullet /><code>Totp!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountbtotpbcodetotp--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>recoveryKey</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountbrecoverykeybcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>metricsEnabled</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountbmetricsenabledbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>emails</b></code><Bullet /><code>[Email!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountbemailsbcodeemail--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>attachedClients</b></code><Bullet /><code>[AttachedClient!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountbattachedclientsbcodeattachedclient--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>linkedAccounts</b></code><Bullet /><code>[LinkedAccount!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountblinkedaccountsbcodelinkedaccount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Account.<b>securityEvents</b></code><Bullet /><code>[SecurityEvent!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountbsecurityeventsbcodesecurityevent--",level:4},{value:"Returned by",id:"returned-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:d=!1}=e;const[s,r]=(0,n.useState)(d);return(0,l.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&c)},k={Bullet:i,SpecifiedBy:b,Badge:u,toc:g,Details:m},p="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,o.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The current authenticated user's Firefox Account record."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Account {\n  uid: ID!\n  accountCreated: Float!\n  passwordCreated: Float!\n  displayName: String\n  avatar: Avatar!\n  locale: String\n  subscriptions: [Subscription!]!\n  totp: Totp!\n  recoveryKey: Boolean!\n  metricsEnabled: Boolean!\n  emails: [Email!]!\n  attachedClients: [AttachedClient!]!\n  linkedAccounts: [LinkedAccount!]!\n  securityEvents: [SecurityEvent!]!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbuidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"uid"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Firefox Account User ID.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbaccountcreatedbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"accountCreated"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Timestamp when the account was created.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbpasswordcreatedbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"passwordCreated"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Timestamp the password was created or last changed.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbdisplaynamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"displayName"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Display name the user has set.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbavatarbcodeavatar--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"avatar"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/avatar"},(0,l.kt)("inlineCode",{parentName:"a"},"Avatar!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountblocalebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"locale"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"User locale.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbsubscriptionsbcodesubscription--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"subscriptions"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/subscription"},(0,l.kt)("inlineCode",{parentName:"a"},"[Subscription!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Active subscriptions for the user.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbtotpbcodetotp--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"totp"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/totp"},(0,l.kt)("inlineCode",{parentName:"a"},"Totp!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbrecoverykeybcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"recoveryKey"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user has had an account recovery key issued.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbmetricsenabledbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"metricsEnabled"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether metrics are enabled and may be reported")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbemailsbcodeemail--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"emails"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/email"},(0,l.kt)("inlineCode",{parentName:"a"},"[Email!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Email addresses for the user.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbattachedclientsbcodeattachedclient--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"attachedClients"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/attached-client"},(0,l.kt)("inlineCode",{parentName:"a"},"[AttachedClient!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Client sessions attached to the user.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountblinkedaccountsbcodelinkedaccount--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"linkedAccounts"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/linked-account"},(0,l.kt)("inlineCode",{parentName:"a"},"[LinkedAccount!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Linked accounts")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountbsecurityeventsbcodesecurityevent--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Account.",(0,l.kt)("b",null,"securityEvents"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/objects/security-event"},(0,l.kt)("inlineCode",{parentName:"a"},"[SecurityEvent!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Security events")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/gql-api/queries/account"},(0,l.kt)("inlineCode",{parentName:"a"},"account")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);