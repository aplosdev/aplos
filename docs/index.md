---
pageClass: home
---

# Aplós {.center #title}

A sleek, contemporary, and purposefully designed VitePress theme & template. It provides a straightforward solution for creating a quick web page, offering essential features for comfortable writing while maintaining a sense of simplicity. {.center #desc}

<section id="features">
<br>

- <span class="emoji">🚀</span> Lightweight, minimalistic, and user-friendly, built for VitePress.
- <span class="emoji">🎨</span> Elegantly styled with a primary color theme for a visually pleasing experience.
- <span class="emoji">📱</span> Mobile-friendly design with support for dark mode.
- <span class="emoji">🖋️</span> Utilizes premium fonts: Inter for text and Geist Mono for code snippets.
- <span class="emoji">💻</span> Local development made easy with NPM/PNPM integration.
- <span class="emoji">📦</span> Every asset is local, nothing is pulled from the internet.
- <span class="emoji">🔧</span> Customizable configuration for a personalized touch.
- <span class="emoji">✍️</span> Perfect integration for blogs, documentation, and personal websites.
- <span class="emoji">💬</span> Giscus and Activitypub/Mastodon powered comments, for blog posts

</section>

<br>
<aside>

## Name

'*Aplós*', pronounced as `/aplós/` <button class="mono-emoji" @click="playSound">🔊</button> is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple'. This naming choice showcases the essence of the project— it's dedication to providing users with a straightforward and modern web experience. Aplós is centered around the philosophy of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.
</aside>

## Installation

Aplós can now be easily installed as an NPM Package. To get started with Aplós, simply follow these steps:

```bash
npm install aplos
```

Once you've installed the package, you will need to follow the [Guide](/guide/#package) to set up the theme. {.local-link}

## Credits & Thanks to

Aplós whouldn't be possible without the following projects:

- [Duckquill](https://daudix.codeberg.page/duckquill), from where I got inspired to create this project (and many ideas are from there)
- [Hari Rana](https://tesk.page/) for style-related feedback and suggestions
- [Inter](https://rsms.me/inter/), which is the font used in **all** _Aeolus_ apps.
- [Geist Mono](https://vercel.com/font), used for code snippets.
- [VitePress](https://vitepress.dev), which is used to power Aplós.
- Everyone that supported the project.


::: details Intrested in the journey behind it?
Check out the blog I made about the journey in developing this project here at https://gabs.eu.org/blog/posts/behind-aplós
:::

<script setup lang="ts">
    const playSound = () => {
      const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
      audio.play();
    }
</script>
