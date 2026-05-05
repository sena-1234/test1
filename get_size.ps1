Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('c:\Users\user\Documents\terara printing press\public\hero-print-v2.png')
$img.Width.ToString() + "x" + $img.Height.ToString()
$img.Dispose()
