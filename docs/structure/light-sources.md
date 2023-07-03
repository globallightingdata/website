---
title: Light Sources
sidebar_label: Light Sources
---
## Description

`LightSources` is the fifth child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of LightSources is **optional**.

`LightSources` are defined direct in GLDF. A distinction is made between two fundamentally different variants. 
A `LightSource` in the GLDF can be defined in two ways:

1. `ChangeableLightSource`Represents a classic user-replaceable light source. Typically, such a lamp determines the light colour, the nominal luminous flux and the nominal power of the light source.
2. `FixedLightSource` The light source is permanently installed, and the end user no longer has any influence on light colour, rated luminous flux and rated power.

Basic data used for both types are combined in a common basic element `LightSourceBase`.

## Location in XSD

![LightSources in XSD](/img/docs/structure/lightsources-hierarchy.webp)

## Optional type
![Optional light source types](/img/docs/structure/lightsources-optionaltype.webp)


## XSD description LightSourceBase
![LightSourceBase](/img/docs/structure/lightsources-base.webp)

## XSD description changeable light sources
![Changeable light sources](/img/docs/structure/lightsources-changeable.webp)

## XSD description fixed light sources
![Changeable light sources](/img/docs/structure/lightsources-fixed.webp)


## XML example

```xml {8-12} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
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
                <Locale language="de">Betriebsgerät 01</Locale>
            </Name>
            <Description>
                <Locale language="de">PSD [Elektronisches Betriebsgerät, DALI-regelbar]</Locale>
            </Description>
        </ControlGear>
    </ControlGears>
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
  <ProductDefinitions/>
</Root>
```
The `FixedLightSource` Element above describes a fixed light source. **Important**, in this case the luminaire luminous flux, which is important for the calculation, is defined within the `FixedLightEmitter` together with photometry and maybe the `ControlGear`. 

## Referencing a light source

Once declared, all light sources will only be referenced in subsequent XML elements via their `id` attribute **one or several** times.
A `FixedLightSource` will always be referenced direct in `FixedLightEmitter`
A `ChangeableLightSource` will referenced via a `Equipment` element in a `ChangeableLightEmitter`


## LightSourceBase / Lightsource MetaData

It is possible to **optionally** specify various metadata inside a light source to **complement** its description with further details:

- **Description**  
  Translatable name of the light source
- **Description**  
  Translatable description of the light source
- **Manufacturer**  
  Manufacturer name of the light source
- **GTIN**  
  The Global Trade Item Number (GTIN)
- **RatedInputPower**  
  Input power consumed by the light source, when the luminaire is turned on (Unit: watt)
- **RatedInputVoltage**  
  Voltage at which the light source operates normally
- **PowerRange**  
  Minimal, maximal and recommended light source power by supplier or manufacturer of the light source
- **LightSourcePositionOfUsage**  
  Light Source usage position (Horizontal/Vertical), possibly with range of angle
- **EnergyLabels**  
  European Union energy label, accoring to the energy consumption labelling scheme. Possible values are e.g. "A+" or "D"
- **SpectrumReference**  
  Spectrum of radiation. It is described as a table of energy intensity (eV) depending on wavelength (nm)
- **ActivePowerTable**  
  Consumption of the power corresponding to the dim level of the light source. It is described as a table of power factor between 0-1 in relation to the luminous flux factor between 0-1
- **ColorInformation**  
  Light source color appearance
- **LightSourceImages**  
  List of images depicting the light source
  
