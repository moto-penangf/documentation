---
title: OEM key algorithm
---

## Example of a valid key
```text
311D34773D275A92F485B3C2505F411D
```

## Known information about the key
1. Key length is 32 characters
2. The key can only consist of numbers and letters from A to F letters (HEX format) 
3. It is the first half of a sha256
4. The soc_id first half (which you can get with `fastboot oem get_key`) is 32 characters long, and gets hashed with sha256. The input of the sha256 is the unlock key repeated two times to make a 64 characters long string.


Below, a simple flowchart to show how unlocking the bootloader work:
![Flowchart](../../static/assets/unlock_key_flowchart.png)

## Useful links
- [fuckyoumoto repo](https://github.com/moto-penangf/fuckyoumoto)
