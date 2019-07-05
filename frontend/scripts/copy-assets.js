/**
 * Created by andy on 7/4/19.
 */


const shell = require('shelljs');

if (!shell.test('-e', 'static/assets')) {
  shell.echo('Assets source folder does not exist!');
  shell.exit(1);
}

if (shell.test('-e', '../app/src/main/resources/static/assets')) {
  shell.echo('Removing target assets folder...');
  shell.rm('-rf', '../app/src/main/resources/static/assets');
}

shell.cp('-rf', 'static/assets', '../app/src/main/resources/static/');

shell.echo('\nCopying assets is done. Happy Coding!!!');

