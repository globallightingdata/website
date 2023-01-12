---
title: Create your first GLDF
sidebar_label: Create your first GLDF
---

## Overview 

In this step-by-step guide, we will create a simple GLDF file. 

## Prerequisites
- You need to know how to pack and unpack ZIP archives.
- You need a Text or XML Editor. Please see <a href="./requirements" target="_self">Requirements</a> for recommendations and more information.
- You will need a product image, ideally in jpg format. Or download this <a href="https://upload.wikimedia.org/wikipedia/commons/9/91/PH-Lampan_1.jpg" target="_blank">Sample image</a>.
- You need an LDT file to represent your light distribution or use our <a href="" target="_self"> sample file</a>.

## Structure of a GLDF file

GLDF is a container or ZIP-Archive. It contains all the product information and assets belonging to the product and its variants. To learn more about the container and its structure, please see <a href="../container/about-container" target="_self">About GLDF Container</a>.

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


