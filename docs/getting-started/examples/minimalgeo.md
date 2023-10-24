---
title: Minimal Geo
sidebar_label: Minimal Geo
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

### Introduction

This example demonstrates very simple minimal GLDF file implementation with no complexity.

Download the example here: <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo" target="_blank">Minimal Geo.gldf</a>

### Explanation

The setup of the file is very straightforward. It contains a simple 3D geometry, light emitter, and light source in the general definitions section with a minimum amount of meta information.

It also references a basic L3D file in the file definitions. The screenshot below shows that the 3D file contains only one light-emitting object named LEO, which we will reference later in the Geomtry part of the product.xml file.

<img src="/img/docs/getting-started/examples_minimalgeo_3D.webp" alt="Minimal Geo r3d model in editor" width="800" />

### product.xml

The following XML code references the single light-emitting object of the 3D file. The 3D file is referenced in line 15-16 and the LEO inside this 3D file in the Emitter in line 68.

```xml {15-16,69} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Philips Lighting</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>
    <UniqueGldfId>03fe1a15-8691-4cf0-876c-f9a67aa0e66b</UniqueGldfId>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="ldtFile" contentType="ldc/eulumdat" 
            type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
      <File id="geometryFile" contentType="geo/l3d" 
            type="localFileName">SP542P_SRD_L1480_U3_1_xLED66S_940_OC.l3d</File>
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
      <UniqueProductId>b1f7c1d1-d325-4640-862f-b732a98a1926</UniqueProductId>
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

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo" target="_blank">Minimal Geo.gldf</a>
