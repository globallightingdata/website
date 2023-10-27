---
title: GLDF XSD Reference
sidebar_label: XSD Reference
---

## XSD Introduction

An XSD (also known as XML Schema) defines the structures for XML documents. It describes the **rules** how an XML hierarchy must be structured in order to be considered **valid**. This means, among other things: which elements **exist** and how they must be arranged. Which elements are **mandatory or optional**. Which **data types** must be used for the contents of the elements. Which **attributes** they contain. Which **cross-references** exist within the XML (this applies in particular to all IDs in the GLDF). It also contains a **complete documentation** of all elements and attributes. And much more.

The XSD itself is written in XML as well and has often the file extension `.xsd`. The XSD is referenced in the XML document and can then check whether the written XML is valid using many XML editors, automatically.

In summary the XSD allows...

- to understand the GLDF XML hierarchy
- to view the documentation of all elements and attributes
- to validate a written GLDF XML

The only problem is, that the XSD is **difficult to read**. Therefore, it can also be viewed **visually** on gldf.io - in the XSD Reference section accessible via the navigation menu or here:

:::tip link
[XSD Reference](pathname:///xsd-reference/index_Root.html)
:::

## Root Example

The following is an example of the top XML element 'Root'. According to the GLDF definition, three child elements are **required** at this point

- `Header`
- `GeneralDefinitions`
- `ProductDefinitions`

And exactly this is also shown by the [XSD Reference](pathname:///xsd-reference/index_Root.html)

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-root.webp)

In addition, all elements are annotated with a **short documentation**. So to obtain a valid GLDF XML against this XSD description, the GLDF XML must now be written in **exactly the same order**

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-root-xml.webp)

## Header Example

Let's take a closer look at the first child element of `Root`, the `Header`. To do this, just click on the [Header node](/xsd-reference/index_Root.html#Link1A) in the XSD reference to navigate to it:

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-headerclick.webp)

will lead to

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-header.webp)

Here you will see differences to the `Root` element: some child elements are now outlined in **dashed lines**. This representation shows **optional elements**. These can, but do not have to be included in the XML. Depending on whether you need or have the information or not. However, even if most elements are optional, you should provide as many informations to your users and customers, as possible.

The `Header` element could look like this

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-header-xml.webp)

Note that not all of the optional (dashed outline) elements were included in this example. `LicenseKeys`, `ReluxMemberId` and `DIALuxMemeberId` were omitted. A `+` symbol after the name - like after `Contact` - indicates that this element can contain further child elements. A click on it shows which ones they are.

## Datatypes

Another click on element in the XSD reference also reveals the **required data type** in the XML. If you take a look at `CreationTimeCode`, you will see that an `xs:dateTime` is expected here. This is text containing date and time in a **specific format**. How this format has to look exactly to become valid, can be read on many websites about XSD - among others on [w3schools.com/xml/schema_dtypes_date](https://www.w3schools.com/xml/schema_dtypes_date.asp)

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-creationtimecode.webp)

:::info
A valid `xs:dateTime` for 4 May 2022 at 11am in the UTC time zone would be as follows

```xml
<CreationTimeCode>2022-05-04T11:00:00Z</CreationTimeCode>
```

:::

## Multiplicity

The XSD reference shows not only which elements can be defined, but also **how often**. This is exemplified by the `Contact`'s child element `Address`:

![XSD Root](/img/docs/getting-started/xsd-reference_xsd-address.webp)

`1..∞` means that `Address` may occur 1 to infinite times. It is therefore

- a mandatory field
- may occur once or several times
