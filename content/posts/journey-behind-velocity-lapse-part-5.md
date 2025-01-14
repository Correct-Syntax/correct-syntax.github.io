---
title: "The Journey Behind Velocity Lapse Part 5"
date: "2024-02-15"
draft: false
image: "/posts/journey-behind-velocity-lapse-5/the-journey-behind-velocity-lapse-part-5-header.webp"
description: "The fifth in a series of 'devlog' posts of my journey creating Velocity Lapse, a time-lapse app for Android. In this post, I share app improvements and successes in working toward stability and the full release."
intro: "In this post, I share app improvements and successes in working toward stability and the full release."
tags: ["devlog"]
type: "post"
---

Welcome to the 5th post in a series of "dev-log" style posts sharing my journey creating [Velocity Lapse](https://velocitylapse.com), a time-lapse app for Android. 

You can read the previous posts to get context up to this point: [Part 1](/posts/journey-behind-velocity-lapse-part-1/), [Part 2](/posts/journey-behind-velocity-lapse-part-2/), [Part 3](/posts/journey-behind-velocity-lapse-part-3/), and [Part 4](/posts/journey-behind-velocity-lapse-part-4/).

If you have any comments or suggestions, feel free to leave a comment below.


### Capture view redesign

In preparation for upcoming additions and fixes, I redesigned the capture view interface to better fit the necessary controls and make it easier to set and reset values.

{{< figure src="/posts/journey-behind-velocity-lapse-5/redesigned-timelapse-capture.jpg" alt="Velocity Lapse redesigned timelapse capture interface" caption="" >}}


### Towards a stable app

My top priority at this point was working toward stability.

As mentioned in the last post, the Google Play console showed that the user perceived crash rate was around 6-7% (~8% at the peak).

Of the 7-8%, the export to video crash impacted the most users. Thus, I specifically prioritized getting it resolved. 

Previously, I had tried a number of "guesses" to fix the issue without success. This time, I decided to tackle it straight on rather than make a guess and wait for feedback from users. 

I found an online real device testing cloud service with enough free minutes that I could test and debug Velocity Lapse on a Galaxy A03 core device. The Galaxy A03 core was one of the devices that crashed consistently, so I knew that would be my best chance of discovering the issue. 

It was painfully slow working with a device through the internet, but I was able to finally fix the crashing issue. 

The issue turned out to be that certain devices don't support hardware encoding and needed to be configured to use *software* encoding instead. 

Why it wouldn't automatically switch when necessary, I don't know. I also wonder why any of the [MediaCodec](https://developer.android.com/reference/android/media/MediaCodec) examples I'd seen online didn't include this (clearly) vital code gymnastics?

It was actually a simple problem, but hard to know without seeing the logs produced by the app crashing in debug mode.

As a result of fixing that issue, the user perceived crash rate dropped from around 6-8% to 1.7% —a major improvement.


### Targeting Android 13

August 31st, 2023 was the deadline to update apps to target SDK 33 (Android 13) on Google Play.

A few weeks ahead of the deadline I released an update that targeted SDK 33 and made some other changes. 

Soon after, I received a number of reports that there was an error message popping up when creating a new time lapse which made the app useless for new users. 

Frustratingly, like many issues on Android, the error only occurred on certain devices, none of which I had access to. It also didn't show in any Android emulators. Thankfully, I searched the Flurry analytics dashboard for the error code and was able to locate the full stack trace in the console.

It ended up being an issue with a race condition due to the new storage permission not being called in time and some depreciated camera methods. I quickly resolved the issues and submitted an update, but unfortunately not soon enough before there was a drop off in installs. 

I also updated to the latest Flutter SDK and migrated to Material 3 widgets since the Flutter team would depreciate Material 2 in an upcoming release. 

This confirmed in my mind how important app analytics and crash reporting can be for resolving issues.


### Multiple camera lens support

For the first half of the year, switching between the available camera lenses had been in the "top most requested features" list. 

I was happy to roll out support for switching between the available camera lenses, as a Pro feature. 

Due to Android software/hardware limitations, not every secondary lens supports manual camera controls. However, just having the option to use an ultra-wide lens for a particular time-lapse shot, for example, opens up a lot of creative possibilities.


### Targeting Android 14

Though Android 14 was still in beta at this point, I decided to update the codebase for Android 14 in anticipation of the full roll out.

Android 14 introduced a few breaking features that affected Velocity Lapse, but thankfully not that many.

I needed to wait until Flutter 3.16 to support the predictive back gesture, but I wasn't too thrilled at the changes I'd need to make anyway.

Since everything appeared to be working well on the Android 14 emulators, I decided to just go ahead and target SDK 34. 

Unfortunately, none of my physical Android devices had the Android 14 beta. So technically It wasn't tested properly. 

I'll say that this isn't something I would do if Velocity Lapse didn't carry the "early access beta" tag. But, since it did I was okay with it.

#### Frustrations with Foreground services

Due to the new Android 14 requirements for foreground service camera permissions, I updated to include the new foreground service declarations. If you're not aware, the foreground service allows Velocity Lapse to continue capturing even with the screen shut off. This is a pretty important feature. 

At first Google Play accepted, but then a month or two later rejected it with a policy violation. The email basically said to remove the foreground service and migrate to the WorkManager APIs. 

However, after looking at the WorkManager API documentation, I determined that it would likely still require a foreground service via the WorkManager long running task. 

So I appealed (twice) to hopefully get someone to take a closer look or advise. Soon after, I noticed that the policy violation disappeared from Google Play Console. However, as of this writing, I have yet to hear the result via email.


### A few milestones

Since the last post, there were a few milestones I thought I'd share:

The YouTube channel crossed **100 subscribers** and Velocity Lapse crossed **50,000 downloads** on Google Play.

{{< youtube id="vum0osBvn2s" class="youtube-player" >}}


### Switching from Flurry to Embrace.io. 

I appreciated Flurry analytics and the fact that it was a free service. However, Flurry was more of an analytics service than a crash reporting and logging service. 

At least at this point, for Velocity Lapse, I prioritized logs and information about crash reports over analytics. So, the fact that Flurry was limited in what it could do for crash reporting and logging caused me to look for an alternative.

I came across [Embrace.io](https://embrace.io/) which fit precisely what I needed: accurate logging, sessions, and crash reports. 

Thankfully, they had a free tier as I certainly could not afford to pay for it at this point. Integration was fairly straightforward and it greatly improved my debugging experience. 

With Embrace, sessions are shown in a timeline with context and breadcrumbs to help you see when the issue happened. 

This alone was much better than Flurry, which gives only the exception, and behind a tab at that. Quite frankly, I was able to actually get enough context to solve a bunch of bugs right away.

Switching services meant I needed to update the privacy policy since Embrace collects a bit more data. 

However, I think the switch was worth it since it has since greatly helped in continuing to work towards a stable app.

As it would turn out, soon after I had completed the migration to Embrace.io, Flurry sent an email stating that they would be sunsetting the service in 2024. 

So, I would have had to migrate to another service anyway.


### The value of Velocity Lapse

In November, I raised price of Velocity Lapse Pro to $11.99 USD.

I'll admit that I have a certain amount of cautiousness when it comes to pricing products. The in-app purchase for Velocity Lapse Pro hasn't been different. 

Although I've had people suggest that I should be charging more, I've committed to slowly raised the price as I personally see the value increase with the approaching of Velocity Lapse being a more feature-complete. 

Perhaps I'm making a mistake there, especially since the purchase is a one-time, lifetime upgrade. However, I'd personally rather choose to err on the side of charging what I believe to be fair for the value it provides.

I'm really happy that people see value in purchasing Velocity Lapse Pro. It hasn't been easy and the validation of actual buyers paying for your product is probably the best you can get.

If you're reading this and you've purchased Velocity Lapse Pro, please accept my thanks for your support.


### Improvements in v0.7.0

In the v0.7.0 release, I added better switching between internal and SD card storage for projects. 

As a nice touch and feature I'd had on the roadmap for a while, I implemented a storage indicator that showed how much space was left on the selected storage type. It doubles as the button to switch storage types. This has become one of my favorite features because it just looks and works so nicely.

To make room for the new storage switcher and indicator, I also moved the video gallery to its own tab. Having the gallery in its own tab was not only more fitting, but actually accessible to the thumb.

The export video encoder was now more resilient to unexpected images. It would skip any invalid images and cancel the export if certain parameters aren't correct. Much better than crashing.


### Researching and revisiting

During this time I did some research to attain the best setup for a flexible way to set the time-lapse settings and a simple to understand scheduling flow.

My concept was inspired by a few of the time-lapse interval timer interfaces I'd seen. 

It centers around the ability to set the mode for interval and duration. The interval could be set by adjusting the length of time to capture, final video duration, or by setting the interval directly.

Although I had originally started with a similar concept way back in the very first prototypes of Velocity Lapse a year ago, I decided to revisit the concept with more experience and user feedback to guide me this time.

For the scheduling, it seemed that I would likely need a way to keep the app awake for hours until the alarm went off. Haven't worked out the details on that yet.


### New community forum

On Nov. 19th, 2023 I setup the [community forum](https://forum.velocitylapse.com) using [Flarum](https://flarum.org/), an open-source forum platform. The next day, I officially launched the forum and promoted it on the Velocity Lapse Instagram and YouTube accounts.

{{< figure src="/posts/journey-behind-velocity-lapse-5/mobile-timelapse-forum.jpg" alt="Mobile time-lapse forum" caption="The Instagram post to announce the forum" >}}

It is a small experiment whether there is any use for a forum dedicated to *mobile* time-lapse photography. Whether it becomes anything in that regard, we'll have to see. Otherwise, it can serve as a place for Velocity Lapse users.


### Fixing the export ANR

During this time, I received a number of reports of Velocity Lapse freezing and causing ANR errors at the 18 frame during export. From the various reports, I was able to pinpoint the issue as affecting Pixel devices running Android 14.

To fix the issue, I decided to do a full re-write of the video export encoder. This time I made sure to use Kotlin's coroutines properly and not do any heavy processing in the UI thread. 

Much like before, taking the time to re-write and re-structure the encoder had additional benefits. The new structure enabled me to setup for supporting video effects and H.265 video for inclusion in some future update. 

The re-write fixed the ANR issue and eliminated other issues with the export. Needless to say, releasing v0.7.1 with the new export engine was quite a relief.


### Moving to Stacked Architecture

Until this point I had been using my own state management system based on Flutter's ``setState``. As the Flutter websites says, "You'd be surprised how far you can get with just a StatefulWidget".

Although I think the codebase was arguably  *decent* for using my own setup, it failed to fully separate UI and logic. The lack of "separation of concerns" introduced some tricky bugs and was becoming a maintenance burden, especially in the code-heavy areas of the app. 

Moving forward I knew I needed a state management solution that was consistent, tested, and proven. 

I looked into Provider, Riverpod, and Bloc —three of the most popular state management libraries. After reviewing documentation and examples for each, I liked the simplicity of Provider. 

Then I came across [Stacked](https://stacked.filledstacks.com/), a modern, MVVM Flutter state management system with separation of concerns and dependency injection. 

After not a little agonizing (choosing state management is no small thing) and going back and forth between Stacked, Riverpod, and Provider, I decided to go with Stacked.

At first using Stacked left me a bit nervous since it uses code generation. 

Velocity Lapse fits in the category of a complex app, with many bottom sheets, dialogs, and views with varying levels of light to heavy logic. So, naturally certain portions of the codebase were tricky to re-implement while learning the Stacked MVVM pattern.

Thanks to the documentation, over time I grasped Stacked MVVM and what the code-generating CLI actually did. 

Once I grasped the concepts, It was basically just putting in the work to re-write the Velocity Lapse codebase with Stacked architecture. It involved many hours of a (rather boring) loop of comparing then typing, as well as copy-pasting wherever possible.

In the end, the codebase was more consistent, maintainable, and SOLID. I was also able to catch a number of bugs along the way, which resulted in more stable codebase overall.


### v0.8.0: Photolapse mode and more

In addition to a whole new project architecture, v0.8.0 included a lot of other sweeping improvements, making it one of the most "changed" updates to this point. I overhauled and renamed Manual Capture mode to Photolapse mode. The new Photolapse mode had a more streamlined interface with new grid styles, a movable marker, and camera exposure and lenses control. 

Due to all these changes, a couple bugs that I didn't catch in testing slipped into the update. 

The severity of one bug with storage made the app useless for the majority of users that would update. Therefore, I worked till early in the morning to come up with fix and get another update out, hoping I could minimize the number of users affected. 


### The v0.8.x series

Over the v0.8.x series of releases, major improvements were made in every aspect of Velocity Lapse. 

Some long-standing issues, like capture lag, and a regression where turning off the screen while capturing didn't work, were fixed. 

More timestamp options, torch control, and camera white balance control were just a few of the new features added to make this series of releases standout in terms of progress.


### Automating releases

For 50+ versions, for each new release I went through the steps to build, upload, and update by hand. Needless to say, this was tedious and took time away from actual development.

[Fastlane](https://fastlane.tools/) was an obvious choice for automating building and deployment. Implementing the script was very straightforward and saved me at least 10 minutes each release.


### Hacker Noon startup of the year results

Late January, I received an email from Hackernoon saying that Velocity Lapse won the Startup of the Year 2023 in Ava, MO.

Velocity Lapse received 42 votes total, but it was also the *only* nominated startup in Ava, MO. Does that count?

Well, it seems that it did. I was pleasantly surprised to read that they were giving me the prizes for winning Startup of the Year 2023 in Ava, MO. 

The prizes for winning were an NFT award, a Tech Company NewsPage on Hackernoon, and .Tech Domain for life. The tech domain excited me the most.

For those that want to see it, here's the [Tech Company NewsPage for Velocity Lapse](https://hackernoon.com/company/velocitylapse).

So, thank you Hackernoon, .Tech domains, and all those that voted for Velocity Lapse.


### Reflecting on releasing

At this point (the time of this writing), I'm glad that I've waited to fully launch Velocity Lapse into stable. It has given me time to iron out some major issues and fill in some of the missing feature gaps.

However, in early 2024, something that had been in the back of my mind for a while came to my attention. Although Velocity Lapse is on the Open Testing (beta) channel, many users treat it as stable.

I also realized that having thousands of active users updating the app from the "bleeding edge" of development isn't the best idea. While Velocity Lapse *is* much more stable now than ever, its not without issues.

My habit was to roll out at 100% when deploying updates to make sure bug fixes get to everyone. However, because it hadn't been widely tested yet, an update could break things for existing users.

Ideally, there should be stable releases for those that want the most stability and betas for those that want to opt-in to testing. 

It probably isn't fair to users, especially that have purchased Pro, for every update to potentially break. Although it has been my commitment to provide support and try to resolve every instance of breaking, I hope that I have not failed in my attempts to do so.

Which leads me to a good question...


### Are we there yet?

During the past year, I had come across the idea of building a MLP rather than an MVP.

- **MVP** stands for a Minimum *Viable* Project
- **MLP** stands for a Minimum *Lovable* Project

I think there is a good point in that. We should seek to build projects to a minimal point at which they are not just useful but truly provide a great user experience.

Although Velocity Lapse is certainly past an MVP, has it reached MLP state yet? 

To reiterate, I don't regret holding off releasing fully until now. However, all things considered, its looking favorable for releasing sometime in the near future.

Releasing something is a huge step. It always is. It's not going to be perfect, but it's a necessary step to continue the next part of the journey.


### Why I'm sharing the journey—with mistakes

If you've made it this far in reading (5 posts!), you may have been wondering a few things:

*"Why a journey?"*

The journey has to do with going from idea to launching a fully functional time-lapse app for Android. It has been quite a journey of learning and growth for me, at the very least.

Part of the reason I'm writing this dev-log is to be an inspiration to others to show the ups and the downs, the failures and successes, the struggle and the reality of building a complex app yourself (also known as indie app development). It certainly hasn't been easy.

I think of what someone once said: 

> "Nothing ever comes to one, that is worth having, except as a result of hard work."

While it is true that one needs to work in order to see results, there are many things that you cannot control. And so I credit any success of Velocity Lapse to our Heavenly Father's grace and the support of family, friends, and users. To have the idea, the time, and abilities to be able to learn, experiment, and work on Velocity Lapse for the past year and a half so far has been a blessing.


### The journey continues

Thank you for reading. I hope you've enjoyed this post and have gained something from this journey so far. I know I sure have! 

If you have a suggestion, a comment, or advice, relating either to the app or this post, I'd love to hear what you have to share either in the comments below or via [email](mailto:hi@noahrahm.com). 

**Read the next part of the journey in [part 6](/posts/journey-behind-velocity-lapse-part-6/) of this series.**

----

*A big thanks to numerous individuals for their support and advice, making this journey possible. Special thanks to [@sundrycode](https://github.com/sundrycode) for which I am grateful for his help developing the Android native side of the app and taking part in testing. And Yahweh, our Heavenly Father, from whom all knowledge and every good thing comes.*
