export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '603b86983393c16674882ca1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-987g4ozt',
                  apiId: 'a2a9a769-e46f-4ee2-9206-a95aa05e3e53'
                },
                {
                  buildHookId: '603b8698265811612c946698',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c4foypnw',
                  apiId: 'bc4f7c10-58d5-47f7-b707-de3509dbcab3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vegardjo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c4foypnw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
