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

## Step 1: Create the basic XML structure
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

## Step 2: Add file definitions

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

## Step 3: Add Photometry

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

## Step 4: Add Light Source

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

## Step 5: Add Control Gear

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

## Step 5: Add Emitter

We will now combine the previously defines parts in an emitter. It can later be referenced via its id emitter01.

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


