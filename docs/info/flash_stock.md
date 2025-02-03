---
title: Flash Stock firmware
---

:::warning
Carefully read all the warning in this section, as you might brick your device if you do something wrong.
:::


## Flash stock firmware if you have locked bootloader:

To flash stock firmware, you'll need to use SP Flash tool, which is available [here](https://github.com/moto-penangf/penangf-sp-flash-tool/releases/tag/0.1).

You will also need to download stock firmware from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/).

Open SP Flash Tool and use the scatter file (.txt) you find in the firmware archive.

Select DA_PL_NO_CERT_V6.bin as the Download Agent.

**Untick the preloader partition**, unless you're installing a new version of stock firmware compared to the one you had.

:::warning
**MAKE SURE YOU'RE NOT SELECTING DOWNLOAD+FORMAT ALL, JUST DOWNLOAD ONLY**
:::

Press the Download button.

## Flash stock firmware if you have unlocked bootloader:

You can flash stock firmware by using Fastboot

Download the latest firmware from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/)

:::warning
DO NOT execute any other commands apart from the one listed below, or you might brick your device.

DO NOT flash preloader, never.
:::

With fastboot, execute the following commands:

```sh

$ fastboot flash vbmeta_a vbmeta.img

$ fastboot flash vbmeta_system_a vbmeta_system.img

$ fastboot flash vbmeta_vendor_a vbmeta_vendor.img  

$ fastboot flash boot_a boot.img

$ fastboot flash super super.img
```

There's no need to flash any other partition other than these.

:::warning
**DO NOT lock the bootloader afterwards. If you want to relock the bootloader, first run these commands and then flash the phone with SP Flash Tool, making sure to untick preloader.**
:::
