---
title: Recessed Cuboid
sidebar_label: Recessed Cuboid
---

## Description

![Recessed Cuboid](/img/docs/geometry/parametric/recessed-cuboid.webp)

The `RecessedCuboid` is a cube-shaped recessed luminaire.

- `Width`, `Length`, and `Height` describe the total size of the entire luminaire.
- `LuminousWidth`, `LuminousLength`, and either `LuminousHeight` or `ReflectorDepth` describe the dimensions of the luminous surfaces.
  - `LuminousHeight` describes how far the luminous part sticks out of the housing.
  - `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- `TopWidth` and `TopLength` define the dimensions of the upper part, which are by default 80% of the lower dimensions.
- `Mounting` specifies how the luminaire is mounted. Possible values are `Ceiling`, `Wall`, or `Floor`.
- Optionally, `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, a `FileName` can be provided.

## Parameters

| Parameter                              |  Type   | Explanation                                                                                           |
| -------------------------------------- | :-----: | -----------------------------------------------------------------------------------------------------:|
| **Width**                              | int     | Value in mm.                                                                                          |
| **Length**                             | int     | Value in mm.                                                                                          |
| **Height**                             | int     | Value in mm.                                                                                          |
| **LuminousWidth**                      | int     | Value in mm.                                                                                          |
| **LuminousLength**                     | int     | Value in mm.                                                                                          |
| **LuminousHeight** / **ReflectorDepth**| int     | Value in mm. Choose one to define how the luminous part interacts with the housing.                   |
| **TopWidth**                           | int     | Value in mm (optional).                                                                               |
| **TopLength**                          | int     | Value in mm (optional).                                                                               |
| **Mounting**                           | string  | `Ceiling`, `Wall` or `Floor`.                                                                         |
| **HousingColor**                       | string  | A 4-digit RAL color code matching the pattern `[1-9][0-9]{3}` (optional).                             |
| **FileName**                           | string  | Optional file name.                                                                                   |

## XSD

```xml
<xs:element name="RecessedCuboid">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:choice>
        <xs:element name="LuminousHeight" type="xs:int"/>
        <xs:element name="ReflectorDepth" type="xs:int"/>
      </xs:choice>
      <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>
      <xs:element name="TopLength" type="xs:int" minOccurs="0"/>
      <xs:element name="Mounting">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Ceiling"/>
            <xs:enumeration value="Wall"/>
            <xs:enumeration value="Floor"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
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
<P3D filename="RecessedCuboid">
  <RecessedCuboid>
    <Width>100</Width>
    <Length>100</Length>
    <Height>40</Height>
    <LuminousWidth>80</LuminousWidth>
    <LuminousLength>80</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <TopWidth>100</TopWidth>
    <TopLength>100</TopLength>
    <Mounting>Ceiling</Mounting>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </RecessedCuboid>
</P3D>
```
