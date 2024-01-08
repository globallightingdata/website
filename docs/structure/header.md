---
title: Header
sidebar_label: Header
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Header Description

The `Header` is the first part of the GLDF **product.xml** file und the first child element below `Root`. It contains **meta-information** about the manufacturer, **contact information** and the used **GLDF version**. As well as **license information** if applicable. It does **not contain any product information** yet.

<img src="/img/docs/structure/header-xsd.webp" alt="GLDF XML header XSD location" width="440" />

## Mandatory `Header` part

Some of the metadata are **mandatory for every GLDF**. They are intended to make it easier for users as well as applications to **identify when, by whom, and how** a GLDF was created. And which **version** of the format was used. Therefore every `Header` element **must** begin with **5 mandatory children**:

<img src="/img/docs/structure/header-mandatory.webp" alt="GLDF XML header mandatory childs" width="430" />

- `Manufacturer`  
  The probably most important element first: The manufacturer of the product inside the GLDF. Its typically the **name of the company** that produces and/or distributes the luminaire.
- `FormatVersion`  
  This element specifies the **GLDF version in use**. For versioning, we adhere to the [**SemVer**](https://semver.org) standard. SemVer helps to determine if updates to the *product.xml*  file are needed, particularly in cases of breaking changes. Or if a newer XSD can be referenced without risking data incompatibility.
- `CreatedWithApplication`
  `CreatedWithApplication` describes **which application** was used to **create** this GLDF file. Ths could be the name of the text editor the author used. The PIM system it was exported from, a software service running in background, an online GLDF editor or a data converter perhaps. This information can be very useful in **debugging scenarios** when something went wrong.
- `GldfCreationTimeCode`
  Please refer to [**Timecodes**](/docs/conventions/ids-and-timecodes#timecodes) where `GldfCreationTimeCode`, and its counterpart `ProductDataTimeCode`, are explained in detail.
- `UniqueGldfId`  
  For the last but not least important element please refer to [**Unique Ids**](/getting-started#unique-ids). **Caution**: **Never** copy `UniqueGldfId` between multiple GLDFs. Even not for the same product like in the `UniqueProductId` element. Create **always** a **new id** for each and every GLDF file you write and deploy. We **strongly recommend to use UUIDS** for this without exception.

### Mandatory XML example

Here is an example of **all mandatory child elements** which each `Header` element in GLDF **must contain**. The `Header` itself is the first child of `Root` - the parent element of all content in GLDF. The example itself begins in line 5:

- Line 5: This GLDF is from the fictive **manufacturer ACME**.
- Line 6: It is based on the GLDF version **1.0-rc.3**.
- Line 7: The IDE it was created with was Visual Studio Code.
- Line 8: The GLDF was created on October 19th 2023, at 05:30 Coordinated Universal Time (Z).
- Line 9: The **worldwide unique** id for **this** GLDF would be **93b821be-e4a6-4758-bc5e-7d98499fe664**.

```xml {4-10} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>ACME</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-10-19T05:30:00Z</GldfCreationTimeCode>
    <UniqueGldfId>93b821be-e4a6-4758-bc5e-7d98499fe664</UniqueGldfId>
  </Header>
  <GeneralDefinitions>
    <!-- Skipped for now -->
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Skipped for now -->
  </ProductDefinitions>
</Root>
```

## Optional `Header` part

The next part of the `Header` is not mandatory. However, we **recommend to include details** such as the manufacturer's image and contact information for **potential customers**. And especially member Ids for [DIALux](https://www.dialux.com) and [RELUX](https://relux.com/en/relux-desktop.html) as well as possibly further license information, should these be necessary for certain applications.

<img src="/img/docs/structure/header-optional.webp" alt="GLDF XML header optional childs" width="430" />

The highlighted child elements are described in more detail below.

### `ProductDataTimeCode`

Please refer to [**Timecodes**](/docs/conventions/ids-and-timecodes#timecodes) where `ProductDataTimeCode` and the difference to `GldfCreationTimeCode` are explained.

### `DefaultLanguage`

Should the GLDF file provide multiple translations, `DefaultLanguage` specifies the language, that applications should use as a **fallback** when the user's current GUI language doesn't match any of the available translations. If `DefaultLanguage` is not provided, the implementation will be **application-specific** and preferably use English. See also [**Creating good GLDF files**](/docs/tips/good-products#provide-a-consistent-default-language)

The data type for `DefaultLanguage` is *xs:language* and has to be provided in lowercase as a [**2-letter ISO 639-1 language code**](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

```xml
<DefaultLanguage>en</DefaultLanguage>
```

### `ManufacturerLogo`

This element allows to distribute a manufacturer logo or image within the GLDF. You have to define the image as a [File](/docs/structure/files.md) element first. And can then simply [reference](/docs/conventions/referencing.md) the `File` in the `Header` using the `ManufacturerLogo` element. [Files](/docs/structure/files.md) can be either locally inside the [GLDF Zip container](/docs/container/about-container.md) or point to a file hosted online. See [Files](/docs/structure/files.md) documentation for futher [details](/docs/structure/files#file-location).

An manufacturer logo hosted online could be written in GLDF like this:

```xml {10,14-15} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
<Header>
    <Manufacturer>Manufacturer XY</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-09-17T09:30:47Z</GldfCreationTimeCode>
    <UniqueGldfId>b1d2fd82-0402-4aaa-a8db-cefcf10d71ae</UniqueGldfId>
    <ManufacturerLogo fileId="manufacturerLogo" />
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="manufacturerLogo" contentType="image/jpg" 
            type="url">https://example.org/logo.jpg</File>
    </Files>
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Skipped for clarity -->
  </ProductDefinitions>
</Root>
```

### `LicenseKeys`

To fully utilize GLDF, you may need to add license keys, which can be provided by Relux, DIAL, or other third-party companies.

<img src="/img/docs/structure/header-license-keys.webp" alt="GLDF XML structure header" width="800" />

The content of the `LicenseKey` element shall be the string provided by the respective company. The application tag determines the software for which the license key is intended for.

```xml {10-14} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
<Header>
    <Manufacturer>Manufacturer XY</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-09-17T09:30:47Z</GldfCreationTimeCode>
    <UniqueGldfId>9be9f0c0-7ea2-442b-8a61-464e652772d7</UniqueGldfId>
    <LicenseKeys>
      <LicenseKey application="RELUX">Relux Key</LicenseKey>
      <LicenseKey application="DIALux">DIALux Key</LicenseKey>
      <LicenseKey application="3rd party app">Other Key</LicenseKey>
    </LicenseKeys>
  </Header>
  <GeneralDefinitions/>
  <ProductDefinitions>
    <!-- Skipped for clarity -->
  </ProductDefinitions>
</Root>
```

### `DIALux/Relux MemberId`

DIAL and Relux may assign company IDs to manufacturers. These Ids will help [DIALux](https://www.dialux.com) and [RELUX](https://relux.com/en/relux-desktop.html) to associate GLDF files with a specific manufacturer and **enable his membership feature set** for GLDF.

See also [**Become a partner**](/docs/contribute/become-a-partner.md)

```xml
<ReluxMemberId>Your Relux member id</ReluxMemberId>
<DIALuxMemberId>Your DIALux member id</DIALuxMemberId>
```

### `Author`

The `Author` element describes the author of the GLDF file. This could be the name of an individual who made the file, a department, a contractor or simply the company.

```xml
<Author>Glowbert Lightenstein</Author>
```

### `Contact`

This section holds **contact information of the manufacturer**. You can add multiple contacts. Most fields are strings and you can fill them as you wish - except for `EMailAddresses` and `Hyperlink` with a specific structure. At least **one email is mandatory** should you decide to add the `Contact` element to the `Header`.

<img src="/img/docs/structure/header-contact.webp" alt="Contact XSD" width="650" />

```xml {10-30} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <Manufacturer>Manufacturer XY</Manufacturer>
    <FormatVersion major="1" minor="0" pre-release="3" />
    <CreatedWithApplication>Visual Studio Code</CreatedWithApplication>
    <GldfCreationTimeCode>2023-09-17T09:30:47Z</GldfCreationTimeCode>
    <UniqueGldfId>93b821be-e4a6-4758-bc5e-7d98499fe664</UniqueGldfId>
    <Contact>
      <Address>
        <Name>Example Company</Name>
        <Street>Main Street</Street>
        <Number>42</Number>
        <ZIPCode>10115</ZIPCode>
        <City>Berlin</City>
        <Country>Germany</Country>
        <EMailAddresses>
          <EMail mailto="support@example.org">Contact Support</EMail>
          <EMail mailto="sales@example.org">Contact Sales</EMail>
        </EMailAddresses>
        <Websites>
          <Hyperlink href="https://example.org">Our Website</Hyperlink>
          <Hyperlink countryCode="uk" 
                     href="https://uk.example.org">Our UK Website</Hyperlink>
          <Hyperlink countryCode="de" 
                     href="https://de.example.org">Our German Website</Hyperlink>
        </Websites>
      </Address>
    </Contact>
  </Header>
  <GeneralDefinitions />
  <ProductDefinitions>
    <!-- Skipped for clarity -->
  </ProductDefinitions>
</Root>
```
