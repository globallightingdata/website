---
title: Parametric Geometry Introduction
sidebar_label: Introduction
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## The Concept

Parametric Geometry is a concept that allows you to create basic, rudimentary 3D models of generic luminaires without having to model them. You can create models based on a few product dimensional parameters.

Our Parametric 3D Model web service allows you to upload an input XML file and provides the download link after generating the new L3D file. You can then use the file within your GLDF file.

## Step-by-Step Guide

This guide will walk you through the steps to create a sample parametric L3D model and help you understand how the web service works. The outline of the process is as follows:

- Create an input XML file according to our <a href="/xsd/p3d/p3d.xsd" target="_blank">XSD</a> file specification.
- Send the input XML file to our web service.
- The web service will respond with a URL where you can download the generated L3D file.

The following is an example based on the Windows platform. We will create a Windows batchfile (.bat) and a sample source XML file to demonstrate and test the web service.

:::warning Important
Before you start, you will need to obtain authentication information from Relux or DIAL.

Make sure that you substitute "EMAIL" and "PASSWORD" with your actual email address and password as registered with the Relux API service. If you have any doubts, please reach out to [support@relux.com](mailto:support@relux.com) for assistance.
:::

### Step 1

Open the windows text editor of your choice, enter the following code and save the file as *example.bat*

```bash
@Echo off

REM File Dialog
For /f "usebackqdelims=" %%A in (
  `powershell -Executionpolicy ByPass -Command "[void][System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms');$dlg = New-Object System.Windows.Forms.OpenFileDialog; if($dlg.ShowDialog() -eq 'OK'){return $dlg.FileNames}"`
) Do Set file=%%A
echo %file%

REM auth Call
curl --location "https://relux.com/en/account/api/login/" --form "username="EMAIL"" --form "password="PASSWORD"" --output token.json

REM get token out of json
For /f "usebackqdelims=" %%A in (
  `Powershell -Executionpolicy Bypass -command "return (Get-Content -Raw -Encoding UTF8 token.json) | ConvertFrom-Json | ForEach-Object id_token"`
) Do Set idtoken=%%A
echo %idtoken%

REM API Call
curl --header "Authorization: Bearer %idtoken%" --request "PUT" --header "Content-Type:application/xml" "https://p3d.relux.com/l3d/" --data "@%file%" --output out.xml

REM get URL out of JSON
For /f "usebackqdelims=" %%A in (
  `Powershell -Executionpolicy Bypass -command "([xml](gc 'out.xml')).SelectSingleNode('//root').innerText"`
) Do Set url=%%A
echo %url%

REM Filename of URL
for /f "tokens=1,2,3,4 delims=/ " %%a in ("%url%") do set filename=%%d
echo %filename%

REM URL downlaod
curl --header "Authorization: Bearer %idtoken%" -L -X GET %url% --output %filename%

REM clean up
del out.xml
del token.json

pause
```

### Step 2

Open another instance of your text editor, paste the following code and save the file as *example.xml*:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<P3D>
    <StandCuboidSide>
     <Width>30</Width>
     <Length>60</Length>
     <Height>15</Height>
     <LuminousWidth>20</LuminousWidth>
     <LuminousLength>20</LuminousLength>
     <TotalHeight>120</TotalHeight>
    </StandCuboidSide>
</P3D>
```

### Step 3

Double-click the example.bat batchfile created in step 1. Then a file selection dialog will appear. You can then select the example.xml file created in the step above and the script will download the result L3D file to your current directory. The result filename should start with *StandCuboidSide...* and end with *.l3d*. Your directory should look as in the image below.

![Result directory](/img/docs/geometry/screenshots/result.webp)

### Step 4

Open the [L3D Editor](https://l3d-editor.gldf.io) and load your new L3D file to see the result.

![Parametric geometry in the L3D Editor](/img/docs/geometry/screenshots/resulteditor.webp)
