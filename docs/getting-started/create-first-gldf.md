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

To create your first gldf file, create a parent directory named *product*.

- Create three subdirectories named *image*, *geo*, and *ldc*.
- Download the <a href="/other/diffuse.ldt" target="_blank">ldc file</a> and store it in the *ldc* directory.
- Download the <a href="/other/recessed_round.l3d" target="_blank">l3d file</a> and store it in the *geo* directory.
- Download the <a href="/other/bulb.jpg" target="_blank">image file</a> and store it in the *image* directory.
- Create an empty XML file named *product.xml* and place it in the parent directory.

To create our first gldf file, we will edit the xml file in the following steps.

![Directory structure with subdirectories](/img/docs/getting-started/gldfdirectories.webp)

### The product.xml file

The heart of a GLDF file is the **product.xml** file, located in the root of the archive. It contains all the product information. The GLDF XML Schema (XSD) defines the exact structure of the XML code in *product.xml*. You can validate your XML file against this XSD to ensure your GLDF file works correctly.

GLDF divides the XML structure into three sections.

- `Header`
- `GeneralDefinitions`
- `ProductDefinitions`

All sections are children of the `Root` element. Please see [XML hierarchy](/docs/structure/xml-hierarchy.md) for more information.

### Step 1: Create the basic XML structure

Open the just created *product.xml* XML file in your favorite text editor and add the following code:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Your Coompany Name</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3"/>
    <CreatedWithApplication>Your Code Editor</CreatedWithApplication>
    <GldfCreationTimeCode>2023-08-02T16:22:47+02:00</GldfCreationTimeCode>
    <UniqueGldfId>Your UniqueGldfId</UniqueGldfId>
  </Header>
  <GeneralDefinitions/>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>Your UniqueProductId</UniqueProductId>
      <ProductNumber>
        <Locale language="en"/>
      </ProductNumber>
      <Name>
        <Locale language="en"/>
      </Name>
    </ProductMetaData>
    <Variants>
      <Variant id="variant-1">
        <Name>
          <Locale language="en"/>
        </Name>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

If you are using a text editor that supports XML Schema validation, you should now be able to validate the XML code against the XSD (see [Requirements](/docs/getting-started/requirements.md)).

## General Definitions

We will start by making some general definitions which will be referenced in the product definitions section later. Add the following Code inside the `GeneralDefinitions` section of your file.

### Step 2: Add file definitions

Add [`Files`](/docs/structure/files.md) to the `GeneralDefinitions` section. To use our product picture and the Eulumdat file, we need to define these files in the `GeneralDefinitions` section. That means we need to add two `File` elements to the `Files` child element of it.

The code will look like this:

```xml
<Files>
  <File id="ldtFile-1" contentType="ldc/eulumdat" type="localFileName">diffuse.ldt</File>
  <File id="pictureFile-1" contentType="image/jpg" type="localFileName">PH-Lampan_1.jpg</File>
  <File id="geometryFile-1" contentType="geo/l3d" type="localFileName">recessed_round.l3d</File>
</Files>
```

### Step 3: Add Photometry

Next, we add a [`Photometry`](/docs/structure/photometries.md) definition with a LuminousEfficacy of 98.2 and define the CIE-Flux code as *44 75 94 100 100*.

```xml
<Photometries>
  <Photometry id="photometry-1">
    <PhotometryFileReference fileId="ldtFile-1" />
    <DescriptivePhotometry>
      <LuminousEfficacy>98.2</LuminousEfficacy>
      <CIE-FluxCode>44 75 94 100 100</CIE-FluxCode>
    </DescriptivePhotometry>
  </Photometry>
</Photometries>
```

### Step 4: Add Light Source

Now will add a [`FixedLightSource`](/docs/structure/light-sources.md) with a rated input power of 10.2, a color rendering index of 95, and a color temperature of 3000. We can also set the lifetime in hours and add maintenance factor information.

```xml
<LightSources>
  <FixedLightSource id="fixedLightSource-1">
    <Name>
      <Locale language="en">LED</Locale>
    </Name>
    <Description>
      <Locale language="en">LED 10W</Locale>
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

Next we add a [`ControlGear`](/docs/structure/control-gears.md) with a `Name` and `Description` in English (`en`) and German (`de`). We will also set power properties. For more information check the [Units](/docs/conventions/measurement-units.md) section.

```xml
<ControlGears>
  <ControlGear id="controlGear-1">
    <Name>
      <Locale language="en">LED driver</Locale>
      <Locale language="de">LED Vorschaltgerät</Locale>
    </Name>
    <Description>
      <Locale language="en">LED driver 15W</Locale>
      <Locale language="de">LED Vorschaltgerät 15W</Locale>
    </Description>
    <StandbyPower>0.7</StandbyPower>
    <ConstantLightOutputStartPower>10.2</ConstantLightOutputStartPower>
    <ConstantLightOutputEndPower>14.7</ConstantLightOutputEndPower>
    <PowerConsumptionControls>0.8</PowerConsumptionControls>
  </ControlGear>
