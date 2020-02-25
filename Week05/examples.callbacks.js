
const readFile = (file, callback) => {
    if (!file.includes('.json')) {
        callback(`Cannot read file: ${file}`);
    } else {
        console.log(`Reading File: ${file}`);
        callback(null, { state: 'ready', name: file });
    }
};

const countWords = (file, callback) => {
    if (file.state !== 'ready') {
        callback(`Cannot count words ${file.name}`);
    } else {
        console.log(`Counting words in ${file.name}`);
        callback(null, Object.assign({}, file, { count: 100 }));
    }
};

const closeFile = (file, callback) => {
    if (file.state !== 'ready') {
        callback(`Cannot close ${file.name}`);
    } else {
        console.log(`Closing file: ${file.name}`);
        callback(null, Object.assign({}, file, { responseTime: 100 }));
    }
};

const fileStats = () => {
    readFile('test.json', (error, file) => {
        if (!error) {
            countWords(file, (error, count) => {
                if (!error) {
                    closeFile(count, (error, stats) => {
                        if (!error) {
                            console.log(`Stats:`);
                            console.log(stats);
                        }
                    });
                }
            });
        } else {
            console.log(error);
        }
    });
};
fileStats();
