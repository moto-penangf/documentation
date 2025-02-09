---
title: Custom Bootloder
---

:::warning
Make sure you have the [bootloader unlocked](../dev/bootloader.md) or you will get [soft brick](../info/softbrick.md)!
:::

:::info
Thanks to [Roger Ortiz](https://github.com/R0rt1z2) for developing the payload for our bootloader!
:::

The custom bootloader protects the device from Hard Brick by preventing critical operations such as flashing the preloader and locking the bootloader without restoring the original firmware. 

In addition, it extends the functionality by adding new options for customizing and managing the system.

## Features
- Blocks ```fastboot flash preloader```
- Removes orange state
- Spoofes verified state to green (Required to bypass SafetyNet / Play Integrity)
- Block ```fastboot flashing lock```
- Adds ```fastboot oem help```
- Adds ```fastboot oem hexdump```

## Guide
1. Download your current firmware archive from [lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/)
2. Clone repository [chouchou](https://github.com/R0rt1z2/chouchou)
3. Transfer the ```lk.img``` file from the firmware archive to the directory ```chouchou```
4. Patch stock lk
    ```shell
    $ python patch_lk.py lk.img bin/lk.img
   
    base: 0x4c400000, size: 1072864, name: lk
    payload injection point at 0x4c4f6400
    0x4c427638 (pivot) bl 0x4c4f6400 (payload)
    Writing 2238304 bytes to lk.img-patched...
    ```
5. Flash custom lk
    ```shell
    $ fastboot flash lk lk.img-patched
    ```