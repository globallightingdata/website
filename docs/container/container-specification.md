---
title: GLDF Container Specification
sidebar_label: Container Specification
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## General

- The container files' **underlying format** is a standard [ZIP archive](https://en.wikipedia.org/wiki/ZIP_(file_format))
- The container file **extension** is `.gldf`

## Root folder content

In the root of the container file the following **elements** are **expected**

Mandatory

- **GLDF-XML** file, with the file name `product.xml`

Optional

- Multiple **directories** for assets like photometries, images, geometry files and other
- A `meta-information.xml` file. Intended for **additional information** like [digital signatures](https://en.wikipedia.org/wiki/Digital_signature)
- **GLDF-XSD** Schema file, with the filename `gldf.xsd`

## GLDF-XML file (`product.xml`)

- Filename
  - The **filename** of the GLDF XML inside the root directory **must** be `product.xml`
- The **GLDF-XML** file is expected to be **valid as follows**
  - Valid [XML syntax](https://en.wikipedia.org/wiki/XML)
  - Valid against the referenced `gldf.xsd`, see below
- **Invalid** XMLs files may not be parsed and **lead to errors**

## GLDF-XSD Schema

- The **official** GLDF-XSD Schema can always be found published on [gldf.io](/download) or our [Github repository](https://github.com/globallightingdata/gldf)
- The GLDF-XSD has to be **referenced** by the GLDF-XML file
- The GLDF-XSD Schema can be referenced either **online** or **locally** inside the container
- Referenced XSDs which **differ** from the officially published XSDs may lead to **errors**. Please use only the published XSDs for validation and development

## Meta-Information File (`meta-information.xml`)

See [Meta-Information](/docs/container/meta-information)

## Directories

- The *root* directory may contain **further directories**
- These directories can contain **assets** like images, photometries, spectrums, 3D models or documents
- Directory **names**
  - The directory name must reflect the **first part** of the **`contentType`** of the files it contains
  - For possible content types please refer the [`Files` documentation](/docs/structure/files.md#available-content-types)
  - **Examples**
    - The contenttype for JPG images is `image/jpg`. The directory name for this asset must be `image`
    - The contenttype for PNG images is `image/png`. The directory name for this asset must be `image`
    - The contenttype for Eulumdat photometries is `ldc/eulumdat`. The directory name for this asset must be `ldc`
    - The contenttype for IES photometries is `ldc/ies`. The directory name for this asset must be `ldc`

## Container example

For a manufacturer with the name *ManufacturerXY* and a luminaire with the name *Pendulum 50W LED*, the GLDF file content could have the following structure:

```bash
    ManufacturerXY-Pendulum-50W-LED.gldf
    |—— product.xml
    |—— meta-information.xml
    |—— image/
    |   |—— productimage.jpg
    |   |—— familyimage.jpg
    |—— ldc/
    |   |—— lightsource-photometry.ldt
    |   |—— luminaire-photometry.ldt
    |—— geo/
    |   |—— luminaire-3d-model.l3d
    |—— document/
    |   |—— luminaire-manual.pdf
    |—— spectrum/
    |   |—— lightsource-spectrum.txt
```

## L3D Container

The [Luminaire 3D](/docs/geometry/l3d-intro) container specification is described [here](/docs/geometry/l3d-container-spec)
