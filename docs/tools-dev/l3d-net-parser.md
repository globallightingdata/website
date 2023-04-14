---
title: L3D .NET Parser
sidebar_label: L3D .NET Parser
---

## L3D .NET library

[![Github](https://img.shields.io/badge/Github-Repository-lightgrey)](https://github.com/globallightingdata/l3d.net) [![NuGet Status](https://img.shields.io/nuget/v/L3D.Net.svg)](https://www.nuget.org/packages/L3D.Net/) [![L3D.Net on fuget.org](https://www.fuget.org/packages/L3D.Net/badge.svg)](https://www.fuget.org/packages/L3D.Net)

## Introduction

.NET Standard 2.0 library for the Luminaire 3D [L3D](https://gldf.io/docs/geometry/l3d-intro)

With this library it is possible to read and build L3D container files. For that the library exposes two classes `Builder` and `Reader`.
The `Builder` has a fluent API for defining all the luminaire parts and build the target container file.
With the `Reader` is is possible to read the content of a L3D container and to parse the containing .obj files at once. So there is no other .obj parser needed.

## How to get started

### Requirements

- [.NET Standard 2.0](https://docs.microsoft.com/de-de/dotnet/standard/net-standard) compatible project

### Nuget package

Add the package within your IDE or using the CLI

```bash
dotnet add package L3D.Net
```

---

## Examples

Examples on how to read, write and validate a L3D container can always be found on [Github](https://github.com/globallightingdata/l3d.net)
