module.exports = {
  sidebar: {
    Overview: [
      "overview/introduction",
      "overview/purpose",
      "overview/features",
    ],
    "Getting started": [
      "getting-started/requirements",
      "getting-started/create-first-gldf",
      "getting-started/examples",
      "getting-started/templates",
      "getting-started/xsd-reference",
    ],
    "XML Structure": [
      "structure/xml-hierarchy",
      {
        "Manufacturer Metadada": ["structure/header"],
        "General Definitions": [
          "structure/files",
          "structure/sensors",
          "structure/photometries",
          "structure/spectrums",
          "structure/light-sources",
          "structure/control-gears",
          "structure/equipments",
          "structure/emitters",
          "structure/geometries",
        ],
        "Product MetaData": [
          "structure/product",
          "structure/variant",
          "structure/descriptive-attributes",
        ],
      },
    ],
    "GLDF Container": [
      "container/about-container",
      "container/container-specification",
    ],
    Conventions: [
      "conventions/measurement-units",
      "conventions/referencing",
      "conventions/gldf-over-ldc",
      "conventions/variant-over-global",
    ],
    "3D Geometry": [
      "geometry/introduction",
      {
        "L3D Geometry": [
          "geometry/l3d-intro",
          "geometry/l3d-examples",
          "geometry/l3d-xml-reference",
          "geometry/l3d-container-spec",
        ],
      },
    ],
    Tips: ["tips/good-products"],
    "Tools & Develop": [
      "tools-dev/dialux",
      "tools-dev/relux",
      {
        Tooling: [
          "tools-dev/gldf-editor",
          "tools-dev/l3d-editor",
          "tools-dev/gldf-check",
          "tools-dev/gldf-checksum-service",
        ],
        Parsers: ["tools-dev/gldf-net-parser", "tools-dev/l3d-net-parser"],
        Plugins: ["tools-dev/revit-plugin", "tools-dev/autodesk-plugin"],
      },
    ],
    "Get involved": ["contribute/contribute", "contribute/become-a-partner"],
  },
};
