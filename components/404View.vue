<template>
  <main>
    <section id="NotFound">
      <span class="glitch" data-text="404">404</span>
      <h1>Not Found!</h1>
      <p>
        Hmm, Sorry... The page you are looking for could not be found, maybe
        something went wrong?
      </p>
    </section>
  </main>
</template>

<style lang="scss">
#NotFound {
    background-color: var(--color-background-second);
    border-radius: 10px;
    padding: 30px 20px;
    box-shadow: var(--base-shadow);
    margin-bottom: 20px;
    color: var(--color-text-secondary);
    width: 100%;
    text-align: center;

    h1 {
        font-size: 2em;
        margin-top: 0 !important;
        font-weight: 800;
        margin-bottom: 0 !important;
    }

    span {
        font-size: 7em;
        font-weight: 800;
        letter-spacing: -12.2px;
        line-height: -2px;
        color: var(--color-text);
        position: relative;
        display: inline-block;
        animation: notfoundblink .8s infinite alternate;

        @keyframes notfoundblink {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }

        @media (prefers-reduced-motion: no-preference) {

            &::before,
            &::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            &::before {
                left: 2px;
                text-shadow: -3px 0 var(--color-accent), 0 3px var(--color-accent), 3px 0 var(--color-accent), 0 -3px var(--color-accent);
                opacity: 0.8;
                animation: glitch 1s infinite linear alternate-reverse;
            }

            &::after {
                left: -2px;
                text-shadow: 3px 0 var(--color-background-mute), 0 -3px var(--color-background-mute), -3px 0 var(--color-background-mute), 0 3px var(--color-background-mute);
                opacity: 0.8;
                animation: glitch 1.5s infinite linear alternate-reverse;
            }
        }
    }

    @keyframes glitch {
        0% {
            transform: translate(0);
        }

        25% {
            transform: translate(4px, -4px);
        }

        50% {
            transform: translate(-4px, 4px);
        }

        75% {
            transform: translate(4px, 0);
        }

        100% {
            transform: translate(0);
        }
    }
}
</style>
