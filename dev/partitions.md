### Partitions

This is a list of partitions that are of interest for this device:

```
Available partitions:
DaHandler - misc
DaHandler - para
DaHandler - expdb
DaHandler - frp
DaHandler - hw
DaHandler - utags
DaHandler - utagsBackup
DaHandler - vbmeta_a
DaHandler - vbmeta_system_a
DaHandler - vbmeta_vendor_a
DaHandler - vbmeta_b
DaHandler - vbmeta_system_b
DaHandler - vbmeta_vendor_b
DaHandler - md_udc
DaHandler - metadata
DaHandler - nvcfg
DaHandler - nvdata
DaHandler - persist
DaHandler - protect1
DaHandler - protect2
DaHandler - seccfg
DaHandler - md1img_a
DaHandler - spmfw_a
DaHandler - scp_a
DaHandler - sspm_a
DaHandler - gz_a
DaHandler - lk_a
DaHandler - boot_a
DaHandler - vendor_boot_a
DaHandler - dtbo_a
DaHandler - tee_a
DaHandler - sec1
DaHandler - proinfo
DaHandler - boot_para
DaHandler - nvram
DaHandler - rfcal
DaHandler - cid
DaHandler - sp
DaHandler - elable
DaHandler - prodper
DaHandler - kpan
DaHandler - logs
DaHandler - carrier
DaHandler - pad5
DaHandler - pad4
DaHandler - pad1
DaHandler - pad0
DaHandler - kdebuginfo
DaHandler - logo
DaHandler - pad2
DaHandler - md1img_b
DaHandler - spmfw_b
DaHandler - scp_b
DaHandler - sspm_b
DaHandler - gz_b
DaHandler - lk_b
DaHandler - boot_b
DaHandler - vendor_boot_b
DaHandler - dtbo_b
DaHandler - tee_b
DaHandler - pad3
DaHandler - super
DaHandler - userdata
DaHandler - otp
DaHandler - flashinfo

```

* **`lk`** -- LittleKernel partition, cannot be written
* **`vbmeta`** -- VBMeta partition, can be flashed via mtkclient, but gives a REDSTATE
* **`boot`** -- Boot partition, main interest for root access and can be written via mtkclient, but gives a REDSTATE


* **`nvram`** -- Contains the IMEI and other device specific information, make a backup
* **`elable`** -- Carrier Lock partition, can be flashed. Flash empty elable.img from firmware to remove carrier lock. Could be a typo of e-label. 
* **`frp`** Factory Reset Protection partition. Also saves if OEM Unlocked is enabled in Developer settings. Can be reset with spefici tools, and maybe mtkclient (not tested). 

To backup all the important partitions, use the [Backup Critical Partition](https://github.com/moto-penangf/fuckyoumoto/blob/main/backup_critical_partitions.sh) script from [DiabloSat](https://github.com/moto-penangf/fuckyoumoto/)