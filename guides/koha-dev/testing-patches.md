---
title: Testing patches 🧪🩹
prev:
  link: ./getting-setup
next:
  link: ./finding-bugs
---

::: warning :warning: WARNING
This guide assumes no prior knowledge and aims to help new Koha testers and developers get started using Koha Testing Docker with Windows Subsytem for Linux (WSL2) and VSCode.

Don't forget to refer to the [official Koha Testing Docker README](https://gitlab.com/koha-community/koha-testing-docker/-/blob/main/README.md) too.

Also check out [how to sign off on patches](https://wiki.koha-community.org/wiki/Sign_off_on_patches) on the koha Wiki and this helpful [KTD command cheat sheet](https://gitlab.com/-/snippets/1893788) by David Nind.
:::

## Find a bug

Look for a bug that sounds interesting with the status `Needs Signoff`. Make sure that there is a `patch attached` and a clear `test plan` outlined in the commit message. Read up on any discussion and take a peak at the diff to get an idea of what is going on with the code. Take note of the bug number. 

::: tip :wrench: TIP
Add yourself to the cc: field on the bug or just keep a list of bug numbers on random scraps of paper. You do do!
:::

## Update your local Koha repo

```bash
cd $PROJECTS_DIR/koha
git reset --hard origin/main
git pull
```

## Update your local ktd repo
```bash
cd $PROJECTS_DIR/koha-testing-docker
git reset --hard origin/main
git pull
```

## Update your ktd docker image
This is important to run from time to time to use the latest image.
```bash
ktd pull
```

## Apply the patch(es)

::: info :rainbow: INFO
Run the following command and bask in the glow of the terminal.
```bash
ktd up
```
Wait until you see `koha-1       | koha-testing-docker has started up and is ready to be enjoyed!`
Remember to leave this shell open or everything will be shutdown.

In VSCode press `ctrl` + `shift` + `~` to open a new termial window
```bash
ktd --shell
```

You should now be inside the ktd shell at a prompt like this
`kohadev-koha@kohadevbox:koha(main)$`
:::


The following commands are to be run from inside the ktd shell. 

```bash
git bz apply {bug#}
```

```output
Bug {bug#} - {summary from bugzilla}

{attachment#} - Bug {bug#}: {commit message from patch}

Apply? [(y)es, (n)o, (i)nteractive] 
```

Type `y` for yes and hit enter. If all goes well you will get a simple response. The patch applied successfully and you can continue on testing.
```output
Applying: Bug {bug#}: {commit message from patch}
```

If you mistype the bug number you will get
```output
Failed to retrieve bug information: InvalidBugId
```

Sometimes recent changes to main cause merge conflicts and the patch needs to be rebased.
```output
error: Failed to merge in the changes.
Patch failed at 0001 Bug {bug#}: {bug summary}
hint: Use 'git am --show-current-patch=diff' to see the failed patch
When you have resolved this problem run "git bz apply --continue".
If you would prefer to skip this patch, instead run "git bz apply --skip".
To restore the original branch and stop patching run "git bz apply --abort".
Patch left in /tmp/Bug-{bug#}-{bug summary}-tjalomkf.patch
```
Set the bug status to 'Patch doesn't apply'. The developer will be notified and can submit an updated patch. Run `git bz apply --abort` to restore the main branch with no patch.

## Restart everything

::: info :rainbow: INFO
These steps are not always mentioned in the test plan because it's assumed.
:::

### Restart all services running in ktd
```bash
restart_all
```

### Refresh the browser
Something weird could happen if you don't refresh the browser before testing the patch.
::: tip :keyboard: TIP 
<Badge type="tip">non-clicky way</Badge>
`ctrl` + `F5`
:::

### Reset the database 
If you've made many changes in system preferences and want to start with everything fresh.
```bash
reset_all
```

## Update the database 
If the patch changes the structure of the database you may need to run these commands.
```bash
updatedatabase
dbic
```

## Follow the test plan
If it's not part of the test plan try to replicate the issue first. If you get stuck at a step leave a comment on the bug or ask for help on [Mattermost](https://chat.koha-community.org/). 

If during testing you notice a problem with the patch set the bug status to `Failed QA` and leave a comment on the bug detailing what you found.

If you confirm the patch does what it says it does it's time to sign off on the bug.

## Sign off on the bug

At `ktd --shell` prompt `kohadev-koha@kohadevbox:koha(main)$` use the following commands.

```bash
git so 1
```

```bash
git bz attach -e {bug#} HEAD
```

For signing off on multiple patches the commands are slightly different
```bash
git so 3
```

```bash
git bz attach -e {bug#} HEAD~3..
```

The `-e` flag allows you to edit the somethings on Bugzilla.

When you run `git bz attach` with the `-e` flag `ktd` opens a text editor called `vim` which is the final boss stage of signing off. 

Method 1: 
- Save and quit (throwing away any changes) 
- Update the bug status manually to `Signed off` on the Bugzilla web interface.  
```bash
:q!
```

Method 2:
- Use the down arrow key to find the place where you can update the bug status
- Type `i` or hit the `ins` key to enter `insert mode`
- Delete the `#` comment in front of `Status: Signed Off`
```bash
:wq!
```

Now you can appreciate all those memes about not being able to get out of vim.

## Run qa script and other tests 

The `qa` script is automagically set up for you in `ktd`. This step is optional because the QA Team will do this step but it's encouraged. If you write a patch use the `qa` script before submitting. When your patch fails use the hints to try to fix any issues and if you get stuck ask a question on chat.

```bash
qa
```

```output
testing 3 commit(s) (applied to {commit hash} Bug {bug#}: {bug summary})

Processing files before patches
|========================>| 2 / 2 (100.00%)
Processing files after patches
|========================>| 2 / 2 (100.00%)

 OK     Koha/{some file}.pl

 OK     Koha/{some file}.tt

 OK     t/db_dependent/Koha/{some test}.t

Processing additional checks OK!

        * Was this bug sponsored by anyone?
```

Use the `-h` flag to learn more about most commands
```bash
qa -h
```

::: info :rainbow: INFO
More tests are in `koha/t` you can check them out the `non clicky way` like this:

```bash
ls ./t
```
The items listed without the `.t` file extension are directories with more tests in them.

```bash
ls ./t/db_dependent
```

:::

You can browse the code in VSCode, or you can use `cat` because it's fun to type `cat`.
```bash
cat ./t/{name of file}.t
ls ./t/{directory}
cat ./t/{directory}/{filename}.t
```

To run a test from the koha folder use the full path to the file. `./` is the path of the present working directory. Remeber the `pwd` command?  
```bash
perl ./t/{filename}.t
perl ./t/{directory}/{filename}.t
```

## Some more useful git commands when applying patches
```bash
git status
```

If you just applied a single patch you should be ahead of 'origin/main' by 1 commit.

```output
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

```bash
git log 
```
You will see the commit you just applied with a test plan.
- `spacebar` to scroll through the log of recent commits
- `ctrl` + `z` to exit git log.

Show everything about the last commit.
```bash
git show HEAD
```

Show statistics of the last commit to see the files and number of lines changed. 
```bash
git diff --stat HEAD~1 HEAD
```

```output
 catalogue/itemsearch.pl                           |  2 +
 .../prog/en/modules/catalogue/itemsearch.tt       | 43 +++++++++++++++-----
 2 files changed, 35 insertions(+), 10 deletions(-)
 ```