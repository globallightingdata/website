---
title: Floodlight Cylinder
sidebar_label: Floodlight Cylinder
---

## Description

![Floodlight Cylinder](/img/docs/geometry/parametric/flood-light-cylinder.webp)

A spotlight with a cylinder-shaped luminous head mounted on a bracket attached to a base plate.

- **Diameter** and **Height**: Define the overall dimensions of the luminaire's housing.
- **LuminousDiameter**: Sets the size of the main luminous surface.
- **LuminousHeight** or **ReflectorDepth** *(optional)*:
  - **LuminousHeight**: Describes how far the luminous part protrudes from the housing.
  - **ReflectorDepth**: Describes how far the luminous part is recessed into the housing.
- **TotalHeight** *(optional)*: Defines the overall height of the entire model, including the bracket. If specified, the bracket size is calculated as `TotalHeight` minus the luminaire `Height`.

**Note**: The pole itself is **not modeled** within this luminaire configuration.

## Parameters

| Parameter        | Type  | Explanation                                                                                     |
| ---------------- | :---: | :---------------------------------------------------------------------------------------------: |
| Diameter         | int   | Base diameter of the luminaire in millimeters (mm).                                            |
| Height           | int   | Height of the luminaire head in millimeters (mm).                                              |
| LuminousDiameter | int   | Diameter of the main luminous surface in millimeters (mm).                                      |
| LuminousHeight   | int   | Extent to which the luminous part protrudes from the housing *(optional)* (mm).                 |
| ReflectorDepth   | int   | Extent to which the luminous part is recessed into the housing *(optional)* (mm).               |
| TotalHeight      | int   | Overall height of the luminaire including the bracket in millimeters (mm) *(optional)*.         |

## XSD

```xml
<xs:element name="FloodLightCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:choice>
        <xs:element name="LuminousHeight" type="xs:int"/>
        <xs:element name="ReflectorDepth" type="xs:int"/>
      </xs:choice>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example with LuminousHeight

```xml
<P3D>
  <FloodLightCylinder>
    <Diameter>300</Diameter>
    <Height>100</Height>
    <LuminousDiameter>280</LuminousDiameter>
    <LuminousHeight>10</LuminousHeight>
    <TotalHeight>250</TotalHeight>
  </FloodLightCylinder>
</P3D>
```

### Example with ReflectorDepth

```xml
<P3D>
  <FloodLightCylinder>
    <Diameter>300</Diameter>
    <Height>100</Height>
    <LuminousDiameter>280</LuminousDiameter>
    <ReflectorDepth>5</ReflectorDepth>
    <TotalHeight>250</TotalHeight>
  </FloodLightCylinder>
</P3D>
```