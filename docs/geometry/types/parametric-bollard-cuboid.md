---
title: Bollard Cuboid
sidebar_label: Bollard Cuboid
---

## Description

![Bollard Cuboid](/img/docs/geometry/parametric/bollard-cuboid.webp)

`BollardCuboid` is a cube-shaped bollard with square-shaped luminous surfaces.

- The parameter `Height` sets the height of the luminaire head, while `TotalHeight` defines the overall height of the entire model, including the stand.
- The stand height is calculated as `TotalHeight` minus the luminaire `Height`. The stand is always centered within the luminaire.
- The default size of the foot is 80% of the main dimensions (`Width` and `Length`).
- The default height of the foot is 2 cm.
- The diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminaire interacts with the stand:
  - The `LuminousHeight` describes how far the luminous part sticks out of the housing.
  - The `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- `Type` defines the placement and growth direction of light emitters:
  - **Direct**: LEO and LES are placed at the bottom center of the luminaire. All four sides grow upwards with `LuminousHeight`.
  - **Indirect**: LEO and LES are placed at the top center of the luminaire. All four sides grow downwards with `LuminousHeight`.
  - **DirectIndirect**: LEO is placed in the center of the luminaire. LES are centered on the top and bottom surfaces. If `LuminousHeight` > 0, LES are present on all four surfaces.
- The luminaire head is aligned in the direction of `C0`.
- If any of `C0`, `C90`, `C180`, or `C270` have values greater than zero, a luminous surface is present in that direction with a distance of 2% from the main dimension.

## Parameters

| Parameter        | Type    | Explanation                                               |
| ---------------- | :-----: | :-------------------------------------------------------: |
| Width            | int     | Value in mm                                               |
| Length           | int     | Value in mm                                               |
| Height           | int     | Value in mm                                               |
| LuminousWidth    | int     | Value in mm                                               |
| LuminousLength   | int     | Value in mm                                               |
| LuminousHeight   | int     | Value in mm                                               |
| ReflectorDepth   | int     | Value in mm                                               |
| TotalHeight      | int     | Value in mm                                               |
| C0               | int     | Value in mm (0 means no luminous surface at C0 direction)|
| C90              | int     | Value in mm (0 means no luminous surface at C90 direction)|
| C180             | int     | Value in mm (0 means no luminous surface at C180 direction)|
| C270             | int     | Value in mm (0 means no luminous surface at C270 direction)|
| Type             | string  | Direct, Indirect, DirectIndirect                         |

## XSD

```xml
<xs:element name="BollardCuboid">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:choice>
        <xs:element name="LuminousHeight" type="xs:int"/>
        <xs:element name="ReflectorDepth" type="xs:int"/>
      </xs:choice>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="C0" type="xs:int" minOccurs="0"/>
      <xs:element name="C90" type="xs:int" minOccurs="0"/>
      <xs:element name="C180" type="xs:int" minOccurs="0"/>
      <xs:element name="C270" type="xs:int" minOccurs="0"/>
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
### Example with LuminousHeight and Type set to Direct

```xml
<P3D>
  <BollardCuboid>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <LuminousHeight>50</LuminousHeight>
    <TotalHeight>650</TotalHeight>
    <C0>20</C0>
    <Type>Direct</Type>
  </BollardCuboid>
</P3D>
```

### Example with ReflectorDepth and Type set to Indirect

```xml
<P3D>
  <BollardCuboid>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <ReflectorDepth>30</ReflectorDepth>
    <TotalHeight>650</TotalHeight>
    <C90>20</C90>
    <Type>Indirect</Type>
  </BollardCuboid>
</P3D>
```

### Example with LuminousHeight and Type set to DirectIndirect

```xml
<P3D>
  <BollardCuboid>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <LuminousHeight>50</LuminousHeight>
    <TotalHeight>650</TotalHeight>
    <C0>20</C0>
    <C90>20</C90>
    <C180>20</C180>
    <C270>20</C270>
    <Type>DirectIndirect</Type>
  </BollardCuboid>
</P3D>
```