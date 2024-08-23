export const btns = [
  {
    name: "dashboard",
  },
  {
    name: "jobs applications",
    subs: [{ name: "accepted" }, { name: "pending" }, { name: "rejected" }],
  },
  {
    name: "companies",
    subs: [{ name: "tanQeeb" }, { name: "daftra" }],
  },
  {
    name: "settings",
    subs: [
      {
        name: "edit profile",
      },
      {
        name: "change password",
      },
    ],
  },
  {
    name: "logout",
  },
];

export type BtnsType = typeof btns;
