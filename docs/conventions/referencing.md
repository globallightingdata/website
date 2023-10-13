---
title: Referencing in GLDF
sidebar_label: Referencing
---

As described in the [chapters on XML hierarchy](/docs/structure/xml-hierarchy.md), the GLDF is structured in a **modular** way, where parts of the luminaire are defined first and then **combined to form [Variants](/docs/structure/variant.md)**. This is done in the XML by referencing the blocks with each other.

:::tip Convention
For this purpose, each block, that can be **referenced in subsequent blocks**, has an `id` attribute.
:::

ID values can be freely chosen, but must fulfil some restrictions. The most important are

- Ids must be globally unique. This means that an ID may not be used more than once in the entire GLDF XML.
- Ids must not contain white spaces.
- Ids are case sensitive. For example, *photometryFile* and *photometryfile* are therefor two different values Ids.
- We recommend naming Ids in a semantically meaningful way to keep the overview. So instead of e.g. *id-1*, a better naming would be *lightSourceImageFile* or *emitterEmergencyMode*.

The `id` value of a `File` element in this example is `photometryFile`:

```xml showLineNumbers {9}
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
    </GeneralDefinitions>
    <ProductDefinitions>
        <!-- Skipped for clarity -->
    </ProductDefinitions>
</Root>
```

These blocks can now be referenced in subsequent elements.

:::tip Convention
For the purpose of referencing prepreviously defined blocks, subsequent XML node(s) contains XML elements, which **ends** with `...Reference` in their **name**.
:::

As an example, the following `Photometry` specification contains an XML element called `PhotometryFileReference`. Its content must be a previously defined `id` of a `File` element. The `File` itself indicates where the actual photometry file is stored.

```xml showLineNumbers {9-10,14}
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
        <!-- Skipped for clarity -->
    </GeneralDefinitions>
    <ProductDefinitions>
        <!-- Skipped for clarity -->
    </ProductDefinitions>
</Root>
```
