---
title: OEM key algorithm
---

:::note
In the process of learning new information. The information may be incorrect.

If you have any information that you think might be useful - [send a message in the forum topic “OEM key generation algorithm”](https://github.com/orgs/moto-penangf/discussions/10)
:::

## Example of a valid key
```text
311D34773D275A92F485B3C2505F411D
```

## Known information about the key
1. Key length 32 symbols
2. The key can only consist of numbers and Cyrillic letters
3. Very similar to an MD5 hash
4. In theory, the **serial number / IMEI / output of the ```fastboot oem get_socid```** command can be used for generation key

## MD5 Hash?
[MD5 Hash online generator](https://www.md5hashgenerator.com/)

There is a possibility that the OEM key is an md5 hash, because when generating the hash (no matter how many characters) we get the same length as a valid OEM key

| String               | MD5 Hash                          | Length |
|----------------------|-----------------------------------|--------|
| text                 | 1cb251ec0d568de6a929b520c4aed8d1  | 32     |
| TEXT                 | 61a96ffcb251bb9bf0abf8fec19d0ea8  | 32     |
| abcdef12345678901234 | 1cddda3f419e889d62234b91466400a7  | 32     |

## More input data with mtkclient
The mtkclient utility gives **not only SOC_ID** (it is a combination of two keys from the ```fastboot oem get_socid``` command), but **also outputs ME_ID, EMMC CID and so on**

This can be useful for key generation

![mtkclient-keys-info.png](../files/assets/mtkclient-keys-info.png)

## sha256?

After further analysis of the inner function of fastboot, it looks like the first 32 characters of soc_id are used for bootloader unlocking (hence why we're probably allowed to change the serial number without succeeding in exploiting this for bootloader unlock).

Some notes:
* Fastboot for some reason wants `fastboot oem key` to be run before flashing unlock, or it won't fill the SoC ID into the stack to hash it later. 

* Only the first 32 characters of the hash are used 
* The string is compared for the first 32 characters, after that it doesn't get check (it cannot be exploited though as we must use 32 character unlock keys anyway to feed the key to fastboot) 


## Useful links
- [mt6765 little-kernel source code](https://github.com/moto-penangf/lk-mt6765)
