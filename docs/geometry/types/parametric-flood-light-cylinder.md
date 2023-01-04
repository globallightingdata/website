---
title: Floodlight Cylinder
sidebar_label: Floodlight Cylinder
---

## Description

FloodlightCylinder

![Floodlight Cylinder](/img/docs/geometry/parametric/flood-light-cylinder.webp)

A Spotlight in cylinder shape mounted on a bracket attached to a plate. You can adjust the dimensions of the light by setting the diameter and length. Setting the Total height parameter will affect the size of the bracket. The plate size can be changed using the Base Diameter parameter.

| Parameter        | Type | Explanation |
| ---------------- | :--: | :---------: |
| Diameter         | int  | value in mm |
| Height           | int  | value in mm |
| LuminousDiameter | int  | value in mm |
| LuminousHeight   | int  | value in mm |
| TotalHeight      | int  | value in mm |

## XSD

```xml
<xs:element name="FloodLightCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int"/>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <FloodLightCylinder>
    <Diameter>300</Diameter>
    <Height>600</Height>
    <LuminousDiameter>280</LuminousDiameter>
    <LuminousHeight>100</LuminousHeight>
    <TotalHeight>800</TotalHeight>
  </FloodLightCylinder>
</P3D>
```
