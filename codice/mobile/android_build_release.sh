ionic cordova build android --prod --release 
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key/my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name 
rm release/android/*.apk
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk release/android/Elan-CoachingApp.$(date +"%Y%m%d_%H%M%S").apk
