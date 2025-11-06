The driver for the printer can be found here:

- [User Support Page](https://www.kyoceradocumentsolutions.com/support_product/index_en.html?r=116&s=undefined&p=83)
- [ECOSYS PA4000cx Support Page](https://www.kyoceradocumentsolutions.com/support_product/model_en.html?r=116&s=2&m=399&p=83)

And instructions on how to install it can be found here:

- [Mac Driver Setup Guide](https://dam.kyoceradocumentsolutions.com/content/dam/gdam_dc/dc_global/document/manual/product_086/MacDriver_SetupGuide_EN.pdf)

Office Printer Information:

- **Location**: Stationary nook in front of 1126B, 11th Floor, 100 College St. 
- **Printer Model**: `ECOSYS PA4000cx`
- **Printer Name**: `YUCOLL100X01126AM1.MED.YALE.INTERNAL`

Printer Setup Tutorial (Step-by-step):

- Download the driver for the printer 
    - This can be done through the "Web Installer" option, which will download an installer that picks the right driver for you, or the "Printer Driver" option, which will download the driver itself. Ensure you are downloading the one that corresponds to the model above
- Connect to the printer through your device
    - For Mac: This is `Settings` > `Printers & Scanners` > `Add Printer, Scanner, or Fax`
    - Click the `IP` button (looks like a litle globe)
    - Add the name of the printer (`YUCOLL100X01126AM1.MED.YALE.INTERNAL`) into the `Address` field, and a text line will show underneath saying `Valid and complete host name or address`. The `Name`, `Location`, and `Use` fields will all populate in the box below. You should see:
        - Name: `YUCOLL100X01126AM1.MED.YALE.INTERNAL`
        - Location: `100 COLLEGE RM 1126`
        - Use: `Kyocera ECOSYS PA4000cx KPDL`
    - Optionally: change `Protocol` to `Line Printer Daemon - LPD` format. This is recommended by the manual.
    - Click the `Add` button.
- You should be able to print! **NOTE: You must be connected to the *YaleSecure* network to use the printer over wireless.** If you are not connected, the printer will fail. The printer is already connected to *YaleSecure* so you should not need to touch the WiFi settings.