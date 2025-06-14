---
pageClass: home
---

# Aplós {.center #title}

A Sleek, Contemporary, and Purposefully Designed Vitepress Theme.\
It provides a straightforward solution for creating a quick web page, offering essential features for comfortable writing while maintaining a sense of simplicity. {.center #desc}

> [!DANGER] Warning
> Aplós has transitioned into maintenance mode, indicating that it will only receive critical updates and bug fixes. The development focus has shifted to other projects, particularly [Steno](https://github.com/stenodevs/steno), a new static site generator that is likely to become Aplós’ future home. Although Aplós is currently in maintenance mode, it doesn’t mean it will remain in this state indefinitely. Development will resume, but it’s unlikely to be a VitePress theme. Instead, it’s more likely to become a Steno theme. If you’re interested in contributing to Aplós, you can still do so, but please be aware that it may not receive regular updates.

<section id="features">
<br>

- **🚀** Lightweight, minimalistic, and user-friendly, built for VitePress.
- **🎨** Elegantly styled with a primary color theme for a visually pleasing experience.
- **📱** Mobile-friendly design with support for dark mode.
- **🖋️** Utilizes premium fonts: Inter for text and Geist Mono for code snippets.
- **💻** Local development made easy with NPM/PNPM integration.
- **📦** Every asset is local, nothing is pulled from the internet.
- **🔧** Customizable configuration for a personalized touch.
- **✍️** Perfect integration for blogs, documentation, and personal websites.
- **💬** Giscus and Activitypub/Mastodon powered comments, for blog posts.

</section>

<br>
<aside>

## Name

'_Aplós_', pronounced as `/aplós/` <button class="mono-emoji" @click="playSound">🔊</button> is the Romanized representation of the Greek word 'Απλός,' which translates to 'Simple'. This naming choice showcases the essence of the project— it's dedication to providing users with a straightforward and modern web experience. Aplós is centered around the philosophy of simplicity, aiming to deliver an uncomplicated and contemporary solution for website creation.

</aside>

## Installation

Aplós can now be easily installed as an NPM Package. To get started with Aplós, simply follow these steps:

```bash
npm install aplos
```

Once you've installed the package, you will need to follow the [Guide](/guide/#package) to set up the theme. {.local-link}

## Contributing

If you want to contribute to Aplós, you can check the [Contributing](/contributing) page in the documentation. {.local-link}

## Sponsor

<section class="sponsors">
  <ul>
    <li>
      <a href="https://tuta.com" target="_blank" rel="noreferrer">
        <img src="https://tuta.com/assets/Logo_text.LuqsxYBF_Z2cigi2.webp#no-border#static" alt="Tuta Logo" tabindex="0">
      </a>
    </li>
  </ul>
</section>

## Credits & Thanks To

Aplós whouldn't be possible without the following projects/people:

- [Duckquill](https://duckquill.daudix.one), from where I got inspired to create this project (and many ideas are from there)
- [Hari Rana](https://tesk.page/) for style-related feedback and suggestions
- [Inter](https://rsms.me/inter/), used as the main body font.
- [Geist Mono](https://vercel.com/font), used for all monospaced text.
- [VitePress](https://vitepress.dev), which is used to power Aplós.
- Everyone that supported the project.

::: details Intrested in the next steps?
Aplós is currently building a new project under it's umbrella, called Sáfi. Read more about it [here](https://gabs.eu.org/blog/posts/next-steps-for-aplós).
:::

<script setup lang="ts">
    const playSound = () => {
      const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
      audio.play();
    }
</script>
