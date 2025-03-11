---
title: Logs
---

## Get boot logs

Boot logs are useful during debug. 

Currently, we can easily get boot logs either through fastboot, or through mtkclient.

Ideally, [using UART](/dev/uart.md) would be the best solution for getting logs in real time and debugging, but it requires hardware modification.

## fuckyoumoto (though mtkclient) 
Clone the [workarounds script repo](https://github.com/fuckyoumoto/fuckyoumoto-utils) and poweroff your phone.

Run `get_logs.sh` and connect the phone to the pc.
You'll find the dumped logs inside the `exported_logs` directory

:::note
Device specific information (IMEI, SERIAL NUMBER) are automatically removed from the logs
:::

To find specific logs, look for the RTC clock timestamp.
Preloader logs start from the "Preloader Start" string and ends to the "jump to lk" one.

## Reporting an issue

If you're encoutering an issue (like your phone not booting to system), sometimes boot logs can help whoever is helping you understand better what the issue is. So, dump the logs when needed.

