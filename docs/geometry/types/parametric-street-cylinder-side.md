---
title: Street Cylinder Side
sidebar_label: Street Cylinder Side
---

## Description

![Street Cylinder Side](/img/docs/geometry/parametric/street-cylinder-side.webp)

Classic street light with the luminous head cylinder-shaped attached to the pole on its edge.

- You can adjust the dimensions of the head by setting the `LuminousDiameter` and `Height`.
- The luminous center is located at 0,0,0.
- There is an offset aligned to C0.
- The pole is not modeled.

| Parameter           | Type | Explanation |
| ------------------- | :--: | :---------: |
| Diameter            | int  | value in mm |
| LuminousDiameter    | int  | value in mm |
| TopLuminousDiameter | int  | value in mm |
| LuminousHeight      | int  | value in mm |

## XSD

```xml
<xs:element name="StreetCylinderSide">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TopLuminousDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <StreetCylinderSide>
    <Diameter>500</Diameter>
    <LuminousDiameter>460</LuminousDiameter>
  </StreetCylinderSide>
</P3D>
```
