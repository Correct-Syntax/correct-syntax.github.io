---
title: "The Journey Behind Velocity Lapse - Part 1"
date: "2022-08-08"
draft: false
image: "/posts/journey-behind-velocity-lapse-1/journey-behind-velocity-lapse-part-1-header.jpg"
description: "This is the start of a series of 'devlog' posts of my personal journey and learning process in creating an app called Velocity Lapse, from planning to launch and beyond."
---


### Intro

I've been working on a new side-project for the last few months. It's a new time lapse app for Android called [Velocity Lapse](https://velocitylapse.com).

This post is the start of a series of dev-log posts I'm planning to write of my personal journey and learning process of creating Velocity Lapse. You'll see glimpses of the steps of planning, UI design, development, launch, and marketing -some of which is the first time I have done so for a mobile app. 

Though I am not new to design or development, I'll mention that my only prior experience with *Android app* development are my contributions to [Bible Notify](https://biblenotify.github.io) and some design-related work for another app. Therefore, app development is still a new area for me. Above that, this is also the first time I have directly monitized one of *my own* software projects as I usually go open-source for most non-client projects.

That is to say, if you're more experienced in app development or the business side of things (or even if you not) and you have a suggestion, a comment or some advice, [I'd love to hear](mailto:hi@noahrahm.com) what you have to share. 


### The app idea

Every good project starts with a good, worthwhile idea.

#### Initial ideas

Initially, some ideas I thought about were:

- A very reliable writers app where you don't lose your work. (Probably sounds silly, but the existing apps, I'm told, don't quite cut it).
- A file manager that could reach the level of the discontinued "cx file explorer". 

However, while I do write some and I probably could use a file manager, I wasn't interested in those ideas enough or see enough of a need for them *personally*. 

While I think it is important to work on projects in areas you are *not* really interested in to broaden your skills, I've found that it is easier to stick with something you are passionate about.

My personal interest are in the areas of: the Bible, graphics, photography, and design -as evidenced by some of [my open source work](https://github.com/Correct-Syntax). So, I couldn't see myself developing the aforementioned ideas into apps.

#### The final idea

With a bit more brainstorming, I came up with the idea of creating a **time lapse app**. 

I have fond memories of when I was younger and would experiment with time lapse using an old tablet. My brother and I would time lapse plants growing and mushrooms appearing in our greenhouse. 

Time lapse, if you're not aware, is the process of capturing images at intervals slower than a normal video and piecing them together to produce a video that is sped-up/condensed so naturally slow movements appear much faster. The time lapse effect can be very beautiful for things like sunsets, clouds, flowers/plants, or people walking the streets.

{{< youtube pi9G6py2Hv0 >}}

*An example of a time lapse, captured and rendered with Velocity Lapse*

Again, I did some quick validation of the idea from a personal standpoint and realized it was something I could personally use. I could glorify Yahweh (our Heavenly Father) with it by showing the beauty of His Creation. 

After coming up with the idea, it was time to do some market research.


### "Make the app great"

Early on, I stumbled upon some advice from someone talking about marketing an app which really struck me. The bit of advice was **"make the app great"**. 

Maybe that sounds obvious, but it is way too easy to get the cart ahead of the horse and spend most of the effort marketing the product instead of making the product itself great.
 
Obviously, that doesn't mean no time should be spent marketing, as that is another trap to fall into. However, as a web developer and designer myself, I know how much easier it is to promote something that is "great" to start with. I also know how excited I could (personally) get about creating a website to promote it, while neglecting the product itself! You know, sort-of as a way to procrastinate...

So from then on, I decided to have had the mindset of building a user-friendly, user-centric app focused on improving time lapse on Android and *solving the paint-points* found in other apps. Like, literally making this a "great" time lapse app.

From a marketing standpoint, people buy *solutions* to their problems, not software. So, solving user pain points is the best approach that I am aware of.


### Market Research 

I conducted research on the Google Play store as well as some of the top apps on the Apple App store to get an idea of the current state of time lapse/camera apps for Android and see where the pain points were. 

As someone that has always had an interest in photography and videography, I had already used a few of the more well-known Android timelapse apps before I ever had the idea to create one. However, after reading through hundreds of reviews and creating a ton of notes, I could see some areas where the current apps were failing, where they were doing well, and what people were looking for in a time lapse app. 

I was also able to get some metrics of apps on the market via Apptopia's free report which was helpful.


### Initial planning

It's one thing to discover things that could be improved in other apps, it's totally another thing to fix them and pull off a great user experience in your own. 

So, why doesn't everyone just go out and make a timelapse app? 

It was pretty clear from the amount of notes I had taken that even a simple timelapse app has a lot of things that need to be done just right.

Two things really stood out from my notes:

- Reliability
- Flexibility

**Reliability** because who wants to go through the trouble of setting up a time lapse and waiting for the capture to complete (and for the video to render in some cases) only for the app to crash or something non-intuitive happens? No one, of course.

**Flexibility** because when you go to download an app, it should be capable of doing things in a non-limiting way and respond well under a variety of circumstances.

*Wait.* Did I unknowingly just describe a good app in general? ..I guess I have. 

Indeed, because having reliability and flexibility is an important part of making good software in general.

#### Initial UI sketches & ideas

I then drew some initial sketches and wrote notes of what I imagined the UI and workflow to be, without diving into other apps, so I could come up with some original ideas. 

Let me be honest: looking back, those sketches were a bit naive and didn't include some settings a time lapse app should have. (I guess I didn't know about time lapse as deeply as I may have thought). However, it gave me a springboard to where I could get started with my *own* take on a time lapse app, even if it was a little out of reality and missing features... 

