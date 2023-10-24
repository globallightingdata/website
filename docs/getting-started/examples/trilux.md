---
title: Example Trilux Belviso S CDP
sidebar_label: Trilux Belviso S CDP
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

### Introduction

Trilux Belviso is an example of a standing luminaire with two individual heads. The secondary light emitter can be adjusted by rotating it. Each light emitter has a different ldt file connected via the geometry node.

<img src="/img/docs/getting-started/product_trilux.webp" alt="Trilux Belviso S CDP Product Picture"/>

<img src="/img/docs/getting-started/product_trilux_cad.webp" alt="Trilux Belviso S CDP Technical sketch"/>

<img src="/img/docs/getting-started/product_trilux_3d.webp" alt="Trilux Belviso S CDP Relux Screenshot"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>TRILUX</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>
    <UniqueGldfId>7dedd642-e5ba-4cdf-81f7-a21d7c4463fc</UniqueGldfId>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="ldtmain" contentType="ldc/eulumdat" type="localFileName">TX054020.ldt</File>
      <File id="ldtindirect" contentType="ldc/eulumdat" type="localFileName">TX054019.ldt</File>
      <File id="geometryFile" contentType="geo/l3d" type="localFileName">Belviso_S_CDP_LED9400nw_ETD_03_TOC_6437657_10123990_de.l3d</File>
      <File id="productImage" contentType="image/jpg" type="localFileName">Belviso_S_CDP_LED_03_AP_WEB.jpg</File>
    </Files>
    <Photometries>
      <Photometry id="PhotometryMain">
        <PhotometryFileReference fileId="ldtmain"></PhotometryFileReference>
        <DescriptivePhotometry>
          <CIE-FluxCode>64 89 97 100 100</CIE-FluxCode>
        </DescriptivePhotometry>
      </Photometry>
      <Photometry id="PhotometryIndirect">
        <PhotometryFileReference fileId="ldtindirect"></PhotometryFileReference>
        <DescriptivePhotometry>
          <CIE-FluxCode>0 0 0 0 100</CIE-FluxCode>
        </DescriptivePhotometry>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="LightSource">
        <Name>
          <Locale language="en">LED</Locale>
        </Name>
        <RatedInputPower>18</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>80</ColorRenderingIndex>
          <CorrelatedColorTemperature>4000</CorrelatedColorTemperature>
          <InitialColorTolerance>3 SDCM</InitialColorTolerance>
        </ColorInformation>
      </FixedLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="ControlGear1">
        <Name>
          <Locale language="en">Control Gear 1</Locale>
        </Name>
        <Description>
          <Locale language="en">Separately dimmable 1..10V</Locale>
        </Description>
      </ControlGear>
    </ControlGears>
    <Emitters>
      <Emitter id="LightEmitterMain">
        <FixedLightEmitter emergencyBehaviour="Combined">
          <PhotometryReference photometryId="PhotometryMain" />
          <LightSourceReference fixedLightSourceId="LightSource" />
          <RatedLuminousFlux>7800</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <Emitter id="LightEmitterIndirect">
        <FixedLightEmitter emergencyBehaviour="None">
          <PhotometryReference photometryId="PhotometryIndirect" />
          <LightSourceReference fixedLightSourceId="LightSource" />
          <RatedLuminousFlux>1600</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
    </Emitters>
    <Geometries>
      <ModelGeometry id="Geometry1">
        <GeometryFileReference fileId="geometryFile" levelOfDetail="Medium" />
      </ModelGeometry>
    </Geometries>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>d2a7648d-4020-43e5-a479-85fa968e6054</UniqueProductId>
      <ProductNumber>
        <Locale language="en">TOC: 6437657</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">Belviso S CDP LED9400nw ETD 03</Locale>
      </Name>
      <Description>
        <Locale language="en">Free-standing LED luminaire with separately tiltable indirect spot</Locale>
      </Description>
      <Pictures>
        <Image fileId="productImage" imageType="Product Picture" />
      </Pictures>
      <DescriptiveAttributes>
        <Mechanical>
          <IKRating>IK02</IKRating>
        </Mechanical>
        <Electrical>
          <ElectricalSafetyClass>I</ElectricalSafetyClass>
          <IngressProtectionIPCode>IP20</IngressProtectionIPCode>
        </Electrical>
        <OperationsAndMaintenance>
          <MedianUsefulLifeTimes>
            <MedianUsefulLife>L80B50 70000h 25°C</MedianUsefulLife>
          </MedianUsefulLifeTimes>
        </OperationsAndMaintenance>
        <CustomProperties>
          <Property id="ID1PL17P9t53oexZksoRkx7Y">
            <Name>
              <Locale language="en">photobiology class</Locale>
            </Name>
            <PropertySource>CEN/TS17623</PropertySource>
            <Value>0</Value>
          </Property>
          <Property id="ID1LrBLaYtnCARKperF_2Ykh">
            <Name>
              <Locale language="en">glow wire resistance</Locale>
            </Name>
            <PropertySource>CEN/TS17623</PropertySource>
            <Value>650°C</Value>
          </Property>
        </CustomProperties>
      </DescriptiveAttributes>
    </ProductMetaData>
    <Variants>
      <Variant id="variant1">
        <ProductNumber>
          <Locale language="en">TOC: 6437657</Locale>
        </ProductNumber>
        <Name>
          <Locale language="en">Belviso S CDP LED9400nw ETD 03</Locale>
        </Name>
        <Mountings>
          <Ground>
            <FreeStanding></FreeStanding>
          </Ground>
        </Mountings>
        <Geometry>
          <ModelGeometryReference geometryId="Geometry1">
            <EmitterReference emitterId="LightEmitterMain">
              <EmitterObjectExternalName>fixed_leo</EmitterObjectExternalName>
            </EmitterReference>
            <EmitterReference emitterId="LightEmitterIndirect">
              <EmitterObjectExternalName>rotatable_leo</EmitterObjectExternalName>
            </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
        <DescriptiveAttributes>
          <Mechanical>
            <Weight>14.5</Weight>
          </Mechanical>
        </DescriptiveAttributes>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Trilux%20Belviso%20S%20CDP" target="_blank">Trilux Belviso S CDP</a>
