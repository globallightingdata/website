---
title: GLDF .NET Parser
sidebar_label: GLDF .NET Parser
---

## GLDF .NET library

[![Github](https://img.shields.io/badge/Github-Repository-lightgrey)](https://github.com/globallightingdata/gldf.net) [![NuGet Status](https://img.shields.io/nuget/v/GLDF.Net.svg)](https://www.nuget.org/packages/GLDF.Net/) [![GLDF.Net on fuget.org](https://www.fuget.org/packages/GLDF.Net/badge.svg)](https://www.fuget.org/packages/GLDF.Net)

## Introduction

GLDF.NET ist a Microsoft .NET library for the GLDF

Features

- Serialize and deserialize [GLDF XML](/docs/structure/xml-hierarchy.md)
- 100% format coverage of [version 1.0.0](https://github.com/globallightingdata/gldf/releases)
- Validate [GLDF XML](/docs/structure/xml-hierarchy.md) with the GLDF XML Schema ([XSD](pathname:///xsd-reference/index_Root.html))
- Read and write .gldf [container files](/docs/container/about-container.md), including all assets and signature file
- Validate .gldf [container files](/docs/container/about-container.md)
- No dependencies, small footprint (~400kb)
- Windows & Unix compatible

## How to get started

### Requirements

- [.NET 6+](https://dotnet.microsoft.com/download) compatible project

### Nuget package

Add the package within your IDE or using the CLI

```bash
dotnet add package GLDF.Net
```

---

### XML Serialization

#### Serialize GLDF domain DTOs to XML string

All models in the following examples are incomplete. For valid GLDF luminaires/sensors please read the documentation.

```csharp
var serializer = new GldfXmlSerializer();
var root = new Root {Header = new Header {Author = "Github Example"}};
var xml = serializer.SerializeToString(root);
```

#### Serialize GLDF domain DTOs to .xml file

```csharp
var serializer = new GldfXmlSerializer();
var root = new Root {Header = new Header {Author = "Github Example"}};
serializer.SerializeToFile(root, @"c:\some\file\path\luminaire.xml");
```

#### Deserialize GLDF XML string to domain DTOs

```csharp
var serializer = new GldfXmlSerializer();
var xml = @"<Root><Header><Author>Github Example</Author></Header></Root>";
Root root = serializer.DeserializeFromString(xml);
```

#### Deserialize GLDF .xml file to domain DTOs

```csharp
var serializer = new GldfXmlSerializer();
var filePath = @"c:\some\file\path\luminaire.xml";
Root root = serializer.DeserializeFromFile(filePath);
```

#### Set custom XML Serializer settings

```csharp
XmlWriterSettings settings = new XmlWriterSettings();
settings.Encoding = Encoding.UTF32; // UTF-8 by default
settings.Indent = false; // true by default
// ...more settings
var serializer = new GldfXmlSerializer(settings);
```

---

### XML validation

#### Validate XML string with GLDF XmlSchema

```csharp
var gldfXmlValidator = new GldfXmlValidator();
var xml = @"<Root><Header><Author>Github Example</Author></Header></Root>";
IEnumerable<ValidationHint> validationResult = gldfXmlValidator.ValidateString(xml);

foreach (var validationHint in validationResult)
{
    Console.Write(validationHint.Severity); // Error/Info/Warning
    Console.Write(validationHint.ErrorType); // For XML validation its always XmlSchema
    Console.Write(validationHint.Message); // E.g. missing XML Elements etc.
    Console.Write(Environment.NewLine);
}
```

#### Validate a .xml file with GLDF XmlSchema

```csharp
var gldfXmlValidator = new GldfXmlValidator();
var filePath = @"c:\some\file\path\luminaire.xml";
IEnumerable<ValidationHint> validationResult = gldfXmlValidator.ValidateFile(filePath);

foreach (var validationHint in validationResult)
{
    Console.Write(validationHint.Severity); // Error/Info/Warning
    Console.Write(validationHint.ErrorType); // For XML validation its always XmlSchema
    Console.Write(validationHint.Message); // E.g. missing XML Elements etc.
    Console.Write(Environment.NewLine);
}
```

#### Set Encoding (only required when validating .xml files)

```csharp
var encoding = Encoding.UTF32;
var gldfXmlValidator = new GldfXmlValidator(encoding);
var filePath = @"c:\some\file\path\luminaire.xml";
gldfXmlValidator.ValidateFile(filePath);
```

---

### Container read/write

#### Write a .gldf container file

```csharp
var containerWriter = new GldfContainerWriter();
var gldfArchive = new GldfContainer
{
    Product = new Root {Header = new Header {Author = "Github example"}},
    Assets = new GldfAssets(),
    Signature = "some checksum"
};
var filePath = @"c:\some\file\path\luminaire.gldf";
containerWriter.WriteToFile(filePath, gldfArchive);
```

#### Read a .gldf container file

```csharp
var containerReader = new GldfContainerReader();
var filePath = @"c:\some\file\path\luminaire.gldf";
GldfContainer container = containerReader.ReadFromFile(filePath);
Console.WriteLine($"Luminaire author: {container.Product.Header.Author}");
```

#### Extract a .gldf container content to a directory

```csharp
var containerReader = new GldfContainerReader();
var sourceFilePath = @"c:\some\file\path\luminaire.gldf";
var targetFolder = @"c:\some\file\path\extractedContent\";
containerReader.ExtractToDirectory(sourceFilePath, targetFolder);
```

#### Create a .gldf container from content in a directory

```csharp
var containerWriter = new GldfContainerWriter();
var sourceDirectory = @"c:\some\file\path\extractedContent\";
var targetFile = @"c:\some\file\path\luminaire.gldf";
containerWriter.CreateFromDirectory(sourceDirectory, targetFile);
```

---

### Container Validation

#### Validate a `GldfContainer` DTO

```csharp
var validator = new GldfContainerValidator();
var gldfContainer = new GldfContainer
{
    Product = new Root {Header = new Header {Author = "Github example"}},
    Assets = new GldfAssets(),
    Signature = "some checksum"
};
var validationResult = validator.Validate(gldfContainer);

foreach (var validationHint in validationResult)
{
    Console.Write(validationHint.Severity); // Enum: Error/Info/Warning
    Console.Write(validationHint.ErrorType); // Enum: E.g. InvalidZipFile
    Console.Write(validationHint.Message); // E.g. Not a valid ZIP file etc.
    Console.Write(Environment.NewLine);
}
```

#### Validate a .gldf container file

```csharp
var validator = new GldfContainerValidator();
var filePath = @"c:\some\file\path\luminaire.gldf";
var validationResult = validator.Validate(filePath);

foreach (var validationHint in validationResult)
{
    Console.Write(validationHint.Severity); // Enum: Error/Info/Warning
    Console.Write(validationHint.ErrorType); // Enum: E.g. InvalidZipFile
    Console.Write(validationHint.Message); // E.g. Not a valid ZIP file etc.
    Console.Write(Environment.NewLine);
}
```

---

### Interfaces

There are also Interfaces you can use:

```csharp
// 1) Serialize XML
IGldfXmlSerializer serializer = new GldfXmlSerializer();
// 2) Validate XML
IGldfXmlValidator xmlValidator = new GldfXmlValidator();

// 3) Read GLDF container
IGldfContainerReader containerReader = new GldfContainerReader();
// 4) Write GLDF container
IGldfContainerWriter containerWriter = new GldfContainerWriter();
// 5) Validate GLDF Container
IGldfContainerValidator containerValidator = new GldfContainerValidator();
```
