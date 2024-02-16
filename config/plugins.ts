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
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "strapi-blurhash": {
    enabled: true,
    config: {
      regenerateOnUpdate: true
    }
  },
});