/* eslint-disable no-useless-catch */
import * as guestService from '../services/index.services.js';

export const indexPage = async(req,res)=>{
    const title = "Main"
    try {

        const messageCreateSuccess = await req.flash('infoAddGuest');
        res.render('index',{
            title,
            messageCreateSuccess
        });
    } catch (error) {
        throw error;
    }
};


export const createGuest = async (req, res) => {
    try {
        const guestData = req.body;
        
        // if (!guestData.signature) {
        //     throw new Error('Signature is required.');
        // }

        const newGuest = await guestService.createGuest(guestData);
        await req.flash("infoAddGuest", "Data Tamu Berhasil Ditambahkan ✅✅✅");

        res.redirect('/');
    } catch (error) {

        await req.flash("infoAddGuestFail", "Data Tamu Berhasil Ditambahkan ❌❌❌");
        res.redirect('/')
        // res.status(400).json({ message: error.message });
    }
};