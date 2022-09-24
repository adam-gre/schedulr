import { GlobalStyles } from '@mui/system';

import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import {Header} from '../components/Header';

const { Link, Outlet } = require("@remix-run/react");
const { useOptionalUser } = require("~/utils");


export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <GlobalStyles
        styles={(theme) => ({
          body: {
            margin: 0,
            fontFamily: theme.vars.fontFamily.body,
          },
        })}
      />
      <Layout.Root
        sx={{
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
            md: 'minmax(160px, 300px) minmax(1fr, 1fr)',
          }
        }}
      >
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <Outlet />
        </Layout.Main>
      </Layout.Root>
    </main>
  );
}
