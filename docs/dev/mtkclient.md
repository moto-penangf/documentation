---
title: MtkClient
---

# MtkClient

:::info
More information can be found in the [issue for the mtkclient repository](https://github.com/bkerler/mtkclient/issues/1355)
:::

## Security mechanisms info
````text
SBC enabled: True
SLA enabled: False
DAA enabled: True
````
- **SBC (Secure Boot Check)** - During device booting, the SBC checks the digital signatures of software components such as the bootloader, operating system kernel, and others. If the signature is invalid or missing, the device boot is aborted.
- **SLA (Serial Link Authentication)** - An authentication mechanism that verifies the authenticity of a connection between a device and a computer (or other device) during firmware, debugging, or other operations that require a connection.
- **DAA (Download Agent Authentication)** - Checking the DA Agent for authenticity used to flash the device.

## DA Agents
[Download all DA agents](https://github.com/fuckyoumoto/fuckyoumoto-utils/tree/main/sources)

The device has DAA (Download Agent Authentication) and SBC (Secure Boot Check) enabled, requiring a proper DA file to interact with it using mtkclient.

There are 2 different DA agents available to our device

### MT6768_USER

Found in every firmware archive.
It is [possible to flash unprotected partitions](partitions.md), most commands are available.

```shell
$ mtk printgpt --loader ./sources/MT6768_USER.bin
...
DAXFlash - DA SLA is enabled
No valid sla key found, trying dummy auth ....
SLA Signature was accepted.
...
DAXFlash - [LIB]: Error on sending data: DA hash mismatch (0xc0070004)
DAXFlash
DAXFlash - [LIB]: Error on boot to send_data, addr: 0x68000000
DAXFlash
DAXFlash - [LIB]: DA Extensions failed to enable
...
GPT Table:
-------------
misc:                Offset 0x0000000000008000, Length 0x0000000000080000
                     Flags 0x00000000, UUID f57ad330-39c2-4488-b09b-00cb43c9ccd4, Type EFI_BASIC_DATA
para:                Offset 0x0000000000088000, Length 0x0000000000080000
...
```

### DA_PL_NO_CERT_V6

Found in the archive with flash tool, which downloads RSA (official Motorola program for device recovery).

Be used **ONLY FOR FLASHING PARTITIONS**, but it is necessary to specify the exact address of the partitions at once, other commands give errors.

In **Flash Tool it can be used to flash protected partitions** (like lk), but for some reason **mtkclient can't do it.**

```shell
$ mtk wo 0x1c800000 0x200000 backups/lk_a.img --loader sources/DA_PL_NO_CERT_V6.bin
...
Error on sending parameter: Write data not allowed (0xc002000c)
```
[Read full debug logs](https://github.com/user-attachments/files/18427911/da_pl_no_cert_flash_lk.txt)

## Partition seccfg modifying
No access to writing seccfg section via DA_PL_NO_CERT or MT6768_USER

````shell
$ mtk da seccfg unlock --loader sources/MT6768_USER.bin
...
DAXFlash - [LIB]: Error on sending parameter: Write data not allowed (0xc002000c)
````
````shell
$ mtk da seccfg unlock --loader sources/DA_PL_NO_CERT_V6.bin
...
DAXFlash - [LIB]: Error on sending parameter: Write data not allowed (0xc002000c)
````
````shell
$ mtk.py wo 0x1c800000 0x200000 backups/lk_a.img --loader sources/DA_PL_NO_CERT_V6.bin 
...
DAXFlash - [LIB]: Error on sending parameter: Write data not allowed (0xc002000c)
Failed to write backups/lk_a.img to offset 0x1c800000 with length 0x200000.
````
[Read full debug logs](https://github.com/user-attachments/files/18427911/da_pl_no_cert_flash_lk.txt)

## Force BROM
Unfortunately, it looks like the firmware contains a patched Preloader, and in the event of a crash, the phone just hangs in Preloader without going to BROM.<br/>
Furthermore, BROM mode itself is disabled by efuse, so it cannot be triggered with testpoint, too.

````shell
$ mtk crash
Exploitation - Crashing da...
...
Preloader - [LIB]: upload_data failed with error: Unknown: 0x1d18
Preloader
Preloader - [LIB]: Error on uploading da data
Preloader - Status: Waiting for PreLoader VCOM, please reconnect mobile to brom mode
...
Preloader
Preloader - [LIB]: Status: Handshake failed, retrying...
Port - Device detected :)
Preloader - Get Target info
Exploitation - Crashing da...
DeviceClass
DeviceClass - [LIB]: Device disconnected

$ mtk printgpt
MTK Flash/Exploit Client Public V2.0.1 (c) B.Kerler 2018-2024

DaHandler - Please disconnect, start mtkclient and reconnect.
````
