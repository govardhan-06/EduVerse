import supabase from "../../../config/dbConfig.js";

const getSpaces=async ()=>{
    const { data, error } = await supabase
        .from('spaces')
        .select();
    if(error) throw new Error(error.message);
    console.log('Spaces fetched successfully');
    return data;
};

const getAvatars=async ()=>{    
    const { data, error } = await supabase
        .from('avatars')
        .select();
    if(error) throw new Error(error.message);
    console.log('Avatars fetched successfully');
    return data;
}

export {getSpaces, getAvatars};