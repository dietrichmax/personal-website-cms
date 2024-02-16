module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        cover: 1300,
        content: 670,
        thumbnail: 350,
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      apolloServer: {
        introspection: true,
      },
      playgroundAlways: true,
    }
  },
  "strapi-blurhash": {
    enabled: true,
    config: {
      regenerateOnUpdate: true
    }
  },
});