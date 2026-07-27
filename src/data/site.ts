/**
 * Every fact this site states, in one place.
 *
 * First name only — deliberate, not an oversight. Do not add a surname here
 * or anywhere else in the project.
 */
export const site = {
  name: "Jannik",
  role: "Senior Full-Stack Developer",
  employer: {
    name: "shopware",
    href: "https://github.com/shopware",
  },
  country: "Germany",

  /**
   * The two things the intro sentence does not already say.
   *
   * Anything with an `http` href is treated as external and rendered with the
   * new-tab treatment — derived rather than flagged, so the two can't drift
   * apart. Keep labels short: they render as non-wrapping inline-flex
   * anchors, so a long one would push the layout sideways at 320px.
   */
  links: [
    { label: "hey@jalu.dev", href: "mailto:hey@jalu.dev" },
    { label: "github.com/qysp", href: "https://github.com/qysp" },
  ],

  locale: "en",
  title: "Jannik — Senior Full-Stack Developer",
  description:
    "Jannik, a Senior Full-Stack Developer at shopware, based in Germany.",
} as const;
