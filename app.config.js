module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      // TODO: Se instalo dotenv pero no esta funcionando de momento, revisar luego
      apiUrl: process.env.API_URL || 'http://192.168.1.106:3000',
    }
  };
};