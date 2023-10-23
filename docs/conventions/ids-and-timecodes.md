---
title: IDs and timecodes
sidebar_label: IDs and timecodes
---

In the GLDF XML there are two important IDs and two timestamps, which are intended to **distinguish different GLDFs and/or products** from each other:

- `UniqueGldfId` and the `UniqueProductId` - inside the [`Header`](/docs/structure/header.md) and the [`ProductMetaData`](/docs/structure/product.md) elements
- `GldfCreationTimeCode` and the `ProductDataTimeCode` - both inside the [`Header`](/docs/structure/header.md) element

## IDs

Each GLDF must have 2 unique IDs. The difference between `UniqueGldfId` and `UniqueProductId` is the following:

- **`UniqueGldfId`**  
  This id is part of the [`Header`](/docs/structure/header.md) element and should **always** be unique, even for the same product in two GLDFs. Every GLDF file should have a **worldwide-unique** `UniqueGldfId`, so UUIDs (sometimes called GUIDs) are **strongly recommended**. This is supposed to help recognise the exact same GLDF in an easy way.
- **`UniqueProductId`**  
  This id is part of [`ProductMetaData`](/docs/structure/product.md). And on the other hand should be **unique only across different products** (at least for the same manufacturer). So they can be equal in different GLDF files - and should be, if they depict the same product.
  
  This is supposed to help to **recognise same products of a manufacturer across different GLDF files** - for example in case of product data updates. You could use the product's article number, GTIN or EAN for this use case - but we recommend UUIDs here as well.

Worldwide unique UUIDs can be generated for example here: [guidgenerator.com](https://guidgenerator.com)

## Timecodes

:::note TLDR;
GLDF contains two timestamps in the [`Header`](/docs/structure/header.md) element, that allows to precisely distinguish the last time:

- When a **GLDF as a whole** has changed -> `GldfCreationTimeCode`
- When **anything product related** inside the GLDF has changed. -> `ProductDataTimeCode`
:::

The difference in detail is the following:

- **`GldfCreationTimeCode`**  
  The `GldfCreationTimeCode` describes when a GLDF file was generated or anything inside it edited. I.e. the date of `GldfCreationTimeCode` must be set to the current date and time **on every single change** to the GLDF. As a result, the `GldfCreationTimeCode` allows to recognise, when a GLDF has been created or updated as a whole the last time. **Except** changes to the [*meta-information.xml*](/docs/container/meta-information.md) - see the caution box below.
- **`ProductDataTimeCode`**  
  This element must reflect **the last time**, when something **only related to the product data** has **changed**. **Excluding any metadata** like manufacturer contact information in the [`Header`](/docs/structure/header.md). So this applies to any changes in XML childs of [`GeneralDefinitions`](/docs/structure/xml-hierarchy.md) and [`ProductDefinitions`](/docs/structure/xml-hierarchy.md), as well as files related to the product like product images or photometries. But not to the elements in the [`Header`](/docs/structure/header.md) area or files like the manufacturer image.

:::caution Important
Both timestamps must completly ignore changes to the [**meta-information.xml**](/docs/container/meta-information) file. Whether it is created, deleted or modified. As this file is intended only for digital signatures and similar. And is otherwise completly unrelated to the GLDF content at all.
:::

While the `GldfCreationTimeCode` is a mandatory element, the `ProductDataTimeCode` is optional. It is nevertheless **recommended to maintain both**.

The **string format** for timecodes in XML is *yyyy-mm-ddThh:mm:ss.ss* (xs:dateTime). And is **preferable provided in UTC**. For examples see [w3schools.com](https://www.w3schools.com/xml/schema_dtypes_date.asp) or the XML example below.

## Example XML

The following is an example of both, the `UniqueGldfId` and `UniqueProductId`. As well as `GldfCreationTimeCode` and `ProductDataTimeCode`

```xml showLineNumbers {8-9,15}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Manufacturer XY</Manufacturer>
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
        <Locale language="en">Example Luminaire of Manufacturer XY</Locale>
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
