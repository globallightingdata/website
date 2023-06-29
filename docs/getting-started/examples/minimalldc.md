---
title: Minimal LDC
sidebar_label: Minimal LDC
---

### Introduction

This example demonstrates very simple minimal GLDF file implementation with no 3d geometry. The only file reference is the light distribution curve.

Download the example here: <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>

### Explanation

The setup of the file is very straightforward. It contains no 3d geometry and only a simple light distribution curve.

There is only one file reference called ldtFile reference by one photometry called photometry01. 

There is one light source and one emitter. The emitter references the light source and the photometry.

The geometry has the simplest possible structure. It only contains the reference to the light emitter (line 55).

Because no geometry is defined, Relux and Dialux will use the LDT file to determine the geometry for their respective applications.

### product.xml

```xml {14-38,55} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Philips Lighting</Manufacturer>
		<CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication>N/A</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
		<LicenseKeys>
			<LicenseKey application="RELUX">LicenseKey</LicenseKey>
		</LicenseKeys>
		<ReluxMemberId>ReluxMemberId</ReluxMemberId>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
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
				<Geometry>
					<EmitterReference emitterId="emitter01"></EmitterReference>
				</Geometry>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>