---
title: DM-Verity
---

## How did I get dm-verity?

There are various way to get a dm-verity error on this device.
* Trying to use DSU Loader (Loading a GSI through Developer Options)
* Running `fastboot reboot bootloader`
* Updating the phone (Installing an OTA) and be unlucky
* Doing nothing and still get the error

The message itself is not a big deal, but it's annoying to see it and to have to press the power button every time you power on the phone.

### How to fix dm-verity?

1. Download the latest firmware (or the one matching the one on your phone if you don't wanna update) from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/)
2. Download SP Flash Tool [here](https://github.com/moto-penangf/penangf-sp-flash-tool/releases/tag/0.1)
3. Run the SP Flash Tool and use the scatter file (.txt) you find in the firmware
4. Select only preloader and vbmeta partitions
5. Click on Download (Without Format)
6. Connect the phone and let it flash
7. When it finishes flashing, reboot the phone and the error should be gone.


If this didn't work either, you can try to flash the full firmware, or use RSA.
