---
title: XML Hierarchy
sidebar_label: XML Hierarchy
---


We designed `GLDF` to provide a standardized way of exchanging luminaire data between software tools and systems.

A `GLDF` file consists of three parts: `Header`, `GeneralDefinitions`, and `ProductDefinitions`. The header contains meta-information about the product and file, such as the manufacturer name, version information, time and date of file creation, manufacturer contact information, license keys, and more.

The second part, `GeneralDefinitions`, defines reusable blocks of information. The file uses these blocks to define `Files`, `Sensors`, `Photometries`, `Spectrums`, `LightSources`, `ControlGears`, `Equipments`, `Emitters`, and `Geometries`.

The third part is called `ProductDefinitions`. Here is where you put together your information defined in the `GeneralDefinitions` section to describe the final luminaire product and its variants.

<img src="/img/docs/structure/structure-dependencies.webp" alt="GLDF XML structure dependencies" width="500" />

For a detailed description of the individual parts of the GLDF file, please see the respective sections of the documentation.

## Header

- [Header](/docs/structure/header)

### General Definitions

- [Files](/docs/structure/files)
- [Sensors](/docs/structure/sensors)
- [Photometries](/docs/structure/photometries)
- [Spectrums](/docs/structure/spectrums)
- [Light Sources](/docs/structure/light-sources)
- [Control Gears](/docs/structure/control-gears)
- [Equipments](/docs/structure/equipments)
- [Emitters](/docs/structure/emitters)
- [Geometries](/docs/structure/geometries)

### Product Definitions

- [Global Product Data](/docs/structure/product)
- [Specific Variant Data](/docs/structure/variant)
- [Descriptive Attributes](/docs/structure/descriptive-attributes)
