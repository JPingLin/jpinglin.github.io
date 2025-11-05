---
layout: archive
title: ""
collection: "nav"
permalink: /sitemap/
author_profile: false
---

{% include base_path %}

<h2>Archived Posts</h2>
---

{% for collection in site.collections %} 
{% unless collection.output == false or collection.label == "posts" %} 
{% capture label %}{{ collection.label }}{% endcapture %} 

{% if label != written_label %} 

{% capture written_label %}{{ label }}{% endcapture %} 

<details><summary>{{ label }}</summary> 

{% for post in collection.docs %} 
<ul><li>{% include archive-single.html %} </li></ul>

{% endfor %} 
</details> 

{% endif %} 
{% endunless %} 
{% endfor %}



<h2>Dashboards</h2>
---

{% assign sorted_pages = site.pages | sort: "title" %} 
{% for post in sorted_pages %} 
{% unless post.collection == "nav" %} 
{% include archive-single.html %}
{% endunless %} 
{% endfor %}




