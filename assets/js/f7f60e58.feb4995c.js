"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6953],{60835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));a(8209);const s={title:"GitHub Strategies"},o=void 0,n={unversionedId:"reference/github-strategies",id:"reference/github-strategies",title:"GitHub Strategies",description:"This strategy was developed before there were more permission options in Github and before we started using Github Enterprise.  It is probably worth revisiting this.",source:"@site/docs/reference/github-strategies.md",sourceDirName:"reference",slug:"/reference/github-strategies",permalink:"/ecosystem-platform/reference/github-strategies",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/github-strategies.md",tags:[],version:"current",frontMatter:{title:"GitHub Strategies"},sidebar:"docs",previous:{title:"Mobile Specifics",permalink:"/ecosystem-platform/reference/mobile-specifics"},next:{title:"Third Party Authentication in FxA",permalink:"/ecosystem-platform/reference/third-party-authentication"}},l={},p=[{value:"fxa-archives",id:"fxa-archives",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This strategy was developed before there were more permission options in Github and before we started using Github Enterprise.  It is probably worth revisiting this.")),(0,i.kt)("h1",{id:"groups--permissions"},"Groups & Permissions"),(0,i.kt)("p",null,"Firefox Accounts has a history of using ","[too?]"," many repositories on GitHub.\nOver many years this means important repositories can be neglected.\nAdditionally, we need to maintain proper access controls to all of the\nrepositories in a world where priorities shift quickly and often."),(0,i.kt)("p",null,"To address this, our GitHub strategy takes advantage of Github\u2019s nested teams.\nBy having groups with progressively tighter access controls we can be sure we\nare addressing all of the appropriate repositories because permissions are\ninherited.  We have a simple hierarchy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Firstly, no team.  You don\u2019t need to be in an FxA team to open or comment on\nissues and pull requests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fxa-community")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Read access"),(0,i.kt)("li",{parentName:"ul"},"This essentially collects all of our repositories in one place"),(0,i.kt)("li",{parentName:"ul"},"Being in this group means a person can be assigned issues"),(0,i.kt)("li",{parentName:"ul"},"All repositories that this group has access to are ",(0,i.kt)("em",{parentName:"li"},"read only")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fxa-write"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A sub-team of fxa-community"),(0,i.kt)("li",{parentName:"ul"},"All repositories that this group has access to are ",(0,i.kt)("em",{parentName:"li"},"read/write")),(0,i.kt)("li",{parentName:"ul"},"If you're on this team you are likely employed at Mozilla"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fxa-devs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sub-team of ",(0,i.kt)("strong",{parentName:"li"},"fxa-write")),(0,i.kt)("li",{parentName:"ul"},"Used for requesting reviews.  If you work in specific areas of FxA and\ndon\u2019t want to be pinged about general reviews you probably want write\naccess but not on this team."),(0,i.kt)("li",{parentName:"ul"},"Required to be in this team to push to production (enforced on github)"))),(0,i.kt)("li",{parentName:"ul"},"Occasionally other teams will be added here as well, for example, if\nwe're doing an internship program or working with external teams."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fxa-admins"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sub-team of ",(0,i.kt)("strong",{parentName:"li"},"fxa-write")),(0,i.kt)("li",{parentName:"ul"},"This group has ",(0,i.kt)("em",{parentName:"li"},"admin access")," to all repositories."),(0,i.kt)("li",{parentName:"ul"},"If you're in this group you are employed at Mozilla and you probably\nwork with FxA day-to-day.")))))))),(0,i.kt)("h2",{id:"fxa-archives"},"fxa-archives"),(0,i.kt)("p",null,"There is another team called ",(0,i.kt)("strong",{parentName:"p"},"fxa-archives"),".  It holds many old archived\nrepositories that FxA created and no longer uses.  It\u2019s around to collect that\nhistorical context and keep the archived repositories out of the way while we\ndo day-to-day work."))}u.isMDXComponent=!0}}]);