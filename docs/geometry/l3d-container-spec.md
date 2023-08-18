---
title: L3D Container Specification
sidebar_label: Container Specification
---

## General

- The container files' **underlying format** is a standard [ZIP archive](https://en.wikipedia.org/wiki/ZIP_(file_format))
- The container file **extension** is `.l3d`

## Root folder content

In the root of the container file, the following elements are expected:

Mandatory

- **L3D-XML** file, with the file name `structure.xml`.
- At least one directory with .OBJ file

Optional

- Corresponding MTL/Texture files if available
- L3D-XSD Schema file, with the filename l3d.xsd

## L3D-XML File

- Filename
  - The **filename** of the **L3D-XML** inside the root directory must be `structure.xml`.
- The **L3D-XML** file is expected to be valid as follows
  - Valid XML syntax.
  - Valid against the referenced l3d.xsd, see below.
  - Invalid XMLs files may not be parsed and lead to errors.

## **L3D-XSD** Schema

- The **official** L3D-XSD Schema can always be found published on [gldf.io](/download) or our [Github repository](https://github.com/globallightingdata/l3d)

## Directories

- Each model has to be placed in a **separate directory** where the directory name **matches** the `id` of the [`GeometryFileDefinition`](/docs/geometry/l3d-xml-reference.md#geometryfiledefinition) which uses the model.
- All material library and texture files have to be placed in the **same directory** as the **corresponding model**.

## Model Files

- Supported model files
  - Version 1 of the L3D-Format only supports **Wavefront** .obj files, including the material files .mtl
  - From the material file the **diffuse color** and **diffuse texture data** are supported, for now.  

:::caution
The .obj files must not contain more than one material per file.
:::

## Textures

- Supported texture formats
  - JPEG
  - PNG

## GLDF Container

The **GLDF** container specification is described [here](/docs/container/container-specification)
