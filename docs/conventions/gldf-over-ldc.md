---
title: GLDF over Photometry
sidebar_label: GLDF over Photometry
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Definition

One convention in the GLDF is: which **priority** applies, if the **same property** is present in the **photometry** as well as in the **GLDF**:

:::important Convention
If a property is present

- in a linked photometry file
- and in the GLDF itself

the following applies: **GLDF overwrites photometry**. This applies not only to properties with the same name, but to all semantically identical values.

This convention **always prevails** without having to be explicitly defined.
:::

## Examples

### Manufacturer Name

Probably the most obvious use case that one might not even think of is the **manufacturer's name**. It occurs in both - photometry files like Eulumdat/IES and the GLDF - and is a mandatory field in these formats. What may seem obvious is a use case for this convention: The manufacturer name in the GLDF XML **always applies**. The manufacturer name in any photometry file is thus **overwritten and has no meaning**:

<img src="/img//docs/conventions/gldf-overwrites-manufacturer.webp" alt="GLDF Container" width="950" />

### CT & CRI

Let's look at another example, in this case two photometric values: **color temperature** and the **color rendering index**. Lets assume that a referenced photometry file would have set these two properties as follows:

<img src="/img//docs/conventions/gldf-overwrites-ldt-editor.webp" alt="GLDF Container" width="590" />

(Image taken with [DIAL LDT Editor](https://www.dialux.com/en-GB/ldt-editor), get it for free)

And the following GLDF XML:

```xml showLineNumbers {9-10,24-25}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
    <Header>
        <!-- Skipped for clarity -->
    </Header>
    <GeneralDefinitions>
        <Files>
            <File id="photometryFile" contentType="ldc/eulumdat" 
                  type="localFileName">SomePhotometry.ldt</File>
        </Files>
        <Photometries>
            <Photometry id="photometry">
                <PhotometryFileReference fileId="photometryFile"/>
            </Photometry>
        </Photometries>
        <LightSources>
            <ChangeableLightSource id="lightSource">
                <Name>
                    <Locale language="en">E27 50W</Locale>
                </Name>
                <RatedInputPower>50</RatedInputPower>
                <ColorInformation>
                    <ColorRenderingIndex>90</ColorRenderingIndex>
                    <CorrelatedColorTemperature>4200</CorrelatedColorTemperature>
                </ColorInformation>
                <RatedLuminousFlux>200</RatedLuminousFlux>
            </ChangeableLightSource>
        </LightSources>
        <!-- Skipped for clarity -->
    </GeneralDefinitions>
    <ProductDefinitions>
        <!-- Skipped for clarity -->
    </ProductDefinitions>
</Root>
```

Based on the convention and the lines 24+25 in the GLDF above, the luminaire would be defined with:

- `ColorRenderingIndex` ➝ 90
- `CorrelatedColorTemperature` ➝ 4200

The **values from the photometry file** would be **overwritten**. On the opposite side, if lines 24+25 were **not present** in the GLDF XML, the values from the photometry would **keep priority** for this GLDF product:

- `ColorRenderingIndex` ➝ 85
- `CorrelatedColorTemperature` ➝ 4000
