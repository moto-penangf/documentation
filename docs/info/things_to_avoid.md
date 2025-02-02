---
title: Stuff to avoid at all cost
---

CAREFULLY READ ALL THIS SECTION BEFORE CONTINUING WITH THE NEXT CATEGORIES.

## Not reading all the warning in the documentation

We have put many warning in the documentation because of the risk we know of. Don't ignore them.

## Don't try doing stuff not documented if you don't know what you're doing

You might ruin your device. Only act if you're capable of doing it, and don't blame us for any damage you might cause.

## Flash preloader

NEVER flash the preloader, especially if you don't know what you're doing!

Only flash preloader if you're on stock firmware, and you're upgrading the phone.

Even then, make sure you're not flashing a version of the preloader older than the one in the phone, or you'll get an hard brick because of ANTI-ROLLBACK.

## Mess up with the partitions

Don't mess up with the partitions, especially with fastboot.
Generally, you only want to flash system, boot, vbmeta and vendor_boot.

Don't try flashing to other partitions, as it might result to a softbrick or, in the worst case, an hardbrick.

If you flash lk, be careful.

## Flashing through mtkclient while bootloader is locked.

You'll get a RedState. Unlock the bootloader first.

## Flashing an older version of the firmware.

Don't flash an older version of the firmware, as it might result to a hardbrick.
If you want to test downgrading, only flash super and vbmeta. Avoid flashing lk, preloader, md1 and other firmware files.

## Don't short random test points when disassembling the phone

This might result in a dead phone because of frying some chips.

## Don't erase partitions randomly

Again, this will end up bricking the phone.
