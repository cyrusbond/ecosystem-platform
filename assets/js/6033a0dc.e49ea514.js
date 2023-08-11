"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7001],{29218:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var o=a(87462),l=a(67294),n=a(3905);a(8209);const d={id:"cart",title:"Cart",hide_table_of_contents:!1},r=void 0,c={unversionedId:"gql-api/objects/cart",id:"gql-api/objects/cart",title:"Cart",description:"The Cart associated with a customer Subscription Platform checkout",source:"@site/docs/gql-api/objects/cart.mdx",sourceDirName:"gql-api/objects",slug:"/gql-api/objects/cart",permalink:"/ecosystem-platform/gql-api/objects/cart",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/cart.mdx",tags:[],version:"current",frontMatter:{id:"cart",title:"Cart",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BasicPayload",permalink:"/ecosystem-platform/gql-api/objects/basic-payload"},next:{title:"ChangeRecoveryCodesPayload",permalink:"/ecosystem-platform/gql-api/objects/change-recovery-codes-payload"}},s={},i=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>uid</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbuidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>state</b></code><Bullet /><code>CartState!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-cartbstatebcodecartstate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>errorReasonId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartberrorreasonidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>offeringConfigId</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbofferingconfigidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>interval</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbintervalbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>experiment</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbexperimentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>taxAddress</b></code><Bullet /><code>TaxAddress</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cartbtaxaddressbcodetaxaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>previousInvoice</b></code><Bullet /><code>Invoice!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cartbpreviousinvoicebcodeinvoice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>nextInvoice</b></code><Bullet /><code>Invoice!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cartbnextinvoicebcodeinvoice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>createdAt</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbcreatedatbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>updatedAt</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbupdatedatbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>couponCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbcouponcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>stripeCustomerId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbstripecustomeridbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>email</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Cart.<b>amount</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartbamountbcodefloat--",level:4},{value:"Returned by",id:"returned-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[c,s]=(0,l.useState)(r);return(0,n.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},k={Bullet:i,SpecifiedBy:g,Badge:b,toc:m,Details:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Cart associated with a customer Subscription Platform checkout"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Cart {\n  id: ID!\n  uid: ID\n  state: CartState!\n  errorReasonId: String\n  offeringConfigId: String!\n  interval: String!\n  experiment: String\n  taxAddress: TaxAddress\n  previousInvoice: Invoice!\n  nextInvoice: Invoice!\n  createdAt: Float!\n  updatedAt: Float!\n  couponCode: String\n  stripeCustomerId: String\n  email: String\n  amount: Float!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"id"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cart unique identifier")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbuidbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"uid"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Firefox Account User ID")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbstatebcodecartstate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"state"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/enums/cart-state"},(0,n.kt)("inlineCode",{parentName:"a"},"CartState!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"State of the cart")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartberrorreasonidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"errorReasonId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Error reason ID")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbofferingconfigidbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"offeringConfigId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Offering ID configured in the CMS")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbintervalbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"interval"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Interval")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbexperimentbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"experiment"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Experiment associated with the cart")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbtaxaddressbcodetaxaddress-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"taxAddress"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/objects/tax-address"},(0,n.kt)("inlineCode",{parentName:"a"},"TaxAddress"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tax address")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbpreviousinvoicebcodeinvoice--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"previousInvoice"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/objects/invoice"},(0,n.kt)("inlineCode",{parentName:"a"},"Invoice!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The previous invoice")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbnextinvoicebcodeinvoice--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"nextInvoice"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/objects/invoice"},(0,n.kt)("inlineCode",{parentName:"a"},"Invoice!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The next, also known as upcoming, invoice")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbcreatedatbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Timestamp when the cart was created")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbupdatedatbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Timestamp the cart was last updated")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbcouponcodebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"couponCode"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Applied coupon code")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbstripecustomeridbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"stripeCustomerId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Stripe customer ID of cart customer")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbemailbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"email"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Email set by customer")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cartbamountbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Cart.",(0,n.kt)("b",null,"amount"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/gql-api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amount of plan at checkout")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/gql-api/queries/cart"},(0,n.kt)("inlineCode",{parentName:"a"},"cart")),"  ",(0,n.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/gql-api/mutations/checkout-cart"},(0,n.kt)("inlineCode",{parentName:"a"},"checkoutCart")),"  ",(0,n.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/gql-api/mutations/restart-cart"},(0,n.kt)("inlineCode",{parentName:"a"},"restartCart")),"  ",(0,n.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/gql-api/mutations/setup-cart"},(0,n.kt)("inlineCode",{parentName:"a"},"setupCart")),"  ",(0,n.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/gql-api/mutations/update-cart"},(0,n.kt)("inlineCode",{parentName:"a"},"updateCart")),"  ",(0,n.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);