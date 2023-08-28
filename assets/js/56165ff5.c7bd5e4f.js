"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9395],{70504:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>b,toc:()=>c});var t=a(87462),i=(a(67294),a(3905)),r=a(8209);const s={title:"Database Structure"},d=void 0,b={unversionedId:"reference/database-structure",id:"reference/database-structure",title:"Database Structure",description:"Current as of July 22nd, 2023",source:"@site/docs/reference/database-structure.md",sourceDirName:"reference",slug:"/reference/database-structure",permalink:"/ecosystem-platform/reference/database-structure",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/database-structure.md",tags:[],version:"current",frontMatter:{title:"Database Structure"},sidebar:"docs",previous:{title:"Browser Support",permalink:"/ecosystem-platform/reference/browser-support"},next:{title:"Emails",permalink:"/ecosystem-platform/reference/emails"}},y={},c=[{value:"Database: <code>fxa</code>",id:"database-fxa",level:2},{value:"Database: <code>fxa_oauth</code>",id:"database-fxa_oauth",level:2},{value:"Database: <code>fxa_profile</code>",id:"database-fxa_profile",level:2}],o={toc:c},u="wrapper";function m(n){let{components:e,...a}=n;return(0,i.kt)(u,(0,t.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Current as of ",(0,i.kt)("inlineCode",{parentName:"p"},"July 22nd, 2023")),(0,i.kt)("p",null,"Below you'll find some ER diagrams of the Firefox Accounts and Subscription\nPlatform databases.  Some notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You'll find very few enforced foreign keys.  This was a choice made a long\ntime ago because of the tooling being used at the time.  We'd make a\ndifferent choice now (and you can see newer tables do have foreign keys)."),(0,i.kt)("li",{parentName:"ul"},"Unless noted, all charsets are some form of ",(0,i.kt)("inlineCode",{parentName:"li"},"utf8"),".")),(0,i.kt)("h2",{id:"database-fxa"},"Database: ",(0,i.kt)("inlineCode",{parentName:"h2"},"fxa")),(0,i.kt)(r.G,{chart:'erDiagram\n    accountCustomers {\n        binary uid PK "16 bytes"\n        varchar stripeCustomerId\n        bigint createdAt "unsigned"\n        bigInt updatedAt "unsigned"\n    }\n    accountResetTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "Unique Key, 16 bytes"\n        bigint createdAt "unsigned"\n    }\n    accounts {\n        binary uid PK "16 bytes"\n        varchar normalizedEmail\n        varchar email\n        binary emailCode "16 bytes; CONFIDENTIAL, used to verify email"\n        tinyint emailVerified\n        binary kA "32 bytes; CONFIDENTIAL, master key for \'class-A\' material"\n        binary wrapWrapKb "32 bytes; CONFIDENTIAL, key for \'class-B\' material. Only unwrappable on the client."\n        binary authSalt "32 bytes; CONFIDENTIAL"\n        binary verifyHash "32 bytes; CONFIDENTIAL"\n        tinyint verifierVersion\n        bigint verifierSetAt\n        bigint createdAt\n        varchar locale\n        bigint lockedAt "unsigned"\n        bigint profileChangedAt "unsigned"\n        bigint keysChangedAt "unsigned"\n        text ecosystemAnonId\n        bigint disabledAt "unsigned"\n        bigint metricsOptOutAt "unsigned"\n    }\n    dbMetadata {\n        varchar name\n        varchar value\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    deviceCommandIdentifiers {\n        int commandId PK "unsigned"\n        varchar commandName\n    }\n    deviceCommands {\n        binary uid PK "16 bytes"\n        binary deviceId "16 bytes"\n        int commandId PK "unsigned"\n        varchar commandData "CONFIDENTIAL, used to encrypt commands"\n    }\n    devices {\n        binary uid PK "16 bytes"\n        binary id PK "16 bytes"\n        binary sessionTokenId "32 bytes; CONFIDENTIAL"\n        varchar name\n        varchar nameUtf8\n        varchar type\n        bigint createdAt "unsigned"\n        varchar callbackURL "CONFIDENTIAL"\n        char callbackPublicKey\n        char callbackAuthKey\n        tinyint callbackIsExpired\n        binary refreshTokenId "32 bytes; CONFIDENTIAL"\n    }\n    emailBounces {\n        varchar email PK\n        tinyint bounceType "unsigned"\n        tinyint bounceSubType "unsigned"\n        bigint createdAt PK "unsigned"\n        tinyint emailTypeId "unsigned"\n        varchar diagnosticCode\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    emailTypes {\n        smallint id PK "unsigned"\n        varchar emailType\n    }\n    emails {\n        int id PK\n        varchar normalizedEmail\n        varchar email\n        binary uid "16 bytes"\n        binary emailCode "CONFIDENTIAL"\n        tinyint isVerified\n        tinyint isPrimary\n        bigint verifiedAt "unsigned"\n        bigint createdAt "unsigned"\n    }\n    keyFetchTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary authKey "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        binary keyBundle "96 bytes; CONFIDENTIAL"\n        bigint createdAt "unsigned"\n    }\n    linkedAccounts {\n        binary uid PK "16 bytes"\n        varchar id PK\n        tinyint providerId PK\n        bigint authAt "unsigned"\n        tinyint enabled\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    passwordChangeTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        bigint createdAt "unsigned"\n    }\n    passwordForgotTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        binary passcode "16 bytes; CONFIDENTIAL"\n        bigint createdAt "unsigned"\n        smallint tries "unsigned"\n    }\n    paypalCustomers {\n        binary uid PK "16 bytes"\n        char billingAgreementId PK\n        varchar status\n        bigint createdAt "unsigned"\n        bigint endedAt "unsigned"\n    }\n    recoveryCodes {\n        bigint id PK "unsigned"\n        binary uid "16 bytes"\n        binary codeHash "32 bytes; CONFIDENTIAL"\n        binary salt "32 bytes; CONFIDENTIAL"\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    recoveryKeys {\n        binary uid PK "16 bytes"\n        text recoveryData "CONFIDENTIAL"\n        binary recoveryKeyIdHash "32 bytes; CONFIDENTIAL"\n        bigint createdAt "unsigned"\n        bigint verifiedAt "unsigned"\n        tinyint enabled\n    }\n    securityEventNames {\n        int id PK\n        varchar name\n    }\n    securityEvents }|--|| securityEventNames : named\n    securityEvents {\n        bigint id PK "unsigned"\n        binary uid "16 bytes"\n        int nameId FK\n        tinyint verified\n        binary ipAddrHmac "32 bytes"\n        bigint createdAt\n        binary tokenVerificationId "16 bytes"\n    }\n    sentEmails }|--|| emailTypes : is\n    sentEmails {\n        int id PK "unsigned"\n        binary uid "16 bytes"\n        smallint emailTypeId "unsigned"\n        json params\n        bigint sentAt "unsigned"\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    sessionTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        bigint createdAt "unsigned"\n        varchar uaBrowser\n        varchar uaBrowserVersion\n        varchar uaOS\n        varchar uaOSVersion\n        varchar uaDeviceType\n        bigint lastAccessTime "unsigned"\n        varchar uaFormFactor\n        bigint authAt "unsigned"\n        int verificationMethod\n        bigint verifiedAt\n        tinyint mustVerify\n    }\n    signinCodes {\n        binary hash PK "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        bigint createdAt "unsigned"\n        binary flowId "32 bytes"\n    }\n    totp {\n        bigint id PK "unsigned"\n        binary uid "16 bytes"\n        varchar sharedSecret "CONFIDENTIAL"\n        bigint epoch "CONFIDENTIAL"\n        bigint createdAt "unsigned"\n        tinyint verified\n        tinyint enabled\n    }\n    unblockCodes {\n        binary uid PK "16 bytes"\n        binary unblockCodeHash PK "32 bytes; CONFIDENTIAL"\n        bigint createdAt\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    unverifiedTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenVerificationId "16 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        tinyint mustVerify\n        binary tokenVerificationCodeHash "32 bytes; CONFIDENTIAL"\n        bigint tokenVerificationCodeExpiresAt "unsigned"\n    }\n    verificationReminders {\n        binary uid PK "16 bytes"\n        varchar type PK\n        bigint createdAt\n    }',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"database-fxa_oauth"},"Database: ",(0,i.kt)("inlineCode",{parentName:"h2"},"fxa_oauth")),(0,i.kt)(r.G,{chart:'erDiagram\n    clientDevelopers {\n        binary rowId PK "8 bytes"\n        binary developerId "16 bytes"\n        binary clientId "8 bytes"\n        timestamp createdAt\n    }\n    clients {\n        binary id PK "8 bytes"\n        varchar name\n        varchar imageUri\n        varchar redirectUri\n        tinyint canGrant\n        tinyint publicClient\n        timestamp createdAt\n        tinyint trusted\n        varchar allowedScopes\n        binary hashedSecret "32 bytes; CONFIDENTIAL"\n        binary hashedSecretPrevious "32 bytes; CONFIDENTIAL"\n        text notes\n    }\n    codes {\n        binary code PK "32 bytes; CONFIDENTIAL"\n        binary clientId "8 bytes"\n        binary userId "16 bytes"\n        varchar scope\n        timestamp createdAt\n        bigint authAt\n        varchar amr\n        tinyint aal\n        tinyint offline\n        varchar codeChallengeMethod\n        varchar codeChallenge "CONFIDENTIAL"\n        mediumtext keysJwe "CONFIDENTIAL"\n        bigint profileChangedAt\n        binary sessionTokenId "32 bytes"\n    }\n    dbMetadata {\n        varchar name PK\n        varchar value\n    }',mdxType:"Mermaid"}),(0,i.kt)(r.G,{chart:'erDiagram\n    developers {\n        binary developerId PK "16 bytes"\n        varchar email\n        timestamp createdAt\n    }\n    refreshTokens {\n        binary token PK "32 bytes; CONFIDENTIAL"\n        binary clientId "8 bytes"\n        binary userId "16 bytes"\n        varchar scope\n        timestamp createdAt\n        timestamp lastUsedAt\n        bigint profileChangedAt\n    }\n    scopes {\n        varchar scope PK\n        tinyint hasScopedKeys\n    }\n    tokens {\n        binary token PK "32 bytes; CONFIDENTIAL"\n        binary clientId "8 bytes"\n        binary userId "16 bytes"\n        varchar type\n        varchar scope\n        timestamp createdAt\n        timestamp expiresAt\n        bigint profileChangedAt\n    }',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"database-fxa_profile"},"Database: ",(0,i.kt)("inlineCode",{parentName:"h2"},"fxa_profile")),(0,i.kt)(r.G,{chart:'erDiagram\n    avatar_providers {\n        int id PK\n        varchar name\n    }\n    avatar_selected ||--|{ avatars : chooses\n    avatar_selected {\n        binary userId PK "16 bytes"\n        binary avatarId "16 bytes"\n    }\n    avatars }|--|| avatar_providers : from\n    avatars {\n        binary id PK "16 bytes"\n        barchar url\n        binary userId "16 bytes"\n        int providerId\n    }\n    dbMetadata {\n        varchar name PK\n        varchar value\n    }\n    profile {\n        binary userId PK "16 bytes"\n        varchar displayName\n    }',mdxType:"Mermaid"}))}m.isMDXComponent=!0}}]);