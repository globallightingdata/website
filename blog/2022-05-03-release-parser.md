---
title: DotNet Serializer for GLDF
description: Release v0.5.0 of the GLDF.NET Parser
authors: Kurpanik
hide_table_of_contents: false
tags: [gldf.net, tools, release]
---

The *GLDF.NET* Parser - a GLDF XML serializer and deserializer for [DotNet](https://dotnet.microsoft.com) - is available now for GLDF [1.0.0-rc.1](https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.1). In this blog post you will find a quick introduction and overview of its usage.

<!--truncate-->

## What is it

GLFD.NET ist a [DotNet](https://dotnet.microsoft.com) ([Standard 2.0](https://docs.microsoft.com/de-de/dotnet/standard/net-standard)) library for the Global Lighting Data Format with the following features:

- Serialize and deserialize GLDF XML from and into typed objetcs
- 100% format coverage
- Validate GLDF XML with the GLDF XmlSchema ([XSD](http://localhost:3000/xsd-reference/index_Root.html))
- Read and write .gldf container files, including all assets and signature file
- Validate .gldf container files
- No dependencies, small footprint (~400kb)
- Windows & Unix compatible

## What changed in v0.5

As you may already know, we've release GLDF 1.0.0-rc.1 a few day ago. The update of GLDF.NET to version v0.5.0 covers all changes and additional ones of version GLDF 0.9.0-beta.9. You can find a detailed changelog always on our [release page on Github](https://github.com/globallightingdata/gldf/releases)

## Where can I get it

To download GLDF.NET simply use our Nuget package published on nuget.org

:::tip
[GLDF.Net on nuget.org](https://www.nuget.org/packages/GLDF.Net)
:::

## How can I use it

First, install GLDF.Net into your DotNet project

```bash
dotnet add package GLDF.Net
```

### Serialisation

To serialize a DotNet object of type `Root` into XML, use the `SerializeToString(Root root)` method like this

```csharp
var serializer = new GldfXmlSerializer();
// ignore incomplete Root object for now
var root = new Root {Header = new Header {Author = "Blog Example"}};
var xml = serializer.SerializeToString(root);
```

And if you would like to serialize a DotNet object of type `Root` directly into a .xml file, use `SerializeToFile(Root root, string filePath)`

```csharp
var serializer = new GldfXmlSerializer();
// ignore incomplete Root object for now
var root = new Root {Header = new Header {Author = "Blog Example"}};
serializer.SerializeToFile(root, @"c:\some\file\path\luminaire.xml");
```

### Deserialisation

To deserialize GLDF XML back into a DotNet object, use the `DeserializeFromString(string xml)` method like this

```csharp
var serializer = new GldfXmlSerializer();
var xml = @"<Root><Header><Author>Blog Example</Author></Header></Root>";
Root root = serializer.DeserializeFromString(xml);
```

Or to deserialize a GLDF .xml file into a DotNet object, use the `DeserializeFromFile(string filePath)` method like this

```csharp
var serializer = new GldfXmlSerializer();
var filePath = @"c:\some\file\path\luminaire.xml";
Root root = serializer.DeserializeFromFile(filePath);
```

### Serialisation options

If required, you can set some XML setting as well. For all options see [MSDN api/xmlwritersettings](https://docs.microsoft.com/de-de/dotnet/api/system.xml.xmlwritersettings)

```csharp
XmlWriterSettings settings = new XmlWriterSettings();
settings.Encoding = Encoding.UTF32; // UTF-8 by default
settings.Indent = false; // true by default
var serializer = new GldfXmlSerializer(settings);
```

### More examples

:::tip
More examples for XML validation and reading and writing GLDF container files can be found in our [GLDF.NET Github repository](https://github.com/globallightingdata/gldf.net#container-readwrite).
:::
