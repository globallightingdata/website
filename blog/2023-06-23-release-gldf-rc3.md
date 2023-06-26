---
title: GLDF Release v1.0.rc3
description: GLDF v1.0 releace candidate 3
author: Alex
author_title: Developer DIAL
author_url: https://github.com/Kurpanik
author_image_url: https://avatars.githubusercontent.com/u/71767601?s=460
hide_table_of_contents: false
tags: [gldf, release]
---


Today we have published the third release candidate of version 1.0. The changelog can be found on Github as always: [GLDF v1.0.rc3](https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.3).

Below is a short guide on how to migrate existing GLDFs from rc.2 to the new rc.3 version. We have kept the changes to a minimum.
<!--truncate-->

---

## Possible breaking changes

### Cylinder `plane` attribute removed

Should you use the Cylinder simple geometry element with its `plane` attribute set, then you have to remove this attribute. The default Cylinder plane orientation is now the same as in Eulumdat.

```xml showLineNumbers {4}
<GeneralDefinitions>
 <Geometries>
  <SimpleGeometry id="cylinder200">
   <Cylinder>
    <Diameter>200</Diameter>
    <Height>500</Height>
   </Cylinder>
   <CircularEmitter>
    <Diameter>190</Diameter>
   </CircularEmitter>
  </SimpleGeometry>
 </Geometries>  
</GeneralDefinitions>
```

---

## New features

### LightSource combinations

With the new version, the different types within [LightSources](/docs/structure/light-sources) can now be combined. This was not possible till now, so that a GLDF had to consist of 1-n `ChangeableLightSource` **or** 1-n `FixedLightSource` exclusively. This has been extended  to depict luminaires with combinations of changeable light sources with fixed LEDs - or even multi channel light sources now, see below.

### Multi channel luminaires

With release candidate 3, the GLDF now supports multi channel luminaires. For this purpose, a new LightSource element called `MultiChannelLightSource` has been introduced. As well as a corresponding emitter called `MultiChannelLightEmitter`, which references this LightSource. The documentation for both will follow soon [here (LightSource)](/docs/structure/light-sources) and [here (Emitters)](/docs/structure/emitters).

#### XML example

```xml showLineNumbers {51-88,107-112,131}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
 <Header>
  <Manufacturer>Acme</Manufacturer>
  <FormatVersion major="1" minor="0" pre-release="3"/>
  <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
  <GldfCreationTimeCode>2023-06-23T08:00:00Z</GldfCreationTimeCode>
  <UniqueGldfId>1d485787-7eee-4e75-aba4-e4c4875e69f9</UniqueGldfId>
 </Header>
 <GeneralDefinitions>
  <Files>
   <File id="photometryRedFile" contentType="ldc/eulumdat" 
         type="url">http://example.org/photometryRed.ldt</File>
   <File id="photometryGreenFile" contentType="ldc/eulumdat" 
         type="url">http://example.org/photometryGreen.ldt</File>
   <File id="photometryBlueFile" contentType="ldc/eulumdat" 
         type="url">http://example.org/photometryBlue.ldt</File>
   <File id="spectrumRedFile" contentType="spectrum/text" 
         type="url">http://example.org/spectrumRed.txt</File>
   <File id="spectrumGreenFile" contentType="spectrum/text" 
         type="url">http://example.org/spectrumGreen.txt</File>
   <File id="spectrumBlueFile" contentType="spectrum/text" 
         type="url">http://example.org/spectrumBlue.txt</File>
   <File id="lightSourceImage" contentType="image/jpg" 
         type="url">http://example.org/image.jpg</File>
  </Files>
  <Photometries>
   <Photometry id="photometryRed">
    <PhotometryFileReference fileId="photometryRedFile"/>
   </Photometry>
   <Photometry id="photometryGreen">
    <PhotometryFileReference fileId="photometryGreenFile"/>
   </Photometry>
   <Photometry id="photometryBlue">
    <PhotometryFileReference fileId="photometryBlueFile"/>
   </Photometry>
  </Photometries>
  <Spectrums>
   <Spectrum id="spectrumRed">
    <SpectrumFileReference fileId="spectrumRedFile"/>
   </Spectrum>
   <Spectrum id="spectrumGreen">
    <SpectrumFileReference fileId="spectrumGreenFile"/>
   </Spectrum>
   <Spectrum id="spectrumBlue">
    <SpectrumFileReference fileId="spectrumBlueFile"/>
   </Spectrum>
  </Spectrums>
  <LightSources>
   <MultiChannelLightSource id="multiChannelLightSource">
    <Name>
     <Locale language="en">RGB MultiChannel</Locale>
    </Name>
    <RatedInputPower>50</RatedInputPower>
    <LightSourceImages>
     <Image fileId="lightSourceImage" imageType="Product Picture"/>
    </LightSourceImages>
    <Channels>
     <Channel type="Red">
      <DisplayName>
       <Locale language="en">Red channel</Locale>
       <Locale language="de">Roter Kanal</Locale>
      </DisplayName>
      <SpectrumReference spectrumId="spectrumRed"/>
      <PhotometryReference photometryId="photometryRed"/>
      <RatedLuminousFlux>150</RatedLuminousFlux>
     </Channel>
     <Channel type="Green">
      <DisplayName>
       <Locale language="en">Green channel</Locale>
       <Locale language="de">Grüner Kanal</Locale>
      </DisplayName>
      <SpectrumReference spectrumId="spectrumGreen"/>
      <PhotometryReference photometryId="photometryGreen"/>
      <RatedLuminousFlux>160</RatedLuminousFlux>
     </Channel>
     <Channel type="Blue">
      <DisplayName>
       <Locale language="en">Blue channel</Locale>
       <Locale language="de">Blauer Kanal</Locale>
      </DisplayName>
      <SpectrumReference spectrumId="spectrumBlue"/>
      <PhotometryReference photometryId="photometryBlue"/>
      <RatedLuminousFlux>140</RatedLuminousFlux>
     </Channel>
    </Channels>
   </MultiChannelLightSource>
  </LightSources>
  <ControlGears>
   <ControlGear id="controlGear">
    <Name>
     <Locale language="en">Electronic ballast</Locale>
    </Name>
    <NominalVoltage>
     <VoltageRange>
      <Min>220</Min>
      <Max>230</Max>
     </VoltageRange>
    </NominalVoltage>
    <StandbyPower>5</StandbyPower>
    <Dimmable>true</Dimmable>
    <ColorControllable>true</ColorControllable>
   </ControlGear>
  </ControlGears>
  <Emitters>
   <Emitter id="emitter">
    <MultiChannelLightEmitter>
     <LightSourceReference multiChannelLightSourceId="multiChannelLightSource"/>
     <ControlGearReference controlGearId="controlGear"/>
    </MultiChannelLightEmitter>
   </Emitter>
  </Emitters>
 </GeneralDefinitions>
 <ProductDefinitions>
  <ProductMetaData>
   <UniqueProductId>6a911f84-b812-4e29-9622-6b971f6ae202</UniqueProductId>
   <ProductNumber>
    <Locale language="en">123</Locale>
   </ProductNumber>
   <Name>
    <Locale language="en">MultiChannel example</Locale>
   </Name>
  </ProductMetaData>
  <Variants>
   <Variant id="variant1">
    <Name>
     <Locale language="en">MultiChannel example variant</Locale>
    </Name>
    <Geometry>
     <EmitterReference emitterId="emitter"/>
    </Geometry>
   </Variant>
  </Variants>
 </ProductDefinitions>
</Root>
```
