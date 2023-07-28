---
title: Specific Variant Data
sidebar_label: Specific Variant Data
---

<!-- markdownlint-disable MD033 (no html im markdown) -->

In addition to the [`ProductMetaData`](/docs/structure/product.md) element, which contains **global** metadata of a luminaire (global across all variants), **at least one** `Variant` element with **specific luminaire metadata** must exist in the GLDF:

<img src="/img/docs/structure/variant-xsd-1.webp" alt="Variant in XSD" width="770" />

## `Variant` XSD description

<img src="/img/docs/structure/variant-xsd-2.webp" alt="Variant in XSD" width="370" />

## Mandatory example

As with many GLDF parts, a `Variant` must contain only few mandatory elements to be valid: The `id` attribute and a (translatable) `Name` element

```xml showLineNumbers {16-21}
<Root>
  <Header>
    <!-- Skipped for clarity -->
  </Header>
  <GeneralDefinitions />
  <ProductDefinitions>
    <ProductMetaData>
      <ProductNumber>
        <Locale language="en">Global product number</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">Global product name</Locale>
      </Name>
    </ProductMetaData>
    <Variants>
      <Variant id="VariantWithMandatoryElementsOnly">
        <Name>
          <Locale language="en">Secific variant name in English</Locale>
          <Locale language="de">Spezifischer Produktname auf Deutsch</Locale>
        </Name>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

## Complete example

The following is a complete example of a `Variant` with many optional elements. Only the [`DescriptiveAttributes`](/docs/structure/descriptive-attributes.md) are listed shortend to not go beyond the scope.

```xml showLineNumbers {56-98}
<?xml version="1.0" encoding="UTF-8"?>
<Root>
  <Header>
    <!-- Content skipped for clarity -->
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="eulumdatNarrowFile" contentType="ldc/eulumdat" type="localFileName">NarrowLdc.ldt</File>
      <File id="luminaireImage" contentType="image/jpg" type="localFileName">ProductPicture.jpg</File>
      <File id="luminaireSymbol" contentType="symbol/svg" type="localFileName">ProductSymbol.svg</File>
    </Files>
    <Photometries>
      <Photometry id="photometryNarrow">
        <PhotometryFileReference fileId="eulumdatNarrowFile" />
      </Photometry>
    </Photometries>
    <LightSources>
      <ChangeableLightSource id="metalHalideLamp_1500lumen">
        <!-- Content skipped for clarity -->
      </ChangeableLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="electronicControlGear">
        <!-- Content skipped for clarity -->
      </ControlGear>
    </ControlGears>
    <Equipments>
      <Equipment id="equipmentWithBallast_210w">
        <LightSourceReference changeableLightSourceId="metalHalideLamp_1500lumen" />
        <ControlGearReference controlGearId="electronicControlGear" />
        <RatedInputPower>100</RatedInputPower>
      </Equipment>
    </Equipments>
    <Emitters>
      <Emitter id="emitter1_Narrow">
        <ChangeableLightEmitter emergencyBehaviour="Combined">
          <Name>
            <Locale language="en">Spot narrow, round</Locale>
          </Name>
          <PhotometryReference photometryId="photometryNarrow" />
          <EquipmentReference equipmentId="equipmentWithBallast_210w" />
        </ChangeableLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <ProductNumber>
        <Locale language="en">Global product number</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">Global product name</Locale>
      </Name>
    </ProductMetaData>
    <Variants>
      <Variant id="CompleteVariantExample">
        <ProductNumber>
          <Locale language="en">Specific variant number</Locale>
        </ProductNumber>
        <Name>
          <Locale language="en">Specific variant name</Locale>
        </Name>
        <Description>
          <Locale language="en">Specific variant description</Locale>
        </Description>
        <TenderText>
          <Locale language="en">Specific variant tender text</Locale>
        </TenderText>
        <GTIN>12345678</GTIN>
        <Mountings>
          <Ceiling>
            <Recessed recessedDepth="500">
              <CircularCutout>
                <Diameter>120</Diameter>
                <Depth>50</Depth>
              </CircularCutout>
            </Recessed>
            <SurfaceMounted />
          </Ceiling>
        </Mountings>
        <Geometry>
          <EmitterReference emitterId="emitter1_Narrow" />
        </Geometry>
        <ProductSeries>
          <ProductSerie id="ceilingLuminaires">
            <Name>
              <Locale language="en">Ceiling luminaires</Locale>
            </Name>
          </ProductSerie>
        </ProductSeries>
        <Pictures>
          <Image fileId="luminaireImage" imageType="Product Picture" />
        </Pictures>
        <Symbol fileId="luminaireSymbol" />
        <DescriptiveAttributes>
          <!-- Skipped for clarity -->
        </DescriptiveAttributes>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

