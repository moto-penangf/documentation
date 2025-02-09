---
title: Bootloader
---

## Unlock bootloader

:::note
[Updated 31.01.2025]

We finally managed to find out the key generation algorithm and you can unlock the bootloader via fastboot!
:::

### Discoveries
- [Bootloader unlock](#bootloader-unlock)

### Archive:
- [Official unlocking method?](#official-unlocking-method)
- [Fastboot?](#with-fastboot)
- [mtkclient](#using-mtkclient)


### Bootloader unlock
:::note
You can also use [**this website**](https://html-preview.github.io/?url=https://github.com/cxzstuff/stuff/blob/main/Moto-G23-G13-oem-key2.html) to generate the key instead of using the script if you can't use python. 

Thanks to [**@cxzstuff**](https://github.com/cxzstuff) for making it.
:::
1. Enable "OEM Unlocking" in developer settings
2. Clone repository [fuckyoumoto](https://github.com/moto-penangf/fuckyoumoto)
3. Boot the phone to [fastboot mode](../modes/fastboot.mdx)
4. Get the first part of the soc_id
    ```shell
    $ fastboot oem get_key
   
    (bootloader) 061A757D042B2A378D9761E60C9D3FBC
    (bootloader) finish dump
    OKAY [  0.003s]
    Finished. Total time: 0.003s
    ```
5. Run the ```oem_keygen.py``` script to generate the oem key, specifying the received key via the argument
    ```shell
    $ python oem_keygen.py 061A757D042B2A378D9761E60C9D3FBC
   
    To hash:  061A757D042B2A378D9761E60C9D3FBC061A757D042B2A378D9761E60C9D3FBC
    Hash:  87f3aef774eb3edbcdef39e2e94d05c98d7fd1b5db8e7623345412390e1db289
    Possible keys:
    87f3aef774eb3edbcdef39e2e94d05c9
    8d7fd1b5db8e7623345412390e1db289
    Capitalized:
    87F3AEF774EB3EDBCDEF39E2E94D05C9
    8D7FD1B5DB8E7623345412390E1DB289
    ```
6. Copy the first generated oem key and specify it with the ```fastboot oem key <KEY>``` command and try unlocking the bootloader
    ````shell
    $ fastboot oem key 87f3aef774eb3edbcdef39e2e94d05c9 
   
    (bootloader) open fastboot unlock
    OKAY [  0.000s]
    Finished. Total time: 0.000s
    ````
   
    ````shell
    $ fastboot flashing unlock
   
    (bootloader) Start unlock flow
    (bootloader) 061A757D042B2A378D9761E60C9D3FBC
    (bootloader) start fastboot unlock
    (bootloader) 87f3aef774eb3edbcdef39e2e94d05c9
    (bootloader) Unlock Success
    (bootloader) fastboot unlock success
    OKAY [  5.320s]
    Finished. Total time: 5.320s
    ````

7. Checking bootloader unlocking
    ````shell
    $ fastboot oem lks
   
    (bootloader) lks = 0
    OKAY [  0.005s]
    Finished. Total time: 0.005s
    ````

8. Flash custom logo.bin (Optional)

   [Download logo.bin](../../static/assets/modding/logo.bin)

   ```shell
   $ fastboot flash logo logo-5fa2e5b8652ffaebad2bcc6768530fae.bin
   ```
   
9. Flash custom bootloader (HIGHLY RECOMMENDED)
   [Go to guide](../modding/custom-bootloader.md)

## Archive (Old information)

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

In this case the number is equal to 2^24 (24th bit), which seem to either mean **unlockable under certain conditions**, or simply an overflow/bug in fastboot when the bootloader can be unlocked. 

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

Something interesting happens when installing a key without first doing `fastboot oem get_key`, and then running `fastboot flashing unlock`

```sh
$ fastboot oem key **1A****042B2A****97***60C***FBC
(bootloader) open fastboot unlock
OKAY [  0.000s]
Finished. Total time: 0.000s

$ fastboot flashing unlock
(bootloader) Start unlock flow

(bootloader)
(bootloader) start fastboot unlock
(bootloader) **1A****042B2A****97***60C***FBC
FAILED (remote: 'Unlock key code is incorrect!')
fastboot: error: Command failed
```

The first line (which is the key fastboot knoes and has to verify against the second key appearing) is completely empty. 

Decompiling LK it's clear that it suppose to be filled by the key (which is also the first part of the SoC ID) that has to be stored inside the global variable before everything else. 

I suspect there's a possibility that fastboot hashes an empty 32 character buffer, and could possibly lead to some exploitation of either the sha256 function or the copy of the hash into a temporary buffer.<br/>
It is confirmed that feeding the first 32 characters of the hash of an empty string as the key doesn't unlock the bootloader.

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
BROM mode has been confirmed to have been disabled by efuse, so we cannot access it.


**UART:**<br/>
To use UART, refer to [UART](/dev/uart.md)<br/>

The list of the testpoints I've found is [here](testpoints.mdx).
