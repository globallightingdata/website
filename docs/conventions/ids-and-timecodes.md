---
title: IDs and timecodes
sidebar_label: IDs and timecodes
---

In the GLDF XML there are two important IDs and two timestamps, which are intended to **distinguish different GLDFs and/or products** from each other:

- `UniqueGldfId` and the `UniqueProductId` - inside the Header and the ProductMetaData elements
- `GldfCreationTimeCode` and the `ProductDataTimeCode` - both inside the Header element

## IDs

Each GLDF must have 2 unique IDs. The difference between `UniqueGldfId` and `UniqueProductId` is the following:

- **`UniqueGldfId`**  
  Should **always** be unique, even for the same product in two GLDFs. Every GLDF file should have a **worldwide-unique** `UniqueGldfId`, so UUIDs (GUIDs) are **strongly recommended**. This is supposed to help recognise the exact same GLDF in an easy way.
- **`UniqueProductId`**  
  On the other hand, the `UniqueProductId` should **be unique only across different products** (at least for the same manufacturer). So they can be equal in different GLDF files - and should be, if they depict the same product.
  
  This is supposed to help to **recognise same products of a manufacturer across different GLDF files** - for example in case of product data updates. You could use the product's article number, GTIN or EAN for this use case - but we recommend UUIDs here as well.

Worldwide unique UUIDs can be generated for example here: [guidgenerator.com](https://guidgenerator.com)

## Timecodes

Timestamps describe when a GLDF was generated and edited. And which time stamp the product data have. While the `GldfCreationTimeCode` is a mandatory field, the `ProductDataTimeCode` is an optional field. It is nevertheless recommended to maintain both. The difference is as follows:

- **`GldfCreationTimeCode`**  
  The date of `GldfCreationTimeCode` must be set to the current date for every single change to the GLDF - **except** for changes inside [meta-information.xml](/docs/container/meta-information), as this file is intended only for signatures and similar. The `GldfCreationTimeCode` allows to recognise when a GLDF has been created or updated.
- **`ProductDataTimeCode`**  
  This date must reflect the last time something inside the product data has changed. This applies to any child elements of `GeneralDefinitions` and `ProductDefinitions`, but not to the elements in the `Header` area.

This allows to distinguish exactly when the GLDF as a whole has changed and the last time the product within the GLDF has changed.

## Example XML

The following is an example of both, the `UniqueGldfId` and `UniqueProductId`. As well as `GldfCreationTimeCode` and `ProductDataTimeCode`

```xml showLineNumbers {8-9,15}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>GlobalLightingData</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-03-29T14:30:00Z</GldfCreationTimeCode>
    <UniqueGldfId>e19ed73e-fcd6-4469-a359-58fd80510e9c</UniqueGldfId>
  </Header>
  <GeneralDefinitions>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">42</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">Example Luminaire</Locale>
      </Name>
    </ProductMetaData>
    <Variants>
      <Variant id="variant-1">
        <Name>
          <Locale language="en">Example Luminaire Variant 1</Locale>
        </Name>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

## Examples

Examples of when and which elements should be updated

- The `ManufacturerLogo` in the `Header` has been updated:
  - **`UniqueGldfId`** => **update** with new GUID - because any value has changed (except the meta-information.xml)
  - `UniqueProductId` => leave unchanged - its still the same product
  - **`GldfCreationTimeCode`** => **update** with current date - because any value has changed (except the meta-information.xml)
  - `ProductDataTimeCode` => leave unchanged - no product-relevant data has changed
- The `Description` of a `Variant` has been updated:
  - **`UniqueGldfId`** => **update** with new GUID - because any value has changed (except the meta-information.xml)
  - `UniqueProductId` => leave unchanged - its still the same product
  - **`GldfCreationTimeCode`** => **update** with current date - because any value has changed (except the meta-information.xml)
  - **`ProductDataTimeCode`** => **update** with current date - because product-relevant data has changed as well
- A new value to [meta-information.xml](/docs/container/meta-information) has been added:
  - `UniqueGldfId` => leave unchanged - the GLDF itself has not changed
  - `UniqueProductId` => leave unchanged - its still the same product
  - `GldfCreationTimeCode` => leave unchanged - the GLDF itself has not changed
  - `ProductDataTimeCode` => leave unchanged - the GLDF itself has not changed
