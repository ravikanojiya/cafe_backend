const { cateCount ,productCount} = require("./services");

module.exports={
    cateCount:(req,res)=>{
        cateCount((error,result)=>{
            console.log("rs",result);
            if(error){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error...!"
                })
            }else{
                return res.status(200).json({
                    success:1,
                    data:result
                })
            
            }
        })
    },

    productCount:(req,res)=>{
        productCount((error,result)=>{
            console.log("rs",result);
            if(error){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error...!"
                })
            }else{
                return res.status(200).json({
                    success:1,
                    data:result
                })
            
            }
        })
    }
}