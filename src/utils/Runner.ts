const spawn = require('child_process').spawn;

export const executePS = (scriptPath: string) => {
  const child = spawn('powershell.exe', [scriptPath]);

  child.stdout.on('data', function (data: any) {
    console.log('PS: ' + data);
  });
  child.stderr.on('data', function (data: any) {
    console.log('PS Err: ' + data);
  });
  child.on('exit', function () {
    console.log('PS Exit');
  });
  child.stdin.end();
};

export const executeCMD = (scriptPath: string) => {
  const child = spawn('cmd.exe', [scriptPath]);

  child.stdout.on('data', function (data: any) {
    console.log('CMD: ' + data);
  });
  child.stderr.on('data', function (data: any) {
    console.log('CMD Err: ' + data);
  });
  child.on('exit', function () {
    console.log('CMD Exit');
  });
  child.stdin.end();
};
