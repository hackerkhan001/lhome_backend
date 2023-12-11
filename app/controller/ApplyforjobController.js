const UserDetail= require('../model/Applyforjobmodel');

const applyForjob = async (req, res, next) => {
    let fileModel;
    let fileType;
    try {
        if (req.route.path === '/resume') {
            const fileModel = ResumeUpload;
            const fileType = 'Resume';
        } else if (req.route.path === '/portfolio') {
            const fileModel = PortfolioFile;
            const fileType = 'Portfolio';
        } else if (req.route.path === '/userdetail') {
            const { firstname, lastname, email, mobile, currentctc, expectedctc, preferredlocation, noticeperiod,ResumeUpload,PortfolioFile } = req.body;

            const newUser = await UserDetail.create({
                firstname,
                lastname,
                email,
                mobile,
                currentctc,
                expectedctc,
                preferredlocation,
                noticeperiod,
                ResumeUpload,
                PortfolioFile
            });

            return res.status(201).json({ userdetail: newUser, msg: 'Userdetail uploaded successfully' });
        } else {
            return res.status(400).send('Invalid request');
        }

        const file = new fileModel({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });

        await file.save();
        res.status(201).send(`${fileType} Uploaded Successfully`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    applyForjob
};
