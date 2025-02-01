import 'dotenv/config';

export default {
  expo: {
    name: "wine-nights-social-club",
    slug: "wine-nights-social-club",
    version: "1.0.0",
    scheme: "wine-nights-social-club",
    newArchEnabled: "true",
    plugins: ["expo-router"],
    extra: {
        supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
        supabaseApiKey: process.env.EXPO_PUBLIC_SUPABASE_API_KEY
    },
  },
};
