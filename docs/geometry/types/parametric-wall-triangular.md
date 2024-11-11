---
title: Wall Triangular
sidebar_label: Wall Triangular
---

## Description

![Wall Triangular](/img/docs/geometry/parametric/wall-triangular.webp)

Triangular-shaped wall-mounted luminaire.

- `Width`, `Length`, and `Height` determine the housing dimensions.
- `LuminousWidth`, `LuminousLength`, and either `LuminousHeight` or `ReflectorDepth` determine the size of the luminous surfaces.
  - The `LuminousHeight` describes how far the luminous part sticks out of the housing.
  - The `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- You can skew the housing by setting `TopLength` and `TopWidth`.
  - The default `TopWidth` is 80% of the main `Width`.
  - The default `TopLength` is 80% of the main `Length`.
- You can define the light output areas through `Type` as `Direct`, `Indirect`, or `DirectIndirect`.
- Both sides have the same length. Luminous surfaces have the same size.

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
| TopWidth         | int     | Value in mm (default is 80% of `Width`)                   |
| TopLength        | int     | Value in mm (default is 80% of `Length`)                  |
| Type             | string  | Direct, Indirect, DirectIndirect                         |

## XSD

```xml
<xs:element name="WallTriangular">
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
### Example

```xml
<P3D>
  <WallTriangular>
    <Width>120</Width>
    <Length>250</Length>
    <Height>200</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>220</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
  </WallTriangular>
</P3D>
```