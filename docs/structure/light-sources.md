---
title: Light Sources
sidebar_label: Light Sources
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Description

`LightSources` is the fifth child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of `LightSources` is **optional**.

## Location in XSD

<img src="/img/docs/structure/lightsources-hierarchy.webp" alt="LightSource location in XSD" width="550" />

## `LightSource` types

There are three fundamentally different types that can be distinguished, how a `LightSource` can be defined:

<img src="/img/docs/structure/lightsources-optionaltype.webp" alt="Optional light source types" width="520" />

1. `ChangeableLightSource`  
  Represents a classic user-replaceable light source with a socket. Typically, such a lamp determines the light color, luminous flux and the nominal power.
1. `FixedLightSource`  
  This light source is permanently installed, and the end user no longer has any influence on light color, luminous flux and rated power. This is almost always true for LEDs.
1. `MultiChannelLightSource`  
  As the name already suggests and in contrast to the first two, the `MultiChannelLightSource` supports multiple light channels. Supporting applications like [DIALux](https://www.dialux.com) allows to control each channel seperatly and adjust the lumanire to the current requirements of a lighting scene.

## XSD of `ChangeableLightSource`

<img src="/img/docs/structure/lightsources-changeable.webp" alt="Changeable light source" width="430" />

## XSD of `FixedLightSource`

<img src="/img/docs/structure/lightsources-fixed.webp" alt="Fixed light source" width="410" />

## XSD of `MultiChannelLightSource`

<img src="/img/docs/structure/lightsources-multi.webp" alt="Multichannel light source" width="430" />

## XML example

Below is a longer example where all three types are defined with minimal data. In real product data, if possible, many more properties should be defined to better describe the product.

```xml {35-46,48-53,55-86,90-91,100,107,114,120} showLineNumbers
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!-- Skipped for clarity. See "Header" documentation -->
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="phptometryFile" contentType="ldc/eulumdat" 
            type="url">https://example.org/eulumdat.ldt</File>
      <File id="spectrumRedFile" contentType="spectrum/text" 
            type="url">https://example.org/spectrumRed.txt</File>
      <File id="spectrumGreenFile" contentType="spectrum/text" 
            type="url">https://example.org/spectrumGreen.txt</File>
      <File id="spectrumBlueFile" contentType="spectrum/text" 
            type="url">https://example.org/spectrumBlue.txt</File>
    </Files>
    <Photometries>
      <Photometry id="photometry">
        <PhotometryFileReference fileId="phptometryFile" />
      </Photometry>
    </Photometries>
    <Spectrums>
      <Spectrum id="spectrumRed">
        <SpectrumFileReference fileId="spectrumRedFile" />
      </Spectrum>
      <Spectrum id="spectrumGreen">
        <SpectrumFileReference fileId="spectrumGreenFile" />
      </Spectrum>
      <Spectrum id="spectrumBlue">
        <SpectrumFileReference fileId="spectrumBlueFile" />
      </Spectrum>
    </Spectrums>
    <LightSources>
      <!-- Create a changeable light source with E27 socket -->
      <ChangeableLightSource id="lightSource-changeable">
        <Name>
          <Locale language="en">Incandescent lamp</Locale>
        </Name>
        <RatedInputPower>40</RatedInputPower>
        <ColorInformation>
          <ColorRenderingIndex>95</ColorRenderingIndex>
          <CorrelatedColorTemperature>2700</CorrelatedColorTemperature>
        </ColorInformation>
        <Socket>E27</Socket>
        <RatedLuminousFlux>500</RatedLuminousFlux>
      </ChangeableLightSource>
      <!-- Create a fixed LED light source -->
      <FixedLightSource id="lightSource-fixed">
        <Name>
          <Locale language="de">LED</Locale>
        </Name>
        <RatedInputPower>40</RatedInputPower>
      </FixedLightSource>
      <!-- Create RGB multi channel light source -->
      <MultiChannelLightSource id="lightSource-multiChannel">
        <Name>
          <Locale language="en">RGB light source</Locale>
        </Name>
        <RatedInputPower>40</RatedInputPower>
        <Channels>
          <Channel type="Red">
            <DisplayName>
              <Locale language="en">Red channel</Locale>
            </DisplayName>
            <SpectrumReference spectrumId="spectrumRed" />
            <PhotometryReference photometryId="photometry" />
            <RatedLuminousFlux>200</RatedLuminousFlux>
          </Channel>
          <Channel type="Green">
            <DisplayName>
              <Locale language="en">Green channel</Locale>
            </DisplayName>
            <SpectrumReference spectrumId="spectrumGreen" />
            <PhotometryReference photometryId="photometry" />
            <RatedLuminousFlux>200</RatedLuminousFlux>
          </Channel>
          <Channel type="Blue">
            <DisplayName>
              <Locale language="en">Blue channel</Locale>
            </DisplayName>
            <SpectrumReference spectrumId="spectrumBlue" />
            <PhotometryReference photometryId="photometry" />
            <RatedLuminousFlux>200</RatedLuminousFlux>
          </Channel>
        </Channels>
      </MultiChannelLightSource>
    </LightSources>
    <Equipments>
      <!-- Reference the changeable light source in an equipment first -->
      <Equipment id="equipment">
        <LightSourceReference changeableLightSourceId="lightSource-changeable" />
        <RatedInputPower>40</RatedInputPower>
      </Equipment>
    </Equipments>
    <Emitters>
      <!-- Reference the equipment to finally use the defined changeable light source -->
      <Emitter id="changeableLight-emitter">
        <ChangeableLightEmitter>
          <PhotometryReference photometryId="photometry" />
          <EquipmentReference equipmentId="equipment" />
        </ChangeableLightEmitter>
      </Emitter>
      <!-- Reference the fixed light source directly and add a photometry here -->
      <Emitter id="fixedLight-emitter">
        <FixedLightEmitter>
          <PhotometryReference photometryId="photometry" />
          <LightSourceReference fixedLightSourceId="lightSource-fixed" />
          <RatedLuminousFlux>6600</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
      <!-- Reference the multi channel light source -->
      <Emitter id="multiChannel-emitter">
        <MultiChannelLightEmitter>
          <LightSourceReference multiChannelLightSourceId="lightSource-multiChannel" />
        </MultiChannelLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Finally, use the Emitter to define the product here -->
    <!-- (Skipped for clarity. See "Global Product Data" documentation) -->
  </ProductDefinitions>
</Root>
```

## Referencing a light source

Once declared, all light sources can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

:::info Important
What is particularly remarkable about the XML example above is how **differently `ChangeableLightSource` and `FixedLightSource` are referenced**. While at first glance this adds complexity, it better represents the reality:

For the usage of a `ChangeableLightSource` an element of the type `Equipment` must be defined first. Which combines a `ChangeableLightSource` with an optional `ControlGear`. Subsequently, this `Equipment` is finally referenced in the `Emitter`. The `FixedLightSource` however, is referenced directly in the `Emitter` itself. This also applies to the luminous flux, which is defined directly in the `Emitter`, and not the light source, as well.

This occurs because a fixed light source like LED is an integral part of the entire luminaire. They are not interchangeable at all, and therefore can only be measured as a whole. Whereas a `ChangeableLightSource` - like classic bulbs with a socket - can also be photometrically measured on their own. And are therefore defined separately in a likewise exchangeable `Equipment` element.
:::

## Optional metadata

It is possible to **optionally** specify various metadata inside a light source to **complement** its description with further details:

- **Name**  
  Translatable name of the light source
- **Description**  
  Translatable description of the light source
- **Manufacturer**  
  Manufacturer name of the light source
- **GTIN**  
  Global Trade Item Number (GTIN) of the light source
- **RatedInputPower**  
  Input power consumed by the light source, when the luminaire is turned on
- **RatedInputVoltage**  
  Voltage at which the light source operates normally
- **PowerRange**  
  Minimal, maximal and recommended light source power
- **LightSourcePositionOfUsage**  
  Light source usage position (Horizontal/Vertical), possibly with range of angle
- **EnergyLabels**  
  European Union energy label, accoring to the energy consumption labelling scheme
- **SpectrumReference**  
  Spectrum of radiation. See [Spectrum](/docs/structure/spectrums.md)
- **ActivePowerTable**  
  Consumption of the power corresponding to the dim level of the light source. It is described as a table of power factor between 0-1 in relation to the luminous flux factor between 0-1
- **ColorInformation**  
  Light source color appearance
- **LightSourceImages**  
  List of images depicting the light source
