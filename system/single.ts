import { exec } from 'child_process';

try {
  const name = process.argv[2];

  if (!name) {
    throw 'Feature not found';
  }

  exec(`npx cucumber-js ./features/${name}/${name}.feature && npm run report`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.log(stdout);
  });
} catch (e: any) {
  console.error(`Error: ${e}`);
}