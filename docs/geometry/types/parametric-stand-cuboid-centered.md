---
title: Stand Cuboid Centered
sidebar_label: Stand Cuboid Centered
---

## Description

![Stand Cuboid Centered](/img/docs/geometry/parametric/stand-cuboid-centered.webp)

A cube-shaped standing luminaire. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire, not including the stand.

- The stand height is the `TotalHeight` minus the luminaire `Height`. The stand is always in the middle of the luminaire.
- Default length and width of the foot will be the same as the main `Length` and `Width`.
- Default height of the foot is 2 cm. Width and length of the stand are 5 cm. Luminous dimensions must be smaller than the main dimensions.
- `Type` ➜ `Direct`: LEO and LES placed at the bottom center of the luminaire. All four sides grow upwards with `LumimousHeight`.
- `Type` ➜ `Indirect`: LEO and LES placed at the top center of the luminaire. All four sides grow downwards with `LumimousHeight`.
- `Type` ➜ `DirectIndirect`: LEO placed in the center of the luminaire. LES on top and bottom surfaces centered. `LuminousHeight` > 0 means LES on all four surfaces.

| Parameter      | Type | Explanation                      |
| -------------- | :--: | :------------------------------: |
| Width          | int  | value in mm                      |
| Length         | int  | value in mm                      |
| Height         | int  | value in mm                      |
| LuminousWidth  | int  | value in mm                      |
| LuminousLength | int  | value in mm                      |
| LuminousHeight | int  | value in mm                      |
| TopWidth       | int  | value in mm                      |
| TopLength      | int  | value in mm                      |
| TotalHeight    | int  | value in mm                      |
| Type           | int  | Direct, Indirect, DirectIndirect |

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
  <StandCuboidCentered>
    <Width>400</Width>
    <Length>400</Length>
    <Height>400</Height>
    <LuminousWidth>350</LuminousWidth>
    <LuminousLength>350</LuminousLength>
    <TotalHeight>1800</TotalHeight>
  </StandCuboidCentered>
</P3D>
```
