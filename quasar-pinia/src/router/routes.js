
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'one', component: () => import('pages/PageOne.vue')
      },
      {
        path: 'two', component: () => import('pages/PageTwo.vue')
      },
      {
        path: 'three', component: () => import('pages/PageThree.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
