## Context

I was working on the Lift team within Measurement under the Ads org at Facebook. I was the only designer on this project, collaborating with PM, UX Researcher, Content Strategist, Data Scientist (DS) , Product Marketing Manager (PMM), Illustration Contractor and Mobile Engineers.

### What is Brand Lift?
Advertisers use Brand Lift to measure the effectiveness of their brand advertising on Facebook. 

We randomize target audience into test and control groups; we only serve ads to the test group; we later serve polls in News Feed asking both groups questions regarding the brand; we then compare the rates of favorable responses between test and control and see if there’s a lift.

### Problem
Current brand polling methods do not have the ability to measure mid-funnel and bottom funnel brand metrics, such as Message Association, Purchase Intent, in a sensitive way. 

This could be that the plain polling format is not effective in capturing emotional response or subtle attitude changes.

### Project Goals
* Develop new polling formats that are more effective in capturing emotional response and subtle attitude changes.
* Develop corresponding new equity signal metrics, with which we can package it as a solution to brand advertisers.
* The polling formats should not affect user sentiment/engagement of the core Facebook experience.

## Design

### Explore
Suggested by our UX Researcher with a PhD in social psychology, we planned to use a common method to measure connection in social science research. In this method, participant is asked to select the visual representation of two circles that most accurately describes the connection they have to a certain concept.

I then explored some UI concepts and used them to help answer some open questions, such as whether we would want to measure connection to competitors or not. By reviewing these concepts with PMM, DS and UX Researcher, we effectively narrowed our solution to:

* We will focus on the client brand and not measure competitors
* The signal we capture includes connection to both the brand and its values
* We will first let user pick how they want to use two circles to represent connection, then use a multi-choice question to further probe the reasons
* We would not include social factor, as we want measure true value choices, not how people want to appear among friends
* The verticals that work well with this format: Tech, Retail, Luxury, Chain restaurants

Visual & Interaction
Given the concept chosen, I started to explore visual and interaction design in more details. Illustrations are placeholders. Content Strategist was also involved to fill in draft content.

I used Framer to prototype to illustrate the full interaction flow.

Specifically, we need to make a decision between drag vs. slide interaction.

We decided to use slider because:
* The slider more closely approximates the established metric 
* The slider communicates more clearly the affordance and the range of options

### Illustration
I worked with an external illustrator via Email to get the assets ready before the campaign launch. I communicated with him the design brief, asset requirements and he sent me proposals for feedback. We started from rough sketches and through 6 rounds of iterations we settled on the final version.

## Launch
I collaborated with PMM and engineers to finalize campaign schedule and ship timeline and made sure design QA would happen before Eng testing. 

We successfully launched this poll with Uber Brand campaign in 2017Q4.


