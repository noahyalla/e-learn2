export default ({env}) => ({

    email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
        dataResidency: 'global', // or 'eu'
      },
      settings: {
        defaultFrom: 'wasasoft.mobilewebdevelopment@wmwd.cloud',
        defaultReplyTo: 'wasasoft.mobilewebdevelopment@wmwd.cloud',
      },
    },
  }
});
