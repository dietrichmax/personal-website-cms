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
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY")
      },
      settings: {
        defaultFrom: "noreply@mxd.codes",
        defaultReplyTo: "noreply@mxd.codes",
      },
    },
  }
});