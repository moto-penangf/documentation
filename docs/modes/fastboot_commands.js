export const commands = [
  {
    command: "fastboot getvar all",
    description: "Get all device variables",
    output: `$ fastboot getvar all
(bootloader) max-download-size: 0x8000000
(bootloader) imei2: [REMOVED]
(bootloader) imei: [REMOVED]
(bootloader) variant:
  (bootloader) logical-block-size: 0x200
(bootloader) erase-block-size: 0x80000
(bootloader) hw-revision: ca00
(bootloader) battery-soc-ok: yes
(bootloader) battery-voltage: 4006mV
(bootloader) partition-size:sgpt: 8000
(bootloader) partition-type:sgpt: raw data
(bootloader) partition-size:flashinfo: 1000000
(bootloader) partition-type:flashinfo: raw data
(bootloader) partition-size:otp: 2b00000
(bootloader) partition-type:otp: raw data
(bootloader) partition-size:userdata: 1a864f8000
(bootloader) partition-type:userdata: f2fs
(bootloader) partition-size:super: 200000000
(bootloader) partition-type:super: raw data
(bootloader) partition-size:pad3: 100000
(bootloader) partition-type:pad3: raw data
(bootloader) partition-size:tee_b: 500000
(bootloader) partition-type:tee_b: raw data
(bootloader) partition-size:dtbo_b: 800000
(bootloader) partition-type:dtbo_b: raw data
(bootloader) partition-size:vendor_boot_b: 4000000
(bootloader) partition-type:vendor_boot_b: raw data
(bootloader) partition-size:boot_b: 2000000
(bootloader) partition-type:boot_b: raw data
(bootloader) partition-size:lk_b: 200000
(bootloader) partition-type:lk_b: raw data
(bootloader) partition-size:gz_b: 1000000
(bootloader) partition-type:gz_b: raw data
(bootloader) partition-size:sspm_b: 100000
(bootloader) partition-type:sspm_b: raw data
(bootloader) partition-size:scp_b: 600000
(bootloader) partition-type:scp_b: raw data
(bootloader) partition-size:spmfw_b: 100000
(bootloader) partition-type:spmfw_b: raw data
(bootloader) partition-size:md1img_b: 8000000
(bootloader) partition-type:md1img_b: raw data
(bootloader) partition-size:pad2: 200000
(bootloader) partition-type:pad2: raw data
(bootloader) partition-size:logo: 800000
(bootloader) partition-type:logo: raw data
(bootloader) partition-size:kdebuginfo: 6400000
(bootloader) partition-type:kdebuginfo: raw data
(bootloader) partition-size:pad0: 80000
(bootloader) partition-type:pad0: raw data
(bootloader) partition-size:pad1: 80000
(bootloader) partition-type:pad1: raw data
(bootloader) partition-size:pad4: 80000
(bootloader) partition-type:pad4: raw data
(bootloader) partition-size:pad5: 80000
(bootloader) partition-type:pad5: raw data
(bootloader) partition-size:carrier: 1000000
(bootloader) partition-type:carrier: raw data
(bootloader) partition-size:logs: 800000
(bootloader) partition-type:logs: raw data
(bootloader) partition-size:kpan: 800000
(bootloader) partition-type:kpan: raw data
(bootloader) partition-size:prodper: 800000
(bootloader) partition-type:prodper: raw data
(bootloader) partition-size:elable: de0000
(bootloader) partition-type:elable: raw data
(bootloader) partition-size:sp: 800000
(bootloader) partition-type:sp: raw data
(bootloader) partition-size:cid: 20000
(bootloader) partition-type:cid: raw data
(bootloader) partition-size:rfcal: 300000
(bootloader) partition-type:rfcal: raw data
(bootloader) partition-size:nvram: 4000000
(bootloader) partition-type:nvram: raw data
(bootloader) partition-size:boot_para: 1a00000
(bootloader) partition-type:boot_para: raw data
(bootloader) partition-size:proinfo: 300000
(bootloader) partition-type:proinfo: raw data
(bootloader) partition-size:sec1: 200000
(bootloader) partition-type:sec1: raw data
(bootloader) partition-size:tee_a: 600000
(bootloader) partition-type:tee_a: raw data
(bootloader) partition-size:dtbo_a: 800000
(bootloader) partition-type:dtbo_a: raw data
(bootloader) partition-size:vendor_boot_a: 4000000
(bootloader) partition-type:vendor_boot_a: raw data
(bootloader) partition-size:boot_a: 2000000
(bootloader) partition-type:boot_a: raw data
(bootloader) partition-size:lk_a: 200000
(bootloader) partition-type:lk_a: raw data
(bootloader) partition-size:gz_a: 1000000
(bootloader) partition-type:gz_a: raw data
(bootloader) partition-size:sspm_a: 100000
(bootloader) partition-type:sspm_a: raw data
(bootloader) partition-size:scp_a: 600000
(bootloader) partition-type:scp_a: raw data
(bootloader) partition-size:spmfw_a: 100000
(bootloader) partition-type:spmfw_a: raw data
(bootloader) partition-size:md1img_a: 8000000
(bootloader) partition-type:md1img_a: raw data
(bootloader) partition-size:seccfg: 800000
(bootloader) partition-type:seccfg: raw data
(bootloader) partition-size:protect2: a5e000
(bootloader) partition-type:protect2: ext4
(bootloader) partition-size:protect1: 800000
(bootloader) partition-type:protect1: ext4
(bootloader) partition-size:persist: 3000000
(bootloader) partition-type:persist: ext4
(bootloader) partition-size:nvdata: 4000000
(bootloader) partition-type:nvdata: ext4
(bootloader) partition-size:nvcfg: 2000000
(bootloader) partition-type:nvcfg: ext4
(bootloader) partition-size:metadata: 2000000
(bootloader) partition-type:metadata: raw data
(bootloader) partition-size:md_udc: 169a000
(bootloader) partition-type:md_udc: raw data
(bootloader) partition-size:vbmeta_vendor_b: 800000
(bootloader) partition-type:vbmeta_vendor_b: raw data
(bootloader) partition-size:vbmeta_system_b: 800000
(bootloader) partition-type:vbmeta_system_b: raw data
(bootloader) partition-size:vbmeta_b: 800000
(bootloader) partition-type:vbmeta_b: raw data
(bootloader) partition-size:vbmeta_vendor_a: 800000
(bootloader) partition-type:vbmeta_vendor_a: raw data
(bootloader) partition-size:vbmeta_system_a: 800000
(bootloader) partition-type:vbmeta_system_a: raw data
(bootloader) partition-size:vbmeta_a: 800000
(bootloader) partition-type:vbmeta_a: raw data
(bootloader) partition-size:utagsBackup: 80000
(bootloader) partition-type:utagsBackup: raw data
(bootloader) partition-size:utags: 80000
(bootloader) partition-type:utags: raw data
(bootloader) partition-size:hw: 800000
(bootloader) partition-type:hw: raw data
(bootloader) partition-size:frp: 100000
(bootloader) partition-type:frp: raw data
(bootloader) partition-size:expdb: 1400000
(bootloader) partition-type:expdb: raw data
(bootloader) partition-size:para: 80000
(bootloader) partition-type:para: raw data
(bootloader) partition-size:misc: 80000
(bootloader) partition-type:misc: raw data
(bootloader) partition-size:pgpt: 8000
(bootloader) partition-type:pgpt: raw data
(bootloader) partition-size:preloader_b: 80000
(bootloader) partition-type:preloader_b: raw data
(bootloader) partition-size:preloader_a: 80000
(bootloader) partition-type:preloader_a: raw data
(bootloader) partition-size:preloader: 80000
(bootloader) partition-type:preloader: raw data
(bootloader) serialno: ZY22GHW7H2
(bootloader) off-mode-charge: 1
(bootloader) warranty: no
(bootloader) unlocked: no
(bootloader) secure: yes
(bootloader) kernel: lk
(bootloader) product: penangf
(bootloader) is-userspace: no
(bootloader) slot-retry-count:b: 7
(bootloader) slot-retry-count:a: 7
(bootloader) slot-unbootable:b: no
(bootloader) slot-unbootable:a: no
(bootloader) slot-successful:b: no
(bootloader) slot-successful:a: yes
(bootloader) slot-count: 2
(bootloader) current-slot: a
(bootloader) has-slot:sgpt: no
(bootloader) has-slot:flashinfo: no
(bootloader) has-slot:otp: no
(bootloader) has-slot:userdata: no
(bootloader) has-slot:super: no
(bootloader) has-slot:pad3: no
(bootloader) has-slot:pad2: no
(bootloader) has-slot:logo: no
(bootloader) has-slot:kdebuginfo: no
(bootloader) has-slot:pad0: no
(bootloader) has-slot:pad1: no
(bootloader) has-slot:pad4: no
(bootloader) has-slot:pad5: no
(bootloader) has-slot:carrier: no
(bootloader) has-slot:logs: no
(bootloader) has-slot:kpan: no
(bootloader) has-slot:prodper: no
(bootloader) has-slot:elable: no
(bootloader) has-slot:sp: no
(bootloader) has-slot:cid: no
(bootloader) has-slot:rfcal: no
(bootloader) has-slot:nvram: no
(bootloader) has-slot:boot_para: no
(bootloader) has-slot:proinfo: no
(bootloader) has-slot:sec1: no
(bootloader) has-slot:tee: yes
(bootloader) has-slot:dtbo: yes
(bootloader) has-slot:vendor_boot: yes
(bootloader) has-slot:boot: yes
(bootloader) has-slot:lk: yes
(bootloader) has-slot:gz: yes
(bootloader) has-slot:sspm: yes
(bootloader) has-slot:scp: yes
(bootloader) has-slot:spmfw: yes
(bootloader) has-slot:md1img: yes
(bootloader) has-slot:seccfg: no
(bootloader) has-slot:protect2: no
(bootloader) has-slot:protect1: no
(bootloader) has-slot:persist: no
(bootloader) has-slot:nvdata: no
(bootloader) has-slot:nvcfg: no
(bootloader) has-slot:metadata: no
(bootloader) has-slot:md_udc: no
(bootloader) has-slot:vbmeta_vendor: yes
(bootloader) has-slot:vbmeta_system: yes
(bootloader) has-slot:vbmeta: yes
(bootloader) has-slot:utagsBackup: no
(bootloader) has-slot:utags: no
(bootloader) has-slot:hw: no
(bootloader) has-slot:frp: no
(bootloader) has-slot:expdb: no
(bootloader) has-slot:para: no
(bootloader) has-slot:misc: no
(bootloader) has-slot:pgpt: no
(bootloader) has-slot:preloader: yes
(bootloader) version-baseband: MOLY.LR12A.R3.MP.V241.4.P42
(bootloader) version-bootloader: penangf-b037470-20240724083453-20241114
(bootloader) version-preloader:
  (bootloader) version: 0.5
all: Done!!
Finished. Total time: 0.008s`,
  },
  {
    command: "fastboot flashing get_unlock_ability",
    description: "Information about device support for bootloader unlocking",
    output: `$ fastboot flashing get_unlock_ability
(bootloader) unlock_ability = 16777216
OKAY [  0.005s]
Finished. Total time: 0.005s`
},
  {
    command: "fastboot flashing unlock",
    description: "Unlock bootloader (key must be already specified)",
    output: `$ fastboot flashing unlock
(bootloader) Start unlock flow
(bootloader) 061A757D042B2A378D9761E60C9D3FBC
(bootloader) start fastboot unlock
(bootloader) 87f3aef774eb3edbcdef39e2e94d05c9
(bootloader) Unlock Success
(bootloader) fastboot unlock success
OKAY [  5.320s]
Finished. Total time: 5.320s`
  },
  {
    command: "fastboot reboot",
    description: "Reboot device",
    output: `$ fastboot reboot
Rebooting                                          OKAY [  0.000s]
Finished. Total time: 0.050s`
},
  {
    command: "fastboot oem shutdown",
    description: "Shutdown the phone",
    output: ``
  },
  {
    command: "fastboot oem key <KEY>",
    description: "Set bootloader unlock key",
    output: `$ fastboot oem key 061A757D042B2A378D9761E60C9D3FBC
(bootloader) open fastboot unlock
OKAY [  0.000s]
Finished. Total time: 0.000s`
},
  {
    command: "fastboot oem get_key",
    description: "Returns the first part of the soc_id",
    output: `$ fastboot oem get_key
(bootloader) 061A757D042B2A378D9761E60C9D3FBC
(bootloader) finish dump
OKAY [  0.000s]
  Finished. Total time: 0.000s`
},
  {
    command: "fastboot oem get_socid",
    description: "Returns the unique id of the SoC",
    output: `$ fastboot oem get_socid
(bootloader) dump socid...
(bootloader) 061A757D042B2A378D9761E60C9D3FBC
(bootloader) D82792A4F5AA27C029815B011269AB8A
(bootloader) finish dump
OKAY [  0.000s]
Finished. Total time: 0.000s`
  },
  {
    command: "fastboot oem p2u <on/off>",
    description: "Enabled or disables UART logs",
    output: `$ fastboot oem p2u on
OKAY [  0.003s]
Finished. Total time: 0.003s

$ fastboot oem p2u off
OKAY [  0.003s]
Finished. Total time: 0.003s`
  },
  {
    command: "fastboot oem dump_pllk_log",
    description: "Dumps preloader and lk logs",
    output: `$ fastboot oem dump_pllk_log
...
[67674]
(bootloader)  [fastboot: command
(bootloader) buf]-[oem p2u off]-[
(bootloader) len=11]
[67675] [fa
(bootloader) stboot]-[download_ba
(bootloader) se:0x4e000000]-[down
(bootloader) load_size:0x0]
[676
(bootloader) 76] [Cmd process]-[b
(bootloader) uf:oem p2u off]-[len
(bootloader) Buf: off]
[SEC_USBD
OKAY [  0.290s]
Finished. Total time: 0.290s`
  },
  {
    command: "fastboot oem lks",
    description: "Return the lockstate (1 -> locked, 0 -> unlocked)",
    output: `$ fastboot oem lks
(bootloader) lks = 1
OKAY [  0.007s]
Finished. Total time: 0.007s`
  },
  {
    command: "fastboot oem scp_status",
    description: "Unknown. Fastboot crashes",
    output: `$ fastboot oem scp_status
FAILED (Status read failed (No such device))
fastboot: error: Command failed`
  },
  {
    command: "fastboot oem scp_log_thru_ap_uart <1/0>",
    description: "Redirects SCP logs to UART",
    output: `$ fastboot oem scp_log_thru_ap_uart 1
(bootloader) SCP log thru AP UART: on
(bootloader) Please reboot to apply the change.
OKAY [  0.005s]
Finished. Total time: 0.005s

$ fastboot oem scp_log_thru_ap_uart 0
(bootloader) SCP log thru AP UART: off
(bootloader) Please reboot to apply the change.
OKAY [  0.005s]
Finished. Total time: 0.005s`
  },
  {
    command: "fastboot oem usb2jtag <1/0>",
    description: "I think it allows to use a modded usb cable as a JTAG?",
    output: `$ fastboot oem usb2jtag 1
(bootloader) Enable USB2JTAG
(bootloader) rebooting device for usb2jtag support..
OKAY [  0.005s]
Finished. Total time: 0.005s

$ fastboot oem usb2jtag 0
(bootloader) Disable USB2JTAG
(bootloader) rebooting device for usb2jtag support..
OKAY [  0.005s]
Finished. Total time: 0.005s`
  }
]
