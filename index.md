---
layout: home
title: Maslow's Redefinition
subtitle: A Virus Challenging a Staple of Psychology

---
![Maslow_pyramid](assets/img/maslow.jpg)

Maslow's Hierarchy of Needs serves as a model for assessing human behavior, offering insights into the profound shifts witnessed during the pandemic. From altered relationship dynamics to revised safety measures and changing professional priorities, our needs underwent a transformative evolution.

The pivotal consideration lies in whether the data collected during this critical period truly encapsulates our emotions and intuitions. Is it aligned with Maslow's enduring theory, a testament to its continued dominance in shaping our daily lives? This study delves into the pandemic-induced changes, exploring whether Maslow's framework remains a relevant and accurate tool for understanding these shifts.

Our research only encompasses EU countries. By examining the intricacies of the data at hand, we aim to uncover the resonance between our evolving needs and the timeless principles outlined by Maslow's Hierarchy, providing a nuanced perspective on the enduring impact of his theory.
The ultimate goal is to redefine this sacred hierarchy in order for it to resonate with the reality that was the life during the pandemic

This behavioral study bases itself on web-browsing data such as Wikipedia page views and Google trends, transportation and mobility data provided by Google and Apple, and EU-centric unemployment data.

# **Methods**
## Categorization task
While Mobility and Unemployment Data directly point us to the lower-two levels of the pyramid, Physiological Needs and Safety, exctracting data for the upper three levels is a bit more intricate: Wikipedia pages and topics are not intuitively classified into Esteem, Love and Affection and Self-Actualization, this needed to be done in order to complete the study.

## Difference in Differences
A world plunged into the unforeseen chaos of the COVID-19 pandemic in early 2020. No corner untouched, no exception granted. Now, in our quest to unravel the pandemic's impact, we find ourselves navigating a unique methodology—the difference in differences (or DiD).

DiD analysis is used to underline the effect of a certain treatment affecting a group (or population). In our study, the treatment is the Covid-19 virus. A DiD analysis is relevant to us as it can explain the effect of Covid-19 on different types of data whilst removing the influence of other underlying factors that are unexplained in our data sets such as seasonal fluctuations or normal growth in data numbers, using what is called a control group. In an ideal case DiD is performed using two groups, one of which receives a treatment and the other doesn't, obviously this is not possible in our case as the pandemic hit the globe at roughly the same time period without exempting a group of people. Since this is an observational analysis, we found a way to compare two similar groups, using previous data over the same populations, ideally in the same period as covid in the beginning of 2019. The results of DiD is a coefficient (from regression) that gives us the effect the treatment (pandemic) had over our data, and therefore when looking at categories of Maslow's pyramid this can highlight which needs saw an increased interest compared to others, helping us redefine the pyramid.

# The secrets at the base of the Pyramid
## Navigating Necessities: The Unwavering Pursuit of Physiological Needs During the Pandemic
Our assessment of Physiological Needs drew primarily from the Global Mobility Report and Google Trends. These needs encompass essentials like food, water, and fundamental health requirements, such as medicine, supplements, or vitamins. Typically, these items are procured from grocery stores or pharmacies. Given that these establishments were considered essential businesses during the pandemic, people continued to have access to them. To gauge the shift in physiological needs during the challenging times of the pandemic, we will examine how the frequency of visits to these critical businesses changed, as indicated by mobility data. Additionally, we'll look at Google Trends data for 'Grocery Store' and 'Pharmacy' searches to corroborate or challenge our initial findings.

![Mobility_Physiological](assets/img/Mobility_Phys2.png)
As the world slowed down during the pandemic, grocery stores and pharmacies became lifelines in the quiet streets. They remained busy and essential, a constant in people’s lives when so much else had changed. Every visit to these stores was a small yet significant step, a reminder that some things, like our basic needs, stay steady even in uncertain times.

Observing either a positive or no significant difference overall, it is reasonable to conclude that the fulfillment of physiological needs, as represented by grocery stores and pharmacies, maintained or increased their importance during the COVID-19 period. 

Online searches mirrored this trend, with keystrokes lighting up the internet in search of nourishment and wellness. The data painted a clear picture: as the world paused, the heartbeat of our basic needs throbbed ever stronger, revealing through the numbers a narrative of resilience. 

