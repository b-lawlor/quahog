---
title: Installing dependencies - Linux 🦾🤖
next:
  link: ./getting-set-up
---

::: warning :warning: WARNING
This guide assumes no prior knowledge and aims to help new Koha testers and developers on Linux get started using Koha Testing Docker and VSCode.

Don't forget to refer to the [official Koha Testing Docker README](https://gitlab.com/koha-community/koha-testing-docker/-/blob/main/README.md) too.

Windows users refer to [Installing dependencies 🦾🤖] (/installing-dependencies.md)

MacOS users refer to [Installing dependencies - MacOS 🦾🤖] (/installing-dependencies-macos.md)
:::

[[toc]]

## Required software
- :computer: Terminal
- :whale: Docker
- :vs: VSCode

## Install WSL2 Debian


:::tip :wrench: TIP
The terminal is an essential tool. Get used to entering commands and take note of the different parts that make up this command. `command --flags argument`

It's important to get comfortable with the command line interface because through the course of this guide you may need to open multiple shells or kind of like in [Inception](https://en.wikipedia.org/wiki/Inception) open up shells inside of shells. :rabbit::hole:

Check out this excellent [Command Line Bootcamp](https://phette.net/prez/c4l-cli-bootcamp) by Eric Phetteplace.
:::

To get started we will use the termianl to run some commands. Enter the following commands at the prompt that looks like this:

 `user@machine:~$    `

`~` is the path for the user's home directory. 

`$` indicates the begining of the command prompt. If you see commands in guides that include the `$` remember not to include that in your commands.

### Now Let's Bash some commands

Update the systems package manager and install upgrades to installed software. Depending on which Linux version you're running, `apt` might not be the correct command. 

```bash
sudo apt update && sudo apt upgrade -y
```

While you are doing this you might as well install `Git` too. You're gonna need it later.
```bash
sudo apt install git-all
```


### Some basic commands

Show the path of your present working directory
```bash
pwd
```
```output
/home/user/directory
```

Make a directory
```bash
mkdir myProject
```

```bash
cd myProject
```

You can also chain commands together if you like
```bash
mkdir myProject && cd myProject
```

List files in the current directory
```bash
ls
```

## Install Docker server

::: info :rainbow: INFO
[Docker's Install Guide](https://docs.docker.com/engine/install/#server/)
:::


Now when you launch the Terminal Docker will be available,

### Some basic docker commands

Check Docker version
```bash
docker -v
```

```output
Docker version 26.1.1, build 4cf5afa
```

List Docker images
```bash
docker image ls
```

In the future when you have `ktd` setup you will get something like this:
```output
REPOSITORY          TAG       IMAGE ID       CREATED        SIZE
koha/koha-testing   main      cfd51aaa102f   13 days ago    4.06GB
memcached           <none>    ec8c94e66592   2 weeks ago    99.7MB
memcached           latest    a4274125721c   2 weeks ago    84.9MB
koha/koha-testing   <none>    f8f95851bfcb   2 weeks ago    4.05GB
koha/koha-testing   <none>    508d761224d7   2 weeks ago    4.05GB
memcached           <none>    10895cbae220   6 weeks ago    84.9MB
mariadb             10.5      c65b1e141932   3 months ago   394MB
```

Clean up old docker images
```bash
docker system prune -a
```

This will remove all unused containers, networks, images and optionally, volumes if specified with the `-v` flag. Useful for troubleshooting sometimes.


## Install VSCode

::: info :rainbow: INFO
[VSCode's Install Guide](https://code.visualstudio.com/docs/setup/linux)
:::

VSCode is a highly configureable text editor optimized for reading and writing code. It's pretty chill. :snowflake:

::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
Launch VSCode
- Press `Super` key, type `term` and press `Enter`
```bash  
cd $PROJECTS_DIR
code .
```
:::

::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
- `crtl` + `shift` + `~` Open a new terminal inside VSCode


- `ctrl` + `pgup` or `pgdn` Switch between terminals in VSCode


- `ctrl` + `j` Show or hide the terminal window in VSCode
:::