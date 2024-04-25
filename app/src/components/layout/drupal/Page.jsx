export default function Page({ page, isFront, node }) {
  return(
  <div className="layout-container">

    { (page.preHeader || page.header) &&
      <header className="layout-header" role="banner">
        <div className="container">
          { page.preHeader }
          { page.header }
        </div>
      </header>
    }

    { page.highlighted &&
      <div className="layout-highlighted">
        <div className="container">
          { page.highlighted }
        </div>
      </div>
    }

    { page.tabs &&
      <div className="layout-tabs">
        <div className="container">
          { page.tabs }
        </div>
      </div>
    }

    { page.bannerTop &&
      <div className="layout-banner-top">
        { page.bannerTop }
      </div>
    }

    { page.breadcrumbs &&
      <div className="layout-breadcrumbs">
        <div className="container">
          { page.breadcrumbs }
        </div>
      </div>
    }

    { !node && page.pageTitle &&
      <div className="layout-page-title">
        <div className={ (isFront ? 'is-front ' : '') + 'container' }>
          { page.pageTitle }
        </div>
      </div>
    }

    <main role="main" className="main container">
      <div className="layout-content">
        <a id="main-content" tabIndex="-1"></a>
        { page.content }
      </div>
      { page.sidebar &&
        <aside className="layout-sidebar" role="complementary">
          { page.sidebar }
        </aside>
      }
    </main>

    { page.contentBottom &&
      <div className="layout-content-bottom">
        { page.contentBottom }
      </div>
    }

    { page.footer &&
      <div className="layout-footer">
        <footer className="footer" role="contentinfo">
          <div className="container">
            { page.footer }
          </div>
        </footer>
      </div>
    }

    { page.bottom &&
      <div className="layout-bottom">
        <div className="container">
          { page.bottom }
        </div>
      </div>
    }

  </div>
)}
