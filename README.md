# Chunithm Tools

For more information please refer to [this page](https://zedfish.github.io/chuni-tools/?lang=en_US)

若要取得更多資訊，請參考[此頁面](https://zedfish.github.io/chuni-tools/?lang=zh_TW)

## Credits

This project is a fork of [Dogeon188's chuni-tools](https://github.com/Dogeon188/chuni-tools). The project seems to no longer be maintained so I decided to fork and maintain my own version.

The chart constant data aggregated from the Official [Chunithm Music Data](https://chunithm.sega.jp/storage/json/music.json) and [Tachi](https://github.com/zkldi/Tachi).

## License

The original project by Dogeon188 has no explicit license. Technically I'm violating copyright law so I'll try to get in contact with them to sort this out.

## Development

**Setup https certificate** <br>
chuni-tools can only be used with https. Install [mkcert](https://github.com/FiloSottile/mkcert) and run the following.
```sh
mkdir .cert
cd .cert
mkcert -cert-file cert.pem -key-file key.pem localhost
cd ..
```

**Init Repo**
Install the required packages and initialize a .env file
```sh
npm install
# OR
bun install

# Init a .env.development file
cp .env.development.example .env.development
```

**Run Dev Environment**
```sh
npm run dev
# OR
bun dev
```
chuni-tools should be running on localhost and can be accessed at `https://localhost:5173`. You may get a warning about insecure certificate, you can safely ignore it.

**Production Environment**
Deployment of the production environment is handled by github actions defined in .github