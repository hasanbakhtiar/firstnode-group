
const fs =require('fs');
const path =require('path');

function deleteManyOldImage(imagePath){
    imagePath.map(item=>{
    const fullImagePath = path.join(item);
    fs.unlink(fullImagePath,(error)=>{
        if (error) {
            console.log("Wrong prosses");
        }else{
            console.log("Old image delete successfull");
            
        }
    })
    })
    
}


function deleteSingleOldImage(imagePath){
    const fullImagePath = path.join(imagePath);
    fs.unlink(fullImagePath,(error)=>{
        if (error) {
            console.log("Wrong prosses");
        }else{
            console.log("Old image delete successfull");
            
        }
    })
}

module.exports = {deleteManyOldImage,deleteSingleOldImage}