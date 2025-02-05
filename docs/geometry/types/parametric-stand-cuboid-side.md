---
title: Stand Cuboid Side
sidebar_label: Stand Cuboid Side
---

## Description

![Stand Cuboid Side](/img/docs/geometry/parametric/stand-cuboid-side.webp)

`Stand Cuboid Side` is a cube-shaped standing luminaire with the head attached on the side rather than the center. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire (not including the stand).

- The full default height is 1.8 meters.
- The stand height is calculated as `TotalHeight` minus the luminaire `Height`.
- The stand is always in the middle of the luminaire.
- The default size of the foot is 80% of the main size.
- The default height of the foot is 2 cm and the diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- `Type` defines the placement and growth direction of light emitters:
  - `Direct`: LEO and LES are placed at the bottom center of the luminaire and grow upwards with `LuminousHeight`.
  - `Indirect`: LEO and LES are placed at the top center of the luminaire and grow downwards with `LuminousHeight`.
  - `DirectIndirect`: LEO is placed in the center of the luminaire and LES on the top and bottom surfaces are centered.
- The luminaire head is aligned in the direction of C0.

*Note*: Any reference to additional parameters such as `C90` is omitted as they are not defined in the schema.

## Parameters

| Parameter         | Type   | Explanation                                                                                          |
| ----------------- | :----: | ----------------------------------------------------------------------------------------------------:|
| **Width**         | int    | Value in mm.                                                                                         |
| **Length**        | int    | Value in mm.                                                                                         |
| **Height**        | int    | Value in mm.                                                                                         |
| **LuminousWidth** | int    | Value in mm.                                                                                         |
| **LuminousLength**| int    | Value in mm.                                                                                         |
| **TopWidth**      | int    | Value in mm *(optional; default is 80% of `Width`)*                                                  |
| **TopLength**     | int    | Value in mm *(optional; default is 80% of `Length`)*                                                 |
| **TotalHeight**   | int    | Value in mm.                                                                                         |
| **LuminousHeight**| int    | Value in mm *(optional)*; describes how far the luminous part protrudes from the body                 |
| **ReflectorDepth**| int    | Value in mm *(optional)*; describes how far the luminous part is recessed into the body               |
| **Type**          | string | One of: `Direct`, `Indirect`, `DirectIndirect` *(optional)*                                          |
| **HousingColor**  | string | 4 digit RAL color code *(optional)*                                                                  |
| **FileName**      | string | Optional file name (without an extension) *(optional)*                                             |

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
<P3D filename="StandCuboidSide">
  <StandCuboidSide>
    <Width>350</Width>
    <Length>350</Length>
    <Height>150</Height>
    <LuminousWidth>340</LuminousWidth>
    <LuminousLength>340</LuminousLength>
    <TopWidth>250</TopWidth>
    <TopLength>250</TopLength>
    <TotalHeight>600</TotalHeight>
    <LuminousHeight>50</LuminousHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </StandCuboidSide>
</P3D>
```