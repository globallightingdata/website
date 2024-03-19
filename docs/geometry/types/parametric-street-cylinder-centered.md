---
title: Street Cylinder Centered
sidebar_label: Street Cylinder Centered
---

## Description

![Street Cylinder Centered](/img/docs/geometry/parametric/street-cylinder-centered.webp)

Classic street light with the luminous head in cylinder shape centered on the pole.

- You can adjust the dimensions of the cylinder by setting the `Diameter` and `Height`. Skewing is possible by selecting a different `TopDiameter`.
- The height of the lid on top is 2% of the `LuminousHeight`.
- The luminous center is located at 0,0,0. There is an offset aligned to C0.
- The pole is not modelled.

| Parameter           | Type | Explanation |
| ------------------- | :--: | :---------: |
| Diameter            | int  | value in mm |
| TopDiameter         | int  | value in mm |
| LuminousDiameter    | int  | value in mm |
| TopLuminousDiameter | int  | value in mm |
| LuminousHeight      | int  | value in mm |
| Height              | int  | value in mm |

## XSD

```xml
<xs:element name="StreetCylinderCentered">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TopLuminousDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="Height" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <StreetCylinderCentered>
    <Diameter>80</Diameter>
    <TopDiameter>700</TopDiameter>
    <LuminousDiameter>80</LuminousDiameter>
    <TopLuminousDiameter>680</TopLuminousDiameter>
    <LuminousHeight>400</LuminousHeight>
    <Height>500</Height>
  </StreetCylinderCentered>
</P3D>
```