I then opened up to installing and testing almost every app related to time lapse on Google Play over the period of the next month and a half, taking notes and reading reviews to gather what I could. I also did some looking online for independent reviews as well as some apps on the Apple App Store.

Moving to my laptop I then created a digital mock-up of the different screens (views) that the app would have. At this point, I over-complicated it in certain areas like the home screen where I was thinking everything could/should be crammed. Therefore, I did end up going back and recreating the layout a number of times to get it condensed down to a better design.

### My Choice of a Tech Stack

For the tech-savy readers (read: developers) the tech stack I chose is pretty simple:

- [Flutter](https://flutter.dev) for the UI
- Dart (because of Flutter) for the main business logic
- Java/Kotlin for any native platform code needed (on Android)

Prior to this I had never done Flutter/Dart development and only had a small bit of Java experience so this was an entirely unfamiliar tech stack to me.

#### Why Flutter/Dart?

Why not?

Real answer: Flutter looked really neat, was something I had been wanting to try for a while. It's cross-platform and isn't limited by the performance of a webview/browser engine. In addition, Flutter has hot-reload and really great tooling for Android Studio and VScode.

#### Why not React Native, etc?

I was concerned about the performance of using a js framework. Also didn't feel that using a js framework for an app that accesses so much lower-level hardware (like the camera) was a good idea.

#### Alright, why not native Java/Kotlin then?

Besides the comments above, I just haven't liked Java Android development all that much from my bits of working with it. (More just a personal preference.)

*Ironically, I ended up diving into both Java **and** Kotlin **a lot**. (What did I expect for an app that accesses so much hardware?) Thankfully, I had help from [@sundrycode](https://github.com/sundrycode) who has a lot more experience than I with Android development.*


### ~~Initial development~~ Learning Dart/Flutter

I was eager to get started with developing the app as I figured there would be a learning phase with Flutter and Dart. I was pleasantly surprised at how simple the installation and project setup was. The default Flutter project code didn't seem too far out either. 

#### The first hurdle: Android emulators

For whatever reason, however, the Android emulators kept giving me issues. The emulators wouldn't restart until after I rebooted my laptop. It ended up being a configuration problem on my end (of course..).

Later on when I needed a more realistic idea of what I was doing, I enabled USB debugging to my Android phone which helped to greatly improve my productivity and testing.

*Tip: Make sure your phone's font size is set to **Default** when testing otherwise the text scaling could be off and when you install the app on a phone with a larger screen, the UI text could be tiny.*


#### The second hurdle: Flutter constraints

Once past the emulators hurdle, I quickly learned that Flutter constraints are ***not*** like web layouts.

I kept running into the (in)famous overflow errors and ``unbounded layout constraints`` fatal errors. Needless to say, I didn't get very far until I understood how constraints and layout worked.

It is wise advice to read and understand the Flutter docs on [layout constraints](https://docs.flutter.dev/development/ui/layout/constraints) *before* starting. 

#### Learning takes time

For the first few weeks I familiarized myself with the various Flutter and Dart concepts, started to narrow in on the app design and make a tiny bit of progress on the app (which I rewrote later in a fraction of the time).

It's worthy of note that this project uses almost *every* main feature in Flutter. From native platform channels to the somewhat obscure ``RepaintBoundry`` widget, it has it all. This app was packed with a lot of Flutter and Dart things to figure out. Thus, for my first actual Flutter application this wasn't exactly the level a simple to-do app.

That is to say, at that point progress was really slow and it was more of me learning than working on the app.


### My opinion of Flutter and Dart

Fast-forward to today and I've used Flutter and Dart for ~4 months as of the writing of this post. So far my impression of Flutter and Dart is pretty good.


#### Flutter

Overall, I've enjoyed Flutter. Although I've had multiple headaches with understanding some things (read: layout constraints) initially, I welcomed the well-structured, everything-is-a-widget design and -of course- the hot-reload. 

If you're looking for a short read to help you decide whether you should use Flutter/Dart for your project, I can confirm much of what [this article](https://medium.com/lightsnap/7-things-we-learned-writing-a-camera-app-in-flutter-ad6a1debe055) states (although its a bit outdated).

#### Dart

I felt quite at home with Dart almost straightaway. It has sort of a Javascript/Java/C++ feel to it, but much more well-suited for UI code. 

It was actually the quickest I've ever picked up a programming language. Perhaps because I've worked with and learned so many programming languages previously or maybe because of its similarities to other languages. Either way, I actually enjoy working with Dart more so than most other languages I know.

##### Deeply nested code..oh no

One thing that is very apparent when you look at almost any Flutter Dart code is the amount of nesting. This can be obviously *very* overwhelming to look at and scroll through. Ideally, you keep the code under control via breaking it out into another widget, etc but oftentimes it can still be a little hairy. 

Thankfully, most modern code editors like VScode have a code folding feature allowing you to collapse function/method bodies, etc and class initializations (in our case for widgets). Until this point I hadn't used this code editor feature, but for Flutter/Dart it is really a time (and eye) saver. 


### The first milestone

After a long and hard month of work, I finally had a barely working version of the capture and some other main features in a rough, unpolished state. 

| ![App user interface](/posts/journey-behind-velocity-lapse-1/rough-version-early-ui.gif)
|:--:|
| *The early state of Velocity Lapse. Notice how much the UI has changed since then? ;)*|

It was a nice milestone, because at this point you could capture and render the time lapse to a video (given the proper knowledge, due to its rough and unpolished state).


### Simplify, simplify, simplify

Throughout the project, one thing has been constant: the gradual change of the UI towards simplification.

Originally, the UI options were a bit more complicated than they needed to be. I and some select testers tested using the app in real life situations (AKA: we went out and captured time lapses), and it was clear more refinement could be done.

A few things in the capture screen UI weren't 100% clear and I, even though I made the app, mixed up which settings I was changing more than once. (Glare from the sun and sweat on your brow can change the way you use an app). So, I redesigned the tabs to make it more clear which setting was selected and other UI tweaks.


| ![Capture screen ui](/posts/journey-behind-velocity-lapse-1/capture-screen-ui.jpeg)
|:--:|
| *The capture screen UI*|

Velocity Lapse is meant for everyday people as much as it is for serious time lapse photographers, so I decided to also cut out confusion by using plain English where possible vs. the technical terms.


### Logo design

Over the period of the three months of developing the app, I had sketched about a hundred different logo concepts, both on paper and digitally. Some others tried to sketch some ideas and spent quite a bit of time brainstorming and iterating over potential ideas as well. However, the ideas were either too generic or unrelated, too similar to another logo or just a bad design to begin with. 

| ![Logo design](/posts/journey-behind-velocity-lapse-1/logo-design-sketches.jpg)
|:--:|
| *Coming up with the Velocity Lapse logo*|

The name "Velocity Lapse" did give us some concepts to work with (which we wrote down as tangible objects), but in the end almost none of the ideas were anything we thought would accurately represent the app. The concepts we were coming up with were either too complex or too technical due to *velocity* being a bit of a technical science term.

After praying for an idea or concept to come, it really, literally did. We cannot underestimate prayer!

| ![Logo](/posts/journey-behind-velocity-lapse-1/logo-design.jpeg)
|:--:|
| *The Velocity Lapse logo*|

The concept was a camera lens with a spinning-circle shape to show a sense of motion. I did a few variations of it and may end up tweaking/changing it a bit later, but for now it works as a logo.


### Setting up a landing page

Setting up the landing page for Velocity Lapse was a nice break from developing the app. I purchased the domain name, *velocitylapse.com* and setup a landing page where visitors could join a wait list to get early access to the app. I didn't actually expect anyone to do so or even find the website since I hadn't promoted it yet, though. It was meant more as a placeholder until the app was ready for a real home page.

| ![Screenshot of landing page](/posts/journey-behind-velocity-lapse-1/landing-page.png)
|:--:|
| *The landing page "placeholder" website*|

With that out of the way, I went back to work on the app.


### Development challenges

There was quite a few technical challenges and set-backs in development.

#### H.264 encoding artifacts

One big set-back in particular had to do with the renderer which would take the captured images and convert them to an H.264 encoded .MP4 video file.

I had been finishing up the "last" bug fixes and edits before getting the minimal app of the ground and into the internal and open testing stages. However, I discovered that the exported videos had H.264 codec artifacts (banding). The artifacts, ugly bands of pink across the video, seemed to appear after the first second or two of the video. Up until this point I had only rendered out videos less than 2 seconds so I didn't realize this earlier.

This seemed to be an issue with the [jcodec](https://github.com/jcodec/jcodec) Java library that I was using as the encoder for the video export renderer. I wasn't able to produce even one video with jcodec without artifacts. Unfortunately, I hadn't noticed this sooner and so a lot of hours of work implementing the renderer with jcodec had to be thrown away.

Some options were to use:

- The native media APIs for encoding videos
- The NDK with a C++ lib to encode the videos

However, after looking at what those require, I wasn't motivated to go in either of those directions writing something from scratch myself.

Obviously, the app couldn't be released without a way to export the timelapse to video, so I needed to think of another way.

After a lot of searching, I came to a small package called [bitmap2video](https://github.com/israel-fl/bitmap2video) which looked like it might do the trick. However, since it was written in Kotlin, it would mean switching the existing code from Java to Kotlin. 

I decided to go for it and embrace it as an unexpected opportunity to learn Kotlin. 

First, I did a bunch of extensive testing to verify that it didn't produce artifacts like jcodec. I did end up having to fix some depreciated code and fix a few things to make it work, but came to the conclusion that with some more customization it would indeed work.

Thankfully, although I've never written in Kotlin before, the transition was pretty smooth with Android Studios Java to Kotlin converter, the Kotlin manual, and a bunch of online searches. The most difficult part was wrapping my head around Kotlin's coroutines, but thanks to some articles online I was able to solve the problem I was having.

The end result was a much faster, more lightweight renderer than the one written in Java with jcodec. Plus, since the Kotlin version was a smaller package which I pulled directly into the source, I could benefit from being able to make edits/fixes for Velocity Lapse's specific use case. 

So, in the end, it turned out better because of the set-back. :)

### The first pre-release (internal testing)

Finally, after 3 months of work the app was in a state that I felt could deserve a pre-release tag. I worked through the process of generating a keystore and generating the app bundle to upload to Google Play for internal testing.

In the play console, I ended up getting some warnings about sensitive permissions, which I quickly resolved by removing the unnecesary permissions from the Android manifest. Evidently, I had added permissions the app during development while testing some packages and forgot to remove them.

After that I was able to successfully release the app bundle to internal testing.

### The journey continues

Thanks for reading. I hope you've enjoyed this post and have gained something from this journey so far as I have.

If you have a suggestion, a comment or some advice, relating either to the app or this post, [I'd love to hear](mailto:hi@noahrahm.com) what you have to share. 

**You can read the next part of the journey in [part 2](/posts/journey-behind-velocity-lapse-part-2/) of this series.**

*A big thanks to numerous individuals for their support and advice, making this journey possible. Special thanks to [@sundrycode](https://github.com/sundrycode) for which I am grateful for his help developing the Android native side of the app and taking part in testing. And Yahweh, our Heavenly Father from whom all knowledge and every good thing comes.*