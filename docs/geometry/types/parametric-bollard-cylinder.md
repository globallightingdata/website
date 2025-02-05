---
title: Bollard Cylinder
sidebar_label: Bollard Cylinder
---

## Description

![Bollard Cylinder](/img/docs/geometry/parametric/bollard-cylinder.webp)

`BollardCylinder` is a cylinder-shaped bollard with luminous surfaces positioned around the model.

- The parameter `Diameter` defines the overall diameter of the luminaire.
- The parameter `Height` sets the height of the luminaire head, while `TotalHeight` defines the overall height of the entire model, including the stand.
- The stand height is calculated as `TotalHeight` minus `Height`. The stand is always centered within the luminaire.
- The default size of the foot is 80% of the main dimension (`Diameter`).
- The default height of the foot is 2 cm.
- The diameter of the stand is 5 cm.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminaire interacts with the stand:
  - `LuminousHeight` describes how far the luminous part sticks out of the housing.
  - `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- If any of `C0`, `C90`, `C180`, or `C270` have values greater than zero, a luminous surface is present in that direction with a gap of 2% from the main dimension.
- Optionally, a `FileName` can be provided.

## Parameters

| Parameter                           |  Type   | Explanation                                                                                             |
| ----------------------------------- | :-----: | -------------------------------------------------------------------------------------------------------: |
| **Diameter**                        | int     | Value in mm. Defines the overall diameter of the luminaire.                                             |
| **Height**                          | int     | Value in mm. Sets the height of the luminaire head (optional).                                            |
| **LuminousHeight** / **ReflectorDepth** | int     | Value in mm. Choose one to define how the luminaire interacts with the stand (optional).                |
| **TotalHeight**                     | int     | Value in mm. Defines the overall height including the stand (optional).                                 |
| **C0**                              | int     | Value in mm (optional; 0 means no luminous surface in the C0 direction).                                |
| **C90**                             | int     | Value in mm (optional; 0 means no luminous surface in the C90 direction).                               |
| **C180**                            | int     | Value in mm (optional; 0 means no luminous surface in the C180 direction).                              |
| **C270**                            | int     | Value in mm (optional; 0 means no luminous surface in the C270 direction).                              |
| **HousingColor**                    | string  | A 4-digit RAL color code matching the pattern `[1-9][0-9]{3}` (optional).                               |
| **FileName**                        | string  | Optional file name.                                                                                     |

## XSD

```xml
<xs:element name="BollardCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int" minOccurs="0"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
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
### Example

```xml
<P3D filename="BollardCylinder">
  <BollardCylinder>
    <Diameter>190</Diameter>
    <Height>1200</Height>
    <LuminousHeight>200</LuminousHeight>
    <TotalHeight>1200</TotalHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </BollardCylinder>
</P3D>
```