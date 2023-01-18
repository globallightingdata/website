---
title: Measurement Units
sidebar_label: Measurement Units
---
## Definition
In GLDF und L3D werden Einheiten nach dem **International System of Units**, bzw. davon abgeleitete Einheiten, verwendet. Die Einheiten sind den jeweiligen Feldern fest zugeordnet und in der XSD entsprechend dokumentiert.


Folgende Einheiten werden derzeit verwendet:


| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |


|**Grösse**|**Einheit**|**Formelzeichen**|
| :--- | :------: | :------: |
| Abmessungen | Millimeter | \[mm\] | 
| Winkel | Grad | \[°\] | 
| Leuchtdichte | Candela per square meter | \[cd/m²\] | 
| Leistung | Watt | \[W\] | 
| Spannung | Volt | \[V\] | 
| Farbtemperatur | Kelvin | \[K\] | 
| Lichtstrom | Lumen | \[lm\] | 
| Zeit | Stunden | \[h\] | 
| Masse | Kilogram | \[kg\] | 
| Frequenz | Herz | \[hz\] | 
| Temperatur | Grad Celsius | \[°C\] | 

> In GLDF und **L3D** werden Abmessungen ausschliesslich in Milimeter angegeben



:::

## Examples

### HEAD

Probably the most obvious use case that one might not even think of is the **manufacturer's name**. It occurs in both - photometry files like Eulumdat/IES and the GLDF - and is a mandatory field in these formats. What may seem obvious is a use case for this convention: The manufacturer name in the GLDF XML **always applies**. The manufacturer name in any photometry file is thus **overwritten and has no meaning**:

<!-- <img src="/img//docs/conventions/gldf_measuring_units.webp" alt="Measurement Units" width="950" /> -->
