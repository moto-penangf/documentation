---
title: PAKS
---

## What is PAKS?

Paks is a system application that comes in every motorola phone. It is a Mobile Device Management app (MDM), which serve the purpose mainly in IT and carrier locked devices to verify the phone integrity and status.<br/><br/>
The app, being an admin of the device, has the possibility to completely disable the device if suspicious activity is detected (in the context it serves).<br/>
For example, for phones being payed by instalments, it can disable the device if the consumer stops paying.<br/>

Could also be another one of the Moto APPS that install bloatware.<br/>
Verification happens right after the device is first connected to the internet.

## How can I remove PAKS

The only way to disable/remove PAKS is to root the device. Read [Root](../modding/root.md)

## PAKS Permissions

PAKS has access to the following permissions within the OS:

```sh
uses-permission: name='android.permission.CHANGE_NETWORK_STATE'
uses-permission: name='com.motorola.permission.ACCESS_PRODUCT_PERSIST'
uses-permission: name='android.permission.READ_PRIVILEGED_PHONE_STATE'
uses-permission: name='android.permission.RECEIVE_BOOT_COMPLETED'
uses-permission: name='android.permission.ACCESS_KEYGUARD_SECURE_STORAGE'
uses-permission: name='android.permission.DEVICE_POWER'
uses-permission: name='android.permission.MANAGE_USERS'
uses-permission: name='android.permission.CHANGE_WIFI_STATE'
uses-permission: name='android.permission.OEM_UNLOCK_STATE'
uses-permission: name='com.motorola.actions.provider.permission.READ_MODES'
uses-permission: name='com.motorola.actions.provider.permission.WRITE_MODES'
uses-permission: name='com.motorola.permission.WRITE_SECURE_SETTINGS'
uses-permission: name='com.motorola.permission.PAKS_BIND_PERMISSION'
uses-permission: name='android.permission.INSTALL_PACKAGES'
uses-permission: name='android.permission.DELETE_PACKAGES'
uses-permission: name='android.permission.MANAGE_DEVICE_ADMINS'
uses-permission: name='android.permission.MANAGE_PROFILE_AND_DEVICE_OWNERS'
uses-permission: name='android.permission.START_ACTIVITIES_FROM_BACKGROUND'
uses-permission: name='android.permission.INTERACT_ACROSS_USERS'
uses-permission: name='android.permission.QUERY_ALL_PACKAGES'
uses-permission: name='android.permission.INTERNET'
```
