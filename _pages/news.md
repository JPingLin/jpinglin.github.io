---
layout: archive
permalink: /news/
collection: "nav"
title: "From Noise to Signal: What We’re Up To"
author_profile: true
---
<div>
  <div class="hover-img2">
    <img src="/files/posts/group.pic.png" alt="grounded">
    <img src="/files/posts/group.pic2.png" alt="excited">
  </div>

{% include base_path %}
{% assign sorted_news = site.news | sort: "date" | reverse %}
{% assign written_year = "" %}
{% for post in sorted_news %}
  {% assign year = post.date | date: "%Y" %}
  {% if year != written_year %}
    <h2 id="{{ year }}" class="archive__subtitle">{{ year }}</h2>
    {% assign written_year = year %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
</div>
