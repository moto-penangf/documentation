---
title: Bootloader
---

## Unlock bootloader

:::note
Currently there's no known way to unlock the bootloader.<br/>
Investigations are going on to figure out how to unlock it, check the forum and updates in this documentation.
:::

### Discoveries

**Table of contents:**
- [Official unlocking method?](#official-unlocking-method)
- [Fastboot?](#with-fastboot)
- [mtkclient](#using-mtkclient)


### Official unlocking method?


First of all, the device doesn't return any unlock data:

```sh
$ fastboot oem get_unlock_data

FAILED (remote: 'unknown command')
fastboot: error: Command failed
```

Thus it's not possible to unlock the bootloader by any official means.

### With fastboot?

**The device claims to be unlockable from fastboot**

```sh
$ fastboot flashing get_unlock_ability

(bootloader) unlock_ability = 16777216
```

In this case the number is equal to 2^24 (24th bit), which seem to mean **unlockable under certain conditions**

The device has a mediatek SoC, so trying with the flashing unlock command:

```sh
$ fastboot flashing unlock

(bootloader) Start unlock flow

FAILED (remote: 'Unlock key length is incorrect!')
fastboot: error: Command Failed
```

It requires an unlock key, like all Motorola Devices.

:::note
The command to install and dump the key was discovered by [DiabloSat](https://github.com/progzone122) with support from [Shomy](https://github.com/shomykohai)
In order to specify the key, we need to run the fastboot oem key \<KEY\> command.
:::

#### Dump of the current oem key 
Just in case, make a dump of the current oem key

```sh
$ fastboot oem get_key
(bootloader) **1A****042B2A****97***60C***FBC
(bootloader) finish dump
OKAY [  0.000s]
Finished. Total time: 0.000s
```

#### Install oem key to unlock

```sh
$ fastboot oem key **1A****042B2A****97***60C***FBC
(bootloader) open fastboot unlock
OKAY [  0.000s]
Finished. Total time: 0.000s
```

**Now we can try to unlock the bootloader!**

:::note
As you can see, unlocking the bootloader with the default key didn't help.
We need to try bruteforce key and we'll update the info in the documentation and make a script if it works!

Update: brute forcing won't work because of fastboot timeout, but a keygen could be possible by decompiling lk and reversing the algorithm which checks the key.
:::


```sh
$ fastboot flashing unlock
(bootloader) Start unlock flow

(bootloader) **1A****042B2A****97***60C***FBC
(bootloader) start fastboot unlock
(bootloader) **1A****042B2A****97***60C***FBC
FAILED (remote: 'Unlock key code is incorrect!')
fastboot: error: Command failed
```



### Using mtkclient

With mtkclient we get more luck than with fastboot, we are able to read and write the flash, **but we're limited**

Unfortunately, the device has a patched preloader, meaning we can't crash to BROM, and doesn't allow access to the latter with volume keys.
We can only interact with the preloader.

**Some file that are required:**
* preloader (Easily obtainable from official firmware, or more recently [from here](https://github.com/moto-penangf/fuckyoumoto/raw/refs/heads/main/sources/preloader_penangf.bin))
* Download Agent (Obtainable from RSA SP Flash tool, as it gets extracted during Rescue Mode, and now easy to get [from GitHub](https://github.com/moto-penangf/penangf-sp-flash-tool))


<br/><br/>
```bash
# Read the SECCFG partition, which we want to edit to unlock bootloader
$ mtk r seccfg seccfg.bin --loader DA_PL_NO_CERT_V6.bin --preloader preloader_penangf.bin > logs.txt
```

Thanks to [@DiabloSat](https://github.com/progzone122), another [DA](https://github.com/moto-penangf/penangf-sp-flash-tool/releases/download/0.1/MT6768_USER.bin) was found that works with mtkclient.
From now one, this will be used instead of the official one, as it provides more features and better outputs with mtkclient.


Trying to patch the seccfg partition, results in a "Write data not allowed" error:


```bash
# Read the SECCFG partition, which we want to edit to unlock bootloader
$ mtk da seccfg unlock --loader MT6768_USER.bin --preloader preloader_penangf.bin

...

DAXFlash - [LIB]: Error on sending parameter: Write data not allowed (0xc002000c)
```

So unfortunately not even that works.


### Testpoints?

Testpoints are [still being investigated](https://github.com/orgs/moto-penangf/discussions/1).

**BROM:**<br/>
As for now, we're investigating the possibility of accessing brom through a combination of keys (read [decompilation](/dev/decompilation.md)).<br/>
The suspected TP for BROM is KPCOL0, located at the back of the board.<br/>

Though, we would need to use it in combination with two other keys: Power and Vol+.


**UART:**<br/>
[Almost bricked a device.](https://github.com/moto-penangf/penangf-schematics/issues/1)
Further testing is needed.<br/>
I suspect to enable UART we need to run `fastboot oem p2u` first.



The list of the testpoints I've found is [here](testpoints.mdx).
