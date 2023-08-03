---
title: Create your first GLDF
sidebar_label: Create your first GLDF
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Overview

In this step-by-step guide, we will create a simple GLDF file.

## Prerequisites

- You need to know how to pack and unpack ZIP archives.
- You need a Text or XML Editor. Please see [Requirements](/docs/getting-started/requirements.md) for recommendations and more information.

## Structure of a GLDF file

GLDF is a container or ZIP-Archive. It contains all the product information and assets belonging to the product and its variants. To learn more about the container and its structure, please see [About GLDF Container](/docs/container/about-container.md).

## Preparation

To create your first gldf file, create a parent directory named product.

- Create three subdirectories named image, geo, and ldc. Download the image file and save it in the image subdirectory.
- Download the <a href="/other/diffuse.ldt" target="_blank">ldc file</a> and store it in the ldc directory.
- Download the <a href="/other/recessed_round.l3d" target="_blank">l3d file</a> and store it in the geo directory.
- Download the <a href="/other/bulb.jpg" target="_blank">image file</a> and store it in the image directory.
- Create an xml file and place it in the parent directory.

To create our first gldf file, we will edit the xml file in the following steps.

![Directory structure with subdirectories](/img/docs/getting-started/gldfdirectories.webp)

### The product.xml file

The heart of a GLDF file is the **product.xml** file, located in the root of the archive. It contains all the product information.

The GLDF Schema defines the exact structure of the XML code in **product.xml**. You can validate your XML file against the schema to ensure your GLDF file works correctly.

GLDF divides the XML structure into three sections.

- `Header`
- `GeneralDefinitions`
- `ProductDefinitions`

All sections are children of the `Root` element. Please see [XML hierarchy](/docs/structure/xml-hierarchy.md) for more information.

### Step 1: Create the basic XML structure

Open the XML file you just created, named product.xml, in your favorite text editor, such as Notepad++ or Visual Studio Code or another. Add the following code.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Your Coompany Name</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3"/>
    <CreatedWithApplication>Your Code Editor</CreatedWithApplication>
    <GldfCreationTimeCode>2023-08-02T16:22:47+02:00</GldfCreationTimeCode>
    <UniqueGldfId>UniqueGldfId</UniqueGldfId>
  </Header>
  <GeneralDefinitions/>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>UniqueProductId</UniqueProductId>
      <ProductNumber>
        <Locale language="en-us"/>
      </ProductNumber>
      <Name>
        <Locale language="en-us"/>
      </Name>
    </ProductMetaData>
    <Variants>
      <Variant id="Variant01">
        <Name>
          <Locale language="en-us"/>
        </Name>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

Your editor should now be able to validate the XML code against the schema.

## General Definitions

We will start by making some general definitions which will be referenced in the product definitions section later. Add the following Code inside the General Definitions section of your file.

### Step 2: Add file definitions

Add [`file definitions`](/docs/structure/files.md) to the section `GeneralDefinitions`.
To use our product picture and the Eulumdat file, we need to define these files in the General definitions section. That means we need to add two files to the General definitions section.

The code for this will look like this:

```xml
<Files>
  <File id="ldtfile" contentType="ldc/eulumdat" type="localFileName">diffuse.ldt</File>
  <File id="pic01" contentType="image/jpg" type="localFileName">PH-Lampan_1.jpg</File>
  <File id="geo01" contentType="geo/l3d" type="localFileName">recessed_round.l3d</File>
</Files>
```

### Step 3: Add Photometry

We will add a [`photometry`](/docs/structure/photometries.md) definition with a LuminousEfficacy of 98.2 and define the CIE-Flux code as *44 75 94 100 100*.

```xml
<Photometries>
  <Photometry id="photom01">
    <PhotometryFileReference fileId="ldtfile" />
    <DescriptivePhotometry>
      <LuminousEfficacy>98.2</LuminousEfficacy>
      <CIE-FluxCode>44 75 94 100 100</CIE-FluxCode>
    </DescriptivePhotometry>
  </Photometry>
</Photometries>
```

