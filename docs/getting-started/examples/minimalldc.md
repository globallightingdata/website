---
title: Minimal LDC
sidebar_label: Minimal LDC
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

### Introduction

This example demonstrates very simple minimal GLDF file implementation with no 3D geometry. The only file reference is the light distribution curve.

Download the example here: <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>

### Explanation

- The setup of the file is very straightforward. It contains no 3D geometry and only a simple light distribution curve.
- There is only one file reference called ldtFile reference by one photometry called photometry01.
- There is one light source and one emitter. The emitter references the light source and the photometry.
- The geometry has the simplest possible structure. It only contains the reference to the light emitter (line 55).
- Because no geometry is defined, Relux and DIALux will use the LDT file to determine the geometry for their respective applications.

### product.xml

```xml {16-36,55} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Philips Lighting</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>
    <UniqueGldfId>d0c97760-6e30-4ed7-ad3e-7ce11d105438</UniqueGldfId>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="ldtFile" contentType="ldc/eulumdat" 
            type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
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
          <PhotometryReference photometryId="photometry01" />
          <LightSourceReference fixedLightSourceId="lightSource01" />
          <RatedLuminousFlux>6600</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>86acec52-1dab-4f14-874e-d9251c5c093f</UniqueProductId>
      <ProductNumber>
        <Locale language="de">SP542P</Locale>
      </ProductNumber>
      <Name>
        <Locale language="de">Pendelleuchte SP542P LED66S/940</Locale>
      </Name>
    </ProductMetaData>
    <Variants>
      <Variant id="variant1">
        <Name>
          <Locale language="de">Variante 1</Locale>
        </Name>
        <Geometry>
          <EmitterReference emitterId="emitter01" />
        </Geometry>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>
