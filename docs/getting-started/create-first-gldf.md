---
title: Create your first GLDF
sidebar_label: Create your first GLDF
---

## Overview 

In this step-by-step guide, we will create a simple GLDF file. 

## Prerequisites
- You need to know how to pack and unpack ZIP archives.
- You need a Text or XML Editor. Please see <a href="./requirements" target="_self">Requirements</a> for recommendations and more information.

## Structure of a GLDF file

GLDF is a container or ZIP-Archive. It contains all the product information and assets belonging to the product and its variants. To learn more about the container and its structure, please see <a href="../container/about-container" target="_self">About GLDF Container</a>.

## Preparation

In this example, we will use a template GLDF file from the GLDF Editor and recreate the product.xml file from scratch. This file contains all the necessary files, such as the product image, ldt-file, and 3d model. To download the sample, open the <a href="https://gldf-editor.gldf.io" target="_blank">GLDF Editor</a>.

:::tip Link
<a href="https://gldf-editor.gldf.io" target="_blank">GLDF Editor</a>.
:::

Open the "single round 1 variant" template by clicking on open.

<img src="/img/docs/getting-started/gldfeditor1.webp" alt="GLDF Editor" width="800" />

You can then download the template GLDF file by clicking on the download GLDF button.
<img src="/img/docs/getting-started/gldfeditor2.webp" alt="Download gldf file" width="800" />

You can open the GLDF file in your favorite archiver that supports the ZIP format. We are using 7Zip in the screenshot.

<img src="/img/docs/getting-started/7zip.webp" alt="GLDF ZIP" width="800" />

You can see the products.xml file as well as three subfolders.

- The `products.xml` file is the heart of the GLDF archive and defines the structure and properties of your product.
- The folder `ldc` contains an Eulumdat file called diffuse.ldt. This is the light distribution curve.
- The folder `image` contains the file bulb.jpg, which will be our product picture.
- Finally, `geo` contains our 3d model called recessed_round.l3d.

We will now recreate the product.xml file from scratch in the following steps.

### The product.xml file

The heart of a GLDF file is the **product.xml** file, located at the root of the archive. It contains all the product information.

The GLDF Schema defines the exact structure of the XML code in **product.xml**. You can validate your XML file against the schema to ensure your GLDF file works correctly. We describe this in the section <a href="" target="_self">validation</a>.

GLDF divides the XML structure into three sections.

- Header
- General Definitions
- Product Definitions

Please see <a href="../structure/xml-hierarchy" target="_self">xml hierarchy</a> for more information.

All sections are children of the `Root` element.

### Step 1: Create the basic XML structure
Create an XML file named **product.xml** with the following XML code.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Your Coompany Name</Manufacturer>
		<CreationTimeCode>2001-12-17T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication/>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
	</Header>
	<GeneralDefinitions/>
	<ProductDefinitions>
		<ProductMetaData>
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

Add <a href="../structure/files" target="_self">`file definitions`</a> to the section `GeneralDefinitions`.
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

We will add a <a href="../structure/photometries" target="_self">`photometry`</a> definition with a LuminousEfficacy of 98.2 and gibe it a CIE-Flux code of 44 75 94 100 100.


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

We will add a light source with a rated input power of 10.2, a Color rendering index of 95, and a color temperature of 3000. We can also set the lifetime in hours and add maintenance factor information.

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

Next we add a Control Gear with a name and description. We will also set power properties. For more information check the <a href="../conventions/measurement-units" target="_self">units</a> section.

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

We will now combine the previously defined parts in an emitter. It can later be referenced via its id emitter01.

We will now combine the previously defined parts in an emitter. You can later reference it via its id emitter01. In the same way, we are referencing the Photometry, Light source, and Control gear via their ids. We will also set the luminous flux.

```xml
<Emitters>
    <Emitter id="emitter01">
        <FixedLightEmitter emergencyBehaviour="None">
            <PhotometryReference photometryId="photom01" />
            <LightSourceReference fixedLightSourceId="s01" />
            <ControlGearReference controlGearId="c01" />
            <RatedLuminousFlux>1001</RatedLuminousFlux>
        </FixedLightEmitter>
    </Emitter>
</Emitters>
```

### Step 6: Add Geometry

Finally, we will define a geometry section that will reference our l3d file from the file definitions.

```xml
<Geometries>
	<ModelGeometry id="geometry01">
		<GeometryFileReference fileId="geo01"></GeometryFileReference>
	</ModelGeometry>
</Geometries>
```

## Product Definitions

In the product definitions section, we can combine the building blocks we defined in the general definitions section into a final product.

The product definitions section consists of two two sections: 
- Product Metadata
- Variants

:::tip Metadata
Metadata is product information that applies to all variants of a product. Instead of defining information multiple times for each variant, you can set the information in the metadata instead. See <a href="../structure/product" target="_self">Global Product Data</a> for detailed information.
:::

:::tip Variants
Variants are considered variations of a given product but not entirely different products. If your product comes in different variations like color or mounting types, you can create several variants for each version. However, do not combine completely unrelated products in a single file. See <a href="../structure/product" target="_self">Variants</a> for detailed information.
:::

### Step 7: Add Product Metadata

Add the following code to the Product Definitions section. We define a product number and an english as well as a German name for the procuct. And lastly but not least a picture is defined. 

```xml
<ProductMetaData>
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
		<Image imageType="Product Picture" fileId="pic01" />
	</Pictures>
</ProductMetaData>
```

### Step 7: Add a Variant

Last but not least, we will combine all the previously prepared building blocks into a variant. We added a simple name and description in English and German in this example.

The core of every variant is Geometry. If you do not have a 3d model, you can base the geometry on the light source within the emitter or define some basic geometry within the XML code. Basic geometry is called simple geometry, and you can specify it in the general definitions section.
The following two examples show how to use a 3d model or the light source as a geometry source.

Uing an emitter for creating the geometry:

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

Using the l3d model for the geometry:

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
		<ModelGeometryReference geometryId="geometry01">
			<EmitterReference emitterId="emitter01">
				<EmitterObjectExternalName>leo</EmitterObjectExternalName>
			</EmitterReference>
		</ModelGeometryReference>
	</Geometry>
</Variant>
```

:::tip Tip
For a detailed description on how to geometry see the section <a href="../geometry/introduction" target="_self">GLDF 3d Introduction</a>.
:::


### Step 8: Finishing up

For your file to work in Relux or DiaLUX, you may need to add your license key and member ID to the file. The header would then look like this:

```xml
<Header>
	<Manufacturer>Your Coompany Name</Manufacturer>
	<CreationTimeCode>2001-12-17T09:30:47Z</CreationTimeCode>
	<CreatedWithApplication/>
	<FormatVersion>1.0.0-rc.1</FormatVersion>
    <LicenseKeys>
	    <LicenseKey application="RELUX">ReluxKey</LicenseKey>
	    <LicenseKey application="DIALux">DialuxKey</LicenseKey>
    </LicenseKeys>
    <ReluxMemberId>demo</ReluxMemberId>
    <DIALuxMemberId>demo</DIALuxMemberId>
</Header>
```

Copy your finished XML file to the root folder of your GLDF file and make sure it is named product.xml.
Also, ensure the files referenced are located in the appropriate folders, as in the example downloaded from the GLDF editor.

Congratulations, you have now successfully created a minimalist GLDF file. 
We encourage you to browse the documentation and experiment for yourself to learn how to use the full potential GLDF has to offer. You can also find more advanced example templates in the GLDF editor.