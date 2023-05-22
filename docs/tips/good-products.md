---
title: Creating good GLDF files
sidebar_label: Creating good GLDF files
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

Many rules in the GLDF XML are already validated by the XML schema (XSD) and errors prevented this way. If the XML is valid against the schema, an essential step towards a good GLDF has already been taken. But not all constraints can be covered with the XSD schema. Therefore, on this page you will find further rules, recommendations or simply hints on how to create good GLDF files.

## Provide consistent translations

The GLDF allows translations to be specified in many places, in the form of the `Locale` elements:

```xml {7-8,11-13}
<Root>
  <Header />
  <GeneralDefinitions />
  <ProductDefinitions>
    <ProductMetaData>
      <ProductNumber>
        <Locale language="en">Global product number</Locale>
        <Locale language="de">Globale Produktnummer</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">Global product name in English</Locale>
        <Locale language="de">Globaler Produktname auf Deutsch</Locale>
        <Locale language="fr">Nom global du produit en français</Locale>
      </Name>
    </ProductMetaData>
    <Variants />
  </ProductDefinitions>
</Root>
```

:::tip

- **Rule**: Provide for **at least one language** at each translatable element a translation of this language
- **Recommandation**: Provide English translations for each translatable element
- **Recommandation**: If you define some language at one element, provide this language at all elements
:::

- In the example above, the **first rule** is satisfied because the luminaire data contains at least one consistent translation for both - the `ProductNumber` and the `Name` element. In this case even two languages: German (`de`) and English (`en`) are completly translated.
- The **first recommendation** is also fulfilled, as all elements contain an English translation (`en`). 
- The **second recommendation**, however, is violated because only one of the two elements contain a French translation (`fr`) and the other does not.

## Provide a consistent default language

The Header element contains a child element called `DefaultLanguage`:

```xml {3}
<Root>
  <Header>
    <DefaultLanguage>de</DefaultLanguage>
  </Header>
  <GeneralDefinitions />
  <ProductDefinitions />
</Root>
```

It specifies for applications the language that should preferably be displayed if the product does not provide translations in the application's display language. Assuming an application such as [DIALux](https://www.dialux.com) is running in German and a GLDF contains the two languages Spanish and French - with the `DefaultLanguage` you could influence that one of the two languages, that should be used as a fallback. The important part for this to work is the following rule:

:::tip

- **Rule**: For the specified **`DefaultLanguage`**, provide at each translatable element a translation of this language
:::

## Interchangeable `Emitter` without `Geometry`

This rule applies only to GLDFs with the definition of [`Emitter`](/docs/structure/emitters) but without [`Geometry`](/docs/structure/geometries) elements. This use case is also indicated by the usage of the [`EmitterReference`](/docs/structure/variant#2-emitterreference) element:

<img src="/img/docs/tips/good-gldfs-photometry-only.webp" alt="Photometry Only - Do not use optional equipments" width="900" />

The rule states:

:::tip

- **Rule**: In the so-called photometry-only case (when using [`EmitterReference`](/docs/structure/variant#2-emitterreference) and omitting any [`Geometry`](/docs/structure/geometries) definition), interchangeable emitter definitions like in the example above should be avoided. Because in this use case not only the photometric information is taken from the photometry, but also the geometric. Define multiple [`Emitter`](/docs/structure/emitters) and use them in multiple [`Variants`](/docs/structure/variant) instead.
:::

## Duplicate file names

Another rule applies to the file structure within the GLDF container. As this is an ordinary ZIP archive, it is theoretically possible to create **two different files** with exactly the **same file name** within **one folder**. For example, within the *image* folder, a product image of the luminaire named *product.jpg* and a product image of the lamp also named *product.jpg*. This can cause problems if applications need to unpack these files into a file system such NTFS on Windows (which does not support equal file names).

:::tip

- **Rule**: Do not use equal file names for different files within one directory.
:::

## Forbidden file name characters

A similar rule applies to certain characters within the file name. In particular, the backslash `\` should be avoided. This is allowed in a ZIP archive, but when unzipping such a file it would lead to the file being unpacked into a subdirectory and thus an incorrect [`File`](/docs/structure/files) reference.

:::tip

- **Rule**: Do not use the Backslash `\` charackter in file names
:::

## Too many `Variants`

It may be tempting to define not only a luminaire but a complete product family in one GLDF through the usage of [`Variants`](/docs/structure/variant). However, the strongly recommendation here is to limit the definition to the essential variants of a **single** luminaire.

:::tip

- **Recommandation**: Specify only a single luminaire in the `Variants`, not a whole product family
- **Recommandation**: Limit each GLDF to a maximum of 15 `Variants`
:::

## To large GLDF files

GLDFs are intended for the exchange of luminaire data. Be it as is or integrated within lighting design projects of applications such as [DIALux](https://www.dialux.com) or [RELUX](https://relux.com/en/relux-desktop.html). For this purpose, it is important that they do not exceed a manageable size.

:::tip

- **Recommandation**: Keep your GLDFs small and do not exceed the size of 5MB
:::

You can achive this in several ways:

- Resize and compress your images. 1000 pixel and jpg with a 70% compression should be sufficient for most use cases
- Offload files like PDFs to the web and link them only in the [`File`](/docs/structure/files) element - instead of delivering them within the GLDF
