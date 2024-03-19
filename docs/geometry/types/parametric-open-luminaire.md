---
title: Open Luminaire
sidebar_label: Open Luminaire
---

## Description

![Open Luminaire ](/img/docs/geometry/parametric/open-luminaire.webp)

Open Luminaire has a base with openly accessible luminous object.

- `Width`, `Length` and `Height` will define the total size in the form of a bounding box.
- `LuminousWidth`, `LuminousLength` and `LuminousHeight` describe the bounding box of the luminous elements.
- The width of the luminaire determines the number of luminous objects.
- Open luminaires are ceiling mounted.

| Parameter      | Type | Explanation |
| -------------- | :--: | :---------: |
| Width          | int  | value in mm |
| Length         | int  | value in mm |
| Height         | int  | value in mm |
| LuminousWidth  | int  | value in mm |
| LuminousLength | int  | value in mm |
| LuminousHeight | int  | value in mm |

## XSD

```xml
<xs:element name="OpenLuminaire">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <OpenLuminaire>
    <Width>20</Width>
    <Length>850</Length>
    <Height>20</Height>
    <LuminousWidth>16</LuminousWidth>
    <LuminousLength>850</LuminousLength>
    <LuminousHeight>16</LuminousHeight>
  </OpenLuminaire>
</P3D>
```