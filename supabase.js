const SUPABASE_URL='https://fzzuaeatkkqufubebzoa.supabase.co';
const SUPABASE_ANON_KEY='sb_publishable_u4LIFHmMq8twCjV5YOhISw_bY-FZHXz';
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
export async function signIn(){return sb.auth.signInWithOAuth({provider:'google'});}
export async function upload(file,shelf,topic){const path=`${Date.now()}_${file.name}`;await sb.storage.from('specimens').upload(path,file);const {data}=sb.storage.from('specimens').getPublicUrl(path);return sb.from('materials').insert({title:file.name,url:data.publicUrl,shelf,topic,status:'pending'});}
