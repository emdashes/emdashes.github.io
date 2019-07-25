---
layout: post
title: 
				Web: Moving from Desktop to Mobile		
date: 2010-10-22 00:00
author: emjaune
comments: true
categories: [Events, Notes, Recap, Tips, UxWaterloo]
---
<a href="http://www.uxwaterloo.org" target="_blank" rel="noopener">uxWaterloo</a> is a local group that meets regularly with folks interested in the user experience of products and services. This month, James Wu, a UI Architect, spoke at the meeting about design considerations for mobile experiences. This event particularly interested me, not only because of the topic, but particularly also because the guest speaker is from Kobo, a Canadian (at the time) e-book company (that integrates with Pocket, so you can download and read everything you've saved online offline and without the ads!).

Like many, I have traditionally focused more on web desktop experiences, but I have on occasion needed to design for a mobile experience as well. James eloquently summed up the challenges I have often come across when transitioning to the mobile space, and reminded me of others that aren't always thought of, such as:
<h2>Screen Real Estate</h2>
<ul>
 	<li><strong>Screen size</strong> (diagonal space)
For example, a 29" desktop monitor could be 300-500% bigger than a mobile phone</li>
 	<li><strong>Orientation</strong> - the changes from portrait and landscape (and vice versa)
What's interesting is that during their user research with 1024x600 tablets (such as the Samsung tablet), they observed that users prefered using this size of tablets in landscape format</li>
 	<li><strong>Screen resolution</strong>
Using the same 1024x600 example, you would either have your screen in "short and wide" format, or "narrow and long"</li>
 	<li><strong>On screen keyboard</strong>
On many touch devices, more than 1/2 the screen is taken up by the keyboard, which would cover anything underneath it</li>
 	<li><strong>Platform variations</strong> (or device / hardware variations)
The takeaway? Design for different experiences/products; don't cram everything into one screen if it's not necessary. Why? "Don't necessarily think people use their phones the same way as tablets [desktops, etc.]." James said that at Kobo, they must design knowing that people will have multiple devices; the experience should be consistent across them, but not [necessarily] identical.</li>
</ul>
<h2>Hardware</h2>
Like desktop computers, hardware varies across different models. For the mobile devices, things like processor and memory are important to consider as it could affect battery life, performance, and even result in side effects like heat. Others include:
<ul>
 	<li><strong>Removable storage:</strong> the ability to "hot swap" a media card while the application is running in either the background or the foreground could cause undesired effects if designed improperly</li>
 	<li><strong>Interaction mechanisms:</strong> these may effect how a user interacts with an application such as trackballs, trackpads, keyboards, gesture strips (like the Palm Pre)</li>
</ul>
<strong>Gestures</strong>

For touch devices, we get into the a realm that is still pretty new. There is not yet official standards for touch gestures and there is limited documentation to illustrate them (James suggested that Apple may currently have the leading edge).
<ul>
 	<li><strong>Core/standard gestures</strong> like tap, swipe, pinch, expand, drag
For example, a more common gesture is the Pinch-Zoom to adjust the font size of Apple devices</li>
 	<li><strong>Peripheral gestures</strong> may include less familiar gestures such as long press, rotate, shake, sequences
Using Apple again for this example, a less common might be shaking the iPhone to perform the undo action</li>
</ul>
When designing for touch, one must consider gestures could be used in different directions and even with multiple fingers. It isn't surprising that some devices even recognize simultaneous touches (imagine designing a piano keyboard app so that multiple keys could be played at once to create a chord).

It's also important to provide users with affordances that let them know that features are there, and that they will use. Kobo uses instructional overlays for first-time use, as well as ghosted elements. I tried to imagine what a "ghosted element" was based on James' description and thought of the many mobile games where they use these visual cues to indicate the controls (where to tap on the screen) as a part of the onboarding experience.

Kobo may also add advanced gestures for more advanced users (like a keyboard shortcut on the desktop), such as adding an element of fun by adding a gestural easter egg in the Kobo app.
<h2>User Context</h2>
We must remember that users are likely in different environments and may have more constraints than if they're sitting in front of a desktop. Considerations include:
<ul>
 	<li><strong>Mobility:</strong> device may not be plugged in (may impact battery life for example)</li>
 	<li><strong>Divided attention:</strong> users could be multi-tasking or looking at the device on the go
[e.g. using their devices while walking from the train platform to catch the connecting train]</li>
 	<li><strong>Unpredictable surroundings:</strong> things like flakey connections [e.g. online then loses reception while train goes under the tunnel] could impact a download or chat experience</li>
 	<li><strong>Cost:</strong> How much would it cost by running your application? Unfortunately, not everyone has unlimited data. Some customers pay per byte, and that might mean customizing for wifi vs. data</li>
 	<li><strong>Others:</strong> the amount of light (dark environment) or even the number of free hands could impact how they interact with the device.</li>
</ul>
I've observed commuters carrying a briefcase in one hand, newspapers in another, and managed to hold a cup a coffee, along with their device. In that case, could they still perform a multi-touch gesture, and would they still be able to navigate even if they couldn't?

Knowing what users are doing while they're using your product is a good advantage. Lesson from Kobo: James told us of a time when they hid the notification bar, including the time, to minimize distractions while the user was reading. Yet, it didn't occur to them that if a customer didn't have a watch or an easy way to check for time, they had to exit out of the application. Now, the notification bar can be brought back with a gesture.
<h2>Standards and Expectations</h2>
Customers might expect applications to be specific to their product. When Kobo designed an app that looked like it was for Apple device, Android customers weren't happy. But once they took away the "Apple" button and changed the color, they noticed a decrease in complaints about the look of their application.

So when designing for a mobile experience...
...these are just some considerations and potential challenges that may come up while designing for a mobile product. Others are shared across the desktop too. We can't forget who we're designing for, the primary user for your product. For Kobo [at the time], it's for women in the mid 30-40s, simply because they found that they spent the most money. Who knows, you might even need to take accessibility concerns as a requirement, simply because it's the law.
