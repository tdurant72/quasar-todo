const routes = [
  {
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/new-reservation",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/newReservation/Index.vue") },
    ],
  },
  {
    path: "/existing-reservation",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/existingReservation/Index.vue"),
      },
    ],
  },
  {
    path: "/ticketing",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ticketing/Index.vue") },
    ],
  },
  {
    path: "/block",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/block/Index.vue") }],
  },
  {
    path: "/bulk",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/bulkMove/Index.vue") },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/admin/Index.vue") }],
  },
  {
    path: "/schedules",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/schedules/Index.vue") },
    ],
  },
  {
    path: "/reports",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/reports/Index.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
