import { CssVarsProvider, getInitColorSchemeScript } from '@mui/joy/styles';
import styles from "~/styles/style.css";

const { json } = require("@remix-run/node");


const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

const { getUser } = require("./session.server");

export const links = () => {
  return [
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap" },
    { rel: "stylesheet", href: styles }
  ];
};

export const meta = () => ({
  charset: "utf-8",
  title: "Schedulr",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <CssVarsProvider>
          {/* {getInitColorSchemeScript()} */}
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CssVarsProvider>
        <ScrollRestoration />
      </body>
    </html>
  );
}
