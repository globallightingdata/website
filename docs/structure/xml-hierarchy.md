---
title: XML Hierarchy
sidebar_label: XML Hierarchy
---

We designed GLDF to provide a standardized way of exchanging luminaire data between software tools and systems.

A GLDF file consists of three parts: header, general definitions, and product definitions. The header contains meta-information about the product and file, such as the manufacturer name, version information, time and date of file creation, manufacturer contact information, license keys, and more.

The second part, general definitions, defines reusable blocks of information. The file uses these blocks to define Files, Sensors, Photometries, Spectrums, Light Sources, Control Gears, Equipment, Emitters, and Geometries.

The third part is called product definitions. Here is where you put together your information defined in the Genera Definitions section to describe the final luminaire product and its variants.

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/structure-dependencies.webp" alt="GLDF XML structure dependencies" width="500" />