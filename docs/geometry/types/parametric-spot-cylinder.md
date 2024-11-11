---
title: Spot Cylinder
sidebar_label: Spot Cylinder
---

## Description

![Spot Cylinder](/img/docs/geometry/parametric/spot-cylinder.webp)

A Spotlight in cylinder shape mounted on a bracket attached to a plate.

- You can adjust the dimensions of the light by setting the `Diameter` and `Length`.
- Setting the `TotalHeight` parameter will affect the size of the bracket.
- The plate size can be changed using the `BaseDiameter` parameter.
- The distance of the connector of the bracket to the luminaire is the same as the `Height`.
- The length of the connection from the base surface to the bracket is 1/2 of the `Height`.

| Parameter        | Type | Explanation |
| ---------------- | :--: | :---------: |
| Diameter         | int  | value in mm |
| Height           | int  | value in mm |
| LuminousDiameter | int  | value in mm |
| TotalHeight      | int  | value in mm |
| BaseDiameter     | int  | value in mm |
| BaseHeight       | int  | value in mm |

## XSD

```xml
<xs:element name="SpotCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TotalHeight" type="xs:int"/>
      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D>
  <SpotCylinder>
    <Diameter>80</Diameter>
    <Height>100</Height>
    <LuminousDiameter>70</LuminousDiameter>
    <TotalHeight>140</TotalHeight>
  </SpotCylinder>
</P3D>
```
