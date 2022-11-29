"use strict";(self.webpackChunkgldf=self.webpackChunkgldf||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/05/03/release-parser","metadata":{"permalink":"/blog/2022/05/03/release-parser","editUrl":"https://github.com/globallightingdata/website/tree/master/blog/2022-05-03-release-parser.md","source":"@site/blog/2022-05-03-release-parser.md","title":"DotNet Serializer for GLDF","description":"Release v0.5.0 of the GLDF.NET Parser","date":"2022-05-03T00:00:00.000Z","formattedDate":"May 3, 2022","tags":[{"label":"gldf.net","permalink":"/blog/tags/gldf-net"},{"label":"tools","permalink":"/blog/tags/tools"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.175,"hasTruncateMarker":true,"authors":[{"name":"Alex","title":"Developer DIAL","url":"https://github.com/Kurpanik","imageURL":"https://avatars.githubusercontent.com/u/71767601?s=460"}],"frontMatter":{"title":"DotNet Serializer for GLDF","description":"Release v0.5.0 of the GLDF.NET Parser","author":"Alex","author_title":"Developer DIAL","author_url":"https://github.com/Kurpanik","author_image_url":"https://avatars.githubusercontent.com/u/71767601?s=460","hide_table_of_contents":false,"tags":["gldf.net","tools","release"]},"nextItem":{"title":"Release Candidate & Tools","permalink":"/blog/2022/04/01/rc1-and-tool"}},"content":"The *GLDF.NET* Parser - a GLDF XML serializer and deserializer for [DotNet](https://dotnet.microsoft.com) - is available now for GLDF [1.0.0-rc.1](https://github.com/globallightingdata/gldf/releases/tag/v1.0.0-rc.1). In this blog post you will find a quick introduction and overview of its usage.\\n\\n\x3c!--truncate--\x3e\\n\\n## What is it\\n\\nGLFD.NET ist a [DotNet](https://dotnet.microsoft.com) ([Standard 2.0](https://docs.microsoft.com/de-de/dotnet/standard/net-standard)) library for the Global Lighting Data Format with the following features:\\n\\n- Serialize and deserialize GLDF XML from and into typed objetcs\\n- 100% format coverage\\n- Validate GLDF XML with the GLDF XmlSchema ([XSD](http://localhost:3000/xsd-reference/index_Root.html))\\n- Read and write .gldf container files, including all assets and signature file\\n- Validate .gldf container files\\n- No dependencies, small footprint (~400kb)\\n- Windows & Unix compatible\\n\\n## What changed in v0.5\\n\\nAs you may already know, we\'ve release GLDF 1.0.0-rc.1 a few day ago. The update of GLDF.NET to version v0.5.0 covers all changes and additional ones of version GLDF 0.9.0-beta.9. You can find a detailed changelog always on our [release page on Github](https://github.com/globallightingdata/gldf/releases)\\n\\n## Where can I get it\\n\\nTo download GLDF.NET simply use our Nuget package published on nuget.org\\n\\n:::tip\\n<https://www.nuget.org/packages/GLDF.Net>\\n:::\\n\\n## How can I use it\\n\\nFirst, install GLDF.Net into your DotNet project\\n\\n```bash\\ndotnet add package GLDF.Net\\n```\\n\\n### Serialisation\\n\\nTo serialize a DotNet object of type `Root` into XML, use the `SerializeToString(Root root)` method like this\\n\\n```csharp\\nvar serializer = new GldfXmlSerializer();\\n// ignore incomplete Root object for now\\nvar root = new Root {Header = new Header {Author = \\"Blog Example\\"}};\\nvar xml = serializer.SerializeToString(root);\\n```\\n\\nAnd if you would like to serialize a DotNet object of type `Root` directly into a .xml file, use `SerializeToFile(Root root, string filePath)`\\n\\n```csharp\\nvar serializer = new GldfXmlSerializer();\\n// ignore incomplete Root object for now\\nvar root = new Root {Header = new Header {Author = \\"Blog Example\\"}};\\nserializer.SerializeToFile(root, @\\"c:\\\\some\\\\file\\\\path\\\\luminaire.xml\\");\\n```\\n\\n### Deserialisation\\n\\nTo deserialize GLDF XML back into a DotNet object, use the `DeserializeFromString(string xml)` method like this\\n\\n```csharp\\nvar serializer = new GldfXmlSerializer();\\nvar xml = @\\"<Root><Header><Author>Blog Example</Author></Header></Root>\\";\\nRoot root = serializer.DeserializeFromString(xml);\\n```\\n\\nOr to deserialize a GLDF .xml file into a DotNet object, use the `DeserializeFromFile(string filePath)` method like this\\n\\n```csharp\\nvar serializer = new GldfXmlSerializer();\\nvar filePath = @\\"c:\\\\some\\\\file\\\\path\\\\luminaire.xml\\";\\nRoot root = serializer.DeserializeFromFile(filePath);\\n```\\n\\n### Serialisation options\\n\\nIf required, you can set some XML setting as well. For all options see [MSDN api/xmlwritersettings](https://docs.microsoft.com/de-de/dotnet/api/system.xml.xmlwritersettings)\\n\\n```csharp\\nXmlWriterSettings settings = new XmlWriterSettings();\\nsettings.Encoding = Encoding.UTF32; // UTF-8 by default\\nsettings.Indent = false; // true by default\\nvar serializer = new GldfXmlSerializer(settings);\\n```\\n\\n### More examples\\n\\n:::tip\\nMore examples for XML validation and reading and writing GLDF container files can be found in our [GLDF.NET Github repository](https://github.com/globallightingdata/gldf.net#container-readwrite).\\n:::"},{"id":"/2022/04/01/rc1-and-tool","metadata":{"permalink":"/blog/2022/04/01/rc1-and-tool","editUrl":"https://github.com/globallightingdata/website/tree/master/blog/2022-04-01-rc1-and-tool.md","source":"@site/blog/2022-04-01-rc1-and-tool.md","title":"Release Candidate & Tools","description":"GLDF Release candidate 1 and new GLDF Tools","date":"2022-04-01T00:00:00.000Z","formattedDate":"April 1, 2022","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"l3d","permalink":"/blog/tags/l-3-d"},{"label":"tools","permalink":"/blog/tags/tools"},{"label":"roadmap","permalink":"/blog/tags/roadmap"}],"readingTime":1.235,"hasTruncateMarker":true,"authors":[{"name":"Alex","title":"Developer DIAL","url":"https://github.com/Kurpanik","imageURL":"https://avatars.githubusercontent.com/u/71767601?s=460"}],"frontMatter":{"title":"Release Candidate & Tools","description":"GLDF Release candidate 1 and new GLDF Tools","author":"Alex","author_title":"Developer DIAL","author_url":"https://github.com/Kurpanik","author_image_url":"https://avatars.githubusercontent.com/u/71767601?s=460","hide_table_of_contents":false,"tags":["release","l3d","tools","roadmap"]},"prevItem":{"title":"DotNet Serializer for GLDF","permalink":"/blog/2022/05/03/release-parser"},"nextItem":{"title":"Licht 2021","permalink":"/blog/2021/03/22/licht-2021"}},"content":"Today we are pleased to publish the first release candidate of the Global Lighting Data Format version 1.0.0. The XSD can be downloaded as usual on Github, as well as in the [download section](/download).\\n\\nWe have also developed two new tools that will make it easier to write and read the GLDF and the new geometry format L3D.\\n\\n\x3c!--truncate--\x3e\\n\\n## Release candidate 1\\n\\nWith the publication of the first release candidate for version 1.0, we will now slow down the development and probably only change minor details. Before the format is finally made available and can be read in DIALux and RELUX in ~ early 2023.\\n\\n### New versioning\\n\\nIn the course of this publication, we have also adapted an new versioning scheme. And will now version the XSD according to [SemVer](https://semver.org). This should ensure that in future you can see directly from the version number of the GLDF whether adjustments to your own XML files are necessary. Or a new XSD can be referenced without running the risk of incompatible data.\\n\\n## New tools\\n\\nYou can find our new tools in the [tooling area](/tools). They are still in beta stage, so we would appreciate a lot of feedback. Have fun trying them out!\\n\\n![GLDF Logo](/img/homepage/editor-logos.webp \'Editor Logo\')\\n\\n## What happens next\\n\\nIn the coming weeks and months, we will evaluate and implement feedback into the format. Putting the finishing touches into GLDF, tools and libraries. As well as creating a full documentation on this website.\\n\\n[![Roadmap](https://github.com/globallightingdata/files/blob/master/blog/gldf_roadmap_2022-04.png?raw=true)](https://github.com/globallightingdata/files/blob/master/blog/gldf_roadmap_2022-04.png?raw=true)"},{"id":"/2021/03/22/licht-2021","metadata":{"permalink":"/blog/2021/03/22/licht-2021","editUrl":"https://github.com/globallightingdata/website/tree/master/blog/2021-03-22-licht-2021.md","source":"@site/blog/2021-03-22-licht-2021.md","title":"Licht 2021","description":"Vom 21. bis zum 24. M\xe4rz 2021 trifft sich die Lichtwelt zum 24. europ\xe4ischen Lichtkongress LICHT2021","date":"2021-03-22T00:00:00.000Z","formattedDate":"March 22, 2021","tags":[{"label":"fair","permalink":"/blog/tags/fair"}],"readingTime":0.56,"hasTruncateMarker":true,"authors":[{"name":"Friedrich","title":"Business Unit Director Sales DIAL","url":"https://www.licht2021.de/referenten/279","imageURL":"https://i.imgur.com/QxSPjLr.jpg"}],"frontMatter":{"title":"Licht 2021","description":"Vom 21. bis zum 24. M\xe4rz 2021 trifft sich die Lichtwelt zum 24. europ\xe4ischen Lichtkongress LICHT2021","author":"Friedrich","author_title":"Business Unit Director Sales DIAL","author_url":"https://www.licht2021.de/referenten/279","author_image_url":"https://i.imgur.com/QxSPjLr.jpg","hide_table_of_contents":true,"tags":["fair"]},"prevItem":{"title":"Release Candidate & Tools","permalink":"/blog/2022/04/01/rc1-and-tool"},"nextItem":{"title":"Roadmap","permalink":"/blog/2021/03/13/roadmap"}},"content":"[![Licht 2021](https://i.imgur.com/i9GM4Sn.jpg)](https://www.licht2021.de/panel-session/04-lichtplanung-bim-und-lichtberechnungsprogramme)\\n[Panel Session 04: Lichtplanung - BIM und Lichtberechnungsprogramme](https://www.licht2021.de/panel-session/04-lichtplanung-bim-und-lichtberechnungsprogramme)\\n\\n\x3c!--truncate--\x3e\\n\\n### Session topics\\n\\n- [Klaus Hei\xdf](https://www.licht2021.de/referenten/322)\\n  - Lighting design in BIM\\n- [Friedrich Wilhelm Bremecker](https://www.licht2021.de/referenten/279)\\n  - Uniform, comprehensive data format for the lighting design - structure and features\\n- [Robert Heinze](https://www.licht2021.de/referenten/265)\\n  - Uniform, comprehensive data format for the lighting design \u2013 geometry and application\\n- [David Geisler-Moroder](https://www.licht2021.de/referenten/361)\\n  - Integral planning of holistic solutions for daylight, artificial light and lighting control\\n\\n---\\n\\nYou can download our presentations here (pdf):\\n\\n- [Einheitliches Datenformat f\xfcr die Lichtplanung \u2013 Struktur und Merkmale #1](https://b2b.dial.de/index.php/s/Zqf6anpfgYtiHLG)\\n- [Einheitliches Datenformat f\xfcr die Lichtplanung \u2013 Struktur und Merkmale #2](https://b2b.dial.de/index.php/s/D6GDvuhEpwe2xE9)\\n- [Standardized data format for lighting design \u2013 Structure and Features](https://b2b.dial.de/index.php/s/TfiBtC6hFgWmYXn)"},{"id":"/2021/03/13/roadmap","metadata":{"permalink":"/blog/2021/03/13/roadmap","editUrl":"https://github.com/globallightingdata/website/tree/master/blog/2021-03-13-roadmap.md","source":"@site/blog/2021-03-13-roadmap.md","title":"Roadmap","description":"GLDF Roadmap 2021","date":"2021-03-13T00:00:00.000Z","formattedDate":"March 13, 2021","tags":[{"label":"roadmap","permalink":"/blog/tags/roadmap"}],"readingTime":0.215,"hasTruncateMarker":true,"authors":[{"name":"Thorsten","title":"Business Unit Manager Software DIAL","url":"https://github.com/tkock-dx","imageURL":"https://avatars.githubusercontent.com/u/4246606"}],"frontMatter":{"title":"Roadmap","description":"GLDF Roadmap 2021","author":"Thorsten","author_title":"Business Unit Manager Software DIAL","author_url":"https://github.com/tkock-dx","author_image_url":"https://avatars.githubusercontent.com/u/4246606","hide_table_of_contents":true,"tags":["roadmap"],"draft":false},"prevItem":{"title":"Licht 2021","permalink":"/blog/2021/03/22/licht-2021"},"nextItem":{"title":"Welcome","permalink":"/blog/2021/03/12/welcome"}},"content":"GLDF is a true teamwork of DIAL and RELUX. The further software development of libraries,\\ntools and the integration in the applications will need many efforts. Here is a preliminary\\nroad map with time estimations of the next GLDF development steps.\\n\\n\x3c!--truncate--\x3e\\n\\n![Roadmap](https://raw.githubusercontent.com/globallightingdata/files/master/blog/GLDF_Roadmap_211216.png)"},{"id":"/2021/03/12/welcome","metadata":{"permalink":"/blog/2021/03/12/welcome","editUrl":"https://github.com/globallightingdata/website/tree/master/blog/2021-03-12-welcome.md","source":"@site/blog/2021-03-12-welcome.md","title":"Welcome","description":"GLDF - new unified lighting data format for luminaires and sensors","date":"2021-03-12T00:00:00.000Z","formattedDate":"March 12, 2021","tags":[],"readingTime":10.56,"hasTruncateMarker":true,"authors":[{"name":"Robert","title":"CTO Relux","url":"https://github.com/robertrelux","imageURL":"https://avatars.githubusercontent.com/u/71825892"}],"frontMatter":{"title":"Welcome","description":"GLDF - new unified lighting data format for luminaires and sensors","author":"Robert","author_title":"CTO Relux","author_url":"https://github.com/robertrelux","author_image_url":"https://avatars.githubusercontent.com/u/71825892","hide_table_of_contents":false,"draft":false},"prevItem":{"title":"Roadmap","permalink":"/blog/2021/03/13/roadmap"}},"content":"RELUX and DIAL present the new unified lighting data format for luminaires and sensors: GLDF.\\nIt could be used directly in RELUX and DIALux. GLDF is open and free available for everyone.\\nThanks to the joint forces the format is technically robust, modern, and universal.\\nIn the future it may replace other and older existing luminaire data formats, which is a huge\\nbenefit in creating of data on manufacturer side and a benefit for designers and luminaire data\\nusers in a reduced handling and an open structure. GLDF includes more capabilities as ROLF and\\nULD format combined.\\n\\n\x3c!--truncate--\x3e\\n\\n## Motivation and History\\n\\nOn my last LICHT 2018 proceedings and presentation in Davos, I ended with these words:\\n\\n> \u201cAnother potential and interesting application of the common lighting properties would be\\na lighting data format. A new, modern and modular lighting data format could be the result\\nof harmonised definitions and intense tests. This new one, could replace all other current\\nlighting data formats from simple to complex, cause of the modular structure. And it\\ncould contain much more information as today\u2018s exiting ones. But just a true replace could\\nsave efforts in creation and interpretation of lighting data.\u201d\\n\\n![Gldf](https://i.imgur.com/zU2c6x1.jpg)\\n\\nToday is the day where we can proudly announce a new modern luminaire and\\nsensor data format will be very soon available. RELUX and DIAL have put almost two\\nyears of work into a modern data format to cover actual use cases for the BIM area.\\nThis is a big step for the lighting industry with its lighting software applications.\\n\\n## GLDF Technical Benefits\\n\\nOne advantage is obvious: luminaire manufacture members of RELUX and DIAL only\\nhave to create one format and one geometry. In addition, the format also offers these\\nnew technical features for everybody, even for non-members of the two software\\nhouses:\\n\\n- several variants of a product with its own GTIN\\n- definition of lamps in absolute (LED) or relative (conventional) state\\n- embedding of pictures, geometries, documents etc. as a file or link by using a link:  \\n  dynamic assets form a central server are possible\\n- geometry from eulumdat, parametric objects or as a 3D model; multiple LOD\\n- light emission surfaces, rotating elements, suspension points and electrical connection can be defined\\n- luminaires with multiple light emitters and/or sensors\\n- emergency lighting LDCs or Emergency Ballast Lumen Factor\\n- constant light output CLO and international maintenance factors\\n- spectrum and dimming curves\\n- checksum for pure data validation or detection of manipulating\\n- optional use of all ~350 CEN/TS 17623 - ZVEI lighting BIM properties\\n- use of other BIM, IFC or even custom properties\\n\\nGLDF was created by RELUX and DIAL experts with decades of lighting experience for\\nall modern BIM use cases. Everything a manufacturer could communicate about his\\nproduct, can be enveloped in GLDF.\\n\\n## LDC and Luminaire\\n\\nIn the past often just the photometrics of luminaires, the LDC \u2013 Light Distribution\\nCurve was handled and used in lighting calculation and simulation applications. For a\\npure lighting calculation nothing more is truly needed. But with two or more light outputs\\nor some additional photometric information like spectrum or flicker this gets\\nproblematic. Today a designer has to deal with more than just lighting dimensioning.\\nHe needs product information like tender text, prices, GTIN numbers and more. The\\nproduct qualification process depends on a lot more data and on a simple picture and\\n3D model. A LDC is neither a luminaire nor a product, it is just a part of the luminaire.\\nBut an import one. RELUX and DIAL invented early on the two product data formats\\nROLF and ULD to cover this design need. Manufactures are used to fill up product in-\\nformation beyond the simple LDC. But ULD is closer to a binary format and could just\\nbe created with tools restricted to members. Also, the ROLF is a proprietary format\\nand just to be used in RELUX applications and created by RELUX members. Theoreti-\\ncally ROLF (RELUX Open Luminaire Format) is an open XML structure and could be\\ncreated and used outside RELUX tooling.\\n\\n![Gldf](https://i.imgur.com/w8LqRHd.jpg)\\n\\n## GLDF Structure\\n\\nGLDF is technically a (zip) container with the file ending .gldf. In this container a XML\\nfile define the product in a clear structure. Beside the XML the GLDF file contain sev-\\neral file assets like pictures, LDCs, geometry and documents. The core element is the\\nXML which describes all product features and variations. The XML contains three ma-\\njor blocks: the header, the general definitions, and the product definitions.\\nThe header just contains technical aspects and manufacturer information. The GLDF\\nformat is open and free to use. But the usage in the software applications will still require\\na membership or another kind of licence. So, the software decides what and\\nhow deep it will interpret the GLDF depending on the included licences.\\n\\nThe second block \u201cgeneral definitions\u201d contain all references to files and defines a setting\\nof lamps, control gears, photometrics, geometries and equipment. All fundamental\\naspects of the luminaire are referenced with IDs. GLDF can use photometrics from\\nEulumdat, IES (IES LM-63) or the new IES XML (ANSI/IES TM-33 or UNI 11733).\\nThe last block \u201cproduct definitions\u201d holds all properties of the product and all variants.\\nThe single variants could have all properties separate from the product master. In\\neach variant all reference IDs from the \u201cgeneral definitions\u201d will be put together to\\nproducts. This allows a large and effective creation of variants of a product.\\nGLDF could be used in an XML scheme with all capabilities. The GLDF scheme will be\\navailable in XSD. Together with some examples it will be no problem for professionals\\nto create GLDF files.\\n\\nSomebody with BIM and data format knowledge would ask: Why are you not doing\\nthis in IFC instead of XML? IFC is open free and contain custom properties. Today IFC\\nis just defined for buildings and not for single products or objects. Parallel to our work\\non the luminaire format a CEN expert group (including me) is creating the prEN\\n17549-1 and -2. A standard to describe single products in a customised IFC (XML)\\nwhich validates to IFC4 XSD. Brilliant work but 2 years too late.\\n\\nBesides the timing native IFC is a quite complex way to describe luminaires. IFC could transport a\\nluminaire in a building with 48 properties, rigid geometry and LDC properly. But it is\\nfar more complex as our GLDF. To integrate our requirements on a modern data set\\nof a luminaire and sensors (colours, rotatable joints, spectrum, variants, etc.) it would\\ngrow dramatically in complexity. I doubt that this luminaire enhanced IFC would\\nvalidate against the IFC XSD anymore. And there is no benefit in having forced GLDF\\ninto IFC; no BIM authoring system would understand it and would therefore just\\ndisplay parts of it. And it would be much harder to create and to interpret the format.\\nMaybe we could check again the IFC relation of GLDF in a couple of years.\\n\\n## Geometry Options\\n\\nGLDF has three geometry options\\n\\n- No geometry. Just the Eulumdat primitive.\\n- A parametric geometry with simple objects.\\n- A full 3D model based on the new L3D format.\\n\\nGeometry is technically not necessary. The format could be created just with a name\\nand a Eulumdat. The box or cylinder of Eulumdat will be taken as basic geometry.\\nOf cause, it would make absolute sense to put a real 3D model into the GLDF. There\\nwill be a new mesh-based 3D model format with the name L3D for this purpose. A\\nway in between are the parametric geometry models. Here it is possible to describe\\nbasic luminaire shapes with alphanumerical values. It is also possible to do both or all\\nthree options in one file for the benefit of a multi LOD luminaire geometry.\\n\\n## Parametric Geometry\\n\\nThe idea is simple: a set of basic luminaire geometry shapes could be altered with\\nsome parameters to hit the real luminaire shape as good as possible. There is no\\nneed of 3D modelling, an expert or modelling software. All parameters can be entered\\nin a simple table and the 3D shape will be finished. RELUX started with a first set of\\nbasic shapes and provide this idea to the ZVEI. At ZVEI the BIM project group finalised\\nand tested the parametric geometry concept. We created an XML schema to transport\\nthe parametric geometry inside the GLDF as separate XML file.\\n\\nToday there are 51 basic shapes which can be used. But this amount may change with\\nthe time. Depending on the basic shape up to 46 parameters could be used to cus-\\ntomise the basic shape. All parametric geometries have luminous surfaces and light\\nemitters. Optional it is also possible to describe the electrical connector position. With\\nthis description, especially of the LDC position, it is easily possible for a lighting design\\nsoftware to build up an exact and full operatable luminaire model.\\n\\nWith this system geometry could be created, processed, and transferred in a PIM system.\\nAlmost everybody could create luminaire geometry. We will interpret and visualise\\nthe parametric geometry. There are also ideas for some interesting helping and\\ncreating tools.\\n\\nAt the moment this concept is not compatible with the similar ETIM MC model. The\\nMC classes has a different approach of a pure 3D object visualisation and could not\\ncontain LDC or electrical connector positions. But ZVEI, DIAL, RELUX and ETIM working\\non a mapping of both concepts. Ideally it should be compatible or a least simple to\\nconvert.\\n\\n![Geometry](https://i.imgur.com/Y6JdZ0B.jpg)\\n\\n## Geometry Format L3D\\n\\nThe 3D geometry took a lot of efforts in the GLDF project group and probably also later\\nat manufacturer side. On the other side is a unified geometry a huge cost saving for\\nthe manufacturers.\\n\\nSadly, it is not possible to take an existing 3D format and just add some properties for\\nthe lighting usage. For a long time, we focused Collada as open XML basement for our\\nGLDF geometry. The 3D model authoring systems could not provide this custom lighting\\nproperties (e.g., light emitter) in a unified way.\\n\\nSo, we stick to what RELUX and DIAL had done quite well separately in the past and\\ncreated an own new data format for geometry similar to the today exiting r3d and\\nm3d (m4d, m3d+). But this time together and open for everybody.\\n\\nThe new L3D geometry format is also a zipped container format which includes a descripting\\nXML and OBJ 3D objects. OBJ is a simple open ascii based mesh format. It is\\nquite common and could be exported from the most 3D modelling applications. OBJ\\ncould also handle textures and surface material. This is an edge over to the old r3d\\nand m3d. The XML stores the relation and rotation behaviour between the different\\nOBJ objects and create in this way the full luminaire object. In the XML also all light\\nemitting objects, the luminous surfaces, the pendulum- and the electrical connector\\nare defined.\\n\\nSince the L3D is a new creation, it has to been created manually with OBJ files and the\\nXML today. We will work on tool(s) to create L3D geometry files with a graphical\\neditor. It would be technically possible to create L3D addons in AutoCAD, Revit,\\nSketchup, Solidworks or Blender. It is \u201cjust\u201d an effort. Since the L3D format is open and\\npublic available it should be possible that someone create a nice tool or addon. Of\\ncause, it would be even better if someone made it publicly available too.\\n\\nL3D files could be used in GLDF: as file in the container and as file reference in the\\nXML. The name of the light emitters, which are defined in the L3D, will be referenced\\nin the GLDF. All Light emitter properties like offsets, sizes, rotations, etc. are set in the\\nL3D file. We will interpret and visualise L3D via GLDF.\\n\\n![GLDF](https://i.imgur.com/K7kL5sX.jpg)\\n\\n## How to create GLDF?\\n\\nThe best way is the creation of the GLDF right out of the PIM system. It is just an XML\\nfile where all files and properties are written in. If you were able to create ROLF directly\\nout of your systems, then you almost certainly get GLDF created. The container aspect is maybe\\ntechnically new. But this is just a zip event and a renaming of the file\\nsuffix. We have a lot of tools in mind to support the creation of GLDF in a similar way\\nthe RELUX member tools supported the ROLF creation. There are a lot of options,\\nfrom Excel template to database tool. The specification of GLDF and L3D is public\\navailable. The public could develop free and open tools too."}]}')}}]);