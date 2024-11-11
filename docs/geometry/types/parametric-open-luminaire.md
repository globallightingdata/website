---
title: Open Luminaire
sidebar_label: Open Luminaire
---

## Description

![Open Luminaire](/img/docs/geometry/parametric/open-luminaire.webp)

The `Open Luminaire` features a base with an openly accessible luminous object, designed for versatile mounting options.

- `Dimensions`:
  - `With`, `Length`, and `Height` define the total size of the luminaire's housing in the form of a bounding box.
  - `LuminousDiameter` and `LuminousLength` describe the dimensions of the luminous elements.
- `Mounting`:
  - `Ceiling`: The luminaire is designed to be mounted on ceilings.
  - `Wall`: The luminaire is designed to be mounted on walls.
- `NumberOfTubes`:
  - Determines the number of luminous tubes or elements within the luminaire.
- `Base Dimensions`:
  - The base's size is controlled by the `Diameter` parameter, ensuring stability and aesthetic integration.
- `Mounting Details`:
  - The luminaire is securely attached based on the selected `Mounting` type.
  - The number of luminous tubes can be adjusted to achieve the desired lighting effect.

**Note**: The pole itself is **not modeled** within this luminaire configuration.

## Parameters

| Parameter        | Type  | Explanation                                                                                       |
| ---------------- | :---: | :-----------------------------------------------------------------------------------------------: |
| Width            | int   | Base width of the luminaire in millimeters (mm).                                                  |
| Length           | int   | Base length of the luminaire in millimeters (mm).                                                 |
| Height           | int   | Height of the luminaire's housing in millimeters (mm).                                            |
| LuminousDiameter | int   | Diameter of the main luminous object in millimeters (mm).                                         |
| LuminousLength   | int   | Length of the luminous elements in millimeters (mm).                                              |
| Mounting         | enum  | Mounting type of the luminaire. Possible values: `Ceiling`, `Wall`.                              |
| NumberOfTubes    | int   | Number of luminous tubes or elements within the luminaire.                                       |

## XSD

```xml
<xs:element name="OpenLuminaire">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="Mounting">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Ceiling"/>
            <xs:enumeration value="Wall"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="NumberOfTubes" type="xs:int"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D>
  <OpenLuminaire>
    <Width>20</Width>
    <Length>500</Length>
    <Height>20</Height>
    <LuminousWidth>16</LuminousWidth>
    <LuminousLength>500</LuminousLength>
    <LuminousHeight>16</LuminousHeight>
  </OpenLuminaire>
</P3D>
```