</ControlGears>
```

### Step 5: Add Emitter

Now we will combine the previously defined parts in an [`Emitter`](/docs/structure/emitters.md). It can later be referenced via its id *emitter-1*. In the same way, we are referencing the `Photometry`, `LightSource`, and `ControlGear` elements via their ids. We will also set the luminous flux to 1000.

```xml
<Emitters>
  <Emitter id="emitter-1">
    <FixedLightEmitter emergencyBehaviour="None">
      <PhotometryReference photometryId="photometry-1" />
      <LightSourceReference fixedLightSourceId="fixedLightSource-1" />
      <ControlGearReference controlGearId="controlGear-1" />
      <RatedLuminousFlux>1000</RatedLuminousFlux>
    </FixedLightEmitter>
  </Emitter>
</Emitters>
```

### Step 6: Add Geometry

Finally, we will define a [`Geometry`](/docs/structure/geometries.md) section that will reference our L3D file from the file definitions.

```xml
<Geometries>
  <ModelGeometry id="geometry-1">
    <GeometryFileReference fileId="geometryFile-1" />
  </ModelGeometry>
</Geometries>
```

## Product Definitions

In the [`ProductDefinitions`](/docs/structure/product.md) section, we can combine the building blocks we defined in the `GeneralDefinitions` section into a final product. The product definitions consists of two child elements:

- [**ProductMetadata**](/docs/structure/product.md)  
  ProductMetadata defines global product information that applies to all variants of a GLDF. Instead of defining information multiple times for each variant, you can set the information in the global ProductMetadata instead.
- [**Variants**](/docs/structure/variant.md)  
  Variants are considered variations of a given product but not entirely different products. If your product comes in different variations like color or mounting types, you can create several variants for each version.

:::warning Warning
Do not misuse variants to combine completely unrelated products in a single GLDF file.
:::

### Step 7: Add Product Metadata

Add the following code to the `ProductDefinitions` section. We define a product number and a product name, again translated into English and German. And add the previously defined picture and labeled it as a `Product Picture`.

```xml
<ProductMetaData>
 <UniqueProductId>Your UniqueProductId</UniqueProductId>
 <ProductNumber>
  <Locale language="en">Some product number 123</Locale>
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
  <Image imageType="Product Picture" fileId="pictureFile-1"/>
 </Pictures>
</ProductMetaData>
```

### Step 7: Add a Variant

Last but not least, we will combine all the previously prepared building blocks into a [`Variant`](/docs/structure/variant.md). We add a simple `Name` and `Description` in English and German in this example.

The core of every `Variant` is `Geometry` child element. If you do not have a 3D model, you can base the geometry on the light source referenced within the [Emitter](/docs/structure/emitters.md) or define some basic geometry within the XML code (see ([`Geometry`](/docs/structure/geometries.md))). The following two examples show how to use a 3D model or the light source as a geometry source.

- Using the geometry from [`Photometry`](/docs/structure/photometries.md):

```xml
<Variant id="variant-1">
  <Name>
    <Locale language="en">Variant 1</Locale>
    <Locale language="de">Variante 1</Locale>
  </Name>
  <Description>
    <Locale language="en">Description of variant 1</Locale>
    <Locale language="de">Beschreibung der Variante 1</Locale>
  </Description>
  <Geometry>
    <EmitterReference emitterId="emitter-1"/>
  </Geometry>
</Variant>
```

- Using the geometry from a L3D model:

```xml
<Variant id="variant-2">
  <Name>
    <Locale language="en">Variant 2</Locale>
    <Locale language="de">Variante 2</Locale>
  </Name>
  <Description>
    <Locale language="en">Description of variant 2</Locale>
    <Locale language="de">Beschreibung der Variante 2</Locale>
  </Description>
  <Geometry>
    <ModelGeometryReference geometryId="geometry-1">
      <EmitterReference emitterId="emitter-1">
        <EmitterObjectExternalName>leo</EmitterObjectExternalName>
      </EmitterReference>
    </ModelGeometryReference>
  </Geometry>
