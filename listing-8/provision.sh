sudo apt-get update
sudo apt-get upgrade -y

sudo apt-get -y install build-essential

echo "============== Nodejs =================="
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y --force-yes nodejs