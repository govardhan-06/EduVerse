import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const supabaseClient=(SUPABASE_DB_KEY,SUPABASE_DB_URL)=>{
    try{
        const client=createClient(SUPABASE_DB_URL, SUPABASE_DB_KEY);
        return client;
    }
    catch(err){
        console.log(err);
    }
}

const SUPABASE_DB_URL=process.env.SUPABASE_DB_URL;
const SUPABASE_DB_KEY=process.env.SUPABASE_DB_KEY;

const supabase=supabaseClient(SUPABASE_DB_KEY,SUPABASE_DB_URL);

export default supabase;