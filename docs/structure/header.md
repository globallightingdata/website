---
title: Header
sidebar_label: Header
---

The header is the first part of the GLDF product.xml file. It contains meta-information about the manufacturer, GLDF version, and Relux, as well as DIAL license information, if applicable. It does not necessarily have product information.

<img src="/img/docs/structure/header.webp" alt="GLDF XML structure header" width="502" />

## Author
The author describes the author of the GLDF file. The author can be a company or the name of an individual who made the file.

:::important Convention
Datatype: **xs:string**
:::

## Manufacturer
The manufacturer will typically be the name of the company that makes or sells the luminaire.

:::important Convention
Datatype: **xs:string**
:::

## CreationTimeCode
Creation Time Code is the date and time when you create or generate the GLDF file. The data type is xs:dateTime

:::important Convention
Datatype: **xs:dateTime**
:::

:::important Convention
The format of xs:dateTime is: yyyy-mm-ddThh:mm:ss.sssssssssssszzzzzz

|**Lexical form**|**Value**|
| :--- | :------: |
| yyyy | A four-digit numeral that represents the year.  | 
| mm | A two-digit numeral that represents the month. | 
| dd | A two-digit numeral that represents the day. | 
| hh | A two-digit numeral that represents the hour. | 
| mm | A two-digit numeral that represents the minute. |
| ss | A two-digit numeral that represents the second. |  
| .ssssssssssss | Optional. 1-to-12 digit numeral that represents fractional seconds. |  
| zzzzzz | Optional, represents the time zone. |
:::


Example:
```xml
<CreationTimeCode>2022-04-03T18:07:42Z</CreationTimeCode>
```

Example:
```xml
<CreationTimeCode>2023-02-08T12:00:00-02:00</CreationTimeCode>
```

## CreatedWithApplication

This section describes which application the author used to make the GLDF file.

:::important Convention
Datatype: **xs:string**
:::

## FormatVersion

This section describes which Version of GLDF is being used.

:::important Convention
Datatype: **xs:string** must be **1.0.0-rc.1**
:::

## DefaultLanguage

This section describes the default language applications using GLDF should fall back to if available.

## LicenseKeys

For Relux and DIALux to utilize the GLDF file to its full extent, you may need to add a license key. The key is provided to the manufacturers by Relux and DIAL.

## ReluxMemberId and DIALuxMemberId

Relux and DIAL may assign company IDs to manufacturers. These Ids will help applications associate GLDF files with a specific manufacturer.

## Contact

This section holds contact information for the manufacturer.