---
title: Spectrums
sidebar_label: Spectrums
---

## Description

`Spectrums` is the fourth child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of spectrums is **optional**.

A spectrum in the GLDF can be defined in two ways

1. Through a table with an assignment of intensities to wavelengths, inside the GLDF XML iteself
2. Through a `File` reference containing a well-formed spectrum definition, outside the GLDF XML

## Location in XSD

![Spectrums in XSD](/img/docs/structure/spectrums-hierarchy.webp)

## XSD description

![Spectrums in XSD](/img/docs/structure/spectrums-xsd.webp)

## 1. Spectrum definition within GLDF XML

The first option to define a spectrum is within the GLDF XML as follows

![Spectrum inside XSD XML](/img/docs/structure/spectrums-inside-xsd.webp)

Simply add a collection of `Intensity` elements, in which the `wavelenth` attribute determines the wavelength in nanometer. And the content of the element the intensity of the wavelength.

```xml {7-11} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Spectrums>
      <Spectrum id="spectrum1">
        <Intensity wavelength="380">0.03</Intensity>
        <Intensity wavelength="385">0.08</Intensity>
        <Intensity wavelength="390">0.12</Intensity>
        <!-- snip wavelength 395-775 -->
        <Intensity wavelength="780">0.02</Intensity>
      </Spectrum>
    </Spectrums>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

## 2. Defining the spectrum through `File` reference

A `Spectrum` can also reference a [**File**](/docs/structure/files.md) element which describes the location of the spectrum content file.

```xml {6-7,11} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="spectrumFile" contentType="spectrum/text" 
            type="url">https://example.org/spectrum.txt</File>
    </Files>
    <Spectrums>
      <Spectrum id="spectrum1">
        <SpectrumFileReference fileId="spectrumFile" />
      </Spectrum>
    </Spectrums>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

The `Spectrum` Element above **references** a spectrum File stored online, in this fictitious example at example.org/spectrum.txt. Spectrum files must conform to a **specific formatting** in order to be processed.

The spectrum file...

- must be a **text** file
- contain the assignment of **wavelengths to intensities**
- each assignment must be written in a **new line**
- wavelengths and intensities must be **separated** by a **specific character**
:::caution
The character between wavelength and intensity **must** be a **single whitespace** or a **single tabulator**!
:::
- is usually within the range of 380-780(nm), which corresponds to a textfile with 81 lines

An abbreviated example:

<!-- markdownlint-disable MD010 -->
```txt
380  0.003720622
385  0.003494165
390  0.002572627
780  0.0001542017
```
<!-- markdownlint-enable MD010 -->

:::tip
<!-- markdownlint-disable MD033 -->
A **complete spectrum example file** can be downloaded here: <a href="/other/Spectrum-Mercury-Discharge-Lamp.txt" target="_blank">**Mercury-Vapor-Lamp.txt**</a>
<!-- markdownlint-disable MD033 -->
:::

## Referencing a spectrum

Once declared, all spectrums can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

```xml  {9,19} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="spectrumFile" contentType="spectrum/text" type="url">https://example.org/spectrum.txt</File>
    </Files>
    <Spectrums>
      <Spectrum id="spectrum1">
        <SpectrumFileReference fileId="spectrumFile" />
      </Spectrum>
    </Spectrums>
    <LightSources>
      <ChangeableLightSource id="lightSource1">
        <Name>
          <Locale language="en">Light source with spectrum</Locale>
        </Name>
        <RatedInputPower>10</RatedInputPower>
        <SpectrumReference spectrumId="spectrum1" />
        <RatedLuminousFlux>80</RatedLuminousFlux>
      </ChangeableLightSource>
    </LightSources>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

The `Spectrum` with `id` *spectrum1* (line 9) is referenced once inside the subsequent element `ChangeableLightSource` through the element `SpectrumReference`. And defines the light source's **spectrum** in this way (line 19)
