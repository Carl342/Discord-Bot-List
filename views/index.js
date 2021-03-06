<!DOCTYPE html>
<html>

<head>
    <meta property="og:title" content="Discord Bots" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Just another bot list for discord..." />
    <meta name="description" content="Just another bot list for discord..." />
    <meta name="og:image" content="/assets/logo.png" />
    <meta name="theme-color" content="#d2efe6" />
    <link href="https://fonts.googleapis.com/icon?family=Markazi+Text" rel="stylesheet">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link rel="shortcut icon" type="image/png" href="/assets/logo.png" />
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
    <script src="script.js"></script>
    <script src="/main/script.js"></script>
    <link href="main.css" rel="stylesheet">
    <title>Discord Bots</title>
</head>

<body onload="load()">
    <div id="navTop">
        <a class="nav link" href="/">
            <img src="/logo.png">

            <span class="navtag">
          <span class="navtext">Discord Bot List</span>
            <svg class="arrow" viewbox="0 0 18 35" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" fill="none" fill-rule="evenodd"><g id="community/header" fill="#3369E6"><g id="Group-13"><g id="Group-2"><path id="Combined-Shape-Copy" d="M1.8537 34.7643l15.5597-17.268L1.8537 0H0l15.5597 17.4964L0 34.7644z"></path></g></g></g></g></svg>
            </span>
        </a>
        <a class="navtag search" id="searcher" href="/search/">
            <img id="searchimg" src="/search.png" width="26px" height="26px">
            <div class="navtext" id="search">Search</div>
        </a>
        <span class="dropdown">
        <a class="navtag" id="login" href="/api/discord/login">Login</a>
        <span class="dd-content">
          <a href="/join" target="_blank">Join Server</a><br />
          <a href="/add">Add bot</a><br />
          <a href="/theme">Toggle Theme</a><br />
          <a href="/logout">Logout</a>
        </span>
        </span>
    </div>
    <div id="content">

        <span class="header">
        <h1>Discord Bot List</h1>
        <p>Just another bot list for Discord.</p>
      </span>

        <div id="searchMore">
            Would you like to <a href="/search/">search all bots</a>
        </div>

        <div id="cards">
            <span id="loading">Loading...</span>
        </div>
    </div>

</body>

</html>
