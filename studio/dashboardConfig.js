export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ebaeb1bb9568666f8d4cd71',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jcowt6k2',
                  apiId: '197016a4-d740-465b-91ec-7dbbb7b4d1e4'
                },
                {
                  buildHookId: '5ebaeb1b03540f66d3d256f0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2dnwszqs',
                  apiId: '7821adec-230d-4c32-b348-0855a2755b9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cesn4/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2dnwszqs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
