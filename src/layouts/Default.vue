<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="logo" to="/">Noah Rahm</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav-link" to="/about/">About</g-link>
        <g-link class="nav-link" to="/contact/">Contact</g-link>
        <g-link class="nav-link" to="/contact/">Hire Me</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
        <div class="footer-links">
          <a href="https://github.com/Correct-Syntax"><g-image src="~/img/github.svg" /></a>
          <a href="https://www.linkedin.com/in/noah-r-designer-developer"><g-image src="~/img/linkedin.svg" /></a>
          <a href="https://stackoverflow.com/users/12787591/correctsyntax"><g-image src="~/img/stackoverflow.svg" /></a>
          <a href="mailto:hi@noahrahm.com"><g-image src="~/img/mail.svg" /></a>
        </div>
        <p class="copy">&copy; 2021 Noah Rahm &bullet; Lovingly crafted and generated with Gridsome</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.logo {
  opacity: 0.9;
  color: #cee8f1;
  font-family: "Prompt", Arial, sans-serif;
  font-size: 26px;
  font-weight: 500;
  text-decoration: none;
}
.logo:hover {
  opacity: 1;
}
.layout {
  max-width: 920px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  height: 90px;
}
.nav-link {
  color: #fff;
  opacity: 0.8;
  margin: .8rem;
  text-decoration: none;
  font-size: 16px;
}
.nav-link:hover {
  opacity: 1;
}
footer {
  margin-top: 7rem;
  margin-bottom: 2rem;
}
footer .copy {
  opacity: 0.8;
  color: #b3cbe0;
  font-size: 14px;
}
.footer-links a {
  margin-right: .5rem;
}


@media only screen and (max-width: 600px) {
  body {
    border: none;
  }
  .header {
    margin: 1.2rem;
    text-align: center;
    display: block;
    justify-content: space-between;
  }
}

</style>
