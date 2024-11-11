---
title: Stand Cuboid Side
sidebar_label: Stand Cuboid Side
---

## Description

![Stand Cuboid Side](/img/docs/geometry/parametric/stand-cuboid-side.webp)

A cube-shaped standing luminaire with the head attached on the side rather than the center. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire, not including the stand.

- The full default height will be 1.8 meters.
- The stand height is the `TotalHeight` minus the luminaire `Height`.
- The stand is always in the middle of the luminaire.
- Default size of the foot will be the 80 % of the main size.
- Default height of the foot is 2 cm.
- Diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- `Type` ➜ `Direct`: LEO and LES placed at the bottom center of the luminaire. Grows upwards with `LumimousHeight`.
- `Type` ➜ `Indirect`: LEO and LES placed at the top center of the luminaire. Grows downwards with `LumimousHeight`.
- `Type` ➜ `DirectIndirect`: LEO placed in the center of the luminaire. LES on top and bottom surfaces centered.
- Luminaire head is aligned in direction C0.
- If `Length` is greater than C90, die luminous surface grows backwards toward with a 2% distance from length.

| Parameter      | Type |           Explanation            |
| -------------- | :--: | :------------------------------: |
| Width          | int  |           value in mm            |
| Length         | int  |           value in mm            |
| Height         | int  |           value in mm            |
| LuminousWidth  | int  |           value in mm            |
| LuminousLength | int  |           value in mm            |
| TotalHeight    | int  |           value in mm            |
| Type           | int  | Direct, Indirect, DirectIndirect |

## XSD

```xml
<xs:element name="StandCuboidSide">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="TotalHeight" type="xs:int"/>
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
  <StandCuboidSide>
    <Width>250</Width>
    <Length>350</Length>
    <Height>40</Height>
    <LuminousWidth>240</LuminousWidth>
    <LuminousLength>340</LuminousLength>
    <TotalHeight>600</TotalHeight>
    <Type>DirectIndirect</Type>
  </StandCuboidSide>
</P3D>
```