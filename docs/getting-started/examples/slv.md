---
title: SLV - Tria 2 with sensor
sidebar_label: SLV - Tria 2 with sensor
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

### Introduction

This example demonstrates a GLDF file with an L3D model, two light outputs, and an integrated sensor. Everything is put together via the geometry node.

<img src="/img/docs/getting-started/product_slv.webp" alt="SLV NEW TRIA 2"/>

<img src="/img/docs/getting-started/product_slv_3d.webp" alt="SLV NEW TRIA 2"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
  <Header>
    <Manufacturer>SLV</Manufacturer>
    <CreationTimeCode>2021-05-25T14:40:00Z</CreationTimeCode>
    <CreatedWithApplication>Keyboard</CreatedWithApplication>
    <FormatVersion>1.0.0-rc.1</FormatVersion>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="ldtnarrow" contentType="ldc/eulumdat" type="localFileName">narrow.ldt</File>
      <File id="ldtmiddle" contentType="ldc/eulumdat" type="localFileName">middle.ldt</File>
      <File id="ldtwide" contentType="ldc/eulumdat" type="localFileName">wide.ldt</File>
      <File id="geometryFile" contentType="geo/l3d" type="localFileName">example_007.l3d</File>
      <File id="productImage" contentType="image/png" type="localFileName">NEW TRIA 2.png</File>
      <File id="sensor" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>
    </Files>
    <Sensors>
      <Sensor id="sensor1">
        <SensorFileReference fileId="sensor"/>
      </Sensor>
    </Sensors>
    <Photometries>
      <Photometry id="LightEmitterNarrow">
        <PhotometryFileReference fileId="ldtnarrow"/>
        <DescriptivePhotometry>
          <LuminousEfficacy>89</LuminousEfficacy>
          <CIE-FluxCode>98 100 100 100 100</CIE-FluxCode>
        </DescriptivePhotometry>
      </Photometry>
      <Photometry id="LightEmitterMiddle">
        <PhotometryFileReference fileId="ldtmiddle"/>
        <DescriptivePhotometry>
          <LuminousEfficacy>96</LuminousEfficacy>
          <CIE-FluxCode>93 98 99 100 100</CIE-FluxCode>
        </DescriptivePhotometry>
      </Photometry>
      <Photometry id="LightEmitterWide">
        <PhotometryFileReference fileId="ldtwide"/>
        <DescriptivePhotometry>
          <LuminousEfficacy>96</LuminousEfficacy>
          <CIE-FluxCode>69 95 99 100 100</CIE-FluxCode>
        </DescriptivePhotometry>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="LightSource1">
        <Name>
          <Locale language="en">LED</Locale>
        </Name>
        <Description>
          <Locale language="en">LED module</Locale>
        </Description>
        <RatedInputPower>18</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>80</ColorRenderingIndex>
          <CorrelatedColorTemperature>4000</CorrelatedColorTemperature>
          <InitialColorTolerance>3 SDCM</InitialColorTolerance>
        </ColorInformation>
      </FixedLightSource>
      <FixedLightSource id="LightSource2">
        <Name>
          <Locale language="en">LED</Locale>
        </Name>
        <Description>
          <Locale language="en">LED module</Locale>
        </Description>
        <RatedInputPower>81</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>80</ColorRenderingIndex>
          <CorrelatedColorTemperature>5000</CorrelatedColorTemperature>
          <InitialColorTolerance>3 SDCM</InitialColorTolerance>
        </ColorInformation>
      </FixedLightSource>
      <FixedLightSource id="LightSource3">
        <Name>
          <Locale language="en">LED</Locale>
        </Name>
        <Description>
          <Locale language="en">LED module</Locale>
        </Description>
        <RatedInputPower>81</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>80</ColorRenderingIndex>
          <CorrelatedColorTemperature>3000</CorrelatedColorTemperature>
          <InitialColorTolerance>3 SDCM</InitialColorTolerance>
        </ColorInformation>
      </FixedLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="ControlGear1">
        <Name>
          <Locale language="en">Control Gear1 1</Locale>
        </Name>
        <Description>
          <Locale language="en">Control Gear1 1</Locale>
        </Description>
      </ControlGear>
    </ControlGears>
    <Emitters>
      <Emitter id="em-n-n">
        <FixedLightEmitter emergencyBehaviour="None">
          <PhotometryReference photometryId="LightEmitterNarrow"/>
          <LightSourceReference fixedLightSourceId="LightSource1"/>
          <RatedLuminousFlux>1600</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <Emitter id="em-m-n">
        <FixedLightEmitter emergencyBehaviour="None">
          <PhotometryReference photometryId="LightEmitterMiddle"/>
          <LightSourceReference fixedLightSourceId="LightSource2"/>
          <RatedLuminousFlux>7800</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <Emitter id="em-w-n">
        <FixedLightEmitter emergencyBehaviour="None">
          <PhotometryReference photometryId="LightEmitterWide"/>
          <LightSourceReference fixedLightSourceId="LightSource3"/>
          <RatedLuminousFlux>7800</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <Emitter id="em-w-c">
        <FixedLightEmitter emergencyBehaviour="Combined">
          <PhotometryReference photometryId="LightEmitterWide"/>
          <LightSourceReference fixedLightSourceId="LightSource3"/>
          <RatedLuminousFlux>7800</RatedLuminousFlux>
          <EmergencyRatedLuminousFlux>100</EmergencyRatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <Emitter id="em-w-o">
        <FixedLightEmitter emergencyBehaviour="EmergencyOnly">
          <PhotometryReference photometryId="LightEmitterWide"></PhotometryReference>
          <LightSourceReference fixedLightSourceId="LightSource3"></LightSourceReference>
          <RatedLuminousFlux>100</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <Emitter id="em-s">
        <Sensor sensorId="sensor1"/>
      </Emitter>
    </Emitters>
    <Geometries>
      <ModelGeometry id="ModelGeometry">
        <GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>
      </ModelGeometry>
    </Geometries>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <ProductNumber>
        <Locale language="en">111352</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">NEW TRIA 2</Locale>
      </Name>
      <Description>
        <Locale language="de">Einbauleuchte, zweiflammig, QR-C51, rechteckig, aluminium  gebürstet, max. 100W, inkl. Clipfedern</Locale>
        <Locale language="en">Recessed luminaire, two.....</Locale>
      </Description>
      <ProductSeries>
        <ProductSerie>
          <Name>
            <Locale language="en">TRIA</Locale>
          </Name>
          <Hyperlinks>
            <Hyperlink href="https://slv.com">Manufacturer URL</Hyperlink>
          </Hyperlinks>
        </ProductSerie>
      </ProductSeries>
      <Pictures>
        <Image fileId="productImage" imageType="Product Picture"/>
      </Pictures>
      <DescriptiveAttributes>
        <Electrical>
          <ElectricalSafetyClass>III</ElectricalSafetyClass>
          <IngressProtectionIPCode>IP20</IngressProtectionIPCode>
        </Electrical>
        <OperationsAndMaintenance>
          <MedianUsefulLifeTimes>
            <MedianUsefulLife>L80B50 70000h 25°C</MedianUsefulLife>
          </MedianUsefulLifeTimes>
        </OperationsAndMaintenance>
      </DescriptiveAttributes>
    </ProductMetaData>
    <Variants>
      <Variant id="variant1_Combined_Emergency_and_no_emergency_and_no_sensor">
        <Name>
          <Locale language="en">comb Em / no Em / -</Locale>
        </Name>
        <Description>
          <Locale language="en">1st emitter combined emergency, 2nd emitter no emergency, no 3rd emitter</Locale>
        </Description>
        <Mountings>
          <Ceiling>
            <Recessed recessedDepth="11"/>
          </Ceiling>
        </Mountings>
        <Geometry>
          <ModelGeometryReference geometryId="ModelGeometry">
            <EmitterReference emitterId="em-n-n">
              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>
            </EmitterReference>
            <EmitterReference emitterId="em-w-c">
              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
            </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
        <DescriptiveAttributes>
          <Mechanical>
            <Weight>0.379</Weight>
          </Mechanical>
        </DescriptiveAttributes>
      </Variant>
      <Variant id="variant2_no_Emergency_and_only_emergency_and_sensor">
        <Name>
          <Locale language="en">no Em / only Em / sens</Locale>
        </Name>
        <Description>
          <Locale language="en">1st emitter no emergency, 2nd emitter only emergency, 3rd emitter is a sensor</Locale>
        </Description>
        <Mountings>
          <Ceiling>
            <Recessed recessedDepth="11"/>
          </Ceiling>
        </Mountings>
        <Geometry>
          <ModelGeometryReference geometryId="ModelGeometry">
            <EmitterReference emitterId="em-m-n">
              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>
            </EmitterReference>
            <EmitterReference emitterId="em-w-o">
              <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
            </EmitterReference>
            <EmitterReference emitterId="em-s">
              <EmitterObjectExternalName>Sensor</EmitterObjectExternalName>
            </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
        <DescriptiveAttributes>
          <Mechanical>
            <Weight>0.479</Weight>
          </Mechanical>
        </DescriptiveAttributes>
      </Variant>
      <Variant id="variant2_no_Emergency_and_no_emergency_and_sensor">
        <Name>
          <Locale language="en">no Em / no Em / sens</Locale>
        </Name>
        <Description>
          <Locale language="en">1st emitter no emergency, 2nd emitter no emergency, 3rd emitter is a sensor</Locale>
        </Description>
        <Mountings>
          <Ceiling>
            <Recessed recessedDepth="11"/>
          </Ceiling>
        </Mountings>
        <Geometry>
          <ModelGeometryReference geometryId="ModelGeometry">
            <EmitterReference emitterId="em-m-n">
              <EmitterObjectExternalName>LEO0</EmitterObjectExternalName>
            </EmitterReference>
            <EmitterReference emitterId="em-w-n">
            <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
          </EmitterReference>
          <EmitterReference emitterId="em-s">
            <EmitterObjectExternalName>Sensor</EmitterObjectExternalName>
          </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
        <DescriptiveAttributes>
          <Mechanical>
            <Weight>0.479</Weight>
          </Mechanical>
        </DescriptiveAttributes>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/SLV%20-%20Tria%202%20with%20sensor" target="_blank">SLV - Tria 2 with sensor</a>
