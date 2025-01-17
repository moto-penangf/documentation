---
title: Testpoints
---

## Moto G23

* [MB FRONT](#front)
* [MB BACK](#back)
* [eMMC](#emmc)
* [JTAG](#jtag)

### FRONT:
![](../../static/assets/mainboard-front.png)
*FRONT PICTURE PROVIDED BY [DiabloSat](https://github.com/progzone122)*

### BACK:
![](../../static/assets/mainboard-back.png)
*BACK PICTURE COMES FROM [THIS](https://www.youtube.com/watch?v=Y-8yj6qbFQ4) VIDEO*

### eMMC:
:::warning
**CLK**, **DAT0** and **CMD** could all be testpoints to access BROM.
These points still haven't been tested though.

DON'T use these points if you don't know what you're doing.

Update: We're not sure yet if these are the correct TP, or if they are TP at all, click [here](https://github.com/orgs/moto-penangf/discussions/1#discussioncomment-11779194) for more information.<br/>
DO NOT ATTEMPT TO USE THEM.
:::

![](../../static/assets/eMMC_test_points.png)


### JTAG:
![](../../static/assets/jtag.png)

### More testpoints?
Also, although we don't have testpoints for this, we still have the ability to access [KPCOL1](../schematic/keypad.md#kpcol1), [PWRKEY_SW](../schematic/control-if.md#pwrkey_sw), [HOMEKEY_SW](../schematic/control-if.md#homekey_sw).
