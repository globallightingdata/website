---
title: Header
sidebar_label: Header
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

The `Header` is the first part of the GLDF product.xml file. It contains meta-information about the manufacturer and the used GLDF version. As well as license information if applicable. It does not contain any product information yet.

<img src="/img/docs/structure/header.webp" alt="GLDF XML structure header" width="500" />

## Manufacturer

The `Manufacturer` will typically be the name of the company that produces or sells the luminaire.

:::important Convention
Datatype: **xs:string**
:::

## FormatVersion

This element describes which Version of GLDF is being used.

:::important Convention
Datatype `major` attribute: **xs:int**  
Datatype `minor` attribute: **xs:int**  
Datatype `pre-release` attribute: **xs:int** (optional)
:::

## CreatedWithApplication

This element describes which application generated the GLDF file, either by the author or programmatically.

:::important Convention
Datatype: **xs:string**
:::

## GldfCreationTimeCode

`GldfCreationTimeCode` is the date and time when you create or generate the GLDF file. The data type is xs:dateTime and should be provided in UTC

:::important Convention
Datatype: **xs:dateTime** (yyyy-mm-ddThh:mm:ss.ss)

See <https://www.w3schools.com/xml/schema_dtypes_date.asp>
:::

Example:

```xml
<CreationTimeCode>2022-04-03T18:07:42Z</CreationTimeCode>
```

## DefaultLanguage

If the GLDF file provides mutiple translations, `DefaultLanguage` describes the language which applications should fall back to display this GLDF, if no one matches the applications current GUI language. Should `DefaultLanguage` not be provided, the implementation will be application-specific (and preferably English).

:::important Convention
Datatype: **xs:language**
:::

## LicenseKeys

For Relux and DIALux to utilize the GLDF file to its full extent, you may need to add a license key. The key is provided to the manufacturers by Relux and DIAL. Further 3rd party license keys are also possible, should the be required.

<img src="/img/docs/structure/licensekeys.webp" alt="GLDF XML structure header" width="700" />

The content of the `LicenceKey` Element shall be the key as provided by Relux or DIALux. The application tag will determine the company the license key is intended for.

:::important Convention
Datatype LicenseKey: **xs:string**

Datatype application: **xs:string**
:::

```xml {6-9} showLineNumbers
<Header>
  <Manufacturer>Manufacturer</Manufacturer>
  <CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
  <CreatedWithApplication>n/a</CreatedWithApplication>
  <FormatVersion>1.0.0-rc.1</FormatVersion>
  <LicenseKeys>
    <LicenseKey application="RELUX">Relux Key</LicenseKey>
    <LicenseKey application="DIALux">DIALux Key</LicenseKey>
  </LicenseKeys>
</Header>
```

## ReluxMemberId and DIALuxMemberId

Relux and DIAL may assign company IDs to manufacturers. These Ids will help applications associate GLDF files with a specific manufacturer.

:::important Convention
Datatype: **xs:string**
:::

## Author

The `Author` describes the author of the GLDF file. The author can be a company or the name of an individual who made the file.

:::important Convention
Datatype: **xs:string**
:::

## Contact

This section holds contact information for the manufacturer. You can add an unlimited amount of contacts. Most fields are strings and you can fill them as you wish - except for email addresses and hyperlinks with a specific structure. Email addresses are the only mandatory contact information if you add contact information to the header.

<img src="/img/docs/structure/contactstruct.webp" alt="GLDF XML structure for contact information within header" width="500" />

You can add an unlimited amount of email addresses. The tag must contain a description and a valid E-Mail address in the "mailto" attribute of the element.

<img src="/img/docs/structure/emailhyperlinks.webp" alt="GLDF XML structure for contact information within header" width="450" />

```xml showLineNumbers
<Contact>
  <Address>
    <Name>Name</Name>
    <Street>Street</Street>
    <Number>1</Number>
    <ZIPCode>123456</ZIPCode>
    <City>Duisburg</City>
    <Country>Germany</Country>
    <EMailAddresses>
      <EMail mailto="sample@samlpe.com">E-Mail</EMail>
      <EMail mailto="sample2@damlpe.com">E-Mail2</EMail>
    </EMailAddresses>
    <Websites>
      <Hyperlink href="http://www.relux.com">Light Sample</Hyperlink>
    </Websites>
  </Address>
</Contact>
```

:::important Convention

FirstName: **xs:string**

Name: **xs:string**

Street: **xs:string**

Number: **xs:string**

ZIPCode: **xs:string**

City: **xs:string**

Country: **xs:string**

Phone: **xs:string**

EMailAddresses: **xs:string**

Attribute mailto: **xs:string**

Websites: **see EMailAddresses**

Hyperlink: **xs:string**

href" **xs:string**

language: **xs:language**

region: **xs:language**

countryCode: **xs:language** pattern value="[a-zA-Z]{2}

AdditionalInfo: **xs:string**
