<?php

namespace Drupal\demo_jsx\Controller;

use Drupal\Core\Controller\ControllerBase;

class ReactComponentController extends ControllerBase {

  public function renderReactUI() {
    // Attach the necessary library for React component.
    $build['#attached']['library'][] = 'demo_jsx/demo_jsx.react';

    // Set up the markup for the React component.
    // This needs to be wrapped in hyperscriptify.
    $build['string'] = [
      '#type' => 'inline_template',
      '#template' => '<template hyperscriptify><div id="react-root">Try to render component?</div></template>',
    ];
    // This is temporary, use it to confirm the module can override the theme template.
    // Once this works
    //  - Replace this with a container.template-info.json
    //  - Once it's container.template-info.json we need to move it to inside <template hyperscriptify></template>
    //  -
    //  -
    $build['template_overriding'] = [
      '#type' => 'container',
      '#prefix' => '<template hyperscriptify>',
      '#suffix' => '</template>',
      'insider' => ['#markup' => 'inside the container'],
      'form_input' => ['#type' => 'textfield', '#title' => 'A text field']
    ];
    return $build;
  }
}