### Step 4: Add Light Source

We will add a [light source](/docs/structure/light-sources.md) with a rated input power of 10.2, a color rendering index of 95, and a color temperature of 3000. We can also set the lifetime in hours and add maintenance factor information.

```xml
<LightSources>
  <FixedLightSource id="s01">
    <Name>
      <Locale language="en">LED</Locale>
    </Name>
    <Description>
      <Locale language="en">Module with 1 LED light source.</Locale>
    </Description>
    <RatedInputPower>10.2</RatedInputPower>
    <ColorInformation>
      <ColorRenderingIndex>95</ColorRenderingIndex>
      <CorrelatedColorTemperature>3000</CorrelatedColorTemperature>
    </ColorInformation>
    <LightSourceMaintenance lifetime="50000">
      <LedMaintenanceFactor hours="40000">0.94</LedMaintenanceFactor>
    </LightSourceMaintenance>
  </FixedLightSource>
</LightSources>
```

### Step 5: Add Control Gear

Next we add a [control gear](/docs/structure/control-gears.md) with a name and description. We will also set power properties. For more information check the [Units](/docs/conventions/measurement-units.md) section.

```xml
<ControlGears>
  <ControlGear id="c01">
    <Name>
      <Locale language="en">LED drive 01</Locale>
    </Name>
    <Description>
      <Locale language="en">LED driver</Locale>
    </Description>
    <StandbyPower>0.7</StandbyPower>
    <ConstantLightOutputStartPower>10.2</ConstantLightOutputStartPower>
    <ConstantLightOutputEndPower>14.7</ConstantLightOutputEndPower>
    <PowerConsumptionControls>0.8</PowerConsumptionControls>
  </ControlGear>
</ControlGears>
```

### Step 5: Add Emitter

We will now combine the previously defined parts in an [Emitter](/docs/structure/emitters.md). It can later be referenced via its id *emitter01*. In the same way, we are referencing the Photometry, Light source, and Control gear via their ids. We will also set the luminous flux to 1000.

```xml
<Emitters>
  <Emitter id="emitter01">
    <FixedLightEmitter emergencyBehaviour="None">
      <PhotometryReference photometryId="photom01" />
      <LightSourceReference fixedLightSourceId="s01" />
      <ControlGearReference controlGearId="c01" />
      <RatedLuminousFlux>1000</RatedLuminousFlux>
    </FixedLightEmitter>
  </Emitter>
</Emitters>
```

### Step 6: Add Geometry

Finally, we will define a [Geometry](/docs/structure/geometries.md) section that will reference our L3D file from the file definitions.

```xml
<Geometries>
  <ModelGeometry id="geometry01">
    <GeometryFileReference fileId="geo01" />
  </ModelGeometry>
</Geometries>
```

## Product Definitions

In the [product definitions](/docs/structure/product.md) section, we can combine the building blocks we defined in the general definitions section into a final product. The product definitions section consists of two two sections:

- [**ProductMetadata**](/docs/structure/product.md)  
  ProductMetadata defines global product information that applies to all variants of a GLDF. Instead of defining information multiple times for each variant, you can set the information in the global ProductMetadata instead.
- [**Variants**](/docs/structure/variant.md)  
  Variants are considered variations of a given product but not entirely different products. If your product comes in different variations like color or mounting types, you can create several variants for each version.

:::warning Warning
Do not misuse variants to combine completely unrelated products in a single GLDF file.
:::

### Step 7: Add Product Metadata

Add the following code to the Product Definitions section. We define a product number and a product name,  translated into English and German. And add a picture and labeled it as a product picture.

