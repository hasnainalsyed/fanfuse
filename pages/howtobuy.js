import Link from 'next/link'
export default function HowtoBuy() {

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
        <link rel="icon" href="favicon-32x32f5f8.png" type="image/png" />
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
        <link rel="stylesheet" href="./css/b5319e28e9acce7a0690.css" />
        <style dangerouslySetInnerHTML={{__html: "\n      .text-dark {\n          color: #b9000c !important;\n      }\n      a.text-dark:hover {\n          color: #b9000c !important;\n      }\n  " }} />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div id="myNav" className="overlay">
                  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                  <div className="overlay-content">
                    <Link href="/">
                      <img src="./img/logo.png" alt="" />
                    </Link>
                  <a href="#roadmap">Roadmap</a>
                  <a href="#the-team">The Team</a>
                  <a href="#faq">Faq</a>
                  <Link href="/howtobuy">
                    How To Buy
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="MuiBox-root css-z68yxt">
            <div className="sticky-outer-wrapper">
              <div className="sticky-inner-wrapper" style={{position: 'relative', top: '0px', zIndex: 10}}>
                <header className="MuiBox-root css-1xtl0nc">
                  <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
                    <div className="MuiBox-root css-19djux0">
                      <div className="css-vj1yze">
                      <Link href="/" className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-tmfh84">
                        <img src="./img/logo.png" alt="Notorious Alien Space Agents" style={{width: '80px', height: '70px'}} />
                    
                        </Link>
                      </div>
                      <span className="open-nav"   onClick={openNav}>☰</span>
                      <nav className="navbar MuiBox-root css-1p4if4b">
                        <ul className="MuiBox-root css-mgmaga">
                          <li />
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#about-us" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>About Us</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#roadmap" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>Roadmap</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#the-team" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>The Team</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="index.html#faq" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>FAQ</a>
                          </li>
                          <li><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-11xb6fj" href="#how-to-buy" style={{textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '18px', fontStyle: 'normal'}}>How To Buy</a>
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
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jywaro"  target="_blank" rel="noreferrer"  href="https://www.instagram.com/fanfuseinc/"><img alt="twitter" src="../img/icons8-instagram-32.png" width="40px" /></a></div>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </section>
        <section id="home" className="bg-how-to-buy py-5 overflow-x-clip">
          <div className="container pt-5 pb-md-5 mt-lg-5 mb-xl-5">
            <div className="pb-xxl-5 pt-lg-5">
              <div className=" row justify-content-center align-items-center pt-5 text-center ">
                <div className="col-sm-7 col-lg-5 col-xxl-4">
                  <h1 className="mb-5 newbies">How to buy our NFTs?</h1>
                </div>
                <div className="col-12" />
                <div className="col-sm-8">
                  <p className="text-white">Do you want to become part of the FanFuse NFT holders’
                    community and invest in FanFuse NFTs but have no clue how it works? No worries
                    — we’ve got you covered! On this page, we will explain to you step-by-step what NFTs
                    are, why you should consider buying the FanFuse NFTs, and how you can purchase
                    (mint) them when the time comes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-5">
          <div className="container py-md-5 my-xxl-5">
            <div className="row justify-content-center align-items-center text-center text-white">
              <div className="col-12">
                <h1 className="mb-5">What are NFTs?</h1>
              </div>
              <div className="col-12" />
              <div className="col-lg-8">
                <p>NFTs, or non-fungible-tokens are unique (irreplaceable, irreplicable) digital files. In our
                  case, they are in the form of unique illustrations. At the moment, most NFTs (Fan Fuse
                  included) are part of the Ethereum blockchain (which means that you need to have some ETH in
                  order to buy your own NFT). One could say that, in a way, NFTs are modern digital art, which
                  can, of course, in the same way as the traditional art, grow in value over time.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="purchase" className="py-5">
          <div className="container py-md-5 my-xxl-5">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-lg-9">
                <h1 className="mb-5">How can I purchase (mint) the FanFuse NFTs?</h1>
              </div>
              <div className="col-12" />
              <div className="col-lg-7">
                <p>For someone new to the NFT world, the purchasing process might seem a little confusing—and we
                  get it. Let us show you step-by-step instructions on how you can buy your own FanFuse NFT in just a few minutes.</p>
              </div>
            </div>
            <div className="row justify-content-center mt-5 pt-lg-5">
              <div className="col-auto text-center"><span className="line-dot dot-lg top-0">1</span><span className="line-straight" /></div>
              <div className="col col-lg-8 pt-2 pb-5">
                <h3 className="mb-5">Buy some ETH (Ethereum)</h3>
                <p>FanFuse NFTs use the Ethereum network (each Great Brain is an ERC-721 token). On
                  the minting day, each FanFuse NFT will cost 0.15 ETH + “gas fees” (fees paid for
                  using the Ethereum network). So we recommend having 0.15 ETH + gas for each FanFuse NFT purchase. You can buy your ETH, for example, through Binance/Coinbase/or any
                  other major cryptocurrency exchange.</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto text-center"><span className="line-dot dot-lg top-0">2</span><span className="line-straight" /></div>
              <div className="col col-lg-8 pt-2 pb-5">
                <h3 className="mb-5">Install a crypto wallet and link it with your account on the cryptocurrency
                  exchange.</h3>
                <p>For the next step, you will need to install a cryptocurrency wallet called<a href="#"  target="_blank" rel="noreferrer"  className="text-dark">Metamask</a>. After you have your wallet set up, connect it with your
                  account on the cryptocurrency exchange.</p>
                <p>The last thing is to connect your wallet with our website (you can see if you are connected
                  or not by the sign, CONNECTED or DISCONNECTED, in the top-right corner of our website). The
                  easiest way is to add your wallet (for example, Metamask) as an extension to your web
                  browser (for example, Google Chrome).</p>
                <p>Now, you are ready to buy your NFTs!</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto text-center"><span className="line-dot dot-lg top-0">3</span></div>
              <div className="col col-lg-8 pt-2">
                <h3 className="mb-5">Buy your FanFuse NFTs!</h3>
                <p>After the drop, you will be able to easily mint (minting basically means the initial purchase
                  of an NFT collection) your own Fan Fuse! That’s amazing, isn’t it? ☺ After you buy your
                  NFTs, they will be automatically moved into your wallet. After the minting, yours and
                  others’ FanFuse NFTs will be available for resale and further trading on <a href="#"  target="_blank" rel="noreferrer"  className="text-dark"> OpenSea.io</a>.</p>
                {/*-- <div class=" row align-items-center mx-0 rounded-md text-white bg-dark fw-regular w-100 py-2 ">
                        <div class="col-auto py-3 ps-4 pe-3"><i class="icon-bulb fs-5"></i></div>
                        <div class="col ps-0 fs-7 fw-regular"><strong>Tip:</strong> We highly recommend
                            buying<strong>at least three Great Brains NFTs</strong>. You will discover why in the
                            near future!</div>
                    </div> -*/}
              </div>
            </div>
          </div>
        </section>
        <section className="MuiBox-root css-f4552p" id="story">
          <div className="carousel-wrapper">
            <div className="carousel">
              <div className="carousel animating">
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
              </div>
              <div className="carousel animating">
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF22_Platinum-pass_R3_V1 (1).gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
                <div className="carousel__photo"><img src="./img/FF_BB_First-edition_final.gif" alt="cat" style={{width: '230px', marginBottom: '30px'}} width={230} /></div>
              </div>
            </div>
          </div>
        </section>
        <footer className="MuiBox-root css-1emysvz">
          <div className="MuiContainer-root MuiContainer-maxWidthLg css-4q4avz">
            <div className="MuiBox-root css-16bwkck">
              <p className="MuiTypography-root MuiTypography-body1 css-eu5tz3">© 2022 Fanfuse All Right Reserved.</p>
              {/*--<div style="display:flex;gap:50px"><a
                href="#"
                 target="_blank" rel="noreferrer"    style="text-decoration:none">
                <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Privacy Policy</p>
              </a><a
                href="#"
                 target="_blank" rel="noreferrer"    style="text-decoration:none">
                <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Terms of service</p>
              </a></div>-*/}
            </div>
            <div className="footer-content-mobile">
              <div><a href="https://discord.gg/notoriousaliens"  target="_blank" rel="noreferrer"    style={{textDecoration: 'none'}}><img alt="discord" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MSA1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzEgNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMjEyNTY0Nzc0MTA1Mzc2ODQyMzAwMDAwMDE1NDYwNTkzMDg5MzcyNDU4NjNfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxkZWZzPgoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgeT0iMCIgd2lkdGg9IjcxIiBoZWlnaHQ9IjU1Ii8+Cgk8L2RlZnM+Cgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTc0NjAwNTI3NDQ0NTM1NDc4OTIwMDAwMDAzMDk0MzQyMjExODcyODYwNTcyXyI+CgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCTwvY2xpcFBhdGg+Cgk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzQ2MDA1Mjc0NDQ1MzU0Nzg5MjAwMDAwMDMwOTQzNDIyMTE4NzI4NjA1NzJfKTtmaWxsOiNGRkZGRkY7IiBkPSJNNjAuMSw0LjkKCQljLTQuNS0yLjEtOS40LTMuNi0xNC41LTQuNWMtMC4xLDAtMC4yLDAtMC4yLDAuMWMtMC42LDEuMS0xLjMsMi42LTEuOCwzLjdjLTUuNS0wLjgtMTAuOS0wLjgtMTYuMiwwYy0wLjUtMS4yLTEuMi0yLjYtMS44LTMuNwoJCWMwLTAuMS0wLjEtMC4xLTAuMi0wLjFjLTUuMSwwLjktOS45LDIuNC0xNC41LDQuNWMwLDAtMC4xLDAtMC4xLDAuMUMxLjYsMTguNy0wLjksMzIuMSwwLjMsNDUuNGMwLDAuMSwwLDAuMSwwLjEsMC4yCgkJYzYuMSw0LjUsMTIsNy4yLDE3LjcsOWMwLjEsMCwwLjIsMCwwLjItMC4xYzEuNC0xLjksMi42LTMuOCwzLjYtNS45YzAuMS0wLjEsMC0wLjMtMC4xLTAuM2MtMS45LTAuNy0zLjgtMS42LTUuNS0yLjYKCQljLTAuMS0wLjEtMC4yLTAuMywwLTAuNGMwLjQtMC4zLDAuNy0wLjYsMS4xLTAuOWMwLjEtMC4xLDAuMi0wLjEsMC4yLDBjMTEuNiw1LjMsMjQuMiw1LjMsMzUuNywwYzAuMSwwLDAuMiwwLDAuMiwwCgkJYzAuNCwwLjMsMC43LDAuNiwxLjEsMC45YzAuMSwwLjEsMC4xLDAuMywwLDAuNGMtMS44LDEtMy42LDEuOS01LjUsMi42Yy0wLjEsMC0wLjIsMC4yLTAuMSwwLjNjMS4xLDIuMSwyLjMsNCwzLjYsNS45CgkJYzAuMSwwLjEsMC4yLDAuMSwwLjIsMC4xYzUuOC0xLjgsMTEuNy00LjUsMTcuOC05YzAuMSwwLDAuMS0wLjEsMC4xLTAuMkM3Mi4yLDMwLjEsNjguMiwxNi44LDYwLjEsNC45QzYwLjIsNC45LDYwLjEsNC45LDYwLjEsNC45CgkJeiBNMjMuNywzNy4zYy0zLjUsMC02LjQtMy4yLTYuNC03LjJzMi44LTcuMiw2LjQtNy4yYzMuNiwwLDYuNCwzLjIsNi40LDcuMkMzMC4xLDM0LjEsMjcuMywzNy4zLDIzLjcsMzcuM3ogTTQ3LjMsMzcuMwoJCWMtMy41LDAtNi40LTMuMi02LjQtNy4yczIuOC03LjIsNi40LTcuMmMzLjYsMCw2LjQsMy4yLDYuNCw3LjJDNTMuNywzNC4xLDUwLjksMzcuMyw0Ny4zLDM3LjN6Ii8+CjwvZz4KPC9zdmc+Cg==" style={{width: '32px', marginRight: '43px'}} /></a><a href="https://twitter.com/NotoriousAliens"  target="_blank" rel="noreferrer"    style={{textDecoration: 'none'}}><img alt="twitter" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC40IHI5OTM5IiBzb2RpcG9kaTpkb2NuYW1lPSJUd2l0dGVyX2JpcmRfbG9nb18yMDEyLnN2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxNzEuNSAxMzkuNCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNzEuNSAxMzkuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8c29kaXBvZGk6bmFtZWR2aWV3ICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjEwMS4yOTQxMyIgaW5rc2NhcGU6Y3k9IjUwLjE4MTE0MiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NjIiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgaW5rc2NhcGU6d2luZG93LXg9Ii04IiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOnpvb209IjMuNzIwMDU3MSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiPgoJPC9zb2RpcG9kaTpuYW1lZHZpZXc+CjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODIuMzIwNTMsLTM5Ni4zMDczNCkiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIj4KCTxwYXRoIGlkPSJwYXRoNSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xhc3M9InN0MCIgZD0iTTQ1My44LDQxMi44Yy02LjMsMi44LTEzLjEsNC43LTIwLjIsNS41CgkJYzcuMy00LjQsMTIuOC0xMS4yLDE1LjUtMTkuNWMtNi44LDQtMTQuMyw3LTIyLjMsOC41Yy02LjQtNi44LTE1LjYtMTEuMS0yNS43LTExLjFjLTE5LjQsMC0zNS4yLDE1LjgtMzUuMiwzNS4yCgkJYzAsMi44LDAuMyw1LjQsMC45LDhjLTI5LjItMS41LTU1LjItMTUuNS03Mi41LTM2LjhjLTMsNS4yLTQuOCwxMS4yLTQuOCwxNy43YzAsMTIuMiw2LjIsMjMsMTUuNywyOS4zYy01LjgtMC4yLTExLjItMS44LTE1LjktNC40CgkJYzAsMC4xLDAsMC4zLDAsMC40YzAsMTcsMTIuMSwzMS4zLDI4LjIsMzQuNWMtMywwLjgtNi4xLDEuMi05LjMsMS4yYy0yLjMsMC00LjUtMC4yLTYuNi0wLjZjNC41LDE0LDE3LjUsMjQuMiwzMi45LDI0LjQKCQljLTEyLDkuNC0yNy4yLDE1LjEtNDMuNywxNS4xYy0yLjgsMC01LjYtMC4yLTguNC0wLjVjMTUuNiwxMCwzNC4xLDE1LjgsNTMuOSwxNS44YzY0LjcsMCwxMDAuMS01My42LDEwMC4xLTEwMC4xCgkJYzAtMS41LDAtMy0wLjEtNC42QzQ0My4xLDQyNi4xLDQ0OS4xLDQxOS45LDQ1My44LDQxMi44TDQ1My44LDQxMi44eiIvPgo8L2c+Cjwvc3ZnPgo=" style={{width: '32px'}} /></a></div>
              <p className="MuiTypography-root MuiTypography-body1 css-eu5tz3">© 2022 Fanfuse All Right Reserved.</p>{/*-<a
              href="#"
               target="_blank" rel="noreferrer"    style="text-decoration:none">
              <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Privacy Policy</p>
            </a><a
              href="#s"
               target="_blank" rel="noreferrer"    style="text-decoration:none">
              <p class="MuiTypography-root MuiTypography-body1 css-eu5tz3">Terms of service</p>
            </a>--*/}
            </div>
          </div>
        </footer>
      </div>
      
      )
}