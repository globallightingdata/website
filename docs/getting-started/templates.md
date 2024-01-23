---
title: GLDF Templates
sidebar_label: Templates
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Overview

One way to **get started** with GLDF is to use predefined **templates**. Be it to learn the format or as a base for new GLDFs. Templates are **GLDFs presets**, and each represents a specific sub-area of the format.

However, please keep in mind that they should only serve as a **starting point**. Many templates focus on a **specific part of the format** and include **only the mandatory elements** for the rest. However, since most properties are optional and usually a lot of other data is missing, they should be used **as an example only**. The goal should be to combine the templates with the parts you need. And **provide as many information about your product as possible**.

:::tip
All templates can be found on [**Github**](https://github.com/globallightingdata/templates). Under [**Releases**](https://github.com/globallightingdata/templates/releases) you can find versioned packages for download, matching the respective GLDF XML Schema version.
:::

---

### How to get started

- Choose the template you would like to start with...
- ...or combine multiple templates for your XML as required
- Replace the data inside the `product.xml` with yours
- Replace all files like photometries or images
- Zip the content and create the GLDF
  - The `product.xml` should be in the root directory
  - Images, photometries etc. should be in respective subdirectories
  - Finally, change the file extension of the zip archive to `.gldf`
  - See [GLDF Container](/docs/container/about-container.md) for further details
- All templates have an example `.gldf` file created this way

---

## The Templates

<img src="/img/docs/getting-started/templates-overview.webp" alt="Templates" width="510" />

### Mandatory fields

#### [`000_simple_luminaire`](https://github.com/globallightingdata/templates/tree/master/000_simple_luminaire)

Template for the most basic luminaire without a photometry.

#### [`001_simple_luminaire_ldc`](https://github.com/globallightingdata/templates/tree/master/001_simple_luminaire_ldc)

Template for the most basic luminaire including a ldc file and [`Photometry`](/docs/structure/photometries.md) element.

---

### Geometry possibilities

#### [`002_simple_geometry`](https://github.com/globallightingdata/templates/tree/master/002_simple_geometry)

Minimal luminaire with a [`SimpleGeometry`](/docs/structure/geometries.md) element.

##### [`003_l3d_geometry`](https://github.com/globallightingdata/templates/tree/master/003_l3d_geometry)

Minimal luminaire with a [L3D geometry](../geometry/introduction.md) file and [`ModelGeometry`](/docs/structure/geometries.md) element.

---

#### [`004_geometry_level_of_detail`](https://github.com/globallightingdata/templates/tree/master/004_geometry_level_of_detail)

A luminaire with multiple L3D level of detail (LoD) [geometry](../geometry/introduction.md) file and [`ModelGeometry`](/docs/structure/geometries.md) elements.

### Header metadata

#### [`005_header`](https://github.com/globallightingdata/templates/tree/master/005_header)

Minimal luminaire extended with a complete [`Header`](../structure/header.md) element containing all possible elements.

---

### Sensor products

#### [`006_sensor`](https://github.com/globallightingdata/templates/tree/master/006_sensor)

The most basic [`Sensor`](../structure/sensors.md) only product you can create.

#### [`007_sensor_and_lightemitter`](https://github.com/globallightingdata/templates/tree/master/007_sensor_and_lightemitter)

A luminaire with a [`Sensor`](../structure/sensors.md) and [`ChangeableLightEmitter`](../structure/emitters.md) combined.

---

### Photometries

#### [`008_photometry_complete`](https://github.com/globallightingdata/templates/tree/master/008_photometry_complete)

Minimal luminaire extended with a [`Photometry`](../structure/photometries.md) element containing all possible elements.

---

### LightSources

#### [`009_lightsource_manadatory`](https://github.com/globallightingdata/templates/tree/master/009_lightsource_mandatory)

Template with mandatory only elements of a [`ChangeableLightSource`](../structure/light-sources.md). As well as an [`Equipment`](../structure/equipments.md), which is used to reference the [`ChangeableLightSource`](../structure/light-sources.md) inside the luminaires [`Variant`](../structure/variant.md).

#### [`010_lightsource_complete`](https://github.com/globallightingdata/templates/tree/master/010_lightsource_complete)

Template with a [`ChangeableLightSource`](../structure/light-sources.md) element containing all possible elements. As well as an [`Equipment`](../structure/equipments.md), which is used to reference the [`ChangeableLightSource`](../structure/light-sources.md) inside the luminaires [`Variant`](../structure/variant.md).

#### [`011_lightsource_multichannel`](https://github.com/globallightingdata/templates/tree/master/011_lightsource_multichannel)

Template with a [`MultiChannelLightSource`](../structure/light-sources.md) element, referenced by a [`MultiChannelLightEmitter`](../structure/emitters.md).

---

### Spectrum

#### [`012_spectrum`](https://github.com/globallightingdata/templates/tree/master/012_spectrum)

Luminaire with a [`Spectrum`](../structure/spectrums.md) element. Note in particular how the [`Spectrum`](../structure/spectrums.md) is referenced inside a [`ChangeableLightSource`](../structure/light-sources.md). Which in turn is referenced through an [`Equipment`](../structure/equipments.md) element. And how it is possible to define a [`Spectrum`](../structure/spectrums.md) as a file reference (spectrum1) and inside the XML itself (spectrum2).

---

### ControlGears

#### [`013_control_gear`](https://github.com/globallightingdata/templates/tree/master/013_control_gear)

Luminaire with a complete [`ControlGear`](../structure/control-gears.md) element containing all possible childs elements. As well as an [`Equipment`](../structure/equipments.md) referencing the [`ControlGear`](../structure/control-gears.md) through `ControlGearReference`.

---

### Product

#### [`014_product_metadata`](https://github.com/globallightingdata/templates/tree/master/014_product_metadata)

Luminaire with a complete [`ProductMetaData`](/docs/structure/product.md) element containing all possible child elements. [`ProductMetaData`](../structure/product.md) is intended for global properties of a product.

---

#### [`015_variant_simple_lightemitter`](https://github.com/globallightingdata/templates/tree/master/015_variant_simple_lightemitter)

Luminaire with a complete [`Variant`](../structure/variant.md) element.

#### [`016_variant_simple_sensoremitter`](https://github.com/globallightingdata/templates/tree/master/016_variant_simple_sensoremitter)

Luminaire with a complete [`Variant`](../structure/variant.md) element containing a reference to a [`SensorEmitter`](../structure/emitters.md).

#### [`017_variant_geometry_reference`](https://github.com/globallightingdata/templates/tree/master/017_variant_geometry_reference)

Luminaire with a complete [`Variant`](../structure/variant.md) element containing all possible elements, a [l3d geometry](../geometry/introduction.md) and a [`Sensor`](../structure/sensors.md).

---

### DescriptiveAttributes

#### [`018_descriptive_attributes`](https://github.com/globallightingdata/templates/tree/master/018_descriptive_attributes)

Luminaire with a complete [`DescriptiveAttributes`](../structure/descriptive-attributes.md) element inside [`ProductMetadata`](../structure/product.md) and [`Variant`](../structure/variant.md). [`DescriptiveAttributes`](../structure/descriptive-attributes.md) values inside a [`Variant`](../structure/variant.md) will override the global defined values in [`ProductMetadata`](../structure/product.md).