## Element description

### `id` (attribute, required)

An unique identifier for each variant. For reference in applications, should it be required.

### `sortOrder` (attribute, optional)

The `sortOrder` attribute is optional and only necessary, if for some reasons variants should be displayed in an other order than specified by their occurrence in the `Variants` collection.

### `ProductNumber` (optional)

Variant product number. Translatable. Overwrites the `ProductNumber` element of [`ProductMetaData`](/docs/structure/product.md)

### `Name` (required)

Variant name. Translatable. Overwrites the `Name` element of [`ProductMetaData`](/docs/structure/product.md)

### `Description` (optional)

Variant description. Translatable. Overwrites the `Description` element of [`ProductMetaData`](/docs/structure/product.md)

### `TenderText` (optional)

Variant tender text. Translatable. Overwrites the `TenderText` element of [`ProductMetaData`](/docs/structure/product.md)

### `GTIN` (optional)

Variant Global Trade Item Number. GTINs must be 8, 12, 13, or 14 digits long. See [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number)

### `Mountings` (optional)

Variant mounting place, type and position. See [XSD Reference](pathname:///xsd-reference/index_Root.html) for all possible types.

### `Geometry` (optional)

Contains child elements to reference the `GlobalDefinitions` parts [`Geometry`](/docs/structure/geometries.md) and [`Emitter`](/docs/structure/emitters.md). For details on the variants `Geometry` element see [below](/docs/structure/variant#geometry-options).

### `ProductSeries` (optional)

Product series applicable to a single variant of the product. Overwrites the `ProductSeries` element of [`ProductMetaData`](/docs/structure/product.md). The `id` attribute must be unique for different product series. But equal across different GLDF files for the same product series.

### `Pictures` (optional)

Images applicable to a single variant of the product. Must reference a [`File`](/docs/structure/files.md) element. Overwrites the `Pictures` element of [`ProductMetaData`](/docs/structure/product.md)

### `Symbol` (optional)

Definition of symbol images relevant for this variant. SVG and/or DXF file types are possible. Must reference a [`File`](/docs/structure/files.md) element.

### `DescriptiveAttributes` (optional)

Attributes applicable to a single variant of the product. Overwrites the `DescriptiveAttributes` with same name defined in [`ProductMetaData`](/docs/structure/product.md).

## Geometry options

The reference of the geometry and its association with an [Emitter](/docs/structure/emitters.md) in a variant allows many combinations and will therefore be examined separately at this point. There are five options to define the variants geometric shape and its radiation emitting places:

<img src="/img/docs/structure/variant-geometries-overview.webp" alt="Variant in XSD" width="600" />

### 1. No emitter reference

Luminaires in GLDF can be created completely **without geometry and emitter**, as the `Geometry` element is optional. For example, to transport **pure marketing data**. Or should no photometric data be available for a luminaire yet. In practice, however, this is **not recommended**. As no calculations can be done with such a product in e.g. [DIALux](https://www.dialux.com) or [RELUX](https://relux.com/en/relux-desktop.html).

### 2. EmitterReference

The `EmitterReference` is the simplest way to define the geometric shape and the variants emitter. You don't need a [simple geometry](/docs/structure/geometries.md) or a [3D model](/docs/geometry/introduction.md) for your luminaire. Instead, the **geometric shape is taken from the photometry file** - as far as possible and with all the **disadvantages** such as only a very simple representation in the form of a cuboid (and possibly cylinder in Eulumdat).

<img src="/img/docs/structure/variant-emitter-reference.webp" alt="Variant EmitterReference" width="490" />

An XML example for an `EmitterReference` can be found [above](/docs/structure/variant#complete-example).

### 3. SimpleGeometryReference

The `SimpleGeometryReference` element allows to create a geometry in the complexity similar to the possibilities in Eulumdat. However, the difference is that this shape can be defined **directly in the GLDF** and thus **overrides** the geometry of the photometry. This shall be illustrated by an example. In which an [`Emitter`](/docs/structure/emitters.md) is created with reference to a [`Photometry`](/docs/structure/photometries.md). Which actually contains a geometry, but which is **overwritten** by the definition of a [SimpleGeometry](/docs/structure/geometries.md):

<img src="/img/docs/structure/variant-simple-geometry-reference.webp" alt="Variant SimpleGeometryReference" width="530" />

```xml showLineNumbers {29-35,38-48,65-68}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/gldf.xsd">
    <Header>
        <Manufacturer>Manufacturer X</Manufacturer>
        <CreationTimeCode>2022-11-30T09:00:00</CreationTimeCode>
        <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
        <FormatVersion>1.0.0-rc.1</FormatVersion>
    </Header>
    <GeneralDefinitions>
        <Files>
            <File id="photometryFile" contentType="ldc/eulumdat" 
                  type="localFileName">SomePhotometry.ldt</File>
        </Files>
        <Photometries>
            <Photometry id="photometry">
                <PhotometryFileReference fileId="photometryFile"/>
            </Photometry>
        </Photometries>
        <LightSources>
            <FixedLightSource id="fixedLightSource">
                <Name>
                    <Locale language="en">LED module 50W</Locale>
                </Name>
                <RatedInputPower>50</RatedInputPower>
            </FixedLightSource>
        </LightSources>
        <Emitters>
            <Emitter id="fixedEmitter">
                <FixedLightEmitter>
                    <PhotometryReference photometryId="photometry"/>
                    <LightSourceReference fixedLightSourceId="fixedLightSource"/>
                    <RatedLuminousFlux>400</RatedLuminousFlux>
                </FixedLightEmitter>
            </Emitter>
        </Emitters>
        <Geometries>
            <SimpleGeometry id="cuboidGeometry">
                <Cuboid>
                    <Width>1000</Width>
                    <Length>500</Length>
                    <Height>200</Height>
                </Cuboid>
                <RectangularEmitter>
                    <Width>1000</Width>
                    <Length>500</Length>
                </RectangularEmitter>
            </SimpleGeometry>
        </Geometries>
    </GeneralDefinitions>
    <ProductDefinitions>
        <ProductMetaData>
            <ProductNumber>
                <Locale language="en">42</Locale>
            </ProductNumber>
            <Name>
                <Locale language="en">Example Luminaire</Locale>
            </Name>
        </ProductMetaData>
        <Variants>
            <Variant id="variant-1">
                <Name>
                    <Locale language="en">Example luminaire simple geometry</Locale>
                </Name>
                <Geometry>
                    <SimpleGeometryReference geometryId="cuboidGeometry" 
                                             emitterId="fixedEmitter"/>
                </Geometry>
            </Variant>            
        </Variants>
    </ProductDefinitions>
</Root>
```

### 4. ModelGeometryReference

If you want to provide **real and detailed** models for your luminaires **instead of generic** ones, you first need L3D files. Create [`ModelGeometry`](/docs/structure/geometries.md) elements under `GeneralDefinitions`. Assign them their level-of-detail like in the example below, should you provide more than one. And reference them finally through the `ModelGeometryReference` element in the variant.

:::tip
Try out our [L3D Editor](https://l3d-editor.gldf.io), read the [L3D Editor documentation](/docs/tools-dev/l3d-editor.md) and [L3D documentation](/docs/geometry/l3d-intro.md) on how to create 3D models.
:::

<img src="/img/docs/structure/variant-model-geometry-reference.webp" alt="Variant ModelGeometryReference" width="800" />

```xml showLineNumbers {33-39,42-45,63-67}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/gldf.xsd">
    <Header>
        <Manufacturer>Manufacturer X</Manufacturer>
        <CreationTimeCode>2022-11-30T09:00:00</CreationTimeCode>
        <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
        <FormatVersion>1.0.0-rc.1</FormatVersion>
    </Header>
    <GeneralDefinitions>
        <Files>
            <File id="photometryFile" contentType="ldc/eulumdat" 
                  type="localFileName">SomePhotometry.ldt</File>
            <File id="geometryFileLowDetail" contentType="geo/l3d" 
                  type="localFileName">geometryLowPoly.l3d</File>
            <File id="geometryFileHighDetail" contentType="geo/l3d" 
                  type="localFileName">geometryHighPoly.l3d</File>
        </Files>
        <Photometries>
            <Photometry id="photometry">
                <PhotometryFileReference fileId="photometryFile"/>
            </Photometry>
        </Photometries>
        <LightSources>
            <FixedLightSource id="fixedLightSource">
                <Name>
                    <Locale language="en">LED module 50W</Locale>
                </Name>
                <RatedInputPower>50</RatedInputPower>
            </FixedLightSource>
        </LightSources>
        <Emitters>
            <Emitter id="fixedEmitter">
                <FixedLightEmitter>
                    <PhotometryReference photometryId="photometry"/>
                    <LightSourceReference fixedLightSourceId="fixedLightSource"/>
                    <RatedLuminousFlux>400</RatedLuminousFlux>
                </FixedLightEmitter>
            </Emitter>
        </Emitters>
        <Geometries>
            <ModelGeometry id="modelGeometry">
                <GeometryFileReference fileId="geometryFileLowDetail" levelOfDetail="Low"/>
                <GeometryFileReference fileId="geometryFileHighDetail" levelOfDetail="High"/>
            </ModelGeometry>
        </Geometries>
    </GeneralDefinitions>
    <ProductDefinitions>
        <ProductMetaData>
            <ProductNumber>
                <Locale language="en">42</Locale>
            </ProductNumber>
            <Name>
                <Locale language="en">Example Luminaire</Locale>
            </Name>
        </ProductMetaData>
        <Variants>
            <Variant id="variant-1">
                <Name>
                    <Locale language="en">Example luminaire simple geometry</Locale>
                </Name>
                <Geometry>
                    <ModelGeometryReference geometryId="modelGeometry">
                        <EmitterReference emitterId="fixedEmitter">
                            <EmitterObjectExternalName>leoNameInL3dModel</EmitterObjectExternalName>
                        </EmitterReference>
                    </ModelGeometryReference>
                </Geometry>
            </Variant>
        </Variants>
    </ProductDefinitions>
</Root>
```

Another attribute of `ModelGeometryReference`, which isn't shown in the example, is `targetModelType`. However, it is only needed in probably very rare cases and **only necessary** if

- you want to use the obsolete 3D formats m3d and r3d for your luminaire (or a combination of L3D and m3d/r3d)
- and the light-emitting surface in these models is **named differently**:

```xml showLineNumbers {3-4,6-7}
<Geometry>
    <ModelGeometryReference geometryId="modelGeometry">
        <EmitterReference emitterId="fixedEmitter" targetModelType="r3d">
            <EmitterObjectExternalName>leoNameInR3dModel</EmitterObjectExternalName>
        </EmitterReference>
        <EmitterReference emitterId="fixedEmitter" targetModelType="m3d">
            <EmitterObjectExternalName>sameEmitterButOtherNameInM3dModel</EmitterObjectExternalName>
        </EmitterReference>
    </ModelGeometryReference>
</Geometry>
```

### 5. GeometryReferences

The last option is not a new one, but a combination of two previous ones: The possibility to combine a `SimpleGeometry` and a `ModelGeometry`. Applications could then use these depending on their requirements: For building design with hundreds of luminaires, only the simple geometry could be displayed for example. While architects for lighting calculation could enable the 3D models instead:

<img src="/img/docs/structure/variant-model-geometry-references.webp" alt="Variant ModelGeometryReference" width="950" />
