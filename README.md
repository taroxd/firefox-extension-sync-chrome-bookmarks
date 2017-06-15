Sync Chrome Bookmarks
==
Remove all bookmarks and then import bookmarks from chrome.

**WARNING**: All of your current bookmarks will be removed! **BACKUP AND USE WITH CAUTION!**

## Usage
1. `git clone https://github.com/taroxd/firefox-extension-sync-chrome-bookmarks`
2. Copy your chrome bookmark file to firefox-extension-sync-chrome-bookmarks folder, and rename it to `Bookmarks.js`.  
   On Windows, this file is typically located at `%LocalAppdata%\Google\Chrome\User Data\Default\Bookmarks`  
   This step must be done manually, because extensions do not have the permission to access your filesystem for the time being.
3. Install this extension temporarily.   
   For instructions on this step, please refer to <https://github.com/mdn/webextensions-examples#installing-an-example>.
4. Wait for the synchronization to finish.
```
