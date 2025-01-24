------
title: Fix softbricks
------

## What is a softbrick

A softbrick is when a phone doesn't want to bootup making it unable to boot into system or fastboot. Generally with penangf, the phone just throws a dm-verity error, but it may happen sometimes that it might stop booting at all.

## Difference between red state and softbrick

Red state is a mediatek specific term, and it happens when the device cannot verify the signature of the image installed. To fix it, you have to reflash stock firmware. 

Softbrick, on the other hand, happens when the device cannot continue booting up the system.

## Recovering from softbrick

Softbrick with Moto g23 can happen for no reason.
Fortunately they can be fixed really easily.

## fastboot reboot fastboot

This Softbrick happens because the bootloader sets the g_boot_mode to boot into fastbootd mode, but probably for a bug, when rebooting the preloader fails to find fastbootd, thus entering a bootloop.

To fix this, you just need to reflash stock firmware files, excluding super and userdata, to reset the information which tells the preloader to reboot to fastbootd.

You can either use mtkclient or SPFT.

## fastboot reboot bootloader

Usually this throws a dm-verity error, so you just need to reflash vbmeta partitions. 

If the phone doesn't boot up at all, follow the same instructions for fastboot reboot fastboot.
