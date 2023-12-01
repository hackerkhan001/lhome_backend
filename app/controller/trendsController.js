const Trend = require('../model/trendingmodel');

async function updateIndex(req , res) {
try{
    const { index } = req.body;
    const trendWish = Trend.create({index});

    res.status(200).json({trendWish , msg: "index added"})

}catch(err){
    console.log(err , "error occured");
    res.status(500).json({ err });
}   
}

module.exports = { updateIndex };
