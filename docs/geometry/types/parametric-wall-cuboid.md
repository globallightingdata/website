---
title: Wall Cuboid
sidebar_label: Wall Cuboid
---

## Description

![Wall Cuboid](/img/docs/geometry/parametric/wall-cuboid.webp)

This type is a cube-shaped luminaire that is attached to a wall.

- The parameters `Length`, `Width`, and `Height` determine the housing dimensions.
- `LuminousLength`, `LuminousWidth`, and either `LuminousHeight` or `ReflectorDepth` determine the size of the luminous surfaces.
  - The `LuminousHeight` describes how far the luminous part sticks out of the body.
  - The `ReflectorDepth` describes how far the luminous part is recessed into the body.
- You can skew the housing by setting `TopLength` and `TopWidth`.
- You can define the light output areas through `Type` as `Direct`, `Indirect`, or `DirectIndirect`.

## Parameters

| Parameter        | Type    | Explanation                                               |
| ---------------- | :-----: | :-------------------------------------------------------: |
| Width            | int     | Value in mm                                               |
| Length           | int     | Value in mm                                               |
| Height           | int     | Value in mm                                               |
| LuminousWidth    | int     | Value in mm                                               |
| LuminousLength   | int     | Value in mm                                               |
| LuminousHeight   | int     | Value in mm                                               |
| ReflectorDepth   | int     | Value in mm                                               |
| TopWidth         | int     | Value in mm                                               |
| TopLength        | int     | Value in mm                                               |
| Type             | string  | Direct, Indirect, DirectIndirect                          |
| HousingColor     | string  | 4 digit RAL color code                                    |

## XSD

```xml
<xs:element name="WallCuboid">
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
      <xs:element name="Type" minOccurs="0">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Direct"/>
            <xs:enumeration value="Indirect"/>
            <xs:enumeration value="DirectIndirect"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="HousingColor" minOccurs="0">
        <xs:complexType>
          <xs:attribute name="ral">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:pattern value="[1-9][0-9]{3}"/>
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D filename="WallCuboid">
  <WallCuboid>
    <Width>100</Width>
    <Length>100</Length>
    <Height>300</Height>
    <LuminousWidth>90</LuminousWidth>
    <LuminousLength>90</LuminousLength>
    <LuminousHeight>40</LuminousHeight>
    <Type>DirectIndirect</Type>
    <HousingColor ral="9005"/> 
  </WallCuboid>
</P3D>
```