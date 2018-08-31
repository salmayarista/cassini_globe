require([
    "esri/config",
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    // "dojo/dom",
    // "dojo/on",
    "esri/layers/GraphicsLayer",

    "esri/Graphic",
    "esri/geometry/Point",
    "esri/geometry/Polyline",
    "esri/geometry/Polygon",

    "esri/symbols/PointSymbol3D",
    "esri/symbols/ObjectSymbol3DLayer",

    // "dojo/domReady!"
  ],

    function (
      esriConfig, WebScene, SceneView, FeatureLayer, dom, on,
      GraphicsLayer,
      Graphic, Point, Polyline, Polygon,
      PointSymbol3D, ObjectSymbol3DLayer
    ) {

      var webscene = new WebScene({
        portalItem: {
          id: "bf0191e7bff44563b227f023f04696ca"
        }
      });

      view = new SceneView({
        container: "viewDiv",
        map: webscene,
        alphaCompositingEnabled: true,
        environment: {
          background: {
            type: "color",
            color: [255, 255, 255, 0]
          },
          atmosphereEnabled: false,
          starsEnabled: false
        },
        ui: {
          components: ["attribution"]
        }
      });

      view.when(() => {
        view.map.ground = {
          surfaceColor: [255, 255, 255],
          opacity: 1
        }
        view.watch('zoom', (value) => {
          document.getElementById("image").style.filter = getBlur(value);
        })
      });

      function getBlur(value) {
        return `blur(${Math.min(4, Math.exp(value - 3))}px)`;
      }

    });