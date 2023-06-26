---
title: Getting started
hide_table_of_contents: false
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Getting started

> *Welcome! We’re excited that you want learn GLDF.*

**GLDF** is an open and free **luminaire and sensor data format** that can be used across the entire lighting industry. Developed in cooperation by [**DIAL**](https://dial.de) and [**RELUX**](https://relux.com) with the intention to meet the latest **product data** and **BIM process requirements**. As well as to create a new standard to help manufacturers, planners and software developers to interchange product data and work together in a more consistent and efficient way.

:::note
**This guide contains** suggestions and resources on how to get started with the global lighting data format. And what is our recommended order depending on your prior knowledge and preferred way of learning. What you need to get started, how to stay up-to-date and what could be your next steps.
:::

---

## How to proceed

The following sources can of course be viewed in any order. However, if you have little to no experience with the GLDF, we recommend the following chronology:

1. **Introduction videos**  
  Should you have not come into contact with GLDF yet. Or only have a rough idea of what the format is and what it is capable of, we recommend taking a look at our introductory videos on YouTube and/or read some presentations and papers. These are listed in the [**Download / Links**](/download#presentations-and-papers) section and will be gradually extended.

1. **Documentation**  
  With this prior knowledge, we recommend reading the [**documentation**](/docs) next. It introduces all aspects of the format. And includes not only GLDF descriptions, specifications and visual explanations. But contains also code examples for people who learn by doing, chapters on tools, libraries, tutorials for using GLDF in DIALux and RELUX, tips & tricks and more.

1. **Examples**  
  The GLDF example files can be of further help. They represent real GLDFs that can be used for orientation purposes. A separate chapter in the documentation is dedicated to them here: [**Examples**](/docs/getting-started/examples). Or visit the [**Github reposity**](https://github.com/globallightingdata/examples) directly.

1. **Templates**  
  With the knowledge from the documentation and GLDF example files, we recommend creating your own GLDFs for the first time. Our predesigned templates can provide a starting point for this. A separate chapter in the documentation is dedicated to them here: [**Templates**](/docs/getting-started/templates). Or visit the [**Github reposity**](https://github.com/globallightingdata/templates) directly. If you are inexperienced in working with XML, we recommend to read the [**Requirements**](#requirements) chapter beforehand.

1. **Tools**  
  Not everything has to be written by hand. In the [**Tooling section**](/tools) you can find useful applications for working with GLDF. And in the [**Download**](/download#gldf-parser) area  you will find further libraries that can be used in your own software to read and write GLDF & L3D - again open source. There are also separate chapters on both in the documentation: [**GLDF Parser**](/docs/tools-dev/gldf-net-parser), [**L3D Parser**](/docs/tools-dev/l3d-net-parser), [**L3D Editor**](/docs/tools-dev/l3d-editor) and [**GLDF Editor**](/docs/tools-dev/gldf-editor)

1. **XSD reference**  
  And lastly, the [**XSD reference**](pathname:///xsd-reference/index_Root.html) is intended for the daily work with GLDF. It describes the complete XML Schema visually. And is useful to look up possible elements and attributes, their required order, data types, enumerations and more easily. How to use the XSD reference is described [**in the documentation**](/docs/getting-started/xsd-reference) as well.

1. **Further resources**
  Another good source of information are the websites of the two companies behind GLDF: [**dial.de**](https://dial.de) & [**relux.com**](https://relux.com). Have also a look on the repository overview of our Github team to find out new projects in the future: [**globallightingdata**](https://github.com/globallightingdata).

:::tip **Staying Informed**
The [**GLDF blog**](/blog) is the official source for updates from the GLDF team. Anything important, including releases and changelog notes, roadmaps and more will be posted there first.
:::

---

## Requirements

To create the very first GLDF XML on your own, **a simple text editor is all you need**. Additionally an **application to create ZIP archives** is required to create the [GLDF container](/docs/container/about-container) afterwards.

However, if you want a little more comfort when writing GLDFs, we recommend an advanced text editor or an IDE right away. Two of the most useful functions when writing XML are

- XML Schema validation
- Code completion and IntelliSense

If you do not already use a preferred text editor, we suggest one of the following with the above features:

### Notepad++

[Notepadd++ for Windows](https://notepad-plus-plus.org) is a free and lightweight editor, but already offers XML schema validation:

<img src="/img/docs/getting-started/requirements-notepad-plugin.webp" alt="Notepad++ Validate feature" width="750" /><br/><br/>

Provided the GLDF XSD is referenced (1), Notepad++ marks the faulty parts directly (2):

<img src="/img/docs/getting-started/requirements-notepad-validation.webp" alt="Notepad++ validation" width="750" /><br/><br/>

### Visual Studio Code

One step further goes the [Visual Studio Code IDE](https://code.visualstudio.com), which is available for all common operating systems. In addition to XML schema validation (1) like in Notepad++, Visual Studio Code also offers full code completion and IntelliSense (2):

<img src="/img/docs/getting-started/requirements-studio-code-validation.webp" alt="Notepad++ validation" width="650" />

---

### GLDF XML Example

If you would like to test it out right away, copy and paste this XML of a minimal GLDF and try to validate it:

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/gldf.xsd">
  <Header>
    <Manufacturer>GlobalLightingData</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="2" />
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

### Unique IDs

As you can see in the example above, there are two uniqe IDs in each GLDF. Since they are important mandatory elements, they shall be explained at this point as well:

:::tip

Each GLDF must have 2 unique IDs. The difference between `UniqueGldfId` and `UniqueProductId` is the following:

- `UniqueGldfId`  
  Should **always** be unique, even for the same product in different GLDFs. Every GLDF file should have a **worldwide-unique** `UniqueGldfId`, so UUIDs (GUIDs) are **strongly recommended**. This is supposed to help recognise same GLDF data in an easy way.
- `UniqueProductId`  
  On the other hand, the `UniqueProductId` should **be unique only across different products** (at least for the same manufacturer). So they can be equal in different GLDF files - and should be, if they depict the same product.
  
  This is supposed to help to **recognise same products of a manufacturer across different GLDF files** - for example in case of product data updates. You could use the product's article number, GTIN or EAN for this use case - but we recommend UUIDs here as well.

Worldwide unique UUIDs can be generated for example here: [guidgenerator.com](https://guidgenerator.com)
:::

See also [IDs and timecodes](/docs/conventions/ids-and-timecodes)

---

## Next steps

If you would like to start with the documentation, you can get to the first chapter here: [**Introduction**](/docs)
<br/>

:::note Contribute
You would like to contribute to GLDF? Have a look on the [**Get involved chapter**](/docs/contribute). We would also appreciate to welcome you as a new [**DIALux & Relux member**](/docs/contribute/become-a-partner).
:::
