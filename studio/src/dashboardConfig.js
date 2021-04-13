export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607514c9876b3925de0ab536",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pi7io3s7",
                  apiId: "4f7a745f-8501-4bd6-865b-37adc6355936",
                },
                {
                  buildHookId: "607514c92290a42794855215",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2uqkj221",
                  apiId: "71eb6899-57db-4299-a832-b5ac2056c47c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/stephenbowers/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2uqkj221.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
