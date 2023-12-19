const ChatBotUserDetails = require("../model/ChatBotUserDetailsmodel");

const ChatBotUser = async (req, res) => {

    try {
        const { name, email, number, city, message } = req.body;

        const ChatBotnewUser = await ChatBotUserDetails.create({
            name,
            email,
            number,
            city,
            message
        });
        res.status(200).json({ chatbotuser: ChatBotnewUser, msg: "ChatBotUserDetails created successfully." })
    }catch(error){
        console.log('Error create userdetail:',error)
        res.status(500).json({error});

    }

}

module.exports = {ChatBotUser};