---
title: Sensors
sidebar_label: Sensors
---
## Description

`Sensors` is the second child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of Sensors is **optional**.

`Sensors` are defined direct in GLDF. A distinction is made between two fundamentally different variants. 

First of all, a single `Sensor` element references a [**File**](/docs/structure/files.md) element which describes the location of the ldc file (.ies/.ldt) itself. Furthermore, the `Sensor` element **can** contain various additional [**metadata**](#sensor-metadata) to complement the sensor file.




## Location in XSD

![Sensors in XSD](/img/docs/structure/sensors-hierarchy.webp)


## XSD description

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/sensors-xsd.webp" alt="Sensors in XSD" width="750" />

