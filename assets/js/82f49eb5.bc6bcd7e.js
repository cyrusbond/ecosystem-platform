"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3216],{17186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(8209);const i={title:"Release Owner Duties"},r=void 0,s={unversionedId:"reference/team-processes/release-process",id:"reference/team-processes/release-process",title:"Release Owner Duties",description:"What is a Release Owner?",source:"@site/docs/reference/team-processes/release-process.md",sourceDirName:"reference/team-processes",slug:"/reference/team-processes/release-process",permalink:"/ecosystem-platform/reference/team-processes/release-process",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/team-processes/release-process.md",tags:[],version:"current",frontMatter:{title:"Release Owner Duties"},sidebar:"docs",previous:{title:"Triage Owner Duties",permalink:"/ecosystem-platform/reference/team-processes/triage-process"},next:{title:"Pull Request review guidelines",permalink:"/ecosystem-platform/reference/team-processes/pull-request-review-guidelines"}},l={},p=[{value:"What is a Release Owner?",id:"what-is-a-release-owner",level:2},{value:"I am the Release Owner: How should I plan my Sprint?",id:"i-am-the-release-owner-how-should-i-plan-my-sprint",level:2},{value:"Releasing Code",id:"releasing-code",level:2},{value:"A regular release",id:"a-regular-release",level:3},{value:"Patch releases",id:"patch-releases",level:3},{value:"The <strong>recommended way</strong>",id:"the-recommended-way",level:4},{value:"Special Cases",id:"special-cases",level:2},{value:"Production hotfixes",id:"production-hotfixes",level:3},{value:"Releasing Icons",id:"releasing-icons",level:3},{value:"Security Releases",id:"security-releases",level:3},{value:"Temporary stage deploys",id:"temporary-stage-deploys",level:3},{value:"FAQ",id:"faq",level:2},{value:"What actually happens with the deploy process?",id:"what-actually-happens-with-the-deploy-process",level:3},{value:"Canary",id:"canary",level:4},{value:"Does a deploy failure on one server prevent others from deploying?",id:"does-a-deploy-failure-on-one-server-prevent-others-from-deploying",level:3}],h={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-release-owner"},"What is a Release Owner?"),(0,o.kt)("p",null,'The main duty of the release owner is to be the designated engineer to follow the "Releasing Code" process described below. The release owner should communicate and work with the rest of the team to ensure a smooth close-out of the current sprint, as well as create patch (AKA dot) releases as necessary throughout the sprint.'),(0,o.kt)("p",null,"At the time of writing, the release responsibility is rotated every sprint/train to the next team member on the list at the top of our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deployment doc"),"."),(0,o.kt)("h2",{id:"i-am-the-release-owner-how-should-i-plan-my-sprint"},"I am the Release Owner: How should I plan my Sprint?"),(0,o.kt)("p",null,"Release ownership is confirmed during the sprint kick-off team meeting. Release owners should update the top of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit"},"deploy doc")," with the train number they will be tagging and their name (don't forget to choose an emoji \ud83e\udd18)."),(0,o.kt)("p",null,"If you are the designated release owner, consider the following suggestions to managing your work and the release:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When taking on work for the sprint, consider taking on around 5-15% less in order to allocate a portion of each day to release management duties and in particular towards the end of the sprint - this helps give you padding in case an unexpected (or two, or three) dot release comes up."),(0,o.kt)("li",{parentName:"ul"},"Take some time a day or two before tagging is scheduled to reach out in the #fxa-team Slack channel or to individual team members to check-in on in-progress or to-do work items. This might result in you taking on additional work performing reviews or reaching out to the appropriate people.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Things to consider asking:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Are there any tasks that need to be in the train? Are any of them in jeopardy of holding up the release from being tagged?"),(0,o.kt)("li",{parentName:"ul"},"Is there anything I can do to help keep things moving?"))))),(0,o.kt)("li",{parentName:"ul"},"1-3 hours before tagging, check open PRs and let the team know you will be tagging at X time and ask that any missing notes in the deploy doc be added. Atypically, a critical patch may be very close to landing which may delay the tag by a few hours.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're new to release ownership, check that you have access to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-deployment/tree/master/projects/fxa"},(0,o.kt)("inlineCode",{parentName:"a"},"cloudops-deployment"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/cloudops-infra/tree/master/projects/fxa"},(0,o.kt)("inlineCode",{parentName:"a"},"cloudops-infra"))," repos. While not crucial, access to ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudops-deployment")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudops-infra")," allows you to see PRs that may be listed in the deploy doc as well as make PRs in that repo when you make code changes that necessitate them.")),(0,o.kt)("h2",{id:"releasing-code"},"Releasing Code"),(0,o.kt)("h3",{id:"a-regular-release"},"A regular release"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure there are no critical patches for this tag that haven't landed yet"),(0,o.kt)("li",{parentName:"ol"},"If there are special steps in the deployment doc give the appropriate teams a heads up (e.g. probably SRE)"),(0,o.kt)("li",{parentName:"ol"},"Load the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/actions/workflows/tag-release.yml"},"Release Tag Action URL")),(0,o.kt)("li",{parentName:"ol"},'Click "Run workflow" in the top right.'),(0,o.kt)("li",{parentName:"ol"},"Watch the output of the action to make sure everything goes correctly."),(0,o.kt)("li",{parentName:"ol"},"Check that all tests pass in ",(0,o.kt)("a",{parentName:"li",href:"https://app.circleci.com/pipelines/github/mozilla/fxa"},"CircleCI"),"."),(0,o.kt)("li",{parentName:"ol"},"Once the code is tagged, all CI tests have passed, and the docker containers are built, you'll see messages in slack as it auto-deploys to our staging server.")),(0,o.kt)("h3",{id:"patch-releases"},"Patch releases"),(0,o.kt)("p",null,"Patch (dot) releases are used between official releases to release code into staging or production that can't wait for the normal release cycle. What warrants a patch release may be evaluated on a case-by-case basis, but we may need one if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.mozilla.org/BMO/UserGuide/BugFields#bug_severity"},"S1 bug")," is found"),(0,o.kt)("li",{parentName:"ul"},"We have legitimate (non-flaky, non-SRE related) test failures in staging or production"),(0,o.kt)("li",{parentName:"ul"},"We need to land tasks to make a time-sensitive deliverable that didn't quite make the release, like a new RP launch")),(0,o.kt)("p",null,"If QA's signoff after testing a release on staging comes back yellow or red, we should check with engineering management for their recommended course of action, as we may need a dot release before pushing a release to production."),(0,o.kt)("p",null,"Whenever a dot release is planned, ping the team to let them know you'll be tagging ",(0,o.kt)("inlineCode",{parentName:"p"},"train xxx.y"),", with a list of issues to be included in the release. Other engineers may have fixes that wouldn't warrant a dot release on their own, but would be nice to ride along if a patch release is being tagged anyway."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While it's oftentimes up to our own discretion, engineers should be ",(0,o.kt)("strong",{parentName:"p"},"selective of fixes and mindful of asking")," release owners to include their patches if the patch wouldn't justify a point release on its own, as it introduces more overhead and risk of failures or additional issues with the release."),(0,o.kt)("p",{parentName:"admonition"},"If you\u2019re requesting the release owner include a patch, make sure you know where that train is in regards to production. If the train is already in production, the dot release will be pushed to production relatively soon after the tag is made, which you may or may not intend. See the ",(0,o.kt)("a",{parentName:"p",href:"#production-hotfixes"},"production hotfixes")," section for more info.")),(0,o.kt)("p",null,"There are a few different ways to handle a dot release. Git is a flexible tool however, don't hesitate to get in touch with your team to talk through the best courses of action."),(0,o.kt)("h4",{id:"the-recommended-way"},"The ",(0,o.kt)("strong",{parentName:"h4"},"recommended way")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure the commits you want to pick have already landed in ",(0,o.kt)("inlineCode",{parentName:"li"},"main")),(0,o.kt)("li",{parentName:"ol"},"Ensure you have the latest from the existing train branch (",(0,o.kt)("inlineCode",{parentName:"li"},"git pull"),")"),(0,o.kt)("li",{parentName:"ol"},"On the train branch, run ",(0,o.kt)("inlineCode",{parentName:"li"},"git cherry-pick")," for the needed commits that have landed in ",(0,o.kt)("inlineCode",{parentName:"li"},"main")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"git log")," to ensure you see the expected cherry-picked commit(s).  Also run any local tests you need to run to ensure things are functioning correctly."),(0,o.kt)("li",{parentName:"ol"},"Push your changes back to Github")),(0,o.kt)("p",null,"An example of commands to run for this kind of patch release are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git fetch [remote] --tags\ngit checkout main\ngit pull\ngit checkout train-100\ngit pull\ngit cherry-pick <commit1> # do these one at a time to ensure there\'s no merge conflicts\ngit cherry-pick <commit2>\n(repeat as needed)\ngit log  # Verify you picked what you wanted to\n# Run the server locally, run tests, etc. to verify your patch is operating correctly\ngit push origin train-100\ngit tag -a "v1.100.x" -m "Train release v1.100.x" # X is your patch release number.  It just increments from the previous one.\ngit push origin v1.100.x\n')),(0,o.kt)("h2",{id:"special-cases"},"Special Cases"),(0,o.kt)("h3",{id:"production-hotfixes"},"Production hotfixes"),(0,o.kt)("p",null,"If you need to hotfix a branch that is not the latest (for example, you need to hotfix Train 100 but there is also a Train 101 branch) then you need to ensure any code cherry picked to Train 100 is also cherry-picked to the Train 101 branch to avoid a regression when Train 101 goes to production."),(0,o.kt)("p",null,"This can happen if there is a hotfix needed in production (Train 100) but stage has already been tagged (Train 101).  In this case do the lowest branch first and get it to production and then do the next branch."),(0,o.kt)("p",null,"It's good to communicate frequently in #fxa-team when this occurs."),(0,o.kt)("h3",{id:"releasing-icons"},"Releasing Icons"),(0,o.kt)("p",null,"Icons and other assets are automatically deployed with every release. If icons need to be deployed outside the regular release process, ask SRE for help."),(0,o.kt)("p",null,"All product icons live in a dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/assets"},"assets directory")," in the fxa repo. This directory is independent of individual packages in the monorepo because it doesn't need to be wrapped up in any particular container, and these icons may be used across different servers."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," directory is uploaded manually to the FxA CDN at ",(0,o.kt)("a",{parentName:"p",href:"https://accounts-static.cdn.mozilla.net"},"https://accounts-static.cdn.mozilla.net")," as part of the release process. Subdirectories map directly to paths under the CDN domain: content in ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/foo")," maps to ",(0,o.kt)("a",{parentName:"p",href:"https://accounts-static.cdn.mozilla.net/foo"},"https://accounts-static.cdn.mozilla.net/foo"),"."),(0,o.kt)("p",null,"The Stripe product icons live in ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/product-icons"),"."),(0,o.kt)("p",null,"It's fine to create other subdirectories for new collections of assets as needed but you'll need to modify ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.github/workflows/upload-assets-to-cdn.yml"},"the push script")," to include them."),(0,o.kt)("h3",{id:"security-releases"},"Security Releases"),(0,o.kt)("p",null,"We maintain ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa-private"},(0,o.kt)("inlineCode",{parentName:"a"},"fxa-private"))," for making security-related point releases, also known as a private patch release. This is something we rarely have to do."),(0,o.kt)("p",null,"The recommended procedure for doing so is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the private repo, independently from your normal working repo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:mozilla/fxa-private\ncd fxa-private\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Do not add fxa-private as a remote on your normal working repo. This increases the risk of pushing a private fix to the public repo by mistake."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the corresponding public repo as a remote named ",(0,o.kt)("inlineCode",{parentName:"p"},"public"),", and ensure it's up-to-date:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add public git@github.com:mozilla/fxa\ngit fetch public # Ensure this pulls latest tags. Run `git fetch public --tags` if not\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the latest release branch and push it to the private repo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout public/train-XYZ\ngit push origin train-XYZ\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Develop your fix against this as a new branch in the private repo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b train-XYZ-my-security-fix\ngit commit -a\ngit push -u origin train-XYZ-my-security-fix\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit and review the fix as a PR in the private repo,\ntargetting the ",(0,o.kt)("inlineCode",{parentName:"p"},"train-XYZ")," branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tag a point release in the private repo, following the release steps"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git checkout train-XYZ; git pull  # ensure we have the merged PR\ngit tag -a "v1.100.x" -m "Train release v1.100.x"\ngit push\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push the tag in order to trigger a CircleCI build:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin v1.XYZ.N\n")),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"git push --tags")," as this will not correctly trigger the CircleCI build."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"File an issue in the next sprint as a reminder to uplift the fix once it has been deployed to production."))),(0,o.kt)("p",null,"Operations is involved at this point to deploy to production directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-private")," so the patch is never seen before it's live."),(0,o.kt)("p",null,"Once the fix is verified in production, the patch is cherry-picked or merged back to ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa"),"."),(0,o.kt)("h3",{id:"temporary-stage-deploys"},"Temporary stage deploys"),(0,o.kt)("p",null,"If you are working on something that you wish to test out in a release environment before it is officially merged into ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," you might consider a temporary deploy to stage."),(0,o.kt)("p",null,"To do so, start by branching off the most recent train branch. Don't branch off ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," so you're not introducing changes merged after the official train was deployed. Cherry-pick your change(s) into the new branch."),(0,o.kt)("p",null,"Tag the branch with a name of your choosing, and push your branch to ",(0,o.kt)("inlineCode",{parentName:"p"},"mozilla/fxa"),". Because you're pushing a tag, it will trigger a build workflow in CircleCI. Keep an eye on the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy-packages")," job."),(0,o.kt)("p",null,"Once the images have been built, you can ping someone from SRE in Slack to selectively deploy servers your changes occurred in (e.g. if you only change code in ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-auth-server"),", only the auth server needs to be deployed)."),(0,o.kt)("p",null,"Some things to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is a temporary deploy. Your changes will be reverted when the next official stage train tag occurs for a regular release or a patch release, or if someone else needs to perform this process."),(0,o.kt)("li",{parentName:"ul"},"We have relying parties that depend on stage for their own testing, so try not to break things with your temporary code. If you think this is a possibility please consider pinging QA in Slack so they can perform tests as needed.")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-actually-happens-with-the-deploy-process"},"What actually happens with the deploy process?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A tag named ",(0,o.kt)("inlineCode",{parentName:"li"},"v1.xxx.y")," is made "),(0,o.kt)("li",{parentName:"ol"},"When the tag is pushed to ",(0,o.kt)("inlineCode",{parentName:"li"},"mozilla/fxa"),", CircleCI runs the normal unit/integration tests on that tag"),(0,o.kt)("li",{parentName:"ol"},"After tests pass, ",(0,o.kt)("inlineCode",{parentName:"li"},"deploy_and_tag")," is ran, where CircleCI builds Docker images and uploads them to Docker Hub"),(0,o.kt)("li",{parentName:"ol"},"Docker Hub sends a webhook to Jenkins and runs the our deploy pipelines with the new Docker image"),(0,o.kt)("li",{parentName:"ol"},"Our servers are deployed and our Slackbot pings the #fxa-team channel. These go out one-after-another but they have a little overlap.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Stage is deployed in alphabetical order"),(0,o.kt)("li",{parentName:"ul"},"Production is deployed with:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"auth-server first because it breaks the most"),(0,o.kt)("li",{parentName:"ul"},"Anything that touches the database"),(0,o.kt)("li",{parentName:"ul"},"Then content-server and others last"))))),(0,o.kt)("li",{parentName:"ol"},"The test-content-server-remote smoke tests are ran, triggered by the content-server deployment finishing")),(0,o.kt)("h4",{id:"canary"},"Canary"),(0,o.kt)("p",null,"In staging, we have a canary available but there is only one server, meaning the canary will take 100% of traffic.  "),(0,o.kt)("p",null,"In production, the canary also takes the full amount of traffic, however, the percentage of traffic it gets is based on how many servers are running. For example, if the auth-server is deployed with 30 servers, the canary would take 1/30th of the traffic."),(0,o.kt)("h3",{id:"does-a-deploy-failure-on-one-server-prevent-others-from-deploying"},"Does a deploy failure on one server prevent others from deploying?"),(0,o.kt)("p",null,"In staging, a single service will not stop the rest from deploying. In production, they are deployed by hand, so if one breaks SRE will stop the rest from deploying."))}d.isMDXComponent=!0}}]);