import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xecsqeycqvujatdxvdpz.supabase.co";
const supabaseKey = "sb_publishable_7bC41jKUfMt5CpR4CkPyJw_rs2sYGgf";

export const supabase = createClient(supabaseUrl, supabaseKey);
