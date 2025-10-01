<h1 align="center">Root Hiding</h1>

In this guide, we'll learn how to hide root from apps.
This isn't a step-by-step guide on how to bypass root detection.
This will only list detection points and how to bypass them.


## Basic Root Detection
- Denylist feature of Magisk or [Umount](https://kernelsu.org/guide/app-profile.html#umount-modules) feature of KernelSU.
- [ReZygisk](https://github.com/PerformanC/ReZygisk) with [TreatWheel](https://t.me/zygote64_32) or [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) with [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases) to enhance Denylist/Umount functionality.
- [SUSFS Module](https://github.com/sidex15/susfs4ksu-module) if kernel is patched with KernelSU and [SUSFS](https://gitlab.com/simonpunk/susfs4ksu).


## Applist Detection
- [Hide My Applist](https://t.me/HideMyApplist) LSPosed module.
- Prefer using Blacklist mode of HideMyApplist.


## Bootloader Unlocked Detection
- [Tricky Store](https://github.com/5ec1cff/TrickyStore) to spoof bootloader status, security patch, and broken TEE.
- [Tricky Addon](https://github.com/KOWX712/Tricky-Addon-Update-Target-List) is an easy to use webui for Tricky Store.


## Miscellaneous Detections
- [Device ID Changer](https://github.com/sidex15/deviceidchanger) to bypass DeviceID/SSAID ban.
- [bindhosts](https://github.com/bindhosts/bindhosts) with [bypassroot hosts](https://github.com/Rem01Gaming/hosts/blob/main/bypassroot) to bypass protectt.ai and zimperium detection.
- [BetterKnownInstalled](https://github.com/Pixel-Props/BetterKnownInstalled) to bypass DroidGuard's UNKNOWN_INSTALLED status.


## Recommendations and Tips
- Hiding Root and Fixing Play Integrity aren't the same thing.
- Don't blindly trust Root Detector apps, they can be false-positive.
- Prefer using KernelSU if possible.
- ReZygisk is preferred since it's Open Source.
- [LSPosed](https://github.com/JingMatrix/LSPosed) fork which is still open source and maintianed.
- GKI 2.0 devices can get KernelSU and SUSFS patched kernels from [here](https://github.com/Z7G4N1U8/GKI_KernelSU_SUSFS).
- If you're building kernel with KernelSU yourself, consider adding [SUSFS](https://gitlab.com/simonpunk/susfs4ksu).


## Support Groups
- [Oasis of Peace](https://t.me/Z7G4N1U8_Chat)
- [RootThings](https://t.me/Rootthingschat)
- [Blank's Assistance](https://t.me/BlankAssistance)
- [Yuri's Chat](https://t.me/yurichattt)
