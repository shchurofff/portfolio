import type { AboutViewCardProps } from "@/components/AboutView/AboutViewCard.vue";

export const cardText: AboutViewCardProps[] = [
  {
    subtitle: "work",
    title: "What I do",
    content:
      "My main focus is frontend development. I care about strong UI structure, thoughtful motion and interfaces that are pleasant both for users and for the developers who will maintain them after release.",
  },
  {
    subtitle: "stack",
    title: "What I work with",
    content:
      "I mostly write JavaScript and TypeScript. Vue feels the most natural to me right now, but I also spent time with React, Svelte and other UI approaches because I like understanding how different tools shape developer experience.",
  },
  {
    subtitle: "curiosity",
    title: "What I explore",
    content:
      "Outside of daily frontend work I like learning new things just to keep my thinking fresh. Sometimes that means experimenting with Go or Zig, sometimes it means rebuilding tiny tools only for the fun of understanding how they work.",
  },
  {
    subtitle: "life",
    title: "What keeps me balanced",
    content:
      "After work I still end up around computers more often than not, but I try to balance that with rogue-like games, good shows, long walks and occasional attempts to remember that touching grass is still part of a healthy routine.",
  },
];
