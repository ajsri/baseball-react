import React, { Component } from 'react'
import { Link } from 'react-router'

import Navbar from './navbar/navbar'

class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
    <div className="row">
      <div className="col-md-12 main-column">
        

<div className="row">
  <div className="col-sm-12">
    <div className="cyclops-hero">
      <div className="logo">
        <svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" >
        <g>
          <circle fill="#00853F" cx="100" cy="100" r="100"></circle>
          <circle fill="#FFFFFF" cx="100" cy="100" r="80"></circle>
          <circle fill="#8CC63F" cx="100" cy="100" r="50"></circle>
          <circle cx="100" cy="100" r="20"></circle>
          <circle fill="#FFFFFF" cx="109.7" cy="90.1" r="6"></circle>
        </g>
        </svg>
      </div>
      <h1>CYCLOPS</h1>
      <p className="lead">The UX/UI Pattern Guide for the CenturyLink Platform</p>
      <p><a href="//github.com/CenturyLinkCloud/Cyclops" className="btn btn-lg btn-outline">github repo</a></p>
      <p><small>v 1.4.0</small></p>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <h2>Get Started</h2>
        <p>Cyclops is hosted on the <a href="http://assets.ctl.io/">CenturyLink Platform assets server</a> for anyone to use. Add <code>.cyclops</code> to the <code>html</code> tag to properly scope the styles. This allows Cyclops to override any existing styles that have been defined by legacy markup.</p>
        <pre>          <code className="html hljs xml">
          <span className="hljs-tag">&lt;<span className="hljs-title">html</span> <span className="hljs-attribute">lang</span>=<span className="hljs-value">"en"</span> <span className="hljs-attribute">class</span>=<span className="hljs-value">"cyclops"</span>&gt;</span>
          </code>
        </pre>

        <p>Then, include these links in your page layouts:</p>
        <pre>          <code className="html hljs xml">
          <span className="hljs-comment">&lt;!-- In between the head tags --&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">link</span> <span className="hljs-attribute">href</span>=<span className="hljs-value">"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"</span> <span className="hljs-attribute">rel</span>=<span className="hljs-value">"stylesheet"</span> <span className="hljs-attribute">type</span>=<span className="hljs-value">"text/css"</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">link</span> <span className="hljs-attribute">href</span>=<span className="hljs-value">"https://assets.ctl.io/cyclops/1.4.0/css/cyclops.min.css"</span> <span className="hljs-attribute">rel</span>=<span className="hljs-value">"stylesheet"</span> <span className="hljs-attribute">type</span>=<span className="hljs-value">"text/css"</span> /&gt;</span>
          <span className="hljs-comment">&lt;!-- your styles here --&gt;</span>

          <span className="hljs-comment">&lt;!-- ...page content... --&gt;</span>

          <span className="hljs-comment">&lt;!-- bottom of page --&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://code.jquery.com/jquery-2.1.4.min.js"</span> &gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"</span> &gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://cdnjs.cloudflare.com/ajax/libs/knockout-validation/2.0.3/knockout.validation.min.js"</span> &gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://assets.ctl.io/cyclops/1.4.0/scripts/cyclops.min.js"</span> &gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
          <span className="hljs-comment">&lt;!-- your scripts here --&gt;</span>
          </code>
        </pre>

        <p>
          Not all of the javaScript libraries are strictly required. However, becuase they are
          referenced from a CDN, and are likely already cached client side, it is best practice to
          just include all the dependencies. If you really want to exclude some please take a
          look at the <a href="./dependencies.html">dependencies page</a> to determine what is needed.
        </p>

        <h2>Basic HTML Template</h2>
        <p>Start with this basic HTML template, or modify <a href="./pages.html">these examples</a> to suit your needs.</p>
        <pre>          <code className="html hljs xml">
          <span className="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
          <span className="hljs-tag">&lt;<span className="hljs-title">html</span> <span className="hljs-attribute">lang</span>=<span className="hljs-value">"en"</span> <span className="hljs-attribute">class</span>=<span className="hljs-value">"cyclops"</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-title">head</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">meta</span> <span className="hljs-attribute">charset</span>=<span className="hljs-value">"utf-8"</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">meta</span> <span className="hljs-attribute">http-equiv</span>=<span className="hljs-value">"X-UA-Compatible"</span> <span className="hljs-attribute">content</span>=<span className="hljs-value">"IE=edge"</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">meta</span> <span className="hljs-attribute">name</span>=<span className="hljs-value">"viewport"</span> <span className="hljs-attribute">content</span>=<span className="hljs-value">"width=device-width, initial-scale=1"</span>&gt;</span>
              <span className="hljs-comment">&lt;!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">title</span>&gt;</span>Cyclops 101 Template<span className="hljs-tag">&lt;/<span className="hljs-title">title</span>&gt;</span>

              <span className="hljs-comment">&lt;!-- Cyclops --&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">link</span> <span className="hljs-attribute">href</span>=<span className="hljs-value">"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"</span> <span className="hljs-attribute">rel</span>=<span className="hljs-value">"stylesheet"</span> <span className="hljs-attribute">type</span>=<span className="hljs-value">"text/css"</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">link</span> <span className="hljs-attribute">href</span>=<span className="hljs-value">"https://assets.ctl.io/cyclops/1.4.0/css/cyclops.min.css"</span> <span className="hljs-attribute">rel</span>=<span className="hljs-value">"stylesheet"</span> <span className="hljs-attribute">type</span>=<span className="hljs-value">"text/css"</span> /&gt;</span>

              <span className="hljs-comment">&lt;!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --&gt;</span>
              <span className="hljs-comment">&lt;!-- WARNING: Respond.js doesn't work if you view the page via file:// --&gt;</span>
              <span className="hljs-comment">&lt;!--[if lt IE 9]&gt;
                &lt;script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"&gt;&lt;/script&gt;
                &lt;script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"&gt;&lt;/script&gt;
              &lt;![endif]--&gt;</span>
            <span className="hljs-tag">&lt;/<span className="hljs-title">head</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-title">body</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">h1</span>&gt;</span>Hello, world!<span className="hljs-tag">&lt;/<span className="hljs-title">h1</span>&gt;</span>

              <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://code.jquery.com/jquery-2.1.4.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://cdnjs.cloudflare.com/ajax/libs/knockout-validation/2.0.3/knockout.validation.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
              <span className="hljs-tag">&lt;<span className="hljs-title">script</span> <span className="hljs-attribute">src</span>=<span className="hljs-value">"https://assets.ctl.io/cyclops/1.4.0/scripts/cyclops.min.js"</span>&gt;</span><span className="undefined"></span><span className="hljs-tag">&lt;/<span className="hljs-title">script</span>&gt;</span>
              <span className="hljs-comment">&lt;!-- Include any additional scripts your service needs --&gt;</span>

            <span className="hljs-tag">&lt;/<span className="hljs-title">body</span>&gt;</span>
          <span className="hljs-tag">&lt;/<span className="hljs-title">html</span>&gt;</span>
          </code>
        </pre>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </main>
      </div>
    )
  }
}

export default Main