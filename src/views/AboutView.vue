<template>
  <section class="page">
    <div class="about-view__intro">
      <div class="about-view__portrait animate-fade-up animate-delay-1">
        <div class="about-view__portrait-frame">
          <img
            src="/about-avatar.jpg"
            alt="Portrait of Oleg Shchurov"
            height="350"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            class="about-view__image"
            :class="{ 'about-view__image--loaded': isAvatarLoaded }"
            @load="isAvatarLoaded = true"
          />
        </div>
      </div>

      <SectionHeader
        :eyebrow="'Who am I'"
        :title="'Frontend engineer, curious builder, and someone who still enjoys the craft after work.'"
        :text="'Hi! My name is Oleg. I work as a front-end developer and for the last few years I have been building interfaces that feel clean, clear and alive. I enjoy shaping products from small details all the way to the full experience people interact with every day.'"
      />
    </div>

    <div class="about-view__grid">
      <AboutViewCard
        v-for="card in cardText"
        :key="card.title"
        :title="card.title"
        :subtitle="card.subtitle"
        :content="card.content"
      />
    </div>

    <InfoPanel
      subtitle="Professional Skillset"
      title="Technologies I use the most"
      text="These are the tools and languages I return to most often while building products, testing ideas and refining my workflow."
    >
      <div class="row__list">
        <SkillChip
          v-for="chip in skillChips"
          :key="chip.label"
          :icon="chip.icon"
          :label="chip.label"
        />
      </div>
    </InfoPanel>

    <InfoPanel
      subtitle="Let’s connect"
      title="Open to thoughtful products and good conversations."
      text="If you want to talk about frontend, product ideas, collaboration or just share something interesting, feel free to reach out through any of the links below."
    >
      <div class="row__list">
        <ContactChip
          v-for="chip in contactChips"
          :key="chip.label"
          :label="chip.label"
          :href="chip.href"
          :icon="chip.icon"
          :external="chip.external"
        />
      </div>
    </InfoPanel>
  </section>
</template>

<script setup lang="ts">
import AboutViewCard from "@/components/AboutView/AboutViewCard.vue";
import ContactChip from "@/components/AboutView/ContactChip.vue";
import InfoPanel from "@/components/AboutView/InfoPanel.vue";
import SkillChip from "@/components/AboutView/SkillChip.vue";
import SectionHeader from "@/components/Views/SectionHeader.vue";
import { cardText } from "@/data/about-card-text";
import { contactChips } from "@/data/contact-chips";
import { skillChips } from "@/data/skill-chips";
import { ref } from "vue";

const isAvatarLoaded = ref(false);
</script>

<style scoped lang="scss">
.about-view__intro {
  display: grid;
  gap: var(--space-8);
  align-items: center;
}

.about-view__portrait {
  max-width: 24rem;
}

.about-view__portrait-frame {
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0)),
    var(--color-bg-elevated);
  box-shadow: 0 24px 80px -36px var(--color-shadow);
  overflow: hidden;
}

.about-view__image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: calc(var(--radius-lg) - var(--space-3));
  opacity: 0;
  transform: scale(1.015);
  transition:
    opacity 420ms ease,
    transform 420ms ease;
}

.about-view__image--loaded {
  opacity: 1;
  transform: scale(1);
}

.about-view__grid {
  display: grid;
  gap: var(--space-5);
}

@media (min-width: 920px) {
  .about-view__intro {
    grid-template-columns: minmax(18rem, 24rem) minmax(0, 1fr);
  }

  .about-view__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
