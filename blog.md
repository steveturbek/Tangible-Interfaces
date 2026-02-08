---
title: Blog
---

# Blog

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url | relative_url }})
<span style="color: var(--color-darkgray); font-size: 90%;">{{ post.date | date: "%B %-d, %Y" }}</span>

{{ post.excerpt }}

---
{% endfor %}
