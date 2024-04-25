import Page from './components/layout/drupal/Page';
import Breadcrumb from './components/navigation/drupal/Breadcrumb';
import ViewsViewGrid from './components/views/drupal/ViewsViewGrid';
import NodeCard from './components/content/drupal/NodeCard';
import MyButton from './components/form/MyButton/MyButton';
import MyCard from './components/content/MyCard';
import Field from './components/field/Field';
import Block from './components/block/Block';
import BlockLocalTasksBlock
  from './components/block/BlockLocalTasksBlock';
import BlockSystemBrandingBlock
  from './components/block/BlockSystemBrandingBlock.jsx';
import BlockBundleDisclaimerBlock
  from './components/block/BlockBundleDisclaimerBlock';
import BlockViewsBlockRecipeCollectionsBlock
  from './components/block/BlockViewsBlockRecipeCollectionsBlock';
import BlockBundleBannerBlock from './components/block/BlockBundleBannerBlock';
import BlockFooterPromoBlock from './components/block/BlockFooterPromoBlock';
import BlockLocalActionsBlock from './components/block/BlockLocalActionsBlock';
import Input from "./components/form/Input";
import Textarea from "./components/form/Textarea";
import Form from "./components/form/Form";
import FormElementLabel from "./components/form/FormElementLabel";
import FormElement from "./components/form/FormElement";
import MenuMain from "./components/navigation/drupal/MenuMain";
import BlockUmamiMainMenu
  from './components/navigation/drupal/BlockUmamiMainMenu';
import CounterApp from './components/container/Container';

const components = {
  // Drupal Single Directory Components.
  'my-button': MyButton,
  'my-card': MyCard,
  // Drupal templates.
  'drupal-page': Page,
  'drupal-breadcrumb': Breadcrumb,
  'drupal-views-view-grid': ViewsViewGrid,
  'drupal-node--card': NodeCard,
  'drupal-node--card-common': NodeCard,
  'drupal-node--card-common-alt': NodeCard,
  'drupal-field': Field,
  'drupal-field--text': Field,
  'drupal-field--text-long': Field,
  'drupal-field--text-with-summary': Field,
  'drupal-block': Block,
  'drupal-block--local-tasks-block': BlockLocalTasksBlock,
  'drupal-block--local-actions-block': BlockLocalActionsBlock,
  'drupal-block--system-branding-block': BlockSystemBrandingBlock,
  'drupal-block--bundle--disclaimer-block': BlockBundleDisclaimerBlock,
  'drupal-block--views-block--recipe-collections-block': BlockViewsBlockRecipeCollectionsBlock,
  'drupal-block--bundle--banner-block': BlockBundleBannerBlock,
  'drupal-block--bundle--footer-promo-block': BlockFooterPromoBlock,
  'drupal-input': Input,
  'drupal-textarea': Textarea,
  'drupal-form': Form,
  'drupal-form-element': FormElement,
  'drupal-form-element-label': FormElementLabel,
  'drupal-menu--main': MenuMain,
  'drupal-block--umami-jsx-main-menu': BlockUmamiMainMenu,
  'drupal-container' : CounterApp,
};

export default components;
