/* eslint-disable no-useless-catch */
import Guest from "../models/guest.model.js"

export const createGuest = async(guestData)=>{
    try {
        const newGuest = await  Guest.create(guestData);
        return newGuest;
    } catch (error) {
        throw error;
    }
}