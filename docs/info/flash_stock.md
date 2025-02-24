---
title: Flash Stock firmware
---

:::warning
Carefully read all the warning in this section, as you might brick your device if you do something wrong.
:::


## Locked Bootloader method

To flash stock firmware, you'll need to use SP Flash tool, which is available [here](https://github.com/moto-penangf/penangf-sp-flash-tool/releases/tag/0.1).

You will also need to download stock firmware from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/).

Open SP Flash Tool and use the scatter file (.txt) you find in the firmware archive.

Select DA_PL_NO_CERT_V6.bin as the Download Agent.

**Untick the preloader partition**, unless you're installing a new version of stock firmware compared to the one you had.

:::warning
**MAKE SURE YOU'RE NOT SELECTING DOWNLOAD+FORMAT ALL, JUST DOWNLOAD ONLY**
:::

Press the Download button.

## Unlocked bootloader method

You can flash stock firmware by using Fastboot

:::warning
DO NOT run any other commands than running the script, or you may brick your device.

DO NOT flash the preloader, ever.

**DO NOT REFLASH STOCK FIRMWARE WITH SP FLASH TOOL WITHOUT FIRST FLASHING IT WITH FASTBOOT, AS YOU MIGHT GET AN HARDBRICK**
**FIRST FLASH STOCK FIRMWARE THROUGH FASTBOOT, AND JUST THEN FLASH IT WITH SP FLASH TOOL**
**SP FLASH TOOL MIGHT RELOCK THE BOOTLOADER BEFORE FINISHING FLASHING, CAUSING AN ERROR THAT CAN ONLY BE RECOVERED WITH JTAG**
:::

1. Download the latest firmware from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/)
2. Clone repository [fuckyoumoto](https://github.com/moto-penangf/fuckyoumoto)
3. Run ```flash_stock.sh``` script 
   ```shell
   $ ./flash_stock.sh <firmware_directory>
   ```

There's no need to flash any other partition other than these.

:::warning
**DO NOT lock the bootloader afterwards.**<br/>

If you want to relock the bootloader, first run these commands **MAKING SURE YOU'RE FLASHING THE LATEST FIRMWARE**, and then flash the phone with SP Flash Tool, **making sure to untick preloader.**<br/>
:::
