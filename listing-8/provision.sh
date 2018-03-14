sudo apt-get update
sudo apt-get upgrade -y

sudo apt-get -y install build-essential

echo "============== Nodejs =================="
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y --force-yes nodejs

echo "============== Support for xvfb =================="
sudo apt-get install -y xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib
