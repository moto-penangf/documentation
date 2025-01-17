# Decompilation of LK and preloader


:::note
The following information is yet to be verified.<br/>
Some inaccuracy is possible.<br/>
Act at your own risk.<br/>
:::

## preloader

From the decompilation of the [preloader](https://github.com/moto-penangf/fuckyoumoto/raw/refs/heads/main/sources/preloader_penangf.bin), we get some really interesting information about brom.


### How does the preloader know how to enter brom?

The preloader checks for a specific button combination to enter download mode (which we think for us could be BROM), and if it detects said combination, the preloader enters download.

During the boot process, the function `are_dl_keys_pressed()` is called to check if the keys are pressed.

```c
...
ret = are_dl_keys_pressed();

if(ret)
{
    platform_emergency_download(timeout);
}
```

The function `platform_emergency_download(int timeout)` is defined as follows:

```c
#define MODULE "[PLFM]"

void platform_emergency_download(int timeout)
{
    pr_debug("%S emergency download mode(timeout=%d)\n", MODULE, timeout);

    platform_safe_mode(1, timeout);

    mtk_arch_reset(0);

    while(1);
}
```

The code for the download keys in the moto g23/g13 is the following:

```c
#define KPDL1 KPCOL0 // 0
#define KPDL2 PWRKEY_HW // 8
#define KPDL3 HOMEKEY_RST // 17

bool are_dl_keys_pressed()
{
    if(mtk_detect_key(KPDL1) && mtk_detect_key(KPDL2) && mtk_detect_key(KPDL3))
    {
        pr_debug("dl keys are pressed\n");
        return true;
    }

    return false;
}
```

By analyzing the logs, we were able to assign the following values to the keys:

| Key | Value |
| --- | ----- |
| [KPCOL0](./testpoints.md#front) | 0  |
| Vol- (KPCOL1)|  1   |
| Pwr  |  8   |
| Vol+ (HOMEKEY)| 17   |

The `mtk_detect_key(int key)` outputs a different string based on what button is pressed:

```c
#define MTK_PMIC_RST_KEY HOMEKEY_RST // 17

#define KEYPAD_MAX_NUM 0x47

bool mtk_detect_key(int key)
{
    bool ret;
    char msg[128];

    if (key > KEYPAD_MAX_NUM){
        return false;
    }

    if (key == PWRKEY_HW){
        ret = is_power_key_pressed();
        
        if(ret != 1){
            return false;
        }
        
        msg = "power key is pressed";
    }
    else
    {
        if (key != MTK_PMIC_RST_KEY){
            if(....) // This check is still to get decompiled, but I assume it confirms that any other key is pressed based on the context
            {
                pr_debug("key %d is pressed\n", key);
                return true;
            }
            return false;
        }

        pr_debug("mtk detect key function pmic_detect_homekey MTK_PMIC_RST_KEY = %d\n");
        ret = pmic_detect_homekey();

        if (ret != 1){
            return false;
        }

        msg = "mtk detect key pmic_detect_homekey pressed\n";

    }

    pr_debug("%s\n", msg);
    return true;
}
```

Based on these information, **there's a chance that we might get brom by pressing the following combination**: `KPCOL0 (TP) + Pwr + Vol+`