</Variant>
```

:::tip Tip
For a detailed description on how to add 3D models to your GLDF, see [GLDF 3D Introduction](/docs/geometry/introduction.md).
:::

### Step 8: Finishing up

Your finished XML code should look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
 <Header>
  <Manufacturer>Your Company Name</Manufacturer>
  <FormatVersion major="1" minor="0" pre-release="3"/>
  <CreatedWithApplication>Your Code Editor</CreatedWithApplication>
  <GldfCreationTimeCode>2023-08-02T16:22:47+02:00</GldfCreationTimeCode>
  <UniqueGldfId>Your UniqueGldfId</UniqueGldfId>
 </Header>
 <GeneralDefinitions>
  <Files>
   <File id="ldtFile-1" contentType="ldc/eulumdat" type="localFileName">diffuse.ldt</File>
   <File id="pictureFile-1" contentType="image/jpg" type="localFileName">PH-Lampan_1.jpg</File>
   <File id="geometryFile-1" contentType="geo/l3d" type="localFileName">recessed_round.l3d</File>
  </Files>
  <Photometries>
   <Photometry id="photometry-1">
    <PhotometryFileReference fileId="ldtFile-1"/>
    <DescriptivePhotometry>
     <LuminousEfficacy>98.2</LuminousEfficacy>
     <CIE-FluxCode>44 75 94 100 100</CIE-FluxCode>
    </DescriptivePhotometry>
   </Photometry>
  </Photometries>
  <LightSources>
   <FixedLightSource id="fixedLightSource-1">
    <Name>
     <Locale language="en">LED</Locale>
    </Name>
    <Description>
     <Locale language="en">LED 10W</Locale>
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
   <ControlGear id="controlGear-1">
    <Name>
     <Locale language="en">LED driver</Locale>
     <Locale language="de">LED Vorschaltgerät</Locale>
    </Name>
    <Description>
     <Locale language="en">LED driver 15W</Locale>
     <Locale language="de">LED Vorschaltgerät 15W</Locale>
    </Description>
    <StandbyPower>0.7</StandbyPower>
    <ConstantLightOutputStartPower>10.2</ConstantLightOutputStartPower>
    <ConstantLightOutputEndPower>14.7</ConstantLightOutputEndPower>
    <PowerConsumptionControls>0.8</PowerConsumptionControls>
   </ControlGear>
  </ControlGears>
  <Emitters>
   <Emitter id="emitter-1">
    <FixedLightEmitter emergencyBehaviour="None">
     <PhotometryReference photometryId="photometry-1"/>
     <LightSourceReference fixedLightSourceId="fixedLightSource-1"/>
     <ControlGearReference controlGearId="controlGear-1"/>
     <RatedLuminousFlux>1000</RatedLuminousFlux>
    </FixedLightEmitter>
   </Emitter>
  </Emitters>
  <Geometries>
   <ModelGeometry id="geometry-1">
    <GeometryFileReference fileId="geometryFile-1"/>
   </ModelGeometry>
  </Geometries>
 </GeneralDefinitions>
 <ProductDefinitions>
  <ProductMetaData>
   <UniqueProductId>Your UniqueProductId</UniqueProductId>
   <ProductNumber>
    <Locale language="en">Some product number 123</Locale>
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
    <Image imageType="Product Picture" fileId="pictureFile-1"/>
   </Pictures>
  </ProductMetaData>
  <Variants>
   <Variant id="variant-1">
    <Name>
     <Locale language="en">Variant 1</Locale>
     <Locale language="de">Variante 1</Locale>
    </Name>
    <Description>
     <Locale language="en">Description of variant 1</Locale>
     <Locale language="de">Beschreibung der Variante 1</Locale>
    </Description>
    <Geometry>
     <EmitterReference emitterId="emitter-1"/>
    </Geometry>
   </Variant>
   <Variant id="variant-2">
    <Name>
     <Locale language="en">Variant 2</Locale>
     <Locale language="de">Variante 2</Locale>
    </Name>
    <Description>
     <Locale language="en">Description of variant 2</Locale>
     <Locale language="de">Beschreibung der Variante 2</Locale>
    </Description>
    <Geometry>
     <ModelGeometryReference geometryId="geometry-1">
      <EmitterReference emitterId="emitter-1">
       <EmitterObjectExternalName>leo</EmitterObjectExternalName>
      </EmitterReference>
     </ModelGeometryReference>
    </Geometry>
   </Variant>
  </Variants>
 </ProductDefinitions>
</Root>
```

## GLDF archive 

### Step 9: Create the .gldf archive

Finally, compress your just created folder containing

- The *product.xml* in the root
- All referenced files in corresponding subfolders

into an ZIP archive and change the extension from *.zip* to *.gldf*.

Congratulations, you have now successfully created a minimal GLDF file. We encourage you to browse the documentation and experiment for yourself to learn how to use the full potential GLDF has to offer.
