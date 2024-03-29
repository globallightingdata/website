---
title: Wall Cuboid
sidebar_label: Wall Cuboid
---

## Description

![Wall Cuboid](/img/docs/geometry/parametric/wall-cuboid.webp)

This type is a cube-Shaped luminaire that is attached to a wall.

- The Parameters `Length`, `Width`, and `Height` will determine the housing dimensions.
- `LuminousLength`, `LuminousWidth` and `LuminousHeight` determine the size of the luminous surfaces.
- You can skew the housing by setting `TopLength` and `TopWidth`.
- You can define the light output areas trough `Type` as `Direct`, `Indirect`, or `DirectIndirect`.

| Parameter      | Type |           Explanation            |
| -------------- | :--: | :------------------------------: |
| Width          | int  |           value in mm            |
| Length         | int  |           value in mm            |
| Height         | int  |           value in mm            |
| LuminousWidth  | int  |           value in mm            |
| LuminousLength | int  |           value in mm            |
| LuminousHeight | int  |           value in mm            |
| TopWidth       | int  |           value in mm            |
| TopLength      | int  |           value in mm            |
| Type           | int  | Direct, Indirect, DirectIndirect |

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
      <xs:element name="LuminousHeight" type="xs:int"/>
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

```xml
<P3D>
  <WallCuboid>
    <Width>400</Width>
    <Length>400</Length>
    <Height>800</Height>
    <LuminousWidth>390</LuminousWidth>
    <LuminousLength>390</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <Type>DirectIndirect</Type>
  </WallCuboid>
</P3D>
```
