---
title: Measurement Units
sidebar_label: Measurement Units
---
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

### HEAD

Probably the most obvious use case that one might not even think of is the **manufacturer's name**. It occurs in both - photometry files like Eulumdat/IES and the GLDF - and is a mandatory field in these formats. What may seem obvious is a use case for this convention: The manufacturer name in the GLDF XML **always applies**. The manufacturer name in any photometry file is thus **overwritten and has no meaning**:

<!-- <img src="/img//docs/conventions/gldf-overwrites-manufacturer.webp" alt="GLDF Container" width="950" /> -->
