---
title: "The Journey Behind Velocity Lapse - Part 2"
date: '2022-10-26'
draft: false
image: "/posts/journey-behind-velocity-lapse-2/journey-behind-velocity-lapse-part-2-header.jpg"
summary: "This is the second post in a series of 'dev-log' posts of my personal journey and learning process of creating Velocity Lapse, a time lapse app for Android."
---


### Intro

This is the second post in a series of "dev-log" posts of my personal journey and learning process of creating [Velocity Lapse](https://velocitylapse.com), a powerful time lapse app for Android. 

Be sure to read [Part 1](/posts/journey-behind-velocity-lapse-part-1/), where I shared the my experience up to the first internal testing release.


### More technical setbacks

If I've made it seem like the journey was easy with only a few snags (like the encoder issue) in the previous post, then let me reassure you that it wasn't easy in this post. 

#### Why I am sharing technical issues

It would take a while to relate to you all of the technical challenges I encountered and I don't want to make this into a section of every problem I've had. However, I think it's worth briefly mentioning some of them in hopes that someone can learn and benefit from my mistakes and research.

#### Flutter camera bug

An "easier" issue to fix related to a bug in the Flutter camera package where the maximum capture resolution was determined by the video capture resolution supported by the device hardware. Thankfully there was some patch code available which I adapted to allow capturing 4K (if supported) and the full camera sensor resolution.

#### Another encoder issue

As it would be though, fixing that issue led to uncovering another problem. 

When exporting a video with a resolution higher than the supported video capture resolution, the encoder would crash with a null pointer exception. So, more issues with the encoder but this time relating to the video encoding resolution. 

Thankfully, [@sundrycode](https://github.com/sundrycode) graciously helped out with his Android development experience.

After we both did a ridiculous amount of online searching going down multiple rabbit trails and to old and obscure websites on the MediaCodec API, we came to a conclusion that seems logical.

It appears that the device encoding resolution implementation for the MediaCodec api is determined by the supported *video capture* resolution. Therefore, encoding a 4K video isn't going to be supported on a device that only supports HD video. For most new but cheap Android phones, the video capture resolution is 1080p HD (1920x1080).

Indeed it is a hunch, but it seems to be confirmable. If you know for certain please [let me know](mailto:hi@noahrahm.com).


### First open testing release

Getting to the point where I figured the app was stable enough for open testing (also known as "early access") took 4 months of hard work. Finally, I couldn't hold off any longer.

In order to submit Velocity Lapse to Google Play for review, I went through the process of writing a description, creating a feature image, and capturing and editing screenshots for the app store page.

I wrote the description highlighing the main features and the fact that Velocity Lapse captures images rather than capturing straight to video. It wasn't a great description but it did the job.


| ![Google Play listing](/posts/journey-behind-velocity-lapse-2/google-play-listing-1.jpeg)
|:--:|
| *The first Google Play listing*|

After submitting, I didn't waste time waiting around for the review to go through. The release was another milestone in my journey, but the app still needed a lot of work before it could really be a great app and something someone would pay for. 


### Why I won't use stock images to promote the app

One thing to note is that I've committed to only displaying images and screenshots on the listing and website that were **actually** captured using Velocity Lapse on a mobile device. 

What do I mean? Well, I won't be showcasing Velocity Lapse using stock photography or other images *not* captured with the Velocity Lapse (unless it is clear that the images are externally captured). 

You may be surprised, but sadly it is not uncommon for even well-known apps - even some [mobile camera apps](https://www.youtube.com/watch?v=VLKvg8a6g4E) - to use stock photography for the app store listing. 

Now, for some apps I think that it is fine to use stock photography, such as photo editors, because there is nothing to say what camera took the image. However, for an app where the camera functionality is a big feature (or, *gasp* -the main feature!), the best way to showcase the app is by displaying images that it captured. Anything else would seem to be deceptive and/or misleading in my mind.

Although using images that were actually captured with the app can mean that there isn't as much variety and/or it doesn't look as good, it does give the viewer an accurate idea of what to expect and thus keeps their expectations in line with reality.


### Promotion and my social media strategy

One idea which [@sundrycode](https://github.com/sundrycode) and a few others suggested, was to post timelapse videos captured with Velocity Lapse to inspire others to create their own. The thought was that maybe if the videos got popular enough, they would promote the app on their own. They also serve as real-life examples of what can be created with the app.

So, I created a [Youtube channel](https://www.youtube.com/channel/UCenuOeODNjdVohMTvKv15fQ) and began posting time lapse videos there. I also created an [Instagram account](https://www.instagram.com/velocitylapseapp/) but it sat there unused for a few months, until I got around to making content to post there. 

In addition, I did quite a bit of posting on Reddit, replying to posts looking for a time lapse app. While it certainly is self-promotion, since the person was asking for time lapse apps and those viewing the post were likely looking for one too, it was a good way to get some first users and help them find something they can use to reliably create time lapse videos.

All in all, this was a pretty good strategy looking back at the successes in both avenues.


### User testing and UI refactoring

After yet more user testing and feedback, I began to refine the UI and options. A refactoring of the UI which at first primarily centered around the home view.

The most useful method of conducting user testing that I have found is physically watching the test users use the app. I mean practically looking over their shoulder and writing down notes about their interaction. Getting face to face feedback, both positive and negative and seeing how people use the app in real life crushes some dreamy, false notions you can have as a developer/designer about how the app should work.

Getting this feedback at this point brought up some good ideas for improvements as well as confirmed some ideas that I was personally hesitant to implement (I'll admit).

It was without doubt a popular request to add a gallery to view exported timelapse videos so I added it to the near future roadmap. I also moved the main call to action buttons to a more thumb friendly position and polished up various parts of the UI.


#### Introducing the bottom nagivation bar

In order to better organize the new features such as importing a sequence of images as a project, I introduced a bottom navigation bar to divide Velocity Lapse's main functions into understandable categories. This proved to be a very good decision as later I was able to just drop in the Manual Capture mode once it was implemented.

| ![Bottom navigation](/posts/journey-behind-velocity-lapse-2/bottom-navigation-bar.jpg)
|:--:|
| *Introducing the bottom tab navigation*|


### The second open testing release

With the new import images as a project feature and the UI refactor, I was eager to publish and roll out another release.

Thankfully, by the time I had the release ready a week later, the Google Play app review went through and Velocity Lapse was finally published for public, early access.


### Third open testing release

The third open testing release included the new tab navigation and import images as project feature which I submitted the same day.

I now felt like promoting a bit so I updated the website and replied to a few questions asking for time lapse app suggestions on Reddit. It turned out to be a good thing as over the next few months, a couple people found Velocity Lapse through my comment and gave positive feedback.


### Focus on the things users care about

Listening and acting upon user feedback can be hard. For Velocity Lapse, the feedback was mainly concerning missing features - some of which I would rather procrastinate than implement. ;)

As a designer and developer that also has a tendency to be a pefectionist, it can be very easy to prioritize the things I care about (e.g: a clean, sleek UI and well-written code) rather than the things users actually care about (like feature X or Y). Working on "fun" parts that I like is great, but if in the end  users don't ever need it, then it is a waste of time.

I was reminded that tweaking the UI is great, but ultimately most users will accept the way that it is. They *will* care whether a certain feature is available and works. So, focus on features that meet the needs of the user.


### Adding Manual Capture mode

The capture view with the interval setting and other features was great, however it didn't fulfill one required use-case that I had in mind from the beginning: time lapse captures over extended periods of time. Or, to put it differently: catering to those who would rather not leave their cellphone on location while it is capturing.

| ![Manual capture view](/posts/journey-behind-velocity-lapse-2/manual-capture-view.jpg)
|:--:|
| *The manual capture view in v0.0.4+6*|

In order to cover all bases, I added a Manual Capture mode which is a camera screen with an overlay of the previous image and an indicator telling when the last image was captured. This was simple enough to do, but it still took time to differentiate the project UI from the normal timelapse capture mode and design and develop the special interface for it.


### First submitted feedback

After nine versions released into early access, I felt more confident about the app as it had come aways since the first version, going from a barely useable app to an app I actually wanted and enjoyed using almost everyday.

At this point, I updated the velocitylapse.com landing page to better showcase the app and allow people to download it on Google Play. Not long after, I received the first externally submitted feedback on Velocity Lapse. It included a crash report and a few suggestions on how to make the import images as projects feature more user-friendly.


### Monitizing the app

If I was creating a free app, the main work would be complete. However, because this is an app with IAPs (in-app purchases), it required the steps to integrate with Google Play billing. This turned out to be one of more challenging parts of creating Velocity Lapse.


#### The question of app monitization

There was one thing I was not confident about, and that is what features to have as in-app purchases for the PRO version. For the time being, I settled upon having the free version limited in the following ways:

**FREE VERSION**

- Limit of up to 5 projects at one time
- Export up to 1080p video
- Import images as project limited to import of 400 images

**PRO VERSION**
- Unlock unlimited projects
- Export up to 4K video (if the device supports it)
- Import images as project with unlimited number of images

This way, the free version of the app is limited in a way that all the features are usable, but there is (hopefully) enough of an incentive to upgrade to the PRO version to allow unlimited access.


#### Keeping the Sabbath day

Something that I wanted to make sure to do, is block purchasing Velocity Lapse PRO on Saturday in observance of the Sabbath day. 

I believe in keeping the seventh day Sabbath (Roman Saturday) as described in the Bible. The Sabbath is a set-apart day of rest and so no buying, selling, or trading is to be done on it (as I understand it).

I'll state here that I am **not** a part of any demonination (SDA or otherwise). My motivation for keeping the Sabbath holy is to do as Yahweh, our Heavenly Father Himself, and our Savior did: rest on the seventh day.

*"And on the seventh day Yahweh ended his work which he had made; and he rested on the seventh day from all his work which he had made. And Yahweh blessed the seventh day, and sanctified it: because that in it he had rested from all his work which Yahweh created and made." -Genesis 2:2-3*

*"If thou turn away thy foot from the sabbath, from doing thy pleasure on My holy day; and call the sabbath a delight, the holy of Yahweh, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words: Then shalt thou delight thyself in Yahweh; and I will cause thee to ride upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of Yahweh hath spoken it." -Isaiah 58:13-14*

There are many more verses in the Bible regarding the importance of keeping the seventh day Sabbath.

For some Django-based websites I worked on in the past, I had created and used a Django app called [Keep Sabbath](https://github.com/Correct-Syntax/Keep-Sabbath) which would redirect visitors, or show a banner stating that the e-commerce site was closed for the Sabbath day.

I did something similar for Velocity Lapse, so that when the day == "Saturday" in the user's location, a screen would come up letting them know that they wouldn't be able to purchase until the next day. 

The saying, *"A day of rest, a Sabbath request: please refrain from purchasing between sundown Friday and sundown Saturday."* was inspired by someone else's banner I had seen. 


#### Technical implementation

Creating the PRO upgrade screen UI itself was one of the screen I most enjoyed implementing (for whatever reason). However, implementing the IAP integration itself proved to be a lengthy process.

I decided to use [RevenueCat](https://revenuecat.com) to manage purchase validation, etc. rather than writing and maintaining my own web API to do so. Setting up a Google cloud service account and connecting it to RevenueCat for accessing the Play Store API on my behalf was a lengthy, but necessary process. 

Unfortunately, not everything in the docs for Flutter integration was as clear as I thought it should be. 

The main culprit of the problems was Dart null safety. Many articles online didn't handle null safety and the snippets in the RevenueCat docs only went so far. For that reason, I may write a post in the future on how to implement RevenueCat with Flutter and Dart null safety.

It was a struggle, but in the end I had a single in-app purchase for users to upgrade to Velocity Lapse PRO for $3.99 USD.


### Updating the Google Play listing (again)

Now that we had a pretty solid version of Velocity Lapse, I went and took updated screenshots of major screens of the app and created phone screenshots for the Google Play listing. This time, I used a different style with a faded image behind the phone and screenshot mockup as well as a horizontal screenshot to better showcase the two capture modes.

Since I had already been posting some of the timelapse videos I had captured on the official Velocity Lapse YouTube channel, I added one of the videos as the "feature video" for Google Play. In my opinion, just adding the video made the listing look a lot better than before.

| ![Updated Google Play listing](/posts/journey-behind-velocity-lapse-2/google-play-listing-2.jpeg)
|:--:|
| *Updated Google Play listing*|

### Posting on Reddit

I submitted a [Reddit post](https://www.reddit.com/r/androidapps/comments/xjve1u/velocity_lapse_create_your_own_time_lapse_videos/) to gather feedback regarding Velocity Lapse. The post recieved 700+ views in the first week. It did cause a surge of downloads and I did recieve some helpful feedback (albeit, not on Reddit itself).


### Big features, big holdups

The next tasks on the roadmap were to get 4k export and manual camera controls implemented. 

#### 4K video export

4k export to video wasn't a huge feature to implement, but since I didn't have an Android device that supported 4k, it made testing tricky. I ended up getting an hour to test on a friend's phone which I hope is enough to have caught any issues. 

If not... I'm sure users will let me know. ;) **EDIT: they did. ;)**

#### Manual camera controls

I spent two weeks working through the Android camera2 API to implement manual camera controls, ISO, shutter speed and focus distance (manual focus).

#### The woes of the camera2 API

Needless to say, working with the Android camera2 API was not easy. Something that worked on one device didn't on another, which lends to the reason it is [notorious](https://www.androidpolice.com/why-third-party-camera-apps-are-so-bad-on-android/) for fragmented support and overall a bad experience for developers, so much so that some app developers [give up on it](https://9to5google.com/2020/02/29/moment-pro-camera-app-android-exclusive/). Which, makes me feel uneasy and sort of mad.

The first time I tried to capture a night timelapse of the stars, it didn't turn out as I expected. I had been working on implementing shutter speed and ISO controls which would allow for night captures. I set the device out to capture and it seemed perfect in the camera preview. However, when came back and looked at the captured images afterwards, I realized that images were being captured as if auto exposure was still on.

Finally after two weeks of researching and testing to get manual camera controls implemented correctly, I finally got the code to a point where it worked. I tried capturing a starry night timelapse once again. I pointed the device upwards, set the shutter speed to 1 sec and the ISO to 6400, then left it to time lapse for ~2 hours. 

The result was satisfying for a first successful attempt and I was happy to use the video on the website straightaway and post it on YouTube. (You will see later that this starry night time lapse video gets popular)!

#### Some encouragement via positive feedback

Thankfully, it was now working and more users and positive feedback came as a result of my posts on Reddit which was encouraging. Nicely timed it was, as one person suggested that I add manual camera controls!


### Turning the landing page into more of a website 

I finally took some time aside to create a decent design for [the website](https://velocitylapse.com) that would showcase the app features and the timelapses that I had captured with it. My main thought with it was to inspire people to get out and create their own time lapses.

| ![Velocity Lapse website](/posts/journey-behind-velocity-lapse-2/velocity-lapse-website-10-26-22.png)
|:--:|
| *Finally, a decent website for Velocity Lapse*|

At this point, there was 97 total app downloads and 40 active installs.

### An opportunity to learn more in-depth about photography

Essentially, in the process of creating Velocity Lapse's camera features I have been working towards a manual camera app functions which is kind of interesting. 

What's nice about working on this kind of project that deals with the camera is that its enabled me (maybe 'given me a good excuse' is better wording) to spend time learning about manual camera controls in-depth, professional photography and of course, time lapse photography. Had I chosen to work on a project like a file manager, I wouldn't have probably ever taken the time to dive into photography as I have now. Needless to say, I don't regret my decision (quite the opposite). 

### An opportunity to enjoy creation

During the process of creating and testing the app I have had the opportunity to spend more time enjoying creation, namely the sky, whether it's wispy clouds or a pink and blue sunset (Yahweh, our Heavenly Father's paintbrush). I've really enjoyed it and maybe through creating this app, maybe I can compel and give more people an "excuse" to get out and enjoy it too.

{{< youtube fBrOPxkeTnw >}}
{{< youtube 36O4d31UyyE >}}

So, I encourage you to [download the app](https://play.google.com/store/apps/details?id=com.velocitylapse.velocitylapse) and go outside to capture a time lapse yourself! :)


### Starry night sky timelapse video gets popular

Speaking of enjoying creation, it seemed that people enjoyed the starscape time lapse I posted on the Velocity Lapse YouTube channel. The video received 1K views and 11 likes in the first week, **4.7K views and 46 likes in the first 3 weeks**, and has 6K views and 56 likes as of this writing.

| ![Starry night sky timelapse video analytics](/posts/journey-behind-velocity-lapse-2/starry-night-sky-analytics-10-2022.jpg)
|:--:|
| *A glance at the stats for the starry night sky time lapse video on Youtube as of 10/26/22*|


Needless to say, this was way, far better than any other video I posted on any channel. Granted, it was a short video, but it was interesting and new to me especially since other videos on the Velocity Lapse channel had fewer than 100 views (as of this writing).

{{< youtube BxRHqPGGO_g >}}
*The starry night time lapse video*

The app downloads tripled and some feedback as well as support queries came my way during this time. I assume is due to the video receiving so much attention.

Oddly enough, this happened while I was away on vacation for 3 weeks. Go figure. ;)


### The journey continues

Thanks for reading. I hope you've enjoyed this post and have gained something from this journey so far as I have. **Stay tuned for part 3 of this series.**

If you have a suggestion, a comment or some advice, relating either to the app or this post, [I'd love to hear](mailto:hi@noahrahm.com) what you have to share. 

*A big thanks to numerous individuals for their support and advice, making this journey possible. Special thanks to [@sundrycode](https://github.com/sundrycode) for which I am grateful for his help developing the Android native side of the app and taking part in testing. And Yahweh, our Heavenly Father from whom all knowledge and every good thing comes.*