import { createClient } from '@supabase/supabase-js'

const supabaseClient=()=>{
    const SUPABASE_DB_URL=process.env.SUPABASE_DB_URL;
    const SUPABASE_DB_KEY=process.env.SUPABASE_DB_KEY;
    try{
        const client=createClient(SUPABASE_DB_URL, SUPABASE_DB_KEY);
        console.log('Supabase client created successfully');
        return client;
    }
    catch(err){
        console.log(err);
    }
}

export default supabaseClient;