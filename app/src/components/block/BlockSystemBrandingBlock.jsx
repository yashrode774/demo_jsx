import Block from './Block';

export default function BlockSystemBrandingBlock(props) {
  const branding = (
    <div className="branding">
      {props.siteLogo && (
        <a href="/" rel="home" className="branding__site-logo">
          <img src={props.siteLogo} alt="Home" />
        </a>
      )}
      {props.siteName && (
        <div className="branding__site-name">
          <a href="/" rel="home">{props.siteName}</a>
        </div>
      )}
      {props.siteSlogan && (
        <div className="branding__site-slogan">{props.siteSlogan}</div>
      )}
    </div>
  );

  return (
    <Block {...props} content={branding}></Block>
  )
}
