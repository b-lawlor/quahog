---
title: Getting set up 🚧🦺
prev:
  link: ./installing-dependencies
next:
  link: ./testing-patches
---

::: warning :warning: WARNING
This guide assumes no prior knowledge and aims to help new Koha testers and developers get started using Koha Testing Docker with Windows Subsytem for Linux (WSL2) and VSCode.

Don't forget to refer to the [official Koha Testing Docker README](https://gitlab.com/koha-community/koha-testing-docker/-/blob/main/README.md) too.
:::

Now we are ready to setup [koha-testing-docker](https://gitlab.com/koha-community/koha-testing-docker) and get Koha fired up locally. :fire: 

## Create a project directory

Open Windows `Terminal`. If you haven't set it to default to the Debian profile, you can click on the `⌄` menu button and select Debian.

In a lot of Koha documentation the standard name for this folder is `git` but you can name it whatever you want. Make it your special little folder that sparks joy when you type it into the terminal. :sparkles:

At the Bash command prompt `user@computer:~$` use the `mkdir` command to make a directory. The command takes an argument for what to name the folder.

```bash
mkdir git
```

Use the `export` command to create a `$PROJECT_DIR` environment variable that can be used by all child processes of the shell. 

```bash
export PROJECTS_DIR=~/git
```

Now this command should show you the path of your folder
```bash
$PROJECTS_DIR
```

```output
-bash: /home/username/foldername: Is a directory`
```

::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
If you give name your folder starting with a unique letter or string then you can use the `tab` key to auto complete the path when you enter the `cd` command.

For example `cd g` + `Tab` + `Enter` would complete the `cd git` command if no other directories start with the letter `g`. If there are more than one directory that starts with the same letter `cd g` + `Tab` + `Tab` a second time will output all the directories that start with the same string.
:::

## Clone the Koha repository

Change directory into your `$PROJECTS_DIR`

```bash
cd $PROJECTS_DIR
```

```bash
git clone https://git.koha-community.org/Koha-community/Koha.git
```

::: tip :keyboard: TIP
<Badge type="tip">non-clicky way</Badge>
A full clone of Koha is large so this may take a while. You can open a new terminal tab and come back to this one later if you want.

In Windows Terminal press `ctrl` + `shift` + `d` to open a new terminal tab

You can see a list of all Windows Terminal commands if you press `ctrl` + `shift` + `p`
:::

## Clone the koha-testing-docker repository

```bash
git clone https://gitlab.com/koha-community/koha-testing-docker.git
```

## Add Bash run commands in ~/.bashrc

### Method 1: Use echo to append to the .bashrc file
Use the `echo` command to write some environment variables to your `~/.bashrc` file. Enter the following commands one line at a time. The `>>` operator redirects the output from `echo` and appends it to the file specified.

::: danger :warning: Danger
The single `>` operator completely overwrites the file if it exists, also known as [clobbering](https://en.wikipedia.org/wiki/Clobbering) which could be disasterous.
:::

```bash
echo 'export PROJECTS_DIR=$PROJECTS_DIR' >> ~/.bashrc
echo 'export SYNC_REPO=$PROJECTS_DIR/koha' >> ~/.bashrc
echo 'export KTD_HOME=$PROJECTS_DIR/koha-testing-docker' >> ~/.bashrc
echo 'export PATH=$PATH:$KTD_HOME/bin' >> ~/.bashrc
echo 'export LOCAL_USER_ID=$(id -u)' >> ~/.bashrc
```

::: tip :wrench: TIP
Use `cat` to print the contents of a file to the terminal
```bash
cat ~/.bashrc
```
:::

At the bottom of the output you should see those commands.
```output
export PROJECTS_DIR=/home/username/foldername
export SYNC_REPO=$PROJECTS_DIR/koha
export KTD_HOME=$PROJECTS_DIR/koha-testing-docker
export KOHA_TESTING_DOCKER_HOME=$PROJECTS_DIR/koha-testing-docker
export PATH=$PATH:$KTD_HOME/bin
export LOCAL_USER_ID=$(id -u)
```

These are all the paths that `koha-testing-docker` needs to use. 

The `source` command makes these environment variables accessible in the current terminal. Alternatively you could close the current terminal and open a new onefor the changes to take effect.
```bash 
source ~/.bashrc
```

Using `echo` and `>>` is a convenient way to append lines to your `~/.bashrc` file, but it is also good to learn how to edit the `~/.bashrc` directly using the `nano` terminal based text editor.

### Method 2: Use nano terminal based text editor

Use sudo to open `~/.bashrc` in `nano` so that you will be able to make changes to the file
```bash
sudo nano ~/.bashrc
```

Sudo will prompt for the password you set up when you installed WSL.
```output
[sudo] password for username:
```

Now you are in `nano`, a terminal based text editor. At the top of the screen you should see the name of the program `GNU nano 5.4` and the path of the file you are editing `/home/username/.bashrc`. 

Scroll down to the bottom of the file using the `down arrow key` and type or paste in the required `export` bash run commands such as `export SYNC_REPO=$PROJECTS_DIR/koha`

Keyboard commands for `nano` are conveniently displayed at the bottom of the screen. `^` indicates the `ctrl` key. Press `^` + `x` to exit. If you have made any changes to the file `nano` will ask if you want to `Save modified buffer?` then press `y` + `Enter` to save the changes or `n` + `Enter` to discard changes.

::: danger :warning: Danger
It's good practice to edit files in a terminal based text editor, but be careful. 

Right clicking in the terminal is a shortcut for paste.
:::

## Add your user to the docker group

```bash
sudo usermod -aG docker ${USER}
```

You can use `grep` to search through the `/etc/group` file to see that your username has been added to the group.

```bash
grep docker /etc/group
```

```output
docker:x:1001:your_username
```

## Create and edit koha-testing-docker /.env file

Change directory into the koha-testing-docker git repository
```bash
cd $PROJECTS_DIR/koha-testing-docker
```

Use `cp` to copy the example .env file to the root of the repo
```bash
cp env/defaults.env .env
```

Use `nano` to edit your `.env` file
```bash
sudo nano .env
```

Set the required `ktd` environment variables for signing off and submitting patches
```nano
GIT_BZ_PASSWORD=*************
GIT_BZ_USER=your_bz_username
GIT_USER_EMAIL=your_email_address
GIT_USER_NAME="Your Name"
```

## Some basic commands

You can read more about [ktd commands](https://gitlab.com/koha-community/koha-testing-docker#basic-usage) on the repo's README, but here are the essentials to start.

`ktd up` Start up the containers and network

::: danger :warning: Danger
Leave this shell open or ktd will be stopped
:::

`ctrl` + `shift` + `~` open a new terminal tab in VSCode

`ktd --shell` Open the shell inside ktd

`ktd down` Shutdown everything gracefully