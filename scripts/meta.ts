// This script would be handling metadata affairs


// importing immportant libs

const pinataSDK = require('@pinata/sdk');
require("dotenv").config();
const fs = require("fs");
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);


const readableStreamForFile = fs.createReadStream(__dirname + "/bridge.jpg");

// const options = {
//     pinataMetadata: {
//         name: "Web3Bridge LAst Test",
//         keyvalues: {
//             custmonKey: "cost"
//         }
//     }
// }




function pinFileToIPFS() {
    return pinata.pinFileToIPFS(readableStreamForFile)
    .then((result : any ) => {
        return `https://gateway.pinate.cloud/ipfs/${result.IpfsHash}`;
    }).catch((err : any ) => {
        console.log(err);
        
    })
}

function pinJSONToIPFS(body: any) {
    return pinata.pinJSONToIPFS(body)
        .then((result: any) => {
            return `https://gateway.pinate.cloud/ipfs/${result.IpfsHash}`;
        })
}

const getAllMetaData = async () => {
    const imageURI =  await pinFileToIPFS();
    const body = {
        name: "Web3Bridge Last Test",
        description: "Meet my newest family",
        image: imageURI
    }

    const metaData = await pinJSONToIPFS(body);
    console.log(metaData);
}

getAllMetaData(); 


// METADATA: https://gateway.pinate.cloud/ipfs/QmXQK88EVxNoEjS6UCwRGfs8Eh4qFx5wksVCM4Nzdo4cqs