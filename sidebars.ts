import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'About',
      id: 'about',
    },
    {
      type: 'category',
      label: 'Info',
      items: ['info/device-info', 'info/carrier_lock', 'info/flash_stock', 'info/firmware-rollback', 'info/avb', 'info/softbrick', 'info/dm-verity', 'info/disassembly', 'info/paks', 'info/things_to_avoid']
    },
    {
      type: 'category',
      label: 'Boot modes',
      items: ['modes/fastboot', 'modes/preloader', 'modes/pcs', 'modes/metamode']
    },
    {
      type: 'category',
      label: 'Development',
      items: ['dev/bootloader', 'dev/partitions', 'dev/testpoints', 'dev/uart', 'dev/jtag', 'dev/mtkclient', 'dev/oem-key-algorithm', 'dev/touchscreen' , 'dev/logs', 'dev/decompilation', 'dev/tools']
    },
    {
      type: 'category',
      label: 'Modding',
      items: ['modding/custom-bootloader', 'modding/custom-recovery', 'modding/root', 'modding/gsi', 'modding/disable-bootloader-warnings', 'modding/debloatedmotoweed', 'modding/gcam']
    },
    {
      type: 'category',
      label: 'GSI Roms',
      items: ['gsi_roms/info', 'gsi_roms/rating']
    },
    {
      type: 'category',
      label: 'Schematics',
      items: ['schematic/keypad', 'schematic/control-if']
    },
    {
      type: 'doc',
      label: 'FAQ',
      id: 'info/faq'
    },
    {
      type: 'link',
      label: 'Forum (More info)',
      href: 'https://github.com/orgs/moto-penangf/discussions'
    }
  ],
};

export default sidebars;
