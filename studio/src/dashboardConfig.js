export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6042645eec518b23bc3f828b',
                  title: 'Sanity Studio',
                  name: 'blog-abap-dojo-studio',
                  apiId: 'ac1cc444-3328-4cd0-bdf9-2238650e6d46'
                },
                {
                  buildHookId: '6042645ef4075c21a327b0af',
                  title: 'Blog Website',
                  name: 'blog-abap-dojo',
                  apiId: '04dcfeb9-dc4e-44e0-b3be-39c48cd61c7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rafaelfvalim/blog-abap-dojo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-abap-dojo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
