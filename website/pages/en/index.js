/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const translate = require('../../server/translate.js').translate;

const textContent = {
  codeExample: `
\`\`\`javascript
(function() {
  'use strict';

  kintone.events.on([
    'app.record.create.show',
    'app.record.edit.show'
  ], function(event) {
    var space = kintone.app.record.getSpaceElement('space');
    var checkbox = new Kuc.Checkbox({
      label: 'Fruit',
      requiredIcon: true,
      items: [
        {
          label: 'orange',
          value: 'Orange'
        },
        {
          label: 'apple',
          value: 'Apple'
        }
      ],
      value: ['Orange'],
      itemLayout: 'horizontal',
      error: 'Error occurred!',
      className: 'options-class',
      id: 'options-id',
      visible: true,
      disabled: false,
      borderVisible: true,
    });
    space.appendChild(checkbox);
    checkbox.addEventListener('click', function(event) {
      console.log(event);
    });
  });
});
\`\`\`
  `
};

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
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
            <Button href={docUrl('getting-started/quick-start.html')}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <h2 align="center">Use Cases</h2>
        <div className="usecase_sentense" align="center">
          <span>kintone UI Component は、kintone プラグイン設定画面やカスタマイズビュー、kintone 一覧画面のヘッダーメニュー要素など取得できる要素に配置することで、kintone ライクな見た目を実現することができます。</span>
        </div>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
        <div className="usecase_code">
          <MarkdownBlock>{textContent.codeExample}</MarkdownBlock>
        </div>
        <div className="usecase_code">
          <MarkdownBlock>{textContent.codeExample}</MarkdownBlock>
        </div>
      </Container>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{textAlign: 'center'}}>
    //   </div>
    // );

    // const Components = () => (
    //   <div
    //     className="componentSection"
    //     style={{textAlign: 'center'}}>
    //     <h2 align="center">Components</h2>
    //     <div className="componentSection_components">
    //       <iframe src="https://kuc-sb.web.app/iframe.html?id=checkbox--base" title="checkbox image"></iframe>
    //       <iframe src="https://kuc-sb.web.app/iframe.html?id=button--base" title="button image"></iframe>
    //       <iframe src="https://kuc-sb.web.app/iframe.html?id=dropdown--base" title="dropdown image"></iframe>
    //       <iframe src="https://kuc-sb.web.app/iframe.html?id=multichoice--base" title="multichoice image"></iframe>
    //     </div>
    //   </div>
    // );

    const UseCases = () => (
      <Block id="usecase" layout="twoColumn">
        {[
          {
            // content: '',
            image: `${baseUrl}img/kuc_demo_edit.png`,
            imageAlign: 'bottom',
            // title: 'Use Case One',
          },
          {
            // content: '',
            image: `${baseUrl}img/kuc_demo_index.png`,
            imageAlign: 'bottom',
            // title: 'Use Case Two',
          }
        ]}
      </Block>
    );

    const Description = () => (
      <Container
        padding={['bottom', 'top']}>
        <div
          className="descriptionSection"
          style={{textAlign: 'center'}}>
          <blockquote className="quoteTop">
            <p>
              <strong className="quoteTop_title">Support Policy</strong><br/><br/>
              kintone UI Component は、テクニカルサポートを通じたお問い合わせに対応しています。<br/>
              <a href="https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=1763&isCrawler=1#02">サポートへのお問い合わせ方法</a>をご確認の上、お問い合わせください。<br/>
              ソースコードの変更、再配布および商用利用等は、ライセンスに従って利用可能です。
            </p>
          </blockquote>
        </div>
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Components /> */}
          <UseCases />
          {/* <FeatureCallout /> */}
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
