//     Commands
___________________  Connect with Phone __________________________________
in Device Manager -->> Universal Serial Bus Devices -->> ADB Interface    |     -->> To verify phone connection
___________   Command Prompt   ____________                               |
adb devices                                                               |   -->> list all connected devices
_________  In Phone ________________                                      |
Tap on the BUILD to enable Developer Option                               |  
In Developer Option --->> Enable USB Debugging                            |
__________________________________________________________________________|

______________  Connect to Virtual Device / Simulator  ____________

npx react-native init folder-Name                                  |
cd folder-Name                                                     |
npm install                                                        |
_____________ In the COMMAND PROMPT  ____________                  |
cd C:\Users\Ujjawal Singh\AppData\Local\Android\Sdk\emulator       |
emulator -list-avds                                                |    -->> get the list of devices
emulator -avd Pixel_7a                                             |    -->> run the device as simulator
_______  RUN CODE  __________________                              |
npx react-native run-android                                       |
`        (App.tsx) will be the main file                           |
___________________________________________________________________|


__________   Connect with Expo   ________________________
npm install -g expo-cli                                  |      -->> install expo
expo --version                                           |        -->> verify installatiom
expo --help                                              |        -->> get all commands
expo inti folderName                                     |
npm i react-native-webview                               |      -->> install webview to run render webpages
npx expo start                                           |        -->> run android
_________________________________________________________|