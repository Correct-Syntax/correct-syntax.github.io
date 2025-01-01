---
title: "The Journey Behind Velocity Lapse Part 6"
date: "2024-12-05"
draft: false
image: "/posts/journey-behind-velocity-lapse-6/the-journey-behind-velocity-lapse-part-6-header.webp"
description: "The sixth in a series of 'devlog' posts of my journey creating Velocity Lapse, a time-lapse app for Android. In this post, I I share working towards the v1.0 release and the launch."
intro: "In this post, I share working towards the v1.0 release and the launch."
tags: ["devlog"]
type: "post"
---

Welcome to the 6th post a series of devlog style posts sharing my journey creating [Velocity Lapse](https://velocitylapse.com), a time-lapse app for Android. 

You can read the previous posts to get context up to this point: [Part 1](/posts/journey-behind-velocity-lapse-part-1/), [Part 2](/posts/journey-behind-velocity-lapse-part-2/), [Part 3](/posts/journey-behind-velocity-lapse-part-3/), [Part 4](/posts/journey-behind-velocity-lapse-part-4/), and [Part 5](/posts/journey-behind-velocity-lapse-part-5/).

If you have any comments or suggestions, feel free to leave a comment below.


### The v0.9.x series

I'm not going to give all the details on every release in the v0.9.x series because that would be too much (and perhaps quite boring). Instead, I'll just mention that this stage of development fixed many things and added many features that made Velocity Lapse feature-complete and stable in preparation for the v1.0 launch later in the year.

Just a few of the highlights included localization, improvements to the manual camera controls, video effects, capture scheduling, 8K image capture and video export, and support for three different video codecs.


### Localization 

Although I had not originally planned to prioritize translations and localizations, things fell into place where I was able to get the app backend setup without too much issue. I then put it out on social media and the forum requesting volunteers to add translations to Velocity Lapse.

Special thanks to [@thomas_tesar](https://www.instagram.com/thomas_tesar/) for the Czech translation and [@dzartsiomi](https://www.instagram.com/dzartsiomi/) for the Russian translation.

On the technical side, I just used standard .ARB files which Flutter uses natively for localization for the strings. So that the translators would have a nice interface, I decided to use [Loco](https://localise.biz) for managing the translations. Both of these worked out together well.


### Video Effects 

As I had mentioned in a previous post, effects like motion blur and star trails are something I've personally wanted in Velocity Lapse. With the video export now working smooth, I decided to tackle these effects.

Using OpenCV and a bit of C++ through the Android NDK I was able to get satisfactory motion blur and light trails effects.


### Preparing for the v1.0 release.

Finally, based on feedback from users and my own look at the state of Velocity Lapse, I knew that it was time to exit beta and launch. That isn't to say that everything was absolutely perfect and ready to go (it won't likely ever get to that point!). 

At the start of November, I announced the launch date on 11/4/2024 via Instagram and the email list. 

Speaking of which, one thing I think I could have done better was growing the email list. :)


### User guide 

With v1.0 on the horizon, I worked to create the user guide which would give an overview of the functionality and settings of Velocity Lapse. At first it was just a page on the main website, but I later moved it to its own subdomain at [guide.velocitylapse.com](https://guide.velocitylapse.com).


### An updated logo

After two and a half years of development in early access beta, I knew that the current logo had served it's purpose as a stand in logo. For whatever reason, I always had it in the back of my mind to find the time before the v1.0 launch to refine the concept to better reflect the state of Velocity Lapse. Here and there I would play with different designs, but hadn't come up with anything much. Now that time had come.

I simplified the logo both in terms of colors and shapes, while still keeping with the same theme and concept. The resulting logo was something I was much happier with than the prior design.


### Saying goodbye to the video gallery

A few weeks before the v1.0 launch I removed video gallery tab. I also changed the functionality so that videos played in the device video player app. 

You might remember that in a previous post I had mentioned how the video gallery was a popular feature request. Well, based on looking at the analytics it appeared that not very many people actually used the built-in video gallery. 

That fact, combined with my realization that removing it would saved me a lot of code burden, made it a clear decision. In my analysis, it turned out that by eliminating just the video gallery I was able to remove a bunch of dependencies (some of which were buggy) and delete a lot of code.

No doubt it felt wasteful to add and maintain a feature for almost two years then remove it just before the v1.0 release. However, it was better to drop the burden sooner than later so I could focus on other parts of the app.


### The week before the v1.0 launch

The week leading up to the launch day, I was *busy* doing my part to make the launch a success.

I redesigned the website, created promotional images, and scheduled to launch on [Product Hunt](https://www.producthunt.com/products/velocity-lapse).

With a couple last-minute bug fixes and tests, I uploaded the appbundle to the Google Play console a few days before the launch to give ample time for Google Play to review it.


### Launch day: Nov. 17th, 2024

At 12:01a.m the v1.0 release of Velocity Lapse went live on Google Play. The [Product Hunt launch](https://www.producthunt.com/posts/velocity-lapse) was scheduled to go live at 12:01a.m PST (2:01a.m my time). I then went to sleep because I wasn't going to stay up all night. :)

A few hours later I awoke to some comments on Product Hunt about the launch. 

Since I had written up a plan and did a lot of preparation for the v1.0 launch, it was a matter of just following through. A post on Instagram, YouTube, Reddit and the forum was the majority of the promotion that I did on launch day outside of Product Hunt and the newsletter.

I spent most of the morning conversing with people on Product Hunt, Instagram, and via email. 

On Product Hunt it ranked #10 which meant that it was featured on the homepage for the day (a really good thing).

By the end of the day, the v1.0 launch on Product Hunt received **103 upvotes** and **13 comments**. **The day rank was #10 and the week rank #80.**

### Reflecting on the launch

Overall, the launch went well. Though it was a little strange because the month of November had already been the "quiest" month in a long time, particularily in constrast to October when there was a flurry of activity. So naturally the 17th of November, despite being the launch day, was only slightly different.

One might reasonably suggest that the v1.0 launch was more of an "official" thing rather than a real launch to the public, especially since Velocity Lapse had been available in early-access for over 2 years. 

All things considered, the v1.0 launch was a success with no major problems. For that I am very thankful. 🎉 


### After the launch

Only after a little while after the v1.0 launch was the v1.1.0 pushed into production. It added the remote shutter feature and other improvements that didn't make it into the v1.0 release.


### Another milestone

About the time of the v1.0 launch, Velocity Lapse crossed **200,000 downloads** on Google Play.