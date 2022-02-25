"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6243],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Work Breakdown"},c=void 0,l={unversionedId:"team-process/work-breakdown-process",id:"team-process/work-breakdown-process",title:"Work Breakdown",description:"Prerequisites",source:"@site/docs/team-process/work-breakdown-process.md",sourceDirName:"team-process",slug:"/team-process/work-breakdown-process",permalink:"/ecosystem-platform/team-process/work-breakdown-process",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/team-process/work-breakdown-process.md",tags:[],version:"current",frontMatter:{title:"Work Breakdown"},sidebar:"docs",previous:{title:"Planning and Development",permalink:"/ecosystem-platform/team-process/development-process"},next:{title:"Triage Owner Duties",permalink:"/ecosystem-platform/team-process/triage-process"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Using a Technical Specification Document",id:"using-a-technical-specification-document",children:[{value:"Goals",id:"goals",children:[],level:3},{value:"Process for creating a Technical Specification Document",id:"process-for-creating-a-technical-specification-document",children:[],level:3},{value:"Template",id:"template",children:[],level:3}],level:2},{value:"Breaking down work",id:"breaking-down-work",children:[],level:2},{value:"Small Epic Examples",id:"small-epic-examples",children:[],level:2},{value:"Large Epic Examples",id:"large-epic-examples",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Prior to beginning breaking down an Epic, the Feature Request has been fully\ndefined and has been flagged as Ready for Engineering, where "fully defined"\nimplies that all User Stories have been identified and documented. This\nallows for a clear understanding of what needs to be delivered to reach\nFeature Complete.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have determined if you need a Technical Specification Document.  Not all\nepics are large enough to justify the effort/time of creating a Technical\nSpecification. If the Epic being worked on results in a \u2018Yes\u2019 answer to any\nof the following questions, a technical specification is likely warranted."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Does this epic likely include at least 50 Story points worth of effort?"),(0,i.kt)("li",{parentName:"ul"},"Does the epic result in substantial changes/additions to API\u2019s, server\narchitecture, metrics, or security aspects that have not previously\nbeen discussed and accepted by the team?")))),(0,i.kt)("h2",{id:"using-a-technical-specification-document"},"Using a Technical Specification Document"),(0,i.kt)("p",null,"When creating medium to large features (Epics), it is important to clearly\ndefine what changes to the code-base, architecture, API\u2019s, databases,\ndocumentation, metrics, and security may result from these changes. The\nimportance of this is greatest for medium/large features as they can affect\nmany aspects of our system. Creating a technical specification to describe\nthose changes is a medium-effort task that should also be peer-reviewed to\nensure it's the best approach. The technical specification should be completed\nbefore work breakdowns."),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("p",null,"The goal of a Technical Specification is to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clearly communicate the technical design of an Epic and the changes required\nto implement it to the team."),(0,i.kt)("li",{parentName:"ul"},"Get feedback from the team that the chosen implementation approach is the\nbest way to proceed."),(0,i.kt)("li",{parentName:"ul"},"Improve the accuracy of estimates and timelines by ensuring all tasks for\ncompletion are captured in a single document."),(0,i.kt)("li",{parentName:"ul"},"Provide documentation for future team members about how the Epic was\ndesigned."),(0,i.kt)("li",{parentName:"ul"},"Consider operational and long-term support costs."),(0,i.kt)("li",{parentName:"ul"},"Consider logging, metric, and dashboard needs."),(0,i.kt)("li",{parentName:"ul"},"Prevent security and privacy problems.")),(0,i.kt)("p",null,"For a more complete overview see ",(0,i.kt)("a",{parentName:"p",href:"https://codeburst.io/on-writing-tech-specs-6404c9791159"},"this article")," on\nwriting tech specs which provides a good overview with examples that the\ntechnical specification template is loosely based on. Note that our ADR process\nimplies that some aspects of the technical specification will reside as\nsupporting/related ADRs."),(0,i.kt)("h3",{id:"process-for-creating-a-technical-specification-document"},"Process for creating a Technical Specification Document"),(0,i.kt)("p",null,"When responsible for an Epic, the epic owner should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Determine if a Technical Specification is needed, if so, proceed."),(0,i.kt)("li",{parentName:"ul"},"Ensure that the Epic has a well defined Product Requirements Document (PRD)."),(0,i.kt)("li",{parentName:"ul"},"Create the Technical Specification."),(0,i.kt)("li",{parentName:"ul"},"Gather peer review from the team and adjust the specification as needed."),(0,i.kt)("li",{parentName:"ul"},"Create work breakdown based on Technical Specification that can include\ntimelines and estimates.")),(0,i.kt)("h3",{id:"template"},"Template"),(0,i.kt)("p",null,"To aid in creating a Technical Specification, use the FxA Epic Technical\nSpecification from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/u/0/?tgif=d&ftv=1:whj"},"Mozilla templates")," under Planners\n(at the bottom).  Sections that don\u2019t apply should be left as ",(0,i.kt)("inlineCode",{parentName:"p"},"Not Applicable"),"."),(0,i.kt)("h2",{id:"breaking-down-work"},"Breaking down work"),(0,i.kt)("p",null,"Depending on the size of the project this can be accomplished either by a team\nor an individual.  If this is a large feature, you should have a Technical\nSpecification Document to kick this work off (see previous section).  The steps\nto proceed are roughly:"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Identify chunks of work that can be accomplished in around a sprint or less.\nThese may be tracked as User Stories or Tasks in Jira.  They should have\nrobust descriptions including acceptance criteria based on the requirements.\n0. When breaking down a large epic, consider using a spreadsheet where all\nparts of a Task (points, description, title) can be organized under User\nStories before committing to issue creation in Jira. There may need to\nbe some team discussion around where a task lies or if any tasks are\nmissing before filing the issues. Especially when planning for parallel\nwork, it\u2019s important to note what tasks block other tasks and to\nprioritize these over other tasks. A kanban-style sprint board may work\nwell for certain projects."),(0,i.kt)("li",{parentName:"ol"},"Once the larger chunks of work are recorded, review them and determine if\nthey need to be broken down further.  If you tracked with User Stories you\nshould file Tasks for the stories (you can mark these tasks as Blocking\nusing Jira\u2019s Issue Links).  If you filed tasks that need to be broken down\nfurther you can create new tasks that are \u201cSplit From\u201d the previous one,\nalso using Jira\u2019s Issue Links."),(0,i.kt)("li",{parentName:"ol"},"Review all the open tasks ensuring they meet the requirements in the Epic.\nAdd additional detail and clarification.  Fill out fields in Jira as they\nare known (eg. component, story points, etc.).  It\u2019s a good idea to do this\nlast step as a team so everyone is on the same page understanding the\nrequirements.  As discussion happens, tasks may need to be broken down\nfurther.  See also our ",(0,i.kt)("a",{parentName:"li",href:"https://mozilla.github.io/ecosystem-platform/reference/development-process#estimation-and-point-values"},"Estimation Guidelines"),".")),(0,i.kt)("h2",{id:"small-epic-examples"},"Small Epic Examples"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/browse/FXA-457"},"Multiple Product Support")),(0,i.kt)("h2",{id:"large-epic-examples"},"Large Epic Examples"),(0,i.kt)("p",null,"TBD"))}d.isMDXComponent=!0}}]);