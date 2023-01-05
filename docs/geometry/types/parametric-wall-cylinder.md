---
title: Wall Cylinder
sidebar_label: Wall Cylinder
---

## Description

![Wall Cylinder](/img/docs/geometry/parametric/wall-cylinder.webp)

This type is a cylinder-Shaped luminaire that is attached to a wall.

- `Diameter` and `Height` will determine the housing dimensions.
- `LuminouDiameter` will set the size of the luminous surfaces.
- You can define the light output areas through `Type` as `Direct`, `Indirect`, or `DirectIndirect`.
- The base elements default width is 80% of the main diameter.
- The base elements default depth is twice the distance of the outer point of the cylinder to the inner point of the intersection within the cylinder.

| Parameter        | Type |           Explanation            |
| ---------------- | :--: | :------------------------------: |
| Diameter         | int  |           value in mm            |
| Height           | int  |           value in mm            |
| LuminousDiameter | int  |           value in mm            |
| LuminousHeight   | int  |           value in mm            |
| Type             | int  | Direct, Indirect, DirectIndirect |

## XSD

```xml
<xs:element name="WallCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
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
  <WallCylinder>
    <Diameter>100</Diameter>
    <Height>300</Height>
    <LuminousDiameter>80</LuminousDiameter>
    <Type>DirectIndirect</Type>
  </WallCylinder>
</P3D>
```