![DID_Physiological](assets/img/DID_Phys3.png)
The bar chart indicates that based on Google Trends data, there was generally a smaller reduction—or in some cases, an increase—in the public's interest in grocery stores and pharmacies compared to shopping malls during the pandemic. This suggests that essential needs, such as those for food and healthcare, maintained a consistent level of importance as reflected by online search behaviors.

Averaging all the coefficients together, we can determine how much more dominant physiological needs were during the pandemic.The bar plot below displays the overall fluctuation in grocery shopping, pharmacy, and overall physiological needs.

<iframe src="assets/physio_did.html" width="100%" height="400" scrolling="yes" frameborder="0"></iframe>


## Job Security in Crisis: The Pandemic's Impact on Maslow's Safety Layer
The data on unemployment in the European Union has provided valuable insights into how financial stability shifted during the pandemic. In our initial findings, we observed changes in the distribution of inactive individuals across various groups. Following the lockdown, there was an increase in the number of inactive men compared to women. Similarly, unemployment rates rose more significantly among the younger population (those under 25) in comparison to their older counterparts (between the ages of 25 and 74).

To help us visualize these trends, we turned to pie charts. The labels Y_LT25 and Y25-74 represent the younger and older age groups, while M and F signify male and female individuals. These charts serve as a visual aid, allowing us to better understand how the pandemic impacted different demographic groups within the European

#### Distribution of Unemployed Individuals per Group

<iframe src="assets/age_pie_0.html" width="100%" height="300" scrolling="no" frameborder="0"></iframe>
<iframe src="assets/age_pie_1.html" width="100%" height="300" scrolling="no" frameborder="0"></iframe>
<iframe src="assets/sex_pie_0.html" width="100%" height="300" scrolling="no" frameborder="0"></iframe>
<iframe src="assets/sex_pie_1.html" width="100%" height="300" scrolling="no" frameborder="0"></iframe>

Given these results, the next natural step is to generalize to an EU-wide scale, to understand how relevant safety needs related to employment were during covid times, and the answers lie in the time-series of unemployment rates across EU countries. A naive analysis should provide the key elements to infer the evolution of safety needs.  Considering march 2020  as the lockdown starting point let's dive head-first into the data.

#### Time-Series of Unemployment Rates per European Country
![C_1](assets/img/c1.png)
![C_2](assets/img/c2.png)
![C_3](assets/img/c3.png)
![C_4](assets/img/c4.png)
![C_5](assets/img/c5.png)

Regressing over the results screams uncertainty over the unemployment tendencies of the EU: some countries, like Iceland, had a thriving employment situation during the lockdown whilst other countries, such as Spain, were struggling with employment levels.

![LS](assets/img/ls_t.png)


However, one main problem arises: naive analysis does not consider seasonality. A fallacy that **Difference in Differences** solves, using it reveals a harsher reality: unemployment spread like a virus throughout Europe.

<iframe src="assets/unemployment_did.html" width="100%" height="750" scrolling="yes" frameborder="0"></iframe>

## Ascending Maslow's Summit: A Deep Dive into the Upper Tiers During COVID-19

Now picture this : you're back in March 2020. The first ever lockdown measures have been implemented. Your day-to-day routine has been completely thrown out the window as you and your peers are forced to self-isolate at home. As time goes on, you start to realize that maybe certain things matter more than others... Our objective now is too see if certain "personal" aspects of Maslow's pyramid (specifically : Love & Belonging, Esteem and Self-Actualization) have gained more importance during lockdown. We will look at how the interest in internet-topics related to these Maslow levels has evolved for different countries in Europe, by examining wikipedia pageviews!


Let's explore our analysis with the countries featured below :

<iframe src="assets/eu_map.html" width="100%" height="550" scrolling="no" frameborder="0"></iframe>

### The Pulse of Connection: Tracking Love and Belonging in a Pandemic World

<iframe src="assets/love_px_2.html" width="130%" height="450" scrolling="yes" frameborder="0"></iframe>

Throughout the year, the interest in "Love & Belonging" fluctuates, but then... BOOM! We have our first Covid-19 death as well as our first lockdown measure. And with them, a general trend upwards for all countries appears. It would seem that love has become much more prevalent during this period! Now let's move onto our next level.

### Esteem in the Age of Isolation

<iframe src="assets/esteem_px_2.html" width="130%" height="450" scrolling="yes" frameborder="0"></iframe>

