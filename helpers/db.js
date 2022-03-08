import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('medias.db');

export const albumsAssets = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS albumsAssets (id INTEGER PRIMARY KEY NOT NULL,assets TEXT NOT NULL);',
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                },
            )
        })
    })
    return promise
}

export const addAssets = (media) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO albumsAssets (id,assets) VALUES (?,?);',
                [1, JSON.stringify(media)],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                    console.log(err)
                },
            )
        })
    })
    return promise
}

export const updateAssets = (media) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE albumsAssets SET assets=? WHERE id=1',
                [JSON.stringify(media)],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                    console.log(err)
                },
            )
        })
    })
    return promise
}

export const fetchAssets = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM albumsAssets',
                [],
                (_, result) => {
                    resolve(result)
                    // console.log(result)
                },
                (_, err) => {
                    reject(err)
                    console.log(err)
                },
            )
        })
    })
    return promise
}

export const videothumbnails = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS videothumbnails (id INTEGER PRIMARY KEY NOT NULL,imageUri TEXT NOT NULL);',
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                },
            )
        })
    })
    return promise
}

export const addThumbnail = (id, imageUri) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO videothumbnails (id,imageUri) VALUES (?,?);',
                [parseInt(id), imageUri],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const fetchThumbnail = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT imageUri FROM videothumbnails WHERE id=?',
                [parseInt(id)],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                    console.log(err)
                }
            )
        })
    })
    return promise
}