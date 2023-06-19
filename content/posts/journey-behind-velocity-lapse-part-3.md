---
title: "The Journey Behind Velocity Lapse (Part 3)"
date: '2023-01-08'
draft: false
image: "/posts/journey-behind-velocity-lapse-3/journey-behind-velocity-lapse-part-3-header.jpg"
description: "This is the third post in a series of 'dev-log' posts of my personal journey and learning process of creating Velocity Lapse, a time lapse app for Android."
---


### Intro

This is the third post in a series of "dev-log" posts of my personal journey and learning process of creating [Velocity Lapse](https://velocitylapse.com), a time lapse app for Android. 

You can read the previous posts, [Part 1](/posts/journey-behind-velocity-lapse-part-1/) and [Part 2](/posts/journey-behind-velocity-lapse-part-2/) to get context up to this point.


### Full rollout in open testing

Towards the end of Roman October 2022, I rolled out the app in open testing to all countries where Google Play is available. Previously, it had only been available in 27 select countries because I wanted to make sure to iron out some issues and "test the waters" so-to-speak before opening up to the whole world.


### The first sales of Velocity Lapse PRO

Roughly a week later, the very first Velocity Lapse PRO upgrade was purchased. Oct. 24th, 2022 to be exact. There were 321 total downloads and 131 active installs at that time.

Granted, it was only a few dollars after taxes and Google Play's cut, but it felt really good to have the first sale of the PRO upgrade after months of work with no ROI (besides some nice compliments). 

In the following weeks, sales happened sporadically, mostly in bunches. There was a total of 8 upgrades in the first 3 weeks of being rolled out to all countries.


### Creating the first tutorial

For a while, I had been considering making a tutorial on how to capture a starry night time lapse using Velocity Lapse on an Android phone. 

Finally, I took advantage of a night at a campground where I could capture a timelapse of the stars without a lot of light pollution. 

The timelapse itself turned out, but I made the mistake of not explaining what I was doing for the tutorial as I was setting up and capturing. Having to voice over the screencapture and time things correctly in the editing stage was a whole lot more work. 

Although I have created videos before, this was actually my first video tutorial for YouTube that I voiced-over. Even though I felt that it wasn't the best, I was motivated to finish the tutorial because by just finishing it, I knew I would learn something. 

As expected, the video didn't get a lot of reception. However, I did learn some important lessons by making the video which I can apply to future videos.


### Amazon app store

I considered submitting to the Amazon appstore to gain more visibility and to see if I can't submit an app there, even just for the experience. 

I created an Amazon developers account and began to go through the form to submit Velocity Lapse so that I could integrate amazon billing into the app. (App stores require you to upload the app bundle before you can create IAP to integrate them into your app). 

However, after uploading the bundle I found out that due to Velocity Lapse needing the camera autofocus feature, only 3 (old) Amazon devices would be supported. And, at that I would have to lower the minimum SDK version to even get that support. 

| ![Amazon device support for Velocity Lapse](/posts/journey-behind-velocity-lapse-3/amazon-appstore-app-support.jpg)
|:--:|
| *Amazon device support for Velocity Lapse*|

So, it just didn't seem worth it. At least, for now.


### Social media marketing update

I finally posted on Instagram. I thought maybe the starscape time lapse video from the tutorial would be a good first post. Got some response.

The Youtube channel continued to grow with 40K views on the starry night sky video and a couple hundred views on other videos. I continued to post new time lapse videos roughly every 2 weeks and that caused the channel to gain more subscribers and views.


### Product hunt

For quite a while now, I've eyed [Product Hunt](https://producthunt.com). I setup the information for Velocity Lapse. However, I could do much more because at this point I didn't have a good idea of when I planned to launch.


### First negative reviews

Up until this point, there was 99% positive feedback. However, there was a period where a few users submitted 2 bad 1 star reviews through the Google Play testing feedback. Naturally I expected it, just didn't know when it would come.

It appeared that it was due to a bug where the app would crash if the export button was tapped multiple times. So, I had to de bounce the export button to fix the issue. 

Or, so I thought. 

Obviously, that was *an* issue, but it was not *the* issue as I continued to recieve feedback that the export didn't work on certain devices. 


### Crash analytics?

Unfortunately, without crash analytics the only thing I had to reference was the Google Play crash reports. By default Google Play just shows that a crash happened, the device, and the exception name.

It made me consider that I may have to give in on my idea of "staying away from adding any tracking whatsoever to Velocity Lapse". This was tough, because I really wanted to have no analytics, but without it, is is harder to debug problems users are having with the app.

In the end, I decided to hold off on adding analytics and see if I couldn't just figure out the issue myself.


### Submitting to AlternativeTo.net

I submitted Velocity Lapse to [AlternativeTo.net](https://alternativeto.net), a popular place to look for alternatives to software. In the past, when I've posted other open source software projects I've worked on there, a large portion of traffic came from there. So I thought I would try posting Velocity Lapse there for more exposure.


### Updating the Google Play listing & website (yet again)

Yet again, I updated the website and the Google Play listing to better match the style I came up with while creating promo images for Product Hunt.


### More woes of the camera2 api

I have respect for every app developer that deals with camera2 and indeed timelapse app devs. *sigh*

One issue I had when previously implementing manual camera controls was with white balance. For some reason, manual white balance wouldn't switch back to auto unless ISO and shutter speed were also auto.

Thus, rather than releasing a feature that only partly worked, I just didn't include manual white balance control.


### When to make the big release into production?

I needed to make the decision of when to fully release Velocity Lapse. It is tricky because you don't want to release it before it's ready, but you also don't want to overthink it.

My thought was to release it early Spring, as the majority of people will likely want to create time lapse videos in the Spring/Summer. So, my strategy was: get the app up to speed during the winter and release somewhere early Spring.


### App marketing strategies

The balance between building a great product and marketing is difficult. On one side you want to make the product worthwhile and the best it can be but on the other hand, it's pointless unless someone knows about it. Perfecting the little details while neglected marketing is an easy thing to do.

#### 

I mentioned this in the [first post](/posts/journey-behind-velocity-lapse-part-1/) of this series, but early on when I first started designing the app, I came across something profound.

In [this video](https://www.youtube.com/watch?v=pfzxL9lXSdE) about app marketing strategies, he explains a few points which I think are worth sharing here.

The first one is, of course: **Make the app 'great'. Because a "just okay" app is hard to market.**

In order for an app to be successful, it should be something you are proud of, something you (would) use everyday. It should be a legacy, your "life's work", something you tell your grandchildren about. 

Another words, the app really *is* great.

His second point was: **Reach out to the leading experts (influencers) in your niche and get them to try your app.**

It made me think of the fact that if you don't even have the confidence to reach out to leading experts in the niche, your app may not be 'great'. Though, you only have one chance to make a good first impression so you want to make sure you actually do have a 'great' app.

The third point was to: **Build around your core audience**. 

Getting in close contact with the people that use your app everyday and getting them involved in the building of the app.

I can really say that where I have put these points into practice so far, it has paid off.


### Continued development

As I winded down the v0.2.x and moved to the v0.3.x series of open testing releases, I planned the roadmap for the next series of releases, v0.3.x and v0.4.x.

#### v0.3.x series

v0.3.0 was an update I had been planning for a while. I planned to begin implementing the edit view features like importing external images *into* an existing project, and (of course) crush some bugs that had been reported.

I rewrote and improved the whole import system, added the ability to import images into an existing project. Thankfully, I was able to fixed some bugs including a long standing bug where images with uppercase file extensions would be ignored when importing.

#### Beginning work on edit preview

I then began working on the preview for the edit view. This required the preview to update quickly when an adjustment was made, so I quickly ruled out using a temporary physical file. 

Due to my lack of experience with this side of Flutter, I went ahead and asked in the Flutter help channel about what the most optimized way of creating a real-time image preview was. 

It was suggested that I look into the Flutter ``Texture`` widget as that would give me the low-level access to get the update speed I was looking for.

**EDIT: I ended up just leaving off working on this to work on higher priority issues and features**


### User Support

One thing about selling software is the support aspect of it. From the very start, I made a real effort to respond to *every* person that submitted feedback on Velocity Lapse, whether good or bad. Many people responded that they appreciated the response which was encouraging.

However, I won't lie and say that it was easy to stay on top of it. I took the approach of "better late than never" when worst came to worst when I didn't get to responding for 2-3 weeks. :(


### Ending off 2022

All in all, the first 5 months since I first had the idea for Velocity Lapse went well.


#### App Statistics

From a statistical point of view, the app had been growing at a constant rate, gaining anywhere from 10-80 users daily on average.

As of Dec. 31st 2022, there were 914 current installs and just shy of 4K total downloads.

In the first 3 months of having the PRO upgrade, the app averaged $35 per month gross. Which, isn't too terrible in my opinion, for an app that is still in early-access and hasn't been heavily promoted yet. 

That said, if my main goal was to be making any sort of meaningful revenue from the app, thus far I would be disappointed.


#### User feedback

I received a good amount of positive feedback. It seemed that the negative feedback came as a result of app crashes, bugs, etc which is totally understandable. I was thankful for everyone that submitted feedback, whether positive or negative, as it helped to gauge the app progress, etc.

#### Personal goals

Thus far, Velocity Lapse is very much usable for creating time lapses. However, I still have a few personal feature needs that I believe need to be implemented. The camera and editor features, motion blur, and star trails are some big ones that I feel are missing. I hope that I can find the time to bring these features into the app in the coming months and years.

Overall, going from not knowing Flutter and not much about Android development, to having an app in beta bringing some ROI and good feedback, I feel that I have learned a lot. It most certainly has been a journey of overcoming challenges, both technical and physical. 


### The journey continues

Thanks for reading. I hope you've enjoyed this post and have gained something from this journey so far. I know I have. 

If you have a suggestion, a comment or some advice, relating either to the app or this post, I'd love to hear what you have to share either in the comments below or via [email](mailto:hi@noahrahm.com). 

**You can read the next part of the journey in [part 4](/posts/journey-behind-velocity-lapse-part-4/) of this series.**

----

*A big thanks to numerous individuals for their support and advice, making this journey possible. Special thanks to [@sundrycode](https://github.com/sundrycode) for which I am grateful for his help developing the Android native side of the app and taking part in testing. And Yahweh, our Heavenly Father from whom all knowledge and every good thing comes.*