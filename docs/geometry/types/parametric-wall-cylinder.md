---
title: Wall Cylinder
sidebar_label: Wall Cylinder
---

## Description

![Wall Cylinder](/img/docs/geometry/parametric/wall-cylinder.webp)

`Wall Cylinder` is a cylinder-shaped luminaire that is attached to a wall.

- `Diameter` and `Height` determine the housing dimensions.
- `LuminousDiameter` sets the size of the luminous surfaces.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminaire interacts with the wall:
  - `LuminousHeight` describes how far the luminous part sticks out of the body.
  - `ReflectorDepth` describes how far the luminous part is recessed into the body.
- You can skew the housing by setting `TopLength` and `TopWidth`:
  - The default `TopWidth` is 80% of the main `Width`.
  - The default `TopLength` is 80% of the main `Length`.
- You can define the light output areas through `Type` as `Direct`, `Indirect`, or `DirectIndirect`.
- The base elements' default width is 80% of the main diameter.
- The base elements' default depth is twice the distance from the outer point of the cylinder to the inner point of the intersection within the cylinder.

## Parameters

| **Parameter**        | Type   | Explanation                                                                   |
| -------------------- | :----: | :---------------------------------------------------------------------------: |
| **Diameter**         | int    | Value in mm                                                                   |
| **Height**           | int    | Value in mm                                                                   |
| **LuminousDiameter** | int    | Value in mm                                                                   |
| **LuminousHeight**   | int    | Value in mm                                                                   |
| **ReflectorDepth**   | int    | Value in mm                                                                   |
| **TopWidth**         | int    | Value in mm (default is 80% of `Width`)                                       |
| **TopLength**        | int    | Value in mm (default is 80% of `Length`)                                      |
| **Type**             | string | `Direct`, `Indirect`, `DirectIndirect`                                        |
| **HousingColor**     | string | 4 digit RAL color code                                                        |
| **FileName**         | string | Optional file name (without an extension)                                   |

## XSD

```xml
<xs:element name="WallCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
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
<P3D filename="WallCylinder">
  <WallCylinder>
    <Diameter>90</Diameter>
    <Height>220</Height>
    <LuminousDiameter>80</LuminousDiameter>
    <LuminousHeight>50</LuminousHeight>
    <Type>DirectIndirect</Type>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </WallCylinder>
</P3D>
```