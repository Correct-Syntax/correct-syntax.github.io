---
title: "The Journey Behind Velocity Lapse Part 4"
date: '2023-06-08'
draft: false
image: "/posts/journey-behind-velocity-lapse-4/the-journey-behind-velocity-lapse-part-4-header.webp"
description: "The fourth in a series of 'devlog' posts of my journey creating Velocity Lapse, a time-lapse app for Android. In this post, I share app improvements, continued growth, one year of Velocity Lapse, and more."
intro: In this post, I share app improvements, continued growth, one year of Velocity Lapse, and more.
tags: ['devlog']
type: "post"
---

You can read the previous posts, [Part 1](/posts/journey-behind-velocity-lapse-part-1/), [Part 2](/posts/journey-behind-velocity-lapse-part-2/), and [Part 3](/posts/journey-behind-velocity-lapse-part-3/) to get context of my journey creating [Velocity Lapse](https://velocitylapse.com) up to this point. 

If you have any comments or suggestions, feel free to leave a comment below.


### Continued progress

Starting in 2023, I decided to be more intentional when I work on Velocity Lapse to avoid burnout. 


#### Slower pace

Obviously, I couldn't continue at the same pace that I had during the first 6 months of initial development. I also couldn't justify spending more time on it than a set reasonable amount per week. It also happened that I had other big projects for work come my way. 

And so, I slowed down the pace of development. 


#### Flurry Analytics

Ultimately, I decided that it doesn't benefit the users for me to *not* have the information I need to improve the app and fix crashes. When it comes down to privacy vs. being able to fix issues quicker, I think most users would choose the latter. So I added Flurry analytics to the app. 


### Reviewing launch dates

You may be wondering, "Have I forgotten about the full release? When will that happen?" 


#### Not yet stable enough

Well, at this point, I didn't believe it was ready for an out-of-beta release.

For one thing, I had noticed that the user perceived crash rate was around 6-7%, which was over the Google Play maximum threshold. 

Most of the issues were crashes during export. Not a great thing to see.

In short: Velocity Lapse just wasn't up to production quality yet. I didn't feel right launching to production with that much instability.


#### Unrealistic projections

Although I had projected an unrealistic launch date for somewhere around the end of Roman "January", things were not favorable for that deadline. 

I felt more confident setting the release date to the 7th of Roman "March", but that did not end up happening. Even my thought that the app would be ready for full release by Spring fell through. 

Part of this is that the "MVP" feature list fell prey to "scope creep", and I underestimated the amount of time involved to implement some of the features and work through the bugs. This was a good thing, though, since it gave me more time to "flesh out" the app.


### Working on the features and fixes

Early Roman February, I zeroed in on the features and fixes that were most necessary for a good user experience, working on them one by one.

#### Camera re-write

I began to work on creating my own custom camera package to fix some of the issues with the camera and add features like the ability to capture with the screen off, multi-lense support, and manual white balance control.

I dove into Kotlin and the Camera2 API to understand it better. Starting small, I first created a basic camera as a native Kotlin project to work out the kinks of the Camera2 API. (As of the time of this writing, this is still in the works.)


#### Upgrading to Flutter 3.7

Upgrading to Flutter 3.7 only required a few lines of deprecated code to be changed, which was nice as I didn't need anything extra to work on.


### A silly issue resolved

One of the export issues ended up being the result of a single-character typo. Once I corrected that, 4k export worked smoothly. To put it lightly, I was overjoyed and a little upset that such a small mistake caused so much problems.

However, that didn't solve every issue, as I discovered that export crashed with 720p and 1080p with certain bitrates, somewhat randomly. I later mostly resolved this.


### Updating the price of PRO

On Roman Feb. 5th, I raised the in-app purchase of Velocity Lapse PRO to $5.99. This turned out to be a very good decision. The app was indeed worth more than the previous $3.99, based on user feedback. Plus, it allowed me to invest in a test device to further improve Velocity Lapse.


### A new test device

Until this point, I had to rely on using friends' devices to test features that were limited to certain devices, such as 4K. However, relying on bits of time with someone else's device was not reliable or optimal. 

So I decided to look for a phone to buy which supports 4K video so I could test the full functionality of Velocity Lapse myself. Thankfully, I had made enough money from the in-app purchases at this point to reinvest.


#### My experience ordering from Back Market 

A friend had mentioned Back Market as a place to buy refurbished electronics, so I took a look to see what they had.

##### Phone requirements

My requirements for the test device were:

- **4K video support** so I could test 4K video.
- **A relatively new model** as I didn't want it to be too outdated for testing.
- **3.3mm headphone jack** so that I could hook up an external mic for recording videos.

##### My purchase from Back Market

After looking around to see what phone model would suit my needs, I settled for a Samsung Galaxy A53 phone, which has 4K video support, and listed the other requirements in the Back Market description. 

The one I chose from Back Market was a "Good" condition 128GB 5G Samsung Galaxy A53 tracfone phone.

My initial perception of Back Market wasn't the best. I was wary of buying from Back Market as some people online said it was a scam and I hadn't bought refurbished before. I also didn't like how difficult it seemed to contact them. However, in the end, I decided to go for it.

##### Not as listed

Once I received the phone, I set it up and began using it to test. However, I didn't realize until a day or two later that there was no 3.3mm headphone jack that was listed on Back Market (and still is at the time of this writing).

I opened a support request (which was a very confusing process), and they eventually said, *"It appears that it was a listing error as in fact, this model does not contain 3.5mm jack for headphones."*

I decided to keep the phone since I didn't have the time to deal with the hassle of returning it and re-purchasing another model.

However, at the time of this writing, I looked at their listing for the A53 (the same as the one I purchased) and it still lists the 3.3mm headphone jack. I thought they would have removed the false information by now. So, I contacted them again about it. Hopefully, they fix the listing.

##### Conclusion on the phone

I haven't had any issues with the phone itself so far. Overall, ordering from Back Market was an OK experience. I'm not sure that I would buy from them again, though.


### Thoughts on negative software reviews

Having received a few rather unfair reviews over the past year, I thought I would share my thoughts on negative reviews.

#### Please, no hit-and-run reviews

If you use software long enough, you will likely be inclined to write a bad review. I've done it myself more than I would have liked to. Problems *will* occur. Issues *will* arise. It's inevitable and unavoidable in software. But *please* don't be the user who does a "hit and run".

Probably *the most frustrating* reviews, in my opinion, are those that say a few negative words (sometimes using profanity) without explaining the issues, and then leave no way for the developer to follow up with them. These individuals either give a fake email or delete the review so you can't respond to their comments.

Unfortunately for the developer, it does no good because no actionable feedback is given, and they cannot ask for any either. They are left wondering, "okay, so what exactly is the problem?" It could be thousands of things.

Ultimately, these kinds of "reviews" don't do much good, other than to vent feelings and/or frustration because they leave no way to potentially solve the issue.

Thankfully, I have only received a few of these myself thus far, but it isn't a nice feeling.

So, please be the user who gives a review with specific, actionable criticism on what should be improved. Constructive criticism, even if it's harsh, can be good. Hit and run negativity is not.


### Updating the website (for real)

I updated the website yet again. This time I went through the hassle and took the time to write proper copy for the homepage, explaining the benefits of the app. Honestly, it wasn't that hard since, at this point, the app had many nice features and there was user feedback to back it up.

Multiple people had commented that Velocity Lapse was "no doubt" the best time-lapse app for Android. I didn't think it was appropriate to put that on the website...just yet, at least. :)

### v0.3 and on to v0.4

To close off the 0.3.x series, I added crash reporting and implemented multi-select and delete for the editor.

For the 0.4.x series of releases, I aimed to focus on making quality-of-life improvements and fixing bugs.


### Prioritizing of feature requests and fixes

Sometimes, I would get flooded with feature requests, and it started to get overwhelming. So, I adopted a methodology of prioritizing them based on:

**1)** Fixes that would otherwise cause a bad experience for **most users**. 

