---
title: XML Hierarchy
sidebar_label: XML Hierarchy
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

We designed `GLDF` to provide a standardized way of exchanging luminaire data between software tools and systems.

A `GLDF` file consists of three parts: `header`, `general definitions`, and `product definitions`. The header contains meta-information about the product and file, such as the manufacturer name, version information, time and date of file creation, manufacturer contact information, license keys, and more.

The second part, `general definitions`, defines reusable blocks of information. The file uses these blocks to define `Files`, `Sensors`, `Photometries`, `Spectrums`, `Light Sources`, `Control Gears`, `Equipment`, `Emitters`, and `Geometries`.

The third part is called `product definitions`. Here is where you put together your information defined in the Genera Definitions section to describe the final luminaire product and its variants.

<img src="/img/docs/structure/structure-dependencies.webp" alt="GLDF XML structure dependencies" width="500" />

For a detailed description of the individual parts of the GLDF file, please see the respective sections of the documentation.

### Header

- <a href="/docs/structure/header">Header</a>

### General Definitions

- <a href="/docs/structure/files">Files</a>
- <a href="/docs/structure/sensors">Sensors</a>
- <a href="/docs/structure/photometries">Photometries</a>
- <a href="/docs/structure/spectrums">Spectrums</a>
- <a href="/docs/structure/light-sources">Light Sources</a>
- <a href="/docs/structure/control-gears">Control Gears</a>
- <a href="/docs/structure/equipments">Equipments</a>
- <a href="/docs/structure/emitters">Emitters</a>
- <a href="/docs/structure/geometries">Geometries</a>

### Product Definitions

- <a href="/docs/structure/product">Global Product Data</a>
- <a href="/docs/structure/variant">Specific Variant Data</a>
- <a href="/docs/structure/descriptive-attributes">Descriptive Attributes</a>
