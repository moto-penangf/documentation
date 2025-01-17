## How to remove carrier lock?

Carrier lock on this device is quite easy to remove, so much that even the official firmware supports this option.

* [SP Flash Tool](#using-sp-flash-tool-not-recommended) (Not recommended) 
* [mtkclient](#using-mtkclient-recommended) (Recommended)
* [fuckyoumoto](#alternative-method) (Alternative method)

## Using SP Flash Tool (Not recommended)

1. Download the latest firmware from [Lolinet](https://mirrors.lolinet.com/firmware/lenomola/2023/penangf/official/)
2. Download SP Flash Tool [here](https://github.com/moto-penangf/penangf-sp-flash-tool/releases/tag/0.1)
3. Run the SP Flash Tool and use the scatter file (.txt) you find in the firmware under the APNv_Unlock folder
4. Select only preloader and elable partitions
5. Click on Download (Without Format)
6. Connect the phone (completely powered off) and let it flash
7. When it finishes flashing, remove the cable and the carrier lock should be gone

## Using mtkclient (Recommended)

1. Download mtkclient [here](https://github.com/bkerler/mtkclient/)
2. Download the unlock_elable.img file from the fuckyoumoto repo [here](https://github.com/moto-penangf/fuckyoumoto/raw/refs/heads/main/sources/unlock_elable.img)
3. Get the device DA file from [here](https://github.com/moto-penangf/fuckyoumoto/raw/refs/heads/main/sources/MT6768_USER.bin) and the preloader from [here](https://github.com/moto-penangf/fuckyoumoto/raw/refs/heads/main/sources/preloader_penangf.bin)
3. Run 
```sh
$ mtk w elable <path-to-unlock_elable.img> --preloader preloader_penangf.bin --loader MT6768_USER.bin`
```

## Alternative method

1. Download the fuckyoumoto repo [here](https://github.com/moto-penangf/fuckyoumoto)
2. Download python
3. Run `python3 remove_carrier_block.py`
