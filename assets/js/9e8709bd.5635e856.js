"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8167],{76651:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var o=i(87462),a=(i(67294),i(3905));i(8209);const r={title:"Tracing for Stage/Prod"},s="Tracing on Stage / Prod",n={unversionedId:"how-tos/using-tracing-in-gcp",id:"how-tos/using-tracing-in-gcp",title:"Tracing for Stage/Prod",description:"At the time of writing we are still applying the configurations to various services, but inevitably all services will be configured. Currently the auth server has been configured to work on staging.",source:"@site/docs/how-tos/using-tracing-in-gcp.md",sourceDirName:"how-tos",slug:"/how-tos/using-tracing-in-gcp",permalink:"/ecosystem-platform/how-tos/using-tracing-in-gcp",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-tracing-in-gcp.md",tags:[],version:"current",frontMatter:{title:"Tracing for Stage/Prod"},sidebar:"docs",previous:{title:"Tracing for Local Development",permalink:"/ecosystem-platform/how-tos/using-tracing-locally"},next:{title:"CI Guidelines",permalink:"/ecosystem-platform/how-tos/ci-guidelines"}},l={},c=[{value:"Viewing Traces in Google Cloud Trace",id:"viewing-traces-in-google-cloud-trace",level:2},{value:"Seeing performance statistics",id:"seeing-performance-statistics",level:2},{value:"Correlating Logs",id:"correlating-logs",level:2}],g={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tracing-on-stage--prod"},"Tracing on Stage / Prod"),(0,a.kt)("p",null,"At the time of writing we are still applying the configurations to various services, but inevitably all services will be configured. Currently the auth server has been configured to work on staging. "),(0,a.kt)("p",null,"The primary difference between using tracing locally and on stage/production is that traces on stage/production will be viewed in ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/traces/list"},"google cloud trace viewer")," instead of Jaeger. The other notable difference is that the sample rate will be much lower. "),(0,a.kt)("p",null,"This means you should not count on every request made to show up. Only a subset of requests will be captured. If you need tracing, and aren't seeing the trace you need, reach out to the team. We might need to adjust the sampling configuration, so the trace you need is more likely to come through."),(0,a.kt)("h2",{id:"viewing-traces-in-google-cloud-trace"},"Viewing Traces in Google Cloud Trace"),(0,a.kt)("p",null,"To start exploring traces go to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/traces/list"},"google cloud trace viewer"),"."),(0,a.kt)("p",null,"Next try the following filters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search by trace id\n",(0,a.kt)("img",{alt:"graph view",src:i(79543).Z,title:"image_tooltip",width:"994",height:"587"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Filter by http method\n",(0,a.kt)("img",{alt:"graph view",src:i(48925).Z,title:"image_tooltip",width:"1006",height:"248"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Filter by route / target\n",(0,a.kt)("img",{alt:"graph view",src:i(42862).Z,title:"image_tooltip",width:"999",height:"299"})))),(0,a.kt)("h2",{id:"seeing-performance-statistics"},"Seeing performance statistics"),(0,a.kt)("p",null,"Tracing also gives a rough idea of service performance. It's good to know that there are some automatically generated reports. These can be found under the ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/traces/tasks?project=moz-fx-fxa-nonprod-375e"},"analysis reports tab"),". At the time of writing, these reports still need quite a bit of work to be useful."),(0,a.kt)("h2",{id:"correlating-logs"},"Correlating Logs"),(0,a.kt)("p",null,"One final thing that's nice to have with tracing is the ability to see related log messages. In google cloud trace, you'll notice a link to view logs. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"graph view",src:i(39811).Z,title:"image_tooltip",width:"429",height:"137"})),(0,a.kt)("p",null,"This will bring up a view of the time slice that the trace fills.\n",(0,a.kt)("img",{alt:"graph view",src:i(8043).Z,title:"image_tooltip",width:"1714",height:"285"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note, that in the future, you should also be able to search for the traceId. For some reason this isn't coming through on log messages at the moment.")))}p.isMDXComponent=!0},48925:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/tracing-gcp-filter-by-method-812f755e58a11492722cab74764da85d.png"},42862:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/tracing-gcp-filter-by-target-29320a85a24ad4f9263ee16ecec3913f.png"},8043:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/tracing-gcp-log-viewer-trace-slice-11a132956ae579d82267afdc195ca946.png"},79543:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/tracing-gcp-search-by-trace-id-a4ff05c79223f93acaccb94a23250423.png"},39811:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/tracing-gcp-trace-logs-view-218a05af2944cd45973d09095e6c880b.png"}}]);