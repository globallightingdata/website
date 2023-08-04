---
title: GLDF in DIALux
sidebar_label: DIALux
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Introduction

The new GLDF format allows for the effortless creation of complete luminaire data with a wealth of information, far beyond the technical light data found in the conventional Eulumdat, IES, and ULD files, either with minimal effort or through automation. The GLDF format constructs luminaires in a modular way, and many pieces of information are optional.

## Minimum requirements

The minimum requirements for a GLDF file is [**DIALux evo**](https://www.dialux.com/en-GB/download) starting from [**version 12.0**](https://www.dialux.com/en-GB/dialux/version-history) upwards. Furthermore, photometric data is essential, as light calculation is not possible without it. Without further specifications, the luminaire's [geometry](/docs/structure/geometries.md) is generated from [photometric](/docs/structure/photometries.md) data as well.

Moreover, additional [light sources](/docs/structure/light-sources.md) and [equipment](/docs/structure/equipments.md) can be specified and will be considered in DIALux evo. These specifications can also include custom color spectra. Any [multi-channel](/docs/structure/light-sources.md) light sources, such as RGB, RGBW, or tunable daylight luminaires, will be evaluated by DIALux as well.

Article names and numbers assist the user in easily identifying the luminaires. Translated description texts and images provide further details. The specified [mounting types](/docs/structure/variant#mountings-optional) are directly evaluated by DIALux evo when placing the luminaires.

![DIALux luminaire selection](/img/docs/tools/dialux_luminaire-selection.webp)

## Variants in DIALux

In a GLDF file, multiple product alternatives can be described. Providing them as GLDF [Variants](/docs/structure/variant.md) of the same product is particularly helpful. These alternatives may differ in form, color, description, and even light technical behavior. The user can choose which variant DIALux will utilize during the import process.

![DIALux Variant selection](/img/docs/tools/dialux_variant-selection.webp)

## 3D model support

Finally, 3D models of luminaires can be assigned to the products, using either the existing M3D/M4D format or the new [L3D format](/docs/geometry/l3d-intro.md), as desired. For the latter, a free [L3D Editor](https://l3d-editor.gldf.io) is available.

![DIALux 3D model support](/img/docs/tools/dialux_3d-models.webp)

## DIALux membership

Each luminaire generated with GLDF displays article names and numbers regardless of the license. Moreover, GLDF luminaires from non-members utilize complete photometric data and product variants. Luminaires from **DIALux members** however, provide **particularly valuable information**, thus supporting the lighting planner.

For **Silver** members, DIALux evo additionally displays the manufacturer name and logo and contributes to the promotion of the brand. GLDF luminaires from **Gold and Platinum** members utilize the **complete data scope**, including images, description texts, installation types, and 3D models. If you have any questions regarding membership and license types, please visit us on [**DIALux membership**](https://www.dialux.com/en-GB/dialux-business/membership). Or contact

**Friedrich W. Bremecker**  
Business Unit Director Sales  

+49 2351 5674 311  
[bremecker@dial.de](mailto:bremecker@dial.de)

![ ](https://imgsh.net/i/k2SHFbZ.png)
