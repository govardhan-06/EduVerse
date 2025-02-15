import supabase from "../../../config/dbConfig.js";

const addUser=async (user)=>{
    const { data, error } = await supabase
        .from('usersAuth')
        .insert(user)
        .select();
    if(error) throw new Error(error.message);
    console.log('User added successfully');
    return data[0];
};

const addUser_wallet=async (user)=>{
    const { data, error } = await supabase
        .from('usersAuth')
        .insert(user)
        .select();
    if(error) throw new Error(error.message);
    console.log('User added successfully');
    return data[0];
};

const getUserByEmail=async (email)=>{
    const { data, error } = await supabase
        .from('usersAuth')
        .select()
        .eq('email', email);
    if(error) throw new Error(error.message);
    console.log('User fetched successfully');
    return data[0];
}

const getUserbyWallet=async (walletAddress)=>{
    const { data, error } = await supabase
        .from('usersAuth')
        .select()
        .eq('walletAddress', walletAddress);
    if(error) throw new Error(error.message);
    console.log('User fetched successfully');
    return data[0];
}

const updateNonce=async (walletAddress, nonce)=>{
    const { data, error } = await supabase
        .from('usersAuth')
        .update({ "nonce":nonce })
        .eq('walletAddress', walletAddress);
    if(error) throw new Error(error.message);
    console.log('Nonce updated successfully');
    return;
};


export {addUser, addUser_wallet, getUserByEmail, getUserbyWallet, updateNonce};