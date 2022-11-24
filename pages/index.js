import Link from 'next/link'
import React, { useEffect, useState } from "react";


export default function Home() {
  const[mintingcount, setmintingcount] = useState(1)

  useEffect(() => {
    // connect_wallet()
    // fetch_data()
  }, [])
 
  function openNav() {
    document.getElementById("myNav").style.width = "80%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#663399" />
    <title>FanFuse</title>
    <link rel="icon" href="favicon-32x32f5f8.png" type="image/logo.png" />
    <link rel="icon" type="img/logo.png" href="./img/logo.png" />
    <link rel="apple-touch-icon" sizes="48x48" href="icons/icon-48x48f5f8.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="icons/icon-72x72f5f8.png" />
    <link rel="apple-touch-icon" sizes="96x96" href="icons/icon-96x96f5f8.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="icons/icon-144x144f5f8.png" />
    <link rel="apple-touch-icon" sizes="192x192" href="icons/icon-192x192f5f8.png" />
    <link rel="apple-touch-icon" sizes="256x256" href="icons/icon-256x256f5f8.png" />
    <link rel="apple-touch-icon" sizes="384x384" href="icons/icon-384x384f5f8.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="icons/icon-512x512f5f8.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://www.googletagmanager.com/" />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
    <link rel="stylesheet" href="./css/style.css" />
    <div className="MuiBox-root css-3f8trd">
      <div className="bubbles">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="myNav" className="overlay">
                <a  className="closebtn" onClick={closeNav}>×</a>
                <div className="overlay-content">
                  <a href="#"><img src="./img/logo.png" alt="" /></a>
                  <a href="#roadmap">Roadmap</a>
                  <a href="#the-team">The Team</a>
                  <a href="#faq">Faq</a>
                  <Link href="/howtobuy">
                    How To Buy
                  </Link>
                  <div className="MuiBox-root css-16wajk8"><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://discord.gg/ChPQ9PempP"><img alt="discord" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MSA1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzEgNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMjEyNTY0Nzc0MTA1Mzc2ODQyMzAwMDAwMDE1NDYwNTkzMDg5MzcyNDU4NjNfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxkZWZzPgoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgeT0iMCIgd2lkdGg9IjcxIiBoZWlnaHQ9IjU1Ii8+Cgk8L2RlZnM+Cgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTc0NjAwNTI3NDQ0NTM1NDc4OTIwMDAwMDAzMDk0MzQyMjExODcyODYwNTcyXyI+CgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCTwvY2xpcFBhdGg+Cgk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzQ2MDA1Mjc0NDQ1MzU0Nzg5MjAwMDAwMDMwOTQzNDIyMTE4NzI4NjA1NzJfKTtmaWxsOiNGRkZGRkY7IiBkPSJNNjAuMSw0LjkKCQljLTQuNS0yLjEtOS40LTMuNi0xNC41LTQuNWMtMC4xLDAtMC4yLDAtMC4yLDAuMWMtMC42LDEuMS0xLjMsMi42LTEuOCwzLjdjLTUuNS0wLjgtMTAuOS0wLjgtMTYuMiwwYy0wLjUtMS4yLTEuMi0yLjYtMS44LTMuNwoJCWMwLTAuMS0wLjEtMC4xLTAuMi0wLjFjLTUuMSwwLjktOS45LDIuNC0xNC41LDQuNWMwLDAtMC4xLDAtMC4xLDAuMUMxLjYsMTguNy0wLjksMzIuMSwwLjMsNDUuNGMwLDAuMSwwLDAuMSwwLjEsMC4yCgkJYzYuMSw0LjUsMTIsNy4yLDE3LjcsOWMwLjEsMCwwLjIsMCwwLjItMC4xYzEuNC0xLjksMi42LTMuOCwzLjYtNS45YzAuMS0wLjEsMC0wLjMtMC4xLTAuM2MtMS45LTAuNy0zLjgtMS42LTUuNS0yLjYKCQljLTAuMS0wLjEtMC4yLTAuMywwLTAuNGMwLjQtMC4zLDAuNy0wLjYsMS4xLTAuOWMwLjEtMC4xLDAuMi0wLjEsMC4yLDBjMTEuNiw1LjMsMjQuMiw1LjMsMzUuNywwYzAuMSwwLDAuMiwwLDAuMiwwCgkJYzAuNCwwLjMsMC43LDAuNiwxLjEsMC45YzAuMSwwLjEsMC4xLDAuMywwLDAuNGMtMS44LDEtMy42LDEuOS01LjUsMi42Yy0wLjEsMC0wLjIsMC4yLTAuMSwwLjNjMS4xLDIuMSwyLjMsNCwzLjYsNS45CgkJYzAuMSwwLjEsMC4yLDAuMSwwLjIsMC4xYzUuOC0xLjgsMTEuNy00LjUsMTcuOC05YzAuMSwwLDAuMS0wLjEsMC4xLTAuMkM3Mi4yLDMwLjEsNjguMiwxNi44LDYwLjEsNC45QzYwLjIsNC45LDYwLjEsNC45LDYwLjEsNC45CgkJeiBNMjMuNywzNy4zYy0zLjUsMC02LjQtMy4yLTYuNC03LjJzMi44LTcuMiw2LjQtNy4yYzMuNiwwLDYuNCwzLjIsNi40LDcuMkMzMC4xLDM0LjEsMjcuMywzNy4zLDIzLjcsMzcuM3ogTTQ3LjMsMzcuMwoJCWMtMy41LDAtNi40LTMuMi02LjQtNy4yczIuOC03LjIsNi40LTcuMmMzLjYsMCw2LjQsMy4yLDYuNCw3LjJDNTMuNywzNC4xLDUwLjksMzcuMyw0Ny4zLDM3LjN6Ii8+CjwvZz4KPC9zdmc+Cg==" width={32} height={32} /></a><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://twitter.com/FanFuseInc"><img alt="twitter" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC40IHI5OTM5IiBzb2RpcG9kaTpkb2NuYW1lPSJUd2l0dGVyX2JpcmRfbG9nb18yMDEyLnN2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxNzEuNSAxMzkuNCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNzEuNSAxMzkuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8c29kaXBvZGk6bmFtZWR2aWV3ICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjEwMS4yOTQxMyIgaW5rc2NhcGU6Y3k9IjUwLjE4MTE0MiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOnpvb209IjMuNzIwMDU3MSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiPgoJPC9zb2RpcG9kaTpuYW1lZHZpZXc+CjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODIuMzIwNTMsLTM5Ni4zMDczNCkiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIj4KCTxwYXRoIGlkPSJwYXRoNSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xhc3M9InN0MCIgZD0iTTQ1My44LDQxMi44Yy02LjMsMi44LTEzLjEsNC43LTIwLjIsNS41CgkJYzcuMy00LjQsMTIuOC0xMS4yLDE1LjUtMTkuNWMtNi44LDQtMTQuMyw3LTIyLjMsOC41Yy02LjQtNi44LTE1LjYtMTEuMS0yNS43LTExLjFjLTE5LjQsMC0zNS4yLDE1LjgtMzUuMiwzNS4yCgkJYzAsMi44LDAuMyw1LjQsMC45LDhjLTI5LjItMS41LTU1LjItMTUuNS03Mi41LTM2LjhjLTMsNS4yLTQuOCwxMS4yLTQuOCwxNy43YzAsMTIuMiw2LjIsMjMsMTUuNywyOS4zYy01LjgtMC4yLTExLjItMS44LTE1LjktNC40CgkJYzAsMC4xLDAsMC4zLDAsMC40YzAsMTcsMTIuMSwzMS4zLDI4LjIsMzQuNWMtMywwLjgtNi4xLDEuMi05LjMsMS4yYy0yLjMsMC00LjUtMC4yLTYuNi0wLjZjNC41LDE0LDE3LjUsMjQuMiwzMi45LDI0LjQKCQljLTEyLDkuNC0yNy4yLDE1LjEtNDMuNywxNS4xYy0yLjgsMC01LjYtMC4yLTguNC0wLjVjMTUuNiwxMCwzNC4xLDE1LjgsNTMuOSwxNS44YzY0LjcsMCwxMDAuMS01My42LDEwMC4xLTEwMC4xCgkJYzAtMS41LDAtMy0wLjEtNC42QzQ0My4xLDQyNi4xLDQ0OS4xLDQxOS45LDQ1My44LDQxMi44TDQ1My44LDQxMi44eiIvPgo8L2c+Cjwvc3ZnPgo=" width={32} /></a>
                    <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://www.instagram.com/fanfuseinc/"><img alt="twitter" src="../img/icons8-instagram-32.png" width="40px" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="___gatsby">
        <div style={{outline: 'none'}} tabIndex={-1} id="gatsby-focus-wrapper">
          <div className="MuiBox-root css-z68yxt">
            <div className="sticky-outer-wrapper">
              <div className="sticky-inner-wrapper" style={{position: 'relative', top: '0px', zIndex: 10}}>
                <header className="MuiBox-root css-1xtl0nc">
                  <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
                    <div className="MuiBox-root css-19djux0">
                      <div className="css-vj1yze"><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-tmfh84" href="#home"><img src="./img/logo.png" alt="logo" style={{width: '80px', height: '70px'}} /></a>
                      </div>
                      <span className="open-nav" onClick={openNav}>☰</span>
                      <nav className="navbar MuiBox-root css-1p4if4b">
                        <ul className="MuiBox-root css-mgmaga">
                          <li />
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#about-us" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>About Us</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#roadmap" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>Roadmap</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#the-team" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>The Team</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#faq" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>FAQ</a>
                          </li>
                          <li>
                          <Link href="/howtobuy" className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>
                            How To Buy
                          </Link>
                          </li>
                          {/* <li>
                      <div class="dropdown MuiBox-root css-1tbcyek"><a
                          class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1gyhwte">
                          <div class="MuiBox-root css-1utx3w7">For Members
                             <img alt="down"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjIyOSA3Ljc0MzE2TDEyLjQ5OTggMTUuMzgzTDQuNzcwNjcgNy43NDMxNkwyLjkyNjkyIDkuNTY1NkwxMi40OTk4IDE5LjAyNzhMMjIuMDcyOCA5LjU2NTZMMjAuMjI5IDcuNzQzMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                              style="width:15px" />
                          </div>
                        </a>
                        <div style="display:none">
                          <p>NASA Game (staking)</p>
                          <p>Agent Search</p>
                          <p>Fast Food Shop - Coming Soon!</p>
                          <p>DAO - Coming Soon!</p>
                        </div>
                        <div class="dropdown-content">
                          <div class="dropdown-content-real"><a
                              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj"
                              style="color:#A9AFEF;font-weight:400;font-size:18px;font-style:normal;"
                              href="stake/index.html">NASA Game (staking)</a><a
                              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj"
                              style="color:#A9AFEF;font-weight:400;font-size:18px;font-style:normal;"
                              href="agent-search/index.html">Agent Search</a><a
                              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj"
                              style="color:#A3A3A3;font-weight:400;font-size:18px;font-style:normal;"
                              href="#">Fast Food Shop - Coming Soon!</a><a
                              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj"
                              style="color:#A3A3A3;font-weight:400;font-size:18px;font-style:normal;"
                              href="#">DAO - Coming Soon!</a></div>
                        </div>
                      </div>
                    </li> */}
                          <div className="MuiBox-root css-16wajk8"><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://discord.gg/ChPQ9PempP"><img alt="discord" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MSA1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzEgNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMjEyNTY0Nzc0MTA1Mzc2ODQyMzAwMDAwMDE1NDYwNTkzMDg5MzcyNDU4NjNfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxkZWZzPgoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgeT0iMCIgd2lkdGg9IjcxIiBoZWlnaHQ9IjU1Ii8+Cgk8L2RlZnM+Cgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTc0NjAwNTI3NDQ0NTM1NDc4OTIwMDAwMDAzMDk0MzQyMjExODcyODYwNTcyXyI+CgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCTwvY2xpcFBhdGg+Cgk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzQ2MDA1Mjc0NDQ1MzU0Nzg5MjAwMDAwMDMwOTQzNDIyMTE4NzI4NjA1NzJfKTtmaWxsOiNGRkZGRkY7IiBkPSJNNjAuMSw0LjkKCQljLTQuNS0yLjEtOS40LTMuNi0xNC41LTQuNWMtMC4xLDAtMC4yLDAtMC4yLDAuMWMtMC42LDEuMS0xLjMsMi42LTEuOCwzLjdjLTUuNS0wLjgtMTAuOS0wLjgtMTYuMiwwYy0wLjUtMS4yLTEuMi0yLjYtMS44LTMuNwoJCWMwLTAuMS0wLjEtMC4xLTAuMi0wLjFjLTUuMSwwLjktOS45LDIuNC0xNC41LDQuNWMwLDAtMC4xLDAtMC4xLDAuMUMxLjYsMTguNy0wLjksMzIuMSwwLjMsNDUuNGMwLDAuMSwwLDAuMSwwLjEsMC4yCgkJYzYuMSw0LjUsMTIsNy4yLDE3LjcsOWMwLjEsMCwwLjIsMCwwLjItMC4xYzEuNC0xLjksMi42LTMuOCwzLjYtNS45YzAuMS0wLjEsMC0wLjMtMC4xLTAuM2MtMS45LTAuNy0zLjgtMS42LTUuNS0yLjYKCQljLTAuMS0wLjEtMC4yLTAuMywwLTAuNGMwLjQtMC4zLDAuNy0wLjYsMS4xLTAuOWMwLjEtMC4xLDAuMi0wLjEsMC4yLDBjMTEuNiw1LjMsMjQuMiw1LjMsMzUuNywwYzAuMSwwLDAuMiwwLDAuMiwwCgkJYzAuNCwwLjMsMC43LDAuNiwxLjEsMC45YzAuMSwwLjEsMC4xLDAuMywwLDAuNGMtMS44LDEtMy42LDEuOS01LjUsMi42Yy0wLjEsMC0wLjIsMC4yLTAuMSwwLjNjMS4xLDIuMSwyLjMsNCwzLjYsNS45CgkJYzAuMSwwLjEsMC4yLDAuMSwwLjIsMC4xYzUuOC0xLjgsMTEuNy00LjUsMTcuOC05YzAuMSwwLDAuMS0wLjEsMC4xLTAuMkM3Mi4yLDMwLjEsNjguMiwxNi44LDYwLjEsNC45QzYwLjIsNC45LDYwLjEsNC45LDYwLjEsNC45CgkJeiBNMjMuNywzNy4zYy0zLjUsMC02LjQtMy4yLTYuNC03LjJzMi44LTcuMiw2LjQtNy4yYzMuNiwwLDYuNCwzLjIsNi40LDcuMkMzMC4xLDM0LjEsMjcuMywzNy4zLDIzLjcsMzcuM3ogTTQ3LjMsMzcuMwoJCWMtMy41LDAtNi40LTMuMi02LjQtNy4yczIuOC03LjIsNi40LTcuMmMzLjYsMCw2LjQsMy4yLDYuNCw3LjJDNTMuNywzNC4xLDUwLjksMzcuMyw0Ny4zLDM3LjN6Ii8+CjwvZz4KPC9zdmc+Cg==" width={32} height={32} /></a><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://twitter.com/FanFuseInc"><img alt="twitter" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC40IHI5OTM5IiBzb2RpcG9kaTpkb2NuYW1lPSJUd2l0dGVyX2JpcmRfbG9nb18yMDEyLnN2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxNzEuNSAxMzkuNCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNzEuNSAxMzkuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8c29kaXBvZGk6bmFtZWR2aWV3ICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjEwMS4yOTQxMyIgaW5rc2NhcGU6Y3k9IjUwLjE4MTE0MiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOnpvb209IjMuNzIwMDU3MSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiPgoJPC9zb2RpcG9kaTpuYW1lZHZpZXc+CjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODIuMzIwNTMsLTM5Ni4zMDczNCkiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIj4KCTxwYXRoIGlkPSJwYXRoNSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xhc3M9InN0MCIgZD0iTTQ1My44LDQxMi44Yy02LjMsMi44LTEzLjEsNC43LTIwLjIsNS41CgkJYzcuMy00LjQsMTIuOC0xMS4yLDE1LjUtMTkuNWMtNi44LDQtMTQuMyw3LTIyLjMsOC41Yy02LjQtNi44LTE1LjYtMTEuMS0yNS43LTExLjFjLTE5LjQsMC0zNS4yLDE1LjgtMzUuMiwzNS4yCgkJYzAsMi44LDAuMyw1LjQsMC45LDhjLTI5LjItMS41LTU1LjItMTUuNS03Mi41LTM2LjhjLTMsNS4yLTQuOCwxMS4yLTQuOCwxNy43YzAsMTIuMiw2LjIsMjMsMTUuNywyOS4zYy01LjgtMC4yLTExLjItMS44LTE1LjktNC40CgkJYzAsMC4xLDAsMC4zLDAsMC40YzAsMTcsMTIuMSwzMS4zLDI4LjIsMzQuNWMtMywwLjgtNi4xLDEuMi05LjMsMS4yYy0yLjMsMC00LjUtMC4yLTYuNi0wLjZjNC41LDE0LDE3LjUsMjQuMiwzMi45LDI0LjQKCQljLTEyLDkuNC0yNy4yLDE1LjEtNDMuNywxNS4xYy0yLjgsMC01LjYtMC4yLTguNC0wLjVjMTUuNiwxMCwzNC4xLDE1LjgsNTMuOSwxNS44YzY0LjcsMCwxMDAuMS01My42LDEwMC4xLTEwMC4xCgkJYzAtMS41LDAtMy0wLjEtNC42QzQ0My4xLDQyNi4xLDQ0OS4xLDQxOS45LDQ1My44LDQxMi44TDQ1My44LDQxMi44eiIvPgo8L2c+Cjwvc3ZnPgo=" width={32} /></a>
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://www.instagram.com/fanfuseinc/"><img alt="twitter" src="../img/icons8-instagram-32.png" width="40px" /></a>
                          </div>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
          <main style={{height: 'initial'}}>
            <section className="MuiBox-root css-1twkfvm" id="about-us">
              <div className="MuiBox-root css-d5gdhc">
                <div className="MuiBox-root css-1j3lhbw">
                  <div className="css-1aa1kuj">
                    <h1 className="MuiTypography-root MuiTypography-h1 css-z0t7xp">
                      <img src="img/fan fuse writing high res (1).png" alt="" width="100%" />
                    </h1>
                    <h1 className="MuiTypography-root MuiTypography-h1 css-z0t7xp css-dgauf8">
                      ABOUT US AND MISSION
                    </h1>
                    <h1 className="MuiTypography-root MuiTypography-h1 css-cpj34u">
                      FanFuse is a company that will better connect passionate sports fans to collegiate athletes. The team plans to do this by releasing a variety of NFT’s in the back end of 2022
                      NFT holders will be given the opportunity to win exclusive rewards that fulfill our mission. Some perks include but are not limited to facetimes with the athletes, group dinners as well as physical and digital merchandise.
                      The team provides a unique opportunity to our fans through real life experiences with our athletes that competitors fail to offer.
                    </h1>
                    <div className="banner-button-group MuiBox-root css-0"><a href="#"  target="_blank" rel="noreferrer"    style={{textDecoration: 'none', width: '270px'}}><button className="MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root  css-8j51qp" tabIndex={0} type="button">Minting coming soon !</button></a></div>
                  </div>
                </div>
                {/* <div
            style="width:100%;height:50px;background:url(img/divider-bottom-9f688c85208419068a7bf9336e4726d9.svg) repeat-x;position:absolute;top:calc(100vh - 50px)">
          </div> */}
              </div>
            </section>
            <section className="MuiBox-root css-f4552p" id="story">
              <div className="carousel-wrapper">
                <div className="carousel">
                  <div className="carousel animating">
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                  </div>
                  <div className="carousel animating">
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                    <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                  </div>
                </div>
              </div>
              {/* <section className="platinum">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
                  <div className="row">
                    <div className="col-md-4" id="we">
                      <div className="gif-center">
                        <img alt="burger" src="./img/FF22_Platinum-pass_R3_V1 (1).gif" className="learn-two" style={{width: '100%'}} />
                      </div>
                    </div>
                    <div className="col-md-8" id="platnium">
                      <div className="MuiBox-root css-yu5gdq" id="dsa">
                        <p className="MuiTypography-root MuiTypography-body1 css-dgauf8" id="dsa">Platinum Pass Story</p>
                        <h3 class="MuiTypography-root MuiTypography-h3 css-1ukdci3">The release of our Platinum Pass
                        will be
                        the
                        first drop for buyers. Each platinum pass holder will receive the benefits and special perks
                        the NFT
                        will contain.<br><br>
                        -Holders will receive whitelists and discounted prices for drops in the future. Another
                        benefit will
                        include special airdrops of limited edition FanFuse NFT’s.</h3>
                        <ul id="abs">
                          <li><p>The Platinum Pass will be the first drop from Fan Fuse</p></li>
                          <li><p>This will be our most valuable NFT due to the amazing utility to come</p></li>
                          <li><p>This pass will allow for automatic whitelists into EVERY Athlete we do a drop for</p></li>
                          <li><p>Every holder will also receive discounts to all future drops</p></li>
                          <li><p>Lastly, holders can receive exclusive airdrops and merchandise!</p></li>
                        </ul>
                        <div className="button_sold">
                          <a href="#">Coming Soon</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              <section className="about">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
                  <div className="row">
                    <div className="col-md-4" id="we">
                      <div className="gif-center1">
                        <img alt="burger" src="./img/FF_BB_First-edition_final.gif" className="learn-two" style={{width: '100%'}} />
                      </div>
                    </div>
                    <div className="col-md-8" id="platnium">
                      <div className="MuiBox-root css-yu5gdq" id="dsa">
                        <p className="MuiTypography-root MuiTypography-body1 css-dgauf8" id="dsa">BRYAN BRESEE NFT</p>
                        {/* <h3 class="MuiTypography-root MuiTypography-h3 css-1ukdci3">The release of our Platinum Pass
                      will be
                      the
                      first drop for buyers. Each platinum pass holder will receive the benefits and special perks
                      the NFT
                      will contain.<br><br>
                      -Holders will receive whitelists and discounted prices for drops in the future. Another
                      benefit will
                      include special airdrops of limited edition FanFuse NFT’s.</h3> */}
                        <ul id="abs">
                          <li><p>Bryan Bresee will be our first NFT athlete.</p></li>
                          <li><p>Holders of the NFT will have opportunity to win exclusive Bryan Bresee signed merchandise.</p></li>
                          <li><p>Every week, these exclusive prizes will be raffled off to NFT holders.</p></li>
                          <li><p>Owning the NFT for an increased duration allows holders to stay in contention for weekly raffles.</p></li>
                          <li><p>By collecting more, your odds of winning exclusive prices increase proportionally.</p></li>
                        </ul>
                        <div className="button_sold">
                          <a href="#">Coming Soon</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="platinum">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
                  <div className="row">
                    <div className="col-12" id="we">
                      <p className="MuiTypography-root MuiTypography-body1 css-dgauf8" id="dsa">NFT Rewards</p>
                      <ul id='abs'>
                        <li><p>Autographed Jerseys</p></li>
                        <li><p>Autographed Footballs</p></li>
                        <li><p>Autographed Mini Helmets</p></li>
                        <li><p>Autographed 24x36 Posters (laminated physical copy of NFT)</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section className="MuiBox-root css-1lsksb1" id="roadmap">
              <div data-sal="slide-up" data-sal-duration={600}>
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <div className="MuiBox-root css-yu5gdq">
                    <p className="MuiTypography-root MuiTypography-body1 css-dgauf8">RoadMap</p>
                    {/*  <h3 class="MuiTypography-root MuiTypography-h3 css-1ukdci3">Our team has experience at companies well*/}
                    {/*    known in the crypto and art world.</h3>*/}
                    {/*  <p class="MuiTypography-root MuiTypography-body1 css-1fl9y8k">Here’s where we’ve worked.</p>*/}
                    {/*</div>*/}
                    {/*<div class="css-1re5y05">*/}
                    {/*  <div class="css-6sutkm"><img alt="Coinbase" loading="lazy" style="width:100%"*/}
                    {/*      src="./img/download.svg" />*/}
                    {/*  </div>*/}
                    {/*  <div class="css-6sutkm"><img alt="nickelodeon" loading="lazy" style="width:100%"*/}
                    {/*      src="./img/nicolodeon.svg" />*/}
                    {/*  </div>*/}
                    {/*  <div class="css-6sutkm"><img alt="marvel" loading="lazy" style="width:100%" src="./img/marvel.svg" />*/}
                    {/*  </div>*/}
                    {/*  <div class="css-6sutkm"><img alt="disney" loading="lazy" style="width:100%" src="./img/disnep.svg" />*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div></section>
            {/* road map */}
            <section className="timeline py-5">
              <ul>
                <li>
                  <div>
                    <time>LOGO AND DESIGN</time> Created the fan fuse logo and design <img alt="Coinbase" loading="lazy" style={{width: '25px', marginLeft: '10px', marginTop: '-15px'}} src="./img/images-removebg-preview.png" />
                  </div>
                </li>
                <li>
                  <div>
                    <time>SIGN COLLEGIATE ATHLETE</time>Sign our first Collegiate Athlete to Fan Fuse <img alt="Coinbase" loading="lazy" style={{width: '25px', marginLeft: '10px', marginTop: '-15px'}} src="./img/images-removebg-preview.png" />
                  </div>
                </li>
                <li>
                  <div>
                    <time>WEBSITE/SMART CONTRACTS</time>Finish building the website and deploy smart contracts for the Bryan Bresee NFT <img alt="Coinbase" loading="lazy" style={{width: '25px', marginLeft: '10px'}} src="./img/images-removebg-preview.png" /> 
                  </div>
                </li>
                <li>
                  <div>
                    <time>BRYAN BRESEE LAUNCH (Q4)</time>This will be our first release, the Bryan Bresee NFT
                  </div>
                </li>
                <li>
                  <div>
                    <time>GIVEAWAYS</time>Holders of the NFT will be entered into raffles to receive signed footballs, jerseys, mini helmets, posters and more!
                  </div>
                </li>
                <li>
                  <div>
                    <time>EXPAND</time>Sign more athletes to Fan Fuse and launch their NFT’s
                  </div>
                </li>
              </ul>
            </section>
            <section id="the-team" className="css-1ot6j2k">
              <div data-sal="slide-up" data-sal-duration={600}>
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <div className="MuiBox-root css-yu5gdq">
                    <p className="MuiTypography-root MuiTypography-body1 css-dgauf8">The team</p>
                    <h3 className="MuiTypography-root MuiTypography-h3 css-1ukdci3">Our team is made up of avid sports fans
                      with a passion for the NFT space. We are ready to provide fans the opportunity to receive an
                      exclusive experience and interaction. </h3>
                  </div>
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-container css-5hlwkc">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 css-ly8fyw">
                  <div className="css-dvxtzn">
                    <div className="css-nt4h5t">
                      <div className="css-j7qwjs">
                        <figure className="MuiBox-root css-1be6zry"><img loading="lazy" src="./img/team-1.jpg" alt="[object Object]" width={245} height={245} /></figure>
                        <div className="MuiBox-root css-0"><span className="MuiTypography-root MuiTypography-body1 css-x3kjfu">
                            <div>Cole Cornell</div>
                          </span></div>
                        <div className="MuiBox-root css-164mdc"><span className="MuiTypography-root MuiTypography-body1 css-1859jix">Co-founder</span></div>
                        <div className="css-s65tko"><a href="https://www.instagram.com/colecornell/?utm_medium=copy_link"  target="_blank" rel="noreferrer"   ><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="32px" height="32px">
                              <g id="surface402413">
                                <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,100%,100%)', fillOpacity: 1}} d="M 11.46875 5 C 7.917969 5 5 7.914062 5 11.46875 L 5 20.53125 C 5 24.082031 7.914062 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 16 12 " />
                              </g>
                            </svg></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 css-ly8fyw">
                  <div className="css-dvxtzn">
                    <div className="css-nt4h5t">
                      <div className="css-j7qwjs">
                        <figure className="MuiBox-root css-1be6zry"><img loading="lazy" src="./img/team-2.jpg" alt="[object Object]" width={245} height={245} /></figure>
                        <div className="MuiBox-root css-0"><span className="MuiTypography-root MuiTypography-body1 css-x3kjfu">
                            <div>Ryan Gilligan</div>
                          </span></div>
                        <div className="MuiBox-root css-164mdc"><span className="MuiTypography-root MuiTypography-body1 css-1859jix">Co-founder</span></div>
                        <div className="css-s65tko"><a href="https://www.instagram.com/ryan_gilligan14/?utm_medium=copy_link"  target="_blank" rel="noreferrer"   ><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="32px" height="32px">
                              <g id="surface402413">
                                <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,100%,100%)', fillOpacity: 1}} d="M 11.46875 5 C 7.917969 5 5 7.914062 5 11.46875 L 5 20.53125 C 5 24.082031 7.914062 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 16 12 " />
                              </g>
                            </svg></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 css-ly8fyw">
                  <div className="css-dvxtzn">
                    <div className="css-nt4h5t">
                      <div className="css-j7qwjs">
                        <figure className="MuiBox-root css-1be6zry"><img loading="lazy" src="./img/team-3.png" alt="[object Object]" width={245} height={245} /></figure>
                        <div className="MuiBox-root css-0"><span className="MuiTypography-root MuiTypography-body1 css-x3kjfu">
                            <div>Bryan Bresee</div>
                          </span></div>
                        <div className="MuiBox-root css-164mdc"><span className="MuiTypography-root MuiTypography-body1 css-1859jix">Recruiter</span></div>
                        <div className="css-s65tko"><a href="https://www.instagram.com/bryan_bresee/?utm_medium=copy_link"  target="_blank" rel="noreferrer"   ><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="32px" height="32px">
                              <g id="surface402413">
                                <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,100%,100%)', fillOpacity: 1}} d="M 11.46875 5 C 7.917969 5 5 7.914062 5 11.46875 L 5 20.53125 C 5 24.082031 7.914062 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 16 12 " />
                              </g>
                            </svg></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 css-ly8fyw">
                  <div className="css-dvxtzn">
                    <div className="css-nt4h5t">
                      <div className="css-j7qwjs">
                        <figure className="MuiBox-root css-1be6zry"><img loading="lazy" src="./img/team-4.png" alt="[object Object]" width={245} height={245} /></figure>
                        <div className="MuiBox-root css-0"><span className="MuiTypography-root MuiTypography-body1 css-x3kjfu">
                            <div>Jim Sullivan</div>
                          </span></div>
                        <div className="MuiBox-root css-164mdc"><span className="MuiTypography-root MuiTypography-body1 css-1859jix">Designer</span></div>
                        <div className="css-s65tko"><a href="https://www.instagram.com/jimb0slice3/?utm_medium=copy_link"  target="_blank" rel="noreferrer"   ><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="32px" height="32px">
                              <g id="surface402413">
                                <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,100%,100%)', fillOpacity: 1}} d="M 11.46875 5 C 7.917969 5 5 7.914062 5 11.46875 L 5 20.53125 C 5 24.082031 7.914062 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 16 12 " />
                              </g>
                            </svg></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*         <section class="MuiBox-root css-to8t8v" id="specs">*/}
            {/*           <div data-sal="slide-up" data-sal-duration="600">*/}
            {/*             <div class="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz"*/}
            {/*               style="display:flex;justify-content:center;flex-direction:column">*/}
            {/*               <div class="MuiBox-root css-yu5gdq">*/}
            {/*                 <p class="MuiTypography-root MuiTypography-body1 css-dgauf8">Bryan Bresee Story</p>*/}
            {/*                 <h3 class="MuiTypography-root MuiTypography-h3 css-1ukdci3">Bryan Bresee will be a part of our first NFT collection. Holders of the NFT have the opportunity to win exclusive rewards and prizes associated with Bryan.*/}
            {/*With more athletes signing, the chance to win player specific rewards will continue to occur.</h3>*/}
            {/*                 <img src="./img/FF_BB_First-edition_final.gif" class="spec-learn" alt="">*/}
            {/*               </div>*/}
            {/*             </div>*/}
            {/*           </div>*/}
            {/*         </section>*/}
            <section className="MuiBox-root css-zcj3d" id="faq">
              <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
                <div className="MuiBox-root css-yu5gdq">
                  <p className="MuiTypography-root MuiTypography-body1 css-dgauf8">FAQ</p>
                  <h3 className="MuiTypography-root MuiTypography-h3 css-1ukdci3" />
                </div>
                <div data-accordion-component="Accordion" className="accordion">
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-0" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-0" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">what are platinum passes?</div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-0" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        Platinum Passes are a unique membership NFT to the Fan Fuse brand. With this NFT you will receive
                        whitelists for every future athlete we make an NFT for. You will also receive discounts for mints
                        and exclusive airdrops such as free merchandise</p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-1" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-1" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">How can I get a platinum pass?</div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-1" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        You can acquire a pass through engaging in our discord or reposting on your social media.
                        Otherwise you can mint during the public sale or later purchase on opensea.
                      </p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-2" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-2" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">When is mint?</div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-2" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        The mint is TBA but we are aiming for early July of this year.
                      </p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-3" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-3" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">What are the funds raised being used for?</div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-3" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        We have the ability to sign several more athletes and will use the capital to expand the FanFuse
                        brand.
                      </p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-4" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-4" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">When is Bryan Bresee’s NFT?</div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-4" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        We plan on launching his NFT about a month after the Platinum Pass drop.</p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-5" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">Mint price?
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-5" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        TBD</p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-5" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">What does Whitelist mean?
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-5" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        Think of Whitelist as getting access into the pre-sale or early access. This also guarantees you a
                        spot to mint an NFT and pay cheaper ethereum gas fees compared to the public sale.</p>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItem" className="accordion__item">
                    <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level={3}>
                      <div className="accordion__button" style={{fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.011em'}} id="accordion__heading-raa-5" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button" tabIndex={0} data-accordion-component="AccordionItemButton">How can I contact Fan Fuse?
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-raa-5" hidden>
                      <p className="faq-body-content" style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '200%', paddingLeft: '23px'}}>
                        You can reach us by email through <a href="mailto:fanfuseinc@gmail.com">fanfuseinc@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="MuiBox-root css-1emysvz">
            <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
              <div className="MuiBox-root css-16bwkck">
                <p className="MuiTypography-root MuiTypography-body1 css-eu5tz3">© 2022 Fanfuse All Right Reserved.</p>
                {/*-- <div style="display:flex;gap:50px"><a
              href="#"
               target="_blank" rel="noreferrer"    style="text-decoration:none">
              <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Privacy Policy</p>
            </a><a
              href="#"
               target="_blank" rel="noreferrer"    style="text-decoration:none">
              <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Terms of service</p>
            </a></div> ---*/}
              </div>
              <div className="footer-content-mobile">
                <div><a href="https://discord.gg/ChPQ9PempP"  target="_blank" rel="noreferrer"    style={{textDecoration: 'none'}}><img alt="discord" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MSA1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzEgNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMjEyNTY0Nzc0MTA1Mzc2ODQyMzAwMDAwMDE1NDYwNTkzMDg5MzcyNDU4NjNfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxkZWZzPgoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgeT0iMCIgd2lkdGg9IjcxIiBoZWlnaHQ9IjU1Ii8+Cgk8L2RlZnM+Cgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTc0NjAwNTI3NDQ0NTM1NDc4OTIwMDAwMDAzMDk0MzQyMjExODcyODYwNTcyXyI+CgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCTwvY2xpcFBhdGg+Cgk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzQ2MDA1Mjc0NDQ1MzU0Nzg5MjAwMDAwMDMwOTQzNDIyMTE4NzI4NjA1NzJfKTtmaWxsOiNGRkZGRkY7IiBkPSJNNjAuMSw0LjkKCQljLTQuNS0yLjEtOS40LTMuNi0xNC41LTQuNWMtMC4xLDAtMC4yLDAtMC4yLDAuMWMtMC42LDEuMS0xLjMsMi42LTEuOCwzLjdjLTUuNS0wLjgtMTAuOS0wLjgtMTYuMiwwYy0wLjUtMS4yLTEuMi0yLjYtMS44LTMuNwoJCWMwLTAuMS0wLjEtMC4xLTAuMi0wLjFjLTUuMSwwLjktOS45LDIuNC0xNC41LDQuNWMwLDAtMC4xLDAtMC4xLDAuMUMxLjYsMTguNy0wLjksMzIuMSwwLjMsNDUuNGMwLDAuMSwwLDAuMSwwLjEsMC4yCgkJYzYuMSw0LjUsMTIsNy4yLDE3LjcsOWMwLjEsMCwwLjIsMCwwLjItMC4xYzEuNC0xLjksMi42LTMuOCwzLjYtNS45YzAuMS0wLjEsMC0wLjMtMC4xLTAuM2MtMS45LTAuNy0zLjgtMS42LTUuNS0yLjYKCQljLTAuMS0wLjEtMC4yLTAuMywwLTAuNGMwLjQtMC4zLDAuNy0wLjYsMS4xLTAuOWMwLjEtMC4xLDAuMi0wLjEsMC4yLDBjMTEuNiw1LjMsMjQuMiw1LjMsMzUuNywwYzAuMSwwLDAuMiwwLDAuMiwwCgkJYzAuNCwwLjMsMC43LDAuNiwxLjEsMC45YzAuMSwwLjEsMC4xLDAuMywwLDAuNGMtMS44LDEtMy42LDEuOS01LjUsMi42Yy0wLjEsMC0wLjIsMC4yLTAuMSwwLjNjMS4xLDIuMSwyLjMsNCwzLjYsNS45CgkJYzAuMSwwLjEsMC4yLDAuMSwwLjIsMC4xYzUuOC0xLjgsMTEuNy00LjUsMTcuOC05YzAuMSwwLDAuMS0wLjEsMC4xLTAuMkM3Mi4yLDMwLjEsNjguMiwxNi44LDYwLjEsNC45QzYwLjIsNC45LDYwLjEsNC45LDYwLjEsNC45CgkJeiBNMjMuNywzNy4zYy0zLjUsMC02LjQtMy4yLTYuNC03LjJzMi44LTcuMiw2LjQtNy4yYzMuNiwwLDYuNCwzLjIsNi40LDcuMkMzMC4xLDM0LjEsMjcuMywzNy4zLDIzLjcsMzcuM3ogTTQ3LjMsMzcuMwoJCWMtMy41LDAtNi40LTMuMi02LjQtNy4yczIuOC03LjIsNi40LTcuMmMzLjYsMCw2LjQsMy4yLDYuNCw3LjJDNTMuNywzNC4xLDUwLjksMzcuMyw0Ny4zLDM3LjN6Ii8+CjwvZz4KPC9zdmc+Cg==" style={{width: '32px', marginRight: '43px'}} /></a><a href="https://twitter.com/FanFuseInc"  target="_blank" rel="noreferrer"    style={{textDecoration: 'none'}}><img alt="twitter" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC40IHI5OTM5IiBzb2RpcG9kaTpkb2NuYW1lPSJUd2l0dGVyX2JpcmRfbG9nb18yMDEyLnN2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxNzEuNSAxMzkuNCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNzEuNSAxMzkuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8c29kaXBvZGk6bmFtZWR2aWV3ICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjEwMS4yOTQxMyIgaW5rc2NhcGU6Y3k9IjUwLjE4MTE0MiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOnpvb209IjMuNzIwMDU3MSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiPgoJPC9zb2RpcG9kaTpuYW1lZHZpZXc+CjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODIuMzIwNTMsLTM5Ni4zMDczNCkiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIj4KCTxwYXRoIGlkPSJwYXRoNSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xhc3M9InN0MCIgZD0iTTQ1My44LDQxMi44Yy02LjMsMi44LTEzLjEsNC43LTIwLjIsNS41CgkJYzcuMy00LjQsMTIuOC0xMS4yLDE1LjUtMTkuNWMtNi44LDQtMTQuMyw3LTIyLjMsOC41Yy02LjQtNi44LTE1LjYtMTEuMS0yNS43LTExLjFjLTE5LjQsMC0zNS4yLDE1LjgtMzUuMiwzNS4yCgkJYzAsMi44LDAuMyw1LjQsMC45LDhjLTI5LjItMS41LTU1LjItMTUuNS03Mi41LTM2LjhjLTMsNS4yLTQuOCwxMS4yLTQuOCwxNy43YzAsMTIuMiw2LjIsMjMsMTUuNywyOS4zYy01LjgtMC4yLTExLjItMS44LTE1LjktNC40CgkJYzAsMC4xLDAsMC4zLDAsMC40YzAsMTcsMTIuMSwzMS4zLDI4LjIsMzQuNWMtMywwLjgtNi4xLDEuMi05LjMsMS4yYy0yLjMsMC00LjUtMC4yLTYuNi0wLjZjNC41LDE0LDE3LjUsMjQuMiwzMi45LDI0LjQKCQljLTEyLDkuNC0yNy4yLDE1LjEtNDMuNywxNS4xYy0yLjgsMC01LjYtMC4yLTguNC0wLjVjMTUuNiwxMCwzNC4xLDE1LjgsNTMuOSwxNS44YzY0LjcsMCwxMDAuMS01My42LDEwMC4xLTEwMC4xCgkJYzAtMS41LDAtMy0wLjEtNC42QzQ0My4xLDQyNi4xLDQ0OS4xLDQxOS45LDQ1My44LDQxMi44TDQ1My44LDQxMi44eiIvPgo8L2c+Cjwvc3ZnPgo=" style={{width: '32px'}} /></a></div>
                <p className="MuiTypography-root MuiTypography-body1 css-eu5tz3">© 2022 Fanfuse All Right Reserved.</p>{/*-<a
            href="#"
             target="_blank" rel="noreferrer"    style="text-decoration:none">
            <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Privacy Policy</p>
          </a><a
            href="#"
             target="_blank" rel="noreferrer"    style="text-decoration:none">
            <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Terms of service</p>
          </a>--*/}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
<script src='./js/custom.js'></script>
  </div>
  )
}
