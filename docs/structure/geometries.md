---
title: Geometries
sidebar_label: Geometries
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Description

`Geometries` is the ninth child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of Geometries is **optional**.

`Geometries` can be defined in two ways. First, simple geometry through a direct description in the GLDF, secondly, by a reference to an external L3D file [**File**](/docs/structure/files.md).  

## Location in XSD

![Geometries in XSD](/img/docs/structure/geometries-hierarchy.webp)

## XSD description

A `Simple geometry` corresponds to the descriptions known from the photometric format Eulumdat. Here a luminaire can be either rectangular box or a cylinder.
More extensive and detailed descriptions can be achieved by reframing [**L3D files**](//docs/geometry/l3d-intro.md). Please inform yourself there about details!

<img src="/img/docs/structure/geometries-xsd.webp" alt="Geometries in XSD" width="400" />

<img src="/img/docs/structure/geometries-details-xsd.webp" alt="Geometriedetails in XSD" width="800" />

## XML example

```xml {8-12} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
        <File id="geometryFile" contentType="geo/l3d" type="localFileName">MyGeometry.l3d</File>
    </Files>
    <Geometries>
        <ModelGeometry id="geometry">
            <GeometryFileReference fileId="geometryFile" levelOfDetail="Medium" />
        </ModelGeometry>
    </Geometries>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

The `Geometry` Element above describes a single geometry. The attribute `levelOfDetail` allows applications to display the models in three different levels of detail (`low`, `medium`, `high`).
Provided that these have been entered.

## Referencing a geometry

Once declared, all geometries can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

```xml  {9,20} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
        <File id="geometryFile1" contentType="geo/l3d" type="localFileName">MyGeometry.l3d</File>
    </Files>
    <Geometries>
        <ModelGeometry id="geometry01">
            <GeometryFileReference fileId="geometryFile1" levelOfDetail="Medium" />
        </ModelGeometry>
    </Geometries>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData/>
    <Variants>
      <Variant id="variant1">
        <Name/>
        <Geometry>
          <ModelGeometryReference geometryId="geometry01">
            <EmitterReference emitterId="emitter01">
              <EmitterObjectExternalName>LEO</EmitterObjectExternalName>
            </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

The `Geometry` of subsequent element `Variant` refers in this example to `ModelGeometry` with `geometryId` *geometry01* (line 20), defines the geometry of this variant and link the `EmitterObject` in the L3D with the `EmitterReference`, in other words the photometry and light source.
