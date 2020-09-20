/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const translate = require("../../server/translate.js").translate;

const textContent = {
  codeExample: `
\`\`\`javascript
(function() {
  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var header = kintone.app.getHeaderMenuSpaceElement();

    var buttonSubmit = new Kuc.Button({
      text: 'Submit',
      type: 'submit'
    });
    buttonSubmit.addEventListener('click', function(event) {
      console.log(event);
    });

    var buttonAlert = new Kuc.Button({
      text: 'Alert',
      type: 'alert'
    });
    buttonAlert.addEventListener('click', function(event) {
      console.log(event);
    });

    header.appendChild(buttonSubmit);
    header.appendChild(buttonAlert);
  });
})();

\`\`\`
  `
};

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ""} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const versionUrl = versions => `${baseUrl}${langPart}${versions}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button buttonTop" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl("getting-started/quick-start.html")}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ""} = this.props;
    const {baseUrl} = siteConfig;

    const UseCase = () => (
      <Container
        padding={["bottom", "top"]}>
        <h2 align="center">Use Case</h2>
        <div className="usecase_sentense" align="center">
          <span>kintone UI Component は、kintone 一覧画面のヘッダーメニュー要素など取得できる要素、kintone プラグイン設定画面やカスタマイズビューに配置することで、kintone ライクな見た目を実現することができます。</span>
        </div>
        <div className="usecase_group">
          <h6>[ Button Component イメージ & サンプルコード ]</h6>
          <div className="usecase_image">
            <img src="img/usecase_button.png" />
          </div>
          <div className="usecase_code">
            <MarkdownBlock>{textContent.codeExample}</MarkdownBlock>
          </div>
        </div>
      </Container>
    );

    const Description = () => (
      <Container
        padding={["bottom", "top"]}>
        <div
          className="descriptionSection"
          style={{textAlign: "left"}}>
          <blockquote className="quoteTop">
            <p>
              <strong className="quoteTop_title">Support Policy</strong><br/><br/>
              kintone UI Component は、サイボウズ社が開発・提供している OSS です。<br/>
              ご質問や機能リクエストについては <a href="https://github.com/kintone/kintone-ui-component/issues/new/choose">GitHub の Issue</a> や <a href="https://developer.cybozu.io/hc/ja/community/topics">cybozu developer network の community</a> をご利用ください。<br/>
              OSS へのコントリビュートもお待ちしております。<br/><br/>
              また、テクニカルサポートを通じた仕様についてのお問い合わせにも対応しています。<br/>
              <a href="https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=1763&isCrawler=1#02">サポートへのお問い合わせ方法</a>をご確認の上、お問合せください。<br/><br/>
              ソースコードの変更、再配布および商用利用等は、ライセンスに従ってご利用可能です。<br/><br/>
              [ 弊社パートナー様向けサポート ]<br/>
              次のようにライブラリの仕様以外の内容についても、可能な限りサポートさせていただきます。<br/>
              相談内容によってはお受けできない場合があります。予めご了承ください。<br/>
              ・kintone UI Component の勉強会<br/>
              ・kintone UI Component の具体的な実装方法<br/><br/>
              こちらのメールアドレスまでお気軽にご相談ください。<br/>
              <img src="img/info.png" />
            </p>
          </blockquote>
        </div>
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <UseCase />
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
