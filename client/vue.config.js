module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: "http://mimir.local",
    watchOptions: {
      poll: false
    },
    disableHostCheck: true
  },
  pwa: {
    name: 'Imsights',
    workboxPluginMode: "InjectManifest",
    themeColor: "#fffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      swSrc: "src/registerServiceWorker.js"
    }
  }
};
