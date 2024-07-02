/* eslint-disable no-useless-catch */
import * as guestRepository  from '../repositories/index.repository.js';

export const createGuest = async(guestData)=>{
    try {
        const newGuest = await guestRepository.createGuest(guestData);
        await newGuest.save();
        return newGuest;
    } catch (error) {
        throw error;
    }
};