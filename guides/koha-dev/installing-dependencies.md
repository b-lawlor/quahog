---
title: Installing dependencies 🦾🤖
next:
  link: ./getting-set-up
---

::: warning :warning: WARNING
This guide assumes no prior knowledge and aims to help new Koha testers and developers get started using Koha Testing Docker with Windows Subsytem for Linux (WSL2) and VSCode.

Don't forget to refer to the [official Koha Testing Docker README](https://gitlab.com/koha-community/koha-testing-docker/-/blob/main/README.md) too.
:::

[[toc]]

## Required software
- :window: Windows 11
- :penguin: WSL2
- :computer: Terminal
- :whale: Docker Desktop
- :vs: VSCode

## Install WSL2 Debian
::: info :rainbow: INFO
[Microsoft's WSL Install Guide](https://learn.microsoft.com/en-us/windows/wsl/install)
:::

To get started we will use Powershell that comes with Windows to install WSL. Enter the following commands at the powershell prompt that looks like this:

`PS C:\Users\your_username>`

```powershell
wsl --install -d Debian
```
:::tip :wrench: TIP
The terminal is an essential tool. Get used to entering commands and take note of the different parts that make up this command. `command --flags argument`

It's important to get comfortable with the command line interface because through the course of this guide you may need to open multiple shells or kind of like in [Inception](https://en.wikipedia.org/wiki/Inception) open up shells inside of shells. :rabbit::hole:
:::

`wsl` is the command, indicating the program you want to run.

`--install` and `-d` are options also known as flags. 
- :triangular_flag_on_post: Flags that starts with `--` indicate a single option specified by a multicharacter string. 
- :triangular_flag_on_post: Flags that start with `-` can be followed by multiple options specified by single characters. 
- :triangular_flag_on_post: Flags are basically on off switches that tell the program *how* to run. 

`Debian` is an argument following the flags. Arguments tell the program *what* parameters to use when it runs.

Commands can have multiple flags and arguments or none at all. Sometimes there might be two commands before any flags or arguments.

Check out this excellent [Command Line Bootcamp](https://phette.net/prez/c4l-cli-bootcamp) by Eric Phetteplace.

### Set the default WSL version to  2
```powershell
wsl -v 2
```

You should see some output like this:
```output
WSL version: 2.1.5.0
Kernel version: 5.15.146.1-2
WSLg version: 1.0.60
MSRDC version: 1.2.5105
Direct3D version: 1.611.1-81528511
DXCore version: 10.0.25131.1002-220531-1700.rs-onecore-base2-hyp
Windows version: 10.0.22631.3593
```

### Set the default WSL distro
```powershell
wsl -s Debian
```

Powershell should cryptically reply `The operation completed successfully.` Nice.

### List and check WSL version
```powershell
wsl -l -v
```

You should get something like this:
```output
  NAME                   STATE           VERSION
* Debian                 Stopped         2
```

## Install the new Windows Terminal

Because Microsoft, the new terminal doesn't ship with Windows. Install it from the Windows store so it stays auto updated.

::: info :rainbow: INFO
[Microsoft's Terminal install guide](https://learn.microsoft.com/en-us/windows/terminal/install)
:::

::: tip :wrench: TIP
- Windows terminal keyboard shortcut `ctrl` + `,` to open settings
- Set the default profile to Debian
:::

Now when we open `Terminal` it will open up WSL Debian's default command line interpreter, or shell, called `Bash`. Friendship ended with `Powershell` Now `Bash` is your best friend.

The bash command prompt looks like this `user@machine:~$    `

`~` is the path for the user's home directory. 

`$` indicates the begining of the command prompt. If you see commands in guides that include the `$` remember not to include that in your commands.

### Now Let's Bash some commands

Update the systems package manager and install upgrades to installed software
```bash
sudo apt update && sudo apt upgrade -y
```

While you are doing this you might as well install `Git` too. You're gonna need it later.
```bash
sudo apt install git-all
```

::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
Launch Windows terminal 
- Press `Windows` key
- Type `term` and press `Enter`
:::

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

## Install Docker Desktop

::: info :rainbow: INFO
[Docker's Install Guide](https://docs.docker.com/desktop/install/windows-install/)
:::

Make sure that Docker Desktop is integrated with WSL
- :gear: Docker Settings > Resources > WSL integration
- :white_check_mark: Check `Enable integration with my default WSL distro`

Now when you launch the Terminal Docker will be available in your WSL Debian shell. :cool:

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

::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
Start up Docker
- Press `Windows` key
- Type `dock` and press `Enter`
:::

## Install VSCode

::: info :rainbow: INFO
[VSCode's Install Guide](https://learn.microsoft.com/en-us/windows/wsl/install)
:::

VSCode is a highly configureable text editor optimized for reading and writing code. It's pretty chill. :snowflake:

::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
Launch VSCode
- Press `Windows` key, type `term` and press `Enter`
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