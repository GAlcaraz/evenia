import { getServerSession } from 'next-auth';
import {
  LoginButton,
  RegisterButton,
  LogoutButton,
  ProfileButton,
} from './_components/UserButtons';
import styles from './page.module.scss';
import { authOptions } from '@evenia/web/feature-auth';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
}
