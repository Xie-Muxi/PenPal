const audit: AuthRoute.Route = {
  name: 'audit',
  path: '/audit',
  component: 'self',
  meta: {
    title: '审稿',
    icon: 'mdi:menu',
    singleLayout: 'basic',
    order: 4
  }
};

export default audit;
