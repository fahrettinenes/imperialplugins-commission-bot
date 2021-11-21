const discord = require('discord.js-selfbot-v11');
const client = new discord.Client();
const chalk = require('chalk');
console.clear();

client.on('ready', () => {
    console.log(chalk.blueBright("[ NOTIFICATION ] ") + "Started!");
    console.log(chalk.green("[ INFO ] ") + `Logged in as ${client.user.tag}`);
});

client.on('message', async message => {
    if(message.channel.id == "411558564738367491" && message.content.toLowerCase().includes("name of plugin")) {
        console.log(chalk.blueBright("[ RECEIVED ] ") + "New Commission Released!");
        notify();
    }
});

function notify() {
    const WindowsToaster = require('node-notifier').WindowsToaster;

    var notifier = new WindowsToaster({
      withFallback: false, // Fallback to Growl or Balloons?
      customPath: undefined // Relative/Absolute path if you want to use your fork of SnoreToast.exe
    });
    
    notifier.notify(
      {
        title: "ImperialPlugins new Commission", // String. Required
        message: "New comission has been released!", // String. Required if remove is not defined
        icon: "path/to/ur/icon", // String. Absolute path to Icon
        sound: true, // Bool | String (as defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx)
        appID: "ImperialPlugins", // String. App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible.
        remove: undefined, // Number. Refer to previously created notification to close.
        install: undefined // String (path, application, app id).  Creates a shortcut <path> in the start menu which point to the executable <application>, appID used for the notifications.
      },
      function (error, response) {
      }
    );
    
}

client.login('your account token (dont worry i dont steal it)')
