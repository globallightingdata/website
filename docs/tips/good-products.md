---
title: Creating good GLDF files
sidebar_label: Creating good GLDF files
---
The best way is the creation of the GLDF right out of the PIM system. It is just an XML file where all files and properties are written in.
If you were able to create ROLF or ULD directly out of your systems, then you almost certainly get GLDF created. The container aspect is maybe technically new. But this is just a zip event and a renaming of the file suffix. We have a lot of tools in mind to support the creation of GLDF in a similar way the DIAL or RELUX member tools supported the ULD or ROLF creation. There are a lot of options, from Excel template to database tool. The specification of GLDF and L3D is public available. The public could develop free and open tools too.

Due to the open format Some PIM system manufactor create and provide GLDF generators. So, the implementing should be qiute easy.
Here on GLDF.io some tooling to investigate and create L3D and GLDF is avaliable.
It is also possible to create GLDF files manualy with an XML or text editor.

GLDF is also quite optional on many struture elements. So, a start could be simply a LDC file and a product name in the GLDF. Of cause just a LDC is not enough for the most applications.

A good start is the data amount of ROLF and ULD. So, a unique product name and number (and GTIN) is a must. A geometry, even a simple one, is mandantory. Use multiple light outputs and lamps in case the product has it. Also a product picture and a describtion text in multi languages are basics. If the PIM system supports product vaiants then the variant structure in GLDF should be filled.

Next level is all the data of the creating PIM system. To fill up all the 110 native properties and use all the structure elements is close to impossible.
