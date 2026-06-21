export const navigation = [
  {
    label: "Strona główna",
    path: "/",
  },
  {
    label: "O czasopiśmie",
    children: [
      { label: "O nas", path: "/about" },
      { label: "Cele i zakres", path: "/scope" },
      { label: "Redaktor naczelny", path: "/editor-in-chief" },
      { label: "Rada naukowa", path: "/editorial-board" },
      { label: "Proces recenzji", path: "/review-process" },
    ],
  },
  {
    label: "Aktualny numer",
    children: [
      { label: "Najnowszy numer", path: "/current-issue" },
      { label: "Artykuły", path: "/articles" },
    ],
  },
  {
    label: "Archiwum",
    path: "/archive",
  },
  {
    label: "Dla autorów",
    path: "/authors",
  },
  {
    label: "Kontakt",
    path: "/contact",
  },

];
