---
title: Photometries
sidebar_label: Photometries
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Photometry Description

`Photometries` is the third child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). Probably most GLDF will contain one or more photometries. However, the definition of photometries is **optional**.

First of all, a single `Photometry` element references a [**File**](/docs/structure/files.md) element which describes the location of the ldc file (.ies/.ldt) itself. Furthermore, the `Photometry` element **can** contain various additional [**metadata**](#photometry-metadata) to complement the ldc file.

## Location in XSD

![Photometries in XSD](/img/docs/structure/photometries-hierarchy.webp)

## XSD description

<img src="/img/docs/structure/photometries-xsd.webp" alt="Photometries in XSD" width="750" />

## XML example

```xml {9-13} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="photometryFile" contentType="ldc/ies" type="localFileName">photometryFileName.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometry1">
        <PhotometryFileReference fileId="photometryFile" />
      </Photometry>
    </Photometries>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

The `Photometry` Element above describes a single photometry with only **mandatory** content. It...

- **references** itself the ldc `File` element with `id` *photometryFile* (line 6 + 10)
- can be **referenced** in subsequent elements via *photometry1* (its `id` attribute, line 9)
- provides no optional **metadata** (see below)

Its simply the **definition of a ldc file as a photometry** for further usage in the description of a luminare.

## Referencing a photometry

Once declared, all photometries can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

```xml  {10,21} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="photometryFile" contentType="ldc/ies" type="localFileName">MyLightSource_50W-E27.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometry1">
        <PhotometryFileReference fileId="photometryFile" />
      </Photometry>
    </Photometries>
    <LightSources>
      <ChangeableLightSource id="lightSource1">
        <Name>
          <Locale language="en">My LightSource 50W E27</Locale>
        </Name>
        <RatedInputPower>50</RatedInputPower>
        <RatedLuminousFlux>400</RatedLuminousFlux>
        <PhotometryReference photometryId="photometry1"/>
      </ChangeableLightSource>
    </LightSources>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

The `Photometry` with `id` *photometry1* (line 9) is referenced once inside the subsequent element `ChangeableLightSource` and defines the light source's **light distribution curve** (line 20).

## Photometry MetaData

It is possible to **optionally** specify various metadata inside a photometry element to **complement** the content of the somewhat limited ldc file formats like IES and Eulumdat.

```xml {12-36} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="photometryFile" contentType="ldc/ies" type="localFileName">photometryFileName.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometry1">
        <PhotometryFileReference fileId="photometryFile" />
            <DescriptivePhotometry>
                <LuminaireLuminance>100</LuminaireLuminance>
                <LightOutputRatio>0.5</LightOutputRatio>
                <LuminousEfficacy>0.5</LuminousEfficacy>
                <DownwardFluxFraction>0.5</DownwardFluxFraction>
                <DownwardLightOutputRatio>0.5</DownwardLightOutputRatio>
                <UpwardLightOutputRatio>0.5</UpwardLightOutputRatio>
                <TenthPeakDivergence>
                    <C0-C180>100</C0-C180>
                    <C90-C270>100</C90-C270>
                </TenthPeakDivergence>
                <HalfPeakDivergence>
                    <C0-C180>100</C0-C180>
                    <C90-C270>100</C90-C270>
                </HalfPeakDivergence>
                <PhotometricCode>830/359</PhotometricCode>
                <CIE-FluxCode>69 98 100 100 65</CIE-FluxCode>
                <CutOffAngle>100</CutOffAngle>
                <UGR-4H8H-70-50-20-LQ>
                    <X>100</X>
                    <Y>100</Y>
                </UGR-4H8H-70-50-20-LQ>
                <IESNA-LightDistributionDefinition>Type V Circular</IESNA-LightDistributionDefinition>
                <LightDistributionBUG-Rating>LZ1</LightDistributionBUG-Rating>
            </DescriptivePhotometry>
      </Photometry>
    </Photometries>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

- **LuminaireLuminance**  
  Average luminance of the luminous surface (Unit: cd/m²). See also EN 13032-1:2012
- **LightOutputRatio**  
  Ratio of the luminous flux of the luminaire to the sum of the individual luminous fluxes of its conventional light source(s). According to EN 12665:2018
- **LuminousEfficacy**  
  Quotient of the luminous flux emitted by the luminaire and the power absorbed by the light source and associated circuits of the luminaire
- **DownwardFluxFraction**  
  Ratio of the downward flux to the total flux of the luminaire
- **DownwardLightOutputRatio**  
  Ratio of the downward luminous flux of the luminaire to the sum of the individual luminous fluxes of the its light source(s). Not valid for absolute photometry
- **UpwardLightOutputRatio**  
  Ratio of the upward luminous flux of the luminaire to the sum of the individual luminous fluxes of the its light source(s). Not valid for absolute photometry
- **TenthPeakDivergence**  
  Angle of the beam center to the point where the luminous intensity is reduced to one tenth. See also EN 61341:Ed.2
- **HalfPeakDivergence**  
  Angle of the beam center to the point where the luminous intensity is reduced to half. See also EN 61341:Ed.2
- **PhotometricCode**  
  Photometric code consists out of CRI, CCT, initial color variation (MacAdam ellipse steps), color variation through life (MacAdam ellipse steps) and lumen maintenance value (Lx). E.g. 830/359
- **CIE-FluxCode**  
  Set of values: flux triplet, downward flux fraction and light output ratio
- **CutOffAngle**  
  Angle, measured up from nadir, between the vertical axis and the first line of sight at which the light sources and the surfaces of high luminance are not visible
- **UGR-4H8H-70-50-20-LQ**  
  UGR table value of a 4H8H room and degrees of reflection 70/50/20
- **IESNA-LightDistributionDefinition**  
  US-Types of luminaire light distribution according to IESNA for street lighting. Please note: These types are used in IES photometry files
- **LightDistributionBUG-Rating**  
  Backlight, Uplight and Glare known as BUG classification. According to IDA/IESNA BUG evaluates the light output of outdoor lights regarding to glare, light pollution and light trespass
