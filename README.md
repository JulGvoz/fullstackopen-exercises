# fullstackopen-exercises

My exercises and progress on the course at https://fullstackopen.com/en/about

## Running this repository

1. Make sure Node.js is installed
2. Make sure npm is updated with `npm update -g`
3. Open console in the appropriate folder (e. g. `fullstackopen-exercises/part1-exercises/course-information`)
4. Install everything that is specified in `package.json` with `npm install`
5. Start the site with `npm start`

You make changes to the site and they will show up live, as long as `npm start` is running.

To start the site without opening a browser, you can run `BROWSER=NONE npm start`, or add a file in the same location as `package.json` named `.env`, containing `BROWSER=NONE`

To stop running the site, just press `CTRL + C`

### Running json-server

Some projects (starting part2c), require `json-server`

You can install `json-server` using `npm install -g json-server` and run it using `npm run server`

(Make sure you follow steps in https://fullstackopen.com/en/part2/getting_data_from_server )

## Note regarding part0 exercises

The directory `part0-exercises` was originally called `part0`

After progressing to part1's exercises, I realized that my folder structure was unwieldy, therefore I decided to rename the folder.

## Folder naming structure

Folders named `partX` are for me personally - I will go through the Part, playing around with the code as needed.

Folders named `partX-exercises` will contain additional folders or files, conveniently named `X-Y-exercise-name-here`, where X is the part number, Y is the exercist number, and the rest of the file name describes the name of the exercise. 

For simple enough exercises, no new folder is created, notably in Part 0.

For more sophisticated exercises, individual folders will be created for each exercise.
