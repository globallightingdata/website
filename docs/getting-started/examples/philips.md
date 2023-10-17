---
title: Philips SP542P
sidebar_label: Philips SP542P
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

### Introduction

This example demonstrates a simple minimal GLDF implementation of the Philips SP542P product. It uses L3D geometry.

<img src="/img/docs/getting-started/product_philips.webp" alt="Philips SP542 Product Image"/>

<img src="/img/docs/getting-started/product_philips_3d.webp" alt="Philips SP542 Relux Screenshot"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Philips Lighting</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>
    <UniqueGldfId>badec930-7355-44b6-8808-4682f1887b4c</UniqueGldfId>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
      <File id="geometryFile" contentType="geo/l3d" type="localFileName">SP542P_SRD_L1480_U3_1_xLED66S_940_OC.l3d</File>
      <File id="productImage" contentType="image/jpg" type="localFileName">910505100471_EU.de_DE.jpg</File>
    </Files>
    <Photometries>
      <Photometry id="photometry01">
        <PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>
        <DescriptivePhotometry>
          <HalfPeakDivergence>
              <C0-C180>100</C0-C180>
              <C90-C270>100</C90-C270>
          </HalfPeakDivergence>
        </DescriptivePhotometry>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="lightSource01">
        <Name>
          <Locale language="de">LED</Locale>
        </Name>
        <RatedInputPower>47.5</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>90</ColorRenderingIndex>
          <CorrelatedColorTemperature>940</CorrelatedColorTemperature>
        </ColorInformation>
      </FixedLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="controlGear01">
        <Name>
          <Locale language="de">Elektronisches Vorschaltgerät</Locale>
        </Name>
        <Description>
          <Locale language="de">DALI-regelbar</Locale>
        </Description>
      </ControlGear>
    </ControlGears>
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
        <Locale language="de">SP542P LED66S/940 PSD ACL SMT L1480 WH</Locale>
      </ProductNumber>
      <Name>
        <Locale language="de">TrueLevel, Pendelleuchte SP542P LED66S/940 PSD ACL SMT L1480 WH</Locale>
      </Name>
      <Description>
        <Locale language="de">TrueLevel basiert auf Philips TrueLine</Locale>
      </Description>
      <ProductSeries>
        <ProductSerie>
          <Name>
            <Locale language="de">Philips TrueLevel</Locale>
          </Name>
        </ProductSerie>
        <ProductSerie>
          <Name>
            <Locale language="de">Philips TrueLine</Locale>
          </Name>
        </ProductSerie>
      </ProductSeries>
      <Pictures>
        <Image imageType="Product Picture" fileId="productImage" />
      </Pictures>
      <DescriptiveAttributes>
        <Mechanical>
          <IKRating>IK01</IKRating>
        </Mechanical>
        <Electrical>
          <IngressProtectionIPCode>IP40</IngressProtectionIPCode>
          <PowerFactor>0.9</PowerFactor>
          <ConstantLightOutput>false</ConstantLightOutput>
        </Electrical>
      </DescriptiveAttributes>
    </ProductMetaData>
    <Variants>
      <Variant id="variant1">
        <ProductNumber>
          <Locale language="de">SP542P LED66S/940 PSD ACL SMT L1480 WH</Locale>
        </ProductNumber>
        <Name>
          <Locale language="de">Variante 1</Locale>
        </Name>
        <Description>
          <Locale language="de">Keine Variantenbeschreibung vorhanden</Locale>
        </Description>
        <GTIN>11111111</GTIN>
        <Mountings>
          <Ceiling>
            <Pendant pendantLength="500"/>
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

<a href="https://github.com/globallightingdata/examples/tree/master/Philips%20SP542P" target="_blank">Philips SP542P</a>
