export const navigation = [
  {
    label: "O czasopiśmie",
     path: "/",
    children: [
      { label: "Profil naukowy", path: "/journal/profile" },
      { label: "Zespół redakcyjny", path: "/journal/editorial-team" },
      { label: "Rada naukowa", path: "/journal/scientific-board" },
    ],
  },
  {
    label: "Polityka czasopisma",
    path: "/journal/policy",
  },
  {
    label: "Archiwum",
     children: [
      { label: "Nr 1, 2022", path: "/archive/issue-1-2022" },
      { label: "Nr 2, 2024", path: "/archive/issue-2-2024" },
    ],
  },
  {
  label: "Recenzenci",
  children: [
    {
      label: "Lista recenzentów 2022",
      path: "/reviewers/2022",
    },
    {
      label: "Lista recenzentów 2024",
      path: "/reviewers/2024",
    },
    {
      label: "Formularz recenzji",
      path: "/reviewers/review-form",
    },
  ],
},
{
  label: "Dla autorów",
  children: [
    {
      label: "Wytyczne dla autorów",
      path: "/authors/guidelines",
    },
    {
      label: "Prawa autorskie",
      path: "/authors/copyright",
    },
  ],
},
  {
    label: "Kontakt",
    path: "/contact",
  },
];
