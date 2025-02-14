import supabaseClient from "../../../config/dbConfig.js";

const addUser=async (user)=>{
    const supabase=supabaseClient();
    const { data, error } = await supabase
        .from('usersAuth')
        .insert(user)
        .select();
    if(error) throw new Error(error.message);
    console.log('User added successfully');
    return data[0];
};

const getUserByEmail=async (email)=>{
    const supabase=supabaseClient();
    const { data, error } = await supabase
        .from('usersAuth')
        .select()
        .eq('email', email);
    if(error) throw new Error(error.message);
    console.log('User fetched successfully');
    return data[0];
}

export {addUser, getUserByEmail};