**2)** Features that would improve the experience of **the most users**. 

Basically, "high-impact" requests. Oftentimes, that means working on something else in order to fix or add something, but at least it is a little less overwhelming.


### Not really MVP anymore

As of the time of this writing, I don't think the app is really an MVP anymore. I made a second pass through most of the app's views and functionality, rewriting and redesigning them with the feedback I've gathered over the last year. But that's OK.

Ultimately, "Ideas are cheap: execution is everything". So, having something implemented in the app is better than the idea in my head. At least then I know if it's working out or not.

{{< figure src="/posts/journey-behind-velocity-lapse-4/v045+38-app-screenshots.jpg" alt="Screenshots of Velocity Lapse v0.5.0" caption="" >}}


### Updating the price of PRO

On May 17th, 2023, I decided to raise the price of Velocity Lapse PRO to $7.99. At this point, the app was beginning to be more fleshed out and included saving to an SD card as a PRO feature. 


### Flutter 3.10

Upgrading to Flutter 3.10 was very straightforward. Flutter and Dart have been amazing to work with. Although I've run into a few areas that are rough around the edges, overall, I couldn't be happier with the developer experience building an app with Flutter.


### Hacker Noon startup of the year nomination

At the end of Roman May, I was greeted with an email from Hacker Noon that Velocity Lapse had been nominated for Startup of the Year 2023 Ava, MO. This was a nice surprise and awfully nice of someone to do. Although it was just a nomination, the fact that Hacker Noon thought Velocity Lapse was good enough to accept it, was a pretty neat feeling. So, thanks to whoever nominated Velocity Lapse.

{{< figure src="/posts/journey-behind-velocity-lapse-4/hn-nomination-instagram-post.jpg" alt="Hacker Noon startup of the year 2023 nomination" caption="I posted Velocity Lapse's Hacker Noon startup of the year 2023 nomination on Instagram" >}}

