---
title: Bollard Cuboid
sidebar_label: Bollard Cuboid
---

## Description

![Bollard Cuboid](/img/docs/geometry/parametric/bollard-cuboid.webp)

`BollardCuboid` is a cube-shaped bollard with square-shaped luminous surfaces.

- The parameter `Height` sets the height of the luminaire head, while `TotalHeight` defines the overall height of the entire model—including the stand.
- The stand height is calculated as `TotalHeight` minus the luminaire `Height`. The stand is always centered within the luminaire.
- The default size of the foot is 80% of the main dimensions (`Width` and `Length`).
- The default height of the foot is 2 cm.
- The diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- `Luminous Interaction:` Either `LuminousHeight` or `ReflectorDepth` must be specified:
  - `LuminousHeight` describes how far the luminous part protrudes from the housing.
  - `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- The luminaire head is aligned in the direction of `C0`.
- If any of `C0`, `C90`, `C180`, or `C270` have values greater than zero, a luminous surface is present in that direction with a gap of 2% from the main dimension.
- Optionally, a `FileName` can be provided.

## Parameters

| Parameter | Type | Explanation |
| :--- | :---: | :--- |
| **Width** | int | Value (mm). |
| **Length** | int | Value (mm). |
| **Height** | int | Value (mm). |
| **LuminousWidth** | int | Value (mm). |
| **LuminousLength** | int | Value (mm). |
| **LuminousHeight** / **ReflectorDepth** | int | Value (mm). Pick one for stand interaction. |
| **TotalHeight** | int | Value (mm, optional). |
| **C0** | int | Value (mm, optional; 0 = no luminous surface in C0 direction). |
| **C90** | int | Value (mm, optional; 0 = no luminous surface in C90 direction). |
| **C180** | int | Value (mm, optional; 0 = no luminous surface in C180 direction). |
| **C270** | int | Value (mm, optional; 0 = no luminous surface in C270 direction). |
| **HousingColor** | string | 4-digit RAL code `[1-9][0-9]{3}` (optional). |
| **FileName** | string | Optional file name. |

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

```xml
<P3D filename="BollardCuboid">
  <BollardCuboid>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>50</LuminousLength>
    <LuminousHeight>100</LuminousHeight>
    <TotalHeight>650</TotalHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </BollardCuboid>
</P3D>
```