```xml
<ProductMetaData>
 <UniqueProductId>UniqueProductId</UniqueProductId>
 <ProductNumber>
  <Locale language="en">123</Locale>
 </ProductNumber>
 <Name>
  <Locale language="en">Round Luminaire</Locale>
  <Locale language="de">Runde Leuchte</Locale>
 </Name>
 <Description>
  <Locale language="en">Round luminaire for indoors</Locale>
  <Locale language="de">Runde Leuchte für Innenräume</Locale>
 </Description>
 <Pictures>
  <Image imageType="Product Picture" fileId="pic01"/>
 </Pictures>
</ProductMetaData>
```

### Step 7: Add a Variant

Last but not least, we will combine all the previously prepared building blocks into a [Variant](/docs/structure/variant.md). We add a simple name and description in English and German in this example.

The core of every variant is Geometry. If you do not have a 3D model, you can base the geometry on the light source within the [Emitter](/docs/structure/emitters.md) or define some basic geometry within the XML code. Basic geometry is called simple geometry, and you can specify it in the general definitions section.
The following two examples show how to use a 3D model or the light source as a geometry source.

- Using the geometry from [Photometry](/docs/structure/photometries.md):

```xml
<Variant id="var_01">
  <Name>
    <Locale language="en">Variant 1</Locale>
    <Locale language="de">Variante 2</Locale>
  </Name>
  <Description>
    <Locale language="en">Description of variant 1</Locale>
    <Locale language="de">Beschreibung der Variante 1</Locale>
  </Description>
  <Geometry>
    <EmitterReference emitterId="emitter01"/>
  </Geometry>
</Variant>
```

- Using the geometry from a L3D model:

```xml
<Variant id="var_02">
  <Name>
    <Locale language="en">Variant 1</Locale>
    <Locale language="de">Variante 2</Locale>
  </Name>
  <Description>
    <Locale language="en">Description of variant 1</Locale>
    <Locale language="de">Beschreibung der Variante 1</Locale>
  </Description>
  <Geometry>
    <ModelGeometryReference geometryId="geometry01">
      <EmitterReference emitterId="emitter01">
        <EmitterObjectExternalName>leo</EmitterObjectExternalName>
      </EmitterReference>
    </ModelGeometryReference>
  </Geometry>
</Variant>
```

:::tip Tip
For a detailed description on how to geometry see the section [GLDF 3D Introduction](/docs/geometry/introduction.md).
:::

### Step 8: Finishing up

For your file to work in Relux or DIALux, you may need to add your license key and member ID to the file. The [Header](/docs/structure/header.md) would then look like this:

```xml
  <Header>
    <Manufacturer>Your Coompany Name</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3"/>
    <CreatedWithApplication>Your Code Editor</CreatedWithApplication>
    <GldfCreationTimeCode>2023-08-02T16:22:47+02:00</GldfCreationTimeCode>
    <UniqueGldfId>UniqueGldfId</UniqueGldfId>
    <LicenseKeys>
      <LicenseKey application="RELUX">ReluxKey</LicenseKey>
      <LicenseKey application="DIALux">DialuxKey</LicenseKey>
    </LicenseKeys>
    <ReluxMemberId>demo</ReluxMemberId>
    <DIALuxMemberId>demo</DIALuxMemberId>
  </Header>
```

