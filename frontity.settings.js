const settings = {
  name: "frontity",
  state: {
    frontity: {
      url: "https://admin.shapon.me/", //"http://localhost/wordpress/",
      title: "SHAPON",
      description: "",
    },
  },
  packages: [
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Project", "/project/"],
            ["Blog", "/blog/"],
            ["Product", "/product/"],
            ["WordPress", "/tag/wordpress/"],
            ["Node", "/category/node-development/"],
            ["React", "/tag/react/"],
            ["Contact Me", "/contact/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://admin.shapon.me/",
          api: "https://admin.shapon.me/wp-json/",
          postTypes: [
            {
              type: "post",
              endpoint: "posts",
              archive: "/blog",
            },
            {
              type: "project",
              endpoint: "project",
              archive: "/project",
            },
            {
              type: "product",
              endpoint: "product",
              archive: "/product",
            },
          ],

          homepage: "/about-me/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
  ],
};

export default settings;
