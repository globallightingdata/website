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
      {
        "Example files":[
          "getting-started/examples/minimalgeo",
          "getting-started/examples/minimalldc",
          "getting-started/examples/philips",
          "getting-started/examples/slv",
          "getting-started/examples/trilux",
          "getting-started/examples/zumtobel",
        ],
      },
      "getting-started/templates",
      "getting-started/xsd-reference",
    ],
    "XML Structure": [
      "structure/xml-hierarchy",
      "structure/header",
      {
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
      "container/meta-information",
      "container/container-specification",
    ],
    Conventions: [
      "conventions/ids-and-timecodes",
      "conventions/measurement-units",
      "conventions/referencing",
      "conventions/gldf-over-ldc",
      "conventions/variant-over-global",
    ],
    "3D Geometry": [
      "geometry/introduction",
      {
        "Parametric Geometry": [
          "geometry/parametric-introduction",
          "geometry/parametric-features",
          {
            "Parametric Types":[
              "geometry/types/parametric-round-recessed",
              "geometry/types/parametric-cuboid-recessed",
              "geometry/types/parametric-open-luminaire",
              "geometry/types/parametric-cuboid",
              "geometry/types/parametric-sphere",
              "geometry/types/parametric-parabolic",
              "geometry/types/parametric-cylinder",
              "geometry/types/parametric-stand-cylinder",
              "geometry/types/parametric-stand-cuboid-centered",
              "geometry/types/parametric-stand-cuboid-side",
              "geometry/types/parametric-wall-cuboid",
              "geometry/types/parametric-wall-cylinder",
              "geometry/types/parametric-wall-triangular",
              "geometry/types/parametric-bollard-cuboid",
              "geometry/types/parametric-bollard-cylinder",
              "geometry/types/parametric-bollard-side",
              "geometry/types/parametric-street-cylinder-centered",
              "geometry/types/parametric-street-cuboid-side",
              "geometry/types/parametric-street-cylinder-side",
              "geometry/types/parametric-spot-cylinder",
              "geometry/types/parametric-spot-cuboid",
              "geometry/types/parametric-flood-light-cylinder",
              "geometry/types/parametric-flood-light-cuboid",
            ],
          },
        ],
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
          "tools-dev/l3d-editor",
        ],
        Parsers: ["tools-dev/gldf-net-parser", "tools-dev/l3d-net-parser"],
      },
    ],
    "Get involved": ["contribute/contribute", "contribute/become-a-partner"],
  },
};
