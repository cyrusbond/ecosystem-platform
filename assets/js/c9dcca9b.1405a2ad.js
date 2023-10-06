"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3326],{33949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const o={title:"Working with Metrics"},r=void 0,l={unversionedId:"how-tos/working-with-metrics",id:"how-tos/working-with-metrics",title:"Working with Metrics",description:"Last updated: March 21st, 2022",source:"@site/docs/how-tos/working-with-metrics.md",sourceDirName:"how-tos",slug:"/how-tos/working-with-metrics",permalink:"/ecosystem-platform/how-tos/working-with-metrics",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/working-with-metrics.md",tags:[],version:"current",frontMatter:{title:"Working with Metrics"},sidebar:"docs",previous:{title:"Using VS Code with FxA",permalink:"/ecosystem-platform/how-tos/using-vscode-with-fxa"},next:{title:"Rotating Secrets",permalink:"/ecosystem-platform/how-tos/rotating-secrets"}},s={},d=[{value:"...create a new activity event?",id:"create-a-new-activity-event",level:2},{value:"...create a new flow event?",id:"create-a-new-flow-event",level:2},{value:"Auth server",id:"auth-server",level:3},{value:"Content server",id:"content-server",level:3},{value:"...create a new email event?",id:"create-a-new-email-event",level:2},{value:"...create a new Amplitude event?",id:"create-a-new-amplitude-event",level:2},{value:"Auth server",id:"auth-server-1",level:3},{value:"Content server",id:"content-server-1",level:3}],m={toc:d},c="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Last updated: ",(0,i.kt)("inlineCode",{parentName:"p"},"March 21st, 2022")),(0,i.kt)("p",null,"Other relevant documents include our ",(0,i.kt)("a",{parentName:"p",href:"../reference/metrics"},"metrics reference")," and ",(0,i.kt)("a",{parentName:"p",href:"../explanation/metrics"},"metrics explanation"),"."),(0,i.kt)("h1",{id:"how-do-i"},"How do I..."),(0,i.kt)("h2",{id:"create-a-new-activity-event"},"...create a new activity event?"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Add the event name to ",(0,i.kt)("inlineCode",{parentName:"li"},"ACTIVITY_EVENTS")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/metrics/events.js"),". Unless it\u2019s also a flow event (most new events will be one or the other), you should also add it to ",(0,i.kt)("inlineCode",{parentName:"li"},"NOT_FLOW_EVENTS")," in the same module."),(0,i.kt)("li",{parentName:"ol"},"Emit the new event in code like ",(0,i.kt)("inlineCode",{parentName:"li"},"request.emitMetricsEvent('foo.bar', { uid })"),"."),(0,i.kt)("li",{parentName:"ol"},"Wherever you emit it, add test cases to cover that the event is correctly logged.")),(0,i.kt)("h2",{id:"create-a-new-flow-event"},"...create a new flow event?"),(0,i.kt)("h3",{id:"auth-server"},"Auth server"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Emit the new event in code like ",(0,i.kt)("inlineCode",{parentName:"li"},"request.emitMetricsEvent('foo.bar')"),"."),(0,i.kt)("li",{parentName:"ol"},"Wherever you emit it, add test cases to cover that the event is correctly logged."),(0,i.kt)("li",{parentName:"ol"},"Be aware that flow events are only emitted if you have a ",(0,i.kt)("inlineCode",{parentName:"li"},"metricsContext"),". If there\u2019s one in the payload for the current route, you\u2019re all good. If not, the code will try to read one from memcached for you. But a previous call to ",(0,i.kt)("inlineCode",{parentName:"li"},"request.stashMetricsContext")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"request.propagateMetricsContext")," will need to have been made with the token that your request is authenticated by. Maybe that\u2019s done already, maybe it isn\u2019t, you\u2019ll need to trace the request flow and grep the code.")),(0,i.kt)("h3",{id:"content-server"},"Content server"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"On the front-end, make sure your view has mixed in ",(0,i.kt)("inlineCode",{parentName:"li"},"FlowEventsMixin"),"."),(0,i.kt)("li",{parentName:"ol"},"view and engage events will be emitted automatically when you add the mixin, for other events you need to call ",(0,i.kt)("inlineCode",{parentName:"li"},"this.logFlowEvent")," from your view."),(0,i.kt)("li",{parentName:"ol"},"Add test coverage for the new event to your view unit tests.")),(0,i.kt)("h2",{id:"create-a-new-email-event"},"...create a new email event?"),(0,i.kt)("p",null,"You don\u2019t need to do this, it\u2019s all set up to work automatically."),(0,i.kt)("h2",{id:"create-a-new-amplitude-event"},"...create a new Amplitude event?"),(0,i.kt)("h3",{id:"auth-server-1"},"Auth server"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Amplitude events are all triggered by activity or flow events, so the first step is to ensure there\u2019s one of those (see above if you need to create a new one)."),(0,i.kt)("li",{parentName:"ol"},"If you\u2019re triggering from a specific event, add a new mapping to the ",(0,i.kt)("inlineCode",{parentName:"li"},"EVENTS")," object in ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/metrics/amplitude.js"),". If you\u2019re triggering from a set of events, add a mapping to ",(0,i.kt)("inlineCode",{parentName:"li"},"FUZZY_EVENTS")," instead."),(0,i.kt)("li",{parentName:"ol"},"Add a new test case for the new event to ",(0,i.kt)("inlineCode",{parentName:"li"},"test/local/metrics/amplitude.js"),". Every event should have its own test case in that module.")),(0,i.kt)("h3",{id:"content-server-1"},"Content server"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Amplitude events are all triggered by flow or screen events, so the first step is to ensure there\u2019s one of those (see above if you need to create a new flow event)."),(0,i.kt)("li",{parentName:"ol"},"If you\u2019re triggering from a specific event, add a new mapping to the ",(0,i.kt)("inlineCode",{parentName:"li"},"EVENTS")," object in ",(0,i.kt)("inlineCode",{parentName:"li"},"server/lib/amplitude.js"),". If you\u2019re triggering from a set of events, add a mapping to ",(0,i.kt)("inlineCode",{parentName:"li"},"FUZZY_EVENTS")," instead."),(0,i.kt)("li",{parentName:"ol"},"Add a new test case for the new event to ",(0,i.kt)("inlineCode",{parentName:"li"},"tests/server/amplitude.js"),". Every event should have its own test case in that module.")))}v.isMDXComponent=!0}}]);