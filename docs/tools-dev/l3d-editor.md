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
  In the upper left corner you can find various icons, which you can drag  drop into the working CAD area (3). These are
    1. LEO (Light Emitting Object) - this are the parts which GLDF [`Emitter`](/docs/structure/emitters.md) can be linked with.
    2. Joints - this parts allow a hierachical and adjustable connection between two OBJs.
    3. Sensors - like LEOs but for sensor radiation, instead of light.
    4. Electrical connectors - define points on the geometry to mark electrical connections (cable entries/exits).
    5. Pendulum connectors - required for ceiling mounted luminaires to define points on the geometry, from which the luminaire is suspended.
1. **Import catalog**  
  You can find your imported OBJ files here. And drag & drop them on the CAD working area (3).
1. **CAD working area**  
  The main working area of the application. You can place your objects here and position and rotate them.  
1. **Hierarchical view**  
  Hierarchical view of all objects placed in the CAD view. Allows to select and enable/disable the visibility of objects. As well as their rearrangement in the hierarchy by drag & drop.
1. **Property windows**  
  Here you can set global project properties. As well as properties of selected objects in the CAD area.
1. **Model information**  
  Indication of the suitability of the constructed model for usage in light calculation applications such as [DIALux](https://www.dialux.com) and [RELUX](https://relux.com).

## CAD area buttons

Most buttons in the CAD working area have **tooltips with explanations**. However, they should also be briefly introduced here:

<img src="/img/docs/tools/l3d-editor-buttons.webp" alt="L3D Editor" width="900" />

## Model import

Only [**Wavefront OBJ files**](https://de.wikipedia.org/wiki/Wavefront_OBJ) are supported and can be imported into the L3D Editor. There are three ways to import OBJ files:

1. Via **drag & drop** of a file with the **.obj extension** to any position of the CAD working area (3)
2. Using the Import button on top of the CAD working area
3. Using the applications **Catalog** functionality:<br />  
  <img src="/img/docs/tools/l3d-editor-catalog.webp" alt="L3D Editor" width="450" /><br /><br />

After the import, you should see your selected models on the left side with a small 3D preview:

<img src="/img/docs/tools/l3d-editor-after-import.webp" alt="L3D Editor" width="450" />

## Model scaling

Depending on the source application, models can be scaled differently. This can lead to geometries in the L3D Editor that are either far too large or far too small. Therefore, the editor allows scaling of the imported OBJs, during import and afterwards.

### Scaling before import

If the scaling is already known **before** import, it can be set in advance. All models imported in the following will scale accordingly.

<img src="/img/docs/tools/l3d-editor-import-scaling.webp" alt="L3D Editor" width="450" />

To do this, select the corresponding unit in the selection field of the *Import Catalog*.

### Scaling after import

If the scaling is incorrect **after** the import, it can also be adjusted.

<img src="/img/docs/tools/l3d-editor-existing-scaling.webp" alt="L3D Editor" width="600" />

Simply open the *Import Catalog* and spycify the scaling as required for each model. Already placed OBJs in the CAD area will be scaled accordingly as well.

## Model placement

Now that the OBJ models are imported into the application, they can be placed on the CAD surface. If this has not already been done by drag & drop during import, there are two ways to add OBJ models to the CAD working area:

1. With the mouse via **drag & drop** from the *Catalog* **to the CAD surface**  
2. With the mouse via **drag & drop** from the *Catalog* **to the hierarchy overview**<br />  
  <img src="/img/docs/tools/l3d-editor-placement.webp" alt="L3D Editor" width="450" />

You can use the Move & Rotate modes (1) to **translate** your models. These modes are also accessible via **context menu** (2). Or use the **property window** to enter the values more precisely (3):

<img src="/img/docs/tools/l3d-editor-translate.webp" alt="L3D Editor" width="650" />

## Light Emitting Objects (LEO)

The models imported, placed and oriented up to this point now contain the geometric information for a luminaire. For lighting calculation, it is now necessary to determine **which surfaces are luminous and therefore emit light**. This is done using so-called Light Emitting Objects. Or LEO for short. After all, they are also the geometric connectors to the [`Emitter`](/docs/structure/emitters.md) elements in the GLDF. The assignment of LEOs in the L3D model and the emitters in the GLDF is done via **unique identifiers**.

### Create a LEO

As with many functionalities in the L3D Editor, there are different ways to add a LEO to the luminaire model. One is to **drag & drop the LEO onto the corresponding geometry** in the CAD area. The model becomes highlighted in the scene and the LEO is hierarchically attached to the geometry:

<video controls src="https://github.com/globallightingdata/files/raw/master/docs/l3d-create-leo-1.webm" width="620">Your browser doesn't support the WEBM video format</video><br/><br/>

Another way is to **draw** the LEO into the model. To do this, select the model and choose the corresponding surfaces:

<video controls src="https://github.com/globallightingdata/files/raw/master/docs/l3d-create-leo-2.webm" width="620">Your browser doesn't support the WEBM video format</video><br/><br/>

:::tip
Holding the Ctrl-key, you can undo selected areas.
:::

### LEO names & GLDF

Imagine a luminaire with two light emitting objects like this:

<img src="/img/docs/tools/l3d-editor-multi-leo.webp" alt="L3D Editor" width="450" />

And let's further assume that they are differently equipped in terms of light. For example, a 10W narrow and a 15W wide beam spot. As a consequence, the final L3D model must be afterwards **assigned different [`Emitter`](/docs/structure/emitters.md)** in the GLDF, that actually reflects these differences.

For this to be possible, the two different LEOs must be **referenced from within the GLDF**. And this is exactly what is done via **unique LEO names**. LEO names are automatically assigned in the L3D Editor as soon as a LEO is added. However, these are somehow cryptic and should be overwritten for better usability. Simply select the LEO in the CAD area or through the hierarchy on the left. And assign a new LEO name in the property area on the right side of the L3D Editor:

<img src="/img/docs/tools/l3d-editor-leo-name.webp" alt="L3D Editor" width="600" />

#### Referencing in GLDF

To continue the example with the two LEOs: On GLDF side, these LEO names are referenced in the [`Variant`](/docs/structure/variant.md) element, while joining [`Emitter`](/docs/structure/emitters) and [`Geometry`](/docs/structure/geometries) together. The [`Variant`](/docs/structure/variant.md) Element has a child element named [`ModelGeometryReference`](/docs/structure/variant#4-modelgeometryreference) for this purpose:

```xml showLineNumbers {13-14,39,46,55,70,72,75}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/gldf.xsd">
    <Header>
        <!-- Skipped for clarity -->
    </Header>
    <GeneralDefinitions>
        <Files>
            <File id="photometryFileNarrow" contentType="ldc/eulumdat" 
                  type="localFileName">PhotometryNarrow.ldt</File>
            <File id="photometryFileWide" contentType="ldc/eulumdat" 
                  type="localFileName">PhotometryWide.ldt</File>
            <File id="l3dModelFile" contentType="geo/l3d" 
                  type="localFileName">geometry.l3d</File>
        </Files>
        <Photometries>
            <Photometry id="photometryNarrow">
                <PhotometryFileReference fileId="photometryFileNarrow"/>
            </Photometry>
            <Photometry id="photometryWide">
                <PhotometryFileReference fileId="photometryFileWide"/>
            </Photometry>
        </Photometries>
        <LightSources>
            <FixedLightSource id="fixedLightSource-10w">
                <Name>
                    <Locale language="en">LED module 10W</Locale>
                </Name>
                <RatedInputPower>10</RatedInputPower>
            </FixedLightSource>
            <FixedLightSource id="fixedLightSource-15w">
                <Name>
                    <Locale language="en">LED module 15W</Locale>
                </Name>
                <RatedInputPower>15</RatedInputPower>
            </FixedLightSource>
        </LightSources>
        <Emitters>
            <Emitter id="fixedEmitter-narrow">
                <FixedLightEmitter>
                    <PhotometryReference photometryId="photometryNarrow"/>
                    <LightSourceReference fixedLightSourceId="fixedLightSource-10w"/>
                    <RatedLuminousFlux>100</RatedLuminousFlux>
                </FixedLightEmitter>
            </Emitter>
            <Emitter id="fixedEmitter-wide">
                <FixedLightEmitter>
                    <PhotometryReference photometryId="photometryWide"/>
                    <LightSourceReference fixedLightSourceId="fixedLightSource-15w"/>
                    <RatedLuminousFlux>150</RatedLuminousFlux>
                </FixedLightEmitter>
            </Emitter>
        </Emitters>
        <Geometries>
            <ModelGeometry id="modelGeometry">
                <GeometryFileReference fileId="l3dModelFile" />
            </ModelGeometry>
        </Geometries>
    </GeneralDefinitions>
    <ProductDefinitions>
        <ProductMetaData>
            <!-- Skipped for clarity -->
        </ProductMetaData>
        <Variants>
            <Variant id="variant-1">
                <Name>
                    <Locale language="en">Example luminaire with L3D and multiple LEOs</Locale>
                </Name>
                <Geometry>
                    <ModelGeometryReference geometryId="modelGeometry">
                        <EmitterReference emitterId="fixedEmitter-narrow">
                            <EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
                        </EmitterReference>
                        <EmitterReference emitterId="fixedEmitter-wide">
                            <EmitterObjectExternalName>LEO2</EmitterObjectExternalName>
                        </EmitterReference>
                    </ModelGeometryReference>
                </Geometry>
            </Variant>
        </Variants>
    </ProductDefinitions>
</Root>
```

The particular rows in the XML example are highlighted:

- First, the L3D [`File`](/docs/structure/files) with the two LEOs is referenced (13-14, see initial image above)
- A [`Geometry`](/docs/structure/geometries) element references the L3D model file (55)
- Matching [`Emitter`](/docs/structure/emitters) are defined for the two LEOs (39 and 46)
- And finally, in the [`Variant`](/docs/structure/variant) the geometry (70) is combined with the two [`Emitter`](/docs/structure/emitters) (71 and 74) using the `ModelGeometryReference` element.
- In order to specify **which emitter in GLDF** should be assigned to **which LEO in the L3D**, the LEO **names previously defined in the L3D editor** are now set using **`EmitterObjectExternalName`** (72 and 75).

## Light Emitting Surface (LES)

Light Emitting Surfaces (LES) - similar to Light Emitting Objects (LEO) - are model surfaces with a special meaning. While LEOs are the surfaces that **emit** the photometrically measured light (The photometry is "placed" in their center). LES are meant for visualisation in applications like DIALux/Relux: They appear simply brighter.

:::info

- On **surfaces marked as LEO** the photometry is positioned in the center of them. They are intended for the **physically correct calculation**.
- Areas marked as LES have **no relevance for the light calculation**. They are only intended for **visualisation** of the luminaire.
- **At least one LEO must be present** in the model, otherwise it cannot be saved in the L3D editor. **LES are optional** on the other hand.
:::

By default there is no need to create LES them manually. Whenever a LEO is created, a LES with a luminous intensity of 100% is **also created for the corresponding areas**. However, you can create them also manually. Simply select the LEO you would like to create an additional LES for. And click on **Create Light Emitting Surface**:

<img src="/img/docs/tools/l3d-editor-les.webp" alt="L3D Editor" width="650" />

It is also possible to make some LES appear darker or lighter by setting the percentage to a value between 10% and 100%.

## Joints

The [L3D format](/docs/geometry/l3d-intro.md) as well as the L3D Editor support luminaires with movable [`Joints`](/docs/geometry/l3d-xml-reference.md#joint), which can then be adjusted for the respective lighting scene in applications such as [DIALux](https://dialux.com) and [Relux](https://relux.com/en/relux-desktop.html).

In the L3D editor, these joints are separate objects that are placed in the CAD area. They create a hierarchy between two objects. Once placed, you can use the property window to set degrees of freedom, in which the user can later rotate the child object on the X, Y and/or Z axis:

<video controls src="https://github.com/globallightingdata/files/raw/master/docs/l3d-create-joints.webm" width="700">Your browser doesn't support the WEBM video format</video><br/><br/>

## Connectors

The L3D format supports also two types of connectors:

- **Electric connector**  
  The electrical connctor marks inputs/exits for power cables and can be useful for planners and architects who need to take this into account in their plans.
- **Pendulum connector**  
  As the name suggests, the pendulum connector is only relevant for pendant luminaires. It marks the point(s) of the model, at which the luminaire should be visually suspended in applications like DIALux/Relux.
  
  <img src="/img/docs/tools/l3d-editor-connector.webp" alt="L3D Editor" width="400" />

To add a connector to the model, simply drag & drop it onto the corresponding object in the CAD area or in the hierarchy overview:

<video controls src="https://github.com/globallightingdata/files/raw/master/docs/l3d-create-connector.webm" width="500">Your browser doesn't support the WEBM video format</video><br/><br/>
