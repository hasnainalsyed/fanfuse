import { NextApiRequest, NextApiResponse } from "next";
const testFolder = '../';
const fs = require('fs');
import content from './_metadata1.json';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { contract_address, contract_abi, buy_price, speedy_nodes} from '../../../config';

export default function getNftById(req, res){
    //let rawdata = fs.readFileSync(content);
    //let all_data = JSON.parse(rawdata);
    //  all_data[0].url = "asd";
    //console.log(all_data[0]);
    //console.log(content[0]);


    res.json({
        name: "Republic of Pirates #"+ req.query.id,
        description: "Test Description",
        image: "ipfs://QmPH5gDFEFe8XCijjTc4kLpjBQ3tLsYPtgiW2Y8R5L6nXx/"
    })
    // if(Math.round(new Date().getTime()/1000) < 1643759999){
    //     res.json({
    //         name: "CryptoPoly #"+ req.query.id,
    //         description: "Crypto Poly Wealth Club is a private collection of 7,777 wealthy uncles waiting patiently in their respective mansions, wasting no time in being bold and chic. They are dressed in over 180+ creatively modeled 3D features. Stored as ERC-721 on the Ethereum blockchain, hosted on IFPS. We now invite you to take a closer look at a club that redefines elegance!",
    //         image: "ipfs://QmfLHVq49TJygMFYrj1vcTuC7ADE8TTzaJE8ESXmmjxcZX/"
    //     })
    // }


    // const web3 = new Web3(speedy_nodes);
    // const contract = new web3.eth.Contract(contract_abi, contract_address);
    // //await Web3.givenProvider.enable()

    // contract.methods.totalSupply().call((err,result) => {
    //     console.log("error: "+err);
    //     if(result != null){
    //         if(parseInt(req.query.id) <=  parseInt(result) ){
    //             res.json(content[req.query.id]);
    //         }else{
    //             res.json("Nft Not Minted Yet")
    //         }
            
    //     }
    //     if(err != null){
    //         res.json("Nft Not Minted Yet")
    //     }
    // })
   
}