README
======

Introduction
--

This addon will integrate ActiveCampaign into Statamic v2 websites. 

It will begin with the basics -- the initial goal is just to build a contact form
that integrates with ActiveCampaign.

This document is mostly to document my plan of attack in building this plugin, both as a reference to myself and as a invitation for anybody who actually knows what they're doing to intercede before things get too ugly.


Plan of Action
--


1. Require addon user to add ActiveCampaign API key to .env.
3. Flag specific Statamic form submissions as ActiveCampaign subscriptions.
4. Use API key with form submission to prepare API submission to ActiveCampaign.
5. Submit POST request to ActiveCampaign, check for response.
6. When response is received, either confirm or deny request.

Ok, first thing I need is to make a listener successfully do something when a form is utilized.

Then, I'll need to take that response and 