module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      // TODO: Se instalo dotenv pero no esta funcionando de momento, revisar luego
      apiUrl: process.env.API_URL || 'https://backend-staging.playoffside.online',
    }
  };
};