---
title: L3D Editor
sidebar_label: L3D Editor
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Introduction

The L3D Editor is a web-based CAD application developed by [DIAL/DIALux](https://www.dialux.com) to create [L3D models](/docs/geometry/l3d-intro.md) from [Wavefront OBJ files](https://de.wikipedia.org/wiki/Wavefront_OBJ). These L3Ds models can then be used for detailed visualisation of your own products in GLDF (see [`Geometry`](/docs/structure/geometries.md)).

:::tip Link
[https://l3d-editor.gldf.io](https://l3d-editor.gldf.io)
:::

In this chapter, the graphical user interface will be explained first. You will learn how to import Wavefront OBJ files into your project. How to align and expand them with properties that are important for the GLDF. Such as light emitter, light emitting surfaces and connectors. And finally how to create and work with joints for adjustable luminaires.

## User interface

<img src="/img/docs/tools/l3d-editor-ui.webp" alt="L3D Editor" width="900" /><br /><br />

1. **Drag & Drop elements**
  In the upper left corner you can find various icons, which you can drag&drop into the working CAD area. These are
    1. LEO (Light Emitting Object) - this are the parts where [GLDF Emitter](/docs/structure/emitters.md) are connected with
    2. Joints - this parts allow a hierachical and adjustable connection between two OBJs
    3. Sensors - like LEOs but for sensor radiation instead of light
    4. Electrical connectors - define points on the geometry to mark electrical connections (cable entries/exits)
    5. Pendulum connectors - required for ceiling mounted luminaires to define points on the geometry, from which the luminaire is suspended.
2. **Import catalog**  
  You can find your imported OBJ files here. And drag&drop them on the CAD working area (3)
3. **CAD working area**  
  The main working are of the application. You can place your objects here and position and rotate them.  
4. **Hierarchical view**  
  Hierarchical view of all objects placed in the CAD view. Allows enable/disable the visibility of objects. As well as their rearrangement in the hierarchy by drag & drop.
5. **Property windows**  
  Are where you can manipulate and set properties of selected objects in the CAD area
6. **Model information**  
  Indication of the suitability of the constructed model for usage in light calculation applications such as [DIALux](https://www.dialux.com) and [RELUX](https://relux.com)

## CAD area buttons

For the buttons in the CAD working area there are **tooltips with explanations**. However, they should also be briefly introduced at this point:

<img src="/img/docs/tools/l3d-editor-buttons.webp" alt="L3D Editor" width="900" />

## Model import

Only [**Wavefront OBJ files**](https://de.wikipedia.org/wiki/Wavefront_OBJ) are supported and can be imported by the L3D format. There are three ways to import OBJ files:

1. Via **drag & drop** of a file with the **.obj extension** to any position of the CAD working area (3)
2. Using the Import button on top of the CAD working area
3. Using the applications **catalog** functionality:<br />  
  <img src="/img/docs/tools/l3d-editor-catalog.webp" alt="L3D Editor" width="450" /><br /><br />

After the import, you should see your selected models on the left side with a small preview:

<img src="/img/docs/tools/l3d-editor-after-import.webp" alt="L3D Editor" width="450" />

## Model placement

Now that the OBJ models are imported into the application, they can be placed on the CAD surface. If this has not already been done by drag & drop during import, there are two ways to add OBJ models to the CAD working area:

1. With the mouse via **drag & drop** from the catalogue **to the CAD surface**  
2. With the mouse via **drag & drop** from the catalogue **to the hierarchy overview**<br />  
  <img src="/img/docs/tools/l3d-editor-placement.webp" alt="L3D Editor" width="450" />

You can use the Move & Rotate modes (1) to **translate** your models. They are also accessible via **context menu** (2). Or use the **property window** to enter the values precisely (3):

<img src="/img/docs/tools/l3d-editor-translate.webp" alt="L3D Editor" width="650" />

## Light emitting objects

tbd.

### Create a Leo

tbd.

### Leo names & GLDF

tbd.

## Joints

tbd.

## Connectors

tbd.

## Example

tbd.
