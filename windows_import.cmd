set "SRC_FILENAME=%LocalAppdata%\Google\Chrome\User Data\Default\Bookmarks"
set "DEST_FILENAME=%~dp0Bookmarks.js"
echo window.chromeBookmarks => "%DEST_FILENAME%"
type "%SRC_FILENAME%" >> "%DEST_FILENAME%"