People had valued love a lot more after lockdown measures... but what about their "Esteem"? By looking at the line-plots above, again this shift upwards after Covid-19 measures is evident. People are getting a lot more introspective! Now let's makes sure of this by looking at a very introspective aspect : Self-Actualization!

### The Drive for Self-Actualization: A Pandemic-Era Transformation

<iframe src="assets/self_px_2.html" width="130%" height="450" scrolling="yes" frameborder="0"></iframe>

As we look more and more within ourselves during such challenging periods, we tend to research more online about ourselves, in a quest to better our situation. Hence why, in the plot above, again, for all of the european countries, a shift upwards after lockdown measures can be seen...

Wow! It looks like all three levels have become more important during Covid-19... but how can we examine this in detail? Has a level overcome another when it comes to its relevance? Let's use DiD and find out!

### Unpacking the Pandemic's Impact on Esteem, Love, and Self-Actualization

The global pandemic left its mark on Maslow's pyramid, with the top categories following suit. To understand this impact, we used our reliable DiD tool. It helped us measure how strongly these categories were affected and which ones people were most drawn to.

With DiD as our guide, we delved into the data. We wanted to grasp the extent of the pandemic's influence on esteem, love, and self-actualization.

What we found was a story of change and adaptation. The pandemic shifted priorities, showing how people adjusted their aspirations in response to challenging times.

<iframe src="assets/top3_did.html" width="100%" height="400" scrolling="no" frameborder="0"></iframe>


Upon scrutinizing the data, a clear trend emerges. Surprisingly, despite the challenges posed by the pandemic, all three top categories of Maslow's pyramid experienced a surge in interest. Notably, the category of Self-Actualization saw the most significant increase.

In summary, the upper levels of Maslow's pyramid remained resilient during the Covid-19 period. It appears that the pandemic led people to explore topics of deeper significance, such as personal growth, life goals, and their value to others, filling a void created by these unprecedented times.


# Revealed
Comparing all our results we can see that Maslow was, like everyone else, taken by surprise by this virus. His precious pyramid was almost flipped! The more intuitive, primitive human needs  were overtaken by psychological, human interaction-based needs.
This is quantitatively backed by the change coefficients for each of the 5 pyramid levels. Safety and Physiological needs were belittled by Love, Esteem and Self-Actualization, which took over us during times of covid.

  
<iframe src="assets/final_did.html" width="100%" height="400" scrolling="yes" frameborder="0"></iframe>


The following video illustrates the shift the pyramid levels endured during the pandemic:

<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/tFMfmEIIHtE?si=gSMYTtHGwF6r4DX2" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
    style="display: block; margin: auto;">
</iframe>

## Conclusion

The emergence of the COVID-19 pandemic has prompted a reevaluation of Maslow’s "Hierarchy of Needs" theory under conditions of crisis. It remains evident that the theory's foundational concepts still hold; however, the pandemic has instigated a notable reorganization in how needs are approached and addressed. The traditionally solid base of Maslow’s pyramid, the Physiological Needs, saw a dynamic shift as people globally adjusted their priorities to navigate the new landscape of the pandemic.

Self-Actualization, typically the pinnacle of Maslow's structure, took on a more central role. The data analyzed suggests a collective reemphasis on self-improvement and personal development, likely a countermeasure to the confinements of lockdowns and the resultant introspection. The disruption brought on by the pandemic may have catalyzed a transformative perspective, positioning the quest for self-fulfillment as a more immediate concern, with individuals actively reshaping their aspirations to find satisfaction and purpose in the midst of adversity.

The pandemic's impact was also acutely felt in the realm of social interactions and the essential need for love and belonging. With the implementation of social distancing, traditional forms of interaction were supplanted by digital communication, indicating a versatile approach to sustaining social bonds.

Summing up, the global health crisis has emphasized the adaptability of Maslow's hierarchy, revealing a flexible sequence of needs responsive to external shocks. While the base needs of Physiological and Safety remained essential, their urgency and presence in the hierarchy were subject to change. Esteem and Love and Belonging needs, though critical, were redefined as people sought alternative methods of fulfillment. The pandemic has highlighted humanity's inherent ability to recalibrate its motivational mechanisms, demonstrating an impressive capacity for innovation in meeting its varied needs amidst a landscape of global upheaval.
