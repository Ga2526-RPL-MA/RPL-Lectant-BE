import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: 'postgresql://postgres.crwttfroggvgbkotgkkp:rpl123lectant@aws-1-ap-south-1.pooler.supabase.com:5432/postgres'
});

async function test() {
  try {
    await client.connect();
    console.log('✅ Berhasil konek ke Supabase DB!');
    await client.end();
  } catch (err) {
    console.error('❌ Gagal konek:', err.message);
  }
}

test();
