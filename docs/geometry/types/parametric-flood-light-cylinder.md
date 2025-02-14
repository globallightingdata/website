---
title: Floodlight Cylinder
sidebar_label: Floodlight Cylinder
---

## Description`*

![Floodlight Cylinder](/img/docs/geometry/parametric/flood-light-cylinder.webp)

`FloodlightCylinder` is a spotlight featuring a cylinder-shaped luminous head mounted on a bracket attached to a base plate.

- `Diameter` and `Height`: Define the overall dimensions of the luminaire's housing.
- `Luminous Features`:
  - `LuminousDiameter`: Sets the size of the main luminous surface.
  - `LuminousHeight` or `ReflectorDepth` *(optional)*:
    - `LuminousHeight`: Describes how far the luminous part protrudes from the housing.
    - `ReflectorDepth`: Describes how far the luminous part is recessed into the housing.
- `TotalHeight` *(optional)*: Defines the overall height of the entire model, including the bracket. If specified, the bracket size is calculated as `TotalHeight` minus the luminaire `Height`.

**Note**: The pole itself is **not modeled** within this luminaire configuration.

## Parameters

| Parameter                              |  Type   | Explanation                                                                                     |
| -------------------------------------- | :-----: | ---------------------------------------------------------------------------------------------:|
| **Diameter**                           | int     | Base diameter of the luminaire in millimeters (mm).                                            |
| **Height**                             | int     | Height of the luminaire head in millimeters (mm).                                              |
| **LuminousDiameter**                   | int     | Diameter of the main luminous surface in millimeters (mm).                                      |
| **LuminousHeight** / **ReflectorDepth**| int     | Value in mm. Choose one to define how the luminous part interacts with the housing.             |
| **TotalHeight**                        | int     | Overall height of the luminaire including the bracket in millimeters (mm) *(optional)*.         |
| **HousingColor**                       | string  | A 4-digit RAL color code matching `[1-9][0-9]{3}` (optional).                                  |
| **FileName**                           | string  | Optional file name (without an extension).                                                    |

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
      <xs:element name="HousingColor" minOccurs="0">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="[1-9][0-9]{3}"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="FileName" type="xs:string" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

### Example

```xml
<P3D filename="FloodLightCylinder">
  <FloodLightCylinder>
    <Diameter>150</Diameter>
    <Height>250</Height>
    <LuminousDiameter>140</LuminousDiameter>
    <LuminousHeight>50</LuminousHeight>
    <TotalHeight>300</TotalHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </FloodLightCylinder>
</P3D>
```
