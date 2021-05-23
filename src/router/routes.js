
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/tuto/test1', component: () => import('src/tuto/pages/test1.vue') },
      { path: '/tuto/test2', component: () => import('src/tuto/pages/test2.vue') },
      { path: '/tuto/test3', component: () => import('src/tuto/pages/test3.vue') },
      { path: '/tuto/test4', component: () => import('src/tuto/pages/test4.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
