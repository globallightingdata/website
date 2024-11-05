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
| Type             | string  | Direct, Indirect, DirectIndirect                         |

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
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

### Example with LuminousHeight and Type set to Direct

```xml
<P3D>
  <WallCuboid>
    <Width>400</Width>
    <Length>400</Length>
    <Height>800</Height>
    <LuminousWidth>390</LuminousWidth>
    <LuminousLength>390</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <TopWidth>320</TopWidth>
    <TopLength>320</TopLength>
    <Type>Direct</Type>
  </WallCuboid>
</P3D>
```

### Example with ReflectorDepth and Type set to Indirect

```xml
<P3D>
  <WallCuboid>
    <Width>400</Width>
    <Length>400</Length>
    <Height>800</Height>
    <LuminousWidth>390</LuminousWidth>
    <LuminousLength>390</LuminousLength>
    <ReflectorDepth>30</ReflectorDepth>
    <TopWidth>320</TopWidth>
    <TopLength>320</TopLength>
    <Type>Indirect</Type>
  </WallCuboid>
</P3D>
```

### Example with LuminousHeight and Type set to DirectIndirect

```xml
<P3D>
  <WallCuboid>
    <Width>400</Width>
    <Length>400</Length>
    <Height>800</Height>
    <LuminousWidth>390</LuminousWidth>
    <LuminousLength>390</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <TopWidth>320</TopWidth>
    <TopLength>320</TopLength>
    <Type>DirectIndirect</Type>
  </WallCuboid>
</P3D>
```