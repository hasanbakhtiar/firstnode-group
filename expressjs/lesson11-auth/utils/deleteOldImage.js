import fs from 'fs';
import path from 'path';


export function deleteManyOldImage(imagePath){
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


export function deleteSingleOldImage(imagePath){
    const fullImagePath = path.join(imagePath);
    fs.unlink(fullImagePath,(error)=>{
        if (error) {
            console.log("Wrong prosses");
        }else{
            console.log("Old image delete successfull");
            
        }
    })
}