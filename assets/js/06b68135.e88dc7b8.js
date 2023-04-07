"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5763],{51379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));a(8209);const o={title:"Triage Owner Duties"},r=void 0,s={unversionedId:"reference/team-processes/triage-process",id:"reference/team-processes/triage-process",title:"Triage Owner Duties",description:"What is a Triage Owner?",source:"@site/docs/reference/team-processes/triage-process.md",sourceDirName:"reference/team-processes",slug:"/reference/team-processes/triage-process",permalink:"/ecosystem-platform/reference/team-processes/triage-process",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/team-processes/triage-process.md",tags:[],version:"current",frontMatter:{title:"Triage Owner Duties"},sidebar:"docs",previous:{title:"Work Breakdown",permalink:"/ecosystem-platform/reference/team-processes/work-breakdown-process"},next:{title:"Release Owner Duties",permalink:"/ecosystem-platform/reference/team-processes/release-process"}},l={},u=[{value:"What is a Triage Owner?",id:"what-is-a-triage-owner",level:2},{value:"I am the Triage Owner: How should I plan my Sprint?",id:"i-am-the-triage-owner-how-should-i-plan-my-sprint",level:2},{value:"What are the Triage Owner Responsibilities?",id:"what-are-the-triage-owner-responsibilities",level:2},{value:"Host the Triage Meeting",id:"host-the-triage-meeting",level:2},{value:"Jira",id:"jira",level:3},{value:"Sentry",id:"sentry",level:3},{value:"Stripe Triage (Skip for FxA)",id:"stripe-triage-skip-for-fxa",level:3},{value:"Bugzilla (Skip for SubPlat)",id:"bugzilla-skip-for-subplat",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Dependency Management",id:"dependency-management",level:3},{value:"Dependabot PRs that Pass CI",id:"dependabot-prs-that-pass-ci",level:4},{value:"Failed Dependabot PRs",id:"failed-dependabot-prs",level:4},{value:"Security Warnings",id:"security-warnings",level:4},{value:"Assist with New High Priority Bugs",id:"assist-with-new-high-priority-bugs",level:2},{value:"Hang Out in the #fxa Matrix Room",id:"hang-out-in-the-fxa-matrix-room",level:2}],h={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-a-triage-owner"},"What is a Triage Owner?"),(0,n.kt)("p",null,"Triage owners are the designated engineers, one from FxA and one from SubPlat, that have a primary responsibility of hosting scheduled weekly meetings to review, assess, and prioritize new issues as a team, alongside other secondary responsibilities. Jira is the canonical source of truth for how we track our own work, but bugs may come in through several other systems that have their own requirements."),(0,n.kt)("p",null,"Triage owners rotate throughout the team, and at the time of writing the triage ownership is assigned in our sprint planning meetings. The goals of our triage process and triage rotation are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"That triaging issues, watching Sentry, managing dependencies, and understanding general user sentiment/feedback is a shared team responsibility instead of a burden on 1 or 2 engineers"),(0,n.kt)("li",{parentName:"ul"},"Knowledge sharing of different areas - a triage owner may not be the expert on a topic or issue that comes up, and would rely on team input or reach out for help and learn from the process"),(0,n.kt)("li",{parentName:"ul"},"Users stay top-of-mind with us frequently triaging filed issues across Jira (Github), Bugzilla, and Stripe, as well as looking out for contributor PRs and assisting in Matrix"),(0,n.kt)("li",{parentName:"ul"},"Ensure new issues are looked at on at least a weekly basis and don't pile up for the next triage owner")),(0,n.kt)("h2",{id:"i-am-the-triage-owner-how-should-i-plan-my-sprint"},"I am the Triage Owner: How should I plan my Sprint?"),(0,n.kt)("p",null,"When taking on work for the sprint, if you\u2019re on the FxA team, consider taking on around 50% less than usual in order to allocate a portion of each day to triage ownership duties. If you\u2019re in the middle of high priority feature work, fill your availability with that work. Otherwise, favor taking on a high priority maintenance item(s)."),(0,n.kt)("p",null,"If you\u2019re on the SubPlat team, you will not be assigned any tickets at Sprint Planning, instead focusing on high priority bugs, dependency updates, or maintenance tasks as time allows, explained below."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you're new to owning triage, make sure you have access to Bugzilla (FxA) or Stripe (SubPlat). Also, set up your VPN (",(0,n.kt)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/pages/viewpage.action?spaceKey=SD&title=VPN"},"instructions are on Confluence"),") so you can access the FxA Admin Panel, and request a license from the service desk. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1z_Ob6z517iVzBEk-RUqJitszP8M982uIUvKJIN0P_UM/edit#bookmark=id.uoiqp21qfgqx"},"See what LDAP groups you must be in")," to access the Admin Panel.")),(0,n.kt)("h2",{id:"what-are-the-triage-owner-responsibilities"},"What are the Triage Owner Responsibilities?"),(0,n.kt)("p",null,"At a high level, the FxA triage owner is responsible for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hosting the weekly triage meeting",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Triaging any new issues in Jira as a team"),(0,n.kt)("li",{parentName:"ul"},"Triaging any new issues in Sentry as a team"))),(0,n.kt)("li",{parentName:"ul"},"If FxA triage owner, triage new issues in FxA Bugzilla near-daily (as a team if there is time in the triage meeting)"),(0,n.kt)("li",{parentName:"ul"},"Checking if there's any PRs, from team members or contributors, that don't have a reviewer, that you can help move along"),(0,n.kt)("li",{parentName:"ul"},"Helping with Dependabot PRs"),(0,n.kt)("li",{parentName:"ul"},"Assisting with any high priority bugs that come up during the sprint"),(0,n.kt)("li",{parentName:"ul"},"Hanging out in the #fxa Matrix room")),(0,n.kt)("p",null,"At a high level, the SubPlat triage owner is responsible for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hosting the weekly triage meeting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Triaging new bugs in our Triage board")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Grooming Maintenance backlog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Asynchronous triage activities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"File bugs for concerning Subscriptions-related issues identified in review of Stripe Webhooks Events, Sentry,and Payments success/failures metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Triage new tickets for high priority requests or bugs, picking up the highest priority items as deemed appropriate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Picking up tickets from the top of the Maintenance and/or Bug backlogs"))),(0,n.kt)("p",null,"In all cases, a call needs to be made about the urgency of new issues. It\u2019s fine to not be sure and to rely on the team's general consensus, either in the triage meeting or async in Slack."),(0,n.kt)("p",null,"Any issues picked up as Triage Owner which land within a Sprint boundary should be added to that Sprint in Jira. This sets clear expectations on when a ticket is available for testing in Staging and Production across Engineering and QA."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If someone reports an error, issue, work request etc. to our team in Slack, the first person to see and respond should file a bug in Jira and add the link to the Slack conversation. It will then be triaged normally in the triage meeting.")),(0,n.kt)("h2",{id:"host-the-triage-meeting"},"Host the Triage Meeting"),(0,n.kt)("p",null,"FxA and SubPlat have separate triage meetings which are optional for team members but required for triage owners which rotate on a weekly basis. If you\u2019re the owner, you\u2019ll typically share your window in Zoom with the team while going through Jira, Sentry, and Bugzilla (FxA only) or Stripe (SubPlat only) if there\u2019s time, and talk through issues and decisions as a group."),(0,n.kt)("p",null,"The most up-to-date links can be found in the triage meeting calendar invite. You may want to take a few minutes prior to the meeting to pull the links up to get an idea of what you\u2019ll be discussing and to make sure you don\u2019t need to re-authenticate."),(0,n.kt)("h3",{id:"jira"},"Jira"),(0,n.kt)("p",null,"Go to the Backlog view, collapse the \u201cTo Do\u201d section, and scroll all the way down to the \u201cBacklog\u201d section to see untriaged issues.  Note there are two filters, ",(0,n.kt)("em",{parentName:"p"},"Not Subscription Platform")," and ",(0,n.kt)("em",{parentName:"p"},"Subscription Platform"),", that can be helpful for targeting issues for these teams."),(0,n.kt)("p",null,"You\u2019ll then look at each issue \u2014 though if you\u2019re on the FxA team and the issue is one affecting SubPlat (or vice-versa), leave it as-is since it\u2019ll be triaged in the associated triage meeting  \u2014 and do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Check that the issue is clear and ready to be worked on.")," If more info or context is needed that an engineer in the triage meeting can provide, either leave a summary comment of what\u2019s stated (if it\u2019s quick) or ask them to comment on it, and otherwise, add the appropriate \u201cneeds\u201d label (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"needsdiscussion"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"needslegal"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"needsproduct"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"needsux"),") and/or @ mention someone who may be able to answer pending questions. If more info is needed and the issue seems high priority, consider pinging someone directly about the issue after triage completes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Make sure the issue type is correct.")," The default when filing in Jira or from GitHub is type \u201ctask\u201d but it might need to be changed to \u201cspike\u201d if it\u2019s a research task or work breakdown task, or \u201cbug\u201d in which case you will want to fill out the \u201cFound in\u201d (environment) and \u201c",(0,n.kt)("a",{parentName:"li",href:"https://wiki.mozilla.org/BMO/UserGuide/BugFields#bug_severity"},"Severity"),"\u201d (S1 is highest, S4 is lowest) fields."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add an initial estimated number of story points")," if someone on the call can ",(0,n.kt)("a",{parentName:"li",href:"/ecosystem-platform/reference/team-processes/development-process#estimation-and-point-values"},"estimate"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"If applicable, add the appropriate epic, labels, and/or issue links.")," It\u2019s uncommon for a new issue in triage to lack an epic if it should be associated with one, but it\u2019s good to be aware of what epics exist and what the roadmap looks like. Some common labels to consider using are ",(0,n.kt)("inlineCode",{parentName:"li"},"maintenance")," and  ",(0,n.kt)("inlineCode",{parentName:"li"},"good-first-issue"),", but be sure to check out ",(0,n.kt)("a",{parentName:"li",href:"/ecosystem-platform/reference/team-processes/development-process#labels-we-use"},"labels we use")," to be aware of others. Issue links create a link between issues and can be \u201cblocked by X issue,\u201d \u201crelates to X issue,\u201d and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Move the issue out of the backlog section.")," If the issue seems high priority or someone on the call asks to be assigned, it might belong in the current or following sprint (update the \u201csprint\u201d field if so), or at the top of the \u201cto do\u201d list. Either way, drag and drop the task up and out of the backlog section (or manually change the status and refresh) and the issue status will change from \u201cnew\u201d to \u201cto do\u201d.")),(0,n.kt)("h3",{id:"sentry"},"Sentry"),(0,n.kt)("p",null,"We use Sentry to capture errors that occur across the entire stack. We should monitor our production instances most closely, but also keep an eye out on staging instances for new issues exposed by QA. There are many projects in the FxA group on Sentry and while it\u2019s always helpful to poke through more than what\u2019s listed here, we generally check the following deployments (check the triage calendar invite for links):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fxa-auth-prod")," (FxA and SubPlat)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fxa-content-server-prod")," (FxA - this covers ",(0,n.kt)("inlineCode",{parentName:"li"},"fxa-content-server")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"fxa-settings"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fxa-graphql-prod")," (FxA)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fxa-content-client-prod")," (FxA)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fxa-payments-prod")," (SubPlat)")),(0,n.kt)("p",null,"When you\u2019re looking at new issues, check that there\u2019s not already a comment or linked issue that might give you more context for it and if there\u2019s discussion in the triage meeting, consider leaving a comment on the issue in Sentry."),(0,n.kt)("p",null,"Sometimes, errors come up that seem unlikely to come up again or that we\u2019d want to look at later if it persists. You can check \u201cignore until...\u201d and choose an appropriate option. If you notice a new problem since a previous deployment or an issue that affects a lot of users through a lot of events, it\u2019s very likely worth filing an issue for. File an issue with a link to the Sentry error and (likely) add the ",(0,n.kt)("inlineCode",{parentName:"p"},"maintenance")," label in Jira, and then link it in Sentry via the \u201cLink Github Issues\u201d on the right-hand side."),(0,n.kt)("p",null,"If you\u2019re finishing Sentry triage by yourself because there wasn't enough time during the team triage and aren\u2019t sure about an issue, feel free to ask the team, and/or go ahead and file an issue for it. It\u2019s fine to timebox yourself, though, there\u2019s a lot of issues that come in and we only have so much time to evaluate and fix issues."),(0,n.kt)("h3",{id:"stripe-triage-skip-for-fxa"},"Stripe Triage (Skip for FxA)"),(0,n.kt)("p",null,"Stripe issues are currently triaged twice a week - once in the team triage meeting, and another time async."),(0,n.kt)("p",null,"[TODO: better document this section, FXA-4271]"),(0,n.kt)("h2",{id:"bugzilla-skip-for-subplat"},"Bugzilla (Skip for SubPlat)"),(0,n.kt)("p",null,"If there's time left in the FxA triage meeting, Bugzilla can be looked at as a team that day. Ideally, the triage owner will check Bugzilla every day on their own."),(0,n.kt)("p",null,"Users file issues in Bugzilla for various reasons, the most common that we handle in triage being helping users access their account. Check ",(0,n.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/buglist.cgi?cmdtype=dorem&remaction=run&namedcmd=Firefox%3A%3AFirefoxAccounts&sharer_id=177149&list_id=15894251"},"Bugzilla FxA")," and ",(0,n.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/buglist.cgi?cmdtype=dorem&remaction=run&namedcmd=CloudServices%3A%3AServer%3AFirefoxAccounts&sharer_id=177149&list_id=15894255"},"Bugzilla Cloud Services FxA")," and check out the newest issues, as well as the newest with activity by clicking on \u201cUpdated on.\u201d Look at new issues filed, but also check if you can mark previous issues as \u201cresolved\u201d. When you respond to an issue, consider assigning yourself to the bug."),(0,n.kt)("p",null,"If a Bugzilla bug includes a user's email address or any PII (personal identifiable information) in the bug description, then do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the \u201cedit bug\u201d button"),(0,n.kt)("li",{parentName:"ul"},"Scroll down to \u201cSecurity (public)\u201d"),(0,n.kt)("li",{parentName:"ul"},'Check the box "Confidential Mozilla Employee Bug (non-security)" and save')),(0,n.kt)("p",null,"This is to protect their email address from being on a publicly accessible link and users will be able to see their own issues even if they\u2019re marked confidential."),(0,n.kt)("p",null,"\u2b50\ufe0f Many Bugzilla tickets we triage from our users create tickets for similar reasons. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1z_Ob6z517iVzBEk-RUqJitszP8M982uIUvKJIN0P_UM/edit#"},"FxA Bugzilla Common Scenarios & Responses doc"),' for examples of typical user requests and our response. If you come across a scenario we may see again in the future, please document it there for future reference. Also, remember the people you\'re helping are our users. Feel free to personalize or change a "canned response" as needed.'),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Sometimes all a user needs to resolve their issue, for example, and depending on what they report, is the date they enabled 2FA on their account so they can search their files to find saved recovery codes. You might consider providing users relevant info from the Admin Panel if there's nothing we can do on our end in case it rings any bells for them.")),(0,n.kt)("p",null,"If the reported bug is around an ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/reference/emails#bounce-types"},"email bounce account block")," and you successfully clear it in the Admin Panel, go ahead and close the bug after you comment back. Many users don't report back after they've successfully logged in after being unblocked."),(0,n.kt)("p",null,"You may need to file an issue in Jira for bugs in Bugzilla to surface issues to the team that would require changes in our codebase."),(0,n.kt)("p",null,"If you see a bug filed requesting ",(0,n.kt)("a",{parentName:"p",href:"/ecosystem-platform/relying-parties/tutorials/integration-with-fxa#oauth-integration"},"OAuth client details"),", post in the FxA team Slack channel. Reference the bug, and bring it to the attention of devops."),(0,n.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,n.kt)("p",null,"The FxA and SubPlat team typically reviews ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/pulls"},"pull requests")," and merges dependabot PRs without having a specified owner for those tasks, but as triage owner you should do what you can to move both of these along."),(0,n.kt)("p",null,"If there's an open, unreviewed or unassigned pull request, consider reviewing it if you can. If a PR has been opened by a contributor, either review it or request someone else to review it. If a PR has been hanging around for a while and it's not clear why, consider investigating in case there's a blocker you can help with or a hold for a specific reason that could be noted in a comment in the PR."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If you're the FxA triage owner,")," check for PRs in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/ecosystem-platform/pulls"},"ecosystem-docs repo"),"."),(0,n.kt)("h3",{id:"dependency-management"},"Dependency Management"),(0,n.kt)("p",null,"FxA uses Dependabot to automate dependency updates for us. Every day, it checks our dependency files for outdated requirements and opens individual PRs for any it finds with a daily limit we set. Our Dependabot config lives in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.github/dependabot.yml"},(0,n.kt)("inlineCode",{parentName:"a"},"dependabot.yml")),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Keep in mind that Dependabot duty is shared between the FxA triage owner and the SubPlat triage owner. Try to move these PRs along at least once or twice a week, but also be sure to timebox yourself.")),(0,n.kt)("h4",{id:"dependabot-prs-that-pass-ci"},"Dependabot PRs that Pass CI"),(0,n.kt)("p",null,'Generally speaking, if CI is green, the dependency is likely fine to merge. However, also take a look at the number shown on the "checks" tab of the PR. If there\'s less than 4 checks, our CI suite may not have ran on the PR. Comment on it with ',(0,n.kt)("inlineCode",{parentName:"p"},"@dependabot recreate")," to rerun the test suite and make sure ",(0,n.kt)("inlineCode",{parentName:"p"},"test_pull_request")," runs and completes without error."),(0,n.kt)("p",null,"If CI is green, ",(0,n.kt)("inlineCode",{parentName:"p"},"test_pull_request")," was ran, and none of the files changed looks out of the ordinary, approve the Dependabot PR and merge the pull request. If you need Dependabot to rebase the change, comment on the PR with ",(0,n.kt)("inlineCode",{parentName:"p"},"@dependabot rebase"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Try not to merge dependency updates if we're planning on tagging a release the same day. If we merge something in and discover a dependency problem with or after the tag, we will need a dot release just to patch the bad dependency upgrade.")),(0,n.kt)("h4",{id:"failed-dependabot-prs"},"Failed Dependabot PRs"),(0,n.kt)("p",null,"If a Dependabot PR fails CI, investigate the failure. If it was a flaky test failure, rerun CI from failed. If the failure is legit and it looks like it can be resolved quickly or easily, consider checking into the Dependabot branch, fixing what caused the failure, and pushing the fix to the PR. If the needed change was anything other than a small tweak, request a review from a teammate to double check your work before merging."),(0,n.kt)("p",null,"If there are many failures and/or it's not feasible to fix the failures at the moment, create a Jira ticket for the package upgrade failure if one doesn\u2019t already exist and give it the labels ",(0,n.kt)("inlineCode",{parentName:"p"},"maintenance")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dependencies"),", link to it from the Dependabot PR, comment ",(0,n.kt)("inlineCode",{parentName:"p"},"@dependabot ignore this major version"),", and close the PR. We ignore until the next major version instead of a minor version because the chance that it will fail again is very high, but we want it to remind us again when a dependency has a major upgrade so that the dependency doesn't just get lost in the backlog (plus, wishful thinking that maybe it will magically pass \ud83e\udd1e)."),(0,n.kt)("p",null,"If a ticket has already been filed for a previous failure of the same package and the new failure is because of a Dependabot attempt to upgrade to the new major version, comment on the ticket to note how far behind the dependency is. Consider bringing it up in the next triage meeting - if our backlog is full of needed dependency upgrades, we'll likely find the time to work through at least some of them."),(0,n.kt)("h4",{id:"security-warnings"},"Security Warnings"),(0,n.kt)("p",null,"Dependabot will produce ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/security/dependabot"},"Security Alerts")," for packages that have registered ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures"},"CVE")," numbers that cannot be resolved automatically. At least once during your triage ownership rotation, check these alerts to see if there are any vulnerabilities identified, especially those marked as as critical (or even high) severity. You may also choose review these as a team in the triage meeting if you wish, and it may be good to collaborate with the other triage owner to either make sure you're not working on fixing the same vulnerability, or to pair on a fix."),(0,n.kt)("p",null,'If Dependabot thinks it can automatically fix the alert for us, a "Create dependabot security update" button will be present. This is a good clue, as well as a "Dependabot can\'t update vulnerable dependencies without a lockfile" note, that the upgrade should be simple. You can check what packages are affected by running ',(0,n.kt)("inlineCode",{parentName:"p"},"yarn why <package name>"),". If there's only one or two affected packages, consider trying to manually upgrade the dependency to the patched version shown in the alert."),(0,n.kt)("p",null,"However, sometimes, security alerts are for deeply nested dependencies. In this case, we use ",(0,n.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/"},"Yarn resolutions"),". To resolve the security warning:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy the ",(0,n.kt)("em",{parentName:"li"},"patched version"),' from the security warning into the "resolutions" section of our root-level ',(0,n.kt)("inlineCode",{parentName:"li"},"package.json"),", example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"resolutions": {\n  "postcss": "^7.0.36",\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Update the ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn.lock")," file by running ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,n.kt)("li",{parentName:"ol"},"Commit your changes in a PR titled ",(0,n.kt)("inlineCode",{parentName:"li"},"chore(deps): Upgrade <list affected packages>")),(0,n.kt)("li",{parentName:"ol"},"Create a PR and request review"),(0,n.kt)("li",{parentName:"ol"},"If our CI suite passes, it probably means the dependency resolution is good to merge. However, keep in mind that like other dependency upgrades, something may break, and the dependency upgrade may need to be reverted.")),(0,n.kt)("p",null,"If the dependency needs to be reverted or if CI fails after the PR is created and it's not feasible to fix the failures at the moment, you may be able to determine that certain vulnerabilities don't affect FxA in production anyway, like if a dependency is a dev dependency or something ran at build-time. These kinds of alerts can usually be dismissed. This is also a good time to evaluate if we ",(0,n.kt)("em",{parentName:"p"},"need")," a dependency - maybe the fix is to uninstall the dependency if we use it sparingly, especially if it's an old and outdated package, rather than spend time upgrading it."),(0,n.kt)("p",null,"Otherwise, ",(0,n.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/enter_bug.cgi?product=Cloud%20Services&component=Server%3A%20Firefox%20Accounts"},"file an issue in Bugzilla"),' for each critical issue, and mark them as "Confidential Mozilla Employee Bug (non-security)". While these are security issues, marking them as "security" requires more process and sign off from another team that we don\'t need for these alerts. File an issue in Jira, and reference only "Bugzilla #####" with the number, and in the issue body, add a link to the Bugzilla ticket without other context. The issue will then be triaged normally.'),(0,n.kt)("h2",{id:"assist-with-new-high-priority-bugs"},"Assist with New High Priority Bugs"),(0,n.kt)("p",null,"Sometimes a blocking or major bug is identified by QA that needs to be patched ASAP. When possible, be available to pick up the bug to enable other team members to maintain focus on project work."),(0,n.kt)("h2",{id:"hang-out-in-the-fxa-matrix-room"},"Hang Out in the #fxa Matrix Room"),(0,n.kt)("p",null,"Many teams at Mozilla use Matrix, also known as IRC or Element, for communication. While the FxA and SubPlat team primarily communicates via Slack, we link to ",(0,n.kt)("a",{parentName:"p",href:"https://chat.mozilla.org/#/room/#fxa:mozilla.org"},"our Matrix chat room")," in our documentation as a way to contact us, and sometimes contributors and other folks reach out to us with questions through it."),(0,n.kt)("p",null,"Triage owners should occasionally check to see if they can answer any questions asked in the #fxa Matrix room."))}d.isMDXComponent=!0}}]);