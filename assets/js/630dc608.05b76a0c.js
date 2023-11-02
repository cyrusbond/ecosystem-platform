"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1403],{18616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));n(8209);const r={title:"Tests in CircleCI"},l=void 0,o={unversionedId:"reference/tests-in-circleci",id:"reference/tests-in-circleci",title:"Tests in CircleCI",description:"Last Updated: 2022-01-19",source:"@site/docs/reference/tests-in-circleci.md",sourceDirName:"reference",slug:"/reference/tests-in-circleci",permalink:"/ecosystem-platform/reference/tests-in-circleci",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/tests-in-circleci.md",tags:[],version:"current",frontMatter:{title:"Tests in CircleCI"},sidebar:"docs",previous:{title:"React Style Guide",permalink:"/ecosystem-platform/reference/style-guides/react-style-guide"},next:{title:"Functional Tests",permalink:"/ecosystem-platform/reference/functional-testing"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Workflows",id:"workflows",level:2},{value:"test",id:"test",level:3},{value:"deploy-tag",id:"deploy-tag",level:3},{value:"Jobs",id:"jobs",level:2},{value:"install",id:"install",level:3},{value:"build-module",id:"build-module",level:3},{value:"deploy-module",id:"deploy-module",level:3},{value:"fxa-content-server",id:"fxa-content-server",level:3},{value:"build-and-deploy-content-server",id:"build-and-deploy-content-server",level:3},{value:"fxa-shared",id:"fxa-shared",level:3},{value:"docs",id:"docs",level:3},{value:"Important scripts &amp; files",id:"important-scripts--files",level:2},{value:"packages/fxa-circleci/Dockerfile",id:"packagesfxa-circlecidockerfile",level:3},{value:".circleci/config.yml",id:"circleciconfigyml",level:3},{value:".circleci/modules-to-test.js",id:"circlecimodules-to-testjs",level:3},{value:".circleci/build-test-deploy.sh",id:"circlecibuild-test-deploysh",level:3},{value:".circleci/build.sh",id:"circlecibuildsh",level:3},{value:".circleci/test.sh",id:"circlecitestsh",level:3},{value:".circleci/deploy.sh",id:"circlecideploysh",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Last Updated: 2022-01-19"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The FxA team works mostly within a monolithic git repository. This is broken up into many packages, where each package tends to be a microservice or library shared between other packages."),(0,a.kt)("p",null,"CircleCI is a service used by FxA to automatically run tests across all packages for every pull request, branch push, and commit tag on GitHub. Scripts and configuration for CircleCI mostly live in the ",(0,a.kt)("inlineCode",{parentName:"p"},".circleci")," directory."),(0,a.kt)("p",null,"Though there are exceptions on a per-package basis, the following things tend to be true:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We use Docker to build containers within which tests are run, as well as build artifacts for each package.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," workflow runs for every commit to a pull request, branch, or tag. This workflow performs build, test, and deploy steps across all packages.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-tag")," workflow runs for every ",(0,a.kt)("strong",{parentName:"p"},"tagged")," commit. This workflow skips tests, performing build & deploy steps across all packages.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Each package can provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-test")," file. From this, a container will be built in which ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," will be executed. A successful exit status is considered a passing test run.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Each package can provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-build")," file. This will be used to build a Docker image for deployment to Docker Hub. It should be very similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-test")," - but it can omit steps & dependencies used only for testing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Commits to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch result in image deployments to Docker Hub for each package, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," tag.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Commits to branches prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"feature")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerpush")," also result in images pushed to Docker Hub - in this case, the branch name is used as the Docker tag.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Commits tagged with ",(0,a.kt)("inlineCode",{parentName:"p"},"git tag")," or via GitHub trigger deployments of images to Docker Hub. Here, the git tag is used as the Docker tag."))),(0,a.kt)("p",null,"Again, there are exceptions to all the above. The rest of this document will go into detail on the workflows, jobs, scripts, and important files that make up CircleCI testing - and more importantly attempt to highlight the exceptions and per-package customizations."),(0,a.kt)("h2",{id:"workflows"},"Workflows"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/workflows/"},"workflow in CircleCI")," is described like so:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"a set of rules for defining a collection of jobs and their run order. Workflows support complex job orchestration using a simple set of configuration keys")),(0,a.kt)("h3",{id:"test"},"test"),(0,a.kt)("p",null,"This workflow gets run on all commits for all pull requests, branches, and tags."),(0,a.kt)("p",null,"All steps in the workflow depends on ",(0,a.kt)("a",{parentName:"p",href:"#install"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"install")," job"),", so that gets run first."),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,a.kt)("a",{parentName:"p",href:"#build-module"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"build-module")," job")," is run in parallel for most packages - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.circleci/config.yml#L257"},"check ",(0,a.kt)("inlineCode",{parentName:"a"},".circleci/config.yml")," for an up-to-date list"),". This shared job handles the work of building Docker containers with ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-test")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-build"),", running tests, and deploying images."),(0,a.kt)("p",null,"Some packages do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"build-module")," - these each use customized jobs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fxa-content-server"},(0,a.kt)("inlineCode",{parentName:"a"},"fxa-content-server")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#build-and-deploy-content-server"},(0,a.kt)("inlineCode",{parentName:"a"},"build-and-deploy-content-server"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fxa-shared"},(0,a.kt)("inlineCode",{parentName:"a"},"fxa-shared"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#js-client"},(0,a.kt)("inlineCode",{parentName:"a"},"js-client"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fxa-oauth-server"},(0,a.kt)("inlineCode",{parentName:"a"},"fxa-oauth-server")))),(0,a.kt)("h3",{id:"deploy-tag"},"deploy-tag"),(0,a.kt)("p",null,"The jobs specified in this workflow only run for tags."),(0,a.kt)("p",null,"All steps in the workflow depends on ",(0,a.kt)("a",{parentName:"p",href:"#install"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"install")," job"),", so that gets run first."),(0,a.kt)("p",null,"Then, ",(0,a.kt)("a",{parentName:"p",href:"#deploy-module"},"the shared ",(0,a.kt)("inlineCode",{parentName:"a"},"deploy-module")," job")," is run in parallel for most packages - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.circleci/config.yml#L355"},"check ",(0,a.kt)("inlineCode",{parentName:"a"},".circleci/config.yml")," for an up-to-date list"),"."),(0,a.kt)("h2",{id:"jobs"},"Jobs"),(0,a.kt)("p",null,"Jobs are the individual build tasks performed by CircleCI. They're orchestrated in ",(0,a.kt)("a",{parentName:"p",href:"#workflows"},"workflows"),", where they can be run in parallel and/or made dependent on each other. The results of one job can also feed into another."),(0,a.kt)("h3",{id:"install"},"install"),(0,a.kt)("p",null,"Common installation and setup for all other jobs."),(0,a.kt)("p",null,"Checks out the project code into the default working directory ",(0,a.kt)("inlineCode",{parentName:"p"},"~/project"),". Runs ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ci")," in the root of the project."),(0,a.kt)("p",null,"Creates ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/version.json")," based on CircleCI env vars to describe the hash, version, source, and build URL of the current run. This ",(0,a.kt)("inlineCode",{parentName:"p"},"version.json")," will also be stored as a ",(0,a.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/artifacts/"},"build artifact")," with the test run."),(0,a.kt)("p",null,"Also runs ",(0,a.kt)("a",{parentName:"p",href:"#circleci-modules-to-testjs"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/modules-to-test.js"))," and outputs to ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/test.list")," as a selection of which packages' tests should be run."),(0,a.kt)("p",null,"Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," job uses ",(0,a.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/configuration-reference/#persist_to_workspace"},(0,a.kt)("inlineCode",{parentName:"a"},"persist_to_workspace"))," to copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/project")," directory to a shared workspace that will be copied into the filesystem for each following job via ",(0,a.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/configuration-reference/#attach_workspace"},(0,a.kt)("inlineCode",{parentName:"a"},"attach_workspace")),"."),(0,a.kt)("h3",{id:"build-module"},"build-module"),(0,a.kt)("p",null,"Common task used by many modules in the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," workflow to build, test, and deploy. It takes three parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module")," - string, name of the package to build"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test")," - string, default: ",(0,a.kt)("inlineCode",{parentName:"li"},"test"),", can be used to run a different NPM script rather than ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db")," - boolean, default: false")),(0,a.kt)("p",null,"Working directory is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/project/packages/{module}"),". Attaches to the shared workspace. Sets up remote Docker environment for building containers."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," parameter is true, it starts up containers for mysql, memcached, redis, and firestore."),(0,a.kt)("p",null,"Finally, it runs ",(0,a.kt)("a",{parentName:"p",href:"#circleci-build-test-deploysh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/build-test-deploy.sh {test}")),". This runs the build, test, and deploy scripts for the module in the current working directory."),(0,a.kt)("h3",{id:"deploy-module"},"deploy-module"),(0,a.kt)("p",null,"Common task used by many modules in ",(0,a.kt)("a",{parentName:"p",href:"#deploy-tag"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"deploy-tag")," workflow")," to build & deploy images without running tests. Takes one parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module")," - string")),(0,a.kt)("p",null,"Working directory is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/project/packages/{module}"),". Attaches to the shared workspace. Sets up remote Docker environment for building containers."),(0,a.kt)("p",null,"Runs ",(0,a.kt)("a",{parentName:"p",href:"#circleci-buildsh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/build.sh {module}"))," to build a Docker container. Then, runs ",(0,a.kt)("a",{parentName:"p",href:"#circleci-deploysh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/deploy.sh {module}"))," to deploy the container to Docker Hub."),(0,a.kt)("h3",{id:"fxa-content-server"},"fxa-content-server"),(0,a.kt)("p",null,"Testing fxa-content-server is very complex and heavy in resource usage. Though this is a single job, it is spread across several parallel container nodes in CircleCI (currently ",(0,a.kt)("inlineCode",{parentName:"p"},"parallelism: 6"),")."),(0,a.kt)("p",null,"Each container is prepared with ",(0,a.kt)("a",{parentName:"p",href:"#circleci-install-content-serversh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/install-content-server.sh"))," and then the tests are run with ",(0,a.kt)("a",{parentName:"p",href:"#circleci-test-content-serversh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/test-content-server.sh")),". These scripts split up which tests are run depending on the ",(0,a.kt)("inlineCode",{parentName:"p"},"$CIRCLE_NODE_INDEX")," env variable, which varies depending the parallel container node running the script."),(0,a.kt)("h3",{id:"build-and-deploy-content-server"},"build-and-deploy-content-server"),(0,a.kt)("p",null,"Since ",(0,a.kt)("a",{parentName:"p",href:"#fxa-content-server"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"fxa-content-server")," job")," uses a custom parallel scheme to run tests, building a Docker container image is not useful for many runs like pull requests."),(0,a.kt)("p",null,"So, we split those tasks into the ",(0,a.kt)("inlineCode",{parentName:"p"},"build-and-deploy-content-server")," job, which is only executed for ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch and branch names prefixed by ",(0,a.kt)("inlineCode",{parentName:"p"},"feature.")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerpush.")),(0,a.kt)("p",null,"This is done by running ",(0,a.kt)("a",{parentName:"p",href:"#circleci-install-content-serversh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/install-content-server.sh")),", followed by ",(0,a.kt)("a",{parentName:"p",href:"#circleci-buildsh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/build.sh fxa-content-server"))," and ",(0,a.kt)("a",{parentName:"p",href:"#circleci-deploysh"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/deploy.sh fxa-content-server")),"."),(0,a.kt)("p",null,"(Unlike other modules, the ",(0,a.kt)("inlineCode",{parentName:"p"},"test.sh")," script is not run here, since the ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-content-server")," job already took care of it.)"),(0,a.kt)("h3",{id:"fxa-shared"},"fxa-shared"),(0,a.kt)("p",null,"Custom task for fxa-shared package. It runs lint and test directly on the CircleCI host node - rather than building a Docker container for running tests."),(0,a.kt)("h3",{id:"docs"},"docs"),(0,a.kt)("p",null,"Custom task for building and publishing documentation. Runs ",(0,a.kt)("inlineCode",{parentName:"p"},"_scripts/gh-pages.sh")," - but only on main branch in the main project repo."),(0,a.kt)("p",null,"This requires SSH keys that enable CircleCI to commit to the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-page")," on the main repo, so the script will be skipped if those keys are unavailable."),(0,a.kt)("h2",{id:"important-scripts--files"},"Important scripts & files"),(0,a.kt)("h3",{id:"packagesfxa-circlecidockerfile"},"packages/fxa-circleci/Dockerfile"),(0,a.kt)("p",null,"This is the base Dockerfile for the container used by most jobs. It includes most of the dependencies commonly used by all other packages. This includes a version of Firefox for Linux for integration tests - check the Dockerfile for the current version (68.0 as of this writing). Rust and Cargo are also included."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you commit an update to this Dockerfile, try not to include changes to other parts of the project in the same Pull Request. Other jobs in the same test run are likely to lag behind and use the previous version of the fxa-circleci container, because the current test run will not have had a chance to finish deploying the new image."),(0,a.kt)("h3",{id:"circleciconfigyml"},".circleci/config.yml"),(0,a.kt)("p",null,"Contains general configuration, job definitions, and workflows orchestrating all the jobs."),(0,a.kt)("h3",{id:"circlecimodules-to-testjs"},".circleci/modules-to-test.js"),(0,a.kt)("p",null,"Running all tests across all modules / packages in FxA can be time-comsuming. Time can be saved by skipping tests that we know are unrelated to changes in some given commit. Applying that logic, this script outputs a name of individual packages that should be tested - or ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," if it decides that everything needs to be run."),(0,a.kt)("p",null,"For main branch and other non-PR commits, the output is always ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),"."),(0,a.kt)("p",null,"For pull requests, the script fetches and parses the diff for the current PR. The URL for the diff is constructed from CircleCI env vars."),(0,a.kt)("p",null,"If there's an error while fetching or parsing the diff, ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," is output. Otherwise, the script checks the path of each file changed to build a list of modules for testing."),(0,a.kt)("p",null,"Some modules depend on other modules. Dependencies that resolve to ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace:*")," are added recursively to the list of modules to test."),(0,a.kt)("h3",{id:"circlecibuild-test-deploysh"},".circleci/build-test-deploy.sh"),(0,a.kt)("p",null,"Runs ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sh"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test.sh"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.sh")," for a given package - deriving the package name from the current working directory. Passes along the first parameter as the second parameter in ",(0,a.kt)("inlineCode",{parentName:"p"},"test.sh")," - which specifies a different NPM script to run besides the default ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test"),"."),(0,a.kt)("h3",{id:"circlecibuildsh"},".circleci/build.sh"),(0,a.kt)("p",null,"Common build script for most modules."),(0,a.kt)("p",null,"Logic for running or skipping build for a given module is implemented here: ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/test.list")," is expected to contain a list output from ",(0,a.kt)("inlineCode",{parentName:"p"},"modules-to-test.js")," - if the current module's name is missing and the list isn't ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),", this script will exit immediately."),(0,a.kt)("p",null,"Parameters are just ",(0,a.kt)("inlineCode",{parentName:"p"},"$1")," for the name of the module being tested."),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/version.json")," is expected to have been generated earlier - i.e. from the ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," job in CircleCI. This file is copied into the package."),(0,a.kt)("p",null,"For modules where ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is present, a container tagged ",(0,a.kt)("inlineCode",{parentName:"p"},"{MODULE}:build")," is built from ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,a.kt)("p",null,"For modules where ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-build")," is present, the container is built from that file instead."),(0,a.kt)("p",null,"There are exceptions for ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-auth-server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-content-server"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-payments-server"),": For each of these modules, the Docker build is performed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages")," parent directory. This is because each of these modules depends on files from other packages (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-shared"),") and Docker will not allow ",(0,a.kt)("inlineCode",{parentName:"p"},"../")," path references outside the base directory for the container build."),(0,a.kt)("p",null,"Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-auth-server")," executes ",(0,a.kt)("inlineCode",{parentName:"p"},"_scripts/clone-authdb.sh")," in order to set up the correct database interface for the server. (TKTK?)"),(0,a.kt)("h3",{id:"circlecitestsh"},".circleci/test.sh"),(0,a.kt)("p",null,"Common script that runs tests for most modules."),(0,a.kt)("p",null,"Parameters are ",(0,a.kt)("inlineCode",{parentName:"p"},"$1")," the name of the module being tested and ",(0,a.kt)("inlineCode",{parentName:"p"},"$2")," the name of an npm script that executes tests (defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," if omitted)."),(0,a.kt)("p",null,"Logic for running or skipping tests for a given module is implemented here: ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/test.list")," is expected to contain a list output from ",(0,a.kt)("inlineCode",{parentName:"p"},"modules-to-test.js")," - if the current module's name is missing and the list isn't ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),", this script will exit immediately."),(0,a.kt)("p",null,"For most modules: if ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile-test")," is present, it's used to build a Docker container."),(0,a.kt)("p",null,"The container is tagged ",(0,a.kt)("inlineCode",{parentName:"p"},"${MODULE}:test"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"MODULE")," is named in the first parameter of the script. Then, ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," is run within the container - the name of the npm script can be customized with the second parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"test.sh"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"tslint")," is present in the module's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run lint")," is also run in the container. If there's a ",(0,a.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," that contains ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"grunt eslint")," will be run in the container."),(0,a.kt)("h3",{id:"circlecideploysh"},".circleci/deploy.sh"),(0,a.kt)("p",null,"Common script for deploying the Docker container built from an FxA package to Docker Hub."),(0,a.kt)("p",null,"The basic gist of this script is that it takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"{MODULE}:build")," container - e.g. as created via ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sh")," - and re-tags it as appropriate for the current CI run before pushing it to Docker Hub."),(0,a.kt)("p",null,"These images are deployed to Mozilla's Docker Hub account. So, for example, many modules can be found with a search for ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/search?q=mozilla%2Ffxa-&type=image"},(0,a.kt)("inlineCode",{parentName:"a"},"mozilla/fxa-")),". Also look for images such as ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mozilla/123done"},(0,a.kt)("inlineCode",{parentName:"a"},"mozilla/123done"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mozilla/browserid-verifier"},(0,a.kt)("inlineCode",{parentName:"a"},"mozilla/browserid-verifier")),", which are listed under ",(0,a.kt)("inlineCode",{parentName:"p"},"packages")," but do not follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa-*")," naming convention."),(0,a.kt)("p",null,"The rest of the tag name depends on a few other conditions:"),(0,a.kt)("p",null,"If the build is on ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, then the tag will be ",(0,a.kt)("inlineCode",{parentName:"p"},"{MODULE}:latest"),"."),(0,a.kt)("p",null,"If a build is tagged in Git, then that Git tag is used - i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"{MODULE}:{GIT_TAG_NAME}"),"."),(0,a.kt)("p",null,"If a build is on a branch with a name prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"feature")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerpush"),", that branch name will be used in the tag - i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"{MODULE}:{GIT_BRANCH_NAME}"),"."),(0,a.kt)("p",null,"It's also possible to supply ",(0,a.kt)("inlineCode",{parentName:"p"},"$MODULE_SUFFIX")," env var tweak the Docker Hub repo name - i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"mozilla/$MODULE-$MODULE_SUFFIX"),"."),(0,a.kt)("p",null,"Untagged commits or commits on branches that do fall into one of the above cases do not result in a container deployed to Docker Hub."),(0,a.kt)("p",null,"Logic for running or skipping deployment for a given module is also implemented here: ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/test.list")," is expected to contain a list output from ",(0,a.kt)("inlineCode",{parentName:"p"},"modules-to-test.js")," - if the current module's name is missing and the list isn't ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),", this script will exit immediately."),(0,a.kt)("p",null,"TBD:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"describe how content-server tests are run"),(0,a.kt)("li",{parentName:"ul"},"how tests are split up between parallel CircleCI nodes"),(0,a.kt)("li",{parentName:"ul"},"how integration tests work with intern"),(0,a.kt)("li",{parentName:"ul"},"pairing tests are run separately")))}u.isMDXComponent=!0}}]);