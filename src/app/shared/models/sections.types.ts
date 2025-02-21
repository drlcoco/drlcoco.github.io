export const SECTION
  =
  {
    initial: "initial",
    about: "about",
    proyects: "proyects",
    contact: "contact"
  } as const;
export type Section = (typeof SECTION)[keyof typeof SECTION];
export const SECTION_LIST: Section[] = Object.values(SECTION);
export const isSection = (value: string): value is Section => SECTION_LIST.includes(value as Section);
