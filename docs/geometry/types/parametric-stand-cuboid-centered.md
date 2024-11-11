---
title: Stand Cuboid Centered
sidebar_label: Stand Cuboid Centered
---

## Description

![Stand Cuboid Centered](/img/docs/geometry/parametric/stand-cuboid-centered.webp)

A cube-shaped standing luminaire. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire, not including the stand.

- The stand height is the `TotalHeight` minus the luminaire `Height`. The stand is always in the middle of the luminaire.
- The default length and width of the foot will be the same as the main `Length` and `Width`.
- The default height of the foot is 2 cm. The width and length of the stand are 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminaire interacts with the stand:
  - The `LuminousHeight` describes how far the luminous part sticks out of the body.
  - The `ReflectorDepth` describes how far the luminous part is recessed into the body.
- `Type` defines the placement and growth direction of light emitters:
  - **Direct**: LEO and LES placed at the bottom center of the luminaire. All four sides grow upwards with `LuminousHeight`.
  - **Indirect**: LEO and LES placed at the top center of the luminaire. All four sides grow downwards with `LuminousHeight`.
  - **DirectIndirect**: LEO placed in the center of the luminaire. LES on top and bottom surfaces are centered. `LuminousHeight` > 0 means LES on all four surfaces.

## Parameters

| Parameter        | Type    | Explanation                                               |
| ---------------- | :-----: | :-------------------------------------------------------: |
| Width            | int     | Value in mm                                               |
| Length           | int     | Value in mm                                               |
| Height           | int     | Value in mm                                               |
| LuminousWidth    | int     | Value in mm                                               |
| LuminousLength   | int     | Value in mm                                               |
| TopWidth         | int     | Value in mm (default is 80% of `Width`)                   |
| TopLength        | int     | Value in mm (default is 80% of `Length`)                  |
| TotalHeight      | int     | Value in mm                                               |
| LuminousHeight   | int     | Value in mm                                               |
| ReflectorDepth   | int     | Value in mm                                               |
| Type             | string  | Direct, Indirect, DirectIndirect                         |

## XSD

```xml
<xs:element name="StandCuboidCentered">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>
      <xs:element name="TopLength" type="xs:int" minOccurs="0"/>
      <xs:element name="TotalHeight" type="xs:int"/>
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
    </xs:sequence>
  </xs:complexType>
</xs:element>
```
## XML
### Example

```xml
<P3D>
  <StandCuboidCentered>
    <Width>350</Width>
    <Length>350</Length>
    <Height>150</Height>
    <LuminousWidth>340</LuminousWidth>
    <LuminousLength>340</LuminousLength>
    <TopWidth>250</TopWidth>
    <TopLength>250</TopLength>
    <TotalHeight>600</TotalHeight>
    <LuminousHeight>50</LuminousHeight>
  </StandCuboidCentered>
</P3D>
```