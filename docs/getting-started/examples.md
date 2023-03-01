---
title: GLDF Examples
sidebar_label: Examples
---

In this section, we will be showcasing example GLDF files. They represent real GLDFs that you can use for orientation purposes. All samples are available for download from the GitHub repository.


## Minimal Geo

This example demonstrates very simple minimal GLDF file implementation with no complexity. 

Download the example here: <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo" target="_blank">Minimal Geo.gldf</a>

### Explanation

The setup of the file is very straightforward. It contains a simple 3d geometry, light emitter, and light source in the general definitions section with a minimum amount of meta information.

The file is referenced in line 15.

It also references a basic L3D file in the file definitions. The screenshot below shows that the 3d file contains only one light-emitting object named LEO, which we will reference later in the Geomtry part of the product.xml file.

<img src="/img/docs/getting-started/minimalgeor3d.webp" alt="Minimal Geo r3d model in editor" width="800" />

The following XML code references the single light-emitting object of the 3d file. See line 67.

### product.xml

```xml {15,67} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Philips Lighting</Manufacturer>
		<CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication>N/A</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
		<LicenseKeys>
			<LicenseKey application="RELUX">24JqTzyAIkJuxC0g</LicenseKey>
		</LicenseKeys>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
			<File id="geometryFile" contentType="geo/l3d" type="localFileName">SP542P_SRD_L1480_U3_1_xLED66S_940_OC.l3d</File>
		</Files>
		<Photometries>
			<Photometry id="photometry01">
				<PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="lightSource01">
				<Name>
					<Locale language="de">LED</Locale>
				</Name>
				<RatedInputPower>47.5</RatedInputPower>
			</FixedLightSource>
		</LightSources>
		<Emitters>
			<Emitter id="emitter01">
				<FixedLightEmitter>
					<PhotometryReference photometryId="photometry01"/>
					<LightSourceReference fixedLightSourceId="lightSource01"/>
					<RatedLuminousFlux>6600</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
		</Emitters>
		<Geometries>
			<ModelGeometry id="geometry01">
				<GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>
			</ModelGeometry>
		</Geometries>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="de">SP542P</Locale>
			</ProductNumber>
			<Name>
				<Locale language="de">Pendelleuchten SP542P LED66S/940</Locale>
			</Name>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1">
				<Name>
					<Locale language="en">Variant 1</Locale>
				</Name>
				<Mountings>
					<Ceiling>
						<SurfaceMounted/>
					</Ceiling>				
				</Mountings>
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









## Minimal LDC

## Philips SP542P

## SLV - Tria 2 with sensor

## Trilux Belviso S CDP

## Zumtobel P-EVO R100L
