---
title: Floodlight Cuboid
sidebar_label: Floodlight Cuboid
---

## Description

![Floodlight Cuboid](/img/docs/geometry/parametric/flood-light-cuboid.webp)

`FloodlightCuboid` is a spotlight featuring a cuboid-shaped luminous head. Adjust the size of the luminaire using the overall dimensions (`Width`, `Length`, and `Height`), and define the luminous surface with `LuminousWidth` and `LuminousLength`. Optionally, specify either the `LuminousHeight` (how far the luminous part protrudes) or the `ReflectorDepth` (how far it is recessed). You can also define an overall `TotalHeight` and customize the appearance with a 4-digit RAL `HousingColor`. An optional `FileName` (without an extension) can be provided.

**Note**: The pole itself is **not modeled** within this luminaire configuration.

## Parameters

| Parameter | Type | Explanation |
| :--- | :---: | :--- |
| **Width** | int | Value (mm). |
| **Length** | int | Value (mm). |
| **Height** | int | Value (mm). Head height. |
| **LuminousWidth** | int | Value (mm). Luminous surface width. |
| **LuminousLength** | int | Value (mm). Luminous surface length. |
| **LuminousHeight** / **ReflectorDepth** | int | Value (mm). Pick one for housing interaction. |
| **TotalHeight** | int | Value (mm, optional). Overall height. |
| **HousingColor** | string | 4-digit RAL code `[1-9][0-9]{3}` (optional). |
| **FileName** | string | Optional file name (no extension). |

## XSD

```xml
<xs:element name="FloodLightCuboid">
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
<P3D filename="FloodLightCuboid">
  <FloodLightCuboid>
    <Width>400</Width>
    <Length>300</Length>
    <Height>80</Height>
    <LuminousWidth>380</LuminousWidth>
    <LuminousLength>280</LuminousLength>
    <LuminousHeight>30</LuminousHeight>
    <TotalHeight>150</TotalHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </FloodLightCuboid>
</P3D>
```
