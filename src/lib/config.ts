import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "eljefe",
    link: "#",
    github: "larpiewaripe",
    discord_id: "1311818921824751680",
    projects: [
      {
        name: "csint.ing",
        description:
          "OSINT Tool",
        url: "https://csint.ing",
        type: "website" as const,
      },
    ],
  },
  {
    name: "pinky",
    link: "",
    github: "",
    discord_id: "1115742488985075843",
    projects: [
      {
        name: "kidflix.xyz",
        description:
          "Bio Page",
        url: "https://kidflix.xyz/",
        type: "website" as const,
      },
    ],
  },
  {
    name: "Ferste",
    link: "#",
    discord_id: "1326917389203275907",
  },
  {
    name: "cry120",
    link: "#",
    discord_id: "1171690252088397855",
  },
  {
    name: "stxxz",
    link: "#",
    discord_id: "1311827324848574542",
  },
].sort((a, b) => {
  if (a.name === "eljefe" || a.name === "eljefe") return -1;
  if (b.name === "eljefe" || b.name === "eljefe") return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});
