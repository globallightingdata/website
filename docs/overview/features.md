---
title: GLDF Features
sidebar_label: Features
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

One clear advantage stands out: luminaires manufacturers and members of RELUX and DIAL only need to create data in a **single format**. However, GLDF offers numerous advantages **accessible to all users**, regardless of their affiliation with either of the software houses:

- Standard **XML**, covered by a fully documented **XML Schema (XSD)** for input assistance and validation
- Definition of **global product data** as well as multiple **specific variants** - each variant with its own GTIN.
- **Comprehensive metadata** elements to describe the company and contact possibilities.
- Providing of **binary data** like pictures, 3D models, documents and more.
- Binaries can either be **embedded as local files** or as referenced **online resources** through links.
- **Sophisticated technical data** and a wide range of capabilities for **marketing data**
- **Translations** with multiple languages for most textual properties.
- Definition of **lamps in absolute state** (LED) **or relative** state (conventional).
- Various **geometry possibilities**. From photometry to XML to complex **3D models**.
- Embeding of 3D models with **multiple LOD** (level-of-detail).
- Light **emission surfaces**, **rotating elements**, **suspension** points, **electrical connection** and more.
- Luminaires with **multiple** light and/or sensor **emitters**.
- **Emergency lighting** through photometry or Emergency Ballast Lumen Factors.
- **Multichannel** luminaires with various properties for each channel.
- Constant light output **CLO** and international **maintenance factors**.
- **Spectrum** and **dimming** curves.
- Definition of **control gears** and their combination with light sources in light outputs.
- Optional use of many of the **BIM and IFC properties** (CEN/TS 17623, ISO/TS 7127).
- Generic **custom properties** to transport own data, either textual or binary.

### Light-descriptive properties

GLDF encompasses a comprehensive array of lighting specialties essential for **accurate luminaire and sensor qualification and calculation**. From multiple Light Emitting Objects (LEO) and Light Emitting Surfaces (LES). To Joints, lamp sets, dim curves, multichannel support, spectral data, and a wide range of other important lighting data – they all form the core building blocks of GLDF. It is this extensive inclusion of lighting-specific information combined with **marketing data** that sets GLDF apart as a distinctive lighting data format, exceptional in the industry.

### Custom data

Today there are way over **200 native properties** in the GLDF to describe products. Additionally, the **hierarchical product structure** delivers more information than just plain properties. With **generic properties** it is possible to add all kind of custom data of the product or the variant. This is quite efficient if the property source is official and public (e.g. norms and standards). But it’s also possible to transport own properties just for internal usage, like a PIM ID number for example. Custom properties can also be used application-specific for a certain tool or working environment.

**Example**: If *rated luminous flux* was not already a native property on its own, it could also be specified generically in the GLDF as follows:

<img src="/img/docs/overview/custom_properties.webp" alt="GLDF Custom Properties" width="750" /><br/><br/>

This empowers efficient lighting data transportation and opens the door to a new era of lighting data possibilities, facilitating easy communication and interoperability among various stakeholders in the lighting ecosystem.

### Variants

The hierarchical structure of GLDF allows an easy and effective handling of global properties and specific variants. Most global properties of the luminaire, like the geometry or photometry, can be overwritten for each variant freely.

### Asset links

In place of embedded physical files within the [**GLDF container**](/docs/container/about-container.md), links to all assets can be employed. Whether it's photometries, images, 3D models, or PDF documents, each asset can be **referenced through a URL to its source**. This approach not only ensures a **compact GLDF** file size but also facilitates a highly **adaptable asset management system** and enables **seamless updates** to product data. With GLDF, multiple pictures, various types of documents and more can be effortlessly incorporated.

### Emergency lighting

GLDF provides comprehensive coverage of **emergency lighting characteristics**. From the simple specification of reduced luminous flux in emergency lighting environments. To a fully defined emergency light output with its own photometry, color information and power consumption.

### Open geometry: L3D

Together with GLDF, we also created [**L3D**](/docs/geometry/l3d-intro.md) for 3D models - a **versatile and open XML-based data format for luminaire geometry** description with lighting-Specific information.

L3D is an innovative 3D data format for the lighting industry, built on top the open [**OBJ file format**](https://en.wikipedia.org/wiki/Wavefront_.obj_file). Designers can now freely create luminaire geometry **using any preferred tool**, while seamlessly integrating **lighting-specific data through an XML** extension. This includes vital information such as mounting points and electrical connectors, ensuring a **comprehensive and flexible representation** of the luminaire. GLDF can transport **3 LOD levels** for each geometry: low, medium, and high.
