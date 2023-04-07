"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6864],{3070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));a(8209);const r={title:"Node Debugging"},s=void 0,i={unversionedId:"how-tos/node-debugging",id:"how-tos/node-debugging",title:"Node Debugging",description:"It's possible to debug a running Node process using a variety of debuggers (see the Node debugging docs for details).",source:"@site/docs/how-tos/node-debugging.md",sourceDirName:"how-tos",slug:"/how-tos/node-debugging",permalink:"/ecosystem-platform/how-tos/node-debugging",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/node-debugging.md",tags:[],version:"current",frontMatter:{title:"Node Debugging"},sidebar:"docs",previous:{title:"Local Emails with MailDev",permalink:"/ecosystem-platform/how-tos/local-emails-with-maildev"},next:{title:"Using VS Code with FxA",permalink:"/ecosystem-platform/how-tos/using-vscode-with-fxa"}},l={},d=[{value:"Debugging a Server",id:"debugging-a-server",level:2},{value:"Default Debug Ports",id:"default-debug-ports",level:3},{value:"Debugging Tests",id:"debugging-tests",level:2},{value:"Mocha tests (e.g. <code>fxa-shared</code>)",id:"mocha-tests-eg-fxa-shared",level:3},{value:"Jest tests (e.g. <code>fxa-payments-server</code>)",id:"jest-tests-eg-fxa-payments-server",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's possible to debug a running Node process using a variety of debuggers (see the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/"},"Node debugging docs")," for details)."),(0,o.kt)("p",null,"You may also be interested in checking out how to use ",(0,o.kt)("a",{parentName:"p",href:"using-vscode-with-fxa"},"VS Code with FxA"),"."),(0,o.kt)("h2",{id:"debugging-a-server"},"Debugging a Server"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," runs some of the services with the debugger enabled by default."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start the whole server as usual (",(0,o.kt)("inlineCode",{parentName:"li"},"yarn && yarn start")," from top-level in the monorepo)"),(0,o.kt)("li",{parentName:"ol"},"To see which debug port each service is listening on check ",(0,o.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," or the ",(0,o.kt)("inlineCode",{parentName:"li"},"pm2.config.js")," file of the package you're interested in."),(0,o.kt)("li",{parentName:"ol"},"Connect to the process to debug it:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using Google Chrome, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),", then click the process to connect to DevTools.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'You may need to add a new target in the "Configure..." menu with the correct debug port'))),(0,o.kt)("li",{parentName:"ul"},"VS Code requires setting up a ",(0,o.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," file - see the ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},"VS Code")," docs for details.")))),(0,o.kt)("h3",{id:"default-debug-ports"},"Default Debug Ports"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),", the following ports are used for ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Service"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9130"),(0,o.kt)("td",{parentName:"tr",align:null},"content-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9140"),(0,o.kt)("td",{parentName:"tr",align:null},"admin-panel")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9150"),(0,o.kt)("td",{parentName:"tr",align:null},"admin-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9160"),(0,o.kt)("td",{parentName:"tr",align:null},"auth-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9170"),(0,o.kt)("td",{parentName:"tr",align:null},"payments-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9180"),(0,o.kt)("td",{parentName:"tr",align:null},"event-broker")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9190"),(0,o.kt)("td",{parentName:"tr",align:null},"support-panel")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9200"),(0,o.kt)("td",{parentName:"tr",align:null},"graphql-api")))),(0,o.kt)("h2",{id:"debugging-tests"},"Debugging Tests"),(0,o.kt)("p",null,"The Node debugger can also be attached to a running test process. Firefox Accounts uses a variety of test frameworks, so the steps vary by package."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect")," argument is used in the examples below, but ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect-brk")," can also be used to pause the process as soon as it starts.")),(0,o.kt)("h3",{id:"mocha-tests-eg-fxa-shared"},"Mocha tests (e.g. ",(0,o.kt)("inlineCode",{parentName:"h3"},"fxa-shared"),")"),(0,o.kt)("p",null,"For Mocha, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--timeout 0")," option, otherwise the test will fail if you step through it and exceed the default timeout (currently 2 seconds on ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-shared"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect ./node_modules/.bin/mocha --timeout 0 path/to/file\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-shared"),", this incantation works for some directories, but not yet others."),(0,o.kt)("h3",{id:"jest-tests-eg-fxa-payments-server"},"Jest tests (e.g. ",(0,o.kt)("inlineCode",{parentName:"h3"},"fxa-payments-server"),")"),(0,o.kt)("p",null,"For Jest, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--runInBand")," argument so it doesn't fork off the test runner to a separate process that isn't available to the inspector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect ./node_modules/.bin/jest --runInBand --config server/jest.config.js filematcher\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"filematcher")," is a regex that matches against test file paths. If you omit ",(0,o.kt)("inlineCode",{parentName:"p"},"filematcher"),", Jest will run all tests (but you have to hit Enter a second time to trigger the test run)."))}u.isMDXComponent=!0}}]);