By the way, if it's still 2023 when you're reading this and you'd like to vote for Velocity Lapse, you can do so [here](https://hackernoon.com/startups/north-america/north-america-ava-mo-usa). Thanks!


### Big releases

Leading up to the 1-year anniversary of Velocity Lapse, I worked towards the goal of finishing off the leftover "MVP" features, adding the most requested features, and re-designing the app to be more presentable and easier to use.

#### v0.4.5+38

{{< figure src="/posts/journey-behind-velocity-lapse-4/0-4-5-releases-notes.jpg" alt="Screenshot of the v0.4.5+38 release notes" caption="" >}}

Released the first week of Roman June, v0.4.5+38 was a huge release with tons of interface improvements and additions, as well as the new editor playback feature.

#### v0.5.0+40 1st year anniversary release

Throughout the past year, the single most-requested feature was the ability to capture time-lapses with the screen shut off. Initially, I had a difficult time working out how to do it with Android's security and battery limitations, but I was pleased when I was able to find a solution that worked well, just in time for the v0.5.0 1st year anniversary release.

It seemed like a fitting way to say "thank you" to all the users who shared feedback to make the app what it is.

### 1st year anniversary of Velocity Lapse

On 6/7/2023 I did a [livestream event](https://youtube.com/live/ASSWkkVYWJg?feature=share) on YouTube, sharing a presentation of some of the background behind Velocity Lapse, the v0.5.0 features, and future plans. 

Due to announcing it only the night before, practically noone knew about it. This was probably a good thing since it was my first live stream. Even though I knew there probably wouldn't be anyone actually watching it live, I still wanted to do it to gain experience. 

Overall, it went fairly well with only a few technical glitches. Certainly not a perfect presentation (or high quality audio). 

I can see that I need to work on not saying "so" so much (no pun intended). I also probably didn't need to share some of the more technical details, which would bore most people. Well, now I know for next time.


### Looking back on the past year

Over the past year of development, I've learned a lot about entrepreneurship, app development, and marketing. I truly feel blessed that I've achieved a certain level of "success" already. (Success to me is impacting other people's lives in a positive way, and showing them the love of Yahushua, our Savior, if the opportunity arises).

I've also been privileged to see glimpses of the impact of Velocity Lapse in the lives of others. From someone capturing time-lapses of their art to creating a time-lapse to document their house remodel to a time-lapse filmmaker capturing the beauty of creation. It is a bit mind-boggling that people, literally "on the other side of the world", use the app.

#### Statistics

For the data/stats people around, I imagine you've been holding your breath to hear the stats. Well, here they are.

**Google Play**

- Total downloads since first public on Google Play (since Aug. 2022): **21,200+**
- Total current installs: **4,700+**

**Development**

- Amount of individually logged code changes (commits): **780**
- Number of closed issues: **85**
- Development time: **A lot. ;)**

**Revenue**

- Gross revenue since I added Velocity Lapse PRO (since Oct. 2022): **~$700**

*Note: I'm not giving exact numbers and rounding them to an even amount.*

#### Conclusion on the past year

Making even a decent time-lapse app takes a lot of time, effort, and dedication. 

Focusing on creating a "great app" seems to make marketing a bit easier. Thus far, I haven't done much actual promotion, but organic Google Play searches and word-of-mouth are the best marketing I could ask for.

Although it has yet to generate enough revenue to make it worth my time and headaches from a business perspective, I am blessed to be able to continue to work on it with other motivations. 

1. **1)** To help others
2. **2)** I want the app for my own use 
3. **3)** I get some enjoyment out of the process of creating the app

I wouldn't mind working on Velocity Lapse more if it became an actual, sustainable business. Probably not a realistic expectation, but it is a possibility, Yahweh-willing.

I guess we'll see how the next year unfolds.


### A look forward

My goals for the coming months are:

- Get Velocity Lapse stable and ready for the full release.
- Re-design and improve the Timelapse and Manual capture views.
- (Hopefully) complete a full re-write of the camera code.
- Talk to some people in the time-lapse and mobile time-lapse niche and see what they think of Velocity Lapse.
- Launch into production. 
- Once launched, promote it on Product Hunt.
- And go from there.

Obviously, you can see how well *my* plans have come to pass thus far, so I'm going to say "Yahweh-willing" to all of this.

### The journey continues

Thank you for reading. I hope you've enjoyed this post and have gained something from this journey so far. I know I have. 

If you have a suggestion, a comment, or advice, relating either to the app or this post, I'd love to hear what you have to share either in the comments below or via [email](mailto:hi@noahrahm.com). 

**Read the next part of the journey in [part 5](/posts/journey-behind-velocity-lapse-part-5/) of this series.**

----

*A big thanks to numerous individuals for their support and advice, making this journey possible. Special thanks to [@sundrycode](https://github.com/sundrycode) for which I am grateful for his help developing the Android native side of the app and taking part in testing. And Yahweh, our Heavenly Father, from whom all knowledge and every good thing comes.*