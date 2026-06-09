# template-reactnativewindtsx

(WORK-IN-PROGRESS)

```
belum install firebase..

npm install firebase
```



template sederhana react native + nativewind + multipage

```
git clone https://github.com/irfanhku/template-reactnativewindtsx.git

cd template-reactnativewindtsx

npm install

npx expo start
```

fix nanti cara install and build...

```

// optional but useful
npm install -g expo-cli

// install eas-cli, biar sambung ke expo web

npm install -g eas-cli

eas --version

//

eas login

// edit nama app di app.json, package.json, package-lock.json

eas build:configure

// pilih all-android-ios

eas build -p android --profile preview

// pillhan build keystore dll...

```


kalau mau edit & ubah git and connect to another repo

```
cd template-..{press tab aja for quick cari di cmd}

rm -rf .git
or for windows
rmdir /s /q .git

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <new-repo-url>
git push -u origin main

```

---

related docs

https://www.nativewind.dev/docs/getting-started/installation

https://docs.expo.dev/tutorial/create-your-first-app/



