---
title: L3D Editor 1.0 - Final Release
description: Final release of the L3D Editor for GLDF 3D gemetry
author: Alex
author_title: Developer DIAL
author_url: https://github.com/Kurpanik
author_image_url: https://avatars.githubusercontent.com/u/71767601?s=460
hide_table_of_contents: false
tags: [l3d, tools, release, roadmap]
---


Today we've released the **first major version** of the **L3D Editor** 🥳. It contains many bugfixes and is **featurecomplete** insofar, as it provides **everything necessary to create 3D models** for the GLDF.

This post is a **brief summary** of what has changed since the beta version. As well as a small preview of the near-term **roadmap**.

<!-- markdownlint-disable-next-line -->
<img src="/img/homepage/l3d-editor-logo.webp" alt="GLDF Container" width="180" />

<!--truncate-->

## Where can I get it

:::tip
A short **description** and links to the **docs** and the **L3D Editor** itself can be found in the [**Tooling Section**](/tools/#l3d-editor).
:::

---

## What is new

### Functionality

- **Measurement Tool**  
  A new measurement tool helps to evaluate dimensions. Especially when modelling with several OBJ, it can be easier to calculate total dimensions with the *Measurement Tool* instead of aggregating them over individual model dimensions.
- **Visibility toggles**  
  New toggles allows to show and hide entire objects - or individual OBJ mesh groups if any exist. In addition, it is possible to display L3D-specific objects such as [**Joints**](/docs/tools-dev/l3d-editor#joints), [**Connectors**](/docs/tools-dev/l3d-editor#connectors), and more.
- **View modes**  
  Besides the possibility to switch between different 2D views, the editor now has a wireframe mode and the possibility to reset the view to a default distance and angle.
- **Wall mode**  
  To simplify the modelling of wall-mounted luminaires, the view can now be switched to a [**Wall Mode**](/docs/tools-dev/l3d-editor#wall-surfacerecessed). This is a purely visual aid that rotates the coordinate system by 90° without changing the coordinate axis.
- **LES intensity**  
  The luminosity of the LES surfaces can now be adjusted within the range of 10% to 100%.
- **GO and C0 visibility**  
  In the beta version, the [**G0 and C0**](/docs/tools-dev/l3d-editor#c0-plane) lines could be hidden, depending on the placement of models. This has been improved.
- **Warnings**  
  The L3D Editor warns more often to protect the user from incorrect input or possible data loss. For example, the browser tab no longer closes without prompting. Also, a new project cannot be created without confirmation.
- **Hierarchical tree view icons**  
  The luminaire structure tree on the left side of the editor has now several icons that make work easier with entries (toggle visibility, move/delete objects and more)
- **Unit bug**  
  In some cases the L3D Editor created invalid XMLs, because not all units in the object [**Catalog**](/docs/tools-dev/l3d-editor#model-import) were implemented correctly. This is fixed now.

### Usability

- **New icons & tooltips**  
  Many buttons should already have self-explanatory icons. Nevertheless, we have added tooltips to many of them.
- **Shortcuts**  
  Some shortcuts were added to make the workflow easier as well. They can be found clicking the *Settings* button rightmost.
- **Axes legend**  
  An axis legend can also be found in the *Settings* window now.
- **Selection highlighting**  
  Both [**LEO and LES**](/docs/tools-dev/l3d-editor#light-emitting-objects-leo) are now better highlighted in the editor. Furthermore, they can be selected in different ways (hierarchical tree view, CAD view).
- **Manipulator improvements**  
  The usability of some manipulators has been improved. For example, degrees of freedom for [**Joints**](/docs/tools-dev/l3d-editor#joints) can now be set visually.
- **Context menus**  
  Some functions such as the *Move*, *Selection* or *Rotate Tool*; But also deleting or switching the visibility of objects are now accessible via context menus.

### Documentation

A comprehensive documentation can now be accessed directly from the editor (and found [**here**](/docs/tools-dev/l3d-editor)).

---

### Roadmap

Finally, a short outlook on further changes:

- **L3D XSD 1.0 support**  
  Currently, the L3D Editor supports the L3D XSD in version 0.10. One upcoming major change will be the integration of the final L3D XSD specification 1.0.
  :::warning Important
  Even though the L3D Editor is already final, the L3D XSD is still close to finalisation. It is unlikely, but cannot be guaranteed, that the final version will introduce some breaking changes. This should be kept in mind when creating L3Ds.
  :::

- **More units**  
  For the scaling of OBJ files, further units of measurement are planned. Currently we plan to add decimeters and yards to close gaps in the existing unit range.
