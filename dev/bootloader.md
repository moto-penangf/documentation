## Unlock bootloader

> [!NOTE] 
> Currently there's no known way to unlock the bootloader.

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

The device has a mediatek SoC, so trying with the flashing unlock command:

```sh
$ fastboot flashing unlock

(bootloader) Start unlock flow

FAILED (remote: 'Unlock key length is incorrect!')
fastboot: error: Command Failed
```

It requires an unlock key, like all Motorola Devices.

Filling the key with random characters just freezes fastboot.


Same happens with using unlock_critical, with even worse result: The device freezes before being able to press the V+ key.


**When using the old oem command to unlock the bootloader**

When using the “oem unlock” command, if the key argument exceeds 54 characters, fastboot will hang and disconnect from the PC.

This may be bruteforce protection or just bad software.
```sh
$ fastboot oem unlock 123456789012345678901234567890123456789012345678901234

# Fastboot hung and the device was disconnected from the PC without any logs
```

Otherwise it will write “unknown command”
```sh
$ fastboot oem unlock
FAILED (remote: 'unknown command')

$ fastboot oem unlock 1234567890
FAILED (remote: 'unknown command')
```


**The device claims to be unlockable from fastboot**

```sh
$ fastboot flashing get_unlock_ability

(bootloader) unlock_ability = 16777216
```

In this case the number is equal to 2^24 (24th bit), which seem to mean **unlockable under certain conditions**


### Using mtkclient

With mtkclient we get more luck than with fastboot, we are able to read and write the flash, **but we're limited**

Unfortunately, the device has a patched preloader, meaning we can't crash to BROM, and doesn't allow access to the latter with volume keys.
We can only interact with the preloader.

**Some file that are required:**
* preloader (Easily obtainable from official firmware, or more recently [from here](https://github.com/moto-penangf/fuckyoumoto/raw/refs/heads/main/sources/preloader_penangf.bin))
* Download Agent (Obtainable from RSA SP Flash tool, as it gets extracted during Rescue Mode, and now easy to get [from GitHub](https://github.com/moto-penangf/penangf-sp-flash-tool))


<br><br >
```bash
# Read the SECCFG partition, which we want to edit to unlock bootloader
$ mtk r seccfg seccfg.bin --loader DA_PL_NO_CERT_V6.bin --preloader preloader_penangf.bin > logs.txt
```

Thanks to [@DiabloSat](https://github.com/progzone122), another [DA Agent](https://github.com/moto-penangf/penangf-sp-flash-tool/releases/download/0.1/MT6768_USER.bin) was found that works with mtkclient.
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

[Doesn't work and almost bricked a device.](https://github.com/moto-penangf/penangf-schematics/issues/1)

The list of the testpoints I've found is [here](testpoints.md).

For now no other test points that are easily and work accessible are available.




