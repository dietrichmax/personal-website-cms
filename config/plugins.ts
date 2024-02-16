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
  "strapi-blurhash": {
    enabled: true,
    config: {
      regenerateOnUpdate: true
    }
  },
});