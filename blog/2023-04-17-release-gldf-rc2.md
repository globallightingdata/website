---
title: GLDF Release v1.0.rc2
description: GLDF v1.0 releace candidate 2
author: Alex
author_title: Developer DIAL
author_url: https://github.com/Kurpanik
author_image_url: https://avatars.githubusercontent.com/u/71767601?s=460
hide_table_of_contents: false
tags: [gldf, release]
---


On the way to the final version 1.0 of the GLDF, we have published the next release candidate based on feedback. As always, the changelog can be found on Github: [GLDF v1.0.rc2](https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.2).

Since this is still a pre-release version, we have taken the opportunity to include necessary breaking changes that we would like to avoid in the final version. Below is a short guide on how to migrate existing GLDFs from rc1 to the new rc2 version.
<!--truncate-->

---

Some of the changes affect every GLDF. Others might require adaptation:

## Mandatory breaking changes

### `Header`

The mandatory structure of the `Header` element has changed as follows. To adapt a GLDF as quickly as possible, simply copy the following XML and replace the contents with your data:

```xml
<Header>
  <Manufacturer>Manufacturer XY</Manufacturer>
  <FormatVersion major="1" minor="0" pre-release="2"/>
  <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
  <GldfCreationTimeCode>2023-04-17T14:00:00Z</GldfCreationTimeCode>
  <UniqueGldfId>INSERT UUID/GUID HERE - SHOULD ALWAYS BE UNIQUE</UniqueGldfId>
</Header>
```

Otherwise, adapt your elements and their order according to the [**XSD-Reference**](pathname:///xsd-reference/index_Header.html)

### `ProducMetaData`

Add to your `ProductMetaData` an `UniqueProductId` as first child element.

The topic [**Unique IDs**](/getting-started/#unique-ids) describes the differences between `UniqueGldfId` in the Header and `UniqueProductId` inside ProducMetaData. Containig only mandatory fields, `ProducMetaData` should now look like this:

```xml showLineNumbers {2}
<ProductMetaData>
  <UniqueProductId>INSERT GUID HERE</UniqueProductId>
  <ProductNumber>
    <Locale language="en">LightNnumber</Locale>
    <Locale language="de">Produktnummer</Locale>
  </ProductNumber>
  <Name>
    <Locale language="en">Product name</Locale>
    <Locale language="de">Produktname</Locale>
  </Name>
</ProductMetaData>
```

---

## Possible breaking changes

### `SensorEmitter`

Should you use `Sensor` elements in your GLDF, replace references in `Emitter` as follows

```xml showLineNumbers {13-15}
<GeneralDefinitions>
  <Files>
    <File id="sensorFile" contentType="sensor/sensldt" 
          type="localFileName">sens.ldt</File>
  </Files>
  <Sensors>
    <Sensor id="sensor">
      <SensorFileReference fileId="sensorFile" />
    </Sensor>
  </Sensors>
  <Emitters>
    <Emitter id="sensorEmitter">
      <SensorEmitter>
        <SensorReference sensorId="sensor" />
      </SensorEmitter>
    </Emitter>
  </Emitters>
</GeneralDefinitions>
```

### `ProductSeries`

Should you use `ProducSeries` elements. Either in `ProductMetaData` or `Variants`, add an unique `id` attribute to them

```xml showLineNumbers {4}
<ProductDefinitions>
  <ProductMetaData>
    <!-- Content skipped -->
    <ProductSerie id="Add-Unique-ID-Here">
      <Name>
        <Locale language="en">Produkt family</Locale>
      </Name>
    </ProductSerie>
  </ProductMetaData>
</ProductDefinitions>
```
