---
title: Meta-Information
sidebar_label: Meta-Information
---

## Introduction

A GLDF file can require information, that does **not refer to the specific** product it provides. This information are more of a **technical nature**. For this data, a separate file is intended in the GLDF: the **`meta-information.xml`**. Its content is specified like the `product.xml` through a [XSD Schema](/download) and will be described in this chapter.

:::caution important
The `meta-information.xml` is not intended to store manufacturers luminaire data.  
These have to be written into the `product.xml`!
:::

## XSD

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/container/meta-info-xsd.webp" alt="Meta Information XSD" width="450" />

## `name` attribute convention

:::info property naming
The convention for the `name` attribute is the following:

`Issuer`-`PropertyName`
:::

## XML example

Let's imagine we have two companies: **Acme** and **ExampleLLC**. And both would like to store its own **signature**.  
An exemplary **`meta-information.xml`** could therefore look as follows

```xml
<MetaInformation>
  <Property name="Acme-Signature">41dad678-14fe-4ea9-a7fe-2a5a22e79aae</Property>
  <Property name="ExampleLLC-Signature">5437af9d-18c4-485e-b396-1d3d6531fb29</Property>
</MetaInformation>
```

This example also illustrates how important it is to **follow the convention** for the `name` attribute to **avoid naming conflicts**.
