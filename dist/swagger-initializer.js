window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "https://raw.githubusercontent.com/greenbone/openvas-scanner/main/rust/doc/openapi.yml", name: "Scanner API"},
      {url: "https://raw.githubusercontent.com/greenbone/openvas-scanner/fd617e86b2cfc1e083905b5672081c51cd9150d9/rust/doc/reverse-sensor-openapi.yml", name: "Reverse Scanner API"}
    ],
    "urls.primaryName": "Scanner API",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
