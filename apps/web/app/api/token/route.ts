import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

const handler = async function (req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret, raw: true });

  console.log('Token: ', token);
  return new NextResponse(JSON.stringify({ token }), {
    status: 401,
    headers: { 'content-type': 'application/json' },
  });
};

export { handler as GET };
