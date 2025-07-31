const cloudinary = require("cloudinary").v2
const fs = require("fs")
// Cloudinary Config =>
cloudinary.config({
    cloud_name: 'dambbjnmt', 
    api_key: '282564534146244', 
    api_secret: 'SDzYMPQuKYXBuI5a681teCKEDcU' // Click 'View API Keys' above to copy your API secret
});

const uploadController = async(req,res)=>{
    if (!req.file) return res.status(401).send("Enter an image")
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload(
        req.file.path, {
            public_id: req.file.fileName, // Ami filename ta prefer kori Date.now() er cheye
        }
    )
    .catch((error) => {
        console.log(error);
    });
    fs.unlink(req.file.path, (err)=>{
        if (err) return console.log(err)
    })
    res.status(200).send(`Image has been hosted: ${uploadResult.url}`)
}
module.exports = uploadController