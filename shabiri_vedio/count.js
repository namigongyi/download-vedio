const {fsWrite,fsRead} = require('../tool')
const path = require('path')
const fs = require('fs')
const configFile = path.resolve(__dirname, './config.json')

const readData=async ()=>{
//     let total=0
//     let totalArr=[]
//    let files= fs.readdirSync(__dirname)
//    for(let i=0; i< files.length;i++){
//             if(files[i].indexOf('.json') !== -1){
//                 let temNum=0
//                 let data=  await fsRead(`./${files[i]}`)
//                 data=JSON.parse(data)
//                 data.forEach(file=>{
//                     temNum+=file.length
//                 }) 
//                 totalArr.push({name:files[i],number:temNum})
//                 total +=temNum
//             }
//    }
//    console.log(total,'total file number')
//    console.log(totalArr,'files number')
   let data=  await fsRead('./rendition.m3u8')
   console.log(data.split('#EXTINF:5,'))
//    let total=0
//    let totalArr=[] 
//    data=JSON.parse(data)
//    data.forEach((item)=>{
//        total += item.length
//        totalArr.push(item.length)
//    })
//    console.log(total)
//    console.log(totalArr)
}
readData()