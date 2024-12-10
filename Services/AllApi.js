import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";


export const addmenuItemAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/addNewMenu`,reqBody)
}
export const addListItemAPI=async (reqBody,menuID)=>{
    return await commonAPI("PUT",`${SERVER_URL}/addListItem/${menuID}`,reqBody)
}
export const getAllItemAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllMenu`,"")
}

