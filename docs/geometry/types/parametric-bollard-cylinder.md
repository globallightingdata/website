---
title: Bollard Cylinder
sidebar_label: Bollard Cylinder
---

## Description

![Bollard Cylinder](/img/docs/geometry/parametric/bollard-cylinder.webp)

`BollardCylinder` is a Cylinder-shaped bollard with a luminous surface around the model.

- The parameter `Height` will set the height of the head, whereas the `TotalHeight` will affect the size of the entire model.
- The default setting is one luminous surface aligned to C0.
- The default distance of the luminous surface is 2% of the height measured from the upper edge.
- There is only one size for luminous surfaces.
- Any Value in `C0`, `C90`, `C180` and `C270` greater than zero means there will be a luminuous surface as defined in the luminous dimensions.

| Parameter      | Type | Explanation |
| -------------- | :--: | :---------: |
| Diameter       | int  | value in mm |
| Height         | int  | value in mm |
| LuminousHeight | int  | value in mm |
| TotalHeight    | int  | value in mm |
| C0             | int  | value in mm |
| C90            | int  | value in mm |
| C180           | int  | value in mm |
| C270           | int  | value in mm |

## XSD

```xml
<xs:element name="BollardCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="C0" type="xs:int" minOccurs="0"/>
      <xs:element name="C90" type="xs:int" minOccurs="0"/>
      <xs:element name="C180" type="xs:int" minOccurs="0"/>
      <xs:element name="C270" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <BollardCylinder>
    <Diameter>190</Diameter>
    <Height>1200</Height>
    <LuminousHeight>240</LuminousHeight>
    <TotalHeight>1200</TotalHeight>
  </BollardCylinder>
</P3D>
```