Your finished XML code should look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Your Coompany Name</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3"/>
    <CreatedWithApplication>Your Code Editor</CreatedWithApplication>
    <GldfCreationTimeCode>2023-08-02T16:22:47+02:00</GldfCreationTimeCode>
    <UniqueGldfId>UniqueGldfId</UniqueGldfId>
    <LicenseKeys>
      <LicenseKey application="RELUX">ReluxKey</LicenseKey>
      <LicenseKey application="DIALux">DialuxKey</LicenseKey>
    </LicenseKeys>
    <ReluxMemberId>demo</ReluxMemberId>
    <DIALuxMemberId>demo</DIALuxMemberId>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="ldtfile" contentType="ldc/eulumdat" type="localFileName">diffuse.ldt</File>
      <File id="pic01" contentType="image/jpg" type="localFileName">PH-Lampan_1.jpg</File>
      <File id="geo01" contentType="geo/l3d" type="localFileName">recessed_round.l3d</File>
    </Files>
    <Photometries>
      <Photometry id="photom01">
        <PhotometryFileReference fileId="ldtfile"/>
        <DescriptivePhotometry>
          <LuminousEfficacy>98.2</LuminousEfficacy>
          <CIE-FluxCode>44 75 94 100 100</CIE-FluxCode>
        </DescriptivePhotometry>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="s01">
        <Name>
          <Locale language="en">LED</Locale>
        </Name>
        <Description>
          <Locale language="en">Module with 1 LED light source.</Locale>
        </Description>
        <RatedInputPower>10.2</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>95</ColorRenderingIndex>
          <CorrelatedColorTemperature>3000</CorrelatedColorTemperature>
        </ColorInformation>
        <LightSourceMaintenance lifetime="50000">
          <LedMaintenanceFactor hours="40000">0.94</LedMaintenanceFactor>
        </LightSourceMaintenance>
      </FixedLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="c01">
        <Name>
          <Locale language="en">LED drive 01</Locale>
        </Name>
        <Description>
          <Locale language="en">LED driver</Locale>
        </Description>
        <StandbyPower>0.7</StandbyPower>
        <ConstantLightOutputStartPower>10.2</ConstantLightOutputStartPower>
        <ConstantLightOutputEndPower>14.7</ConstantLightOutputEndPower>
        <PowerConsumptionControls>0.8</PowerConsumptionControls>
      </ControlGear>
    </ControlGears>
    <Emitters>
      <Emitter id="emitter01">
        <FixedLightEmitter emergencyBehaviour="None">
          <PhotometryReference photometryId="photom01"/>
          <LightSourceReference fixedLightSourceId="s01"/>
          <ControlGearReference controlGearId="c01"/>
          <RatedLuminousFlux>1000</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
    </Emitters>
    <Geometries>
      <ModelGeometry id="geometry01">
        <GeometryFileReference fileId="geo01"/>
      </ModelGeometry>
    </Geometries>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>UniqueProductId</UniqueProductId>
      <ProductNumber>
        <Locale language="en">123</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">Round Luminaire</Locale>
        <Locale language="de">Runde Leuchte</Locale>
      </Name>
      <Description>
        <Locale language="en">Round luminaire for indoors</Locale>
        <Locale language="de">Runde Leuchte für Innenräume</Locale>
      </Description>
      <Pictures>
        <Image imageType="Product Picture" fileId="pic01"/>
      </Pictures>
    </ProductMetaData>
    <Variants>
      <Variant id="var_01">
        <Name>
          <Locale language="en">Variant 1</Locale>
          <Locale language="de">Variante 2</Locale>
        </Name>
        <Description>
          <Locale language="en">Description of variant 1</Locale>
          <Locale language="de">Beschreibung der Variante 1</Locale>
        </Description>
        <Geometry>
          <EmitterReference emitterId="emitter01"/>
        </Geometry>
      </Variant>
      <Variant id="var_02">
        <Name>
          <Locale language="en">Variant 1</Locale>
          <Locale language="de">Variante 2</Locale>
        </Name>
        <Description>
          <Locale language="en">Description of variant 1</Locale>
          <Locale language="de">Beschreibung der Variante 1</Locale>
        </Description>
        <Geometry>
          <ModelGeometryReference geometryId="geometry01">
            <EmitterReference emitterId="emitter01">
              <EmitterObjectExternalName>leo</EmitterObjectExternalName>
            </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

Copy your finished XML file to the root folder of your GLDF file and make sure it is named *product.xml*. Also, ensure the files referenced are located in the appropriate folders, as in the example downloaded from the GLDF editor.

Congratulations, you have now successfully created a minimal GLDF file. We encourage you to browse the documentation and experiment for yourself to learn how to use the full potential GLDF has to offer. You can also find more advanced example templates in the GLDF editor.
