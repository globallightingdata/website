---
title: Variant over Global Data
sidebar_label: Variant over Global
---

GLDF files describe single products and [`variants`](/docs/structure/variant.md) thereof. That said, even though you define a single product in a GLDF file, every product consists of at least one [`variant`](/docs/structure/variant.md), but there is no limit to the number of [`variants`](/docs/structure/variant.md) of a single product you can add to a GLDF file.

Some information applies to all [`variants`](/docs/structure/variant.md) of a product. Other information applies to specific [`variants`](/docs/structure/variant.md) only.

For this reason, we divided the GLDF product definitions into two parts. The first part is the [`ProductMetaData`](/docs/structure/product). Anything defined here will apply to all variants in the GLDF file. 

The second part is the [`Variants`](/docs/structure/variant.md) part. You can define the variations of your product and apply properties to the different [`variants`](/docs/structure/variant.md) individually instead of globally in the [`ProductMetaData`](/docs/structure/product) part above.

:::important Convention
If a property is present in `ProductMetaData`

- it **applies to all variants** in the gldf file
- properties **can be overwritten** or enhanced **by the variants**

This convention **always prevails** without having to be explicitly defined.
:::

:::tip Example 1
Let's assume you have a standing luminaire in your product portfolio with different electrical components for other markets. You can apply all the same pictures, names, descriptions, etc., to all variants but define separate electrical properties in the electrical section of the descriptive attributes.
:::

:::tip Example 2
You have a track-mounted luminaire that comes with different reflectors. All Luminaires will have the same name, descriptive attributes, etc. However, the 3d Model and the Light distribution would change for the other variants.
:::

For detailed examples with XML code, see [`ProductMetaData ⇄ Variants`](/docs/structure/product#productmetadata--variants)