---
title: Wall Triangular
sidebar_label: Wall Triangular
---

## Description

![Wall Triangular](/img/docs/geometry/parametric/wall-triangular.webp)

`Wall Triangular` is a triangular-shaped wall-mounted luminaire.

- `Width`, `Length`, and `Height` determine the housing dimensions.
- `LuminousWidth`, `LuminousLength`, and either `LuminousHeight` or `ReflectorDepth` determine the size of the luminous surfaces:
  - `LuminousHeight` describes how far the luminous part sticks out of the housing.
  - `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- You can skew the housing by setting `TopLength` and `TopWidth`:
  - The default `TopWidth` is 80% of the main `Width`.
  - The default `TopLength` is 80% of the main `Length`.
- You can define the light output areas through `Type` as `Direct`, `Indirect`, or `DirectIndirect` *(optional)*.
- Optionally, `HousingColor` can be provided as a 4 digit RAL color code.
- Optionally, `FileName` can be provided (without an extension).

## Parameters

| **Parameter**        | Type   | Explanation                                               |
| -------------------- | :----: | :-------------------------------------------------------: |
| **Width**            | int    | Value in mm                                               |
| **Length**           | int    | Value in mm                                               |
| **Height**           | int    | Value in mm                                               |
| **LuminousWidth**    | int    | Value in mm                                               |
| **LuminousLength**   | int    | Value in mm                                               |
| **LuminousHeight**   | int    | Value in mm                                               |
| **ReflectorDepth**   | int    | Value in mm                                               |
| **TopWidth**         | int    | Value in mm (default is 80% of `Width`)                   |
| **TopLength**        | int    | Value in mm (default is 80% of `Length`)                  |
| **Type**             | string | `Direct`, `Indirect`, `DirectIndirect` *(optional)*       |
| **HousingColor**     | string | 4 digit RAL color code *(optional)*                       |
| **FileName**         | string | Optional file name (without an extension) *(optional)*    |

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
<P3D filename="WallTriangular">
  <WallTriangular>
    <Width>120</Width>
    <Length>250</Length>
    <Height>200</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>220</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </WallTriangular>
</P3D>
```