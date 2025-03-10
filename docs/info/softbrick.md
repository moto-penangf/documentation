---
title: Fix softbricks
---

## What is a softbrick

A softbrick is when a phone doesn't want to bootup making it unable to boot into system or fastboot. Generally with penangf, the phone just throws a dm-verity error, but it may happen sometimes that it might stop booting at all.

## Difference between red state and softbrick

Red state is a specific term of [verified boot state](https://source.android.com/docs/security/features/verifiedboot/boot-flow#dm-verity-corruption), and it happens when the device cannot verify the signature of the image installed. To fix it, you have to reflash stock firmware. 

Softbrick, on the other hand, happens when the device cannot continue booting up the system.

## Recovering from softbrick

Softbrick with Moto g23 can happen for no reason.
Fortunately they can be fixed really easily.

## fastboot reboot fastboot

This Softbrick happens because the bootloader sets the g_boot_mode to boot into fastbootd mode, but probably for a bug, when rebooting the preloader fails to find fastbootd, thus entering a bootloop.

To fix this, your job is to interrupt the bootloop and run a script that will force boot you into FASTBOOT and automatically fix the softbrick:
1. Download the latest firmware from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/)
2. Clone repository [fuckyoumoto](https://github.com/moto-penangf/fuckyoumoto)
3. Run ```fix_fastbootd_softbrick.sh``` script in the right mode

    **Syntax:**
    ```shell
    $ ./fix_fastbootd_softbrick.sh <FIRMWARE_DIR> <MODE (Optional)>
    ```

    :::note
    If you don't know which mode you want, try mode 1 first
    :::

    | Mode              | Description                                                                                                       |
    |-------------------|-------------------------------------------------------------------------------------------------------------------|
    | **1** _(Default)_ | Only the vendor_boot and boot partitions are flashed. <br/>It will help if the firmware was not badly corrupted.  |                                                                                                         |
    | **2**             | The entire firmware is flashed in its entirety. <br/>All user data will be lost. <br/>This will take a long time. |

    **Example of using the script:**
    - Mode 1
        ```shell
        $ ./fix_fastbootd_softbrick.sh ../penangf_g_user_14_UHA34.29-10 1
        ```
    - Mode 2
        ```shell
        $ ./fix_fastbootd_softbrick.sh ../penangf_g_user_14_UHA34.29-10 2
        ```   

## fastboot reboot bootloader

Usually this throws a dm-verity error, so you just need to reflash vbmeta partitions. 

If the phone doesn't boot up at all, follow the same instructions for fastboot reboot fastboot.
