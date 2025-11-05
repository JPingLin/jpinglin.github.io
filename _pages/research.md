---
layout: archive
collection: "nav"
title: "Puzzles We’re Tackling Now"
permalink: /research/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">Find more: <a href="{{site.author.googlescholar}}">Google Scholar</a></div>
{% endif %}

<img src="/files/project/lesion.ME.png" alt="some cool pic" style="max-width:100%; height:auto;">

<!-- New style rendering if publication categories are defined -->

# Ongoing Projects
---

Building on my previous findings, my research program aims to systematically map the spatiotemporal dynamics of myelin turnover and neuroglial networks. My overarching goal is to uncover the root causes
of brain myelinopathy and translate these insights into diagnostic and therapeutic advancements. To achieve this, I will investigate the molecular and cellular architecture of brain regions, with a particular emphasis on white matter (WM) integrity. At the core of my approach is the concept of the microenvironment—recognizing that no cell operates in isolation within the brain.Within this framework, my research will focus on the following key areas:

### @ Developmental and aging-associated WM decay
How can we establish a comprehensive framework for evaluating WM health? Additionally, how can we design strategies to effectively monitor and reverse its decline?

### @ Perilesional glial regulatory network
What endogenous mechanisms suppress the expansion of WM lesions, and under what conditions does this regulatory control become disrupted?

### @ Glial-vascular-immune interactions at brain borders
What are the primary triggers of lesion formation? Do disruptions in the brain's border integrity and fluid exchange processes inevitably trigger the onset of demyelination?


# Selected Publications
---
{% include base_path %}

{% assign categories = site.research | map: "category" | uniq %}
{% for category in categories %}
  <h3>{{ category }}</h3>
  {% assign posts_in_category = site.research | where: "category", category %}
  {% for post in posts_in_category reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}







